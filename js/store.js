// Datenschicht: Firebase Realtime Database oder lokaler Demo-Modus (localStorage).
import { FIREBASE_CONFIG, DB_PATH } from './config.js';

const FB = 'https://www.gstatic.com/firebasejs/10.12.2/';
const LS_KEY = 'sp_overlay_state_v1';

const params = new URLSearchParams(location.search);
export const isLocal = !FIREBASE_CONFIG.apiKey || params.has('demo');

// Geheimer Raum-Schlüssel statt Login: Wer den Schlüssel nicht kennt, kann die Daten
// weder lesen noch ändern. Er steht nur in den Links (nicht im öffentlichen Repo).
const KEY_RE = /^[A-Za-z0-9_-]{16,64}$/;
export function roomKey() {
  const k = params.get('key');
  if (k && KEY_RE.test(k)) { try { localStorage.setItem('sp_overlay_key', k); } catch {} return k; }
  return null;
}
export function rememberedKey() {
  try { const k = localStorage.getItem('sp_overlay_key'); return k && KEY_RE.test(k) ? k : null; } catch { return null; }
}
export function newKey() {
  const a = new Uint8Array(18); crypto.getRandomValues(a);
  return Array.from(a, (b) => 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789'[b % 56]).join('');
}

let fb = null;          // geladene Firebase-Module + Instanzen
let offset = 0;         // Server-Zeit-Offset (gleicht Uhren beider PCs ab)
const listeners = new Set();
let localState = {};

export const now = () => Date.now() + offset;

export async function init({ onConnection } = {}) {
  if (isLocal) {
    localState = readLocal();
    window.addEventListener('storage', (e) => {
      if (e.key === LS_KEY) { localState = readLocal(); emit(); }
    });
    onConnection && onConnection(true);
    return;
  }
  const key = roomKey();
  if (!key) throw new Error('NO_KEY');
  const [appM, dbM] = await Promise.all([
    import(FB + 'firebase-app.js'),
    import(FB + 'firebase-database.js'),
  ]);
  const app = appM.initializeApp(FIREBASE_CONFIG);
  const db = dbM.getDatabase(app);
  fb = { ...dbM, db, root: dbM.ref(db, `${DB_PATH}/${key}`) };
  dbM.onValue(dbM.ref(db, '.info/serverTimeOffset'), (s) => { offset = s.val() || 0; });
  dbM.onValue(dbM.ref(db, '.info/connected'), (s) => onConnection && onConnection(!!s.val()));
  dbM.onValue(fb.root, (s) => { localState = s.val() || {}; emit(); });
}

export function subscribe(cb) {
  listeners.add(cb);
  if (isLocal || ready) cb(localState);
  return () => listeners.delete(cb);
}

export const getState = () => localState;

// updates: { 'pfad/zum/feld': wert | null }
export async function write(updates) {
  if (isLocal) {
    for (const [path, val] of Object.entries(updates)) setPath(localState, path, val);
    localStorage.setItem(LS_KEY, JSON.stringify(localState));
    emit();
    return;
  }
  await fb.update(fb.root, updates);
}

export async function add(path, delta) {
  if (isLocal) {
    const cur = Number(getPath(localState, path)) || 0;
    return write({ [path]: Math.max(0, cur + delta) });
  }
  const cur = Number(getPath(localState, path)) || 0;
  if (cur + delta < 0) return write({ [path]: 0 });
  return fb.update(fb.root, { [path]: fb.increment(delta) });
}

export async function replaceAll(obj) {
  if (isLocal) {
    localState = obj || {};
    localStorage.setItem(LS_KEY, JSON.stringify(localState));
    emit();
    return;
  }
  await fb.set(fb.root, obj || {});
}

// ---- Helfer ----
let ready = false;
function emit() { ready = true; for (const l of listeners) l(localState); }
function readLocal() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch { return {}; }
}
export function getPath(obj, path) {
  return path.split('/').reduce((o, k) => (o == null ? undefined : o[k]), obj);
}
function setPath(obj, path, val) {
  const keys = path.split('/');
  let o = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (typeof o[keys[i]] !== 'object' || o[keys[i]] === null) o[keys[i]] = {};
    o = o[keys[i]];
  }
  const last = keys[keys.length - 1];
  if (val === null || val === undefined) delete o[last]; else o[last] = val;
}

// ---- Timer: { acc: ms, since: ts|null } ----
export function timerValue(t) {
  if (!t) return 0;
  return (t.acc || 0) + (t.since ? Math.max(0, now() - t.since) : 0);
}
export function fmtTime(ms) {
  const s = Math.floor(ms / 1000);
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  return `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

// Standard-Anzeigeeinstellungen
export const DEFAULT_UI = {
  pos: 'tl', scale: 1,
  show: { timer: true, session: true, progress: true, deaths: true, farts: true, coll: true, mission: true, hero: true, last: true },
  achList: 'off',      // off | open | done | all
  collList: 'off',     // off | cycle | <collectible key>
  popup: true, sound: true,
};
export function ui(state) {
  const u = state.ui || {};
  return { ...DEFAULT_UI, ...u, show: { ...DEFAULT_UI.show, ...(u.show || {}) } };
}

// Spieldaten: South Park: The Fractured But Whole (Steam App 488790)
// Erfolge: 35 laut Steam-Community-Seite, deutsche Namen/Beschreibungen verbatim von Steam (l=german).
// Abgeglichen mit Steam (26 sichtbare), Acheev und PowerPyx (alle 35).
// missable = verpassbar (laut PowerPyx + Acheev nur "The Token Experience").

export const GAME = {
  title: 'The Fractured But Whole',
  steamAppId: 488790,
};

const RAW = [
  // [englischer Name (ID-Basis), deutscher Name, deutsche Beschreibung, extra]
  ['Potty Trained', 'Stubenrein', 'Benutze eine Toilette und erreiche die höchste Meisterschaftsstufe.'],
  ['Fashionista', 'Fashionista', 'Finde zehn Kostümteile.'],
  ['Big Knocker', 'Großer Rückstoß', 'Töte einen Gegner, indem du einen anderen Gegner in ihn hineinstößt.'],
  ['#followbacks', '#zurückgefolgt', 'Folge 10 deiner Follower aus South Park.'],
  ['Class Warfare', 'Klassenkampf', 'Rüste Kräfte von zwei verschiedenen Klassen aus.'],
  ['Toxic Environment', 'Feindliche Umgebung', 'Erbeute 100 Biogefahr-Gegenstände.'],
  ['Cosplay Curious', 'Cosplayneugierig', 'Trage gleichzeitig Teile von drei unterschiedlichen Kostümen.'],
  ['Diabetes Defender', 'Diabetes-Retter', 'Schütze ein hilfloses Kind vor einem betrunkenen Verrückten.'],
  ['Pasta of Prophets', 'Pasta der Propheten', 'Stelle ein Makkaronibild für Moses her.'],
  ['Titleist', 'Titelite', 'Erreiche den höchsten Rang eines Titels im Charakterbogen.'],
  ['Junksmith', 'Schrottschrauber', 'Benutze zehn unterschiedliche Rezepte.'],
  ['Call in a Favor', 'Du schuldest mir doch noch was …', 'Führe eine Beschwörung durch.'],
  ['Chaos Controlled', 'Kontrolliertes Chaos', 'Durchkreuze die Pläne von Professor Chaos.'],
  ['Epic Artificer', 'Epischer Handwerker', 'Stelle ein Artefakt mit einem Machtwert von 75 oder mehr her.'],
  ['Character Sheet Elite', 'Charakterbogen-Elite', 'Erreiche den höchsten Rang bei 5 Titeln im Charakterbogen.'],
  ['Death Dodger', 'Was sagen wir zum Tod?', 'Lass einen Verbündeten einen Kampf, in dem er 2x seine max. Gesundheit an Schaden nimmt, überleben.'],
  ['Deep Seated Power', 'Tiefsitzende Macht', 'Erreiche 600 Macht, indem du Artefakte ausrüstest.'],
  ['Master Manipulator', 'Meister der Manipulation', 'Bezaubere oder verwirre einen Gegner so, dass er einen anderen Gegner ausschaltet.'],
  ['An End to Racism', 'Das Ende des Rassismus', 'Beende den Rassismus in South Park.'],
  ['Glitch of Death', 'Glitch des Todes', 'Lasse einen Gegner durch einen Statuseffekt am Ende eines Zeitfurz-Glitchs sterben.'],
  ['Invasive Tumor Removal', 'Invasive Tumorentfernung', 'Besiege den mutierten Cousin Kyle.'],
  ['Through the Bowels of Time', 'Durch den Darm der Zeit', 'Überlebe die Fürze von gestern und morgen.'],
  ['Divine Wind', 'Göttlicher Wind', 'Erreiche durch Furzkour die Dächer der Lofts von SoDoSoPa und verlasse sie wieder.'],
  ['Last Kid Standing', 'Der letzte Überlebende …', 'Gewinne einen Kampf, während drei Verbündete kampfunfähig sind.'],
  ['Stop, Drop and Roll', 'Halt, Stopp, jetzt bin ich dran!', 'Gewinne einen Kampf, indem du mit einer Zeitfurz-Pause alle Gegner auf einmal ausschaltest.'],
  ['Friend Finder', 'Wir sind doch Freunde, oder?', 'Erhalte alle Beschwörungen und schalte sie frei.'],
  ['Master Classed', 'Meisterklasse', 'Rüste Kräfte von vier verschiedenen Klassen aus.'],
  ['Fully Bloated', 'Voll aufgebläht', 'Schalte alle Kampf-Zeitfürze frei.'],
  ['Corporate Wolf', 'Konzernwolf', 'Erreiche die höchste ökonomische Stufe auf deinem Charakterbogen.'],
  ['Orgy of Power', 'Orgie der Macht', 'Benutze die Ultimativkräfte von allen Verbündeten einmal – außer der des Coon.'],
  ['Farts over Freckles', 'Fürze: Stärker als Sprossen', 'Lege dich mit Morgan Freeman an und besiege ihn.'],
  ['Boy Love Aficionado', 'Freund der Jungenliebe', 'Finde alle Yaoi-Kunstwerke.'],
  ['Pick Yourself up by Your Bootstraps', 'An den Haaren herausgezogen', 'Sammle alle Gegenstände im Obdachlosenlager in SoDoSoPa ein.'],
  ["Crappin' Forte", 'Kacken ist meine Stärke', 'Benutze alle Toiletten in South Park und erreiche bei jeder die höchste Meisterschaftsstufe.'],
  ['The Token Experience', 'Das Token-Erlebnis', 'Erstelle einen schwarzen Charakter und schließe das Spiel auf dem Schwierigkeitsgrad „Superhirn“ ab.', { missable: true }],
];

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const ACHIEVEMENTS = RAW.map(([en, name, desc, extra]) => ({
  id: slug(en),   // ID bleibt englisch, damit gespeicherte Stände gültig bleiben
  en,
  name,
  desc,
  missable: !!(extra && extra.missable),
}));

// Sammelobjekte (Basisspiel). Quellen: PowerPyx (Yaoi 40, Toiletten 21, Summons),
// RPG Site / Gameranx / Kosgames (Memberberries 14). Keines davon ist verpassbar.
export const COLLECTIBLES = [
  { key: 'yaoi', label: 'Yaoi-Kunst', short: 'Yaoi', icon: '🎨', total: 40, achievement: 'boy-love-aficionado' },
  { key: 'memberberries', label: 'Memberberries', short: 'Berries', icon: '🍒', total: 14 },
  { key: 'toilets', label: 'Toiletten', short: 'Klos', icon: '🚽', total: 21, achievement: 'crappin-forte' },
  { key: 'summons', label: 'Beschwörungen', short: 'Summons', icon: '📣', total: 4, achievement: 'friend-finder',
    names: ['Moses', 'Classi', 'Ned & Jimbo', 'Gerald'] },
];

export const itemLabel = (c, i) => (c.names ? c.names[i] : '#' + (i + 1));

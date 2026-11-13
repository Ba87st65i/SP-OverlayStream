// Firebase-Konfiguration – aus der Firebase Console kopieren
// (Projekteinstellungen → Allgemein → Deine Apps → Web-App → SDK-Konfiguration).
// Solange apiKey leer ist, läuft alles im lokalen Demo-Modus (nur dieser Browser).
export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCSdiiQwG7JVyP7VPqucu9TlrD8aCM_a0k',
  authDomain: 'south-park-overlay-stream.firebaseapp.com',
  databaseURL: 'https://south-park-overlay-stream-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'south-park-overlay-stream',
  appId: '1:1048153872641:web:f0eb38141b3eca39b7e300',
};

// Pfad in der Realtime Database. Darunter liegt der Zustand unter dem geheimen
// Raum-Schlüssel aus dem Link (?key=...), also rooms/<schlüssel>.
export const DB_PATH = 'rooms';

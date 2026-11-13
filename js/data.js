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

// Quests (Basisspiel, ohne DLC). Liste + Reihenfolge: South Park Public Library (Fandom),
// Navigationsvorlage "FBW Missions" (EN) und Missionsseite des deutschen Wikis.
// Zählung abgeglichen mit GamePressure (15 Neben-Einträge = 12 Nebenmissionen + 3 Schnitzeljagden).
// Deutsche Namen der Schnitzeljagden sind nirgends dokumentiert → englischer Originaltitel.
const Q = (list) => list.map(([en, de]) => ({ id: slug(en), en, name: de || en }));

export const QUESTS = {
  main: Q([
    ['The Battle for Kupa Keep', 'Der Kampf um Kastell Kupa'],
    ['Origins', 'Wie alles begann'],
    ['Coonstagram', 'Coonstagram'],
    ['Alternate Universes Collide', 'Kollision alternativer Universen'],
    ['The Chains of Super Craig', 'Die Ketten von Super-Craig'],
    ['Birth of a Coon Friend', 'Geburt eines Coon-Freunds'],
    ['Rise of the Fourthies', 'Aufstand der Viertklässler'],
    ['Gotta Go Fast (Travel)', "Jetzt geht's Schnell(-Reisen)"],
    ['Mosquito in a Honey Pot', 'Mosquito im Honigtopf'],
    ['A Touch of Faith', 'Etwas Glaube'],
    ['The Talk', 'Das Gespräch'],
    ['The Burrito Whisperer', 'Der Burrito-Flüsterer'],
    ['Origins 2: New Beginnings', 'Wie alles begann 2: Neuanfang'],
    ['Civil War', 'Civil War'],
    ['Homeward Bound', 'Ab nach Hause'],
    ['The Bowels of the Beast', 'Die Eingeweide der Bestie'],
    ['CLASSIfied', 'CLASSIfiziert'],
    ['Alternate Universes Collide Again', 'Kollision alternativer Universen Vol. 2'],
    ['Medicinal Fried Fiasco', 'Medizinisches Bratfiasko'],
    ['Microaggression Academy', 'Mikroaggressions-Akademie'],
    ["Operation: Just 'Cause", 'Operation: Recht So'],
    ['The Talk 2: The Gendering', 'Das Gespräch 2: Die Geschlechtswahl'],
    ['Operation: Blind Justice', 'Operation: Blinde Gerechtigkeit'],
    ['Origins 3: The Visitor', 'Wie alles begann 3: Der Besucher'],
    ["Civil War 2: Playtime's Over", 'Civil War 2: Hart auf Hart'],
    ['Race Academy: First Class', 'Rassenakademie: Erste Klasse'],
    ['We Need a Tool', 'Wir brauchen ein Werkzeug'],
    ['Under Covers', 'Unter der Decke'],
    ['The Hundred Hands of Chaos', 'Die Hundert Hände des Chaos'],
    ['The Chaos Gambit', 'Das Chaos-Gambit'],
    ['The Invitation', 'Die Einladung'],
    ['The Samaritan Agenda', 'Das Samariter-Programm'],
    ['Origins 4: The Omega Prologue', 'Wie alles begann 4: Omega-Prolog'],
    ['Heading Home', 'Nach Hause Gehen'],
    ['Nocturnal Submission', 'Nächtliche Bescheidenheit'],
    ['The Thin White Line', 'Die dünne weiße Linie'],
    ['Freedom Calling', 'Ruf der Freiheit'],
    ['To Catch a Coon', 'Coon-Jagd'],
    ['The Many Asses of Dr. Mephesto', 'Die vielen Ärsche des Dr. Mephesto'],
    ['Farts of Future Past', 'Fürze aus Zukunft und Vergangenheit'],
  ]),
  side: Q([
    ['A Randy Mystery', 'Ratloser Randy'],
    ['Raisins on a Rampage', 'Raisins drehen durch'],
    ['For Nippopolis', 'Für Nippopolis'],
    ['Peppermint Hippo Lost & Found', 'Peppermint-Hippo-Fundsachen'],
    ['Ghost Reconciler', 'Geisterabstimmer'],
    ['Vigilante Marketing', 'Verbrechensbekämpfer-Marketing'],
    ['(You Can) Call on Me', 'Du kannst mich anrufen'],
    ['Therapy Wars', 'Therapiekriege'],
    ['The Big Beatdown', 'Die große Prügelei'],
    ['Always Bet on Chaos', 'Setz immer auf Chaos'],
    ['A Perky Predicament', 'Ein pikantes Problem'],
    ['Touch the Sky', 'Berühre den Himmel'],
    ['Scavenger Hunt: The Yaoi Project', 'Schnitzeljagd: The Yaoi Project'],
    ['Scavenger Hunt: The Headshot Job', 'Schnitzeljagd: The Headshot Job'],
    ["Scavenger Hunt: Big Gay Al's Big Gay Cats", "Schnitzeljagd: Big Gay Al's Big Gay Cats"],
  ]),
};
export const QUEST_GROUPS = [
  { key: 'main', label: 'Story-Missionen', short: 'Story', icon: '📖' },
  { key: 'side', label: 'Nebenquests', short: 'Neben', icon: '🧩' },
];

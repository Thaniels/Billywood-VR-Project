// ============================================================
//  BOULDOR — KAARTDATA
//  ------------------------------------------------------------
//  Deze gegevens komen uit "Bouldor .xlsx" (testset, werk in
//  uitvoering). Pas de lijsten hieronder aan als de kaarten
//  veranderen; de rest van de site past zich automatisch aan.
//
//  Elke kaartrij ziet er zo uit:
//    ["Kleur", aantal route graad-1, aantal route graad-2, ..., puntenwaarde]
//  De graden die bij elk tier horen staan in TIER_GRADES.
// ============================================================

// Welke routes (graden) je nodig hebt per tier
const TIER_GRADES = {
  1: ["3", "4"],
  2: ["3", "4", "5A", "5B"],
  3: ["5A", "5B", "5C", "6A"],
  4: ["5C", "6A", "6B", "6C"],
  5: ["6C", "7A", "7B"],
};

// ---------------- TIER 1 (routes 3 - 4) ----------------
// 36 kaarten
const TIER_1_KAARTEN = [
  ["Yellow", 1, 2, 0],
  ["Pink", 2, 1, 0],
  ["Orange", 2, 2, 0],
  ["Blue", 1, 3, 10],
  ["Purple", 1, 1, 0],
  ["Red", 0, 2, 0],
  ["Green", 0, 3, 10],
  ["White", 3, 1, 10],
  ["Black", 0, 4, 10],
  ["Yellow", 4, 0, 10],
  ["Pink", 1, 2, 0],
  ["Orange", 2, 0, 0],
  ["Blue", 2, 1, 0],
  ["Purple", 2, 0, 0],
  ["Red", 1, 3, 10],
  ["Green", 0, 3, 10],
  ["White", 3, 0, 0],
  ["Black", 3, 1, 10],
  ["Yellow", 1, 1, 0],
  ["Pink", 0, 4, 10],
  ["Orange", 0, 2, 0],
  ["Blue", 3, 0, 0],
  ["Purple", 4, 0, 10],
  ["Red", 2, 2, 10],
  ["Green", 2, 0, 0],
  ["White", 4, 0, 10],
  ["Black", 3, 0, 0],
  ["Yellow", 1, 2, 10],
  ["Pink", 1, 1, 0],
  ["Orange", 1, 3, 10],
  ["Blue", 2, 1, 0],
  ["Purple", 2, 2, 10],
  ["Red", 3, 1, 10],
  ["Green", 0, 2, 0],
  ["White", 0, 3, 10],
  ["Black", 0, 4, 10],
];

// ---------------- TIER 2 (routes 3 - 5B) ----------------
// 27 kaarten. Let op: in de huidige testset (XLSX) is de
// holdkleur van dit tier nog niet ingevuld en staan er
// graad-waarden (3, 4, 5A, ...) als kleur. De site geeft
// die kaarten een grijze hold-stip totdat je ze vervangt
// door echte kleuren (Yellow, Pink, ...).
const TIER_2_KAARTEN = [
  ["3", 2, 2, 2, 0, 10],
  ["4", 1, 1, 3, 0, 10],
  ["5A", 0, 2, 3, 0, 10],
  ["5B", 0, 2, 3, 0, 10],
  ["5C", 2, 0, 1, 1, 10],
  ["6A", 1, 2, 2, 1, 10],
  ["6B", 2, 0, 0, 2, 10],
  ["6C", 3, 1, 1, 1, 10],
  ["7A", 1, 1, 2, 1, 10],
  ["3", 0, 2, 1, 2, 20],
  ["4", 1, 2, 3, 3, 20],
  ["5A", 1, 1, 2, 1, 20],
  ["5B", 0, 1, 2, 2, 20],
  ["5C", 0, 0, 2, 2, 20],
  ["6A", 0, 0, 3, 2, 20],
  ["6B", 0, 0, 0, 4, 20],
  ["6C", 3, 1, 0, 2, 20],
  ["7A", 0, 1, 1, 3, 20],
  ["3", 2, 0, 2, 2, 20],
  ["4", 0, 0, 0, 3, 20],
  ["5A", 1, 1, 1, 2, 10],
  ["5B", 2, 0, 0, 3, 10],
  ["5C", 0, 3, 2, 0, 10],
  ["6A", 0, 0, 3, 1, 10],
  ["6B", 0, 0, 0, 2, 10],
  ["6C", 0, 2, 1, 2, 10],
  ["7A", 2, 0, 3, 0, 10],
];

// ---------------- TIER 3 (routes 5A - 6A) ----------------
// 18 kaarten
const TIER_3_KAARTEN = [
  ["Yellow", 1, 1, 2, 1, 20],
  ["Pink", 0, 1, 2, 2, 20],
  ["Orange", 1, 2, 2, 1, 20],
  ["Blue", 2, 2, 2, 0, 20],
  ["Purple", 2, 1, 0, 3, 30],
  ["Red", 0, 2, 2, 2, 30],
  ["Green", 0, 1, 1, 2, 20],
  ["White", 0, 2, 3, 1, 30],
  ["Black", 0, 0, 2, 2, 20],
  ["Yellow", 1, 1, 2, 1, 20],
  ["Pink", 0, 2, 3, 0, 20],
  ["Orange", 0, 3, 0, 1, 20],
  ["Blue", 0, 0, 4, 0, 20],
  ["Purple", 0, 4, 1, 0, 20],
  ["Red", 0, 0, 1, 3, 30],
  ["Green", 2, 0, 0, 3, 30],
  ["White", 0, 2, 2, 1, 20],
  ["Black", 0, 0, 0, 4, 30],
];

// ---------------- TIER 4 (routes 5C - 6C) ----------------
// 18 kaarten
const TIER_4_KAARTEN = [
  ["Yellow", 2, 2, 1, 0, 30],
  ["Pink", 0, 2, 0, 1, 30],
  ["Orange", 2, 0, 2, 0, 30],
  ["Blue", 0, 1, 1, 1, 30],
  ["Purple", 0, 0, 1, 2, 40],
  ["Red", 0, 2, 0, 2, 40],
  ["Green", 0, 1, 2, 0, 30],
  ["White", 0, 0, 2, 1, 30],
  ["Black", 1, 3, 0, 0, 30],
  ["Yellow", 2, 0, 0, 1, 30],
  ["Pink", 0, 0, 0, 3, 40],
  ["Orange", 0, 0, 2, 2, 40],
  ["Blue", 1, 1, 0, 1, 30],
  ["Purple", 2, 1, 2, 0, 30],
  ["Red", 0, 4, 1, 0, 30],
  ["Green", 0, 0, 4, 0, 40],
  ["White", 0, 0, 0, 4, 40],
  ["Black", 3, 0, 0, 1, 30],
];

// ---------------- TIER 5 (routes 6C - 7B) ----------------
// 18 kaarten (speel je met Tier 5, dan gaat Tier 1 uit het spel)
const TIER_5_KAARTEN = [
  ["Yellow", 2, 1, 0, 40],
  ["Pink", 1, 1, 0, 40],
  ["Orange", 1, 2, 0, 40],
  ["Blue", 1, 0, 1, 40],
  ["Purple", 1, 1, 1, 50],
  ["Red", 2, 0, 1, 50],
  ["Green", 0, 2, 0, 40],
  ["White", 3, 0, 0, 40],
  ["Black", 0, 0, 1, 40],
  ["Yellow", 1, 1, 0, 40],
  ["Pink", 1, 0, 2, 50],
  ["Orange", 1, 3, 0, 50],
  ["Blue", 1, 2, 0, 40],
  ["Purple", 0, 1, 2, 50],
  ["Red", 2, 1, 0, 40],
  ["Green", 2, 2, 0, 40],
  ["White", 2, 1, 1, 50],
  ["Black", 1, 0, 1, 40],
];

// ---------------- EDELEN ----------------
// De eisen staan in de Nobles-tab van de XLSX.
// Elke edele is 30 punten waard.
const EDELEN = [
  { id: "E1", nl: "De Strateeg", en: "The Strategist", eisen: { Yellow: 3, Red: 3, Green: 3 } },
  { id: "E2", nl: "De Avonturier", en: "The Adventurer", eisen: { Pink: 2, Orange: 2, Blue: 2, White: 2 } },
  { id: "E3", nl: "De Visionair", en: "The Visionary", eisen: { Pink: 3, Purple: 3, Black: 3 } },
  { id: "E4", nl: "De Technicus", en: "The Technician", eisen: { Orange: 4, Blue: 3, Red: 2 } },
  { id: "E5", nl: "De Tacticus", en: "The Tactician", eisen: { Yellow: 2, Red: 2, Black: 4 } },
  { id: "E6", nl: "De Meester", en: "The Master", eisen: { Yellow: 4, Green: 2, White: 2 } },
  { id: "E7", nl: "De Pionier", en: "The Pioneer", eisen: { Blue: 3, Purple: 3, Red: 3 } },
  { id: "E8", nl: "De Baanbreker", en: "The Trailblazer", eisen: { Pink: 2, Orange: 3, Black: 3 } },
  { id: "E9", nl: "De Innovator", en: "The Innovator", eisen: { Blue: 3, Green: 2, White: 3 } },
];

// ---------------- KLEUREN ----------------
// De kleuren van de holds op de kaarten (apart van de graden!).
const KLEUR_HEX = {
  Yellow: "#facc15",
  Pink: "#ec4899",
  Orange: "#f97316",
  Blue: "#3b82f6",
  Purple: "#a855f7",
  Red: "#ef4444",
  Green: "#22c55e",
  White: "#e2e8f0",
  Black: "#334155",
};

// ---------------- TIER-BONUSSEN ----------------
// Hoeveel kaarten van een tier je nodig hebt voor bonuspunten.
// Bijv. Tier 1: 3 kaarten = +5 punten, 6 kaarten = +10 punten.
const BONUS_PER_TIER = {
  1: [[3, 5], [6, 10]],
  2: [[4, 10], [8, 15]],
  3: [[5, 15], [10, 20]],
  4: [[5, 20], [10, 25]],
};

// ---------------- INTERN ----------------
// Hieronder wordt de kaartenlijst met ids gebouwd (T1-01, T1-02, ...).
// Dit hoef je normaal niet aan te passen.

function bouwKaarten(tierNr, rijen) {
  const graden = TIER_GRADES[tierNr];
  return rijen.map(function (rij, i) {
    const kleur = rij[0];
    const punten = rij[rij.length - 1];
    const aantallen = rij.slice(1, rij.length - 1);
    const routes = {};
    graden.forEach(function (graad, gi) {
      if (aantallen[gi] > 0) routes[graad] = aantallen[gi];
    });
    return {
      id: "T" + tierNr + "-" + String(i + 1).padStart(2, "0"),
      tier: tierNr,
      kleur: kleur,
      punten: punten,
      routes: routes,
    };
  });
}

const KAARTEN = [].concat(
  bouwKaarten(1, TIER_1_KAARTEN),
  bouwKaarten(2, TIER_2_KAARTEN),
  bouwKaarten(3, TIER_3_KAARTEN),
  bouwKaarten(4, TIER_4_KAARTEN),
  bouwKaarten(5, TIER_5_KAARTEN)
);

// Snel zoeken: KAART_PER_ID["T2-14"]
const KAART_PER_ID = {};
KAARTEN.forEach(function (k) {
  KAART_PER_ID[k.id] = k;
});

// Wat er in de QR-code op een kaart staat, bijv. "bouldor:card:T1-04"
const QR_PREFIX = "bouldor:card:";

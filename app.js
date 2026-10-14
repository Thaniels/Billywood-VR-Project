// ============================================================
//  BOULDOR — APP-LOGICA (app.js)
//  ------------------------------------------------------------
//  Dit bestand bevat de "slimme" onderdelen van de site:
//  de spelregels, het opslaan van je voortgang en het
//  tekenen van alle schermen. Per onderdeel staat een kopje
//  met commentaar, zodat je weet waar je iets kunt aanpassen.
// ============================================================

/* ---------------- 1. TEKSTEN (NL / EN) ---------------- */
// Wil je een tekst aanpassen? Zoek hem hier op en pas hem aan.
const TEKST = {
  nl: {
    overzicht: "Overzicht",
    klim: "Klim",
    afleg: "Aflegstapel",
    log: "Logboek",
    kaarten: "Kaarten",
    punten: "punten",
    setupWelkom: "Welkom bij Bouldor",
    setupUitleg: " Vul je naam in en kies de instellingen van deze speelsessie.",
    jouwNaam: "Jouw naam",
    naamPlaceholder: "bijv. Nathan",
    puntendoel: "Puntendoel",
    tiersInSpel: "Tiers in het spel",
    edelenInSpel: "Edelen in het spel",
    edelenHint: "Kies welke edelen op tafel liggen. Je kunt ze opeisen zodra je genoeg kaarten van de gevraagde holdkleuren hebt.",
    startSpel: "Start spel",
    herstart: "Spel wissen en opnieuw beginnen",
    bevestigHerstart: "Alles wissen en opnieuw beginnen? Je voortgang gaat verloren.",
    geenKaartActief: "Je bent nu met geen enkele kaart bezig. Scan een kaart (of kies er een) om te gaan klimmen!",
    scanKaart: "📷  Scan kaart",
    kiesKaart: "Kies kaart uit lijst",
    huidigeKaart: "Huidige kaart",
    route: "Route",
    graad: "graad",
    top: "Top!",
    gezakt: "Gezakt",
    opgeven: "Kaart opgeven",
    bevestigOpgeven: "Deze kaart naar de aflegstapel leggen?",
    verzameldToast: "Kaart verzameld! 🎉",
    afgelegdToast: "Kaart naar de aflegstapel",
    onbekendeKaart: "Onbekende QR-code",
    tierNietInSpel: "Deze kaart hoort niet bij de tiers van dit spel",
    bevestigWissel: "Je bent al met een kaart bezig. Wisselen? De huidige kaart gaat dan verloren.",
    qrNietGeladen: "QR-bibliotheek niet geladen (geen internet?) — kies de kaart handmatig.",
    scanTitel: "Scan de QR-code op de kaart",
    scanHint: "Houd de camera op de QR-code die op de kaart geplakt is.",
    annuleren: "Annuleren",
    cameraFout: "De camera start niet. Geef de site toegang tot de camera in je browser.",
    totaal: "Totaal",
    kaartpunten: "Kaartpunten",
    tierbonus: "Tier-bonus",
    edelenLabel: "Edelen",
    kaartenPerTier: "Verzamelde kaarten per tier",
    holdsPerKleur: "Verzamelde holds per kleur",
    opeisen: "Opeisen (+30)",
    behaald: "Behaald ✓",
    leegAfleg: "Nog geen kaarten afgelegd.",
    leegLog: "Er is nog niks gelogd.",
    afgelegdReden: "afgelegd",
    opgegevenReden: "opgegeven",
    driemaalReden: "3× gezakt op één route",
    printQr: "🖨️  QR-blad voor dit tier",
    kaartTabHint: "Tik op een kaart om ermee te gaan klimmen.",
    begon: "Begonnen met",
    getopt: "Getopt:",
    startSpelLog: "Spel gestart",
    geenNaam: "Speler",
  },
  en: {
    overzicht: "Overview",
    klim: "Climb",
    afleg: "Discard pile",
    log: "Log",
    kaarten: "Cards",
    punten: "points",
    setupWelkom: "Welcome to Bouldor",
    setupUitleg: " Enter your name and pick the settings for this session.",
    jouwNaam: "Your name",
    naamPlaceholder: "e.g. Nathan",
    puntendoel: "Point goal",
    tiersInSpel: "Tiers in play",
    edelenInSpel: "Nobles in play",
    edelenHint: "Choose which nobles are on the table. You can claim one once you own enough cards of the required hold colours.",
    startSpel: "Start game",
    herstart: "Erase game and start over",
    bevestigHerstart: "Erase everything and start over? Your progress will be lost.",
    geenKaartActief: "You are not working on a card right now. Scan a card (or pick one) to start climbing!",
    scanKaart: "📷  Scan card",
    kiesKaart: "Pick card from list",
    huidigeKaart: "Current card",
    route: "Route",
    graad: "grade",
    top: "Top!",
    gezakt: "Failed",
    opgeven: "Give up card",
    bevestigOpgeven: "Discard this card?",
    verzameldToast: "Card collected! 🎉",
    afgelegdToast: "Card moved to the discard pile",
    onbekendeKaart: "Unknown QR code",
    tierNietInSpel: "This card's tier is not part of this game",
    bevestigWissel: "You are already working on a card. Switch? The current card will be lost.",
    qrNietGeladen: "QR library not loaded (offline?) — pick the card manually.",
    scanTitel: "Scan the QR code on the card",
    scanHint: "Point the camera at the QR code stuck on the card.",
    annuleren: "Cancel",
    cameraFout: "The camera won't start. Allow camera access in your browser.",
    totaal: "Total",
    kaartpunten: "Card points",
    tierbonus: "Tier bonus",
    edelenLabel: "Nobles",
    kaartenPerTier: "Collected cards per tier",
    holdsPerKleur: "Collected holds per colour",
    opeisen: "Claim (+30)",
    behaald: "Claimed ✓",
    leegAfleg: "No cards discarded yet.",
    leegLog: "Nothing logged yet.",
    afgelegdReden: "discarded",
    opgegevenReden: "given up",
    driemaalReden: "failed 3× on one route",
    printQr: "🖨️  Print QR sheet for this tier",
    kaartTabHint: "Tap a card to start climbing it.",
    begon: "Started",
    getopt: "Topped:",
    startSpelLog: "Game started",
    geenNaam: "Player",
  },
};

// Nederlandse namen voor de holdkleuren (in data.js heten ze Engels)
const KLEUR_NL = {
  Yellow: "Geel",
  Pink: "Roze",
  Orange: "Oranje",
  Blue: "Blauw",
  Purple: "Paars",
  Red: "Rood",
  Green: "Groen",
  White: "Wit",
  Black: "Zwart",
};

function t(sleutel) {
  return (TEKST[staat.taal] && TEKST[staat.taal][sleutel]) || sleutel;
}
function kleurNaam(kleur) {
  return staat.taal === "nl" ? KLEUR_NL[kleur] || kleur : kleur;
}
function edeleNaam(edele) {
  return staat.taal === "nl" ? edele.nl : edele.en;
}
function esc(waarde) {
  return String(waarde).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

// Kleur van een hold-stip. Kleuren die niet in KLEUR_HEX staan
// (zoals de graad-kleuren van Tier 2 in de testset) worden grijs.
function stipKleur(kleur) {
  return KLEUR_HEX[kleur] || "#64748b";
}

// Alle kleuren die op kaarten voorkomen (voor het hold-overzicht)
function alleHoldKleuren() {
  const lijst = Object.keys(KLEUR_HEX);
  const extra = [];
  KAARTEN.forEach(function (k) {
    if (!KLEUR_HEX[k.kleur] && extra.indexOf(k.kleur) < 0) extra.push(k.kleur);
  });
  return lijst.concat(extra);
}

/* ---------------- 2. STATE & SPELREGELS ---------------- */

// Bij welk puntendoel horen welke tiers (volgens de GDD)
const DOEL_TIERS = {
  100: [1, 2],
  150: [1, 2, 3],
  200: [2, 3, 4, 5],
};

// De beginstand van een nieuw spel
const DEFAULT_STAAT = {
  taal: "nl",
  spelGestart: false,
  speler: "",
  puntendoel: 150,
  tiers: [1, 2, 3],
  edelen: [],
  tab: "klim",
  huidig: null,
  verzameld: [],
  edelenGehaald: [],
  aflegstapel: [],
  log: [],
};

let staat = JSON.parse(JSON.stringify(DEFAULT_STAAT));

function kaart(id) {
  return KAART_PER_ID[id] || null;
}

// Totaal aan punten aan kaarten (zonder bonussen)
function kaartPunten() {
  return staat.verzameld.reduce(function (som, id) {
    return som + (kaart(id) ? kaart(id).punten : 0);
  }, 0);
}

// Bonuspunten voor het verzamelen van veel kaarten in een tier
function tierBonus() {
  let totaal = 0;
  Object.keys(BONUS_PER_TIER).forEach(function (tierNr) {
    const aantal = staat.verzameld.filter(function (id) {
      return kaart(id) && kaart(id).tier === Number(tierNr);
    }).length;
    BONUS_PER_TIER[tierNr].forEach(function (paar) {
      if (aantal >= paar[0]) totaal += paar[1];
    });
  });
  return totaal;
}

// Elke opgeeiste edele is 30 punten waard
function edelePunten() {
  return staat.edelenGehaald.length * 30;
}

function totaalPunten() {
  return kaartPunten() + tierBonus() + edelePunten();
}

// Hoeveel holds van elke kleur je hebt verzameld
function holdTelling() {
  const telling = {};
  staat.verzameld.forEach(function (id) {
    const k = kaart(id);
    if (k) telling[k.kleur] = (telling[k.kleur] || 0) + 1;
  });
  return telling;
}

// Hoeveel kaarten je per tier hebt verzameld
function tierTelling() {
  const telling = {};
  staat.verzameld.forEach(function (id) {
    const k = kaart(id);
    if (k) telling[k.tier] = (telling[k.tier] || 0) + 1;
  });
  return telling;
}

// Heeft de speler de eisen van een edele gehaald?
function edelenEisenBehaald(edele) {
  const holds = holdTelling();
  return Object.keys(edele.eisen).every(function (kleur) {
    return (holds[kleur] || 0) >= edele.eisen[kleur];
  });
}

/* ---------------- 3. OPSLAAN & LADEN ---------------- */

const OPSLAG_SLEUTEL = "bouldor_state_v1";

function slaOp() {
  try {
    localStorage.setItem(OPSLAG_SLEUTEL, JSON.stringify(staat));
  } catch (e) {
    // Opslaan mislukt (bijv. privémodus) — niet erg.
  }
}

function laadStaat() {
  try {
    const rauw = localStorage.getItem(OPSLAG_SLEUTEL);
    if (rauw) {
      const opgeslagen = JSON.parse(rauw);
      staat = Object.assign(JSON.parse(JSON.stringify(DEFAULT_STAAT)), opgeslagen);
    }
  } catch (e) {
    staat = JSON.parse(JSON.stringify(DEFAULT_STAAT));
  }
}

function herstart() {
  if (!confirm(t("bevestigHerstart"))) return;
  localStorage.removeItem(OPSLAG_SLEUTEL);
  staat = JSON.parse(JSON.stringify(DEFAULT_STAAT));
  renderAlles();
}

/* ---------------- 4. KLIM-REGELS ----------------
   Elke kaart vraagt een paar routes (bijv. 2× graad 4).
   Per route heb je 3 pogingen:
   - Top de route? Dan is die route af.
   - 3× gezakt op dezelfde route? Dan gaat de hele kaart
     automatisch naar de aflegstapel.
   - Alle routes getopt? Dan verzamel je de kaart.
-------------------------------------------------- */

function beginKaart(id) {
  const k = kaart(id);
  if (!k) { toast(t("onbekendeKaart"), true); return; }
  if (!staat.tiers.includes(k.tier)) { toast(t("tierNietInSpel"), true); return; }
  if (staat.huidig) {
    if (!confirm(t("bevestigWissel"))) return;
  }
  const routes = [];
  Object.keys(k.routes).forEach(function (graad) {
    for (let i = 0; i < k.routes[graad]; i++) routes.push(graad);
  });
  staat.huidig = { id: id, routes: routes, pogingen: routes.map(function () { return []; }) };
  voegLogToe(t("begon") + " " + id);
  sluitCamera();
  modalOpen = null;
  slaOp();
  renderAlles();
}

function logPoging(routeIndex, resultaat) {
  if (!staat.huidig) return;
  const pogingen = staat.huidig.pogingen[routeIndex];
  if (pogingen.includes("top") || pogingen.length >= 3) return;

  pogingen.push(resultaat);
  const id = staat.huidig.id;

  if (resultaat === "top") {
    voegLogToe("✓ " + id + " (" + staat.huidig.routes[routeIndex] + ")");
    if (staat.huidig.pogingen.every(function (p) { return p.includes("top"); })) {
      staat.verzameld.push(id);
      staat.huidig = null;
      toast(t("verzameldToast"));
    }
  } else if (pogingen.length >= 3) {
    legKaartNeer(id, t("driemaalReden"));
    voegLogToe("✗ " + id + " — " + t("driemaalReden"));
    toast(t("afgelegdToast"), true);
  } else {
    voegLogToe("✗ " + id + " (" + staat.huidig.routes[routeIndex] + ")");
  }
  slaOp();
  renderAlles();
}

function geefOp() {
  if (!staat.huidig) return;
  if (!confirm(t("bevestigOpgeven"))) return;
  const id = staat.huidig.id;
  legKaartNeer(id, t("opgegevenReden"));
  voegLogToe(id + " — " + t("opgegevenReden"));
  toast(t("afgelegdToast"), true);
  slaOp();
  renderAlles();
}

function legKaartNeer(id, reden) {
  staat.aflegstapel.push({ id: id, reden: reden, tijd: Date.now() });
  staat.huidig = null;
}

function opeisenEdele(edeleId) {
  const edele = EDELEN.find(function (e) { return e.id === edeleId; });
  if (!edele || !edelenEisenBehaald(edele)) return;
  if (staat.edelenGehaald.includes(edeleId)) return;
  staat.edelenGehaald.push(edeleId);
  voegLogToe("⭐ " + edeleNaam(edele) + " (+30)");
  toast("⭐ " + edeleNaam(edele) + " +30");
  slaOp();
  renderAlles();
}

function voegLogToe(tekst) {
  staat.log.push({ tijd: Date.now(), tekst: tekst });
}

/* ---------------- 5. SCHERMEN TEKENEN ---------------- */

let modalOpen = null;
let kaartTab = 1;

function setTab(tabNaam) {
  staat.tab = tabNaam;
  slaOp();
  renderAlles();
}

function wisselTaal() {
  staat.taal = staat.taal === "nl" ? "en" : "nl";
  slaOp();
  renderAlles();
}

function renderAlles() {
  const app = document.getElementById("app");
  if (!staat.spelGestart) {
    app.innerHTML = renderSetup();
  } else {
    app.innerHTML =
      renderKop() +
      "<main>" + renderTab() + "</main>" +
      renderNav() +
      renderModal();
    if (modalOpen === "scanner") startCamera();
  }
}

function renderKop() {
  return (
    '<header class="kop">' +
    "<div>" +
    '<div class="kop-naam">🧗 Bouldor — ' + esc(staat.speler) + "</div>" +
    '<div class="kop-punten">' + totaalPunten() + " " + t("punten") + " / " + staat.puntendoel + "</div>" +
    "</div>" +
    '<div class="kop-knoppen">' +
    '<button class="knop-mini" onclick="wisselTaal()">' + (staat.taal === "nl" ? "EN" : "NL") + "</button>" +
    '<button class="knop-mini" onclick="herstart()">↺</button>' +
    "</div>" +
    "</header>"
  );
}

function renderNav() {
  const tabs = [
    ["overzicht", "📊", t("overzicht")],
    ["klim", "🧗", t("klim")],
    ["afleg", "🗑️", t("afleg")],
    ["log", "📜", t("log")],
    ["kaarten", "🃏", t("kaarten")],
  ];
  const knoppen = tabs
    .map(function (tab) {
      const actief = staat.tab === tab[0] ? " actief" : "";
      return (
        '<button class="nav-knop' + actief + '" onclick="setTab(\'' + tab[0] + '\')">' +
        '<span class="icoon">' + tab[1] + "</span>" + tab[2] +
        "</button>"
      );
    })
    .join("");
  return '<nav class="nav-onder">' + knoppen + "</nav>";
}

/* ----- 5a. Setup-scherm (voor het spel begint) ----- */

function renderSetup() {
  const doelen = [100, 150, 200]
    .map(function (doel) {
      const actief = staat.puntendoel === doel ? " actief" : "";
      return '<button class="keuze' + actief + '" onclick="zetDoel(' + doel + ')">' + doel + "</button>";
    })
    .join("");

  const tierKnoppen = [1, 2, 3, 4, 5]
    .map(function (tierNr) {
      const actief = staat.tiers.includes(tierNr) ? " actief" : "";
      return '<button class="keuze' + actief + '" onclick="wisselTier(' + tierNr + ')">T' + tierNr + "</button>";
    })
    .join("");

  const edeleKnoppen = EDELEN.map(function (edele) {
    const actief = staat.edelen.includes(edele.id) ? " actief" : "";
    return '<button class="keuze' + actief + '" onclick="wisselEdele(\'' + edele.id + '\')">' + edeleNaam(edele) + "</button>";
  }).join('<div style="height:8px"></div>');

  return (
    "<main>" +
    '<div class="setup-kop">' +
    "<div><h1>🧗 Bouldor</h1><p class='zacht'>" + t("setupWelkom") + t("setupUitleg") + "</p></div>" +
    '<button class="knop-mini" onclick="wisselTaal()">' + (staat.taal === "nl" ? "EN" : "NL") + "</button>" +
    "</div>" +

    '<div class="paneel">' +
    '<label class="label" for="invoer-naam">' + t("jouwNaam") + "</label>" +
    '<input id="invoer-naam" class="invoer" value="' + esc(staat.speler) + '" placeholder="' + t("naamPlaceholder") + '" oninput="zetNaam(this.value)" />' +
    "</div>" +

    '<div class="paneel">' +
    '<span class="label">' + t("puntendoel") + "</span>" +
    '<div class="rij">' + doelen + "</div>" +
    '<span class="label">' + t("tiersInSpel") + "</span>" +
    '<div class="rij">' + tierKnoppen + "</div>" +
    '<p class="mini zacht" style="margin:8px 0 0">' + t("edelenHint") + "</p>" +
    "</div>" +

    '<div class="paneel">' +
    '<span class="label">' + t("edelenInSpel") + "</span>" +
    '<div class="kolom">' + edeleKnoppen + "</div>" +
    "</div>" +

    '<button class="knop knop-primair" onclick="startSpel()">' + t("startSpel") + "</button>" +
    '<button class="link-knop" onclick="herstart()">' + t("herstart") + "</button>" +
    "</main>"
  );
}

function zetNaam(naam) {
  staat.speler = naam;
  slaOp();
}

function zetDoel(doel) {
  staat.puntendoel = doel;
  staat.tiers = DOEL_TIERS[doel].slice();
  slaOp();
  renderAlles();
}

function wisselTier(tierNr) {
  const lijst = staat.tiers;
  const index = lijst.indexOf(tierNr);
  if (index >= 0) {
    if (lijst.length > 1) lijst.splice(index, 1);
  } else {
    lijst.push(tierNr);
    lijst.sort();
  }
  slaOp();
  renderAlles();
}

function wisselEdele(edeleId) {
  const index = staat.edelen.indexOf(edeleId);
  if (index >= 0) staat.edelen.splice(index, 1);
  else staat.edelen.push(edeleId);
  slaOp();
  renderAlles();
}

function startSpel() {
  if (!staat.speler.trim()) staat.speler = t("geenNaam");
  staat.spelGestart = true;
  staat.tab = "klim";
  voegLogToe("🧗 " + t("startSpelLog") + " — " + staat.puntendoel + " " + t("punten"));
  slaOp();
  renderAlles();
}

/* ----- 5b. Tab-schermen ----- */

function renderTab() {
  if (staat.tab === "overzicht") return renderOverzicht();
  if (staat.tab === "klim") return renderKlim();
  if (staat.tab === "afleg") return renderAfleg();
  if (staat.tab === "log") return renderLog();
  if (staat.tab === "kaarten") return renderKaarten();
  return "";
}

function renderOverzicht() {
  const doel = staat.puntendoel;
  const procent = Math.min(100, Math.round((totaalPunten() / doel) * 100));

  const tierTels = tierTelling();
  const tierVakken = staat.tiers
    .map(function (tierNr) {
      return (
        '<div class="tier-vak">' +
        '<div class="aantal">' + (tierTels[tierNr] || 0) + "</div>" +
        '<div class="naam">T' + tierNr + "</div>" +
        "</div>"
      );
    })
    .join("");

  const holdTels = holdTelling();
  const holdVakken = alleHoldKleuren()
    .map(function (kleur) {
      return (
        '<div class="hold-vak">' +
        '<span class="kleur-stip" style="background:' + stipKleur(kleur) + '"></span>' +
        kleurNaam(kleur) +
        '<span class="aantal">' + (holdTels[kleur] || 0) + "</span>" +
        "</div>"
      );
    })
    .join("");

  const edeleHtml = staat.edelen.map(function (edeleId) {
    const edele = EDELEN.find(function (e) { return e.id === edeleId; });
    if (!edele) return "";
    const gehaald = staat.edelenGehaald.includes(edeleId);
    const kanOpeisen = !gehaald && edelenEisenBehaald(edele);
    const eisen = Object.keys(edele.eisen)
      .map(function (kleur) {
        const nodig = edele.eisen[kleur];
        const ok = (holdTels[kleur] || 0) >= nodig;
        return (
          '<span class="eis' + (ok ? " ok" : "") + '">' +
          '<i style="background:' + stipKleur(kleur) + '"></i>' +
          nodig + "× " + kleurNaam(kleur) + " (" + (holdTels[kleur] || 0) + ")" +
          "</span>"
        );
      })
      .join('<span class="mini zacht">·</span>');
    return (
      '<div class="edele' + (gehaald ? " behaald" : "") + '">' +
      '<div class="kaart-kop"><span class="vet">⭐ ' + edeleNaam(edele) + "</span>" +
      (gehaald
        ? '<span class="badge">' + t("behaald") + "</span>"
        : kanOpeisen
          ? '<button class="knop-mini" onclick="opeisenEdele(\'' + edeleId + '\')">' + t("opeisen") + "</button>"
          : '<span class="badge">+30</span>') +
      "</div>" +
      '<div class="edelen-eisen" style="margin-top:8px">' + eisen + "</div>" +
      "</div>"
    );
  }).join("");

  return (
    '<div class="paneel midden">' +
    '<div class="groot-icoon">🏔️</div>' +
    '<div class="punten-groot">' + totaalPunten() + "</div>" +
    '<div class="zacht">' + t("totaal") + " / " + doel + " " + t("punten") + "</div>" +
    '<div class="punten-balk-houder"><div class="punten-balk" style="width:' + procent + '%"></div></div>' +
    '<div class="mini zacht">📈 ' + procent + "%</div>" +
    "</div>" +

    '<div class="paneel">' +
    '<h2>' + t("totaal") + "</h2>" +
    '<div class="uitkienst-regel"><span>' + t("kaartpunten") + "</span><span class="vet">' + kaartPunten() + "</span></div>" +
    '<div class="uitkienst-regel"><span>' + t("tierbonus") + "</span><span class="vet">+' + tierBonus() + "</span></div>" +
    '<div class="uitkienst-regel"><span>' + t("edelenLabel") + "</span><span class="vet">+' + edelePunten() + "</span></div>" +
    "</div>" +

    '<div class="paneel">' +
    '<h2>' + t("kaartenPerTier") + "</h2>" +
    '<div class="tier-rooster">' + tierVakken + "</div>" +
    "</div>" +

    '<div class="paneel">' +
    '<h2>' + t("holdsPerKleur") + "</h2>" +
    '<div class="hold-rooster">' + holdVakken + "</div>" +
    "</div>" +

    (staat.edelen.length
      ? '<div class="paneel"><h2>⭐ ' + t("edelenLabel") + "</h2>" + edeleHtml + "</div>"
      : "")
  );
}

function renderKlim() {
  if (!staat.huidig) {
    return (
      '<div class="paneel midden">' +
      '<div class="groot-icoon">🧗</div>' +
      '<p class="zacht">' + t("geenKaartActief") + "</p>" +
      '<button class="knop knop-primair" onclick="openScanner()">' + t("scanKaart") + "</button>" +
      '<button class="knop knop-secundair" onclick="openKiezer()">' + t("kiesKaart") + "</button>" +
      "</div>"
    );
  }

  const k = kaart(staat.huidig.id);
  if (!k) return "";

  const routeHtml = staat.huidig.routes
    .map(function (graad, i) {
      const pogingen = staat.huidig.pogingen[i];
      const isTop = pogingen.includes("top");
      const klaar = isTop || pogingen.length >= 3;

      const stippen = [0, 1, 2]
        .map(function (n) {
          const poging = pogingen[n];
          const klas = poging === "top" ? " ok" : poging === "fail" ? " mislukt" : "";
          return '<span class="stip' + klas + '"></span>';
        })
        .join("");

      return (
        '<div class="route">' +
        '<div class="route-kop">' +
        '<span class="vet">' + t("route") + " " + (i + 1) + "</span>" +
        '<span class="route-graad">' + t("graad") + " " + graad + "</span>" +
        "</div>" +
        '<div class="poging-stippen">' + stippen + '<span class="mini zacht">' + (isTop ? "✓" : pogingen.length + "/3") + "</span></div>" +
        '<div class="poging-knoppen">' +
        '<button class="knop knop-goed" ' + (klaar ? "disabled" : "") + ' onclick="logPoging(' + i + ',\'top\')">' + t("top") + "</button>" +
        '<button class="knop knop-fout" ' + (klaar ? "disabled" : "") + ' onclick="logPoging(' + i + ',\'fail\')">' + t("gezakt") + "</button>" +
        "</div>" +
        "</div>"
      );
    })
    .join("");

  return (
    '<div class="kaart">' +
    '<div class="kaart-kop">' +
    '<span class="kaart-id">' + k.id + "</span>" +
    '<span class="punten-groot">' + k.punten + "</span>" +
    "</div>" +
    '<div class="kleur-regel">' +
    '<span class="kleur-stip" style="background:' + stipKleur(k.kleur) + '"></span>' +
    "<span>" + kleurNaam(k.kleur) + ' · <span class="zacht">' + t("huidigeKaart") + "</span></span>" +
    "</div>" +
    "</div>" +
    routeHtml +
    '<button class="knop knop-secundair" onclick="geefOp()">' + t("opgeven") + "</button>"
  );
}

function renderAfleg() {
  if (!staat.aflegstapel.length) {
    return '<div class="paneel midden"><div class="groot-icoon">🗑️</div><p class="zacht">' + t("leegAfleg") + "</p></div>";
  }
  const regels = staat.aflegstapel
    .slice()
    .reverse()
    .map(function (item) {
      const k = kaart(item.id);
      return (
        '<div class="uitkienst-regel">' +
        "<span>" + item.id + (k ? ' · <span class="kleur-stip" style="background:' + stipKleur(k.kleur) + '"></span> ' + kleurNaam(k.kleur) : "") + "</span>" +
        '<span class="zacht mini">' + esc(item.reden) + " · " + tijdStr(item.tijd) + "</span>" +
        "</div>"
      );
    })
    .join("");
  return '<div class="paneel"><h2>🗑️ ' + t("afleg") + "</h2>" + regels + "</div>";
}

function renderLog() {
  if (!staat.log.length) {
    return '<div class="paneel midden"><div class="groot-icoon">📜</div><p class="zacht">' + t("leegLog") + "</p></div>";
  }
  const regels = staat.log
    .slice()
    .reverse()
    .map(function (item) {
      return '<div class="uitkienst-regel"><span>' + esc(item.tekst) + "</span>" + '<span class="zacht mini">' + tijdStr(item.tijd) + "</span></div>";
    })
    .join("");
  return '<div class="paneel"><h2>📜 ' + t("log") + "</h2>" + regels + "</div>";
}

function renderKaarten() {
  if (!staat.tiers.includes(kaartTab)) kaartTab = staat.tiers[0];

  const tabs = staat.tiers
    .map(function (tierNr) {
      const actief = kaartTab === tierNr ? " actief" : "";
      return '<button class="keuze' + actief + '" onclick="setKaartTab(' + tierNr + ')">T' + tierNr + "</button>";
    })
    .join("");

  const kaartHtml = KAARTEN.filter(function (k) { return k.tier === kaartTab; })
    .map(function (k) {
      const routes = Object.keys(k.routes)
        .map(function (graad) {
          return k.routes[graad] + "× " + graad;
        })
        .join(" + ");
      return (
        '<button class="kiezer-kaart" onclick="beginKaart(\'' + k.id + '\')">' +
        '<span class="kleur-stip" style="background:' + stipKleur(k.kleur) + '"></span>' +
        "<span><span class='vet'>" + k.id + "</span><br>" +
        '<span class="mini zacht">' + routes + "</span></span>" +
        '<span class="punten">' + k.punten + "p</span>" +
        "</button>"
      );
    })
    .join("");

  return (
    '<div class="paneel">' +
    '<div class="rij">' + tabs + "</div>" +
    '<p class="mini zacht" style="margin:10px 0">' + t("kaartTabHint") + "</p>" +
    '<button class="knop knop-secundair" onclick="printQrBlad()">' + t("printQr") + "</button>" +
    "</div>" +
    '<div class="paneel"><div class="kolom">' + kaartHtml + "</div></div>"
  );
}

function setKaartTab(tierNr) {
  kaartTab = tierNr;
  renderAlles();
}

function tijdStr(ms) {
  const datum = new Date(ms);
  return datum.toLocaleTimeString(staat.taal === "nl" ? "nl-NL" : "en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

/* ----- 5c. Pop-upvensters (modal) ----- */

function renderModal() {
  if (modalOpen === "scanner") {
    return (
      '<div class="modal" onclick="sluitModal()">' +
      '<div class="modal-inhoud" onclick="event.stopPropagation()">' +
      "<h2>" + t("scanTitel") + "</h2>" +
      '<div class="scanner-venster">' +
      '<video id="scan-video" playsinline muted></video>' +
      '<div class="scan-lijn"></div>' +
      "</div>" +
      '<p class="mini zacht midden">' + t("scanHint") + "</p>" +
      '<p id="scan-fout" class="mini zacht midden" style="color:var(--fout)"></p>' +
      '<button class="knop knop-secundair" onclick="sluitModal()">' + t("annuleren") + "</button>" +
      "</div></div>"
    );
  }
  if (modalOpen === "kiezer") {
    const groepen = staat.tiers
      .map(function (tierNr) {
        const items = KAARTEN.filter(function (k) { return k.tier === tierNr; })
          .map(function (k) {
            return (
              '<button class="kiezer-kaart" onclick="beginKaart(\'' + k.id + '\')">' +
              '<span class="kleur-stip" style="background:' + stipKleur(k.kleur) + '"></span>' +
              "<span><span class='vet'>" + k.id + "</span></span>" +
              '<span class="punten">' + k.punten + "p</span>" +
              "</button>"
            );
          })
          .join("");
        return '<span class="label">T' + tierNr + "</span>" + '<div class="kolom scroll">' + items + "</div>";
      })
      .join('<div style="height:14px"></div>');

    return (
      '<div class="modal" onclick="sluitModal()">' +
      '<div class="modal-inhoud" onclick="event.stopPropagation()">' +
      "<h2>" + t("kiesKaart") + "</h2>" +
      groepen +
      '<button class="knop knop-secundair" onclick="sluitModal()">' + t("annuleren") + "</button>" +
      "</div></div>"
    );
  }
  return "";
}

function sluitModal() {
  sluitCamera();
  modalOpen = null;
  renderAlles();
}

/* ----- 5d. Toast (korte melding) ----- */

let toastTimer = null;
function toast(tekst, waarschuwing) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = tekst;
  el.classList.toggle("warn", !!waarschuwing);
  el.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    el.classList.add("hidden");
  }, 2500);
}

/* ---------------- 6. QR-SCANNER (camera) ---------------- */

let cameraStream = null;
let cameraBezig = false;

function openScanner() {
  if (typeof jsQR === "undefined") {
    toast(t("qrNietGeladen"), true);
    modalOpen = "kiezer";
    renderAlles();
    return;
  }
  modalOpen = "scanner";
  renderAlles();
}

function startCamera() {
  const video = document.getElementById("scan-video");
  if (!video || cameraBezig) return;
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    toonScanFout();
    return;
  }
  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "environment" } })
    .then(function (stream) {
      cameraStream = stream;
      video.srcObject = stream;
      cameraBezig = true;
      video.play();
      requestAnimationFrame(scanFrame);
    })
    .catch(function () {
      toonScanFout();
    });
}

function toonScanFout() {
  const el = document.getElementById("scan-fout");
  if (el) el.textContent = t("cameraFout");
}

function sluitCamera() {
  cameraBezig = false;
  if (cameraStream) {
    cameraStream.getTracks().forEach(function (track) { track.stop(); });
    cameraStream = null;
  }
}

function scanFrame() {
  if (!cameraBezig) return;
  const video = document.getElementById("scan-video");
  if (video && video.readyState === video.HAVE_ENOUGH_DATA) {
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const beeld = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(beeld.data, beeld.width, beeld.height, {
      inversionAttempts: "dontInvert",
    });
    if (code && code.data) {
      const id = parseQr(code.data);
      if (id && kaart(id)) {
        sluitCamera();
        beginKaart(id);
        return;
      }
    }
  }
  requestAnimationFrame(scanFrame);
}

// "bouldor:card:T1-04" → "T1-04" (ook "T1-4" en "T1-04" werken direct)
function parseQr(tekst) {
  const schoon = tekst.trim();
  if (schoon.indexOf(QR_PREFIX) === 0) return schoon.slice(QR_PREFIX.length).trim();
  if (/^T[1-5]-\d{1,2}$/i.test(schoon)) return schoon.toUpperCase();
  return null;
}

/* ---------------- 7. KAART KIEZEN ZONDER SCANNER ---------------- */

function openKiezer() {
  modalOpen = "kiezer";
  renderAlles();
}

/* ---------------- 8. QR-PRINTBLAD ----------------
   Print per tier een blad met alle QR-codes, zodat je
   ze op de fysieke kaarten kunt plakken.
---------------------------------------------- */

function qrSvgVoor(tekst) {
  try {
    if (typeof qrcode === "undefined") return "";
    const qr = qrcode(0, "M");
    qr.addData(tekst);
    qr.make();
    return qr.createSvgTag({ cellSize: 4, margin: 2 });
  } catch (e) {
    return "";
  }
}

function printQrBlad() {
  if (typeof qrcode === "undefined") {
    toast(t("qrNietGeladen"), true);
    return;
  }
  const items = KAARTEN.filter(function (k) { return k.tier === kaartTab; })
    .map(function (k) {
      return (
        '<div class="qr-item">' +
        qrSvgVoor(QR_PREFIX + k.id) +
        '<div class="qr-label">' + k.id + " · " + kleurNaam(k.kleur) + " · " + k.punten + "p</div>" +
        "</div>"
      );
    })
    .join("");

  const mainEl = document.querySelector("main");
  const kopEl = document.querySelector(".kop");
  const navEl = document.querySelector(".nav-onder");
  if (kopEl) kopEl.classList.add("geen-print");
  if (navEl) navEl.classList.add("geen-print");
  if (!mainEl) return;
  mainEl.innerHTML = '<div class="qr-rooster">' + items + "</div>";

  window.onafterprint = renderAlles;
  window.print();
  setTimeout(renderAlles, 2500);
}

/* ---------------- 9. START ---------------- */

laadStaat();
renderAlles();

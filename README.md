# 🧗 Bouldor — log-website

De website waar spelers van het fysieke kaartspel **Bouldor** hun
klimpogingen mee loggen terwijl ze in de boulderhal spelen.

**Live site:** https://thaniels.github.io/Bouldor-Website/

## Wat kan de site (prototype)?

- **Kaart scannen** met de camera via de QR-code op de kaart
  (of handmatig kiezen uit een lijst, zonder scanner).
- **Pogingen loggen**: per route toppen of gezakt, 3 pogingen per route.
  Driemaal gezakt op één route → de kaart gaat automatisch naar de aflegstapel.
  Alle routes getopt → kaart verzameld.
- **Voortgang bijhouden**: totaal punten, kaarten per tier, holds per kleur,
  tier-bonuspunten en edelen die op tafel liggen (eisen check + opeisen voor +30).
- **Logboek** van alles wat gebeurd is en een **aflegstapel**.
- **QR-blad printen** per tier, zodat je codes op de fysieke kaarten kunt plakken.
- Alles wordt **lokaal op je telefoon opgeslagen** (localStorage), dus het
  blijft bewaard als je de pagina sluit. De ↺-knop rechtsboven wist het spel.
- Taal: Nederlands, met EN-knop rechtsboven.

## Welke bestanden zijn er?

| Bestand | Wat zit erin? |
| --- | --- |
| `index.html` | De pagina zelf; laadt alle andere bestanden. |
| `styles.css` | Het uiterlijk (kleuren staan bovenaan in `:root`). |
| `app.js` | De logica: spelregels, schermen, QR-scanner. |
| `data.js` | **Alle kaarten en edelen** — pas dit aan als de kaartset verandert. |
| `manifest.json` + `icon.svg` | Zorgen dat je de site als "app" op je thuisscherm kunt zetten. |

## Zelf dingen aanpassen

- **Kaartgegevens (kosten, punten, kleuren)** → `data.js`.
  Elke rij is `["Kleur", aantal route 1, aantal route 2, ..., punten]`.
- **Teksten in beeld** → zoek ze op in `app.js` bovenin bij `TEKST` (nl en en).
- **Kleuren / uiterlijk** → `styles.css`, begin bij het kopje `:root`.
- **Regels (3 pogingen, bonussen, 30 punten per edele)** → `app.js`,
  de kopjes staan erboven (bijv. `KLIM-REGELS`, `tierBonus`).

## Lokaal testen

Open `index.html` in een browser om te zien of alles werkt.
De **QR-scanner werkt alleen via HTTPS** (bijv. de GitHub Pages-URL hierboven),
niet als je het bestand lokaal opent — kies dan handmatig een kaart uit de lijst.

## Op je telefoon (PWA)

Open de site in je browser → browsermenu → **"Toevoegen aan thuisscherm"**.
De site staat dan tussen je apps en opent op volledig scherm.

## Roadmap (volgende stappen)

1. ~~Werkend prototype met logging~~ ✅
2. Accounts met toegangscode (e-mail + wachtwoord, eenmalige code,
   QR-uitnodigingen voor gasten die 1 dag geldig zijn)
3. Gedeelde spellen: meerdere spelers in dezelfde sessie
4. Statistieken per speler over meerdere spellen heen

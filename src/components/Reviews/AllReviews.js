// ⚠️ DEMO-INHALTE: Alle Bewertungen sind frei erfundene Platzhalter.
// Vor dem Livegang durch echte Kundenbewertungen ersetzen.
const reviewData = {
  reviews: [
    {
      id: 1,
      name_icon: "AK",
      name: "Anna K.",
      date: "2026-10-02",
      comment:
        "Wunderbarer Salon! Ich wurde sehr herzlich empfangen und die Beratung war ausführlich. Mein Haarschnitt sitzt perfekt, ich komme definitiv wieder.",
      service: "Haarschnitt",
      rating: 5,
    },
    {
      id: 2,
      name_icon: "MB",
      name: "Markus B.",
      date: "2026-09-28",
      comment:
        "Endlich ein Friseur, der wirklich zuhört. Der Termin war schnell gemacht und das Ergebnis ist genau so geworden, wie ich es mir vorgestellt habe.",
      service: "Herrenschnitt",
      rating: 5,
    },
    {
      id: 3,
      name_icon: "LS",
      name: "Laura S.",
      date: "2026-09-21",
      comment:
        "Ich wollte schon lange einen sanften Balayage-Look und habe mich bei Blanche sofort gut aufgehoben gefühlt. Vorab gab es eine ausführliche Beratung, welche Töne zu meinem Hauttyp passen, und währenddessen wurde ich mit Kaffee und netten Gesprächen versorgt. Das Ergebnis ist natürlich, glänzend und wächst wunderbar heraus. Ich bin begeistert und buche den nächsten Termin schon fest ein.",
      service: "Balayage, Haarschnitt",
      rating: 5,
    },
    {
      id: 4,
      name_icon: "SM",
      name: "Selina M.",
      date: "2026-09-14",
      comment:
        "Tolle Atmosphäre und ein sehr nettes Team. Die Wartezeit war etwas länger, dafür war das Ergebnis umso schöner.",
      service: "Waschen, Föhnen",
      rating: 4.5,
    },
    {
      id: 5,
      name_icon: "TH",
      name: "Thomas H.",
      date: "2026-09-07",
      comment:
        "Sauberer Schnitt, gepflegter Bart und eine entspannte Atmosphäre. Genau das, was ich gesucht habe.",
      service: "Herrenschnitt, Bartpflege",
      rating: 5,
    },
    {
      id: 6,
      name_icon: "JW",
      name: "Julia W.",
      date: "2026-08-30",
      comment:
        "Die Kopfmassage beim Waschen ist ein Traum! Meine Haare fühlen sich so gesund an wie lange nicht mehr. Sehr empfehlenswert.",
      service: "Haarpflege, Waschen",
      rating: 5,
    },
    {
      id: 7,
      name_icon: "KR",
      name: "Katharina R.",
      date: "2026-08-24",
      comment:
        "Blanche hat meine Hochzeitsfrisur gemacht und ich könnte nicht glücklicher sein. Schon beim Probetermin wurde jedes Detail besprochen, vom Haarschmuck bis zur Haltbarkeit. Am großen Tag saß alles perfekt, den ganzen Abend lang. Auch meine Brautjungfern waren begeistert. Vielen Dank für die Ruhe und die tolle Arbeit an diesem besonderen Tag!",
      service: "Brautfrisur, Hochsteckfrisur",
      rating: 5,
    },
    {
      id: 8,
      name_icon: "DF",
      name: "Daniel F.",
      date: "2026-08-18",
      comment:
        "Pünktlich, freundlich und handwerklich top. Der Fade sitzt genau richtig.",
      service: "Herrenschnitt",
      rating: 5,
    },
    {
      id: 9,
      name_icon: "ML",
      name: "Mia L.",
      date: "2026-08-11",
      comment:
        "Ich war nach einem Haarschnitt-Desaster woanders ziemlich verunsichert. Hier wurde alles in Ruhe besprochen und das Ergebnis ist wunderschön geworden.",
      service: "Haarschnitt, Pony schneiden",
      rating: 5,
    },
    {
      id: 10,
      name_icon: "SP",
      name: "Sabine P.",
      date: "2026-08-03",
      comment:
        "Moderne Einrichtung, angenehme Musik und eine Friseurin, die ihr Handwerk versteht. Fairer Preis, tolle Arbeit.",
      service: "Färben, Schneiden",
      rating: 5,
    },
    {
      id: 11,
      name_icon: "EV",
      name: "Elena V.",
      date: "2026-07-27",
      comment:
        "Meine Locken wurden endlich richtig geschnitten! Ich fühle mich zum ersten Mal von einer Friseurin wirklich verstanden.",
      service: "Lockenschnitt",
      rating: 5,
    },
    {
      id: 12,
      name_icon: "JT",
      name: "Jonas T.",
      date: "2026-07-19",
      comment:
        "Guter Haarschnitt und freundlicher Service. Preis und Leistung stimmen.",
      service: "Herrenschnitt",
      rating: 4,
    },
    {
      id: 13,
      name_icon: "ND",
      name: "Nicole D.",
      date: "2026-07-12",
      comment:
        "Ich komme seit einigen Monaten regelmäßig zum Färben und bin jedes Mal aufs Neue zufrieden. Die Farbe hält lange, die Haare bleiben gesund und die Beratung ist ehrlich: Es wird nichts empfohlen, was ich nicht brauche. Dazu gibt es eine entspannende Kopfmassage und eine Tasse Kaffee. Für mich der beste Salon in der Umgebung.",
      service: "Haare färben, Ansatz",
      rating: 5,
    },
    {
      id: 14,
      name_icon: "LA",
      name: "Leyla A.",
      date: "2026-07-05",
      comment:
        "Sehr liebevoll und aufmerksam. Ich komme gerne wieder und kann den Salon nur weiterempfehlen.",
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 15,
      name_icon: "PN",
      name: "Peter N.",
      date: "2026-06-28",
      comment:
        "Schneller Termin, kurze Wartezeit, sauberes Ergebnis. So stelle ich mir einen Friseurbesuch vor.",
      service: "Herrenschnitt",
      rating: 5,
    },
    {
      id: 16,
      name_icon: "HG",
      name: "Hannah G.",
      date: "2026-06-20",
      comment:
        "Highlights genau in dem Ton, den ich mir gewünscht hatte. Sehr professionell und trotzdem persönlich.",
      service: "Highlights, Föhnen",
      rating: 5,
    },
    {
      id: 17,
      name_icon: "CE",
      name: "Carolin E.",
      date: "2026-06-13",
      comment:
        "Wunderschöner Salon mit Liebe zum Detail. Ich habe mich vom ersten Moment an wohlgefühlt.",
      service: "Haarschnitt, Styling",
      rating: 5,
    },
    {
      id: 18,
      name_icon: "LM",
      name: "Lukas M.",
      date: "2026-06-06",
      comment:
        "Klare Empfehlung. Ich hatte spontan einen Termin gebraucht und wurde noch am selben Tag drangenommen.",
      service: "Herrenschnitt",
      rating: 5,
    },
    {
      id: 19,
      name_icon: "VJ",
      name: "Vanessa J.",
      date: "2026-05-29",
      comment:
        "Vor dem Termin hatte ich Sorge, dass meine feinen Haare nach dem Blondieren kaputt aussehen würden. Stattdessen wurde mir Schritt für Schritt erklärt, was möglich ist und was nicht, und es wurde eine schonende Methode gewählt. Das Ergebnis ist ein kühles Blond mit richtig viel Glanz. Danke für die ehrliche Beratung und die tolle Arbeit!",
      service: "Blondierung, Pflegebehandlung",
      rating: 5,
    },
    {
      id: 20,
      name_icon: "BO",
      name: "Brigitte O.",
      date: "2026-05-22",
      comment:
        "Freundliche Bedienung und eine wirklich gute Dauerwelle. Ich bin sehr zufrieden.",
      service: "Dauerwelle",
      rating: 4.5,
    },
    {
      id: 21,
      name_icon: "FK",
      name: "Fabian K.",
      date: "2026-05-15",
      comment:
        "Moderner Schnitt, entspannte Stimmung und alles ohne Stress. Gerne wieder.",
      service: "Herrenschnitt, Waschen",
      rating: 5,
    },
    {
      id: 22,
      name_icon: "SZ",
      name: "Sandra Z.",
      date: "2026-05-08",
      comment:
        "Endlich habe ich eine Friseurin gefunden, der ich vertraue. Der Schnitt fällt wunderbar und ist pflegeleicht.",
      service: "Haarschnitt",
      rating: 5,
    },
    {
      id: 23,
      name_icon: "EC",
      name: "Emma C.",
      date: "2026-04-30",
      comment:
        "Ich war mit meiner Tochter da. Wir wurden beide super nett behandelt und sind sehr glücklich mit dem Ergebnis.",
      service: "Kinderhaarschnitt, Haarschnitt",
      rating: 5,
    },
    {
      id: 24,
      name_icon: "OS",
      name: "Oliver S.",
      date: "2026-04-22",
      comment:
        "Sehr entspannt und professionell. Der Termin hat pünktlich begonnen und das Ergebnis passt.",
      service: "Herrenschnitt",
      rating: 5,
    },
    {
      id: 25,
      name_icon: "TH",
      name: "Tamara H.",
      date: "2026-04-14",
      comment:
        "Ein Salon zum Wohlfühlen. Die Haare glänzen, die Stimmung war wunderbar. Ich komme wieder!",
      service: "Waschen, Föhnen, Styling",
      rating: 5,
    },
  ],
};

export default reviewData;
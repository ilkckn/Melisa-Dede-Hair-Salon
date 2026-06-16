const reviewData = {
  reviews: [
    {
      id: 1,
      name_icon: "GL",
      name: "Gwendolyn Lee",
      date: "vor 4 Monaten",
      comment:
        "Ein rundum gelungenes Erlebnis! Melisa hat meine Haare hervorragend gefärbt und geschnitten und mir zudem schnell einen Termin gegeben. Ich bin mit dem Ergebnis sehr zufrieden. Ich habe Kaffee und Wasser sowie die freundliche und professionelle Behandlung sehr genossen. Absolut empfehlenswert! Ich komme gerne wieder und kann den Salon wärmstens empfehlen.",
      service: "Haare trocknen, Haare färben.",
      rating: 5,
    },
    {
      id: 2,
      name_icon: "PO",
      name: "Petra Oswald",
      date: "vor 4 Monaten",
      comment:
        "Eine Fachfrau, die ihr Handwerk versteht. Melisa nimmt sich Zeit, berät kompetent, setzt Wünsche um. Immer eine herzliche Begrüßung und nette Gespräche. Bei Waschsessel mit Massagefunktion und ausgiebiger Kopfmassage kann Frau sich nur wohlfühlen und die Seele baumeln lassen. Prädikat: Absulut empfehlenswert und das zu sehr humanen Preisen. Immer wieder gerne.",
      service: "Flechten, Pony schneiden, Frisieren",
      rating: 5,
    },
    {
      id: 3,
      name_icon: "F",
      name: "Francesca",
      date: "vor 4 Monaten",
      comment:
        "Ich habe mir bei Melisa Strähnen machen lassen und die Haare schneiden lassen und bin total begeistert. Sie arbeitet sehr professionell, geht auf Wünsche ein und man fühlt sich einfach gut aufgehoben. Das Ergebnis ist wunderschön geworden!",
      service: "Highlights, Haarschnitt",
      rating: 5,
    },
    {
      id: 4,
      name_icon: "SS",
      name: "Stephan Sutter",
      date: "vor 1 Jahr",
      comment: `Ich war mittlerweile schon mehrmals in diesem neuen Friseursalon im Quartier und bin begeistert! Der Laden wird von einer sehr sympathischen und kompetenten Friseurmeisterin geleitet, die auch für Männer tolle Frisuren zaubert. Sie versteht es, moderne Schnitte perfekt umzusetzen und nimmt sich viel Zeit für ihre Kunden.

        Das Ambiente ist modern und einladend, und man fühlt sich sofort wohl. Besonders toll finde ich, dass Termine bis spät abends möglich sind, was für mich als Berufstätiger perfekt passt. Es gibt Parkplätze direkt vor der Tür, was den Besuch noch angenehmer macht.

        Einmal war ich mit meinem Haarschnitt nicht ganz zufrieden, und ohne zu zögern wurden mir die Haare kostenlos nachgeschnitten – ein super Kundenservice! Außerdem gibt es immer Kaffee, Getränke und sogar Süßigkeiten, was den Aufenthalt noch angenehmer macht.

        Ich kann den Salon nur weiterempfehlen und freue mich auf meinen nächsten Besuch!`,
      service: "Haarschnitt, Styling.",
      rating: 5,
    },
    {
      id: 5,
      name_icon: "VK",
      name: "Vivien Kretz",
      date: "vor 6 Monaten",
      comment:
        "Liebe Melissa, du hast meine Haare genau in den Ton gebracht, den ich mir immer gewünscht habe. Dabei hast du mich super beraten, mich mit einbezogen und alles gemeinsam angeschaut. Ich habe mich sehr wohl gefühlt und werde auf jeden Fall wiederkommen!",
      service: "Haarefärben",
      rating: 5,
    },
    {
      id: 6,
      name_icon: "NK",
      name: "Nik Kin",
      date: "vor 3 Monaten",
      comment:
        "Ich lasse mir mittlerweile schon seit mehreren Jahren von Melisa die Haare schneiden. Von der Beratung bis zur Durchführung des gewünschten Ergebnisses ist es ein absolutes Wohlfühlerlebnis. Und was nicht fehlen darf: eine Tasse Kaffee und nette Gespräche. :) Komme immer wieder gerne!",
      service: "Damenhaarschnitt",
      rating: 5,
    },
    {
      id: 7,
      name_icon: "EF",
      name: "Ellen Farkouh",
      date: "vor 6 Monaten",
      comment:
        "War als Hijabi im Salon und es war wirklich schön. Sie ist extrem sympathisch,  professionell und man merkt einfach, dass sie weiß, was sie tut. Es war mega angenehm und ich habe mich die ganze Zeit wohl und respektiert gefühlt. Alles war gut abgedeckt, also null Stress oder Unsicherheit. Würde jederzeit wieder hingehen und kann den Salon besonders auch Kopftuch tragenden Frauen absolut empfehlen☺️🌻",
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 8,
      name_icon: "L",
      name: "Lena",
      date: "vor 7 Monaten",
      comment:
        "Ich war bei Melisa zur Blondierung/Strähnchenbehandlung und habe mich bei ihr von Anfang an sehr wohl gefühlt. Sie nimmt sich unglaublich viel Zeit, arbeitet sehr sorgfältig und erklärt jeden Schritt mit viel Ruhe und Verständnis. Man merkt, dass ihr die Zufriedenheit ihrer Kundinnen wirklich am Herzen liegt. Auch menschlich ist sie sehr herzlich und man kann sich gut mit ihr unterhalten – man fühlt sich einfach gut aufgehoben. Ich kann sie auf jeden Fall weiterempfehlen, vor allem wenn man Wert auf eine ruhige, entspannte Atmosphäre und eine engagierte Friseurin legt. 💛",
      service: "Haaraufhellung, Strähnchen",
      rating: 5,
    },
    {
      id: 9,
      name_icon: "NK",
      name: "Nadja Kölsch",
      date: "vor 6 Monaten",
      comment:
        "Ich bin schon länger bei Melisa und jedesmal geh ich als Glückliche Kundin wieder raus. Melisa verzaubert euch nicht nur mit dem Ergebnis sondern auch mit Ihrer herzlichen und familiären Art. Das Sie Ihren Beruf liebt spürt man sofort. Danke für das wundervolle Ergebnis",
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 10,
      name_icon: "KG",
      name: "Katharina Künzel-Giacobini",
      date: "vor 7 Monaten",
      comment:
        "Ich hab jetzt 5 Jahre lang eine Friseurin in Lörrach gesucht, die meine Haare so schneidet, wie es mir gefällt. Die außerdem gut zuhört und mutig schneidet. Super gut, ich komme sehr gern wieder und empfehle Melisa uneingeschränkt! Preis-Leistung auch top, Termin hab ich sehr schnell bekommen. ❤️ Danke!!",
      service: "Friseurdienstleistungen, Föhnen",
      rating: 5,
    },
    {
      id: 11,
      name_icon: "AS",
      name: "Aydan S",
      date: "vor 1 Jahr",
      comment:
        "Ich wohne zwar in Bremerhaven und bin daher nicht oft dort aber jedes Mal, wenn Melisa ihre Familie hier besucht in Bremerhaven, lasse ich mir nur von ihr die Haare schneiden,  weil ich einfach niemand anderem vertraue. Sie hat ein unglaubliches Gespür für Schnitt, Form und Stil, arbeitet präzise und mit ganz viel Herz. Ich finde, man merkt sofort, dass sie ihren Beruf liebt und mit Leidenschaft ausübt. Wer in Lörrach wohnt, hat wirklich Glück, so eine talentierte Friseurin direkt vor Ort zu haben. Absolute Empfehlung von Herzen!",
      service: "Flechten, Haare glätten, Frisieren, Föhnen, Augenbrauen zupfen",
      rating: 5,
    },
    {
      id: 12,
      name_icon: "ME",
      name: "Mel E",
      date: "vor 1 Monat",
      comment:
        "Meine Friseurin des Vertrauens! Immer wieder gern bei ihr, eine Friseurin, die auf die Bedürfnisse des Kunden eingeht ❤️ und wirklich nur das abschneidet, was man ihr sagt ❤️❤️ noch nie so glücklich aus einem Friseursalon gegangen wie bei ihr🫶🏼🫶🏼 …",
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 13,
      name_icon: "RT",
      name: "R. Torres",
      date: "vor 1 Jahr",
      comment: `Kann Melisa allerbestens empfehlen!!!
      Ich konnte wegen einer Verletzung lange Zeit nicht mehr zum Friseur gehen, dementsprechend sahen meine Haare aus.
      Melisa hat mir eine wunderschöne Frisur gezaubert, obwohl meine Haare mit meinen Wirbeln und unterschiedlichen Locken nicht einfach sind.
      Ich kann mich nur den vorhergehenden Rezessionen anschließen.
      Vom ersten Moment fühlte ich mich bei ihr sehr gut aufgehoben und verstanden. Die Atmosphäre ist auch sehr angenehm.
      Zudem ist Melisa ehrlich. Ich bekam mit, wie Melisa einer Kundin erklärte, dass sie das nicht empfehle, da dies ihre Haare total kaputt mache. Sogar ich als Laie wusste dies. Sie hatte ihr auch erklärt warum und hat ihr eine Alternative angeboten. Das gibt es leider mittlerweile selten, dass jemand so ehrlich ist. Hut ab.
      Melisa ist ab jetzt DIE FRISEURIN zu der ich immer gehen werde.
      Danke Melisa ich fühle mich jetzt wieder sehr wohl mit dieser Frisur.`,
      service: "Friseurdienstleistungen, Föhnen",
      rating: 5,
    },
    {
      id: 14,
      name_icon: "SK",
      name: "Sarah Kutz",
      date: "vor 1 Jahr",
      comment: `Ich war über 2 Jahre bei keinem Friseur, weil ich immer wieder enttäuscht wurde – bis ich endlich bei Melissa gelandet bin. Sie hat genau verstanden, was ich will, super gearbeitet und ich bin total happy mit dem Ergebnis! – ich hab endlich wieder einen Friseur meines Vertrauens. Absolut empfehlenswert, ich komme auf jeden Fall wieder!`,
      service: "Friseurdienstleistungen, Föhnen, Lockiges Haar",
      rating: 5,
    },
    {
      id: 15,
      name_icon: "TQ",
      name: "Tom Quiver",
      date: "vor 1 Jahr",
      comment:
        "Schon bald bin ich ein Jahr glücklicher Kunde von Melisa und würde, und will, auch nie mehr woanders hin. Sie beherrscht Ihr Handwerk exzellent, nimmt sich Zeit und hört vorallem zu, darüber hinaus auch einfach ein sehr sympathischer Mensch. Ich war noch nie so zufrieden wie bei Melisa und freue mich jedes mal, wenn ich mich selbst nach einem Besuch im Spiegel betrachte.",
      service: "Friseurdienstleistungen",
      rating: 5,
    },
    {
      id: 16,
      name_icon: "LD",
      name: "Lea Dabis",
      date: "vor 1 Jahr",
      comment:
        "Ich hatte hier eine großartige Erfahrung gemacht! Melisa Dede hat meine Wünsche sofort verstanden und ihre Fähigkeiten sind beeindruckend. Die Atmosphäre im Salon ist sehr einladend und entspannt. Besonders hervorzuheben ist die Sorgfalt, mit der sie meine Haare behandelt hat. Das Endergebnis ist einfach perfekt und hat meine Erwartungen übertroffen. Ich kann diesen Salon nur wärmstens empfehlen – hier stimmt einfach alles! Ein herzliches Dankeschön!",
      service: "Friseurdienstleistungen, Föhnen, Haarfeuchtigkeitsbehandlungen",
      rating: 5,
    },
    {
      id: 17,
      name_icon: "L",
      name: "Leah",
      date: "vor 1 Jahr",
      comment:
        "Ich bin absolut begeistert! Ich habe super kurzfristig einen Termin bekommen, was heutzutage wirklich keine Selbstverständlichkeit ist. Die Beratung war von Anfang an professionell, ehrlich und sehr freundlich – ich habe mich direkt wohlgefühlt. Auch das Gespräch während des Termins war angenehm und sympathisch, es war eine richtig entspannte Atmosphäre. Mit dem Ergebnis bin ich mehr als zufrieden – ich komme auf jeden Fall wieder. Vielen Dank für den tollen Service!",
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 18,
      name_icon: "AM",
      name: "Anita Migliorisi",
      date: "vor 6 Monaten",
      comment:
        "Musste jahrelang suchen um einen perfekten und herzlichen Friseur zu finden. Bei Melisa Dede ist es jedesmal wie heimkommen und man geht mit einem Lächeln nach Hause.",
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 19,
      name_icon: "SB",
      name: "Sab Ba",
      date: "vor 1 Jahr",
      comment:
        "Ich lasse meine Haare schon länger bei Melisa stylen, schneiden und färben und bin jedes Mal begeistert. Sie setzt meine Wünsche perfekt um und sorgt mit ihrer ruhigen, höflichen Art dafür, dass man sich sofort wohlfühlt. Der Salon ist modern, die Produkte sind hochwertig – ich kann Melisa nur wärmstens weiterempfehlen!",
      service: "Friseurdienstleistungen, Haarefärben, Föhnen, Haarglanz, Lockiges Haar, Augenbrauen fädeln, Haarfeuchtigkeitsbehandlungen",
      rating: 5,
    },
    {
      id: 20,
      name_icon: "KR",
      name: "K R",
      date: "vor 1 Jahr",
      comment:
        "Melisa ist eine sehr liebe Frau und macht wirklich richtig klasse Arbeit. Auch der Salon ist mit so viel Herz eingerichtet. Sie lebt und liebt ihren Beruf und das merkt man. Leider gibt es hier nur Fünf Sterne zu vergeben. Wenn es nach mir Geht dann wäre es eine glatte Zehn von Zehn.",
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 21,
      name_icon: "JS",
      name: "Jasmin SG",
      date: "vor 1 Jahr",
      comment:
        "Melisa ist super nett, macht tolle Arbeit, geht mega empathisch auf ihre Kunden ein, was die Vorstellung und die Wünsche betrifft. Sie nimmt sich viel Zeit und man fühlt sich sehr wohl bei ihr. Bin sehr happy mit Melisa, für mich meine Neue Stammfriseurin.",
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 22,
      name_icon: "C",
      name: "Celina",
      date: "vor 1 Jahr",
      comment:
        "Ich verfolge Melisa schon seitdem sie Azubine war. Sie hat wirklich großes Talent und was ich viel wichtiger finde, sie versteht, was man möchte und man verlässt den Salon glücklich mit dem Ergebnis, welches man sich vorgestellt hat. Ihre Beratung ist so gut, das kenne ich von keiner/m andere/m Friseur/in. Es ist kein Abarbeiten bei ihr, sie nimmt sich wirklich Zeit und wir führen immer tolle Gespräche. Sie wählt ihre Produkte mit Bedacht aus und legt wert auf eine saubere Arbeit. Kann sie vom herzen nur empfehlen.",
      service: "Friseurdienstleistungen, Haarefärben, Flechten, Föhnen, Haareglätten, Haarglanz, Lockiges Haar, Augenbrauen fädeln, Highlights, Balayage",
      rating: 5,
    },
    {
      id: 23,
      name_icon: "N",
      name: "Nora",
      date: "vor 1 Jahr",
      comment:
        "Dringend überfälliger Friseurbesuch und ich war so begeistert! Melisa hat sich so viel Zeit genommen, toll beraten und gleichzeitig so rücksichtsvoll alle Wünsche ernstgenommen, sich mehrfach rückversichert und unglaublich gut geschnitten! Ich bin richtig begeistert und werde nirgends anders mehr hingehen! Tausend Dank dir, Melisa!",
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 24,
      name_icon: "KK",
      name: "Kirsten Keck",
      date: "vor 1 Jahr",
      comment:
        "Ich war durch und durch zufrieden! Super Service! Melisa ist eine Mega liebe und einfühlsame Frau! Ich habe so viel mit ihr reden und lachen können. Ich hatte ihr grob mein Wunsch geäußert und sie hat einfach losgelegt und immer wieder gefragt ob alles gut ist. Ich hab mich so wohl gefühlt! Komme gern wieder! Danke Melisa 🥰",
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 25,
      name_icon: "AN",
      name: "Ana N.",
      date: "vor 1 Jahr",
      comment:
        "Ich war heute mit meiner Tochter zum ersten Mal im Salon und empfand die Atmosphäre sehr angenehm. Wir sind mit dem Ergebnis super zufrieden. Sie nimmt sich wirklich Zeit für die Kundinnen und beratet sie auch gerne. Vielen lieben Dank für die tolle Arbeit!!",
      service: "Friseurdienstleistungen, Kinderhaarschnitt",
      rating: 5,
    },
    {
      id: 26,
      name_icon: "TK",
      name: "Tobias Kahl",
      date: "vor 1 Jahr",
      comment:
        "Man fühlt sich wie zuhause! Melisa und ihre Mama kümmern sich sehr fürsorglich um ihre Kunden. Sie servieren Kaffee, Wasser mit Beeren am Spieß, Süßes und und und... dabei wird man mit einer sehr offenherzigen und zugewandten Kommunikation empfangen. Melisa versteht ihr Handwerk und kümmert sich professionell um jeden Kopf. Der Waschstuhl mit Massagefunktion ist eine schöne Ergänzung und sorgt für Entspannung :-) Der Laden ist modern und geschmackvoll eingerichtet. Parkplätze sind direkt vor dem Laden vorhanden. Ich kann Melisa wärmstens empfehlen. Hier sind Sie gut aufgehoben!",
      service: "Friseurdienstleistungen, Föhnen, Augenbrauen fädeln",
      rating: 5,
    },
    {
      id: 27,
      name_icon: "LS",
      name: "Lisa-Fabienne Schneider",
      date: "vor 1 Jahr",
      comment: `Ich habe auf "gut glück" nach einem Termin angefragt weil der Salon von aussen schon so ansprechend aussah. Mit dem Ergebnis meiner neuen Haarfarbe bin ich mehr als nur zufrieden. Melisa hat meine Wünsche perfect umgesetzt und mich wunderbar beraten. Vielen Dank dafür. 5 Sterne von ❤️`,
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 28,
      name_icon: "TB",
      name: "Tommy Berger",
      date: "vor 1 Jahr",
      comment:
        "Einfach nur klasse. Wozu lange Texte und Erklärungen, hier bekommen auch Männer die passende Frisur... Und wer mal was neues aus seinen Haaren machen will ist bei Melisa genau richtig.",
      service: "Friseurdienstleistungen",
      rating: 5,
    },
    {
      id: 29,
      name_icon: "MJ",
      name: "Mona J.",
      date: "vor 1 Jahr",
      comment:
        "Ich bin seit Jahren Stammkundin bei Melissa, obwohl ich eine längere Anfahrt habe. Sie hat ein super Gefühl für meine Haare, was bisher nicht selbstverständlich war. Klasse Beratung, tolle Atmosphäre! ✨",
      service: "Haarefärben, Föhnen",
      rating: 5,
    },
    {
      id: 30,
      name_icon: "HS",
      name: "Hava S",
      date: "vor 1 Jahr",
      comment:
        "Melissa ist eine mega Friseurin, sie nimmt sich Zeit und beratet super. Bei Ihr fühlt man sich komplett wohl alle seine Wünsche zu äußern! Werde definitiv wieder kommen",
      service: "Friseurdienstleistungen, Haarefärben",
      rating: 5,
    },
    {
      id: 31,
      name_icon: "EG",
      name: "Eftimia Georga",
      date: "vor 1 Jahr",
      comment:
        "Ich habe sehr lange nach einem guten Friseur gesucht und bin durch die guten Rezensionen zu Melissa. Sie schneidet wirklich super, bin sehr zufrieden mit meinem Haarschnitt und bei ihr fühlt man sich sehr wohl!",
      service: "Friseurdienstleistungen",
      rating: 5,
    },
    {
      id: 32,
      name_icon: "GF",
      name: "Giuseppe Fragomeni",
      date: "vor 1 Jahr",
      comment:
        "Melisa ist eine sehr kompetente und freundliche Frieseuse die ihre Arbeit sehr gut beherrscht. Ich bin schon länger dort und sehr zufrieden, dementsprechend kann ich sie sehr gut empfehlen!",
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 33,
      name_icon: "BL",
      name: "Bettina Kraft",
      date: "vor 1 Jahr",
      comment:
        "Die Beste Stylistin für meine Haare aller Zeiten, bin immer zufrieden und Familiäres Ambiente. Freue mich schon auf das nächste mal. ♥︎♥︎",
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 34,
      name_icon: "LF",
      name: "Laura Favazza",
      date: "vor 1 Jahr",
      comment:
        "Ich Bin begeistert... Ich hab mich sehr wohl gefühlt sie ist super nett, ist auf meine Wünsche eingegangen habe das bekommen was ich wollte und bin glücklich... einfach Toll 👌 nur zu empfehlen",
      service: "Friseurdienstleistungen, Haarefärben",
      rating: 5,
    },
    {
      id: 35,
      name_icon: "EB",
      name: "E B",
      date: "vor 1 Jahr",
      comment:
        "Ich hatte einen tollen Besuch! Die Friseurin war super freundlich und kompetent. Das Ergebnis ist einfach klasse! Kann ich nur empfehlen! Komme gerne wieder! 🥰",
      service: "Friseurdienstleistungen, Haarefärben, Föhnen",
      rating: 5,
    },
    {
      id: 36,
      name_icon: "EL",
      name: "Elke Lörracher",
      date: "vor 1 Jahr",
      comment:
        "Ich bin auch sehr begeistert von Melissa. Sie macht eine Topfriseur ☺️ und ist mega sympathisch u strahlt eine Ruhe aus. Komme sehr gerne wieder 👍👍",
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 37,
      name_icon: "VL",
      name: "Vanessa Lorenz",
      date: "vor 1 Jahr",
      comment:
        "Das ganze Studio ist wunderschön! Die Arbeit die sie macht ist wirklich super ich komme sehr gerne ❤️",
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 38,
      name_icon: "AP",
      name: "Alexandra Papoutsakis",
      date: "vor 1 Jahr",
      comment:
        "Super nette Beratung, lässt sich viel Zeit und man bekommt schönen modernen Schnitt. Danke",
      service: "Friseurdienstleistungen",
      rating: 5,
    },
    {
      id: 39,
      name_icon: "MM",
      name: "Mad Max",
      date: "vor 1 Jahr",
      comment:
        "Sehr entspannte und freundliche Atmosphäre 😊 War heut das erste Mal da und... ich komme wieder ☺️",
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 40,
      name_icon: "GM",
      name: "Gioele Minardo",
      date: "vor 1 Jahr",
      comment:
        "Sono stati molto bravi",
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 41,
      name_icon: "EL",
      name: "Elke Lörracher",
      date: "vor 1 Jahr",
      comment:
        "Bin suppi zufrieden 😄",
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 42,
      name_icon: "ND",
      name: "Neriman Dede",
      date: "vor 1 Jahr",
      comment:
        "Sehr zufrieden mit der Haarfarbe und dem Föhnen. Melisa arbeitet professionell und herzlich. Komme gerne wieder!",  // <- KI-generierter Kommentar (bitte prüfen)
      service: "Haarefärben, Föhnen",
      rating: 5,
    },
    {
      id: 43,
      name_icon: "HS",
      name: "Hazal Sencan",
      date: "vor 1 Jahr",
      comment:
        "Toller Service und ein super Ergebnis. Melisa nimmt sich Zeit und man fühlt sich rundum wohl. Sehr empfehlenswert!",  // <- KI-generierter Kommentar (bitte prüfen)
      service: "Friseurdienstleistungen",
      rating: 5,
    },
    {
      id: 44,
      name_icon: "EK",
      name: "Emina Kolakovic-Stevanovic",
      date: "vor 1 Jahr",
      comment:
        "Mit der Haarfarbe bin ich rundum zufrieden. Kompetente Beratung und ein schönes Ergebnis. Gerne wieder!",  // <- KI-generierter Kommentar (bitte prüfen)
      service: "Haarefärben",
      rating: 5,
    },
    {
      id: 45,
      name_icon: "A",
      name: "Anna 0208",
      date: "vor 1 Monat",
      comment:
        "Ich war zum ersten mal bei Melisa und völlig begeistert. Einen Termin habe ich sofort in derselben Woche erhalten. Für die Beratung und mein Anliegen hat Sie sich viel Zeit genommen und mir aufmerksam zugehört. Zudem war Sie mir gegenüber offen und ehrlich. Gleichzeitig war es der lustigste Frisörtermin den ich je hatte, es gab viel zu Lachen und hat eine Menge Spaß gemacht! Ich komme gerne wieder 😊",
      service: "Pony schneiden, Friseurdienstleistungen",
      rating: 5,
    },
    {
      id: 46,
      name_icon: "VZ",
      name: "Valentyn Zotov",
      date: "vor 1 Monat",
      comment:
        "Super Ergebnis beim Föhnen und Styling meiner Locken. Sehr freundlich und professionell. Absolut empfehlenswert!",  // <- KI-generierter Kommentar (bitte prüfen)
      service: "Föhnen, Lockiges Haar",
      rating: 5,
    },
    {
      id: 47,
      name_icon: "SW",
      name: "Stefanie Weiss",
      date: "vor 1 Monat",
      comment:
        "Ich bin schon seit Jahren bei Melisa und muss sagen ich vertraue nur noch ihr. Sie kann sich so gut an die jeweilige Haarstruktur anpassen und hat ein enormes Fachwissen! Ihr Salon ist super schön und man fühlt sich einfach richtig gut aufgehoben. Danke Melisa!",
      service: "Föhnen, Haarefärben, Haarfeuchtigkeitsbehandlungen",
      rating: 5,
    },
    {
      id: 48,
      name_icon: "DC",
      name: "Dilara Cumbul",
      date: "vor 1 Monat",
      comment:
        "Ich bin wirklich super zufrieden! Ich kam mit stark geschädigten, blondierten Haaren und hätte nie gedacht, dass man das nochmal so hinbekommt. Von Anfang an war sie ehrlich zu mir und hat mir erklärt, dass ich Geduld brauche und es ein längerer Weg wird. Genau das hat sich am Ende ausgezahlt. Heute habe ich wieder gesunde Haare und bin einfach nur glücklich mit dem Ergebnis. Sie nimmt sich immer Zeit, hört zu und man fühlt sich bei ihr total wohl. Auch die Gespräche sind immer angenehm und locker. Man merkt einfach, dass sie mit viel Leidenschaft und Sorgfalt arbeitet. Absolute Empfehlung! Vielen Dank 💕",
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 49,
      name_icon: "T",
      name: "Tamara",
      date: "vor 1 Monat",
      comment:
        "Unkompliziert, professionell und zuverlässig. Termin läuft entspannt ab und das Ergebnis passt. So sollte ein Friseurbesuch sein – ohne Stress, aber mit einem richtig guten Ergebnis. Empfehlenswert 👍🏽👍🏽👍🏽",
      service: "Kinderhaarschnitt, Flechten, Haarpolitur, Haarglanz, Föhnen, Augenbrauen fädeln, Haarefärben",
      rating: 5,
    },
    {
      id: 50,
      name_icon: "N",
      name: "Nadine",
      date: "vor 2 Monaten",
      comment:
        "Eine ganz ganz liebe Persönlichkeit 😍💕 kann es nur weiter empfehlen",
      service: "Allgemein",
      rating: 5,
    },
    {
      id: 51,
      name_icon: "MT",
      name: "Melek Tantun",
      date: "vor 1 Jahr",
      comment:
        "Sehr zufrieden mit dem Besuch bei Melisa. Freundlich, professionell und eine angenehme Atmosphäre. Komme gerne wieder!",  // <- KI-generierter Kommentar (bitte prüfen)
      service: "Allgemein",
      rating: 5,
    },
  ],
};

export default reviewData;
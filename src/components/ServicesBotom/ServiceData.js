import women_hair from "../../assets/images/Landing-services/women-hair/hair.png";
import men_hair from "../../assets/images/Landing-services/men-hair/man-hair.png";
import color from "../../assets/images/Landing-services/color-highlights/color-highlight.png";
import foil from "../../assets/images/Landing-services/foil-highlights/foil-highlights.png";
import kid from "../../assets/images/Landing-services/kid-hair/kid-hair.png";
import cosmetic from "../../assets/images/Landing-services/cosmetic/cosmetic.png";

const priceList = [
  {
    category: "Damen",
    icon: women_hair,
    items: [
      { name: "Waschen & schneiden", price: "45,00 €" },
      { name: "Pony schneiden", price: "7,00 €" },
      {
        name: "Waschen / schneiden / föhnen – kurz",
        note: "inkl. Conditioner",
        price: "58,00 €",
      },
      {
        name: "Waschen / schneiden / föhnen – lang",
        note: "inkl. Conditioner",
        price: "ab 68,00 €",
      },
      { name: "Waschen / föhnen / legen – kurz", price: "33,00 €" },
      { name: "Waschen / föhnen / legen – lang", price: "ab 43,00 €" },
    ],
    footnote: "Je nach Aufwand + 10 € – 20 € Aufschlag",
  },
  {
    category: "Coloration",
    icon: color,
    items: [
      { name: "Ansatzfarbe", price: "ab 44,00 €" },
      { name: "+ Längen- und Spitzenausgleich", price: "ab 64,00 €" },
      { name: "Glossing / Veredlung", price: "ab 28,00 €" },
    ],
  },
  {
    category: "Foliensträhnen & Pflege",
    icon: foil,
    items: [
      { name: "Oberkopf bis 15 Folien", price: "47,00 €" },
      { name: "Ganzer Kopf (40 Folien)", price: "ab 97,00 €" },
      { name: "Pro Folie", price: "3,00 €" },
      { name: "Dauerwelle", price: "ab 60,00 €" },
      { name: "Wellaplex Behandlung", price: "25,00 €" },
      { name: "Wella Invigo Intensivmaske", price: "11,00 €" },
      { name: "Wella Ultimate Repair Aufbaumaske", price: "15,00 €" },
      { name: "Wella Fusion Aufbaumaske", price: "13,00 €" },
    ],
  },
  {
    category: "Herren",
    icon: men_hair,
    items: [
      { name: "Waschen / schneiden", price: "35,00 €" },
      { name: "Waschen / schneiden / föhnen", price: "36,00 €" },
      { name: "Maschinenhaarschnitt", price: "24,00 €" },
      { name: "Konturenhaarschnitt", price: "25,00 €" },
      { name: "Grauhaarkaschierung", price: "15,00 €" },
      { name: "Dauerwelle", price: "38,00 €" },
      { name: "Farbe", price: "ab 29,00 €" },
      { name: "Oberlippe und Kinnbart", price: "7,00 €" },
      { name: "Vollbart", price: "12,00 €" },
    ],
  },
  {
    category: "Kinder",
    icon: kid,
    items: [
      { name: "Kinderhaarschnitt 0–7 Jahre", price: "24,00 €" },
      { name: "Kinderhaarschnitt 8–12 Jahre", price: "28,00 €" },
    ],
  },
  {
    category: "Kosmetik",
    icon: cosmetic,
    items: [
      { name: "Augenbrauen formen", price: "10,00 €" },
      { name: "Augenbrauen färben", price: "10,00 €" },
      { name: "Wimpern färben", price: "15,00 €" },
      {
        name: "Kombipreis: Wimpernfärben + Augenbrauen färben + formen",
        price: "30,00 €",
      },
      { name: "Gesicht enthaaren mit Fadentechnik", price: "ab 30,00 €" },
      { name: "Damenbart entfernen (Fadentechnik)", price: "8,00 €" },
    ],
  },
];

export default priceList;
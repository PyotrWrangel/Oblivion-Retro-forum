// File di prova da lanciare con: node src/data/prova.js
import { paginate } from "./paginate.js";
import { testoProva } from "./testoProva.js";

// --- Prova 1: testo cortissimo, si controlla a occhio ---
console.log("--- Prova 1 ---");
console.log(paginate("a b c d e f g", 3));
// atteso: [ 'a b c', 'd e f', 'g' ]

// --- Prova 2: le 700 parole numerate, 300 per pagina ---
const pages = paginate(testoProva, 300);

console.log("--- Prova 2 ---");
console.log("numero di pagine:", pages.length);   // atteso: 3

pages.forEach((pagina, i) => {
    const parole = pagina.split(" ");
    console.log(
        "pagina", i,
        "| parole:", parole.length,
        "| da", parole[0],
        "a", parole[parole.length - 1]
    );
});

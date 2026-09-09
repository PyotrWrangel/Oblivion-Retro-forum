/**
 * I testi in src/data usano "\n" singoli come andata a capo voluta, ma in
 * Markdown un a-capo singolo vale solo come spazio. Qui lo convertiamo in un
 * "hard break" (due spazi a fine riga) così react-markdown genera un <br>.
 *
 * Preferibile a `white-space: pre-line`, che renderebbe visibili anche gli
 * a-capo presenti TRA un <p> e l'altro, raddoppiando le spaziature.
 */
export function withLineBreaks(text) {
  return String(text ?? "").replace(/([^\n])\n(?!\n)/g, "$1  \n");
}

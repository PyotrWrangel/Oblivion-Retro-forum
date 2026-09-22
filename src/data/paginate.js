
export function paginate(testo, parolePerPagina) {
    if(!testo) return [];

    const parole = testo.split(" ");
    const pages = [];
    
    for (let i = 0; i < parole.length; i += parolePerPagina) {
        pages.push(parole.slice(i, i + parolePerPagina).join(" "));
    }
    return pages;

}

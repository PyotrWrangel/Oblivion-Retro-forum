import Card from "../components/Card";
import Header from "../components/Header";
import cardImage from "../assets/forum_join.jpg";
import cardLogo from "../assets/O_logo.gif";

function Homepage() {
    return (
    <>
    <Header></Header>
    <Card
    title="The Elder Scrolls IV Oblivion."
    logo={cardLogo}
    text={`The Elder Scrolls IV: Oblivion è l'attesissimo quarto capitolo della serie TES prodotto da Bethesda Game Studios per PC e X-Box 360.\nLa storia non presenta collegamenti diretti con quella di Morrowind e si svolge nella provincia centrale di Cyrodiil.`}
    image={cardImage}

    ></Card>

    <Card
    title="NUOVA FUNZIONE CERCA..."
    text= {`Continua il progetto del Questiario che grazie all'aiuto un po' di tutti è arrivato alla bellezza di 174 quest e 150 screenshoot del gioco (al momento in cui scrivo).
Interessanti aggiunte sono le quest delle Shivering Isles, dell'espansione Knights of the Nine, nonchè numerose quest aggiunte nella sezione Varie.

^^" Ho deciso di non levare per il momento il link alle vecchie guide per motivi di indicizzazione.

Abbiamo attivato inoltre una piccola funzione per cercare tra le quest, che potete trovate direttamente nella colonna qui a destra!

Rowen 19/7/2008
`}></Card>
    </>
    )
}

export default Homepage;
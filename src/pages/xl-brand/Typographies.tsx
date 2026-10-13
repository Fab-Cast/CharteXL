import { useState } from 'react'

function Typographies() {
    /* const [name] = useState("Fab") */


    /* HEADING */

    const heading1 = {
        fontFamily: "MuseoSans, sans-serif",
        fontWeight: 900,
        fontSize: "3.5rem",
        letterSpacing: "-0.03em"
    };

    const heading2 = {
        fontFamily: "MuseoSans, sans-serif",
        fontWeight: 900,
        fontSize: "2.5rem",
        letterSpacing: "-0.02em"
    };

    const heading3 = {
        fontFamily: "MuseoSans, sans-serif",
        fontWeight: 700,
        fontSize: "2rem",
        letterSpacing: "-0.01em"
    };

    const heading4 = {
        fontFamily: "MuseoSans, sans-serif",
        fontWeight: 700,
        fontSize: "1.5rem",
    };

    const heading5 = {
        fontFamily: "MuseoSans, sans-serif",
        fontWeight: 500,
        fontSize: "1.25rem",
    };
    const heading6 = {
        fontFamily: "MuseoSans, sans-serif",
        fontWeight: 500,
        fontSize: "1rem",
    };

    /* BODY */

    const bodyLight = {
        fontFamily: "Inter, sans-serif",
        fontWeight: 300,
        fontSize: "1rem",
    };

    const bodyNormal = {
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
        fontSize: "1rem",
    };

    const bodyBold = {
        fontFamily: "Inter, sans-serif",
        fontWeight: 700,
        fontSize: "1rem",
    };

    const bodyItalic = {
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
        fontStyle: "italic",
        fontSize: "1rem",
    };

    const bodyImportant = {
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
        fontSize: "1.125rem",
    };

    const bodyCaption = {
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
        fontSize: "0.875rem",
    };



    return (
        <>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <div className="p-5 bg-gray-100 rounded mb-5">
                        <h4>Règles Typographiques</h4>
                        <span className="bg-gray-300 p-1">(todo : ajouter les liens de téléchargement)</span>
                        <p className="lead">Les typographies constituent un élément prépondérant du style graphique, elles doivent être respectées.</p>
                        <h6>"Inter"</h6>
                        <p className="lead">Cette typographie est recommandée pour des textes courants longs. Il est possible d'utiliser Inter en italique et dans toutes ses graisses.</p>
                        <h6>"Museo Sans"</h6>
                        <p className="lead">Museo Sans 500, 700 et 900 sont les fonts destinées à être utilisées pour le titrage des documents : titres, sous-titres etc. Les trois graisses doivent être utilisées prioritairement pour les grands titres et les accroches (affiches, couvertures, gros titres...).</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-xxl-4">
                    <h6>“Inter”</h6>
                    <div className="d-flex flex-column p-3 mb-3 border rounded">
                        <h6>Texte "light"</h6>
                        <span className="text-muted">Texte light : Inter-Light / 1rem</span>
                        <span style={bodyLight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        <hr />
                        <h6>Texte "normal"</h6>
                        <span className="text-muted">Texte normal : Inter-Regular / 1rem</span>
                        <span style={bodyNormal}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        <hr />
                        <h6>Texte "gras"</h6>
                        <span className="text-muted">Texte gras : Inter-Bold / 1rem</span>
                        <span style={bodyBold}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        <hr />
                        <h6>Texte "italique"</h6>
                        <span className="text-muted">Texte italique : Inter-RegularItalic / 1rem</span>
                        <span style={bodyItalic}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        <hr />
                        <h6>Texte "important"</h6>
                        <span className="text-muted">Texte important : Inter-Regular  / 1.125rem</span>
                        <span style={bodyImportant}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        <hr />
                        <h6>Texte "Caption - Légende"</h6>
                        <span className="text-muted">Texte caption : Inter-Regular / 0.875rem</span>
                        <span style={bodyCaption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    </div>
                </div>
                <div className="col-12 col-xxl-4">
                    <h6>“Museo Sans”</h6>
                    <div className="d-flex flex-column p-3 mb-3 border rounded">
                        <span style={heading1}>Niveau 1</span>
                        <span className="text-muted d-flex">Titre principal : Museo Sans 900 / 3.5rem</span>
                        <span className="text-muted d-flex">Espacement des caractères -3%</span>
                        <hr />
                        <span style={heading2}>Niveau 2</span>
                        <span className="text-muted d-flex">Titre de second niveau : Museo Sans 700 / 2.5rem</span>
                        <span className="text-muted d-flex">Espacement des caractères -2%</span>
                        <hr />
                        <span style={heading3}>Niveau 3</span>
                        <span className="text-muted d-flex">Titre de troisième niveau : Museo Sans 500 / 2rem</span>
                        <span className="text-muted d-flex">Espacement des caractères -1%</span>
                        <hr />
                        <span style={heading4}>Niveau 4</span>
                        <span className="text-muted d-flex">Titre de quatrième niveau : Museo Sans 500 / 1.5rem</span>
                        <hr />
                        <span style={heading5}>Niveau 5</span>
                        <span className="text-muted d-flex">Titre de cinquième niveau : Museo Sans 500 / 1.25rem</span>
                        <hr />
                        <span style={heading6}>Niveau 6</span>
                        <span className="text-muted d-flex">Titre de sixième niveau : Museo Sans 500 / 1rem</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Typographies

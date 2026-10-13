import { useState } from 'react'

function Typographies() {
    /* const [name] = useState("Fab") */

    const heading1 = {
        fontFamily: "Inter, sans-serif",
        fontWeight: "900",
        fontSize: "2.5rem",
        letterSpacing: "-0.03em",
    };

    const heading2 = {
        fontFamily: "Inter, sans-serif",
        fontWeight: "800",
        fontSize: "2rem",
        letterSpacing: "-0.025em",
    };

    const heading3 = {
        fontFamily: "Inter, sans-serif",
        fontWeight: "700",
        fontSize: "1.75rem",
        letterSpacing: "-0.02em",
    };

    const heading4 = {
        fontFamily: "Inter, sans-serif",
        fontWeight: "600",
        fontSize: "1.5rem",
        letterSpacing: "-0.015em",
    };

    const heading5 = {
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        fontSize: "1.25rem",
        letterSpacing: "-0.0125em",
    };
    const heading6 = {
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        fontSize: "1rem",
    };

    return (
        <>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <div className="p-5 bg-gray-100 rounded mb-5">
                        <h4>Règles Typographiques</h4>
                        <p className="lead">La typographie utilisée pour l'ensemble des applications est “Inter”. Ce choix garantit une excellente lisibilité sur tous les supports et toutes les tailles d'écran.</p>
                        <a href="../assets/fonts/inter.zip" download>Télécharger la font "Inter".</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <div className="row">
                        <div className="col-6">
                            <h6>Tailles de texte</h6>
                            <div className="d-flex flex-column p-3 mb-3 border rounded">
                                <h6>Taille “xs”</h6>
                                <span className="text-muted">Taille : 10.5px / 0.75rem</span>
                                <hr />
                                <h6>Taille “sm”</h6>
                                <span className="text-muted">Taille : 12.25px / 0.875rem</span>
                                <hr />
                                <h6>Taille de base (body)</h6>
                                <span className="text-muted">Taille : 14px / 1rem</span>
                                <span className="text-muted">Weight : Regular</span>
                                <span className="text-muted">Couleur : gray-900</span>
                                <hr />
                                <h6>Taille “lg”</h6>
                                <span className="text-muted">Taille : 15.75px / 1.125rem</span>
                                <hr />
                                <h6>Taille “xl”</h6>
                                <span className="text-muted">Taille : 17.5px / 1.25rem</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <h6>Tailles des headings</h6>
                            <div className="d-flex flex-column p-3 mb-3 border rounded">
                                <span style={heading1}>Niveau 1</span>
                                <span className="text-muted">Taille : 35px / 2.5rem</span>
                                <span className="text-muted">Weight : "Inter-Black"</span>
                                <span className="text-muted">line-height: 1.5</span>
                                <span className="text-muted">letterSpacing: -0.03em</span>
                                <hr />
                                <span style={heading2}>Niveau 2</span>
                                <span className="text-muted">Taille : 28px / 2rem</span>
                                <span className="text-muted">Weight : "Inter-ExtraBold"</span>
                                <span className="text-muted">line-height: 1.5</span>
                                <span className="text-muted">letterSpacing: -0.025em</span>
                                <hr />
                                <span style={heading3}>Niveau 3</span>
                                <span className="text-muted">Taille : 24.5px / 1.75rem</span>
                                <span className="text-muted">Weight : "Inter-Bold"</span>
                                <span className="text-muted">line-height: 1.5</span>
                                <span className="text-muted">letterSpacing: -0.02em</span>
                                <hr />
                                <span style={heading4}>Niveau 4</span>
                                <span className="text-muted">Taille : 21px / 1.5rem</span>
                                <span className="text-muted">Weight : "Inter-SemiBold"</span>
                                <span className="text-muted">line-height: 1.5</span>
                                <span className="text-muted">letterSpacing: -0.015em</span>
                                <hr />
                                <span style={heading5}>Niveau 5</span>
                                <span className="text-muted">Taille : 17.5px / 1.25rem</span>
                                <span className="text-muted">Weight : "Inter-Medium"</span>
                                <span className="text-muted">line-height: 1.5</span>
                                <span className="text-muted">letterSpacing: -0.0125em</span>
                                <hr />
                                <span style={heading6}>Niveau 6</span>
                                <span className="text-muted">Taille : 14px / 1rem</span>
                                <span className="text-muted">Weight : "Inter-Medium"</span>
                                <span className="text-muted">line-height: 1.5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Typographies

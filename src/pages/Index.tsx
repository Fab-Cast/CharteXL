import { useState } from 'react'

function Index() {
    /* const [name] = useState("Fab") */

    return (
        <div className="row">
            <div className="col-4 offset-4 vh-100 d-flex flex-column justify-content-center">
                <h4>Introduction TEST 2</h4>
                <p className="lead mb-5">Ce document est présenté en trois parties distinctes. Une partie charte graphique, une partie services et une partie design system.</p>
                <h6>La charte graphique</h6>
                <p>Cette charte graphique est le document qui contient l'ensemble des règles liées la marque XL Prog et son identité visuelle. Elle permet de donner une cohérence à la marque et à l'entreprise, en interne comme en externe (agences, partenaires, clients, médias).</p>
                <p>Une charte graphique est donc indispensable pour expliquer :</p>
                <ul>
                    <li>Comment s'articule l'identité visuelle XL Prog.</li>
                    <li>Quelles sont les typographies et les couleurs à utiliser.</li>
                    <li>Comment bien utiliser son logo.</li>
                    <li>Dans quel univers graphique s'inscrit la marque.</li>
                </ul>

                <h6>Les services</h6>
                <p>Cette partie référence les couleurs et les logos des différents services XL (PaieXL, FactureXL, LabXL etc.) et explique comment créer de nouveaux logos.</p>
                
                <h6>Le design system</h6>
                <p>Un design system est un ensemble de règles utiles pour créer des interfaces numériques cohérentes entre les différents services XL Prog. Il définit les composants et outils, et centralise tous les éléments visuels et fonctionnels nécessaires à la conception d'une application.</p>
                <p>Ce système regroupe des styles, des composants et des guides d'usage. Il facilite la collaboration entre designers, développeurs et chefs de projet.</p>
            </div>
        </div>
    )
}

export default Index

import { useState } from 'react'
import papeterieExemple from '../../assets/img/papeterie-exemple.png'
import posterExemple from '../../assets/img/poster-exemple.png'


function Photographie() {
    /* const [name] = useState("Fab") */


    return (
        <>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <div className="p-5 bg-gray-100 rounded mb-5">
                        <h4>La photographie</h4>
                        <p className="lead">La photographie occupe une place centrale dans la réalisation des visuels.</p>
                        <p className="lead">Elle permet de transmettre des messages de manière authentique et émotionnelle, elle ancre la communication dans le réel, renforce la crédibilité de la marque auprès de son public, valorise les produits ou les valeurs de l'entreprise à travers des mises en scène maîtrisées, facilite l'engagement du public en rendant les contenus plus humains.</p>
                        <p className="lead">Style photographique : Utiliser des angles qui suggèrent le mouvement et l'action. Éviter les prises de vue statiques et plates.</p>
                        <p className="lead">Par exemple, montrer les équipes en train de collaborer, de résoudre des problèmes avec la technologie. Mettre en valeur la dimension humaine des services que nous développons. Montrer comment les produits sont utilisés sur le terrain lorsque cela est possible.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-xxl-3">
                    <h6>Exemple d'affiche</h6>
                    <img src={posterExemple} alt="exemple poster" className="border rounded shadow w-100" />
                </div>
            </div>
        </>
    )
}

export default Photographie

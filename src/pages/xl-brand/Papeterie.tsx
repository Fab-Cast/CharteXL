import { useState } from 'react'
import papeterieExemple from '../../assets/img/papeterie-exemple.png'
import carteVisiteExemple from '../../assets/img/carte-visite-exemple.png'
import papeterieCarteExemple from '../../assets/img/papeterie-carte-exemple.png'


function Papeterie() {
    /* const [name] = useState("Fab") */


    return (
        <>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <div className="p-5 bg-gray-100 rounded mb-5">
                        <h4>Exemples de papeterie XL Prog.</h4>
                        <span className="bg-gray-300 p-1">(todo : ajouter les téléchargements Word, Open office etc.)</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <div className="row">
                        <div className="col-4">
                            <h6>Mise en page A4</h6>
                            <img src={papeterieExemple} alt="exemple papeterie" className="border rounded shadow w-100" />
                        </div>
                        <div className="col-4">
                            <h6>Carte de visite</h6>
                            <img src={carteVisiteExemple} alt="exemple carte de visite" className="border rounded shadow w-100" />
                        </div>
                        <div className="col-4">
                            <h6>Vue d'ensemble</h6>
                            <img src={papeterieCarteExemple} alt="exemple carte de visite et papeterie" className="border rounded shadow w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Papeterie

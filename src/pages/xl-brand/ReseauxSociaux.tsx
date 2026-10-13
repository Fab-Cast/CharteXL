import { useState } from 'react'
import papeterieExemple from '../../assets/img/papeterie-exemple.png'
import reseauxFb from '../../assets/img/reseaux-fb.png'


function ReseauxSociaux() {
    /* const [name] = useState("Fab") */


    return (
        <>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <div className="p-5 bg-gray-100 rounded mb-5">
                        <h4>Réseaux Sociaux</h4>
                        <span className="bg-gray-300 p-1">(todo : définir une ligne editoriale, ajouter des exemples, ajouter des assets réutilisables)</span>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <img src={reseauxFb} alt="exemple Facebook" className="border rounded shadow w-100" />
                </div>
            </div>
        </>
    )
}

export default ReseauxSociaux

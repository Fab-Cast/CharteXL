import { useState } from 'react'
import btnConstruction from '../../assets/img/btn-construction.png'

import btnDangerOutlined from '../../assets/img/boutons/btn-danger-outlined.png'
import btnDanger from '../../assets/img/boutons/btn-danger.png'
import btnPrimaryOutlined from '../../assets/img/boutons/btn-primary-outlined.png'
import btnPrimary from '../../assets/img/boutons/btn-primary.png'
import btnSecondaryOutlined from '../../assets/img/boutons/btn-secondary-outlined.png'
import btnSecondary from '../../assets/img/boutons/btn-secondary.png'



function Boutons() {
    /* const [name] = useState("Fab") */

    const palette = {
        'blue': '#2968FA',
        'indigo': '#7b7df0',
        'purple': '#bf71e6',
        'pink': '#eb62d0',
        'red': '#fc435c',
        'orange': '#f09449',
        'yellow': '#ffd022',
        'green': '#1eba62',
        'teal': '#03acb8',
        'cyan': '#13ccbb'
    }

    const gris = {
        'gray-50': '#f3f5fc',
        'gray-100': '#eff1f9',
        'gray-200': '#e7e8f1',
        'gray-300': '#dadbe7',
        'gray-400': '#c6c7d6',
        'gray-500': '#9ea0b9',
        'gray-600': '#787a91',
        'gray-700': '#434453',
        'gray-800': '#1e1e27',
        'gray-900': '#11111a',
        'gray-950': '#0a0a0f'
    }


    return (
        <>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <div className="p-5 bg-gray-100 rounded mb-5">
                        <h4>Boutons</h4>
                        <p className="lead">Respectez l'aspect et le style défini ici.</p>
                        <p className="lead">Déclinez les versions du bouton selon vos besoins.</p>
                        <p className="lead">Un bouton de base a pour fond une des couleurs de la palette des couleurs primaire et se fonce légèrepment au survol de la souris. Sa version "outlined" a un fond blanc et utilise une couleur légèrement foncée de la palette pour son texte et sa bordure. </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <div className="row">
                        <div className="col-3">
                            <h6>Primaire</h6>
                            <img style={{ zoom: .6 }} src={btnPrimary} alt="Btn" className="" />
                            <h6>Primaire (outlined)</h6>
                            <img style={{ zoom: .6 }} src={btnPrimaryOutlined} alt="Btn" className="mb-5" />

                            <h6>Secondaire</h6>
                            <img style={{ zoom: .6 }} src={btnSecondary} alt="Btn" className="" />
                            <h6>Secondaire (outlined)</h6>
                            <img style={{ zoom: .6 }} src={btnSecondaryOutlined} alt="Btn" className="mb-5" />

                            <h6>Danger</h6>
                            <img style={{ zoom: .6 }} src={btnDanger} alt="Btn" className="" />
                            <h6>Danger (outlined)</h6>
                            <img style={{ zoom: .6 }} src={btnDangerOutlined} alt="Btn" className="mb-5" />

                            <h6>Etc.</h6>
                            <p>Déclinez selon vos besoins (success, warning, dark etc.)</p>


                        </div>
                        <div className="col-5">
                            <h6>Construction</h6>
                            <div className="border rounded p-4 shadow">
                                <img src={btnConstruction} alt="Btn construction" className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Boutons

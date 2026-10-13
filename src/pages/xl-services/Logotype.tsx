import { useState } from 'react'
import logoXlprog from '../../assets/img/logos-xlprog/logo-xlprog.svg'
import logoXlprogNoir from '../../assets/img/logos-xlprog/logo-xlprog-noir.svg'
import logoXlprogBlanc from '../../assets/img/logos-xlprog/logo-xlprog-blanc.svg'
import logoXlprogUrl from '../../assets/img/logos-xlprog/logo-xlprog-url.svg'
import logoXlprogUrlNoir from '../../assets/img/logos-xlprog/logo-xlprog-url-noir.svg'
import logoXlprogUrlBlanc from '../../assets/img/logos-xlprog/logo-xlprog-url-blanc.svg'
import logoXlprogPrintShadow from '../../assets/img/logos-xlprog/logo-xlprog-print-shadow.svg'
import logoXlprogPrint from '../../assets/img/logos-xlprog/logo-xlprog-print.svg'
import logoXlprogUrlPrint from '../../assets/img/logos-xlprog/logo-xlprog-url-print.svg'
import logoZoneDeProtection from '../../assets/img/logo-zone-de-protection.svg'
import logoTailleMinimale from '../../assets/img/logo-taille-minimale.svg'
import logoXlprogSignature from '../../assets/img/logos-xlprog/logo-xlprog-signature.svg'
import logoSignatureConstruction from '../../assets/img/logo-signature-construction.svg'
import logoPictogrammeNoir from '../../assets/img/logos-xlprog/logo-xlprog-pictogramme-noir.svg'
import logoPictogrammeBlanc from '../../assets/img/logos-xlprog/logo-xlprog-pictogramme-blanc.svg'
import logoCoinTopBlanc from '../../assets/img/logos-xlprog/logo-coin-top-blanc.svg'
import logoCoinBotBlanc from '../../assets/img/logos-xlprog/logo-coin-bot-blanc.svg'
import logoCoinTopNoir from '../../assets/img/logos-xlprog/logo-coin-top-noir.svg'
import logoCoinBotNoir from '../../assets/img/logos-xlprog/logo-coin-bot-noir.svg'
import logoCoinTopSecondary from '../../assets/img/logos-xlprog/logo-coin-top-secondary.svg'
import logoCoinBotSecondary from '../../assets/img/logos-xlprog/logo-coin-bot-secondary.svg'
import logoCoinExemple from '../../assets/img/logo-coin-exemple.png'
import bgTransparency from '../../assets/img/bg-transparency.png'


import accueilWhite from '../../assets/img/logos-services/accueil-white.svg'
import accueil from '../../assets/img/logos-services/accueil.svg'
import caisseWhite from '../../assets/img/logos-services/caisse-white.svg'
import caisse from '../../assets/img/logos-services/caisse.svg'
import comptaWhite from '../../assets/img/logos-services/compta-white.svg'
import compta from '../../assets/img/logos-services/compta.svg'
import factureWhite from '../../assets/img/logos-services/facture-white.svg'
import facture from '../../assets/img/logos-services/facture.svg'
import labWhite from '../../assets/img/logos-services/lab-white.svg'
import lab from '../../assets/img/logos-services/lab.svg'
import netWhite from '../../assets/img/logos-services/net-white.svg'
import net from '../../assets/img/logos-services/net.svg'
import paieWhite from '../../assets/img/logos-services/paie-white.svg'
import paie from '../../assets/img/logos-services/paie.svg'
import serveurWhite from '../../assets/img/logos-services/serveur-white.svg'
import serveur from '../../assets/img/logos-services/serveur.svg'

import alignement from '../../assets/img/logos-services/construction/alignement.png'
import couleurs from '../../assets/img/logos-services/construction/couleurs.png'
import espacement from '../../assets/img/logos-services/construction/espacement.png'
import font from '../../assets/img/logos-services/construction/font.png'



function Logotype() {
    /* const [name] = useState("Fab") */

    const bgColors = {
        'rouge': '#BD0D22',
        'violet': '#930DBC',
        'gris-fonce': '#3E3E40',
        'bleu': '#0E59BE',
        'bleu-ciel': '#00BCC7',
        'orange': '#F0920A',
        'vert': '#95BD0D',
    }

    return (
        <>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <div className="p-5 bg-gray-100 rounded mb-5">
                        <h4>Les logotypes des services XL</h4>
                        <p className="lead">Dans les applications XL Prog, quand le logo est placé dans le menu de navigation principal il doit être utilisé en blanc sur fond de couleur du service et sa hauteur doit être de 30px.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <div className="row">
                        <div className="col-3">
                            <h6>Logos des services</h6>
                            <div className="d-flex flex-column flex-wrap gap-3">
                                <div className="border rounded shadow-sm overflow-hidden">
                                    <div className="py-3 px-4" style={{ backgroundColor: bgColors['gris-fonce'] }}>
                                        <img style={{ height: '30px' }} src={accueilWhite} alt="Logo service" className="" />
                                    </div>
                                    <div className="py-3 px-4">
                                        <img style={{ height: '30px' }} src={accueil} alt="Logo service" className="" />
                                    </div>
                                </div>
                                <div className="border rounded shadow-sm overflow-hidden">
                                    <div className="py-3 px-4" style={{ backgroundColor: bgColors['rouge'] }}>
                                        <img style={{ height: '30px' }} src={caisseWhite} alt="Logo service" className="" />
                                    </div>
                                    <div className="py-3 px-4">
                                        <img style={{ height: '30px' }} src={caisse} alt="Logo service" className="" />
                                    </div>
                                </div>
                                <div className="border rounded shadow-sm overflow-hidden">
                                    <div className="py-3 px-4" style={{ backgroundColor: bgColors['violet'] }}>
                                        <img style={{ height: '30px' }} src={comptaWhite} alt="Logo service" className="" />
                                    </div>
                                    <div className="py-3 px-4">
                                        <img style={{ height: '30px' }} src={compta} alt="Logo service" className="" />
                                    </div>
                                </div>
                                <div className="border rounded shadow-sm overflow-hidden">
                                    <div className="py-3 px-4" style={{ backgroundColor: bgColors['bleu'] }}>
                                        <img style={{ height: '30px' }} src={factureWhite} alt="Logo service" className="" />
                                    </div>
                                    <div className="py-3 px-4">
                                        <img style={{ height: '30px' }} src={facture} alt="Logo service" className="" />
                                    </div>
                                </div>
                                <div className="border rounded shadow-sm overflow-hidden">
                                    <div className="py-3 px-4" style={{ backgroundColor: bgColors['bleu-ciel'] }}>
                                        <img style={{ height: '30px' }} src={labWhite} alt="Logo service" className="" />
                                    </div>
                                    <div className="py-3 px-4">
                                        <img style={{ height: '30px' }} src={lab} alt="Logo service" className="" />
                                    </div>
                                </div>
                                <div className="border rounded shadow-sm overflow-hidden">
                                    <div className="py-3 px-4" style={{ backgroundColor: bgColors['orange'] }}>
                                        <img style={{ height: '30px' }} src={netWhite} alt="Logo service" className="" />
                                    </div>
                                    <div className="py-3 px-4">
                                        <img style={{ height: '30px' }} src={net} alt="Logo service" className="" />
                                    </div>
                                </div>
                                <div className="border rounded shadow-sm overflow-hidden">
                                    <div className="py-3 px-4" style={{ backgroundColor: bgColors['vert'] }}>
                                        <img style={{ height: '30px' }} src={paieWhite} alt="Logo service" className="" />
                                    </div>
                                    <div className="py-3 px-4">
                                        <img style={{ height: '30px' }} src={paie} alt="Logo service" className="" />
                                    </div>
                                </div>
                                <div className="border rounded shadow-sm overflow-hidden">
                                    <div className="py-3 px-4" style={{ backgroundColor: bgColors['gris-fonce'] }}>
                                        <img style={{ height: '30px' }} src={serveurWhite} alt="Logo service" className="" />
                                    </div>
                                    <div className="py-3 px-4">
                                        <img style={{ height: '30px' }} src={serveur} alt="Logo service" className="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h6>Etapes de construction</h6>
                            <div className="mb-4">
                                <h6>1. Police : MuseoSans 700</h6>
                                <div className="rounded bg-dark mb-3 p-4">
                                    <img style={{}} src={font} alt="Logo construction" className="" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <h6>2. Alignement</h6>
                                <div className="rounded bg-dark mb-3 p-4">
                                    <img style={{}} src={alignement} alt="Logo construction" className="" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <h6>3. Espacement texte / logo</h6>
                                <div className="rounded bg-dark mb-3 p-4">
                                    <img style={{}} src={espacement} alt="Logo construction" className="" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <h6>4. Couleurs</h6>
                                <div className="rounded border mb-3 p-4">
                                    <img style={{}} src={couleurs} alt="Logo construction" className="" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <h6>Exemple :</h6>
                                <div className="border rounded overflow-hidden shadow-sm mb-3 ">
                                    <div className="p-4" style={{ backgroundColor: bgColors['rouge'] }}>
                                        <img style={{ height: '40px' }} src={caisseWhite} alt="Logo service" className="" />
                                    </div>
                                    <div className="p-4">
                                        <img style={{ height: '40px' }} src={caisse} alt="Logo service" className="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-6">
                            <h6>Outil de construction</h6>
                            <div className="row">
                                <div className="col-12">
                                    <div className="bg-dark p-3 rounded text-white font-monospace">
                                        <span className="bg-gray-300 text-dark p-1">(todo : creer outil)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logotype

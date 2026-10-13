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



function Logotype() {
    /* const [name] = useState("Fab") */

    const colors = {
        'logo-1-1': '#0097C2',
        'logo-1-2': '#6FC200',
        'logo-1-3': '#006628',
        'logo-1-4': '#3B454D',
    }

    const colorsBg = {

        'primary-1-1': '#9CE9FF',
        'primary-1-2': '#52CCEE',
        'primary-1-3': '#2CB6DE',
        'primary-1-4': '#0097C2',
        'primary-1-5': '#027FA3',
        'primary-1-6': '#005F7A',
        'primary-1-7': '#00465A',

        'primary-2-1': '#E5FBC8',
        'primary-2-2': '#B7EA73',
        'primary-2-3': '#8BD030',
        'primary-2-4': '#6FC200',
        'primary-2-5': '#62AB00',
        'primary-2-6': '#559500',
        'primary-2-7': '#3B6800',

        'secondary-1-1': '#ACFCCC',
        'secondary-1-2': '#5FEC96',
        'secondary-1-3': '#3DC873',
        'secondary-1-4': '#1DAC55',
        'secondary-1-5': '#048C3A',
        'secondary-1-6': '#006628',
        'secondary-1-7': '#004B1D',

        'secondary-2-1': '#DAE8F3',
        'secondary-2-2': '#BDCFDE',
        'secondary-2-3': '#90A3B3',
        'secondary-2-4': '#8295A5',
        'secondary-2-5': '#6E7F8C',
        'secondary-2-6': '#536370',
        'secondary-2-7': '#3B454D',

        'secondary-3-1': '#008080',

    }

    return (
        <>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <div className="p-5 bg-gray-100 rounded mb-5">
                        <h4>Le logotype</h4>
                        <p className="lead">Le logo est le moyen le plus reconnaissable de représenter la marque XL Prog. La section suivante explique comment il s'adapte à différentes situations, formats et communications.</p>
                        <p className="lead">le logo n'est pas modifiable, il est donc interdit de changer les couleurs, les typographies ou le positionnement de chacun des éléments.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-xxl-8">

                    <div className="row mb-5">
                        <div className="col-4">
                            <h6>Le logo "XL Prog" :</h6>
                            <p>Dans la mesure du possible, le logo à utiliser est celui en couleur. Si l'on souhaite créer un impact visuel avec un fond bleu, le logo peut être en blanc.</p>
                            <p>La typographie “Phino” est utilisée pour l'écriture de “Prog”</p>
                        </div>
                        <div className="col-4">
                            <div className="d-flex flex-column">
                                <div className="p-5 mb-3 border rounded d-flex flex-column align-items-center">
                                    <img style={{ height: '100px' }} src={logoXlprog} alt="Logo XL PROG" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-4">
                            <h6>Déclinaisons :</h6>
                            <p>Les combinaisons de couleurs sont présentées par ordre de priorité.</p>
                            <p>La typographie “Museo Sans 500” est utilisée pour l'écriture de l'url www.xlprog.nc</p>
                            <div className="div d-flex">
                                <div className="p-3" style={{ backgroundColor: colors['logo-1-1'] }}>#{colors['logo-1-1'].substring(1)}</div>
                                <div className="p-3" style={{ backgroundColor: colors['logo-1-2'] }}>#{colors['logo-1-2'].substring(1)}</div>
                                <div className="p-3" style={{ backgroundColor: colors['logo-1-3'] }}>#{colors['logo-1-3'].substring(1)}</div>
                                <div className="p-3" style={{ backgroundColor: colors['logo-1-4'] }}>#{colors['logo-1-4'].substring(1)}</div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="row gap-2">
                                <div className="col py-4 text-center border rounded mb-2"><img src={logoXlprog} style={{ height: '100px' }} alt="Logo XL PROG" className="" /></div>
                                <div className="col py-4 text-center border rounded mb-2"><img src={logoXlprogNoir} style={{ height: '100px' }} alt="Logo XL PROG" className="" /></div>
                                <div className="col py-4 text-center border rounded mb-2" style={{ backgroundColor: colorsBg['primary-1-4'] }}><img src={logoXlprogBlanc} style={{ height: '100px' }} alt="Logo XL PROG" className="" /></div>
                                <div className="col py-4 text-center border rounded mb-2" style={{ backgroundColor: colorsBg['secondary-2-7'] }}><img src={logoXlprogBlanc} style={{ height: '100px' }} alt="Logo XL PROG" className="" /></div>
                            </div>
                            <div className="row gap-2">
                                <div className="col py-4 text-center border rounded"><img src={logoXlprogUrl} style={{ height: '100px' }} alt="Logo XL PROG" className="" /></div>
                                <div className="col py-4 text-center border rounded"><img src={logoXlprogUrlNoir} style={{ height: '100px' }} alt="Logo XL PROG" className="" /></div>
                                <div className="col py-4 text-center border rounded" style={{ backgroundColor: colorsBg['primary-1-4'] }}><img src={logoXlprogUrlBlanc} style={{ height: '100px' }} alt="Logo XL PROG" className="" /></div>
                                <div className="col py-4 text-center border rounded" style={{ backgroundColor: colorsBg['secondary-2-7'] }}><img src={logoXlprogUrlBlanc} style={{ height: '100px' }} alt="Logo XL PROG" className="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-4">
                            <h6>Impressions grand format :</h6>
                            <p>Pour l'impression grand format, le logotype est décliné dans une variante avec des dégradés de couleurs.</p>
                        </div>
                        <div className="col-8">
                            <div className="col d-flex">
                                <img src={logoXlprogPrint} style={{ width: '50%' }} alt="Logo XL PROG" className="img-thumbnail p-5 me-2" />
                                <img src={logoXlprogUrlPrint} style={{ width: '50%' }} alt="Logo XL PROG" className="img-thumbnail p-5 me-2" />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-4">
                            <h6>Ombre portée :</h6>
                            <p>Selon le support d’impression utilisé, une ombre portée peut être ajoutée au logo pour plus de lisibilité</p>
                        </div>
                        <div className="col-8">
                            <img src={logoXlprogPrintShadow} style={{ width: '50%' }} alt="Logo XL PROG" className="img-thumbnail p-5 me-2" />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-4">
                            <h6>Zone de protection :</h6>
                            <p>La zone de protection correspond à l’espace obligatoire autour du logotype, aucun élément ne doit venir perturber cet espace. Elle définit la distance minimale à laquelle tout autre élément peut être positionné à proximité du logo.</p>
                            <p>La zone de protection du logo correspond à un tiers de la hauteur du logo.</p>
                        </div>
                        <div className="col-8">
                            <img style={{ width: '350px' }} src={logoZoneDeProtection} alt="Logo XL PROG" />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-4">
                            <h6>Taille minimale :</h6>
                            <p>Pour préserver sa lisibilité, le logo ne doit jamais être imprimé avec une hauteur inférieure à 15 mm ou 45 px pour les formats numériques.</p>
                        </div>
                        <div className="col-8">
                            <img src={logoTailleMinimale} style={{ height: '100px' }} alt="Logo XL PROG" />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-4">
                            <h6>Le logotype signature :</h6>
                        </div>
                        <div className="col-8">
                            <img src={logoXlprogSignature} style={{ height: '100px' }} alt="Logo XL PROG" className="mb-4" />
                            <h6>Construction :</h6>
                            <img src={logoSignatureConstruction} style={{ width: '600px' }} alt="Logo XL PROG" className="" />                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-4">
                            <h6>Le logo pictogramme :</h6>
                        </div>
                        <div className="col-8">
                            <img src={logoPictogrammeNoir} alt="Logo XL PROG" className="img-thumbnail p-3 me-2" />
                            <img src={logoPictogrammeBlanc} alt="Logo XL PROG" className="img-thumbnail bg-dark p-3 me-2" />                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-4">
                            <h6>Le logo en coin :</h6>
                        </div>
                        <div className="col-8">
                            <div className="col d-flex mb-3">
                                <img src={logoCoinTopBlanc} alt="Logo XL PROG" style={{ width: "33.33%" }} className="ps-5 pb-5 bg-transparency me-3" />
                                <img src={logoCoinTopNoir} alt="Logo XL PROG" style={{ width: "33.33%" }} className="ps-5 pb-5 bg-transparency me-3" />
                                <img src={logoCoinTopSecondary} alt="Logo XL PROG" style={{ width: "33.33%" }} className="ps-5 pb-5 bg-transparency" />
                            </div>
                            <div className="col d-flex mb-4">
                                <img src={logoCoinBotBlanc} alt="Logo XL PROG" style={{ width: "33.33%" }} className="ps-5 pt-5 bg-transparency me-3" />
                                <img src={logoCoinBotNoir} alt="Logo XL PROG" style={{ width: "33.33%" }} className="ps-5 pt-5 bg-transparency me-3" />
                                <img src={logoCoinBotSecondary} alt="Logo XL PROG" style={{ width: "33.33%" }} className="ps-5 pt-5 bg-transparency" />
                            </div>
                            <h6>Exemple :</h6>
                            <img src={logoCoinExemple} alt="Logo XL PROG" className="w-50" />                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Logotype

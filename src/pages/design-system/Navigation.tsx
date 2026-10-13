import { useState } from 'react'

import gridSystemGutters from '../../assets/img/grid-system-gutters.png'
import gridSystemNavV from '../../assets/img/grid-system-nav-vertical.png'
import gridSystemNavH from '../../assets/img/grid-system-nav-horizontal.png'
import { Link } from '@tanstack/react-router'
import paieWhite from '../../assets/img/logos-services/paie-white.svg'



function GridSystem() {
    /* const [name] = useState("Fab") */

    const colors = {
        'logo-1-1': '#0097C2',
        'logo-1-2': '#6FC200',
        'logo-1-3': '#006628',
        'logo-1-4': '#3B454D',
    }

    const bgColors = {
        'rouge': '#BD0D22',
        'violet': '#930DBC',
        'gris-fonce': '#3E3E40',
        'bleu': '#0E59BE',
        'bleu-ciel': '#00BCC7',
        'orange': '#F0920A',
        'vert': '#95BD0D',
    }


    const BtnNav = ({ btnLabel, active }: { btnLabel: string; active?: boolean }) => {

        const [isHover, setIsHover] = useState(false);
        const [isMouseDown, setIsMouseDown] = useState(false);

        const navBtnStyle = {
            background: active ? "#fff" : (isHover ? "#647d12" : "#799910"),
            padding: "0.45rem 1rem",
            color: active ? "#000" : "#fff",
            marginRight: ".5rem",
            borderColor: isMouseDown ? "#647d12" : ""

        }
        return <button style={navBtnStyle} onMouseDown={() => setIsMouseDown(true)} onMouseUp={() => setIsMouseDown(false)} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="btn">{btnLabel}</button>
    };

    return (
        <>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <div className="p-5 bg-gray-100 rounded mb-5">
                    <h4>Navigation</h4>
                    <p className="lead">Le seul élément distinctif d'une application XL est la couleur de fond de sa barre de navigation (menu). La couleur de fond doit être celle du service concerné. Cela permet à l'utilisateur de savoir en un coup d'oeil dans quelle application il se situe.</p>
                    <p className="lead">En dehors de la couleur de la barre de navigation, toutes les applications XL doivent autant que possible utiliser les mêmes couleurs, typographies, système de grille et le même jeu d'îcones.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <h6>Menu de navigation horizontal</h6>
                    <ol>
                        <li>La hauteur de la barre de navigation exacte doit être de 65px. (<Link to="/grid-system">Voir système de grille</Link>)</li>
                        <li>La couleur de fond de la barre de navigation doit correspondre à la couleur du service utilisée. (<Link to="/couleurs-services">Consulter les couleurs de services</Link>)</li>
                        <li>Le logo "serviceXL" (PaieXL, FactureXL, ComptaXL etc.) doit être de couleur blanche et avoir une hauteur exacte de 30px. (<Link to="/couleurs-services">Consulter les logos de services</Link>)</li>
                        <li>le logo doit être placé à 21px (1.5rem) du bord gauche. (<Link to="/grid-system">Voir système de grille</Link>)</li>
                        <li>Les éléments de navigation sont des boutons (<Link to="/boutons">Consulter les styles de boutons</Link>) qui ont pour couleur de fond par défaut la couleur de service légèrement foncée et ont pour couleur de fond "blanc" lorsque le bouton est actif.</li>
                    </ol>

                    <h6>Exemple avec le service PaieXL :</h6>
                    <div className="border border-bottom-0 pb-5">
                        <div style={{ background: "#95BD0D", height: "65px", paddingLeft: "1.5rem" }} className='d-flex align-items-center '>
                            <img style={{ height: '30px', marginRight: "1.5rem" }} src={paieWhite} alt="Logo service" className="" />
                            <BtnNav btnLabel="Fichier" />
                            <BtnNav btnLabel="Employé" />
                            <BtnNav btnLabel="Bulletin" active />
                            <BtnNav btnLabel="Edition" />
                            <BtnNav btnLabel="Paramètres" />
                            <BtnNav btnLabel="Factures" />
                            <BtnNav btnLabel="Aide" />
                        </div>
                        <div className="p-4">
                            <h4>Bulletin de septembre 2026</h4>
                            <div className="bg-gray-100 p-3 rounded">
                                <div className="row">
                                    <div className="col-2">
                                        <label className="form-label">Heures payées</label>
                                        <input type="text" value="169" className="form-control" />
                                    </div>
                                    <div className="col-2">
                                        <label className="form-label">Heures Supp 25%</label>
                                        <input type="text" value="0" className="form-control" />
                                    </div>
                                    <div className="col-2">
                                        <label className="form-label">Heures Maj 10%</label>
                                        <input type="text" value="0" className="form-control" />
                                    </div>
                                    <div className="col-2">
                                        <label className="form-label">Heures Maj 75%</label>
                                        <input type="text" value="0" className="form-control" />
                                    </div>
                                    <div className="col-2">
                                        <label className="form-label">Heures Maj 150%</label>
                                        <input type="text" value="0" className="form-control" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-2">
                                        <label className="form-label">Jours payés</label>
                                        <input type="text" value="26.00" className="form-control" />
                                    </div>
                                    <div className="col-2">
                                        <label className="form-label">Heures Supp 50%</label>
                                        <input type="text" value="0" className="form-control" />
                                    </div>
                                    <div className="col-2">
                                        <label className="form-label">Heures Maj 50%</label>
                                        <input type="text" value="0" className="form-control" />
                                    </div>
                                    <div className="col-2">
                                        <label className="form-label">Heures Maj 100%</label>
                                        <input type="text" value="0" className="form-control" />
                                    </div>
                                    <div className="col-2">
                                        <label className="form-label">Heures compl.</label>
                                        <input type="text" value="0" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 p-3 border rounded">
                                <div className="mb-3">
                                    <button className="btn btn-outline-gray-600 btn-sm me-2">Recalculer</button>
                                    <button className="btn btn-outline-gray-600 btn-sm me-2">Enregistrer</button>
                                    <button className="btn btn-outline-gray-600 btn-sm me-2">Annuler</button>
                                    <button className="btn btn-outline-gray-600 btn-sm me-2">Imprimer</button>
                                    <button className="btn btn-outline-gray-600 btn-sm me-2">Supprimer</button>
                                    <button className="btn btn-outline-gray-600 btn-sm me-2">Réinitialiser</button>
                                </div>
                                <table className="table table-sm table-borderd table-sm table-hover">
                                    <thead>
                                        <tr className="align-middle"> {/* Pos	Code	Type	Libellé	Nombre	Base	Taux	Montant	Retenues */}
                                            <th scope="col">Pos</th>
                                            <th scope="col">Code</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Libellé</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Base</th>
                                            <th scope="col">Taux</th>
                                            <th scope="col">Montant</th>
                                            <th scope="col">Retenues</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="align-middle">
                                            <td>100</td>
                                            <td>SALAME</td>
                                            <td>GI</td>
                                            <td>SALAIRE MENSUEL</td>
                                            <td>18.77</td>
                                            <td>169000.00</td>
                                            <td>0.000</td>
                                            <td>122005</td>
                                            <td>0</td>
                                            <td scope="row">
                                                <div className=" d-flex align-items-center">
                                                    <span style={{ fontSize: '22px' }} className="material-symbols-outlined text-danger">close</span>
                                                    <span style={{ fontSize: '22px' }} className="material-symbols-outlined text-success">cached</span>
                                                </div>                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>601</td>
                                            <td>CARMS2</td>
                                            <td>CS</td>
                                            <td>RUAMM TRANCHE 2</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td>1.250</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td scope="row">
                                                <div className=" d-flex align-items-center">
                                                    <span style={{ fontSize: '22px' }} className="material-symbols-outlined text-danger">close</span>
                                                    <span style={{ fontSize: '22px' }} className="material-symbols-outlined text-success">cached</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>100</td>
                                            <td>SALAME</td>
                                            <td>GI</td>
                                            <td>SALAIRE MENSUEL</td>
                                            <td>18.77</td>
                                            <td>169000.00</td>
                                            <td>0.000</td>
                                            <td>122005</td>
                                            <td>0</td>
                                            <td scope="row">
                                                <div className=" d-flex align-items-center">
                                                    <span style={{ fontSize: '22px' }} className="material-symbols-outlined text-danger">close</span>
                                                    <span style={{ fontSize: '22px' }} className="material-symbols-outlined text-success">cached</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>601</td>
                                            <td>CARMS2</td>
                                            <td>CS</td>
                                            <td>RUAMM TRANCHE 2</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td>1.250</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td scope="row">
                                                <div className=" d-flex align-items-center">
                                                    <span style={{ fontSize: '22px' }} className="material-symbols-outlined text-danger">close</span>
                                                    <span style={{ fontSize: '22px' }} className="material-symbols-outlined text-success">cached</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="d-flex">
                                    <button className="btn btn-secondary ms-auto me-2">Annuler</button>
                                    <button className="btn btn-primary">Enregistrer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GridSystem

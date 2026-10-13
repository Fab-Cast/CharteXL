import { useState } from 'react'

import gridSystemGutters from '../../assets/img/grid-system-gutters.png'
import gridSystemNavV from '../../assets/img/grid-system-nav-vertical.png'
import gridSystemNavH from '../../assets/img/grid-system-nav-horizontal.png'



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

    return (
        <>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <div className="p-5 bg-gray-100 rounded mb-5">
                        <h4>Grid system</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <div className="row mb-5">
                        <div className="col-7">
                            <h6>Paddings de la grille</h6>
                            <div className="border rounded p-4 shadow">
                                <img src={gridSystemGutters} alt="Grid system" className="w-100" />
                            </div>
                        </div>
                        <div className="col-5">
                            <h6>Barre de navigation horizontale</h6>
                            <div className="border rounded p-4 shadow">
                                <img src={gridSystemNavH} alt="Grid system" className="w-100" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-7">
                            <h6>Barre de navigation verticale</h6>
                            <div className="border rounded p-4 shadow">
                                <img src={gridSystemNavV} alt="Grid system" className="w-100" />
                            </div>
                        </div>
                        <div className="col-6">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GridSystem

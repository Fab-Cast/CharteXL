import { useState } from 'react'

function Couleurs() {
    /* const [name] = useState("Fab") */

    const colors = {

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
                        <h4>Système de couleurs</h4>
                        <p className="lead">Notre système de couleurs est organisé en groupes de couleurs distincts, chacun ayant un objectif défini afin d'assurer la cohérence tout en s'adaptant aux différents besoins de communication.</p>
                        <p className="lead">La couleur apporte impact, dynamisme et plaisir à toute identité visuelle. Nous l'utilisons pour nous démarquer sur le marché, valoriser nos contenus et guider efficacement nos utilisateurs à travers nos communications.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <div className="row mb-5">
                        <div className="col-4">
                            <h6>Couleurs principales</h6>
                            <p>Utilisées intentionnellement et de façon répétée, nos couleurs créent des souvenirs et du sens. Ce sont ces couleurs par lesquelles nous voulons que les gens se souviennent de nous.</p>
                        </div>
                        <div className="col-8">
                            <div className="d-flex flex-row">
                                <div style={{ backgroundColor: colors['primary-1-4'] }} className="ratio ratio-1x1 rounded me-3 p-5">{colors['primary-1-4']}</div>
                                <div style={{ backgroundColor: colors['secondary-2-1'] }} className="ratio ratio-1x1 rounded me-3 p-5">{colors['secondary-2-1']}</div>
                                <div style={{ backgroundColor: colors['secondary-2-7'] }} className="ratio ratio-1x1 rounded  p-5">{colors['secondary-2-7']}</div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-4">
                            <h6>Palette principale</h6>
                            <p>Utilisées intentionnellement et de façon répétée, nos couleurs créent des souvenirs et du sens. Ce sont ces couleurs par lesquelles nous voulons que les gens se souviennent de nous.</p>
                        </div>
                        <div className="col-8">
                            <div className="d-flex flex-row">
                                <div style={{ backgroundColor: colors['primary-1-1'] }} className="ratio ratio-1x1 rounded me-3 p-3">{colors['primary-1-1']}</div>
                                <div style={{ backgroundColor: colors['primary-1-2'] }} className="ratio ratio-1x1 rounded me-3 p-3">{colors['primary-1-2']}</div>
                                <div style={{ backgroundColor: colors['primary-1-3'] }} className="ratio ratio-1x1 rounded me-3 p-3">{colors['primary-1-3']}</div>
                                <div style={{ backgroundColor: colors['primary-1-4'] }} className="ratio ratio-1x1 rounded me-3 p-3">{colors['primary-1-4']}</div>
                                <div style={{ backgroundColor: colors['primary-1-5'] }} className="ratio ratio-1x1 rounded me-3 p-3">{colors['primary-1-5']}</div>
                                <div style={{ backgroundColor: colors['primary-1-6'] }} className="ratio ratio-1x1 rounded me-3 p-3">{colors['primary-1-6']}</div>
                                <div style={{ backgroundColor: colors['primary-1-7'] }} className="ratio ratio-1x1 rounded p-3">{colors['primary-1-7']}</div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-4">
                            <h6>Couleurs utilitaires</h6>
                            <p>Ces couleurs neutres servent de soutien au sein de la palette. Elles sont utilisées pour les fonds, les séparateurs et les éléments structurels.</p>
                        </div>
                        <div className="col-8">
                            <div className="d-flex flex-row">
                                <div style={{ backgroundColor: colors['secondary-2-1'] }} className="ratio ratio-1x1 rounded me-3 p-3">{colors['secondary-2-1']}</div>
                                <div style={{ backgroundColor: colors['secondary-2-2'] }} className="ratio ratio-1x1 rounded me-3 p-3">{colors['secondary-2-2']}</div>
                                <div style={{ backgroundColor: colors['secondary-2-3'] }} className="ratio ratio-1x1 rounded me-3 p-3">{colors['secondary-2-3']}</div>
                                <div style={{ backgroundColor: colors['secondary-2-4'] }} className="ratio ratio-1x1 rounded me-3 p-3">{colors['secondary-2-4']}</div>
                                <div style={{ backgroundColor: colors['secondary-2-5'] }} className="ratio ratio-1x1 rounded me-3 p-3">{colors['secondary-2-5']}</div>
                                <div style={{ backgroundColor: colors['secondary-2-6'] }} className="ratio ratio-1x1 rounded me-3 p-3">{colors['secondary-2-6']}</div>
                                <div style={{ backgroundColor: colors['secondary-2-7'] }} className="ratio ratio-1x1 rounded p-3">{colors['secondary-2-7']}</div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-4">
                            <h6>Palette d'accent</h6>
                            <p>Nos couleurs d'accent s'utilisent avec parcimonie, guidant le regard sans dominer la composition. Gardez les principales au premier plan.</p>
                        </div>
                        <div className="col-8">
                            <div className="d-flex flex-row">
                                <div style={{ backgroundColor: colors['primary-2-1'] }} className="ratio ratio-1x1 rounded me-3 p-3">{colors['primary-2-1']}</div>
                                <div style={{ backgroundColor: colors['primary-2-2'] }} className="ratio ratio-1x1 rounded me-3 p-3">{colors['primary-2-2']}</div>
                                <div style={{ backgroundColor: colors['primary-2-3'] }} className="ratio ratio-1x1 rounded me-3 p-3">{colors['primary-2-3']}</div>
                                <div style={{ backgroundColor: colors['primary-2-4'] }} className="ratio ratio-1x1 rounded me-3 p-3">{colors['primary-2-4']}</div>
                                <div style={{ backgroundColor: colors['primary-2-5'] }} className="ratio ratio-1x1 rounded me-3 p-3">{colors['primary-2-5']}</div>
                                <div style={{ backgroundColor: colors['primary-2-6'] }} className="ratio ratio-1x1 rounded me-3 p-3">{colors['primary-2-6']}</div>
                                <div style={{ backgroundColor: colors['primary-2-7'] }} className="ratio ratio-1x1 rounded p-3">{colors['primary-2-7']}</div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-4">
                            <h6>Hilight</h6>
                            <p></p>
                        </div>
                        <div className="col-8">
                            <div className="d-flex flex-row">
                                <div style={{ backgroundColor: colors['secondary-3-1'] }} className="ratio ratio-1x1 rounded me-3 p-3">{colors['secondary-3-1']}</div>
                                <div className="ratio ratio-1x1 me-3 p-3"></div>
                                <div className="ratio ratio-1x1 me-3 p-3"></div>
                                <div className="ratio ratio-1x1 me-3 p-3"></div>
                                <div className="ratio ratio-1x1 me-3 p-3"></div>
                                <div className="ratio ratio-1x1 me-3 p-3"></div>
                                <div className="ratio ratio-1x1 p-3"></div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* 
                <div className="col-4 p-3" style={{ backgroundColor: colors['secondary-1-1'] }}>{colors['secondary-1-1']}</div>
                <div className="col-4 p-3" style={{ backgroundColor: colors['secondary-1-2'] }}>{colors['secondary-1-2']}</div>
                <div className="col-4 p-3" style={{ backgroundColor: colors['secondary-1-3'] }}>{colors['secondary-1-3']}</div>
                <div className="col-12 p-3 py-5" style={{ backgroundColor: colors['secondary-1-4'] }}>{colors['secondary-1-4']}</div>
                <div className="col-4 p-3" style={{ backgroundColor: colors['secondary-1-5'] }}>{colors['secondary-1-5']}</div>
                <div className="col-4 p-3" style={{ backgroundColor: colors['secondary-1-6'] }}>{colors['secondary-1-6']}</div>
                <div className="col-4 p-3" style={{ backgroundColor: colors['secondary-1-7'] }}>{colors['secondary-1-7']}</div>
                 */}



            </div >
        </>
    )
}

export default Couleurs

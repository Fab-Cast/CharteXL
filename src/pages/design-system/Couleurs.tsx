import { useState } from 'react'

function Couleurs() {
    /* const [name] = useState("Fab") */

    const palette = {
        'blue-50': '#EEF5FF',
        'blue-100': '#C7DDFE',
        'blue-200': '#9FC3FD',
        'blue-300': '#78A7FC',
        'blue-400': '#5088FB',
        'blue-500': '#2968FA',
        'blue-600': '#2457DC',
        'blue-700': '#1F47BE',
        'blue-800': '#1A38A0',
        'blue-900': '#152B82',
        'blue-950': '#101F64',
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
                        <h4>Couleurs primaires</h4>
                        <p className="lead">En dehors du menu de navigation, toutes les applications XL utilisent la couleur bleue (palette couleur primaire) comme couleur principale. Elle est utilisée, par exemple, pour les boutons principaux, les boutons radio, les éléments actifs du formulaire etc.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <div className="row">
                        <div className="col-2">
                            <h6>Palette couleur primaire</h6>
                            <div className="d-flex flex-column">
                                <div className="p-4 text-white" style={{ backgroundColor: palette['blue-50'] }}>blue-50 : #{palette['blue-50'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: palette['blue-100'] }}>blue-100 : #{palette['blue-100'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: palette['blue-200'] }}>blue-200 : #{palette['blue-200'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: palette['blue-300'] }}>blue-300 : #{palette['blue-300'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: palette['blue-400'] }}>blue-400 : #{palette['blue-400'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: palette['blue-500'] }}>blue-500 : #{palette['blue-500'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: palette['blue-600'] }}>blue-600 : #{palette['blue-600'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: palette['blue-700'] }}>blue-700 : #{palette['blue-700'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: palette['blue-800'] }}>blue-800 : #{palette['blue-800'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: palette['blue-900'] }}>blue-900 : #{palette['blue-900'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: palette['blue-950'] }}>blue-950 : #{palette['blue-950'].substring(1)}</div>
                            </div>
                        </div>
                        <div className="col-2">
                            <h6>Palette complète</h6>
                            <div className="d-flex flex-column">
                                <div className="p-4 text-white" style={{ backgroundColor: palette['blue'] }}>blue : #{palette['blue'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: palette['indigo'] }}>indigo : #{palette['indigo'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: palette['purple'] }}>purple : #{palette['purple'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: palette['pink'] }}>pink : #{palette['pink'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: palette['red'] }}>red : #{palette['red'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: palette['orange'] }}>orange : #{palette['orange'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: palette['yellow'] }}>yellow : #{palette['yellow'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: palette['green'] }}>green : #{palette['green'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: palette['teal'] }}>teal : #{palette['teal'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: palette['cyan'] }}>cyan : #{palette['cyan'].substring(1)}</div>
                            </div>
                        </div>
                        <div className="col-2">
                            <h6>Niveaux de gris</h6>
                            <div className="d-flex flex-column">
                                <div className="p-4" style={{ backgroundColor: gris['gray-50'] }}>gray-50 : #{gris['gray-50'].substring(1)}</div>
                                <div className="p-4" style={{ backgroundColor: gris['gray-100'] }}>gray-100 : #{gris['gray-100'].substring(1)}</div>
                                <div className="p-4" style={{ backgroundColor: gris['gray-200'] }}>gray-200 : #{gris['gray-200'].substring(1)}</div>
                                <div className="p-4" style={{ backgroundColor: gris['gray-300'] }}>gray-300 : #{gris['gray-300'].substring(1)}</div>
                                <div className="p-4" style={{ backgroundColor: gris['gray-400'] }}>gray-400 : #{gris['gray-400'].substring(1)}</div>
                                <div className="p-4" style={{ backgroundColor: gris['gray-500'] }}>gray-500 : #{gris['gray-500'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: gris['gray-600'] }}>gray-600 : #{gris['gray-600'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: gris['gray-700'] }}>gray-700 : #{gris['gray-700'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: gris['gray-800'] }}>gray-800 : #{gris['gray-800'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: gris['gray-900'] }}>gray-900 : #{gris['gray-900'].substring(1)}</div>
                                <div className="p-4 text-white" style={{ backgroundColor: gris['gray-950'] }}>gray-950 : #{gris['gray-950'].substring(1)}</div>
                            </div>
                        </div>
                        <div className="col-6">
                            <h6>Couleus  sémantiques</h6>
                            <div className="d-flex gap-3">
                                <div className="mb-4">
                                    <div className="d-flex flex-column mb-2">
                                        <h6 className="m-0">Danger</h6>
                                        <span className="text-muted">(#{palette['red'].substring(1)})</span>
                                    </div>
                                    <div className="p-5 rounded" style={{ backgroundColor: palette['red'] }}></div>
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex flex-column mb-2">
                                        <h6 className="m-0">Warning</h6>
                                        <span className="text-muted">(#{palette['yellow'].substring(1)})</span>
                                    </div>
                                    <div className="p-5 rounded" style={{ backgroundColor: palette['yellow'] }}></div>
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex flex-column mb-2">
                                        <h6 className="m-0">Success</h6>
                                        <span className="text-muted">(#{palette['green'].substring(1)})</span>
                                    </div>
                                    <div className="p-5 rounded" style={{ backgroundColor: palette['green'] }}></div>
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex flex-column mb-2">
                                        <h6 className="m-0">Info</h6>
                                        <span className="text-muted">(#{palette['teal'].substring(1)})</span>
                                    </div>
                                    <div className="p-5 rounded" style={{ backgroundColor: palette['teal'] }}></div>
                                </div>
                            </div>
                            <div className="bg-light p-4 rounded">


                                <h6>Exemples</h6>
                                <div className="p-4 rounded border mb-4 bg-white">
                                    <p>Boutons :</p>
                                    <button type="button" className="me-2 btn btn-primary">Primary</button>
                                    <button type="button" className="me-2 btn btn-danger">Danger</button>
                                    <button type="button" className="me-2 btn btn-success">Success</button>
                                    <button type="button" className="me-2 btn btn-light">Light</button>
                                    <button type="button" className="me-2 btn btn-dark">Dark</button>
                                </div>
                                <div className="p-4 rounded border mb-4 bg-white">
                                    <p>Alert :</p>
                                    <div className="alert alert-danger" role="alert">
                                        danger alert.
                                    </div>
                                    <div className="alert alert-warning" role="alert">
                                        warning alert.
                                    </div>
                                    <div className="alert alert-success" role="alert">
                                        success alert.
                                    </div>
                                    <div className="alert alert-info" role="alert">
                                        info alert.
                                    </div>
                                </div>
                                <div className="p-4 rounded border bg-white">
                                    <p>Formulaire :</p>
                                    <form className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">First name</label>
                                            <input type="text" className="form-control" id="validationServer01" value="Mark" required />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Last name</label>
                                            <input type="text" className="form-control" id="validationServer02" value="Otto" required />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Username</label>
                                            <div className="input-group">
                                                <span className="input-group-text" id="inputGroupPrepend3">@</span>
                                                <input type="text" className="form-control" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">City</label>
                                            <input type="text" className="form-control" id="validationServer03" aria-describedby="validationServer03Feedback" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">State</label>
                                            <select className="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required >
                                                <option selected disabled value="">Choose...</option>
                                                <option>...</option>
                                            </select>
                                            <div id="validationServer04Feedback" className="invalid-feedback">
                                                Please select a valid state.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary" type="submit">Submit form</button>
                                        </div>
                                    </form>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Couleurs

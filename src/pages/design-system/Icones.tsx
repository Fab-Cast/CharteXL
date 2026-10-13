import { useState } from 'react'

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
                        <h4>Icones</h4>
                        <p className="lead">L’utilisation des mêmes icônes dans l’ensemble des applications développées facilite la compréhension et la prise en main des interfaces.</p>
                        <p className="lead">Les icônes utilisées dans les interfaces sont celles de <b>Google Material Symbols</b>. Ce système d'icônes unifié garantit une cohérence visuelle optimale sur l'ensemble des applications et permet une personnalisation fine (épaisseur, remplissage, taille optique).</p>
                        <a href="https://fonts.google.com/icons" target="_blank">https://fonts.google.com/icons</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <div className="row">
                        <div className="col-4">
                            <h6>Réglages (Customize) de Material Symbols</h6>
                            <p>Utiliser le style “Outlined”</p>
                            <div className="border rounded p-4 mb-4">
                                <h6>Affichage des icônes "Grande taille"</h6>
                                <div className="d-flex flex-column mb-3">
                                    <span className="text-muted">Fill : désactivé</span>
                                    <span className="text-muted">Weight : 300</span>
                                    <span className="">Exemples :</span>
                                </div>
                                <div style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                                    <span style={{ fontSize: '72px' }} className="material-symbols-outlined">search</span>
                                    <span style={{ fontSize: '72px' }} className="material-symbols-outlined">home</span>
                                    <span style={{ fontSize: '72px' }} className="material-symbols-outlined">settings</span>
                                    <span style={{ fontSize: '72px' }} className="material-symbols-outlined">favorite</span>
                                </div>
                            </div>
                            <div className="border rounded p-4 mb-4">
                                <h6>Affichage des icônes "Taille moyenne / petite"</h6>
                                <div className="d-flex flex-column mb-3">
                                    <span className="text-muted">Fill : activé</span>
                                    <span className="">Exemples :</span>
                                </div>
                                <div style={{ fontVariationSettings: "'FILL' 1" }}>
                                    <span style={{ fontSize: '24px' }} className="material-symbols-outlined">search</span>
                                    <span style={{ fontSize: '24px' }} className="material-symbols-outlined">home</span>
                                    <span style={{ fontSize: '24px' }} className="material-symbols-outlined">settings</span>
                                    <span style={{ fontSize: '24px' }} className="material-symbols-outlined">favorite</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <h6>Icones de référence, à privilégier</h6>
                            <div className="border rounded p-4 mb-4">
                                <div className="row gx-2" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    <div className="col-4">
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">description</span>
                                            <span className="text-muted small">Document</span>
                                            <span className="text-muted small">Facture</span>
                                            <span className="text-muted small">Proforma</span>
                                        </div>
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">draft</span>
                                            <span className="text-muted small">Brouillon</span>
                                        </div>
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">credit_card</span>
                                            <span className="text-muted small">Règlement</span>
                                        </div>
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">contract</span>
                                            <span className="text-muted small">Reçu</span>
                                        </div>
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">home_work</span>
                                            <span className="text-muted small">Société</span>
                                        </div>
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">store</span>
                                            <span className="text-muted small">Magasin</span>
                                        </div>
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">location_on</span>
                                            <span className="text-muted small">Adresse</span>
                                            <span className="text-muted small">Localisation</span>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">folder</span>
                                            <span className="text-muted small">Dossier</span>
                                        </div>
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">tabs</span>
                                            <span className="text-muted small">Service</span>
                                        </div>
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">extension</span>
                                            <span className="text-muted small">Module</span>
                                            <span className="text-muted small">Extension</span>
                                        </div>
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">person</span>
                                            <span className="text-muted small">Personne</span>
                                            <span className="text-muted small">Utilisateur</span>
                                            <span className="text-muted small">Client</span>
                                        </div>
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">edit</span>
                                            <span className="text-muted small">Editer</span>
                                        </div>
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">delete_forever</span>
                                            <span className="text-muted small">Supprimer</span>
                                        </div>
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">settings</span>
                                            <span className="text-muted small">Paramètres</span>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">print</span>
                                            <span className="text-muted small">Imprimer</span>
                                        </div>
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">filter_alt</span>
                                            <span className="text-muted small">Filtres</span>
                                        </div>
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">logout</span>
                                            <span className="text-muted small">Se déconnecter</span>
                                        </div>
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">event</span>
                                            <span className="text-muted small">Exporter</span>
                                        </div>
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">calendar_month</span>
                                            <span className="text-muted small">Calendrier</span>
                                        </div>
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">event</span>
                                            <span className="text-muted small">Date</span>
                                            <span className="text-muted small">Évènement</span>
                                        </div>
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">tune</span>
                                            <span className="text-muted small">Préférences</span>
                                        </div>
                                        <div className="d-flex flex-column text-center p-3 rounded bg-gray-100 mb-2">
                                            <span style={{ fontSize: '32px' }} className="material-symbols-outlined mb-2">dashboard</span>
                                            <span className="text-muted small">Dashboard</span>
                                        </div>
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

export default Boutons

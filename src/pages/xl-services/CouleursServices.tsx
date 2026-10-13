import { useState } from 'react'

function CouleursServices() {
    /* const [name] = useState("Fab") */

    const colors = {
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
                        <h4>Couleurs des services</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-xxl-3">
                    <div style={{ backgroundColor: colors['bleu-ciel'] }} className="p-3 rounded border text-white w-100 mb-3">
                        <span className="px-2 py-1 rounded d-inline-flex mb-3 small text-dark bg-white">#930DBC</span>
                        <h6 className="mb-0">LabXL</h6>
                        <p className="text-white text-opacity-75">Plateforme de formation</p>
                    </div>
                    <div style={{ backgroundColor: colors['orange'] }} className="p-3 rounded border text-white w-100 mb-3">
                        <span className="px-2 py-1 rounded d-inline-flex mb-3 small text-dark bg-white">#BD0D22</span>
                        <h6 className="mb-0">XLNet</h6>
                        <p className="text-white text-opacity-75">Fibre, ADSL - Pro</p>
                    </div>
                    <div style={{ backgroundColor: colors['vert'] }} className="p-3 rounded border text-white w-100 mb-3">
                        <span className="px-2 py-1 rounded d-inline-flex mb-3 small text-dark bg-white">#3E3E40</span>
                        <h6 className="mb-0">PaieXL</h6>
                        <p className="text-white text-opacity-75">Gestion de la paie</p>
                        <h6 className="mb-0">RHXL</h6>
                        <p className="text-white text-opacity-75">Solution de gestion RH</p>
                    </div>
                    <div style={{ backgroundColor: colors['bleu'] }} className="p-3 rounded border text-white w-100 mb-3">
                        <span className="px-2 py-1 rounded d-inline-flex mb-3 small text-dark bg-white">#0E59BE</span>
                        <h6 className="mb-0">StockXL</h6>
                        <p className="text-white text-opacity-75">Gestion des stocks</p>
                        <h6 className="mb-0">FactureXL</h6>
                        <p className="text-white text-opacity-75">Solution de facturation</p>
                        <h6 className="mb-0">FactureXL WEB</h6>
                        <p className="text-white text-opacity-75">Solution de facturation : version web</p>
                        <h6 className="mb-0">ScanXL</h6>
                        <p className="text-white text-opacity-75">Solution de numérisation</p>
                    </div>
                </div>
                <div className="col-6 col-xxl-3">
                    <div style={{ backgroundColor: colors['rouge'] }} className="p-3 rounded border text-white w-100 mb-3">
                        <span className="px-2 py-1 rounded d-inline-flex mb-3 small text-dark bg-white">#BD0D22</span>
                        <h6 className="mb-0">CaisseXL</h6>
                        <p className="text-white text-opacity-75">Solutions de caisse</p>
                        <h6 className="mb-0">Caisse PIXL</h6>
                        <p className="text-white text-opacity-75">Solutions de caisse</p>
                    </div>
                    <div style={{ backgroundColor: colors['violet'] }} className="p-3 rounded border text-white w-100 mb-3">
                        <span className="px-2 py-1 rounded d-inline-flex mb-3 small text-dark bg-white">#930DBC</span>
                        <h6 className="mb-0">ComptaXL & ImmoXL</h6>
                        <p className="text-white text-opacity-75">Solution de comptabilité</p>
                        <h6 className="mb-0">ComptaXL WEB</h6>
                        <p className="text-white text-opacity-75">Solution de comptabilité : version web</p>
                    </div>
                    <div style={{ backgroundColor: colors['gris-fonce'] }} className="p-3 rounded border text-white w-100 mb-3">
                        <span className="px-2 py-1 rounded d-inline-flex mb-3 small text-dark bg-white">#3E3E40</span>
                        <h6 className="mb-0">ServeurXL</h6>
                        <p className="text-white text-opacity-75">Solution de serveurs</p>
                        <h6 className="mb-0">Drive PIXL</h6>
                        <p className="text-white text-opacity-75">Solution de stockage</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CouleursServices

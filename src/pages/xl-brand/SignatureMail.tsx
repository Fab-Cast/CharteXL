import { useState } from 'react'
import papeterieExemple from '../../assets/img/papeterie-exemple.png'
import signatureMail from '../../assets/img/signature-mail.png'


function SignatureMail() {
    /* const [name] = useState("Fab") */


    return (
        <>
            <div className="row">
                <div className="col-12 col-xxl-8">
                    <div className="p-5 bg-gray-100 rounded mb-5">
                        <h4>Signature Mail</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-xxl-4">
                    <div className="bg-dark p-3 rounded text-white font-monospace">
                        <h6>Code html</h6>
                        <span className="bg-gray-300 text-dark p-1">(todo : Code html ici)</span>
                    </div>
                </div>
                <div className="col-12 col-xxl-4">
                    <h6>Aperçu</h6>
                    <img src={signatureMail} alt="exemple poster" className="border rounded shadow w-100" />
                </div>
            </div>
        </>
    )
}

export default SignatureMail

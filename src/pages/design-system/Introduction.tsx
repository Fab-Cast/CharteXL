import { useState } from 'react'

import gridSystemGutters from '../../assets/img/grid-system-gutters.png'
import gridSystemNavV from '../../assets/img/grid-system-nav-vertical.png'
import gridSystemNavH from '../../assets/img/grid-system-nav-horizontal.png'
import { Link } from '@tanstack/react-router'
import paieWhite from '../../assets/img/logos-services/paie-white.svg'



function GridSystem() {
    return (
        <>

            <div className="row">
                <div className="col-4 offset-4 vh-100 d-flex flex-column justify-content-center">
                    <h4>Introduction au design system</h4>
                    <p className="lead">Le respect des rêgles définies dans le design system assure une cohérence visuelle entre les applications XL Prog.</p>
                    <p>Chaque application XL Prog dispose d’une couleur de barre de navigation qui lui est propre, afin de permettre une identification visuelle immédiate et de distinguer facilement les différents produits.</p>
                    <p>En dehors de cet élément, l’ensemble des applications doit respecter un design commun et cohérent : typographies, tailles de textes, couleurs, espacements, composants, icônes et règles d’interaction doivent être harmonisés.</p>
                    <p>Cette approche permet de conserver une identité propre à chaque application tout en garantissant une expérience utilisateur homogène au sein de l’écosystème XL Prog.</p>
                </div>
            </div>
        </>
    )
}

export default GridSystem

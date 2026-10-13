import * as React from 'react'
import { Link, Outlet, createRootRoute, linkOptions } from '@tanstack/react-router'
import charteLogo from '../assets/img/charte-xl-logo.svg'
import '../App.scss'

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent: () => {
        return (
            <div>
                <p>Page introuvable</p>
            </div>
        )
    },
})

const options = [
    {
        to: '/',
        label: 'Introduction',
        activeOptions: { exact: true },
    },
    {
        title: 'XL PROG : Identité visuelle',
    },
    {
        to: '/couleurs',
        label: 'Les couleurs',
    },
    {
        to: '/logotype',
        label: 'Le logotype',
    },
    {
        to: '/typographies',
        label: 'Les typographies',
    },
    {
        to: '/papeterie',
        label: 'Papeterie',
    },
   /*  {
        to: '/photographie',
        label: 'Photographie',
    }, */
    {
        to: '/signature-mail',
        label: 'Signature Mail',
    },
/*     {
        to: '/reseaux-sociaux',
        label: 'Réseaux Sociaux',
    }, */
    {
        title: 'Services XL PROG',
    },
    {
        to: '/couleurs-services',
        label: 'Les couleurs',
    },
    {
        to: '/logotype-services',
        label: 'Les logos',
    },
    {
        title: 'Design system',
    },
    {
        to: '/introduction-design-system',
        label: 'Introduction',
    },
    {
        to: '/navigation-design-system',
        label: 'Barre de navigation',
    },
    {
        to: '/couleurs-design-system',
        label: 'Les couleurs',
    },
    {
        to: '/boutons',
        label: 'Boutons',
    },
    {
        to: '/typographies-services',
        label: 'Les typographies',
    },
    {
        to: '/icones-design-system',
        label: 'Icônes',
    },
    {
        to: '/grid-system',
        label: 'Grid system',
    },
]

function RootComponent() {
    return (
        <>
            <div className="d-flex">
                <div className="px-3 py-0 vh-100 overflow-auto bg-dark left-nav">
                    <img src={charteLogo} alt="Btn construction" className="ms-3 mb-3 mt-5" style={{ height: '30px' }} />
                    <ul className="nav flex-column">
                        {options.map((option) => {
                            return (
                                <>
                                    {option.title ?
                                        <li className="mt-5 ms-3 mb-2"><span className="text-gray-400 small text-uppercase">{option.title}</span></li>
                                        :
                                        <li className="nav-item">
                                            <Link
                                                {...option}
                                                key={option.to}
                                                className="px-3 nav-link w-100 text-light text-start rounded bg-gray-950 "
                                                activeProps={{
                                                    className: 'bg-white text-dark',
                                                }}
                                            >
                                                {option.label}
                                            </Link>
                                        </li>
                                    }
                                </>
                            )
                        })}
                    </ul>
                </div>
                <div className="p-4 vh-100 overflow-auto w-100">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import '../styles/home.css'
export const NavApp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [enlaces, setEnlaces] = useState([
        {
            name: 'Sobre la app',
            active: false,
            link: '/landing'
        },
        {
            name: 'App',
            active: false,
            link: '/home'
        },
        {
            name: 'Comentarios',
            active: false,
            link: '/comentarios'
        },
    ])

    useEffect(() => {
        setEnlaces((enlaces) => enlaces.map((x) => ({ ...x, active: x.link === location.pathname })));
    }, [location.pathname]);

    const cambiarPagina = (link) => {
        setEnlaces(arr => arr.map(x => ({ ...x, active: x.link === link })))
        navigate(link);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" onClick={() => navigate('/landing')} style={{ display: 'flex', justifyItems: 'center', cursor: 'pointer' }}><img src={logo} alt="logo" style={{ width: '20px' }} /> <span className='ms-2'>Mi App de Finanzas</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {
                                enlaces.map(x => (
                                    <li className="nav-item" key={x.name}>
                                        <a className={x.active ? 'nav-link active' : 'nav-link'} onClick={() => cambiarPagina(x.link)} style={{ cursor: 'pointer' }}>{x.name}</a>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

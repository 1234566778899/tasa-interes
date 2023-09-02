import React from 'react'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import '../styles/home.css'
export const NavApp = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#" style={{ display: 'flex', justifyItems: 'center' }}><img src={logo} alt="logo" style={{ width: '20px' }} /> <span className='ms-2'>Mi App de Finanzas</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" onClick={() => navigate('/landing')} style={{ cursor: 'pointer' }}>Sobre la App</a>
                            </li>
                            <li className="nav-item">
                                <button className="btn-link" onClick={() => navigate('/home')}>Ir a la App</button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

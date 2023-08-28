import React from 'react'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import './home.css'
export const NavApp = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a className="navbar-brand" href="#" style={{ display: 'flex', justifyItems: 'center' }}><img src={logo} alt="logo" style={{ width: '20px' }} /> <span className='ms-2'>Mi App de Finanzas</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" onClick={()=>navigate('/landing')} style={{cursor:'pointer'}}>Sobre la App</a>
                            </li>
                            <li class="nav-item">
                                <button class="btn-link" onClick={()=>navigate('/home')}>Ir a la App</button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

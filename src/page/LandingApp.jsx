import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import calculadora from '../assets/calculadora.png'
export const LandingApp = () => {
    const navigate = useNavigate();

    const [temas, settemas] = useState([
        { nombre: 'Tasa Simple', estado: true },
        { nombre: 'Tasa Compuesto', estado: true },
        { nombre: 'Tasa Nominal y/o Efectiva', estado: true },
        { nombre: 'Cálculo con equivalencias de tasas de interés', estado: true },
        { nombre: 'Cálculo de flujos de fondos', estado: false },
        { nombre: 'Tasa descontada', estado: false },
        { nombre: 'Teoría de rentas', estado: false },
        { nombre: 'Flujos de fondos', estado: false },
        { nombre: 'Teoría de descuentos', estado: false },
        { nombre: 'Teoría de rentas e indicadores financieros', estado: false },
        { nombre: 'Análisis de reemplazo: VAC, MCM, CAUE y CC', estado: false },
        { nombre: 'Planes de pago', estado: false },
        { nombre: 'Valoración de Acciones', estado: false },
        { nombre: 'Valoración de Bonos', estado: false },
        { nombre: 'Costo promedio ponderado del capital', estado: false },
    ])
    return (
        <>
            <div className='landing-fondo'>
                <div className="container mb-5">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <p>Resuelve ejercicios de finanzas de manera facil</p>
                            <h1 style={{ fontWeight: 'bolder' }}>Simplificando las finanzas, un cálculo a la vez</h1>
                            <p>Descubre el poder de las finanzas a través de una Calculadora Esencial. Desde tasas de interés hasta análisis de activos, adquiere habilidades prácticas y desarrolla una aplicación para calcular planes de pagos. Tu viaje hacia la maestría financiera comienza aquí.</p>
                            <button className='btn-ir' onClick={() => navigate('/home')}>Ir a la app</button>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center">
                                <img src={calculadora} className='img-main' alt="calculadora" />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
            <div className='section-temas'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 bg-white">
                            <h1 className='text-center'>Temas a desarrollar</h1>
                            <hr />
                            <br />
                            <table className='table text-center'>
                                <thead>
                                    <tr>
                                        <th>N°</th>
                                        <th>Tema</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        temas.map((tema, indice) => (
                                            <tr key={indice} className='fila'>
                                                <td>{indice + 1}</td>
                                                <td>{tema.nombre}</td>
                                                <td>
                                                    {tema.estado ? (<span className='completo estado'>COMPLETADO</span>) : (<span className='pendiente estado'>PENDIENTE</span>)}
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className='footer'>         
                <p className='text-center'>Created by Carlos Ordaz H.</p>
            </div>
        </>
    )
}

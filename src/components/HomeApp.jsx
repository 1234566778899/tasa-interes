import React, { useState } from 'react'
import './home.css'
export const HomeApp = () => {

    const [timeSimple, setTimeSimple] = useState(0)
    const [capitalSimple, setCapitalSimple] = useState(0)
    const [tasaSimple, setTasaSimple] = useState(0)

    const [timeCompuesto, settimeCompuesto] = useState(0)
    const [capitalCompuesto, setcapitalCompuesto] = useState(0)
    const [tasaCompuesto, settasaCompuesto] = useState(0)

    const calcularMontoSimple = () => {
        let time, capital, tasa;
        try {
            time = eval(timeSimple);
            capital = eval(capitalSimple);
            tasa = eval(tasaSimple);
        } catch (error) {
            time = 0;
            capital = 0;
            tasa = 0;
        }

        return capital * (1 + (tasa / 100) * time);
    }
    const calcularMontoCompuesto = () => {
        let time, capital, tasa;
        try {
            time = eval(timeCompuesto);
            tasa = eval(tasaCompuesto);
            capital = eval(capitalCompuesto);
        } catch (error) {
            tasa = 0;
            time = 0;
            capital = 0;
        }

        return capital * Math.pow(1 + (tasa / 100), time);
    }
    return (
        <>
            <div className="container">
                <h1>Tasas de interes</h1>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="text-center">Interés simple</h4>
                            </div>
                            <div className="card-body">
                                <div className='form-tasa-simple'>
                                    <div>
                                        <label>Capital</label>
                                        <input type="text" onChange={(e) => setCapitalSimple(e.target.value)} />
                                    </div>
                                    <div>
                                        <label>Tasa de interes</label>
                                        <input type="text" onChange={(e) => setTasaSimple(e.target.value)} />
                                    </div>
                                    <div>
                                        <label>Tiempo</label>
                                        <input type="text" onChange={(e) => setTimeSimple(e.target.value)} />
                                    </div>
                                </div>
                                <br />
                                <span className='monto'>Monto: {calcularMontoSimple().toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="text-center">Interés cumpuesto</h4>
                            </div>
                            <div className="card-body">
                                <div className='form-tasa-simple'>
                                    <div>
                                        <label>Capital</label>
                                        <input type="text" onChange={(e) => setcapitalCompuesto(e.target.value)} />
                                    </div>
                                    <div>
                                        <label>Tasa de interes</label>
                                        <input type="text" onChange={(e) => settasaCompuesto(e.target.value)} />
                                    </div>
                                    <div>
                                        <label>Tiempo</label>
                                        <input type="text" onChange={(e) => settimeCompuesto(e.target.value)} />
                                    </div>
                                </div>
                                <br />
                                <span className='monto'>Monto: {calcularMontoCompuesto().toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

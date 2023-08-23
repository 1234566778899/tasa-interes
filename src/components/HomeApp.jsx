import React, { useRef, useState } from 'react'
import './home.css'
export const HomeApp = () => {

    const [timeSimple, setTimeSimple] = useState(0)
    const [capitalSimple, setCapitalSimple] = useState(0)
    const [tasaSimple, setTasaSimple] = useState(0)
    const [montoSimple, setMontoSimple] = useState(0)

    const [timeCompuesto, settimeCompuesto] = useState(0)
    const [capitalCompuesto, setcapitalCompuesto] = useState(0)
    const [tasaCompuesto, settasaCompuesto] = useState(0)
    const [montoCompuesto, setMontoCompuesto] = useState(0)


    const [optionSimple, setoptionSimple] = useState(['Monto', 'Capital', 'Tasa', 'Tiempo'])
    const [optionCompuesto, setoptionCompuesto] = useState(['Monto', 'Capital', 'Tasa', 'Tiempo'])

    const [selectSimple, setSelectSimple] = useState('Monto')
    const [selectCompuesto, setSelectCompuesto] = useState('Monto')

    const calcularSimple = () => {
        let time, capital, tasa, monto;
        try {
            time = eval(timeSimple);
            capital = eval(capitalSimple);
            tasa = eval(tasaSimple);
            monto = eval(montoSimple);
        } catch (error) {
            time = 0;
            capital = 0;
            tasa = 0;
            monto = 0;
        }

        if (selectSimple === 'Monto') return capital * (1 + (tasa / 100) * time);
        if (selectSimple === 'Capital') return monto / (1 + (tasa / 100) * time);
        if (selectSimple === 'Tasa') return ((monto / capital - 1) / time) * 100;
        if (selectSimple === 'Tiempo') return (monto / capital - 1) / (tasa / 100);
    }
    const calcularCompuesto = () => {
        let time, capital, tasa, monto;
        try {
            time = eval(timeCompuesto);
            tasa = eval(tasaCompuesto);
            capital = eval(capitalCompuesto);
            monto = eval(montoCompuesto)
        } catch (error) {
            tasa = 0;
            time = 0;
            capital = 0;
            monto = 0;
        }
        if (selectCompuesto === 'Monto') return capital * Math.pow(1 + (tasa / 100), time);
        if (selectCompuesto === 'Capital') return monto / Math.pow(1 + (tasa / 100), time);
        if (selectCompuesto === 'Tasa') return (Math.pow(monto / capital, 1 / time) - 1)*100;
        if (selectCompuesto === 'Tiempo') return Math.log(monto / capital) / Math.log(1 + (tasa / 100));

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
                                <div>
                                    <label>¿Qué quieres calcular?</label>
                                    <select onChange={(x) => setSelectSimple(x.target.value)}>
                                        {optionSimple.map(x => (<option key={x} value={x}>{x}</option>))}
                                    </select>
                                </div>
                                <br />
                                <div className='form-tasa-simple'>
                                    {
                                        selectSimple !== 'Monto' ? (
                                            <div>
                                                <label>Monto</label>
                                                <input type="text" onChange={(e) => setMontoSimple(e.target.value)} />
                                            </div>) : ''
                                    }
                                    {
                                        selectSimple !== 'Capital' ? (
                                            <div>
                                                <label>Capital</label>
                                                <input type="text" onChange={(e) => setCapitalSimple(e.target.value)} />
                                            </div>
                                        ) : ''
                                    }
                                    {
                                        selectSimple !== 'Tasa' ? (
                                            <div>
                                                <label>Tasa de interes</label>
                                                <input type="text" onChange={(e) => setTasaSimple(e.target.value)} />
                                            </div>
                                        ) : ''
                                    }
                                    {
                                        selectSimple !== 'Tiempo' ? (
                                            <div>
                                                <label>Tiempo</label>
                                                <input type="text" onChange={(e) => setTimeSimple(e.target.value)} />
                                            </div>
                                        ) : ''
                                    }
                                </div>
                                <br />
                                <span className='monto'>{selectSimple}: {calcularSimple().toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="text-center">Interés cumpuesto</h4>
                            </div>
                            <div className="card-body">
                                <div>
                                    <label>¿Qué quieres calcular?</label>
                                    <select onChange={(x) => setSelectCompuesto(x.target.value)}>
                                        {optionCompuesto.map(x => (<option key={x} value={x}>{x}</option>))}
                                    </select>
                                </div>
                                <br />
                                <div className='form-tasa-simple'>
                                    {
                                        selectCompuesto !== 'Monto' ? (
                                            <div>
                                                <label>Monto</label>
                                                <input type="text" onChange={(e) => setMontoCompuesto(e.target.value)} />
                                            </div>) : ''
                                    }
                                    {
                                        selectCompuesto !== 'Capital' ? (
                                            <div>
                                                <label>Capital</label>
                                                <input type="text" onChange={(e) => setcapitalCompuesto(e.target.value)} />
                                            </div>
                                        ) : ''
                                    }
                                    {
                                        selectCompuesto !== 'Tasa' ? (
                                            <div>
                                                <label>Tasa de interes</label>
                                                <input type="text" onChange={(e) => settasaCompuesto(e.target.value)} />
                                            </div>
                                        ) : ''
                                    }
                                    {
                                        selectCompuesto !== 'Tiempo' ? (
                                            <div>
                                                <label>Tiempo</label>
                                                <input type="text" onChange={(e) => settimeCompuesto(e.target.value)} />
                                            </div>
                                        ) : ''
                                    }
                                </div>
                                <br />
                                <span className='monto'>{selectCompuesto}: {calcularCompuesto().toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

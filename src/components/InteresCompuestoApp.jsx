import React, { useState } from 'react'

export const InteresCompuestoApp = () => {

    const [timeCompuesto, settimeCompuesto] = useState(0)
    const [capitalCompuesto, setcapitalCompuesto] = useState(0)
    const [tasaCompuesto, settasaCompuesto] = useState(0)
    const [montoCompuesto, setMontoCompuesto] = useState(0)
    const [options, setoptions] = useState(['Monto', 'Capital', 'Tasa', 'Tiempo'])
    const [selectCompuesto, setSelectCompuesto] = useState('Monto')

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
        if (selectCompuesto === 'Tasa') return (Math.pow(monto / capital, 1 / time) - 1) * 100;
        if (selectCompuesto === 'Tiempo') return Math.log(monto / capital) / Math.log(1 + (tasa / 100));

    }
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="text-center">Interés cumpuesto</h5>
            </div>
            <div className="card-body">
                <div>
                    <label>¿Qué quieres calcular?</label>
                    <select className='ms-2' onChange={(x) => setSelectCompuesto(x.target.value)}>
                        {options.map(x => (<option key={x} value={x}>{x}</option>))}
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
                <span className='monto'>{selectCompuesto}: {calcularCompuesto().toFixed(4)}</span>
            </div>
        </div>
    )
}

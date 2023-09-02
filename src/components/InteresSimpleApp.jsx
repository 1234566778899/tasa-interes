import React, { useState } from 'react'

export const InteresSimpleApp = () => {
    const [timeSimple, setTimeSimple] = useState    (0)
    const [capitalSimple, setCapitalSimple] = useState(0)
    const [tasaSimple, setTasaSimple] = useState(0)
    const [montoSimple, setMontoSimple] = useState(0)
    const [options, setoptions] = useState(['Monto', 'Capital', 'Tasa', 'Tiempo'])
    const [selectSimple, setSelectSimple] = useState('Monto')

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
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="text-center">Interés simple</h5>
            </div>
            <div className="card-body">
                <div>
                    <label>¿Qué quieres calcular? </label>
                    <select className='ms-2' onChange={(x) => setSelectSimple(x.target.value)}>
                        {options.map(x => (<option key={x} value={x}>{x}</option>))}
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
                <span className='monto'>{selectSimple}: {calcularSimple().toFixed(4)}</span>
            </div>
        </div>
    )
}

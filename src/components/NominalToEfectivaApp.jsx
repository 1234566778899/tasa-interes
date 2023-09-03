import React, { useState } from 'react'

export const NominalToEfectivaApp = () => {
    const [times, settime] = useState([
        {
            id: 1,
            name: 'Diario',
            days: 1
        },
        {
            id: 2,
            name: 'Quincenal',
            days: 15
        },
        {
            id: 3,
            name: 'Mensual',
            days: 30
        },
        {
            id: 4,
            name: 'Bimestral',
            days: 60
        },
        {
            id: 5,
            name: 'Trimestral',
            days: 90
        },
        {
            id: 6,
            name: 'Cuatrimestral',
            days: 120
        },
        {
            id: 7,
            name: 'Semestral',
            days: 180
        },
        {
            id: 8,
            name: 'Anual',
            days: 360
        },
    ])
    const [timeEfectiva, settimeEfectiva] = useState(8);
    const [timeNominal, settimeNominal] = useState(1);
    const [tasaNominal, settasaNominal] = useState('0');
    const [timeCapitalizacion, setTimeCapitalizacion] = useState(3);
    const calcularEfectiva = () => {
        let dias_efectiva = times.find(x => x.id == timeEfectiva).days;
        let dias_nominal = times.find(x => x.id == timeNominal).days;
        let dias_capi = times.find(x => x.id == timeCapitalizacion).days;
        let tasa_nominal = parseFloat(tasaNominal);
        let m = dias_nominal / dias_capi;
        let n = dias_efectiva / dias_capi;
        return (Math.pow(1 + ((tasaNominal / 100) / m), n) - 1) * 100;
    }
    return (
        <div className='card'>
            <div className="card-header">
                <h5>Convertir Tasa Nominal a Efectiva</h5>
            </div>
            <div className="card-body">

                <div>
                    <label>Tasa Efectiva
                        <select className='ms-2' onChange={(e) => settimeEfectiva(e.target.value)} value={timeEfectiva}>
                            {times.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                        </select>
                    </label>
                </div>
                <div className='mt-2'>
                    <label>Tasa Nominal
                        <select className='ms-2' onChange={(e) => settimeNominal(e.target.value)}>
                            {times.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                        </select>
                        <span className='ms-2'>de</span>
                        <input onChange={(e) => settasaNominal(e.target.value)} type="text" style={{ width: '70px', marginLeft: '10px' }} />
                    </label>
                </div>
                <div className='mt-2'>
                    <label>Capitalización</label>
                    <select className='ms-2' onChange={(e) => setTimeCapitalizacion(e.target.value)} value={timeCapitalizacion}>
                        {times.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                    </select>
                </div>
                <br />
                <span className='monto'>Resultado: {calcularEfectiva().toFixed(4)}</span>
            </div>
        </div>
    )
}

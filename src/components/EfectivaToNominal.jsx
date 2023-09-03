import React, { useState } from 'react'

export const EfectivaToNominal = () => {
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
    const [timeEfectiva, settimeEfectiva] = useState(1);
    const [timeNominal, settimeNominal] = useState(8);
    const [tasaEfectiva, settasaEfectiva] = useState('0');
    const [timeCapitalizacion, setTimeCapitalizacion] = useState(3);
    const calcularNominal = () => {
        let dias_efectiva = times.find(x => x.id == timeEfectiva).days;
        let dias_nominal = times.find(x => x.id == timeNominal).days;
        let dias_capi = times.find(x => x.id == timeCapitalizacion).days;
        let m = dias_nominal / dias_capi;
        let n = dias_efectiva / dias_capi;
        return (m * (Math.pow(1 + (tasaEfectiva / 100), 1 / n) - 1)) * 100;
    }
    return (
        <div className='card'>
            <div className="card-header">
                <h5>Convertir Tasa Nominal a Efectiva</h5>
            </div>
            <div className="card-body">

                <div>
                    <label>Tasa Nominal
                        <select className='ms-2' onChange={(e) => settimeNominal(e.target.value)} value={timeNominal}>
                            {times.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                        </select>
                    </label>
                </div>
                <div className='mt-2'>
                    <label>Capitalización</label>
                    <select className='ms-2' onChange={(e) => setTimeCapitalizacion(e.target.value)} value={timeCapitalizacion}>
                        {times.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                    </select>
                </div>
                <div className='mt-2'>
                    <label>Tasa Efectiva
                        <select className='ms-2' onChange={(e) => settimeEfectiva(e.target.value)}>
                            {times.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                        </select>
                        <span className='ms-2'>de</span>
                        <input onChange={(e) => settasaEfectiva(e.target.value)} type="text" style={{ width: '70px', marginLeft: '10px' }} />
                    </label>
                </div>
                <br />
                <span className='monto'>Resultado: {calcularNominal().toFixed(4)}</span>
            </div>
        </div>
    )
}

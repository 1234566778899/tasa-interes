import React, { useState } from 'react'

export const EfectivaToEfectiva = () => {
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
    const [timeEfectiva1, settimeEfectiva1] = useState(1);
    const [timeEfectiva2, settimeEfectiva2] = useState(1);
    const [tasaEfectiva, settasaEfectiva] = useState('0');
    const calcularEfectiva = () => {
        let n2 = times.find(x => x.id == timeEfectiva1).days;
        let n1 = times.find(x => x.id == timeEfectiva2).days;

        return (Math.pow(1 + (tasaEfectiva / 100), n2 / n1) - 1) * 100;
    }
    return (
        <div className='card'>
            <div className="card-header">
                <h5>Convertir Tasa Efectiva a Efectiva</h5>
            </div>
            <div className="card-body">

                <div>
                    <label>Tasa Efectiva
                        <select className='ms-2' onChange={(e) => settimeEfectiva1(e.target.value)} value={timeEfectiva1}>
                            {times.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                        </select>
                    </label>
                </div>
                <div className='mt-2'>
                    <label>Tasa Efectiva
                        <select className='ms-2' onChange={(e) => settimeEfectiva2(e.target.value)}>
                            {times.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                        </select>
                        <span className='ms-2'>de</span>
                        <input onChange={(e) => settasaEfectiva(e.target.value)} type="text" style={{ width: '70px', marginLeft: '10px' }} />
                    </label>
                </div>
                <br />
                <span className='monto'>Resultado: {calcularEfectiva().toFixed(2)}</span>
            </div>
        </div>
    )
}

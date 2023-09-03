import React, { useState } from 'react'

export const NominalToNominal = () => {
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
    const [timeNominal1, settimeNominal1] = useState(1);
    const [timeNominal2, settimeNominal2] = useState(8);
    const [tasaNominal, settasaNominal] = useState('0');
    const [timeCapitalizacion1, setTimeCapitalizacion1] = useState(3);
    const [timeCapitalizacion2, setTimeCapitalizacion2] = useState(3);
    const calcularNominal = () => {
        let dias_nominal1 = times.find(x => x.id == timeNominal1).days;
        let dias_nominal2 = times.find(x => x.id == timeNominal2).days;
        let dias_capi1 = times.find(x => x.id == timeCapitalizacion1).days;
        let dias_capi2 = times.find(x => x.id == timeCapitalizacion2).days;
        let anio = 360;
        let m = dias_nominal2 / dias_capi2;
        let n = anio / dias_capi2;
        let tasa_efectiva = Math.pow(1 + ((tasaNominal / 100) / m), n) - 1;
        m = dias_nominal1 / dias_capi1;
        n = anio / dias_capi1;
        return m * (Math.pow(1 + tasa_efectiva, 1 / n) - 1) * 100;
    }
    return (
        <div className='card'>
            <div className="card-header">
                <h5>Convertir Tasa Nominal a Nominal</h5>
            </div>
            <div className="card-body">

                <div>
                    <label>Tasa Nominal
                        <select className='ms-2' onChange={(e) => settimeNominal1(e.target.value)} value={timeNominal1}>
                            {times.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                        </select>
                    </label>
                </div>
                <div className='mt-2'>
                    <label>Capitalización</label>
                    <select className='ms-2' onChange={(e) => setTimeCapitalizacion1(e.target.value)} value={timeCapitalizacion1}>
                        {times.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                    </select>
                </div>
                <div className='mt-2'>
                    <label>Tasa Nominal
                        <select className='ms-2' onChange={(e) => settimeNominal2(e.target.value)}>
                            {times.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                        </select>
                        <span className='ms-2'>de</span>
                        <input onChange={(e) => settasaNominal(e.target.value)} type="text" style={{ width: '70px', marginLeft: '10px' }} />
                    </label>
                </div>
                <div className='mt-2'>
                    <label>Capitalización</label>
                    <select className='ms-2' onChange={(e) => setTimeCapitalizacion2(e.target.value)} value={timeCapitalizacion2}>
                        {times.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                    </select>
                </div>
                <br />
                <span className='monto'>Resultado: {calcularNominal().toFixed(4)}</span>
            </div>
        </div>
    )
}

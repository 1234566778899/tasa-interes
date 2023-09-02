import React, { useState } from 'react'
import '../styles/home.css'
import { InteresCompuestoApp } from '../components/InteresCompuestoApp'
import { InteresSimpleApp } from '../components/InteresSimpleApp'
import { NominalToEfectivaApp } from '../components/NominalToEfectivaApp'
import { EfectivaToNominal } from '../components/EfectivaToNominal'
import { EfectivaToEfectiva } from '../components/EfectivaToEfectiva'
import { NominalToNominal } from '../components/NominalToNominal'
export const HomeApp = () => {

    const [temas, settemas] = useState([
        {
            id: 1,
            name: "Interes simple",
            component: <InteresSimpleApp />,
            active: false
        },
        {
            id: 2,
            name: "Interes compuesto",
            component: <InteresCompuestoApp />,
            active: false
        },
        {
            id: 3,
            name: "Nominal a Efectiva",
            component: <NominalToEfectivaApp />,
            active: false
        },
        {
            id: 4,
            name: "Efectiva a Nominal",
            component: <EfectivaToNominal />,
            active: false
        },
        {
            id: 5,
            name: "Efectiva a Efectiva",
            component: <EfectivaToEfectiva />,
            active: false
        },
        {
            id: 6,
            name: "Nominal a Nominal",
            component: <NominalToNominal />,
            active: true
        },
    ])

    const activar = (id, active) => {
        settemas(arr => arr.map(x => x.id === id ? { ...x, active: !active } : x))
    }
    return (
        <>
            <br />
            <div className="container">
                <div className="temas">
                    {
                        temas.map(tema => (
                            <span key={tema.id} onClick={() => activar(tema.id, tema.active)} className={tema.active ? 'active' : 'desactive'}>{tema.name}</span>
                        ))
                    }
                </div>
                <hr />
                <div className="row">
                    {
                        temas.map(tema => tema.active ? (
                            <div key={tema.id} className="col-md-6 mt-2">
                                {tema.component}
                            </div>
                        ) : '')
                    }
                </div>
            </div>
        </>
    )
}

import { collection, addDoc,getDocs } from 'firebase/firestore'
import React, {  useEffect, useState } from 'react'
import db from '../firebase/config'


export const ComentApp = () => {
    const [comentario, setComentario] = useState('')
    const [mensaje, setMensaje] = useState('Enviar');
    const [mensajeAlerta, setMensajeAlerta] = useState('');
    const [numComentarios, setnumComentarios] = useState(0);
    const obtenerCantidadComentarios = async () => {
        try {
            const comentariosSnapshot = await getDocs(collection(db, 'comments'));
            const cantidadComentarios = comentariosSnapshot.size;
            setnumComentarios(cantidadComentarios);
        } catch (error) {
            setMensajeAlerta('Error al obtener la cantidad de comentarios');
        }
    };

    useEffect(() => {
        obtenerCantidadComentarios();
    }, []);
    const agregarComentario = async () => {
        setMensaje('Enviando..');
        if (comentario.trim() != "") {
            try {
                await addDoc(collection(db, "comments"), {
                    created_at: new Date(),
                    message: comentario
                });
                setComentario('');
                setMensajeAlerta('Gracias por tu comentario!!')
                obtenerCantidadComentarios();
            } catch (e) {
                setMensajeAlerta('Error');
            }
        } else setMensajeAlerta('Debes agregar un mensaje');
        setMensaje('Enviar');
    }
    return (
        <>
            <div style={{ height: '100vh', backgroundColor: '#F8F6F6' }}>
                <div className="container">
                    <br />
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Deja tu comentario</h4>
                                </div>
                                <div className="card-body">
                                    <span style={{ color: '#373737' }}>{numComentarios} Comentarios</span>
                                    <textarea placeholder='Agregar un comentario' value={comentario} onChange={(e) => setComentario(e.target.value)} className='inp-comentario'></textarea>
                                    <div className="text-end">
                                        <button className='btn-send-comentario' onClick={() => agregarComentario()}>{mensaje}</button>
                                    </div>
                                </div>
                            </div>
                            {
                                mensajeAlerta != '' ? (
                                    <div className='mensaje-alerta'><span>{mensajeAlerta}</span> <button onClick={() => setMensajeAlerta('')}>OK</button></div>
                                ) : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

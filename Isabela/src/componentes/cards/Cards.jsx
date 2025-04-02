// Importamos los hooks (Funciones) de React que vamos a utilizar: useState y useRef
import React, { useState, useRef } from 'react';
// Importamos los estilos de los componentes creados
import '../cards/cards.css';
import '../cards/modal.css';
import {playas} from '../../data/playas'

export default function Cards() {
    const [selectedPlaya, setSelectedPlaya] = useState(null);
    // Estado para la playa seleccionada. (selectedPlaya: es el valor actual de la playa seleccionada, por defecto es null, lo que significa que no hay ninguna playa seleccionada.)
    // (setSelectedPlaya: es la función utilizada para actualizar el estado de la playa seleccionada.)

    const modalRef = useRef(null);
    // Referencia para el modal. Aquí guardamos el elemento del modal completo, es decir, el componente que representa el modal.
    const btnRef = useRef(null);
    // Referencia para el botón. Aquí guardamos el elemento del botón completo para poder acceder a él y escuchar sus cambios.

    const abrirModal = (playa) => {
        setSelectedPlaya(playa);
        // Actualiza el estado 'selectedPlaya' con la información de la playa seleccionada. Si antes era 'null', ahora se reemplaza por la información de la playa.

        if (modalRef.current) {
            modalRef.current.style.display = 'block';  // Muestra el modal
        }
    };

    const cerrarModal = () => {
        if (modalRef.current) {
            modalRef.current.style.display = 'none';  // Oculta el modal
        }
        setSelectedPlaya(null); // Limpia el estado al cerrar el modal, es decir borra los valores del modal y vuelve a null
    };

    return (
        <>
            <section className='section-cards-info'>
                <div className='contenedor'>
                    <div className="tit-des-contenedor">
                        <h2>Encuentra información de tus playas favoritas aquí</h2>
                        {/* <p>Si, aquí en el mejor lugar</p> */}
                    </div>

                    <div className='contenedor-cards'>
                        {playas.map((elementos, index) => (
                            <article className="card" key={index}>
                                <figure>
                                    <img className="imagen-card" src={elementos.foto} alt="Imagen de la playa" />
                                </figure>
                                <div className="card-contenido">
                                    <div className="informacion-card">
                                        <h3 className="card-titulo">{elementos.nombre}</h3>
                                        <p className="card-descripcion">{elementos.descripcion}</p>
                                        <p className="lugar">  <i class="bi bi-geo-alt"></i> {elementos.lugar}</p>
                                        <div className="btn-activar-modal">
                                            <a
                                                ref={btnRef}

                                                onClick={() => abrirModal(elementos)} // Pasa el objeto de la playa seleccionada
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >Mostrar más</a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {selectedPlaya && (  // Solo muestra el modal si hay una playa seleccionada
                <div ref={modalRef} className='contenedor-modal'>
                    <div className='modal-contenido'>
                        <figure><img src={selectedPlaya.foto} alt="Imagen de la playa" id='imagen-modal' /></figure>

                        <div className="informacion-card-adic">
                            <h4>Características</h4>
                            <ul className='listado-caracteristicas-playa'>
                                {selectedPlaya.caracteristicas.map((caracteristica, idx) => (
                                    <li key={idx}>{caracteristica}</li>
                                ))}
                            </ul>
                            <h4>Deportes acuaticos</h4>
                            <ul className='listado-deportes-playa'>
                                {selectedPlaya.deportes_acuaticos.map((deporte, idx) => (
                                    <li key={idx}>{deporte}</li>
                                ))}
                            </ul>
                            <h4>Actividades</h4>
                            <ul className='listado-actividades-playa'>
                                {selectedPlaya.actividades.map((actividad, idx) => (
                                    <li key={idx}>{actividad}</li>
                                ))}
                            </ul>

                            <div className="mejores-fechas">
                                <p><strong>Temporada alta:</strong> {selectedPlaya.temporada_alta.inicio} - <strong>Temporada baja:</strong> {selectedPlaya.temporada_alta.fin}</p>
                            </div>
                        </div>
                        <button className='btn-cerrar-modal' onClick={cerrarModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </>
    );
}

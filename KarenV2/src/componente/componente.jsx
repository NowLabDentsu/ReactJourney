import { useState, useEffect } from "react";
import axios from "axios";
import "../componente/organisns/componente.css";
import imagen from "./king-maestro-del-terror.jpg";

export default function Componente() {
    const [data, setData] = useState([]);
    const [buscarLibro, setBuscarLibro] = useState("");
    const [librosVisibles, setLibrosVisibles] = useState(8); // Inicialmente mostramos 8

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://stephen-king-api.onrender.com/api/books');
                setData(response.data.data || []);
            } catch (error) {
                console.log("Error al obtener los datos:", error);
                setData([]);
            }
        };
        fetchData();
    }, []);

    // Filtra los libros según el input
    const filteredData = data.filter((item) =>
        item.Title.toLowerCase().includes(buscarLibro.toLowerCase())
    );

    // Función para cargar más libros de 8 en 8
    const mostrarMasLibros = () => {
        setLibrosVisibles(prev => prev + 8);
    };

    // Función para restablecer la lista a solo 8 libros
    const mostrarMenosLibros = () => {
        setLibrosVisibles(8);
    };

    return (
        <section className="seccionCardsLibros">
            <div className="contenedor">
                <img src={imagen} alt="king-maestro-del-terror" width="300" />
                <div className="TextoBuscador">
                    <h1>Libros más conocidos de Stephen King</h1>
                    <div className="buscador">
                        <input
                            className="buscadorInput"
                            name="buscador"
                            placeholder="Buscar por título..."
                            value={buscarLibro}
                            onChange={(e) => setBuscarLibro(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="cardContainerPrin">
                <div className="cardContenedor">
                    {filteredData.length > 0 ? (
                        filteredData.slice(0, librosVisibles).map((item, index) => (
                            <div className="cardLibro" key={item.id || index}>
                                <div className="cardLibroDesc1">
                                    <div className="cardLibroDesc">
                                        <p className="cardLibroTitulo">{item.Title}</p>
                                        <p className="cardLibroAnio">{item.Year}</p>
                                    </div>
                                </div>
                                <p className="cardLibroTitu">Personajes</p>
                                <ul>
                                    {item.villains.slice(0, 3).map((villano, i) => (
                                        <li key={i} className="cardLibroPersonajes">{villano.name}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p>No se encontraron resultados 😢</p>
                    )}
                </div>

                {/* Botón solo si hay más libros que los visibles */}
                <div className="contenedor-boton-ver">
                    {librosVisibles < filteredData.length ? (
                        <button onClick={mostrarMasLibros}>Ver más</button>
                    ) : (
                        <button onClick={mostrarMenosLibros}>Ver menos</button>
                    )}
                </div>
            </div>

            <div className="infoAdd">
                <p>copyright 2025</p>
            </div>

        </section>
    );
}

import { useState, useEffect } from "react"; // Importar los hooks useState y useEffect de React
import axios from "axios"; // Importar axios para hacer peticiones HTTP
import imagen from "../../king-maestro-del-terror.jpg";
import InputBuscador from "../../atoms/Buscador/BuscadorInput.jsx"; // Importar los componentes reutilizables
import BotonVerMas from "../../atoms/BotonVerMas/BotonVerMas.jsx";
import CardLibro from "../../molecules/Item/Items.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Componente.css";

// Definir el componente funcional
export default function SeccionLibros() {
    //estado,funcion que permite cambiar el estado = estado inicial
    const [data, setData] = useState([]); // Estado para almacenar la info de libros
    const [buscarLibro, setBuscarLibro] = useState(""); // Estado para almacenar el término de búsqueda
    const [librosVisibles, setLibrosVisibles] = useState(8); // Estado para controlar cuántos libros se muestran

    // Función asincrónica para obtener los libros de la API
    const fetchData = async () => { //sigue ejecutando el codigo sin necesidad que termine de cargar
        try {
            const response = await axios.get('https://stephen-king-api.onrender.com/api/books');
            // Guardamos los datos en el estado, si la respuesta tiene datos
            setData(response.data.data);
        } catch (error) {
            // Si hay un error en la petición, lo mostramos en la consola
            console.log("Error al obtener los datos:", error);
            // En caso de error, dejamos el estado vacío
            setData([]);
        }
    };

    useEffect(() => {
        // Llamamos a la función para obtener los datos
        fetchData();
    }, []); // El array vacío indica que el efecto solo se ejecuta una vez al montar el componente

    // Filtramos los libros según el término de búsqueda ingresado por el usuario
    const filteredData = data.filter((item) =>//crea un nuevo array, compara la info traida de la api con lo escrito por el usuario 
        item.Title.toLowerCase().includes(buscarLibro.toLowerCase())
    );

    // Función para mostrar más libros (aumenta el número de libros visibles en 8)
    const mostrarMasLibros = () => setLibrosVisibles(cardsPantalla => cardsPantalla + 8);//función de actualización, recibe el valor actual del estado y retorna el nuevo
    // Función para restablecer la cantidad de libros visibles a 8
    const mostrarMenosLibros = () => setLibrosVisibles(8);//actualiza el estado 

    return (
        <>
            <section className="seccionCardsLibros">
                <div className="contenedor">
                    <img src={imagen} alt="king-maestro-del-terror" width="300" />
                    <div className="TextoBuscador">
                        <h1>Libros más conocidos de Stephen King</h1>
                        <InputBuscador // el valor del input será el valor del estado
                        value={buscarLibro} onChange={(e) => setBuscarLibro(e.target.value)} //obtiene el valor actual del input y actualiza el estado
                         />
                    </div>
                </div>

                <div className="cardContainerPrin">
                    <div className="cardContenedor">
                        {filteredData.length > 0 ? (
                            filteredData.slice(0, librosVisibles).map((libro) => (
                                <CardLibro key={libro.id} libro={libro} />
                            ))
                        ) : (
                            <p>No se encontraron resultados</p>
                        )}
                    </div>

                    {filteredData.length > 8 && (// si se cumple la funcion se muestra la funcion, de lo contrario no
                        <div className="contenedorBotonVer">
                            <BotonVerMas //se ejecuta la funcion para mostrar mas o menos libros
                                onClick={librosVisibles < filteredData.length ? mostrarMasLibros : mostrarMenosLibros}
                                hayMasLibros={librosVisibles < filteredData.length}
                            />
                        </div>
                    )}
                </div>
                <Footer />
            </section>
        </>
    );
}

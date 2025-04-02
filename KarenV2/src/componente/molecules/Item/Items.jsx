import "./Item.css";

//Declaración de funcion, se exporta este componente para que pueda ser importado y usado en otros componentes
export default function CardLibro({ libro }) {
    return (
        <article className="cardLibro">
            <div className="cardLibroDesc1">
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="26" height="26" color="white">
                    <path d="M17,0H7C4.243,0,2,2.243,2,5v15c0,2.206,1.794,4,4,4h11c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,5v11H8V2h4V10.347c0,.623,.791,.89,1.169,.395l1.331-1.743,1.331,1.743c.378,.495,1.169,.228,1.169-.395V2c1.654,0,3,1.346,3,3ZM6,2.184v13.816c-.732,0-1.409,.212-2,.556V5c0-1.302,.839-2.402,2-2.816Zm11,19.816H6c-2.629-.047-2.627-3.954,0-4h14v1c0,1.654-1.346,3-3,3Z" fill="white"/>
                </svg>
                <div className="cardLibroDesc">
                    <p className="cardLibroTitulo">{libro.Title}</p>
                    <p className="cardLibroAnio">{libro.Year}</p>
                </div>
            </div>
            <p className="cardLibroTitu">Personajes</p>
            <ul>
                {libro.villains.length > 0 ? (
                    libro.villains.slice(0, 3).map((villano, i) => ( //
                        <li key={i} className="cardLibroPersonajes">{villano.name}</li>
                    ))
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30" fill="white">
                        <path d="M9.5,4.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm7.5,7.5v3c0,1.474-.81,2.75-2,3.444v4.556c0,.552-.448,1-1,1s-1-.448-1-1v-4h-2v4c0,.552-.448,1-1,1s-1-.448-1-1v-4.556c-1.19-.694-2-1.97-2-3.444v-3c0-2.206,1.794-4,4-4h2c2.206,0,4,1.794,4,4ZM5,5c1.381,0,2.5-1.119,2.5-2.5S6.381,0,5,0,2.5,1.119,2.5,2.5s1.119,2.5,2.5,2.5Zm14,0c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm1,1h-2c-.744,0-1.432,.217-2.029,.572-.029,.056-.059,.112-.09,.167,1.858,1.021,3.12,2.996,3.12,5.261v3c0,.69-.128,1.365-.357,2h1.357v4c0,.552,.448,1,1,1s1-.448,1-1v-4.556c1.19-.694,2-1.97,2-3.444v-3c0-2.206-1.794-4-4-4ZM5,15v-3c0-2.265,1.262-4.24,3.12-5.261-.032-.055-.061-.11-.09-.167-.597-.355-1.286-.572-2.029-.572h-2C1.794,6,0,7.794,0,10v3c0,1.474,.81,2.75,2,3.444v4.556c0,.552,.448,1,1,1s1-.448,1-1v-4h1.357c-.229-.635-.357-1.31-.357-2Z"/>
                    </svg>
                )}
            </ul>
        </article>
    );
}

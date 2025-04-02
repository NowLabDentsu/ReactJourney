import '../banner2/banner2.css';
import bannerImagen from '../../assets/Banner.jpg';

const informacionBanner = {
    imagen: bannerImagen,
    titulo: 'Todo lo que necesitas saber sobre la playa',
    descripcion: 'Descubre las mejores playas, actividades y consejos para disfrutar del sol y el mar de manera segura. Encuentra información útil para planificar tu día perfecto junto al mar.',
    boton1: {
        nombre: 'Ver paquetes',
        url: 'https://www.livingcol.com/tours/es/planes-turisticos-playa.php'
    },
    boton2: {
        nombre: 'Consejos de seguridad',
        url: 'https://google.com'
    }
}


export default function Banner2() {


    return (
        <>
            <section className="banner-section">
                <div className="contenedor-banner-prin">

                    <div className="contenido-izquierda-ban">
                        <figure>
                            <img className="img-banner-principal" src={informacionBanner.imagen} alt="" />
                        </figure>
                    </div>

                    <div className="contenido-derecha-ban">

                        <h1 className="titulo-banner-prin" >{informacionBanner.titulo}</h1>
                        <p className="descripcion-banner-prin">{informacionBanner.descripcion}</p>

                        <div className="botones-ban">
                            <div className="btn-inicial">
                                <a href={informacionBanner.boton1.url} target="_blank" rel="noopener noreferrer">{informacionBanner.boton1.nombre}</a>
                            </div>

                            {/* <div className="btn-secundario">
                                <a href={informacionBanner.boton2.url} target="_blank" rel="noopener noreferrer">{informacionBanner.boton2.nombre}</a>
                            </div> */}
                        </div>
                    </div>
                </div>

            </section>


        </>
    )
}

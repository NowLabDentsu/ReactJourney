// Creamos un JSON con toda la información de las playas a consumir
//Importamos las imagenes de las cards
import imagen1 from '../assets/playa_blanca.jpeg';
import imagen2 from '../assets/playa_san_andres.jpeg';
import imagen3 from '../assets/Playa_de_Taganga_SM.jpeg';
import imagen4 from '../assets/playa_Punta_Gallinas.jpeg';
import imagen5 from '../assets/playa_Parque_Tayrona.jpeg';
import imagen6 from '../assets/Playa_de_Los_Naranjos.jpeg';
import imagen7 from '../assets/Cabo_de_la_Vela.jpeg';
import imagen8 from '../assets/Playa_El_Rodadero.jpeg';
import imagen9 from '../assets/playa_Taganga.jpeg';
import imagen10 from '../assets/Playa_de_Las_Tres_Playas.jpeg';
import imagen11 from '../assets/Playa_de_la_Boquilla.jpeg';
import imagen12 from '../assets/Playa_de_Cañaveral.jpeg';
import imagen13 from '../assets/Playa_de_Manzanillo_del_Mar.jpeg';
export const playas = [
    {
        "nombre": "Playa Blanca",
        "descripcion": "Playa Blanca es famosa por su arena blanca y aguas turquesa, ideal para nadar, bucear y tomar el sol. Ubicada en la isla Barú, es un destino popular para turistas que visitan Cartagena.",
        "lugar": "Isla Barú, Cartagena",
        "caracteristicas": [
            "arena blanca",
            "agua cristalina",
            "ideal para relajarse"
        ],
        "deportes_acuaticos": [
            "buceo",
            "snorkel",
            "paseos en bote"
        ],
        "actividades": [
            "relajación en la playa",
            "snorkeling",
            "paseos en lancha",
            "visitas a islotes cercanos"
        ],
        "foto": imagen1,
        "temporada_alta": {
            "inicio": "diciembre-15",
            "fin": "enero-15"
        },
        "temporada_baja": {
            "inicio": "abril-01",
            "fin": "noviembre-30"
        }
    },

    {
        "nombre": "San Andrés",
        "descripcion": "La isla de San Andrés es conocida por su mar de siete colores y su ambiente relajado. Además de su belleza natural, ofrece actividades como deportes acuáticos, ecoturismo y exploración submarina.",
        "lugar": "San Andrés Isla",
        "caracteristicas": [
            "agua turquesa",
            "arrecifes de coral",
            "ecosistema marino"
        ],
        "deportes_acuaticos": [
            "buceo",
            "windsurf",
            "kitesurf",
            "snorkel"
        ],
        "actividades": [
            "excursiones a Johnny Cay",
            "tour en bote con fondo de cristal",
            "buceo en los arrecifes",
            "paseos en moto de agua"
        ],
        "foto": imagen2,
        "temporada_alta": {
            "inicio": "diciembre-20",
            "fin": "enero-10"
        },
        "temporada_baja": {
            "inicio": "febrero-01",
            "fin": "noviembre-30"
        }
    },

    {
        "nombre": "Taganga",
        "descripcion": "Taganga es un pintoresco pueblo de pescadores situado cerca de Santa Marta. Ofrece playas tranquilas, ideales para nadar, además de un vibrante ambiente local. Es un destino popular para mochileros.",
        "lugar": "Santa Marta, Magdalena",
        "caracteristicas": [
            "playa tranquila",
            "ambiente relajado",
            "buceo"
        ],
        "deportes_acuaticos": [
            "buceo",
            "snorkel",
            "kayak"
        ],
        "actividades": [
            "excursiones en bote",
            "exploración de la fauna marina",
            "caminatas por los alrededores",
            "observación de atardeceres"
        ],
        "foto": imagen3,
        "temporada_alta": {
            "inicio": "diciembre-01",
            "fin": "enero-31"
        },
        "temporada_baja": {
            "inicio": "marzo-01",
            "fin": "noviembre-30"
        }
    },

    {
        "nombre": "Punta Gallinas",
        "descripcion": "Punta Gallinas es el punto más septentrional de Colombia, ubicado en La Guajira. Es un destino remoto y tranquilo, rodeado de paisajes desérticos y marinos, ideal para los aventureros.",
        "lugar": "La Guajira",
        "caracteristicas": [
            "paisajes desérticos",
            "agua cristalina",
            "punto más norte de Colombia"
        ],
        "deportes_acuaticos": [
            "kite surf",
            "paseos en bote"
        ],
        "actividades": [
            "visita al faro de Punta Gallinas",
            "exploración del desierto",
            "observación de aves",
            "paseos por las dunas"
        ],
        "foto": imagen4,
        "temporada_alta": {
            "inicio": "diciembre-15",
            "fin": "enero-15"
        },
        "temporada_baja": {
            "inicio": "febrero-01",
            "fin": "noviembre-30"
        }
    },

    {
        "nombre": "Parque Tayrona",
        "descripcion": "El Parque Nacional Natural Tayrona es una de las áreas protegidas más hermosas de Colombia, combinando selva tropical, playas paradisíacas y una rica biodiversidad. Aquí se encuentran algunas de las playas más espectaculares del país.",
        "lugar": "Santa Marta, Magdalena",
        "caracteristicas": [
            "selva tropical",
            "playas vírgenes",
            "biodiversidad"
        ],
        "deportes_acuaticos": [
            "buceo",
            "snorkel",
            "kayak"
        ],
        "actividades": [
            "senderismo",
            "observación de fauna",
            "relajación en playas aisladas",
            "camping"
        ],
        "foto": imagen5,
        "temporada_alta": {
            "inicio": "diciembre-15",
            "fin": "enero-15"
        },
        "temporada_baja": {
            "inicio": "abril-01",
            "fin": "noviembre-30"
        }
    },

    {
        "nombre": "Playa de Los Naranjos",
        "descripcion": "Ubicada en el Parque Nacional Natural de los Corales del Rosario, esta playa es ideal para aquellos que buscan tranquilidad, aguas claras y una rica vida marina para explorar.",
        "lugar": "Islas del Rosario, Cartagena",
        "caracteristicas": [
            "agua cristalina",
            "arrecifes de coral",
            "área protegida"
        ],
        "deportes_acuaticos": [
            "buceo",
            "snorkel",
            "paseos en bote"
        ],
        "actividades": [
            "exploración de los arrecifes",
            "snorkeling",
            "relajación en la playa",
            "observación de vida marina"
        ],
        "foto": imagen6,
        "temporada_alta": {
            "inicio": "diciembre-01",
            "fin": "enero-15"
        },
        "temporada_baja": {
            "inicio": "febrero-01",
            "fin": "noviembre-30"
        }
    },

    {
        "nombre": "Cabo de la Vela",
        "descripcion": "Cabo de la Vela es una playa desértica ubicada en La Guajira, famosa por su cultura Wayuu, sus paisajes únicos y sus hermosas vistas al mar Caribe.",
        "lugar": "La Guajira",
        "caracteristicas": [
            "paisajes desérticos",
            "agua cálida",
            "cultura indígena Wayuu"
        ],
        "deportes_acuaticos": [
            "kite surf",
            "windsurf"
        ],
        "actividades": [
            "visita a la playa del Pilón de Azúcar",
            "observación de la cultura Wayuu",
            "exploración del desierto",
            "paseos en bote"
        ],
        "foto": imagen7,
        "temporada_alta": {
            "inicio": "diciembre-01",
            "fin": "enero-15"
        },
        "temporada_baja": {
            "inicio": "febrero-01",
            "fin": "noviembre-30"
        }
    },

    {
        "nombre": "Playa El Rodadero",
        "descripcion": "El Rodadero es una playa muy popular en Santa Marta, conocida por su ambiente turístico animado, hoteles cerca de la playa, y muchas actividades acuáticas y recreativas.",
        "lugar": "Santa Marta, Magdalena",
        "caracteristicas": [
            "playa vibrante",
            "agua cálida",
            "zonas de entretenimiento"
        ],
        "deportes_acuaticos": [
            "jetski",
            "banana boat",
            "paseos en barco"
        ],
        "actividades": [
            "nado en el mar",
            "relajación en la arena",
            "visita al Acuario y Museo del Mar",
            "compras y restaurantes"
        ],
        "foto": imagen8,
        "temporada_alta": {
            "inicio": "diciembre-15",
            "fin": "enero-15"
        },
        "temporada_baja": {
            "inicio": "febrero-01",
            "fin": "noviembre-30"
        }
    },

    {
        "nombre": "Playa de Taganga",
        "descripcion": "Taganga es una pequeña pero vibrante playa en el Parque Nacional Natural Tayrona, famosa por su ambiente relajado, ideal para mochileros y viajeros aventureros.",
        "lugar": "Santa Marta, Magdalena",
        "caracteristicas": [
            "ambiente tranquilo",
            "playa pintoresca",
            "áreas para buceo"
        ],
        "deportes_acuaticos": [
            "buceo",
            "snorkel",
            "kayak",
            "paseos en bote"
        ],
        "actividades": [
            "exploración de los alrededores",
            "snorkeling en la bahía",
            "relajación en la playa",
            "caminatas por las montañas"
        ],
        "foto": imagen9,
        "temporada_alta": {
            "inicio": "diciembre-01",
            "fin": "enero-31"
        },
        "temporada_baja": {
            "inicio": "marzo-01",
            "fin": "noviembre-30"
        }
    },

    {
        "nombre": "Playa de Las Tres Playas",
        "descripcion": "Este conjunto de playas cerca de Santa Marta es perfecto para los que buscan un lugar menos concurrido, rodeado de naturaleza virgen y aguas cristalinas.",
        "lugar": "Parque Nacional Natural Tayrona, Santa Marta",
        "caracteristicas": [
            "playas solitarias",
            "agua clara",
            "naturaleza virgen"
        ],
        "deportes_acuaticos": [
            "buceo",
            "snorkel",
            "pesca",
            "kayak"
        ],
        "actividades": [
            "senderismo",
            "exploración de la fauna y flora",
            "relajación en un entorno natural"
        ],
        "foto": imagen10,
        "temporada_alta": {
            "inicio": "diciembre-15",
            "fin": "enero-15"
        },
        "temporada_baja": {
            "inicio": "abril-01",
            "fin": "noviembre-30"
        }
    },

    {
        "nombre": "Playa de la Boquilla",
        "descripcion": "Ubicada en las afueras de Cartagena, La Boquilla es una playa tranquila donde los turistas pueden disfrutar de una experiencia más relajada, además de ser un punto perfecto para disfrutar de la gastronomía local.",
        "lugar": "Cartagena, Bolívar",
        "caracteristicas": [
            "playa tranquila",
            "bajo nivel de afluencia",
            "gente local amable"
        ],
        "deportes_acuaticos": [
            "windsurf",
            "kitesurf",
            "kayak",
            "paseos en canoa"
        ],
        "actividades": [
            "relajación en la playa",
            "visita a los restaurantes locales",
            "paseos por el manglar",
            "observación de aves"
        ],
        "foto": imagen11,
        "temporada_alta": {
            "inicio": "diciembre-01",
            "fin": "enero-15"
        },
        "temporada_baja": {
            "inicio": "febrero-01",
            "fin": "noviembre-30"
        }
    },

    {
        "nombre": "Playa de Cañaveral",
        "descripcion": "Cañaveral es una de las playas más conocidas del Parque Tayrona, con aguas tranquilas y una vista espectacular, ideal para aquellos que buscan un entorno más natural y menos turístico.",
        "lugar": "Parque Nacional Natural Tayrona, Santa Marta",
        "caracteristicas": [
            "playa aislada",
            "agua tranquila",
            "paisajes naturales"
        ],
        "deportes_acuaticos": [
            "snorkel",
            "buceo",
            "kayak"
        ],
        "actividades": [
            "senderismo por la selva",
            "relajación en la playa",
            "observación de fauna",
            "acampada"
        ],
        "foto": imagen12,
        "temporada_alta": {
            "inicio": "diciembre-15",
            "fin": "enero-15"
        },
        "temporada_baja": {
            "inicio": "febrero-01",
            "fin": "noviembre-30"
        }
    },

    {
        "nombre": "Playa de Manzanillo del Mar",
        "descripcion": "Manzanillo del Mar es una pequeña y tranquila playa cercana a Cartagena, ideal para disfrutar de la belleza natural y de una experiencia más relajada, sin la multitud de los centros turísticos.",
        "lugar": "Cartagena, Bolívar",
        "caracteristicas": [
            "playa tranquila",
            "poca afluencia",
            "mucha naturaleza"
        ],
        "deportes_acuaticos": [
            "paseos en lancha",
            "kayak",
            "pesca deportiva"
        ],
        "actividades": [
            "relajación en la playa",
            "recorridos por el campo",
            "paseos por la zona costera"
        ],
        "foto": imagen13,
        "temporada_alta": {
            "inicio": "diciembre-01",
            "fin": "enero-15"
        },
        "temporada_baja": {
            "inicio": "febrero-01",
            "fin": "noviembre-30"
        }
    }
]
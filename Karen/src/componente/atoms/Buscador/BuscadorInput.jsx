import "./Buscador.css";

//Declaración de funcion, se exporta este componente para que pueda ser importado y usado en otros componentes
export default function InputBuscador({ value, onChange }) { //recibe 2 propiedades, el texto que se muestra dentro del campo de búsqueda, 
// la función que se ejecuta cuando el usuario escribe en el campo
    return (
        <input
            className="buscadorInput"
            name="buscador"
            placeholder=" Busca tu proximo libro favorito"
            value={value}
            onChange={onChange}//se ejecutara cada que el usuario escriba en el input
        />
    );
}

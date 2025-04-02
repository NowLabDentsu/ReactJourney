import "./Botonvermas.css";

//Declaración de funcion, se exporta este componente para que pueda ser importado y usado en otros componentes
export default function BotonVerMas({ onClick, hayMasLibros }) { //recibe 2 propiedades
    return (
        //cuando se de click en el boton se ejecutara la acción
        <button onClick={onClick}>
            {hayMasLibros ? "Ver más" : "Ver menos"} 
        </button>
    );
}
//El operador ternario es una forma compacta de escribir un if...else en js 
// Ej: condición ? valor_si_true : valor_si_false

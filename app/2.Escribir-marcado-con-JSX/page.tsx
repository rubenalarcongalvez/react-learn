function MarcadoJSX() {
    return (
        <>
            <h1>Esto es un marcado con JSX</h1>
            <p>El JSX es más estricto que HTML. Tienes que cerrar etiquetas como br</p>
            <p>Además, el componente no puede devolver varias etiquetas o componentes JSX, como vimos antes y hay que envolverlo en un selector más como un div o un main</p>
        </>
    );
}

export default function EscribirMarcadoJSX() {
    /* IMPORTANT: Que no se nos olvide que hay que hacer return para mostrar el contenido HTML (JSX). Si no, será una función normal */
    return (
        <MarcadoJSX/>
    );
}
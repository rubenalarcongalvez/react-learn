import { otraVariable } from "./mas-cosas"; /* Podemos importar lo que queramos siempre que lo exportemos en el otro archivo */

export default function MostrarDatos() {
    /* Podemos declarar variables de esta forma. Si no las vamos a volver a llamar, usamos const, si sí, let */
    const user = {
        name: 'Rubén',
        surname: 'Alarcón',
        imageUrl: 'image.png',
        imageSize: 50,
        clases: 'estilo-global !rounded'
    }
    
    return(
        /* Para comentarios DENTRO del codigo JS/TS, lo hacemos así */
        <main className="flex justify-center">
            {/* Para comentarios DENTRO del código HTML, lo hacemos así */}
            <h1 className="flex gap-2 items-center">
                {/* Aqui usamos la variable importada */}
                <span>{otraVariable}</span>
                {/* IMPORTANT: Las variables o ejecución de código TS, se llaman con los {} */}
                <span>{user.name}</span>
                {/* IMPORTANT: También podemos usarlo en cualquier lado, por ejemplo en los estilos y clases */}
                <span>{user.surname}</span>
                <img 
                    src={user.imageUrl}
                    alt={'Foto de ' + user.name}
                    // IMPORTANT: Podemos usar el atributo style con doble {{}} cuando nuestros atributos dependan de JS/TS
                    style={{
                        width: user.imageSize,
                        height: user.imageSize,
                    }}
                    className={user.clases}
                />
            </h1>
        </main>
    );
}
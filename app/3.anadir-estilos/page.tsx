import "./style.css"; /* IMPORTANT: Podemos poner los estilos que queramos en otro archivo e importarlo aqui */

export default function Estilos() {
    
    return(
        /* IMPORTANT: En lugar de usar class, usamos className para clases en React ya que tsx no soporta class */
        <main>
            {/* Podemos usar Tailwind, estilos globales (global.css) e incluso estilos en otros archivos */}
            <h1 className="text-blue-600 estilo-global fondo-guay">Hola, estoy estilizado</h1>
        </main>
    );
}
import { OtroComponente } from './otro-componente';

// Podemos crear componentes tanto encapsulados como en el mismo archivo. Funcionan como si fueran funciones
/* IMPORTANT: Los componentes de React siempre van la primera en mayúscula para diferenciarlos de los selectores HTML */
function MiComponente() {
  // IMPORTANT: El return debe ser con paréntesis (), no con {}
  return (
    <div>Esto ya sería un componente que podemos utilizar</div>
  )
}

// Este componente es el componente principal del archivo, por lo que lo pondremos default
export default function CrearYAnidarComponentesPage() {
  return (
    // Aquí ya lo podremos usar, tanto en forma de componente asi
    <main>
      {/* IMPORTANT: No se pueden instanciar los componentes 2 veces DENTRO del return. Deberemos poner un selector englobandolos */}

      {/* <MiComponente></MiComponente> */}
      {/* Como asi, y como estamos dentro de un selector que engloba ya todo, ya podemos ponerlo las veces que queramos */}
      <MiComponente />
      <MiComponente />
      <p>* Lo duplico para que veamos dónde podemos instaurarlo y en qué contextos</p>
      <OtroComponente/>
    </main>
  );
}

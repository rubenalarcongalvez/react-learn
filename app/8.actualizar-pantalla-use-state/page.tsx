'use client' // Si trabajamos con Nextjs, es muy importante poner esto si vamos a usar cosas inherentes al cliente y no a cosas que podamos subir a Edge Functions del servidor. Hay que declararlo implícitamente
import { useState } from "react"; // Debemos importar useState

// IMPORTANT: Esta función, como se declara FUERA de otra función, solo se define 1 vez, por lo que no se actualizará en cada render
function reclamarBillete(mensaje: string) {
  alert(mensaje);
  alert('¿Devolvele qué?');
}

export default function ActualizarPantallaUseState() {
  const [reclamarBilleteActivado, activarReclamarBillete] = useState(false); // IMPORTANT: En la primera variable, tenemos el valor, y en la segunda, el método para cambiarlo (getter y setter)
  const [vecesReclamado, setContadorReclamado] = useState(0); // Podemos hacerlo con cualquier cosa

  // IMPORTANT: Esta función, como se declara DENTRO de otra función, se actualizará en cada render. Es lo más correcto normalmente
  function hablarAPresidenteCuba() {
    alert('No sé si deberíamos darle el billete de un billón de dólares...')
    alert('Pero si en mi país todos somos amigos, chico');
    activarReclamarBillete(true); // IMPORTANT: Así podemos cambiar el valor de los useState
  }

  function accionReclamarBillete(mensaje: string) {
    reclamarBillete(mensaje);
    setContadorReclamado(vecesReclamado + 1); // IMPORTANT: No nos vale el ++
  }

  let diLaFrase;
  if (reclamarBilleteActivado) {
    diLaFrase = <>
      <section className="flex gap-2">
        <button className="text-5xl" onClick={() => accionReclamarBillete('¿Nos lo devuelve?')}>Reclamar el billete robado</button>
        <span>Veces reclamado el billete: <span style={{color: vecesReclamado >= 5 ? 'red' : 'black'}}>{vecesReclamado}</span></span>
        {vecesReclamado < 5 ? <span>Prueba a pedírselo 5 veces</span> : <span/>}
      </section>
      <hr />
      <section className="flex gap-2">
        {/* IMPORTANT: Dentro de un componente, los useState son individuales. A no ser que pongamos el useState a nivel global en un componente padre o a nivel de archivo */}
        {vecesReclamado >= 5 && (
          <>
            <Pegarle accion="Gancho"/>
            <Pegarle accion="Patada"/>
          </>
        )}
      </section>
    </>;
  } else {
    diLaFrase = <button onClick={hablarAPresidenteCuba}>Hablar con el presidente de Cuba</button>;
  }

  return(
    <>
      {diLaFrase}
      <br />
      <footer>#LosSimpson</footer>
    </>
  );
}

function Pegarle({accion}: {accion: 'Gancho' | 'Patada'}) {
  const [golpesDados, darGolpe] = useState(0);

  return(
    <>
      <button onClick={() => darGolpe(golpesDados + 1)}>Darle {accion}</button>
      <span>{accion + 's'}: <span style={{color: golpesDados >= 5 ? 'red' : 'black'}}>{golpesDados}</span></span>
    </>
  );
}
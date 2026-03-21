'use client' // Si trabajamos con Nextjs, es muy importante poner esto si vamos a usar cosas inherentes al cliente y no a cosas que podamos subir a Edge Functions del servidor. Hay que declararlo implícitamente
import { useState } from "react";

function reclamarBillete(mensaje: string) {
  alert(mensaje);
  alert('¿Devolvele qué?');
}

export default function CompartirDatosEntreComponentes() {
  const [reclamarBilleteActivado, activarReclamarBillete] = useState(false);
  const [vecesReclamado, setContadorReclamado] = useState(0);
  const [golpes, setGolpes] = useState(0);

  function hablarAPresidenteCuba() {
    alert('No sé si deberíamos darle el billete de un billón de dólares...')
    alert('Pero si en mi país todos somos amigos, chico');
    activarReclamarBillete(true);
  }

  function accionReclamarBillete(mensaje: string) {
    reclamarBillete(mensaje);
    setContadorReclamado(vecesReclamado + 1);
  }

  const vecesReclamarBilleteParaPegarle: number = 3;

  let diLaFrase;
  if (reclamarBilleteActivado) {
    diLaFrase = <>
      <section className="flex gap-2">
        <button className="text-5xl" onClick={() => accionReclamarBillete('¿Nos lo devuelve?')}>Reclamar el billete robado</button>
        <span>Veces reclamado el billete: <span style={{color: vecesReclamado >= vecesReclamarBilleteParaPegarle ? 'red' : 'black'}}>{vecesReclamado}</span></span>
        {vecesReclamado < vecesReclamarBilleteParaPegarle ? <span>Prueba a pedírselo {vecesReclamarBilleteParaPegarle} veces</span> : <span/>}
      </section>
      <hr />
      <section className="flex gap-2">
        {vecesReclamado >= vecesReclamarBilleteParaPegarle && (
          <>
            {/* // IMPORTANT: También podemos compartir useStates, variables y funciones para usarlas entre padres e hijos */}
            <Pegarle accion="Gancho" golpesDados={golpes} darGolpe={() => setGolpes(golpes + 1)}/>
            <Pegarle accion="Patada" golpesDados={golpes} darGolpe={() => setGolpes(golpes + 1)}/>
          </>
        )}
      </section>
      {vecesReclamado >= vecesReclamarBilleteParaPegarle && (golpes >= 20) && (
        <>
          <div className="flex justify-center">
            <img src="https://cdn.memegenerator.es/imagenes/memes/full/18/74/18747943.jpg" alt="Meme"/>
          </div>
        </>
      )}
    </>;
  } else {
    diLaFrase = <button onClick={hablarAPresidenteCuba}>Hablar con el presidente de Cuba</button>;
  }

  return(
    <>
      {diLaFrase}
      <br />
      <footer className="text-center">#LosSimpson</footer>
    </>
  );
}

// IMPORTANT: También podemos compartir useStates, variables y funciones. Podemos simplemente poner el primer {} si no queremos especificar
function Pegarle({accion, golpesDados, darGolpe}: {accion: 'Gancho' | 'Patada', golpesDados: number, darGolpe: (siguiente: number) => void}) {
  const [golpesDadosLocales, darGolpeLocal] = useState(0);

  return(
    <>
      <button
        onClick={() => {
          darGolpeLocal(golpesDadosLocales + 1);
          darGolpe(golpesDados + 1);
        }}
      >
        Darle {accion}
      </button>
      <span>{accion + 's'}: <span style={{color: golpesDados >= 5 ? 'red' : 'black'}}>{golpesDadosLocales}</span></span>
    </>
  );
}
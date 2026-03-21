'use client' // IMPORTANT: Si trabajamos con Nextjs, es muy importante poner esto si vamos a usar cosas inherentes al cliente y no a cosas que podamos subir a Edge Functions del servidor. Hay que declararlo implícitamente

// IMPORTANT: Esta función, como se declara FUERA de otra función, solo se define 1 vez, por lo que no se actualizará en cada render
function reclamarBillete(mensaje: string) {
  alert(mensaje);
  alert('¿Devolvele qué?');
}

export default function Eventos() {
  const activarReclamarBillete: boolean = false; // Como aún no hemos dado los useState, no lo podemos cambiar, ya que daría error en React en tiempo de compilación

  // IMPORTANT: Esta función, como se declara DENTRO de otra función, se actualizará en cada render. Es lo más correcto normalmente
  function hablarAPresidenteCuba() {
    alert('No sé si deberíamos darle el billete de un billón de dólares...')
    alert('Pero si en mi país todos somos amigos, chico');
    alert('CONTINUARÁ CON LOS USESTATE');
  }

  let diLaFrase;
  if (activarReclamarBillete) {
    // IMPORTANT: Aquí usamos lambda porque le vamos a pasar una función que tiene parámetros
    // A esta parte no llegaríamos, ya que no hemos usado el useState
    diLaFrase = <button onClick={() => reclamarBillete('¿Nos lo devuelve?')}>Reclamar el billete robado</button>;
  } else {
    // IMPORTANT: Podemos en el onclick llamar a la función (PERO SIN PARÉNTESIS, si no, deberemos usar una lambda)
    diLaFrase = <button onClick={hablarAPresidenteCuba}>Hablar con el presidente de Cuba</button>;
  }

  return(
    <>
      {diLaFrase}
      <footer>#LosSimpson</footer>
    </>
  );
}
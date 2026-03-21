function ComponenteLargo() {
  return (
    <div>
      <h1>Título exquisito. LOGUÉATE ANTES</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas alias veritatis voluptas quae quos eos saepe! Voluptatem laborum quisquam nisi inventore mollitia unde eveniet quo atque? Quos, cumque blanditiis.</p>
    </div>
  );
}

function ComponenteCorto() {
  return (
    <span style={{fontSize: '10px'}}>Holi</span>
  );
}

export default function RenderizadoCondicional() {
  // IMPORTANT: Podemos asignar componentes a variables
  const estaLogueado = false; // Solo es un ejemplo
  let componenteEnVariable;

  /* De esta forma podemos renderizar en una variable opcional las cosas */
  if (estaLogueado) {
    componenteEnVariable = <ComponenteCorto/>
  } else {
    componenteEnVariable = <ComponenteLargo/>
  }

  return(
    <div>
      {componenteEnVariable}

      {/* También podemos hacerlo con ternarias */}
      {estaLogueado ? <ComponenteCorto/> : <ComponenteLargo/>}
      
      {/* O incluso con sintáxis lógica si lo queremos más simple */}
      {estaLogueado && <ComponenteCorto/>} { /* Este solo aparecerá obviamente si estaLogueado está en true */}
    </div>
  );
}
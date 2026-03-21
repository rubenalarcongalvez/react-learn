/* IMPORTANT: Es para poder mostrar y jugar con las listas en React */
export default function RenderizadoDeListas() {
  const productos = [
    { title: 'Banana', id: 1 },
    { title: 'Caracoles', id: 2 },
    { title: 'Patatas', id: 3 },
    { title: '', id: 4 },
  ];

  /* IMPORTANT: No podemos hacer un for para esto ya que React no lo renderiza bien en TSX */
  /* Podemos mapear la lista tanto aquí en una variable como dentro en el HTML */
  const listaProductos = productos.map(producto => {
    /* Con key, definimos el tackBy (cuál es el id de la verdad distintivo) */
    return (<li key={producto.id}>{producto?.title || 'Sin título'}</li>); // IMPORTANT: Podemos poner return para que sea más claro entre paréntesis)
  });

  return(
    <>
      <h1>Lista hecha en una variable</h1>
      <ul>{listaProductos}</ul>
      <h1>Lista hecha en el propio HTML</h1>
      <ul>
        {/* Podemos tanto mapearlo aquí dentro como fuera en una variable */}
        {productos.map(producto => ( // IMPORTANT: También, en lugar de usar return, podemos usar () para englobar lo que queramos devolver
          /* Con key, definimos el tackBy (cuál es el id de la verdad distintivo) */
          <li key={producto.id}>{producto?.title || 'Sin título'}</li>
        ))}
      </ul>
    </>
  );
}
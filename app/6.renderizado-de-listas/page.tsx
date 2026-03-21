/* IMPORTANT: Es para poder mostrar y jugar con las listas en React */
export default function RenderizadoDeListas() {
  const productos = [
    { id: 1, title: 'Banana', color: 'red' },
    { id: 2, title: 'Tomate', color: 'red' },
    { id: 3, title: 'Fresa', color: 'red' },
    { id: 4, title: 'Arándanos', color: 'blue' },
    { id: 5, title: 'Uvas', color: 'blue' },
    { id: 6, title: 'Berenjena', color: 'blue' },
    { id: 7, title: 'Ciruela', color: 'blue' },
    { id: 8, title: 'Kiwi', color: 'green' },
    { id: 9, title: 'Brócoli', color: 'green' },
    { id: 10, title: '', color: 'green' },
  ];

  /* IMPORTANT: No podemos hacer un for para esto ya que React no lo renderiza bien en TSX */
  /* Podemos mapear la lista tanto aquí en una variable como dentro en el HTML */
  const listaProductos = productos.map(producto => {
    /* Con key, definimos el tackBy (cuál es el id de la verdad distintivo) */
    return (<li key={producto.id}>{producto?.title || 'Sin título'}</li>); // IMPORTANT: Podemos poner return para que sea más claro entre paréntesis)
  });

  return(
    <>
      <h1>Lista hecha en una variable (sin ponerle la propiedad para el color)</h1>
      <ul>{listaProductos}</ul>
      <h1>Lista hecha en el propio HTML</h1>
      <ul>
        {/* Podemos tanto mapearlo aquí dentro como fuera en una variable */}
        {productos.map(producto => ( // IMPORTANT: También, en lugar de usar return, podemos usar () para englobar lo que queramos devolver
          /* Con key, definimos el tackBy (cuál es el id de la verdad distintivo) */
          <li 
            key={producto.id}
            style={{color: producto?.color || 'black'}}
          >
            {producto?.title || 'Sin título'}
          </li>
        ))}
      </ul>
    </>
  );
}
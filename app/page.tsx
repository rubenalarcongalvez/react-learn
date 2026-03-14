export default function Home() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-6xl items-center px-6 py-10">
      <section className="w-full rounded-2xl border border-black/15 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-blue-600">Página principal</h1>
        <p className="mt-3 text-black/75">
          Esta es la ruta principal del proyecto. Usa el buscador del header para navegar por las rutas del router.
        </p>
      </section>
    </main>
  );
}

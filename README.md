## Ejercicio: Crear y anidar componentes

### Objetivos (lectura rápida)

1. Crear un componente local (`MiComponente`) en `page.tsx`.
2. Renderizar ese componente dos veces dentro de `<main>`.
3. Crear un componente externo (`OtroComponente`) en `otro-componente.tsx` y exportarlo.
4. Importar `OtroComponente` en `page.tsx` y renderizarlo.
5. Mantener nombres de componentes en mayúscula inicial (PascalCase).

### Entregable mínimo

- `app/1.crear-y-anidar-componentes/page.tsx` con `MiComponente` + 2 renders + uso de `OtroComponente`.
- `app/1.crear-y-anidar-componentes/otro-componente.tsx` con `export function OtroComponente()`.

### Detalle (opcional)

#### Contexto

El punto de partida era una página con solo:

```tsx
export default function CrearYAnidarComponentesPage() {
  return (
    <main>
      Inicializado
    </main>
  );
}
```

#### Checklist rápido

- `MiComponente` existe dentro de `page.tsx`.
- `MiComponente` aparece al menos dos veces en el JSX.
- `otro-componente.tsx` existe y exporta `OtroComponente`.
- `page.tsx` importa y usa `OtroComponente`.

#### Verificación

```bash
npm run dev
```

Abrir `/1.crear-y-anidar-componentes` y comprobar que se ve:

- 2 bloques de `MiComponente`.
- 1 bloque de `OtroComponente`.


"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import type { AppRoute } from "../lib/get-app-routes";

type RouteNavigatorProps = {
  routes: AppRoute[];
};

export default function RouteNavigator({ routes }: RouteNavigatorProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const portalTarget = typeof document !== "undefined" ? document.body : null;

  const naturalRoutes = useMemo(() => {
    const toLabel = (path: string) => {
      const capitalizeSegment = (segment: string) => {
        const dotIndex = segment.indexOf(".");

        if (dotIndex >= 0) {
          const prefix = segment.slice(0, dotIndex + 1);
          const suffix = segment.slice(dotIndex + 1);

          if (!suffix) return prefix;
          return `${prefix}${suffix.charAt(0).toUpperCase()}${suffix.slice(1)}`;
        }

        return `${segment.charAt(0).toUpperCase()}${segment.slice(1)}`;
      };

      const segments = path
        .split("/")
        .filter(Boolean)
        .map((segment) =>
          segment
            .replace(/^\[(?:\.\.\.)?(.+)\]$/, "$1")
            .replace(/-/g, " ")
            .trim(),
        )
        .filter(Boolean)
        .map(capitalizeSegment);

      return segments.join(" / ");
    };

    return routes
      .filter((route) => route.path !== "/")
      .map((route) => ({
        ...route,
        label: toLabel(route.path),
      }));
  }, [routes]);

  const filteredRoutes = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) return naturalRoutes;

    return naturalRoutes.filter(
      (route) =>
        route.label.toLowerCase().includes(normalized) ||
        route.path.toLowerCase().includes(normalized),
    );
  }, [naturalRoutes, query]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg border border-black/20 bg-white px-3 py-2 text-sm font-medium transition hover:bg-black hover:text-white"
      >
        Buscar rutas
      </button>

      {portalTarget && open &&
        createPortal(
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/45 p-4 pt-20"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-black/15 bg-white p-4 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center gap-2">
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar ruta..."
                className="w-full rounded-lg border border-black/20 px-3 py-2 text-sm outline-none focus:border-black/40 focus:ring-2 focus:ring-black/15"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-black/20 px-3 py-2 text-sm transition hover:bg-black hover:text-white"
              >
                Cerrar
              </button>
            </div>

            <div className="flex max-h-[60vh] flex-col gap-2 overflow-y-auto pr-1">
              {filteredRoutes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-black/15 px-3 py-2 text-sm transition hover:bg-black hover:text-white"
                >
                  {route.label}
                </Link>
              ))}
            </div>

            {filteredRoutes.length === 0 && (
              <p className="mt-3 text-sm text-black/70">No se encontraron rutas.</p>
            )}
          </div>
        </div>,
        portalTarget,
      )}
    </>
  );
}

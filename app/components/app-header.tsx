import Link from "next/link";
import type { AppRoute } from "../lib/get-app-routes";
import RouteNavigator from "./route-navigator";

type AppHeaderProps = {
  routes: AppRoute[];
};

export default function AppHeader({ routes }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          Inicio
        </Link>
        <RouteNavigator routes={routes} />
      </div>
    </header>
  );
}

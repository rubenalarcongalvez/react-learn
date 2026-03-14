import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PROJECT_DESCRIPTION, PROJECT_TITLE } from "@/lib/site-meta";
import AppHeader from "./components/app-header";
import { getAppRoutes } from "./lib/get-app-routes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: PROJECT_TITLE,
  description: PROJECT_DESCRIPTION,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const routes = await getAppRoutes();

  return (
    <html lang="es" translate="no">
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased notranslate`}
      >
        <AppHeader routes={routes} />
        <div className="px-4 py-3">{children}</div>
      </body>
    </html>
  );
}

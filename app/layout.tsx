import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nom Mystère",
  description: "Un nouveau nom mystère chaque jour.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

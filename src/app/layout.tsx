import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "G3G Labs - Desenvolvimento de Softwares",
  description:
    "Soluções em desenvolvimento de software sob medida: sites e aplicações web de alta performance, seguras e escaláveis, com consultoria, UX e manutenção para impulsionar o seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

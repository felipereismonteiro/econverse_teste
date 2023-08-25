import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "./styles/global.styles.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Econverse - Sua Loja de Produtos online",
  description: "Teste técnico Frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <meta charSet="UTF-8" />
      <meta property="og:image" content="/images/og-image.jpg" />
      <meta property="og:url" content="https://www.econverse.com.br/" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://www.econverse.com.br/" />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

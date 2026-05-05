import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TopBar } from "@/components/TopBar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://marmoleriapietra.com"),
  title: "Marmolería Pietra | Mármol, granito y cuarzo en Paraguay",
  description: "Marmolería en Paraguay especializada en mármol, granito, cuarzo, mesadas para cocina, revestimientos de piedra y piedra traslúcida.",
  keywords: ["marmolería en Paraguay", "mármol en Paraguay", "granito en Paraguay", "cuarzo en Paraguay", "mesadas de granito", "mesadas de mármol", "mesadas para cocina", "revestimientos de piedra", "piedra traslúcida Paraguay"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <TopBar />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

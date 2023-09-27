import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "600", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Mundo Azul",
  description: " Guía para Padres de niños con autismo",
  keywords: "padres, autismo,tea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

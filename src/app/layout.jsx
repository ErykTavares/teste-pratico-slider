import "./globals.css";
import { Open_Sans } from "next/font/google";

export const metadata = {
  title: "Sistema Avaliação de Performance",
  description: "Teste prático para vaga de desenvolvedor.",
};

const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans?.className}>{children}</body>
    </html>
  );
}

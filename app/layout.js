import "../styles/globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { Mukta } from "next/font/google";

export const metadata = {
  title: "Summoner's Handbook",
  description: "All de info League of legend",
};
const mukta = Mukta({ weight: "600", subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/favicon.ico" sizes="any" />
        <title>The Summoner's Handbook</title>
      </head>
      <body className={mukta.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

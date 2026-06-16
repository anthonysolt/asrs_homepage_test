import "./globals.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "ASRS — After School Resource Solutions",
  description:
    "Providing enrichment and resource opportunities to students who attend schools in underfunded zip codes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-asrs-ink antialiased">
        <Header />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

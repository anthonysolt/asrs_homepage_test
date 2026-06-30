import "./globals.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";


export const metadata = {
  title: "ASRS — After School Resource Solutions",
  description:
    "Providing enrichment and resource opportunities to students who attend schools in underfunded zip codes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white text-asrs-ink antialiased">
        <Header />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

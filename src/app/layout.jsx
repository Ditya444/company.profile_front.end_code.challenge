import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./_compnents/navbar";
import Footer from "./_compnents/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Perusahaan Buatan",
  description: "Challenge Code 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation></Navigation>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

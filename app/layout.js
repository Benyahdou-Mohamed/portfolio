import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BENYAHDOU MED",
  description: "BENYAHDOU MED PORTFOLIO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      
      <body className={inter.className}>
       {/* <Cursor/>  */}
      
      <Navbar/>
      <SmoothScrolling>{children}</SmoothScrolling>
        </body>
    </html>
  );
}

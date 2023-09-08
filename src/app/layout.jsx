import "./globals.css";
import { Josefin_Sans } from "next/font/google";

import Navbar from "@/components/Navbar/Navbar";

const font = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "launch Your Website in 7 Days",
  description: "Website builder app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar";
import { Provider } from "react-redux";
import Store from "./My-Redux/Store";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (


    <html lang="en">
      <body className={inter.className}>
      <NavBar/>
      <Provider store={Store}>
      {children}
      <Footer/>
      </Provider>
      </body>
    </html>

  );
}

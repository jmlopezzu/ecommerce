import type { Metadata } from "next";
import "./globals.css";
// import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/layout/Layout";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Testlab company | Análisis o muestreo a tu medida",
  description: "El laboratorio mas grande del mundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {/* <Header /> */}
          {children}
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#000000",
                color: "#fff",
              },
            }}
          />
        </Layout>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s - Techfinna`,
    default: `TechFinna | Experts in Odoo Connectors, Analytics & React Solutions Integration`,
  },
  description:
    "TechFinna excels in Odoo Connectors, Analytics, and React on Odoo. We offer Looker Studio, BigQuery, Power BI, and Spreadsheet connectors. Transform with TechFinna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nodeEnv = process.env.NODE_ENV;

  return (
    <html lang="en">
      {nodeEnv !== "development" && (
        <>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-16V2YC4T0P"
          ></Script>
          <Script id="google-analytics">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-16V2YC4T0P');
          `}
          </Script>
        </>
      )}

      <body className={inter.className}>
        <div className="flex flex-col min-h-screen ">
          <NavBar />
          {children}
        </div>
        <Footer />
        {/* only to use when using flowbite interaction modules like click */}
        {/* <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script> */}
      </body>
    </html>
  );
}

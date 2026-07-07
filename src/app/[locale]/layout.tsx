import type { ReactNode } from "react";
import { Inter, Syne } from "next/font/google";
import { Toaster } from "@/src/components/ui/sonner"
 
import "@/src/app/globals.css";
import Footer from "@/src/components/Footer";
import { I18nProviderClient } from "@/src/locales/client";
import Header from "@/src/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${syne.variable} antialiased overflow-x-hidden`}
      >
        <I18nProviderClient locale={locale}>
          <Header/>
          {children}
          <Footer />
        </I18nProviderClient>
          <Toaster />
      </body>
    </html>
  );
}
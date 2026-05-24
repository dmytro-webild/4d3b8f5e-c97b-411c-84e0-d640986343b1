import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'Nuru Legende Döner Kebab | Premium Authentic Kebab',
  description: 'Experience handcrafted, authentic döner kebab at Nuru Legende. Fresh ingredients, traditional recipes, and premium quality. Order online today!',
  openGraph: {
    "title": "Nuru Legende Döner Kebab",
    "description": "Authentic döner kebab experience.",
    "type": "website",
    "siteName": "Nuru Legende"
  },
};

const mulish = Mulish({ variable: "--font-mulish", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}

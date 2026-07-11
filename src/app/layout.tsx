import type { Metadata } from "next";
import { Space_Grotesk, Inter, Bebas_Neue, Alex_Brush } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ui/ClientLayout";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Madhav | Front-End Developer & UI Engineer",
  description: "Senior-level portfolio of Madhav, a Front-End Developer crafting premium, immersive, AI-powered digital products with Space-Grade aesthetics and smooth interactive layouts.",
  keywords: ["Front-End Developer", "React", "Next.js", "TypeScript", "Tailwind CSS", "UI Engineer", "Developer Portfolio", "Stripe Style Portfolio"],
  authors: [{ name: "Madhav" }],
  creator: "Madhav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://madhav-portfolio.vercel.app",
    title: "Madhav | Front-End Developer & UI Engineer",
    description: "Senior-level portfolio of Madhav, a Front-End Developer crafting premium, immersive, AI-powered digital products.",
    siteName: "Madhav Portfolio",
    images: [
      {
        url: "https://madhav-portfolio.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Madhav Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madhav | Front-End Developer & UI Engineer",
    description: "Senior-level portfolio of Madhav, a Front-End Developer crafting premium, immersive, AI-powered digital products.",
    images: ["https://madhav-portfolio.vercel.app/og-image.jpg"],
    creator: "@madhav_dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${bebasNeue.variable} ${alexBrush.variable} bg-[#080808] text-white antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

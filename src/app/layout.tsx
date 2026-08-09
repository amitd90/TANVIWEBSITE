import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Tanvi Ortho | Orthodontic Clinic",
  description:
    "Dr. Tanvi Ortho is a modern orthodontic clinic offering braces, aligners, and smile makeovers in Pune. Contact us via WhatsApp or Instagram for expert orthodontic care.",
  keywords: [
    "Dr Tanvi Ortho",
    "orthodontic clinic",
    "braces",
    "clear aligners",
    "smile makeover",
    "dental clinic Pune",
    "orthodontist",
    "dental care",
    "invisalign",
    "teeth straightening",
  ],
  authors: [{ name: "Dr. Tanvi Ortho" }],
  metadataBase: new URL("https://drtanviorthoclinic.com"),
  openGraph: {
    title: "Dr. Tanvi Ortho | Orthodontic Clinic",
    description:
      "Modern orthodontic care for braces, clear aligners, and smile makeovers. Book your consultation in Pune today.",
    type: "website",
    locale: "en_US",
    images: ["/images/logo-transparent.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Tanvi Ortho | Orthodontic Clinic",
    description:
      "Modern orthodontic care for braces, clear aligners, and smile makeovers. Book your consultation in Pune today.",
    images: ["/images/logo-transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";

const description = "Robert McDermott builds local-first AI, civic technology, developer tools, and dependable full-stack software.";
const siteUrl = "https://xspiralx.github.io/RMPortfolio/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Robert McDermott — AI & Software Engineer", template: "%s · Robb Codes" },
  description,
  applicationName: "Robb Codes",
  authors: [{ name: "Robert McDermott", url: siteUrl }],
  creator: "Robert McDermott",
  keywords: ["Robert McDermott", "Robb Codes", "AI Engineer", "Software Engineer", "Full-Stack Developer", "Local AI", "Python", "TypeScript"],
  alternates: { canonical: siteUrl },
  icons: { icon: [{ url: `${siteUrl}icon.png`, type: "image/png", sizes: "64x64" }], apple: `${siteUrl}icon.png` },
  openGraph: { type: "website", url: siteUrl, siteName: "Robb Codes", title: "Robert McDermott — Building intelligent software with purpose.", description, images: [{ url: `${siteUrl}og.png`, width: 1200, height: 630, alt: "Robb Codes — Robert McDermott, AI engineering, software systems, and full-stack development" }] },
  twitter: { card: "summary_large_image", title: "Robert McDermott — AI & Software Engineer", description, images: [`${siteUrl}og.png`] },
  robots: { index: true, follow: true },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07080c", colorScheme: "dark" };

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Robert McDermott",
  url: siteUrl,
  sameAs: ["https://github.com/xSpiralx"],
  jobTitle: "Computer Science Student and Software Developer",
  knowsAbout: ["AI engineering", "Software engineering", "Python", "TypeScript", "FastAPI", "Next.js", "Local AI models"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Robb Codes — Robert McDermott",
    short_name: "Robb Codes",
    description: "AI and software engineering portfolio of Robert McDermott.",
    start_url: "/RMPortfolio/",
    display: "standalone",
    background_color: "#07080c",
    theme_color: "#07080c",
    icons: [{ src: "/RMPortfolio/icon.png", sizes: "64x64", type: "image/png" }],
  };
}

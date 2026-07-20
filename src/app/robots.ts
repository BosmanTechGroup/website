import { url } from "@/src/lib/url";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/login", "/register"],
      },
      {
        userAgent: "ia_archiver",
        allow: "/",
      },
      {
        userAgent: "archive.org_bot",
        allow: "/",
      },
    ],
    sitemap: url("/sitemap.xml"),
  };
}

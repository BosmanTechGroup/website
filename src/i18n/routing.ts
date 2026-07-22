import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["nl", "en"],
  defaultLocale: "nl",

  pathnames: {
    "/": "/",
    "/contact": "/contact",
    "/booking": "/booking",
    "/login": "/login",
    "/about-us": {
      nl: "/over-ons",
    },
    "/privacy": {
      nl: "/privacybeleid",
    },
    "/terms": {
      nl: "/algemene-voorwaarden",
    },
    "/forgot-password": {
      nl: "/wachtwoord-vergeten",
    },
    "/register": {
      nl: "/registreren",
    },
    "/services": {
      nl: "/diensten",
    },
    "/repairs": {
      nl: "/reparaties",
    },
  },
});

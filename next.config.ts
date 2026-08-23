import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      { source: "/:locale/menu", destination: "/:locale/kanata/menu", permanent: false },
      { source: "/:locale/hours", destination: "/:locale/kanata/hours", permanent: false },
      { source: "/:locale/takeout", destination: "/:locale/kanata/takeout", permanent: false },
      { source: "/:locale/events", destination: "/:locale/kanata/events", permanent: false },
      { source: "/:locale/contact", destination: "/:locale/kanata/contact", permanent: false },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);

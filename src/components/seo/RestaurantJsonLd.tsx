import { house, shop, westboro } from "@/content/house";

export function RestaurantJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        name: "Fratelli Kanata",
        url: house.liveSite,
        telephone: "+1-613-592-0225",
        servesCuisine: "Italian",
        address: {
          "@type": "PostalAddress",
          streetAddress: "499 Terry Fox Drive",
          addressLocality: "Kanata",
          addressRegion: "ON",
          postalCode: shop.postal,
          addressCountry: "CA",
        },
      },
      {
        "@type": "Restaurant",
        name: "Fratelli Westboro",
        url: westboro.liveSite,
        telephone: "+1-613-722-6772",
        email: westboro.email,
        servesCuisine: "Italian",
        address: {
          "@type": "PostalAddress",
          streetAddress: "275 Richmond Rd",
          addressLocality: "Ottawa",
          addressRegion: "ON",
          postalCode: westboro.postal,
          addressCountry: "CA",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

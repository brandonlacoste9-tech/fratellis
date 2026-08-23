export const house = {
  name: "Fratelli Kanata",
  shortName: "Fratelli",
  liveSite: "https://www.fratellikanata.ca/",
  tagline: "Vino × Pasta × Pizza",
  phone: "(613) 592-0225",
  phoneHref: "tel:+16135920225",
  eventsEmail: "events@fratelli-kanata.ca",
  eventsEmailHref: "mailto:events@fratelli-kanata.ca",
  instagram: "https://www.instagram.com/fratellikanata/",
  facebook: "https://www.facebook.com/fratellikanata/",
  robertoPizza: "http://www.robertopizza.ca/",
  logo: "/logo.png",
  hero: "/hero.jpg",
  room: "/family.jpg",
  menuBoard: "/menu.jpg",
  menuCopied: "2026-08-23",
} as const;

export const socials = [
  { id: "instagram", label: "Instagram", href: house.instagram },
  { id: "facebook", label: "Facebook", href: house.facebook },
] as const;

export const shop = {
  lines: {
    en: ["499 Terry Fox Drive", "Kanata, Ontario"],
    fr: ["499 Terry Fox Drive", "Kanata, Ontario"],
  },
  postal: "K2T 1H7",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=499+Terry+Fox+Drive+Kanata+ON+K2T+1H7",
} as const;

/** Dine-in hours as printed on fratellikanata.ca. */
export const dineHours = [
  {
    day: { en: "Monday – Thursday", fr: "Lundi – jeudi" },
    hours: { en: "11:30 am – 9:00 pm", fr: "11 h 30 – 21 h" },
  },
  {
    day: { en: "Friday & Saturday", fr: "Vendredi et samedi" },
    hours: { en: "11:30 am – 10:00 pm", fr: "11 h 30 – 22 h" },
  },
  {
    day: { en: "Sunday", fr: "Dimanche" },
    hours: { en: "5:00 pm – 9:00 pm", fr: "17 h – 21 h" },
  },
] as const;

/**
 * Takeout window as printed on /catering — not the same as dine-in.
 * Do not merge these with dineHours.
 */
export const takeoutHours = [
  {
    day: { en: "Sunday – Thursday", fr: "Dimanche – jeudi" },
    hours: { en: "4:00 pm – 8:00 pm", fr: "16 h – 20 h" },
  },
  {
    day: { en: "Friday & Saturday", fr: "Vendredi et samedi" },
    hours: { en: "12:00 pm – 9:00 pm", fr: "12 h – 21 h" },
  },
] as const;

export const gallery = [
  { src: "/gallery/1.jpg", alt: { en: "Wine bottles in a crate in the dining room.", fr: "Bouteilles de vin dans une caisse, dans la salle." } },
  { src: "/gallery/4.jpg", alt: { en: "Wood-fired pizza with arugula and cured ham.", fr: "Pizza au feu de bois, roquette et jambon." } },
  { src: "/gallery/2.jpg", alt: { en: "A photograph they publish of the room.", fr: "Une photo de la salle qu’ils publient." } },
  { src: "/gallery/5.jpg", alt: { en: "A photograph they publish of a plate.", fr: "Une photo d’assiette qu’ils publient." } },
  { src: "/gallery/6.jpg", alt: { en: "A photograph they publish of pizza.", fr: "Une photo de pizza qu’ils publient." } },
  { src: "/gallery/7.jpg", alt: { en: "A photograph they publish of a plate.", fr: "Une photo d’assiette qu’ils publient." } },
  { src: "/gallery/8.jpg", alt: { en: "A photograph they publish of the room.", fr: "Une photo de la salle qu’ils publient." } },
  { src: "/gallery/10.jpg", alt: { en: "A photograph they publish of a plate.", fr: "Une photo d’assiette qu’ils publient." } },
] as const;

export const eventPhotos = [
  { src: "/events/loft.jpg", alt: { en: "A long table in the upstairs loft.", fr: "Une longue table dans le loft à l’étage." } },
  { src: "/events/table.jpg", alt: { en: "A set table for a group.", fr: "Une table dressée pour un groupe." } },
  { src: "/events/room.jpg", alt: { en: "The dining room during an event.", fr: "La salle pendant un événement." } },
  { src: "/events/party.jpg", alt: { en: "A gathering in the room.", fr: "Un rassemblement dans la salle." } },
] as const;

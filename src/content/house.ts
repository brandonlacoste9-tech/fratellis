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
  heroFilm: "/film/kanata-hero.mp4",
  pastaFilm: "/film/kanata-pasta.mp4",
  kitchenFilm: "/film/kanata-kitchen.mp4",
  kitchenPoster: "/gallery/6.jpg",
  pizzaFilm: "/film/kanata-pizza.mp4",
  pizzaPoster: "/gallery/4.jpg",
  diningFilm: "/film/kanata-dining.mp4",
  diningPoster: "/gallery/9.jpg",
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
  { src: "/gallery/2.jpg", alt: { en: "Pasta with ham and mushrooms they photograph.", fr: "Pâtes au jambon et aux champignons, photo qu’ils publient." } },
  { src: "/gallery/5.jpg", alt: { en: "Chocolate dessert with berry coulis.", fr: "Dessert au chocolat, coulis de fruits." } },
  { src: "/gallery/6.jpg", alt: { en: "A set table looking toward the kitchen and PIZZA wall.", fr: "Une table dressée, vue vers la cuisine et le mur PIZZA." } },
  { src: "/gallery/7.jpg", alt: { en: "Seafood stew with grilled bread.", fr: "Ragoût de fruits de mer, pain grillé." } },
  { src: "/gallery/8.jpg", alt: { en: "Salmon with arugula salad.", fr: "Saumon et salade de roquette." } },
  { src: "/gallery/10.jpg", alt: { en: "A plate from the kitchen.", fr: "Une assiette de la cuisine." } },
] as const;

export const westboro = {
  name: { en: "Westboro", fr: "Westboro" },
  tag: { en: "275 Richmond Road · Ottawa", fr: "275, chemin Richmond · Ottawa" },
  liveSite: "https://fratelli.ca/",
  phone: "(613) 722-6772",
  phoneHref: "tel:+16137226772",
  email: "juliana@fratelli.ca",
  emailHref: "mailto:juliana@fratelli.ca",
  instagram: "https://www.instagram.com/fratelliwestboro/",
  facebook: "https://www.facebook.com/442509779107877",
  openTable:
    "https://www.opentable.ca/r/fratelli-westboro-reservations-ottawa?restref=1073479&lang=en-CA&ot_source=Restaurant%20website",
  partiesUrl: "https://fratelli.ca/ottawa-westboro-fratelli-party",
  drinksUrl: "https://fratelli.ca/ottawa-westboro-fratelli-drink-menu",
  jobsUrl: "https://tmt.spotapps.co/job-listings?spot_id=248057",
  hero: "/westboro/hero.jpg",
  heroFilm: "/film/westboro-hero.mp4",
  plate: "/westboro/room.jpg",
  plateFilm: "/film/westboro-plate.mp4",
  room: "/westboro/poster.jpg",
  postal: "K1Z 6X2",
  lines: {
    en: ["275 Richmond Rd", "Ottawa, ON"],
    fr: ["275, chemin Richmond", "Ottawa, Ont."],
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=275+Richmond+Rd+Ottawa+ON+K1Z+6X2",
  hours: [
    {
      day: { en: "Monday – Wednesday", fr: "Lundi – mercredi" },
      hours: { en: "11:30 am – 9:00 pm", fr: "11 h 30 – 21 h" },
    },
    {
      day: { en: "Thursday – Saturday", fr: "Jeudi – samedi" },
      hours: { en: "11:30 am – 10:00 pm", fr: "11 h 30 – 22 h" },
    },
    {
      day: { en: "Sunday", fr: "Dimanche" },
      hours: { en: "5:00 pm – 9:00 pm", fr: "17 h – 21 h" },
    },
  ],
  hoursNote: {
    en: "Thursday is grouped with Friday and Saturday until 10 pm.",
    fr: "Le jeudi est groupé avec vendredi et samedi jusqu’à 22 h.",
  },
  wineMonday: {
    en: "Monday half-price wine, 5:00 pm – 9:00 pm.",
    fr: "Lundi : vins à moitié prix, 17 h – 21 h.",
  },
} as const;

export const eventPhotos = [
  { src: "/events/loft.jpg", alt: { en: "A long table in the upstairs loft.", fr: "Une longue table dans le loft à l’étage." } },
  { src: "/events/table.jpg", alt: { en: "A set table for a group.", fr: "Une table dressée pour un groupe." } },
  { src: "/events/room.jpg", alt: { en: "The dining room during an event.", fr: "La salle pendant un événement." } },
  { src: "/events/party.jpg", alt: { en: "A gathering in the room.", fr: "Un rassemblement dans la salle." } },
] as const;

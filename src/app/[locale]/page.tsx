import { getTranslations, setRequestLocale } from "next-intl/server";
import { HeroFilm } from "@/components/layout/HeroFilm";
import { house, shop, westboro } from "@/content/house";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("family");
  const lang = locale as Locale;

  const locations = [
    {
      id: "kanata",
      href: "/kanata",
      photo: house.hero,
      film: house.heroFilm,
      name: { en: "Kanata", fr: "Kanata" },
      tag: shop.lines[lang][0],
      phone: house.phone,
      phoneHref: house.phoneHref,
      reserve: t("kanataReserve"),
    },
    {
      id: "westboro",
      href: "/westboro",
      photo: westboro.hero,
      film: westboro.heroFilm,
      name: westboro.name,
      tag: westboro.lines[lang][0],
      phone: westboro.phone,
      phoneHref: westboro.phoneHref,
      reserve: t("westboroReserve"),
    },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-night text-cream">
        <img
          src="/film/family-night.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="relative mx-auto max-w-[1180px] px-6 py-16 md:py-24">
          <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">
            {t("kicker")}
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-5xl leading-[0.95] md:text-7xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/80">{t("lead")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-6 py-16">
        <h2 className="font-heading text-4xl md:text-5xl">{t("locationsTitle")}</h2>
        <p className="mt-3 max-w-2xl text-muted">{t("locationsLead")}</p>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {locations.map((location) => (
            <li key={location.id} className="flex flex-col overflow-hidden border border-line bg-cream">
              <Link href={location.href} className="block">
                <HeroFilm
                  src={location.film}
                  poster={location.photo}
                  alt=""
                  className="relative min-h-[16rem] overflow-hidden"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-muted uppercase">
                  {location.tag}
                </p>
                <h3 className="mt-1 font-heading text-3xl">{location.name[lang]}</h3>
                <p className="mt-3 text-sm text-muted">{location.reserve}</p>
                <a href={location.phoneHref} className="mt-2 font-semibold text-wine">
                  {location.phone}
                </a>
                <Link
                  href={location.href}
                  className="mt-6 text-sm font-semibold tracking-[0.14em] text-wine uppercase"
                >
                  {location.name[lang]} →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

import { getTranslations, setRequestLocale } from "next-intl/server";
import { HeroFilm } from "@/components/layout/HeroFilm";
import { WallpaperFrame } from "@/components/layout/WallpaperFrame";
import { dineHours, gallery, house } from "@/content/house";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const lang = locale as Locale;

  return (
    <>
      <section className="relative isolate bg-night text-cream">
        <div className="mx-auto grid max-w-[1180px] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-16 md:px-10 md:py-24">
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">
              {t("kicker")}
            </p>
            <h1 className="mt-3 font-heading text-5xl leading-[0.95] md:text-7xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-md text-lg text-cream/80">{t("lead")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={house.phoneHref} className="btn btn-wine">
                {t("ctaCall")}
              </a>
              <Link href="/kanata/menu" className="btn btn-ghost border-cream/40 text-cream">
                {t("ctaMenu")}
              </Link>
            </div>
          </div>
          <HeroFilm src={house.heroFilm} poster={house.hero} alt={t("heroAlt")} />
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-[1180px] px-6 py-14">
          <h2 className="font-heading text-4xl md:text-5xl">{t("hoursTitle")}</h2>
          <p className="mt-3 max-w-2xl text-muted">{t("hoursLead")}</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-3">
            {dineHours.map((row) => (
              <li
                key={row.day.en}
                className="border border-line bg-paper px-4 py-3 text-sm"
              >
                <span className="block font-semibold tracking-[0.08em] uppercase">
                  {row.day[lang]}
                </span>
                <span className="text-muted">{row.hours[lang]}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 max-w-2xl">
            <h3 className="font-heading text-3xl">{t("reserveTitle")}</h3>
            <p className="mt-3 text-muted">{t("reserveLead")}</p>
          </div>
        </div>
      </section>

      <WallpaperFrame innerClassName="mx-auto max-w-[1180px] px-6 py-16 md:px-10">
        <h2 className="font-heading text-4xl md:text-5xl">{t("menuTitle")}</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">{t("menuLead")}</p>
        <img
          src={house.menuBoard}
          alt=""
          className="mt-8 w-full max-w-xl border border-[var(--lettering)] bg-white"
        />
        <Link href="/kanata/menu" className="mt-6 inline-block text-sm font-semibold tracking-[0.14em] text-wine uppercase">
          {t("menuCta")} →
        </Link>
      </WallpaperFrame>

      <section className="border-b border-line bg-night py-16 text-cream">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-6 lg:grid-cols-2">
          <HeroFilm
            src={house.kitchenFilm}
            poster={house.kitchenPoster}
            alt={t("kitchenAlt")}
            className="relative min-h-[20rem] overflow-hidden md:min-h-[24rem]"
          />
          <div>
            <h2 className="font-heading text-4xl md:text-5xl">{t("kitchenTitle")}</h2>
            <p className="mt-4 text-lg text-cream/75">{t("kitchenLead")}</p>
          </div>
        </div>
      </section>

      <section className="bg-night py-16 text-cream">
        <div className="mx-auto max-w-[1180px] px-6">
          <h2 className="font-heading text-4xl md:text-5xl">{t("photosTitle")}</h2>
          <p className="mt-3 max-w-2xl text-cream/70">{t("photosLead")}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <li className="overflow-hidden sm:col-span-2">
              <HeroFilm
                src={house.pastaFilm}
                poster="/gallery/2.jpg"
                alt={gallery[2].alt[lang]}
                className="relative aspect-[4/3] overflow-hidden"
              />
            </li>
            <li className="overflow-hidden sm:col-span-2">
              <HeroFilm
                src={house.pizzaFilm}
                poster={house.pizzaPoster}
                alt={t("pizzaAlt")}
                className="relative aspect-[4/3] overflow-hidden"
              />
            </li>
            {gallery
              .filter(
                (shot) =>
                  shot.src !== "/gallery/2.jpg" &&
                  shot.src !== "/gallery/4.jpg" &&
                  shot.src !== "/gallery/6.jpg",
              )
              .slice(0, 4)
              .map((shot) => (
                <li key={shot.src} className="overflow-hidden">
                  <img
                    src={shot.src}
                    alt={shot.alt[lang]}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </li>
              ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] items-center gap-10 px-6 py-16 lg:grid-cols-2">
        <HeroFilm
          src={house.diningFilm}
          poster={house.diningPoster}
          alt={t("roomAlt")}
          className="relative min-h-[20rem] overflow-hidden border border-line md:min-h-[24rem]"
        />
        <div>
          <h2 className="font-heading text-4xl md:text-5xl">{t("eventsTitle")}</h2>
          <p className="mt-4 text-lg text-muted">{t("eventsLead")}</p>
          <Link href="/kanata/events" className="btn btn-wine mt-8">
            {t("eventsCta")}
          </Link>
        </div>
      </section>
    </>
  );
}

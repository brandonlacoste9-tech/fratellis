import { getTranslations, setRequestLocale } from "next-intl/server";
import { HeroFilm } from "@/components/layout/HeroFilm";
import { westboro } from "@/content/house";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export default async function WestboroPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("westboro");
  const lang = locale as Locale;

  return (
    <>
      <section className="relative isolate bg-night text-cream">
        <div className="mx-auto grid max-w-[1180px] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-16 md:px-10 md:py-24">
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">
              {westboro.tag[lang]}
            </p>
            <h1 className="mt-3 font-heading text-5xl leading-[0.95] md:text-7xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-md text-lg text-cream/80">{t("lead")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={westboro.openTable}
                className="btn btn-wine"
                target="_blank"
                rel="noreferrer"
              >
                {t("reserve")}
              </a>
              <a href={westboro.phoneHref} className="btn btn-ghost border-cream/40 text-cream">
                {westboro.phone}
              </a>
              <Link href="/westboro/menu" className="btn btn-ghost border-cream/40 text-cream">
                {t("menu")}
              </Link>
            </div>
          </div>
          <HeroFilm src={westboro.heroFilm} poster={westboro.hero} alt={t("heroAlt")} />
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-[1180px] px-6 py-14">
          <h2 className="font-heading text-4xl">{t("hoursTitle")}</h2>
          <p className="mt-3 max-w-2xl text-muted">{westboro.hoursNote[lang]}</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-3">
            {westboro.hours.map((row) => (
              <li key={row.day.en} className="border border-line bg-paper px-4 py-3 text-sm">
                <span className="block font-semibold tracking-[0.08em] uppercase">
                  {row.day[lang]}
                </span>
                <span className="text-muted">{row.hours[lang]}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">{westboro.wineMonday[lang]}</p>
          <p className="mt-4 max-w-2xl text-muted">{t("notKanata")}</p>
        </div>
      </section>

      <section className="border-b border-line bg-night py-16 text-cream">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-6 lg:grid-cols-2">
          <HeroFilm
            src={westboro.plateFilm}
            poster={westboro.plate}
            alt={t("plateAlt")}
            className="relative min-h-[20rem] overflow-hidden md:min-h-[24rem]"
          />
          <div>
            <h2 className="font-heading text-4xl">{t("plateTitle")}</h2>
            <p className="mt-4 text-lg text-cream/75">{t("plateLead")}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[760px] px-6 py-16">
        <h2 className="font-heading text-4xl">{t("contactTitle")}</h2>
        {westboro.lines[lang].map((line) => (
          <p key={line} className="mt-2">
            {line}
          </p>
        ))}
        <p>{westboro.postal}</p>
        <a href={westboro.phoneHref} className="mt-4 block text-2xl font-semibold text-wine">
          {westboro.phone}
        </a>
        <a href={westboro.emailHref} className="mt-1 block text-gold">
          {westboro.email}
        </a>
        <p className="mt-6 text-sm text-muted">{t("parties")}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/westboro/menu" className="btn btn-wine">
            {t("menu")}
          </Link>
          <a href={westboro.partiesUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
            {t("partiesCta")}
          </a>
        </div>
      </section>
    </>
  );
}

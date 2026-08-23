import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { house, shop } from "@/content/house";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title") };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const lang = locale as Locale;

  return (
    <div className="mx-auto max-w-[760px] px-6 py-16 md:py-20">
      <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-muted uppercase">
        {t("kicker")}
      </p>
      <h1 className="mt-2 font-heading text-6xl md:text-7xl">{t("title")}</h1>
      <p className="mt-6 text-lg text-muted">{t("lead")}</p>
      <article className="mt-10 border border-line bg-cream p-6">
        <h2 className="font-heading text-3xl">{house.name}</h2>
        <p className="mt-3">
          {shop.lines[lang].map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <span className="block">{shop.postal}</span>
        </p>
        <a href={house.phoneHref} className="mt-4 block text-2xl font-semibold text-wine">
          {house.phone}
        </a>
        <p className="mt-6 text-sm font-semibold tracking-[0.12em] uppercase">
          {t("events")}
        </p>
        <a href={house.eventsEmailHref} className="mt-1 block text-gold">
          {house.eventsEmail}
        </a>
        <div className="mt-6">
          <SocialLinks />
        </div>
        <a
          href={shop.mapUrl}
          className="mt-4 inline-block text-sm font-semibold tracking-[0.14em] uppercase"
          target="_blank"
          rel="noreferrer"
        >
          {t("map")}
        </a>
      </article>
      <p className="mt-8 text-sm text-muted">{t("noForm")}</p>
      <a href={house.phoneHref} className="btn btn-wine mt-8">
        {house.phone}
      </a>
    </div>
  );
}

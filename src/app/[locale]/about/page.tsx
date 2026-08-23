import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { house } from "@/content/house";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title") };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <div className="mx-auto max-w-[760px] px-6 py-16 md:py-20">
      <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-muted uppercase">
        {t("kicker")}
      </p>
      <h1 className="mt-2 font-heading text-6xl md:text-7xl">{t("title")}</h1>
      <p className="mt-6 font-heading text-2xl">{t("noun")}</p>
      <p className="mt-6 text-lg leading-relaxed text-muted">{t("glebe")}</p>
      <p className="mt-4 text-lg leading-relaxed text-muted">{t("kanata")}</p>
      <img
        src={house.room}
        alt=""
        className="mt-10 w-full border border-line object-cover"
      />
      <p className="mt-8 text-muted">{t("roberto")}</p>
      <a
        href={house.robertoPizza}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-sm font-semibold tracking-[0.14em] text-wine uppercase"
      >
        {t("robertoCta")} →
      </a>
      <p className="mt-8 text-sm text-muted">{t("twoLocations")}</p>
    </div>
  );
}

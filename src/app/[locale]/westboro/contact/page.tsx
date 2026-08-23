import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { westboro } from "@/content/house";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "westboro" });
  return { title: t("contactTitle") };
}

export default async function WestboroContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("westboro");
  const lang = locale as Locale;

  return (
    <div className="mx-auto max-w-[760px] px-6 py-16 md:py-20">
      <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-muted uppercase">
        Westboro
      </p>
      <h1 className="mt-2 font-heading text-6xl">{t("contactTitle")}</h1>
      <p className="mt-6 text-lg text-muted">{t("contactLead")}</p>
      <article className="mt-10 border border-line bg-cream p-6">
        <h2 className="font-heading text-3xl">Fratelli Westboro</h2>
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
        <a
          href={westboro.mapUrl}
          className="mt-4 inline-block text-sm font-semibold tracking-[0.14em] uppercase"
          target="_blank"
          rel="noreferrer"
        >
          {t("map")}
        </a>
      </article>
      <p className="mt-8 text-sm text-muted">{t("noForm")}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={westboro.openTable} className="btn btn-wine" target="_blank" rel="noreferrer">
          {t("reserve")}
        </a>
        <a href={westboro.partiesUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
          {t("partiesCta")}
        </a>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { house, takeoutHours } from "@/content/house";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "takeout" });
  return { title: t("title") };
}

export default async function TakeoutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("takeout");
  const lang = locale as Locale;

  return (
    <div className="mx-auto max-w-[760px] px-6 py-16 md:py-20">
      <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-muted uppercase">
        {t("kicker")}
      </p>
      <h1 className="mt-2 font-heading text-6xl md:text-7xl">{t("title")}</h1>
      <p className="mt-6 text-lg text-muted">{t("lead")}</p>

      <h2 className="mt-10 font-heading text-3xl">{t("hoursTitle")}</h2>
      <p className="mt-2 text-sm text-muted">{t("hoursLead")}</p>
      <ul className="mt-4 divide-y divide-line border-y border-line">
        {takeoutHours.map((row) => (
          <li key={row.day.en} className="flex justify-between gap-4 py-3">
            <span className="font-medium">{row.day[lang]}</span>
            <span>{row.hours[lang]}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted">{t("openHours")}</p>
      <p className="mt-6">{t("beer")}</p>
      <p className="mt-3">{t("pickup")}</p>
      <p className="mt-3">{t("pay")}</p>
      <a href={house.phoneHref} className="btn btn-wine mt-10">
        {house.phone}
      </a>
    </div>
  );
}

import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { westboro } from "@/content/house";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "westboro" });
  return { title: t("hoursTitle") };
}

export default async function WestboroHoursPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("westboro");
  const lang = locale as Locale;

  return (
    <div className="mx-auto max-w-[760px] px-6 py-16 md:py-20">
      <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-muted uppercase">
        Westboro
      </p>
      <h1 className="mt-2 font-heading text-6xl">{t("hoursTitle")}</h1>
      <p className="mt-6 text-lg text-muted">{westboro.hoursNote[lang]}</p>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {westboro.hours.map((row) => (
          <li key={row.day.en} className="flex justify-between gap-4 py-3">
            <span className="font-medium">{row.day[lang]}</span>
            <span>{row.hours[lang]}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6">{westboro.wineMonday[lang]}</p>
      <p className="mt-4 text-sm text-muted">{t("notKanata")}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href={westboro.openTable} className="btn btn-wine" target="_blank" rel="noreferrer">
          {t("reserve")}
        </a>
        <Link href="/westboro/specials" className="btn btn-ghost">
          {t("specials")}
        </Link>
      </div>
    </div>
  );
}

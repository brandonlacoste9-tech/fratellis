import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { dineHours, house } from "@/content/house";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hours" });
  return { title: t("title") };
}

export default async function HoursPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("hours");
  const lang = locale as Locale;

  return (
    <div className="mx-auto max-w-[760px] px-6 py-16 md:py-20">
      <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-muted uppercase">
        {t("kicker")}
      </p>
      <h1 className="mt-2 font-heading text-6xl md:text-7xl">{t("title")}</h1>
      <p className="mt-6 text-lg text-muted">{t("lead")}</p>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {dineHours.map((row) => (
          <li key={row.day.en} className="flex justify-between gap-4 py-3">
            <span className="font-medium">{row.day[lang]}</span>
            <span>{row.hours[lang]}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted">{t("change")}</p>
      <p className="mt-4">{t("book")}</p>
      <p className="mt-2">{t("parties")}</p>
      <p className="mt-6 text-sm text-muted">{t("westboro")}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href={house.phoneHref} className="btn btn-wine">
          {house.phone}
        </a>
        <Link href="/kanata/takeout" className="btn btn-ghost">
          {t("takeoutCta")}
        </Link>
      </div>
    </div>
  );
}

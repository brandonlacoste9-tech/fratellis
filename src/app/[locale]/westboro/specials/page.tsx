import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { westboro } from "@/content/house";
import { westboroSpecials } from "@/content/westboro-menu";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "westboro" });
  return { title: t("specials") };
}

export default async function WestboroSpecialsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("westboro");

  return (
    <div className="mx-auto max-w-[760px] px-6 py-16 md:py-20">
      <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-muted uppercase">
        Westboro
      </p>
      <h1 className="mt-2 font-heading text-6xl">{t("specials")}</h1>
      <p className="mt-6 text-lg text-muted">{t("specialsLead")}</p>
      <p className="mt-4">{westboro.wineMonday.en}</p>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {westboroSpecials[0]?.items.map((item) => (
          <li key={item.name} className="py-4">
            <div className="flex justify-between gap-4">
              <p className="font-medium">{item.name}</p>
              <span className="font-semibold text-wine">{item.price}</span>
            </div>
            {item.note ? <p className="mt-1 text-sm text-muted">{item.note}</p> : null}
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-muted">{t("eventsNote")}</p>
    </div>
  );
}

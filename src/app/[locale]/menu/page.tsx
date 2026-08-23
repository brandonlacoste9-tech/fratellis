import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { WallpaperFrame } from "@/components/layout/WallpaperFrame";
import { house } from "@/content/house";
import { menuSections } from "@/content/menu";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "menu" });
  return { title: t("title") };
}

export default async function MenuPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("menu");

  return (
    <WallpaperFrame innerClassName="mx-auto max-w-[900px] px-6 py-16 md:px-10 md:py-20">
      <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-muted uppercase">
        {t("kicker")}
      </p>
      <h1 className="mt-2 font-heading text-6xl md:text-7xl">{t("title")}</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">{t("lead")}</p>
      <p className="mt-2 text-sm text-muted">{t("asOf")}</p>

      <figure className="mt-10 border border-[var(--lettering)] bg-white p-3">
        <img src={house.menuBoard} alt={t("boardAlt")} className="w-full" />
        <figcaption className="mt-3 text-xs text-muted">{t("boardCaption")}</figcaption>
      </figure>

      <div className="mt-14 space-y-12">
        {menuSections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="font-heading text-4xl">{section.title}</h2>
            {section.intro ? (
              <p className="mt-2 italic text-muted">{section.intro}</p>
            ) : null}
            {section.extras?.map((extra) => (
              <p key={extra} className="mt-1 text-sm text-muted">
                {extra}
              </p>
            ))}
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {section.items.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-4 py-3">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    {item.note ? (
                      <p className="mt-1 text-sm text-muted">{item.note}</p>
                    ) : null}
                  </div>
                  <span className="shrink-0 font-semibold text-wine">{item.price}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="mt-10 text-sm text-muted">{t("allergens")}</p>
    </WallpaperFrame>
  );
}

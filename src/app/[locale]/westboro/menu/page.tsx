import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { WallpaperFrame } from "@/components/layout/WallpaperFrame";
import {
  westboroDessert,
  westboroDinner,
  westboroLunch,
  westboroSpecials,
} from "@/content/westboro-menu";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "westboroMenu" });
  return { title: t("title") };
}

function Board({
  title,
  sections,
}: {
  title: string;
  sections: typeof westboroDinner;
}) {
  return (
    <div className="mt-14 space-y-12">
      <h2 className="font-heading text-4xl">{title}</h2>
      {sections.map((section) => (
        <section key={`${title}-${section.id}`} id={`${title}-${section.id}`}>
          <h3 className="font-heading text-3xl">{section.title}</h3>
          {section.extras?.map((extra) => (
            <p key={extra} className="mt-1 text-sm text-muted">
              {extra}
            </p>
          ))}
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {section.items.map((item) => (
              <li
                key={`${section.id}-${item.name}-${item.price}`}
                className="flex items-baseline justify-between gap-4 py-3"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  {item.note ? <p className="mt-1 text-sm text-muted">{item.note}</p> : null}
                </div>
                <span className="shrink-0 font-semibold text-wine">{item.price}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default async function WestboroMenuPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("westboroMenu");

  return (
    <WallpaperFrame innerClassName="mx-auto max-w-[900px] px-6 py-16 md:px-10 md:py-20">
      <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-muted uppercase">
        {t("kicker")}
      </p>
      <h1 className="mt-2 font-heading text-6xl md:text-7xl">{t("title")}</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">{t("lead")}</p>
      <p className="mt-2 text-sm text-muted">{t("asOf")}</p>
      <Board title={t("dinner")} sections={westboroDinner} />
      <Board title={t("lunch")} sections={westboroLunch} />
      <Board title={t("dessert")} sections={westboroDessert} />
      <Board title={t("specials")} sections={westboroSpecials} />
    </WallpaperFrame>
  );
}

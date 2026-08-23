import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { eventPhotos, house } from "@/content/house";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "events" });
  return { title: t("title") };
}

export default async function EventsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("events");
  const lang = locale as Locale;

  return (
    <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-20">
      <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-muted uppercase">
        {t("kicker")}
      </p>
      <h1 className="mt-2 max-w-3xl font-heading text-6xl md:text-7xl">{t("title")}</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">{t("lead")}</p>
      <ul className="mt-6 max-w-2xl space-y-3 text-muted">
        <li>{t("seats")}</li>
        <li>{t("menus")}</li>
        <li>{t("gratuity")}</li>
        <li>{t("cake")}</li>
      </ul>
      <a href={house.eventsEmailHref} className="btn btn-wine mt-8">
        {house.eventsEmail}
      </a>
      <p className="mt-4 text-sm text-muted">{t("email")}</p>
      <ul className="mt-12 grid gap-3 sm:grid-cols-2">
        {eventPhotos.map((shot) => (
          <li key={shot.src}>
            <img src={shot.src} alt={shot.alt[lang]} className="aspect-[4/3] w-full object-cover" />
          </li>
        ))}
      </ul>
    </div>
  );
}

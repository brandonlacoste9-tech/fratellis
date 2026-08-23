import { getLocale, getTranslations } from "next-intl/server";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { house, shop } from "@/content/house";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;

  return (
    <footer className="mt-auto border-t border-gold/30 bg-night pb-24 text-cream">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <img
            src={house.logo}
            alt=""
            width={200}
            height={70}
            className="h-10 w-auto object-contain"
          />
          <p className="mt-4 max-w-sm text-sm text-cream/70">{t("line")}</p>
        </div>
        <address className="not-italic text-sm leading-relaxed text-cream/85">
          {shop.lines[locale].map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <span className="block">{shop.postal}</span>
          <a href={house.phoneHref} className="mt-2 block font-semibold text-gold">
            {house.phone}
          </a>
          <a href={house.eventsEmailHref} className="mt-1 block text-gold">
            {house.eventsEmail}
          </a>
        </address>
        <div className="flex flex-col gap-2 text-[0.72rem] font-semibold tracking-[0.16em] uppercase">
          <Link href="/menu">{nav("menu")}</Link>
          <Link href="/hours">{nav("hours")}</Link>
          <Link href="/takeout">{nav("takeout")}</Link>
          <Link href="/events">{nav("events")}</Link>
          <Link href="/contact">{nav("contact")}</Link>
          <div className="mt-4">
            <SocialLinks tone="cream" />
          </div>
        </div>
      </div>
      <p className="mx-auto max-w-[1180px] px-6 pb-6 text-xs text-cream/45">
        {t("copy")}
      </p>
    </footer>
  );
}

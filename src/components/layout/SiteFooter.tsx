import { getTranslations } from "next-intl/server";
import { house, westboro } from "@/content/house";
import { Link } from "@/i18n/navigation";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");

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
          <p className="font-semibold tracking-[0.12em] uppercase">Kanata</p>
          <span className="block">499 Terry Fox Drive</span>
          <a href={house.phoneHref} className="block text-gold">
            {house.phone}
          </a>
          <p className="mt-4 font-semibold tracking-[0.12em] uppercase">Westboro</p>
          <span className="block">275 Richmond Rd</span>
          <a href={westboro.phoneHref} className="block text-gold">
            {westboro.phone}
          </a>
        </address>
        <div className="flex flex-col gap-2 text-[0.72rem] font-semibold tracking-[0.16em] uppercase">
          <Link href="/kanata">{nav("kanata")}</Link>
          <Link href="/westboro">{nav("westboro")}</Link>
          <Link href="/about">{nav("about")}</Link>
        </div>
      </div>
      <p className="mx-auto max-w-[1180px] px-6 pb-6 text-xs text-cream/45">
        {t("copy")}
      </p>
    </footer>
  );
}

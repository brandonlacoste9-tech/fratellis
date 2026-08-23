"use client";

import { useTranslations } from "next-intl";
import { house, westboro } from "@/content/house";
import { Link, usePathname } from "@/i18n/navigation";

export function CallBar() {
  const t = useTranslations("callbar");
  const pathname = usePathname();
  const west = pathname.startsWith("/westboro");
  const kanata = pathname.startsWith("/kanata");

  if (west) {
    return (
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/40 bg-night text-cream">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-3 px-3 py-2 md:px-6 md:py-3">
          <p className="hidden min-w-0 truncate text-sm sm:block">{t("westboro")}</p>
          <p className="min-w-0 truncate text-xs sm:hidden">{t("westboroShort")}</p>
          <a
            href={westboro.openTable}
            className="btn btn-wine shrink-0 py-2 text-sm"
            target="_blank"
            rel="noreferrer"
          >
            OpenTable
          </a>
        </div>
      </div>
    );
  }

  if (!kanata) {
    return (
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/40 bg-night text-cream">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-3 px-3 py-2 md:px-6 md:py-3">
          <p className="hidden min-w-0 truncate text-sm sm:block">{t("family")}</p>
          <p className="min-w-0 truncate text-xs sm:hidden">{t("familyShort")}</p>
          <Link href="/westboro" className="btn btn-wine shrink-0 py-2 text-sm">
            Westboro
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/40 bg-night text-cream">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-3 px-3 py-2 md:px-6 md:py-3">
        <p className="hidden min-w-0 truncate text-sm sm:block">{t("line")}</p>
        <p className="min-w-0 truncate text-xs sm:hidden">{t("short")}</p>
        <a href={house.phoneHref} className="btn btn-wine shrink-0 py-2 text-sm">
          {house.phone}
        </a>
      </div>
    </div>
  );
}

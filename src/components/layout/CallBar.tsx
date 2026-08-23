import { getTranslations } from "next-intl/server";
import { house } from "@/content/house";

export async function CallBar() {
  const t = await getTranslations("callbar");

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

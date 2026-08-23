import { getTranslations } from "next-intl/server";
import { house } from "@/content/house";

export async function AlertBar() {
  const t = await getTranslations("nav");

  return (
    <div className="bg-wine text-cream">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-2 px-4 py-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase md:px-6">
        <span>{t("strip")}</span>
        <a href={house.phoneHref} className="underline-offset-2 hover:underline">
          {house.phone}
        </a>
      </div>
    </div>
  );
}

import { getTranslations } from "next-intl/server";

export async function AlertBar() {
  const t = await getTranslations("nav");

  return (
    <div className="bg-wine text-cream">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-2 px-4 py-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase md:px-6">
        <span>{t("strip")}</span>
      </div>
    </div>
  );
}

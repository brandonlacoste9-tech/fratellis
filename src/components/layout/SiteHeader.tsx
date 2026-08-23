"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { LocaleSwitch } from "@/components/layout/LocaleSwitch";
import { house } from "@/content/house";
import { Link, usePathname } from "@/i18n/navigation";

const navItems = [
  { href: "/kanata", key: "kanata" },
  { href: "/westboro", key: "westboro" },
  { href: "/about", key: "about" },
] as const;

export function SiteHeader() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 bg-night text-cream">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-50 focus:bg-gold focus:px-3 focus:py-2 focus:text-night"
      >
        {t("skip")}
      </a>
      <div className="mx-auto flex max-w-[1180px] items-center gap-3 px-4 py-3 md:px-6">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">{t("menu")}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className="block h-0.5 bg-cream" />
            <span className="block h-0.5 bg-cream" />
            <span className="block h-0.5 bg-cream" />
          </span>
        </button>

        <Link href="/" className="min-w-0 flex-1 md:flex-none">
          <img
            src={house.logo}
            alt={house.name}
            width={220}
            height={70}
            className="h-10 w-auto object-contain md:h-12"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center gap-x-5 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[0.72rem] font-semibold tracking-[0.14em] uppercase ${
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "text-gold"
                  : "text-cream/75 hover:text-gold"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LocaleSwitch />
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-50 bg-night px-6 py-8 md:hidden"
        >
          <div className="flex items-center justify-between">
            <img src={house.logo} alt="" className="h-8 w-auto" />
            <button type="button" onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.16em]">
              {t("close")}
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-4 text-2xl font-heading">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

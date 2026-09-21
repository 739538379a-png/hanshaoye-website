"use client";

import Image from "next/image";
import { List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import type { NavigationItem } from "@/content/site-content";

type SiteHeaderProps = {
  navigation: NavigationItem[];
  homeHref?: string;
  showCta?: boolean;
  ctaHref?: string;
};

export function SiteHeader({ navigation, homeHref = "#top", showCta = true, ctaHref = "#contact" }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="site-header">
      <a className="brand-link" href={homeHref} aria-label="返回首页顶部">
        <Image src="/brand/logo-horizontal.png" width={360} height={105} alt="汉少爷手作饭团" priority />
      </a>

      <nav className="desktop-nav" aria-label="主导航">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      {showCta ? (
        <a className="header-cta" href={ctaHref}>
          获取合作方案
        </a>
      ) : (
        <span className="header-cta-spacer" aria-hidden="true" />
      )}

      <button
        className="menu-button"
        type="button"
        aria-label="打开导航菜单"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
      >
        <List size={25} weight="regular" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="移动端导航"
            initial={reduceMotion ? false : { opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-menu-top">
              <Image src="/brand/logo-horizontal.png" width={300} height={88} alt="汉少爷手作饭团" />
              <button type="button" aria-label="关闭导航菜单" onClick={() => setOpen(false)}>
                <X size={27} aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="移动端主导航">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={reduceMotion ? false : { opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + index * 0.045 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            {showCta ? (
              <a className="mobile-menu-cta" href={ctaHref} onClick={() => setOpen(false)}>
                获取合作方案
              </a>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

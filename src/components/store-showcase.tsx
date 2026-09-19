"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export type StoreShowcaseSlide = {
  image: string;
  alt: string;
  imagePosition: string;
};

type StoreShowcaseProps = {
  slides: StoreShowcaseSlide[];
};

const ROTATION_INTERVAL = 4600;

export function StoreShowcase({ slides }: StoreShowcaseProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    if (shouldReduceMotion || isPaused || slides.length < 2) {
      return;
    }

    const rotation = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(rotation);
  }, [isPaused, shouldReduceMotion, slides.length]);

  if (!activeSlide) {
    return null;
  }

  return (
    <section id="stores" className="section stores-section" aria-labelledby="stores-title">
      <div className="section-shell">
        <div className="store-showcase">
          <div className="store-showcase-copy">
            <div className="store-showcase-copy-breathe">
              <p className="store-showcase-kicker">东方暖食空间</p>
              <h2 id="stores-title">让空间，也有一顿热饭的温度。</h2>
              <p className="store-showcase-description">
                汉少爷以暖木、深色结构与柔和灯光构建空间基调，将手作饭团与东方米食意象融入现代商业场景，在品牌辨识度、消费体验与运营效率之间找到平衡。
              </p>
            </div>
          </div>

          <div
            className="store-showcase-media"
            onPointerEnter={() => setIsPaused(true)}
            onPointerLeave={() => setIsPaused(false)}
          >
            <AnimatePresence initial={!shouldReduceMotion} mode="sync">
              <motion.div
                key={activeSlide.image}
                className="store-showcase-slide"
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.025 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeInOut" }}
              >
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.alt}
                  fill
                  priority={activeIndex === 0}
                  sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 56vw"
                  style={{ objectPosition: activeSlide.imagePosition }}
                />
              </motion.div>
            </AnimatePresence>
            <p className="store-showcase-status" aria-live="polite">
              {activeIndex + 1} / {slides.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Pause, Play } from "@phosphor-icons/react";
import { motion, useMotionValue, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { JourneyItem } from "@/content/site-content";

type RiceJourneyProps = {
  items: readonly JourneyItem[];
};

export function RiceJourney({ items }: RiceJourneyProps) {
  const x = useMotionValue(0);
  const groupRef = useRef<HTMLDivElement>(null);
  const groupWidth = useRef(0);
  const dragging = useRef(false);
  const paused = useRef(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isInteractionPaused, setIsInteractionPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    paused.current = isPaused || isInteractionPaused || Boolean(reducedMotion);
  }, [isPaused, isInteractionPaused, reducedMotion]);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    const measure = () => {
      groupWidth.current = group.getBoundingClientRect().width;
    };
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(group);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    let previous = performance.now();

    const update = (timestamp: number) => {
      const delta = Math.min(timestamp - previous, 64);
      previous = timestamp;
      if (!groupWidth.current && groupRef.current) {
        groupWidth.current = groupRef.current.getBoundingClientRect().width;
      }
      if (!paused.current && !dragging.current && groupWidth.current) {
        const speed = window.innerWidth < 768 ? 30 : 42;
        let next = x.get() - (speed * delta) / 1000;
        while (next <= -groupWidth.current) next += groupWidth.current;
        while (next > 0) next -= groupWidth.current;
        x.set(next);
      }
      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [x]);

  const normalizePosition = () => {
    if (!groupWidth.current) return;
    let next = x.get();
    while (next <= -groupWidth.current) next += groupWidth.current;
    while (next > 0) next -= groupWidth.current;
    x.set(next);
  };

  const renderItems = (hidden = false) => (
    <div ref={hidden ? undefined : groupRef} className="journey-group" aria-hidden={hidden || undefined}>
      {items.map((item, index) => (
        <figure className={`journey-card journey-card-${item.orientation}`} key={`${hidden ? "copy" : "source"}-${item.image}`}>
          <div className="journey-card-media">
            <Image
              src={item.image}
              alt={hidden ? "" : item.alt}
              fill
              sizes={item.orientation === "landscape" ? "(max-width: 767px) 82vw, 32vw" : "(max-width: 767px) 68vw, 22vw"}
              style={{ objectPosition: item.objectPosition }}
              onError={(event) => event.currentTarget.classList.add("is-missing")}
              priority={index < 2 && !hidden}
            />
          </div>
          <figcaption>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.title}
          </figcaption>
        </figure>
      ))}
    </div>
  );

  return (
    <div
      className="journey-panel"
      aria-label="一粒米从田间到掌心的旅程"
      data-motion-state={reducedMotion ? "reduced" : isPaused || isInteractionPaused ? "paused" : "playing"}
    >
      <div className="journey-toolbar">
        <p>一粒米的旅程</p>
        <button
          type="button"
          className="journey-toggle"
          aria-label={isPaused ? "继续播放一粒米的旅程" : "暂停一粒米的旅程"}
          aria-pressed={isPaused}
          onClick={() => setIsPaused((current) => !current)}
        >
          {isPaused ? <Play size={18} weight="fill" aria-hidden="true" /> : <Pause size={18} weight="fill" aria-hidden="true" />}
          <span>{isPaused ? "继续" : "暂停"}</span>
        </button>
      </div>
      <div
        className="journey-rail"
        tabIndex={0}
        onMouseEnter={() => setIsInteractionPaused(true)}
        onMouseLeave={() => setIsInteractionPaused(false)}
        onFocus={() => setIsInteractionPaused(true)}
        onBlur={() => setIsInteractionPaused(false)}
        onPointerDown={(event) => {
          if (event.pointerType !== "mouse") setIsInteractionPaused(true);
        }}
        onPointerUp={() => setIsInteractionPaused(false)}
        onPointerCancel={() => setIsInteractionPaused(false)}
      >
        <motion.div
          className="journey-track"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -100000, right: 100000 }}
          dragElastic={0.04}
          dragMomentum={false}
          onDragStart={() => { dragging.current = true; }}
          onDragEnd={() => {
            normalizePosition();
            dragging.current = false;
          }}
        >
          {renderItems()}
          {renderItems(true)}
        </motion.div>
      </div>
    </div>
  );
}

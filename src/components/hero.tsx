"use client";

import { ArrowRight, Pause, Play, SpeakerHigh, SpeakerSlash } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type HeroProps = {
  title: string;
  subtitle: string;
  description: string;
  primaryAction: string;
};

export function Hero({ title, subtitle, description, primaryAction }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [playing, setPlaying] = useState(!reduceMotion);
  const [muted, setMuted] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (reduceMotion && videoRef.current) {
      videoRef.current.pause();
      setPlaying(false);
    }
  }, [reduceMotion]);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      await video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        {!videoFailed ? (
          <video
            ref={videoRef}
            className={videoReady ? "is-ready" : ""}
            src="/media/hero-scroll.mp4"
            poster="/media/hero-poster.webp"
            autoPlay={!reduceMotion}
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlay={() => setVideoReady(true)}
            onError={() => setVideoFailed(true)}
          />
        ) : null}
        <div className="hero-poster" />
        <div className="hero-scrim" />
      </div>

      <motion.div
        className="hero-content"
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 id="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <p>{description}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            <span>{primaryAction}</span>
            <span className="button-action-icon" aria-hidden="true">
              <ArrowRight size={16} weight="bold" />
            </span>
          </a>
        </div>
      </motion.div>

      {!videoFailed ? (
        <div className="video-controls" aria-label="首屏视频控制">
          <button type="button" onClick={togglePlayback} aria-label={playing ? "暂停视频" : "播放视频"}>
            {playing ? <Pause size={19} aria-hidden="true" /> : <Play size={19} aria-hidden="true" />}
          </button>
          <button type="button" onClick={toggleMute} aria-label={muted ? "开启视频声音" : "关闭视频声音"}>
            {muted ? <SpeakerSlash size={19} aria-hidden="true" /> : <SpeakerHigh size={19} aria-hidden="true" />}
          </button>
        </div>
      ) : null}
    </section>
  );
}

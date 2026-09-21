import type { Metadata } from "next";
import Image from "next/image";
import { ReturnButton } from "@/components/return-button";
import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/content/site-content";

export const metadata: Metadata = {
  title: "门店布局 | 汉少爷手作饭团",
  description: "浏览汉少爷饭团门店的东方暖食空间与现有门店形象。",
};

export default function StoresPage() {
  return (
    <main className="secondary-page stores-page">
      <SiteHeader navigation={[...siteContent.navigation]} homeHref="/" />
      <section className="secondary-page-hero" aria-labelledby="stores-page-title">
        <div className="section-shell">
          <ReturnButton fallbackHref="/#stores" />
          <div className="secondary-page-heading">
            <p>门店布局</p>
            <h1 id="stores-page-title">东方暖食空间</h1>
            <span>汉少爷以暖木、深色结构与柔和灯光构建空间基调，将手作饭团与东方米食意象融入现代商业场景。</span>
          </div>
        </div>
      </section>

      <section className="secondary-page-content section-shell" aria-label="汉少爷门店展示">
        <div className="store-page-gallery">
          {siteContent.stores.map((store) => (
            <figure className="store-page-figure" key={store.image}>
              <Image
                src={store.image}
                alt={store.alt}
                fill
                sizes="(max-width: 767px) calc(100vw - 2.2rem), 48vw"
                style={{ objectPosition: store.imagePosition }}
              />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}

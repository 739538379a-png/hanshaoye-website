import type { Metadata } from "next";
import Image from "next/image";
import { ReturnButton } from "@/components/return-button";
import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/content/site-content";

export const metadata: Metadata = {
  title: "关于产品 | 汉少爷手作饭团",
  description: "了解汉少爷饭团以东方米食文化打造的新式热饭团产品体系。",
};

export default function ProductsPage() {
  return (
    <main className="secondary-page products-page">
      <SiteHeader navigation={[...siteContent.navigation]} homeHref="/" />
      <section className="secondary-page-hero" aria-labelledby="products-page-title">
        <div className="section-shell">
          <ReturnButton fallbackHref="/#products" />
          <div className="secondary-page-heading">
            <p>关于产品</p>
            <h1 id="products-page-title">
              <span>把一枚热饭团</span>
              <span>认真握在手里</span>
            </h1>
            <span>以东方米食文化为基础，融合现代消费场景，打造健康、温暖、便捷的新式热饭团产品体系。</span>
          </div>
        </div>
      </section>

      <section className="secondary-page-content section-shell" aria-label="汉少爷产品展示">
        <div className="product-page-gallery">
          {siteContent.products.map((product) => (
            <figure className="product-page-figure" key={product.image}>
              <Image
                src={product.image}
                alt={product.alt}
                fill
                sizes="(max-width: 767px) calc((100vw - 3.5rem) / 3), 30vw"
                style={{ objectPosition: product.imagePosition }}
              />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}

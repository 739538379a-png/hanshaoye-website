import type { Metadata } from "next";
import Image from "next/image";
import { ProductCatalog } from "@/components/product-catalog";
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
      <section className="products-philosophy" aria-labelledby="products-page-title">
        <div className="section-shell">
          <ReturnButton fallbackHref="/#products" />
          <div className="products-philosophy-layout">
            <div className="products-philosophy-copy">
              <h1 id="products-page-title">产品理念</h1>
              <p className="products-philosophy-description">
                <span>以东方米食文化为基础，融合现代消费场景，</span>
                <span>打造健康、温暖、便捷的新式热饭团产品体系。</span>
              </p>
            </div>
            <figure className="products-philosophy-photo">
              <Image
                src="/media/products/product-philosophy.webp"
                alt="木盘上陈列的汉少爷饭团与新鲜食材"
                fill
                priority
                sizes="(max-width: 767px) calc(100vw - 2.2rem), 48vw"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="products-catalog-section section-shell">
        <ProductCatalog />
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ReturnButton } from "@/components/return-button";
import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/content/site-content";

export const metadata: Metadata = {
  title: "品牌动态 | 汉少爷手作饭团",
  description: "查看汉少爷饭团的品牌新闻与最新动态。",
};

export default function NewsPage() {
  return (
    <main className="secondary-page news-page">
      <SiteHeader navigation={[...siteContent.navigation]} homeHref="/" />
      <section className="secondary-page-hero" aria-labelledby="news-page-title">
        <div className="section-shell">
          <ReturnButton fallbackHref="/#news" />
          <div className="secondary-page-heading">
            <p>品牌动态</p>
            <h1 id="news-page-title">期待在新的城市与您相遇</h1>
            <span>更多城市持续登陆中</span>
          </div>
        </div>
      </section>

      <section className="secondary-page-content section-shell" aria-label="汉少爷品牌新闻">
        <div className="news-page-grid">
          {siteContent.news.map((item) =>
            item.kind === "article" ? (
              <article className="news-page-card" key={item.href}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <div className="news-page-media">
                    <Image src={item.image} alt={item.alt} fill sizes="(max-width: 767px) calc(100vw - 2.2rem), 48vw" style={{ objectPosition: item.imagePosition }} />
                    <span aria-hidden="true"><ArrowUpRight size={20} weight="bold" /></span>
                  </div>
                  <div>
                    <p>{item.source}</p>
                    <time dateTime={item.dateTime}>{item.date}</time>
                    <h2>{item.title}</h2>
                    <span>{item.excerpt}</span>
                  </div>
                </a>
              </article>
            ) : (
              <article className="news-page-upcoming" key={item.title}>
                <Image src="/media/cooperation-ip-partners.webp" alt="汉少爷两位鞠躬致意的 IP 形象" width={1200} height={800} sizes="(max-width: 767px) 78vw, 34vw" />
                <p>Coming soon</p>
                <h2>{item.title}</h2>
                <span>{item.excerpt}</span>
              </article>
            ),
          )}
        </div>
      </section>
    </main>
  );
}

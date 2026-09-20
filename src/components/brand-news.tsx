import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { SectionLink } from "@/components/section-link";
import type { NewsItem } from "@/content/site-content";

type BrandNewsProps = {
  items: readonly NewsItem[];
};

export function BrandNews({ items }: BrandNewsProps) {
  return (
    <section id="news" className="section brand-news-section" aria-labelledby="brand-news-title">
      <div className="section-shell">
        <div className="section-entry">
          <SectionLink label="品牌动态" href="#news" />
        </div>
        <div className="brand-news-heading">
          <p className="brand-news-kicker">Brand news</p>
          <h2 id="brand-news-title">期待在新的城市与您相遇</h2>
          <p>更多城市持续登陆中</p>
        </div>

        <div className="brand-news-grid">
          {items.map((item, index) =>
            item.kind === "article" ? (
              <article className={`brand-news-card brand-news-card-${index + 1}`} key={item.href}>
                <a className="brand-news-link" href={item.href} target="_blank" rel="noreferrer">
                  <div className="brand-news-media">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1023px) 78vw, (max-width: 1280px) 35vw, 30vw"
                      style={{ objectPosition: item.imagePosition }}
                    />
                    <span className="brand-news-arrow" aria-hidden="true">
                      <ArrowUpRight size={20} weight="bold" />
                    </span>
                  </div>
                  <div className="brand-news-card-copy">
                    <div className="brand-news-meta">
                      <span>{item.source}</span>
                      <time dateTime={item.dateTime}>{item.date}</time>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                  </div>
                </a>
              </article>
            ) : (
              <article className={`brand-news-card brand-news-card-upcoming brand-news-card-${index + 1}`} key={item.title}>
                <div className="brand-news-upcoming" aria-label={item.title}>
                  <span className="brand-news-upcoming-mark" aria-hidden="true">+</span>
                  <Image
                    className="brand-news-upcoming-ip"
                    src="/media/cooperation-ip-partners.webp"
                    alt="汉少爷两位鞠躬致意的 IP 形象"
                    width={1200}
                    height={800}
                    sizes="(max-width: 1023px) 52vw, 18vw"
                  />
                  <p>Coming soon</p>
                  <h3>{item.title}</h3>
                  <span>{item.excerpt}</span>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

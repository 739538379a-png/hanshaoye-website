import Image from "next/image";
import { ArrowRight, BowlFood, Storefront, TrendUp } from "@phosphor-icons/react/dist/ssr";
import { BrandNews } from "@/components/brand-news";
import { Hero } from "@/components/hero";
import BreathingText from "@/components/fancy/text/breathing-text";
import { LeadForm } from "@/components/lead-form";
import { RiceJourney } from "@/components/rice-journey";
import { Reveal } from "@/components/reveal";
import { SectionLink } from "@/components/section-link";
import { SiteHeader } from "@/components/site-header";
import { StoreShowcase } from "@/components/store-showcase";
import { siteContent } from "@/content/site-content";

const valueIcons = [BowlFood, Storefront, TrendUp];

export default function Home() {
  return (
    <main>
      <SiteHeader navigation={[...siteContent.navigation]} />
      <Hero {...siteContent.hero} />

      <section id="about" className="section about-section">
        <div className="section-shell about-grid">
          <div className="about-copy">
            <SectionLink label="关于我们" href="#about" />
            <h2>{siteContent.about.title}</h2>
            <p className="section-body">{siteContent.about.body}</p>
            <p className="brand-statement">{siteContent.about.statement}</p>
          </div>
          <RiceJourney items={siteContent.about.journey} />
        </div>
      </section>

      <section id="products" className="section products-section">
        <div className="section-shell">
          <SectionLink label="关于产品" href="#products" />
          <Reveal className="section-heading product-heading">
            <h2>把一顿热饭，认真握在手里</h2>
            <p>以东方米食文化为基础，融合现代消费场景，打造健康、温暖、便捷的新式热饭团产品体系</p>
            <button className="product-explore-button" type="button" disabled>
              探索产品
            </button>
          </Reveal>

          <div className="product-track">
            {siteContent.products.map((product, index) => (
              <Reveal className={`product-item product-item-${index + 1}`} key={product.image} delay={index * 0.08}>
                <div className="product-image" tabIndex={0} aria-label={product.alt}>
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 767px) 82vw, (max-width: 1023px) 31vw, 26vw"
                    style={{ objectPosition: product.imagePosition }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="craft-section" aria-labelledby="craft-title">
        <div className="craft-image">
          <Image
            src="/media/craft-making.webp"
            alt="汉少爷饭团现制过程"
            fill
            sizes="100vw"
          />
        </div>
        <Reveal className="craft-copy">
          <h2 id="craft-title">
            <BreathingText
              className="craft-breathing-title"
              fromFontVariationSettings="'wght' 520"
              toFontVariationSettings="'wght' 780"
              transition={{ duration: 2.4, ease: "easeInOut" }}
              staggerDuration={0.055}
              staggerFrom="center"
              repeatDelay={0.5}
            >
              看得见的健康，也看得见的热腾
            </BreathingText>
          </h2>
        </Reveal>
      </section>

      <StoreShowcase slides={siteContent.stores} />

      <section id="cooperation" className="section cooperation-section">
        <div className="section-shell cooperation-grid">
          <Reveal className="cooperation-intro">
            <SectionLink label="合作共创" href="#cooperation" />
            <h2>{siteContent.cooperation.title}</h2>
            <p>{siteContent.cooperation.body}</p>
            <a className="inline-link" href="#contact">
              获取合作方案 <ArrowRight size={18} aria-hidden="true" />
            </a>
          </Reveal>
          <div className="value-list">
            {siteContent.cooperation.values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <Reveal className="value-item" key={value.title} delay={index * 0.08}>
                  <Icon size={30} weight="light" aria-hidden="true" />
                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <BrandNews items={siteContent.news} />

      <section id="contact" className="section contact-section">
        <div className="section-shell contact-grid">
          <Reveal className="contact-copy">
            <SectionLink label="联系我们" href="#contact" />
            <h2>一起把一顿热饭，做成值得长期坚持的事</h2>
            <p>填写基本信息，我们会结合意向城市与实际需求进一步沟通。</p>
            <a href={`tel:${siteContent.contact.phone.replaceAll("-", "")}`}>{siteContent.contact.phone}</a>
          </Reveal>
          <Reveal className="form-wrap" delay={0.1}>
            <LeadForm />
          </Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <div>
            <Image src="/brand/logo-horizontal.png" width={310} height={90} alt="汉少爷手作饭团" />
            <p>{siteContent.contact.company}</p>
          </div>
          <div className="footer-links">
            {siteContent.navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="footer-contact">
            <a href={`tel:${siteContent.contact.phone.replaceAll("-", "")}`}>{siteContent.contact.phone}</a>
            <span>{siteContent.contact.domain}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

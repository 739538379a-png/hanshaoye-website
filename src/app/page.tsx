import Image from "next/image";
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

export default function Home() {
  return (
    <main>
      <SiteHeader navigation={[...siteContent.navigation]} />
      <Hero {...siteContent.hero} />

      <section id="about" className="section about-section">
        <div className="section-shell">
          <div className="section-entry">
            <SectionLink label="关于我们" href="/about" />
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <h2>
                {siteContent.about.title.split("，").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>
              <p className="section-body">{siteContent.about.body}</p>
              <p className="brand-statement">{siteContent.about.statement}</p>
            </div>
            <RiceJourney items={siteContent.about.journey} />
          </div>
        </div>
      </section>

      <section id="products" className="section products-section">
        <div className="section-shell">
          <div className="section-entry">
            <SectionLink label="关于产品" href="#products" />
          </div>
          <Reveal className="section-heading product-heading">
            <h2>
              <span>把一枚热饭团</span>
              <span>认真握在手里</span>
            </h2>
            <p>
              <span>以东方米食文化为基础，融合现代消费场景，</span>
              <span>打造健康、温暖、便捷的新式热饭团产品体系</span>
            </p>
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
        <div className="section-shell cooperation-showcase">
          <div className="section-entry">
            <SectionLink label="合作共创" href="/cooperation" />
          </div>
          <Reveal className="cooperation-heading">
            <h2 className="cooperation-manifesto">与君同行，共谋长久</h2>
          </Reveal>
          <div className="cooperation-ip-layout">
            <Reveal className="cooperation-partners" delay={0.06}>
              <Image
                src={siteContent.cooperation.partnersImage}
                alt={siteContent.cooperation.partnersAlt}
                width={1200}
                height={800}
                sizes="(max-width: 767px) 92vw, 35vw"
              />
            </Reveal>
            <Reveal className="cooperation-presenter" delay={0.14}>
              <Image
                src={siteContent.cooperation.presenterImage}
                alt={siteContent.cooperation.presenterAlt}
                width={1440}
                height={809}
                sizes="(max-width: 767px) 92vw, 58vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <BrandNews items={siteContent.news} />

      <section id="contact" className="section contact-section">
        <div className="section-shell">
          <div className="section-entry">
            <SectionLink label="联系我们" href="#contact" />
          </div>
          <div className="contact-grid">
            <Reveal className="contact-copy">
              <h2 className="contact-manifesto">以诚相待，久处为伴</h2>
              <p>填写基本信息，我们会结合意向城市与实际需求进一步沟通。</p>
              <a href={`tel:${siteContent.contact.phone.replaceAll("-", "")}`}>{siteContent.contact.phone}</a>
            </Reveal>
            <Reveal className="form-wrap" delay={0.1}>
              <LeadForm />
            </Reveal>
          </div>
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

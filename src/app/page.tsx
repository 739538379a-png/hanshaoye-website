import Image from "next/image";
import { ArrowRight, BowlFood, Storefront, TrendUp } from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/hero";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/content/site-content";

const valueIcons = [BowlFood, Storefront, TrendUp];

export default function Home() {
  return (
    <main>
      <SiteHeader navigation={[...siteContent.navigation]} />
      <Hero {...siteContent.hero} />

      <section id="about" className="section about-section">
        <div className="section-shell about-grid">
          <Reveal className="about-copy">
            <p className="section-kicker">认识汉少爷</p>
            <h2>{siteContent.about.title}</h2>
            <p className="section-body">{siteContent.about.body}</p>
            <p className="brand-statement">{siteContent.about.statement}</p>
          </Reveal>
          <div className="about-collage" aria-label="稻田、蒸汽与手作场景">
            <Reveal className="about-image about-image-main">
              <Image
                src="/media/mood-rice.webp"
                alt="成熟稻田与山野晨光"
                fill
                sizes="(max-width: 767px) 78vw, 34vw"
              />
            </Reveal>
            <Reveal className="about-image about-image-detail" delay={0.12}>
              <Image
                src="/media/mood-steam.webp"
                alt="带着蒸汽的手作米食场景"
                fill
                sizes="(max-width: 767px) 56vw, 24vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="products" className="section products-section">
        <div className="section-shell">
          <Reveal className="section-heading vertical-heading">
            <h2>把一顿热饭，认真握在手里</h2>
            <p>以米为基础，围绕温暖、便捷与真实口感持续打磨产品。</p>
          </Reveal>

          <div className="product-track">
            {siteContent.products.map((product, index) => (
              <Reveal className={`product-item product-item-${index + 1}`} key={product.name} delay={index * 0.08}>
                <div className="product-image">
                  <Image src={product.image} alt={product.name} fill sizes="(max-width: 767px) 82vw, 30vw" />
                </div>
                <div className="product-copy">
                  <span>{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
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
          <h2 id="craft-title">看得见的制作，也看得见的认真</h2>
          <p>从热米饭到层层铺料，每一步都围绕真实门店出品展开。</p>
        </Reveal>
      </section>

      <section id="stores" className="section stores-section">
        <div className="section-shell">
          <Reveal className="store-intro">
            <p className="section-kicker">空间展示</p>
            <h2>每一家门店，都是品牌体验的落点</h2>
          </Reveal>
          <div className="store-gallery">
            {siteContent.stores.map((store, index) => (
              <Reveal className={`store-item store-item-${index + 1}`} key={store.title} delay={index * 0.08}>
                <div className="store-image">
                  <Image
                    src={store.image}
                    alt={store.title}
                    fill
                    sizes="(max-width: 767px) 88vw, 45vw"
                    style={{ objectPosition: store.imagePosition }}
                  />
                </div>
                <h3>{store.title}</h3>
                <p>{store.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="cooperation" className="section cooperation-section">
        <div className="section-shell cooperation-grid">
          <Reveal className="cooperation-intro">
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

      <section id="contact" className="section contact-section">
        <div className="section-shell contact-grid">
          <Reveal className="contact-copy">
            <p className="section-kicker">合作咨询</p>
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

import Image from "next/image";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { LeadForm } from "@/components/lead-form";
import { ReturnButton } from "@/components/return-button";
import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/content/site-content";

const supportCards = [
  {
    title: "产品支持体系",
    body: "围绕好米、热饭与谷物饮品，覆盖早餐与多峰经营场景，建立清晰的产品呈现与制作节奏。",
    image: "/media/cooperation-support-product-prep.png",
    alt: "门店伙伴将热腾腾的紫米盛入餐碗，呈现产品制作过程",
  },
  {
    title: "模型支持",
    body: "围绕中岛店、写字楼与交通枢纽等消费场景，匹配不同门店模型与服务动线。",
    image: "/media/cooperation-support-model.png",
    alt: "暖木色现代饭团门店内的服务柜台与空间动线",
  },
  {
    title: "运营体系支持",
    body: "通过日常运营节奏、内容协同与持续沟通，让门店经营更有章法。",
    image: "/media/cooperation-support-operations-store.jpg",
    alt: "汉少爷饭团门店的真实开业与运营现场",
  },
] as const;

const conditions = ["认同产品与服务理念", "愿意长期投入经营", "具有当地购物中心拿位资源", "具备抗风险和投资能力"] as const;

const milestones = ["提交合作意向", "初步沟通", "合作评估", "签约筹备", "培训开业"] as const;

export default function CooperationPage() {
  return (
    <main className="cooperation-page cooperation-page-refined">
      <SiteHeader navigation={[...siteContent.navigation]} homeHref="/#top" ctaHref="#contact" />

      <section className="cooperation-refined-hero" aria-labelledby="cooperation-page-title">
        <div className="section-shell cooperation-refined-hero-grid">
          <div className="cooperation-refined-hero-copy">
            <ReturnButton fallbackHref="/#cooperation" />
            <p>合作共创</p>
            <h1 id="cooperation-page-title">与君同行，共谋长久</h1>
            <span>从一枚饭团出发，和愿意认真经营的伙伴一起走向长久合作。</span>
          </div>
          <div className="cooperation-refined-hero-media">
            <Image
              src="/media/cooperation-hero-cooking.png"
              alt="汉少爷 IP 在柴火旁煮饭的手绘场景"
              fill
              priority
              sizes="(max-width: 767px) calc(100vw - 2.2rem), 50vw"
            />
          </div>
        </div>
      </section>

      <div className="cooperation-refined-content section-shell">
        <section className="cooperation-advantages" aria-labelledby="advantages-title">
          <div className="cooperation-section-heading">
            <p>合作优势</p>
            <h2 id="advantages-title">一套支持，贯穿门店日常</h2>
          </div>
          <div className="cooperation-support-grid">
            {supportCards.map((card) => (
              <article className="cooperation-support-card" key={card.title}>
                <div className="cooperation-support-card-media">
                  <Image src={card.image} alt={card.alt} fill sizes="(max-width: 767px) calc(100vw - 2.2rem), 31vw" />
                </div>
                <div className="cooperation-support-card-copy">
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cooperation-conditions" aria-labelledby="conditions-title">
          <div className="cooperation-conditions-media">
            <Image
              src="/media/cooperation-conditions-making.jpg"
              alt="门店伙伴现场制作饭团的真实工作场景"
              fill
              sizes="(max-width: 767px) calc(100vw - 2.2rem), 48vw"
            />
          </div>
          <div className="cooperation-conditions-copy">
            <p id="conditions-title">合作条件</p>
            <span>我们期待重视产品与服务、愿意长期投入的伙伴，共同评估意向城市、门店条件与筹备方向。</span>
            <ul>
              {conditions.map((condition) => (
                <li key={condition}>
                  <Check size={18} weight="bold" aria-hidden="true" />
                  {condition}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="cooperation-process" aria-labelledby="process-label">
          <div className="cooperation-section-heading cooperation-process-heading">
            <p id="process-label">合作流程</p>
          </div>
          <ol className="cooperation-milestones">
            {milestones.map((milestone, index) => (
              <li key={milestone}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{milestone}</strong>
              </li>
            ))}
          </ol>
        </section>

        <section className="cooperation-form-section" id="contact" aria-labelledby="form-title">
          <div className="cooperation-form-copy">
            <p id="form-title">获取合作方案</p>
            <div className="cooperation-form-visual">
              <Image
                src="/media/cooperation-form-planning.png"
                alt="两位合作伙伴在暖木门店中共同查看门店筹备图纸"
                fill
                sizes="(max-width: 767px) calc(100vw - 4.8rem), 34vw"
              />
            </div>
            <span>填写基本信息，我们会结合意向城市与实际需求进一步沟通。</span>
          </div>
          <div className="form-wrap">
            <LeadForm />
          </div>
        </section>
      </div>
    </main>
  );
}

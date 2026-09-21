import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/content/site-content";

const cooperationNavigation = siteContent.navigation.map((item) => {
  if (item.label === "合作共创") return item;
  if (item.label === "关于我们") return { ...item, href: "/#about" };
  return item.href.startsWith("#") ? { ...item, href: `/${item.href}` } : item;
});

const cooperationSections = [
  {
    id: "advantages",
    label: "合作优势",
    title: "把产品、门店与运营，放在同一套节奏里",
    body: "以热饭团为核心，让东方米食文化与现代消费场景自然相连。",
    points: ["清晰的产品体系", "可沟通的门店模型", "持续的运营协同"],
    image: "/media/cooperation-ip-presenter.webp",
    alt: "汉少爷 IP 在讲解板前介绍产品体系、门店模型和运营支持",
    imageMode: "contain",
  },
  {
    id: "conditions",
    label: "合作条件",
    title: "认同一顿热饭，也愿意认真经营每一天",
    body: "我们期待重视产品与服务、愿意长期投入的伙伴，共同评估意向城市、门店条件与筹备方向。",
    points: ["认同产品与服务理念", "愿意长期投入经营", "可共同评估城市与门店"],
    image: "/media/store-showcase-03.webp",
    alt: "汉少爷重庆九龙坡喜盈门店的门店效果图",
    imageMode: "cover",
  },
  {
    id: "returns",
    label: "合作收益",
    title: "让每一份日常经营，都有可持续的支撑",
    body: "围绕标准化产品、门店模型和运营支持，和伙伴一起把门店日常经营做得更有章法。",
    points: ["产品制作与呈现支持", "门店运营节奏沟通", "品牌内容协同支持"],
    image: "/media/store-counter.webp",
    alt: "汉少爷门店内展示饭团产品的服务柜台",
    imageMode: "cover",
  },
  {
    id: "process",
    label: "合作流程",
    title: "从一次沟通开始，把每一步走清楚",
    body: "合作推进以实际沟通为准，让城市、门店与筹备安排在充分了解后逐步落定。",
    steps: ["提交合作意向", "初步沟通", "合作评估", "签约筹备", "培训开业"],
    image: "/media/cooperation-ip-partners.webp",
    alt: "两位汉少爷 IP 人物拱手致意",
    imageMode: "contain",
  },
] as const;

const questions = [
  {
    question: "没有餐饮经验，也可以咨询合作吗？",
    answer: "可以先提交基本信息，团队会结合您的实际情况进一步沟通。",
  },
  {
    question: "门店选址如何推进？",
    answer: "我们会结合意向城市、商圈与门店条件，和您逐步评估合适的推进方向。",
  },
  {
    question: "筹备阶段会沟通哪些内容？",
    answer: "围绕产品、门店模型与运营筹备等事项，在双方确认的范围内逐项沟通。",
  },
  {
    question: "具体合作费用如何了解？",
    answer: "费用与方案会结合实际城市和门店情况沟通确认，不在页面作统一承诺。",
  },
  {
    question: "如何获取合作方案？",
    answer: "点击页面中的“获取合作方案”，填写意向信息后即可进入后续沟通。",
  },
] as const;

export default function CooperationPage() {
  return (
    <main className="cooperation-page">
      <SiteHeader navigation={cooperationNavigation} homeHref="/#top" ctaHref="/#contact" />

      <section className="cooperation-page-hero" aria-labelledby="cooperation-page-title">
        <div className="section-shell cooperation-page-hero-grid">
          <div className="cooperation-page-hero-copy">
            <p>合作共创</p>
            <h1 id="cooperation-page-title">与君同行，共谋长久</h1>
            <span>从一枚热饭团出发，和愿意认真经营的伙伴，一起走向更长久的日常。</span>
          </div>
          <div className="cooperation-page-hero-media">
            <Image
              src="/media/cooperation-ip-presenter.webp"
              alt="汉少爷 IP 在讲解板前介绍合作支持信息"
              width={1440}
              height={809}
              priority
              sizes="(max-width: 767px) 88vw, 46vw"
            />
          </div>
        </div>
      </section>

      <div className="cooperation-page-content section-shell">
        {cooperationSections.map((section, index) => (
          <section
            className={`cooperation-detail ${index % 2 === 1 ? "cooperation-detail-reversed" : ""}`}
            id={section.id}
            key={section.id}
            aria-labelledby={`${section.id}-title`}
          >
            <div className="cooperation-detail-copy">
              <p className="cooperation-detail-label">{section.label}</p>
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              <p>{section.body}</p>
              {"steps" in section ? (
                <ol className="cooperation-steps">
                  {section.steps.map((step, stepIndex) => (
                    <li key={step}>
                      <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              ) : (
                <ul className="cooperation-points">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className={`cooperation-detail-media cooperation-detail-media-${section.imageMode}`}>
              <Image
                src={section.image}
                alt={section.alt}
                fill
                sizes="(max-width: 767px) calc(100vw - 2.2rem), 48vw"
              />
            </div>
          </section>
        ))}

        <section className="cooperation-faq" id="faq" aria-labelledby="faq-title">
          <div className="cooperation-faq-heading">
            <p>合作问答</p>
            <h2 id="faq-title">先把关心的问题，说清楚</h2>
            <span>更多细节，欢迎通过合作表单与我们沟通。</span>
          </div>
          <div className="cooperation-faq-list">
            {questions.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
          <div className="cooperation-faq-media">
            <Image
              src="/media/mood-rice.webp"
              alt="蒸熟米饭与竹编器皿营造的温暖米食氛围"
              fill
              sizes="(max-width: 767px) calc(100vw - 2.2rem), 42vw"
            />
          </div>
        </section>
      </div>

      <Link className="cooperation-float-cta" href="/#contact">
        <span>获取合作方案</span>
        <i aria-hidden="true"><ArrowRight size={18} weight="bold" /></i>
      </Link>
    </main>
  );
}

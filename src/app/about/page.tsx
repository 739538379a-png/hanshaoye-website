import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/content/site-content";

export const metadata: Metadata = {
  title: "关于我们 | 汉少爷手作饭团",
  description: "了解汉少爷饭团的品牌使命、愿景、理念与品牌故事。",
};

const aboutNavigation = siteContent.navigation.map((item) => ({
  ...item,
  href: item.href.startsWith("#") ? `/${item.href}` : item.href,
}));

export default function AboutPage() {
  return (
    <main className="about-page">
      <SiteHeader navigation={aboutNavigation} homeHref="/" showCta={false} />

      <div className="section-shell about-page-shell">
        <section className="about-page-section" aria-labelledby="mission-title">
          <div className="about-page-copy">
            <p className="about-page-kicker">ABOUT HAN SHAO YE</p>
            <h1 id="mission-title">品牌使命、愿景与理念</h1>

            <dl className="about-page-values">
              <div>
                <dt>品牌使命</dt>
                <dd>让更多人随时享有一份健康、温暖、便捷的中国式健康餐</dd>
              </div>
              <div>
                <dt>品牌愿景</dt>
                <dd>成为中国领先的新式热饭团连锁品牌，让东方米食走向更多城市</dd>
              </div>
              <div>
                <dt>品牌理念</dt>
                <dd>坚持好食材、好产品、好体验，让每一枚饭团都承载健康与温暖</dd>
              </div>
            </dl>

            <p className="about-page-summary">
              汉少爷饭团源于对现代生活方式的洞察，在快节奏时代，人们需要的不只是填饱肚子，更是一份健康、温暖且方便的饮食选择。我们以东方米食文化为基础，通过标准化产品体系、供应链能力和连锁运营模式，让一枚小小饭团成为连接品质生活与便捷消费的新型健康热食方式，并陪伴更多消费者与创业伙伴共同成长。
            </p>
          </div>

          <div className="about-page-media about-page-media-rice">
            <Image
              src="/media/mood-rice.webp"
              alt="晨光照亮梯田与成熟稻穗，呈现东方米食的自然来源"
              fill
              priority
              sizes="(max-width: 767px) calc(100vw - 2.2rem), (max-width: 1023px) calc(100vw - 2.2rem), 48vw"
            />
          </div>
        </section>

        <section className="about-page-section" aria-labelledby="story-title">
          <div className="about-page-copy">
            <p className="about-page-kicker">BRAND STORY</p>
            <h2 id="story-title">品牌故事</h2>

            <div className="about-page-story">
              <p>
                <strong>为什么现在需要汉少爷？</strong>
                在城市生活节奏不断加快的今天，早餐和轻食消费正在发生变化。消费者希望获得更加健康、方便的饮食选择，但传统早餐往往缺少便携性，而部分轻食产品又难以满足中国人的热食习惯。
              </p>
              <p>
                <strong>汉少爷解决什么？</strong>
                汉少爷饭团基于对中国饮食文化和年轻消费场景的观察，将东方米食文化与现代便捷消费方式结合，以饭团作为连接传统与未来的载体，探索更加符合当代生活方式的新式热食体验。
              </p>
              <p>
                <strong>为什么相信它？</strong>
                从食材选择到产品研发，从制作标准到门店运营，汉少爷坚持围绕消费者体验持续优化，让一枚小小的饭团不仅满足饱腹需求，更成为健康、温暖和品质生活的表达。
              </p>
              <p>
                <strong>为什么选择它？</strong>
                未来，汉少爷将持续完善产品体系、供应链能力和连锁运营体系，与更多合作伙伴共同拓展新式热食市场，让更多消费者在不同城市，都能享受到一份安心、便捷的中国式热饭。
              </p>
            </div>
          </div>

          <div className="about-page-media about-page-media-making">
            <Image
              src="/media/craft-making.webp"
              alt="汉少爷手作饭团制作过程，展现好食材与现制热饭"
              fill
              sizes="(max-width: 767px) calc(100vw - 2.2rem), (max-width: 1023px) calc(100vw - 2.2rem), 48vw"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import { ReturnButton } from "@/components/return-button";
import { LeadForm } from "@/components/lead-form";
import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/content/site-content";

export const metadata: Metadata = {
  title: "联系我们 | 汉少爷手作饭团",
  description: "提交合作意向，与汉少爷饭团进一步沟通。",
};

export default function ContactPage() {
  return (
    <main className="secondary-page contact-page">
      <SiteHeader navigation={[...siteContent.navigation]} homeHref="/" />
      <section className="secondary-page-hero" aria-labelledby="contact-page-title">
        <div className="section-shell">
          <ReturnButton fallbackHref="/#contact" />
          <div className="secondary-page-heading">
            <p>联系我们</p>
            <h1 id="contact-page-title">以诚相待，久处为伴</h1>
            <span>填写基本信息，我们会结合意向城市与实际需求进一步沟通。</span>
          </div>
        </div>
      </section>

      <section className="secondary-page-content section-shell contact-page-grid" aria-label="合作申请表单">
        <div className="contact-page-details">
          <a href={`tel:${siteContent.contact.phone.replaceAll("-", "")}`}>{siteContent.contact.phone}</a>
          <p>{siteContent.contact.company}</p>
          <span>{siteContent.contact.domain}</span>
        </div>
        <div className="form-wrap">
          <LeadForm />
        </div>
      </section>
    </main>
  );
}

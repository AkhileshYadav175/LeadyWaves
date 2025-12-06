import { useState } from "react";
import "../styles/faqSection.css";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What makes LeadyWaves different from other design agencies?",
      a: `At LeadyWaves, We Don’t Just Design Pretty Websites — We Create Conversion-Driven Experiences That Help Your Business Grow. Every Project Starts With Strategy: Understanding Your Goals, Audience, And What Motivates Them To Take Action.

We Combine UX Psychology, Design Systems, And Proven CRO Frameworks To Craft Websites That Look Stunning And Perform Even Better.`
    },
    {
      q: "How much does a website or landing page cost?",
      a: `Our Pricing Depends On Your Project Scope — Number Of Pages, Functionality, And Timeline. We Create Customized Quotes So You Only Pay For What You Truly Need.

 Book A Free Discovery Call And We’ll Share A Transparent Estimate After Understanding Your Goals.`
    },
    {
      q: "How long does it take to complete a project?",
      a: `Most Website Projects Take 2–4 Weeks, Depending On Complexity And Feedback Speed. Landing Pages Are Usually Completed Faster.

We Work In Clear Milestones — From Design To Final Launch — So You Always Know What’s Next.`
    },
    {
      q: "How will my new website improve my conversions and ROI?",
      a: `We Use UX Psychology And A/B-Tested Design Principles To Create Layouts That Guide Users Toward Action — Boosting Sales, Leads, And Engagement From Day One.`
    },
    {
      q: "What if I’m not satisfied with the design or results?",
      a: `We Don’t Stop Until You’re 100% Happy. Every Project Includes Multiple Revisions And Optimization Rounds To Ensure The Design Performs And Feels Right For Your Brand.`
    },
    {
      q: "Do you handle development as well?",
      a: `Yes. We Offer Complete Design + Development Solutions On Platforms Like Shopify, WordPress, Webflow, Elementor, React And Many More.

Our Goal Is To Make Your Launch Seamless — From Creative Design To Functional Build — So You Never Have To Manage Multiple Teams.`
    },
    {
      q: "How does the website design and development process work?",
      a: `Our Process Is Clear, Collaborative, And Designed To Keep You In The Loop From Day One:

Step 1— Discovery & Questionnaire  
We Start By Understanding Your Business, Goals, And Target Audience Through A Quick But Detailed Questionnaire. This Helps Us Capture Your Brand Voice And Vision.

Step 2 — Wireframing & Structure  
We Create The Visual Blueprint For Your Website — Defining The Layout, Flow, And User Experience Before Diving Into Design.

Step 3 — UI Design  
Our Team Brings Your Brand To Life With A Modern, Conversion-Focused Design That Looks Stunning And Aligns With Your Goals.

Step 4 — Development & Launch  
Once Approved, We Build Your Site On The Chosen Platform (Shopify, WordPress, Webflow, Etc.), Ensuring It’s Fast, Mobile-Ready, And SEO-Optimized. Then We Test And Launch It Smoothly.

 From Start To Finish, Every Step Is Transparent, Structured, And Built To Deliver A Website You’ll Be Proud To Launch.`
    }
  ];

  return (
    <section className="faq-sec">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-wrapper">
        {faqs.map((item, i) => (
          <div className="faq-item" key={i}>
            <div className="faq-question" onClick={() => toggleFAQ(i)}>
              <span>{item.q}</span>

              <button className={`faq-btn ${openIndex === i ? "open" : ""}`}>
                {openIndex === i ? "×" : "+"}
              </button>
            </div>

            <div className={`faq-answer ${openIndex === i ? "show" : ""}`}>
              <p>{item.a}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

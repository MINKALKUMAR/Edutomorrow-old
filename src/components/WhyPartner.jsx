import React from "react"

/*
  Palette (5 colors total via your theme):
  - var(--color-blue-light-bg)
  - var(--color-white)
  - var(--color-blue-medium-bg)
  - var(--color-black)
  - var(--color-blue-medium)
*/

export default function WhyPartner() {
  const items = [
    {
      title: "Industry Influence",
      desc:
        "Position your brand where decisions are made. Reach senior leaders who set enterprise priorities and budgets.",
    },
    {
      title: "Innovative Exposure",
      desc:
        "Showcase cutting‑edge solutions through demos and content moments that highlight measurable business impact.",
    },
    {
      title: "Exclusive Networking",
      desc:
        "Build authentic relationships in curated roundtables and invite‑only sessions for CXO‑level engagement.",
    },
    {
      title: "Maximise Visibility",
      desc:
        "Amplify presence across stage time, hosted sessions, and branded touchpoints that keep your message top‑of‑mind.",
    },
    {
      title: "Through Leadership",
      desc:
        "Lead conversations with insights and perspectives that elevate credibility and accelerate partner opportunities.",
    },
  ]

  return (
    <section
      aria-labelledby="why-partner-title"
      role="region"
      className="wpwu"
      style={{
        backgroundImage:
          "linear-gradient(135deg, var(--color-blue-light-bg) 0%, var(--color-white) 50%, var(--color-blue-medium-bg) 100%)",
        color: "var(--color-black)",
      }}
    >
      <div className="wpwu__container">
        <header className="wpwu__header">
          <p className="wpwu__eyebrow">Partner Benefits</p>
          <h2 id="why-partner-title" className="wpwu__title">
            Why <span className="wpwu__titleAccent">Partner With Us</span>
          </h2>
          <span className="wpwu__bar" aria-hidden="true" />
          {/* <p className="wpwu__subtitle">
            Engage decision‑makers, showcase innovation, and create meaningful
            executive connections.
          </p> */}
        </header>

        <ul className="wpwu__grid" aria-label="Benefits">
          {items.map((it, i) => (
            <li key={i} className="wpwu__card" tabIndex={0}>
              <h3 className="wpwu__cardTitle">{it.title}</h3>
              <p className="wpwu__cardDesc">{it.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .wpwu { padding: 64px 20px; }
        .wpwu__container { max-width: 1100px; margin: 0 auto; }

        /* Header */
        .wpwu__header { text-align: center; max-width: 820px; margin: 0 auto 32px; }
        .wpwu__eyebrow {
          margin: 0;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-blue-medium);
          font-weight: 600;
        }
        .wpwu__title { margin: 6px 0 8px; font-size: 32px; line-height: 1.15; font-weight: 700; color: var(--color-black); }
        .wpwu__titleAccent { color: var(--color-blue-medium); }
        .wpwu__bar { display: inline-block; width: 96px; height: 4px; border-radius: 999px; background: var(--color-blue-medium); }
        .wpwu__subtitle { margin: 12px auto 0; font-size: 16px; line-height: 1.55; color: var(--color-black); opacity: 0.85; }

        /* Grid */
        .wpwu__grid {
          list-style: none;
          margin: 28px 0 0 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        /* Cards */
        .wpwu__card {
          background: var(--color-white);
          border: 2px solid var(--color-blue-medium);
          border-radius: 16px;
          padding: 18px;
          box-shadow: 0 6px 22px rgba(0,0,0,0.08);
          outline: none;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .wpwu__card:focus,
        .wpwu__card:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(0,0,0,0.12); }
        .wpwu__cardTitle { margin: 0 0 8px; font-size: 18px; line-height: 1.35; font-weight: 700; color: var(--color-blue-medium); }
        .wpwu__cardDesc { margin: 0; font-size: 15px; line-height: 1.6; color: var(--color-black); opacity: 0.9; }

        /* Responsive */
        @media (min-width: 768px) {
          .wpwu { padding: 84px 24px; }
          .wpwu__title { font-size: 42px; }
          .wpwu__grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .wpwu__card { padding: 22px; }
          .wpwu__cardTitle { font-size: 20px; }
        }
      `}</style>
    </section>
  )
}
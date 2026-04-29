import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, CloudDownload, Phone } from "lucide-react";
import { useRef } from "react";
import { usePageEffects } from "../hooks/usePageEffects";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function MotionReveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={`reveal ${className}`.trim()}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, copy, align = "center" }) {
  return (
    <MotionReveal className={`section-heading section-heading--${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </MotionReveal>
  );
}

function HeroForm({ ctaLabel = "Book a discovery call" }) {
  return (
    <div className="hero-form card-soft reveal">
      <p className="script-text">Not sure where to begin?</p>
      <h2>Start with a gentle conversation.</h2>
      <p>
        Tell us what your body has been experiencing, and our team will guide you toward the
        right next step.
      </p>
      <div className="form-stack">
        <input placeholder="Your Name" />
        <input placeholder="Phone Number" />
        <input placeholder="Email" />
        <input placeholder="What are you seeking support for?" />
      </div>
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={
          "inline-flex items-center justify-center gap-2 min-h-[3rem] px-6 rounded-full border border-transparent bg-[#7d3f0f] text-white transition-transform duration-200 font-sans text-[0.96rem] font-semibold hover:shadow-[0_12px_30px_rgba(52,35,15,0.14)]"
        }
      >
        {ctaLabel}
        <ArrowRight size={16} />
      </motion.button>
    </div>
  );
}

function HomeSections({ page }) {
  return (
    <>
      <section className="band band--olive" id="about">
        <div className="shell stack-xl">
          <SectionHeading
            eyebrow="What Samah Is"
            title="Wellness, brought back into harmony."
            copy="Not just another studio or spa, but a science-aware ecosystem for movement, restoration, energy, and belonging."
          />

          <div className="feature-chip-grid">
            {page.positioning.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.06} className="feature-chip card-soft">
                <div>
                  <p className="feature-chip__kicker">{item.kicker}</p>
                  <h3>{item.title}</h3>
                </div>
                <div className="feature-chip__visual" style={{ backgroundImage: item.visual }} />
              </MotionReveal>
            ))}
          </div>

          <MotionReveal className="intro-banner card-soft">
            <div>
              <p className="script-text">Introducing Samah Wellness House</p>
              <h3>A communal house for holistic wellbeing.</h3>
              <p>A deeply personalized model of care that helps people feel safe, clear, energized, and connected.</p>
            </div>
            <div className="intro-banner__image parallax" style={{ backgroundImage: page.communityPanorama }} />
          </MotionReveal>
        </div>
      </section>

      <section className="band">
        <div className="shell philosophy-grid">
          <MotionReveal className="philosophy-card" delay={0.05}>
            <div className="philosophy-card__image parallax" style={{ backgroundImage: page.heroImage }} />
          </MotionReveal>

          <SectionHeading
            eyebrow="The Philosophy Of Wa"
            title="Guided by Wa"
            copy="At the heart of Samah lies quiet harmony. The body softens, the mind clears, the energy lifts, and community becomes medicine."
          />

          <MotionReveal className="quote-stack card-soft">
            {page.waLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </MotionReveal>

          <MotionReveal className="philosophy-card philosophy-card--floating">
            <div className="philosophy-card__image parallax" style={{ backgroundImage: page.meditationImage }} />
          </MotionReveal>
        </div>
      </section>

      <section className="band band--paper">
        <div className="shell split-showcase">
          <MotionReveal className="split-showcase__visual">
            <div className="showcase-photo parallax" style={{ backgroundImage: page.forestCircle }} />
          </MotionReveal>
          <MotionReveal className="card-soft split-showcase__content">
            <p className="eyebrow">The 5 Samah Pillars</p>
            <h2>A trailblazer in integrative wellness.</h2>
            <div className="icon-list">
              {page.pillars.map((pillar) => (
                <div key={pillar.title} className="icon-list__item">
                  <div className="icon-list__symbol">{pillar.symbol}</div>
                  <div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="band band--beige" id="pathways">
        <div className="shell split-showcase split-showcase--reverse">
          <MotionReveal className="card-soft split-showcase__content">
            <h2>A living house is always evolving.</h2>
            <p>Discover what is unfolding next at Samah, from seasonal retreats to fresh workshops and new therapeutic offerings.</p>
            <div className="number-list">
              {page.whatsNew.map((item, index) => (
                <div key={item} className="number-list__item">
                  <span>/{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <a
              href="#events"
              className="inline-flex items-center justify-center gap-2 min-h-[3rem] px-6 rounded-full border border-transparent bg-[#999245] text-white transition-transform duration-200 font-sans text-[0.96rem] font-semibold hover:shadow-[0_12px_30px_rgba(52,35,15,0.14)]"
            >
              Explore what&apos;s new
              <ArrowRight size={16} />
            </a>
          </MotionReveal>
          <MotionReveal className="split-showcase__visual">
            <div className="showcase-photo parallax" style={{ backgroundImage: page.groupHug }} />
          </MotionReveal>
        </div>
      </section>

      <section className="band band--brown" id="events">
        <div className="shell">
          <SectionHeading
            eyebrow="Workshops & Retreats"
            title="Experiences that help you pause, reflect, and reconnect."
            copy="A rotating set of immersive circles, soulful workshops, and seasonal retreats designed for deep restoration."
          />
          <div className="event-grid">
            {page.events.map((event, index) => (
              <MotionReveal key={event.title} delay={index * 0.08} className="event-card">
                <div className="event-card__image parallax" style={{ backgroundImage: event.image }} />
                <span className="tag">{event.tag}</span>
                <div className="event-card__body">
                  <h3>{event.title}</h3>
                  <p>{event.copy}</p>
                  <small>{event.date}</small>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="shell stack-xl">
          <SectionHeading
            eyebrow="Four Ways To Indulge At Samah"
            title="Wellbeing can be structured. It can also be gently indulgent."
          />
          <div className="indulge-grid">
            {page.indulgence.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.06} className="card-soft indulge-card">
                <div className="indulge-card__image parallax" style={{ backgroundImage: item.image }} />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <a href={item.href}>Explore more</a>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--paper">
        <div className="shell split-showcase">
          <MotionReveal className="split-showcase__visual">
            <div className="showcase-photo parallax" style={{ backgroundImage: page.terraceMeditation }} />
          </MotionReveal>
          <MotionReveal className="card-soft split-showcase__content">
            <h2>What makes Samah different?</h2>
            <p className="script-text">Progress feels less temporary.</p>
            <div className="number-list">
              {page.differencePoints.map((item, index) => (
                <div key={item} className="number-list__item">
                  <span>/{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 min-h-[3rem] px-6 rounded-full border border-transparent bg-[#7d3f0f] text-white transition-transform duration-200 font-sans text-[0.96rem] font-semibold hover:shadow-[0_12px_30px_rgba(52,35,15,0.14)]"
            >
              Book a 15-minute call
              <ArrowRight size={16} />
            </a>
          </MotionReveal>
        </div>
      </section>

      <section className="band">
        <div className="shell stack-xl">
          <SectionHeading
            eyebrow="Why Samah"
            title="A different model of care"
            copy="See how Samah compares to fragmented wellness experiences and why integration changes the pace of healing."
          />
          <MotionReveal className="comparison-table card-soft">
            <div className="comparison-table__header">
              <span>Aspect</span>
              <span>Samah</span>
              <span>Traditional care</span>
            </div>
            {page.comparisonRows.map((row) => (
              <div key={row.aspect} className="comparison-table__row">
                <span>{row.aspect}</span>
                <span>{row.samah}</span>
                <span>{row.other}</span>
              </div>
            ))}
          </MotionReveal>
        </div>
      </section>

      <section className="band band--beige" id="stories">
        <div className="shell founder-banner card-soft">
          <MotionReveal className="founder-banner__image parallax" style={{ backgroundImage: page.founderImage }} />
          <MotionReveal className="founder-banner__copy">
            <h2>From our founder</h2>
            <p>Born from lived experience, Samah is the kind of space we once searched for and then chose to build.</p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 min-h-[3rem] px-6 rounded-full border border-transparent bg-[#7d3f0f] text-white transition-transform duration-200 font-sans text-[0.96rem] font-semibold hover:shadow-[0_12px_30px_rgba(52,35,15,0.14)]"
            >
              Begin your journey
              <ArrowRight size={16} />
            </a>
          </MotionReveal>
        </div>

        <div className="shell testimonial-layout" id="community">
          <MotionReveal className="testimonial-intro">
            <p className="eyebrow">Clients Feedback</p>
            <h2>What our community is experiencing</h2>
            <p>Movement, recovery, emotional wellbeing, and community living under one thoughtful roof.</p>
          </MotionReveal>

          <MotionReveal className="testimonial-card card-soft">
            <div className="testimonial-card__quote">“</div>
            <p>{page.testimonial.quote}</p>
            <h3>{page.testimonial.name}</h3>
            <span>{page.testimonial.city}</span>
          </MotionReveal>
        </div>

        <div className="shell people-grid">
          {page.communityCards.map((card, index) => (
            <MotionReveal key={card.title} delay={index * 0.06} className="people-card">
              <div className="people-card__image parallax" style={{ backgroundImage: card.image }} />
              <div className="people-card__body">
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>
    </>
  );
}

function OfferingsSections({ page }) {
  return (
    <>
      {page.dimensions.map((dimension, sectionIndex) => (
        <section className="band band--paper" key={dimension.title}>
          <div className="shell stack-lg">
            <div className="offering-head">
              <MotionReveal>
                <h2>{dimension.title}</h2>
              </MotionReveal>
              <MotionReveal delay={0.08}>
                <p className="offering-head__lead">{dimension.lead}</p>
                <p>{dimension.copy}</p>
              </MotionReveal>
            </div>

            <MotionReveal className="pill-row">
              {dimension.categories.map((item, index) => (
                <motion.button
                  key={item.name}
                  whileHover={{ y: -2 }}
                  className={`pill ${index === 0 ? "is-active" : ""}`}
                >
                  {item.name}
                </motion.button>
              ))}
            </MotionReveal>

            <div className="download-row reveal">
              <a href="#download" className="download-link">
                <CloudDownload size={18} />
                Download {dimension.downloadLabel}
              </a>
              <div className="carousel-buttons">
                <button aria-label="Previous"><ChevronLeft size={18} /></button>
                <button aria-label="Next"><ChevronRight size={18} /></button>
              </div>
            </div>

            <div className="program-grid">
              {dimension.categories.map((item, index) => (
                <MotionReveal key={item.name} delay={index * 0.06} className="program-card card-soft">
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="program-pricing">
                      {item.pricing.map((price) => (
                        <div key={price.label} className="pricing-box">
                          <span>{price.label}</span>
                          <strong>{price.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="program-card__image parallax" style={{ backgroundImage: item.image || page.sharedImage }} />
                </MotionReveal>
              ))}
            </div>

            {sectionIndex < page.dimensions.length - 1 ? <div className="section-divider" /> : null}
          </div>
        </section>
      ))}

      <section className="band">
        <div className="shell cta-inline">
          <p className="script-text">Join the Samah experiences today</p>
          <a href="#contact" className="cta-inline__link">
            <Phone size={20} />
            Speak to our team
          </a>
        </div>
      </section>
    </>
  );
}

function MembershipSections({ page }) {
  return (
    <>
      <section className="band">
        <div className="shell stack-xl">
          <SectionHeading title="What makes Samah memberships different" />
          <MotionReveal className="comparison-panels">
            <div className="comparison-panel card-soft">
              <h3>Most wellness studios offer</h3>
              {page.comparison.left.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div className="comparison-panel comparison-panel--accent card-soft">
              <h3>Samah membership includes</h3>
              {page.comparison.right.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="band band--brown">
        <div className="shell stack-xl">
          <SectionHeading
            title="The 4 Samah membership paths"
            copy="Designed to support different wellness journeys while preserving one integrated ecosystem."
          />

          <div className="membership-grid">
            {page.memberships.map((membership, index) => (
              <MotionReveal key={membership.title} delay={index * 0.08} className="membership-card card-soft">
                <h3>{membership.title}</h3>
                <p>{membership.copy}</p>
                <a href="#snapshot">View plan</a>
              </MotionReveal>
            ))}
          </div>

          <p className="membership-note">All memberships include discounted access to services.</p>

          <SectionHeading title="Snapshot of memberships" />

          <MotionReveal className="snapshot-table card-soft" id="snapshot">
            <div className="snapshot-table__header">
              {page.snapshot.columns.map((column) => (
                <span key={column}>{column}</span>
              ))}
            </div>
            {page.snapshot.rows.map((row) => (
              <div key={row.name} className="snapshot-table__row">
                <span>{row.name}</span>
                {row.values.map((value) => (
                  <span key={`${row.name}-${value}`}>{value}</span>
                ))}
              </div>
            ))}
          </MotionReveal>
        </div>
      </section>

      <section className="band band--paper">
        <div className="shell customize-grid">
          <MotionReveal className="customize-copy">
            <h2>Customize your membership</h2>
            <p>You can personalize your membership with thoughtful add-ons and focused support.</p>
            <div className="number-list">
              {page.customize.map((item, index) => (
                <div key={item} className="number-list__item">
                  <span>/{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal className="customize-form card-olive">
            <h3>Let us know the details</h3>
            <div className="form-stack">
              <input placeholder="Your Name" />
              <input placeholder="Phone Number" />
              <input placeholder="Email" />
              <input placeholder="Membership requirements" />
            </div>
            <button className="inline-flex items-center justify-center gap-2 min-h-[3rem] px-6 rounded-full border border-transparent bg-white text-[#3d4019] transition-transform duration-200 font-sans text-[0.96rem] font-semibold hover:shadow-[0_12px_30px_rgba(52,35,15,0.14)]">
              Submit
              <ArrowRight size={16} />
            </button>
          </MotionReveal>
        </div>
      </section>

      <section className="band">
        <div className="shell stack-xl">
          <SectionHeading title="Who Samah memberships are for" />
          <div className="audience-grid">
            {page.audiences.map((audience, index) => (
              <MotionReveal key={audience.title} delay={index * 0.06} className="audience-card">
                <span>{audience.symbol}</span>
                <h3>{audience.title}</h3>
              </MotionReveal>
            ))}
          </div>

          <SectionHeading title="The Samah community" />

          <div className="community-mosaic">
            {page.community.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.05} className={`mosaic-card mosaic-card--${item.size}`}>
                <div className="mosaic-card__copy">
                  <h3>{item.title}</h3>
                  {item.copy ? <p>{item.copy}</p> : null}
                </div>
                <div className="mosaic-card__image parallax" style={{ backgroundImage: item.image }} />
              </MotionReveal>
            ))}
          </div>

          <div className="cta-inline">
            <p className="script-text">Join Samah living today</p>
            <div className="cta-inline__actions">
              <a href="#snapshot">View membership options</a>
              <a href="#download">Download full membership deck</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PageHero({ page }) {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <MotionReveal className="hero-visual" delay={0.05}>
          <div className="hero-image parallax" style={{ backgroundImage: page.heroImage }} />
          <div className="hero-copy">
            <h1>{page.heroTitle}</h1>
            <p>{page.heroBody}</p>
          </div>
        </MotionReveal>
        <HeroForm ctaLabel={page.heroCta} />
      </div>
    </section>
  );
}

export default function PageBuilder({ page }) {
  const scope = useRef(null);
  usePageEffects(scope);

  return (
    <div ref={scope} className="page-root">
      <PageHero page={page} />
      {page.type === "home" ? <HomeSections page={page} /> : null}
      {page.type === "offerings" ? <OfferingsSections page={page} /> : null}
      {page.type === "memberships" ? <MembershipSections page={page} /> : null}
    </div>
  );
}

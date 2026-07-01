import type { JSX } from 'react';
import { SiteNav, SiteFooter, FadeIn, TypewriterHeadline } from '@leader/marketing-ui';
import { HqCommandMock } from './_marketing/mocks';

const APP_URL = 'https://app.leaderhq.io';

const HQ_PHRASES = [
  'at an event.',
  'at a conference.',
  'at a door.',
  'at a home show.',
  'in a parking lot.',
  'at a trade show.',
  'at a sales call.',
] as const;

const SUITE_PRODUCTS = [
  {
    suffix: 'Leads',
    href: 'https://leaderleads.io',
    live: true,
    desc: 'Premium digital business card with NFC, QR, and Web Share for network builders.',
    feeds: 'Card views · QR scans · New contacts added',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    suffix: 'Send',
    href: '#demo',
    live: false,
    desc: 'Email marketing & CRM built for direct sales sequences and recruiting funnels.',
    feeds: 'Open rates · Sequence performance · Lead pipeline',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    suffix: 'Cal',
    href: '#demo',
    live: false,
    desc: 'Smart scheduling with leadership-specific booking flows and VIP queues.',
    feeds: 'Booking rate · Show rate · Conversion rate',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    suffix: 'Streams',
    href: '#demo',
    live: false,
    desc: 'Social media scheduling with compliance guardrails and rank celebration automation.',
    feeds: 'Engagement rate · Post performance · Best timing',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
      </svg>
    ),
  },
];

const FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'The Suite', href: '#suite' },
      { label: 'Book a Demo', href: '#demo' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Security & GDPR', href: '/security' },
    ],
  },
  {
    heading: 'Live Now',
    links: [
      { label: 'LeaderLeads →', href: 'https://leaderleads.io', external: true },
    ],
  },
];

export default function LandingPage(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SiteNav
        productSuffix="HQ"
        links={[
          { label: 'The Suite', href: '#suite' },
          { label: 'Book a Demo', href: '#demo' },
        ]}
        ctaLabel="Book a Demo"
        ctaHref="#demo"
        loginHref={`${APP_URL}/login`}
      />

      {/* Announcement banner */}
      <div style={{ background: '#06163E', color: '#fff', textAlign: 'center', padding: '.65rem 1rem', fontSize: '.875rem', fontWeight: 500 }}>
        The first product in the Suite is Live —{' '}
        <a href="https://leaderleads.io" style={{ color: '#5CAC23', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
          Visit LeaderLeads.io →
        </a>
      </div>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden
            style={{ background: 'radial-gradient(80% 520px at 50% -10%, color-mix(in srgb, #06163E 9%, transparent), transparent)' }}
          />
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-8 md:px-6 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-12">
            <FadeIn>
              <TypewriterHeadline
                staticPrefix="Never lose a lead"
                phrases={HQ_PHRASES}
                className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
              />
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
                LeaderHQ reads your comp plan, connects your tools, and tells you exactly who to call and what to do — every single morning.
              </p>
              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <a
                  href="#demo"
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy sm:w-auto"
                >
                  Book a Demo
                </a>
                <a
                  href="#suite"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl px-4 text-base font-semibold text-brand-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
                >
                  See the Suite →
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={120} className="flex justify-center lg:justify-end">
              <HqCommandMock />
            </FadeIn>
          </div>
        </section>

        {/* Proof strip */}
        <FadeIn as="section" className="border-y border-zinc-100 bg-zinc-50 py-8">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { num: '6–8', lbl: 'Apps collapsed into one' },
                { num: 'AI', lbl: 'Comp plan intelligence' },
                { num: 'Daily', lbl: 'Actionable priorities' },
                { num: 'Real-time', lbl: 'Downline visibility' },
              ].map((s) => (
                <div key={s.lbl} className="text-center">
                  <div className="text-3xl font-extrabold text-brand-navy">{s.num}</div>
                  <div className="mt-1 text-sm text-zinc-500">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Suite */}
        <section id="suite" className="scroll-mt-24 border-y border-zinc-100" style={{ background: 'color-mix(in srgb, #06163E 5%, #fff)' }}>
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <FadeIn>
              <div className="mb-12 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">The Leader Suite</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                  One command center.<br />Every tool connected.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
                  LeaderHQ is the intelligence layer on top of the entire Leader Suite. Each app contributes data. LeaderHQ turns it into your daily action list.
                </p>
              </div>
            </FadeIn>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SUITE_PRODUCTS.map((p, i) => (
                <FadeIn key={p.suffix} delay={i * 80}>
                  <a
                    href={p.href}
                    {...(p.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group block h-full rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition hover:border-brand-green/30 hover:shadow-md"
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-brand-green" style={{ background: 'rgba(92,172,35,.18)' }}>
                      {p.icon}
                    </div>
                    <div className="mb-1 flex items-center gap-2">
                      <div className="text-base font-bold text-brand-navy">
                        Leader<span className="text-brand-green">{p.suffix}</span>
                      </div>
                      {p.live ? (
                        <span className="rounded-full bg-brand-green px-2 py-0.5 text-[10px] font-bold text-white">LIVE</span>
                      ) : (
                        <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] font-semibold text-zinc-400">COMING SOON</span>
                      )}
                    </div>
                    <p className="mb-3 text-sm leading-relaxed text-zinc-600">{p.desc}</p>
                    <p className="text-xs text-zinc-400"><span className="font-semibold">Feeds:</span> {p.feeds}</p>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Demo CTA */}
        <section id="demo" className="scroll-mt-24" style={{ background: 'linear-gradient(160deg, #06163E, #030b22)' }}>
          <div className="mx-auto max-w-4xl px-4 py-24 text-center md:px-6">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-green">See it in action</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to see LeaderHQ<br />work with your team?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
                Book a personalized demo and we&apos;ll show you exactly how LeaderHQ would work for your comp plan, your downline, and your suite of tools.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={`${APP_URL}/join`}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-8 text-base font-semibold text-white shadow-lg shadow-black/30 transition hover:brightness-110"
                >
                  Book a Demo
                </a>
                <a
                  href={`${APP_URL}/join`}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/20 px-8 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  Start Free Instead
                </a>
              </div>
              <p className="mt-5 text-sm text-zinc-500">No credit card required. Free to join.</p>
            </FadeIn>
          </div>
        </section>
      </main>

      <SiteFooter productSuffix="HQ" columns={FOOTER_COLUMNS} />
    </div>
  );
}

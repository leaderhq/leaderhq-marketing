import type { JSX } from 'react';
import { SiteNav, SiteFooter, FadeIn, TypewriterHeadline } from '@leader/marketing-ui';
import { HqCommandMock } from '../_marketing/mocks';

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

const FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Action Intelligence', href: '#intelligence' },
      { label: 'Leader Suite', href: '#suite' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Network Marketing', href: '/for/network-marketing' },
      { label: 'Conferences & Events', href: '/for/conferences' },
      { label: 'Sales Teams', href: '/for/sales-teams' },
      { label: 'Blog & Resources', href: '/blog' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About LeaderHQ', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Security & GDPR', href: '/security' },
    ],
  },
];

const SUITE_PRODUCTS = [
  {
    suffix: 'Send',
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
    desc: 'Social media scheduling with compliance guardrails and rank celebration automation.',
    feeds: 'Engagement rate · Post performance · Best timing',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    suffix: 'Leads',
    desc: 'Premium digital business card with NFC, QR, and Web Share for network builders.',
    feeds: 'Card views · QR scans · New contacts added',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
];

const INTELLIGENCE = [
  {
    tag: 'Rank Advancement',
    color: '#5CAC23',
    msg: `"3 people in your Silver leg are within 200 PV of qualifying. Contact window closes in 9 days."`,
    sub: 'LeaderHQ reads your qualification window from your comp plan and counts down in real time. No spreadsheet required.',
    sources: ['Comp Plan AI', 'Downline Data'],
  },
  {
    tag: 'Coaching Alert',
    color: '#FDE047',
    msg: `"Your team show rate dropped from 67% to 38% this month. Review your post-booking confirmation sequence."`,
    sub: 'Cross-references LeaderCal booking data with show data and surfaces the coaching conversation before people go quiet.',
    sources: ['LeaderCal'],
  },
  {
    tag: 'Content Signal',
    color: '#93B5F6',
    msg: `"Your Sunday posts outperform daily content by 3.2x. Recruiting emails have 3x the open rate of social posts."`,
    sub: 'Compares performance across channels so you know where to spend your energy — and where to stop.',
    sources: ['LeaderStreams', 'LeaderSend'],
  },
  {
    tag: 'Recruiting Velocity',
    color: '#86EFAC',
    msg: `"14 new contacts entered your pipeline from LeaderLeads this week — your highest in 60 days. Keep your follow-up sequence running."`,
    sub: 'Tracks top-of-funnel momentum from your digital card and links it to downstream conversion data.',
    sources: ['LeaderLeads', 'LeaderSend'],
  },
];

const WHO = [
  {
    rank: 'Diamond / Executive',
    title: 'The Organization View',
    sub: `You're running a team of thousands. LeaderHQ shows you the health of your entire downline — rank advancement across every leg, dead legs identified early, and volume gaps surfaced before the month ends.`,
    bullets: [
      'Full downline rank advancement map',
      'Dead leg identification',
      'Cross-leg volume comparisons',
      'Suite performance at scale',
    ],
  },
  {
    rank: 'Sales Director',
    title: 'The Recruiting View',
    sub: `You live and die by the pipeline. LeaderHQ connects your recruiting funnel from first contact to new distributor — and tells you exactly where leads are falling out.`,
    bullets: [
      'Recruiting funnel stage visibility',
      'Show rate & conversion tracking',
      'Email vs. social performance',
      'Contact pipeline from LeaderLeads',
    ],
  },
  {
    rank: 'Team Leader',
    title: 'The Coaching View',
    sub: `Your job is to activate the people right below you. LeaderHQ surfaces early warning signals before your team members go inactive — so you can reach out before it's too late.`,
    bullets: [
      'Activity decline alerts',
      'Who needs a call today',
      'PV gap to qualification',
      'Momentum & streak tracking',
    ],
  },
];

export default function HomePage(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SiteNav
        productSuffix="HQ"
        links={[
          { label: 'How It Works', href: '#how-it-works' },
          { label: 'Suite', href: '#suite' },
          { label: 'Solutions', href: '#' },
        ]}
        ctaLabel="Get LeaderHQ"
        ctaHref={`${APP_URL}/join`}
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
                  href={`${APP_URL}/join`}
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy sm:w-auto"
                >
                  Get LeaderHQ
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl px-4 text-base font-semibold text-brand-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
                >
                  See how it works
                </a>
              </div>
              <p className="mt-5 text-sm text-zinc-500">Free to join. No credit card required.</p>
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
                { num: '6-8', lbl: 'Apps collapsed into one' },
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

        {/* Pain */}
        <section className="border-y border-zinc-100" style={{ background: 'color-mix(in srgb, #06163E 5%, #fff)' }}>
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                  Your business is spread across 6 tabs.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600">
                  Top leaders log into a back-office, a CRM, a scheduler, a social tool, and a vCard app every day just to figure out what to focus on. That&apos;s not leadership. That&apos;s administration.
                </p>
              </div>
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Before */}
              <FadeIn className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-red-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                  Before LeaderHQ
                </div>
                <div className="space-y-2.5">
                  {[
                    { bg: '#71717A', abbr: 'BO', label: 'Company Back-Office — check volume & rank' },
                    { bg: '#1862EA', abbr: 'LS', label: 'LeaderSend — check emails, open rates' },
                    { bg: '#5CAC23', abbr: 'LC', label: 'LeaderCal — check bookings, show rate' },
                    { bg: '#06163E', abbr: 'St', label: 'LeaderStreams — check posts, engagement' },
                    { bg: '#3F3F46', abbr: 'LL', label: 'LeaderLeads — check card scans' },
                    { bg: '#DC2626', abbr: '?', label: 'Spreadsheet — figure out who to call' },
                  ].map((item) => (
                    <div key={item.abbr} className="flex items-center gap-3 text-sm text-zinc-700">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white" style={{ background: item.bg }}>{item.abbr}</div>
                      {item.label}
                    </div>
                  ))}
                </div>
              </FadeIn>
              {/* After */}
              <FadeIn delay={80} className="rounded-2xl border border-brand-green/20 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-brand-green">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  With LeaderHQ
                </div>
                <div className="space-y-3">
                  {[
                    { bold: 'Open LeaderHQ.', rest: 'See your 3 priorities for the day — no tabs, no spreadsheets.' },
                    { bold: 'Rank Alerts.', rest: 'Know exactly who is close to advancing and how many days you have.' },
                    { bold: 'Coaching Signals.', rest: 'See who on your team needs help before they go quiet.' },
                    { bold: 'Content Intelligence.', rest: `Know which channel is working — and which isn't.` },
                    { bold: 'Close your laptop.', rest: `You've done more strategic thinking than most leaders do all week.` },
                  ].map((item) => (
                    <div key={item.bold} className="flex items-start gap-3 text-sm text-zinc-700">
                      <div className="mt-0.5 text-base font-bold text-brand-green">→</div>
                      <span><strong className="font-semibold text-zinc-900">{item.bold}</strong> {item.rest}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="scroll-mt-24" style={{ background: 'color-mix(in srgb, #5CAC23 6%, #fff)' }}>
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                  Up and running in under 10 minutes.
                </h2>
                <p className="mt-4 text-lg text-zinc-600">
                  No IT team. No complex setup. Just your comp plan PDF, your downline export, and your Leader Suite apps.
                </p>
              </div>
            </FadeIn>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  n: '1', title: 'Upload Your Comp Plan',
                  desc: `Upload your company's compensation plan as a PDF. LeaderHQ's AI extracts your rank structure, volume requirements, qualification windows, and leg rules — automatically.`,
                  detail: 'Supports: Binary, unilevel, matrix, and hybrid plans. Works with any MLM company. Your data never leaves your account.',
                },
                {
                  n: '2', title: 'Connect Your Data',
                  desc: 'Export your downline report from your company back-office as a CSV — or connect your Leader Suite apps directly. LeaderHQ maps everything automatically.',
                  detail: 'Connects to: LeaderSend, LeaderCal, LeaderStreams, LeaderLeads, and your company back-office export.',
                },
                {
                  n: '3', title: 'Get Daily Actions',
                  desc: 'Wake up to a prioritized list of actions — who to call, what to fix, where to focus. Not charts. Not vanity metrics. Real decisions, made easy.',
                  detail: 'Refreshes: Daily with new data. Alerts fire the moment something changes in your downline or your tools.',
                },
              ].map((step, i) => (
                <FadeIn key={step.n} delay={i * 80}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green/10 text-lg font-extrabold text-brand-green">{step.n}</div>
                  <h3 className="mt-4 text-lg font-bold text-brand-navy">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-zinc-600">{step.desc}</p>
                  <p className="mt-2 text-sm text-zinc-500">{step.detail}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Action Intelligence */}
        <section id="intelligence" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 md:px-6 md:py-24">
          <FadeIn>
            <div className="mb-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Action Intelligence</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                Not dashboards. Decisions.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
                Other tools show you what happened. LeaderHQ tells you what to do about it — in plain language, with the right urgency.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-2">
            {INTELLIGENCE.map((item, i) => (
              <FadeIn key={item.tag} delay={i * 80} className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: item.color + '18', color: item.color }}>
                  {item.tag}
                </div>
                <p className="mb-3 text-base font-medium italic text-zinc-800">{item.msg}</p>
                <p className="text-sm leading-relaxed text-zinc-600">{item.sub}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.sources.map((src) => (
                    <span key={src} className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs text-zinc-500">{src}</span>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

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
                <FadeIn key={p.suffix} delay={i * 80} className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-brand-green" style={{ background: 'rgba(92,172,35,.18)' }}>
                    {p.icon}
                  </div>
                  <div className="mb-2 text-base font-bold text-brand-navy">
                    Leader<span className="text-brand-green">{p.suffix}</span>
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-zinc-600">{p.desc}</p>
                  <p className="text-xs text-zinc-400"><span className="font-semibold">Feeds:</span> {p.feeds}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Who */}
        <section id="who" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 md:px-6 md:py-24">
          <FadeIn>
            <div className="mb-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Who It&apos;s For</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                Built for leaders who are done guessing.
              </h2>
              <p className="mt-4 text-lg text-zinc-600">
                Every level of field leader gets a view built specifically for what they need to focus on.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {WHO.map((w, i) => (
              <FadeIn key={w.rank} delay={i * 80} className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
                <div className="mb-1 text-xs font-bold uppercase tracking-wider text-brand-green">{w.rank}</div>
                <h3 className="mb-3 text-lg font-bold text-brand-navy">{w.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-zinc-600">{w.sub}</p>
                <ul className="space-y-2">
                  {w.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-zinc-700">
                      <svg className="mt-0.5 shrink-0 text-brand-green" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{ background: 'linear-gradient(160deg, #06163E, #030b22)' }}>
          <div className="mx-auto max-w-6xl px-4 py-20 text-center md:px-6 md:py-24">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your best leaders deserve<br />better than a spreadsheet.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
                Give your top performers a command center that thinks alongside them — every morning, every rank cycle, every season.
              </p>
              <a
                href={`${APP_URL}/signup`}
                className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110"
              >
                Get LeaderHQ
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      <SiteFooter productSuffix="HQ" columns={FOOTER_COLUMNS} />
    </div>
  );
}

import type { Metadata } from 'next';
import { SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';
import { MarketingIcon } from '@/app/_marketing/icons';

export const metadata: Metadata = {
  title: 'About — LeaderHQ',
  description:
    'LeaderHQ is the intelligence layer for the Leader Suite — built by the people who lived the problem of losing momentum, missing rank windows, and guessing who to call next.',
  alternates: { canonical: '/about' },
};

const APP_URL = 'https://app.leaderhq.io';

const VALUES = [
  {
    icon: 'handshake',
    title: 'Relationships over reports',
    body: 'A dashboard is infrastructure. A conversation is the point. Everything we build is designed to surface the right person to call at the right moment — not to replace judgment with charts.',
  },
  {
    icon: 'bolt',
    title: 'Simple by default',
    body: "If it requires training, it won't get used. Every feature in LeaderHQ has to work for a field leader who's tired, moving fast, and has 10 minutes before their next team call.",
  },
  {
    icon: 'gift',
    title: 'Built for the field',
    body: 'We built LeaderHQ because enterprise BI tools were never designed for network marketing. We know the comp plans, the rank cycles, and the pressure of a closing month.',
  },
] as const;

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SiteNav
        productSuffix="HQ"
        links={[
          { label: 'How It Works', href: '/#how-it-works' },
          { label: 'Suite', href: '/#suite' },
          { label: 'Solutions', href: '#' },
        ]}
        ctaLabel="Get LeaderHQ"
        ctaHref={`${APP_URL}/join`}
        loginHref={`${APP_URL}/login`}
      />
      <main className="flex-1">
        {/* Hero */}
        <section
          className="text-white"
          style={{ background: '#0d1b2e' }}
        >
          <div className="mx-auto max-w-[820px] px-4 py-24 sm:px-6">
            <FadeIn>
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                We built this because
                <br />
                we lived the problem.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
                LeaderHQ is the intelligence layer for the Leader Suite — a set
                of tools built for the people who lead, sell, and build in the
                real world. Not the conference room. The conference floor, the
                expo hall, and the closing push at the end of rank week.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-[820px] px-4 py-20 sm:px-6 sm:py-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              The story behind the product
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-zinc-600">
              Network marketing and direct sales share one operational problem:
              the most important decisions — who to call, which leg to focus on,
              where volume is falling — are buried across six different apps.
              Leaders waste hours every morning just assembling the picture. Then
              they have to figure out what to do about it.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              LeaderHQ was built to close that gap. Not with another dashboard
              that shows you what happened. With a command center that tells you
              what to do about it — in plain language, with the right urgency,
              before the window closes.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              We&apos;re part of the Leader Suite of software tools for field
              leaders. LeaderHQ is the intelligence layer on top of all of it —
              reading every connected tool and translating the data into three
              things to do today.
            </p>
            <div className="mt-10">
              <a
                href={`${APP_URL}/join`}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
              >
                Get LeaderHQ →
              </a>
            </div>
          </FadeIn>
        </section>

        {/* Values */}
        <section
          className="border-y border-zinc-100"
          style={{ background: 'color-mix(in srgb, #0d1b2e 4%, #fff)' }}
        >
          <div className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
            <FadeIn>
              <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                What we stand for
              </h2>
            </FadeIn>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {VALUES.map((v, i) => (
                <FadeIn
                  key={v.title}
                  delay={i * 80}
                  className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                    <MarketingIcon name={v.icon} size={24} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-brand-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-zinc-600">{v.body}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Suite CTA */}
        <section className="mx-auto max-w-[560px] px-4 py-20 text-center sm:px-6 sm:py-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Part of the Leader Suite
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              LeaderHQ is the command center. Leader Suite tools — LeaderLeads,
              LeaderSend, LeaderCal, LeaderStreams — feed it the data. Together
              they give field leaders a complete picture of their business and
              a clear list of what to do about it.
            </p>
            <a
              href={`${APP_URL}/join`}
              className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-navy px-6 text-base font-semibold text-white shadow-md transition hover:brightness-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
            >
              Get LeaderHQ Free
            </a>
          </FadeIn>
        </section>
      </main>
      <SiteFooter
        productSuffix="HQ"
        columns={[
          { heading: 'Product', links: [{ label: 'How It Works', href: '/#how-it-works' }, { label: 'Action Intelligence', href: '/#intelligence' }, { label: 'Leader Suite', href: '/#suite' }, { label: 'Pricing', href: '/pricing' }] },
          { heading: 'Solutions', links: [{ label: 'Network Marketing', href: '/for/network-marketing' }, { label: 'Conferences & Events', href: '/for/conferences' }, { label: 'Sales Teams', href: '/for/sales-teams' }] },
          { heading: 'Company', links: [{ label: 'About LeaderHQ', href: '/about' }, { label: 'Contact', href: '/contact' }, { label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms of Service', href: '/terms' }, { label: 'Security & GDPR', href: '/security' }] },
        ]}
      />
    </div>
  );
}

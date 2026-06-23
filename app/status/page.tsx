import type { Metadata } from 'next';
import { SuiteBar, SiteNav, SiteFooter } from '@leader/marketing-ui';
import { StatusBoard } from './status-board';

const APP_URL = 'https://app.leaderhq.io';

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

export const metadata: Metadata = {
  title: 'System Status — Leader Suite',
  description: 'Real-time status for Leader Suite services.',
  robots: { index: false },
};

export default function StatusPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SuiteBar appUrl={APP_URL} />
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
      <main className="flex-1">
        <StatusBoard />
      </main>
      <SiteFooter productSuffix="HQ" columns={FOOTER_COLUMNS} />
    </div>
  );
}

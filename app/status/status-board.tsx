'use client';

import { useState, useEffect, useCallback } from 'react';

interface Service {
  id: string;
  name: string;
  active: boolean;
  status: string;
  updatedAt: string;
  incidents: Incident[];
}

interface Incident {
  id: string;
  serviceId: string;
  title: string;
  body: string;
  state: 'investigating' | 'monitoring' | 'resolved';
  createdAt: string;
}

interface ApiResponse {
  services: Service[];
  incidents: Incident[];
}

const BLOCK_COUNT = 48;

const STATUS_COLOR: Record<string, string> = {
  operational: '#5CAC23',
  degraded:    '#F59E0B',
  outage:      '#EF4444',
};

const STATUS_LABEL: Record<string, string> = {
  operational: 'Operational',
  degraded:    'Degraded',
  outage:      'Outage',
};

const STATUS_TEXT_CLS: Record<string, string> = {
  operational: 'text-green-600',
  degraded:    'text-amber-500',
  outage:      'text-red-500',
};

function overallStatus(services: Service[]) {
  const active = services.filter(s => s.active);
  if (active.some(s => s.status === 'outage'))   return 'outage';
  if (active.some(s => s.status === 'degraded')) return 'degraded';
  return 'operational';
}

const BANNER: Record<string, { bg: string; dot: string; title: string; sub: string }> = {
  operational: { bg: 'bg-green-50 border border-green-200',  dot: 'bg-green-500',  title: 'All systems operational',  sub: 'No issues detected — last checked just now' },
  degraded:    { bg: 'bg-amber-50 border border-amber-200',  dot: 'bg-amber-500',  title: 'Degraded performance',     sub: 'Some services are experiencing slowdowns' },
  outage:      { bg: 'bg-red-50   border border-red-200',    dot: 'bg-red-500',    title: 'Service disruption',       sub: 'We are aware and actively investigating' },
};

function UptimeBar({ status, active }: { status: string; active: boolean }) {
  const color = active ? (STATUS_COLOR[status] ?? STATUS_COLOR.operational) : '#E4E4E7';
  const opacity = active ? 1 : 0.35;
  return (
    <div style={{ display: 'flex', gap: 3, width: '100%', opacity }}>
      {Array.from({ length: BLOCK_COUNT }).map((_, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: 28,
            borderRadius: 4,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
}

function ServiceRow({ svc }: { svc: Service }) {
  const labelCls = STATUS_TEXT_CLS[svc.status] ?? STATUS_TEXT_CLS.operational;
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: '#06163E' }}>{svc.name}</span>
        <span className={`text-sm font-semibold ${labelCls}`}>
          {svc.active ? (STATUS_LABEL[svc.status] ?? 'Operational') : 'Coming soon'}
        </span>
      </div>
      <UptimeBar status={svc.status} active={svc.active} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4, fontSize: 11, color: '#9CA3AF' }}>
        <span>24 hours ago</span>
        {svc.active && <span>100% uptime</span>}
        <span>now</span>
      </div>
    </div>
  );
}

export function StatusBoard() {
  const [data,        setData]        = useState<ApiResponse | null>(null);
  const [lastChecked, setLastChecked] = useState('');
  const [error,       setError]       = useState(false);

  const load = useCallback(async () => {
    try {
      const res = await fetch('/api/status', { cache: 'no-store' });
      if (!res.ok) throw new Error('non-ok');
      const json: ApiResponse = await res.json();
      setData(json);
      setError(false);
      setLastChecked(
        new Date().toLocaleString('en-US', {
          month: 'long', day: 'numeric', year: 'numeric',
          hour: 'numeric', minute: '2-digit',
        }),
      );
    } catch {
      setError(true);
    }
  }, []);

  useEffect(() => {
    load();
    const id = setInterval(load, 60_000);
    return () => clearInterval(id);
  }, [load]);

  if (!data && !error) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 16px' }}>
        <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-brand-green border-t-transparent" />
      </div>
    );
  }

  if (error && !data) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 16px', color: '#71717A' }}>
        Unable to load status — please refresh.
      </div>
    );
  }

  const services = data!.services;
  const incidents = data!.incidents;
  const active  = services.filter(s => s.active);
  const coming  = services.filter(s => !s.active);
  const overall = overallStatus(services);
  const banner  = BANNER[overall];

  return (
    <div style={{ maxWidth: 880, margin: '0 auto', padding: '40px 24px 60px' }}>

      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#5CAC23', marginBottom: 4 }}>
          LEADERHQ.IO/STATUS
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 900, color: '#06163E', lineHeight: 1.1 }}>
            Leader Suite Status
          </h1>
          {lastChecked && (
            <div style={{ textAlign: 'right', fontSize: 13, color: '#9CA3AF', lineHeight: 1.5 }}>
              <div>Updated</div>
              <div>{lastChecked}</div>
            </div>
          )}
        </div>
      </div>

      {/* Overall banner */}
      <div className={`${banner.bg} rounded-2xl`} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', marginBottom: 32 }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', flexShrink: 0 }} className={banner.dot} />
        <div>
          <p style={{ fontWeight: 600, color: '#111827' }}>{banner.title}</p>
          <p style={{ fontSize: 13, color: '#6B7280', marginTop: 2 }}>{banner.sub}</p>
        </div>
      </div>

      {/* Active incidents */}
      {incidents.length > 0 && (
        <div style={{ marginBottom: 28 }}>
          {incidents.map(inc => (
            <div key={inc.id} style={{ border: '1px solid #E4E4E7', borderRadius: 16, overflow: 'hidden', marginBottom: 12, background: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 20px', borderBottom: '1px solid #F4F4F5' }}>
                <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 10px', borderRadius: 9999, background: '#FEF3C7', color: '#92400E', textTransform: 'capitalize' }}>
                  {inc.state}
                </span>
                <span style={{ fontWeight: 600, fontSize: 14, color: '#111827' }}>{inc.title}</span>
              </div>
              <div style={{ padding: '14px 20px' }}>
                <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>{inc.body}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Active services */}
      {active.length > 0 && (
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9CA3AF', marginBottom: 16 }}>
            Active Services
          </p>
          {active.map(svc => <ServiceRow key={svc.id} svc={svc} />)}
        </div>
      )}

      {/* Coming soon */}
      {coming.length > 0 && (
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9CA3AF', marginBottom: 16 }}>
            Coming Soon
          </p>
          {coming.map(svc => <ServiceRow key={svc.id} svc={svc} />)}
        </div>
      )}

    </div>
  );
}

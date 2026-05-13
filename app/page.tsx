"use client";

import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis,
  Tooltip, ResponsiveContainer, Cell
} from "recharts";
import {
  Flame, Star, Headphones, Eye,
  Disc3, MapPin, Zap, Radio, PlayCircle, Target,
  Mic, Sparkles, Users, Camera, Video
} from "lucide-react";

const LIME    = "#39ff14";
const MAGENTA = "#ff00ff";
const YELLOW  = "#ffe600";
const BLACK   = "#0a0a0a";

const catalogData = [
  { track: "How To Step",  year: 2022, views: 295, era: "pre" },
  { track: "Talm Bout",    year: 2024, views: 76,  era: "geffen" },
  { track: "Left & Right", year: 2023, views: 53,  era: "pre" },
  { track: "Silly Rabbit", year: 2024, views: 41,  era: "geffen" },
  { track: "Demon Time",   year: 2023, views: 28,  era: "pre" },
];

const streamData = [
  { w: "W0",  talm: 0,   silly: 0,   combined: 0 },
  { w: "W2",  talm: 18,  silly: 0,   combined: 18 },
  { w: "W4",  talm: 42,  silly: 0,   combined: 42 },
  { w: "W6",  talm: 75,  silly: 0,   combined: 75 },
  { w: "W8",  talm: 92,  silly: 70,  combined: 162 },
  { w: "W10", talm: 105, silly: 160, combined: 265 },
  { w: "W12", talm: 115, silly: 250, combined: 365 },
];

function GlowBlob({ color, className }: { color: string; className: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-10 pointer-events-none ${className}`}
      style={{ background: color }}
    />
  );
}

function TapeLabel({ children, rotate = "-rotate-1", bg = YELLOW }: {
  children: React.ReactNode; rotate?: string; bg?: string;
}) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-black tracking-widest uppercase ${rotate}`}
      style={{
        fontFamily: "var(--font-anton), 'Arial Black', sans-serif",
        background: bg,
        color: bg === "#ffffff" || bg === YELLOW ? BLACK : bg === LIME ? BLACK : "#fff",
        boxShadow: "3px 3px 0 rgba(0,0,0,0.8)",
      }}
    >
      {children}
    </span>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-black tracking-[0.25em] uppercase mb-4"
      style={{ fontFamily: "'Anton', 'Arial Black', sans-serif", color: LIME }}
    >
      {children}
    </p>
  );
}

function StatCard({
  icon: Icon, value, label, sub, accent,
}: {
  icon: React.ElementType; value: string; label: string; sub: string; accent: string;
}) {
  return (
    <div
      className="relative p-5 border-2 border-white/10 flex flex-col gap-2 hover:-translate-y-1 transition-transform duration-200"
      style={{ background: "#111", borderTopColor: accent, borderTopWidth: 3 }}
    >
      <Icon size={20} style={{ color: accent }} />
      <div
        className="text-4xl font-black leading-none"
        style={{ fontFamily: "'Anton', 'Arial Black', sans-serif", color: accent }}
      >{value}</div>
      <div className="text-sm font-semibold text-white">{label}</div>
      <div className="text-xs text-white/40">{sub}</div>
    </div>
  );
}

const D = { fontFamily: "var(--font-anton), 'Arial Black', sans-serif" };

export default function Page() {
  return (
    <div className="min-h-screen" style={{ background: BLACK, color: "#f0f0f0" }}>

      {/* ── 1. STICKY NAV ─────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md"
        style={{ background: "rgba(10,10,10,0.95)" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-14 gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <span
              className="w-8 h-8 flex items-center justify-center text-xs font-black rotate-3 shrink-0"
              style={{ ...D, background: LIME, color: BLACK }}
            >JB</span>
            <span className="text-xs font-semibold tracking-widest uppercase hidden sm:block text-white/70">
              Juvenile Baby × Geffen/UMG
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-widest uppercase text-white/50">
            {[
              ["Numbers","#numbers"],
              ["Thesis","#thesis"],
              ["Strategy","#strategy"],
              ["Timeline","#timeline"],
              ["The Ask","#the-ask"],
            ].map(([l, h]) => (
              <a key={l} href={h} className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
          <a
            href="#the-ask"
            className="text-xs font-black tracking-widest uppercase px-4 py-2 transition-all duration-200 hover:scale-105 shrink-0"
            style={{ ...D, background: LIME, color: BLACK }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = MAGENTA;
              el.style.color = "#fff";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = LIME;
              el.style.color = BLACK;
            }}
          >
            Scale It →
          </a>
        </div>
      </nav>

      {/* ── 2. HERO ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 md:px-8 pt-20 pb-24 max-w-7xl mx-auto" id="numbers">
        <GlowBlob color={LIME}    className="w-96 h-96 -top-20 -left-20" />
        <GlowBlob color={MAGENTA} className="w-72 h-72 top-10 right-10" />

        <div className="mb-8">
          <TapeLabel>ARTIST OPPORTUNITY BRIEF · 2026 · GEFFEN/UMG A&R</TapeLabel>
        </div>

        <h1
          className="font-black uppercase leading-none mb-6"
          style={{ ...D, fontSize: "clamp(3.5rem,10vw,11rem)" }}
        >
          From Tampa<br />
          <span style={{ color: LIME }}>to the World.</span>
        </h1>

        <p
          className="text-2xl md:text-3xl font-black uppercase mb-6"
          style={{ ...D, color: "rgba(255,255,255,0.4)" }}
        >
          The Juvenile Baby Activation Plan.
        </p>

        <p className="max-w-2xl text-base md:text-lg text-white/70 leading-relaxed mb-10">
          Two Geffen singles in market. Zero paid digital activation behind either one. This plan runs a focused 12-week digital campaign — targeted ads, daily content, and a locked online presence — to build real streaming traction on both singles and hand the label a data-backed case for what comes next.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#numbers"
            className="px-6 py-3 font-black uppercase text-sm tracking-widest transition-all hover:scale-105"
            style={{ ...D, background: LIME, color: BLACK, boxShadow: `4px 4px 0 ${MAGENTA}` }}
          >See The Numbers →</a>
          <a
            href="#the-ask"
            className="px-6 py-3 font-black uppercase text-sm tracking-widest border-2 text-white transition-all hover:scale-105"
            style={{ ...D, borderColor: "rgba(255,255,255,0.5)" }}
          >Investment Ask</a>
        </div>

        {/* stat strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-white/10">
          {[
            { val: "424K",   label: "YouTube Catalog Views",  sub: "Across top 5 visualizers", accent: LIME    },
            { val: "55K",    label: "Instagram Followers",    sub: "@juvenilebaby",             accent: MAGENTA },
            { val: "2",      label: "Singles on Geffen",      sub: "Talm Bout + Silly Rabbit",  accent: YELLOW  },
            { val: "$22,750", label: "Indie Campaign Total",   sub: "Ads + management, 12 weeks",  accent: "#fff"  },
          ].map((s, i) => (
            <div
              key={i}
              className="p-6 border-r border-b border-white/10 md:border-b-0 last:border-r-0"
              style={{ borderTopWidth: 3, borderTopColor: s.accent, borderTopStyle: "solid" }}
            >
              <div
                className="text-4xl md:text-5xl font-black leading-none mb-1"
                style={{ ...D, color: s.accent }}
              >{s.val}</div>
              <div className="text-xs font-semibold text-white uppercase tracking-wider">{s.label}</div>
              <div className="text-xs text-white/40 mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. MARQUEE ────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden border-y-2 py-3"
        style={{ borderColor: LIME, background: BLACK }}
      >
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 22s linear infinite", width: "max-content" }}>
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-4 mr-8 text-sm font-black uppercase tracking-widest"
              style={{ ...D, color: LIME }}
            >
              <Flame size={14} />
              <span>Run The Ads</span>
              <Star size={14} style={{ color: YELLOW }} />
              <span style={{ color: "rgba(255,255,255,0.7)" }}>Post Every Day</span>
              <Flame size={14} />
              <span style={{ color: MAGENTA }}>Stay Consistent</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* ── 4. THE RECEIPTS ───────────────────────────────────── */}
      <section className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
        <Eyebrow>THE RECEIPTS · CURRENT STATE</Eyebrow>
        <h2
          className="font-black uppercase leading-none mb-6"
          style={{ ...D, fontSize: "clamp(2rem,6vw,6rem)" }}
        >
          He&apos;s not a{" "}
          <span style={{ color: MAGENTA }}>prospect.</span>
          <br />
          He&apos;s a{" "}
          <span style={{ color: LIME }}>position.</span>
        </h2>

        <p className="max-w-3xl text-base text-white/60 leading-relaxed mb-14">
          &quot;Talm Bout&quot; and &quot;Silly Rabbit&quot; have organic numbers — 76K and 41K YouTube views respectively — with no paid digital spend behind them. No ad campaigns. No consistent content cadence. No optimized platform presence driving listeners to the singles. The music is already working on its own. A targeted digital strategy turns that into compounding traction.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <StatCard icon={Headphones} value="5.5K"  label="Spotify Monthly"    sub="Pre-campaign baseline"    accent={LIME}    />
          <StatCard icon={Camera}     value="55K"   label="IG @juvenilebaby"   sub="Organic, Tampa-anchored"  accent={MAGENTA} />
          <StatCard icon={Video}      value="424K"  label="YouTube Catalog"    sub="Across top 5 visualizers" accent={YELLOW}  />
          <StatCard icon={Eye}        value="295K"  label="Top Video"          sub="'How To Step' · organic"  accent="#fff"    />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* bar chart */}
          <div className="p-6 border border-white/10" style={{ background: "#111" }}>
            <p className="text-xs font-black tracking-widest uppercase mb-4" style={{ ...D, color: YELLOW }}>
              Catalog Performance · YouTube K Views
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={catalogData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <XAxis
                  dataKey="track"
                  tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 9 }}
                  axisLine={false} tickLine={false}
                />
                <YAxis
                  tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 9 }}
                  axisLine={false} tickLine={false}
                />
                <Tooltip
                  contentStyle={{ background: "#1a1a1a", border: `1px solid ${LIME}`, borderRadius: 0, fontSize: 11 }}
                  cursor={{ fill: "rgba(255,255,255,0.04)" }}
                />
                <Bar dataKey="views">
                  {catalogData.map((entry, i) => (
                    <Cell key={i} fill={entry.era === "geffen" ? LIME : MAGENTA} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="flex gap-6 mt-3">
              {[{ color: LIME, label: "Geffen era" }, { color: MAGENTA, label: "Pre-Geffen (organic)" }].map(l => (
                <span key={l.label} className="flex items-center gap-2 text-xs text-white/50">
                  <span className="w-3 h-3 inline-block" style={{ background: l.color }} />
                  {l.label}
                </span>
              ))}
            </div>
          </div>

          {/* press list */}
          <div className="p-6 border border-white/10 flex flex-col gap-4" style={{ background: "#111" }}>
            <p className="text-xs font-black tracking-widest uppercase mb-2" style={{ ...D, color: YELLOW }}>
              Press & Industry Footprint
            </p>
            {[
              { outlet: "The Hype Magazine",  headline: "Juvenile Baby — Talm Bout",                            date: "Aug 2024", type: "Single Premiere" },
              { outlet: "Static Multimedia",  headline: "Geffen Records Artist Juvenile Baby Drops New Single", date: "Aug 2024", type: "Label Feature" },
              { outlet: "antiMusic",          headline: "Juvenile Baby Delivers 'Silly Rabbit' Video",          date: "Nov 2024", type: "Video Premiere" },
              { outlet: "On The Radar Radio", headline: "Silly Rabbit — Live Performance",                      date: "2024",     type: "Performance" },
            ].map((p, i) => (
              <div key={i} className="flex gap-3 items-start border-l-2 pl-3" style={{ borderColor: LIME }}>
                <div className="flex-1">
                  <div className="mb-1">
                    <TapeLabel rotate="rotate-0">{p.type}</TapeLabel>
                  </div>
                  <p className="text-sm font-semibold text-white leading-snug">{p.outlet}</p>
                  <p className="text-xs text-white/50 italic">&quot;{p.headline}&quot; — {p.date}</p>
                </div>
              </div>
            ))}
            <div className="mt-2 p-4 border border-lime-500/30" style={{ background: "rgba(57,255,20,0.05)" }}>
              <p className="text-xs text-white/70 leading-relaxed">
                <span className="font-black text-white">Note for A&R:</span>{" "}
                Press is light because radio + national PR haven&apos;t been funded yet. The campaign below fixes that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THE THESIS ─────────────────────────────────────── */}
      <section
        className="relative px-4 md:px-8 py-24 overflow-hidden"
        id="thesis"
        style={{ background: "linear-gradient(180deg,#0a0a0a 0%,rgba(255,0,255,0.06) 100%)" }}
      >
        <GlowBlob color={MAGENTA} className="w-[500px] h-[500px] -right-40 top-0" />
        <div className="max-w-7xl mx-auto">
          <Eyebrow>THE THESIS</Eyebrow>
          <h2
            className="font-black uppercase leading-none mb-12"
            style={{ ...D, fontSize: "clamp(2rem,6vw,6rem)" }}
          >
            The work is ads,<br />content, and consistency.<br />
            The label <span style={{ color: LIME }}>adds the scale.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-base text-white/65 leading-relaxed">
              <p>
                In <strong className="text-white">2003, T.I. built dominance through radio and street teams.</strong> In 2026, the equivalent infrastructure is digital — paid social ads, algorithmic content, and a presence that follows a listener from TikTok to Spotify to YouTube without a single drop-off. Same playbook, different channels.
              </p>
              <p>
                Juvenile Baby has the music and the identity. What&apos;s missing is the digital engine: consistent ad spend driving both singles to new ears, a daily content cadence that feeds the algorithm, and a fully optimized online presence that converts curious listeners into actual fans. None of that requires a radio budget — it requires discipline and spend.
              </p>
              <p>
                <strong className="text-white">Twelve weeks of focused digital activation</strong> — ads on Meta, TikTok, and YouTube, 2–3 posts every day, and every platform profile locked and consistent — builds the streaming velocity and audience growth that makes the label&apos;s next investment decision straightforward.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { year: "2003", event: "Trap Muzik drops",     sub: "T.I. + Jazze Pha · Atlanta-first",  accent: MAGENTA },
                { year: "2024", event: "Talm Bout (Geffen)",   sub: "Juvenile Baby's intro single",      accent: LIME    },
                { year: "2024", event: "Silly Rabbit (Geffen)",sub: "The intended knockout",              accent: LIME    },
                { year: "2026", event: "Re-Investment",        sub: "Radio + MV + LP scale-up",          accent: YELLOW  },
              ].map((t, i) => (
                <div
                  key={i}
                  className="p-4 border-2 border-white/10 hover:-translate-y-1 transition-transform"
                  style={{ borderTopColor: t.accent, borderTopWidth: 3, background: "#111" }}
                >
                  <div className="text-3xl font-black leading-none mb-2" style={{ ...D, color: t.accent }}>{t.year}</div>
                  <div className="text-sm font-bold text-white mb-1">{t.event}</div>
                  <div className="text-xs text-white/40">{t.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 p-8 border-2" style={{ borderColor: LIME, background: "rgba(57,255,20,0.03)" }}>
            <p className="text-xs font-black tracking-widest uppercase mb-8" style={{ ...D, color: LIME }}>
              Why Trap Muzik Worked
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { n: "01", title: "Sequential Singles",   body: "Each release amplified the last." },
                { n: "02", title: "Producer Credibility", body: "Jazze Pha = quality signal." },
                { n: "03", title: "Regional-First",       body: "Owned the South before national." },
                { n: "04", title: "Relentless Visibility",body: "Everywhere, all the time." },
              ].map(item => (
                <div key={item.n}>
                  <div className="text-6xl font-black leading-none mb-2" style={{ ...D, color: LIME }}>{item.n}</div>
                  <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                  <div className="text-xs text-white/50">{item.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. THE STRATEGY ───────────────────────────────────── */}
      <section className="px-4 md:px-8 py-24 max-w-7xl mx-auto" id="strategy">
        <Eyebrow>THE STRATEGY</Eyebrow>
        <h2
          className="font-black uppercase leading-none mb-14"
          style={{ ...D, fontSize: "clamp(2rem,6vw,6rem)" }}
        >
          Three workstreams.<br />
          <span style={{ color: LIME }}>One outcome.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {[
            {
              n: "01", Icon: Zap, title: "Paid Ads", accent: LIME,
              body: "Targeted spend behind 'Talm Bout' and 'Silly Rabbit' across Meta, TikTok, and YouTube. Every dollar tracked. Budgets adjusted weekly based on what's converting.",
            },
            {
              n: "02", Icon: Disc3, title: "Content", accent: MAGENTA,
              body: "2–3 short-form posts daily. Visualizers, behind-the-scenes, performance clips, lifestyle. The algorithm rewards volume and consistency — we give it both.",
            },
            {
              n: "03", Icon: MapPin, title: "Online Consistency", accent: YELLOW,
              body: "Same story across every platform, every day. Bio, links, DSP profiles, posting cadence — all locked in. A&R should be able to pull up any page and see an artist ready for the next level.",
            },
          ].map(card => (
            <div
              key={card.n}
              className="relative overflow-hidden p-7 border-2 border-white/10 hover:-translate-y-2 transition-transform cursor-pointer group"
              style={{ background: "#111", borderTopColor: card.accent, borderTopWidth: 3 }}
            >
              <GlowBlob color={card.accent} className="w-48 h-48 -bottom-10 -right-10 group-hover:opacity-20 transition-opacity" />
              <div
                className="absolute top-4 right-4 text-8xl font-black leading-none select-none pointer-events-none"
                style={{ ...D, color: "rgba(255,255,255,0.08)" }}
              >{card.n}</div>
              <card.Icon size={28} className="mb-4" style={{ color: card.accent }} />
              <h3 className="text-lg font-black uppercase tracking-tight mb-3 text-white" style={D}>{card.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed relative z-10">{card.body}</p>
            </div>
          ))}
        </div>

        <p className="text-xs font-black tracking-widest uppercase mb-6" style={{ ...D, color: LIME }}>
          What Each Workstream Covers
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              phase: "PAID ADS", weeks: "Weeks 1-12", region: "Meta · TikTok · YouTube",
              chips: ["Single targeting","Retargeting","Lookalike audiences","Weekly creative refresh","ROI tracked per dollar"],
              tag: "Always On", accent: LIME,
            },
            {
              phase: "CONTENT", weeks: "Weeks 1-12", region: "2–3 Posts Daily",
              chips: ["Visualizers","Behind-the-scenes","Performance clips","Lifestyle","TikTok hooks"],
              tag: "Every Day", accent: MAGENTA,
            },
            {
              phase: "ONLINE CONSISTENCY", weeks: "Weeks 1-12", region: "All Platforms Locked",
              chips: ["Instagram","TikTok","YouTube","Spotify profile","Apple Music","Link in bio"],
              tag: "No Gaps", accent: YELLOW,
            },
          ].map((p, i) => (
            <div
              key={i}
              className="p-6 border-2 border-white/10"
              style={{ borderLeftColor: p.accent, borderLeftWidth: 4, background: "#111" }}
            >
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-xs font-black" style={{ ...D, color: p.accent }}>{p.phase}</span>
                <span className="text-xs text-white/30">·</span>
                <span className="text-xs text-white/30">{p.weeks}</span>
                <span className="ml-auto">
                  <TapeLabel bg={p.accent} rotate="rotate-0">{p.tag}</TapeLabel>
                </span>
              </div>
              <div className="text-base font-black uppercase text-white mb-4" style={D}>{p.region}</div>
              <div className="flex flex-wrap gap-2">
                {p.chips.map(c => (
                  <span key={c} className="text-xs px-2 py-1 border border-white/20 text-white/60">{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. 12-WEEK PLAN ───────────────────────────────────── */}
      <section
        className="relative px-4 md:px-8 py-24 overflow-hidden"
        id="timeline"
        style={{ background: "linear-gradient(180deg,#0a0a0a 0%,rgba(57,255,20,0.04) 100%)" }}
      >
        <GlowBlob color={LIME} className="w-96 h-96 bottom-0 left-0" />
        <div className="max-w-7xl mx-auto">
          <Eyebrow>THE 12-WEEK PLAN</Eyebrow>
          <h2
            className="font-black uppercase leading-none mb-14"
            style={{ ...D, fontSize: "clamp(2rem,6vw,6rem)" }}
          >
            Week zero to{" "}
            <span style={{ color: LIME }}>325K</span> streams.
          </h2>

          <div className="relative p-6 border border-white/10 mb-14" style={{ background: "#111" }}>
            <div className="absolute top-4 right-4">
              <TapeLabel>TARGET: 365K COMBINED</TapeLabel>
            </div>
            <p className="text-xs font-black tracking-widest uppercase mb-4 text-white/40" style={D}>
              Streaming Trajectory · Thousands
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={streamData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="gLime" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor={LIME}    stopOpacity={0.3} />
                    <stop offset="95%" stopColor={LIME}    stopOpacity={0}   />
                  </linearGradient>
                  <linearGradient id="gMagenta" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor={MAGENTA} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={MAGENTA} stopOpacity={0}   />
                  </linearGradient>
                </defs>
                <XAxis dataKey="w" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis                tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "#1a1a1a", border: `1px solid ${LIME}`, borderRadius: 0, fontSize: 11 }} />
                <Area type="monotone" dataKey="talm"     name="Talm Bout"    stroke={LIME}    strokeWidth={2} fill="url(#gLime)"    dot={false} />
                <Area type="monotone" dataKey="silly"    name="Silly Rabbit" stroke={MAGENTA} strokeWidth={2} fill="url(#gMagenta)" dot={false} />
                <Area type="monotone" dataKey="combined" name="Combined"     stroke={YELLOW}  strokeWidth={3} fill="none"           dot={{ fill: YELLOW, r: 4 }} strokeDasharray="6 3" />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex gap-6 mt-3 flex-wrap">
              {[{ color: LIME, label: "Talm Bout" }, { color: MAGENTA, label: "Silly Rabbit" }, { color: YELLOW, label: "Combined" }].map(l => (
                <span key={l.label} className="flex items-center gap-2 text-xs text-white/50">
                  <span className="w-3 h-3 inline-block" style={{ background: l.color }} />
                  {l.label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              {
                wk: "WK 1-2", title: "Launch Ads", accent: LIME,
                items: ["'Talm Bout' ad campaign live on Meta + TikTok","Baseline spend established, tracking pixels set","Content engine starts: 2-3 posts/day","Profile audit — all platforms locked and consistent"],
              },
              {
                wk: "WK 3-4", title: "Content Volume", accent: LIME,
                items: ["Daily posting cadence locked in","Visualizer + behind-the-scenes content drops","TikTok hooks A/B tested","Ad creative refreshed based on Week 1-2 data"],
              },
              {
                wk: "WK 5-6", title: "Scale What Converts", accent: MAGENTA,
                items: ["Double spend on top-performing ad sets","YouTube pre-roll added behind 'Silly Rabbit'","Content expanded to performance clips + lifestyle","DSP profile and playlist pitch wave"],
              },
              {
                wk: "WK 7", title: "'Silly Rabbit' Push", accent: MAGENTA,
                items: ["Full ad campaign pivots to 'Silly Rabbit'","Content scaled to 3-4 posts/day","Retargeting campaigns activated","+50% paid social budget"],
              },
              {
                wk: "WK 8-9", title: "Consistency Compounds", accent: YELLOW,
                items: ["Both singles running ads simultaneously","Content machine at full speed — no gaps","Email/SMS list growth push","Engagement rate tracked and optimized weekly"],
              },
              {
                wk: "WK 10-11", title: "Maintain & Measure", accent: YELLOW,
                items: ["Ad spend maintained at peak level","Content cadence held — no slowdown","Press + playlist results documented","Full analytics report being built"],
              },
              {
                wk: "WK 12", title: "Deliver The Report", accent: "#ffffff",
                items: ["12-week metrics compiled for label","Streaming velocity on both singles","Follower growth, ad ROI, content reach","Label investment ask backed by receipts"],
              },
            ].map((card, i) => (
              <div
                key={i}
                className="relative p-5 border border-white/10 hover:-translate-y-1 transition-transform"
                style={{ background: "#111", borderTopColor: card.accent, borderTopWidth: 3 }}
              >
                <div className="absolute top-0 right-0">
                  <TapeLabel bg={card.accent === "#ffffff" ? "#444" : card.accent} rotate="rotate-0">
                    {card.wk}
                  </TapeLabel>
                </div>
                <h4 className="text-sm font-black uppercase text-white mb-3 mt-1" style={D}>{card.title}</h4>
                <ul className="space-y-1">
                  {card.items.map((item, j) => (
                    <li key={j} className="text-xs text-white/50 flex gap-2">
                      <span style={{ color: card.accent }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. THE OUTCOME ────────────────────────────────────── */}
      <section className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
        <Eyebrow>THE OUTCOME</Eyebrow>
        <h2
          className="font-black uppercase leading-none mb-14"
          style={{ ...D, fontSize: "clamp(2rem,6vw,6rem)" }}
        >
          What week 12{" "}
          <span style={{ color: MAGENTA }}>looks like.</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <StatCard icon={Headphones} value="325K+" label="Combined Streams"  sub="Across Talm Bout + Silly Rabbit"  accent={LIME}    />
          <StatCard icon={Users}      value="10K+"  label="New Followers"     sub="Organic, engaged, Tampa-rooted"   accent={MAGENTA} />
          <StatCard icon={Sparkles}   value="2M+"   label="Influencer Reach"  sub="Micro→mid-tier, tracked ROI"      accent={YELLOW}  />
          <StatCard icon={Disc3}      value="15+"   label="DSP Playlist Adds" sub="Editorial + algorithmic"          accent="#fff"    />
          <StatCard icon={Mic}        value="5+"    label="National Press"    sub="Complex / XXL / FADER tier"       accent={LIME}    />
          <StatCard icon={Target}     value="2.5K+" label="Email/SMS List"    sub="Direct fan monetization"          accent={MAGENTA} />
        </div>

        <div className="p-8 border-2 flex gap-6 items-start" style={{ borderColor: MAGENTA, background: "rgba(255,0,255,0.04)" }}>
          <Flame size={40} className="shrink-0 mt-1" style={{ color: MAGENTA }} />
          <div>
            <h3 className="text-xl font-black uppercase text-white mb-3" style={D}>
              Week 12 is a digital report card Geffen and UMG can take straight to their investment committees.
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Streaming velocity on both singles. Ad ROI by platform. Follower growth. Content reach. Playlist adds driven by algorithmic momentum. Every number traceable to a specific ad set or content decision. The label&apos;s next investment ask doesn&apos;t need a pitch — it just needs this data.
            </p>
          </div>
        </div>
      </section>

      {/* ── 9. THE ASK ────────────────────────────────────────── */}
      <section className="px-4 md:px-8 py-24" id="the-ask" style={{ background: "#0d0d0d" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow>THE ASK · ACTIVATE THE SINGLES</Eyebrow>
          <h2
            className="font-black uppercase leading-none mb-6"
            style={{ ...D, fontSize: "clamp(2rem,6vw,6rem)" }}
          >
            Put the full label behind{" "}
            <span style={{ color: LIME }}>what&apos;s already built.</span>
          </h2>
          <p className="max-w-2xl text-base text-white/60 leading-relaxed mb-14">
            A $22,750 independent digital campaign — $5K in ad spend, digital ads programming, and three months of full social management — builds the streaming traction. The label&apos;s job is to take that data and add the infrastructure only a major can provide: radio, high-budget video, and a full album rollout.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {[
              {
                n: "ASK 01", Icon: Radio, title: "Radio", range: "$150K – $300K",
                body: "Urban + Rhythmic format push behind 'Talm Bout' and 'Silly Rabbit' — both singles, sequentially activated. Geffen radio team engaged now, not after a proof-of-concept.",
              },
              {
                n: "ASK 02", Icon: PlayCircle, title: "Music Video Slate", range: "$75K – $125K",
                body: "High-budget 'Silly Rabbit' re-cut + 'Talm Bout' performance piece. Two videos that match the quality of the music and the scale of the rollout.",
              },
              {
                n: "ASK 03", Icon: Disc3, title: "Full-Length Album", range: "$200K – $400K",
                body: "The singles prove the artist. The album builds the legacy. Recording, mixing, mastering, A-list features (Jazze Pha producer chair), packaging + rollout — sequenced after the singles have run.",
              },
            ].map(card => (
              <div
                key={card.n}
                className="relative p-7 border-2 hover:-translate-y-2 transition-transform"
                style={{ borderColor: LIME, background: "#111" }}
              >
                <div className="absolute top-0 right-0">
                  <TapeLabel bg={LIME}>{card.n}</TapeLabel>
                </div>
                <card.Icon size={28} className="mb-4" style={{ color: LIME }} />
                <h3 className="text-lg font-black uppercase text-white mb-2" style={D}>{card.title}</h3>
                <div className="text-3xl font-black mb-3" style={{ ...D, color: LIME }}>{card.range}</div>
                <p className="text-sm text-white/55 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          {/* the math */}
          <div className="grid md:grid-cols-2 gap-8 border border-white/10 p-8" style={{ background: "#111" }}>
            <div>
              <TapeLabel>THE MATH</TapeLabel>
              <h3 className="text-3xl font-black uppercase mt-4 mb-3 text-white leading-tight" style={D}>
                $22,750 of digital spend earns{" "}
                <span style={{ color: LIME }}>$425K–$825K</span> of label investment.
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">
                The artist&apos;s team runs the full digital campaign — ad spend, ads programming, and social management — and delivers 12 weeks of measurable streaming growth. The label brings radio, video, and album spend on the back of that data. $22,750 in. Up to $825K out. That&apos;s the leverage.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              {[
                { label: "Ad Spend (12 weeks)",                    amount: "$5,000",          accent: "rgba(255,255,255,0.8)", bold: false },
                { label: "Digital Ads Programming",                amount: "$3,500",          accent: "rgba(255,255,255,0.8)", bold: false },
                { label: "Social Management (3 mo. × $4,750)",     amount: "$14,250",         accent: "rgba(255,255,255,0.8)", bold: false },
                { label: "Total Independent Campaign",             amount: "$22,750",         accent: YELLOW,                 bold: false },
                { label: "Radio Servicing (label)",                amount: "$150K – $300K",   accent: LIME,                   bold: false },
                { label: "Music Video Slate (label)",              amount: "$75K – $125K",    accent: LIME,                   bold: false },
                { label: "Full LP Production (label)",             amount: "$200K – $400K",   accent: LIME,                   bold: false },
                { label: "Combined Label Commit",                  amount: "$425K – $825K",   accent: MAGENTA,                bold: true  },
              ].map((row, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center py-3 border-b border-white/10 last:border-b-0 ${row.bold ? "mt-2" : ""}`}
                >
                  <span className={`text-sm ${row.bold ? "font-black text-white" : "text-white/55"}`}>{row.label}</span>
                  <span
                    className={`font-black text-sm ${row.bold ? "text-lg" : ""}`}
                    style={{ ...D, color: row.accent }}
                  >{row.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. CLOSER ────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 md:px-8 py-32 text-center">
        <GlowBlob color={LIME} className="w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <TapeLabel>ONE LINE</TapeLabel>
          <h2
            className="font-black uppercase leading-none my-8"
            style={{ ...D, fontSize: "clamp(2.5rem,8vw,7rem)" }}
          >
            The trap is{" "}
            <span style={{ color: LIME }}>open.</span>
            <br />
            Let&apos;s get it.
          </h2>
          <p className="text-sm text-white/30 italic mb-10">
            — T.I., Trap Muzik (2003). And what we say to Geffen/UMG in 2026.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#numbers"
              className="px-8 py-4 font-black uppercase text-sm tracking-widest transition-all hover:scale-105"
              style={{ ...D, background: LIME, color: BLACK, boxShadow: `4px 4px 0 ${MAGENTA}` }}
            >Re-Read The Receipts</a>
            <a
              href="mailto:miles@devland.us"
              className="px-8 py-4 font-black uppercase text-sm tracking-widest border-2 text-white transition-all hover:scale-105"
              style={{ ...D, borderColor: "rgba(255,255,255,0.5)" }}
            >Contact The Campaign Team</a>
          </div>
        </div>
      </section>

      {/* ── 11. FOOTER ────────────────────────────────────────── */}
      <footer className="border-t border-white/10 px-4 md:px-8 py-12" style={{ background: "#080808" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="text-xs font-black tracking-widest uppercase mb-3" style={{ ...D, color: LIME }}>Juvenile Baby</p>
            <p className="text-xs text-white/45 leading-relaxed">
              Tampa, FL hip-hop / trap. Currently signed to Geffen Records. Singles: &quot;Talm Bout&quot; (Aug 2024), &quot;Silly Rabbit&quot; (Nov 2024).
            </p>
          </div>
          <div>
            <p className="text-xs font-black tracking-widest uppercase mb-3" style={{ ...D, color: LIME }}>Strategy Reference</p>
            <p className="text-xs text-white/45 leading-relaxed">
              Modeled on T.I.&apos;s <em>Trap Muzik</em> (Grand Hustle / Atlantic, 2003). Executed for 2026 algorithmic distribution: paid ads on Meta, TikTok, and YouTube; daily content cadence; fully optimized digital presence across all platforms.
            </p>
          </div>
          <div>
            <p className="text-xs font-black tracking-widest uppercase mb-3" style={{ ...D, color: LIME }}>Data Sources</p>
            <p className="text-xs text-white/45 leading-relaxed">
              Viberate Music Analytics · The Hype Magazine (Aug 2024) · Static Multimedia (Aug 2024) · antiMusic (Nov 2024) · Spotify / YouTube public stats.
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex justify-between items-center flex-wrap gap-4">
          <p className="text-xs text-white/30">© 2026 · For Geffen / UMG A&R review only.</p>
          <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.3)" }}>
            &quot;From Tampa to the world.&quot; — Juvenile Baby.
          </p>
        </div>
      </footer>

    </div>
  );
}

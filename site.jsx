
import React from "react";
const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl ${className}`}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const Button = ({ children, className = "", style, asChild, ...props }) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${className} inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium`,
      style,
    });
  }
  return (
    <button
      {...props}
      className={`${className} inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium`}
      style={style}
    >
      {children}
    </button>
  );
};

import {
  Sparkles,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Building2,
  Home,
  HardHat,
  ArrowRight,
  Star,
} from "lucide-react";

/**
 * Zero Trace Pro Cleaning — single-page website
 * Color palette:
 * - Teal:   #298CA3
 * - Teal 2: #167A92
 * - Orange: #ED6612
 * - Dark:   #151415
 * - Light:  #EAE8E8
 */

const palette = {
  teal: "#298CA3",
  teal2: "#167A92",
  orange: "#ED6612",
  dark: "#151415",
  light: "#EAE8E8",
};

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    {children}
  </span>
);

const SectionTitle = ({ kicker, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    {kicker && (
      <div className="mb-3 flex justify-center">
        <Badge>{kicker}</Badge>
      </div>
    )}
    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-base text-white/70">{subtitle}</p>
    )}
  </div>
);

function Stat({ label, value }) {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardContent className="p-4">
        <div className="text-2xl font-semibold text-white">{value}</div>
        <div className="mt-1 text-sm text-white/65">{label}</div>
      </CardContent>
    </Card>
  );
}

function ServiceCard({ icon: Icon, title, bullets }) {
  return (
    <Card className="group border-white/10 bg-white/5 transition hover:bg-white/7">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <Icon className="h-6 w-6" style={{ color: palette.teal }} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <ArrowRight className="h-4 w-4 text-white/30 opacity-0 transition group-hover:opacity-100" />
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4"
                    style={{ color: palette.orange }}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Testimonial({ name, role, quote }) {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardContent className="p-6">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4" style={{ color: palette.orange }} />
          ))}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-white/75">
          “{quote}”
        </p>
        <div className="mt-4 text-sm font-semibold text-white">{name}</div>
        <div className="text-xs text-white/60">{role}</div>
      </CardContent>
    </Card>
  );
}

export default function ZeroTraceProCleaningSiteDraft() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(1200px 700px at 20% 10%, rgba(41,140,163,0.25), transparent 55%), radial-gradient(900px 600px at 80% 20%, rgba(237,102,18,0.18), transparent 55%), radial-gradient(1200px 700px at 50% 95%, rgba(22,122,146,0.18), transparent 60%), linear-gradient(180deg, #0B0B0C 0%, #151415 55%, #0B0B0C 100%)",
      }}

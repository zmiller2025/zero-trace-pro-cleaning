"use client";

import React from "react";
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

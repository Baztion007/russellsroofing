"use client";

import {
  Home,
  Wrench,
  Layers,
  Factory,
  Ruler,
  ShieldAlert,
  BadgeCheck,
  ShieldCheck,
  HardHat,
  Recycle,
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Menu,
  X,
  PhoneCall,
  Hammer,
  Building2,
  Truck,
  Award,
  Users,
  ThumbsUp,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  home: Home,
  wrench: Wrench,
  layers: Layers,
  factory: Factory,
  ruler: Ruler,
  "shield-alert": ShieldAlert,
  "badge-check": BadgeCheck,
  "shield-check": ShieldCheck,
  "hard-hat": HardHat,
  recycle: Recycle,
  shield: Shield,
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  clock: Clock,
  star: Star,
  "check-circle": CheckCircle2,
  "arrow-right": ArrowRight,
  "chevron-right": ChevronRight,
  menu: Menu,
  x: X,
  "phone-call": PhoneCall,
  hammer: Hammer,
  building: Building2,
  truck: Truck,
  award: Award,
  users: Users,
  thumbsup: ThumbsUp,
  sparkles: Sparkles,
};

export function SiteIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? Home;
  return <Icon className={className} />;
}

import { type ComponentType } from 'react';
import {
  Globe,
  Smartphone,
  TrendingUp,
  Palette,
  Zap,
  Search,
  Monitor,
  Shield,
  Headphones,
  BarChart3,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ChevronDown,
  ChevronUp,
  Send,
  ArrowRight,
  Quote,
  Check,
  Menu,
  X,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Globe,
  Smartphone,
  TrendingUp,
  Palette,
  Zap,
  Search,
  Monitor,
  Shield,
  Headphones,
  BarChart3,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ChevronDown,
  ChevronUp,
  Send,
  ArrowRight,
  Quote,
  Check,
  Menu,
  X,
  MessageCircle,
  ExternalLink,
  Facebook: ExternalLink,
  Instagram: ExternalLink,
  Linkedin: ExternalLink,
  Twitter: ExternalLink,
};

interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} />;
}

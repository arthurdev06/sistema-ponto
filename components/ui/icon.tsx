"use client"

import { type LucideIcon } from "lucide-react"
import {
  SquareTerminal,
  Bot,
  BookOpen,
  Settings2,
  LifeBuoy,
  Send,
  Frame,
  PieChart,
  Map,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  SquareTerminal,
  Bot,
  BookOpen,
  Settings2,
  LifeBuoy,
  Send,
  Frame,
  PieChart,
  Map,
}

interface IconProps {
  name: keyof typeof iconMap
  className?: string
}

export function Icon({ name, className }: IconProps) {
  const IconComponent = iconMap[name]
  return <IconComponent className={className} />
}
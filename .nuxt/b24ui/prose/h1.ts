const accent = [
  "default",
  "accent",
  "accent-more",
  "less",
  "less-more"
] as const

export default {
  "slots": {
    "base": "relative mb-2 scroll-mt-[calc(45px+24px+var(--topbar-height))] lg:scroll-mt-[calc(22px+15px+var(--topbar-height))] text-(length:--ui-font-size-5xl) [&>code]:text-(length:--ui-font-size-4xl)/7",
    "link": "inline-flex items-center gap-2"
  },
  "variants": {
    "accent": {
      "default": "text-label",
      "accent": "text-(--ui-color-accent-brand-blue)" as typeof accent[number],
      "accent-more": "text-(--ui-color-accent-soft-element-blue)",
      "less": "text-description",
      "less-more": "text-(--ui-color-design-plain-na-content-secondary)"
    }
  },
  "defaultVariants": {
    "accent": "default" as typeof accent[number]
  }
}
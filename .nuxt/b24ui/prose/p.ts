const accent = [
  "default",
  "accent",
  "accent-more",
  "less",
  "less-more"
] as const

export default {
  "slots": {
    "base": "mb-2 last:mb-0 leading-relaxed text-pretty"
  },
  "variants": {
    "small": {
      "true": "text-(length:--ui-font-size-3xs) leading-(--ui-font-line-height-2xs)",
      "false": "text-(length:--ui-font-size-xl) leading-(--ui-font-line-height-lg)"
    },
    "accent": {
      "default": "text-label",
      "accent": "text-(--ui-color-accent-brand-blue)" as typeof accent[number],
      "accent-more": "text-(--ui-color-accent-soft-element-blue)",
      "less": "text-description",
      "less-more": "text-(--ui-color-design-plain-na-content-secondary)"
    }
  },
  "defaultVariants": {
    "small": false,
    "accent": "default" as typeof accent[number]
  }
}
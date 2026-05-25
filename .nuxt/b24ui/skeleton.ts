const accent = [
  "default",
  "accent",
  "less"
] as const

export default {
  "slots": {
    "base": "animate-pulse rounded-(--ui-border-radius-md) "
  },
  "variants": {
    "accent": {
      "default": "bg-(--ui-color-g-glass-grey-bg-1) edge-dark:bg-(--ui-color-g-glass-grey-bg-3)",
      "accent": "bg-(--ui-color-g-glass-grey-bg-3) light:bg-(--ui-color-g-glass-grey-bg-2) edge-dark:bg-(--ui-color-g-glass-grey-bg-1)" as typeof accent[number],
      "less": "bg-(--ui-color-tech-push) dark:bg-(--ui-color-g-content-grey-3)"
    }
  },
  "defaultVariants": {
    "accent": "default" as typeof accent[number]
  }
}
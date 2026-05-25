const align = [
  "left",
  "center",
  "right"
] as const

export default {
  "slots": {
    "base": ""
  },
  "variants": {
    "align": {
      "left": "text-left",
      "center": "text-center",
      "right": "text-right"
    }
  },
  "defaultVariants": {
    "align": "left" as typeof align[number]
  }
}
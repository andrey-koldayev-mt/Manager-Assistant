const size = [
  "3xs",
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl"
] as const

const color = [
  "air-primary",
  "air-primary-success",
  "air-primary-alert",
  "air-primary-copilot",
  "air-primary-warning",
  "air-primary-no-accent",
  "air-secondary",
  "air-secondary-alert",
  "air-secondary-accent",
  "air-secondary-accent-1",
  "air-secondary-accent-2",
  "air-secondary-no-accent",
  "air-tertiary",
  "air-tertiary-accent",
  "air-tertiary-no-accent",
  "air-selection",
  "air-boost"
] as const

export default {
  "slots": {
    "root": "inline-flex justify-end",
    "base": "relative rounded-full last:me-0"
  },
  "variants": {
    "size": {
      "3xs": {
        "base": "-me-0.5"
      },
      "2xs": {
        "base": "-me-0.5"
      },
      "xs": {
        "base": "-me-0.5"
      },
      "sm": {
        "base": "-me-1.5"
      },
      "md": {
        "base": "-me-1.5"
      },
      "lg": {
        "base": "-me-1.5"
      },
      "xl": {
        "base": "-me-2"
      },
      "2xl": {
        "base": "-me-2"
      },
      "3xl": {
        "base": "-me-2"
      }
    },
    "color": {
      "air-primary": "",
      "air-primary-success": "",
      "air-primary-alert": "",
      "air-primary-copilot": "",
      "air-primary-warning": "",
      "air-primary-no-accent": "",
      "air-secondary": "",
      "air-secondary-alert": "",
      "air-secondary-accent": "",
      "air-secondary-accent-1": "",
      "air-secondary-accent-2": "",
      "air-secondary-no-accent": "",
      "air-tertiary": "",
      "air-tertiary-accent": "",
      "air-tertiary-no-accent": "",
      "air-selection": "",
      "air-boost": ""
    }
  },
  "defaultVariants": {
    "size": "md" as typeof size[number],
    "color": "air-secondary-no-accent" as typeof color[number]
  }
}
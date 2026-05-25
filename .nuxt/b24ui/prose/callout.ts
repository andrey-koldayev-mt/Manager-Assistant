const color = [
  "air-primary",
  "air-primary-success",
  "air-primary-alert",
  "air-primary-copilot",
  "air-primary-warning",
  "air-secondary",
  "air-secondary-alert",
  "air-secondary-accent",
  "air-secondary-accent-1",
  "air-secondary-accent-2",
  "air-secondary-no-accent",
  "air-tertiary"
] as const

export default {
  "slots": {
    "base": "group relative block py-xs ps-sm pe-xs gap-2 my-5 last:mb-0 text-(length:--ui-font-size-md)/(--ui-font-line-height-3xs) text-(--b24ui-color) bg-(--b24ui-background) border-(--b24ui-border-color) border-(length:--b24ui-border-width) rounded-(--ui-border-radius-md) [&_code]:text-(length:--ui-font-size-sm)/(--ui-font-line-height-sm) [&>div]:my-2.5 [&_ul]:my-2.5 [&_ul]:ps-3 [&_ul]:marker:text-(--b24ui-color) [&_ol]:my-2.5 [&_ol]:ps-3 [&_ol]:marker:text-(--b24ui-color) [&>h1]:text-(--b24ui-color) [&>h2]:text-(--b24ui-color) [&>h3]:text-(--b24ui-color) [&>h4]:text-(--b24ui-color) [&>h5]:text-(--b24ui-color) [&>h6]:text-(--b24ui-color) *:last:mb-0! [&_li]:my-1.5 [&_li]:ps-1 [&_li]:text-(length:--ui-font-size-md)/(--ui-font-line-height-3xs) [&_li]:text-(--b24ui-color) [&_a]:underline transition-colors",
    "icon": "shrink-0 size-5 inline-block me-2 text-(--b24ui-icon) transition-colors",
    "externalIcon": "size-4 align-top absolute right-2 top-2 pointer-events-none text-(--b24ui-split-divider-color) transition-colors"
  },
  "variants": {
    "color": {
      "air-primary": {
        "base": "style-filled"
      },
      "air-primary-success": {
        "base": "style-filled-success"
      },
      "air-primary-alert": {
        "base": "style-filled-alert"
      },
      "air-primary-copilot": {
        "base": "style-filled-copilot"
      },
      "air-primary-warning": {
        "base": "style-filled-warning"
      },
      "air-secondary": {
        "base": "style-tinted"
      },
      "air-secondary-alert": {
        "base": "style-tinted-alert"
      },
      "air-secondary-accent": {
        "base": "style-tinted-no-accent-1"
      },
      "air-secondary-accent-1": {
        "base": "style-outline-accent-1"
      },
      "air-secondary-accent-2": {
        "base": "style-outline-accent-2"
      },
      "air-secondary-no-accent": {
        "base": "style-outline"
      },
      "air-tertiary": {
        "base": "style-outline-no-accent"
      }
    },
    "to": {
      "true": "border-dashed"
    }
  },
  "compoundVariants": [
    {
      "to": true,
      "class": {
        "base": "hover:border-(--b24ui-border-color-hover) has-focus-visible:border-(--b24ui-border-color-hover)",
        "externalIcon": "group-hover:text-(--b24ui-icon)"
      }
    },
    {
      "color": "air-secondary-accent" as typeof color[number],
      "class": {
        "base": "bg-(--b24ui-background)/20"
      }
    }
  ],
  "defaultVariants": {
    "color": "air-primary" as typeof color[number]
  }
}
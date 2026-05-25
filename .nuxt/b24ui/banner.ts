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
  "air-tertiary"
] as const

export default {
  "slots": {
    "root": "relative z-50 w-full bg-(--b24ui-background) transition-colors",
    "container": "flex items-center justify-between gap-3 h-12",
    "left": "hidden lg:flex-1 lg:flex lg:items-center",
    "center": "flex items-center gap-1.5 min-w-0",
    "right": "lg:flex-1 flex items-center justify-end",
    "icon": "size-5 shrink-0 text-(--b24ui-color) pointer-events-none",
    "title": "text-(length:--ui-font-size-sm)/(--ui-font-line-height-sm) text-(--b24ui-color) font-(--ui-font-weight-medium) truncate",
    "actions": "flex gap-1.5 shrink-0 isolate",
    "close": "[--ui-btn-color:var(--b24ui-color)] hover:bg-(--ui-color-base-white-fixed)/10 focus-visible:bg-(--ui-color-base-white-fixed)/10 -me-1.5 lg:me-0"
  },
  "variants": {
    "color": {
      "air-primary": {
        "root": "style-filled"
      },
      "air-primary-success": {
        "root": "style-filled-success"
      },
      "air-primary-alert": {
        "root": "style-filled-alert"
      },
      "air-primary-copilot": {
        "root": "style-filled-copilot"
      },
      "air-primary-warning": {
        "root": "style-filled-warning"
      },
      "air-secondary": {
        "root": "style-tinted"
      },
      "air-secondary-alert": {
        "root": "style-tinted-alert"
      },
      "air-secondary-accent": {
        "root": "style-outline"
      },
      "air-secondary-accent-1": {
        "root": "style-outline-accent-1"
      },
      "air-secondary-accent-2": {
        "root": "style-outline-accent-2"
      },
      "air-tertiary": {
        "root": "style-outline-no-accent"
      }
    },
    "to": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "to": true,
      "class": {
        "root": "hover:bg-(--b24ui-background)/90"
      }
    }
  ],
  "defaultVariants": {
    "color": "air-primary-alert" as typeof color[number]
  }
}
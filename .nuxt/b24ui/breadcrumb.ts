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
  "air-selection"
] as const

export default {
  "slots": {
    "root": "relative min-w-0",
    "list": "flex items-center gap-[6px]",
    "item": "flex min-w-0",
    "link": "group relative flex items-center gap-[6px] text-(length:--ui-font-size-sm) min-w-0 -mt-px focus-visible:outline-(--b24ui-border-color)",
    "linkLeadingIcon": "shrink-0 size-[20px]",
    "linkLeadingAvatar": "shrink-0",
    "linkLeadingAvatarSize": "2xs",
    "linkLabel": "truncate",
    "separator": "flex",
    "separatorIcon": "shrink-0 size-[20px] text-(--ui-color-base-6)"
  },
  "variants": {
    "active": {
      "true": {
        "link": "text-(--b24ui-color) hover:underline font-(--ui-font-weight-semi-bold)"
      },
      "false": {
        "link": "text-legend font-(--ui-font-weight-medium)"
      }
    },
    "disabled": {
      "true": {
        "link": "cursor-not-allowed opacity-30"
      }
    },
    "to": {
      "true": ""
    },
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
      "air-primary-no-accent": {
        "root": "style-filled-no-accent"
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
      "air-secondary-no-accent": {
        "root": "style-outline-no-accent"
      },
      "air-tertiary": {
        "root": "style-plain"
      },
      "air-tertiary-accent": {
        "root": "style-plain-accent"
      },
      "air-tertiary-no-accent": {
        "root": "style-plain-no-accent"
      },
      "air-selection": {
        "root": "style-selection"
      }
    }
  },
  "compoundVariants": [
    {
      "disabled": false,
      "active": false,
      "to": true,
      "class": {
        "link": "hover:underline"
      }
    },
    {
      "color": [
        "air-primary" as typeof color[number],
        "air-primary-success" as typeof color[number],
        "air-primary-alert" as typeof color[number],
        "air-primary-copilot" as typeof color[number],
        "air-primary-warning" as typeof color[number],
        "air-primary-no-accent" as typeof color[number]
      ],
      "active": true,
      "class": {
        "link": "text-(--b24ui-background)"
      }
    }
  ],
  "defaultVariants": {
    "color": "air-selection" as typeof color[number]
  }
}
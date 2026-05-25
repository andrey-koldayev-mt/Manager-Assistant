const color = [
  "air-primary",
  "air-primary-success",
  "air-primary-alert",
  "air-primary-copilot",
  "air-primary-warning",
  "default",
  "danger",
  "success",
  "warning",
  "primary",
  "secondary",
  "collab",
  "ai"
] as const

const variant = [
  "list",
  "card"
] as const

const indicator = [
  "start",
  "end",
  "hidden"
] as const

const size = [
  "xs",
  "sm",
  "md",
  "lg"
] as const

export default {
  "slots": {
    "root": "relative flex items-start",
    "base": "cursor-pointer flex items-center justify-center shrink-0 rounded-(--ui-border-radius-2xs) text-label ring ring-inset ring-(--ui-color-base-5) focus-visible:outline-(--b24ui-border-color) outline-transparent focus-visible:outline-2 focus-visible:outline-offset-2",
    "indicator": "rounded-(--ui-border-radius-2xs) flex items-center justify-center size-full text-(--b24ui-color) ring-1 ring-(--b24ui-background) bg-(--b24ui-background)" as typeof indicator[number],
    "container": "flex items-center",
    "icon": "shrink-0 size-full",
    "wrapper": "w-full font-[family-name:var(--ui-font-family-primary)] font-(--ui-font-weight-regular)",
    "label": "cursor-pointer block text-label",
    "description": "mt-[4px] text-description"
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
      "default": {
        "root": "style-old-default"
      },
      "danger": {
        "root": "style-old-danger"
      },
      "success": {
        "root": "style-old-success"
      },
      "warning": {
        "root": "style-old-warning"
      },
      "primary": {
        "root": "style-old-primary"
      },
      "secondary": {
        "root": "style-old-secondary"
      },
      "collab": {
        "root": "style-old-collab"
      },
      "ai": {
        "root": "style-old-ai"
      }
    },
    "variant": {
      "list": {
        "root": ""
      },
      "card": {
        "root": "border border-(--ui-color-design-outline-na-stroke) bg-(--ui-color-design-outline-na-bg)"
      }
    },
    "indicator": {
      "start": {
        "root": "flex-row",
        "wrapper": "ms-2"
      },
      "end": {
        "root": "flex-row-reverse",
        "wrapper": "me-2"
      },
      "hidden": {
        "base": "sr-only",
        "wrapper": "text-center"
      }
    },
    "size": {
      "xs": {
        "base": "size-3",
        "container": "h-3",
        "wrapper": "text-(length:--ui-font-size-xs) leading-[11px]",
        "label": ""
      },
      "sm": {
        "base": "size-3.5",
        "container": "h-3.5",
        "wrapper": "text-(length:--ui-font-size-sm) leading-3.5",
        "label": ""
      },
      "md": {
        "base": "size-4",
        "container": "h-4",
        "wrapper": "text-(length:--ui-font-size-lg) leading-4",
        "label": ""
      },
      "lg": {
        "base": "size-5",
        "container": "h-5",
        "wrapper": "text-(length:--ui-font-size-xl) leading-4.5",
        "label": ""
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-(--ui-color-accent-main-alert)"
      }
    },
    "disabled": {
      "true": {
        "root": "opacity-30",
        "base": "cursor-not-allowed",
        "label": "cursor-not-allowed",
        "description": "cursor-not-allowed"
      }
    },
    "checked": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "size": "xs" as typeof size[number],
      "variant": "card" as typeof variant[number],
      "class": {
        "root": "px-[13px] py-[7px] rounded-(--ui-border-radius-xs)"
      }
    },
    {
      "size": "sm" as typeof size[number],
      "variant": "card" as typeof variant[number],
      "class": {
        "root": "px-[13px] py-[9px] rounded-(--ui-border-radius-sm)"
      }
    },
    {
      "size": "md" as typeof size[number],
      "variant": "card" as typeof variant[number],
      "class": {
        "root": "px-[17px] py-[10px] rounded-(--ui-border-radius-md)"
      }
    },
    {
      "size": "lg" as typeof size[number],
      "variant": "card" as typeof variant[number],
      "class": {
        "root": "px-[23px] py-3 rounded-(--ui-border-radius-md)"
      }
    },
    {
      "variant": "card" as typeof variant[number],
      "checked": true,
      "class": {
        "root": "border-(--b24ui-border-color) cursor-pointer"
      }
    },
    {
      "variant": "card" as typeof variant[number],
      "disabled": true,
      "class": {
        "root": "cursor-not-allowed"
      }
    }
  ],
  "defaultVariants": {
    "color": "air-primary" as typeof color[number],
    "size": "md" as typeof size[number],
    "variant": "list" as typeof variant[number],
    "indicator": "start" as typeof indicator[number]
  }
}
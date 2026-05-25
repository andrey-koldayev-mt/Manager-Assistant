const color = [
  "air-primary",
  "air-primary-success",
  "air-primary-alert",
  "air-primary-copilot",
  "air-primary-warning",
  "air-secondary",
  "air-tertiary",
  "default",
  "danger",
  "success",
  "warning",
  "primary",
  "secondary",
  "collab",
  "ai"
] as const

export default {
  "slots": {
    "base": "px-1.5 py-0.5 font-[family-name:var(--ui-font-family-system-mono)] font-(--ui-font-weight-medium) text-(length:--ui-font-size-sm)/[normal] rounded-(--ui-border-radius-md) inline-block ring ring-inset text-(--b24ui-color) bg-(--b24ui-background) ring-(--b24ui-border-color)"
  },
  "variants": {
    "color": {
      "air-primary": {
        "base": "style-tinted"
      },
      "air-primary-success": {
        "base": "style-tinted-success"
      },
      "air-primary-alert": {
        "base": "style-tinted-alert"
      },
      "air-primary-copilot": {
        "base": "style-tinted-copilot"
      },
      "air-primary-warning": {
        "base": "style-tinted-warning"
      },
      "air-secondary": {
        "base": "style-tinted-no-accent-1"
      },
      "air-tertiary": {
        "base": "style-filled-black"
      },
      "default": {
        "base": "style-old-default"
      },
      "danger": {
        "base": "style-old-danger"
      },
      "success": {
        "base": "style-old-success"
      },
      "warning": {
        "base": "style-old-warning"
      },
      "primary": {
        "base": "style-old-primary"
      },
      "secondary": {
        "base": "style-old-secondary"
      },
      "collab": {
        "base": "style-old-collab"
      },
      "ai": {
        "base": "style-old-ai"
      }
    }
  },
  "defaultVariants": {
    "color": "air-secondary" as typeof color[number]
  }
}
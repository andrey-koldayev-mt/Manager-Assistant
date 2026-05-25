const fieldGroup = [
  "horizontal",
  "vertical"
] as const

const size = [
  "xss",
  "xs",
  "sm",
  "md",
  "lg",
  "xl"
] as const

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

const type = [
  "file"
] as const

export default {
  "slots": {
    "root": [
      "isolate relative inline-flex items-center",
      "flex-wrap"
    ],
    "base": "border-0 focus:outline-none disabled:cursor-not-allowed disabled:pointer-events-auto disabled:select-none disabled:opacity-30 disabled:resize-none appearance-none transition-colors duration-300 ease-linear text-(--ui-color-base-1) style-blurred-bg-input hover:text-(--ui-color-base-1) focus:text-(--ui-color-base-1) active:text-(--ui-color-base-1) placeholder:text-(--ui-color-design-plain-na-content-secondary) font-[family-name:var(--ui-font-family-primary)] font-(--ui-font-weight-regular) align-middle pe-[39px]",
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-(--b24ui-icon-color)",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-(--b24ui-icon-color)",
    "tag": "pointer-events-none select-none absolute z-10 -top-[7px] right-[14px] flex flex-col justify-center items-center",
    "item": "ps-[13px] pe-[6px] rounded-(--ui-border-radius-xs) h-(--main-ui-square-item-height) leading-(--main-ui-square-item-height) font-[family-name:var(--ui-font-family-primary)] font-(--ui-font-weight-regular) inline-flex items-center gap-1 data-disabled:cursor-not-allowed data-disabled:opacity-30 data-disabled:pointer-events-auto data-disabled:select-none text-(--ui-color-design-tinted-content) bg-(--ui-color-design-tinted-bg-alt)",
    "itemText": "truncate max-w-[180px]",
    "itemDelete": "cursor-pointer inline-flex items-center disabled:cursor-not-allowed disabled:pointer-events-auto disabled:select-none text-(--b24ui-icon-color-secondary) hover:text-(--b24ui-icon-color-secondary-hover) transition-none",
    "itemDeleteIcon": "shrink-0",
    "input": "flex-1 border-0 bg-transparent ps-[6px] pe-[0px] py-0 placeholder:text-(--ui-color-design-plain-na-content-secondary) focus:outline-none disabled:cursor-not-allowed disabled:pointer-events-auto disabled:select-none disabled:opacity-30 focus:ring-0 focus-visible:ring-0"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": "focus-visible:outline-none ring ring-inset ring-0 focus-visible:ring-2 group-[.is-field-group]/items:not-only:first:rounded-e-none group-[.is-field-group]/items:not-only:last:rounded-s-none group-[.is-field-group]/items:not-last:not-first:rounded-none group-[.is-field-group]/items:not-only:first:border-e-0 group-[.is-field-group]/items:not-only:not-first:border-s-0 focus-visible:z-[1]",
      "vertical": "focus-visible:outline-none ring ring-inset ring-0 focus-visible:ring-2 not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
    },
    "noSplit": {
      "false": "group-[.is-field-group]/items:not-only:not-first:after:content-[''] group-[.is-field-group]/items:not-only:not-first:after:absolute group-[.is-field-group]/items:not-only:not-first:after:top-[7px] group-[.is-field-group]/items:not-only:not-first:after:bottom-[6px] group-[.is-field-group]/items:not-only:not-first:after:left-0 group-[.is-field-group]/items:not-only:not-first:after:w-px group-[.is-field-group]/items:not-only:not-first:after:bg-current/30"
    },
    "size": {
      "xss": {
        "base": "[--main-ui-square-item-height:12px] gap-1 text-(length:--ui-font-size-4xs)/[normal] min-h-[20px] h-auto py-[2px] ps-[4px]",
        "leading": "px-1",
        "trailing": "px-1",
        "leadingIcon": "size-[12px]",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-[12px]",
        "input": "text-(length:--ui-font-size-4xs)/[normal]",
        "item": "text-(length:--ui-font-size-5xs)/(--main-ui-square-item-height) gap-0.5",
        "itemDeleteIcon": "size-[10px]"
      },
      "xs": {
        "base": "[--main-ui-square-item-height:16px] gap-1 text-(length:--ui-font-size-xs)/[normal] min-h-[24px] h-auto py-[2px] ps-[4px]",
        "leading": "px-1",
        "trailing": "px-1",
        "leadingIcon": "size-[14px]",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-[14px]",
        "input": "text-(length:--ui-font-size-xs)/[normal]",
        "item": "text-(length:--ui-font-size-5xs)/(--main-ui-square-item-height) gap-0.5",
        "itemDeleteIcon": "size-[10px]"
      },
      "sm": {
        "base": "[--main-ui-square-item-height:20px] gap-1.5 text-(length:--ui-font-size-sm)/[normal] min-h-[28px] h-auto py-[4px] ps-[4px]",
        "leading": "px-1.5",
        "trailing": "px-1.5",
        "leadingIcon": "size-[16px]",
        "leadingAvatar": "size-[16px]",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-[16px]",
        "input": "text-(length:--ui-font-size-sm)/[normal]",
        "item": "text-(length:--ui-font-size-5xs)/(--main-ui-square-item-height) gap-0.5",
        "itemDeleteIcon": "size-[12px]"
      },
      "md": {
        "base": "[--main-ui-square-item-height:24px] gap-1.5 text-(length:--ui-font-size-lg)/[normal] min-h-[34px] h-auto py-[4px] ps-[4px]",
        "leading": "px-2",
        "trailing": "px-2",
        "leadingIcon": "size-4.5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-4.5",
        "input": "text-(length:--ui-font-size-lg)/[normal]",
        "item": "text-(length:--ui-font-size-sm)/(--main-ui-square-item-height) gap-[4px]",
        "itemDeleteIcon": "size-4.5"
      },
      "lg": {
        "base": "[--main-ui-square-item-height:28px] gap-2 text-(length:--ui-font-size-lg)/[normal] min-h-[38px] h-auto py-[4px] ps-[4px]",
        "leading": "px-2",
        "trailing": "px-2",
        "leadingIcon": "size-[22px]",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-[22px]",
        "input": "text-(length:--ui-font-size-lg)/[normal]",
        "item": "text-(length:--ui-font-size-md)/(--main-ui-square-item-height) gap-1",
        "itemDeleteIcon": "size-[22px]"
      },
      "xl": {
        "base": "[--main-ui-square-item-height:32px] gap-2 text-(length:--ui-font-size-2xl)/[normal] min-h-[46px] h-auto py-[6px] ps-[6px]",
        "leading": "px-2",
        "trailing": "px-2",
        "leadingIcon": "size-[22px]",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-[22px]",
        "input": "text-(length:--ui-font-size-2xl)/[normal]",
        "item": "text-(length:--ui-font-size-xl)/(--main-ui-square-item-height) gap-1",
        "itemDeleteIcon": "size-[22px]"
      }
    },
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
    },
    "rounded": {
      "true": "rounded-(--ui-border-radius-3xl)",
      "false": "rounded-(--ui-border-radius-sm)"
    },
    "noPadding": {
      "true": {
        "base": "px-0"
      }
    },
    "noBorder": {
      "true": "ring-0 focus-visible:ring-0 style-transparent-bg"
    },
    "underline": {
      "true": "rounded-none ring-0 focus-visible:ring-0 style-transparent-bg border-b-1 border-b-(--ui-color-design-outline-stroke)"
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "highlight": {
      "true": "ring ring-inset ring-(--b24ui-border-color)"
    },
    "fixed": {
      "false": ""
    },
    "type": {
      "file": "file:me-1.5 file:text-(--ui-color-design-plain-na-content-secondary) file:outline-none"
    }
  },
  "compoundVariants": [
    {
      "highlight": false,
      "noBorder": false,
      "underline": false,
      "class": {
        "base": "ring ring-inset ring-(--ui-color-design-outline-stroke) has-focus-visible:ring-1 has-focus-visible:ring-inset has-focus-visible:ring-(--b24ui-border-color) hover:not-disabled:not-data-disabled:ring-1 hover:not-disabled:not-data-disabled:ring-inset hover:not-disabled:not-data-disabled:ring-(--b24ui-border-color) data-[state=open]:ring-1 data-[state=open]:ring-inset data-[state=open]:ring-(--b24ui-border-color)"
      }
    },
    {
      "highlight": true,
      "noBorder": false,
      "underline": false,
      "class": {
        "base": "ring ring-inset ring-(--b24ui-border-color) has-focus-visible:ring-1 has-focus-visible:ring-inset has-focus-visible:ring-(--b24ui-border-color) hover:ring-1 hover:ring-inset hover:ring-(--b24ui-border-color) data-[state=open]:ring-1 data-[state=open]:ring-inset data-[state=open]:ring-(--b24ui-border-color)"
      }
    },
    {
      "noBorder": false,
      "underline": true,
      "class": {
        "base": "has-focus-visible:border-(--b24ui-border-color) hover:not-disabled:not-data-disabled:border-(--b24ui-border-color) data-[state=open]:border-(--b24ui-border-color)"
      }
    },
    {
      "highlight": true,
      "noBorder": false,
      "underline": true,
      "class": {
        "base": "ring-0 border-b-(--b24ui-border-color)"
      }
    },
    {
      "highlight": true,
      "noBorder": true,
      "underline": false,
      "class": {
        "base": "ring-0"
      }
    },
    {
      "type": "file" as typeof type[number],
      "size": "xss" as typeof size[number],
      "class": "py-[2px]"
    },
    {
      "type": "file" as typeof type[number],
      "size": "xs" as typeof size[number],
      "class": "py-[4px]"
    },
    {
      "type": "file" as typeof type[number],
      "size": "sm" as typeof size[number],
      "class": "py-[5px]"
    },
    {
      "type": "file" as typeof type[number],
      "size": "md" as typeof size[number],
      "class": "py-[7px]"
    },
    {
      "type": "file" as typeof type[number],
      "size": "lg" as typeof size[number],
      "class": "py-[9px]"
    },
    {
      "type": "file" as typeof type[number],
      "size": "xl" as typeof size[number],
      "class": "py-[11px]"
    },
    {
      "leading": true,
      "noPadding": false,
      "size": "xss" as typeof size[number],
      "class": "ps-[20px]"
    },
    {
      "leading": true,
      "noPadding": false,
      "size": "xs" as typeof size[number],
      "class": "ps-[22px]"
    },
    {
      "leading": true,
      "noPadding": false,
      "size": "sm" as typeof size[number],
      "class": "ps-[28px]"
    },
    {
      "leading": true,
      "noPadding": false,
      "size": "md" as typeof size[number],
      "class": "ps-[32px]"
    },
    {
      "leading": true,
      "noPadding": false,
      "size": "lg" as typeof size[number],
      "class": "ps-[32px]"
    },
    {
      "leading": true,
      "noPadding": false,
      "size": "xl" as typeof size[number],
      "class": "ps-[32px]"
    },
    {
      "trailing": true,
      "noPadding": false,
      "size": "xss" as typeof size[number],
      "class": "pe-[20px]"
    },
    {
      "trailing": true,
      "noPadding": false,
      "size": "xs" as typeof size[number],
      "class": "pe-[22px]"
    },
    {
      "trailing": true,
      "noPadding": false,
      "size": "sm" as typeof size[number],
      "class": "pe-[28px]"
    },
    {
      "trailing": true,
      "noPadding": false,
      "size": "md" as typeof size[number],
      "class": "pe-[34px]"
    },
    {
      "trailing": true,
      "noPadding": false,
      "size": "lg" as typeof size[number],
      "class": "pe-[38px]"
    },
    {
      "trailing": true,
      "noPadding": false,
      "size": "xl" as typeof size[number],
      "class": "pe-[38px]"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "size-[21px]"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "size-[21px]"
      }
    },
    {
      "loading": true,
      "leading": true,
      "noPadding": true,
      "class": {
        "base": "ps-[34px]"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "noPadding": true,
      "class": {
        "base": "pe-[34px]"
      }
    },
    {
      "fieldGroup": [
        "horizontal" as typeof fieldGroup[number],
        "vertical" as typeof fieldGroup[number]
      ],
      "size": [
        "xl" as typeof size[number],
        "lg" as typeof size[number],
        "md" as typeof size[number]
      ],
      "rounded": false,
      "class": "rounded-(--ui-border-radius-md)"
    },
    {
      "fieldGroup": [
        "horizontal" as typeof fieldGroup[number],
        "vertical" as typeof fieldGroup[number]
      ],
      "size": "sm" as typeof size[number],
      "rounded": false,
      "class": "rounded-(--ui-border-radius-sm)"
    },
    {
      "fieldGroup": [
        "horizontal" as typeof fieldGroup[number],
        "vertical" as typeof fieldGroup[number]
      ],
      "size": "xs" as typeof size[number],
      "rounded": false,
      "class": "rounded-(--ui-border-radius-xs)"
    },
    {
      "fieldGroup": [
        "horizontal" as typeof fieldGroup[number],
        "vertical" as typeof fieldGroup[number]
      ],
      "size": "xss" as typeof size[number],
      "rounded": false,
      "class": "rounded-[5px]"
    },
    {
      "fixed": false,
      "size": "xss" as typeof size[number],
      "class": "md:text-(length:--ui-font-size-4xs)/[normal]"
    },
    {
      "fixed": false,
      "size": "xs" as typeof size[number],
      "class": "md:text-(length:--ui-font-size-xs)/[normal]"
    },
    {
      "fixed": false,
      "size": "sm" as typeof size[number],
      "class": "md:text-(length:--ui-font-size-sm)/[normal]"
    },
    {
      "fixed": false,
      "size": "md" as typeof size[number],
      "class": "md:text-(length:--ui-font-size-lg)/[normal]"
    },
    {
      "fixed": false,
      "size": "lg" as typeof size[number],
      "class": "md:text-(length:--ui-font-size-lg)/[normal]"
    }
  ],
  "defaultVariants": {
    "color": "air-primary" as typeof color[number],
    "size": "md" as typeof size[number]
  }
}
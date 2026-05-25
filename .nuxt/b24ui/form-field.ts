const size = [
  "xs",
  "sm",
  "md",
  "lg"
] as const

const orientation = [
  "vertical",
  "horizontal"
] as const

export default {
  "slots": {
    "root": "font-[family-name:var(--ui-font-family-system)] font-(--ui-font-weight-regular)",
    "wrapper": "leading-(--ui-font-line-height-reset)",
    "labelWrapper": "flex content-center items-center justify-between gap-1",
    "label": "block text-label",
    "hint": "text-description",
    "container": "relative",
    "description": "leading-(--ui-font-line-height-2xs) text-description",
    "error": "text-(--ui-color-accent-main-alert)",
    "errorWrapper": "flex flex-row flex-nowrap items-center gap-0.5",
    "errorIcon": "size-4.5",
    "help": "leading-(--ui-font-line-height-2xs) italic text-description"
  },
  "variants": {
    "useDescription": {
      "true": {
        "wrapper": ""
      },
      "false": {
        "wrapper": ""
      }
    },
    "size": {
      "xs": {
        "root": "text-(length:--ui-font-size-xs)",
        "errorIcon": "size-[16px]"
      },
      "sm": {
        "root": "text-(length:--ui-font-size-xs)",
        "errorIcon": "size-[16px]"
      },
      "md": {
        "root": "text-(length:--ui-font-size-sm)",
        "errorIcon": "size-4.5"
      },
      "lg": {
        "root": "text-(length:--ui-font-size-md)"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-(--ui-color-accent-main-alert)"
      }
    },
    "orientation": {
      "vertical": {
        "container": "",
        "description": "mt-[2px]",
        "error": "mt-[4px]",
        "errorIcon": "mt-[2px]",
        "help": "mt-[6px]"
      },
      "horizontal": {
        "root": "flex justify-between place-items-baseline gap-2"
      }
    }
  },
  "compoundVariants": [
    {
      "useDescription": true,
      "orientation": "vertical" as typeof orientation[number],
      "class": {
        "wrapper": "mb-[6px]"
      }
    },
    {
      "useDescription": false,
      "orientation": "vertical" as typeof orientation[number],
      "class": {
        "wrapper": "mb-[10px]"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "class": {
        "wrapper": ""
      }
    }
  ],
  "defaultVariants": {
    "size": "md" as typeof size[number]
  }
}
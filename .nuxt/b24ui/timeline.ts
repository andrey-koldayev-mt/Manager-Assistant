const orientation = [
  "horizontal",
  "vertical"
] as const

const color = [
  "air-primary",
  "air-primary-success",
  "air-primary-alert",
  "air-primary-copilot",
  "air-primary-warning"
] as const

const size = [
  "3xs",
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
] as const

export default {
  "slots": {
    "root": "flex gap-1.5",
    "item": "group relative flex flex-1 gap-3",
    "container": "relative flex items-center gap-1.5",
    "indicator": "group-data-[state=completed]:text-(--b24ui-color) group-data-[state=active]:text-(--b24ui-color) text-description group-data-[state=completed]:bg-(--b24ui-background) group-data-[state=active]:bg-(--b24ui-background-active)",
    "separator": "flex-1 rounded-(--ui-border-radius-circle) bg-(--ui-color-base-6)",
    "wrapper": "w-full",
    "date": "text-label text-(length:--ui-font-size-xs)/(--ui-font-line-height-md)",
    "title": "font-(--ui-font-weight-medium) text-legend text-(length:--ui-font-size-sm)",
    "description": "text-description text-wrap text-(length:--ui-font-size-sm)"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "flex-row w-full",
        "item": "flex-col",
        "separator": "h-0.5"
      },
      "vertical": {
        "root": "flex-col",
        "container": "flex-col",
        "separator": "w-0.5"
      }
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
      }
    },
    "size": {
      "3xs": "",
      "2xs": "",
      "xs": "",
      "sm": "",
      "md": "",
      "lg": "",
      "xl": "",
      "2xl": ""
    },
    "reverse": {
      "false": {
        "separator": "group-data-[state=completed]:bg-(--b24ui-background-active)"
      },
      "true": {
        "separator": "group-data-[state=active]:bg-(--b24ui-background) group-data-[state=completed]:bg-(--b24ui-background)"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal" as typeof orientation[number],
      "size": "3xs" as typeof size[number],
      "class": {
        "wrapper": "pe-4.5"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "size": "2xs" as typeof size[number],
      "class": {
        "wrapper": "pe-5"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "size": "xs" as typeof size[number],
      "class": {
        "wrapper": "pe-5.5"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "size": "sm" as typeof size[number],
      "class": {
        "wrapper": "pe-6"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "size": "md" as typeof size[number],
      "class": {
        "wrapper": "pe-6.5"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "size": "lg" as typeof size[number],
      "class": {
        "wrapper": "pe-7"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "size": "xl" as typeof size[number],
      "class": {
        "wrapper": "pe-7.5"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "size": "2xl" as typeof size[number],
      "class": {
        "wrapper": "pe-8"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "size": "3xl" as typeof size[number],
      "class": {
        "wrapper": "pe-8.5"
      }
    },
    {
      "orientation": "vertical" as typeof orientation[number],
      "size": "3xs" as typeof size[number],
      "class": {
        "wrapper": "-mt-0.5 pb-4.5"
      }
    },
    {
      "orientation": "vertical" as typeof orientation[number],
      "size": "2xs" as typeof size[number],
      "class": {
        "wrapper": "pb-5"
      }
    },
    {
      "orientation": "vertical" as typeof orientation[number],
      "size": "xs" as typeof size[number],
      "class": {
        "wrapper": "mt-0.5 pb-5.5"
      }
    },
    {
      "orientation": "vertical" as typeof orientation[number],
      "size": "sm" as typeof size[number],
      "class": {
        "wrapper": "mt-1 pb-6"
      }
    },
    {
      "orientation": "vertical" as typeof orientation[number],
      "size": "md" as typeof size[number],
      "class": {
        "wrapper": "mt-1.5 pb-6.5"
      }
    },
    {
      "orientation": "vertical" as typeof orientation[number],
      "size": "lg" as typeof size[number],
      "class": {
        "wrapper": "mt-2 pb-7"
      }
    },
    {
      "orientation": "vertical" as typeof orientation[number],
      "size": "xl" as typeof size[number],
      "class": {
        "wrapper": "mt-2.5 pb-7.5"
      }
    },
    {
      "orientation": "vertical" as typeof orientation[number],
      "size": "2xl" as typeof size[number],
      "class": {
        "wrapper": "mt-3 pb-8"
      }
    }
  ],
  "defaultVariants": {
    "size": "md" as typeof size[number],
    "color": "air-primary" as typeof color[number]
  }
}
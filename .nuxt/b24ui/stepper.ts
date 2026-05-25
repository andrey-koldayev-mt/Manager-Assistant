const orientation = [
  "horizontal",
  "vertical"
] as const

const size = [
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
  "air-primary-warning"
] as const

export default {
  "slots": {
    "root": "flex gap-4",
    "header": "flex",
    "item": "group text-center relative w-full",
    "container": "relative",
    "trigger": "cursor-pointer rounded-full font-(--ui-font-weight-medium) text-center align-middle flex items-center justify-center group-data-[state=completed]:text-(--b24ui-color) group-data-[state=active]:text-(--b24ui-color) text-description group-data-[state=completed]:bg-(--b24ui-background) group-data-[state=active]:bg-(--b24ui-background-active) focus-visible:outline-(--b24ui-background-active) bg-(--ui-color-base-8) ring ring-(--ui-color-base-7) focus-visible:outline-2 focus-visible:outline-offset-2",
    "indicator": "flex items-center justify-center size-full",
    "icon": "shrink-0",
    "separator": "absolute rounded-(--ui-border-radius-circle) group-data-[disabled]:opacity-75 group-data-[state=completed]:bg-(--b24ui-background-active) bg-(--ui-color-base-6)",
    "wrapper": "",
    "title": "font-(--ui-font-weight-medium) text-legend",
    "description": "text-description text-wrap",
    "content": "size-full"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "flex-col",
        "container": "flex justify-center",
        "separator": "top-[calc(50%-2px)] h-0.5",
        "wrapper": "mt-1"
      },
      "vertical": {
        "header": "flex-col gap-4",
        "item": "flex text-start",
        "separator": "start-[calc(50%-1px)] -bottom-[10px] w-0.5"
      }
    },
    "size": {
      "xs": {
        "trigger": "size-[28px] text-(length:--ui-font-size-sm)",
        "icon": "size-[26px]",
        "title": "text-(length:--ui-font-size-xs)",
        "description": "text-(length:--ui-font-size-xs)",
        "wrapper": "mt-[6px]"
      },
      "sm": {
        "trigger": "size-[32px] text-(length:--ui-font-size-md)",
        "icon": "size-[28px]",
        "title": "text-(length:--ui-font-size-sm)",
        "description": "text-(length:--ui-font-size-sm)",
        "wrapper": "mt-2"
      },
      "md": {
        "trigger": "size-[42px] text-(length:--ui-font-size-xl)",
        "icon": "size-[38px]",
        "title": "text-(length:--ui-font-size-md)",
        "description": "text-(length:--ui-font-size-md)",
        "wrapper": "mt-[10px]"
      },
      "lg": {
        "trigger": "size-[48px] text-(length:--ui-font-size-2xl)",
        "icon": "size-[44px]",
        "title": "text-(length:--ui-font-size-xl)",
        "description": "text-(length:--ui-font-size-xl)",
        "wrapper": "mt-[12px]"
      },
      "xl": {
        "trigger": "size-[60px] text-(length:--ui-font-size-3xl)",
        "icon": "size-[56px]",
        "title": "text-(length:--ui-font-size-2xl)",
        "description": "text-(length:--ui-font-size-2xl)",
        "wrapper": "mt-[14px]"
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
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal" as typeof orientation[number],
      "size": "xs" as typeof size[number],
      "class": {
        "separator": "start-[calc(50%+16px)] end-[calc(-50%+16px)]"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "size": "sm" as typeof size[number],
      "class": {
        "separator": "start-[calc(50%+20px)] end-[calc(-50%+20px)]"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "size": "md" as typeof size[number],
      "class": {
        "separator": "start-[calc(50%+28px)] end-[calc(-50%+28px)]"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "size": "lg" as typeof size[number],
      "class": {
        "separator": "start-[calc(50%+32px)] end-[calc(-50%+32px)]"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "size": "xl" as typeof size[number],
      "class": {
        "separator": "start-[calc(50%+36px)] end-[calc(-50%+36px)]"
      }
    },
    {
      "orientation": "vertical" as typeof orientation[number],
      "size": "xs" as typeof size[number],
      "class": {
        "separator": "top-[30px]",
        "item": "gap-1.5"
      }
    },
    {
      "orientation": "vertical" as typeof orientation[number],
      "size": "sm" as typeof size[number],
      "class": {
        "separator": "top-[38px]",
        "item": "gap-2"
      }
    },
    {
      "orientation": "vertical" as typeof orientation[number],
      "size": "md" as typeof size[number],
      "class": {
        "separator": "top-[46px]",
        "item": "gap-2.5"
      }
    },
    {
      "orientation": "vertical" as typeof orientation[number],
      "size": "lg" as typeof size[number],
      "class": {
        "separator": "top-[54px]",
        "item": "gap-3"
      }
    },
    {
      "orientation": "vertical" as typeof orientation[number],
      "size": "xl" as typeof size[number],
      "class": {
        "separator": "top-[62px]",
        "item": "gap-3.5"
      }
    }
  ],
  "defaultVariants": {
    "size": "md" as typeof size[number],
    "color": "air-primary" as typeof color[number]
  }
}
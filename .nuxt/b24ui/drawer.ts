const direction = [
  "top",
  "right",
  "bottom",
  "left"
] as const

export default {
  "slots": {
    "overlay": "fixed inset-0",
    "content": "fixed base-mode bg-(--ui-color-bg-content-primary) flex focus:outline-none ring ring-(--ui-color-divider-default)",
    "handle": "shrink-0 !bg-(--ui-color-divider-default) transition-opacity",
    "container": "w-full flex flex-col gap-4 p-4 overflow-y-auto",
    "header": "",
    "title": "font-[family-name:var(--ui-font-family-primary)] text-label font-(--ui-font-weight-medium) mb-0 text-[calc(var(--ui-font-size-2xl)+2px)]/(--ui-font-size-2xl)",
    "description": "mt-1 text-description text-(length:--ui-font-size-sm)",
    "body": "flex-1",
    "footer": "flex flex-col gap-1.5"
  },
  "variants": {
    "overlayBlur": {
      "auto": {
        "overlay": "motion-safe:backdrop-blur-[2px]"
      },
      "on": {
        "overlay": "backdrop-blur-[2px]"
      },
      "off": {
        "overlay": ""
      }
    },
    "scrollbarThin": {
      "true": {
        "body": "scrollbar-thin"
      }
    },
    "overlay": {
      "true": {
        "overlay": "bg-[#003366]/20"
      }
    },
    "direction": {
      "top": {
        "content": "mb-24 flex-col-reverse",
        "handle": "mb-4"
      },
      "right": {
        "content": "flex-row rtl:flex-row-reverse",
        "handle": "!ml-4"
      },
      "bottom": {
        "content": "mt-24 flex-col",
        "handle": "mt-4"
      },
      "left": {
        "content": "flex-row-reverse rtl:flex-row",
        "handle": "!mr-4"
      }
    },
    "inset": {
      "true": {
        "content": "rounded-lg after:hidden overflow-hidden [--initial-transform:calc(100%+1.5rem)]"
      }
    },
    "snapPoints": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "direction": [
        "top" as typeof direction[number],
        "bottom" as typeof direction[number]
      ],
      "class": {
        "content": "h-auto max-h-[96%]",
        "handle": "!w-12 !h-1.5 mx-auto"
      }
    },
    {
      "direction": [
        "top" as typeof direction[number],
        "bottom" as typeof direction[number]
      ],
      "snapPoints": true,
      "class": {
        "content": "h-full"
      }
    },
    {
      "direction": [
        "right" as typeof direction[number],
        "left" as typeof direction[number]
      ],
      "class": {
        "content": "w-auto max-w-[calc(100%-2rem)]",
        "handle": "!h-12 !w-1.5 mt-auto mb-auto"
      }
    },
    {
      "direction": [
        "right" as typeof direction[number],
        "left" as typeof direction[number]
      ],
      "snapPoints": true,
      "class": {
        "content": "w-full"
      }
    },
    {
      "direction": "top" as typeof direction[number],
      "inset": true,
      "class": {
        "content": "inset-x-4 top-4"
      }
    },
    {
      "direction": "top" as typeof direction[number],
      "inset": false,
      "class": {
        "content": "inset-x-0 top-0 rounded-b-lg"
      }
    },
    {
      "direction": "bottom" as typeof direction[number],
      "inset": true,
      "class": {
        "content": "inset-x-4 bottom-4"
      }
    },
    {
      "direction": "bottom" as typeof direction[number],
      "inset": false,
      "class": {
        "content": "inset-x-0 bottom-0 rounded-t-lg"
      }
    },
    {
      "direction": "left" as typeof direction[number],
      "inset": true,
      "class": {
        "content": "inset-y-4 left-4"
      }
    },
    {
      "direction": "left" as typeof direction[number],
      "inset": false,
      "class": {
        "content": "inset-y-0 left-0 rounded-r-lg"
      }
    },
    {
      "direction": "right" as typeof direction[number],
      "inset": true,
      "class": {
        "content": "inset-y-4 right-4"
      }
    },
    {
      "direction": "right" as typeof direction[number],
      "inset": false,
      "class": {
        "content": "inset-y-0 right-0 rounded-l-lg"
      }
    }
  ]
}
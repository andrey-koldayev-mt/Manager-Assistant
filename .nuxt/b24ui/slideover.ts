const overlayBlur = [
  "auto",
  "on",
  "off"
] as const

const side = [
  "top",
  "right",
  "bottom",
  "left"
] as const

export default {
  "slots": {
    "overlay": "fixed inset-0 bg-linear-to-b from-[#00204e]/52 to-[#00204e]",
    "content": "base-mode fixed bg-(--ui-color-gray-05) dark:bg-(--ui-color-base-black-fixed) sm:shadow-lg flex flex-col focus:outline-none h-full",
    "header": "py-5 px-5 flex items-center gap-x-3 gap-y-1.5",
    "wrapper": "",
    "body": "size-full flex-1 overflow-y-auto pb-2.5 px-5",
    "footer": "absolute inset-x-0 bottom-0 base-mode bg-(--ui-color-bg-content-primary) flex items-center justify-center gap-2.5 border-t border-t-1 border-t-(--ui-color-divider-less) shadow-top-md py-[13px] px-[13px]",
    "title": "font-[family-name:var(--ui-font-family-primary)] text-label font-(--ui-font-weight-semi-bold) mb-0 text-(length:--ui-font-size-4xl)/[calc(var(--ui-font-size-4xl)+2px)]",
    "description": "mt-1 text-description text-(length:--ui-font-size-sm)",
    "close": "absolute",
    "safeList": "group-hover:rounded-full group-hover:border-1 group-hover:border-current"
  },
  "variants": {
    "useFooter": {
      "true": {
        "body": "mb-[64px]"
      }
    },
    "overlayBlur": {
      "auto": {
        "overlay": "motion-safe:backdrop-blur-sm"
      },
      "on": {
        "overlay": "backdrop-blur-sm"
      },
      "off": {
        "overlay": ""
      }
    },
    "side": {
      "top": {
        "content": ""
      },
      "right": {
        "content": "",
        "header": "py-1 min-h-(--b24ui-header-height)"
      },
      "bottom": {
        "content": ""
      },
      "left": {
        "content": "",
        "header": "py-1 min-h-(--b24ui-header-height)"
      }
    },
    "inset": {
      "true": {
        "content": "rounded-[18px]"
      }
    },
    "transition": {
      "true": {
        "overlay": "motion-safe:data-[state=open]:animate-[fade-in_200ms_ease-out] motion-safe:data-[state=closed]:animate-[fade-out_200ms_ease-in]"
      }
    }
  },
  "compoundVariants": [
    {
      "side": "top" as typeof side[number],
      "inset": true,
      "class": {
        "content": "max-h-[calc(100%-2rem)] inset-x-4 top-4"
      }
    },
    {
      "side": "top" as typeof side[number],
      "inset": true,
      "useFooter": true,
      "class": {}
    },
    {
      "side": "top" as typeof side[number],
      "inset": false,
      "class": {
        "content": "max-h-full inset-x-0 top-0"
      }
    },
    {
      "side": "right" as typeof side[number],
      "inset": true,
      "class": {
        "content": "w-[calc(100%-2rem)] max-h-[calc(100%-2rem)] inset-y-4 right-4 "
      }
    },
    {
      "side": "right" as typeof side[number],
      "inset": true,
      "useFooter": true,
      "class": {}
    },
    {
      "side": "right" as typeof side[number],
      "inset": false,
      "class": {
        "content": "w-[calc(100%-60px)] sm:w-[calc(100%-150px)] inset-y-0 right-0"
      }
    },
    {
      "side": "bottom" as typeof side[number],
      "inset": true,
      "class": {
        "content": "max-h-[calc(100%-2rem)] w-[calc(100%-2rem)] end-4 bottom-4"
      }
    },
    {
      "side": "bottom" as typeof side[number],
      "inset": true,
      "useFooter": true,
      "class": {}
    },
    {
      "side": "bottom" as typeof side[number],
      "inset": false,
      "class": {
        "content": "max-h-full sm:max-h-[calc(100%-18px)] right-[5px] top-0 sm:top-4.5 bottom-0 w-[calc(100%-60px-5px)] sm:w-[calc(100%-150px-70px)] sm:rounded-t-[18px]"
      }
    },
    {
      "side": "left" as typeof side[number],
      "inset": true,
      "class": {
        "content": "w-[calc(100%-2rem)] max-h-[calc(100%-2rem)] inset-y-4 left-4"
      }
    },
    {
      "side": "left" as typeof side[number],
      "inset": true,
      "useFooter": true,
      "class": {}
    },
    {
      "side": "left" as typeof side[number],
      "inset": false,
      "class": {
        "content": "w-[calc(100%-60px)] sm:w-[calc(100%-150px)] inset-y-0 left-0"
      }
    },
    {
      "side": "bottom" as typeof side[number],
      "inset": false,
      "useFooter": true,
      "class": {}
    },
    {
      "side": [
        "right" as typeof side[number],
        "bottom" as typeof side[number]
      ],
      "inset": false,
      "class": {
        "close": "pl-1.5 pr-[4px] top-[17px] -translate-x-full left-0 rounded-l-full"
      }
    },
    {
      "side": "left" as typeof side[number],
      "inset": false,
      "class": {
        "close": "pr-1.5 pl-[4px] top-[17px] translate-x-full right-0 rounded-r-full [&>div]:flex-row-reverse"
      }
    },
    {
      "inset": true,
      "class": {
        "close": "top-4 end-4"
      }
    },
    {
      "side": "top" as typeof side[number],
      "class": {
        "close": "top-4 end-4"
      }
    },
    {
      "transition": true,
      "side": "top" as typeof side[number],
      "class": {
        "content": "motion-safe:data-[state=open]:animate-[slide-in-from-top_200ms_ease-in-out] motion-safe:data-[state=closed]:animate-[slide-out-to-top_200ms_ease-in-out]"
      }
    },
    {
      "transition": true,
      "side": "right" as typeof side[number],
      "class": {
        "content": "motion-safe:data-[state=open]:animate-[slide-in-from-right_200ms_ease-in-out] motion-safe:data-[state=closed]:animate-[slide-out-to-right_200ms_ease-in-out]"
      }
    },
    {
      "transition": true,
      "side": "bottom" as typeof side[number],
      "class": {
        "content": "motion-safe:data-[state=open]:animate-[slide-in-from-bottom_200ms_ease-in-out] motion-safe:data-[state=closed]:animate-[slide-out-to-bottom_200ms_ease-in-out]"
      }
    },
    {
      "transition": true,
      "side": "left" as typeof side[number],
      "class": {
        "content": "motion-safe:data-[state=open]:animate-[slide-in-from-left_200ms_ease-in-out] motion-safe:data-[state=closed]:animate-[slide-out-to-left_200ms_ease-in-out]"
      }
    }
  ],
  "defaultVariants": {
    "side": "bottom" as typeof side[number],
    "overlayBlur": "off" as typeof overlayBlur[number]
  }
}
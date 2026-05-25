const accent = [
  "default",
  "accent",
  "less"
] as const

const orientation = [
  "horizontal",
  "vertical"
] as const

const size = [
  "thin",
  "thick"
] as const

const position = [
  "start",
  "center",
  "end"
] as const

const type = [
  "solid",
  "dashed",
  "dotted",
  "double"
] as const

export default {
  "slots": {
    "root": "flex items-center align-center text-center",
    "border": "",
    "container": "font-[family-name:var(--ui-font-family-primary)] font-(--ui-font-weight-normal) flex",
    "icon": "shrink-0 size-7",
    "avatar": "shrink-0",
    "avatarSize": "sm",
    "label": ""
  },
  "variants": {
    "accent": {
      "default": {
        "container": "text-(--ui-color-design-plain-na-content-secondary) text-(length:--ui-font-size-sm)/(--ui-font-line-height-reset)",
        "border": "border-(--ui-color-divider-vibrant-default)"
      },
      "accent": {
        "container": "text-description text-(length:--ui-font-size-sm)/(--ui-font-line-height-reset)",
        "border": "border-(--ui-color-divider-vibrant-accent-more)"
      },
      "less": {
        "container": "text-(--ui-color-base-6) text-(length:--ui-font-size-sm)/(--ui-font-line-height-reset)",
        "border": "border-(--ui-color-divider-vibrant-less)"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "w-full flex-row",
        "border": "w-full",
        "container": "mx-3 whitespace-nowrap"
      },
      "vertical": {
        "root": "h-full flex-col",
        "border": "h-full",
        "container": "my-2"
      }
    },
    "size": {
      "thin": "",
      "thick": ""
    },
    "position": {
      "start": "",
      "center": "",
      "end": ""
    },
    "type": {
      "solid": {
        "border": "border-solid"
      },
      "dashed": {
        "border": "border-dashed"
      },
      "dotted": {
        "border": "border-dotted"
      },
      "double": {
        "border": "border-double"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal" as typeof orientation[number],
      "position": "start" as typeof position[number],
      "class": {
        "container": "me-3"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "position": "center" as typeof position[number],
      "class": {
        "container": "mx-3"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "position": "end" as typeof position[number],
      "class": {
        "container": "ms-3"
      }
    },
    {
      "orientation": "vertical" as typeof orientation[number],
      "position": "start" as typeof position[number],
      "class": {
        "container": "mb-2"
      }
    },
    {
      "orientation": "vertical" as typeof orientation[number],
      "position": "center" as typeof position[number],
      "class": {
        "container": "my-2"
      }
    },
    {
      "orientation": "vertical" as typeof orientation[number],
      "position": "end" as typeof position[number],
      "class": {
        "container": "mt-2"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "size": "thin" as typeof size[number],
      "class": {
        "border": "border-t-(length:--ui-border-width-thin)"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "size": "thick" as typeof size[number],
      "class": {
        "border": "border-t-(length:--ui-border-width-thick)"
      }
    },
    {
      "orientation": "vertical" as typeof orientation[number],
      "size": "thin" as typeof size[number],
      "class": {
        "border": "border-s-(length:--ui-border-width-thin)"
      }
    },
    {
      "orientation": "vertical" as typeof orientation[number],
      "size": "thick" as typeof size[number],
      "class": {
        "border": "border-s-(length:--ui-border-width-thick)"
      }
    },
    {
      "type": "double" as typeof type[number],
      "size": "thick" as typeof size[number],
      "orientation": "horizontal" as typeof orientation[number],
      "class": {
        "border": "border-t-[length:calc(var(--ui-border-width-thick)_+_1px)]"
      }
    },
    {
      "type": "double" as typeof type[number],
      "size": "thick" as typeof size[number],
      "orientation": "vertical" as typeof orientation[number],
      "class": {
        "border": "border-s-[length:calc(var(--ui-border-width-thick)_+_1px)]"
      }
    }
  ],
  "defaultVariants": {
    "accent": "default" as typeof accent[number],
    "size": "thin" as typeof size[number],
    "type": "solid" as typeof type[number]
  }
}
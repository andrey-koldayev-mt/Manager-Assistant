const size = [
  "xss",
  "xs",
  "sm",
  "md",
  "lg",
  "xl"
] as const

export default {
  "slots": {
    "modal": "p-0 pt-0 pb-[10px]",
    "input": ""
  },
  "variants": {
    "fullscreen": {
      "false": {
        "modal": "sm:max-w-[768px] h-full sm:h-[436px]"
      }
    },
    "size": {
      "xss": {},
      "xs": {},
      "sm": {},
      "md": {},
      "lg": {},
      "xl": {}
    }
  },
  "defaultVariants": {
    "size": "md" as typeof size[number]
  }
}
export default {
  "slots": {
    "root": "sidebar-layout text-label w-full flex",
    "sidebar": "air-sidebar before:absolute before:inset-0 before:z-[-1] before:bg-(--leftmenu-bg-expanded) w-60 pe-[3px] rtl:me-[14px] inset-y-0 left-0 max-lg:hidden",
    "sidebarSlideoverContainer": "w-full sm:max-w-80",
    "sidebarSlideover": "h-full overflow-hidden flex flex-col text-label bg-(--ui-color-base-white-fixed) dark:bg-(--ui-color-bg-content-primary) edge-dark:bg-[#21334cf0] ring-1 ring-(--ui-color-divider-vibrant-less) shadow-xs rounded-none",
    "sidebarSlideoverBtnClose": "-mb-3 px-4 pt-3",
    "contentWrapper": "flex-1 flex flex-col",
    "header": "air-header px-(--content-area-shift) min-h-(--topbar-height) flex items-center gap-x-1",
    "headerMenuIcon": "lg:hidden",
    "headerWrapper": "min-w-0 flex-1 h-full",
    "pageWrapper": "flex flex-col lg:grid lg:grid-cols-12 lg:gap-[22px]",
    "container": "lg:col-span-12 lg:min-w-0 flex-1 flex flex-col lg:gap-[22px]",
    "containerWrapper": "grow group/layout-content",
    "pageTopWrapper": "text-(--ui-color-base-1) flex items-center gap-[12px]",
    "pageActionsWrapper": "flex flex-col md:flex-row items-start md:items-center justify-start gap-[12px]",
    "containerWrapperInner": "size-full",
    "pageRightWrapper": "",
    "pageBottomWrapper": "",
    "loadingWrapper": "cursor-wait w-full h-dvh flex flex-row flex-nowrap items-center justify-center",
    "loadingIcon": "text-(--ui-color-design-plain-content-icon-secondary) size-[110px] animate-spin-slow"
  },
  "variants": {
    "inner": {
      "true": {
        "root": "base-mode --inner relative isolate h-full overflow-hidden",
        "sidebar": "relative z-[0]",
        "header": "relative",
        "container": "mt-0",
        "containerWrapper": "",
        "pageBottomWrapper": "flex-0"
      },
      "false": {
        "root": "--app max-lg:flex-col",
        "sidebar": "h-screen lg:sticky",
        "header": "relative",
        "container": "relative",
        "containerWrapper": ""
      }
    },
    "offContentScrollbar": {
      "false": "",
      "true": ""
    },
    "useSidebar": {
      "true": "",
      "false": ""
    },
    "useLightContent": {
      "true": {
        "containerWrapper": "base-mode text-(--ui-color-text-primary) bg-(--ui-color-bg-content-primary)",
        "loadingIcon": "edge-dark:text-(--ui-color-gray-70)"
      },
      "false": {
        "pageWrapper": "px-(--content-area-shift)",
        "container": ""
      }
    },
    "loading": {
      "true": ""
    },
    "useNavbar": {
      "true": "",
      "false": ""
    },
    "useRightBar": {
      "true": {
        "pageWrapper": "",
        "container": "lg:col-span-10",
        "pageRightWrapper": "lg:col-span-2 order-first lg:order-last"
      },
      "false": {
        "container": ""
      }
    }
  },
  "compoundVariants": [
    {
      "inner": true,
      "useLightContent": true,
      "class": {
        "container": "",
        "pageTopWrapper": "px-0 lg:px-0",
        "pageActionsWrapper": "px-0 lg:px-0",
        "containerWrapper": "p-[20px] rounded-(--ui-border-radius-md)"
      }
    },
    {
      "inner": false,
      "useLightContent": true,
      "class": {
        "container": "",
        "containerWrapper": "p-6 lg:px-[22px] lg:py-[15px] lg:rounded-(--ui-border-radius-md)"
      }
    },
    {
      "inner": true,
      "offContentScrollbar": false,
      "class": {}
    },
    {
      "inner": true,
      "useSidebar": [
        true,
        false
      ],
      "class": {
        "pageWrapper": "pb-[20px] lg:pt-0 lg:px-[20px] lg:ps-[20px] lg:pe-[20px]"
      }
    },
    {
      "inner": false,
      "useSidebar": true,
      "class": {
        "header": "ps-[calc(var(--content-area-shift)-10px)] pe-[calc(var(--content-area-shift))] lg:px-(--content-area-shift)",
        "pageWrapper": "lg:px-(--content-area-shift)",
        "container": "",
        "contentWrapper": ""
      }
    },
    {
      "inner": false,
      "useSidebar": false,
      "class": {
        "pageWrapper": "px-(--content-area-shift)",
        "container": "",
        "contentWrapper": "lg:pl-0"
      }
    },
    {
      "inner": true,
      "useNavbar": [
        true,
        false
      ],
      "class": {
        "container": "h-full"
      }
    },
    {
      "inner": false,
      "useNavbar": true,
      "class": {
        "container": "h-auto"
      }
    },
    {
      "inner": false,
      "useNavbar": false,
      "class": {
        "container": "h-full"
      }
    }
  ],
  "defaultVariants": {
    "inner": false,
    "noContentScrollbar": false,
    "useLightContent": true
  }
}
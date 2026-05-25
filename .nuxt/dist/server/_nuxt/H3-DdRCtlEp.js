import { computed, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderVNode, ssrRenderSlot } from "vue/server-renderer";
import { p as useComponentProps, u as useAppConfig, x as useRuntimeConfig, n as tv, j as icons } from "../server.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/hookable/dist/index.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/unctx/dist/index.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/ufo/dist/index.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/defu/dist/defu.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/@unhead/vue/dist/index.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/klona/dist/index.mjs";
import "@vueuse/core";
import "@vueuse/shared";
import "@bitrix24/b24icons-vue/actions/ArrowToTheLeftIcon";
import "@bitrix24/b24icons-vue/actions/ArrowToTheRightIcon";
import "@bitrix24/b24icons-vue/outline/CheckLIcon";
import "@bitrix24/b24icons-vue/outline/ChevronTopLIcon";
import "@bitrix24/b24icons-vue/outline/ChevronLeftLIcon";
import "@bitrix24/b24icons-vue/outline/ChevronRightLIcon";
import "@bitrix24/b24icons-vue/actions/DoubleShevronsRightIcon";
import "@bitrix24/b24icons-vue/actions/DoubleShevronsLeftIcon";
import "@bitrix24/b24icons-vue/outline/CrossMIcon";
import "@bitrix24/b24icons-vue/button/DotsIcon";
import "@bitrix24/b24icons-vue/actions/Refresh6Icon";
import "@bitrix24/b24icons-vue/actions/Minus30Icon";
import "@bitrix24/b24icons-vue/actions/Plus30Icon";
import "@bitrix24/b24icons-vue/main/Search2Icon";
import "@bitrix24/b24icons-vue/animated/LoaderWaitIcon";
import "@bitrix24/b24icons-vue/outline/ChevronDownLIcon";
import "@bitrix24/b24icons-vue/outline/ScreenIcon";
import "@bitrix24/b24icons-vue/outline/SunIcon";
import "@bitrix24/b24icons-vue/outline/MoonIcon";
import "@bitrix24/b24icons-vue/outline/TagIcon";
import "@bitrix24/b24icons-vue/outline/InfoCircleIcon";
import "@bitrix24/b24icons-vue/outline/IdeaLampIcon";
import "@bitrix24/b24icons-vue/main/WarningIcon";
import "@bitrix24/b24icons-vue/outline/AlertIcon";
import "@bitrix24/b24icons-vue/outline/CopyIcon";
import "@bitrix24/b24icons-vue/outline/CircleCheckIcon";
import "@bitrix24/b24icons-vue/outline/FileIcon";
import "@bitrix24/b24icons-vue/outline/UploadFileIcon";
import "@bitrix24/b24icons-vue/outline/ArrowDownLIcon";
import "@bitrix24/b24icons-vue/outline/ArrowTopLIcon";
import "@bitrix24/b24icons-vue/outline/StopLIcon";
import "@bitrix24/b24icons-vue/outline/RefreshIcon";
import "@bitrix24/b24icons-vue/main/SendIcon";
import "@bitrix24/b24icons-vue/outline/DragLIcon";
import "@bitrix24/b24icons-vue/outline/GoToLIcon";
import "@bitrix24/b24icons-vue/outline/HamburgerMenuIcon";
import "@bitrix24/b24icons-vue/outline/CloseChatIcon";
import "@bitrix24/b24icons-vue/outline/OpenChatIcon";
import "@bitrix24/b24icons-vue/social/GitHubIcon";
import "@bitrix24/b24icons-vue/social/MdnwebdocsIcon";
import "@bitrix24/b24icons-vue/common-service/Bitrix24Icon";
import "@bitrix24/b24icons-vue/outline/DemonstrationOnIcon";
import "@bitrix24/b24icons-vue/outline/DesignIcon";
import "@bitrix24/b24icons-vue/outline/FavoriteIcon";
import "@bitrix24/b24icons-vue/outline/MoreMIcon";
import "@bitrix24/b24icons-vue/file-type/NuxtIcon";
import "@bitrix24/b24icons-vue/outline/AiStarsIcon";
import "@bitrix24/b24icons-vue/editor/EncloseTextInCodeTagIcon";
import "@bitrix24/b24icons-vue/outline/PlayLIcon";
import "tailwind-variants";
import "ohash/utils";
import "@bitrix24/b24icons-vue/outline/ChevronDownSIcon";
import "@bitrix24/b24icons-vue/animated/LoaderClockIcon";
import "@bitrix24/b24icons-vue/specialized/SpinnerIcon";
import "@bitrix24/b24icons-vue/actions/Cross20Icon";
const theme = {
  "slots": {
    "base": "relative mb-2 scroll-mt-[calc(32px+45px+24px+var(--topbar-height))] lg:scroll-mt-[calc(32px+22px+15px+var(--topbar-height))] text-(length:--ui-font-size-3xl) [&>a>code]:text-(length:--ui-font-size-2xl)/6 [&>a]:focus-visible:outline-(--ui-color-accent-main-primary) hover:[&>a>code]:text-(--ui-color-accent-main-primary-alt-2) hover:[&>a>code]:bg-(--ui-color-design-selection-bg) hover:[&>a>code]:ring-(--ui-color-design-selection-stroke)",
    "leading": "absolute style-tinted-no-accent-1 -ms-4.5 top-[9px] opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-[1px] bg-(--b24ui-background) ring-(length:--b24ui-border-width) ring-(--b24ui-border-color) text-(--b24ui-color) hover:text-(--ui-color-accent-main-primary-alt-2) rounded-(--ui-border-radius-2xs) hidden lg:flex transition",
    "leadingIcon": "size-[14px] shrink-0",
    "link": "group lg:ps-2 lg:-ms-2"
  },
  "variants": {
    "accent": {
      "default": "text-label",
      "accent": "text-(--ui-color-accent-brand-blue)",
      "accent-more": "text-(--ui-color-accent-soft-element-blue)",
      "less": "text-description",
      "less-more": "text-(--ui-color-design-plain-na-content-secondary)"
    }
  },
  "defaultVariants": {
    "accent": "default"
  }
};
const _sfc_main = {
  __name: "ProseH3",
  __ssrInlineRender: true,
  props: {
    id: { type: String, required: false },
    accent: { type: null, required: false, default: "default" },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("prose.h3", _props);
    const appConfig = useAppConfig();
    const { headings } = useRuntimeConfig().public?.mdc || {};
    const b24ui = computed(() => tv({ extend: tv(theme), ...appConfig.b24ui?.prose?.h3 || {} })({
      accent: props.accent
    }));
    const generate = computed(() => props.id && typeof headings?.anchorLinks === "object" && headings.anchorLinks.h3);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h3${ssrRenderAttrs(mergeProps({
        id: unref(props).id,
        "data-slot": "base",
        class: b24ui.value.base({ class: [unref(props).b24ui?.base, unref(props).class] })
      }, _attrs))}>`);
      if (unref(props).id && generate.value) {
        _push(`<a${ssrRenderAttr("href", `#${unref(props).id}`)} data-slot="link" class="${ssrRenderClass(b24ui.value.link({ class: unref(props).b24ui?.link }))}"><span data-slot="leading" class="${ssrRenderClass(b24ui.value.leading({ class: unref(props).b24ui?.leading }))}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(icons).hash), {
          "data-slot": "leadingIcon",
          class: b24ui.value.leadingIcon({ class: unref(props).b24ui?.leadingIcon })
        }, null), _parent);
        _push(`</span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</h3>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/prose/H3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=H3-DdRCtlEp.js.map

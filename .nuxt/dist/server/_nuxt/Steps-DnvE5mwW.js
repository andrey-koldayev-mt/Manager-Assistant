import { computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { p as useComponentProps, u as useAppConfig, n as tv } from "../server.mjs";
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
  "base": "ms-4 my-4 border-s border-(--ui-color-design-tinted-na-bg) ps-8 [counter-reset:step]",
  "variants": {
    "level": {
      "2": "[&>h2]:[counter-increment:step] [&>h2]:relative [&>h2]:before:absolute [&>h2]:before:size-7 [&>h2]:before:bg-(--ui-color-design-tinted-na-bg) [&>h2]:before:rounded-full [&>h2]:before:font-semibold [&>h2]:before:text-md [&>h2]:before:tabular-nums [&>h2]:before:inline-flex [&>h2]:before:items-center [&>h2]:before:justify-center [&>h2]:before:ring-4 [&>h2]:before:ring-(--ui-color-design-tinted-na-bg) [&>h2]:before:-ms-[48.5px] [&>h2]:before:mt-0 [&>h2]:before:content-[counter(step)] [&>h2>a>span.absolute]:hidden",
      "3": "[&>h3]:[counter-increment:step] [&>h3]:relative [&>h3]:before:absolute [&>h3]:before:size-6 [&>h3]:before:inset-x-0.5 [&>h3]:before:bg-(--ui-color-design-tinted-na-bg) [&>h3]:before:rounded-full [&>h3]:before:font-semibold [&>h3]:before:text-md [&>h3]:before:tabular-nums [&>h3]:before:inline-flex [&>h3]:before:items-center [&>h3]:before:justify-center [&>h3]:before:ring-4 [&>h3]:before:ring-(--ui-color-design-tinted-na-bg) [&>h3]:before:-ms-[48.5px] [&>h3]:before:content-[counter(step)] [&>h3>a>span.absolute]:hidden",
      "4": "[&>h4]:[counter-increment:step] [&>h4]:relative [&>h4]:before:absolute [&>h4]:before:size-6 [&>h4]:before:inset-x-0.5 [&>h4]:before:bg-(--ui-color-design-tinted-na-bg) [&>h4]:before:rounded-full [&>h4]:before:font-semibold [&>h4]:before:text-md [&>h4]:before:tabular-nums [&>h4]:before:inline-flex [&>h4]:before:items-center [&>h4]:before:justify-center [&>h4]:before:ring-4 [&>h4]:before:ring-(--ui-color-design-tinted-na-bg) [&>h4]:before:-ms-[48.5px] [&>h4]:before:content-[counter(step)] [&>h4>a>span.absolute]:hidden"
    }
  },
  "defaultVariants": {
    "level": "3"
  }
};
const _sfc_main = {
  __name: "ProseSteps",
  __ssrInlineRender: true,
  props: {
    level: { type: null, required: false },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("prose.steps", _props);
    const appConfig = useAppConfig();
    const b24ui = computed(() => tv({ extend: tv(theme), ...appConfig.b24ui?.prose?.steps || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: b24ui.value({ class: [unref(props).b24ui?.base, unref(props).class], level: unref(props).level })
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/prose/Steps.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Steps-DnvE5mwW.js.map

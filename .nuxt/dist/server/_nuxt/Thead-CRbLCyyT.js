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
  "slots": {
    "base": "bg-(--ui-color-design-tinted-na-bg) text-(--ui-color-design-tinted-na-content)"
  }
};
const _sfc_main = {
  __name: "ProseThead",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false },
    b24ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("prose.thead", _props);
    const appConfig = useAppConfig();
    const b24ui = computed(() => tv({ extend: tv(theme), ...appConfig.b24ui?.prose?.thead || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<thead${ssrRenderAttrs(mergeProps({
        "data-slot": "base",
        class: b24ui.value.base({ class: [unref(props).b24ui?.base, unref(props).class] })
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</thead>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/prose/Thead.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Thead-CRbLCyyT.js.map

import { useTemplateRef, computed, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderVNode, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { useClipboard } from "@vueuse/core";
import { p as useComponentProps, w as useLocale, u as useAppConfig, n as tv, m as resolveIcon, d as _sfc_main$1, j as icons, g as extractPromptText } from "../server.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/hookable/dist/index.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/unctx/dist/index.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/ufo/dist/index.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/defu/dist/defu.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/@unhead/vue/dist/index.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/klona/dist/index.mjs";
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
    "root": "relative flex flex-wrap items-center gap-2 border border-muted bg-muted rounded-md px-4 py-3 my-5 last:mb-0",
    "icon": "size-4 shrink-0 text-highlighted",
    "content": "min-w-0",
    "description": "text-sm/6 text-description font-medium",
    "actions": "flex flex-wrap items-center gap-1.5 ms-auto"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "ProsePrompt",
  __ssrInlineRender: true,
  props: {
    description: { type: String, required: false },
    icon: { type: [Function, Object], required: false },
    iconName: { type: String, required: false },
    actions: { type: Array, required: false, default: () => ["copy"] },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("prose.prompt", _props);
    const { t } = useLocale();
    const { copy, copied } = useClipboard();
    const appConfig = useAppConfig();
    const bodyRef = useTemplateRef("bodyRef");
    const b24ui = computed(() => tv({ extend: tv(theme), ...appConfig.b24ui?.prose?.prompt || {} })());
    const iconFromIconName = computed(() => resolveIcon(props.iconName));
    function getPromptText() {
      return extractPromptText(bodyRef.value);
    }
    function copyPrompt() {
      copy(getPromptText());
    }
    function openInCursor() {
      const url = new URL("cursor://anysphere.cursor-deeplink/prompt");
      url.searchParams.set("text", getPromptText());
      (void 0).open(url.toString(), "_self");
    }
    function openInWindsurf() {
      const url = new URL("windsurf://cascade/newChat");
      url.searchParams.set("prompt", getPromptText());
      (void 0).open(url.toString(), "_self");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "root",
        class: b24ui.value.root({ class: [unref(props).b24ui?.root, unref(props).class] })
      }, _ctx.$attrs, _attrs))}>`);
      if (unref(props).icon) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(props).icon), {
          "data-slot": "icon",
          class: b24ui.value.icon({ class: unref(props).b24ui?.icon })
        }, null), _parent);
      } else if (iconFromIconName.value) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(iconFromIconName.value), {
          "data-slot": "icon",
          class: b24ui.value.icon({ class: unref(props).b24ui?.icon })
        }, null), _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`<div data-slot="content" class="${ssrRenderClass(b24ui.value.content({ class: unref(props).b24ui?.content }))}">`);
      if (unref(props).description) {
        _push(`<p data-slot="description" class="${ssrRenderClass(b24ui.value.description({ class: unref(props).b24ui?.description }))}">${ssrInterpolate(unref(props).description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div data-slot="body" hidden>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><div data-slot="actions" class="${ssrRenderClass(b24ui.value.actions({ class: unref(props).b24ui?.actions }))}">`);
      if (unref(props).actions.includes("copy")) {
        _push(ssrRenderComponent(_sfc_main$1, {
          icon: unref(copied) ? unref(icons).copyCheck : unref(icons).copy,
          color: "air-primary-copilot",
          size: "sm",
          label: unref(t)("prose.prompt.copy"),
          onClick: copyPrompt
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(props).actions.includes("cursor")) {
        _push(ssrRenderComponent(_sfc_main$1, {
          icon: unref(icons).CursorIcon,
          color: "air-secondary-accent-2",
          size: "sm",
          label: unref(t)("prose.prompt.openIn", { name: "Cursor" }),
          onClick: openInCursor
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(props).actions.includes("windsurf")) {
        _push(ssrRenderComponent(_sfc_main$1, {
          icon: unref(icons).WindsurfIcon,
          color: "air-secondary-accent-2",
          size: "sm",
          label: unref(t)("prose.prompt.openIn", { name: "Windsurf" }),
          onClick: openInWindsurf
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/prose/Prompt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Prompt-DckCVPeC.js.map

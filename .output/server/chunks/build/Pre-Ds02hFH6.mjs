import { useTemplateRef, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { useClipboard } from '@vueuse/core';
import { o as useComponentProps, x as useLocale, u as useAppConfig, m as tv, d as _sfc_main$h, j as icons } from './server.mjs';
import _sfc_main$1 from './CodeIcon-ClyZtDla.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:fs/promises';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import '@vueuse/shared';
import '@bitrix24/b24icons-vue/actions/ArrowToTheLeftIcon';
import '@bitrix24/b24icons-vue/actions/ArrowToTheRightIcon';
import '@bitrix24/b24icons-vue/outline/CheckLIcon';
import '@bitrix24/b24icons-vue/outline/ChevronTopLIcon';
import '@bitrix24/b24icons-vue/outline/ChevronLeftLIcon';
import '@bitrix24/b24icons-vue/outline/ChevronRightLIcon';
import '@bitrix24/b24icons-vue/actions/DoubleShevronsRightIcon';
import '@bitrix24/b24icons-vue/actions/DoubleShevronsLeftIcon';
import '@bitrix24/b24icons-vue/outline/CrossMIcon';
import '@bitrix24/b24icons-vue/button/DotsIcon';
import '@bitrix24/b24icons-vue/actions/Refresh6Icon';
import '@bitrix24/b24icons-vue/actions/Minus30Icon';
import '@bitrix24/b24icons-vue/actions/Plus30Icon';
import '@bitrix24/b24icons-vue/main/Search2Icon';
import '@bitrix24/b24icons-vue/animated/LoaderWaitIcon';
import '@bitrix24/b24icons-vue/outline/ChevronDownLIcon';
import '@bitrix24/b24icons-vue/outline/ScreenIcon';
import '@bitrix24/b24icons-vue/outline/SunIcon';
import '@bitrix24/b24icons-vue/outline/MoonIcon';
import '@bitrix24/b24icons-vue/outline/TagIcon';
import '@bitrix24/b24icons-vue/outline/InfoCircleIcon';
import '@bitrix24/b24icons-vue/outline/IdeaLampIcon';
import '@bitrix24/b24icons-vue/main/WarningIcon';
import '@bitrix24/b24icons-vue/outline/AlertIcon';
import '@bitrix24/b24icons-vue/outline/CopyIcon';
import '@bitrix24/b24icons-vue/outline/CircleCheckIcon';
import '@bitrix24/b24icons-vue/outline/FileIcon';
import '@bitrix24/b24icons-vue/outline/UploadFileIcon';
import '@bitrix24/b24icons-vue/outline/ArrowDownLIcon';
import '@bitrix24/b24icons-vue/outline/ArrowTopLIcon';
import '@bitrix24/b24icons-vue/outline/StopLIcon';
import '@bitrix24/b24icons-vue/outline/RefreshIcon';
import '@bitrix24/b24icons-vue/main/SendIcon';
import '@bitrix24/b24icons-vue/outline/DragLIcon';
import '@bitrix24/b24icons-vue/outline/GoToLIcon';
import '@bitrix24/b24icons-vue/outline/HamburgerMenuIcon';
import '@bitrix24/b24icons-vue/outline/CloseChatIcon';
import '@bitrix24/b24icons-vue/outline/OpenChatIcon';
import '@bitrix24/b24icons-vue/social/GitHubIcon';
import '@bitrix24/b24icons-vue/social/MdnwebdocsIcon';
import '@bitrix24/b24icons-vue/common-service/Bitrix24Icon';
import '@bitrix24/b24icons-vue/outline/DemonstrationOnIcon';
import '@bitrix24/b24icons-vue/outline/DesignIcon';
import '@bitrix24/b24icons-vue/outline/FavoriteIcon';
import '@bitrix24/b24icons-vue/outline/MoreMIcon';
import '@bitrix24/b24icons-vue/file-type/NuxtIcon';
import '@bitrix24/b24icons-vue/outline/AiStarsIcon';
import '@bitrix24/b24icons-vue/editor/EncloseTextInCodeTagIcon';
import '@bitrix24/b24icons-vue/outline/PlayLIcon';
import 'tailwind-variants';
import '@bitrix24/b24icons-vue/outline/ChevronDownSIcon';
import '@bitrix24/b24icons-vue/animated/LoaderClockIcon';
import '@bitrix24/b24icons-vue/specialized/SpinnerIcon';
import '@bitrix24/b24icons-vue/actions/Cross20Icon';
import '@internationalized/date';
import '@floating-ui/vue';
import 'aria-hidden';
import '@bitrix24/b24icons-vue/main/CircleCheckIcon';
import '@bitrix24/b24icons-vue/main/RocketIcon';
import '@bitrix24/b24icons-vue/main/RefreshIcon';
import '@bitrix24/b24icons-vue/file-type/TerminalIcon';
import '@bitrix24/b24icons-vue/file-type/YamlIcon';
import '@bitrix24/b24icons-vue/file-type/BunIcon';
import '@bitrix24/b24icons-vue/file-type/YarnIcon';
import '@bitrix24/b24icons-vue/file-type/NpmIcon';
import '@bitrix24/b24icons-vue/file-type/PnpmIcon';
import '@bitrix24/b24icons-vue/file-type/FaviconIcon';
import '@bitrix24/b24icons-vue/file-type/DartlangIcon';
import '@bitrix24/b24icons-vue/file-type/JuliaIcon';
import '@bitrix24/b24icons-vue/file-type/PerlIcon';
import '@bitrix24/b24icons-vue/file-type/ArduinoIcon';
import '@bitrix24/b24icons-vue/file-type/CppheaderIcon';
import '@bitrix24/b24icons-vue/file-type/ScalaIcon';
import '@bitrix24/b24icons-vue/file-type/ErlangIcon';
import '@bitrix24/b24icons-vue/file-type/ElixirIcon';
import '@bitrix24/b24icons-vue/file-type/BicepIcon';
import '@bitrix24/b24icons-vue/file-type/GleamIcon';
import '@bitrix24/b24icons-vue/file-type/GoIcon';
import '@bitrix24/b24icons-vue/file-type/PowershellIcon';
import '@bitrix24/b24icons-vue/file-type/LispIcon';
import '@bitrix24/b24icons-vue/file-type/RubyIcon';
import '@bitrix24/b24icons-vue/file-type/RustIcon';
import '@bitrix24/b24icons-vue/file-type/KotlinIcon';
import '@bitrix24/b24icons-vue/file-type/FsharpIcon';
import '@bitrix24/b24icons-vue/file-type/HaskellIcon';
import '@bitrix24/b24icons-vue/file-type/FortranIcon';
import '@bitrix24/b24icons-vue/file-type/AssemblyIcon';
import '@bitrix24/b24icons-vue/file-type/CsharpIcon';
import '@bitrix24/b24icons-vue/file-type/PythonIcon';
import '@bitrix24/b24icons-vue/file-type/MarkdownIcon';
import '@bitrix24/b24icons-vue/file-type/JsIcon';
import '@bitrix24/b24icons-vue/file-type/TypescriptIcon';
import '@bitrix24/b24icons-vue/file-type/VueIcon';
import '@bitrix24/b24icons-vue/file-type/TailwindIcon';
import '@bitrix24/b24icons-vue/file-type/VscodeIcon';
import '@bitrix24/b24icons-vue/file-type/DotenvIcon';
import '@bitrix24/b24icons-vue/file-type/GitIcon';
import '@bitrix24/b24icons-vue/file-type/EslintIcon';
import '@bitrix24/b24icons-vue/file-type/EditorconfigIcon';
import '@bitrix24/b24icons-vue/file-type/TsconfigIcon';
import '@bitrix24/b24icons-vue/file-type/NodeIcon';

const theme = {
  "slots": {
    "root": "relative group my-5 w-full",
    "header": "flex items-center gap-1.5 border border-(--ui-color-design-tinted-na-stroke) bg-(--ui-color-base-8) text-(--ui-color-design-tinted-na-content) border-b-0 relative rounded-t-md px-4 py-3",
    "filename": "text-(--ui-color-design-tinted-na-content) text-(length:--ui-font-size-md)/(--ui-size-xl)",
    "icon": "size-[16px] shrink-0 mt-px",
    "copy": "absolute top-[11px] right-[11px] lg:opacity-0 lg:group-hover:opacity-100 transition",
    "base": "text-green-350 group text-pretty text-(length:--ui-font-size-md)/(--ui-font-line-height-md) font-[family-name:var(--ui-font-family-system-mono)] border border-(--ui-color-design-tinted-na-stroke) bg-(--ui-color-g-plastic-greish-bg) rounded-(--ui-border-radius-md) px-4 py-3 whitespace-pre-wrap wrap-break-word overflow-x-auto focus:outline-none **:[.line]:block **:[.line.highlight]:-mx-4 **:[.line.highlight]:px-4 **:[.line.highlight]:bg-(--ui-color-g-plastic-bluish-bg)/30!"
  },
  "variants": {
    "filename": {
      "true": {
        "root": "[&>pre]:rounded-t-none [&>pre]:my-0 my-5"
      }
    }
  }
};
const _sfc_main = {
  __name: "ProsePre",
  __ssrInlineRender: true,
  props: {
    icon: { type: [Function, Object], required: false },
    code: { type: String, required: false },
    language: { type: String, required: false },
    filename: { type: String, required: false },
    highlights: { type: Array, required: false },
    hideHeader: { type: Boolean, required: false },
    meta: { type: String, required: false },
    class: { type: null, required: false },
    style: { type: null, required: false },
    b24ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("prose.pre", _props);
    const { t } = useLocale();
    const { copy, copied } = useClipboard();
    const appConfig = useAppConfig();
    const baseRef = useTemplateRef("baseRef");
    const b24ui = computed(() => tv({ extend: tv(theme), ...appConfig.b24ui?.prose?.pre || {} })());
    function copyCode() {
      const code = props.code ?? baseRef.value?.textContent ?? "";
      copy(code);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "root",
        class: b24ui.value.root({ class: [unref(props).b24ui?.root], filename: !!unref(props).filename })
      }, _attrs))}>`);
      if (unref(props).filename && !unref(props).hideHeader) {
        _push(`<div data-slot="header" class="${ssrRenderClass(b24ui.value.header({ class: unref(props).b24ui?.header }))}">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          icon: unref(props).icon,
          filename: unref(props).filename,
          "data-slot": "icon",
          class: b24ui.value.icon({ class: unref(props).b24ui?.icon })
        }, null, _parent));
        _push(`<span data-slot="filename" class="${ssrRenderClass(b24ui.value.filename({ class: unref(props).b24ui?.filename }))}">${ssrInterpolate(unref(props).filename)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$h, {
        color: "air-secondary-no-accent",
        size: "sm",
        "aria-label": unref(t)("prose.pre.copy"),
        "data-slot": "copy",
        class: b24ui.value.copy({ class: unref(props).b24ui?.copy }),
        tabindex: "-1",
        icon: unref(copied) ? unref(icons).copyCheck : unref(icons).copy,
        b24ui: { leadingIcon: [unref(copied) ? "text-(--ui-color-accent-main-success)" : "text-(--ui-btn-color)"] },
        onClick: copyCode
      }, null, _parent));
      _push(`<pre${ssrRenderAttrs(mergeProps({
        ref_key: "baseRef",
        ref: baseRef,
        "data-slot": "base",
        class: b24ui.value.base({ class: [unref(props).b24ui?.base, unref(props).class] })
      }, _ctx.$attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/prose/Pre.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Pre-Ds02hFH6.mjs.map

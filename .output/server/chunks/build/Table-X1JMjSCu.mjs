import { computed, mergeProps, unref, withCtx, createVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { o as useComponentProps, u as useAppConfig, m as tv, a as Primitive } from './server.mjs';
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
import '@vueuse/core';
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

const theme$1 = {
  "slots": {
    "base": "font-[family-name:var(--ui-font-family-primary)] [&>table]:text-(length:--ui-font-size-md)/(--ui-font-line-height-md) [&>table]:relative [&>table]:w-full [&>table]:text-left [&>table]:rtl:text-right [&>table]:text-label [&>table>thead>tr>td]:align-middle [&>table>thead>tr>th]:align-middle [&>table>tbody>tr>td]:align-middle [&>table>tbody>tr>th]:align-middle [&>table>tfoot>tr>td]:align-middle [&>table>tfoot>tr>th]:align-middle [&>table>thead>tr>td]:whitespace-nowrap [&>table>thead>tr>td]:text-(length:--ui-font-size-md) [&>table>thead>tr>td]:font-(--ui-font-weight-normal) [&>table>thead>tr>th]:whitespace-nowrap [&>table>thead>tr>th]:text-(length:--ui-font-size-md) [&>table>thead>tr>th]:font-(--ui-font-weight-normal) [&>table>tbody>tr>th]:whitespace-nowrap [&>table>tbody>tr>th]:text-(length:--ui-font-size-md) [&>table>tbody>tr>th]:font-(--ui-font-weight-normal) [&>table>tfoot>tr>td]:whitespace-nowrap [&>table>tfoot>tr>td]:text-(length:--ui-font-size-md) [&>table>tfoot>tr>td]:font-(--ui-font-weight-normal) [&>table>tfoot>tr>th]:whitespace-nowrap [&>table>tfoot>tr>th]:text-(length:--ui-font-size-md) [&>table>tfoot>tr>th]:font-(--ui-font-weight-normal) [&>table>thead>tr]:border-(--ui-color-design-tinted-na-stroke) [&>table>tbody>tr]:border-(--ui-color-design-tinted-na-stroke) [&>table>tfoot]:border-(--ui-color-design-tinted-na-stroke) [&>table>thead>tr]:border-b [&>table>tbody>tr:not(:last-child)]:border-b [&>table>tfoot]:border-t"
  },
  "variants": {
    "size": {
      "xs": "[&>table>thead>tr>td]:text-(length:--ui-font-size-xs)/(--ui-font-line-height-2xs) [&>table>thead>tr>td]:px-2 [&>table>thead>tr>td]:py-1 [&>table>thead>tr>th]:text-(length:--ui-font-size-xs)/(--ui-font-line-height-2xs) [&>table>thead>tr>th]:px-2 [&>table>thead>tr>th]:py-1 [&>table>tbody>tr>td]:text-(length:--ui-font-size-xs)/(--ui-font-line-height-2xs) [&>table>tbody>tr>td]:px-2 [&>table>tbody>tr>td]:py-1 [&>table>tbody>tr>th]:text-(length:--ui-font-size-xs)/(--ui-font-line-height-2xs) [&>table>tbody>tr>th]:px-2 [&>table>tbody>tr>th]:py-1 [&>table>tfoot>tr>td]:text-(length:--ui-font-size-xs)/(--ui-font-line-height-2xs) [&>table>tfoot>tr>td]:px-2 [&>table>tfoot>tr>td]:py-1 [&>table>tfoot>tr>th]:text-(length:--ui-font-size-xs)/(--ui-font-line-height-2xs) [&>table>tfoot>tr>th]:px-2 [&>table>tfoot>tr>th]:py-1",
      "sm": "[&>table>thead>tr>td]:text-(length:--ui-font-size-sm)/(--ui-font-line-height-sm) [&>table>thead>tr>td]:px-3 [&>table>thead>tr>td]:py-2 [&>table>thead>tr>th]:text-(length:--ui-font-size-sm)/(--ui-font-line-height-sm) [&>table>thead>tr>th]:px-3 [&>table>thead>tr>th]:py-2 [&>table>tbody>tr>td]:text-(length:--ui-font-size-sm)/(--ui-font-line-height-sm) [&>table>tbody>tr>td]:px-3 [&>table>tbody>tr>td]:py-2 [&>table>tbody>tr>th]:text-(length:--ui-font-size-sm)/(--ui-font-line-height-sm) [&>table>tbody>tr>th]:px-3 [&>table>tbody>tr>th]:py-2 [&>table>tfoot>tr>td]:text-(length:--ui-font-size-sm)/(--ui-font-line-height-sm) [&>table>tfoot>tr>td]:px-3 [&>table>tfoot>tr>td]:py-2 [&>table>tfoot>tr>th]:text-(length:--ui-font-size-sm)/(--ui-font-line-height-sm) [&>table>tfoot>tr>th]:px-3 [&>table>tfoot>tr>th]:py-2",
      "md": "[&>table>thead>tr>td]:text-(length:--ui-font-size-md)/(--ui-font-line-height-md) [&>table>thead>tr>td]:px-4 [&>table>thead>tr>td]:py-3.5 [&>table>thead>tr>th]:text-(length:--ui-font-size-md)/(--ui-font-line-height-md) [&>table>thead>tr>th]:px-4 [&>table>thead>tr>th]:py-3.5 [&>table>tbody>tr>td]:text-(length:--ui-font-size-md)/(--ui-font-line-height-md) [&>table>tbody>tr>td]:px-4 [&>table>tbody>tr>td]:py-3.5 [&>table>tbody>tr>th]:text-(length:--ui-font-size-md)/(--ui-font-line-height-md) [&>table>tbody>tr>th]:px-4 [&>table>tbody>tr>th]:py-3.5 [&>table>tfoot>tr>td]:text-(length:--ui-font-size-md)/(--ui-font-line-height-md) [&>table>tfoot>tr>td]:px-4 [&>table>tfoot>tr>td]:py-3.5 [&>table>tfoot>tr>th]:text-(length:--ui-font-size-md)/(--ui-font-line-height-md) [&>table>tfoot>tr>th]:px-4 [&>table>tfoot>tr>th]:py-3.5",
      "lg": "[&>table>thead>tr>td]:text-(length:--ui-font-size-lg)/(--ui-font-line-height-lg) [&>table>thead>tr>td]:px-5 [&>table>thead>tr>td]:py-4 [&>table>thead>tr>th]:text-(length:--ui-font-size-lg)/(--ui-font-line-height-lg) [&>table>thead>tr>th]:px-5 [&>table>thead>tr>th]:py-4 [&>table>tbody>tr>td]:text-(length:--ui-font-size-lg)/(--ui-font-line-height-lg) [&>table>tbody>tr>td]:px-5 [&>table>tbody>tr>td]:py-4 [&>table>tbody>tr>th]:text-(length:--ui-font-size-lg)/(--ui-font-line-height-lg) [&>table>tbody>tr>th]:px-5 [&>table>tbody>tr>th]:py-4 [&>table>tfoot>tr>td]:text-(length:--ui-font-size-lg)/(--ui-font-line-height-lg) [&>table>tfoot>tr>td]:px-5 [&>table>tfoot>tr>td]:py-4 [&>table>tfoot>tr>th]:text-(length:--ui-font-size-lg)/(--ui-font-line-height-lg) [&>table>tfoot>tr>th]:px-5 [&>table>tfoot>tr>th]:py-4"
    },
    "rounded": {
      "true": "rounded-(--ui-border-radius-md)",
      "false": ""
    },
    "zebra": {
      "true": "[&>table>tbody>tr]:even:bg-(--ui-color-bg-content-secondary) [&>table>tbody>tr]:even:[&>td]:bg-(--ui-color-bg-content-secondary) [&>table>tbody>tr]:even:[&>th]:bg-(--ui-color-bg-content-secondary) light:[&>table>tbody>tr]:even:bg-[#f6f8f9] light:[&>table>tbody>tr]:even:[&>td]:bg-[#f6f8f9] light:[&>table>tbody>tr]:even:[&>th]:bg-[#f6f8f9]"
    },
    "pinRows": {
      "true": "[&>table>thead>tr]:sticky [&>table>thead>tr]:top-0      [&>table>thead>tr]:z-1 [&>table>thead>tr]:bg-(--ui-color-bg-content-primary) [&>table>thead>tr>th]:backdrop-blur [&>table>thead>tr]:shadow-bottom-sm [&>table>tfoot>tr]:sticky [&>table>tfoot>tr]:bottom-0   [&>table>tfoot>tr]:z-1 [&>table>tfoot>tr]:bg-(--ui-color-bg-content-primary) [&>table>tfoot>tr>th]:backdrop-blur [&>table>tfoot>tr]:shadow-top-sm"
    },
    "pinCols": {
      "true": "[&>table>thead>tr>th]:sticky [&>table>thead>tr>th]:right-0 [&>table>thead>tr>th]:left-0 [&>table>thead>tr>th]:bg-(--ui-color-bg-content-primary) [&>table>thead>tr>th]:backdrop-blur [&>table>tbody>tr>th]:sticky [&>table>tbody>tr>th]:right-0 [&>table>tbody>tr>th]:left-0 [&>table>tbody>tr>th]:bg-(--ui-color-bg-content-primary) [&>table>tbody>tr>th]:backdrop-blur [&>table>tfoot>tr>th]:sticky [&>table>tfoot>tr>th]:right-0 [&>table>tfoot>tr>th]:left-0 [&>table>tfoot>tr>th]:bg-(--ui-color-bg-content-primary) [&>table>tfoot>tr>th]:backdrop-blur"
    },
    "rowHover": {
      "true": "[&>table>tbody>tr]:hover:bg-(--ui-color-bg-content-secondary) [&>table>tbody>tr]:hover:[&>td]:bg-(--ui-color-bg-content-secondary) [&>table>tbody>tr]:hover:[&>th]:bg-(--ui-color-bg-content-secondary) light:[&>table>tbody>tr]:hover:bg-[#f6f8f9] light:[&>table>tbody>tr]:hover:[&>td]:bg-[#f6f8f9] light:[&>table>tbody>tr]:hover:[&>th]:bg-[#f6f8f9]"
    },
    "bordered": {
      "true": "border border-(--ui-color-design-tinted-na-stroke)"
    },
    "scrollbarThin": {
      "true": "scrollbar-thin"
    }
  },
  "defaultVariants": {
    "size": "md",
    "scrollbarThin": true
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "B24TableWrapper",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "div" },
    size: { type: null, required: false },
    rounded: { type: Boolean, required: false },
    zebra: { type: Boolean, required: false },
    pinRows: { type: Boolean, required: false },
    pinCols: { type: Boolean, required: false },
    rowHover: { type: Boolean, required: false },
    bordered: { type: Boolean, required: false },
    scrollbarThin: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("tableWrapper", _props);
    const appConfig = useAppConfig();
    const b24ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.b24ui?.tableWrapper || {} })({
      size: props.size,
      rounded: Boolean(props.rounded),
      zebra: Boolean(props.zebra),
      pinRows: Boolean(props.pinRows),
      pinCols: Boolean(props.pinCols),
      rowHover: Boolean(props.rowHover),
      bordered: Boolean(props.bordered),
      scrollbarThin: Boolean(props.scrollbarThin)
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        "data-slot": "base",
        class: b24ui.value.base({ class: [unref(props).b24ui?.base, unref(props).class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/TableWrapper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "my-4 overflow-x-auto",
    "base": ""
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "ProseTable",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "div" },
    rounded: { type: Boolean, required: false, default: true },
    zebra: { type: Boolean, required: false, default: true },
    rowHover: { type: Boolean, required: false, default: true },
    bordered: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("prose.table", _props);
    const appConfig = useAppConfig();
    const b24ui = computed(() => tv({ extend: tv(theme), ...appConfig.b24ui?.prose?.table || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        as: unref(props).as,
        "data-slot": "root",
        class: b24ui.value.root({ class: [unref(props).b24ui?.root, unref(props).class] }),
        zebra: unref(props).zebra,
        "row-hover": unref(props).rowHover,
        rounded: unref(props).rounded,
        bordered: unref(props).bordered,
        size: "sm"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<table data-slot="base" class="${ssrRenderClass(b24ui.value.base({ class: unref(props).b24ui?.base }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</table>`);
          } else {
            return [
              createVNode("table", {
                "data-slot": "base",
                class: b24ui.value.base({ class: unref(props).b24ui?.base })
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/prose/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Table-X1JMjSCu.mjs.map

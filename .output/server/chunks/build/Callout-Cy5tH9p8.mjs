import { computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';
import { p as useComponentProps, u as useAppConfig, n as tv, m as resolveIcon, b as _sfc_main$d, j as icons } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
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

const theme = {
  "slots": {
    "base": "group relative block py-xs ps-sm pe-xs gap-2 my-5 last:mb-0 text-(length:--ui-font-size-md)/(--ui-font-line-height-3xs) text-(--b24ui-color) bg-(--b24ui-background) border-(--b24ui-border-color) border-(length:--b24ui-border-width) rounded-(--ui-border-radius-md) [&_code]:text-(length:--ui-font-size-sm)/(--ui-font-line-height-sm) [&>div]:my-2.5 [&_ul]:my-2.5 [&_ul]:ps-3 [&_ul]:marker:text-(--b24ui-color) [&_ol]:my-2.5 [&_ol]:ps-3 [&_ol]:marker:text-(--b24ui-color) [&>h1]:text-(--b24ui-color) [&>h2]:text-(--b24ui-color) [&>h3]:text-(--b24ui-color) [&>h4]:text-(--b24ui-color) [&>h5]:text-(--b24ui-color) [&>h6]:text-(--b24ui-color) *:last:mb-0! [&_li]:my-1.5 [&_li]:ps-1 [&_li]:text-(length:--ui-font-size-md)/(--ui-font-line-height-3xs) [&_li]:text-(--b24ui-color) [&_a]:underline transition-colors",
    "icon": "shrink-0 size-5 inline-block me-2 text-(--b24ui-icon) transition-colors",
    "externalIcon": "size-4 align-top absolute right-2 top-2 pointer-events-none text-(--b24ui-split-divider-color) transition-colors"
  },
  "variants": {
    "color": {
      "air-primary": {
        "base": "style-filled"
      },
      "air-primary-success": {
        "base": "style-filled-success"
      },
      "air-primary-alert": {
        "base": "style-filled-alert"
      },
      "air-primary-copilot": {
        "base": "style-filled-copilot"
      },
      "air-primary-warning": {
        "base": "style-filled-warning"
      },
      "air-secondary": {
        "base": "style-tinted"
      },
      "air-secondary-alert": {
        "base": "style-tinted-alert"
      },
      "air-secondary-accent": {
        "base": "style-tinted-no-accent-1"
      },
      "air-secondary-accent-1": {
        "base": "style-outline-accent-1"
      },
      "air-secondary-accent-2": {
        "base": "style-outline-accent-2"
      },
      "air-secondary-no-accent": {
        "base": "style-outline"
      },
      "air-tertiary": {
        "base": "style-outline-no-accent"
      }
    },
    "to": {
      "true": "border-dashed"
    }
  },
  "compoundVariants": [
    {
      "to": true,
      "class": {
        "base": "hover:border-(--b24ui-border-color-hover) has-focus-visible:border-(--b24ui-border-color-hover)",
        "externalIcon": "group-hover:text-(--b24ui-icon)"
      }
    },
    {
      "color": "air-secondary-accent",
      "class": {
        "base": "bg-(--b24ui-background)/20"
      }
    }
  ],
  "defaultVariants": {
    "color": "air-primary"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "ProseCallout",
  __ssrInlineRender: true,
  props: {
    to: { type: null, required: false },
    target: { type: [String, Object, null], required: false },
    icon: { type: [Function, Object], required: false },
    iconName: { type: String, required: false },
    color: { type: null, required: false },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("prose.callout", _props);
    const appConfig = useAppConfig();
    const b24ui = computed(() => tv({ extend: tv(theme), ...appConfig.b24ui?.prose?.callout || {} })({
      color: props.color,
      to: !!props.to
    }));
    const target = computed(() => props.target || (!!props.to && typeof props.to === "string" && props.to.startsWith("http") ? "_blank" : void 0));
    const iconFromIconName = computed(() => resolveIcon(props.iconName));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "base",
        class: b24ui.value.base({ class: unref(props).class })
      }, _attrs))}>`);
      if (unref(props).to) {
        _push(ssrRenderComponent(_sfc_main$d, mergeProps({ to: unref(props).to, target: target.value, ..._ctx.$attrs }, {
          class: "focus:outline-none",
          raw: ""
        }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="absolute inset-0" aria-hidden="true"${_scopeId}></span>`);
            } else {
              return [
                createVNode("span", {
                  class: "absolute inset-0",
                  "aria-hidden": "true"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(props).icon) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(props).icon), {
          "data-slot": "icon",
          class: b24ui.value.icon({ class: unref(props).b24ui?.icon })
        }, null), _parent);
      } else if (unref(props).iconName) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(iconFromIconName.value), {
          "data-slot": "icon",
          class: b24ui.value.icon({ class: unref(props).b24ui?.icon })
        }, null), _parent);
      } else {
        _push(`<!---->`);
      }
      if (!!unref(props).to && target.value === "_blank") {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(icons).external), {
          "data-slot": "externalIcon",
          class: b24ui.value.externalIcon({ class: unref(props).b24ui?.externalIcon })
        }, null), _parent);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/prose/Callout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Callout-Cy5tH9p8.mjs.map

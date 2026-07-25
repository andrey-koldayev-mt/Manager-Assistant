import { useSlots, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { o as useComponentProps, u as useAppConfig, m as tv, b as _sfc_main$i, j as icons } from './server.mjs';
import GitHubIcon from '@bitrix24/b24icons-vue/social/GitHubIcon';
import InfoCircleIcon from '@bitrix24/b24icons-vue/outline/InfoCircleIcon';
import MdnwebdocsIcon from '@bitrix24/b24icons-vue/social/MdnwebdocsIcon';
import Bitrix24Icon from '@bitrix24/b24icons-vue/common-service/Bitrix24Icon';
import DemonstrationOnIcon from '@bitrix24/b24icons-vue/outline/DemonstrationOnIcon';
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

const theme = {
  "slots": {
    "base": "group relative block my-5 p-4 sm:p-6 text-(--b24ui-color) border border-(--ui-color-design-tinted-na-stroke) bg-(--b24ui-background) rounded-md transition-colors",
    "icon": "size-6 mb-2 block text-(--b24ui-icon)",
    "title": "text-(--b24ui-color) font-(--ui-font-weight-semi-bold)",
    "description": "text-[15px] text-(--b24ui-color) [&_p]:text-(--b24ui-color) *:first:mt-0 *:last:mb-0 *:my-1",
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
      "true": ""
    },
    "title": {
      "true": {
        "description": "mt-1"
      }
    }
  },
  "compoundVariants": [
    {
      "to": true,
      "class": {
        "base": "hover:bg-(--ui-color-bg-content-secondary) hover:border-(--b24ui-border-color-hover) has-focus-visible:border-(--b24ui-border-color-hover)",
        "title": "group-hover:text-(--b24ui-border-color)",
        "description": "group-hover:text-(--b24ui-border-color) [&_p]:group-hover:text-(--b24ui-border-color)",
        "externalIcon": "group-hover:text-(--b24ui-icon)"
      }
    },
    {
      "to": true,
      "color": [
        "air-secondary",
        "air-secondary-alert",
        "air-secondary-accent",
        "air-secondary-accent-1",
        "air-secondary-accent-2",
        "air-secondary-no-accent",
        "air-tertiary"
      ],
      "class": {
        "base": "hover:bg-(--ui-color-bg-content-secondary) hover:border-(--b24ui-border-color-hover)",
        "title": "group-hover:text-(--b24ui-color)",
        "description": "group-hover:text-(--b24ui-color) [&_p]:group-hover:text-(--b24ui-color)",
        "externalIcon": "group-hover:text-(--b24ui-icon)"
      }
    }
  ],
  "defaultVariants": {
    "color": "air-primary"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "ProseCard",
  __ssrInlineRender: true,
  props: {
    to: { type: null, required: false },
    target: { type: [String, Object, null], required: false },
    icon: { type: [Function, Object], required: false },
    iconName: { type: String, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    color: { type: null, required: false },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const slots = useSlots();
    const props = useComponentProps("prose.card", _props);
    const appConfig = useAppConfig();
    const b24ui = computed(() => tv({ extend: tv(theme), ...appConfig.b24ui?.prose?.card || {} })({
      color: props.color,
      to: !!props.to,
      title: !!props.title
    }));
    const target = computed(() => props.target || (!!props.to && typeof props.to === "string" && props.to.startsWith("http") ? "_blank" : void 0));
    const ariaLabel = computed(() => (props.title || "Card link").trim());
    const iconFromIconName = computed(() => {
      if (!props.iconName) {
        return void 0;
      }
      switch (props.iconName) {
        case "InfoCircleIcon":
          return InfoCircleIcon;
        case "GitHubIcon":
          return GitHubIcon;
        case "MdnWebDocIcon":
          return MdnwebdocsIcon;
        case "Bitrix24Icon":
          return Bitrix24Icon;
        case "DemonstrationOnIcon":
          return DemonstrationOnIcon;
      }
      return void 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "base",
        class: b24ui.value.base({ class: [unref(props).b24ui?.base, unref(props).class] })
      }, _attrs))}>`);
      if (unref(props).to) {
        _push(ssrRenderComponent(_sfc_main$i, mergeProps({ "aria-label": ariaLabel.value }, { to: unref(props).to, target: target.value, ..._ctx.$attrs }, {
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
      if (unref(props).title || !!slots.title) {
        _push(`<p data-slot="title" class="${ssrRenderClass(b24ui.value.title({ class: unref(props).b24ui?.title }))}">`);
        ssrRenderSlot(_ctx.$slots, "title", { mdcUnwrap: "p" }, () => {
          _push(`${ssrInterpolate(unref(props).title)}`);
        }, _push, _parent);
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!!slots.default) {
        _push(`<div data-slot="description" class="${ssrRenderClass(b24ui.value.description({ class: unref(props).b24ui?.description }))}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(unref(props).description)}`);
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/prose/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Card-ptyLFkgE.mjs.map

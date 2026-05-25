import { useSlots, computed, unref, mergeProps, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, createVNode, useSSRContext, resolveDynamicComponent, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderVNode, ssrInterpolate } from "vue/server-renderer";
import { p as useComponentProps, u as useAppConfig, s as useForwardProps, n as tv, w as useLocale, t as transformUI, j as icons } from "../server.mjs";
import { a as CollapsibleRoot_default, b as CollapsibleTrigger_default, C as CollapsibleContent_default } from "./CollapsibleTrigger-DLJpxN5O.js";
import { reactivePick } from "@vueuse/core";
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
import "./useId-D2CyCh8B.js";
const theme$1 = {
  "slots": {
    "root": "",
    "content": "motion-safe:data-[state=open]:animate-[collapsible-down_200ms_ease-out] motion-safe:data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden"
  }
};
const _sfc_main$1 = {
  __name: "B24Collapsible",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("collapsible", _props);
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "as", "defaultOpen", "open", "disabled", "unmountOnHide"), emits);
    const b24ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.b24ui?.collapsible || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CollapsibleRoot_default), mergeProps(unref(rootProps), {
        "data-slot": "root",
        class: b24ui.value.root({ class: [unref(props).b24ui?.root, unref(props).class] })
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(CollapsibleTrigger_default), { "as-child": "" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(CollapsibleContent_default), {
              "data-slot": "content",
              class: b24ui.value.content({ class: unref(props).b24ui?.content })
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "content")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(CollapsibleTrigger_default), {
                key: 0,
                "as-child": ""
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true),
              createVNode(unref(CollapsibleContent_default), {
                "data-slot": "content",
                class: b24ui.value.content({ class: unref(props).b24ui?.content })
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "content")
                ]),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Collapsible.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "my-[20px]",
    "trigger": "group relative rounded-(--ui-border-radius-md) inline-flex items-center gap-[4px] text-description hover:text-label text-(length:--ui-font-size-3xs) leading-(--ui-font-line-height-2xs) focus-visible:ring-2 focus-visible:ring-(--ui-color-design-selection-stroke) focus:outline-none cursor-pointer transition-colors",
    "triggerIcon": "size-[14px] shrink-0 motion-safe:group-data-[state=open]:rotate-180 transition-transform duration-200",
    "triggerLabel": "truncate",
    "content": "*:first:mt-2.5 *:last:mb-0 *:my-1.5"
  }
};
const _sfc_main = {
  __name: "ProseCollapsible",
  __ssrInlineRender: true,
  props: {
    icon: { type: [Function, Object], required: false },
    name: { type: String, required: false },
    openText: { type: String, required: false },
    closeText: { type: String, required: false },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("prose.collapsible", _props);
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const b24ui = computed(() => tv({ extend: tv(theme), ...appConfig.b24ui?.prose?.collapsible || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        "unmount-on-hide": false,
        class: unref(props).class,
        b24ui: unref(transformUI)(b24ui.value, unref(props).b24ui)
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button data-slot="trigger" class="${ssrRenderClass(b24ui.value.trigger({ class: unref(props).b24ui?.trigger }))}"${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(props).icon || unref(icons).chevronDown), {
              "data-slot": "triggerIcon",
              class: b24ui.value.triggerIcon({ class: unref(props).b24ui?.triggerIcon })
            }, null), _parent2, _scopeId);
            _push2(`<span data-slot="triggerLabel" class="${ssrRenderClass(b24ui.value.triggerLabel({ class: unref(props).b24ui?.triggerLabel }))}"${_scopeId}>${ssrInterpolate(open ? unref(props).closeText || unref(t)("prose.collapsible.closeText") : unref(props).openText || unref(t)("prose.collapsible.openText"))} ${ssrInterpolate(unref(props).name || unref(t)("prose.collapsible.name"))}</span></button>`);
          } else {
            return [
              createVNode("button", {
                "data-slot": "trigger",
                class: b24ui.value.trigger({ class: unref(props).b24ui?.trigger })
              }, [
                (openBlock(), createBlock(resolveDynamicComponent(unref(props).icon || unref(icons).chevronDown), {
                  "data-slot": "triggerIcon",
                  class: b24ui.value.triggerIcon({ class: unref(props).b24ui?.triggerIcon })
                }, null, 8, ["class"])),
                createVNode("span", {
                  "data-slot": "triggerLabel",
                  class: b24ui.value.triggerLabel({ class: unref(props).b24ui?.triggerLabel })
                }, toDisplayString(open ? unref(props).closeText || unref(t)("prose.collapsible.closeText") : unref(props).openText || unref(t)("prose.collapsible.openText")) + " " + toDisplayString(unref(props).name || unref(t)("prose.collapsible.name")), 3)
              ], 2)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
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
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/prose/Collapsible.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Collapsible-SwxCh7WB.js.map

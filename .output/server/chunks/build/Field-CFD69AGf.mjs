import { useSlots, computed, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, renderSlot, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { p as useComponentProps, u as useAppConfig, n as tv, a as Primitive } from './server.mjs';
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
    "root": "my-[20px]",
    "container": "flex items-center gap-3 font-[family-name:var(--ui-font-family-system-mono)] text-(length:--ui-font-size-sm)",
    "name": "font-(--ui-font-weight-semi-bold) text-(--ui-color-accent-main-primary)",
    "wrapper": "flex-1 flex items-center gap-1.5 text-(length:--ui-font-size-xs)",
    "required": "rounded-(--ui-border-radius-sm) bg-(--ui-color-design-outline-alert-content)/10 text-(--ui-color-accent-main-alert) px-1.5 py-0.5",
    "type": "rounded-(--ui-border-radius-sm) bg-(--ui-color-design-tinted-na-bg) text-description px-1.5 py-0.5",
    "description": "mt-3 text-description text-(length:--ui-font-size-sm) [&_code]:text-(length:--ui-font-size-xs)/4"
  }
};
const _sfc_main = {
  __name: "ProseField",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    name: { type: String, required: false },
    type: { type: String, required: false },
    description: { type: String, required: false },
    required: { type: Boolean, required: false },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const slots = useSlots();
    const props = useComponentProps("prose.field", _props);
    const appConfig = useAppConfig();
    const b24ui = computed(() => tv({ extend: tv(theme), ...appConfig.b24ui?.prose?.field || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        "data-slot": "root",
        class: b24ui.value.root({ class: [unref(props).b24ui?.root, unref(props).class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="container" class="${ssrRenderClass(b24ui.value.container({ class: unref(props).b24ui?.container }))}"${_scopeId}>`);
            if (unref(props).name) {
              _push2(`<span data-slot="name" class="${ssrRenderClass(b24ui.value.name({ class: unref(props).b24ui?.name }))}"${_scopeId}>${ssrInterpolate(unref(props).name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(props).type || unref(props).required) {
              _push2(`<div data-slot="wrapper" class="${ssrRenderClass(b24ui.value.wrapper({ class: unref(props).b24ui?.wrapper }))}"${_scopeId}>`);
              if (unref(props).type) {
                _push2(`<span data-slot="type" class="${ssrRenderClass(b24ui.value.type({ class: unref(props).b24ui?.type }))}"${_scopeId}>${ssrInterpolate(unref(props).type)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(props).required) {
                _push2(`<span data-slot="required" class="${ssrRenderClass(b24ui.value.required({ class: unref(props).b24ui?.required }))}"${_scopeId}> required </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (!!slots.default || unref(props).description) {
              _push2(`<div data-slot="description" class="${ssrRenderClass(b24ui.value.description({ class: unref(props).b24ui?.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, () => {
                _push2(`${ssrInterpolate(unref(props).description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                "data-slot": "container",
                class: b24ui.value.container({ class: unref(props).b24ui?.container })
              }, [
                unref(props).name ? (openBlock(), createBlock("span", {
                  key: 0,
                  "data-slot": "name",
                  class: b24ui.value.name({ class: unref(props).b24ui?.name })
                }, toDisplayString(unref(props).name), 3)) : createCommentVNode("", true),
                unref(props).type || unref(props).required ? (openBlock(), createBlock("div", {
                  key: 1,
                  "data-slot": "wrapper",
                  class: b24ui.value.wrapper({ class: unref(props).b24ui?.wrapper })
                }, [
                  unref(props).type ? (openBlock(), createBlock("span", {
                    key: 0,
                    "data-slot": "type",
                    class: b24ui.value.type({ class: unref(props).b24ui?.type })
                  }, toDisplayString(unref(props).type), 3)) : createCommentVNode("", true),
                  unref(props).required ? (openBlock(), createBlock("span", {
                    key: 1,
                    "data-slot": "required",
                    class: b24ui.value.required({ class: unref(props).b24ui?.required })
                  }, " required ", 2)) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true)
              ], 2),
              !!slots.default || unref(props).description ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "description",
                class: b24ui.value.description({ class: unref(props).b24ui?.description })
              }, [
                renderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, () => [
                  createTextVNode(toDisplayString(unref(props).description), 1)
                ])
              ], 2)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/prose/Field.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Field-CFD69AGf.mjs.map

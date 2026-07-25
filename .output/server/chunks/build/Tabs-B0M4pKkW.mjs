import { useSlots, useModel, computed, ref, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, mergeModels, renderSlot, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderVNode, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { o as useComponentProps, u as useAppConfig, m as tv, t as transformUI, s as useForwardProps, h as get, e as _sfc_main$k, c as _sfc_main$b } from './server.mjs';
import { c as TabsRoot_default, b as TabsList_default, a as TabsIndicator_default, d as TabsTrigger_default, T as TabsContent_default } from './TabsTrigger-CF4UVQAs.mjs';
import { reactivePick } from '@vueuse/core';
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

const theme$1 = {
  "slots": {
    "root": "style-outline-accent-2 flex items-center gap-2",
    "list": "relative flex p-1 group",
    "indicator": "absolute transition-[translate,width] duration-200",
    "trigger": "group relative inline-flex items-center min-w-0 data-[state=inactive]:text-(--ui-color-design-plain-na-content) hover:data-[state=inactive]:not-disabled:text-(--ui-color-design-selection-content) font-(--ui-font-weight-medium) cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 transition-colors rounded-(--ui-border-radius-md)",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "label": "",
    "trailingBadge": "shrink-0",
    "trailingBadgeSize": "sm",
    "content": "focus:outline-none w-full"
  },
  "variants": {
    "variant": {
      "link": {
        "list": "border-(--ui-color-divider-vibrant-accent-more)",
        "indicator": "rounded-(--ui-border-radius-pill)",
        "trigger": "focus:outline-none"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "flex-col",
        "list": "w-full",
        "indicator": "left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)",
        "trigger": "justify-center"
      },
      "vertical": {
        "list": "flex-col",
        "indicator": "top-0 h-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position)"
      }
    },
    "size": {
      "xss": {
        "trigger": "px-2 py-1 text-(length:--ui-font-size-4xs)/[normal] gap-1",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs"
      },
      "xs": {
        "trigger": "px-2 py-1 text-(length:--ui-font-size-xs)/[normal] gap-1",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs"
      },
      "sm": {
        "trigger": "px-2.5 py-1.5 text-(length:--ui-font-size-sm)/[normal] gap-1.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs"
      },
      "md": {
        "trigger": "px-3 py-1.5 text-(length:--ui-font-size-md)/[normal] gap-1.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs"
      },
      "lg": {
        "trigger": "px-3 py-2 text-(length:--ui-font-size-lg)/[normal] gap-2",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs"
      },
      "xl": {
        "trigger": "px-3 py-2 text-(length:--ui-font-size-xl)/[normal] gap-2",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "variant": "link",
      "class": {
        "list": "border-b -mb-px",
        "indicator": "-bottom-px h-px"
      }
    },
    {
      "orientation": "vertical",
      "variant": "link",
      "class": {
        "list": "border-s -ms-px",
        "indicator": "-start-px w-px"
      }
    },
    {
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-color-design-selection-content)",
        "trigger": [
          "focus-visible:ring-1 focus-visible:ring-inset",
          "data-[state=active]:text-(--b24ui-color)",
          "focus-visible:ring-(--ui-color-design-selection-content)"
        ]
      }
    }
  ],
  "defaultVariants": {
    "variant": "link",
    "size": "md"
  }
};
const _sfc_main$1 = {
  __name: "B24Tabs",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    items: { type: Array, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    content: { type: Boolean, required: false, default: true },
    valueKey: { type: null, required: false, default: "value" },
    labelKey: { type: null, required: false, default: "label" },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false },
    defaultValue: { type: [String, Number], required: false, default: "0" },
    modelValue: { type: [String, Number], required: false },
    activationMode: { type: String, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("tabs", _props);
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "as", "unmountOnHide"), emits);
    const b24ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.b24ui?.tabs || {} })({
      variant: props.variant,
      size: props.size,
      orientation: props.orientation
    }));
    const triggersRef = ref([]);
    function setTriggerRef(index, el) {
      triggersRef.value[index] = el;
    }
    __expose({
      triggersRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsRoot_default), mergeProps(unref(rootProps), {
        "model-value": unref(props).modelValue,
        "default-value": unref(props).defaultValue,
        orientation: unref(props).orientation,
        "activation-mode": unref(props).activationMode,
        "data-slot": "root",
        class: b24ui.value.root({ class: [unref(props).b24ui?.root, unref(props).class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TabsList_default), {
              "data-slot": "list",
              class: b24ui.value.list({ class: unref(props).b24ui?.list })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TabsIndicator_default), {
                    "data-slot": "indicator",
                    class: b24ui.value.indicator({ class: unref(props).b24ui?.indicator })
                  }, null, _parent3, _scopeId2));
                  ssrRenderSlot(_ctx.$slots, "list-leading", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(props).items, (item, index) => {
                    _push3(ssrRenderComponent(unref(TabsTrigger_default), {
                      key: unref(get)(item, unref(props).valueKey) ?? index,
                      ref_for: true,
                      ref: (el) => setTriggerRef(index, el),
                      value: unref(get)(item, unref(props).valueKey) ?? String(index),
                      disabled: item.disabled,
                      "data-slot": "trigger",
                      class: b24ui.value.trigger({ class: [unref(props).b24ui?.trigger, item.b24ui?.trigger] })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "leading", {
                            item,
                            index,
                            b24ui: b24ui.value
                          }, () => {
                            if (item.icon) {
                              ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(item.icon), {
                                "data-slot": "leadingIcon",
                                class: b24ui.value.leadingIcon({ class: [unref(props).b24ui?.leadingIcon, item.b24ui?.leadingIcon] })
                              }, null), _parent4, _scopeId3);
                            } else if (item.avatar) {
                              _push4(ssrRenderComponent(_sfc_main$k, mergeProps({
                                size: item.b24ui?.leadingAvatarSize || unref(props).b24ui?.leadingAvatarSize || b24ui.value.leadingAvatarSize()
                              }, { ref_for: true }, item.avatar, {
                                "data-slot": "leadingAvatar",
                                class: b24ui.value.leadingAvatar({ class: [unref(props).b24ui?.leadingAvatar, item.b24ui?.leadingAvatar] })
                              }), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                          if (unref(get)(item, unref(props).labelKey) || !!slots.default) {
                            _push4(`<span data-slot="label" class="${ssrRenderClass(b24ui.value.label({ class: [unref(props).b24ui?.label, item.b24ui?.label] }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "default", {
                              item,
                              index
                            }, () => {
                              _push4(`${ssrInterpolate(unref(get)(item, unref(props).labelKey))}`);
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          ssrRenderSlot(_ctx.$slots, "trailing", {
                            item,
                            index,
                            b24ui: b24ui.value
                          }, () => {
                            if (item.badge || item.badge === 0) {
                              _push4(ssrRenderComponent(_sfc_main$b, mergeProps({
                                color: "air-primary",
                                size: item.b24ui?.trailingBadgeSize || unref(props).b24ui?.trailingBadgeSize || b24ui.value.trailingBadgeSize()
                              }, { ref_for: true }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                                "data-slot": "trailingBadge",
                                class: b24ui.value.trailingBadge({ class: [unref(props).b24ui?.trailingBadge, item.b24ui?.trailingBadge] })
                              }), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index,
                              b24ui: b24ui.value
                            }, () => [
                              item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                key: 0,
                                "data-slot": "leadingIcon",
                                class: b24ui.value.leadingIcon({ class: [unref(props).b24ui?.leadingIcon, item.b24ui?.leadingIcon] })
                              }, null, 8, ["class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$k, mergeProps({
                                key: 1,
                                size: item.b24ui?.leadingAvatarSize || unref(props).b24ui?.leadingAvatarSize || b24ui.value.leadingAvatarSize()
                              }, { ref_for: true }, item.avatar, {
                                "data-slot": "leadingAvatar",
                                class: b24ui.value.leadingAvatar({ class: [unref(props).b24ui?.leadingAvatar, item.b24ui?.leadingAvatar] })
                              }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                            ]),
                            unref(get)(item, unref(props).labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              "data-slot": "label",
                              class: b24ui.value.label({ class: [unref(props).b24ui?.label, item.b24ui?.label] })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index,
                              b24ui: b24ui.value
                            }, () => [
                              item.badge || item.badge === 0 ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                                key: 0,
                                color: "air-primary",
                                size: item.b24ui?.trailingBadgeSize || unref(props).b24ui?.trailingBadgeSize || b24ui.value.trailingBadgeSize()
                              }, { ref_for: true }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                                "data-slot": "trailingBadge",
                                class: b24ui.value.trailingBadge({ class: [unref(props).b24ui?.trailingBadge, item.b24ui?.trailingBadge] })
                              }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  ssrRenderSlot(_ctx.$slots, "list-trailing", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    createVNode(unref(TabsIndicator_default), {
                      "data-slot": "indicator",
                      class: b24ui.value.indicator({ class: unref(props).b24ui?.indicator })
                    }, null, 8, ["class"]),
                    renderSlot(_ctx.$slots, "list-leading"),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(props).items, (item, index) => {
                      return openBlock(), createBlock(unref(TabsTrigger_default), {
                        key: unref(get)(item, unref(props).valueKey) ?? index,
                        ref_for: true,
                        ref: (el) => setTriggerRef(index, el),
                        value: unref(get)(item, unref(props).valueKey) ?? String(index),
                        disabled: item.disabled,
                        "data-slot": "trigger",
                        class: b24ui.value.trigger({ class: [unref(props).b24ui?.trigger, item.b24ui?.trigger] })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "leading", {
                            item,
                            index,
                            b24ui: b24ui.value
                          }, () => [
                            item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                              key: 0,
                              "data-slot": "leadingIcon",
                              class: b24ui.value.leadingIcon({ class: [unref(props).b24ui?.leadingIcon, item.b24ui?.leadingIcon] })
                            }, null, 8, ["class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$k, mergeProps({
                              key: 1,
                              size: item.b24ui?.leadingAvatarSize || unref(props).b24ui?.leadingAvatarSize || b24ui.value.leadingAvatarSize()
                            }, { ref_for: true }, item.avatar, {
                              "data-slot": "leadingAvatar",
                              class: b24ui.value.leadingAvatar({ class: [unref(props).b24ui?.leadingAvatar, item.b24ui?.leadingAvatar] })
                            }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                          ]),
                          unref(get)(item, unref(props).labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                            key: 0,
                            "data-slot": "label",
                            class: b24ui.value.label({ class: [unref(props).b24ui?.label, item.b24ui?.label] })
                          }, [
                            renderSlot(_ctx.$slots, "default", {
                              item,
                              index
                            }, () => [
                              createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "trailing", {
                            item,
                            index,
                            b24ui: b24ui.value
                          }, () => [
                            item.badge || item.badge === 0 ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                              key: 0,
                              color: "air-primary",
                              size: item.b24ui?.trailingBadgeSize || unref(props).b24ui?.trailingBadgeSize || b24ui.value.trailingBadgeSize()
                            }, { ref_for: true }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                              "data-slot": "trailingBadge",
                              class: b24ui.value.trailingBadge({ class: [unref(props).b24ui?.trailingBadge, item.b24ui?.trailingBadge] })
                            }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["value", "disabled", "class"]);
                    }), 128)),
                    renderSlot(_ctx.$slots, "list-trailing")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            if (!!unref(props).content) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(props).items, (item, index) => {
                _push2(ssrRenderComponent(unref(TabsContent_default), {
                  key: unref(get)(item, unref(props).valueKey) ?? index,
                  value: unref(get)(item, unref(props).valueKey) ?? String(index),
                  "data-slot": "content",
                  class: b24ui.value.content({ class: [unref(props).b24ui?.content, item.b24ui?.content, item.class] })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, item.slot || "content", {
                        item,
                        index,
                        b24ui: b24ui.value
                      }, () => {
                        _push3(`${ssrInterpolate(item.content)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, item.slot || "content", {
                          item,
                          index,
                          b24ui: b24ui.value
                        }, () => [
                          createTextVNode(toDisplayString(item.content), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(TabsList_default), {
                "data-slot": "list",
                class: b24ui.value.list({ class: unref(props).b24ui?.list })
              }, {
                default: withCtx(() => [
                  createVNode(unref(TabsIndicator_default), {
                    "data-slot": "indicator",
                    class: b24ui.value.indicator({ class: unref(props).b24ui?.indicator })
                  }, null, 8, ["class"]),
                  renderSlot(_ctx.$slots, "list-leading"),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(props).items, (item, index) => {
                    return openBlock(), createBlock(unref(TabsTrigger_default), {
                      key: unref(get)(item, unref(props).valueKey) ?? index,
                      ref_for: true,
                      ref: (el) => setTriggerRef(index, el),
                      value: unref(get)(item, unref(props).valueKey) ?? String(index),
                      disabled: item.disabled,
                      "data-slot": "trigger",
                      class: b24ui.value.trigger({ class: [unref(props).b24ui?.trigger, item.b24ui?.trigger] })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "leading", {
                          item,
                          index,
                          b24ui: b24ui.value
                        }, () => [
                          item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                            key: 0,
                            "data-slot": "leadingIcon",
                            class: b24ui.value.leadingIcon({ class: [unref(props).b24ui?.leadingIcon, item.b24ui?.leadingIcon] })
                          }, null, 8, ["class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$k, mergeProps({
                            key: 1,
                            size: item.b24ui?.leadingAvatarSize || unref(props).b24ui?.leadingAvatarSize || b24ui.value.leadingAvatarSize()
                          }, { ref_for: true }, item.avatar, {
                            "data-slot": "leadingAvatar",
                            class: b24ui.value.leadingAvatar({ class: [unref(props).b24ui?.leadingAvatar, item.b24ui?.leadingAvatar] })
                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                        ]),
                        unref(get)(item, unref(props).labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                          key: 0,
                          "data-slot": "label",
                          class: b24ui.value.label({ class: [unref(props).b24ui?.label, item.b24ui?.label] })
                        }, [
                          renderSlot(_ctx.$slots, "default", {
                            item,
                            index
                          }, () => [
                            createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "trailing", {
                          item,
                          index,
                          b24ui: b24ui.value
                        }, () => [
                          item.badge || item.badge === 0 ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                            key: 0,
                            color: "air-primary",
                            size: item.b24ui?.trailingBadgeSize || unref(props).b24ui?.trailingBadgeSize || b24ui.value.trailingBadgeSize()
                          }, { ref_for: true }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                            "data-slot": "trailingBadge",
                            class: b24ui.value.trailingBadge({ class: [unref(props).b24ui?.trailingBadge, item.b24ui?.trailingBadge] })
                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled", "class"]);
                  }), 128)),
                  renderSlot(_ctx.$slots, "list-trailing")
                ]),
                _: 3
              }, 8, ["class"]),
              !!unref(props).content ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(props).items, (item, index) => {
                return openBlock(), createBlock(unref(TabsContent_default), {
                  key: unref(get)(item, unref(props).valueKey) ?? index,
                  value: unref(get)(item, unref(props).valueKey) ?? String(index),
                  "data-slot": "content",
                  class: b24ui.value.content({ class: [unref(props).b24ui?.content, item.b24ui?.content, item.class] })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, item.slot || "content", {
                      item,
                      index,
                      b24ui: b24ui.value
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["value", "class"]);
              }), 128)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Tabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "my-5 gap-4"
  }
};
const _sfc_main = {
  __name: "ProseTabs",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    defaultValue: { type: String, required: false, default: "0" },
    sync: { type: String, required: false },
    hash: { type: String, required: false },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false }
  }, {
    "modelValue": { type: String },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const _props = __props;
    const slots = useSlots();
    const props = useComponentProps("prose.tabs", _props);
    const model = useModel(__props, "modelValue");
    const appConfig = useAppConfig();
    const b24ui = computed(() => tv({ extend: tv(theme), ...appConfig.b24ui?.prose?.tabs || {} }));
    const rerenderCount = ref(1);
    const items = computed(() => {
      rerenderCount.value;
      return slots.default?.()?.flatMap(transformSlot).filter(Boolean) || [];
    });
    function transformSlot(slot, index) {
      if (typeof slot.type === "symbol") {
        return slot.children?.map(transformSlot);
      }
      return {
        index,
        label: slot.props?.label || `${index}`,
        description: slot.props?.description,
        icon: slot.props?.icon,
        component: slot
      };
    }
    async function onUpdateModelValue() {
      if (props.hash) {
        const hash = props.hash.startsWith("#") ? props.hash : `#${props.hash}`;
        setTimeout(() => {
          (void 0).querySelector(hash)?.scrollIntoView();
        }, 200);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        modelValue: model.value,
        "onUpdate:modelValue": [($event) => model.value = $event, onUpdateModelValue],
        color: "primary",
        variant: "link",
        items: items.value,
        class: unref(props).class,
        "unmount-on-hide": false,
        b24ui: unref(transformUI)(b24ui.value(), unref(props).b24ui)
      }, _attrs), {
        content: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(item.component), null, null), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(item.component)))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/prose/Tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Tabs-B0M4pKkW.mjs.map

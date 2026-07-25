import { ref, computed, useId, unref, withCtx, createVNode, resolveDynamicComponent, mergeProps, openBlock, createBlock, createCommentVNode, defineComponent, toRefs, renderSlot, normalizeProps, guardReactiveProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderVNode, ssrRenderClass } from 'vue/server-renderer';
import { o as useComponentProps, u as useAppConfig, m as tv, r as resolveBaseURL, y as useRuntimeConfig, I as ImageComponent, q as useForwardExpose, w as useId$1, a as Primitive, T as Teleport_default, f as createContext } from './server.mjs';
import { createReusableTemplate, useEventListener, useVModel } from '@vueuse/core';
import { Motion, AnimatePresence } from 'motion-v';
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

const [injectDialogRootContext, provideDialogRootContext] = /* @__PURE__ */ createContext("DialogRoot");
var DialogRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "DialogRoot",
  props: {
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    modal: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const open = useVModel(props, "open", emit, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    const triggerElement = ref();
    const contentElement = ref();
    const { modal } = toRefs(props);
    provideDialogRootContext({
      open,
      modal,
      openModal: () => {
        open.value = true;
      },
      onOpenChange: (value) => {
        open.value = value;
      },
      onOpenToggle: () => {
        open.value = !open.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement,
      contentElement
    });
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default", {
        open: unref(open),
        close: () => open.value = false
      });
    };
  }
});
var DialogRoot_default = DialogRoot_vue_vue_type_script_setup_true_lang_default;
var DialogPortal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DialogPortal",
  props: {
    to: {
      type: null,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    defer: {
      type: Boolean,
      required: false
    },
    forceMount: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Teleport_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DialogPortal_default = DialogPortal_vue_vue_type_script_setup_true_lang_default;
var DialogTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectDialogRootContext();
    const { forwardRef } = useForwardExpose();
    rootContext.contentId ||= useId$1(void 0, "reka-dialog-content");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
        ref: unref(forwardRef),
        type: _ctx.as === "button" ? "button" : void 0,
        "aria-haspopup": "dialog",
        "aria-expanded": unref(rootContext).open.value || false,
        "aria-controls": unref(rootContext).open.value ? unref(rootContext).contentId : void 0,
        "data-state": unref(rootContext).open.value ? "open" : "closed",
        onClick: unref(rootContext).onOpenToggle
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "type",
        "aria-expanded",
        "aria-controls",
        "data-state",
        "onClick"
      ]);
    };
  }
});
var DialogTrigger_default = DialogTrigger_vue_vue_type_script_setup_true_lang_default;
const theme = {
  "slots": {
    "base": "rounded-md",
    "overlay": "fixed inset-0 bg-[#003366]/20 motion-safe:backdrop-blur-[2px] will-change-opacity",
    "content": "fixed inset-0 flex items-center justify-center cursor-zoom-out focus:outline-none p-4 sm:p-8",
    "zoomedImage": "w-full h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-md"
  },
  "variants": {
    "zoom": {
      "true": "will-change-transform"
    },
    "open": {
      "true": ""
    },
    "width": {
      "false": "w-full"
    }
  },
  "compoundVariants": [
    {
      "zoom": true,
      "open": false,
      "class": "cursor-zoom-in"
    }
  ]
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "ProseImg",
  __ssrInlineRender: true,
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    width: { type: [String, Number], required: false },
    height: { type: [String, Number], required: false },
    zoom: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("prose.img", _props);
    const appConfig = useAppConfig();
    const [DefineImageTemplate, ReuseImageTemplate] = createReusableTemplate();
    const [DefineZoomedImageTemplate, ReuseZoomedImageTemplate] = createReusableTemplate();
    const open = ref(false);
    const b24ui = computed(() => tv({ extend: tv(theme), ...appConfig.b24ui?.prose?.img || {} })({
      zoom: props.zoom,
      open: open.value,
      width: !!props.width
    }));
    const refinedSrc = computed(() => resolveBaseURL(props.src, useRuntimeConfig().app.baseURL));
    const layoutId = computed(() => `${refinedSrc.value}::${useId()}`);
    if (props.zoom) {
      useEventListener(void 0, "scroll", () => {
        open.value = false;
      });
      useEventListener(void 0, "keydown", (e) => {
        if (e.key === "Escape" && open.value) {
          open.value = false;
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineImageTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(ImageComponent)), mergeProps({
              src: refinedSrc.value,
              alt: unref(props).alt,
              width: unref(props).width,
              height: unref(props).height
            }, _ctx.$attrs, {
              "data-slot": "base",
              class: b24ui.value.base({ class: [unref(props).b24ui?.base, unref(props).class] })
            }), null), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(unref(ImageComponent)), mergeProps({
                src: refinedSrc.value,
                alt: unref(props).alt,
                width: unref(props).width,
                height: unref(props).height
              }, _ctx.$attrs, {
                "data-slot": "base",
                class: b24ui.value.base({ class: [unref(props).b24ui?.base, unref(props).class] })
              }), null, 16, ["src", "alt", "width", "height", "class"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(DefineZoomedImageTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(ImageComponent)), mergeProps({
              src: refinedSrc.value,
              alt: unref(props).alt
            }, _ctx.$attrs, {
              "data-slot": "zoomedImage",
              class: b24ui.value.zoomedImage({ class: [unref(props).b24ui?.zoomedImage] })
            }), null), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(unref(ImageComponent)), mergeProps({
                src: refinedSrc.value,
                alt: unref(props).alt
              }, _ctx.$attrs, {
                "data-slot": "zoomedImage",
                class: b24ui.value.zoomedImage({ class: [unref(props).b24ui?.zoomedImage] })
              }), null, 16, ["src", "alt", "class"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(props).zoom) {
        _push(ssrRenderComponent(unref(DialogRoot_default), {
          open: open.value,
          "onUpdate:open": ($event) => open.value = $event,
          modal: false
        }, {
          default: withCtx(({ close }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(DialogTrigger_default), { "as-child": "" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Motion), {
                      "layout-id": layoutId.value,
                      "as-child": "",
                      transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(ReuseImageTemplate), null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(ReuseImageTemplate))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Motion), {
                        "layout-id": layoutId.value,
                        "as-child": "",
                        transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ReuseImageTemplate))
                        ]),
                        _: 1
                      }, 8, ["layout-id"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(DialogPortal_default), null, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(AnimatePresence), null, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (open.value) {
                            _push4(ssrRenderComponent(unref(Motion), {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              "data-slot": "overlay",
                              class: b24ui.value.overlay({ class: [unref(props).b24ui?.overlay] })
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (open.value) {
                            _push4(`<div data-slot="content" class="${ssrRenderClass(b24ui.value.content({ class: [unref(props).b24ui?.content] }))}"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Motion), {
                              "as-child": "",
                              "layout-id": layoutId.value,
                              transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(ReuseZoomedImageTemplate), null, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(ReuseZoomedImageTemplate))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            open.value ? (openBlock(), createBlock(unref(Motion), {
                              key: 0,
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              "data-slot": "overlay",
                              class: b24ui.value.overlay({ class: [unref(props).b24ui?.overlay] })
                            }, null, 8, ["class"])) : createCommentVNode("", true),
                            open.value ? (openBlock(), createBlock("div", {
                              key: 1,
                              "data-slot": "content",
                              class: b24ui.value.content({ class: [unref(props).b24ui?.content] }),
                              onClick: close
                            }, [
                              createVNode(unref(Motion), {
                                "as-child": "",
                                "layout-id": layoutId.value,
                                transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ReuseZoomedImageTemplate))
                                ]),
                                _: 1
                              }, 8, ["layout-id"])
                            ], 10, ["onClick"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(AnimatePresence), null, {
                        default: withCtx(() => [
                          open.value ? (openBlock(), createBlock(unref(Motion), {
                            key: 0,
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            "data-slot": "overlay",
                            class: b24ui.value.overlay({ class: [unref(props).b24ui?.overlay] })
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          open.value ? (openBlock(), createBlock("div", {
                            key: 1,
                            "data-slot": "content",
                            class: b24ui.value.content({ class: [unref(props).b24ui?.content] }),
                            onClick: close
                          }, [
                            createVNode(unref(Motion), {
                              "as-child": "",
                              "layout-id": layoutId.value,
                              transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ReuseZoomedImageTemplate))
                              ]),
                              _: 1
                            }, 8, ["layout-id"])
                          ], 10, ["onClick"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(DialogTrigger_default), { "as-child": "" }, {
                  default: withCtx(() => [
                    createVNode(unref(Motion), {
                      "layout-id": layoutId.value,
                      "as-child": "",
                      transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ReuseImageTemplate))
                      ]),
                      _: 1
                    }, 8, ["layout-id"])
                  ]),
                  _: 1
                }),
                createVNode(unref(DialogPortal_default), null, {
                  default: withCtx(() => [
                    createVNode(unref(AnimatePresence), null, {
                      default: withCtx(() => [
                        open.value ? (openBlock(), createBlock(unref(Motion), {
                          key: 0,
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: { opacity: 0 },
                          "data-slot": "overlay",
                          class: b24ui.value.overlay({ class: [unref(props).b24ui?.overlay] })
                        }, null, 8, ["class"])) : createCommentVNode("", true),
                        open.value ? (openBlock(), createBlock("div", {
                          key: 1,
                          "data-slot": "content",
                          class: b24ui.value.content({ class: [unref(props).b24ui?.content] }),
                          onClick: close
                        }, [
                          createVNode(unref(Motion), {
                            "as-child": "",
                            "layout-id": layoutId.value,
                            transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ReuseZoomedImageTemplate))
                            ]),
                            _: 1
                          }, 8, ["layout-id"])
                        ], 10, ["onClick"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(unref(ReuseImageTemplate), null, null, _parent));
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/prose/Img.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Img-DtNWr7g8.mjs.map

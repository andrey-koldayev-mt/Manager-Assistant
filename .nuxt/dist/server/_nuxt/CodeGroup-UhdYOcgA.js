import { useSlots, useModel, computed, ref, unref, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, resolveDynamicComponent, mergeModels, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import { c as TabsRoot_default, b as TabsList_default, a as TabsIndicator_default, d as TabsTrigger_default, T as TabsContent_default } from "./TabsTrigger-CZpw1vvP.js";
import { p as useComponentProps, u as useAppConfig, n as tv } from "../server.mjs";
import _sfc_main$1 from "./CodeIcon-Do2QDDDD.js";
import "@vueuse/core";
import "./useId-D2CyCh8B.js";
import "./useDirection-BoRtQb0A.js";
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
import "@bitrix24/b24icons-vue/file-type/TerminalIcon";
import "@bitrix24/b24icons-vue/file-type/YamlIcon";
import "@bitrix24/b24icons-vue/file-type/BunIcon";
import "@bitrix24/b24icons-vue/file-type/YarnIcon";
import "@bitrix24/b24icons-vue/file-type/NpmIcon";
import "@bitrix24/b24icons-vue/file-type/PnpmIcon";
import "@bitrix24/b24icons-vue/file-type/FaviconIcon";
import "@bitrix24/b24icons-vue/file-type/DartlangIcon";
import "@bitrix24/b24icons-vue/file-type/JuliaIcon";
import "@bitrix24/b24icons-vue/file-type/PerlIcon";
import "@bitrix24/b24icons-vue/file-type/ArduinoIcon";
import "@bitrix24/b24icons-vue/file-type/CppheaderIcon";
import "@bitrix24/b24icons-vue/file-type/ScalaIcon";
import "@bitrix24/b24icons-vue/file-type/ErlangIcon";
import "@bitrix24/b24icons-vue/file-type/ElixirIcon";
import "@bitrix24/b24icons-vue/file-type/BicepIcon";
import "@bitrix24/b24icons-vue/file-type/GleamIcon";
import "@bitrix24/b24icons-vue/file-type/GoIcon";
import "@bitrix24/b24icons-vue/file-type/PowershellIcon";
import "@bitrix24/b24icons-vue/file-type/LispIcon";
import "@bitrix24/b24icons-vue/file-type/RubyIcon";
import "@bitrix24/b24icons-vue/file-type/RustIcon";
import "@bitrix24/b24icons-vue/file-type/KotlinIcon";
import "@bitrix24/b24icons-vue/file-type/FsharpIcon";
import "@bitrix24/b24icons-vue/file-type/HaskellIcon";
import "@bitrix24/b24icons-vue/file-type/FortranIcon";
import "@bitrix24/b24icons-vue/file-type/AssemblyIcon";
import "@bitrix24/b24icons-vue/file-type/CsharpIcon";
import "@bitrix24/b24icons-vue/file-type/PythonIcon";
import "@bitrix24/b24icons-vue/file-type/MarkdownIcon";
import "@bitrix24/b24icons-vue/file-type/JsIcon";
import "@bitrix24/b24icons-vue/file-type/TypescriptIcon";
import "@bitrix24/b24icons-vue/file-type/VueIcon";
import "@bitrix24/b24icons-vue/file-type/TailwindIcon";
import "@bitrix24/b24icons-vue/file-type/VscodeIcon";
import "@bitrix24/b24icons-vue/file-type/DotenvIcon";
import "@bitrix24/b24icons-vue/file-type/GitIcon";
import "@bitrix24/b24icons-vue/file-type/EslintIcon";
import "@bitrix24/b24icons-vue/file-type/EditorconfigIcon";
import "@bitrix24/b24icons-vue/file-type/TsconfigIcon";
import "@bitrix24/b24icons-vue/file-type/NodeIcon";
const theme = {
  "slots": {
    "root": "relative group *:not-first:my-0! *:not-first:static! my-5",
    "list": "relative flex items-center gap-1 border border-(--ui-color-design-tinted-na-stroke) bg-(--ui-color-bg-content-secondary) border-b-0 rounded-t-md overflow-x-auto p-2",
    "indicator": "absolute left-0 inset-y-2 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position) transition-[translate,width] duration-200 bg-(--ui-color-design-selection-bg) rounded-md shadow-xs",
    "trigger": "relative inline-flex items-center gap-1.5 text-legend data-[state=active]:text-legend hover:bg-(--ui-color-design-selection-bg) px-2 py-1.5 text-sm rounded-md disabled:cursor-not-allowed disabled:opacity-30 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-color-accent-soft-element-blue) focus:outline-none transition-colors",
    "triggerIcon": "size-4 shrink-0",
    "triggerLabel": "truncate"
  }
};
const _sfc_main = {
  __name: "ProseCodeGroup",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    defaultValue: { type: String, required: false, default: "0" },
    sync: { type: String, required: false },
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
    const props = useComponentProps("prose.codeGroup", _props);
    const model = useModel(__props, "modelValue");
    const appConfig = useAppConfig();
    const b24ui = computed(() => tv({ extend: tv(theme), ...appConfig.b24ui?.prose?.codeGroup || {} })());
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
        label: slot.props?.filename || slot.props?.label || `${index}`,
        icon: slot.props?.icon,
        component: slot
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsRoot_default), mergeProps({
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "default-value": unref(props).defaultValue,
        "unmount-on-hide": false,
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
                  _push3(`<!--[-->`);
                  ssrRenderList(items.value, (item, index) => {
                    _push3(ssrRenderComponent(unref(TabsTrigger_default), {
                      key: index,
                      value: String(index),
                      "data-slot": "trigger",
                      class: b24ui.value.trigger({ class: unref(props).b24ui?.trigger })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$1, {
                            icon: item.icon,
                            filename: item.label,
                            "data-slot": "triggerIcon",
                            class: b24ui.value.triggerIcon({ class: unref(props).b24ui?.triggerIcon })
                          }, null, _parent4, _scopeId3));
                          _push4(`<span data-slot="triggerLabel" class="${ssrRenderClass(b24ui.value.triggerLabel({ class: unref(props).b24ui?.triggerLabel }))}"${_scopeId3}>${ssrInterpolate(item.label)}</span>`);
                        } else {
                          return [
                            createVNode(_sfc_main$1, {
                              icon: item.icon,
                              filename: item.label,
                              "data-slot": "triggerIcon",
                              class: b24ui.value.triggerIcon({ class: unref(props).b24ui?.triggerIcon })
                            }, null, 8, ["icon", "filename", "class"]),
                            createVNode("span", {
                              "data-slot": "triggerLabel",
                              class: b24ui.value.triggerLabel({ class: unref(props).b24ui?.triggerLabel })
                            }, toDisplayString(item.label), 3)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(unref(TabsIndicator_default), {
                      "data-slot": "indicator",
                      class: b24ui.value.indicator({ class: unref(props).b24ui?.indicator })
                    }, null, 8, ["class"]),
                    (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                      return openBlock(), createBlock(unref(TabsTrigger_default), {
                        key: index,
                        value: String(index),
                        "data-slot": "trigger",
                        class: b24ui.value.trigger({ class: unref(props).b24ui?.trigger })
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1, {
                            icon: item.icon,
                            filename: item.label,
                            "data-slot": "triggerIcon",
                            class: b24ui.value.triggerIcon({ class: unref(props).b24ui?.triggerIcon })
                          }, null, 8, ["icon", "filename", "class"]),
                          createVNode("span", {
                            "data-slot": "triggerLabel",
                            class: b24ui.value.triggerLabel({ class: unref(props).b24ui?.triggerLabel })
                          }, toDisplayString(item.label), 3)
                        ]),
                        _: 2
                      }, 1032, ["value", "class"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(items.value, (item, index) => {
              _push2(ssrRenderComponent(unref(TabsContent_default), {
                key: index,
                value: String(index),
                "as-child": ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.component), {
                      "hide-header": "",
                      tabindex: "-1"
                    }, null), _parent3, _scopeId2);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(item.component), {
                        "hide-header": "",
                        tabindex: "-1"
                      }))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
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
                  (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                    return openBlock(), createBlock(unref(TabsTrigger_default), {
                      key: index,
                      value: String(index),
                      "data-slot": "trigger",
                      class: b24ui.value.trigger({ class: unref(props).b24ui?.trigger })
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1, {
                          icon: item.icon,
                          filename: item.label,
                          "data-slot": "triggerIcon",
                          class: b24ui.value.triggerIcon({ class: unref(props).b24ui?.triggerIcon })
                        }, null, 8, ["icon", "filename", "class"]),
                        createVNode("span", {
                          "data-slot": "triggerLabel",
                          class: b24ui.value.triggerLabel({ class: unref(props).b24ui?.triggerLabel })
                        }, toDisplayString(item.label), 3)
                      ]),
                      _: 2
                    }, 1032, ["value", "class"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["class"]),
              (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                return openBlock(), createBlock(unref(TabsContent_default), {
                  key: index,
                  value: String(index),
                  "as-child": ""
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(item.component), {
                      "hide-header": "",
                      tabindex: "-1"
                    }))
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/prose/CodeGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=CodeGroup-UhdYOcgA.js.map

import { q as useForwardExpose, a as Primitive, P as Presence_default, f as createContext, o as useCollection, i as getActiveElement } from './server.mjs';
import { defineComponent, toRefs, ref, shallowRef, openBlock, createBlock, unref, withCtx, renderSlot, createVNode, watch, watchPostEffect, computed, mergeProps, createCommentVNode, withKeys, withModifiers, normalizeStyle, nextTick } from 'vue';
import { useVModel, useMounted, useResizeObserver } from '@vueuse/core';
import { u as useId } from './useId-D2CyCh8B.mjs';
import { u as useDirection } from './useDirection-BoRtQb0A.mjs';

const ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
const EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
const MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir) {
  if (dir !== "rtl") return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
  const key = getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
  if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
  return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst(candidates, preventScroll = false) {
  const PREVIOUSLY_FOCUSED_ELEMENT = getActiveElement();
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus({ preventScroll });
    if (getActiveElement() !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
const [injectRovingFocusGroupContext, provideRovingFocusGroupContext] = /* @__PURE__ */ createContext("RovingFocusGroup");
var RovingFocusGroup_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RovingFocusGroup",
  props: {
    orientation: {
      type: String,
      required: false,
      default: void 0
    },
    dir: {
      type: String,
      required: false
    },
    loop: {
      type: Boolean,
      required: false,
      default: false
    },
    currentTabStopId: {
      type: [String, null],
      required: false
    },
    defaultCurrentTabStopId: {
      type: String,
      required: false
    },
    preventScrollOnEntryFocus: {
      type: Boolean,
      required: false,
      default: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { loop, orientation, dir: propDir } = toRefs(props);
    const dir = useDirection(propDir);
    const currentTabStopId = useVModel(props, "currentTabStopId", emits, {
      defaultValue: props.defaultCurrentTabStopId,
      passive: props.currentTabStopId === void 0
    });
    const isTabbingBackOut = ref(false);
    const isClickFocus = ref(false);
    const focusableItemsCount = ref(0);
    const { getItems, CollectionSlot } = useCollection({ isProvider: true });
    function handleFocus(event) {
      const isKeyboardFocus = !isClickFocus.value;
      if (event.currentTarget && event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut.value) {
        const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
        event.currentTarget.dispatchEvent(entryFocusEvent);
        emits("entryFocus", entryFocusEvent);
        if (!entryFocusEvent.defaultPrevented) {
          const items = getItems().map((i) => i.ref).filter((i) => i.dataset.disabled !== "");
          const activeItem = items.find((item) => item.getAttribute("data-active") === "");
          const highlightedItem = items.find((item) => item.getAttribute("data-highlighted") === "");
          const currentItem = items.find((item) => item.id === currentTabStopId.value);
          const candidateItems = [
            activeItem,
            highlightedItem,
            currentItem,
            ...items
          ].filter(Boolean);
          focusFirst(candidateItems, props.preventScrollOnEntryFocus);
        }
      }
      isClickFocus.value = false;
    }
    function handleMouseUp() {
      setTimeout(() => {
        isClickFocus.value = false;
      }, 1);
    }
    __expose({ getItems });
    provideRovingFocusGroupContext({
      loop,
      dir,
      orientation,
      currentTabStopId,
      onItemFocus: (tabStopId) => {
        currentTabStopId.value = tabStopId;
      },
      onItemShiftTab: () => {
        isTabbingBackOut.value = true;
      },
      onFocusableItemAdd: () => {
        focusableItemsCount.value++;
      },
      onFocusableItemRemove: () => {
        focusableItemsCount.value--;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(CollectionSlot), null, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          tabindex: isTabbingBackOut.value || focusableItemsCount.value === 0 ? -1 : 0,
          "data-orientation": unref(orientation),
          as: _ctx.as,
          "as-child": _ctx.asChild,
          dir: unref(dir),
          style: { "outline": "none" },
          onMousedown: _cache[0] || (_cache[0] = ($event) => isClickFocus.value = true),
          onMouseup: handleMouseUp,
          onFocus: handleFocus,
          onBlur: _cache[1] || (_cache[1] = ($event) => isTabbingBackOut.value = false)
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "tabindex",
          "data-orientation",
          "as",
          "as-child",
          "dir"
        ])]),
        _: 3
      });
    };
  }
});
var RovingFocusGroup_default = RovingFocusGroup_vue_vue_type_script_setup_true_lang_default;
var RovingFocusItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {
      type: String,
      required: false
    },
    focusable: {
      type: Boolean,
      required: false,
      default: true
    },
    active: {
      type: Boolean,
      required: false
    },
    allowShiftKey: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "span"
    }
  },
  setup(__props) {
    const props = __props;
    const context = injectRovingFocusGroupContext();
    const randomId = useId();
    const id = computed(() => props.tabStopId || randomId);
    const isCurrentTabStop = computed(() => context.currentTabStopId.value === id.value);
    const { getItems, CollectionItem } = useCollection();
    function handleKeydown(event) {
      if (event.key === "Tab" && event.shiftKey) {
        context.onItemShiftTab();
        return;
      }
      if (event.target !== event.currentTarget) return;
      const focusIntent = getFocusIntent(event, context.orientation.value, context.dir.value);
      if (focusIntent !== void 0) {
        if (event.metaKey || event.ctrlKey || event.altKey || (props.allowShiftKey ? false : event.shiftKey)) return;
        event.preventDefault();
        let candidateNodes = [...getItems().map((i) => i.ref).filter((i) => i.dataset.disabled !== "")];
        if (focusIntent === "last") candidateNodes.reverse();
        else if (focusIntent === "prev" || focusIntent === "next") {
          if (focusIntent === "prev") candidateNodes.reverse();
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = context.loop.value ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
        }
        nextTick(() => focusFirst(candidateNodes));
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(CollectionItem), null, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          tabindex: isCurrentTabStop.value ? 0 : -1,
          "data-orientation": unref(context).orientation.value,
          "data-active": _ctx.active ? "" : void 0,
          "data-disabled": !_ctx.focusable ? "" : void 0,
          as: _ctx.as,
          "as-child": _ctx.asChild,
          onMousedown: _cache[0] || (_cache[0] = (event) => {
            if (!_ctx.focusable) event.preventDefault();
            else unref(context).onItemFocus(id.value);
          }),
          onFocus: _cache[1] || (_cache[1] = ($event) => unref(context).onItemFocus(id.value)),
          onKeydown: handleKeydown
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "tabindex",
          "data-orientation",
          "data-active",
          "data-disabled",
          "as",
          "as-child"
        ])]),
        _: 3
      });
    };
  }
});
var RovingFocusItem_default = RovingFocusItem_vue_vue_type_script_setup_true_lang_default;
const [injectTabsRootContext, provideTabsRootContext] = /* @__PURE__ */ createContext("TabsRoot");
var TabsRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "TabsRoot",
  props: {
    defaultValue: {
      type: null,
      required: false
    },
    orientation: {
      type: String,
      required: false,
      default: "horizontal"
    },
    dir: {
      type: String,
      required: false
    },
    activationMode: {
      type: String,
      required: false,
      default: "automatic"
    },
    modelValue: {
      type: null,
      required: false
    },
    unmountOnHide: {
      type: Boolean,
      required: false,
      default: true
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { orientation, unmountOnHide, dir: propDir } = toRefs(props);
    const dir = useDirection(propDir);
    useForwardExpose();
    const modelValue = useVModel(props, "modelValue", emits, {
      defaultValue: props.defaultValue,
      passive: props.modelValue === void 0
    });
    const tabsList = ref();
    const contentIds = shallowRef(/* @__PURE__ */ new Set());
    provideTabsRootContext({
      modelValue,
      changeModelValue: (value) => {
        modelValue.value = value;
      },
      orientation,
      dir,
      unmountOnHide,
      activationMode: props.activationMode,
      baseId: useId(void 0, "reka-tabs"),
      tabsList,
      contentIds,
      registerContent: (value) => {
        contentIds.value = /* @__PURE__ */ new Set([...contentIds.value, value]);
      },
      unregisterContent: (value) => {
        const newSet = new Set(contentIds.value);
        newSet.delete(value);
        contentIds.value = newSet;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        dir: unref(dir),
        "data-orientation": unref(orientation),
        "as-child": _ctx.asChild,
        as: _ctx.as
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) })]),
        _: 3
      }, 8, [
        "dir",
        "data-orientation",
        "as-child",
        "as"
      ]);
    };
  }
});
var TabsRoot_default = TabsRoot_vue_vue_type_script_setup_true_lang_default;
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
var TabsContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "TabsContent",
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    forceMount: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const { forwardRef } = useForwardExpose();
    const rootContext = injectTabsRootContext();
    const triggerId = computed(() => makeTriggerId(rootContext.baseId, props.value));
    const contentId = computed(() => makeContentId(rootContext.baseId, props.value));
    const isSelected = computed(() => props.value === rootContext.modelValue.value);
    const isMountAnimationPreventedRef = ref(isSelected.value);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), {
        present: _ctx.forceMount || isSelected.value,
        "force-mount": ""
      }, {
        default: withCtx(({ present }) => [createVNode(unref(Primitive), {
          id: contentId.value,
          ref: unref(forwardRef),
          "as-child": _ctx.asChild,
          as: _ctx.as,
          role: "tabpanel",
          "data-state": isSelected.value ? "active" : "inactive",
          "data-orientation": unref(rootContext).orientation.value,
          "aria-labelledby": triggerId.value,
          hidden: !present,
          tabindex: "0",
          style: normalizeStyle({ animationDuration: isMountAnimationPreventedRef.value ? "0s" : void 0 })
        }, {
          default: withCtx(() => [(unref(rootContext).unmountOnHide.value ? present : true) ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)]),
          _: 2
        }, 1032, [
          "id",
          "as-child",
          "as",
          "data-state",
          "data-orientation",
          "aria-labelledby",
          "hidden",
          "style"
        ])]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var TabsContent_default = TabsContent_vue_vue_type_script_setup_true_lang_default;
var TabsIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "TabsIndicator",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const context = injectTabsRootContext();
    __expose({ updateIndicatorStyle });
    useForwardExpose();
    const isMounted = useMounted();
    const indicatorStyle = ref({
      size: null,
      position: null
    });
    const tabs = ref([]);
    watch(() => [context.modelValue.value, context?.dir.value], () => {
      updateIndicatorStyle();
    }, {
      immediate: true,
      flush: "post"
    });
    watchPostEffect(() => {
      tabs.value = Array.from(context.tabsList.value?.querySelectorAll('[role="tab"]') || []);
    });
    useResizeObserver(computed(() => [context.tabsList.value, ...tabs.value]), updateIndicatorStyle);
    function updateIndicatorStyle() {
      const activeTab = context.tabsList.value?.querySelector('[role="tab"][data-state="active"]');
      if (!activeTab) return;
      if (context.orientation.value === "horizontal") indicatorStyle.value = {
        size: activeTab.offsetWidth,
        position: activeTab.offsetLeft
      };
      else indicatorStyle.value = {
        size: activeTab.offsetHeight,
        position: activeTab.offsetTop
      };
    }
    return (_ctx, _cache) => {
      return unref(isMounted) && typeof indicatorStyle.value.size === "number" ? (openBlock(), createBlock(unref(Primitive), mergeProps({ key: 0 }, props, { style: {
        "--reka-tabs-indicator-size": `${indicatorStyle.value.size}px`,
        "--reka-tabs-indicator-position": `${indicatorStyle.value.position}px`
      } }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["style"])) : createCommentVNode("v-if", true);
    };
  }
});
var TabsIndicator_default = TabsIndicator_vue_vue_type_script_setup_true_lang_default;
var TabsList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "TabsList",
  props: {
    loop: {
      type: Boolean,
      required: false,
      default: true
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const { loop } = toRefs(props);
    const { forwardRef, currentElement } = useForwardExpose();
    const context = injectTabsRootContext();
    context.tabsList = currentElement;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(RovingFocusGroup_default), {
        "as-child": "",
        orientation: unref(context).orientation.value,
        dir: unref(context).dir.value,
        loop: unref(loop)
      }, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          ref: unref(forwardRef),
          role: "tablist",
          "as-child": _ctx.asChild,
          as: _ctx.as,
          "aria-orientation": unref(context).orientation.value
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "as-child",
          "as",
          "aria-orientation"
        ])]),
        _: 3
      }, 8, [
        "orientation",
        "dir",
        "loop"
      ]);
    };
  }
});
var TabsList_default = TabsList_vue_vue_type_script_setup_true_lang_default;
var TabsTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "TabsTrigger",
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
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
    const { forwardRef } = useForwardExpose();
    const rootContext = injectTabsRootContext();
    const triggerId = computed(() => makeTriggerId(rootContext.baseId, props.value));
    const contentId = computed(() => rootContext.contentIds.value.has(props.value) ? makeContentId(rootContext.baseId, props.value) : void 0);
    const isSelected = computed(() => props.value === rootContext.modelValue.value);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(RovingFocusItem_default), {
        "as-child": "",
        focusable: !_ctx.disabled,
        active: isSelected.value
      }, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          id: triggerId.value,
          ref: unref(forwardRef),
          role: "tab",
          type: _ctx.as === "button" ? "button" : void 0,
          as: _ctx.as,
          "as-child": _ctx.asChild,
          "aria-selected": isSelected.value ? "true" : "false",
          "aria-controls": contentId.value,
          "data-state": isSelected.value ? "active" : "inactive",
          disabled: _ctx.disabled,
          "data-disabled": _ctx.disabled ? "" : void 0,
          "data-orientation": unref(rootContext).orientation.value,
          onMousedown: _cache[0] || (_cache[0] = withModifiers((event) => {
            if (!_ctx.disabled && event.ctrlKey === false) unref(rootContext).changeModelValue(_ctx.value);
            else event.preventDefault();
          }, ["left"])),
          onKeydown: _cache[1] || (_cache[1] = withKeys(($event) => unref(rootContext).changeModelValue(_ctx.value), ["enter", "space"])),
          onFocus: _cache[2] || (_cache[2] = () => {
            const isAutomaticActivation = unref(rootContext).activationMode !== "manual";
            if (!isSelected.value && !_ctx.disabled && isAutomaticActivation) unref(rootContext).changeModelValue(_ctx.value);
          })
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "id",
          "type",
          "as",
          "as-child",
          "aria-selected",
          "aria-controls",
          "data-state",
          "disabled",
          "data-disabled",
          "data-orientation"
        ])]),
        _: 3
      }, 8, ["focusable", "active"]);
    };
  }
});
var TabsTrigger_default = TabsTrigger_vue_vue_type_script_setup_true_lang_default;

export { TabsContent_default as T, TabsIndicator_default as a, TabsList_default as b, TabsRoot_default as c, TabsTrigger_default as d };
//# sourceMappingURL=TabsTrigger-CZpw1vvP.mjs.map

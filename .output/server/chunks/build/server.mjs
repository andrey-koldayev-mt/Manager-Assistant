import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import * as vue from 'vue';
import { defineComponent, toRefs, ref, getCurrentInstance, h, unref, openBlock, createBlock, Teleport, renderSlot, createCommentVNode, computed, mergeProps, withCtx, useSlots, createVNode, resolveDynamicComponent, toDisplayString, withModifiers, inject, watch, provide, isRef, toRef, nextTick, Fragment, shallowRef, resolveComponent, Comment, cloneVNode, hasInjectionContext, camelize, toValue, useModel, mergeModels, watchEffect, markRaw, toHandlerKey, defineAsyncComponent, useSSRContext, createApp, renderList, useId as useId$1, useTemplateRef, reactive, withDirectives, vModelSelect, createTextVNode, onErrorCaptured, onServerPrefetch, shallowReactive, effectScope, normalizeProps, guardReactiveProps, normalizeStyle, toHandlers, getCurrentScope, withKeys, createElementVNode, createElementBlock, watchPostEffect, onScopeDispose, mergeDefaults, isReadonly, isShallow, isReactive, toRaw } from 'vue';
import { H as serialize, e as defu, p as hasProtocol, V as withLeadingSlash, X as withTrailingSlash, u as joinURL, v as klona, x as parseQuery, q as isEqual, f as defuFn, y as parseURL, h as encodePath, d as decodePath, W as withQuery, s as isScriptProtocol, i as getContext, Y as withoutTrailingSlash, G as sanitizeStatusCode, $ as $fetch$1, c as createError$1, r as isEqual$1, O as stringifyParsedURL, P as stringifyQuery, l as getRequestHeader } from '../_/nitro.mjs';
import { u as useHead$1, h as headSymbol, b as baseURL, p as publicAssetsURL } from '../routes/renderer.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderVNode, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderSuspense } from 'vue/server-renderer';
import { unrefElement, useMounted, reactiveOmit, defaultWindow, reactivePick, createSharedComposable, useEventListener, createGlobalState, useVModel, onKeyStroke, useDebounceFn, useRafFn, computedEager } from '@vueuse/core';
import { isClient, isIOS, useTimeoutFn, syncRef, useTimeout, refAutoReset, tryOnScopeDispose, createEventHook, tryOnBeforeUnmount, reactiveOmit as reactiveOmit$1 } from '@vueuse/shared';
import ArrowToTheLeftIcon from '@bitrix24/b24icons-vue/actions/ArrowToTheLeftIcon';
import ArrowToTheRightIcon from '@bitrix24/b24icons-vue/actions/ArrowToTheRightIcon';
import CheckIcon from '@bitrix24/b24icons-vue/outline/CheckLIcon';
import ChevronTopLIcon from '@bitrix24/b24icons-vue/outline/ChevronTopLIcon';
import ChevronToTheLeftIcon from '@bitrix24/b24icons-vue/outline/ChevronLeftLIcon';
import ChevronToTheRightIcon from '@bitrix24/b24icons-vue/outline/ChevronRightLIcon';
import DoubleShevronsRightIcon from '@bitrix24/b24icons-vue/actions/DoubleShevronsRightIcon';
import DoubleShevronsLeftIcon from '@bitrix24/b24icons-vue/actions/DoubleShevronsLeftIcon';
import CrossMIcon from '@bitrix24/b24icons-vue/outline/CrossMIcon';
import DotsIcon from '@bitrix24/b24icons-vue/button/DotsIcon';
import Refresh6Icon from '@bitrix24/b24icons-vue/actions/Refresh6Icon';
import Minus30Icon from '@bitrix24/b24icons-vue/actions/Minus30Icon';
import Plus30Icon from '@bitrix24/b24icons-vue/actions/Plus30Icon';
import Search2Icon from '@bitrix24/b24icons-vue/main/Search2Icon';
import LoaderWaitIcon from '@bitrix24/b24icons-vue/animated/LoaderWaitIcon';
import ChevronDownLIcon from '@bitrix24/b24icons-vue/outline/ChevronDownLIcon';
import ScreenIcon from '@bitrix24/b24icons-vue/outline/ScreenIcon';
import SunIconAir from '@bitrix24/b24icons-vue/outline/SunIcon';
import MoonIconAir from '@bitrix24/b24icons-vue/outline/MoonIcon';
import TagIcon from '@bitrix24/b24icons-vue/outline/TagIcon';
import InfoCircleIcon from '@bitrix24/b24icons-vue/outline/InfoCircleIcon';
import IdeaLampIcon from '@bitrix24/b24icons-vue/outline/IdeaLampIcon';
import WarningIcon from '@bitrix24/b24icons-vue/main/WarningIcon';
import AlertIcon from '@bitrix24/b24icons-vue/outline/AlertIcon';
import CopyIcon from '@bitrix24/b24icons-vue/outline/CopyIcon';
import CircleCheckIcon from '@bitrix24/b24icons-vue/outline/CircleCheckIcon';
import FileIcon from '@bitrix24/b24icons-vue/outline/FileIcon';
import UploadFileIcon from '@bitrix24/b24icons-vue/outline/UploadFileIcon';
import ArrowDownLIcon from '@bitrix24/b24icons-vue/outline/ArrowDownLIcon';
import ArrowTopLIcon from '@bitrix24/b24icons-vue/outline/ArrowTopLIcon';
import StopLIcon from '@bitrix24/b24icons-vue/outline/StopLIcon';
import RefreshIcon from '@bitrix24/b24icons-vue/outline/RefreshIcon';
import SendIcon from '@bitrix24/b24icons-vue/main/SendIcon';
import DragLIcon from '@bitrix24/b24icons-vue/outline/DragLIcon';
import GoToLIcon from '@bitrix24/b24icons-vue/outline/GoToLIcon';
import HamburgerMenuIcon from '@bitrix24/b24icons-vue/outline/HamburgerMenuIcon';
import CloseChatIcon from '@bitrix24/b24icons-vue/outline/CloseChatIcon';
import OpenChatIcon from '@bitrix24/b24icons-vue/outline/OpenChatIcon';
import GitHubIcon from '@bitrix24/b24icons-vue/social/GitHubIcon';
import MdnwebdocsIcon from '@bitrix24/b24icons-vue/social/MdnwebdocsIcon';
import Bitrix24Icon from '@bitrix24/b24icons-vue/common-service/Bitrix24Icon';
import DemonstrationOnIcon from '@bitrix24/b24icons-vue/outline/DemonstrationOnIcon';
import DesignIcon from '@bitrix24/b24icons-vue/outline/DesignIcon';
import FavoriteIcon from '@bitrix24/b24icons-vue/outline/FavoriteIcon';
import MoreMIcon from '@bitrix24/b24icons-vue/outline/MoreMIcon';
import NuxtIcon from '@bitrix24/b24icons-vue/file-type/NuxtIcon';
import AiStarsIcon from '@bitrix24/b24icons-vue/outline/AiStarsIcon';
import EncloseTextInCodeTagIcon from '@bitrix24/b24icons-vue/editor/EncloseTextInCodeTagIcon';
import PlayLIcon from '@bitrix24/b24icons-vue/outline/PlayLIcon';
import { createTV } from 'tailwind-variants';
import ChevronDownSIcon from '@bitrix24/b24icons-vue/outline/ChevronDownSIcon';
import LoaderClockIcon from '@bitrix24/b24icons-vue/animated/LoaderClockIcon';
import SpinnerIcon from '@bitrix24/b24icons-vue/specialized/SpinnerIcon';
import Cross20Icon from '@bitrix24/b24icons-vue/actions/Cross20Icon';
import { parseDate, isToday, getLocalTimeZone, isSameMonth, isSameDay, isEqualDay, CalendarDate, getDayOfWeek, startOfWeek, DateFormatter, createCalendar, toCalendar, CalendarDateTime, isEqualMonth, ZonedDateTime, today, startOfMonth, endOfMonth } from '@internationalized/date';
import { offset, flip, shift, limitShift, size, arrow, hide, useFloating, autoUpdate } from '@floating-ui/vue';
import { hideOthers } from 'aria-hidden';
import CircleCheckIcon$1 from '@bitrix24/b24icons-vue/main/CircleCheckIcon';
import RocketIcon from '@bitrix24/b24icons-vue/main/RocketIcon';
import RefreshIcon$1 from '@bitrix24/b24icons-vue/main/RefreshIcon';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:fs/promises';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

function flatHooks(configHooks, hooks = {}, parentName) {
	for (const key in configHooks) {
		const subHook = configHooks[key];
		const name = parentName ? `${parentName}:${key}` : key;
		if (typeof subHook === "object" && subHook !== null) flatHooks(subHook, hooks, name);
		else if (typeof subHook === "function") hooks[name] = subHook;
	}
	return hooks;
}
const createTask = /* @__PURE__ */ (() => {
	if (console.createTask) return console.createTask;
	const defaultTask = { run: (fn) => fn() };
	return () => defaultTask;
})();
function callHooks(hooks, args, startIndex, task) {
	for (let i = startIndex; i < hooks.length; i += 1) try {
		const result = task ? task.run(() => hooks[i](...args)) : hooks[i](...args);
		if (result && typeof result.then === "function") return Promise.resolve(result).then(() => callHooks(hooks, args, i + 1, task));
	} catch (error) {
		return Promise.reject(error);
	}
}
function serialTaskCaller(hooks, args, name) {
	if (hooks.length > 0) return callHooks(hooks, args, 0, createTask(name));
}
function parallelTaskCaller(hooks, args, name) {
	if (hooks.length > 0) {
		const task = createTask(name);
		return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
	}
}
function callEachWith(callbacks, arg0) {
	for (const callback of [...callbacks]) callback(arg0);
}
var Hookable = class {
	_hooks;
	_before;
	_after;
	_deprecatedHooks;
	_deprecatedMessages;
	constructor() {
		this._hooks = {};
		this._before = void 0;
		this._after = void 0;
		this._deprecatedMessages = void 0;
		this._deprecatedHooks = {};
		this.hook = this.hook.bind(this);
		this.callHook = this.callHook.bind(this);
		this.callHookWith = this.callHookWith.bind(this);
	}
	hook(name, function_, options = {}) {
		if (!name || typeof function_ !== "function") return () => {};
		const originalName = name;
		let dep;
		while (this._deprecatedHooks[name]) {
			dep = this._deprecatedHooks[name];
			name = dep.to;
		}
		if (dep && !options.allowDeprecated) {
			let message = dep.message;
			if (!message) message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
			if (!this._deprecatedMessages) this._deprecatedMessages = /* @__PURE__ */ new Set();
			if (!this._deprecatedMessages.has(message)) {
				console.warn(message);
				this._deprecatedMessages.add(message);
			}
		}
		if (!function_.name) try {
			Object.defineProperty(function_, "name", {
				get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
				configurable: true
			});
		} catch {}
		this._hooks[name] = this._hooks[name] || [];
		this._hooks[name].push(function_);
		return () => {
			if (function_) {
				this.removeHook(name, function_);
				function_ = void 0;
			}
		};
	}
	hookOnce(name, function_) {
		let _unreg;
		let _function = (...arguments_) => {
			if (typeof _unreg === "function") _unreg();
			_unreg = void 0;
			_function = void 0;
			return function_(...arguments_);
		};
		_unreg = this.hook(name, _function);
		return _unreg;
	}
	removeHook(name, function_) {
		const hooks = this._hooks[name];
		if (hooks) {
			const index = hooks.indexOf(function_);
			if (index !== -1) hooks.splice(index, 1);
			if (hooks.length === 0) this._hooks[name] = void 0;
		}
	}
	clearHook(name) {
		this._hooks[name] = void 0;
	}
	deprecateHook(name, deprecated) {
		this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
		const _hooks = this._hooks[name] || [];
		this._hooks[name] = void 0;
		for (const hook of _hooks) this.hook(name, hook);
	}
	deprecateHooks(deprecatedHooks) {
		for (const name in deprecatedHooks) this.deprecateHook(name, deprecatedHooks[name]);
	}
	addHooks(configHooks) {
		const hooks = flatHooks(configHooks);
		const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
		return () => {
			for (const unreg of removeFns) unreg();
			removeFns.length = 0;
		};
	}
	removeHooks(configHooks) {
		const hooks = flatHooks(configHooks);
		for (const key in hooks) this.removeHook(key, hooks[key]);
	}
	removeAllHooks() {
		this._hooks = {};
	}
	callHook(name, ...args) {
		return this.callHookWith(serialTaskCaller, name, args);
	}
	callHookParallel(name, ...args) {
		return this.callHookWith(parallelTaskCaller, name, args);
	}
	callHookWith(caller, name, args) {
		const event = this._before || this._after ? {
			name,
			args,
			context: {}
		} : void 0;
		if (this._before) callEachWith(this._before, event);
		const result = caller(this._hooks[name] ? [...this._hooks[name]] : [], args, name);
		if (result instanceof Promise) return result.finally(() => {
			if (this._after && event) callEachWith(this._after, event);
		});
		if (this._after && event) callEachWith(this._after, event);
		return result;
	}
	beforeEach(function_) {
		this._before = this._before || [];
		this._before.push(function_);
		return () => {
			if (this._before !== void 0) {
				const index = this._before.indexOf(function_);
				if (index !== -1) this._before.splice(index, 1);
			}
		};
	}
	afterEach(function_) {
		this._after = this._after || [];
		this._after.push(function_);
		return () => {
			if (this._after !== void 0) {
				const index = this._after.indexOf(function_);
				if (index !== -1) this._after.splice(index, 1);
			}
		};
	}
};
function createHooks() {
	return new Hookable();
}

function diff(obj1, obj2) {
  const h1 = _toHashedObject(obj1);
  const h2 = _toHashedObject(obj2);
  return _diff(h1, h2);
}
function _diff(h1, h2) {
  const diffs = [];
  const allProps = /* @__PURE__ */ new Set([
    ...Object.keys(h1.props || {}),
    ...Object.keys(h2.props || {})
  ]);
  if (h1.props && h2.props) {
    for (const prop of allProps) {
      const p1 = h1.props[prop];
      const p2 = h2.props[prop];
      if (p1 && p2) {
        diffs.push(..._diff(h1.props?.[prop], h2.props?.[prop]));
      } else if (p1 || p2) {
        diffs.push(
          new DiffEntry((p2 || p1).key, p1 ? "removed" : "added", p2, p1)
        );
      }
    }
  }
  if (allProps.size === 0 && h1.hash !== h2.hash) {
    diffs.push(new DiffEntry((h2 || h1).key, "changed", h2, h1));
  }
  return diffs;
}
function _toHashedObject(obj, key = "") {
  if (obj && typeof obj !== "object") {
    return new DiffHashedObject(key, obj, serialize(obj));
  }
  const props = {};
  const hashes = [];
  for (const _key in obj) {
    props[_key] = _toHashedObject(obj[_key], key ? `${key}.${_key}` : _key);
    hashes.push(props[_key].hash);
  }
  return new DiffHashedObject(key, obj, `{${hashes.join(":")}}`, props);
}
class DiffEntry {
  constructor(key, type, newValue, oldValue) {
    this.key = key;
    this.type = type;
    this.newValue = newValue;
    this.oldValue = oldValue;
  }
  toString() {
    return this.toJSON();
  }
  toJSON() {
    switch (this.type) {
      case "added": {
        return `Added   \`${this.key}\``;
      }
      case "removed": {
        return `Removed \`${this.key}\``;
      }
      case "changed": {
        return `Changed \`${this.key}\` from \`${this.oldValue?.toString() || "-"}\` to \`${this.newValue.toString()}\``;
      }
    }
  }
}
class DiffHashedObject {
  constructor(key, value, hash, props) {
    this.key = key;
    this.value = value;
    this.hash = hash;
    this.props = props;
  }
  toString() {
    if (this.props) {
      return `{${Object.keys(this.props).join(",")}}`;
    } else {
      return JSON.stringify(this.value);
    }
  }
  toJSON() {
    const k = this.key || ".";
    if (this.props) {
      return `${k}({${Object.keys(this.props).join(",")}})`;
    }
    return `${k}(${this.value})`;
  }
}

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    versions: {
      get nuxt() {
        return "4.4.6";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...options.ssrContext?.payload || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _state: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin) {
  if (plugin.hooks) {
    nuxtApp.hooks.addHooks(plugin.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  let error = void 0;
  let promiseDepth = 0;
  async function executePlugin(plugin) {
    const unresolvedPluginsForThisPlugin = plugin.dependsOn?.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin).then(async () => {
        if (plugin._name) {
          resolvedPlugins.add(plugin._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin._name)) {
              dependsOn.delete(plugin._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      }).catch((e) => {
        if (!plugin.parallel && !nuxtApp.payload.error) {
          throw e;
        }
        error ||= e;
      });
      if (plugin.parallel) {
        parallels.push(promise);
      } else {
        await promise;
      }
    }
  }
  for (const plugin of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin.env?.islands === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin);
  }
  for (const plugin of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (error) {
    throw nuxtApp.payload.error || error;
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin) {
  if (typeof plugin === "function") {
    return plugin;
  }
  const _name = plugin._name || plugin.name;
  delete plugin.name;
  return Object.assign(plugin.setup || (() => {
  }), plugin, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const PageRouteSymbol = /* @__PURE__ */ Symbol("route");
globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const HTML_ATTR_UNSAFE_RE = /[&"'<>]/g;
const HTML_ATTR_ENCODE_MAP = {
  "&": "%26",
  '"': "%22",
  "'": "%27",
  "<": "%3C",
  ">": "%3E"
};
function encodeForHtmlAttr(value) {
  return value.replace(HTML_ATTR_UNSAFE_RE, (c) => HTML_ATTR_ENCODE_MAP[c]);
}
const navigateTo = (to, options) => {
  to ||= "/";
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = options?.external || isExternalHost;
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = encodeForHtmlAttr(location2);
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext["~renderResponse"] = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  const encodedTo = typeof to === "string" ? encodeRoutePath(to) : to;
  return options?.replace ? router.replace(encodedTo) : router.push(encodedTo);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
function encodeRoutePath(url) {
  const parsed = parseURL(url);
  return encodePath(decodePath(parsed.pathname)) + parsed.search + parsed.hash;
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = /* @__NO_SIDE_EFFECTS__ */ () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const error2 = /* @__PURE__ */ useError();
    if (false) ;
    error2.value ||= nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  if (typeof error !== "string" && error.statusText) {
    error.message ??= error.statusText;
  }
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  Object.defineProperty(nuxtError, "status", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusCode,
    configurable: true
  });
  Object.defineProperty(nuxtError, "statusText", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusMessage,
    configurable: true
  });
  return nuxtError;
};
function freezeHead(head) {
  const realPush = head.push;
  head.push = () => ({ dispose: () => {
  }, patch: () => {
  }, _poll: () => {
  } });
  return () => {
    head.push = realPush;
  };
}
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    if (nuxtApp.ssrContext.islandContext) {
      const unfreeze = freezeHead(head);
      nuxtApp.hooks.hookOnce("app:created", unfreeze);
    }
    nuxtApp.vueApp.use(head);
  }
});
const matcher = /* @__PURE__ */ (() => {
  const $0 = {};
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "api") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _routeRulesMatcher = (path) => defu({}, ...matcher("", path).map((r) => r.data).reverse());
const routeRulesMatcher = _routeRulesMatcher;
function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  try {
    return routeRulesMatcher(path);
  } catch (e) {
    console.error("[nuxt] Error matching route rules.", e);
    return {};
  }
}
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware((to) => {
  {
    return;
  }
});
const globalMiddleware = [
  manifest_45route_45rule
];
function getRouteFromPath(fullPath) {
  const route = fullPath && typeof fullPath === "object" ? fullPath : {};
  if (typeof fullPath === "object") {
    fullPath = stringifyParsedURL({
      pathname: fullPath.path || "",
      search: stringifyQuery(fullPath.query || {}),
      hash: fullPath.hash || ""
    });
  }
  const url = new URL(fullPath.toString(), "http://localhost");
  return {
    path: url.pathname,
    fullPath,
    query: parseQuery(url.search),
    hash: url.hash,
    // stub properties for compat with vue-router
    params: route.params || {},
    name: void 0,
    matched: route.matched || [],
    redirectedFrom: void 0,
    meta: route.meta || {},
    href: fullPath
  };
}
const router_DclsWNDeVV7SyG4lslgLnjbQUK1ws8wgf2FHaAbo7Cw = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  setup(nuxtApp) {
    const initialURL = nuxtApp.ssrContext.url;
    const routes = [];
    const hooks = {
      "navigate:before": [],
      "resolve:before": [],
      "navigate:after": [],
      "error": []
    };
    const registerHook = (hook, guard) => {
      hooks[hook].push(guard);
      return () => hooks[hook].splice(hooks[hook].indexOf(guard), 1);
    };
    (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const route = reactive(getRouteFromPath(initialURL));
    async function handleNavigation(url, replace) {
      try {
        const to = getRouteFromPath(url);
        for (const middleware of hooks["navigate:before"]) {
          const result = await middleware(to, route);
          if (result === false || result instanceof Error) {
            return;
          }
          if (typeof result === "string" && result.length) {
            return await handleNavigation(result, true);
          }
        }
        for (const handler of hooks["resolve:before"]) {
          await handler(to, route);
        }
        Object.assign(route, to);
        if (false) ;
        for (const middleware of hooks["navigate:after"]) {
          await middleware(to, route);
        }
      } catch (err) {
        for (const handler of hooks.error) {
          await handler(err);
        }
      }
    }
    const currentRoute = computed(() => route);
    const router = {
      currentRoute,
      isReady: () => Promise.resolve(),
      // These options provide a similar API to vue-router but have no effect
      options: {},
      install: () => Promise.resolve(),
      // Navigation
      push: (url) => handleNavigation(url),
      replace: (url) => handleNavigation(url),
      back: () => (void 0).history.go(-1),
      go: (delta) => (void 0).history.go(delta),
      forward: () => (void 0).history.go(1),
      // Guards
      beforeResolve: (guard) => registerHook("resolve:before", guard),
      beforeEach: (guard) => registerHook("navigate:before", guard),
      afterEach: (guard) => registerHook("navigate:after", guard),
      onError: (handler) => registerHook("error", handler),
      // Routes
      resolve: getRouteFromPath,
      addRoute: (parentName, route2) => {
        routes.push(route2);
      },
      getRoutes: () => routes,
      hasRoute: (name) => routes.some((route2) => route2.name === name),
      removeRoute: (name) => {
        const index = routes.findIndex((route2) => route2.name === name);
        if (index !== -1) {
          routes.splice(index, 1);
        }
      }
    };
    nuxtApp.vueApp.component("RouterLink", defineComponent({
      functional: true,
      props: {
        to: {
          type: String,
          required: true
        },
        custom: Boolean,
        replace: Boolean,
        // Not implemented
        activeClass: String,
        exactActiveClass: String,
        ariaCurrentValue: String
      },
      setup: (props, { slots }) => {
        const navigate = () => handleNavigation(props.to, props.replace);
        return () => {
          const route2 = router.resolve(props.to);
          return props.custom ? slots.default?.({ href: props.to, navigate, route: route2 }) : h("a", { href: props.to, onClick: (e) => {
            e.preventDefault();
            return navigate();
          } }, slots);
        };
      }
    }));
    nuxtApp._route = route;
    nuxtApp._middleware ||= {
      global: [],
      named: {}
    };
    const initialLayout = nuxtApp.payload.state._layout;
    const initialLayoutProps = nuxtApp.payload.state._layoutProps;
    nuxtApp.hooks.hookOnce("app:created", async () => {
      router.beforeEach(async (to, from) => {
        to.meta = reactive(to.meta || {});
        if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
          to.meta.layout = initialLayout;
          to.meta.layoutProps = initialLayoutProps;
        }
        nuxtApp._processingMiddleware = true;
        if (!nuxtApp.ssrContext?.islandContext) {
          const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
          const routeRules = getRouteRules({ path: to.path });
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              const guard = nuxtApp._middleware.named[key];
              if (!guard) {
                continue;
              }
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(guard);
              } else {
                middlewareEntries.delete(guard);
              }
            }
          }
          for (const middleware of middlewareEntries) {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            {
              if (result === false || result instanceof Error) {
                const error = result || createError$1({
                  status: 404,
                  statusText: `Page Not Found: ${initialURL}`,
                  data: {
                    path: initialURL
                  }
                });
                delete nuxtApp._processingMiddleware;
                return nuxtApp.runWithContext(() => showError(error));
              }
            }
            if (result === true) {
              continue;
            }
            if (result || result === false) {
              return result;
            }
          }
        }
      });
      router.afterEach(() => {
        delete nuxtApp._processingMiddleware;
      });
      await router.replace(initialURL);
      if (!isEqual$1(route.fullPath, initialURL)) {
        await nuxtApp.runWithContext(() => navigateTo(route.fullPath));
      }
    });
    return {
      provide: {
        route,
        router
      }
    };
  }
});
function injectHead(nuxtApp) {
  const nuxt = nuxtApp || useNuxtApp();
  return nuxt.ssrContext?.head || nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      const head = inject(headSymbol);
      if (!head) {
        throw new Error("[nuxt] [unhead] Missing Unhead instance.");
      }
      return head;
    }
  });
}
function useHead(input, options = {}) {
  const head = options.head || injectHead(options.nuxt);
  return useHead$1(input, { head, ...options });
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext["~payloadReducers"][name] = reduce;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const LazyProseA = defineAsyncComponent(() => import('./A-Cee2WvbQ.mjs').then((r) => r["default"] || r.default || r));
const LazyProseAccordion = defineAsyncComponent(() => import('./Accordion-mI3DrhL1.mjs').then((r) => r["default"] || r.default || r));
const LazyProseAccordionItem = defineAsyncComponent(() => import('./AccordionItem-BzZs7Mz2.mjs').then((r) => r["default"] || r.default || r));
const LazyProseBadge = defineAsyncComponent(() => import('./Badge-CX72nOJf.mjs').then((r) => r["default"] || r.default || r));
const LazyProseBlockquote = defineAsyncComponent(() => import('./Blockquote-CLQcpFFa.mjs').then((r) => r["default"] || r.default || r));
const LazyProseCallout = defineAsyncComponent(() => import('./Callout-mw6EzPrW.mjs').then((r) => r["default"] || r.default || r));
const LazyProseCard = defineAsyncComponent(() => import('./Card-ptyLFkgE.mjs').then((r) => r["default"] || r.default || r));
const LazyProseCardGroup = defineAsyncComponent(() => import('./CardGroup-BZahZ4TF.mjs').then((r) => r["default"] || r.default || r));
const LazyProseCode = defineAsyncComponent(() => import('./Code-B9ZCUrx-.mjs').then((r) => r["default"] || r.default || r));
const LazyProseCodeCollapse = defineAsyncComponent(() => import('./CodeCollapse-VVI3otyX.mjs').then((r) => r["default"] || r.default || r));
const LazyProseCodeGroup = defineAsyncComponent(() => import('./CodeGroup-D5bE1E3V.mjs').then((r) => r["default"] || r.default || r));
const LazyProseCodeIcon = defineAsyncComponent(() => import('./CodeIcon-ClyZtDla.mjs').then((r) => r["default"] || r.default || r));
const LazyProseCodePreview = defineAsyncComponent(() => import('./CodePreview-BE3upnpQ.mjs').then((r) => r["default"] || r.default || r));
const LazyProseCollapsible = defineAsyncComponent(() => import('./Collapsible-BX878pWp.mjs').then((r) => r["default"] || r.default || r));
const LazyProseEm = defineAsyncComponent(() => import('./Em-yvmnp3ww.mjs').then((r) => r["default"] || r.default || r));
const LazyProseField = defineAsyncComponent(() => import('./Field-pTdVjQlh.mjs').then((r) => r["default"] || r.default || r));
const LazyProseFieldGroup = defineAsyncComponent(() => import('./FieldGroup-C_GjQNht.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH1 = defineAsyncComponent(() => import('./H1-BQ_xk0NV.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH2 = defineAsyncComponent(() => import('./H2-CZlkTZz-.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH3 = defineAsyncComponent(() => import('./H3-CFnRPPko.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH4 = defineAsyncComponent(() => import('./H4-jdGYSeu1.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH5 = defineAsyncComponent(() => import('./H5-BnKjLEok.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH6 = defineAsyncComponent(() => import('./H6-gzRe2jfa.mjs').then((r) => r["default"] || r.default || r));
const LazyProseHr = defineAsyncComponent(() => import('./Hr-BiWvn8K8.mjs').then((r) => r["default"] || r.default || r));
const LazyProseImg = defineAsyncComponent(() => import('./Img-DtNWr7g8.mjs').then((r) => r["default"] || r.default || r));
const LazyProseKbd = defineAsyncComponent(() => import('./Kbd-UXEy6jAQ.mjs').then((r) => r["default"] || r.default || r));
const LazyProseLi = defineAsyncComponent(() => import('./Li-D0ru6by_.mjs').then((r) => r["default"] || r.default || r));
const LazyProseOl = defineAsyncComponent(() => import('./Ol-eKEINgpm.mjs').then((r) => r["default"] || r.default || r));
const LazyProseP = defineAsyncComponent(() => import('./P-C0TGlozq.mjs').then((r) => r["default"] || r.default || r));
const LazyProsePre = defineAsyncComponent(() => import('./Pre-Ds02hFH6.mjs').then((r) => r["default"] || r.default || r));
const LazyProsePrompt = defineAsyncComponent(() => import('./Prompt-yjaGpTo_.mjs').then((r) => r["default"] || r.default || r));
const LazyProseScript = defineAsyncComponent(() => import('./Script-4T5bZV8T.mjs').then((r) => r["default"] || r.default || r));
const LazyProseSteps = defineAsyncComponent(() => import('./Steps-C41i3167.mjs').then((r) => r["default"] || r.default || r));
const LazyProseStrong = defineAsyncComponent(() => import('./Strong-BdNZdzDi.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTable = defineAsyncComponent(() => import('./Table-X1JMjSCu.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTabs = defineAsyncComponent(() => import('./Tabs-B0M4pKkW.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTabsItem = defineAsyncComponent(() => import('./TabsItem-BpjKw24s.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTbody = defineAsyncComponent(() => import('./Tbody-DLzU5ml5.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTd = defineAsyncComponent(() => import('./Td-Cyr9lUvJ.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTh = defineAsyncComponent(() => import('./Th-Dzjjq5u-.mjs').then((r) => r["default"] || r.default || r));
const LazyProseThead = defineAsyncComponent(() => import('./Thead-BOS-RduI.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTr = defineAsyncComponent(() => import('./Tr-DedbxiVV.mjs').then((r) => r["default"] || r.default || r));
const LazyProseUl = defineAsyncComponent(() => import('./Ul-DrzE2Obx.mjs').then((r) => r["default"] || r.default || r));
const LazyProseCaution = defineAsyncComponent(() => import('./Caution-DwFSpTCv.mjs').then((r) => r["default"] || r.default || r));
const LazyProseNote = defineAsyncComponent(() => import('./Note-MVsgB3Lv.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTip = defineAsyncComponent(() => import('./Tip-DU_qspvY.mjs').then((r) => r["default"] || r.default || r));
const LazyProseWarning = defineAsyncComponent(() => import('./Warning-Bwjs_Qjw.mjs').then((r) => r["default"] || r.default || r));
const lazyGlobalComponents = [
  ["ProseA", LazyProseA],
  ["ProseAccordion", LazyProseAccordion],
  ["ProseAccordionItem", LazyProseAccordionItem],
  ["ProseBadge", LazyProseBadge],
  ["ProseBlockquote", LazyProseBlockquote],
  ["ProseCallout", LazyProseCallout],
  ["ProseCard", LazyProseCard],
  ["ProseCardGroup", LazyProseCardGroup],
  ["ProseCode", LazyProseCode],
  ["ProseCodeCollapse", LazyProseCodeCollapse],
  ["ProseCodeGroup", LazyProseCodeGroup],
  ["ProseCodeIcon", LazyProseCodeIcon],
  ["ProseCodePreview", LazyProseCodePreview],
  ["ProseCollapsible", LazyProseCollapsible],
  ["ProseEm", LazyProseEm],
  ["ProseField", LazyProseField],
  ["ProseFieldGroup", LazyProseFieldGroup],
  ["ProseH1", LazyProseH1],
  ["ProseH2", LazyProseH2],
  ["ProseH3", LazyProseH3],
  ["ProseH4", LazyProseH4],
  ["ProseH5", LazyProseH5],
  ["ProseH6", LazyProseH6],
  ["ProseHr", LazyProseHr],
  ["ProseImg", LazyProseImg],
  ["ProseKbd", LazyProseKbd],
  ["ProseLi", LazyProseLi],
  ["ProseOl", LazyProseOl],
  ["ProseP", LazyProseP],
  ["ProsePre", LazyProsePre],
  ["ProsePrompt", LazyProsePrompt],
  ["ProseScript", LazyProseScript],
  ["ProseSteps", LazyProseSteps],
  ["ProseStrong", LazyProseStrong],
  ["ProseTable", LazyProseTable],
  ["ProseTabs", LazyProseTabs],
  ["ProseTabsItem", LazyProseTabsItem],
  ["ProseTbody", LazyProseTbody],
  ["ProseTd", LazyProseTd],
  ["ProseTh", LazyProseTh],
  ["ProseThead", LazyProseThead],
  ["ProseTr", LazyProseTr],
  ["ProseUl", LazyProseUl],
  ["ProseCaution", LazyProseCaution],
  ["ProseNote", LazyProseNote],
  ["ProseTip", LazyProseTip],
  ["ProseWarning", LazyProseWarning]
];
const components_plugin_4kY4pyzJIYX99vmMAAIorFf3CnAaptHitJgf7JxiED8 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (init) {
    nuxtApp._state[key] ??= { _default: init };
  }
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
function useRequestHeader(header) {
  const event = useRequestEvent();
  return event ? getRequestHeader(event, header) : void 0;
}
const platform_FYhwEXmGrxPwWwuAI6I6p0dAa6CAhgjhih3o1RwaVDg = /* @__PURE__ */ defineNuxtPlugin(() => {
  const platform = useState("platform", () => ({}));
  if (!platform.value?.name) {
    const ua = useRequestHeader("user-agent");
    const matchBitrixMobile = ua?.match(/BitrixMobile\/Version=(\d+)/);
    const matchBitrixDesktop = ua?.match(/BitrixDesktop\/([\d.]+)/);
    if (matchBitrixMobile) {
      platform.value = {
        name: "bitrix-mobile",
        version: matchBitrixMobile[1]
      };
    } else if (matchBitrixDesktop) {
      platform.value = {
        name: "bitrix-desktop",
        version: matchBitrixDesktop[1]
      };
    } else {
      platform.value = {
        name: "web",
        version: "air"
      };
    }
  }
  useHead({
    htmlAttrs: {
      "data-platform": () => platform.value.name,
      "data-version": () => platform.value.version
    }
  });
});
const inlineConfig = {
  "nuxt": {},
  "version": "2.8.0",
  "b24ui": {
    "tv": {
      "twMergeConfig": {}
    }
  }
};
const appConfig = /* @__PURE__ */ defuFn(inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  nuxtApp._appConfig ||= klona(appConfig);
  return nuxtApp._appConfig;
}
const ui_version_arvyjEl5mPSj0YIV2SHG0JnGBjCHHcKyYdt4SGfeI0s = /* @__PURE__ */ defineNuxtPlugin(() => {
  const appConfig2 = useAppConfig();
  const version = appConfig2.version || "__B24UI_VERSION__";
  useHead({
    meta: [{ name: "b24ui", content: version }]
  });
});
const colors_PGt7uMKzzza52cjV0T9xHZiomUH6OCpPC79aExTzkEU = /* @__PURE__ */ defineNuxtPlugin(() => {
  useNuxtApp();
  const root = computed(() => {
    return `@layer theme {
  :root, :host {
    ${[].join("\n  ")}
  }
  :root, :host, .light {
    ${[].join("\n  ")}
  }
  .dark {
    ${[].join("\n  ")}
  }
}`;
  });
  const headData = {
    style: [{
      innerHTML: root,
      tagPriority: "critical",
      id: "bitrix24-ui-colors"
    }]
  };
  useHead(headData);
});
const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  router_DclsWNDeVV7SyG4lslgLnjbQUK1ws8wgf2FHaAbo7Cw,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  components_plugin_4kY4pyzJIYX99vmMAAIorFf3CnAaptHitJgf7JxiED8,
  platform_FYhwEXmGrxPwWwuAI6I6p0dAa6CAhgjhih3o1RwaVDg,
  ui_version_arvyjEl5mPSj0YIV2SHG0JnGBjCHHcKyYdt4SGfeI0s,
  colors_PGt7uMKzzza52cjV0T9xHZiomUH6OCpPC79aExTzkEU
];
function createContext(providerComponentName, contextName) {
  const symbolDescription = typeof providerComponentName === "string" && !contextName ? `${providerComponentName}Context` : contextName;
  const injectionKey = Symbol(symbolDescription);
  const injectContext = (fallback) => {
    const context2 = inject(injectionKey, fallback);
    if (context2) return context2;
    if (context2 === null) return context2;
    throw new Error(`Injection \`${injectionKey.toString()}\` not found. Component must be used within ${Array.isArray(providerComponentName) ? `one of the following components: ${providerComponentName.join(", ")}` : `\`${providerComponentName}\``}`);
  };
  const provideContext = (contextValue) => {
    provide(injectionKey, contextValue);
    return contextValue;
  };
  return [injectContext, provideContext];
}
function getActiveElement() {
  let activeElement = (void 0).activeElement;
  if (activeElement == null) return null;
  while (activeElement != null && activeElement.shadowRoot != null && activeElement.shadowRoot.activeElement != null) activeElement = activeElement.shadowRoot.activeElement;
  return activeElement;
}
function handleAndDispatchCustomEvent$1(name, handler, detail) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler) target.addEventListener(name, handler, { once: true });
  target.dispatchEvent(event);
}
function isNullish(value) {
  return value === null || value === void 0;
}
function renderSlotFragments(children) {
  if (!children) return [];
  return children.flatMap((child) => {
    if (child.type === Fragment) return renderSlotFragments(child.children);
    return [child];
  });
}
const [injectConfigProviderContext, provideConfigProviderContext] = /* @__PURE__ */ createContext("ConfigProvider");
var ConfigProvider_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "ConfigProvider",
  props: {
    dir: {
      type: String,
      required: false,
      default: "ltr"
    },
    locale: {
      type: String,
      required: false,
      default: "en"
    },
    scrollBody: {
      type: [Boolean, Object],
      required: false,
      default: true
    },
    nonce: {
      type: String,
      required: false,
      default: void 0
    },
    useId: {
      type: Function,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const { dir, locale, scrollBody, nonce } = toRefs(props);
    provideConfigProviderContext({
      dir,
      locale,
      scrollBody,
      nonce,
      useId: props.useId
    });
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var ConfigProvider_default = ConfigProvider_vue_vue_type_script_setup_true_lang_default;
const useBodyLockStackCount = createSharedComposable(() => {
  const map = ref(/* @__PURE__ */ new Map());
  const initialOverflow = ref();
  const locked = computed(() => {
    for (const value of map.value.values()) if (value) return true;
    return false;
  });
  const context2 = injectConfigProviderContext({ scrollBody: ref(true) });
  let stopTouchMoveListener = null;
  const resetBodyStyle = () => {
    (void 0).body.style.paddingRight = "";
    (void 0).body.style.marginRight = "";
    (void 0).body.style.pointerEvents = "";
    (void 0).documentElement.style.removeProperty("--scrollbar-width");
    (void 0).body.style.overflow = initialOverflow.value ?? "";
    isIOS && stopTouchMoveListener?.();
    initialOverflow.value = void 0;
  };
  watch(locked, (val, oldVal) => {
    if (!isClient) return;
    if (!val) {
      if (oldVal) resetBodyStyle();
      return;
    }
    if (initialOverflow.value === void 0) initialOverflow.value = (void 0).body.style.overflow;
    const verticalScrollbarWidth = (void 0).innerWidth - (void 0).documentElement.clientWidth;
    const defaultConfig = {
      padding: verticalScrollbarWidth,
      margin: 0
    };
    const config = context2.scrollBody?.value ? typeof context2.scrollBody.value === "object" ? defu({
      padding: context2.scrollBody.value.padding === true ? verticalScrollbarWidth : context2.scrollBody.value.padding,
      margin: context2.scrollBody.value.margin === true ? verticalScrollbarWidth : context2.scrollBody.value.margin
    }, defaultConfig) : defaultConfig : {
      padding: 0,
      margin: 0
    };
    if (verticalScrollbarWidth > 0) {
      (void 0).body.style.paddingRight = typeof config.padding === "number" ? `${config.padding}px` : String(config.padding);
      (void 0).body.style.marginRight = typeof config.margin === "number" ? `${config.margin}px` : String(config.margin);
      (void 0).documentElement.style.setProperty("--scrollbar-width", `${verticalScrollbarWidth}px`);
      (void 0).body.style.overflow = "hidden";
    }
    if (isIOS) stopTouchMoveListener = useEventListener(void 0, "touchmove", (e) => preventDefault(e), { passive: false });
    nextTick(() => {
      if (!locked.value) return;
      (void 0).body.style.pointerEvents = "none";
      (void 0).body.style.overflow = "hidden";
    });
  }, {
    immediate: true,
    flush: "sync"
  });
  return map;
});
function useBodyScrollLock(initialState) {
  const id = Math.random().toString(36).substring(2, 7);
  const map = useBodyLockStackCount();
  map.value.set(id, initialState);
  const locked = computed({
    get: () => map.value.get(id) ?? false,
    set: (value) => map.value.set(id, value)
  });
  tryOnBeforeUnmount(() => {
    map.value.delete(id);
  });
  return locked;
}
function checkOverflowScroll(ele) {
  const style = (void 0).getComputedStyle(ele);
  if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) return true;
  else {
    const parent = ele.parentNode;
    if (!(parent instanceof Element) || parent.tagName === "BODY") return false;
    return checkOverflowScroll(parent);
  }
}
function preventDefault(rawEvent) {
  const e = rawEvent || (void 0).event;
  const _target = e.target;
  if (_target instanceof Element && checkOverflowScroll(_target)) return false;
  if (e.touches.length > 1) return true;
  if (e.preventDefault && e.cancelable) e.preventDefault();
  return false;
}
function toDate(dateValue, tz = getLocalTimeZone()) {
  if (isZonedDateTime(dateValue)) return dateValue.toDate();
  else return dateValue.toDate(tz);
}
function isCalendarDateTime(dateValue) {
  return dateValue instanceof CalendarDateTime;
}
function isZonedDateTime(dateValue) {
  return dateValue instanceof ZonedDateTime;
}
function hasTime(dateValue) {
  return isCalendarDateTime(dateValue) || isZonedDateTime(dateValue);
}
function getDaysInMonth(date) {
  if (date instanceof Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  } else return date.set({ day: 100 }).day;
}
function isBefore(dateToCompare, referenceDate) {
  return dateToCompare.compare(referenceDate) < 0;
}
function isAfter(dateToCompare, referenceDate) {
  return dateToCompare.compare(referenceDate) > 0;
}
function isBeforeOrSame(dateToCompare, referenceDate) {
  return dateToCompare.compare(referenceDate) <= 0;
}
function isAfterOrSame(dateToCompare, referenceDate) {
  return dateToCompare.compare(referenceDate) >= 0;
}
function isBetweenInclusive(date, start, end) {
  return isAfterOrSame(date, start) && isBeforeOrSame(date, end);
}
function isBetween(date, start, end) {
  return isAfter(date, start) && isBefore(date, end);
}
function getLastFirstDayOfWeek(date, firstDayOfWeek, locale) {
  const day = getDayOfWeek(date, locale, "sun");
  if (firstDayOfWeek > day) return date.subtract({ days: day + 7 - firstDayOfWeek });
  if (firstDayOfWeek === day) return date;
  return date.subtract({ days: day - firstDayOfWeek });
}
function getNextLastDayOfWeek(date, firstDayOfWeek, locale) {
  const day = getDayOfWeek(date, locale, "sun");
  const lastDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
  if (day === lastDayOfWeek) return date;
  if (day > lastDayOfWeek) return date.add({ days: 7 - day + lastDayOfWeek });
  return date.add({ days: lastDayOfWeek - day });
}
function areAllDaysBetweenValid(start, end, isUnavailable, isDisabled, isHighlightable) {
  if (isUnavailable === void 0 && isDisabled === void 0 && isHighlightable === void 0) return true;
  let dCurrent = start.add({ days: 1 });
  if ((isDisabled?.(dCurrent) || isUnavailable?.(dCurrent)) && !isHighlightable?.(dCurrent)) return false;
  const dEnd = end;
  while (dCurrent.compare(dEnd) < 0) {
    dCurrent = dCurrent.add({ days: 1 });
    if ((isDisabled?.(dCurrent) || isUnavailable?.(dCurrent)) && !isHighlightable?.(dCurrent)) return false;
  }
  return true;
}
function getDefaultDate(props) {
  const { defaultValue, defaultPlaceholder, granularity = "day", locale = "en" } = props;
  if (Array.isArray(defaultValue) && defaultValue.length) return defaultValue.at(-1).copy();
  if (defaultValue && !Array.isArray(defaultValue)) return defaultValue.copy();
  if (defaultPlaceholder) return defaultPlaceholder.copy();
  const date = /* @__PURE__ */ new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const calendarDateTimeGranularities = [
    "hour",
    "minute",
    "second"
  ];
  const defaultFormatter = new DateFormatter(locale);
  const calendar = createCalendar(defaultFormatter.resolvedOptions().calendar);
  if (calendarDateTimeGranularities.includes(granularity ?? "day")) return toCalendar(new CalendarDateTime(year, month, day, 0, 0, 0), calendar);
  return toCalendar(new CalendarDate(year, month, day), calendar);
}
function chunk(arr, size2) {
  const result = [];
  for (let i = 0; i < arr.length; i += size2) result.push(arr.slice(i, i + size2));
  return result;
}
function getDaysBetween(start, end) {
  const days = [];
  let dCurrent = start.add({ days: 1 });
  const dEnd = end;
  while (dCurrent.compare(dEnd) < 0) {
    days.push(dCurrent);
    dCurrent = dCurrent.add({ days: 1 });
  }
  return days;
}
function createMonth(props) {
  const { dateObj, weekStartsOn, fixedWeeks, locale } = props;
  const daysInMonth = getDaysInMonth(dateObj);
  const datesArray = Array.from({ length: daysInMonth }, (_, i) => dateObj.set({ day: i + 1 }));
  const firstDayOfMonth = startOfMonth(dateObj);
  const lastDayOfMonth = endOfMonth(dateObj);
  const lastSunday = getLastFirstDayOfWeek(firstDayOfMonth, weekStartsOn, locale);
  const nextSaturday = getNextLastDayOfWeek(lastDayOfMonth, weekStartsOn, locale);
  const lastMonthDays = getDaysBetween(lastSunday.subtract({ days: 1 }), firstDayOfMonth);
  const nextMonthDays = getDaysBetween(lastDayOfMonth, nextSaturday.add({ days: 1 }));
  const totalDays = lastMonthDays.length + datesArray.length + nextMonthDays.length;
  if (fixedWeeks && totalDays < 42) {
    const extraDays = 42 - totalDays;
    let startFrom = nextMonthDays.at(-1);
    if (!startFrom) startFrom = endOfMonth(dateObj);
    const extraDaysArray = Array.from({ length: extraDays }, (_, i) => {
      const incr = i + 1;
      return startFrom.add({ days: incr });
    });
    nextMonthDays.push(...extraDaysArray);
  }
  const allDays = lastMonthDays.concat(datesArray, nextMonthDays);
  const weeks = chunk(allDays, 7);
  return {
    value: dateObj,
    cells: allDays,
    rows: weeks
  };
}
function createMonths(props) {
  const { numberOfMonths, dateObj, ...monthProps } = props;
  const months = [];
  if (!numberOfMonths || numberOfMonths === 1) {
    months.push(createMonth({
      ...monthProps,
      dateObj
    }));
    return months;
  }
  months.push(createMonth({
    ...monthProps,
    dateObj
  }));
  for (let i = 1; i < numberOfMonths; i++) {
    const nextMonth = dateObj.add({ months: i });
    months.push(createMonth({
      ...monthProps,
      dateObj: nextMonth
    }));
  }
  return months;
}
function getWeekStartsOn(locale) {
  const monday = new CalendarDate(2025, 1, 6);
  const dayOfWeek = getDayOfWeek(monday, locale);
  return (1 - dayOfWeek + 7) % 7;
}
function getWeekNumber(date, locale = "en-US", firstDayOfWeek) {
  const jan1 = new CalendarDate(date.year, 1, 1);
  const usesISOWeek = jan1.toDate("UTC").getUTCDay() !== getDayOfWeek(jan1, locale);
  const weekStartsOn = firstDayOfWeek ?? (usesISOWeek ? "mon" : "sun");
  const firstWeekContainsDate = usesISOWeek ? 4 : 1;
  const dayOfWeek = getDayOfWeek(date, locale, weekStartsOn);
  const decidingDay = date.add({ days: 7 - firstWeekContainsDate - dayOfWeek });
  const weekYear = decidingDay.year;
  const week1Ref = new CalendarDate(weekYear, 1, firstWeekContainsDate);
  const week1Start = startOfWeek(week1Ref, locale, weekStartsOn);
  const currentWeekStart = startOfWeek(date, locale, weekStartsOn);
  const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1e3;
  const daysDiff = Math.round((currentWeekStart.toDate("UTC").getTime() - week1Start.toDate("UTC").getTime()) / MS_PER_WEEK);
  return daysDiff + 1;
}
function useDateFormatter(initialLocale, opts = {}) {
  const locale = ref(initialLocale);
  function getLocale() {
    return locale.value;
  }
  function setLocale(newLocale) {
    locale.value = newLocale;
  }
  function custom(date, options) {
    return new DateFormatter(locale.value, {
      ...opts,
      ...options
    }).format(date);
  }
  function selectedDate(date, includeTime = true) {
    if (hasTime(date) && includeTime) return custom(toDate(date), {
      dateStyle: "long",
      timeStyle: "long"
    });
    else return custom(toDate(date), { dateStyle: "long" });
  }
  function fullMonthAndYear(date, options = {}) {
    return new DateFormatter(locale.value, {
      ...opts,
      month: "long",
      year: "numeric",
      ...options
    }).format(date);
  }
  function fullMonth(date, options = {}) {
    return new DateFormatter(locale.value, {
      ...opts,
      month: "long",
      ...options
    }).format(date);
  }
  function getMonths() {
    const defaultDate = today(getLocalTimeZone());
    const months = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ];
    return months.map((item) => ({
      label: fullMonth(toDate(defaultDate.set({ month: item }))),
      value: item
    }));
  }
  function fullYear(date, options = {}) {
    return new DateFormatter(locale.value, {
      ...opts,
      year: "numeric",
      ...options
    }).format(date);
  }
  function toParts(date, options) {
    if (isZonedDateTime(date)) return new DateFormatter(locale.value, {
      ...opts,
      ...options,
      timeZone: date.timeZone
    }).formatToParts(toDate(date));
    else return new DateFormatter(locale.value, {
      ...opts,
      ...options
    }).formatToParts(toDate(date));
  }
  function dayOfWeek(date, length = "narrow") {
    return new DateFormatter(locale.value, {
      ...opts,
      weekday: length
    }).format(date);
  }
  function dayPeriod(date) {
    const parts = new DateFormatter(locale.value, {
      ...opts,
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(date);
    const value = parts.find((p) => p.type === "dayPeriod")?.value;
    if (value === "PM" || value === "pm" || value === "p.m.") return "PM";
    return "AM";
  }
  const defaultPartOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function part(dateObj, type, options = {}) {
    const opts$1 = {
      ...defaultPartOptions,
      ...options
    };
    const parts = toParts(dateObj, opts$1);
    const part$1 = parts.find((p) => p.type === type);
    return part$1 ? part$1.value : "";
  }
  return {
    setLocale,
    getLocale,
    fullMonth,
    fullYear,
    fullMonthAndYear,
    toParts,
    custom,
    part,
    dayPeriod,
    selectedDate,
    dayOfWeek,
    getMonths
  };
}
function useDirection(dir) {
  const context2 = injectConfigProviderContext({ dir: ref("ltr") });
  return computed(() => dir?.value || context2.dir?.value || "ltr");
}
function useEmitAsProps(emit) {
  const vm = getCurrentInstance();
  const events = vm?.type.emits;
  const result = {};
  if (!events?.length) console.warn(`No emitted event found. Please check component: ${vm?.type.__name}`);
  events?.forEach((ev) => {
    result[toHandlerKey(camelize(ev))] = (...arg) => emit(ev, ...arg);
  });
  return result;
}
let count$1 = 0;
function useFocusGuards() {
  watchEffect((cleanupFn) => {
    if (!isClient) return;
    const edgeGuards = (void 0).querySelectorAll("[data-reka-focus-guard]");
    (void 0).body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
    (void 0).body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
    count$1++;
    cleanupFn(() => {
      if (count$1 === 1) (void 0).querySelectorAll("[data-reka-focus-guard]").forEach((node) => node.remove());
      count$1--;
    });
  });
}
function createFocusGuard() {
  const element = (void 0).createElement("span");
  element.setAttribute("data-reka-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}
function useForwardExpose() {
  const instance = getCurrentInstance();
  const currentRef = ref();
  const currentElement = computed(() => resolveCurrentElement());
  function resolveCurrentElement() {
    return currentRef.value && "$el" in currentRef.value && ["#text", "#comment"].includes(currentRef.value.$el.nodeName) ? currentRef.value.$el.nextElementSibling : unrefElement(currentRef);
  }
  const localExpose = Object.assign({}, instance.exposed);
  const ret = {};
  for (const key in instance.props) Object.defineProperty(ret, key, {
    enumerable: true,
    configurable: true,
    get: () => instance.props[key]
  });
  if (Object.keys(localExpose).length > 0) for (const key in localExpose) Object.defineProperty(ret, key, {
    enumerable: true,
    configurable: true,
    get: () => localExpose[key]
  });
  Object.defineProperty(ret, "$el", {
    enumerable: true,
    configurable: true,
    get: () => instance.vnode.el
  });
  instance.exposed = ret;
  function forwardRef(ref$1) {
    currentRef.value = ref$1;
    if (!ref$1) return;
    Object.defineProperty(ret, "$el", {
      enumerable: true,
      configurable: true,
      get: () => ref$1 instanceof Element ? ref$1 : ref$1.$el
    });
    if (!(ref$1 instanceof Element) && !Object.hasOwn(ref$1, "$el")) {
      const childExposed = ref$1.$.exposed;
      const merged = Object.assign({}, ret);
      for (const key in childExposed) Object.defineProperty(merged, key, {
        enumerable: true,
        configurable: true,
        get: () => childExposed[key]
      });
      instance.exposed = merged;
    }
  }
  return {
    forwardRef,
    currentRef,
    currentElement
  };
}
function useForwardProps$1(props) {
  const vm = getCurrentInstance();
  const defaultProps = Object.keys(vm?.type.props ?? {}).reduce((prev, curr) => {
    const defaultValue = (vm?.type.props[curr]).default;
    if (defaultValue !== void 0) prev[curr] = defaultValue;
    return prev;
  }, {});
  const refProps = toRef(props);
  return computed(() => {
    const preservedProps = {};
    const assignedProps = vm?.vnode.props ?? {};
    Object.keys(assignedProps).forEach((key) => {
      preservedProps[camelize(key)] = assignedProps[key];
    });
    return Object.keys({
      ...defaultProps,
      ...preservedProps
    }).reduce((prev, curr) => {
      if (refProps.value[curr] !== void 0) prev[curr] = refProps.value[curr];
      return prev;
    }, {});
  });
}
function useForwardPropsEmits(props, emit) {
  const parsedProps = useForwardProps$1(props);
  const emitsAsProps = emit ? useEmitAsProps(emit) : {};
  return computed(() => ({
    ...parsedProps.value,
    ...emitsAsProps
  }));
}
function useGraceArea(triggerElement, containerElement) {
  const isPointerInTransit = refAutoReset(false, 300);
  tryOnScopeDispose(() => {
    isPointerInTransit.value = false;
  });
  const pointerGraceArea = ref(null);
  const pointerExit = createEventHook();
  function handleRemoveGraceArea() {
    pointerGraceArea.value = null;
    isPointerInTransit.value = false;
  }
  function handleCreateGraceArea(event, hoverTarget) {
    if (!hoverTarget) return;
    const currentTarget = event.currentTarget;
    const exitPoint = {
      x: event.clientX,
      y: event.clientY
    };
    const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
    const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide, 1);
    const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
    const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
    pointerGraceArea.value = graceArea;
    isPointerInTransit.value = true;
  }
  watchEffect((cleanupFn) => {
    if (triggerElement.value && containerElement.value) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, containerElement.value);
      const handleContentLeave = (event) => handleCreateGraceArea(event, triggerElement.value);
      triggerElement.value.addEventListener("pointerleave", handleTriggerLeave);
      containerElement.value.addEventListener("pointerleave", handleContentLeave);
      cleanupFn(() => {
        triggerElement.value?.removeEventListener("pointerleave", handleTriggerLeave);
        containerElement.value?.removeEventListener("pointerleave", handleContentLeave);
      });
    }
  });
  watchEffect((cleanupFn) => {
    if (pointerGraceArea.value) {
      const handleTrackPointerGrace = (event) => {
        if (!pointerGraceArea.value || !(event.target instanceof Element)) return;
        const target = event.target;
        const pointerPosition = {
          x: event.clientX,
          y: event.clientY
        };
        const hasEnteredTarget = triggerElement.value?.contains(target) || containerElement.value?.contains(target);
        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea.value);
        const isAnotherGraceAreaTrigger = !!target.closest("[data-grace-area-trigger]");
        if (hasEnteredTarget) handleRemoveGraceArea();
        else if (isPointerOutsideGraceArea || isAnotherGraceAreaTrigger) {
          handleRemoveGraceArea();
          pointerExit.trigger();
        }
      };
      triggerElement.value?.ownerDocument.addEventListener("pointermove", handleTrackPointerGrace);
      cleanupFn(() => triggerElement.value?.ownerDocument.removeEventListener("pointermove", handleTrackPointerGrace));
    }
  });
  return {
    isPointerInTransit,
    onPointerExit: pointerExit.on
  };
}
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y + padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y + padding
      });
      break;
    case "bottom":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y - padding
      });
      break;
    case "left":
      paddedExitPoints.push({
        x: exitPoint.x + padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y + padding
      });
      break;
    case "right":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x - padding,
        y: exitPoint.y + padding
      });
      break;
  }
  return paddedExitPoints;
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    {
      x: left,
      y: top
    },
    {
      x: right,
      y: top
    },
    {
      x: right,
      y: bottom
    },
    {
      x: left,
      y: bottom
    }
  ];
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a, b) => {
    if (a.x < b.x) return -1;
    else if (a.x > b.x) return 1;
    else if (a.y < b.y) return -1;
    else if (a.y > b.y) return 1;
    else return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull.at(-1);
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull.at(-1);
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) return upperHull;
  else return upperHull.concat(lowerHull);
}
function useHideOthers(target) {
  let undo;
  watch(() => unrefElement(target), (el) => {
    let isInsideClosedPopover = false;
    try {
      isInsideClosedPopover = !!el?.closest("[popover]:not(:popover-open)");
    } catch {
    }
    if (el && !isInsideClosedPopover) undo = hideOthers(el);
    else if (undo) undo();
  });
}
let count = 0;
function useId(deterministicId, prefix = "reka") {
  let id;
  if ("useId" in vue) id = vue.useId?.();
  else {
    const configProviderContext = injectConfigProviderContext({ useId: void 0 });
    id = configProviderContext.useId?.() ?? `${++count}`;
  }
  return prefix ? `${prefix}-${id}` : id;
}
function useKbd() {
  return {
    ALT: "Alt",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    ARROW_UP: "ArrowUp",
    BACKSPACE: "Backspace",
    CAPS_LOCK: "CapsLock",
    CONTROL: "Control",
    DELETE: "Delete",
    END: "End",
    ENTER: "Enter",
    ESCAPE: "Escape",
    F1: "F1",
    F10: "F10",
    F11: "F11",
    F12: "F12",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    HOME: "Home",
    META: "Meta",
    PAGE_DOWN: "PageDown",
    PAGE_UP: "PageUp",
    SHIFT: "Shift",
    SPACE: " ",
    TAB: "Tab",
    CTRL: "Control",
    ASTERISK: "*",
    SPACE_CODE: "Space"
  };
}
function useLocale$1(locale) {
  const context2 = injectConfigProviderContext({ locale: ref("en") });
  return computed(() => locale?.value || context2.locale?.value || "en");
}
function useSize(element) {
  const size2 = ref();
  const width = computed(() => size2.value?.width ?? 0);
  const height = computed(() => size2.value?.height ?? 0);
  return {
    width,
    height
  };
}
function useStateMachine(initialState, machine) {
  const state = ref(initialState);
  function reducer(event) {
    const nextState = machine[state.value][event];
    return nextState ?? state.value;
  }
  const dispatch = (event) => {
    state.value = reducer(event);
  };
  return {
    state,
    dispatch
  };
}
function usePresence(present, node) {
  const stylesRef = ref({});
  const prevAnimationNameRef = ref("none");
  const prevPresentRef = ref(present);
  const initialState = present.value ? "mounted" : "unmounted";
  let timeoutId;
  const ownerWindow = node.value?.ownerDocument.defaultView ?? defaultWindow;
  const { state, dispatch } = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  });
  const dispatchCustomEvent = (name) => {
    if (isClient) {
      const customEvent = new CustomEvent(name, {
        bubbles: false,
        cancelable: false
      });
      node.value?.dispatchEvent(customEvent);
    }
  };
  watch(present, async (currentPresent, prevPresent) => {
    const hasPresentChanged = prevPresent !== currentPresent;
    await nextTick();
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.value;
      const currentAnimationName = getAnimationName(node.value);
      if (currentPresent) {
        dispatch("MOUNT");
        dispatchCustomEvent("enter");
        if (currentAnimationName === "none") dispatchCustomEvent("after-enter");
      } else if (currentAnimationName === "none" || currentAnimationName === "undefined" || stylesRef.value?.display === "none") {
        dispatch("UNMOUNT");
        dispatchCustomEvent("leave");
        dispatchCustomEvent("after-leave");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (prevPresent && isAnimating) {
          dispatch("ANIMATION_OUT");
          dispatchCustomEvent("leave");
        } else {
          dispatch("UNMOUNT");
          dispatchCustomEvent("after-leave");
        }
      }
    }
  }, { immediate: true });
  const handleAnimationEnd = (event) => {
    const currentAnimationName = getAnimationName(node.value);
    const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
    const directionName = state.value === "mounted" ? "enter" : "leave";
    if (event.target === node.value && isCurrentAnimation) {
      dispatchCustomEvent(`after-${directionName}`);
      dispatch("ANIMATION_END");
      if (!prevPresentRef.value) {
        const currentFillMode = node.value.style.animationFillMode;
        node.value.style.animationFillMode = "forwards";
        timeoutId = ownerWindow?.setTimeout(() => {
          if (node.value?.style.animationFillMode === "forwards") node.value.style.animationFillMode = currentFillMode;
        });
      }
    }
    if (event.target === node.value && currentAnimationName === "none") dispatch("ANIMATION_END");
  };
  const handleAnimationStart = (event) => {
    if (event.target === node.value) prevAnimationNameRef.value = getAnimationName(node.value);
  };
  watch(node, (newNode, oldNode) => {
    if (newNode) {
      stylesRef.value = getComputedStyle(newNode);
      newNode.addEventListener("animationstart", handleAnimationStart);
      newNode.addEventListener("animationcancel", handleAnimationEnd);
      newNode.addEventListener("animationend", handleAnimationEnd);
    } else {
      dispatch("ANIMATION_END");
      if (timeoutId !== void 0) ownerWindow?.clearTimeout(timeoutId);
      oldNode?.removeEventListener("animationstart", handleAnimationStart);
      oldNode?.removeEventListener("animationcancel", handleAnimationEnd);
      oldNode?.removeEventListener("animationend", handleAnimationEnd);
    }
  }, { immediate: true });
  watch(state, () => {
    const currentAnimationName = getAnimationName(node.value);
    prevAnimationNameRef.value = state.value === "mounted" ? currentAnimationName : "none";
  });
  const isPresent = computed(() => ["mounted", "unmountSuspended"].includes(state.value));
  return { isPresent };
}
function getAnimationName(node) {
  return node ? getComputedStyle(node).animationName || "none" : "none";
}
var Presence_default = /* @__PURE__ */ defineComponent({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: true
    },
    forceMount: { type: Boolean }
  },
  slots: {},
  setup(props, { slots, expose }) {
    const { present, forceMount } = toRefs(props);
    const node = ref();
    const { isPresent } = usePresence(present, node);
    expose({ present: isPresent });
    let children = slots.default({ present: isPresent.value });
    children = renderSlotFragments(children || []);
    const instance = getCurrentInstance();
    if (children && children?.length > 1) {
      const componentName = instance?.parent?.type.name ? `<${instance.parent.type.name} />` : "component";
      throw new Error([
        `Detected an invalid children for \`${componentName}\` for  \`Presence\` component.`,
        "",
        "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
        "You can apply a few solutions:",
        ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((line) => `  - ${line}`).join("\n")
      ].join("\n"));
    }
    return () => {
      if (forceMount.value || present.value || isPresent.value) return h(slots.default({ present: isPresent.value })[0], { ref: (v) => {
        const el = unrefElement(v);
        if (typeof el?.hasAttribute === "undefined") return el;
        if (el?.hasAttribute("data-reka-popper-content-wrapper")) node.value = el.firstElementChild;
        else node.value = el;
        return el;
      } });
      else return null;
    };
  }
});
const Slot = /* @__PURE__ */ defineComponent({
  name: "PrimitiveSlot",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => {
      if (!slots.default) return null;
      const children = renderSlotFragments(slots.default());
      const firstNonCommentChildrenIndex = children.findIndex((child) => child.type !== Comment);
      if (firstNonCommentChildrenIndex === -1) return children;
      const firstNonCommentChildren = children[firstNonCommentChildrenIndex];
      delete firstNonCommentChildren.props?.ref;
      const mergedProps = firstNonCommentChildren.props ? mergeProps(attrs, firstNonCommentChildren.props) : attrs;
      const cloned = cloneVNode({
        ...firstNonCommentChildren,
        props: {}
      }, mergedProps);
      if (children.length === 1) return cloned;
      children[firstNonCommentChildrenIndex] = cloned;
      return children;
    };
  }
});
const SELF_CLOSING_TAGS = [
  "area",
  "img",
  "input"
];
const Primitive = /* @__PURE__ */ defineComponent({
  name: "Primitive",
  inheritAttrs: false,
  props: {
    asChild: {
      type: Boolean,
      default: false
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(props, { attrs, slots }) {
    const asTag = props.asChild ? "template" : props.as;
    if (typeof asTag === "string" && SELF_CLOSING_TAGS.includes(asTag)) return () => h(asTag, attrs);
    if (asTag !== "template") return () => h(props.as, attrs, { default: slots.default });
    return () => h(Slot, attrs, { default: slots.default });
  }
});
function usePrimitiveElement() {
  const primitiveElement = ref();
  const currentElement = computed(() => ["#text", "#comment"].includes(primitiveElement.value?.$el.nodeName) ? primitiveElement.value?.$el.nextElementSibling : unrefElement(primitiveElement));
  return {
    primitiveElement,
    currentElement
  };
}
const POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
const FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
function isLayerExist(layerElement, targetElement) {
  if (!(targetElement instanceof Element)) return false;
  const targetLayer = targetElement.closest("[data-dismissable-layer]");
  const mainLayer = layerElement.dataset.dismissableLayer === "" ? layerElement : layerElement.querySelector("[data-dismissable-layer]");
  const nodeList = Array.from(layerElement.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  if (targetLayer && (mainLayer === targetLayer || nodeList.indexOf(mainLayer) < nodeList.indexOf(targetLayer))) return true;
  else return false;
}
function usePointerDownOutside(onPointerDownOutside, element, enabled = true) {
  const ownerDocument = element?.value?.ownerDocument ?? globalThis?.document;
  const isPointerInsideDOMTree = ref(false);
  const handleClickRef = ref(() => {
  });
  watchEffect((cleanupFn) => {
    if (!isClient || !toValue(enabled)) return;
    const handlePointerDown = async (event) => {
      const target = event.target;
      if (!element?.value || !target) return;
      if (isLayerExist(element.value, target)) {
        isPointerInsideDOMTree.value = false;
        return;
      }
      if (event.target && !isPointerInsideDOMTree.value) {
        let handleAndDispatchPointerDownOutsideEvent = function() {
          handleAndDispatchCustomEvent$1(POINTER_DOWN_OUTSIDE, onPointerDownOutside, eventDetail);
        };
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.value);
          handleClickRef.value = handleAndDispatchPointerDownOutsideEvent;
          ownerDocument.addEventListener("click", handleClickRef.value, { once: true });
        } else handleAndDispatchPointerDownOutsideEvent();
      } else ownerDocument.removeEventListener("click", handleClickRef.value);
      isPointerInsideDOMTree.value = false;
    };
    const timerId = (void 0).setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    cleanupFn(() => {
      (void 0).clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.value);
    });
  });
  return { onPointerDownCapture: () => {
    if (!toValue(enabled)) return;
    isPointerInsideDOMTree.value = true;
  } };
}
function useFocusOutside(onFocusOutside, element, enabled = true) {
  const ownerDocument = element?.value?.ownerDocument ?? globalThis?.document;
  const isFocusInsideDOMTree = ref(false);
  watchEffect((cleanupFn) => {
    if (!isClient || !toValue(enabled)) return;
    const handleFocus = async (event) => {
      if (!element?.value) return;
      await nextTick();
      await nextTick();
      const target = event.target;
      if (!element.value || !target || isLayerExist(element.value, target)) return;
      if (event.target && !isFocusInsideDOMTree.value) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent$1(FOCUS_OUTSIDE, onFocusOutside, eventDetail);
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    cleanupFn(() => ownerDocument.removeEventListener("focusin", handleFocus));
  });
  return {
    onFocusCapture: () => {
      if (!toValue(enabled)) return;
      isFocusInsideDOMTree.value = true;
    },
    onBlurCapture: () => {
      if (!toValue(enabled)) return;
      isFocusInsideDOMTree.value = false;
    }
  };
}
const context = /* @__PURE__ */ reactive({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  originalBodyPointerEvents: void 0,
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: {
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
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "dismiss"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { forwardRef, currentElement: layerElement } = useForwardExpose();
    const ownerDocument = computed(() => layerElement.value?.ownerDocument ?? globalThis.document);
    const layers = computed(() => context.layersRoot);
    const index = computed(() => {
      return layerElement.value ? Array.from(layers.value).indexOf(layerElement.value) : -1;
    });
    const isBodyPointerEventsDisabled = computed(() => {
      return context.layersWithOutsidePointerEventsDisabled.size > 0;
    });
    const isPointerEventsEnabled = computed(() => {
      const localLayers = Array.from(layers.value);
      const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
      const highestLayerWithOutsidePointerEventsDisabledIndex = localLayers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
      return index.value >= highestLayerWithOutsidePointerEventsDisabledIndex;
    });
    const pointerDownOutside2 = usePointerDownOutside(async (event) => {
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch?.contains(event.target));
      if (!isPointerEventsEnabled.value || isPointerDownOnBranch) return;
      emits("pointerDownOutside", event);
      emits("interactOutside", event);
      await nextTick();
      if (!event.defaultPrevented) emits("dismiss");
    }, layerElement);
    const focusOutside = useFocusOutside((event) => {
      const isFocusInBranch = [...context.branches].some((branch) => branch?.contains(event.target));
      if (isFocusInBranch) return;
      emits("focusOutside", event);
      emits("interactOutside", event);
      if (!event.defaultPrevented) emits("dismiss");
    }, layerElement);
    onKeyStroke("Escape", (event) => {
      const isHighestLayer = index.value === layers.value.size - 1;
      if (!isHighestLayer) return;
      emits("escapeKeyDown", event);
      if (!event.defaultPrevented) emits("dismiss");
    });
    watchEffect((cleanupFn) => {
      if (!layerElement.value) return;
      if (props.disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          context.originalBodyPointerEvents = ownerDocument.value.body.style.pointerEvents;
          ownerDocument.value.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(layerElement.value);
      }
      layers.value.add(layerElement.value);
      cleanupFn(() => {
        if (props.disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1 && !isNullish(context.originalBodyPointerEvents)) ownerDocument.value.body.style.pointerEvents = context.originalBodyPointerEvents;
      });
    });
    watchEffect((cleanupFn) => {
      cleanupFn(() => {
        if (!layerElement.value) return;
        layers.value.delete(layerElement.value);
        context.layersWithOutsidePointerEventsDisabled.delete(layerElement.value);
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref: unref(forwardRef),
        "as-child": _ctx.asChild,
        as: _ctx.as,
        "data-dismissable-layer": "",
        style: normalizeStyle({ pointerEvents: isBodyPointerEventsDisabled.value ? isPointerEventsEnabled.value ? "auto" : "none" : void 0 }),
        onFocusCapture: unref(focusOutside).onFocusCapture,
        onBlurCapture: unref(focusOutside).onBlurCapture,
        onPointerdownCapture: unref(pointerDownOutside2).onPointerDownCapture
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "as-child",
        "as",
        "style",
        "onFocusCapture",
        "onBlurCapture",
        "onPointerdownCapture"
      ]);
    };
  }
});
var DismissableLayer_default = DismissableLayer_vue_vue_type_script_setup_true_lang_default;
var DismissableLayerBranch_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DismissableLayerBranch",
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
  setup(__props) {
    const props = __props;
    const { forwardRef } = useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps({ ref: unref(forwardRef) }, props), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DismissableLayerBranch_default = DismissableLayerBranch_vue_vue_type_script_setup_true_lang_default;
const useFocusStackState = createGlobalState(() => {
  const stack = ref([]);
  return stack;
});
function createFocusScopesStack() {
  const stack = useFocusStackState();
  return {
    add(focusScope) {
      const activeFocusScope = stack.value[0];
      if (focusScope !== activeFocusScope) activeFocusScope?.pause();
      stack.value = arrayRemove(stack.value, focusScope);
      stack.value.unshift(focusScope);
    },
    remove(focusScope) {
      stack.value = arrayRemove(stack.value, focusScope);
      stack.value[0]?.resume();
    }
  };
}
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index = updatedArray.indexOf(item);
  if (index !== -1) updatedArray.splice(index, 1);
  return updatedArray;
}
const AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
const AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
const EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
function focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = getActiveElement();
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (getActiveElement() !== previouslyFocusedElement) return true;
  }
}
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = (void 0).createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => {
    const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
    if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
    return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function findVisible(elements, container) {
  for (const element of elements) if (!isHidden(element, { upTo: container })) return element;
}
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden") return true;
  while (node) {
    if (upTo !== void 0 && node === upTo) return false;
    if (getComputedStyle(node).display === "none") return true;
    node = node.parentElement;
  }
  return false;
}
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = getActiveElement();
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
  }
}
var FocusScope_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "FocusScope",
  props: {
    loop: {
      type: Boolean,
      required: false,
      default: false
    },
    trapped: {
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
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { currentRef, currentElement } = useForwardExpose();
    const lastFocusedElementRef = ref(null);
    const focusScopesStack = createFocusScopesStack();
    const focusScope = /* @__PURE__ */ reactive({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    });
    watchEffect((cleanupFn) => {
      if (!isClient) return;
      const container = currentElement.value;
      if (!props.trapped) return;
      function handleFocusIn(event) {
        if (focusScope.paused || !container) return;
        const target = event.target;
        if (container.contains(target)) lastFocusedElementRef.value = target;
        else focus(lastFocusedElementRef.value, { select: true });
      }
      function handleFocusOut(event) {
        if (focusScope.paused || !container) return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null) return;
        if (!container.contains(relatedTarget)) focus(lastFocusedElementRef.value, { select: true });
      }
      function handleMutations(mutations) {
        const lastFocusedElement = lastFocusedElementRef.value;
        if (lastFocusedElement === null) return;
        const anyNodesRemoved = mutations.some((m) => m.removedNodes.length > 0);
        if (!anyNodesRemoved) return;
        const isLastFocusedElementExist = container.contains(lastFocusedElement);
        if (!isLastFocusedElementExist) focus(container);
      }
      (void 0).addEventListener("focusin", handleFocusIn);
      (void 0).addEventListener("focusout", handleFocusOut);
      const mutationObserver = new MutationObserver(handleMutations);
      if (container) mutationObserver.observe(container, {
        childList: true,
        subtree: true
      });
      cleanupFn(() => {
        (void 0).removeEventListener("focusin", handleFocusIn);
        (void 0).removeEventListener("focusout", handleFocusOut);
        mutationObserver.disconnect();
      });
    });
    watchEffect(async (cleanupFn) => {
      const container = currentElement.value;
      await nextTick();
      if (!container) return;
      focusScopesStack.add(focusScope);
      const previouslyFocusedElement = getActiveElement();
      const hasFocusedCandidate = container.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
        container.addEventListener(AUTOFOCUS_ON_MOUNT, (ev) => emits("mountAutoFocus", ev));
        container.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          focusFirst(getTabbableCandidates(container), { select: true });
          if (getActiveElement() === previouslyFocusedElement) focus(container);
        }
      }
      cleanupFn(() => {
        container.removeEventListener(AUTOFOCUS_ON_MOUNT, (ev) => emits("mountAutoFocus", ev));
        const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
        const unmountEventHandler = (ev) => {
          emits("unmountAutoFocus", ev);
        };
        container.addEventListener(AUTOFOCUS_ON_UNMOUNT, unmountEventHandler);
        container.dispatchEvent(unmountEvent);
        setTimeout(() => {
          if (!unmountEvent.defaultPrevented) focus(previouslyFocusedElement ?? (void 0).body, { select: true });
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, unmountEventHandler);
          focusScopesStack.remove(focusScope);
        }, 0);
      });
    });
    function handleKeyDown(event) {
      if (!props.loop && !props.trapped) return;
      if (focusScope.paused) return;
      const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
      const focusedElement = getActiveElement();
      if (isTabKey && focusedElement) {
        const container = event.currentTarget;
        const [first, last] = getTabbableEdges(container);
        const hasTabbableElementsInside = first && last;
        if (!hasTabbableElementsInside) {
          if (focusedElement === container) event.preventDefault();
        } else if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (props.loop) focus(first, { select: true });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (props.loop) focus(last, { select: true });
        }
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref_key: "currentRef",
        ref: currentRef,
        tabindex: "-1",
        "as-child": _ctx.asChild,
        as: _ctx.as,
        onKeydown: handleKeyDown
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, ["as-child", "as"]);
    };
  }
});
var FocusScope_default = FocusScope_vue_vue_type_script_setup_true_lang_default;
var Teleport_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "Teleport",
  props: {
    to: {
      type: null,
      required: false,
      default: "body"
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
    const isMounted = useMounted();
    return (_ctx, _cache) => {
      return unref(isMounted) || _ctx.forceMount ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: _ctx.to,
        disabled: _ctx.disabled,
        defer: _ctx.defer
      }, [renderSlot(_ctx.$slots, "default")], 8, [
        "to",
        "disabled",
        "defer"
      ])) : createCommentVNode("v-if", true);
    };
  }
});
var Teleport_default = Teleport_vue_vue_type_script_setup_true_lang_default;
const ITEM_DATA_ATTR = "data-reka-collection-item";
function useCollection(options = {}) {
  const { key = "", isProvider = false } = options;
  const injectionKey = `${key}CollectionProvider`;
  let context2;
  if (isProvider) {
    const itemMap = ref(/* @__PURE__ */ new Map());
    const collectionRef = ref();
    context2 = {
      collectionRef,
      itemMap
    };
    provide(injectionKey, context2);
  } else context2 = inject(injectionKey);
  const getItems = (includeDisabledItem = false) => {
    const collectionNode = context2.collectionRef.value;
    if (!collectionNode) return [];
    const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
    const items = Array.from(context2.itemMap.value.values());
    const orderedItems = items.sort((a, b) => orderedNodes.indexOf(a.ref) - orderedNodes.indexOf(b.ref));
    if (includeDisabledItem) return orderedItems;
    else return orderedItems.filter((i) => i.ref.dataset.disabled !== "");
  };
  const CollectionSlot = /* @__PURE__ */ defineComponent({
    name: "CollectionSlot",
    inheritAttrs: false,
    setup(_, { slots, attrs }) {
      const { primitiveElement, currentElement } = usePrimitiveElement();
      watch(currentElement, () => {
        context2.collectionRef.value = currentElement.value;
      });
      return () => h(Slot, {
        ref: primitiveElement,
        ...attrs
      }, slots);
    }
  });
  const CollectionItem = /* @__PURE__ */ defineComponent({
    name: "CollectionItem",
    inheritAttrs: false,
    props: { value: { validator: () => true } },
    setup(props, { slots, attrs }) {
      const { primitiveElement, currentElement } = usePrimitiveElement();
      watchEffect((cleanupFn) => {
        if (currentElement.value) {
          const key$1 = markRaw(currentElement.value);
          context2.itemMap.value.set(key$1, {
            ref: currentElement.value,
            value: props.value
          });
          cleanupFn(() => context2.itemMap.value.delete(key$1));
        }
      });
      return () => h(Slot, {
        ...attrs,
        [ITEM_DATA_ATTR]: "",
        ref: primitiveElement
      }, slots);
    }
  });
  const reactiveItems = computed(() => Array.from(context2.itemMap.value.values()));
  const itemMapSize = computed(() => context2.itemMap.value.size);
  return {
    getItems,
    reactiveItems,
    itemMapSize,
    CollectionSlot,
    CollectionItem
  };
}
var VisuallyHidden_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "VisuallyHidden",
  props: {
    feature: {
      type: String,
      required: false,
      default: "focusable"
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
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        as: _ctx.as,
        "as-child": _ctx.asChild,
        "aria-hidden": _ctx.feature === "focusable" ? "true" : void 0,
        "data-hidden": _ctx.feature === "fully-hidden" ? "" : void 0,
        tabindex: _ctx.feature === "fully-hidden" ? "-1" : void 0,
        style: {
          position: "absolute",
          border: 0,
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          clipPath: "inset(50%)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          top: "-1px",
          left: "-1px"
        }
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "aria-hidden",
        "data-hidden",
        "tabindex"
      ]);
    };
  }
});
var VisuallyHidden_default = VisuallyHidden_vue_vue_type_script_setup_true_lang_default;
const [injectPopperRootContext, providePopperRootContext] = /* @__PURE__ */ createContext("PopperRoot");
var PopperRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "PopperRoot",
  setup(__props) {
    const anchor = ref();
    providePopperRootContext({
      anchor,
      onAnchorChange: (element) => anchor.value = element
    });
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var PopperRoot_default = PopperRoot_vue_vue_type_script_setup_true_lang_default;
var PopperAnchor_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopperAnchor",
  props: {
    reference: {
      type: null,
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
    const { forwardRef, currentElement } = useForwardExpose();
    const rootContext = injectPopperRootContext();
    watchPostEffect(() => {
      rootContext.onAnchorChange(props.reference ?? currentElement.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref: unref(forwardRef),
        as: _ctx.as,
        "as-child": _ctx.asChild
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, ["as", "as-child"]);
    };
  }
});
var PopperAnchor_default = PopperAnchor_vue_vue_type_script_setup_true_lang_default;
const _hoisted_1$2 = {
  key: 0,
  d: "M0 0L6 6L12 0"
};
const _hoisted_2$2 = {
  key: 1,
  d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
};
var Arrow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "Arrow",
  props: {
    width: {
      type: Number,
      required: false,
      default: 10
    },
    height: {
      type: Number,
      required: false,
      default: 5
    },
    rounded: {
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
      default: "svg"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
        width: _ctx.width,
        height: _ctx.height,
        viewBox: _ctx.asChild ? void 0 : "0 0 12 6",
        preserveAspectRatio: _ctx.asChild ? void 0 : "none"
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [!_ctx.rounded ? (openBlock(), createElementBlock("path", _hoisted_1$2)) : (openBlock(), createElementBlock("path", _hoisted_2$2))])]),
        _: 3
      }, 16, [
        "width",
        "height",
        "viewBox",
        "preserveAspectRatio"
      ]);
    };
  }
});
var Arrow_default = Arrow_vue_vue_type_script_setup_true_lang_default;
function isNotNull(value) {
  return value !== null;
}
function transformOrigin(options) {
  return {
    name: "transformOrigin",
    options,
    fn(data) {
      const { placement, rects, middlewareData } = data;
      const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
      const isArrowHidden = cannotCenterArrow;
      const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
      const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
      const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
      const noArrowAlign = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[placedAlign];
      const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
      const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
      let x = "";
      let y = "";
      if (placedSide === "bottom") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${-arrowHeight}px`;
      } else if (placedSide === "top") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${rects.floating.height + arrowHeight}px`;
      } else if (placedSide === "right") {
        x = `${-arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      } else if (placedSide === "left") {
        x = `${rects.floating.width + arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      }
      return { data: {
        x,
        y
      } };
    }
  };
}
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
const PopperContentPropsDefaultValue = {
  side: "bottom",
  sideOffset: 0,
  sideFlip: true,
  align: "center",
  alignOffset: 0,
  alignFlip: true,
  arrowPadding: 0,
  hideShiftedArrow: true,
  avoidCollisions: true,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: false,
  positionStrategy: "fixed",
  updatePositionStrategy: "optimized",
  prioritizePosition: false
};
const [injectPopperContentContext, providePopperContentContext] = /* @__PURE__ */ createContext("PopperContent");
var PopperContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "PopperContent",
  props: /* @__PURE__ */ mergeDefaults({
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
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
  }, { ...PopperContentPropsDefaultValue }),
  emits: ["placed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectPopperRootContext();
    const { forwardRef, currentElement: contentElement } = useForwardExpose();
    const floatingRef = ref();
    const arrow$1 = ref();
    const { width: arrowWidth, height: arrowHeight } = useSize();
    const desiredPlacement = computed(() => props.side + (props.align !== "center" ? `-${props.align}` : ""));
    const collisionPadding = computed(() => {
      return typeof props.collisionPadding === "number" ? props.collisionPadding : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...props.collisionPadding
      };
    });
    const boundary = computed(() => {
      return Array.isArray(props.collisionBoundary) ? props.collisionBoundary : [props.collisionBoundary];
    });
    const detectOverflowOptions = computed(() => {
      return {
        padding: collisionPadding.value,
        boundary: boundary.value.filter(isNotNull),
        altBoundary: boundary.value.length > 0
      };
    });
    const flipOptions = computed(() => {
      return {
        mainAxis: props.sideFlip,
        crossAxis: props.alignFlip
      };
    });
    const computedMiddleware = computedEager(() => {
      return [
        offset({
          mainAxis: props.sideOffset + arrowHeight.value,
          alignmentAxis: props.alignOffset
        }),
        props.prioritizePosition && props.avoidCollisions && flip({
          ...detectOverflowOptions.value,
          ...flipOptions.value
        }),
        props.avoidCollisions && shift({
          mainAxis: true,
          crossAxis: !!props.prioritizePosition,
          limiter: props.sticky === "partial" ? limitShift() : void 0,
          ...detectOverflowOptions.value
        }),
        !props.prioritizePosition && props.avoidCollisions && flip({
          ...detectOverflowOptions.value,
          ...flipOptions.value
        }),
        size({
          ...detectOverflowOptions.value,
          apply: ({ elements, rects, availableWidth, availableHeight }) => {
            const { width: anchorWidth, height: anchorHeight } = rects.reference;
            const contentStyle = elements.floating.style;
            contentStyle.setProperty("--reka-popper-available-width", `${availableWidth}px`);
            contentStyle.setProperty("--reka-popper-available-height", `${availableHeight}px`);
            contentStyle.setProperty("--reka-popper-anchor-width", `${anchorWidth}px`);
            contentStyle.setProperty("--reka-popper-anchor-height", `${anchorHeight}px`);
          }
        }),
        arrow$1.value && arrow({
          element: arrow$1.value,
          padding: props.arrowPadding
        }),
        transformOrigin({
          arrowWidth: arrowWidth.value,
          arrowHeight: arrowHeight.value
        }),
        props.hideWhenDetached && hide({
          strategy: "referenceHidden",
          ...detectOverflowOptions.value
        })
      ];
    });
    const reference = computed(() => props.reference ?? rootContext.anchor.value);
    const { floatingStyles, placement, isPositioned, middlewareData, update } = useFloating(reference, floatingRef, {
      strategy: props.positionStrategy,
      placement: desiredPlacement,
      whileElementsMounted: (...args) => {
        const cleanup = autoUpdate(...args, {
          layoutShift: !props.disableUpdateOnLayoutShift,
          animationFrame: props.updatePositionStrategy === "always"
        });
        return cleanup;
      },
      middleware: computedMiddleware
    });
    const placedSide = computed(() => getSideAndAlignFromPlacement(placement.value)[0]);
    const placedAlign = computed(() => getSideAndAlignFromPlacement(placement.value)[1]);
    watchPostEffect(() => {
      if (isPositioned.value) emits("placed");
    });
    const shouldHideArrow = computed(() => {
      const cannotCenterArrow = middlewareData.value.arrow?.centerOffset !== 0;
      return props.hideShiftedArrow && cannotCenterArrow;
    });
    const contentZIndex = ref("");
    watchEffect(() => {
      if (contentElement.value) contentZIndex.value = (void 0).getComputedStyle(contentElement.value).zIndex;
    });
    const arrowX = computed(() => middlewareData.value.arrow?.x ?? 0);
    const arrowY = computed(() => middlewareData.value.arrow?.y ?? 0);
    providePopperContentContext({
      placedSide,
      onArrowChange: (element) => arrow$1.value = element,
      arrowX,
      arrowY,
      shouldHideArrow
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: floatingRef,
        "data-reka-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(floatingStyles),
          transform: unref(isPositioned) ? unref(floatingStyles).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: contentZIndex.value,
          ["--reka-popper-transform-origin"]: [unref(middlewareData).transformOrigin?.x, unref(middlewareData).transformOrigin?.y].join(" "),
          ...unref(middlewareData).hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [createVNode(unref(Primitive), mergeProps({ ref: unref(forwardRef) }, _ctx.$attrs, {
        "as-child": props.asChild,
        as: _ctx.as,
        "data-side": placedSide.value,
        "data-align": placedAlign.value,
        style: { animation: !unref(isPositioned) ? "none" : void 0 }
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "as-child",
        "as",
        "data-side",
        "data-align",
        "style"
      ])], 4);
    };
  }
});
var PopperContent_default = PopperContent_vue_vue_type_script_setup_true_lang_default;
const OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var PopperArrow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "PopperArrow",
  props: {
    width: {
      type: Number,
      required: false
    },
    height: {
      type: Number,
      required: false
    },
    rounded: {
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
      default: "svg"
    }
  },
  setup(__props) {
    const { forwardRef } = useForwardExpose();
    const contentContext = injectPopperContentContext();
    const baseSide = computed(() => OPPOSITE_SIDE[contentContext.placedSide.value]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref: (el) => {
          unref(contentContext).onArrowChange(el ?? void 0);
          return void 0;
        },
        style: normalizeStyle({
          position: "absolute",
          left: unref(contentContext).arrowX?.value ? `${unref(contentContext).arrowX?.value}px` : void 0,
          top: unref(contentContext).arrowY?.value ? `${unref(contentContext).arrowY?.value}px` : void 0,
          [baseSide.value]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[unref(contentContext).placedSide.value],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: `rotate(180deg)`,
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[unref(contentContext).placedSide.value],
          visibility: unref(contentContext).shouldHideArrow.value ? "hidden" : void 0
        })
      }, [createVNode(Arrow_default, mergeProps(_ctx.$attrs, {
        ref: unref(forwardRef),
        style: { display: "block" },
        as: _ctx.as,
        "as-child": _ctx.asChild,
        rounded: _ctx.rounded,
        width: _ctx.width,
        height: _ctx.height
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "as",
        "as-child",
        "rounded",
        "width",
        "height"
      ])], 4);
    };
  }
});
var PopperArrow_default = PopperArrow_vue_vue_type_script_setup_true_lang_default;
function useCalendarState(props) {
  function isDateSelected(dateObj) {
    if (Array.isArray(props.date.value)) return props.date.value.some((d) => isSameDay(d, dateObj));
    else if (!props.date.value) return false;
    else return isSameDay(props.date.value, dateObj);
  }
  const isInvalid = computed(() => {
    if (Array.isArray(props.date.value)) {
      if (!props.date.value.length) return false;
      for (const dateObj of props.date.value) {
        if (props.isDateDisabled?.(dateObj)) return true;
        if (props.isDateUnavailable?.(dateObj)) return true;
      }
    } else {
      if (!props.date.value) return false;
      if (props.isDateDisabled?.(props.date.value)) return true;
      if (props.isDateUnavailable?.(props.date.value)) return true;
    }
    return false;
  });
  const hasSelectedDate = computed(() => {
    return Array.isArray(props.date.value) ? props.date.value.length > 0 : !!props.date.value;
  });
  const isSelectedDateDisabled = computed(() => {
    if (Array.isArray(props.date.value)) {
      if (!props.date.value.length) return false;
      return props.date.value.some((dateObj) => props.isDateDisabled?.(dateObj));
    }
    if (!props.date.value) return false;
    return !!props.isDateDisabled?.(props.date.value);
  });
  return {
    isDateSelected,
    isInvalid,
    hasSelectedDate,
    isSelectedDateDisabled
  };
}
function handleNextDisabled(lastPeriodInView, nextPageFunc) {
  const firstPeriodOfNextPage = nextPageFunc(lastPeriodInView);
  const diff2 = firstPeriodOfNextPage.compare(lastPeriodInView);
  const duration = {};
  if (diff2 >= 7) duration.day = 1;
  if (diff2 >= getDaysInMonth(lastPeriodInView)) duration.month = 1;
  return firstPeriodOfNextPage.set({ ...duration });
}
function handlePrevDisabled(firstPeriodInView, prevPageFunc) {
  const lastPeriodOfPrevPage = prevPageFunc(firstPeriodInView);
  const diff2 = firstPeriodInView.compare(lastPeriodOfPrevPage);
  const duration = {};
  if (diff2 >= 7) duration.day = 35;
  if (diff2 >= getDaysInMonth(firstPeriodInView)) duration.month = 13;
  return lastPeriodOfPrevPage.set({ ...duration });
}
function handleNextPage(date, nextPageFunc) {
  return nextPageFunc(date);
}
function handlePrevPage(date, prevPageFunc) {
  return prevPageFunc(date);
}
function useCalendar(props) {
  const formatter = useDateFormatter(props.locale.value);
  const headingFormatOptions = computed(() => {
    const options = { calendar: props.placeholder.value.calendar.identifier };
    if (props.placeholder.value.calendar.identifier === "gregory" && props.placeholder.value.era === "BC") options.era = "short";
    return options;
  });
  const grid = ref(createMonths({
    dateObj: props.placeholder.value,
    weekStartsOn: props.weekStartsOn.value,
    locale: props.locale.value,
    fixedWeeks: props.fixedWeeks.value,
    numberOfMonths: props.numberOfMonths.value
  }));
  const visibleView = computed(() => {
    return grid.value.map((month) => month.value);
  });
  function isOutsideVisibleView(date) {
    return !visibleView.value.some((month) => isEqualMonth(date, month));
  }
  const isNextButtonDisabled = (nextPageFunc) => {
    if (!props.maxValue.value || !grid.value.length) return false;
    if (props.disabled.value) return true;
    const lastPeriodInView = grid.value.at(-1).value;
    if (!nextPageFunc && !props.nextPage.value) {
      const firstPeriodOfNextPage$1 = lastPeriodInView.add({ months: 1 }).set({ day: 1 });
      return isAfter(firstPeriodOfNextPage$1, props.maxValue.value);
    }
    const firstPeriodOfNextPage = handleNextDisabled(lastPeriodInView, nextPageFunc || props.nextPage.value);
    return isAfter(firstPeriodOfNextPage, props.maxValue.value);
  };
  const isPrevButtonDisabled = (prevPageFunc) => {
    if (!props.minValue.value || !grid.value.length) return false;
    if (props.disabled.value) return true;
    const firstPeriodInView = grid.value[0].value;
    if (!prevPageFunc && !props.prevPage.value) {
      const lastPeriodOfPrevPage$1 = firstPeriodInView.subtract({ months: 1 }).set({ day: 35 });
      return isBefore(lastPeriodOfPrevPage$1, props.minValue.value);
    }
    const lastPeriodOfPrevPage = handlePrevDisabled(firstPeriodInView, prevPageFunc || props.prevPage.value);
    return isBefore(lastPeriodOfPrevPage, props.minValue.value);
  };
  function isDateDisabled(dateObj) {
    if (props.isDateDisabled?.(dateObj) || props.disabled.value) return true;
    if (props.maxValue.value && isAfter(dateObj, props.maxValue.value)) return true;
    if (props.minValue.value && isBefore(dateObj, props.minValue.value)) return true;
    return false;
  }
  const isDateUnavailable = (date) => {
    if (props.isDateUnavailable?.(date)) return true;
    return false;
  };
  const weekdays = computed(() => {
    if (!grid.value.length) return [];
    return grid.value[0].rows[0].map((date) => {
      return formatter.dayOfWeek(toDate(date), props.weekdayFormat.value);
    });
  });
  const nextPage = (nextPageFunc) => {
    const firstDate = grid.value[0].value;
    if (!nextPageFunc && !props.nextPage.value) {
      const newDate$1 = firstDate.add({ months: props.pagedNavigation.value ? props.numberOfMonths.value : 1 });
      const newGrid$1 = createMonths({
        dateObj: newDate$1,
        weekStartsOn: props.weekStartsOn.value,
        locale: props.locale.value,
        fixedWeeks: props.fixedWeeks.value,
        numberOfMonths: props.numberOfMonths.value
      });
      grid.value = newGrid$1;
      props.placeholder.value = newGrid$1[0].value.set({ day: 1 });
      return;
    }
    const newDate = handleNextPage(firstDate, nextPageFunc || props.nextPage.value);
    const newGrid = createMonths({
      dateObj: newDate,
      weekStartsOn: props.weekStartsOn.value,
      locale: props.locale.value,
      fixedWeeks: props.fixedWeeks.value,
      numberOfMonths: props.numberOfMonths.value
    });
    grid.value = newGrid;
    const duration = {};
    if (!nextPageFunc) {
      const diff2 = newGrid[0].value.compare(firstDate);
      if (diff2 >= getDaysInMonth(firstDate)) duration.day = 1;
      if (diff2 >= 365) duration.month = 1;
    }
    props.placeholder.value = newGrid[0].value.set({ ...duration });
  };
  const prevPage = (prevPageFunc) => {
    const firstDate = grid.value[0].value;
    if (!prevPageFunc && !props.prevPage.value) {
      const newDate$1 = firstDate.subtract({ months: props.pagedNavigation.value ? props.numberOfMonths.value : 1 });
      const newGrid$1 = createMonths({
        dateObj: newDate$1,
        weekStartsOn: props.weekStartsOn.value,
        locale: props.locale.value,
        fixedWeeks: props.fixedWeeks.value,
        numberOfMonths: props.numberOfMonths.value
      });
      grid.value = newGrid$1;
      props.placeholder.value = newGrid$1[0].value.set({ day: 1 });
      return;
    }
    const newDate = handlePrevPage(firstDate, prevPageFunc || props.prevPage.value);
    const newGrid = createMonths({
      dateObj: newDate,
      weekStartsOn: props.weekStartsOn.value,
      locale: props.locale.value,
      fixedWeeks: props.fixedWeeks.value,
      numberOfMonths: props.numberOfMonths.value
    });
    grid.value = newGrid;
    const duration = {};
    if (!prevPageFunc) {
      const diff2 = firstDate.compare(newGrid[0].value);
      if (diff2 >= getDaysInMonth(firstDate)) duration.day = 1;
      if (diff2 >= 365) duration.month = 1;
    }
    props.placeholder.value = newGrid[0].value.set({ ...duration });
  };
  watch(props.placeholder, (value) => {
    if (visibleView.value.some((month) => isEqualMonth(month, value))) return;
    grid.value = createMonths({
      dateObj: value,
      weekStartsOn: props.weekStartsOn.value,
      locale: props.locale.value,
      fixedWeeks: props.fixedWeeks.value,
      numberOfMonths: props.numberOfMonths.value
    });
  });
  watch([
    props.locale,
    props.weekStartsOn,
    props.fixedWeeks,
    props.numberOfMonths
  ], () => {
    grid.value = createMonths({
      dateObj: props.placeholder.value,
      weekStartsOn: props.weekStartsOn.value,
      locale: props.locale.value,
      fixedWeeks: props.fixedWeeks.value,
      numberOfMonths: props.numberOfMonths.value
    });
  });
  const headingValue = computed(() => {
    if (!grid.value.length) return "";
    if (props.locale.value !== formatter.getLocale()) formatter.setLocale(props.locale.value);
    if (grid.value.length === 1) {
      const month = grid.value[0].value;
      return `${formatter.fullMonthAndYear(toDate(month), headingFormatOptions.value)}`;
    }
    const startMonth = toDate(grid.value[0].value);
    const endMonth = toDate(grid.value.at(-1).value);
    const startMonthName = formatter.fullMonth(startMonth, headingFormatOptions.value);
    const endMonthName = formatter.fullMonth(endMonth, headingFormatOptions.value);
    const startMonthYear = formatter.fullYear(startMonth, headingFormatOptions.value);
    const endMonthYear = formatter.fullYear(endMonth, headingFormatOptions.value);
    const content = startMonthYear === endMonthYear ? `${startMonthName} - ${endMonthName} ${endMonthYear}` : `${startMonthName} ${startMonthYear} - ${endMonthName} ${endMonthYear}`;
    return content;
  });
  const fullCalendarLabel = computed(() => `${props.calendarLabel.value ?? "Event Date"}, ${headingValue.value}`);
  const isPlaceholderFocusable = computed(() => {
    return !(isDateDisabled(props.placeholder.value) || isDateUnavailable(props.placeholder.value) || isOutsideVisibleView(props.placeholder.value));
  });
  const firstFocusableDate = computed(() => {
    for (const month of grid.value) {
      if (props.minValue.value && isBefore(month.value, props.minValue.value)) continue;
      const daysInMonth = getDaysInMonth(month.value);
      const startDay = props.minValue.value && isSameMonth(props.minValue.value, month.value) ? props.minValue.value.day : 1;
      for (let day = startDay; day <= daysInMonth; day++) {
        const date = month.value.set({ day });
        if (isDateDisabled(date) || isDateUnavailable(date)) continue;
        return date;
      }
    }
  });
  return {
    isDateDisabled,
    isDateUnavailable,
    isNextButtonDisabled,
    isPrevButtonDisabled,
    grid,
    weekdays,
    visibleView,
    isOutsideVisibleView,
    formatter,
    nextPage,
    prevPage,
    headingValue,
    fullCalendarLabel,
    isPlaceholderFocusable,
    firstFocusableDate
  };
}
const _hoisted_1$1 = { style: {
  "border": "0px",
  "clip": "rect(0px, 0px, 0px, 0px)",
  "clip-path": "inset(50%)",
  "height": "1px",
  "margin": "-1px",
  "overflow": "hidden",
  "padding": "0px",
  "position": "absolute",
  "white-space": "nowrap",
  "width": "1px"
} };
const _hoisted_2$1 = {
  role: "heading",
  "aria-level": "2"
};
const [injectCalendarRootContext, provideCalendarRootContext] = /* @__PURE__ */ createContext("CalendarRoot");
var CalendarRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarRoot",
  props: {
    defaultValue: {
      type: null,
      required: false,
      default: void 0
    },
    defaultPlaceholder: {
      type: null,
      required: false
    },
    placeholder: {
      type: null,
      required: false,
      default: void 0
    },
    pagedNavigation: {
      type: Boolean,
      required: false,
      default: false
    },
    preventDeselect: {
      type: Boolean,
      required: false,
      default: false
    },
    weekStartsOn: {
      type: Number,
      required: false
    },
    weekdayFormat: {
      type: String,
      required: false,
      default: "narrow"
    },
    calendarLabel: {
      type: String,
      required: false
    },
    fixedWeeks: {
      type: Boolean,
      required: false,
      default: false
    },
    maxValue: {
      type: null,
      required: false
    },
    minValue: {
      type: null,
      required: false
    },
    locale: {
      type: String,
      required: false
    },
    numberOfMonths: {
      type: Number,
      required: false,
      default: 1
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false
    },
    initialFocus: {
      type: Boolean,
      required: false,
      default: false
    },
    isDateDisabled: {
      type: Function,
      required: false,
      default: void 0
    },
    isDateUnavailable: {
      type: Function,
      required: false,
      default: void 0
    },
    dir: {
      type: String,
      required: false
    },
    nextPage: {
      type: Function,
      required: false
    },
    prevPage: {
      type: Function,
      required: false
    },
    modelValue: {
      type: null,
      required: false
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    disableDaysOutsideCurrentView: {
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
      default: "div"
    }
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { disabled, readonly, initialFocus, pagedNavigation, weekdayFormat, fixedWeeks, multiple, minValue, maxValue, numberOfMonths, preventDeselect, isDateDisabled: propsIsDateDisabled, isDateUnavailable: propsIsDateUnavailable, calendarLabel, defaultValue, nextPage: propsNextPage, prevPage: propsPrevPage, dir: propDir, locale: propLocale, disableDaysOutsideCurrentView } = toRefs(props);
    const { primitiveElement, currentElement: parentElement } = usePrimitiveElement();
    const locale = useLocale$1(propLocale);
    const dir = useDirection(propDir);
    const weekStartsOn = computed(() => props.weekStartsOn ?? getWeekStartsOn(locale.value));
    const modelValue = useVModel(props, "modelValue", emits, {
      defaultValue: defaultValue.value,
      passive: props.modelValue === void 0
    });
    const defaultDate = getDefaultDate({
      defaultPlaceholder: props.placeholder,
      defaultValue: modelValue.value,
      locale: props.locale
    });
    const placeholder = useVModel(props, "placeholder", emits, {
      defaultValue: props.defaultPlaceholder ?? defaultDate.copy(),
      passive: props.placeholder === void 0
    });
    function onPlaceholderChange(value) {
      placeholder.value = value.copy();
    }
    const { fullCalendarLabel, headingValue, isDateDisabled, isDateUnavailable, isNextButtonDisabled, isPrevButtonDisabled, weekdays, isOutsideVisibleView, nextPage, prevPage, formatter, grid, isPlaceholderFocusable, firstFocusableDate } = useCalendar({
      locale,
      placeholder,
      weekStartsOn,
      fixedWeeks,
      numberOfMonths,
      minValue,
      maxValue,
      disabled,
      weekdayFormat,
      pagedNavigation,
      isDateDisabled: propsIsDateDisabled.value,
      isDateUnavailable: propsIsDateUnavailable.value,
      calendarLabel,
      nextPage: propsNextPage,
      prevPage: propsPrevPage
    });
    const { isInvalid, isDateSelected, hasSelectedDate, isSelectedDateDisabled } = useCalendarState({
      date: modelValue,
      isDateDisabled,
      isDateUnavailable
    });
    watch(modelValue, (_modelValue) => {
      if (Array.isArray(_modelValue) && _modelValue.length) {
        const lastValue = _modelValue.at(-1);
        if (lastValue && !isEqualDay(placeholder.value, lastValue)) onPlaceholderChange(lastValue);
      } else if (!Array.isArray(_modelValue) && _modelValue && !isEqualDay(placeholder.value, _modelValue)) onPlaceholderChange(_modelValue);
    });
    function onDateChange(value) {
      if (!multiple.value) {
        if (!modelValue.value) {
          modelValue.value = value.copy();
          return;
        }
        if (!preventDeselect.value && isEqualDay(modelValue.value, value)) {
          placeholder.value = value.copy();
          modelValue.value = void 0;
        } else modelValue.value = value.copy();
      } else if (!modelValue.value) modelValue.value = [value.copy()];
      else if (Array.isArray(modelValue.value)) {
        const index = modelValue.value.findIndex((date) => isSameDay(date, value));
        if (index === -1) modelValue.value = [...modelValue.value, value];
        else if (!preventDeselect.value) {
          const next = modelValue.value.filter((date) => !isSameDay(date, value));
          if (!next.length) {
            placeholder.value = value.copy();
            modelValue.value = void 0;
            return;
          }
          modelValue.value = next.map((date) => date.copy());
        }
      }
    }
    provideCalendarRootContext({
      isDateUnavailable,
      dir,
      isDateDisabled,
      locale,
      formatter,
      modelValue,
      placeholder,
      disabled,
      initialFocus,
      pagedNavigation,
      grid,
      weekDays: weekdays,
      weekStartsOn,
      weekdayFormat,
      fixedWeeks,
      multiple,
      numberOfMonths,
      readonly,
      preventDeselect,
      fullCalendarLabel,
      headingValue,
      isInvalid,
      isDateSelected,
      isNextButtonDisabled,
      isPrevButtonDisabled,
      isOutsideVisibleView,
      nextPage,
      prevPage,
      parentElement,
      onPlaceholderChange,
      onDateChange,
      disableDaysOutsideCurrentView,
      minValue,
      maxValue,
      isPlaceholderFocusable,
      firstFocusableDate,
      hasSelectedDate,
      isSelectedDateDisabled
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref_key: "primitiveElement",
        ref: primitiveElement,
        as: _ctx.as,
        "as-child": _ctx.asChild,
        "aria-label": unref(fullCalendarLabel),
        "data-readonly": unref(readonly) ? "" : void 0,
        "data-disabled": unref(disabled) ? "" : void 0,
        "data-invalid": unref(isInvalid) ? "" : void 0,
        dir: unref(dir)
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
          date: unref(placeholder),
          grid: unref(grid),
          weekDays: unref(weekdays),
          weekStartsOn: weekStartsOn.value,
          locale: unref(locale),
          fixedWeeks: unref(fixedWeeks),
          modelValue: unref(modelValue)
        }), createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, toDisplayString(unref(fullCalendarLabel)), 1)])]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "aria-label",
        "data-readonly",
        "data-disabled",
        "data-invalid",
        "dir"
      ]);
    };
  }
});
var CalendarRoot_default = CalendarRoot_vue_vue_type_script_setup_true_lang_default;
var CalendarCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarCell",
  props: {
    date: {
      type: null,
      required: true
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "td"
    }
  },
  setup(__props) {
    const rootContext = injectCalendarRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        as: _ctx.as,
        "as-child": _ctx.asChild,
        role: "gridcell",
        "aria-selected": unref(rootContext).isDateSelected(_ctx.date) ? true : void 0,
        "aria-disabled": unref(rootContext).isDateDisabled(_ctx.date) || unref(rootContext).isDateUnavailable?.(_ctx.date) || unref(rootContext).disableDaysOutsideCurrentView.value,
        "data-disabled": unref(rootContext).isDateDisabled(_ctx.date) || unref(rootContext).disableDaysOutsideCurrentView.value ? "" : void 0
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "aria-selected",
        "aria-disabled",
        "data-disabled"
      ]);
    };
  }
});
var CalendarCell_default = CalendarCell_vue_vue_type_script_setup_true_lang_default;
var CalendarCellTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarCellTrigger",
  props: {
    day: {
      type: null,
      required: true
    },
    month: {
      type: null,
      required: true
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "div"
    }
  },
  setup(__props) {
    const props = __props;
    const kbd = useKbd();
    const rootContext = injectCalendarRootContext();
    const { primitiveElement } = usePrimitiveElement();
    const dayValue = computed(() => props.day.day.toLocaleString(rootContext.locale.value));
    const labelText = computed(() => {
      return rootContext.formatter.custom(toDate(props.day), {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      });
    });
    const isUnavailable = computed(() => rootContext.isDateUnavailable?.(props.day) ?? false);
    const isDateToday = computed(() => {
      return isToday(props.day, getLocalTimeZone());
    });
    const isOutsideView = computed(() => {
      return !isSameMonth(props.day, props.month);
    });
    const isOutsideVisibleView = computed(() => rootContext.isOutsideVisibleView(props.day));
    const isDisabled = computed(() => rootContext.isDateDisabled(props.day) || rootContext.disableDaysOutsideCurrentView.value && isOutsideView.value);
    const isFocusedDate = computed(() => {
      if (isOutsideView.value || isDisabled.value) return false;
      if (!rootContext.disabled.value && rootContext.isPlaceholderFocusable.value && isSameDay(props.day, rootContext.placeholder.value)) return true;
      if ((!rootContext.hasSelectedDate.value || rootContext.isSelectedDateDisabled.value) && !rootContext.isPlaceholderFocusable.value) return rootContext.firstFocusableDate.value && isSameDay(props.day, rootContext.firstFocusableDate.value);
      return false;
    });
    const isSelectedDate = computed(() => rootContext.isDateSelected(props.day));
    function changeDate(date) {
      if (rootContext.readonly.value) return;
      if (rootContext.isDateDisabled(date) || rootContext.isDateUnavailable?.(date)) return;
      rootContext.onDateChange(date);
    }
    function handleClick() {
      if (isDisabled.value) return;
      changeDate(props.day);
    }
    function handleArrowKey(e) {
      if (isDisabled.value) return;
      e.preventDefault();
      e.stopPropagation();
      const parentElement = rootContext.parentElement.value;
      const indexIncrementation = 7;
      const sign = rootContext.dir.value === "rtl" ? -1 : 1;
      switch (e.code) {
        case kbd.ARROW_RIGHT:
          shiftFocus(props.day, sign);
          break;
        case kbd.ARROW_LEFT:
          shiftFocus(props.day, -sign);
          break;
        case kbd.ARROW_UP:
          shiftFocus(props.day, -indexIncrementation);
          break;
        case kbd.ARROW_DOWN:
          shiftFocus(props.day, indexIncrementation);
          break;
        case kbd.ENTER:
        case kbd.SPACE_CODE:
          changeDate(props.day);
      }
      function shiftFocus(day, add) {
        const candidateDayValue = day.add({ days: add });
        if (rootContext.minValue.value && candidateDayValue.compare(rootContext.minValue.value) < 0 || rootContext.maxValue.value && candidateDayValue.compare(rootContext.maxValue.value) > 0) return;
        const candidateDay = parentElement.querySelector(`[data-value='${candidateDayValue.toString()}']:not([data-outside-view])`);
        if (!candidateDay) {
          if (add > 0) {
            if (rootContext.isNextButtonDisabled()) return;
            rootContext.nextPage();
          } else {
            if (rootContext.isPrevButtonDisabled()) return;
            rootContext.prevPage();
          }
          nextTick(() => {
            shiftFocus(day, add);
          });
          return;
        }
        if (candidateDay && candidateDay.hasAttribute("data-disabled")) return shiftFocus(candidateDayValue, add);
        rootContext.onPlaceholderChange(candidateDayValue);
        candidateDay?.focus();
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref_key: "primitiveElement",
        ref: primitiveElement,
        as: props.as,
        "as-child": props.asChild,
        role: "button",
        "aria-label": labelText.value,
        "data-reka-calendar-cell-trigger": "",
        "aria-disabled": isDisabled.value || isUnavailable.value ? true : void 0,
        "data-selected": isSelectedDate.value ? true : void 0,
        "data-value": _ctx.day.toString(),
        "data-disabled": isDisabled.value ? "" : void 0,
        "data-unavailable": isUnavailable.value ? "" : void 0,
        "data-today": isDateToday.value ? "" : void 0,
        "data-outside-view": isOutsideView.value ? "" : void 0,
        "data-outside-visible-view": isOutsideVisibleView.value ? "" : void 0,
        "data-focused": isFocusedDate.value ? "" : void 0,
        tabindex: isFocusedDate.value ? 0 : isOutsideView.value || isDisabled.value ? void 0 : -1,
        onClick: handleClick,
        onKeydown: [withKeys(handleArrowKey, [
          "up",
          "down",
          "left",
          "right",
          "space",
          "enter"
        ]), _cache[0] || (_cache[0] = withKeys(withModifiers(() => {
        }, ["prevent"]), ["enter"]))]
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
          dayValue: dayValue.value,
          disabled: isDisabled.value,
          today: isDateToday.value,
          selected: isSelectedDate.value,
          outsideView: isOutsideView.value,
          outsideVisibleView: isOutsideVisibleView.value,
          unavailable: isUnavailable.value
        }, () => [createTextVNode(toDisplayString(dayValue.value), 1)])]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "aria-label",
        "aria-disabled",
        "data-selected",
        "data-value",
        "data-disabled",
        "data-unavailable",
        "data-today",
        "data-outside-view",
        "data-outside-visible-view",
        "data-focused",
        "tabindex"
      ]);
    };
  }
});
var CalendarCellTrigger_default = CalendarCellTrigger_vue_vue_type_script_setup_true_lang_default;
var CalendarGrid_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarGrid",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "table"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectCalendarRootContext();
    const disabled = computed(() => rootContext.disabled.value ? true : void 0);
    const readonly = computed(() => rootContext.readonly.value ? true : void 0);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
        tabindex: "-1",
        role: "application",
        "aria-readonly": readonly.value,
        "aria-disabled": disabled.value,
        "data-readonly": readonly.value && "",
        "data-disabled": disabled.value && ""
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "aria-readonly",
        "aria-disabled",
        "data-readonly",
        "data-disabled"
      ]);
    };
  }
});
var CalendarGrid_default = CalendarGrid_vue_vue_type_script_setup_true_lang_default;
var CalendarGridBody_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarGridBody",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "tbody"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var CalendarGridBody_default = CalendarGridBody_vue_vue_type_script_setup_true_lang_default;
var CalendarGridHead_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarGridHead",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "thead"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, { "aria-hidden": "true" }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var CalendarGridHead_default = CalendarGridHead_vue_vue_type_script_setup_true_lang_default;
var CalendarGridRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarGridRow",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "tr"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var CalendarGridRow_default = CalendarGridRow_vue_vue_type_script_setup_true_lang_default;
var CalendarHeadCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarHeadCell",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "th"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var CalendarHeadCell_default = CalendarHeadCell_vue_vue_type_script_setup_true_lang_default;
var CalendarHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarHeader",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "div"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var CalendarHeader_default = CalendarHeader_vue_vue_type_script_setup_true_lang_default;
var CalendarHeading_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarHeading",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "div"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectCalendarRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, { "data-disabled": unref(rootContext).disabled.value ? "" : void 0 }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { headingValue: unref(rootContext).headingValue.value }, () => [createTextVNode(toDisplayString(unref(rootContext).headingValue.value), 1)])]),
        _: 3
      }, 16, ["data-disabled"]);
    };
  }
});
var CalendarHeading_default = CalendarHeading_vue_vue_type_script_setup_true_lang_default;
var CalendarNext_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarNext",
  props: {
    nextPage: {
      type: Function,
      required: false
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
    const disabled = computed(() => rootContext.disabled.value || rootContext.isNextButtonDisabled(props.nextPage));
    const rootContext = injectCalendarRootContext();
    function handleClick() {
      if (disabled.value) return;
      rootContext.nextPage(props.nextPage);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        as: props.as,
        "as-child": props.asChild,
        "aria-label": "Next page",
        type: props.as === "button" ? "button" : void 0,
        "aria-disabled": disabled.value || void 0,
        "data-disabled": disabled.value || void 0,
        disabled: disabled.value,
        onClick: handleClick
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { disabled: disabled.value }, () => [_cache[0] || (_cache[0] = createTextVNode(" Next page "))])]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "type",
        "aria-disabled",
        "data-disabled",
        "disabled"
      ]);
    };
  }
});
var CalendarNext_default = CalendarNext_vue_vue_type_script_setup_true_lang_default;
var CalendarPrev_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarPrev",
  props: {
    prevPage: {
      type: Function,
      required: false
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
    const disabled = computed(() => rootContext.disabled.value || rootContext.isPrevButtonDisabled(props.prevPage));
    const rootContext = injectCalendarRootContext();
    function handleClick() {
      if (disabled.value) return;
      rootContext.prevPage(props.prevPage);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        "aria-label": "Previous page",
        as: props.as,
        "as-child": props.asChild,
        type: props.as === "button" ? "button" : void 0,
        "aria-disabled": disabled.value || void 0,
        "data-disabled": disabled.value || void 0,
        disabled: disabled.value,
        onClick: handleClick
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { disabled: disabled.value }, () => [_cache[0] || (_cache[0] = createTextVNode(" Prev page "))])]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "type",
        "aria-disabled",
        "data-disabled",
        "disabled"
      ]);
    };
  }
});
var CalendarPrev_default = CalendarPrev_vue_vue_type_script_setup_true_lang_default;
const [injectPopoverRootContext, providePopoverRootContext] = /* @__PURE__ */ createContext("PopoverRoot");
var PopoverRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    modal: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { modal } = toRefs(props);
    const open = useVModel(props, "open", emit, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    const triggerElement = ref();
    const hasCustomAnchor = ref(false);
    providePopoverRootContext({
      contentId: "",
      triggerId: "",
      modal,
      open,
      onOpenChange: (value) => {
        open.value = value;
      },
      onOpenToggle: () => {
        open.value = !open.value;
      },
      triggerElement,
      hasCustomAnchor
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperRoot_default), null, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
          open: unref(open),
          close: () => open.value = false
        })]),
        _: 3
      });
    };
  }
});
var PopoverRoot_default = PopoverRoot_vue_vue_type_script_setup_true_lang_default;
var PopoverAnchor_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverAnchor",
  props: {
    reference: {
      type: null,
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
    useForwardExpose();
    injectPopoverRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperAnchor_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var PopoverAnchor_default = PopoverAnchor_vue_vue_type_script_setup_true_lang_default;
var PopoverArrow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverArrow",
  props: {
    width: {
      type: Number,
      required: false,
      default: 10
    },
    height: {
      type: Number,
      required: false,
      default: 5
    },
    rounded: {
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
      default: "svg"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperArrow_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var PopoverArrow_default = PopoverArrow_vue_vue_type_script_setup_true_lang_default;
var PopoverClose_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverClose",
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
    useForwardExpose();
    const rootContext = injectPopoverRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        type: _ctx.as === "button" ? "button" : void 0,
        as: _ctx.as,
        "as-child": props.asChild,
        onClick: _cache[0] || (_cache[0] = ($event) => unref(rootContext).onOpenChange(false))
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "type",
        "as",
        "as-child"
      ]);
    };
  }
});
var PopoverClose_default = PopoverClose_vue_vue_type_script_setup_true_lang_default;
var PopoverContentImpl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverContentImpl",
  props: {
    trapFocus: {
      type: Boolean,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardProps$1(reactiveOmit$1(props, "trapFocus", "disableOutsidePointerEvents"));
    const { forwardRef } = useForwardExpose();
    const rootContext = injectPopoverRootContext();
    useFocusGuards();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(FocusScope_default), {
        "as-child": "",
        loop: "",
        trapped: _ctx.trapFocus,
        onMountAutoFocus: _cache[5] || (_cache[5] = ($event) => emits("openAutoFocus", $event)),
        onUnmountAutoFocus: _cache[6] || (_cache[6] = ($event) => emits("closeAutoFocus", $event))
      }, {
        default: withCtx(() => [createVNode(unref(DismissableLayer_default), {
          "as-child": "",
          "disable-outside-pointer-events": _ctx.disableOutsidePointerEvents,
          onPointerDownOutside: _cache[0] || (_cache[0] = ($event) => emits("pointerDownOutside", $event)),
          onInteractOutside: _cache[1] || (_cache[1] = ($event) => emits("interactOutside", $event)),
          onEscapeKeyDown: _cache[2] || (_cache[2] = ($event) => emits("escapeKeyDown", $event)),
          onFocusOutside: _cache[3] || (_cache[3] = ($event) => emits("focusOutside", $event)),
          onDismiss: _cache[4] || (_cache[4] = ($event) => unref(rootContext).onOpenChange(false))
        }, {
          default: withCtx(() => [createVNode(unref(PopperContent_default), mergeProps(unref(forwarded), {
            id: unref(rootContext).contentId,
            ref: unref(forwardRef),
            "data-state": unref(rootContext).open.value ? "open" : "closed",
            "aria-labelledby": unref(rootContext).triggerId,
            style: {
              "--reka-popover-content-transform-origin": "var(--reka-popper-transform-origin)",
              "--reka-popover-content-available-width": "var(--reka-popper-available-width)",
              "--reka-popover-content-available-height": "var(--reka-popper-available-height)",
              "--reka-popover-trigger-width": "var(--reka-popper-anchor-width)",
              "--reka-popover-trigger-height": "var(--reka-popper-anchor-height)"
            },
            role: "dialog"
          }), {
            default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
            _: 3
          }, 16, [
            "id",
            "data-state",
            "aria-labelledby"
          ])]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])]),
        _: 3
      }, 8, ["trapped"]);
    };
  }
});
var PopoverContentImpl_default = PopoverContentImpl_vue_vue_type_script_setup_true_lang_default;
var PopoverContentModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverContentModal",
  props: {
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectPopoverRootContext();
    const isRightClickOutsideRef = ref(false);
    useBodyScrollLock(true);
    const forwarded = useForwardPropsEmits(props, emits);
    const { forwardRef, currentElement } = useForwardExpose();
    useHideOthers(currentElement);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(PopoverContentImpl_default, mergeProps(unref(forwarded), {
        ref: unref(forwardRef),
        "trap-focus": unref(rootContext).open.value,
        "disable-outside-pointer-events": "",
        onCloseAutoFocus: _cache[0] || (_cache[0] = withModifiers((event) => {
          emits("closeAutoFocus", event);
          if (!isRightClickOutsideRef.value) unref(rootContext).triggerElement.value?.focus();
        }, ["prevent"])),
        onPointerDownOutside: _cache[1] || (_cache[1] = (event) => {
          emits("pointerDownOutside", event);
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          isRightClickOutsideRef.value = isRightClick;
        }),
        onFocusOutside: _cache[2] || (_cache[2] = withModifiers(() => {
        }, ["prevent"]))
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["trap-focus"]);
    };
  }
});
var PopoverContentModal_default = PopoverContentModal_vue_vue_type_script_setup_true_lang_default;
var PopoverContentNonModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverContentNonModal",
  props: {
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectPopoverRootContext();
    const hasInteractedOutsideRef = ref(false);
    const hasPointerDownOutsideRef = ref(false);
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(PopoverContentImpl_default, mergeProps(unref(forwarded), {
        "trap-focus": false,
        "disable-outside-pointer-events": false,
        onCloseAutoFocus: _cache[0] || (_cache[0] = (event) => {
          emits("closeAutoFocus", event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.value) unref(rootContext).triggerElement.value?.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.value = false;
          hasPointerDownOutsideRef.value = false;
        }),
        onInteractOutside: _cache[1] || (_cache[1] = async (event) => {
          emits("interactOutside", event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.value = true;
            if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.value = true;
          }
          const target = event.target;
          const targetIsTrigger = unref(rootContext).triggerElement.value?.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.value) event.preventDefault();
        })
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var PopoverContentNonModal_default = PopoverContentNonModal_vue_vue_type_script_setup_true_lang_default;
var PopoverContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectPopoverRootContext();
    const forwarded = useForwardPropsEmits(props, emits);
    const { forwardRef } = useForwardExpose();
    rootContext.contentId ||= useId(void 0, "reka-popover-content");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(rootContext).open.value }, {
        default: withCtx(() => [unref(rootContext).modal.value ? (openBlock(), createBlock(PopoverContentModal_default, mergeProps({ key: 0 }, unref(forwarded), { ref: unref(forwardRef) }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16)) : (openBlock(), createBlock(PopoverContentNonModal_default, mergeProps({ key: 1 }, unref(forwarded), { ref: unref(forwardRef) }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16))]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var PopoverContent_default = PopoverContent_vue_vue_type_script_setup_true_lang_default;
var PopoverPortal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverPortal",
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
var PopoverPortal_default = PopoverPortal_vue_vue_type_script_setup_true_lang_default;
var PopoverTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverTrigger",
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
    const rootContext = injectPopoverRootContext();
    const { forwardRef } = useForwardExpose();
    rootContext.triggerId ||= useId(void 0, "reka-popover-trigger");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(unref(rootContext).hasCustomAnchor.value ? unref(Primitive) : unref(PopperAnchor_default)), { "as-child": "" }, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          id: unref(rootContext).triggerId,
          ref: unref(forwardRef),
          type: _ctx.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": unref(rootContext).open.value,
          "aria-controls": unref(rootContext).contentId,
          "data-state": unref(rootContext).open.value ? "open" : "closed",
          as: _ctx.as,
          "as-child": props.asChild,
          onClick: unref(rootContext).onOpenToggle
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "id",
          "type",
          "aria-expanded",
          "aria-controls",
          "data-state",
          "as",
          "as-child",
          "onClick"
        ])]),
        _: 3
      });
    };
  }
});
var PopoverTrigger_default = PopoverTrigger_vue_vue_type_script_setup_true_lang_default;
function useRangeCalendarState(props) {
  const isStartInvalid = computed(() => {
    if (!props.start.value) return false;
    if (props.isDateDisabled(props.start.value)) return true;
    return false;
  });
  const isEndInvalid = computed(() => {
    if (!props.end.value) return false;
    if (props.isDateDisabled(props.end.value)) return true;
    return false;
  });
  const isInvalid = computed(() => {
    if (isStartInvalid.value || isEndInvalid.value) return true;
    if (props.start.value && props.end.value && isBefore(props.end.value, props.start.value)) return true;
    return false;
  });
  const isSelectionStart = (date) => {
    if (!props.start.value) return false;
    return isSameDay(props.start.value, date);
  };
  const isSelectionEnd = (date) => {
    if (!props.end.value) return false;
    return isSameDay(props.end.value, date);
  };
  const isSelected = (date) => {
    if (props.start.value && isSameDay(props.start.value, date)) return true;
    if (props.end.value && isSameDay(props.end.value, date)) return true;
    if (props.end.value && props.start.value) return isBetween(date, props.start.value, props.end.value);
    return false;
  };
  const rangeIsDateDisabled = (date) => {
    if (props.isDateDisabled(date)) return true;
    if (props.maximumDays?.value) {
      if (props.start.value && props.end.value) {
        if (props.fixedDate.value) {
          const diff2 = getDaysBetween(props.start.value, props.end.value).length;
          if (diff2 <= props.maximumDays.value) {
            const daysLeft = props.maximumDays.value - diff2 - 1;
            const startLimit = props.start.value.subtract({ days: daysLeft });
            const endLimit = props.end.value.add({ days: daysLeft });
            return !isBetween(date, startLimit, endLimit);
          }
        }
        return false;
      }
      if (props.start.value) {
        const maxDate = props.start.value.add({ days: props.maximumDays.value });
        const minDate = props.start.value.subtract({ days: props.maximumDays.value });
        return !isBetween(date, minDate, maxDate);
      }
    }
    return false;
  };
  const isDateHighlightable = (date) => {
    if (props.isDateHighlightable?.(date)) return true;
    return false;
  };
  const highlightedRange = computed(() => {
    if (props.start.value && props.end.value && !props.fixedDate.value) return null;
    if (!props.start.value || !props.focusedValue.value) return null;
    const isStartBeforeFocused = isBefore(props.start.value, props.focusedValue.value);
    const start = isStartBeforeFocused ? props.start.value : props.focusedValue.value;
    const end = isStartBeforeFocused ? props.focusedValue.value : props.start.value;
    if (isSameDay(start, end)) return {
      start,
      end
    };
    if (props.maximumDays?.value && !props.end.value) {
      const maximumDays = props.maximumDays.value;
      const anchor = props.start.value;
      const focused = props.focusedValue.value;
      if (!isBefore(focused, anchor)) return {
        start: anchor,
        end: anchor.add({ days: maximumDays - 1 })
      };
      return {
        start: anchor.subtract({ days: maximumDays - 1 }),
        end: anchor
      };
    }
    const isValid = areAllDaysBetweenValid(start, end, props.allowNonContiguousRanges.value ? () => false : props.isDateUnavailable, rangeIsDateDisabled, props.isDateHighlightable);
    if (isValid) return {
      start,
      end
    };
    return null;
  });
  const isHighlightedStart = (date) => {
    if (!highlightedRange.value || !highlightedRange.value.start) return false;
    return isSameDay(highlightedRange.value.start, date);
  };
  const isHighlightedEnd = (date) => {
    if (!highlightedRange.value || !highlightedRange.value.end) return false;
    return isSameDay(highlightedRange.value.end, date);
  };
  const hasSelectedDate = computed(() => {
    return !!(props.start.value || props.end.value);
  });
  const isStartDateDisabled = computed(() => {
    return !!(props.start.value && props.isDateDisabled(props.start.value));
  });
  const isEndDateDisabled = computed(() => {
    return !!(props.end.value && props.isDateDisabled(props.end.value));
  });
  const isSelectedDisabled = computed(() => {
    const hasStart = !!props.start.value;
    const hasEnd = !!props.end.value;
    if (!hasStart && !hasEnd) return false;
    if (hasStart && hasEnd) return isStartDateDisabled.value && isEndDateDisabled.value;
    return hasStart && isStartDateDisabled.value || hasEnd && isEndDateDisabled.value;
  });
  const selectedFocusableDate = computed(() => {
    if (props.start.value && !isStartDateDisabled.value) return props.start.value;
    if (props.end.value && !isEndDateDisabled.value) return props.end.value;
    return void 0;
  });
  return {
    isInvalid,
    isSelected,
    isDateHighlightable,
    highlightedRange,
    isSelectionStart,
    isSelectionEnd,
    isHighlightedStart,
    isHighlightedEnd,
    isDateDisabled: rangeIsDateDisabled,
    hasSelectedDate,
    isSelectedDisabled,
    selectedFocusableDate
  };
}
const _hoisted_1 = { style: {
  "border": "0px",
  "clip": "rect(0px, 0px, 0px, 0px)",
  "clip-path": "inset(50%)",
  "height": "1px",
  "margin": "-1px",
  "overflow": "hidden",
  "padding": "0px",
  "position": "absolute",
  "white-space": "nowrap",
  "width": "1px"
} };
const _hoisted_2 = {
  role: "heading",
  "aria-level": "2"
};
const [injectRangeCalendarRootContext, provideRangeCalendarRootContext] = /* @__PURE__ */ createContext("RangeCalendarRoot");
var RangeCalendarRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarRoot",
  props: {
    defaultPlaceholder: {
      type: null,
      required: false
    },
    defaultValue: {
      type: Object,
      required: false,
      default: () => ({
        start: void 0,
        end: void 0
      })
    },
    modelValue: {
      type: [Object, null],
      required: false
    },
    placeholder: {
      type: null,
      required: false,
      default: void 0
    },
    allowNonContiguousRanges: {
      type: Boolean,
      required: false,
      default: false
    },
    pagedNavigation: {
      type: Boolean,
      required: false,
      default: false
    },
    preventDeselect: {
      type: Boolean,
      required: false,
      default: false
    },
    maximumDays: {
      type: Number,
      required: false,
      default: void 0
    },
    weekStartsOn: {
      type: Number,
      required: false
    },
    weekdayFormat: {
      type: String,
      required: false,
      default: "narrow"
    },
    calendarLabel: {
      type: String,
      required: false
    },
    fixedWeeks: {
      type: Boolean,
      required: false,
      default: false
    },
    maxValue: {
      type: null,
      required: false
    },
    minValue: {
      type: null,
      required: false
    },
    locale: {
      type: String,
      required: false
    },
    numberOfMonths: {
      type: Number,
      required: false,
      default: 1
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false
    },
    initialFocus: {
      type: Boolean,
      required: false,
      default: false
    },
    isDateDisabled: {
      type: Function,
      required: false,
      default: void 0
    },
    isDateUnavailable: {
      type: Function,
      required: false,
      default: void 0
    },
    isDateHighlightable: {
      type: Function,
      required: false,
      default: void 0
    },
    dir: {
      type: String,
      required: false
    },
    nextPage: {
      type: Function,
      required: false
    },
    prevPage: {
      type: Function,
      required: false
    },
    disableDaysOutsideCurrentView: {
      type: Boolean,
      required: false,
      default: false
    },
    fixedDate: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "div"
    }
  },
  emits: [
    "update:modelValue",
    "update:validModelValue",
    "update:placeholder",
    "update:startValue"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { disabled, readonly, initialFocus, pagedNavigation, weekdayFormat, fixedWeeks, numberOfMonths, preventDeselect, isDateUnavailable: propsIsDateUnavailable, isDateHighlightable: propsIsDateHighlightable, isDateDisabled: propsIsDateDisabled, calendarLabel, maxValue, minValue, dir: propDir, locale: propLocale, nextPage: propsNextPage, prevPage: propsPrevPage, allowNonContiguousRanges, disableDaysOutsideCurrentView, fixedDate, maximumDays } = toRefs(props);
    const { primitiveElement, currentElement: parentElement } = usePrimitiveElement();
    const dir = useDirection(propDir);
    const locale = useLocale$1(propLocale);
    const weekStartsOn = computed(() => props.weekStartsOn ?? getWeekStartsOn(locale.value));
    const lastPressedDateValue = ref();
    const focusedValue = ref();
    const isEditing = ref(false);
    const modelValue = useVModel(props, "modelValue", emits, {
      defaultValue: props.defaultValue ?? {
        start: void 0,
        end: void 0
      },
      passive: props.modelValue === void 0
    });
    const normalizeRange = (value) => value ?? {
      start: void 0,
      end: void 0
    };
    const normalizedModelValue = computed(() => normalizeRange(modelValue.value));
    const validModelValue = ref(normalizeRange(modelValue.value));
    watch(validModelValue, (value) => {
      emits("update:validModelValue", value);
    });
    const defaultDate = getDefaultDate({
      defaultPlaceholder: props.placeholder,
      defaultValue: normalizeRange(modelValue.value).start,
      locale: props.locale
    });
    const startValue = ref(normalizeRange(modelValue.value).start);
    const endValue = ref(normalizeRange(modelValue.value).end);
    const placeholder = useVModel(props, "placeholder", emits, {
      defaultValue: props.defaultPlaceholder ?? defaultDate.copy(),
      passive: props.placeholder === void 0
    });
    function onPlaceholderChange(value) {
      placeholder.value = value.copy();
    }
    const { fullCalendarLabel, headingValue, isDateDisabled, isDateUnavailable, isNextButtonDisabled, isPrevButtonDisabled, grid, weekdays, isOutsideVisibleView, nextPage, prevPage, formatter, isPlaceholderFocusable, firstFocusableDate } = useCalendar({
      locale,
      placeholder,
      weekStartsOn,
      fixedWeeks,
      numberOfMonths,
      minValue,
      maxValue,
      disabled,
      weekdayFormat,
      pagedNavigation,
      isDateDisabled: propsIsDateDisabled.value,
      isDateUnavailable: propsIsDateUnavailable.value,
      calendarLabel,
      nextPage: propsNextPage,
      prevPage: propsPrevPage
    });
    const { isInvalid, isSelected, isDateHighlightable, highlightedRange, isSelectionStart, isSelectionEnd, isHighlightedStart, isHighlightedEnd, isDateDisabled: rangeIsDateDisabled, hasSelectedDate, isSelectedDisabled, selectedFocusableDate } = useRangeCalendarState({
      start: startValue,
      end: endValue,
      isDateDisabled,
      isDateUnavailable,
      isDateHighlightable: propsIsDateHighlightable.value,
      focusedValue,
      allowNonContiguousRanges,
      fixedDate,
      maximumDays
    });
    watch(modelValue, (_modelValue) => {
      const next = normalizeRange(_modelValue);
      const isStartSynced = !next.start && !startValue.value || !!next.start && !!startValue.value && isEqualDay(next.start, startValue.value);
      if (!isStartSynced) startValue.value = next.start?.copy?.();
      const isEndSynced = !next.end && !endValue.value || !!next.end && !!endValue.value && isEqualDay(next.end, endValue.value);
      if (!isEndSynced) endValue.value = next.end?.copy?.();
    });
    watch(startValue, (_startValue) => {
      if (_startValue && !isEqualDay(_startValue, placeholder.value)) onPlaceholderChange(_startValue);
      emits("update:startValue", _startValue);
    });
    watch([startValue, endValue], ([_startValue, _endValue]) => {
      const value = modelValue.value;
      if (value && value.start && value.end && _startValue && _endValue && isEqualDay(value.start, _startValue) && isEqualDay(value.end, _endValue)) return;
      isEditing.value = true;
      if (_endValue && _startValue) {
        const nextValue = isBefore(_endValue, _startValue) ? {
          start: _endValue.copy(),
          end: _startValue.copy()
        } : {
          start: _startValue.copy(),
          end: _endValue.copy()
        };
        modelValue.value = {
          start: nextValue.start,
          end: nextValue.end
        };
        isEditing.value = false;
        validModelValue.value = {
          start: nextValue.start.copy(),
          end: nextValue.end.copy()
        };
      } else modelValue.value = _startValue ? {
        start: _startValue.copy(),
        end: void 0
      } : {
        start: _endValue?.copy(),
        end: void 0
      };
    });
    const kbd = useKbd();
    useEventListener(parentElement, "keydown", (ev) => {
      if (ev.key === kbd.ESCAPE && isEditing.value) {
        startValue.value = validModelValue.value.start?.copy();
        endValue.value = validModelValue.value.end?.copy();
      }
    });
    provideRangeCalendarRootContext({
      isDateUnavailable,
      isDateHighlightable,
      startValue,
      endValue,
      formatter,
      modelValue: normalizedModelValue,
      placeholder,
      disabled,
      initialFocus,
      pagedNavigation,
      grid,
      weekDays: weekdays,
      weekStartsOn,
      weekdayFormat,
      fixedWeeks,
      numberOfMonths,
      readonly,
      preventDeselect,
      fullCalendarLabel,
      headingValue,
      isInvalid,
      isDateDisabled: rangeIsDateDisabled,
      allowNonContiguousRanges,
      highlightedRange,
      focusedValue,
      lastPressedDateValue,
      isSelected,
      isSelectionEnd,
      isSelectionStart,
      isNextButtonDisabled,
      isPrevButtonDisabled,
      isOutsideVisibleView,
      nextPage,
      prevPage,
      parentElement,
      onPlaceholderChange,
      locale,
      dir,
      isHighlightedStart,
      isHighlightedEnd,
      disableDaysOutsideCurrentView,
      fixedDate,
      maximumDays,
      minValue,
      maxValue,
      isPlaceholderFocusable,
      firstFocusableDate,
      hasSelectedDate,
      isSelectedDisabled,
      selectedFocusableDate
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref_key: "primitiveElement",
        ref: primitiveElement,
        as: _ctx.as,
        "as-child": _ctx.asChild,
        "aria-label": unref(fullCalendarLabel),
        "data-readonly": unref(readonly) ? "" : void 0,
        "data-disabled": unref(disabled) ? "" : void 0,
        "data-invalid": unref(isInvalid) ? "" : void 0,
        dir: unref(dir)
      }, {
        default: withCtx(() => [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, toDisplayString(unref(fullCalendarLabel)), 1)]), renderSlot(_ctx.$slots, "default", {
          date: unref(placeholder),
          grid: unref(grid),
          weekDays: unref(weekdays),
          weekStartsOn: weekStartsOn.value,
          locale: unref(locale),
          fixedWeeks: unref(fixedWeeks),
          modelValue: normalizedModelValue.value
        })]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "aria-label",
        "data-readonly",
        "data-disabled",
        "data-invalid",
        "dir"
      ]);
    };
  }
});
var RangeCalendarRoot_default = RangeCalendarRoot_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarCell",
  props: {
    date: {
      type: null,
      required: true
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "td"
    }
  },
  setup(__props) {
    const rootContext = injectRangeCalendarRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        as: _ctx.as,
        "as-child": _ctx.asChild,
        role: "gridcell",
        "aria-selected": unref(rootContext).isSelected(_ctx.date) ? true : void 0,
        "aria-disabled": unref(rootContext).isDateDisabled(_ctx.date) || unref(rootContext).isDateUnavailable?.(_ctx.date) || unref(rootContext).disableDaysOutsideCurrentView.value,
        "data-disabled": unref(rootContext).isDateDisabled(_ctx.date) || unref(rootContext).disableDaysOutsideCurrentView.value ? "" : void 0
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "aria-selected",
        "aria-disabled",
        "data-disabled"
      ]);
    };
  }
});
var RangeCalendarCell_default = RangeCalendarCell_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarCellTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {
      type: null,
      required: true
    },
    month: {
      type: null,
      required: true
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "div"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectRangeCalendarRootContext();
    const kbd = useKbd();
    const { primitiveElement } = usePrimitiveElement();
    const labelText = computed(() => rootContext.formatter.custom(toDate(props.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    }));
    const isUnavailable = computed(() => rootContext.isDateUnavailable?.(props.day) ?? false);
    const isSelectedDate = computed(() => rootContext.isSelected(props.day));
    const isSelectionStart = computed(() => rootContext.isSelectionStart(props.day));
    const isSelectionEnd = computed(() => rootContext.isSelectionEnd(props.day));
    const isHighlightStart = computed(() => rootContext.isHighlightedStart(props.day));
    const isHighlightEnd = computed(() => rootContext.isHighlightedEnd(props.day));
    const isHighlighted = computed(() => rootContext.highlightedRange.value ? isBetweenInclusive(props.day, rootContext.highlightedRange.value.start, rootContext.highlightedRange.value.end) : false);
    const allowNonContiguousRanges = computed(() => rootContext.allowNonContiguousRanges.value);
    const isDateToday = computed(() => {
      return isToday(props.day, getLocalTimeZone());
    });
    const isOutsideView = computed(() => {
      return !isSameMonth(props.day, props.month);
    });
    const isOutsideVisibleView = computed(() => rootContext.isOutsideVisibleView(props.day));
    const isDisabled = computed(() => rootContext.isDateDisabled(props.day) || rootContext.disableDaysOutsideCurrentView.value && isOutsideView.value);
    const dayValue = computed(() => props.day.day.toLocaleString(rootContext.locale.value));
    const isFocusedDate = computed(() => {
      if (isOutsideView.value || isDisabled.value) return false;
      if (!rootContext.disabled.value && rootContext.isPlaceholderFocusable.value && isSameDay(props.day, rootContext.placeholder.value)) return true;
      if (!rootContext.disabled.value && rootContext.selectedFocusableDate.value && !rootContext.isPlaceholderFocusable.value) return isSameDay(props.day, rootContext.selectedFocusableDate.value);
      if (!rootContext.disabled.value && (!rootContext.hasSelectedDate.value || rootContext.isSelectedDisabled.value) && !rootContext.isPlaceholderFocusable.value) return rootContext.firstFocusableDate.value && isSameDay(props.day, rootContext.firstFocusableDate.value);
      return false;
    });
    function changeDate(e, date) {
      if (rootContext.readonly.value) return;
      if (rootContext.isDateDisabled(date) || rootContext.isDateUnavailable?.(date)) return;
      if (rootContext.startValue.value && rootContext.highlightedRange.value === null) {
        if (isSameDay(date, rootContext.startValue.value) && !rootContext.preventDeselect.value && !rootContext.endValue.value) {
          rootContext.startValue.value = void 0;
          rootContext.onPlaceholderChange(date);
          rootContext.lastPressedDateValue.value = date.copy();
          return;
        } else if (!rootContext.endValue.value) {
          e.preventDefault();
          if (rootContext.lastPressedDateValue.value && isSameDay(rootContext.lastPressedDateValue.value, date)) rootContext.startValue.value = date.copy();
          rootContext.lastPressedDateValue.value = date.copy();
          return;
        }
      }
      rootContext.lastPressedDateValue.value = date.copy();
      if (rootContext.startValue.value && rootContext.endValue.value && isSameDay(rootContext.startValue.value, rootContext.endValue.value) && isSameDay(rootContext.startValue.value, date) && !rootContext.preventDeselect.value) {
        rootContext.startValue.value = void 0;
        rootContext.endValue.value = void 0;
        rootContext.onPlaceholderChange(date);
        return;
      }
      if (!rootContext.startValue.value) rootContext.startValue.value = date.copy();
      else if (!rootContext.endValue.value) rootContext.endValue.value = date.copy();
      else if (rootContext.endValue.value && rootContext.startValue.value) {
        if (!rootContext.fixedDate.value) {
          rootContext.endValue.value = void 0;
          rootContext.startValue.value = date.copy();
        } else if (rootContext.fixedDate.value === "start") if (date.compare(rootContext.startValue.value) < 0) rootContext.startValue.value = date.copy();
        else rootContext.endValue.value = date.copy();
        else if (rootContext.fixedDate.value === "end") if (date.compare(rootContext.endValue.value) > 0) rootContext.endValue.value = date.copy();
        else rootContext.startValue.value = date.copy();
      }
    }
    function handleClick(e) {
      if (isDisabled.value) return;
      changeDate(e, props.day);
    }
    function handleFocus() {
      if (isDisabled.value || rootContext.isDateUnavailable?.(props.day)) return;
      rootContext.focusedValue.value = props.day.copy();
    }
    function handleArrowKey(e) {
      if (isDisabled.value) return;
      e.preventDefault();
      e.stopPropagation();
      const parentElement = rootContext.parentElement.value;
      const indexIncrementation = 7;
      const sign = rootContext.dir.value === "rtl" ? -1 : 1;
      switch (e.code) {
        case kbd.ARROW_RIGHT:
          shiftFocus(props.day, sign);
          break;
        case kbd.ARROW_LEFT:
          shiftFocus(props.day, -sign);
          break;
        case kbd.ARROW_UP:
          shiftFocus(props.day, -indexIncrementation);
          break;
        case kbd.ARROW_DOWN:
          shiftFocus(props.day, indexIncrementation);
          break;
        case kbd.ENTER:
        case kbd.SPACE_CODE:
          changeDate(e, props.day);
      }
      function shiftFocus(day, add) {
        const candidateDayValue = day.add({ days: add });
        if (rootContext.minValue.value && candidateDayValue.compare(rootContext.minValue.value) < 0 || rootContext.maxValue.value && candidateDayValue.compare(rootContext.maxValue.value) > 0) return;
        const candidateDay = parentElement.querySelector(`[data-value='${candidateDayValue.toString()}']:not([data-outside-view])`);
        if (!candidateDay) {
          if (add > 0) {
            if (rootContext.isNextButtonDisabled()) return;
            rootContext.nextPage();
          } else {
            if (rootContext.isPrevButtonDisabled()) return;
            rootContext.prevPage();
          }
          nextTick(() => {
            shiftFocus(day, add);
          });
          return;
        }
        if (candidateDay && candidateDay.hasAttribute("data-disabled")) return shiftFocus(candidateDayValue, add);
        rootContext.onPlaceholderChange(candidateDayValue);
        candidateDay?.focus();
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref_key: "primitiveElement",
        ref: primitiveElement,
        as: _ctx.as,
        "as-child": _ctx.asChild,
        role: "button",
        "aria-label": labelText.value,
        "data-reka-calendar-cell-trigger": "",
        "aria-pressed": isSelectedDate.value && (allowNonContiguousRanges.value || !isUnavailable.value) ? true : void 0,
        "aria-disabled": isDisabled.value || isUnavailable.value ? true : void 0,
        "data-highlighted": isHighlighted.value && (allowNonContiguousRanges.value || !isUnavailable.value) ? "" : void 0,
        "data-selection-start": isSelectionStart.value ? true : void 0,
        "data-selection-end": isSelectionEnd.value ? true : void 0,
        "data-highlighted-start": isHighlightStart.value ? true : void 0,
        "data-highlighted-end": isHighlightEnd.value ? true : void 0,
        "data-selected": isSelectedDate.value && (allowNonContiguousRanges.value || !isUnavailable.value) ? true : void 0,
        "data-outside-visible-view": isOutsideVisibleView.value ? "" : void 0,
        "data-value": _ctx.day.toString(),
        "data-disabled": isDisabled.value ? "" : void 0,
        "data-unavailable": isUnavailable.value ? "" : void 0,
        "data-today": isDateToday.value ? "" : void 0,
        "data-outside-view": isOutsideView.value ? "" : void 0,
        "data-focused": isFocusedDate.value ? "" : void 0,
        tabindex: isFocusedDate.value ? 0 : isOutsideView.value || isDisabled.value ? void 0 : -1,
        onClick: handleClick,
        onFocusin: handleFocus,
        onMouseenter: handleFocus,
        onKeydown: withKeys(handleArrowKey, [
          "up",
          "down",
          "left",
          "right",
          "enter",
          "space"
        ])
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
          dayValue: dayValue.value,
          disabled: isDisabled.value,
          today: isDateToday.value,
          selected: isSelectedDate.value,
          outsideView: isOutsideView.value,
          outsideVisibleView: isOutsideVisibleView.value,
          unavailable: isUnavailable.value,
          highlighted: isHighlighted.value && (allowNonContiguousRanges.value || !isUnavailable.value),
          highlightedStart: isHighlightStart.value,
          highlightedEnd: isHighlightEnd.value,
          selectionStart: isSelectionStart.value,
          selectionEnd: isSelectionEnd.value
        }, () => [createTextVNode(toDisplayString(dayValue.value), 1)])]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "aria-label",
        "aria-pressed",
        "aria-disabled",
        "data-highlighted",
        "data-selection-start",
        "data-selection-end",
        "data-highlighted-start",
        "data-highlighted-end",
        "data-selected",
        "data-outside-visible-view",
        "data-value",
        "data-disabled",
        "data-unavailable",
        "data-today",
        "data-outside-view",
        "data-focused",
        "tabindex"
      ]);
    };
  }
});
var RangeCalendarCellTrigger_default = RangeCalendarCellTrigger_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarGrid_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarGrid",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "table"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectRangeCalendarRootContext();
    const disabled = computed(() => rootContext.disabled.value ? true : void 0);
    const readonly = computed(() => rootContext.readonly.value ? true : void 0);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
        tabindex: "-1",
        role: "application",
        "aria-readonly": readonly.value,
        "aria-disabled": disabled.value,
        "data-readonly": readonly.value && "",
        "data-disabled": disabled.value && "",
        onMouseleave: _cache[0] || (_cache[0] = ($event) => unref(rootContext).focusedValue.value = void 0)
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "aria-readonly",
        "aria-disabled",
        "data-readonly",
        "data-disabled"
      ]);
    };
  }
});
var RangeCalendarGrid_default = RangeCalendarGrid_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarGridBody_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "tbody"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var RangeCalendarGridBody_default = RangeCalendarGridBody_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarGridHead_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "thead"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, { "aria-hidden": "true" }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var RangeCalendarGridHead_default = RangeCalendarGridHead_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarGridRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "tr"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var RangeCalendarGridRow_default = RangeCalendarGridRow_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarHeadCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "th"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var RangeCalendarHeadCell_default = RangeCalendarHeadCell_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarHeader",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "div"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var RangeCalendarHeader_default = RangeCalendarHeader_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarHeading_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarHeading",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "div"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectRangeCalendarRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, { "data-disabled": unref(rootContext).disabled.value ? "" : void 0 }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { headingValue: unref(rootContext).headingValue.value }, () => [createTextVNode(toDisplayString(unref(rootContext).headingValue.value), 1)])]),
        _: 3
      }, 16, ["data-disabled"]);
    };
  }
});
var RangeCalendarHeading_default = RangeCalendarHeading_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarNext_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarNext",
  props: {
    nextPage: {
      type: Function,
      required: false
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
    const disabled = computed(() => rootContext.disabled.value || rootContext.isNextButtonDisabled(props.nextPage));
    const rootContext = injectRangeCalendarRootContext();
    function handleClick() {
      if (disabled.value) return;
      rootContext.nextPage(props.nextPage);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        as: props.as,
        "as-child": props.asChild,
        "aria-label": "Next page",
        type: props.as === "button" ? "button" : void 0,
        "aria-disabled": disabled.value || void 0,
        "data-disabled": disabled.value || void 0,
        disabled: disabled.value,
        onClick: handleClick
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { disabled: disabled.value }, () => [_cache[0] || (_cache[0] = createTextVNode(" Next page "))])]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "type",
        "aria-disabled",
        "data-disabled",
        "disabled"
      ]);
    };
  }
});
var RangeCalendarNext_default = RangeCalendarNext_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarPrev_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarPrev",
  props: {
    prevPage: {
      type: Function,
      required: false
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
    const disabled = computed(() => rootContext.disabled.value || rootContext.isPrevButtonDisabled(props.prevPage));
    const rootContext = injectRangeCalendarRootContext();
    function handleClick() {
      if (disabled.value) return;
      rootContext.prevPage(props.prevPage);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        as: props.as,
        "as-child": props.asChild,
        "aria-label": "Previous page",
        type: props.as === "button" ? "button" : void 0,
        "aria-disabled": disabled.value || void 0,
        "data-disabled": disabled.value || void 0,
        disabled: disabled.value,
        onClick: handleClick
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { disabled: disabled.value }, () => [_cache[0] || (_cache[0] = createTextVNode(" Prev page "))])]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "type",
        "aria-disabled",
        "data-disabled",
        "disabled"
      ]);
    };
  }
});
var RangeCalendarPrev_default = RangeCalendarPrev_vue_vue_type_script_setup_true_lang_default;
var HoverCardArrow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardArrow",
  props: {
    width: {
      type: Number,
      required: false,
      default: 10
    },
    height: {
      type: Number,
      required: false,
      default: 5
    },
    rounded: {
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
      default: "svg"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperArrow_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var HoverCardArrow_default = HoverCardArrow_vue_vue_type_script_setup_true_lang_default;
const [injectHoverCardRootContext, provideHoverCardRootContext] = /* @__PURE__ */ createContext("HoverCardRoot");
var HoverCardRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    openDelay: {
      type: Number,
      required: false,
      default: 700
    },
    closeDelay: {
      type: Number,
      required: false,
      default: 300
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { openDelay, closeDelay } = toRefs(props);
    useForwardExpose();
    const open = useVModel(props, "open", emit, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    const openTimerRef = ref(0);
    const closeTimerRef = ref(0);
    const hasSelectionRef = ref(false);
    const isPointerDownOnContentRef = ref(false);
    const isPointerInTransitRef = ref(false);
    const triggerElement = ref();
    function handleOpen() {
      clearTimeout(closeTimerRef.value);
      openTimerRef.value = (void 0).setTimeout(() => open.value = true, openDelay.value);
    }
    function handleClose() {
      clearTimeout(openTimerRef.value);
      if (!hasSelectionRef.value && !isPointerDownOnContentRef.value) closeTimerRef.value = (void 0).setTimeout(() => open.value = false, closeDelay.value);
    }
    function handleDismiss() {
      open.value = false;
    }
    provideHoverCardRootContext({
      open,
      onOpenChange(value) {
        open.value = value;
      },
      onOpen: handleOpen,
      onClose: handleClose,
      onDismiss: handleDismiss,
      hasSelectionRef,
      isPointerDownOnContentRef,
      isPointerInTransitRef,
      triggerElement
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperRoot_default), null, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open: unref(open) })]),
        _: 3
      });
    };
  }
});
var HoverCardRoot_default = HoverCardRoot_vue_vue_type_script_setup_true_lang_default;
function excludeTouch(eventHandler) {
  return (event) => event.pointerType === "touch" ? void 0 : eventHandler();
}
var HoverCardContentImpl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardContentImpl",
  props: {
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
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
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardProps$1(props);
    const { forwardRef, currentElement: contentElement } = useForwardExpose();
    const rootContext = injectHoverCardRootContext();
    const { isPointerInTransit, onPointerExit } = useGraceArea(rootContext.triggerElement, contentElement);
    syncRef(rootContext.isPointerInTransitRef, isPointerInTransit, { direction: "rtl" });
    onPointerExit(() => {
      rootContext.onClose();
    });
    const containSelection = ref(false);
    let originalBodyUserSelect;
    watchEffect((cleanupFn) => {
      if (containSelection.value) {
        const body = (void 0).body;
        originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
        body.style.userSelect = "none";
        body.style.webkitUserSelect = "none";
        cleanupFn(() => {
          body.style.userSelect = originalBodyUserSelect;
          body.style.webkitUserSelect = originalBodyUserSelect;
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(DismissableLayer_default), {
        "as-child": "",
        "disable-outside-pointer-events": false,
        onEscapeKeyDown: _cache[1] || (_cache[1] = ($event) => emits("escapeKeyDown", $event)),
        onPointerDownOutside: _cache[2] || (_cache[2] = ($event) => emits("pointerDownOutside", $event)),
        onFocusOutside: _cache[3] || (_cache[3] = withModifiers(($event) => emits("focusOutside", $event), ["prevent"])),
        onDismiss: unref(rootContext).onDismiss
      }, {
        default: withCtx(() => [createVNode(unref(PopperContent_default), mergeProps({
          ...unref(forwarded),
          ..._ctx.$attrs
        }, {
          ref: unref(forwardRef),
          "data-state": unref(rootContext).open.value ? "open" : "closed",
          style: {
            "userSelect": containSelection.value ? "text" : void 0,
            "WebkitUserSelect": containSelection.value ? "text" : void 0,
            "--reka-hover-card-content-transform-origin": "var(--reka-popper-transform-origin)",
            "--reka-hover-card-content-available-width": "var(--reka-popper-available-width)",
            "--reka-hover-card-content-available-height": "var(--reka-popper-available-height)",
            "--reka-hover-card-trigger-width": "var(--reka-popper-anchor-width)",
            "--reka-hover-card-trigger-height": "var(--reka-popper-anchor-height)"
          },
          onPointerdown: _cache[0] || (_cache[0] = (event) => {
            if (event.currentTarget.contains(event.target)) containSelection.value = true;
            unref(rootContext).hasSelectionRef.value = false;
            unref(rootContext).isPointerDownOnContentRef.value = true;
          })
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, ["data-state", "style"])]),
        _: 3
      }, 8, ["onDismiss"]);
    };
  }
});
var HoverCardContentImpl_default = HoverCardContentImpl_vue_vue_type_script_setup_true_lang_default;
var HoverCardContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
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
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    const { forwardRef } = useForwardExpose();
    const rootContext = injectHoverCardRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(rootContext).open.value }, {
        default: withCtx(() => [createVNode(HoverCardContentImpl_default, mergeProps(unref(forwarded), {
          ref: unref(forwardRef),
          onPointerenter: _cache[0] || (_cache[0] = ($event) => unref(excludeTouch)(unref(rootContext).onOpen)($event))
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16)]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var HoverCardContent_default = HoverCardContent_vue_vue_type_script_setup_true_lang_default;
var HoverCardPortal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardPortal",
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
var HoverCardPortal_default = HoverCardPortal_vue_vue_type_script_setup_true_lang_default;
var HoverCardTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardTrigger",
  props: {
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "a"
    }
  },
  setup(__props) {
    const { forwardRef, currentElement } = useForwardExpose();
    const rootContext = injectHoverCardRootContext();
    rootContext.triggerElement = currentElement;
    function handleLeave() {
      setTimeout(() => {
        if (!rootContext.isPointerInTransitRef.value && !rootContext.open.value) rootContext.onClose();
      }, 0);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperAnchor_default), {
        "as-child": "",
        reference: _ctx.reference
      }, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          ref: unref(forwardRef),
          "as-child": _ctx.asChild,
          as: _ctx.as,
          "data-state": unref(rootContext).open.value ? "open" : "closed",
          "data-grace-area-trigger": "",
          onPointerenter: _cache[0] || (_cache[0] = ($event) => unref(excludeTouch)(unref(rootContext).onOpen)($event)),
          onPointerleave: _cache[1] || (_cache[1] = ($event) => unref(excludeTouch)(handleLeave)($event)),
          onFocus: _cache[2] || (_cache[2] = ($event) => unref(rootContext).onOpen()),
          onBlur: _cache[3] || (_cache[3] = ($event) => unref(rootContext).onClose())
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "as-child",
          "as",
          "data-state"
        ])]),
        _: 3
      }, 8, ["reference"]);
    };
  }
});
var HoverCardTrigger_default = HoverCardTrigger_vue_vue_type_script_setup_true_lang_default;
var Label_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "Label",
  props: {
    for: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "label"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, { onMousedown: _cache[0] || (_cache[0] = (event) => {
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }) }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var Label_default = Label_vue_vue_type_script_setup_true_lang_default;
const DEFAULT_MAX = 100;
const [injectProgressRootContext, provideProgressRootContext] = /* @__PURE__ */ createContext("ProgressRoot");
const isNumber = (v) => typeof v === "number";
function validateValue(value, max) {
  const isValidValueError = isNullish(value) || isNumber(value) && !Number.isNaN(value) && value <= max && value >= 0;
  if (isValidValueError) return value;
  console.error(`Invalid prop \`value\` of value \`${value}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`);
  return null;
}
function validateMax(max) {
  const isValidMaxError = isNumber(max) && !Number.isNaN(max) && max > 0;
  if (isValidMaxError) return max;
  console.error(`Invalid prop \`max\` of value \`${max}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`);
  return DEFAULT_MAX;
}
var ProgressRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ProgressRoot",
  props: {
    modelValue: {
      type: [Number, null],
      required: false
    },
    max: {
      type: Number,
      required: false,
      default: DEFAULT_MAX
    },
    getValueLabel: {
      type: Function,
      required: false,
      default: (value, max) => isNumber(value) ? `${Math.round(value / max * DEFAULT_MAX)}%` : void 0
    },
    getValueText: {
      type: Function,
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
  emits: ["update:modelValue", "update:max"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    useForwardExpose();
    const modelValue = useVModel(props, "modelValue", emit, { passive: props.modelValue === void 0 });
    const max = useVModel(props, "max", emit, { passive: props.max === void 0 });
    watch(() => modelValue.value, async (value) => {
      const correctedValue = validateValue(value, props.max);
      if (correctedValue !== value) {
        await nextTick();
        modelValue.value = correctedValue;
      }
    }, { immediate: true });
    watch(() => props.max, (newMax) => {
      const correctedMax = validateMax(props.max);
      if (correctedMax !== newMax) max.value = correctedMax;
    }, { immediate: true });
    const progressState = computed(() => {
      if (isNullish(modelValue.value)) return "indeterminate";
      if (modelValue.value === max.value) return "complete";
      return "loading";
    });
    provideProgressRootContext({
      modelValue,
      max,
      progressState
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        "as-child": _ctx.asChild,
        as: _ctx.as,
        "aria-valuemax": unref(max),
        "aria-valuemin": 0,
        "aria-valuenow": isNumber(unref(modelValue)) ? unref(modelValue) : void 0,
        "aria-valuetext": _ctx.getValueText?.(unref(modelValue), unref(max)),
        "aria-label": _ctx.getValueLabel(unref(modelValue), unref(max)),
        role: "progressbar",
        "data-state": progressState.value,
        "data-value": unref(modelValue) ?? void 0,
        "data-max": unref(max)
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) })]),
        _: 3
      }, 8, [
        "as-child",
        "as",
        "aria-valuemax",
        "aria-valuenow",
        "aria-valuetext",
        "aria-label",
        "data-state",
        "data-value",
        "data-max"
      ]);
    };
  }
});
var ProgressRoot_default = ProgressRoot_vue_vue_type_script_setup_true_lang_default;
var ProgressIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ProgressIndicator",
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
  setup(__props) {
    const props = __props;
    const rootContext = injectProgressRootContext();
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
        "data-state": unref(rootContext).progressState.value,
        "data-value": unref(rootContext).modelValue?.value ?? void 0,
        "data-max": unref(rootContext).max.value
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "data-state",
        "data-value",
        "data-max"
      ]);
    };
  }
});
var ProgressIndicator_default = ProgressIndicator_vue_vue_type_script_setup_true_lang_default;
var ToastAnnounceExclude_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {
      type: String,
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
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        as: _ctx.as,
        "as-child": _ctx.asChild,
        "data-reka-toast-announce-exclude": "",
        "data-reka-toast-announce-alt": _ctx.altText || void 0
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "data-reka-toast-announce-alt"
      ]);
    };
  }
});
var ToastAnnounceExclude_default = ToastAnnounceExclude_vue_vue_type_script_setup_true_lang_default;
const [injectToastProviderContext, provideToastProviderContext] = /* @__PURE__ */ createContext("ToastProvider");
var ToastProvider_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "ToastProvider",
  props: {
    label: {
      type: String,
      required: false,
      default: "Notification"
    },
    duration: {
      type: Number,
      required: false,
      default: 5e3
    },
    disableSwipe: {
      type: Boolean,
      required: false
    },
    swipeDirection: {
      type: String,
      required: false,
      default: "right"
    },
    swipeThreshold: {
      type: Number,
      required: false,
      default: 50
    }
  },
  setup(__props) {
    const props = __props;
    const { label, duration, disableSwipe, swipeDirection, swipeThreshold } = toRefs(props);
    useCollection({ isProvider: true });
    const viewport = ref();
    const toastCount = ref(0);
    const isFocusedToastEscapeKeyDownRef = ref(false);
    const isClosePausedRef = ref(false);
    if (props.label && typeof props.label === "string" && !props.label.trim()) {
      const error = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(error);
    }
    provideToastProviderContext({
      label,
      duration,
      disableSwipe,
      swipeDirection,
      swipeThreshold,
      toastCount,
      viewport,
      onViewportChange(el) {
        viewport.value = el;
      },
      onToastAdd() {
        toastCount.value++;
      },
      onToastRemove() {
        toastCount.value--;
      },
      isFocusedToastEscapeKeyDownRef,
      isClosePausedRef
    });
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var ToastProvider_default = ToastProvider_vue_vue_type_script_setup_true_lang_default;
var ToastAnnounce_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ToastAnnounce",
  setup(__props) {
    const providerContext = injectToastProviderContext();
    const isAnnounced = useTimeout(1e3);
    const renderAnnounceText = ref(false);
    let raf1 = 0;
    let raf2 = 0;
    if (isClient) {
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          renderAnnounceText.value = true;
        });
      });
      onScopeDispose(() => {
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
      });
    }
    return (_ctx, _cache) => {
      return unref(isAnnounced) || renderAnnounceText.value ? (openBlock(), createBlock(unref(VisuallyHidden_default), {
        key: 0,
        feature: "fully-hidden"
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(unref(providerContext).label.value) + " ", 1), renderSlot(_ctx.$slots, "default")]),
        _: 3
      })) : createCommentVNode("v-if", true);
    };
  }
});
var ToastAnnounce_default = ToastAnnounce_vue_vue_type_script_setup_true_lang_default;
const TOAST_SWIPE_START = "toast.swipeStart";
const TOAST_SWIPE_MOVE = "toast.swipeMove";
const TOAST_SWIPE_CANCEL = "toast.swipeCancel";
const TOAST_SWIPE_END = "toast.swipeEnd";
const VIEWPORT_PAUSE = "toast.viewportPause";
const VIEWPORT_RESUME = "toast.viewportResume";
function handleAndDispatchCustomEvent(name, handler, detail) {
  const currentTarget = detail.originalEvent.currentTarget;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler) currentTarget.addEventListener(name, handler, { once: true });
  currentTarget.dispatchEvent(event);
}
function isDeltaInDirection(delta, direction, threshold = 0) {
  const deltaX = Math.abs(delta.x);
  const deltaY = Math.abs(delta.y);
  const isDeltaX = deltaX > deltaY;
  if (direction === "left" || direction === "right") return isDeltaX && deltaX > threshold;
  else return !isDeltaX && deltaY > threshold;
}
function isHTMLElement(node) {
  return node.nodeType === node.ELEMENT_NODE;
}
function getAnnounceTextContent(container) {
  const textContent = [];
  const childNodes = Array.from(container.childNodes);
  childNodes.forEach((node) => {
    if (node.nodeType === node.TEXT_NODE && node.textContent) textContent.push(node.textContent);
    if (isHTMLElement(node)) {
      const isHidden2 = node.ariaHidden || node.hidden || node.style.display === "none";
      const isExcluded = node.dataset.rekaToastAnnounceExclude === "";
      if (!isHidden2) if (isExcluded) {
        const altText = node.dataset.rekaToastAnnounceAlt;
        if (altText) textContent.push(altText);
      } else textContent.push(...getAnnounceTextContent(node));
    }
  });
  return textContent;
}
const [injectToastRootContext, provideToastRootContext] = /* @__PURE__ */ createContext("ToastRoot");
var ToastRootImpl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "ToastRootImpl",
  props: {
    type: {
      type: String,
      required: false
    },
    open: {
      type: Boolean,
      required: false,
      default: false
    },
    duration: {
      type: Number,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "li"
    }
  },
  emits: [
    "close",
    "escapeKeyDown",
    "pause",
    "resume",
    "swipeStart",
    "swipeMove",
    "swipeCancel",
    "swipeEnd"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { forwardRef, currentElement } = useForwardExpose();
    const { CollectionItem } = useCollection();
    const providerContext = injectToastProviderContext();
    const pointerStartRef = ref(null);
    const swipeDeltaRef = ref(null);
    const duration = computed(() => typeof props.duration === "number" ? props.duration : providerContext.duration.value);
    const closeTimerStartTimeRef = ref(0);
    const closeTimerRemainingTimeRef = ref(duration.value);
    const closeTimerRef = ref(0);
    const remainingTime = ref(duration.value);
    const remainingRaf = useRafFn(() => {
      const elapsedTime = Date.now() - closeTimerStartTimeRef.value;
      remainingTime.value = Math.max(closeTimerRemainingTimeRef.value - elapsedTime, 0);
    }, { fpsLimit: 60 });
    function startTimer(duration$1) {
      if (duration$1 <= 0 || duration$1 === Number.POSITIVE_INFINITY) return;
      if (!isClient) return;
      (void 0).clearTimeout(closeTimerRef.value);
      closeTimerStartTimeRef.value = Date.now();
      closeTimerRef.value = (void 0).setTimeout(handleClose, duration$1);
    }
    function handleClose(event) {
      const isNonPointerEvent = event?.pointerType === "";
      const isFocusInToast = currentElement.value?.contains(getActiveElement());
      if (isFocusInToast && isNonPointerEvent) providerContext.viewport.value?.focus();
      if (isNonPointerEvent) providerContext.isClosePausedRef.value = false;
      emits("close");
    }
    const announceTextContent = computed(() => currentElement.value ? getAnnounceTextContent(currentElement.value) : null);
    if (props.type && !["foreground", "background"].includes(props.type)) {
      const error = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(error);
    }
    watchEffect((cleanupFn) => {
      const viewport = providerContext.viewport.value;
      if (viewport) {
        const handleResume = () => {
          startTimer(closeTimerRemainingTimeRef.value);
          remainingRaf.resume();
          emits("resume");
        };
        const handlePause = () => {
          const elapsedTime = Date.now() - closeTimerStartTimeRef.value;
          closeTimerRemainingTimeRef.value = closeTimerRemainingTimeRef.value - elapsedTime;
          (void 0).clearTimeout(closeTimerRef.value);
          remainingRaf.pause();
          emits("pause");
        };
        viewport.addEventListener(VIEWPORT_PAUSE, handlePause);
        viewport.addEventListener(VIEWPORT_RESUME, handleResume);
        return () => {
          viewport.removeEventListener(VIEWPORT_PAUSE, handlePause);
          viewport.removeEventListener(VIEWPORT_RESUME, handleResume);
        };
      }
    });
    watch(() => [props.open, duration.value], () => {
      closeTimerRemainingTimeRef.value = duration.value;
      if (props.open && !providerContext.isClosePausedRef.value) startTimer(duration.value);
    }, { immediate: true });
    onKeyStroke("Escape", (event) => {
      emits("escapeKeyDown", event);
      if (!event.defaultPrevented) {
        providerContext.isFocusedToastEscapeKeyDownRef.value = true;
        handleClose();
      }
    });
    provideToastRootContext({ onClose: handleClose });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [announceTextContent.value ? (openBlock(), createBlock(ToastAnnounce_default, {
        key: 0,
        role: "alert",
        "aria-live": _ctx.type === "foreground" ? "assertive" : "polite"
      }, {
        default: withCtx(() => [createCommentVNode("\n      Render each chunk as its own text node so screen readers get the\n      natural pause break between nodes (see comment in utils.ts).\n      Interpolating the array directly with `{{ announceTextContent }}`\n      would route through Vue's `toDisplayString`, which JSON-stringifies\n      arrays — the live region would then announce literal `[`, quotes\n      and commas instead of the toast title and description.\n    "), (openBlock(true), createElementBlock(Fragment, null, renderList(announceTextContent.value, (text, i) => {
          return openBlock(), createElementBlock(Fragment, { key: i }, [createTextVNode(toDisplayString(text), 1)], 64);
        }), 128))]),
        _: 1
      }, 8, ["aria-live"])) : createCommentVNode("v-if", true), unref(providerContext).viewport.value ? (openBlock(), createBlock(Teleport, {
        key: 1,
        to: unref(providerContext).viewport.value
      }, [createVNode(unref(CollectionItem), null, {
        default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
          ref: unref(forwardRef),
          tabindex: "0"
        }, _ctx.$attrs, {
          as: _ctx.as,
          "as-child": _ctx.asChild,
          "data-state": _ctx.open ? "open" : "closed",
          "data-swipe-direction": unref(providerContext).swipeDirection.value,
          style: unref(providerContext).disableSwipe.value ? void 0 : {
            userSelect: "none",
            touchAction: "none"
          },
          onPointerdown: _cache[0] || (_cache[0] = withModifiers((event) => {
            if (unref(providerContext).disableSwipe.value) return;
            pointerStartRef.value = {
              x: event.clientX,
              y: event.clientY
            };
          }, ["left"])),
          onPointermove: _cache[1] || (_cache[1] = (event) => {
            if (unref(providerContext).disableSwipe.value || !pointerStartRef.value) return;
            const x = event.clientX - pointerStartRef.value.x;
            const y = event.clientY - pointerStartRef.value.y;
            const hasSwipeMoveStarted = Boolean(swipeDeltaRef.value);
            const isHorizontalSwipe = ["left", "right"].includes(unref(providerContext).swipeDirection.value);
            const clamp = ["left", "up"].includes(unref(providerContext).swipeDirection.value) ? Math.min : Math.max;
            const clampedX = isHorizontalSwipe ? clamp(0, x) : 0;
            const clampedY = !isHorizontalSwipe ? clamp(0, y) : 0;
            const moveStartBuffer = event.pointerType === "touch" ? 10 : 2;
            const delta = {
              x: clampedX,
              y: clampedY
            };
            const eventDetail = {
              originalEvent: event,
              delta
            };
            if (hasSwipeMoveStarted) {
              swipeDeltaRef.value = delta;
              unref(handleAndDispatchCustomEvent)(unref(TOAST_SWIPE_MOVE), (ev) => emits("swipeMove", ev), eventDetail);
            } else if (unref(isDeltaInDirection)(delta, unref(providerContext).swipeDirection.value, moveStartBuffer)) {
              swipeDeltaRef.value = delta;
              unref(handleAndDispatchCustomEvent)(unref(TOAST_SWIPE_START), (ev) => emits("swipeStart", ev), eventDetail);
              event.target.setPointerCapture(event.pointerId);
            } else if (Math.abs(x) > moveStartBuffer || Math.abs(y) > moveStartBuffer) pointerStartRef.value = null;
          }),
          onPointerup: _cache[2] || (_cache[2] = (event) => {
            if (unref(providerContext).disableSwipe.value) return;
            const delta = swipeDeltaRef.value;
            const target = event.target;
            if (target.hasPointerCapture(event.pointerId)) target.releasePointerCapture(event.pointerId);
            swipeDeltaRef.value = null;
            pointerStartRef.value = null;
            if (delta) {
              const toast = event.currentTarget;
              const eventDetail = {
                originalEvent: event,
                delta
              };
              if (unref(isDeltaInDirection)(delta, unref(providerContext).swipeDirection.value, unref(providerContext).swipeThreshold.value)) unref(handleAndDispatchCustomEvent)(unref(TOAST_SWIPE_END), (ev) => emits("swipeEnd", ev), eventDetail);
              else unref(handleAndDispatchCustomEvent)(unref(TOAST_SWIPE_CANCEL), (ev) => emits("swipeCancel", ev), eventDetail);
              toast?.addEventListener("click", (event$1) => event$1.preventDefault(), { once: true });
            }
          })
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
            remaining: remainingTime.value,
            duration: duration.value
          })]),
          _: 3
        }, 16, [
          "as",
          "as-child",
          "data-state",
          "data-swipe-direction",
          "style"
        ])]),
        _: 3
      })], 8, ["to"])) : createCommentVNode("v-if", true)], 64);
    };
  }
});
var ToastRootImpl_default = ToastRootImpl_vue_vue_type_script_setup_true_lang_default;
var ToastClose_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ToastClose",
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
    const rootContext = injectToastRootContext();
    const { forwardRef } = useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ToastAnnounceExclude_default, { "as-child": "" }, {
        default: withCtx(() => [createVNode(unref(Primitive), mergeProps(props, {
          ref: unref(forwardRef),
          type: _ctx.as === "button" ? "button" : void 0,
          onClick: unref(rootContext).onClose
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, ["type", "onClick"])]),
        _: 3
      });
    };
  }
});
var ToastClose_default = ToastClose_vue_vue_type_script_setup_true_lang_default;
var ToastAction_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ToastAction",
  props: {
    altText: {
      type: String,
      required: true
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
    if (!props.altText) throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef } = useForwardExpose();
    return (_ctx, _cache) => {
      return _ctx.altText ? (openBlock(), createBlock(ToastAnnounceExclude_default, {
        key: 0,
        "alt-text": _ctx.altText,
        "as-child": ""
      }, {
        default: withCtx(() => [createVNode(ToastClose_default, {
          ref: unref(forwardRef),
          as: _ctx.as,
          "as-child": _ctx.asChild
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, ["as", "as-child"])]),
        _: 3
      }, 8, ["alt-text"])) : createCommentVNode("v-if", true);
    };
  }
});
var ToastAction_default = ToastAction_vue_vue_type_script_setup_true_lang_default;
var ToastDescription_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ToastDescription",
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
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var ToastDescription_default = ToastDescription_vue_vue_type_script_setup_true_lang_default;
var ToastPortal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ToastPortal",
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
var ToastPortal_default = ToastPortal_vue_vue_type_script_setup_true_lang_default;
var ToastRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ToastRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: false,
      default: true
    },
    forceMount: {
      type: Boolean,
      required: false
    },
    type: {
      type: String,
      required: false,
      default: "foreground"
    },
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    duration: {
      type: Number,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "li"
    }
  },
  emits: [
    "escapeKeyDown",
    "pause",
    "resume",
    "swipeStart",
    "swipeMove",
    "swipeCancel",
    "swipeEnd",
    "update:open"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { forwardRef } = useForwardExpose();
    const open = useVModel(props, "open", emits, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(open) }, {
        default: withCtx(() => [createVNode(ToastRootImpl_default, mergeProps({
          ref: unref(forwardRef),
          open: unref(open),
          type: _ctx.type,
          as: _ctx.as,
          "as-child": _ctx.asChild,
          duration: _ctx.duration
        }, _ctx.$attrs, {
          onClose: _cache[0] || (_cache[0] = ($event) => open.value = false),
          onPause: _cache[1] || (_cache[1] = ($event) => emits("pause")),
          onResume: _cache[2] || (_cache[2] = ($event) => emits("resume")),
          onEscapeKeyDown: _cache[3] || (_cache[3] = ($event) => emits("escapeKeyDown", $event)),
          onSwipeStart: _cache[4] || (_cache[4] = (event) => {
            emits("swipeStart", event);
            if (!event.defaultPrevented) event.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: _cache[5] || (_cache[5] = (event) => {
            emits("swipeMove", event);
            if (!event.defaultPrevented) {
              const { x, y } = event.detail.delta;
              const target = event.currentTarget;
              target.setAttribute("data-swipe", "move");
              target.style.setProperty("--reka-toast-swipe-move-x", `${x}px`);
              target.style.setProperty("--reka-toast-swipe-move-y", `${y}px`);
            }
          }),
          onSwipeCancel: _cache[6] || (_cache[6] = (event) => {
            emits("swipeCancel", event);
            if (!event.defaultPrevented) {
              const target = event.currentTarget;
              target.setAttribute("data-swipe", "cancel");
              target.style.removeProperty("--reka-toast-swipe-move-x");
              target.style.removeProperty("--reka-toast-swipe-move-y");
              target.style.removeProperty("--reka-toast-swipe-end-x");
              target.style.removeProperty("--reka-toast-swipe-end-y");
            }
          }),
          onSwipeEnd: _cache[7] || (_cache[7] = (event) => {
            emits("swipeEnd", event);
            if (!event.defaultPrevented) {
              const { x, y } = event.detail.delta;
              const target = event.currentTarget;
              target.setAttribute("data-swipe", "end");
              target.style.removeProperty("--reka-toast-swipe-move-x");
              target.style.removeProperty("--reka-toast-swipe-move-y");
              target.style.setProperty("--reka-toast-swipe-end-x", `${x}px`);
              target.style.setProperty("--reka-toast-swipe-end-y", `${y}px`);
              open.value = false;
            }
          })
        }), {
          default: withCtx(({ remaining, duration: _duration }) => [renderSlot(_ctx.$slots, "default", {
            remaining,
            duration: _duration,
            open: unref(open)
          })]),
          _: 3
        }, 16, [
          "open",
          "type",
          "as",
          "as-child",
          "duration"
        ])]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var ToastRoot_default = ToastRoot_vue_vue_type_script_setup_true_lang_default;
var ToastTitle_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ToastTitle",
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
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var ToastTitle_default = ToastTitle_vue_vue_type_script_setup_true_lang_default;
var FocusProxy_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const providerContext = injectToastProviderContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(VisuallyHidden_default), {
        tabindex: "0",
        style: { "position": "fixed" },
        onFocus: _cache[0] || (_cache[0] = (event) => {
          const prevFocusedElement = event.relatedTarget;
          const isFocusFromOutsideViewport = !unref(providerContext).viewport.value?.contains(prevFocusedElement);
          if (isFocusFromOutsideViewport) emits("focusFromOutsideViewport");
        })
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      });
    };
  }
});
var FocusProxy_default = FocusProxy_vue_vue_type_script_setup_true_lang_default;
var ToastViewport_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "ToastViewport",
  props: {
    hotkey: {
      type: Array,
      required: false,
      default: () => ["F8"]
    },
    label: {
      type: [String, Function],
      required: false,
      default: "Notifications ({hotkey})"
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "ol"
    }
  },
  setup(__props) {
    const props = __props;
    const { hotkey, label } = toRefs(props);
    const { forwardRef, currentElement } = useForwardExpose();
    const { CollectionSlot, getItems } = useCollection();
    const providerContext = injectToastProviderContext();
    const hasToasts = computed(() => providerContext.toastCount.value > 0);
    const headFocusProxyRef = ref();
    const tailFocusProxyRef = ref();
    const KEY_RE = /Key/g;
    const DIGIT_RE = /Digit/g;
    const hotkeyMessage = computed(() => hotkey.value.join("+").replace(KEY_RE, "").replace(DIGIT_RE, ""));
    onKeyStroke(hotkey.value, () => {
      currentElement.value.focus();
    });
    watchEffect((cleanupFn) => {
      const viewport = currentElement.value;
      if (hasToasts.value && viewport) {
        const handlePause = () => {
          if (!providerContext.isClosePausedRef.value) {
            const pauseEvent = new CustomEvent(VIEWPORT_PAUSE);
            viewport.dispatchEvent(pauseEvent);
            providerContext.isClosePausedRef.value = true;
          }
        };
        const handleResume = () => {
          if (providerContext.isClosePausedRef.value) {
            const resumeEvent = new CustomEvent(VIEWPORT_RESUME);
            viewport.dispatchEvent(resumeEvent);
            providerContext.isClosePausedRef.value = false;
          }
        };
        const handleFocusOutResume = (event) => {
          const isFocusMovingOutside = !viewport.contains(event.relatedTarget);
          if (isFocusMovingOutside) handleResume();
        };
        const handlePointerLeaveResume = () => {
          const isFocusInside = viewport.contains(getActiveElement());
          if (!isFocusInside) handleResume();
        };
        const handleKeyDown = (event) => {
          const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
          const isTabKey = event.key === "Tab" && !isMetaKey;
          if (isTabKey) {
            const focusedElement = getActiveElement();
            const isTabbingBackwards = event.shiftKey;
            const targetIsViewport = event.target === viewport;
            if (targetIsViewport && isTabbingBackwards) {
              headFocusProxyRef.value?.focus();
              return;
            }
            const tabbingDirection = isTabbingBackwards ? "backwards" : "forwards";
            const sortedCandidates = getSortedTabbableCandidates({ tabbingDirection });
            const index = sortedCandidates.findIndex((candidate) => candidate === focusedElement);
            if (focusFirst(sortedCandidates.slice(index + 1))) event.preventDefault();
            else isTabbingBackwards ? headFocusProxyRef.value?.focus() : tailFocusProxyRef.value?.focus();
          }
        };
        viewport.addEventListener("focusin", handlePause);
        viewport.addEventListener("focusout", handleFocusOutResume);
        viewport.addEventListener("pointermove", handlePause);
        viewport.addEventListener("pointerleave", handlePointerLeaveResume);
        viewport.addEventListener("keydown", handleKeyDown);
        (void 0).addEventListener("blur", handlePause);
        (void 0).addEventListener("focus", handleResume);
        cleanupFn(() => {
          viewport.removeEventListener("focusin", handlePause);
          viewport.removeEventListener("focusout", handleFocusOutResume);
          viewport.removeEventListener("pointermove", handlePause);
          viewport.removeEventListener("pointerleave", handlePointerLeaveResume);
          viewport.removeEventListener("keydown", handleKeyDown);
          (void 0).removeEventListener("blur", handlePause);
          (void 0).removeEventListener("focus", handleResume);
        });
      }
    });
    function getSortedTabbableCandidates({ tabbingDirection }) {
      const toastItems = getItems().map((i) => i.ref);
      const tabbableCandidates = toastItems.map((toastNode) => {
        const toastTabbableCandidates = [toastNode, ...getTabbableCandidates(toastNode)];
        return tabbingDirection === "forwards" ? toastTabbableCandidates : toastTabbableCandidates.reverse();
      });
      return (tabbingDirection === "forwards" ? tabbableCandidates.reverse() : tabbableCandidates).flat();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(DismissableLayerBranch_default), {
        role: "region",
        "aria-label": typeof unref(label) === "string" ? unref(label).replace("{hotkey}", hotkeyMessage.value) : unref(label)(hotkeyMessage.value),
        tabindex: "-1",
        style: normalizeStyle({ pointerEvents: hasToasts.value ? void 0 : "none" })
      }, {
        default: withCtx(() => [
          hasToasts.value ? (openBlock(), createBlock(FocusProxy_default, {
            key: 0,
            ref: (node) => {
              if (!node) return void 0;
              headFocusProxyRef.value = unref(unrefElement)(node);
              return void 0;
            },
            onFocusFromOutsideViewport: _cache[0] || (_cache[0] = () => {
              const tabbableCandidates = getSortedTabbableCandidates({ tabbingDirection: "forwards" });
              unref(focusFirst)(tabbableCandidates);
            })
          }, null, 512)) : createCommentVNode("v-if", true),
          createVNode(unref(CollectionSlot), null, {
            default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
              ref: unref(forwardRef),
              tabindex: "-1",
              as: _ctx.as,
              "as-child": _ctx.asChild
            }, _ctx.$attrs), {
              default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
              _: 3
            }, 16, ["as", "as-child"])]),
            _: 3
          }),
          hasToasts.value ? (openBlock(), createBlock(FocusProxy_default, {
            key: 1,
            ref: (node) => {
              if (!node) return void 0;
              tailFocusProxyRef.value = unref(unrefElement)(node);
              return void 0;
            },
            onFocusFromOutsideViewport: _cache[1] || (_cache[1] = () => {
              const tabbableCandidates = getSortedTabbableCandidates({ tabbingDirection: "backwards" });
              unref(focusFirst)(tabbableCandidates);
            })
          }, null, 512)) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["aria-label", "style"]);
    };
  }
});
var ToastViewport_default = ToastViewport_vue_vue_type_script_setup_true_lang_default;
const [injectTooltipProviderContext, provideTooltipProviderContext] = /* @__PURE__ */ createContext("TooltipProvider");
var TooltipProvider_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "TooltipProvider",
  props: {
    delayDuration: {
      type: Number,
      required: false,
      default: 700
    },
    skipDelayDuration: {
      type: Number,
      required: false,
      default: 300
    },
    disableHoverableContent: {
      type: Boolean,
      required: false,
      default: false
    },
    disableClosingTrigger: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    ignoreNonKeyboardFocus: {
      type: Boolean,
      required: false,
      default: false
    },
    content: {
      type: Object,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const { delayDuration, skipDelayDuration, disableHoverableContent, disableClosingTrigger, ignoreNonKeyboardFocus, disabled, content } = toRefs(props);
    useForwardExpose();
    const isOpenDelayed = ref(true);
    const isPointerInTransitRef = ref(false);
    const { start: startTimer, stop: clearTimer } = useTimeoutFn(() => {
      isOpenDelayed.value = true;
    }, skipDelayDuration, { immediate: false });
    provideTooltipProviderContext({
      isOpenDelayed,
      delayDuration,
      onOpen() {
        clearTimer();
        isOpenDelayed.value = false;
      },
      onClose() {
        startTimer();
      },
      isPointerInTransitRef,
      disableHoverableContent,
      disableClosingTrigger,
      disabled,
      ignoreNonKeyboardFocus,
      content
    });
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var TooltipProvider_default = TooltipProvider_vue_vue_type_script_setup_true_lang_default;
const CursorIcon = () => h("svg", {
  "xmlns": "http://www.w3.org/2000/svg",
  "viewBox": "0 0 24 24",
  "aria-hidden": "true",
  "data-slot": "icon"
}, [
  h("path", {
    fill: "currentColor",
    d: "M11.503.131L1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23"
  })
]);
const WindsurfIcon = () => h("svg", {
  "xmlns": "http://www.w3.org/2000/svg",
  "viewBox": "0 0 24 24",
  "aria-hidden": "true",
  "data-slot": "icon"
}, [
  h("path", {
    fill: "currentColor",
    d: "M23.55 5.067a2.177 2.177 0 0 0-2.18 2.177v4.867a1.77 1.77 0 0 1-1.76 1.76a1.82 1.82 0 0 1-1.472-.766l-4.971-7.1a2.2 2.2 0 0 0-1.81-.942c-1.134 0-2.154.964-2.154 2.153v4.896c0 .972-.797 1.76-1.76 1.76c-.57 0-1.136-.287-1.472-.766L.408 5.16A.224.224 0 0 0 0 5.288v4.245c0 .215.066.423.188.6l5.475 7.818c.324.462.8.805 1.351.93a2.164 2.164 0 0 0 2.645-2.098V11.89c0-.972.787-1.76 1.76-1.76h.002a1.8 1.8 0 0 1 1.472.766l4.972 7.1a2.172 2.172 0 0 0 3.96-1.212v-4.895a1.76 1.76 0 0 1 1.76-1.76h.195a.22.22 0 0 0 .22-.22V5.287a.22.22 0 0 0-.22-.22Z"
  })
]);
const icons = {
  arrowLeft: ArrowToTheLeftIcon,
  arrowRight: ArrowToTheRightIcon,
  check: CheckIcon,
  chevronDoubleLeft: DoubleShevronsLeftIcon,
  chevronDoubleRight: DoubleShevronsRightIcon,
  chevronDown: ChevronDownLIcon,
  chevronLeft: ChevronToTheLeftIcon,
  chevronRight: ChevronToTheRightIcon,
  chevronUp: ChevronTopLIcon,
  close: CrossMIcon,
  ellipsis: DotsIcon,
  external: GoToLIcon,
  file: FileIcon,
  loading: LoaderWaitIcon,
  refresh: Refresh6Icon,
  minus: Minus30Icon,
  plus: Plus30Icon,
  search: Search2Icon,
  upload: UploadFileIcon,
  system: ScreenIcon,
  light: SunIconAir,
  dark: MoonIconAir,
  hash: TagIcon,
  warning: WarningIcon,
  tip: IdeaLampIcon,
  info: InfoCircleIcon,
  // this for error
  caution: AlertIcon,
  copyCheck: CircleCheckIcon,
  copy: CopyIcon,
  imSend: SendIcon,
  arrowDown: ArrowDownLIcon,
  arrowUp: ArrowTopLIcon,
  stop: StopLIcon,
  reload: RefreshIcon,
  drag: DragLIcon,
  menu: HamburgerMenuIcon,
  panelClose: CloseChatIcon,
  panelOpen: OpenChatIcon,
  // Named icons exposed to markdown authors via `iconName`
  // (ProseCallout, ProsePrompt, page header / hero CTAs, dropdown actions, ...)
  GitHubIcon,
  // GitHub repository / source link
  NuxtIcon,
  // Nuxt-specific docs / framework references
  Bitrix24Icon,
  // Bitrix24 brand link
  MdnwebdocsIcon,
  // MDN documentation references
  MdnWebDocIcon: MdnwebdocsIcon,
  // legacy alias used in many ::callout blocks
  InfoCircleIcon,
  // generic info / about link
  DemonstrationOnIcon,
  // demo / playground / showcase
  DesignIcon,
  // "Edit this page" entry point
  FavoriteIcon,
  // "Star on GitHub" / favorite CTA
  MoreMIcon,
  // dropdown menu trigger
  AiStarsIcon,
  // "Explain with AI" / AI assistant entry
  EncloseTextInCodeTagIcon,
  // source / "View code" CTA
  PlayLIcon,
  // "Try it" / playground / REPL CTA
  CursorIcon,
  // Cursor IDE — open prompt in app
  WindsurfIcon
  // Windsurf IDE — open prompt in app
};
function omit(data, keys) {
  const result = { ...data };
  for (const key of keys) {
    delete result[key];
  }
  return result;
}
function get(object, path, defaultValue) {
  if (typeof path === "string") {
    path = path.split(".").map((key) => {
      const numKey = Number(key);
      return Number.isNaN(numKey) ? key : numKey;
    });
  }
  let result = object;
  for (const key of path) {
    if (result === void 0 || result === null) {
      return defaultValue;
    }
    result = result[key];
  }
  return result !== void 0 ? result : defaultValue;
}
function looseToNumber(val) {
  const n = Number.parseFloat(val);
  return Number.isNaN(n) ? val : n;
}
function mergeClasses(appConfigClass, propClass) {
  if (!appConfigClass && !propClass) {
    return "";
  }
  return [
    ...Array.isArray(appConfigClass) ? appConfigClass : [appConfigClass],
    propClass
  ].filter(Boolean);
}
const PROMPT_BLOCK_TAGS = /* @__PURE__ */ new Set(["p", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote"]);
function walkPromptElement(node) {
  if (node.nodeType === 3) {
    const text = node.textContent || "";
    if (text.includes("\n") && !text.trim()) return "";
    return text;
  }
  if (node.nodeType !== 1) return "";
  const element = node;
  const tag = element.tagName.toLowerCase();
  let inner = "";
  node.childNodes.forEach((child) => {
    inner += walkPromptElement(child);
  });
  if (PROMPT_BLOCK_TAGS.has(tag)) return `${inner}

`;
  if (tag === "pre") return `
\`\`\`
${inner.replace(/^`+|`+$/g, "")}
\`\`\`

`;
  if (tag === "ul" || tag === "ol") return `${inner}
`;
  if (tag === "li") return `- ${inner}
`;
  if (tag === "br") return "\n";
  if (tag === "hr") return "\n---\n\n";
  if (tag === "code") return `\`${inner}\``;
  if (tag === "strong" || tag === "b") return `**${inner}**`;
  if (tag === "em" || tag === "i") return `*${inner}*`;
  if (tag === "a") {
    const href = element.getAttribute("href");
    return href ? `[${inner}](${href})` : inner;
  }
  return inner;
}
function extractPromptText(el) {
  if (!el) return "";
  return walkPromptElement(el).replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}
function resolveIcon(name) {
  if (!name) return void 0;
  return icons[name];
}
function transformUI(ui, uiProp) {
  return Object.entries(ui).reduce((acc, [key, value]) => {
    acc[key] = typeof value === "function" ? value({ class: uiProp?.[key] }) : value;
    return acc;
  }, { ...uiProp || {} });
}
function resolveBaseURL(path, baseURL2) {
  if (path?.startsWith("/") && !path.startsWith("//")) {
    const _base = withLeadingSlash(withTrailingSlash(baseURL2 || "/"));
    if (_base !== "/" && !path.startsWith(_base)) {
      return joinURL(_base, path);
    }
  }
  return path;
}
function buildTranslator(locale) {
  return (path, option) => translate(path, option, unref(locale));
}
function translate(path, option, locale) {
  const prop = get(locale, `messages.${path}`, path);
  return prop.replace(
    /\{(\w+)\}/g,
    (_, key) => `${option?.[key] ?? `{${key}}`}`
  );
}
function buildLocaleContext(locale) {
  const lang = computed(() => unref(locale).name);
  const code = computed(() => unref(locale).code);
  const dir = computed(() => unref(locale).dir);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    code,
    dir,
    locale: localeRef,
    t: buildTranslator(locale)
  };
}
// @__NO_SIDE_EFFECTS__
function defineLocale(options) {
  return defu(options, { dir: "ltr" });
}
const en = /* @__PURE__ */ defineLocale({
  name: "English",
  code: "en",
  locale: "en",
  messages: {
    alert: {
      close: "Close"
    },
    authForm: {
      hidePassword: "Hide password",
      showPassword: "Show password",
      submit: "Continue"
    },
    banner: {
      close: "Close"
    },
    calendar: {
      nextMonth: "Next month",
      nextYear: "Next year",
      prevMonth: "Previous month",
      prevYear: "Previous year"
    },
    carousel: {
      dots: "Select slide to display",
      goto: "Go to {slide}",
      next: "Next",
      prev: "Previous"
    },
    chatPrompt: {
      placeholder: "Enter your message here…"
    },
    chatPromptSubmit: {
      label: "Send"
    },
    colorMode: {
      dark: "Dark",
      light: "Light",
      switchToDark: "Switch to dark mode",
      switchToLight: "Switch to light mode",
      system: "System"
    },
    commandPalette: {
      back: "Back",
      close: "Close",
      noData: "No data",
      noMatch: "No matches found",
      placeholder: "Enter command or search…"
    },
    contentSearch: {
      links: "Results",
      theme: "Theme"
    },
    contentSearchButton: {
      label: "Search…"
    },
    contentToc: {
      title: "On this page"
    },
    dropdownMenu: {
      noMatch: "No matching data",
      search: "Search…"
    },
    dashboardSearch: {
      theme: "Theme"
    },
    dashboardSearchButton: {
      label: "Search…"
    },
    dashboardSidebarCollapse: {
      collapse: "Collapse sidebar",
      expand: "Expand sidebar"
    },
    dashboardSidebarToggle: {
      close: "Close sidebar",
      open: "Open sidebar"
    },
    error: {
      clear: "Try again"
    },
    fileUpload: {
      removeFile: "Remove {filename}"
    },
    header: {
      close: "Close menu",
      open: "Open menu"
    },
    inputMenu: {
      create: 'Create "{label}"',
      noData: "No data",
      noMatch: "No matches found"
    },
    inputNumber: {
      decrement: "Decrement",
      increment: "Increment"
    },
    modal: {
      close: "Close"
    },
    pricingTable: {
      caption: "Pricing plans comparison"
    },
    prose: {
      codeCollapse: {
        closeText: "Hide",
        name: "code",
        openText: "Show"
      },
      collapsible: {
        closeText: "Hide",
        name: "properties",
        openText: "Show"
      },
      pre: {
        copy: "Copy code to clipboard"
      },
      prompt: {
        copy: "Copy prompt",
        openIn: "Open in {name}"
      }
    },
    chatReasoning: {
      thinking: "Thinking…",
      thought: "Thought",
      thoughtFor: "Thought for {duration}"
    },
    sidebar: {
      close: "Close",
      toggle: "Toggle"
    },
    selectMenu: {
      create: 'Create "{label}"',
      noData: "No data",
      noMatch: "No matches found",
      search: "Search…"
    },
    slideover: {
      close: "Close"
    },
    table: {
      noData: "No data"
    },
    toast: {
      close: "Close"
    },
    sidebarLayout: {
      open: "Open navigation",
      close: "Close navigation",
      slideoverTitle: "Navigation",
      slideoverDescription: "Content navigation"
    }
  }
});
const localeContextInjectionKey = /* @__PURE__ */ Symbol.for("bitrix24-ui.locale-context");
const _useLocale = (localeOverrides) => {
  const locale = localeOverrides || toRef(inject(localeContextInjectionKey, en));
  return buildLocaleContext(computed(() => locale.value || en));
};
const useLocale = _useLocale;
const portalTargetInjectionKey = /* @__PURE__ */ Symbol("bitrix24-ui.portal-target");
function usePortal(portal) {
  const globalPortal = inject(portalTargetInjectionKey, void 0);
  const value = computed(() => portal.value === true ? globalPortal?.value : portal.value);
  const disabled = computed(() => typeof value.value === "boolean" ? !value.value : false);
  const to = computed(() => typeof value.value === "boolean" ? "body" : value.value);
  return computed(() => ({
    to: to.value,
    disabled: disabled.value
  }));
}
const [_injectThemeContext] = createContext("B24Theme", "RootContext");
const defaultThemeContext = {
  defaults: computed(() => ({}))
};
function injectThemeContext(fallback = defaultThemeContext) {
  return _injectThemeContext(fallback);
}
function camelCase(str) {
  return str.replace(/-(\w)/g, (_, c) => c.toUpperCase());
}
function kebabCase(str) {
  return str.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
}
function propIsDefined(vnode, prop) {
  if (!vnode || !vnode.props) return false;
  return vnode.props[camelCase(prop)] !== void 0 || vnode.props[kebabCase(prop)] !== void 0;
}
function useComponentProps(name, props) {
  const vm = getCurrentInstance();
  const { defaults } = injectThemeContext();
  const appConfig2 = useAppConfig();
  return new Proxy(props, {
    get(target, prop, receiver) {
      if (prop === "__v_isReactive") return true;
      if (prop === "__v_raw") return target;
      const raw = Reflect.get(target, prop, receiver);
      if (typeof prop !== "string") return raw;
      const themeEntry = name.includes(".") ? get(defaults.value, name) : defaults.value[name];
      if (prop === "b24ui") {
        const themeUi = themeEntry?.b24ui;
        if (!raw && !themeUi) return raw;
        return defu(raw ?? {}, themeUi ?? {});
      }
      if (vm && propIsDefined(vm.vnode, prop)) return raw;
      const themeValue = themeEntry?.[prop];
      if (themeValue !== void 0) return themeValue;
      const propDef = vm?.type?.props?.[prop];
      if (propDef && Object.prototype.hasOwnProperty.call(propDef, "default")) {
        return raw;
      }
      const appConfigEntry = name.includes(".") ? get(appConfig2.b24ui ?? {}, name) : appConfig2.b24ui?.[name];
      return appConfigEntry?.defaultVariants?.[prop];
    },
    // `has`, `ownKeys`, and `getOwnPropertyDescriptor` reflect the underlying
    // `defineProps` schema only — theme defaults are NOT enumerable. As a
    // result, `Object.keys(props)`, `for…in`, and `{ ...props }` see only the
    // declared prop keys, but each value lookup still flows through the proxy.
    // This is the contract our internal `useForwardProps` relies on.
    has: (t, p) => Reflect.has(t, p),
    ownKeys: (t) => Reflect.ownKeys(t),
    getOwnPropertyDescriptor: (t, p) => Reflect.getOwnPropertyDescriptor(t, p)
  });
}
function useForwardProps(source, emits) {
  const emitAsProps = emits ? useEmitAsProps(emits) : {};
  return computed(() => {
    const src = isRef(source) ? source.value : source;
    const out = { ...emitAsProps };
    for (const key in src) {
      const value = src[key];
      if (value !== void 0) out[key] = value;
    }
    return out;
  });
}
const toastMaxInjectionKey = /* @__PURE__ */ Symbol("bitrix24-ui.toast-max");
function useToast() {
  const toasts = useState("toasts", () => []);
  const max = inject(toastMaxInjectionKey, void 0);
  const running = ref(false);
  const queue = [];
  const generateId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  async function processQueue() {
    if (running.value || queue.length === 0) {
      return;
    }
    running.value = true;
    while (queue.length > 0) {
      const toast = queue.shift();
      await nextTick();
      toasts.value = [...toasts.value, toast].slice(-(max?.value ?? 5));
    }
    running.value = false;
  }
  function add(toast) {
    const body = {
      id: generateId(),
      open: true,
      ...toast
    };
    const existingIndex = toasts.value.findIndex((t) => t.id === body.id);
    if (existingIndex !== -1) {
      toasts.value[existingIndex] = {
        ...toasts.value[existingIndex],
        ...body,
        _duplicate: (toasts.value[existingIndex]._duplicate || 0) + 1
      };
      return body;
    }
    queue.push(body);
    processQueue();
    return body;
  }
  function update(id, toast) {
    const index = toasts.value.findIndex((t) => t.id === id);
    if (index !== -1) {
      toasts.value[index] = {
        ...toasts.value[index],
        ...toast,
        duration: toast.duration,
        open: true,
        _updated: true
      };
      nextTick(() => {
        const i = toasts.value.findIndex((t) => t.id === id);
        if (i !== -1 && toasts.value[i]._updated) {
          toasts.value[i] = {
            ...toasts.value[i],
            _updated: void 0
          };
        }
      });
    }
  }
  function remove(id) {
    const index = toasts.value.findIndex((t) => t.id === id);
    if (index !== -1 && toasts.value[index]._updated) {
      return;
    }
    if (index !== -1) {
      toasts.value[index] = {
        ...toasts.value[index],
        open: false
      };
    }
    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== id);
    }, 200);
  }
  function clear() {
    toasts.value = [];
  }
  return {
    toasts,
    add,
    update,
    remove,
    clear
  };
}
const appConfigTv = appConfig;
const twMergeConfig = {
  theme: {},
  classGroups: {
    "b24-context": [
      "light",
      "dark",
      "edge-light",
      "edge-dark",
      "inherit",
      "base-mode"
    ],
    "b24-colors": [
      // primary ////
      "style-filled",
      "style-filled-inverted",
      "style-filled-success",
      "style-filled-success-inverted",
      "style-filled-alert",
      "style-filled-alert-inverted",
      "style-filled-copilot",
      "style-filled-alert-inverted",
      "style-filled-warning",
      "style-filled-warning-inverted",
      "style-filled-no-accent",
      "style-filled-no-accent-inverted",
      // secondary ////
      "style-tinted",
      "style-tinted-alert",
      "style-outline",
      "style-outline-accent-1",
      "style-outline-accent-2",
      "style-outline-no-accent",
      "style-tinted-no-accent-1",
      // tertiary ////
      "style-plain",
      "style-plain-accent",
      "style-plain-no-accent",
      // custom ////
      "style-selection",
      "style-filled-boost",
      // old ////
      "style-old-default",
      "style-old-danger",
      "style-old-success",
      "style-old-warning",
      "style-old-primary",
      "style-old-secondary",
      "style-old-collab",
      "style-old-ai"
    ],
    "b24-bg": [
      // @deprecate This rule (style-blurred-bg) is deprecated and will be removed in version `3.0.0`
      "style-blurred-bg",
      "style-blurred-bg-input",
      "style-transparent-bg"
    ]
  },
  conflictingClassGroups: {
    "b24-context": ["b24-context"],
    "b24-colors": ["b24-colors"],
    "b24-bg": ["b24-bg"]
  }
};
const tv = /* @__PURE__ */ createTV({
  ...appConfigTv.b24ui?.tv || {},
  twMerge: true,
  twMergeConfig
});
const ImageComponent = "img";
const avatarGroupInjectionKey = /* @__PURE__ */ Symbol("bitrix24-ui.avatar-group");
function useAvatarGroup(props) {
  const avatarGroup = inject(avatarGroupInjectionKey, void 0);
  const size2 = computed(() => props.size ?? avatarGroup?.value.size);
  const color = computed(() => props.color ?? avatarGroup?.value.color);
  provide(avatarGroupInjectionKey, computed(() => ({ size: size2.value, color: color.value })));
  return {
    size: size2,
    color
  };
}
const theme$d = {
  "slots": {
    "root": "relative shrink-0 isolate inline-flex items-center justify-center",
    "base": "ui-counter__scope --air font-[family-name:var(--ui-font-family-primary)] font-(--ui-font-weight-medium) select-none relative min-w-(--ui-counter-size) h-(--ui-counter-size) py-0 px-(--ui-counter-inline-space) inline-flex items-center justify-center bg-(--b24ui-background) rounded-(--ui-counter-current-size) ring-(length:--b24ui-border-width) ring-(--b24ui-border-color) text-center align-middle text-(length:--ui-counter-font-size) text-(--b24ui-color) leading-(--ui-counter-current-size) overflow-hidden z-1 text-nowrap",
    "trailingIcon": "size-(--ui-counter-size) text-inherit text-(length:--ui-counter-symbol-font-size) opacity-96 tracking-(--ui-letter-spacing-xl) me-(--ui-counter-symbol-compensation) empty:me-[0]"
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
        "base": "style-tinted-no-accent-1"
      },
      "air-secondary-accent": {
        "base": "style-filled-no-accent"
      },
      "air-secondary-accent-1": {
        "base": "style-filled-no-accent-inverted edge-dark:text-(--ui-color-g-content-grey-2)"
      },
      "air-tertiary": {
        "base": "style-outline-no-accent"
      },
      "default": {
        "base": "style-old-default"
      },
      "danger": {
        "base": "style-old-danger"
      },
      "success": {
        "base": "style-old-success"
      },
      "warning": {
        "base": "style-old-warning"
      },
      "primary": {
        "base": "style-old-primary"
      },
      "secondary": {
        "base": "style-old-secondary"
      },
      "collab": {
        "base": "style-old-collab"
      },
      "ai": {
        "base": "style-old-ai"
      }
    },
    "size": {
      "sm": "ui-counter-sm font-(--ui-font-weight-regular)",
      "md": "ui-counter-md",
      "lg": "ui-counter-lg"
    },
    "position": {
      "top-right": "top-0 right-0",
      "bottom-right": "bottom-0 right-0",
      "top-left": "top-0 left-0",
      "bottom-left": "bottom-0 left-0"
    },
    "inverted": {
      "true": "",
      "false": ""
    },
    "inset": {
      "false": ""
    },
    "standalone": {
      "true": "",
      "false": "absolute"
    },
    "hideZero": {
      "true": {
        "base": "data-[value=0]:hidden"
      }
    },
    "oneDigit": {
      "true": {
        "base": "px-0"
      }
    }
  },
  "compoundVariants": [
    {
      "position": "top-right",
      "inset": false,
      "standalone": false,
      "class": "-translate-y-1/2 translate-x-1/2 transform"
    },
    {
      "position": "bottom-right",
      "inset": false,
      "standalone": false,
      "class": "translate-y-1/2 translate-x-1/2 transform"
    },
    {
      "position": "top-left",
      "inset": false,
      "standalone": false,
      "class": "-translate-y-1/2 -translate-x-1/2 transform"
    },
    {
      "position": "bottom-left",
      "inset": false,
      "standalone": false,
      "class": "translate-y-1/2 -translate-x-1/2 transform"
    },
    {
      "position": "top-right",
      "size": [
        "sm",
        "md",
        "lg"
      ],
      "inset": true,
      "standalone": false,
      "class": "-translate-y-1/3 translate-x-1/3 transform"
    },
    {
      "position": "bottom-right",
      "size": [
        "sm",
        "md",
        "lg"
      ],
      "inset": true,
      "standalone": false,
      "class": "translate-y-1/3 translate-x-1/3 transform"
    },
    {
      "position": "top-left",
      "size": [
        "sm",
        "md",
        "lg"
      ],
      "inset": true,
      "standalone": false,
      "class": "-translate-y-1/3 -translate-x-1/3 transform"
    },
    {
      "position": "bottom-left",
      "size": [
        "sm",
        "md",
        "lg"
      ],
      "inset": true,
      "standalone": false,
      "class": "translate-y-1/3 -translate-x-1/3 transform"
    },
    {
      "inverted": true,
      "color": "air-primary",
      "class": {
        "base": "style-filled-inverted"
      }
    },
    {
      "inverted": true,
      "color": "air-primary-success",
      "class": {
        "base": "style-filled-success-inverted"
      }
    },
    {
      "inverted": true,
      "color": "air-primary-alert",
      "class": {
        "base": "style-filled-alert-inverted"
      }
    },
    {
      "inverted": true,
      "color": "air-primary-copilot",
      "class": {
        "base": "style-filled-copilot-inverted"
      }
    },
    {
      "inverted": true,
      "color": "air-primary-warning",
      "class": {
        "base": "style-filled-warning-inverted"
      }
    }
  ],
  "defaultVariants": {
    "size": "sm",
    "color": "air-primary-alert",
    "position": "top-right",
    "inverted": false
  }
};
const _sfc_main$l = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "B24Chip",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    text: { type: [String, Number], required: false },
    trailingIcon: { type: [Function, Object], required: false },
    color: { type: null, required: false },
    inverted: { type: Boolean, required: false, default: false },
    size: { type: null, required: false },
    position: { type: null, required: false },
    inset: { type: Boolean, required: false, default: false },
    standalone: { type: Boolean, required: false, default: false },
    hideZero: { type: Boolean, required: false, default: false },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false }
  }, {
    "show": { type: Boolean, ...{ default: true } },
    "showModifiers": {}
  }),
  emits: ["update:show"],
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("chip", _props);
    const show = useModel(__props, "show", { type: Boolean, ...{ default: true } });
    const appConfig2 = useAppConfig();
    const b24ui = computed(() => tv({ extend: tv(theme$d), ...appConfig2.b24ui?.chip || {} })({
      color: props.color,
      inverted: Boolean(props.inverted),
      size: props.size,
      // size.value ?? props.size
      position: props.position,
      inset: Boolean(props.inset),
      standalone: Boolean(props.standalone),
      hideZero: Boolean(props.hideZero),
      oneDigit: !props.trailingIcon && props.text?.toString().length === 1
    }));
    const value = computed(() => {
      return props.text;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        "data-slot": "root",
        class: b24ui.value.root({ class: [unref(props).b24ui?.root, unref(props).class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Slot), _ctx.$attrs, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            if (show.value) {
              _push2(`<span data-slot="base" class="${ssrRenderClass(b24ui.value.base({ class: unref(props).b24ui?.base }))}"${ssrRenderAttr("data-value", value.value)}${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                _push2(`<span${_scopeId}>${ssrInterpolate(unref(props).text)}</span>`);
              }, _push2, _parent2, _scopeId);
              ssrRenderSlot(_ctx.$slots, "trailing", {}, () => {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(props).trailingIcon), {
                  "data-slot": "trailingIcon",
                  class: b24ui.value.trailingIcon({ class: unref(props).b24ui?.trailingIcon })
                }, null), _parent2, _scopeId);
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(Slot), _ctx.$attrs, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16),
              show.value ? (openBlock(), createBlock("span", {
                key: 0,
                "data-slot": "base",
                class: b24ui.value.base({ class: unref(props).b24ui?.base }),
                "data-value": value.value
              }, [
                renderSlot(_ctx.$slots, "content", {}, () => [
                  createVNode("span", null, toDisplayString(unref(props).text), 1)
                ]),
                renderSlot(_ctx.$slots, "trailing", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(props).trailingIcon), {
                    "data-slot": "trailingIcon",
                    class: b24ui.value.trailingIcon({ class: unref(props).b24ui?.trailingIcon })
                  }, null, 8, ["class"]))
                ])
              ], 10, ["data-value"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Chip.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const theme$c = {
  "slots": {
    "root": "air-secondary-accent inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-(--b24ui-background) ring ring-(--b24ui-border-color)",
    "image": "h-full w-full rounded-[inherit] object-cover",
    "fallback": "font-(--ui-font-weight-medium) text-(--b24ui-color) truncate",
    "icon": "text-(--b24ui-icon) shrink-0"
  },
  "variants": {
    "color": {
      "air-primary": {
        "root": "style-filled"
      },
      "air-primary-success": {
        "root": "style-filled-success"
      },
      "air-primary-alert": {
        "root": "style-filled-alert"
      },
      "air-primary-copilot": {
        "root": "style-filled-copilot"
      },
      "air-primary-warning": {
        "root": "style-filled-warning"
      },
      "air-primary-no-accent": {
        "root": "style-filled-no-accent"
      },
      "air-secondary": {
        "root": "style-tinted"
      },
      "air-secondary-alert": {
        "root": "style-tinted-alert"
      },
      "air-secondary-accent": {
        "root": "style-outline"
      },
      "air-secondary-accent-1": {
        "root": "style-outline-accent-1"
      },
      "air-secondary-accent-2": {
        "root": "style-outline-accent-2"
      },
      "air-secondary-no-accent": {
        "root": "style-outline-no-accent"
      },
      "air-tertiary": {
        "root": "style-plain"
      },
      "air-tertiary-accent": {
        "root": "style-plain-accent"
      },
      "air-tertiary-no-accent": {
        "root": "style-plain-no-accent"
      },
      "air-selection": {
        "root": "style-selection"
      },
      "air-boost": {
        "root": "style-filled-boost"
      }
    },
    "size": {
      "3xs": {
        "root": "size-2.5 text-4xs font-(--ui-font-weight-regular)",
        "icon": "size-2.5"
      },
      "2xs": {
        "root": "size-5 text-(length:--ui-font-size-4xs)/(--ui-font-line-height-reset) font-(--ui-font-weight-regular)",
        "icon": "size-4.5"
      },
      "xs": {
        "root": "size-6 text-(length:--ui-font-size-3xs)/(--ui-font-line-height-reset) font-(--ui-font-weight-regular)",
        "icon": "size-5.5"
      },
      "sm": {
        "root": "size-7 text-(length:--ui-font-size-xs)/(--ui-font-line-height-reset)",
        "icon": "size-6.5"
      },
      "md": {
        "root": "size-8 text-(length:--ui-font-size-sm)/(--ui-font-line-height-reset)",
        "icon": "size-7"
      },
      "lg": {
        "root": "size-10.5 text-(length:--ui-font-size-2xl)/(--ui-font-line-height-reset)",
        "icon": "size-9.5"
      },
      "xl": {
        "root": "ring-2 size-12 text-(length:--ui-font-size-2xl)/(--ui-font-line-height-reset)",
        "icon": "size-11"
      },
      "2xl": {
        "root": "ring-2 size-15 text-(length:--ui-font-size-5xl)/(--ui-font-line-height-reset)",
        "icon": "size-14"
      },
      "3xl": {
        "root": "ring-2 size-23.5 text-8.5/(--ui-font-line-height-reset)",
        "icon": "size-22.5"
      }
    }
  },
  "defaultVariants": {
    "size": "md",
    "color": "air-secondary-no-accent"
  }
};
const _sfc_main$k = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "B24Avatar",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    src: { type: String, required: false },
    alt: { type: String, required: false },
    icon: { type: [Function, Object], required: false },
    text: { type: String, required: false },
    size: { type: null, required: false },
    color: { type: null, required: false },
    chip: { type: [Boolean, Object], required: false },
    class: { type: null, required: false },
    style: { type: null, required: false },
    b24ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("avatar", _props);
    const as = computed(() => {
      if (typeof props.as === "string" || typeof props.as?.render === "function") {
        return { root: props.as };
      }
      return defu(props.as, { root: "span" });
    });
    const fallback = computed(
      () => props.text || (props.alt || "").replace(/[+\-*)(}\][{]/g, "").split(" ").map((word) => word.charAt(0)).join("").substring(0, 2)
    );
    const appConfig2 = useAppConfig();
    const { size: size2, color } = useAvatarGroup(_props);
    const b24ui = computed(() => tv({ extend: tv(theme$c), ...appConfig2.b24ui?.avatar || {} })({
      size: size2.value ?? props.size,
      color: color.value ?? props.color
    }));
    const rootClass = computed(() => b24ui.value.root({ class: [props.b24ui?.root, props.class] }));
    const sizePx = computed(() => {
      const sizeClass = rootClass.value.split(" ").find((c) => /^size-\d+$/.test(c));
      if (sizeClass) {
        const num = Number.parseFloat(sizeClass.split("-")[1] ?? "");
        if (!Number.isNaN(num)) return num * 4;
      }
      return null;
    });
    const error = ref(false);
    watch(() => props.src, () => {
      if (error.value) {
        error.value = false;
      }
    });
    function onError() {
      error.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(props).chip ? _sfc_main$l : unref(Primitive)), mergeProps({
        as: as.value.root
      }, unref(props).chip ? typeof unref(props).chip === "object" ? { inset: true, ...unref(props).chip } : { inset: true } : {}, {
        "data-slot": "root",
        class: rootClass.value,
        style: unref(props).style
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(props).src && !error.value) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(as.value.img || unref(ImageComponent)), mergeProps({
                src: unref(props).src,
                alt: unref(props).alt,
                width: sizePx.value,
                height: sizePx.value
              }, _ctx.$attrs, {
                "data-slot": "image",
                class: b24ui.value.image({ class: unref(props).b24ui?.image }),
                onError
              }), null), _parent2, _scopeId);
            } else {
              _push2(ssrRenderComponent(unref(Slot), _ctx.$attrs, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                      if (unref(props).icon) {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(unref(props).icon), {
                          "data-slot": "icon",
                          class: b24ui.value.icon({ class: unref(props).b24ui?.icon })
                        }, null), _parent3, _scopeId2);
                      } else {
                        _push3(`<span data-slot="fallback" class="${ssrRenderClass(b24ui.value.fallback({ class: unref(props).b24ui?.fallback }))}"${_scopeId2}>${ssrInterpolate(fallback.value || " ")}</span>`);
                      }
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", {}, () => [
                        unref(props).icon ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).icon), {
                          key: 0,
                          "data-slot": "icon",
                          class: b24ui.value.icon({ class: unref(props).b24ui?.icon })
                        }, null, 8, ["class"])) : (openBlock(), createBlock("span", {
                          key: 1,
                          "data-slot": "fallback",
                          class: b24ui.value.fallback({ class: unref(props).b24ui?.fallback })
                        }, toDisplayString(fallback.value || " "), 3))
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            }
          } else {
            return [
              unref(props).src && !error.value ? (openBlock(), createBlock(resolveDynamicComponent(as.value.img || unref(ImageComponent)), mergeProps({
                key: 0,
                src: unref(props).src,
                alt: unref(props).alt,
                width: sizePx.value,
                height: sizePx.value
              }, _ctx.$attrs, {
                "data-slot": "image",
                class: b24ui.value.image({ class: unref(props).b24ui?.image }),
                onError
              }), null, 16, ["src", "alt", "width", "height", "class"])) : (openBlock(), createBlock(unref(Slot), mergeProps({ key: 1 }, _ctx.$attrs), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    unref(props).icon ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).icon), {
                      key: 0,
                      "data-slot": "icon",
                      class: b24ui.value.icon({ class: unref(props).b24ui?.icon })
                    }, null, 8, ["class"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      "data-slot": "fallback",
                      class: b24ui.value.fallback({ class: unref(props).b24ui?.fallback })
                    }, toDisplayString(fallback.value || " "), 3))
                  ])
                ]),
                _: 3
              }, 16))
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Avatar.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
function useComponentIcons(componentProps) {
  const props = computed(() => toValue(componentProps));
  const isLeading = computed(() => props.value.icon && !props.value.trailing || props.value.loading && !props.value.trailing || props.value.avatar);
  const isTrailing = computed(() => props.value.icon && props.value.trailing || props.value.loading && props.value.trailing || !!props.value.trailingIcon);
  const leadingIconName = computed(() => {
    if (props.value.loading) {
      return icons.loading;
    }
    return props.value.icon;
  });
  const trailingIconName = computed(() => {
    if (props.value.loading && !isLeading.value) {
      return icons.loading;
    }
    return props.value.trailingIcon || props.value.icon;
  });
  return {
    isLeading,
    isTrailing,
    leadingIconName,
    trailingIconName
  };
}
const fieldGroupInjectionKey = /* @__PURE__ */ Symbol("bitrix24-ui.field-group");
function useFieldGroup(props) {
  const fieldGroup = inject(fieldGroupInjectionKey, void 0);
  return {
    orientation: computed(() => fieldGroup?.value.orientation),
    size: computed(() => props?.size ?? fieldGroup?.value.size),
    noSplit: computed(() => fieldGroup?.value.orientation !== "horizontal" || fieldGroup?.value.noSplit === true)
  };
}
const FieldGroupReset = defineComponent({
  name: "FieldGroupReset",
  setup(_, { slots }) {
    provide(fieldGroupInjectionKey, computed(() => ({
      size: void 0,
      orientation: void 0,
      noSplit: void 0
    })));
    return () => slots.default?.();
  }
});
const formOptionsInjectionKey = /* @__PURE__ */ Symbol("bitrix24-ui.form-options");
const formBusInjectionKey = /* @__PURE__ */ Symbol("bitrix24-ui.form-events");
const formFieldInjectionKey = /* @__PURE__ */ Symbol("bitrix24-ui.form-field");
const inputIdInjectionKey = /* @__PURE__ */ Symbol("bitrix24-ui.input-id");
const formInputsInjectionKey = /* @__PURE__ */ Symbol("bitrix24-ui.form-inputs");
const formLoadingInjectionKey = /* @__PURE__ */ Symbol("bitrix24-ui.form-loading");
const formErrorsInjectionKey = /* @__PURE__ */ Symbol("bitrix24-ui.form-errors");
function useFormField(props, opts) {
  const formOptions = inject(formOptionsInjectionKey, void 0);
  const formBus = inject(formBusInjectionKey, void 0);
  const formField = inject(formFieldInjectionKey, void 0);
  const inputId = inject(inputIdInjectionKey, void 0);
  provide(formFieldInjectionKey, void 0);
  if (formField && inputId) {
    if (opts?.bind === false) {
      inputId.value = void 0;
    } else if (props?.id) {
      inputId.value = props?.id;
    }
  }
  function emitFormEvent(type, name, eager) {
    if (formBus && formField && name) {
      formBus.emit({ type, name, eager });
    }
  }
  function emitFormBlur() {
    emitFormEvent("blur", formField?.value.name);
  }
  function emitFormFocus() {
    emitFormEvent("focus", formField?.value.name);
  }
  function emitFormChange() {
    emitFormEvent("change", formField?.value.name);
  }
  const emitFormInput = useDebounceFn(
    () => {
      emitFormEvent("input", formField?.value.name, !opts?.deferInputValidation || formField?.value.eagerValidation);
    },
    formField?.value.validateOnInputDelay ?? formOptions?.value.validateOnInputDelay ?? 0
  );
  return {
    id: computed(() => props?.id ?? inputId?.value),
    name: computed(() => props?.name ?? formField?.value.name),
    size: computed(() => props?.size ?? formField?.value.size),
    color: computed(() => formField?.value.error ? "air-primary-alert" : props?.color),
    highlight: computed(() => formField?.value.error ? true : props?.highlight),
    disabled: computed(() => formOptions?.value.disabled || props?.disabled),
    emitFormBlur,
    emitFormInput,
    emitFormChange,
    emitFormFocus,
    ariaAttrs: computed(() => {
      if (!formField?.value) return;
      const descriptiveAttrs = ["error", "hint", "description", "help"].filter((type) => formField?.value?.[type]).map((type) => `${formField?.value.ariaId}-${type}`) || [];
      const attrs = {
        "aria-invalid": !!formField?.value.error
      };
      if (descriptiveAttrs.length > 0) {
        attrs["aria-describedby"] = descriptiveAttrs.join(" ");
      }
      return attrs;
    })
  };
}
const linkKeys = [
  "active",
  "activeClass",
  "ariaCurrentValue",
  "as",
  "disabled",
  "download",
  "exact",
  "exactActiveClass",
  "exactHash",
  "exactQuery",
  "external",
  "form",
  "formaction",
  "formenctype",
  "formmethod",
  "formnovalidate",
  "formtarget",
  "href",
  "hreflang",
  "inactiveClass",
  "locale",
  "media",
  "noPrefetch",
  "noRel",
  "onClick",
  "ping",
  "prefetch",
  "prefetchOn",
  "prefetchedClass",
  "referrerpolicy",
  "rel",
  "replace",
  "target",
  "title",
  "to",
  "trailingSlash",
  "type",
  "viewTransition"
];
function pickLinkProps(link) {
  const keys = Object.keys(link);
  const ariaKeys = keys.filter((key) => key.startsWith("aria-"));
  const dataKeys = keys.filter((key) => key.startsWith("data-"));
  const propsToInclude = [
    ...linkKeys,
    ...ariaKeys,
    ...dataKeys
  ];
  return reactivePick(link, ...propsToInclude);
}
function isPartiallyEqual(item1, item2) {
  const diffedKeys = diff(item1, item2).reduce((filtered, q) => {
    if (q.type === "added") {
      filtered.add(q.key);
    }
    return filtered;
  }, /* @__PURE__ */ new Set());
  const item1Filtered = Object.fromEntries(Object.entries(item1).filter(([key]) => !diffedKeys.has(key)));
  const item2Filtered = Object.fromEntries(Object.entries(item2).filter(([key]) => !diffedKeys.has(key)));
  return isEqual(item1Filtered, item2Filtered);
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
    const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
    if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!unref(props.target) && unref(props.target) !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = unref(props.to) || unref(props.href) || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (unref(props.external)) {
        return true;
      }
      const path = unref(props.to) || unref(props.href) || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = unref(props.to) || unref(props.href) || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve, unref(props.trailingSlash));
    });
    const link = isExternal.value ? void 0 : useBuiltinLink?.({ ...props, to, viewTransition: unref(props.viewTransition) });
    const href = computed(() => {
      const effectiveTrailingSlash = unref(props.trailingSlash) ?? options.trailingSlash;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return applyTrailingSlashBehavior(href2, effectiveTrailingSlash);
      }
      if (typeof to.value === "object") {
        return router.resolve(to.value)?.href ?? null;
      }
      return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: link?.isActive ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: link?.isExactActive ?? computed(() => to.value === router.currentRoute.value.path),
      route: link?.route ?? computed(() => router.resolve(to.value)),
      async navigate(_e) {
        await navigateTo(href.value, { replace: unref(props.replace), external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Behavior
      trailingSlash: {
        type: String,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      const router = useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      shallowRef(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", {
          ref: el,
          href: href.value || null,
          // converts `""` to `null` to prevent the attribute from being added as empty (`href=""`)
          rel,
          target,
          onClick: async (event) => {
            if (isExternal.value || hasTarget.value) {
              return;
            }
            event.preventDefault();
            try {
              const encodedHref = encodeRoutePath(href.value);
              return await (props.replace ? router.replace(encodedHref) : router.push(encodedHref));
            } finally {
            }
          }
        }, slots.default?.());
      };
    }
  });
}
const __nuxt_component_0$1 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const _sfc_main$j = {
  __name: "B24LinkBase",
  __ssrInlineRender: true,
  props: {
    as: { type: String, required: false, default: "button" },
    type: { type: String, required: false, default: "button" },
    disabled: { type: Boolean, required: false },
    onClick: { type: [Function, Array], required: false },
    href: { type: String, required: false },
    navigate: { type: Function, required: false },
    target: { type: [String, Object, null], required: false },
    rel: { type: [String, Object, null], required: false },
    active: { type: Boolean, required: false },
    isExternal: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    function onClickWrapper(e) {
      if (props.disabled) {
        e.stopPropagation();
        e.preventDefault();
        return;
      }
      if (props.onClick) {
        for (const onClick of Array.isArray(props.onClick) ? props.onClick : [props.onClick]) {
          onClick(e);
        }
      }
      if (props.href && props.navigate && !props.isExternal) {
        props.navigate(e);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps(__props.href ? {
        "as": "a",
        "href": __props.disabled ? void 0 : __props.href,
        "aria-disabled": __props.disabled ? "true" : void 0,
        "role": __props.disabled ? "link" : void 0,
        "tabindex": __props.disabled ? -1 : void 0
      } : __props.as === "button" ? {
        as: __props.as,
        type: __props.type,
        disabled: __props.disabled
      } : {
        as: __props.as
      }, {
        rel: __props.rel,
        target: __props.target,
        onClick: onClickWrapper
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
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/LinkBase.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const theme$b = {
  "base": "cursor-pointer focus-visible:outline-(--ui-color-accent-main-primary) focus-visible:outline-1 focus-visible:rounded-[4px] text-start",
  "variants": {
    "active": {
      "true": "text-(--ui-color-accent-main-primary) outline-(--ui-color-accent-main-primary) hover:not-disabled:not-aria-disabled:underline underline-offset-2",
      "false": "text-(--ui-color-design-selection-content) underline-offset-2"
    },
    "disabled": {
      "true": "cursor-not-allowed opacity-75"
    },
    "isAction": {
      "true": "text-nowrap text-(length:--ui-font-size-sm) h-auto py-0 font-(--ui-font-weight-normal) rounded-none border border-x-0 border-t-0 border-dashed text-(--ui-color-design-outline-a1-content) border-b-(--ui-color-design-outline-a1-content) hover:not-disabled:not-aria-disabled:no-underline hover:text(--ui-color-accent-soft-element-red) hover:not-disabled:not-aria-disabled:text-(--ui-color-accent-soft-element-red) hover:border-b-(--ui-color-accent-soft-element-red) focus-visible:outline-(--ui-color-accent-soft-element-red)"
    }
  },
  "compoundVariants": [
    {
      "active": false,
      "disabled": false,
      "class": "hover:text-(--ui-color-accent-main-primary-alt-2) hover:underline"
    }
  ]
};
const _sfc_main$i = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "B24Link",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "button" },
    type: { type: null, required: false, default: "button" },
    disabled: { type: Boolean, required: false },
    active: { type: Boolean, required: false, default: void 0 },
    exact: { type: Boolean, required: false },
    exactQuery: { type: [Boolean, String], required: false },
    exactHash: { type: Boolean, required: false },
    inactiveClass: { type: String, required: false },
    custom: { type: Boolean, required: false },
    isAction: { type: Boolean, required: false, default: false },
    raw: { type: Boolean, required: false },
    locale: { type: [Boolean, String], required: false },
    class: { type: null, required: false },
    to: { type: null, required: false },
    href: { type: null, required: false },
    external: { type: Boolean, required: false },
    target: { type: [String, Object, null], required: false },
    rel: { type: [String, Object, null], required: false },
    noRel: { type: Boolean, required: false },
    prefetchedClass: { type: String, required: false },
    prefetch: { type: Boolean, required: false },
    prefetchOn: { type: [String, Object], required: false },
    noPrefetch: { type: Boolean, required: false },
    trailingSlash: { type: String, required: false },
    activeClass: { type: String, required: false },
    exactActiveClass: { type: String, required: false },
    ariaCurrentValue: { type: String, required: false, default: "page" },
    viewTransition: { type: Boolean, required: false },
    replace: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const appConfig2 = useAppConfig();
    const nuxtApp = useNuxtApp();
    const nuxtLinkProps = useForwardProps$1(reactiveOmit(props, "as", "type", "disabled", "active", "exact", "exactQuery", "exactHash", "activeClass", "inactiveClass", "to", "href", "raw", "custom", "locale", "class"));
    const b24ui = computed(() => tv({
      extend: tv(theme$b),
      ...defu({
        variants: {
          active: {
            true: mergeClasses(appConfig2.b24ui?.link?.variants?.active?.true, props.activeClass),
            false: mergeClasses(appConfig2.b24ui?.link?.variants?.active?.false, props.inactiveClass)
          }
        }
      }, appConfig2.b24ui?.link || {})
    }));
    const to = computed(() => {
      const path = props.to ?? props.href;
      if (!path) return path;
      if (typeof path !== "string") return path;
      if (props.external || hasProtocol(path, { acceptRelative: true })) {
        return path;
      }
      if (props.locale === false) {
        return path;
      }
      const localePath = nuxtApp.$localePath;
      if (!localePath) {
        return path;
      }
      const i18n = nuxtApp.$i18n;
      const codes = i18n?.localeCodes?.value;
      if (codes?.length && new RegExp(`^/(${codes.join("|")})($|[/?#])`).test(path)) {
        return path;
      }
      return localePath(path, typeof props.locale === "string" ? props.locale : void 0);
    });
    const isInternalLink = computed(() => {
      if (!to.value) return false;
      if (props.external) return false;
      if (typeof to.value !== "string") return true;
      if (hasProtocol(to.value, { acceptRelative: true })) return false;
      if (props.target && props.target !== "_self") return false;
      return true;
    });
    const externalRel = computed(() => {
      if (props.noRel) return null;
      if (props.rel) return props.rel;
      return "noopener noreferrer";
    });
    function isLinkActive({ route: linkRoute, isActive, isExactActive } = {}) {
      if (props.active !== void 0) {
        return props.active;
      }
      if (!to.value) {
        return false;
      }
      if (props.exactQuery === "partial") {
        if (!isPartiallyEqual(linkRoute.query, route.query)) return false;
      } else if (props.exactQuery === true) {
        if (!isEqual(linkRoute.query, route.query)) return false;
      }
      if (props.exactHash && linkRoute.hash !== route.hash) {
        return false;
      }
      if (props.exact && isExactActive) {
        return true;
      }
      if (!props.exact && isActive) {
        return true;
      }
      return false;
    }
    function resolveLinkClass({ route: route2, isActive, isExactActive } = {}) {
      const active = isLinkActive({ route: route2, isActive, isExactActive });
      if (props.raw) {
        return [props.class, active ? props.activeClass : props.inactiveClass];
      }
      return b24ui.value({
        class: props.class,
        active,
        disabled: props.disabled,
        isAction: Boolean(props.isAction)
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (isInternalLink.value) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps(unref(nuxtLinkProps), {
          to: to.value,
          custom: ""
        }, _attrs), {
          default: withCtx(({ href, navigate, route: linkRoute, isActive, isExactActive, ...rest }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.custom) {
                _push2(ssrRenderComponent(unref(Slot), null, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "default", {
                        ..._ctx.$attrs,
                        ...__props.exact && isExactActive ? { "aria-current": props.ariaCurrentValue } : {},
                        as: __props.as,
                        type: __props.type,
                        disabled: __props.disabled,
                        href,
                        navigate,
                        rel: rest.rel,
                        target: rest.target,
                        isExternal: rest.isExternal,
                        active: isLinkActive({ route: linkRoute, isActive, isExactActive })
                      }, null, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "default", {
                          ..._ctx.$attrs,
                          ...__props.exact && isExactActive ? { "aria-current": props.ariaCurrentValue } : {},
                          as: __props.as,
                          type: __props.type,
                          disabled: __props.disabled,
                          href,
                          navigate,
                          rel: rest.rel,
                          target: rest.target,
                          isExternal: rest.isExternal,
                          active: isLinkActive({ route: linkRoute, isActive, isExactActive })
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_sfc_main$j, mergeProps({
                  ..._ctx.$attrs,
                  ...__props.exact && isExactActive ? { "aria-current": props.ariaCurrentValue } : {},
                  as: __props.as,
                  type: __props.type,
                  disabled: __props.disabled,
                  href,
                  navigate,
                  rel: rest.rel,
                  target: rest.target,
                  isExternal: rest.isExternal
                }, {
                  class: resolveLinkClass({ route: linkRoute, isActive, isExactActive })
                }), {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "default", {
                        active: isLinkActive({ route: linkRoute, isActive, isExactActive })
                      }, null, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "default", {
                          active: isLinkActive({ route: linkRoute, isActive, isExactActive })
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              }
            } else {
              return [
                __props.custom ? (openBlock(), createBlock(unref(Slot), { key: 0 }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default", {
                      ..._ctx.$attrs,
                      ...__props.exact && isExactActive ? { "aria-current": props.ariaCurrentValue } : {},
                      as: __props.as,
                      type: __props.type,
                      disabled: __props.disabled,
                      href,
                      navigate,
                      rel: rest.rel,
                      target: rest.target,
                      isExternal: rest.isExternal,
                      active: isLinkActive({ route: linkRoute, isActive, isExactActive })
                    })
                  ]),
                  _: 2
                }, 1024)) : (openBlock(), createBlock(_sfc_main$j, mergeProps({ key: 1 }, {
                  ..._ctx.$attrs,
                  ...__props.exact && isExactActive ? { "aria-current": props.ariaCurrentValue } : {},
                  as: __props.as,
                  type: __props.type,
                  disabled: __props.disabled,
                  href,
                  navigate,
                  rel: rest.rel,
                  target: rest.target,
                  isExternal: rest.isExternal
                }, {
                  class: resolveLinkClass({ route: linkRoute, isActive, isExactActive })
                }), {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default", {
                      active: isLinkActive({ route: linkRoute, isActive, isExactActive })
                    })
                  ]),
                  _: 2
                }, 1040, ["class"]))
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (__props.custom) {
        _push(ssrRenderComponent(unref(Slot), _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {
                ..._ctx.$attrs,
                as: __props.as,
                type: __props.type,
                disabled: __props.disabled,
                ...to.value ? { href: String(to.value), target: props.target, rel: externalRel.value, isExternal: true } : {},
                active: __props.active ?? false
              }, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  ..._ctx.$attrs,
                  as: __props.as,
                  type: __props.type,
                  disabled: __props.disabled,
                  ...to.value ? { href: String(to.value), target: props.target, rel: externalRel.value, isExternal: true } : {},
                  active: __props.active ?? false
                })
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(ssrRenderComponent(_sfc_main$j, mergeProps({
          ..._ctx.$attrs,
          as: __props.as,
          type: __props.type,
          disabled: __props.disabled,
          ...to.value ? { href: String(to.value), target: props.target, rel: externalRel.value, isExternal: true } : {}
        }, {
          class: resolveLinkClass()
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {
                active: __props.active ?? false
              }, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  active: __props.active ?? false
                })
              ];
            }
          }),
          _: 3
        }, _parent));
      }
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Link.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const theme$a = {
  "slots": {
    "base": "ui-btn font-[family-name:var(--ui-font-family-primary)] select-none cursor-pointer inline-flex items-center relative outline-transparent focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-30 aria-disabled:opacity-30 transition duration-0 ease-linear border-(length:--ui-btn-border-width) text-(--ui-btn-color) bg-(--ui-btn-background) border-(--ui-btn-border-color) hover:text-(--ui-btn-color-hover) hover:bg-(--ui-btn-background-hover) hover:border-(--ui-btn-border-color-hover) focus:text-(--ui-btn-color-hover) focus:bg-(--ui-btn-background-hover) focus:border-(--ui-btn-border-color-hover) active:text-(--ui-btn-color-active) active:bg-(--ui-btn-background-active) active:border-(--ui-btn-border-color-active) disabled:bg-(--ui-btn-background) disabled:border-(--ui-btn-border-color) aria-disabled:bg-(--ui-btn-background) aria-disabled:border-(--ui-btn-border-color) focus-visible:outline-(--ui-btn-background) ring-(--ui-btn-background-hover) focus:outline-none focus-visible:ring-(--ui-btn-background-hover) h-(--ui-btn-height) text-(length:--ui-btn-font-size) leading-(--ui-btn-height) font-(--ui-btn-font-weight)",
    "baseLoading": "h-full w-full absolute inset-0 flex flex-row flex-nowrap items-center justify-center",
    "baseLoadingWaitIcon": "text-(--ui-btn-color) size-[calc(var(--ui-btn-wait-icon-size)_+_7px)]",
    "baseLoadingClockIcon": "text-(--ui-btn-color) size-[calc(var(--ui-btn-wait-icon-size)_+_7px)]",
    "baseLoadingSpinnerIcon": "text-(--ui-btn-color) size-(--ui-btn-wait-icon-size) animate-spin stroke-2",
    "baseLine": "w-full inline-flex items-center justify-center gap-(--ui-btn-icon-space) ps-(--ui-btn-padding-left) pe-(--ui-btn-padding-right) h-(--ui-btn-height)",
    "label": "h-(--ui-btn-height) max-w-full inline-flex flex-row items-center tracking-(--ui-btn-letter-spacing) overflow-visible text-clip",
    "labelInner": "truncate inline-block max-w-full mt-(--ui-btn-title-compensation)",
    "leadingIcon": "text-(--ui-btn-color) shrink-0 size-(--ui-btn-icon-size)",
    "leadingAvatar": "shrink-0 me-[4px]",
    "leadingAvatarSize": "",
    "trailingIcon": "text-(--ui-btn-color) shrink-0 size-(--ui-btn-icon-size) mt-(--ui-btn-title-compensation)",
    "safeList": "invisible"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": "focus-visible:outline-none ring ring-inset ring-0 focus-visible:ring-2 group-[.is-field-group]/items:not-only:first:rounded-e-none group-[.is-field-group]/items:not-only:last:rounded-s-none group-[.is-field-group]/items:not-last:not-first:rounded-none group-[.is-field-group]/items:not-only:first:border-e-0 group-[.is-field-group]/items:not-only:not-first:border-s-0 focus-visible:z-[1]",
      "vertical": "focus-visible:outline-none ring ring-inset ring-0 focus-visible:ring-2 not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
    },
    "noSplit": {
      "false": "group-[.is-field-group]/items:not-only:not-first:after:content-[''] group-[.is-field-group]/items:not-only:not-first:after:absolute group-[.is-field-group]/items:not-only:not-first:after:top-[7px] group-[.is-field-group]/items:not-only:not-first:after:bottom-[6px] group-[.is-field-group]/items:not-only:not-first:after:left-0 group-[.is-field-group]/items:not-only:not-first:after:w-px group-[.is-field-group]/items:not-only:not-first:after:bg-current/30"
    },
    "color": {
      "air-primary": "--style-filled",
      "air-primary-success": "--style-filled-success",
      "air-primary-alert": "--style-filled-alert",
      "air-primary-copilot": "--style-filled-copilot",
      "air-secondary": "--style-tinted",
      "air-secondary-alert": "--style-tinted-alert",
      "air-secondary-accent": "--style-outline",
      "air-secondary-accent-1": "--style-outline-accent-1",
      "air-secondary-accent-2": "--style-outline-accent-2",
      "air-secondary-no-accent": "--style-outline-no-accent",
      "air-tertiary": "--style-plain",
      "air-tertiary-accent": "--style-plain-accent",
      "air-tertiary-no-accent": "--style-plain-no-accent",
      "air-selection": "--style-selection",
      "air-boost": {
        "base": "--style-filled-boost bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:bg-transparent aria-disabled:bg-transparent from-0% via-58.65% to-100% bg-radial-[110.42%_110.42%_at_-10.42%_31.25%] from-(--ui-color-design-filled-boost-bg-gradient-1) via-(--ui-color-design-filled-boost-bg-gradient-2) to-(--ui-color-design-filled-boost-bg-gradient-3) hover:bg-radial-[110.42%_110.42%_at_-10.42%_31.25%] hover:from-(--hover-color-1) via-(--hover-color-2) hover:via-58.65% hover:to-(--hover-color-3) focus:bg-radial-[110.42%_110.42%_at_-10.42%_31.25%] focus:from-(--hover-color-1) via-(--hover-color-2) focus:via-58.65% to-(--hover-color-3) active:bg-radial-[110.42%_110.42%_at_-10.42%_31.25%] active:from-(--active-color-1) via-(--active-color-2) active:via-58.65% to-(--active-color-3) disabled:bg-radial-[110.42%_110.42%_at_-10.42%_31.25%] disabled:from-(--ui-color-design-filled-boost-bg-gradient-1) via-(--ui-color-design-filled-boost-bg-gradient-2) to-(--ui-color-design-filled-boost-bg-gradient-3) aria-disabled:bg-radial-[110.42%_110.42%_at_-10.42%_31.25%] aria-disabled:from-(--ui-color-design-filled-boost-bg-gradient-1) aria-disabled:via-(--ui-color-design-filled-boost-bg-gradient-2) aria-disabled:to-(--ui-color-design-filled-boost-bg-gradient-3)"
      },
      "default": "",
      "danger": "",
      "success": "",
      "warning": "",
      "primary": "",
      "secondary": "",
      "collab": "",
      "ai": "",
      "link": ""
    },
    "depth": {
      "light": "",
      "normal": "",
      "dark": ""
    },
    "size": {
      "xss": {
        "base": "ui-btn-xss",
        "leadingAvatarSize": "2xs"
      },
      "xs": {
        "base": "ui-btn-xs",
        "leadingAvatarSize": "2xs"
      },
      "sm": {
        "base": "ui-btn-sm",
        "leadingAvatarSize": "xs"
      },
      "md": {
        "base": "ui-btn-md",
        "leadingAvatarSize": "xs"
      },
      "lg": {
        "base": "ui-btn-lg",
        "leadingAvatarSize": "md"
      },
      "xl": {
        "base": "ui-btn-xl",
        "leadingAvatarSize": "md"
      }
    },
    "block": {
      "true": {
        "base": "w-full"
      }
    },
    "rounded": {
      "true": "rounded-(--ui-border-radius-lg)",
      "false": "rounded-(--ui-btn-radius)"
    },
    "leading": {
      "true": ""
    },
    "active": {
      "true": {
        "base": ""
      },
      "false": {
        "base": ""
      }
    },
    "useLabel": {
      "true": "",
      "false": {
        "baseLine": "ps-[4px] pe-[4px]",
        "leadingAvatar": "me-0"
      }
    },
    "useDropdown": {
      "true": ""
    },
    "useWait": {
      "true": ""
    },
    "useClock": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "normalCase": {
      "true": "normal-case",
      "false": "uppercase"
    },
    "isAir": {
      "true": "--air",
      "false": ""
    }
  },
  "compoundVariants": [
    {
      "color": "default",
      "depth": "light",
      "class": "--style-default-light"
    },
    {
      "color": "default",
      "depth": "normal",
      "class": "--style-default"
    },
    {
      "color": "default",
      "depth": "dark",
      "class": "--style-default-dark"
    },
    {
      "color": "danger",
      "depth": "light",
      "class": "--style-danger-light"
    },
    {
      "color": "danger",
      "depth": "normal",
      "class": "--style-danger"
    },
    {
      "color": "danger",
      "depth": "dark",
      "class": "--style-danger-dark"
    },
    {
      "color": "success",
      "depth": "light",
      "class": "--style-success-light"
    },
    {
      "color": "success",
      "depth": "normal",
      "class": "--style-success"
    },
    {
      "color": "success",
      "depth": "dark",
      "class": "--style-success-dark"
    },
    {
      "color": "warning",
      "depth": "light",
      "class": "--style-warning-light"
    },
    {
      "color": "warning",
      "depth": "normal",
      "class": "--style-warning"
    },
    {
      "color": "warning",
      "depth": "dark",
      "class": "--style-warning-dark"
    },
    {
      "color": "primary",
      "depth": "light",
      "class": "--style-primary-light"
    },
    {
      "color": "primary",
      "depth": "normal",
      "class": "--style-primary"
    },
    {
      "color": "primary",
      "depth": "dark",
      "class": "--style-primary-dark"
    },
    {
      "color": "secondary",
      "depth": "light",
      "class": "--style-secondary-light"
    },
    {
      "color": "secondary",
      "depth": "normal",
      "class": "--style-secondary"
    },
    {
      "color": "secondary",
      "depth": "dark",
      "class": "--style-secondary-dark"
    },
    {
      "color": "collab",
      "depth": "light",
      "class": "--style-collab-light"
    },
    {
      "color": "collab",
      "depth": "normal",
      "class": "--style-collab"
    },
    {
      "color": "collab",
      "depth": "dark",
      "class": "--style-collab-dark"
    },
    {
      "color": "ai",
      "depth": "light",
      "class": "--style-ai-light"
    },
    {
      "color": "ai",
      "depth": "normal",
      "class": "--style-ai"
    },
    {
      "color": "ai",
      "depth": "dark",
      "class": "--style-ai-dark"
    },
    {
      "color": "link",
      "depth": "light",
      "class": "--style-link-light"
    },
    {
      "color": "link",
      "depth": "normal",
      "class": "--style-link"
    },
    {
      "color": "link",
      "depth": "dark",
      "class": "--style-link-dark"
    },
    {
      "leading": true,
      "useLabel": true,
      "useDropdown": false,
      "class": {
        "baseLine": "ps-[calc(var(--ui-btn-padding-left)_-_var(--ui-btn-icon-compensation))]"
      }
    },
    {
      "leading": false,
      "useLabel": true,
      "useDropdown": true,
      "class": {
        "baseLine": "pe-[calc(var(--ui-btn-padding-right)_-_var(--ui-btn-icon-compensation))]"
      }
    },
    {
      "leading": true,
      "useLabel": true,
      "useDropdown": true,
      "class": {
        "baseLine": "ps-[calc(var(--ui-btn-padding-left)_-_var(--ui-btn-icon-compensation))] pe-[calc(var(--ui-btn-padding-right)_-_var(--ui-btn-icon-compensation))]"
      }
    },
    {
      "leading": true,
      "useLabel": false,
      "useDropdown": false,
      "class": {
        "base": "w-(--ui-btn-height)"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "air-secondary-no-accent",
    "depth": "normal",
    "normalCase": true,
    "isAir": true
  }
};
const _sfc_main$h = {
  __name: "B24Button",
  __ssrInlineRender: true,
  props: {
    label: { type: String, required: false },
    color: { type: null, required: false },
    activeColor: { type: null, required: false },
    depth: { type: null, required: false },
    activeDepth: { type: null, required: false },
    size: { type: null, required: false },
    rounded: { type: Boolean, required: false },
    block: { type: Boolean, required: false },
    loadingAuto: { type: Boolean, required: false },
    normalCase: { type: Boolean, required: false, default: true },
    useWait: { type: Boolean, required: false },
    useClock: { type: Boolean, required: false },
    useDropdown: { type: Boolean, required: false },
    onClick: { type: [Function, Array], required: false },
    class: { type: null, required: false },
    activeClass: { type: String, required: false },
    inactiveClass: { type: String, required: false },
    b24ui: { type: Object, required: false },
    icon: { type: [Function, Object], required: false },
    avatar: { type: Object, required: false },
    loading: { type: Boolean, required: false },
    as: { type: null, required: false },
    type: { type: null, required: false, default: "button" },
    disabled: { type: Boolean, required: false },
    active: { type: Boolean, required: false },
    exact: { type: Boolean, required: false },
    exactQuery: { type: [Boolean, String], required: false },
    exactHash: { type: Boolean, required: false },
    isAction: { type: Boolean, required: false },
    locale: { type: [Boolean, String], required: false },
    to: { type: null, required: false },
    href: { type: null, required: false },
    external: { type: Boolean, required: false },
    target: { type: [String, Object, null], required: false },
    rel: { type: [String, Object, null], required: false },
    noRel: { type: Boolean, required: false },
    prefetchedClass: { type: String, required: false },
    prefetch: { type: Boolean, required: false },
    prefetchOn: { type: [String, Object], required: false },
    noPrefetch: { type: Boolean, required: false },
    trailingSlash: { type: String, required: false },
    exactActiveClass: { type: String, required: false },
    ariaCurrentValue: { type: String, required: false },
    viewTransition: { type: Boolean, required: false },
    replace: { type: Boolean, required: false }
  },
  setup(__props) {
    const _props = __props;
    const slots = useSlots();
    const props = useComponentProps("button", _props);
    const appConfig2 = useAppConfig();
    const { orientation, size: buttonSize, noSplit } = useFieldGroup(_props);
    const linkProps = useForwardProps(pickLinkProps(props));
    const proxyLinkProps = computed(() => {
      return omit(linkProps.value, ["type", "disabled", "onClick"]);
    });
    const loadingAutoState = ref(false);
    const formLoading = inject(formLoadingInjectionKey, void 0);
    async function onClickWrapper(event) {
      loadingAutoState.value = true;
      const callbacks = Array.isArray(props.onClick) ? props.onClick : [props.onClick];
      try {
        await Promise.all(callbacks.map((fn) => fn?.(event)));
      } finally {
        loadingAutoState.value = false;
      }
    }
    const isLoading = computed(() => {
      return props.loading || props.loadingAuto && (loadingAutoState.value || formLoading?.value && props.type === "submit");
    });
    const { isLeading, leadingIconName } = useComponentIcons(
      computed(() => ({ ...props, loading: false }))
    );
    const isLabel = computed(() => {
      let isUseSlot = false;
      if (slots && !!slots.default) {
        isUseSlot = true;
      }
      return (props?.label || "").length > 0 || isUseSlot;
    });
    const b24ui = computed(() => tv({
      extend: tv(theme$a),
      ...defu({
        variants: {
          active: {
            true: {
              base: mergeClasses(appConfig2.b24ui?.button?.variants?.active?.true?.base, props.activeClass)
            },
            false: {
              base: mergeClasses(appConfig2.b24ui?.button?.variants?.active?.false?.base, props.inactiveClass)
            }
          }
        }
      }, appConfig2.b24ui?.button || {})
    })({
      color: props.color,
      depth: props.depth,
      size: buttonSize.value ?? props.size,
      noSplit: Boolean(noSplit.value),
      loading: Boolean(isLoading.value),
      useLabel: Boolean(isLabel.value),
      block: Boolean(props.block),
      normalCase: Boolean(props.normalCase),
      rounded: Boolean(props.rounded),
      useDropdown: Boolean(props.useDropdown),
      useWait: Boolean(props.useWait),
      useClock: Boolean(props.useClock),
      leading: Boolean(isLeading.value),
      fieldGroup: orientation.value,
      isAir: true
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$i, mergeProps({
        type: unref(props).type,
        disabled: unref(props).disabled || isLoading.value
      }, proxyLinkProps.value, { custom: "" }, _attrs), {
        default: withCtx(({ active, ...slotProps }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$j, mergeProps(slotProps, {
              "data-slot": "base",
              class: b24ui.value.base({
                class: [unref(props).b24ui?.base, unref(props).class],
                active,
                ...active && unref(props).activeDepth ? { depth: unref(props).activeDepth } : {},
                ...active && unref(props).activeColor ? { color: unref(props).activeColor } : {}
              }),
              onClick: onClickWrapper
            }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (isLoading.value) {
                    _push3(`<div data-slot="baseLoading" class="${ssrRenderClass(b24ui.value.baseLoading({ class: unref(props).b24ui?.baseLoading, active }))}"${_scopeId2}>`);
                    if (unref(props).useWait) {
                      _push3(ssrRenderComponent(unref(LoaderWaitIcon), {
                        "data-slot": "baseLoadingWaitIcon",
                        class: b24ui.value.baseLoadingWaitIcon({ class: unref(props).b24ui?.baseLoadingWaitIcon }),
                        "aria-hidden": "true"
                      }, null, _parent3, _scopeId2));
                    } else if (unref(props).useClock) {
                      _push3(ssrRenderComponent(unref(LoaderClockIcon), {
                        "data-slot": "baseLoadingClockIcon",
                        class: b24ui.value.baseLoadingClockIcon({ class: unref(props).b24ui?.baseLoadingClockIcon }),
                        "aria-hidden": "true"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(unref(SpinnerIcon), {
                        "data-slot": "baseLoadingSpinnerIcon",
                        class: b24ui.value.baseLoadingSpinnerIcon({ class: unref(props).b24ui?.baseLoadingSpinnerIcon }),
                        "aria-hidden": "true"
                      }, null, _parent3, _scopeId2));
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div data-slot="baseLine" class="${ssrRenderClass([b24ui.value.baseLine({ class: [unref(props).b24ui?.baseLine] }), isLoading.value ? "invisible" : ""])}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "leading", { b24ui: b24ui.value }, () => {
                    if (unref(isLeading) && typeof unref(leadingIconName) !== "undefined") {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(unref(leadingIconName)), {
                        "data-slot": "leadingIcon",
                        class: b24ui.value.leadingIcon({ class: unref(props).b24ui?.leadingIcon })
                      }, null), _parent3, _scopeId2);
                    } else if (!!unref(props).avatar) {
                      _push3(ssrRenderComponent(_sfc_main$k, mergeProps({
                        size: unref(props).b24ui?.leadingAvatarSize || b24ui.value.leadingAvatarSize()
                      }, unref(props).avatar, {
                        "data-slot": "leadingAvatar",
                        class: b24ui.value.leadingAvatar({ class: unref(props).b24ui?.leadingAvatar })
                      }), null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  }, _push3, _parent3, _scopeId2);
                  ssrRenderSlot(_ctx.$slots, "default", { b24ui: b24ui.value }, () => {
                    if (unref(props).label !== void 0 && unref(props).label !== null) {
                      _push3(`<span data-slot="label" class="${ssrRenderClass(b24ui.value.label({ class: unref(props).b24ui?.label, active }))}"${_scopeId2}><span data-slot="labelInner" class="${ssrRenderClass(b24ui.value.labelInner({ class: unref(props).b24ui?.labelInner, active }))}"${_scopeId2}>${ssrInterpolate(unref(props).label)}</span></span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  }, _push3, _parent3, _scopeId2);
                  ssrRenderSlot(_ctx.$slots, "trailing", { b24ui: b24ui.value }, () => {
                    if (unref(props).useDropdown) {
                      _push3(ssrRenderComponent(unref(ChevronDownSIcon), {
                        "data-slot": "trailingIcon",
                        class: b24ui.value.trailingIcon({ class: unref(props).b24ui?.trailingIcon }),
                        "aria-hidden": "true"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                } else {
                  return [
                    isLoading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      "data-slot": "baseLoading",
                      class: b24ui.value.baseLoading({ class: unref(props).b24ui?.baseLoading, active })
                    }, [
                      unref(props).useWait ? (openBlock(), createBlock(unref(LoaderWaitIcon), {
                        key: 0,
                        "data-slot": "baseLoadingWaitIcon",
                        class: b24ui.value.baseLoadingWaitIcon({ class: unref(props).b24ui?.baseLoadingWaitIcon }),
                        "aria-hidden": "true"
                      }, null, 8, ["class"])) : unref(props).useClock ? (openBlock(), createBlock(unref(LoaderClockIcon), {
                        key: 1,
                        "data-slot": "baseLoadingClockIcon",
                        class: b24ui.value.baseLoadingClockIcon({ class: unref(props).b24ui?.baseLoadingClockIcon }),
                        "aria-hidden": "true"
                      }, null, 8, ["class"])) : (openBlock(), createBlock(unref(SpinnerIcon), {
                        key: 2,
                        "data-slot": "baseLoadingSpinnerIcon",
                        class: b24ui.value.baseLoadingSpinnerIcon({ class: unref(props).b24ui?.baseLoadingSpinnerIcon }),
                        "aria-hidden": "true"
                      }, null, 8, ["class"]))
                    ], 2)) : createCommentVNode("", true),
                    createVNode("div", {
                      "data-slot": "baseLine",
                      class: [b24ui.value.baseLine({ class: [unref(props).b24ui?.baseLine] }), isLoading.value ? "invisible" : ""]
                    }, [
                      renderSlot(_ctx.$slots, "leading", { b24ui: b24ui.value }, () => [
                        unref(isLeading) && typeof unref(leadingIconName) !== "undefined" ? (openBlock(), createBlock(resolveDynamicComponent(unref(leadingIconName)), {
                          key: 0,
                          "data-slot": "leadingIcon",
                          class: b24ui.value.leadingIcon({ class: unref(props).b24ui?.leadingIcon })
                        }, null, 8, ["class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$k, mergeProps({
                          key: 1,
                          size: unref(props).b24ui?.leadingAvatarSize || b24ui.value.leadingAvatarSize()
                        }, unref(props).avatar, {
                          "data-slot": "leadingAvatar",
                          class: b24ui.value.leadingAvatar({ class: unref(props).b24ui?.leadingAvatar })
                        }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                      ]),
                      renderSlot(_ctx.$slots, "default", { b24ui: b24ui.value }, () => [
                        unref(props).label !== void 0 && unref(props).label !== null ? (openBlock(), createBlock("span", {
                          key: 0,
                          "data-slot": "label",
                          class: b24ui.value.label({ class: unref(props).b24ui?.label, active })
                        }, [
                          createVNode("span", {
                            "data-slot": "labelInner",
                            class: b24ui.value.labelInner({ class: unref(props).b24ui?.labelInner, active })
                          }, toDisplayString(unref(props).label), 3)
                        ], 2)) : createCommentVNode("", true)
                      ]),
                      renderSlot(_ctx.$slots, "trailing", { b24ui: b24ui.value }, () => [
                        unref(props).useDropdown ? (openBlock(), createBlock(unref(ChevronDownSIcon), {
                          key: 0,
                          "data-slot": "trailingIcon",
                          class: b24ui.value.trailingIcon({ class: unref(props).b24ui?.trailingIcon }),
                          "aria-hidden": "true"
                        }, null, 8, ["class"])) : createCommentVNode("", true)
                      ])
                    ], 2)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$j, mergeProps(slotProps, {
                "data-slot": "base",
                class: b24ui.value.base({
                  class: [unref(props).b24ui?.base, unref(props).class],
                  active,
                  ...active && unref(props).activeDepth ? { depth: unref(props).activeDepth } : {},
                  ...active && unref(props).activeColor ? { color: unref(props).activeColor } : {}
                }),
                onClick: onClickWrapper
              }), {
                default: withCtx(() => [
                  isLoading.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-slot": "baseLoading",
                    class: b24ui.value.baseLoading({ class: unref(props).b24ui?.baseLoading, active })
                  }, [
                    unref(props).useWait ? (openBlock(), createBlock(unref(LoaderWaitIcon), {
                      key: 0,
                      "data-slot": "baseLoadingWaitIcon",
                      class: b24ui.value.baseLoadingWaitIcon({ class: unref(props).b24ui?.baseLoadingWaitIcon }),
                      "aria-hidden": "true"
                    }, null, 8, ["class"])) : unref(props).useClock ? (openBlock(), createBlock(unref(LoaderClockIcon), {
                      key: 1,
                      "data-slot": "baseLoadingClockIcon",
                      class: b24ui.value.baseLoadingClockIcon({ class: unref(props).b24ui?.baseLoadingClockIcon }),
                      "aria-hidden": "true"
                    }, null, 8, ["class"])) : (openBlock(), createBlock(unref(SpinnerIcon), {
                      key: 2,
                      "data-slot": "baseLoadingSpinnerIcon",
                      class: b24ui.value.baseLoadingSpinnerIcon({ class: unref(props).b24ui?.baseLoadingSpinnerIcon }),
                      "aria-hidden": "true"
                    }, null, 8, ["class"]))
                  ], 2)) : createCommentVNode("", true),
                  createVNode("div", {
                    "data-slot": "baseLine",
                    class: [b24ui.value.baseLine({ class: [unref(props).b24ui?.baseLine] }), isLoading.value ? "invisible" : ""]
                  }, [
                    renderSlot(_ctx.$slots, "leading", { b24ui: b24ui.value }, () => [
                      unref(isLeading) && typeof unref(leadingIconName) !== "undefined" ? (openBlock(), createBlock(resolveDynamicComponent(unref(leadingIconName)), {
                        key: 0,
                        "data-slot": "leadingIcon",
                        class: b24ui.value.leadingIcon({ class: unref(props).b24ui?.leadingIcon })
                      }, null, 8, ["class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$k, mergeProps({
                        key: 1,
                        size: unref(props).b24ui?.leadingAvatarSize || b24ui.value.leadingAvatarSize()
                      }, unref(props).avatar, {
                        "data-slot": "leadingAvatar",
                        class: b24ui.value.leadingAvatar({ class: unref(props).b24ui?.leadingAvatar })
                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                    ]),
                    renderSlot(_ctx.$slots, "default", { b24ui: b24ui.value }, () => [
                      unref(props).label !== void 0 && unref(props).label !== null ? (openBlock(), createBlock("span", {
                        key: 0,
                        "data-slot": "label",
                        class: b24ui.value.label({ class: unref(props).b24ui?.label, active })
                      }, [
                        createVNode("span", {
                          "data-slot": "labelInner",
                          class: b24ui.value.labelInner({ class: unref(props).b24ui?.labelInner, active })
                        }, toDisplayString(unref(props).label), 3)
                      ], 2)) : createCommentVNode("", true)
                    ]),
                    renderSlot(_ctx.$slots, "trailing", { b24ui: b24ui.value }, () => [
                      unref(props).useDropdown ? (openBlock(), createBlock(unref(ChevronDownSIcon), {
                        key: 0,
                        "data-slot": "trailingIcon",
                        class: b24ui.value.trailingIcon({ class: unref(props).b24ui?.trailingIcon }),
                        "aria-hidden": "true"
                      }, null, 8, ["class"])) : createCommentVNode("", true)
                    ])
                  ], 2)
                ]),
                _: 2
              }, 1040, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Button.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const theme$9 = {
  "slots": {
    "root": "gap-2",
    "base": "relative overflow-hidden rounded-(--ui-border-radius-pill) bg-(--ui-color-base-5)",
    "indicator": "rounded-(--ui-border-radius-pill) size-full transition-transform duration-200 ease-out bg-(--b24ui-background)",
    "status": "flex justify-end text-legend transition-[width] duration-200",
    "steps": "grid items-end text-legend",
    "step": "truncate text-end row-start-1 col-start-1 transition-opacity"
  },
  "variants": {
    "animation": {
      "loading": "",
      "carousel": "",
      "carousel-inverse": "",
      "swing": "",
      "elastic": ""
    },
    "color": {
      "air-primary": {
        "root": "style-filled"
      },
      "air-primary-success": {
        "root": "style-filled-success"
      },
      "air-primary-alert": {
        "root": "style-filled-alert"
      },
      "air-primary-copilot": {
        "root": "style-filled-copilot"
      },
      "air-primary-warning": {
        "root": "style-filled-warning"
      },
      "air-secondary": {
        "root": "style-tinted"
      },
      "default": {
        "root": "style-old-default"
      },
      "danger": {
        "root": "style-old-danger"
      },
      "success": {
        "root": "style-old-success"
      },
      "warning": {
        "root": "style-old-warning"
      },
      "primary": {
        "root": "style-old-primary"
      },
      "secondary": {
        "root": "style-old-secondary"
      },
      "collab": {
        "root": "style-old-collab"
      },
      "ai": {
        "root": "style-old-ai"
      }
    },
    "size": {
      "xs": {
        "status": "text-(length:--ui-font-size-xs)/(--ui-font-line-height-sm)",
        "steps": "text-(length:--ui-font-size-xs)/(--ui-font-line-height-sm)"
      },
      "sm": {
        "status": "text-(length:--ui-font-size-sm)/(--ui-font-line-height-sm)",
        "steps": "text-(length:--ui-font-size-sm)/(--ui-font-line-height-sm)"
      },
      "md": {
        "status": "text-(length:--ui-font-size-sm)/(--ui-font-line-height-sm)",
        "steps": "text-(length:--ui-font-size-sm)/(--ui-font-line-height-sm)"
      },
      "lg": {
        "status": "text-(length:--ui-font-size-sm)/(--ui-font-line-height-sm)",
        "steps": "text-(length:--ui-font-size-sm)/(--ui-font-line-height-sm)"
      }
    },
    "step": {
      "active": {
        "step": "opacity-100"
      },
      "first": {
        "step": "opacity-100 text-legend"
      },
      "other": {
        "step": "opacity-0"
      },
      "last": {
        "step": ""
      }
    },
    "orientation": {
      "horizontal": {
        "root": "w-full flex flex-col",
        "base": "w-full",
        "status": "flex-row"
      },
      "vertical": {
        "root": "h-full flex flex-row-reverse",
        "base": "h-full",
        "status": "flex-col min-w-[32px]"
      }
    },
    "inverted": {
      "true": {
        "status": "self-end"
      }
    }
  },
  "compoundVariants": [
    {
      "inverted": true,
      "orientation": "horizontal",
      "class": {
        "step": "text-start",
        "status": "flex-row-reverse"
      }
    },
    {
      "inverted": true,
      "orientation": "vertical",
      "class": {
        "steps": "items-start",
        "status": "flex-col-reverse"
      }
    },
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": "h-[2px]"
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": "h-[4px]"
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": "h-2"
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": "h-[12px]"
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": "w-[2px]"
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": "w-[4px]"
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": "w-2"
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": "w-[12px]"
    },
    {
      "orientation": "horizontal",
      "animation": "carousel",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "carousel",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel-vertical_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "horizontal",
      "animation": "carousel-inverse",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel-inverse_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "carousel-inverse",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "horizontal",
      "animation": "swing",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[swing_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "swing",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[swing-vertical_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "horizontal",
      "animation": "elastic",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[elastic_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "elastic",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[elastic-vertical_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "horizontal",
      "animation": "loading",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[progressbar-loading_2s_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "loading",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[progressbar-loading-vertical_2s_infinite]"
      }
    }
  ],
  "defaultVariants": {
    "color": "air-primary",
    "animation": "loading",
    "size": "md"
  }
};
const _sfc_main$g = {
  __name: "B24Progress",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    max: { type: [Number, Array], required: false },
    status: { type: Boolean, required: false },
    inverted: { type: Boolean, required: false, default: false },
    size: { type: null, required: false },
    color: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    animation: { type: null, required: false },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false },
    getValueLabel: { type: Function, required: false },
    getValueText: { type: Function, required: false },
    modelValue: { type: [Number, null], required: false, default: null }
  },
  emits: ["update:modelValue", "update:max"],
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("progress", _props);
    const { dir } = useLocale();
    const appConfig2 = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "getValueLabel", "getValueText", "modelValue"), emits);
    const isIndeterminate = computed(() => rootProps.value.modelValue === null);
    const hasSteps = computed(() => Array.isArray(props.max));
    const realMax = computed(() => {
      if (isIndeterminate.value || !props.max) {
        return void 0;
      }
      if (Array.isArray(props.max)) {
        return props.max.length - 1;
      }
      return Number(props.max);
    });
    const percent = computed(() => {
      if (isIndeterminate.value) {
        return void 0;
      }
      switch (true) {
        case rootProps.value.modelValue < 0:
          return 0;
        case rootProps.value.modelValue > (realMax.value ?? 100):
          return 100;
        default:
          return Math.round(rootProps.value.modelValue / (realMax.value ?? 100) * 100);
      }
    });
    const indicatorStyle = computed(() => {
      if (percent.value === void 0) {
        return;
      }
      if (props.orientation === "vertical") {
        return {
          transform: `translateY(${props.inverted ? "" : "-"}${100 - percent.value}%)`
        };
      } else {
        if (dir.value === "rtl") {
          return {
            transform: `translateX(${props.inverted ? "-" : ""}${100 - percent.value}%)`
          };
        } else {
          return {
            transform: `translateX(${props.inverted ? "" : "-"}${100 - percent.value}%)`
          };
        }
      }
    });
    const statusStyle = computed(() => {
      return {
        [props.orientation === "vertical" ? "height" : "width"]: percent.value ? `${percent.value}%` : "fit-content"
      };
    });
    function isActive(index) {
      return index === Number(props.modelValue);
    }
    function isFirst(index) {
      return index === 0;
    }
    function isLast(index) {
      return index === realMax.value;
    }
    function stepVariant(index) {
      index = Number(index);
      if (isActive(index) && !isFirst(index)) {
        return "active";
      }
      if (isFirst(index) && isActive(index)) {
        return "first";
      }
      if (isLast(index) && isActive(index)) {
        return "last";
      }
      return "other";
    }
    const b24ui = computed(() => tv({ extend: tv(theme$9), ...appConfig2.b24ui?.progress || {} })({
      animation: props.animation,
      size: props.size,
      color: props.color,
      orientation: props.orientation,
      inverted: props.inverted
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        "data-orientation": unref(props).orientation,
        "data-slot": "root",
        class: b24ui.value.root({ class: [unref(props).b24ui?.root, unref(props).class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!isIndeterminate.value && (unref(props).status || !!slots.status)) {
              _push2(`<div data-slot="status" class="${ssrRenderClass(b24ui.value.status({ class: unref(props).b24ui?.status }))}" style="${ssrRenderStyle(statusStyle.value)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "status", { percent: percent.value }, () => {
                _push2(`${ssrInterpolate(percent.value)}% `);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(ProgressRoot_default), mergeProps(unref(rootProps), {
              max: realMax.value,
              "data-slot": "base",
              class: b24ui.value.base({ class: unref(props).b24ui?.base }),
              style: { "transform": "translateZ(0)" }
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ProgressIndicator_default), {
                    "data-slot": "indicator",
                    class: b24ui.value.indicator({ class: unref(props).b24ui?.indicator }),
                    style: indicatorStyle.value
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ProgressIndicator_default), {
                      "data-slot": "indicator",
                      class: b24ui.value.indicator({ class: unref(props).b24ui?.indicator }),
                      style: indicatorStyle.value
                    }, null, 8, ["class", "style"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (hasSteps.value) {
              _push2(`<div data-slot="steps" class="${ssrRenderClass(b24ui.value.steps({ class: unref(props).b24ui?.steps }))}"${_scopeId}><!--[-->`);
              ssrRenderList(unref(props).max, (step, index) => {
                _push2(`<div data-slot="step" class="${ssrRenderClass(b24ui.value.step({ class: unref(props).b24ui?.step, step: stepVariant(index) }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, `step-${index}`, { step }, () => {
                  _push2(`${ssrInterpolate(step)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !isIndeterminate.value && (unref(props).status || !!slots.status) ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "status",
                class: b24ui.value.status({ class: unref(props).b24ui?.status }),
                style: statusStyle.value
              }, [
                renderSlot(_ctx.$slots, "status", { percent: percent.value }, () => [
                  createTextVNode(toDisplayString(percent.value) + "% ", 1)
                ])
              ], 6)) : createCommentVNode("", true),
              createVNode(unref(ProgressRoot_default), mergeProps(unref(rootProps), {
                max: realMax.value,
                "data-slot": "base",
                class: b24ui.value.base({ class: unref(props).b24ui?.base }),
                style: { "transform": "translateZ(0)" }
              }), {
                default: withCtx(() => [
                  createVNode(unref(ProgressIndicator_default), {
                    "data-slot": "indicator",
                    class: b24ui.value.indicator({ class: unref(props).b24ui?.indicator }),
                    style: indicatorStyle.value
                  }, null, 8, ["class", "style"])
                ]),
                _: 1
              }, 16, ["max", "class"]),
              hasSteps.value ? (openBlock(), createBlock("div", {
                key: 1,
                "data-slot": "steps",
                class: b24ui.value.steps({ class: unref(props).b24ui?.steps })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(props).max, (step, index) => {
                  return openBlock(), createBlock("div", {
                    key: index,
                    "data-slot": "step",
                    class: b24ui.value.step({ class: unref(props).b24ui?.step, step: stepVariant(index) })
                  }, [
                    renderSlot(_ctx.$slots, `step-${index}`, { step }, () => [
                      createTextVNode(toDisplayString(step), 1)
                    ])
                  ], 2);
                }), 128))
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Progress.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const theme$8 = {
  "slots": {
    "root": "dark relative group overflow-hidden rounded-[8px] p-4 flex gap-4 focus-visible:outline-(length:--ui-design-outline-stroke-weight) focus-visible:outline-offset-2 focus-visible:outline-(--ui-color-design-outline-content-divider) font-[family-name:var(--ui-font-family-primary)] bg-(--ui-color-base-black-fixed)/80 text-(--ui-color-design-plain-na-focused-content) text-(length:--ui-font-size-sm) font-(--ui-font-weight-normal)",
    "wrapper": "w-0 flex-1 flex flex-col",
    "title": "font-(--ui-font-weight-medium)",
    "description": "",
    "icon": "shrink-0 size-6 text-(--b24ui-border-color)",
    "avatar": "shrink-0",
    "avatarSize": "xl",
    "actions": "flex gap-1.5 shrink-0",
    "progress": "absolute inset-x-0 bottom-0",
    "close": "p-0 absolute top-2 right-2"
  },
  "variants": {
    "color": {
      "air-primary": {
        "root": "style-filled"
      },
      "air-primary-success": {
        "root": "style-filled-success"
      },
      "air-primary-alert": {
        "root": "style-filled-alert"
      },
      "air-primary-copilot": {
        "root": "style-filled-copilot"
      },
      "air-primary-warning": {
        "root": "style-filled-warning"
      },
      "air-secondary": {
        "root": "style-filled-inverted"
      },
      "default": {
        "root": "old-style-default"
      },
      "danger": {
        "root": "old-style-danger"
      },
      "success": {
        "root": "old-style-success"
      },
      "warning": {
        "root": "old-style-warning"
      },
      "primary": {
        "root": "old-style-primary"
      },
      "secondary": {
        "root": "old-style-secondary"
      },
      "collab": {
        "root": "old-style-collab"
      },
      "ai": {
        "root": "old-style-ai"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "items-center",
        "actions": "items-center"
      },
      "vertical": {
        "root": "items-center",
        "actions": "items-start mt-1"
      }
    },
    "title": {
      "true": {
        "description": "mt-1"
      }
    }
  },
  "defaultVariants": {
    "color": "air-secondary"
  }
};
const _sfc_main$f = {
  __name: "B24Toast",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    title: { type: [String, Object, Function], required: false },
    description: { type: [String, Object, Function], required: false },
    icon: { type: [Function, Object], required: false },
    avatar: { type: Object, required: false },
    color: { type: null, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    close: { type: [Boolean, Object], required: false, default: true },
    closeIcon: { type: [Function, Object], required: false },
    actions: { type: Array, required: false },
    progress: { type: [Boolean, Object], required: false, default: true },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    type: { type: String, required: false },
    duration: { type: Number, required: false }
  },
  emits: ["escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd", "update:open"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("toast", _props);
    const { t } = useLocale();
    const appConfig2 = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "as", "defaultOpen", "open", "duration", "type"), emits);
    const b24ui = computed(() => tv({ extend: tv(theme$8), ...appConfig2.b24ui?.toast || {} })({
      color: props.color,
      orientation: props.orientation,
      title: !!props.title || !!slots.title
    }));
    const rootRef = useTemplateRef("rootRef");
    const height = ref(0);
    __expose({
      height
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ToastRoot_default), mergeProps({
        ref_key: "rootRef",
        ref: rootRef
      }, unref(rootProps), {
        "data-orientation": unref(props).orientation,
        "data-slot": "root",
        class: b24ui.value.root({ class: [unref(props).b24ui?.root, unref(props).class] }),
        style: { "--height": height.value }
      }, _attrs), {
        default: withCtx(({ remaining, duration, open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", { b24ui: b24ui.value }, () => {
              if (unref(props).icon) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(props).icon), {
                  "data-slot": "icon",
                  class: b24ui.value.icon({ class: unref(props).b24ui?.icon })
                }, null), _parent2, _scopeId);
              } else if (unref(props).avatar) {
                _push2(ssrRenderComponent(_sfc_main$k, mergeProps({
                  size: unref(props).b24ui?.avatarSize || b24ui.value.avatarSize()
                }, unref(props).avatar, {
                  "data-slot": "avatar",
                  class: b24ui.value.avatar({ class: unref(props).b24ui?.avatar })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`<div data-slot="wrapper" class="${ssrRenderClass(b24ui.value.wrapper({ class: unref(props).b24ui?.wrapper }))}"${_scopeId}>`);
            if (unref(props).title || !!slots.title) {
              _push2(ssrRenderComponent(unref(ToastTitle_default), {
                "data-slot": "title",
                class: b24ui.value.title({ class: unref(props).b24ui?.title })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                      if (typeof unref(props).title === "function") {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(unref(props).title()), null, null), _parent3, _scopeId2);
                      } else if (typeof unref(props).title === "object") {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(unref(props).title), null, null), _parent3, _scopeId2);
                      } else {
                        _push3(`<!--[-->${ssrInterpolate(unref(props).title)}<!--]-->`);
                      }
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        typeof unref(props).title === "function" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).title()), { key: 0 })) : typeof unref(props).title === "object" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).title), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                          createTextVNode(toDisplayString(unref(props).title), 1)
                        ], 64))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(props).description || !!slots.description) {
              _push2(ssrRenderComponent(unref(ToastDescription_default), {
                "data-slot": "description",
                class: b24ui.value.description({ class: unref(props).b24ui?.description })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                      if (typeof unref(props).description === "function") {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(unref(props).description()), null, null), _parent3, _scopeId2);
                      } else if (typeof unref(props).description === "object") {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(unref(props).description), null, null), _parent3, _scopeId2);
                      } else {
                        _push3(`<!--[-->${ssrInterpolate(unref(props).description)}<!--]-->`);
                      }
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "description", {}, () => [
                        typeof unref(props).description === "function" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).description()), { key: 0 })) : typeof unref(props).description === "object" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).description), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                          createTextVNode(toDisplayString(unref(props).description), 1)
                        ], 64))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(props).orientation === "vertical" && (unref(props).actions?.length || !!slots.actions)) {
              _push2(`<div data-slot="actions" class="${ssrRenderClass(b24ui.value.actions({ class: unref(props).b24ui?.actions }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(unref(props).actions, (action, index) => {
                  _push2(ssrRenderComponent(unref(ToastAction_default), {
                    key: index,
                    "alt-text": action.label || "Action",
                    "as-child": "",
                    onClick: () => {
                    }
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_sfc_main$h, mergeProps({
                          size: "sm",
                          color: unref(props).color
                        }, { ref_for: true }, action), null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_sfc_main$h, mergeProps({
                            size: "sm",
                            color: unref(props).color
                          }, { ref_for: true }, action), null, 16, ["color"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions) || unref(props).close !== null) {
              _push2(`<div data-slot="actions" class="${ssrRenderClass(b24ui.value.actions({ class: unref(props).b24ui?.actions, orientation: "horizontal" }))}"${_scopeId}>`);
              if (unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions)) {
                ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                  _push2(`<!--[-->`);
                  ssrRenderList(unref(props).actions, (action, index) => {
                    _push2(ssrRenderComponent(unref(ToastAction_default), {
                      key: index,
                      "alt-text": action.label || "Action",
                      "as-child": "",
                      onClick: () => {
                      }
                    }, {
                      default: withCtx((_, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(_sfc_main$h, mergeProps({
                            size: "sm",
                            color: unref(props).color
                          }, { ref_for: true }, action), null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_sfc_main$h, mergeProps({
                              size: "sm",
                              color: unref(props).color
                            }, { ref_for: true }, action), null, 16, ["color"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                }, _push2, _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              if (unref(props).close || !!slots.close) {
                _push2(ssrRenderComponent(unref(ToastClose_default), { "as-child": "" }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "close", { b24ui: b24ui.value }, () => {
                        if (unref(props).close) {
                          _push3(ssrRenderComponent(_sfc_main$h, mergeProps({
                            icon: unref(props).closeIcon || unref(icons).close,
                            size: "sm",
                            color: "air-tertiary",
                            "aria-label": unref(t)("toast.close")
                          }, typeof unref(props).close === "object" ? unref(props).close : {}, {
                            "data-slot": "close",
                            class: b24ui.value.close({ class: unref(props).b24ui?.close }),
                            onClick: () => {
                            }
                          }), null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "close", { b24ui: b24ui.value }, () => [
                          unref(props).close ? (openBlock(), createBlock(_sfc_main$h, mergeProps({
                            key: 0,
                            icon: unref(props).closeIcon || unref(icons).close,
                            size: "sm",
                            color: "air-tertiary",
                            "aria-label": unref(t)("toast.close")
                          }, typeof unref(props).close === "object" ? unref(props).close : {}, {
                            "data-slot": "close",
                            class: b24ui.value.close({ class: unref(props).b24ui?.close }),
                            onClick: withModifiers(() => {
                            }, ["stop"])
                          }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(props).progress && open && remaining > 0 && duration) {
              _push2(ssrRenderComponent(_sfc_main$g, mergeProps({
                "model-value": remaining / duration * 100,
                color: unref(props).color
              }, typeof unref(props).progress === "object" ? unref(props).progress : {}, {
                size: "sm",
                "data-slot": "progress",
                class: b24ui.value.progress({ class: unref(props).b24ui?.progress })
              }), null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", { b24ui: b24ui.value }, () => [
                unref(props).icon ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).icon), {
                  key: 0,
                  "data-slot": "icon",
                  class: b24ui.value.icon({ class: unref(props).b24ui?.icon })
                }, null, 8, ["class"])) : unref(props).avatar ? (openBlock(), createBlock(_sfc_main$k, mergeProps({
                  key: 1,
                  size: unref(props).b24ui?.avatarSize || b24ui.value.avatarSize()
                }, unref(props).avatar, {
                  "data-slot": "avatar",
                  class: b24ui.value.avatar({ class: unref(props).b24ui?.avatar })
                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
              ]),
              createVNode("div", {
                "data-slot": "wrapper",
                class: b24ui.value.wrapper({ class: unref(props).b24ui?.wrapper })
              }, [
                unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(ToastTitle_default), {
                  key: 0,
                  "data-slot": "title",
                  class: b24ui.value.title({ class: unref(props).b24ui?.title })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "title", {}, () => [
                      typeof unref(props).title === "function" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).title()), { key: 0 })) : typeof unref(props).title === "object" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).title), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                        createTextVNode(toDisplayString(unref(props).title), 1)
                      ], 64))
                    ])
                  ]),
                  _: 3
                }, 8, ["class"])) : createCommentVNode("", true),
                unref(props).description || !!slots.description ? (openBlock(), createBlock(unref(ToastDescription_default), {
                  key: 1,
                  "data-slot": "description",
                  class: b24ui.value.description({ class: unref(props).b24ui?.description })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "description", {}, () => [
                      typeof unref(props).description === "function" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).description()), { key: 0 })) : typeof unref(props).description === "object" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).description), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                        createTextVNode(toDisplayString(unref(props).description), 1)
                      ], 64))
                    ])
                  ]),
                  _: 3
                }, 8, ["class"])) : createCommentVNode("", true),
                unref(props).orientation === "vertical" && (unref(props).actions?.length || !!slots.actions) ? (openBlock(), createBlock("div", {
                  key: 2,
                  "data-slot": "actions",
                  class: b24ui.value.actions({ class: unref(props).b24ui?.actions })
                }, [
                  renderSlot(_ctx.$slots, "actions", {}, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(props).actions, (action, index) => {
                      return openBlock(), createBlock(unref(ToastAction_default), {
                        key: index,
                        "alt-text": action.label || "Action",
                        "as-child": "",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$h, mergeProps({
                            size: "sm",
                            color: unref(props).color
                          }, { ref_for: true }, action), null, 16, ["color"])
                        ]),
                        _: 2
                      }, 1032, ["alt-text", "onClick"]);
                    }), 128))
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2),
              unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions) || unref(props).close !== null ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "actions",
                class: b24ui.value.actions({ class: unref(props).b24ui?.actions, orientation: "horizontal" })
              }, [
                unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions) ? renderSlot(_ctx.$slots, "actions", { key: 0 }, () => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(props).actions, (action, index) => {
                    return openBlock(), createBlock(unref(ToastAction_default), {
                      key: index,
                      "alt-text": action.label || "Action",
                      "as-child": "",
                      onClick: withModifiers(() => {
                      }, ["stop"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$h, mergeProps({
                          size: "sm",
                          color: unref(props).color
                        }, { ref_for: true }, action), null, 16, ["color"])
                      ]),
                      _: 2
                    }, 1032, ["alt-text", "onClick"]);
                  }), 128))
                ]) : createCommentVNode("", true),
                unref(props).close || !!slots.close ? (openBlock(), createBlock(unref(ToastClose_default), {
                  key: 1,
                  "as-child": ""
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "close", { b24ui: b24ui.value }, () => [
                      unref(props).close ? (openBlock(), createBlock(_sfc_main$h, mergeProps({
                        key: 0,
                        icon: unref(props).closeIcon || unref(icons).close,
                        size: "sm",
                        color: "air-tertiary",
                        "aria-label": unref(t)("toast.close")
                      }, typeof unref(props).close === "object" ? unref(props).close : {}, {
                        "data-slot": "close",
                        class: b24ui.value.close({ class: unref(props).b24ui?.close }),
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 3
                })) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true),
              unref(props).progress && open && remaining > 0 && duration ? (openBlock(), createBlock(_sfc_main$g, mergeProps({
                key: 1,
                "model-value": remaining / duration * 100,
                color: unref(props).color
              }, typeof unref(props).progress === "object" ? unref(props).progress : {}, {
                size: "sm",
                "data-slot": "progress",
                class: b24ui.value.progress({ class: unref(props).b24ui?.progress })
              }), null, 16, ["model-value", "color", "class"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Toast.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const theme$7 = {
  "slots": {
    "viewport": "fixed flex flex-col w-[calc(100%-2rem)] sm:w-[384px] z-[100] data-[expanded=true]:h-(--height) focus:outline-none mr-(--scrollbar-width)",
    "base": "pointer-events-auto absolute inset-x-0 z-(--index) transform-(--transform) data-[expanded=false]:data-[front=false]:h-(--front-height) data-[expanded=false]:data-[front=false]:*:opacity-0 data-[front=false]:*:transition-opacity data-[front=false]:*:duration-100 data-[state=closed]:animate-[toast-closed_200ms_ease-in-out] data-[state=closed]:data-[expanded=false]:data-[front=false]:animate-[toast-collapsed-closed_200ms_ease-in-out] data-[state=open]:data-[pulsing=odd]:animate-[toast-pulse-a_300ms_ease-out] data-[state=open]:data-[pulsing=even]:animate-[toast-pulse-b_300ms_ease-out] data-[swipe=move]:transition-none transition-[transform,translate,height] duration-200 ease-out"
  },
  "variants": {
    "position": {
      "top-left": {
        "viewport": "left-4"
      },
      "top-center": {
        "viewport": "left-1/2 transform -translate-x-1/2"
      },
      "top-right": {
        "viewport": "right-4"
      },
      "bottom-left": {
        "viewport": "left-4"
      },
      "bottom-center": {
        "viewport": "left-1/2 transform -translate-x-1/2"
      },
      "bottom-right": {
        "viewport": "right-4"
      }
    },
    "swipeDirection": {
      "up": "data-[swipe=end]:animate-[toast-slide-up_200ms_ease-out]",
      "right": "data-[swipe=end]:animate-[toast-slide-right_200ms_ease-out]",
      "down": "data-[swipe=end]:animate-[toast-slide-down_200ms_ease-out]",
      "left": "data-[swipe=end]:animate-[toast-slide-left_200ms_ease-out]"
    }
  },
  "compoundVariants": [
    {
      "position": [
        "top-left",
        "top-center",
        "top-right"
      ],
      "class": {
        "viewport": "top-4",
        "base": "top-0 data-[state=open]:animate-[toast-slide-in-from-top_200ms_ease-in-out]"
      }
    },
    {
      "position": [
        "bottom-left",
        "bottom-center",
        "bottom-right"
      ],
      "class": {
        "viewport": "bottom-4",
        "base": "bottom-0 data-[state=open]:animate-[toast-slide-in-from-bottom_200ms_ease-in-out]"
      }
    },
    {
      "swipeDirection": [
        "left",
        "right"
      ],
      "class": "data-[swipe=move]:translate-x-(--reka-toast-swipe-move-x) data-[swipe=end]:translate-x-(--reka-toast-swipe-end-x) data-[swipe=cancel]:translate-x-0"
    },
    {
      "swipeDirection": [
        "up",
        "down"
      ],
      "class": "data-[swipe=move]:translate-y-(--reka-toast-swipe-move-y) data-[swipe=end]:translate-y-(--reka-toast-swipe-end-y) data-[swipe=cancel]:translate-y-0"
    }
  ],
  "defaultVariants": {
    "position": "top-right"
  }
};
const __default__$1 = {
  name: "Toaster"
};
const _sfc_main$e = /* @__PURE__ */ Object.assign(__default__$1, {
  __ssrInlineRender: true,
  props: {
    position: { type: null, required: false, default: "top-right" },
    expand: { type: Boolean, required: false, default: true },
    progress: { type: Boolean, required: false, default: true },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    max: { type: Number, required: false, default: 5 },
    duration: { type: Number, required: false, default: 5e3 },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false },
    label: { type: String, required: false },
    disableSwipe: { type: Boolean, required: false },
    swipeThreshold: { type: Number, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("toaster", _props);
    const { toasts, remove } = useToast();
    const appConfig2 = useAppConfig();
    provide(toastMaxInjectionKey, toRef(() => props.max));
    const providerProps = useForwardProps(reactivePick(props, "duration", "label", "swipeThreshold", "disableSwipe"));
    const portalProps = usePortal(toRef(() => props.portal));
    const swipeDirection = computed(() => {
      switch (props.position) {
        case "top-center":
          return "up";
        case "top-right":
        case "bottom-right":
          return "right";
        case "bottom-center":
          return "down";
        case "top-left":
        case "bottom-left":
          return "left";
      }
      return "right";
    });
    const b24ui = computed(() => tv({ extend: tv(theme$7), ...appConfig2.b24ui?.toaster || {} })({
      position: props.position,
      swipeDirection: swipeDirection.value
    }));
    function onUpdateOpen(value, id) {
      if (value) {
        return;
      }
      remove(id);
    }
    const hovered = ref(false);
    const expanded = computed(() => props.expand || hovered.value);
    const refs = ref([]);
    const height = computed(() => refs.value.reduce((acc, { height: height2 }) => acc + height2 + 16, 0));
    const frontHeight = computed(() => refs.value[refs.value.length - 1]?.height || 0);
    function getOffset(index) {
      return refs.value.slice(index + 1).reduce((acc, { height: height2 }) => acc + height2 + 16, 0);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ToastProvider_default), mergeProps({ "swipe-direction": swipeDirection.value }, unref(providerProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`<!--[-->`);
            ssrRenderList(unref(toasts), (toast, index) => {
              _push2(ssrRenderComponent(_sfc_main$f, mergeProps({
                key: toast.id,
                ref_for: true,
                ref_key: "refs",
                ref: refs,
                progress: unref(props).progress
              }, { ref_for: true }, unref(omit)(toast, ["id", "close", "_duplicate", "_updated"]), {
                close: toast.close,
                "data-expanded": expanded.value,
                "data-front": !expanded.value && index === unref(toasts).length - 1,
                "data-pulsing": toast._duplicate ? toast._duplicate % 2 === 0 ? "even" : "odd" : void 0,
                style: {
                  "--index": index - unref(toasts).length + unref(toasts).length,
                  "--before": unref(toasts).length - 1 - index,
                  "--offset": getOffset(index),
                  "--scale": expanded.value ? "1" : "calc(1 - var(--before) * var(--scale-factor))",
                  "--translate": expanded.value ? "calc(var(--offset) * var(--translate-factor))" : "calc(var(--before) * var(--gap))",
                  "--transform": "translateY(var(--translate)) scale(var(--scale))"
                },
                "data-slot": "base",
                class: b24ui.value.base({ class: [unref(props).b24ui?.base, toast.onClick ? "cursor-pointer" : void 0] }),
                "onUpdate:open": ($event) => onUpdateOpen($event, toast.id),
                onClick: ($event) => toast.onClick && toast.onClick(toast)
              }), null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(unref(ToastPortal_default), unref(portalProps), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ToastViewport_default), {
                    "data-expanded": expanded.value,
                    "data-slot": "viewport",
                    class: b24ui.value.viewport({ class: [unref(props).b24ui?.viewport, unref(props).class] }),
                    style: {
                      "--scale-factor": "0.05",
                      "--translate-factor": unref(props).position?.startsWith("top") ? "1px" : "-1px",
                      "--gap": unref(props).position?.startsWith("top") ? "16px" : "-16px",
                      "--front-height": `${frontHeight.value}px`,
                      "--height": `${height.value}px`
                    },
                    onMouseenter: ($event) => hovered.value = true,
                    onMouseleave: ($event) => hovered.value = false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ToastViewport_default), {
                      "data-expanded": expanded.value,
                      "data-slot": "viewport",
                      class: b24ui.value.viewport({ class: [unref(props).b24ui?.viewport, unref(props).class] }),
                      style: {
                        "--scale-factor": "0.05",
                        "--translate-factor": unref(props).position?.startsWith("top") ? "1px" : "-1px",
                        "--gap": unref(props).position?.startsWith("top") ? "16px" : "-16px",
                        "--front-height": `${frontHeight.value}px`,
                        "--height": `${height.value}px`
                      },
                      onMouseenter: ($event) => hovered.value = true,
                      onMouseleave: ($event) => hovered.value = false
                    }, null, 8, ["data-expanded", "class", "style", "onMouseenter", "onMouseleave"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(toasts), (toast, index) => {
                return openBlock(), createBlock(_sfc_main$f, mergeProps({
                  key: toast.id,
                  ref_for: true,
                  ref_key: "refs",
                  ref: refs,
                  progress: unref(props).progress
                }, { ref_for: true }, unref(omit)(toast, ["id", "close", "_duplicate", "_updated"]), {
                  close: toast.close,
                  "data-expanded": expanded.value,
                  "data-front": !expanded.value && index === unref(toasts).length - 1,
                  "data-pulsing": toast._duplicate ? toast._duplicate % 2 === 0 ? "even" : "odd" : void 0,
                  style: {
                    "--index": index - unref(toasts).length + unref(toasts).length,
                    "--before": unref(toasts).length - 1 - index,
                    "--offset": getOffset(index),
                    "--scale": expanded.value ? "1" : "calc(1 - var(--before) * var(--scale-factor))",
                    "--translate": expanded.value ? "calc(var(--offset) * var(--translate-factor))" : "calc(var(--before) * var(--gap))",
                    "--transform": "translateY(var(--translate)) scale(var(--scale))"
                  },
                  "data-slot": "base",
                  class: b24ui.value.base({ class: [unref(props).b24ui?.base, toast.onClick ? "cursor-pointer" : void 0] }),
                  "onUpdate:open": ($event) => onUpdateOpen($event, toast.id),
                  onClick: ($event) => toast.onClick && toast.onClick(toast)
                }), null, 16, ["progress", "close", "data-expanded", "data-front", "data-pulsing", "style", "class", "onUpdate:open", "onClick"]);
              }), 128)),
              createVNode(unref(ToastPortal_default), unref(portalProps), {
                default: withCtx(() => [
                  createVNode(unref(ToastViewport_default), {
                    "data-expanded": expanded.value,
                    "data-slot": "viewport",
                    class: b24ui.value.viewport({ class: [unref(props).b24ui?.viewport, unref(props).class] }),
                    style: {
                      "--scale-factor": "0.05",
                      "--translate-factor": unref(props).position?.startsWith("top") ? "1px" : "-1px",
                      "--gap": unref(props).position?.startsWith("top") ? "16px" : "-16px",
                      "--front-height": `${frontHeight.value}px`,
                      "--height": `${height.value}px`
                    },
                    onMouseenter: ($event) => hovered.value = true,
                    onMouseleave: ($event) => hovered.value = false
                  }, null, 8, ["data-expanded", "class", "style", "onMouseenter", "onMouseleave"])
                ]),
                _: 1
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Toaster.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const B24Toaster = Object.assign(_sfc_main$e, { __name: "B24Toaster" });
function _useOverlay() {
  const overlays = shallowReactive([]);
  const create = (component, _options) => {
    const { props, defaultOpen, destroyOnClose } = _options || {};
    const options = reactive({
      id: /* @__PURE__ */ Symbol(""),
      isOpen: !!defaultOpen,
      component: markRaw(component),
      isMounted: !!defaultOpen,
      destroyOnClose: !!destroyOnClose,
      originalProps: props || {},
      props: { ...props }
    });
    overlays.push(options);
    return {
      ...options,
      open: (props2) => open(options.id, props2),
      close: (value) => close(options.id, value),
      patch: (props2) => patch(options.id, props2)
    };
  };
  const open = (id, props) => {
    const overlay = getOverlay(id);
    if (props) {
      overlay.props = { ...overlay.originalProps, ...props };
    } else {
      overlay.props = { ...overlay.originalProps };
    }
    overlay.isOpen = true;
    overlay.isMounted = true;
    const result = new Promise((resolve) => overlay.resolvePromise = resolve);
    return Object.assign(result, {
      id,
      isMounted: overlay.isMounted,
      isOpen: overlay.isOpen,
      result
    });
  };
  const close = (id, value) => {
    const overlay = getOverlay(id);
    overlay.isOpen = false;
    if (overlay.resolvePromise) {
      overlay.resolvePromise(value);
      overlay.resolvePromise = void 0;
    }
  };
  const closeAll = () => {
    overlays.forEach((overlay) => close(overlay.id));
  };
  const unmount = (id) => {
    const overlay = getOverlay(id);
    overlay.isMounted = false;
    if (overlay.destroyOnClose) {
      const index = overlays.findIndex((overlay2) => overlay2.id === id);
      overlays.splice(index, 1);
    }
  };
  const patch = (id, props) => {
    const overlay = getOverlay(id);
    overlay.props = { ...overlay.props, ...props };
  };
  const getOverlay = (id) => {
    const overlay = overlays.find((overlay2) => overlay2.id === id);
    if (!overlay) {
      throw new Error("Overlay not found");
    }
    return overlay;
  };
  const isOpen = (id) => {
    const overlay = getOverlay(id);
    return overlay.isOpen;
  };
  return {
    overlays,
    open,
    close,
    closeAll,
    create,
    patch,
    unmount,
    isOpen
  };
}
const useOverlay = /* @__PURE__ */ createSharedComposable(_useOverlay);
const _sfc_main$d = {
  __name: "B24OverlayProvider",
  __ssrInlineRender: true,
  setup(__props) {
    const { overlays, unmount, close } = useOverlay();
    const mountedOverlays = computed(() => overlays.filter((overlay) => overlay.isMounted));
    const onAfterLeave = (id) => {
      close(id);
      unmount(id);
    };
    const onClose = (id, value) => {
      close(id, value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(mountedOverlays.value, (overlay) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(overlay.component), mergeProps({
          key: overlay.id
        }, { ref_for: true }, overlay.props, {
          open: overlay.isOpen,
          "onUpdate:open": ($event) => overlay.isOpen = $event,
          onClose: (value) => onClose(overlay.id, value),
          "onAfter:leave": ($event) => onAfterLeave(overlay.id)
        }), null), _parent);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/OverlayProvider.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __default__ = {
  name: "App"
};
const _sfc_main$c = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  props: {
    tooltip: { type: Object, required: false },
    toaster: { type: [Object, null], required: false },
    locale: { type: Object, required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: "body" },
    dir: { type: String, required: false },
    scrollBody: { type: [Boolean, Object], required: false },
    nonce: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    const configProviderProps = useForwardProps$1(reactivePick(props, "scrollBody"));
    const tooltipProps = toRef(() => props.tooltip);
    const toasterProps = toRef(() => props.toaster);
    const locale = toRef(() => props.locale);
    provide(localeContextInjectionKey, locale);
    const portal = toRef(() => props.portal);
    provide(portalTargetInjectionKey, portal);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ConfigProvider_default), mergeProps({
        "use-id": () => useId$1(),
        dir: props.dir || locale.value?.dir,
        locale: locale.value?.code
      }, unref(configProviderProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TooltipProvider_default), tooltipProps.value, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.toaster !== null) {
                    _push3(ssrRenderComponent(B24Toaster, toasterProps.value, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent3, _scopeId2));
                  } else {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  }
                  _push3(ssrRenderComponent(_sfc_main$d, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    __props.toaster !== null ? (openBlock(), createBlock(B24Toaster, mergeProps({ key: 0 }, toasterProps.value), {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 16)) : renderSlot(_ctx.$slots, "default", { key: 1 }),
                    createVNode(_sfc_main$d)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TooltipProvider_default), tooltipProps.value, {
                default: withCtx(() => [
                  __props.toaster !== null ? (openBlock(), createBlock(B24Toaster, mergeProps({ key: 0 }, toasterProps.value), {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }, 16)) : renderSlot(_ctx.$slots, "default", { key: 1 }),
                  createVNode(_sfc_main$d)
                ]),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/App.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$c, { __name: "B24App" });
const theme$6 = {
  "slots": {
    "base": "ui-label__scope --air select-none font-[family-name:var(--ui-font-family-secondary)] font-(--ui-label-font-weight) text-(length:--ui-label-font-size)/normal inline-flex items-center transition-all duration-200 ease-linear px-(--ui-label-inline-space) text-(--b24ui-color) bg-(--b24ui-background) border-(--b24ui-border-color) border-(length:--b24ui-border-width)",
    "wrapper": "h-(--ui-label-height) inline-flex items-center",
    "label": "max-w-full whitespace-nowrap text-ellipsis decoration-from-font",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailingIcon": "shrink-0 cursor-pointer hover:rounded-(--ui-border-radius-circle) hover:bg-current/20"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": "focus-visible:outline-none ring ring-inset ring-0 focus-visible:ring-2 group-[.is-field-group]/items:not-only:first:rounded-e-none group-[.is-field-group]/items:not-only:last:rounded-s-none group-[.is-field-group]/items:not-last:not-first:rounded-none group-[.is-field-group]/items:not-only:first:border-e-0 group-[.is-field-group]/items:not-only:not-first:border-s-0 focus-visible:z-[1]",
      "vertical": "focus-visible:outline-none ring ring-inset ring-0 focus-visible:ring-2 not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
    },
    "noSplit": {
      "false": "group-[.is-field-group]/items:not-only:not-first:after:content-[''] group-[.is-field-group]/items:not-only:not-first:after:absolute group-[.is-field-group]/items:not-only:not-first:after:top-[7px] group-[.is-field-group]/items:not-only:not-first:after:bottom-[6px] group-[.is-field-group]/items:not-only:not-first:after:left-0 group-[.is-field-group]/items:not-only:not-first:after:w-px group-[.is-field-group]/items:not-only:not-first:after:bg-current/30"
    },
    "useLink": {
      "true": {
        "base": "cursor-pointer",
        "wrapper": "group",
        "label": "group-hover:underline group-hover:decoration-dashed"
      }
    },
    "useClose": {
      "true": "pe-2xs",
      "false": ""
    },
    "leading": {
      "true": "ps-1",
      "false": ""
    },
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
        "base": "style-outline"
      },
      "air-secondary-accent-1": {
        "base": "style-outline-accent-1"
      },
      "air-secondary-accent-2": {
        "base": "style-outline-accent-2"
      },
      "air-tertiary": {
        "base": "style-outline-no-accent"
      },
      "air-selection": {
        "base": "style-selection"
      },
      "default": {
        "base": "style-old-default"
      },
      "danger": {
        "base": "style-old-danger"
      },
      "success": {
        "base": "style-old-success"
      },
      "warning": {
        "base": "style-old-warning"
      },
      "primary": {
        "base": "style-old-primary"
      },
      "secondary": {
        "base": "style-old-secondary"
      },
      "collab": {
        "base": "style-old-collab"
      },
      "ai": {
        "base": "style-old-ai"
      }
    },
    "size": {
      "xss": {
        "base": "ui-label-xss gap-0.5",
        "wrapper": "gap-0.5",
        "label": "underline-offset-1",
        "leadingIcon": "size-[12px]",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-[12px]"
      },
      "xs": {
        "base": "ui-label-xs gap-0.5",
        "wrapper": "gap-0.5",
        "label": "underline-offset-1",
        "leadingIcon": "size-[12px]",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-[12px]"
      },
      "sm": {
        "base": "ui-label-sm gap-1",
        "wrapper": "gap-1",
        "label": "underline-offset-1",
        "leadingIcon": "size-[14px]",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-[14px]"
      },
      "md": {
        "base": "ui-label-md gap-1",
        "wrapper": "gap-1",
        "label": "underline-offset-1",
        "leadingIcon": "size-[15px]",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-[15px]"
      },
      "lg": {
        "base": "ui-label-lg gap-1",
        "wrapper": "gap-1",
        "label": "",
        "leadingIcon": "size-[22px]",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-[22px]"
      },
      "xl": {
        "base": "ui-label-xl gap-1",
        "wrapper": "gap-1",
        "label": "",
        "leadingIcon": "size-[22px]",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-[22px]"
      }
    },
    "square": {
      "true": {
        "base": "rounded-[calc(var(--ui-label-height)_/_4)] ",
        "wrapper": "w-(--ui-label-height)",
        "label": "overflow-hidden"
      },
      "false": {
        "base": "rounded-[calc(var(--ui-label-height)_/_2)]"
      }
    },
    "inverted": {
      "true": {
        "base": "border-(--b24ui-color)"
      },
      "false": ""
    }
  },
  "compoundVariants": [
    {
      "inverted": true,
      "color": "air-primary",
      "class": {
        "base": "style-filled-inverted"
      }
    },
    {
      "inverted": true,
      "color": "air-primary-success",
      "class": {
        "base": "style-filled-success-inverted"
      }
    },
    {
      "inverted": true,
      "color": "air-primary-alert",
      "class": {
        "base": "style-filled-alert-inverted"
      }
    },
    {
      "inverted": true,
      "color": "air-primary-copilot",
      "class": {
        "base": "style-filled-copilot-inverted"
      }
    },
    {
      "inverted": true,
      "color": "air-primary-warning",
      "class": {
        "base": "style-filled-warning-inverted"
      }
    },
    {
      "size": "xss",
      "square": true,
      "class": {
        "base": "p-0 ps-0 pe-0",
        "wrapper": "px-[2px] gap-0",
        "leadingIcon": "size-[6px]"
      }
    },
    {
      "size": "xs",
      "square": true,
      "class": {
        "base": "p-0 ps-0 pe-0",
        "wrapper": "px-[2px] gap-0",
        "leadingIcon": "size-[10px]"
      }
    },
    {
      "size": "sm",
      "square": true,
      "class": {
        "base": "p-0 ps-0 pe-0",
        "wrapper": "p-[1px] gap-0",
        "leadingIcon": "size-[16px]"
      }
    },
    {
      "size": "md",
      "square": true,
      "class": {
        "base": "p-0 ps-0 pe-0",
        "wrapper": "p-[1px] gap-0",
        "leadingIcon": "size-4.5"
      }
    },
    {
      "size": "lg",
      "square": true,
      "class": {
        "base": "p-0 ps-0 pe-0",
        "wrapper": "p-[1px] gap-0",
        "leadingIcon": "size-[23px]"
      }
    },
    {
      "size": "xl",
      "square": true,
      "class": {
        "base": "p-0 ps-0 pe-0",
        "wrapper": "p-[1px] gap-0",
        "leadingIcon": "size-[28px]"
      }
    },
    {
      "fieldGroup": [
        "horizontal",
        "vertical"
      ],
      "size": [
        "xl",
        "lg",
        "md"
      ],
      "class": "rounded-(--ui-border-radius-md)"
    },
    {
      "fieldGroup": [
        "horizontal",
        "vertical"
      ],
      "size": "sm",
      "class": "rounded-(--ui-border-radius-sm)"
    },
    {
      "fieldGroup": [
        "horizontal",
        "vertical"
      ],
      "size": "xs",
      "class": "rounded-(--ui-border-radius-xs)"
    },
    {
      "fieldGroup": [
        "horizontal",
        "vertical"
      ],
      "size": "xss",
      "class": "rounded-[5px]"
    }
  ],
  "defaultVariants": {
    "color": "air-primary",
    "size": "md",
    "square": false,
    "inverted": false
  }
};
const _sfc_main$b = {
  __name: "B24Badge",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "span" },
    label: { type: [String, Number], required: false },
    color: { type: null, required: false },
    inverted: { type: Boolean, required: false, default: false },
    size: { type: null, required: false },
    square: { type: Boolean, required: false },
    useLink: { type: Boolean, required: false },
    useClose: { type: Boolean, required: false },
    onCloseClick: { type: [Function, Array], required: false },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false },
    icon: { type: [Function, Object], required: false },
    avatar: { type: Object, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: [Function, Object], required: false }
  },
  setup(__props) {
    const _props = __props;
    const slots = useSlots();
    const props = useComponentProps("badge", _props);
    const appConfig2 = useAppConfig();
    async function onCloseClickWrapper(event) {
      const callbacks = Array.isArray(props.onCloseClick) ? props.onCloseClick : [props.onCloseClick];
      try {
        await Promise.all(callbacks.map((fn) => fn?.(event)));
      } finally {
      }
    }
    const { orientation, size: fieldGroupSize } = useFieldGroup(_props);
    const { isLeading, leadingIconName } = useComponentIcons(props);
    const b24ui = computed(() => tv({ extend: tv(theme$6), ...appConfig2.b24ui?.badge || {} })({
      color: props.color,
      inverted: Boolean(props.inverted),
      size: fieldGroupSize.value ?? props.size,
      square: props.square || !slots.default && !props.label,
      fieldGroup: orientation.value,
      useLink: Boolean(props.useLink),
      useClose: Boolean(props.useClose),
      leading: Boolean(isLeading.value)
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        "data-slot": "base",
        class: b24ui.value.base({ class: [unref(props).b24ui?.base, unref(props).class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Primitive), {
              as: unref(props).as,
              "data-slot": "wrapper",
              class: b24ui.value.wrapper({ class: unref(props).b24ui?.wrapper })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "leading", { b24ui: b24ui.value }, () => {
                    if (unref(isLeading) && unref(leadingIconName)) {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(unref(leadingIconName)), {
                        "data-slot": "leadingIcon",
                        class: b24ui.value.leadingIcon({ class: unref(props).b24ui?.leadingIcon })
                      }, null), _parent3, _scopeId2);
                    } else if (!!unref(props).avatar) {
                      _push3(ssrRenderComponent(_sfc_main$k, mergeProps({
                        size: unref(props).b24ui?.leadingAvatarSize || b24ui.value.leadingAvatarSize()
                      }, unref(props).avatar, {
                        "data-slot": "leadingAvatar",
                        class: b24ui.value.leadingAvatar({ class: unref(props).b24ui?.leadingAvatar })
                      }), null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  }, _push3, _parent3, _scopeId2);
                  ssrRenderSlot(_ctx.$slots, "default", { b24ui: b24ui.value }, () => {
                    if (unref(props).label !== void 0 && unref(props).label !== null) {
                      _push3(`<span data-slot="label" class="${ssrRenderClass(b24ui.value.label({ class: unref(props).b24ui?.label }))}"${_scopeId2}>${ssrInterpolate(unref(props).label)}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "leading", { b24ui: b24ui.value }, () => [
                      unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(resolveDynamicComponent(unref(leadingIconName)), {
                        key: 0,
                        "data-slot": "leadingIcon",
                        class: b24ui.value.leadingIcon({ class: unref(props).b24ui?.leadingIcon })
                      }, null, 8, ["class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$k, mergeProps({
                        key: 1,
                        size: unref(props).b24ui?.leadingAvatarSize || b24ui.value.leadingAvatarSize()
                      }, unref(props).avatar, {
                        "data-slot": "leadingAvatar",
                        class: b24ui.value.leadingAvatar({ class: unref(props).b24ui?.leadingAvatar })
                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                    ]),
                    renderSlot(_ctx.$slots, "default", { b24ui: b24ui.value }, () => [
                      unref(props).label !== void 0 && unref(props).label !== null ? (openBlock(), createBlock("span", {
                        key: 0,
                        "data-slot": "label",
                        class: b24ui.value.label({ class: unref(props).b24ui?.label })
                      }, toDisplayString(unref(props).label), 3)) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "trailing", { b24ui: b24ui.value }, () => {
              if (unref(props).useClose) {
                _push2(ssrRenderComponent(unref(Cross20Icon), {
                  "data-slot": "trailingIcon",
                  class: b24ui.value.trailingIcon({ class: unref(props).b24ui?.trailingIcon }),
                  "aria-hidden": "true",
                  onClick: onCloseClickWrapper
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode(unref(Primitive), {
                as: unref(props).as,
                "data-slot": "wrapper",
                class: b24ui.value.wrapper({ class: unref(props).b24ui?.wrapper })
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "leading", { b24ui: b24ui.value }, () => [
                    unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(resolveDynamicComponent(unref(leadingIconName)), {
                      key: 0,
                      "data-slot": "leadingIcon",
                      class: b24ui.value.leadingIcon({ class: unref(props).b24ui?.leadingIcon })
                    }, null, 8, ["class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$k, mergeProps({
                      key: 1,
                      size: unref(props).b24ui?.leadingAvatarSize || b24ui.value.leadingAvatarSize()
                    }, unref(props).avatar, {
                      "data-slot": "leadingAvatar",
                      class: b24ui.value.leadingAvatar({ class: unref(props).b24ui?.leadingAvatar })
                    }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                  ]),
                  renderSlot(_ctx.$slots, "default", { b24ui: b24ui.value }, () => [
                    unref(props).label !== void 0 && unref(props).label !== null ? (openBlock(), createBlock("span", {
                      key: 0,
                      "data-slot": "label",
                      class: b24ui.value.label({ class: unref(props).b24ui?.label })
                    }, toDisplayString(unref(props).label), 3)) : createCommentVNode("", true)
                  ])
                ]),
                _: 3
              }, 8, ["as", "class"]),
              renderSlot(_ctx.$slots, "trailing", { b24ui: b24ui.value }, () => [
                unref(props).useClose ? (openBlock(), createBlock(unref(Cross20Icon), {
                  key: 0,
                  "data-slot": "trailingIcon",
                  class: b24ui.value.trailingIcon({ class: unref(props).b24ui?.trailingIcon }),
                  "aria-hidden": "true",
                  onClick: withModifiers(onCloseClickWrapper, ["stop", "prevent"])
                }, null, 8, ["class"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Badge.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const theme$5 = {
  "slots": {
    "root": "font-[family-name:var(--ui-font-family-system)] font-(--ui-font-weight-regular)",
    "wrapper": "leading-(--ui-font-line-height-reset)",
    "labelWrapper": "flex content-center items-center justify-between gap-1",
    "label": "block text-label",
    "hint": "text-description",
    "container": "relative",
    "description": "leading-(--ui-font-line-height-2xs) text-description",
    "error": "text-(--ui-color-accent-main-alert)",
    "errorWrapper": "flex flex-row flex-nowrap items-center gap-0.5",
    "errorIcon": "size-4.5",
    "help": "leading-(--ui-font-line-height-2xs) italic text-description"
  },
  "variants": {
    "useDescription": {
      "true": {
        "wrapper": ""
      },
      "false": {
        "wrapper": ""
      }
    },
    "size": {
      "xs": {
        "root": "text-(length:--ui-font-size-xs)",
        "errorIcon": "size-[16px]"
      },
      "sm": {
        "root": "text-(length:--ui-font-size-xs)",
        "errorIcon": "size-[16px]"
      },
      "md": {
        "root": "text-(length:--ui-font-size-sm)",
        "errorIcon": "size-4.5"
      },
      "lg": {
        "root": "text-(length:--ui-font-size-md)"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-(--ui-color-accent-main-alert)"
      }
    },
    "orientation": {
      "vertical": {
        "container": "",
        "description": "mt-[2px]",
        "error": "mt-[4px]",
        "errorIcon": "mt-[2px]",
        "help": "mt-[6px]"
      },
      "horizontal": {
        "root": "flex justify-between place-items-baseline gap-2"
      }
    }
  },
  "compoundVariants": [
    {
      "useDescription": true,
      "orientation": "vertical",
      "class": {
        "wrapper": "mb-[6px]"
      }
    },
    {
      "useDescription": false,
      "orientation": "vertical",
      "class": {
        "wrapper": "mb-[10px]"
      }
    },
    {
      "orientation": "horizontal",
      "class": {
        "wrapper": ""
      }
    }
  ],
  "defaultVariants": {
    "size": "md"
  }
};
const _sfc_main$a = {
  __name: "B24FormField",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    name: { type: String, required: false },
    errorPattern: { type: null, required: false },
    label: { type: String, required: false },
    description: { type: String, required: false },
    help: { type: String, required: false },
    error: { type: [Boolean, String], required: false, default: void 0 },
    hint: { type: String, required: false },
    size: { type: null, required: false },
    required: { type: Boolean, required: false },
    eagerValidation: { type: Boolean, required: false },
    validateOnInputDelay: { type: Number, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const slots = useSlots();
    const props = useComponentProps("formField", _props);
    const appConfig2 = useAppConfig();
    const b24ui = computed(() => tv({ extend: tv(theme$5), ...appConfig2.b24ui?.formField || {} })({
      size: props.size,
      required: props.required,
      orientation: props.orientation,
      useDescription: Boolean(props.description) || !!slots.description
    }));
    const formErrors = inject(formErrorsInjectionKey, null);
    const error = computed(() => props.error || formErrors?.value?.find((error2) => error2.name === props.name || props.errorPattern && error2.name?.match(props.errorPattern))?.message);
    const id = ref(useId$1());
    const ariaId = id.value;
    const formInputs = inject(formInputsInjectionKey, void 0);
    watch(id, () => {
      if (formInputs && props.name) {
        formInputs.value[props.name] = { id: id.value, pattern: props.errorPattern };
      }
    }, { immediate: true });
    provide(inputIdInjectionKey, id);
    provide(formFieldInjectionKey, computed(() => ({
      error: error.value,
      name: props.name,
      size: props.size,
      eagerValidation: props.eagerValidation,
      validateOnInputDelay: props.validateOnInputDelay,
      errorPattern: props.errorPattern,
      hint: props.hint,
      description: props.description,
      help: props.help,
      ariaId
    })));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        "data-orientation": unref(props).orientation,
        "data-slot": "root",
        class: b24ui.value.root({ class: [unref(props).b24ui?.root, unref(props).class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="wrapper" class="${ssrRenderClass(b24ui.value.wrapper({ class: unref(props).b24ui?.wrapper }))}"${_scopeId}>`);
            if (unref(props).label || !!slots.label) {
              _push2(`<div data-slot="root" class="${ssrRenderClass(b24ui.value.labelWrapper({ class: unref(props).b24ui?.labelWrapper }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Label_default), {
                for: id.value,
                "data-slot": "label",
                class: b24ui.value.label({ class: unref(props).b24ui?.label })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "label", {
                      label: unref(props).label
                    }, () => {
                      _push3(`${ssrInterpolate(unref(props).label)}`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "label", {
                        label: unref(props).label
                      }, () => [
                        createTextVNode(toDisplayString(unref(props).label), 1)
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              if (unref(props).hint || !!slots.hint) {
                _push2(`<span${ssrRenderAttr("id", `${unref(ariaId)}-hint`)} data-slot="hint" class="${ssrRenderClass(b24ui.value.hint({ class: unref(props).b24ui?.hint }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "hint", {
                  hint: unref(props).hint
                }, () => {
                  _push2(`${ssrInterpolate(unref(props).hint)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(props).description || !!slots.description) {
              _push2(`<p${ssrRenderAttr("id", `${unref(ariaId)}-description`)} data-slot="description" class="${ssrRenderClass(b24ui.value.description({ class: unref(props).b24ui?.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {
                description: unref(props).description
              }, () => {
                _push2(`${ssrInterpolate(unref(props).description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-slot="container" class="${ssrRenderClass([(unref(props).label || !!slots.label || unref(props).description || !!slots.description) && b24ui.value.container({ class: unref(props).b24ui?.container })])}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", { error: error.value }, null, _push2, _parent2, _scopeId);
            if (unref(props).error !== false && (typeof error.value === "string" && error.value || !!slots.error)) {
              _push2(`<div${ssrRenderAttr("id", `${unref(ariaId)}-error`)} data-slot="error" class="${ssrRenderClass(b24ui.value.error({ class: unref(props).b24ui?.error }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "error", { error: error.value }, () => {
                _push2(`<div data-slot="errorWrapper" class="${ssrRenderClass(b24ui.value.errorWrapper({ class: unref(props).b24ui?.errorWrapper }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(WarningIcon), {
                  "data-slot": "errorIcon",
                  class: b24ui.value.errorIcon()
                }, null, _parent2, _scopeId));
                _push2(`<div${_scopeId}>${ssrInterpolate(error.value)}</div></div>`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else if (unref(props).help || !!slots.help) {
              _push2(`<div${ssrRenderAttr("id", `${unref(ariaId)}-help`)} data-slot="help" class="${ssrRenderClass(b24ui.value.help({ class: unref(props).b24ui?.help }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "help", {
                help: unref(props).help
              }, () => {
                _push2(`${ssrInterpolate(unref(props).help)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                "data-slot": "wrapper",
                class: b24ui.value.wrapper({ class: unref(props).b24ui?.wrapper })
              }, [
                unref(props).label || !!slots.label ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "root",
                  class: b24ui.value.labelWrapper({ class: unref(props).b24ui?.labelWrapper })
                }, [
                  createVNode(unref(Label_default), {
                    for: id.value,
                    "data-slot": "label",
                    class: b24ui.value.label({ class: unref(props).b24ui?.label })
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "label", {
                        label: unref(props).label
                      }, () => [
                        createTextVNode(toDisplayString(unref(props).label), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["for", "class"]),
                  unref(props).hint || !!slots.hint ? (openBlock(), createBlock("span", {
                    key: 0,
                    id: `${unref(ariaId)}-hint`,
                    "data-slot": "hint",
                    class: b24ui.value.hint({ class: unref(props).b24ui?.hint })
                  }, [
                    renderSlot(_ctx.$slots, "hint", {
                      hint: unref(props).hint
                    }, () => [
                      createTextVNode(toDisplayString(unref(props).hint), 1)
                    ])
                  ], 10, ["id"])) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true),
                unref(props).description || !!slots.description ? (openBlock(), createBlock("p", {
                  key: 1,
                  id: `${unref(ariaId)}-description`,
                  "data-slot": "description",
                  class: b24ui.value.description({ class: unref(props).b24ui?.description })
                }, [
                  renderSlot(_ctx.$slots, "description", {
                    description: unref(props).description
                  }, () => [
                    createTextVNode(toDisplayString(unref(props).description), 1)
                  ])
                ], 10, ["id"])) : createCommentVNode("", true)
              ], 2),
              createVNode("div", {
                "data-slot": "container",
                class: [(unref(props).label || !!slots.label || unref(props).description || !!slots.description) && b24ui.value.container({ class: unref(props).b24ui?.container })]
              }, [
                renderSlot(_ctx.$slots, "default", { error: error.value }),
                unref(props).error !== false && (typeof error.value === "string" && error.value || !!slots.error) ? (openBlock(), createBlock("div", {
                  key: 0,
                  id: `${unref(ariaId)}-error`,
                  "data-slot": "error",
                  class: b24ui.value.error({ class: unref(props).b24ui?.error })
                }, [
                  renderSlot(_ctx.$slots, "error", { error: error.value }, () => [
                    createVNode("div", {
                      "data-slot": "errorWrapper",
                      class: b24ui.value.errorWrapper({ class: unref(props).b24ui?.errorWrapper })
                    }, [
                      createVNode(unref(WarningIcon), {
                        "data-slot": "errorIcon",
                        class: b24ui.value.errorIcon()
                      }, null, 8, ["class"]),
                      createVNode("div", null, toDisplayString(error.value), 1)
                    ], 2)
                  ])
                ], 10, ["id"])) : unref(props).help || !!slots.help ? (openBlock(), createBlock("div", {
                  key: 1,
                  id: `${unref(ariaId)}-help`,
                  "data-slot": "help",
                  class: b24ui.value.help({ class: unref(props).b24ui?.help })
                }, [
                  renderSlot(_ctx.$slots, "help", {
                    help: unref(props).help
                  }, () => [
                    createTextVNode(toDisplayString(unref(props).help), 1)
                  ])
                ], 10, ["id"])) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/FormField.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const theme$4 = {
  "slots": {
    "root": "isolate relative inline-flex items-center",
    "base": "px-3 w-full py-0 border-0 focus:outline-none disabled:cursor-not-allowed disabled:pointer-events-auto disabled:select-none disabled:opacity-30 disabled:resize-none appearance-none transition-colors duration-300 ease-linear text-(--ui-color-base-1) style-blurred-bg-input placeholder:text-(--ui-color-design-plain-na-content-secondary) hover:text-(--ui-color-base-1) focus:text-(--ui-color-base-1) active:text-(--ui-color-base-1) font-[family-name:var(--ui-font-family-primary)] font-(--ui-font-weight-regular) align-middle text-ellipsis whitespace-nowrap",
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-(--b24ui-icon-color)",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-(--b24ui-icon-color)",
    "tag": "pointer-events-none select-none absolute z-10 -top-[7px] right-[14px] flex flex-col justify-center items-center"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": {
        "root": "group leading-none has-focus-visible:z-[1]",
        "base": "focus-visible:outline-none ring ring-inset ring-1 focus-visible:ring-2 group-not-only:group-first:rounded-e-3xl group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none group-not-only:group-first:border-e-0 group-not-only:group-not-first:border-s-0"
      },
      "vertical": {
        "root": "group has-focus-visible:z-[1]",
        "base": "focus-visible:outline-none ring ring-inset ring-1 focus-visible:ring-2 group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"
      }
    },
    "noSplit": {
      "false": "group-not-only:not-first:after:content-[''] group-not-only:not-first:after:absolute group-not-only:not-first:after:top-[7px] group-not-only:not-first:after:bottom-[6px] group-not-only:not-first:after:left-0 group-not-only:not-first:after:w-px group-not-only:not-first:after:bg-current/30"
    },
    "size": {
      "xss": {
        "base": "h-[20px] gap-1 text-(length:--ui-font-size-4xs)/[normal]",
        "leading": "px-1",
        "trailing": "px-1",
        "leadingIcon": "size-[12px]",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-[12px]"
      },
      "xs": {
        "base": "h-[24px] gap-1 text-(length:--ui-font-size-xs)/[normal]",
        "leading": "px-1",
        "trailing": "px-1",
        "leadingIcon": "size-[14px]",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-[14px]"
      },
      "sm": {
        "base": "h-[28px] gap-1.5 text-(length:--ui-font-size-sm)/[normal]",
        "leading": "px-1.5",
        "trailing": "px-1.5",
        "leadingIcon": "size-[16px]",
        "leadingAvatar": "size-[16px]",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-[16px]"
      },
      "md": {
        "base": "h-[34px] gap-1.5 text-(length:--ui-font-size-lg)/[normal]",
        "leading": "px-2",
        "trailing": "px-2",
        "leadingIcon": "size-4.5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-4.5"
      },
      "lg": {
        "base": "h-[38px] gap-2 text-(length:--ui-font-size-lg)/[normal]",
        "leading": "px-2",
        "trailing": "px-2",
        "leadingIcon": "size-[22px]",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-[22px]"
      },
      "xl": {
        "base": "h-[46px] gap-2 text-(length:--ui-font-size-2xl)/[normal]",
        "leading": "px-2",
        "trailing": "px-2",
        "leadingIcon": "size-[22px]",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-[22px]"
      }
    },
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
      "default": {
        "base": "style-old-default"
      },
      "danger": {
        "base": "style-old-danger"
      },
      "success": {
        "base": "style-old-success"
      },
      "warning": {
        "base": "style-old-warning"
      },
      "primary": {
        "base": "style-old-primary"
      },
      "secondary": {
        "base": "style-old-secondary"
      },
      "collab": {
        "base": "style-old-collab"
      },
      "ai": {
        "base": "style-old-ai"
      }
    },
    "rounded": {
      "true": "rounded-(--ui-border-radius-3xl)",
      "false": "rounded-(--ui-border-radius-sm)"
    },
    "noPadding": {
      "true": {
        "base": "px-0"
      }
    },
    "noBorder": {
      "true": "ring-0 focus-visible:ring-0 style-transparent-bg"
    },
    "underline": {
      "true": "rounded-none ring-0 focus-visible:ring-0 style-transparent-bg border-b-1 border-b-(--ui-color-design-outline-stroke)"
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "highlight": {
      "true": "ring ring-inset ring-(--b24ui-border-color)"
    },
    "fixed": {
      "false": ""
    },
    "type": {
      "file": "file:me-1.5 file:text-(--ui-color-design-plain-na-content-secondary) file:outline-none"
    }
  },
  "compoundVariants": [
    {
      "highlight": false,
      "noBorder": false,
      "underline": false,
      "class": {
        "base": "ring ring-inset ring-(--ui-color-design-outline-stroke) focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-(--b24ui-border-color) hover:not-disabled:not-data-disabled:ring-1 hover:not-disabled:not-data-disabled:ring-inset hover:not-disabled:not-data-disabled:ring-(--b24ui-border-color) data-[state=open]:ring-1 data-[state=open]:ring-inset data-[state=open]:ring-(--b24ui-border-color)"
      }
    },
    {
      "highlight": true,
      "noBorder": false,
      "underline": false,
      "class": {
        "base": "ring ring-inset ring-(--b24ui-border-color) focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-(--b24ui-border-color) hover:ring-1 hover:ring-inset hover:ring-(--b24ui-border-color) data-[state=open]:ring-1 data-[state=open]:ring-inset data-[state=open]:ring-(--b24ui-border-color)"
      }
    },
    {
      "noBorder": false,
      "underline": true,
      "class": {
        "base": "focus-visible:border-(--b24ui-border-color) hover:not-disabled:not-data-disabled:border-(--b24ui-border-color) data-[state=open]:border-(--b24ui-border-color)"
      }
    },
    {
      "highlight": true,
      "noBorder": false,
      "underline": true,
      "class": {
        "base": "ring-0 border-b-(--b24ui-border-color)"
      }
    },
    {
      "highlight": true,
      "noBorder": true,
      "underline": false,
      "class": {
        "base": "ring-0"
      }
    },
    {
      "type": "file",
      "size": "xss",
      "class": "py-[2px]"
    },
    {
      "type": "file",
      "size": "xs",
      "class": "py-[4px]"
    },
    {
      "type": "file",
      "size": "sm",
      "class": "py-[5px]"
    },
    {
      "type": "file",
      "size": "md",
      "class": "py-[7px]"
    },
    {
      "type": "file",
      "size": "lg",
      "class": "py-[9px]"
    },
    {
      "type": "file",
      "size": "xl",
      "class": "py-[11px]"
    },
    {
      "leading": true,
      "noPadding": false,
      "size": "xss",
      "class": "ps-[20px]"
    },
    {
      "leading": true,
      "noPadding": false,
      "size": "xs",
      "class": "ps-[22px]"
    },
    {
      "leading": true,
      "noPadding": false,
      "size": "sm",
      "class": "ps-[28px]"
    },
    {
      "leading": true,
      "noPadding": false,
      "size": "md",
      "class": "ps-[32px]"
    },
    {
      "leading": true,
      "noPadding": false,
      "size": "lg",
      "class": "ps-[32px]"
    },
    {
      "leading": true,
      "noPadding": false,
      "size": "xl",
      "class": "ps-[32px]"
    },
    {
      "trailing": true,
      "noPadding": false,
      "size": "xss",
      "class": "pe-[20px]"
    },
    {
      "trailing": true,
      "noPadding": false,
      "size": "xs",
      "class": "pe-[22px]"
    },
    {
      "trailing": true,
      "noPadding": false,
      "size": "sm",
      "class": "pe-[28px]"
    },
    {
      "trailing": true,
      "noPadding": false,
      "size": "md",
      "class": "pe-[34px]"
    },
    {
      "trailing": true,
      "noPadding": false,
      "size": "lg",
      "class": "pe-[38px]"
    },
    {
      "trailing": true,
      "noPadding": false,
      "size": "xl",
      "class": "pe-[38px]"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "size-[21px]"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "size-[21px]"
      }
    },
    {
      "loading": true,
      "leading": true,
      "noPadding": true,
      "class": {
        "base": "ps-[34px]"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "noPadding": true,
      "class": {
        "base": "pe-[34px]"
      }
    },
    {
      "fieldGroup": [
        "horizontal",
        "vertical"
      ],
      "size": [
        "xl",
        "lg",
        "md"
      ],
      "rounded": false,
      "class": "rounded-(--ui-border-radius-md)"
    },
    {
      "fieldGroup": [
        "horizontal",
        "vertical"
      ],
      "size": "sm",
      "rounded": false,
      "class": "rounded-(--ui-border-radius-sm)"
    },
    {
      "fieldGroup": [
        "horizontal",
        "vertical"
      ],
      "size": "xs",
      "rounded": false,
      "class": "rounded-(--ui-border-radius-xs)"
    },
    {
      "fieldGroup": [
        "horizontal",
        "vertical"
      ],
      "size": "xss",
      "rounded": false,
      "class": "rounded-[5px]"
    },
    {
      "fixed": false,
      "size": "xss",
      "class": "md:text-(length:--ui-font-size-4xs)/[normal]"
    },
    {
      "fixed": false,
      "size": "xs",
      "class": "md:text-(length:--ui-font-size-xs)/[normal]"
    },
    {
      "fixed": false,
      "size": "sm",
      "class": "md:text-(length:--ui-font-size-sm)/[normal]"
    },
    {
      "fixed": false,
      "size": "md",
      "class": "md:text-(length:--ui-font-size-lg)/[normal]"
    },
    {
      "fixed": false,
      "size": "lg",
      "class": "md:text-(length:--ui-font-size-lg)/[normal]"
    }
  ],
  "defaultVariants": {
    "color": "air-primary",
    "size": "md"
  }
};
const _sfc_main$9 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "B24Input",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    type: { type: null, required: false, default: "text" },
    placeholder: { type: String, required: false },
    color: { type: null, required: false },
    size: { type: null, required: false },
    noPadding: { type: Boolean, required: false },
    noBorder: { type: Boolean, required: false },
    underline: { type: Boolean, required: false },
    rounded: { type: Boolean, required: false },
    required: { type: Boolean, required: false },
    autocomplete: { type: [String, Object], required: false, default: "off" },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false, default: 0 },
    disabled: { type: Boolean, required: false },
    tag: { type: String, required: false },
    tagColor: { type: null, required: false },
    highlight: { type: Boolean, required: false },
    fixed: { type: Boolean, required: false },
    modelValue: { type: null, required: false },
    defaultValue: { type: null, required: false },
    modelModifiers: { type: null, required: false },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false },
    icon: { type: [Function, Object], required: false },
    avatar: { type: Object, required: false },
    loading: { type: Boolean, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: [Function, Object], required: false }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("input", _props);
    const modelValue = useVModel(props, "modelValue", emits, { defaultValue: props.defaultValue });
    const appConfig2 = useAppConfig();
    const { emitFormBlur, emitFormInput, emitFormChange, size: formFieldSize, color, id, name, highlight, disabled, emitFormFocus, ariaAttrs } = useFormField(_props, { deferInputValidation: true });
    const { orientation, size: fieldGroupSize } = useFieldGroup(_props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const inputSize = computed(() => fieldGroupSize.value || formFieldSize.value);
    const isTag = computed(() => {
      return props.tag;
    });
    const b24ui = computed(() => tv({ extend: tv(theme$4), ...appConfig2.b24ui?.input || {} })({
      type: props.type,
      color: color.value ?? props.color,
      size: inputSize?.value ?? props.size,
      loading: props.loading,
      highlight: highlight.value ?? props.highlight,
      fixed: props.fixed,
      rounded: Boolean(props.rounded),
      noPadding: Boolean(props.noPadding),
      noBorder: Boolean(props.noBorder),
      underline: Boolean(props.underline),
      leading: Boolean(isLeading.value || !!props.avatar || !!slots.leading),
      trailing: Boolean(isTrailing.value || !!slots.trailing),
      fieldGroup: orientation.value
    }));
    const inputRef = useTemplateRef("inputRef");
    function updateInput(value) {
      if (props.modelModifiers?.trim && (typeof value === "string" || value === null || value === void 0)) {
        value = value?.trim() ?? null;
      }
      if (props.modelModifiers?.number || props.type === "number") {
        value = looseToNumber(value);
      }
      if (props.modelModifiers?.nullable) {
        value ||= null;
      }
      if (props.modelModifiers?.optional && !props.modelModifiers?.nullable && value !== null) {
        value ||= void 0;
      }
      modelValue.value = value;
      emitFormInput();
    }
    function onInput(event) {
      if (!props.modelModifiers?.lazy) {
        updateInput(event.target.value);
      }
    }
    function onChange(event) {
      const value = event.target.value;
      if (props.modelModifiers?.lazy) {
        updateInput(value);
      }
      if (props.modelModifiers?.trim) {
        event.target.value = value.trim();
      }
      emitFormChange();
      emits("change", event);
    }
    function onBlur(event) {
      emitFormBlur();
      emits("blur", event);
    }
    __expose({
      inputRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        "data-slot": "root",
        class: b24ui.value.root({ class: [unref(props).b24ui?.root, unref(props).class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (isTag.value) {
              _push2(ssrRenderComponent(_sfc_main$b, {
                "data-slot": "tag",
                class: b24ui.value.tag({ class: unref(props).b24ui?.tag }),
                color: unref(props).tagColor,
                label: unref(props).tag,
                size: "xs"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<input${ssrRenderAttrs(mergeProps({
              id: unref(id),
              ref_key: "inputRef",
              ref: inputRef,
              type: unref(props).type,
              value: unref(modelValue),
              name: unref(name),
              placeholder: unref(props).placeholder,
              "data-slot": "base",
              class: b24ui.value.base({ class: unref(props).b24ui?.base }),
              disabled: unref(disabled),
              required: unref(props).required,
              autocomplete: unref(props).autocomplete
            }, { ..._ctx.$attrs, ...unref(ariaAttrs) }))}${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", { b24ui: b24ui.value }, null, _push2, _parent2, _scopeId);
            if (unref(isLeading) || !!unref(props).avatar || !!slots.leading) {
              _push2(`<span data-slot="leading" class="${ssrRenderClass(b24ui.value.leading({ class: unref(props).b24ui?.leading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "leading", { b24ui: b24ui.value }, () => {
                if (unref(isLeading) && unref(leadingIconName)) {
                  ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(leadingIconName)), {
                    "data-slot": "leadingIcon",
                    class: b24ui.value.leadingIcon({ class: unref(props).b24ui?.leadingIcon })
                  }, null), _parent2, _scopeId);
                } else if (!!unref(props).avatar) {
                  _push2(ssrRenderComponent(_sfc_main$k, mergeProps({
                    size: unref(props).b24ui?.leadingAvatarSize || b24ui.value.leadingAvatarSize()
                  }, unref(props).avatar, {
                    "data-slot": "leadingAvatar",
                    class: b24ui.value.leadingAvatar({ class: unref(props).b24ui?.leadingAvatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(isTrailing) || !!slots.trailing) {
              _push2(`<span data-slot="trailing" class="${ssrRenderClass(b24ui.value.trailing({ class: unref(props).b24ui?.trailing }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "trailing", { b24ui: b24ui.value }, () => {
                if (unref(trailingIconName)) {
                  ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(trailingIconName)), {
                    "data-slot": "trailingIcon",
                    class: b24ui.value.trailingIcon({ class: unref(props).b24ui?.trailingIcon })
                  }, null), _parent2, _scopeId);
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              isTag.value ? (openBlock(), createBlock(_sfc_main$b, {
                key: 0,
                "data-slot": "tag",
                class: b24ui.value.tag({ class: unref(props).b24ui?.tag }),
                color: unref(props).tagColor,
                label: unref(props).tag,
                size: "xs"
              }, null, 8, ["class", "color", "label"])) : createCommentVNode("", true),
              createVNode("input", mergeProps({
                id: unref(id),
                ref_key: "inputRef",
                ref: inputRef,
                type: unref(props).type,
                value: unref(modelValue),
                name: unref(name),
                placeholder: unref(props).placeholder,
                "data-slot": "base",
                class: b24ui.value.base({ class: unref(props).b24ui?.base }),
                disabled: unref(disabled),
                required: unref(props).required,
                autocomplete: unref(props).autocomplete
              }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                onInput,
                onBlur,
                onChange,
                onFocus: unref(emitFormFocus)
              }), null, 16, ["id", "type", "value", "name", "placeholder", "disabled", "required", "autocomplete", "onFocus"]),
              renderSlot(_ctx.$slots, "default", { b24ui: b24ui.value }),
              unref(isLeading) || !!unref(props).avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                key: 1,
                "data-slot": "leading",
                class: b24ui.value.leading({ class: unref(props).b24ui?.leading })
              }, [
                renderSlot(_ctx.$slots, "leading", { b24ui: b24ui.value }, () => [
                  unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(resolveDynamicComponent(unref(leadingIconName)), {
                    key: 0,
                    "data-slot": "leadingIcon",
                    class: b24ui.value.leadingIcon({ class: unref(props).b24ui?.leadingIcon })
                  }, null, 8, ["class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$k, mergeProps({
                    key: 1,
                    size: unref(props).b24ui?.leadingAvatarSize || b24ui.value.leadingAvatarSize()
                  }, unref(props).avatar, {
                    "data-slot": "leadingAvatar",
                    class: b24ui.value.leadingAvatar({ class: unref(props).b24ui?.leadingAvatar })
                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true),
              unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                key: 2,
                "data-slot": "trailing",
                class: b24ui.value.trailing({ class: unref(props).b24ui?.trailing })
              }, [
                renderSlot(_ctx.$slots, "trailing", { b24ui: b24ui.value }, () => [
                  unref(trailingIconName) ? (openBlock(), createBlock(resolveDynamicComponent(unref(trailingIconName)), {
                    key: 0,
                    "data-slot": "trailingIcon",
                    class: b24ui.value.trailingIcon({ class: unref(props).b24ui?.trailingIcon })
                  }, null, 8, ["class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Input.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Calendar = {
  Root: CalendarRoot_default,
  Header: CalendarHeader_default,
  Heading: CalendarHeading_default,
  Grid: CalendarGrid_default,
  Cell: CalendarCell_default,
  HeadCell: CalendarHeadCell_default,
  Next: CalendarNext_default,
  Prev: CalendarPrev_default,
  GridHead: CalendarGridHead_default,
  GridBody: CalendarGridBody_default,
  GridRow: CalendarGridRow_default,
  CellTrigger: CalendarCellTrigger_default
};
const HoverCard = {
  Root: HoverCardRoot_default,
  Trigger: HoverCardTrigger_default,
  Portal: HoverCardPortal_default,
  Content: HoverCardContent_default,
  Arrow: HoverCardArrow_default
};
const Popover = {
  Root: PopoverRoot_default,
  Trigger: PopoverTrigger_default,
  Portal: PopoverPortal_default,
  Content: PopoverContent_default,
  Arrow: PopoverArrow_default,
  Close: PopoverClose_default,
  Anchor: PopoverAnchor_default
};
const RangeCalendar = {
  Root: RangeCalendarRoot_default,
  Header: RangeCalendarHeader_default,
  Heading: RangeCalendarHeading_default,
  Grid: RangeCalendarGrid_default,
  Cell: RangeCalendarCell_default,
  HeadCell: RangeCalendarHeadCell_default,
  Next: RangeCalendarNext_default,
  Prev: RangeCalendarPrev_default,
  GridHead: RangeCalendarGridHead_default,
  GridBody: RangeCalendarGridBody_default,
  GridRow: RangeCalendarGridRow_default,
  CellTrigger: RangeCalendarCellTrigger_default
};
function pointerDownOutside(e, options = {}) {
  const originalEvent = e.detail.originalEvent;
  const target = originalEvent.target;
  if (!target?.isConnected) {
    e.preventDefault();
    return;
  }
  if (options.scrollable) {
    if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
      e.preventDefault();
    }
  }
}
const theme$3 = {
  "slots": {
    "content": "base-mode bg-(--ui-color-bg-content-primary) shadow-(--popup-window-box-shadow) rounded-(--ui-border-radius-xl) will-change-[opacity] motion-safe:data-[state=open]:animate-[scale-in_100ms_ease-out] motion-safe:data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto",
    "arrow": "fill-(--ui-color-bg-content-primary)"
  }
};
const _sfc_main$8 = {
  __name: "B24Popover",
  __ssrInlineRender: true,
  props: {
    mode: { type: null, required: false, default: "click" },
    content: { type: Object, required: false },
    arrow: { type: [Boolean, Object], required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    reference: { type: null, required: false },
    dismissible: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    b24ui: { type: null, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    modal: { type: Boolean, required: false },
    openDelay: { type: Number, required: false, default: 0 },
    closeDelay: { type: Number, required: false, default: 0 }
  },
  emits: ["close:prevent", "update:open"],
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("popover", _props);
    const appConfig2 = useAppConfig();
    const pick = props.mode === "hover" ? reactivePick(props, "defaultOpen", "open", "openDelay", "closeDelay") : reactivePick(props, "defaultOpen", "open", "modal");
    const rootProps = useForwardProps(pick, emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 }));
    const contentEvents = computed(() => {
      if (!props.dismissible) {
        const events = ["interactOutside", "escapeKeyDown"];
        return events.reduce((acc, curr) => {
          acc[curr] = (e) => {
            e.preventDefault();
            emits("close:prevent");
          };
          return acc;
        }, {});
      }
      return {
        pointerDownOutside
      };
    });
    const arrowProps = toRef(() => defu(typeof props.arrow === "boolean" ? {} : props.arrow, { width: 20, height: 10 }));
    const b24ui = computed(() => tv({ extend: tv(theme$3), ...appConfig2.b24ui?.popover || {} })({
      side: contentProps.value.side
    }));
    const Component = computed(() => props.mode === "hover" ? HoverCard : Popover);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Component).Root, mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default || !!unref(props).reference) {
              _push2(ssrRenderComponent(unref(Component).Trigger, {
                "as-child": "",
                reference: unref(props).reference,
                class: unref(props).class
              }, {
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
            if ("Anchor" in Component.value && !!slots.anchor) {
              _push2(ssrRenderComponent(unref(Component).Anchor, { "as-child": "" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "anchor", close ? { close } : {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "anchor", close ? { close } : {})
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(Component).Portal, unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(FieldGroupReset), null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Component).Content, mergeProps(contentProps.value, {
                          "data-slot": "content",
                          class: b24ui.value.content({ class: [!slots.default && unref(props).class, unref(props).b24ui?.content] })
                        }, toHandlers(contentEvents.value)), {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              ssrRenderSlot(_ctx.$slots, "content", close ? { close } : {}, null, _push5, _parent5, _scopeId4);
                              if (!!unref(props).arrow) {
                                _push5(ssrRenderComponent(unref(Component).Arrow, mergeProps(arrowProps.value, {
                                  "data-slot": "arrow",
                                  class: b24ui.value.arrow({ class: unref(props).b24ui?.arrow })
                                }), null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                renderSlot(_ctx.$slots, "content", close ? { close } : {}),
                                !!unref(props).arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                                  "data-slot": "arrow",
                                  class: b24ui.value.arrow({ class: unref(props).b24ui?.arrow })
                                }), null, 16, ["class"])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                            "data-slot": "content",
                            class: b24ui.value.content({ class: [!slots.default && unref(props).class, unref(props).b24ui?.content] })
                          }, toHandlers(contentEvents.value)), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "content", close ? { close } : {}),
                              !!unref(props).arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                                "data-slot": "arrow",
                                class: b24ui.value.arrow({ class: unref(props).b24ui?.arrow })
                              }), null, 16, ["class"])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1040, ["class"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(FieldGroupReset), null, {
                      default: withCtx(() => [
                        createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                          "data-slot": "content",
                          class: b24ui.value.content({ class: [!slots.default && unref(props).class, unref(props).b24ui?.content] })
                        }, toHandlers(contentEvents.value)), {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "content", close ? { close } : {}),
                            !!unref(props).arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                              "data-slot": "arrow",
                              class: b24ui.value.arrow({ class: unref(props).b24ui?.arrow })
                            }), null, 16, ["class"])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1040, ["class"])
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
              !!slots.default || !!unref(props).reference ? (openBlock(), createBlock(unref(Component).Trigger, {
                key: 0,
                "as-child": "",
                reference: unref(props).reference,
                class: unref(props).class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["reference", "class"])) : createCommentVNode("", true),
              "Anchor" in Component.value && !!slots.anchor ? (openBlock(), createBlock(unref(Component).Anchor, {
                key: 1,
                "as-child": ""
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "anchor", close ? { close } : {})
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true),
              createVNode(unref(Component).Portal, unref(portalProps), {
                default: withCtx(() => [
                  createVNode(unref(FieldGroupReset), null, {
                    default: withCtx(() => [
                      createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                        "data-slot": "content",
                        class: b24ui.value.content({ class: [!slots.default && unref(props).class, unref(props).b24ui?.content] })
                      }, toHandlers(contentEvents.value)), {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "content", close ? { close } : {}),
                          !!unref(props).arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                            "data-slot": "arrow",
                            class: b24ui.value.arrow({ class: unref(props).b24ui?.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1040, ["class"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Popover.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const theme$2 = {
  "slots": {
    "root": "font-[family-name:var(--ui-font-family-primary)]",
    "header": "flex items-center justify-between",
    "body": "flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0",
    "heading": "mx-auto text-center font-(--ui-font-weight-semi-bold) text-legend truncate",
    "grid": "w-full border-collapse select-none space-y-1 focus:outline-none",
    "gridRow": "grid grid-cols-7 place-items-center",
    "gridWeekDaysRow": "mb-1 grid w-full grid-cols-7",
    "gridBody": "grid",
    "headCell": "font-(--ui-font-weight-normal) text-(--ui-color-design-plain-na-content-secondary)",
    "headCellWeek": "text-(--ui-color-design-plain-na-content-secondary)",
    "cell": "relative text-center cursor-pointer aria-disabled:cursor-not-allowed",
    "cellTrigger": "m-0.5 relative flex items-center justify-center rounded-full whitespace-nowrap focus-visible:ring-2 focus:outline-none text-label data-disabled:text-(--ui-color-design-plain-na-content-secondary) data-unavailable:text-(--ui-color-design-plain-na-content-secondary) data-outside-view:text-(--ui-color-design-plain-na-content-secondary) data-[selected]:text-(--b24ui-color) focus-visible:ring-(--b24ui-background-hover) data-[selected]:bg-(--b24ui-background) data-today:not-data-[selected]:text-(--b24ui-background) data-[highlighted]:bg-(--b24ui-background) data-[highlighted]:text-(--b24ui-color) hover:not-data-[disabled]:not-data-[selected]:bg-(--b24ui-background) hover:not-data-[disabled]:not-data-[selected]:text-(--b24ui-color) data-unavailable:line-through data-unavailable:pointer-events-none data-today:font-(--ui-font-weight-semi-bold) transition",
    "cellWeek": "relative text-center text-(--ui-color-design-plain-na-content-secondary)"
  },
  "variants": {
    "color": {
      "air-primary": {
        "root": "style-filled"
      },
      "air-primary-success": {
        "root": "style-filled-success"
      },
      "air-primary-alert": {
        "root": "style-filled-alert"
      },
      "air-primary-copilot": {
        "root": "style-filled-copilot"
      },
      "air-primary-warning": {
        "root": "style-filled-warning"
      },
      "default": {
        "root": "style-old-default"
      },
      "danger": {
        "root": "style-old-danger"
      },
      "success": {
        "root": "style-old-success"
      },
      "warning": {
        "root": "style-old-warning"
      },
      "primary": {
        "root": "style-old-primary"
      },
      "secondary": {
        "root": "style-old-secondary"
      },
      "collab": {
        "root": "style-old-collab"
      },
      "ai": {
        "root": "style-old-ai"
      }
    },
    "size": {
      "xs": {
        "heading": "text-(length:--ui-font-size-md)",
        "cell": "text-(length:--ui-font-size-sm)",
        "cellWeek": "text-(length:--ui-font-size-4xs)",
        "headCell": "text-(length:--ui-font-size-4xs)",
        "headCellWeek": "text-(length:--ui-font-size-4xs)",
        "cellTrigger": "size-[28px]",
        "body": "space-y-2 pt-2"
      },
      "sm": {
        "heading": "text-(length:--ui-font-size-md)",
        "headCell": "text-(length:--ui-font-size-3xs)",
        "headCellWeek": "text-(length:--ui-font-size-3xs)",
        "cellWeek": "text-(length:--ui-font-size-3xs)",
        "cell": "text-(length:--ui-font-size-sm)",
        "cellTrigger": "size-[28px]"
      },
      "md": {
        "heading": "text-(length:--ui-font-size-lg)",
        "headCell": "text-(length:--ui-font-size-xs)",
        "headCellWeek": "text-(length:--ui-font-size-xs)",
        "cellWeek": "text-(length:--ui-font-size-xs)",
        "cell": "text-(length:--ui-font-size-md)",
        "cellTrigger": "size-[32px]"
      },
      "lg": {
        "heading": "text-(length:--ui-font-size-2xl)",
        "headCell": "text-(length:--ui-font-size-xs)",
        "headCellWeek": "text-(length:--ui-font-size-xs)",
        "cellWeek": "text-(length:--ui-font-size-xs)",
        "cell": "text-(length:--ui-font-size-lg)",
        "cellTrigger": "size-[36px] text-(length:--ui-font-size-lg)"
      }
    },
    "weekNumbers": {
      "true": {
        "gridRow": "grid-cols-8",
        "gridWeekDaysRow": "grid-cols-8 [&>*:first-child]:col-start-2"
      }
    }
  },
  "defaultVariants": {
    "size": "md",
    "color": "air-primary"
  }
};
const _sfc_main$7 = {
  __name: "B24Calendar",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    nextYearIcon: { type: [Function, Object], required: false },
    nextYear: { type: Object, required: false },
    nextMonthIcon: { type: [Function, Object], required: false },
    nextMonth: { type: Object, required: false },
    prevYearIcon: { type: [Function, Object], required: false },
    prevYear: { type: Object, required: false },
    prevMonthIcon: { type: [Function, Object], required: false },
    prevMonth: { type: Object, required: false },
    color: { type: null, required: false },
    size: { type: null, required: false },
    range: { type: Boolean, required: false },
    multiple: { type: Boolean, required: false },
    monthControls: { type: Boolean, required: false, default: true },
    yearControls: { type: Boolean, required: false, default: false },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    weekNumbers: { type: Boolean, required: false },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false },
    defaultPlaceholder: { type: Object, required: false },
    placeholder: { type: Object, required: false },
    allowNonContiguousRanges: { type: Boolean, required: false },
    pagedNavigation: { type: Boolean, required: false },
    preventDeselect: { type: Boolean, required: false },
    maximumDays: { type: Number, required: false },
    weekStartsOn: { type: Number, required: false },
    weekdayFormat: { type: String, required: false },
    fixedWeeks: { type: Boolean, required: false, default: true },
    maxValue: { type: Object, required: false },
    minValue: { type: Object, required: false },
    locale: { type: String, required: false },
    numberOfMonths: { type: Number, required: false },
    disabled: { type: Boolean, required: false },
    readonly: { type: Boolean, required: false },
    initialFocus: { type: Boolean, required: false },
    isDateDisabled: { type: Function, required: false },
    isDateUnavailable: { type: Function, required: false },
    isDateHighlightable: { type: Function, required: false },
    nextPage: { type: Function, required: false },
    prevPage: { type: Function, required: false },
    disableDaysOutsideCurrentView: { type: Boolean, required: false },
    fixedDate: { type: String, required: false }
  },
  emits: ["update:modelValue", "update:placeholder", "update:validModelValue", "update:startValue"],
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const props = useComponentProps("calendar", _props);
    const { dir, t, locale } = useLocale();
    const appConfig2 = useAppConfig();
    const rootProps = useForwardProps(reactiveOmit(props, "range", "modelValue", "defaultValue", "color", "size", "monthControls", "yearControls", "class", "b24ui"), emits);
    const nextYearIcon = computed(() => props.nextYearIcon || (dir.value === "rtl" ? icons.chevronDoubleLeft : icons.chevronDoubleRight));
    const nextMonthIcon = computed(() => props.nextMonthIcon || (dir.value === "rtl" ? icons.chevronLeft : icons.chevronRight));
    const prevYearIcon = computed(() => props.prevYearIcon || (dir.value === "rtl" ? icons.chevronDoubleRight : icons.chevronDoubleLeft));
    const prevMonthIcon = computed(() => props.prevMonthIcon || (dir.value === "rtl" ? icons.chevronRight : icons.chevronLeft));
    const b24ui = computed(() => tv({ extend: tv(theme$2), ...appConfig2.b24ui?.calendar || {} })({
      color: props.color,
      size: props.size,
      weekNumbers: props.weekNumbers
    }));
    function paginateYear(date, sign) {
      if (sign === -1) {
        return date.subtract({ years: 1 });
      }
      return date.add({ years: 1 });
    }
    const Calendar$1 = computed(() => props.range ? RangeCalendar : Calendar);
    const btnSize = computed(() => {
      switch (props.size) {
        case "xs":
          return "xs";
        default:
          return "sm";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Calendar$1).Root, mergeProps(unref(rootProps), {
        "model-value": unref(props).modelValue,
        "default-value": unref(props).defaultValue,
        "data-slot": "root",
        class: b24ui.value.root({ class: [unref(props).b24ui?.root, unref(props).class] })
      }, _attrs), {
        default: withCtx(({ weekDays, grid }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar$1).Header, {
              "data-slot": "header",
              class: b24ui.value.header({ class: unref(props).b24ui?.header })
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(props).yearControls) {
                    _push3(ssrRenderComponent(unref(Calendar$1).Prev, {
                      "prev-page": (date) => paginateYear(date, -1),
                      "aria-label": unref(t)("calendar.prevYear"),
                      "as-child": ""
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$h, mergeProps({
                            icon: prevYearIcon.value,
                            size: btnSize.value,
                            color: "air-tertiary"
                          }, unref(props).prevYear), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$h, mergeProps({
                              icon: prevYearIcon.value,
                              size: btnSize.value,
                              color: "air-tertiary"
                            }, unref(props).prevYear), null, 16, ["icon", "size"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(props).monthControls) {
                    _push3(ssrRenderComponent(unref(Calendar$1).Prev, {
                      "aria-label": unref(t)("calendar.prevMonth"),
                      "as-child": ""
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$h, mergeProps({
                            icon: prevMonthIcon.value,
                            size: btnSize.value,
                            color: "air-tertiary"
                          }, unref(props).prevMonth), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$h, mergeProps({
                              icon: prevMonthIcon.value,
                              size: btnSize.value,
                              color: "air-tertiary"
                            }, unref(props).prevMonth), null, 16, ["icon", "size"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(Calendar$1).Heading, {
                    "data-slot": "heading",
                    class: b24ui.value.heading({ class: unref(props).b24ui?.heading })
                  }, {
                    default: withCtx(({ headingValue }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "heading", { value: headingValue }, () => {
                          _push4(`${ssrInterpolate(headingValue)}`);
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "heading", { value: headingValue }, () => [
                            createTextVNode(toDisplayString(headingValue), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  if (unref(props).monthControls) {
                    _push3(ssrRenderComponent(unref(Calendar$1).Next, {
                      "aria-label": unref(t)("calendar.nextMonth"),
                      "as-child": ""
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$h, mergeProps({
                            icon: nextMonthIcon.value,
                            size: btnSize.value,
                            color: "air-tertiary"
                          }, unref(props).nextMonth), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$h, mergeProps({
                              icon: nextMonthIcon.value,
                              size: btnSize.value,
                              color: "air-tertiary"
                            }, unref(props).nextMonth), null, 16, ["icon", "size"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(props).yearControls) {
                    _push3(ssrRenderComponent(unref(Calendar$1).Next, {
                      "next-page": (date) => paginateYear(date, 1),
                      "aria-label": unref(t)("calendar.nextYear"),
                      "as-child": ""
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$h, mergeProps({
                            icon: nextYearIcon.value,
                            size: btnSize.value,
                            color: "air-tertiary"
                          }, unref(props).nextYear), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$h, mergeProps({
                              icon: nextYearIcon.value,
                              size: btnSize.value,
                              color: "air-tertiary"
                            }, unref(props).nextYear), null, 16, ["icon", "size"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(props).yearControls ? (openBlock(), createBlock(unref(Calendar$1).Prev, {
                      key: 0,
                      "prev-page": (date) => paginateYear(date, -1),
                      "aria-label": unref(t)("calendar.prevYear"),
                      "as-child": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$h, mergeProps({
                          icon: prevYearIcon.value,
                          size: btnSize.value,
                          color: "air-tertiary"
                        }, unref(props).prevYear), null, 16, ["icon", "size"])
                      ]),
                      _: 1
                    }, 8, ["prev-page", "aria-label"])) : createCommentVNode("", true),
                    unref(props).monthControls ? (openBlock(), createBlock(unref(Calendar$1).Prev, {
                      key: 1,
                      "aria-label": unref(t)("calendar.prevMonth"),
                      "as-child": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$h, mergeProps({
                          icon: prevMonthIcon.value,
                          size: btnSize.value,
                          color: "air-tertiary"
                        }, unref(props).prevMonth), null, 16, ["icon", "size"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])) : createCommentVNode("", true),
                    createVNode(unref(Calendar$1).Heading, {
                      "data-slot": "heading",
                      class: b24ui.value.heading({ class: unref(props).b24ui?.heading })
                    }, {
                      default: withCtx(({ headingValue }) => [
                        renderSlot(_ctx.$slots, "heading", { value: headingValue }, () => [
                          createTextVNode(toDisplayString(headingValue), 1)
                        ])
                      ]),
                      _: 3
                    }, 8, ["class"]),
                    unref(props).monthControls ? (openBlock(), createBlock(unref(Calendar$1).Next, {
                      key: 2,
                      "aria-label": unref(t)("calendar.nextMonth"),
                      "as-child": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$h, mergeProps({
                          icon: nextMonthIcon.value,
                          size: btnSize.value,
                          color: "air-tertiary"
                        }, unref(props).nextMonth), null, 16, ["icon", "size"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])) : createCommentVNode("", true),
                    unref(props).yearControls ? (openBlock(), createBlock(unref(Calendar$1).Next, {
                      key: 3,
                      "next-page": (date) => paginateYear(date, 1),
                      "aria-label": unref(t)("calendar.nextYear"),
                      "as-child": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$h, mergeProps({
                          icon: nextYearIcon.value,
                          size: btnSize.value,
                          color: "air-tertiary"
                        }, unref(props).nextYear), null, 16, ["icon", "size"])
                      ]),
                      _: 1
                    }, 8, ["next-page", "aria-label"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div data-slot="body" class="${ssrRenderClass(b24ui.value.body({ class: unref(props).b24ui?.body }))}"${_scopeId}><!--[-->`);
            ssrRenderList(grid, (month) => {
              _push2(ssrRenderComponent(unref(Calendar$1).Grid, {
                key: month.value.toString(),
                "data-slot": "grid",
                class: b24ui.value.grid({ class: unref(props).b24ui?.grid })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Calendar$1).GridHead, null, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Calendar$1).GridRow, {
                            "data-slot": "gridWeekDaysRow",
                            class: b24ui.value.gridWeekDaysRow({ class: unref(props).b24ui?.gridWeekDaysRow })
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(weekDays, (day) => {
                                  _push5(ssrRenderComponent(unref(Calendar$1).HeadCell, {
                                    key: day,
                                    "data-slot": "headCell",
                                    class: b24ui.value.headCell({ class: unref(props).b24ui?.headCell })
                                  }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "week-day", { day }, () => {
                                          _push6(`${ssrInterpolate(day)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "week-day", { day }, () => [
                                            createTextVNode(toDisplayString(day), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                    return openBlock(), createBlock(unref(Calendar$1).HeadCell, {
                                      key: day,
                                      "data-slot": "headCell",
                                      class: b24ui.value.headCell({ class: unref(props).b24ui?.headCell })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "week-day", { day }, () => [
                                          createTextVNode(toDisplayString(day), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["class"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Calendar$1).GridRow, {
                              "data-slot": "gridWeekDaysRow",
                              class: b24ui.value.gridWeekDaysRow({ class: unref(props).b24ui?.gridWeekDaysRow })
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                  return openBlock(), createBlock(unref(Calendar$1).HeadCell, {
                                    key: day,
                                    "data-slot": "headCell",
                                    class: b24ui.value.headCell({ class: unref(props).b24ui?.headCell })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "week-day", { day }, () => [
                                        createTextVNode(toDisplayString(day), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["class"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(Calendar$1).GridBody, {
                      "data-slot": "gridBody",
                      class: b24ui.value.gridBody({ class: unref(props).b24ui?.gridBody })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(month.rows, (weekDates, index) => {
                            _push4(ssrRenderComponent(unref(Calendar$1).GridRow, {
                              key: `weekDate-${index}`,
                              "data-slot": "gridRow",
                              class: b24ui.value.gridRow({ class: unref(props).b24ui?.gridRow })
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (unref(props).weekNumbers && weekDates[0]) {
                                    _push5(`<td role="gridcell" data-slot="cellWeek" class="${ssrRenderClass(b24ui.value.cellWeek({ class: unref(props).b24ui?.cellWeek }))}"${_scopeId4}>${ssrInterpolate(unref(getWeekNumber)(weekDates[0], unref(locale).code))}</td>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`<!--[-->`);
                                  ssrRenderList(weekDates, (weekDate) => {
                                    _push5(ssrRenderComponent(unref(Calendar$1).Cell, {
                                      key: weekDate.toString(),
                                      date: weekDate,
                                      "data-slot": "cell",
                                      class: b24ui.value.cell({ class: unref(props).b24ui?.cell })
                                    }, {
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(unref(Calendar$1).CellTrigger, {
                                            day: weekDate,
                                            month: month.value,
                                            "data-slot": "cellTrigger",
                                            class: b24ui.value.cellTrigger({ class: unref(props).b24ui?.cellTrigger })
                                          }, {
                                            default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                ssrRenderSlot(_ctx.$slots, "day", { day: weekDate }, () => {
                                                  _push7(`${ssrInterpolate(weekDate.day)}`);
                                                }, _push7, _parent7, _scopeId6);
                                              } else {
                                                return [
                                                  renderSlot(_ctx.$slots, "day", { day: weekDate }, () => [
                                                    createTextVNode(toDisplayString(weekDate.day), 1)
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(unref(Calendar$1).CellTrigger, {
                                              day: weekDate,
                                              month: month.value,
                                              "data-slot": "cellTrigger",
                                              class: b24ui.value.cellTrigger({ class: unref(props).b24ui?.cellTrigger })
                                            }, {
                                              default: withCtx(() => [
                                                renderSlot(_ctx.$slots, "day", { day: weekDate }, () => [
                                                  createTextVNode(toDisplayString(weekDate.day), 1)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1032, ["day", "month", "class"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    unref(props).weekNumbers && weekDates[0] ? (openBlock(), createBlock("td", {
                                      key: 0,
                                      role: "gridcell",
                                      "data-slot": "cellWeek",
                                      class: b24ui.value.cellWeek({ class: unref(props).b24ui?.cellWeek })
                                    }, toDisplayString(unref(getWeekNumber)(weekDates[0], unref(locale).code)), 3)) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                      return openBlock(), createBlock(unref(Calendar$1).Cell, {
                                        key: weekDate.toString(),
                                        date: weekDate,
                                        "data-slot": "cell",
                                        class: b24ui.value.cell({ class: unref(props).b24ui?.cell })
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Calendar$1).CellTrigger, {
                                            day: weekDate,
                                            month: month.value,
                                            "data-slot": "cellTrigger",
                                            class: b24ui.value.cellTrigger({ class: unref(props).b24ui?.cellTrigger })
                                          }, {
                                            default: withCtx(() => [
                                              renderSlot(_ctx.$slots, "day", { day: weekDate }, () => [
                                                createTextVNode(toDisplayString(weekDate.day), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1032, ["day", "month", "class"])
                                        ]),
                                        _: 2
                                      }, 1032, ["date", "class"]);
                                    }), 128))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                              return openBlock(), createBlock(unref(Calendar$1).GridRow, {
                                key: `weekDate-${index}`,
                                "data-slot": "gridRow",
                                class: b24ui.value.gridRow({ class: unref(props).b24ui?.gridRow })
                              }, {
                                default: withCtx(() => [
                                  unref(props).weekNumbers && weekDates[0] ? (openBlock(), createBlock("td", {
                                    key: 0,
                                    role: "gridcell",
                                    "data-slot": "cellWeek",
                                    class: b24ui.value.cellWeek({ class: unref(props).b24ui?.cellWeek })
                                  }, toDisplayString(unref(getWeekNumber)(weekDates[0], unref(locale).code)), 3)) : createCommentVNode("", true),
                                  (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                    return openBlock(), createBlock(unref(Calendar$1).Cell, {
                                      key: weekDate.toString(),
                                      date: weekDate,
                                      "data-slot": "cell",
                                      class: b24ui.value.cell({ class: unref(props).b24ui?.cell })
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Calendar$1).CellTrigger, {
                                          day: weekDate,
                                          month: month.value,
                                          "data-slot": "cellTrigger",
                                          class: b24ui.value.cellTrigger({ class: unref(props).b24ui?.cellTrigger })
                                        }, {
                                          default: withCtx(() => [
                                            renderSlot(_ctx.$slots, "day", { day: weekDate }, () => [
                                              createTextVNode(toDisplayString(weekDate.day), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["day", "month", "class"])
                                      ]),
                                      _: 2
                                    }, 1032, ["date", "class"]);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1032, ["class"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Calendar$1).GridHead, null, {
                        default: withCtx(() => [
                          createVNode(unref(Calendar$1).GridRow, {
                            "data-slot": "gridWeekDaysRow",
                            class: b24ui.value.gridWeekDaysRow({ class: unref(props).b24ui?.gridWeekDaysRow })
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                return openBlock(), createBlock(unref(Calendar$1).HeadCell, {
                                  key: day,
                                  "data-slot": "headCell",
                                  class: b24ui.value.headCell({ class: unref(props).b24ui?.headCell })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "week-day", { day }, () => [
                                      createTextVNode(toDisplayString(day), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["class"]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1032, ["class"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(Calendar$1).GridBody, {
                        "data-slot": "gridBody",
                        class: b24ui.value.gridBody({ class: unref(props).b24ui?.gridBody })
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                            return openBlock(), createBlock(unref(Calendar$1).GridRow, {
                              key: `weekDate-${index}`,
                              "data-slot": "gridRow",
                              class: b24ui.value.gridRow({ class: unref(props).b24ui?.gridRow })
                            }, {
                              default: withCtx(() => [
                                unref(props).weekNumbers && weekDates[0] ? (openBlock(), createBlock("td", {
                                  key: 0,
                                  role: "gridcell",
                                  "data-slot": "cellWeek",
                                  class: b24ui.value.cellWeek({ class: unref(props).b24ui?.cellWeek })
                                }, toDisplayString(unref(getWeekNumber)(weekDates[0], unref(locale).code)), 3)) : createCommentVNode("", true),
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                  return openBlock(), createBlock(unref(Calendar$1).Cell, {
                                    key: weekDate.toString(),
                                    date: weekDate,
                                    "data-slot": "cell",
                                    class: b24ui.value.cell({ class: unref(props).b24ui?.cell })
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Calendar$1).CellTrigger, {
                                        day: weekDate,
                                        month: month.value,
                                        "data-slot": "cellTrigger",
                                        class: b24ui.value.cellTrigger({ class: unref(props).b24ui?.cellTrigger })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "day", { day: weekDate }, () => [
                                            createTextVNode(toDisplayString(weekDate.day), 1)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["day", "month", "class"])
                                    ]),
                                    _: 2
                                  }, 1032, ["date", "class"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["class"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(unref(Calendar$1).Header, {
                "data-slot": "header",
                class: b24ui.value.header({ class: unref(props).b24ui?.header })
              }, {
                default: withCtx(() => [
                  unref(props).yearControls ? (openBlock(), createBlock(unref(Calendar$1).Prev, {
                    key: 0,
                    "prev-page": (date) => paginateYear(date, -1),
                    "aria-label": unref(t)("calendar.prevYear"),
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$h, mergeProps({
                        icon: prevYearIcon.value,
                        size: btnSize.value,
                        color: "air-tertiary"
                      }, unref(props).prevYear), null, 16, ["icon", "size"])
                    ]),
                    _: 1
                  }, 8, ["prev-page", "aria-label"])) : createCommentVNode("", true),
                  unref(props).monthControls ? (openBlock(), createBlock(unref(Calendar$1).Prev, {
                    key: 1,
                    "aria-label": unref(t)("calendar.prevMonth"),
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$h, mergeProps({
                        icon: prevMonthIcon.value,
                        size: btnSize.value,
                        color: "air-tertiary"
                      }, unref(props).prevMonth), null, 16, ["icon", "size"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : createCommentVNode("", true),
                  createVNode(unref(Calendar$1).Heading, {
                    "data-slot": "heading",
                    class: b24ui.value.heading({ class: unref(props).b24ui?.heading })
                  }, {
                    default: withCtx(({ headingValue }) => [
                      renderSlot(_ctx.$slots, "heading", { value: headingValue }, () => [
                        createTextVNode(toDisplayString(headingValue), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["class"]),
                  unref(props).monthControls ? (openBlock(), createBlock(unref(Calendar$1).Next, {
                    key: 2,
                    "aria-label": unref(t)("calendar.nextMonth"),
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$h, mergeProps({
                        icon: nextMonthIcon.value,
                        size: btnSize.value,
                        color: "air-tertiary"
                      }, unref(props).nextMonth), null, 16, ["icon", "size"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : createCommentVNode("", true),
                  unref(props).yearControls ? (openBlock(), createBlock(unref(Calendar$1).Next, {
                    key: 3,
                    "next-page": (date) => paginateYear(date, 1),
                    "aria-label": unref(t)("calendar.nextYear"),
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$h, mergeProps({
                        icon: nextYearIcon.value,
                        size: btnSize.value,
                        color: "air-tertiary"
                      }, unref(props).nextYear), null, 16, ["icon", "size"])
                    ]),
                    _: 1
                  }, 8, ["next-page", "aria-label"])) : createCommentVNode("", true)
                ]),
                _: 3
              }, 8, ["class"]),
              createVNode("div", {
                "data-slot": "body",
                class: b24ui.value.body({ class: unref(props).b24ui?.body })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(grid, (month) => {
                  return openBlock(), createBlock(unref(Calendar$1).Grid, {
                    key: month.value.toString(),
                    "data-slot": "grid",
                    class: b24ui.value.grid({ class: unref(props).b24ui?.grid })
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Calendar$1).GridHead, null, {
                        default: withCtx(() => [
                          createVNode(unref(Calendar$1).GridRow, {
                            "data-slot": "gridWeekDaysRow",
                            class: b24ui.value.gridWeekDaysRow({ class: unref(props).b24ui?.gridWeekDaysRow })
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                return openBlock(), createBlock(unref(Calendar$1).HeadCell, {
                                  key: day,
                                  "data-slot": "headCell",
                                  class: b24ui.value.headCell({ class: unref(props).b24ui?.headCell })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "week-day", { day }, () => [
                                      createTextVNode(toDisplayString(day), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["class"]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1032, ["class"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(Calendar$1).GridBody, {
                        "data-slot": "gridBody",
                        class: b24ui.value.gridBody({ class: unref(props).b24ui?.gridBody })
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                            return openBlock(), createBlock(unref(Calendar$1).GridRow, {
                              key: `weekDate-${index}`,
                              "data-slot": "gridRow",
                              class: b24ui.value.gridRow({ class: unref(props).b24ui?.gridRow })
                            }, {
                              default: withCtx(() => [
                                unref(props).weekNumbers && weekDates[0] ? (openBlock(), createBlock("td", {
                                  key: 0,
                                  role: "gridcell",
                                  "data-slot": "cellWeek",
                                  class: b24ui.value.cellWeek({ class: unref(props).b24ui?.cellWeek })
                                }, toDisplayString(unref(getWeekNumber)(weekDates[0], unref(locale).code)), 3)) : createCommentVNode("", true),
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                  return openBlock(), createBlock(unref(Calendar$1).Cell, {
                                    key: weekDate.toString(),
                                    date: weekDate,
                                    "data-slot": "cell",
                                    class: b24ui.value.cell({ class: unref(props).b24ui?.cell })
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Calendar$1).CellTrigger, {
                                        day: weekDate,
                                        month: month.value,
                                        "data-slot": "cellTrigger",
                                        class: b24ui.value.cellTrigger({ class: unref(props).b24ui?.cellTrigger })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "day", { day: weekDate }, () => [
                                            createTextVNode(toDisplayString(weekDate.day), 1)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["day", "month", "class"])
                                    ]),
                                    _: 2
                                  }, 1032, ["date", "class"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["class"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["class"])
                    ]),
                    _: 2
                  }, 1032, ["class"]);
                }), 128))
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Calendar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "root": "isolate relative inline-flex items-center",
    "base": "px-3 w-full pt-[7px] pb-2 border-0 focus:outline-none disabled:cursor-not-allowed disabled:pointer-events-auto disabled:select-none disabled:opacity-30 disabled:resize-none appearance-none transition-colors duration-300 ease-linear text-(--ui-color-base-1) style-blurred-bg-input placeholder:text-(--ui-color-design-plain-na-content-secondary) hover:text-(--ui-color-base-1) focus:text-(--ui-color-base-1) active:text-(--ui-color-base-1) font-[family-name:var(--ui-font-family-primary)] font-(--ui-font-weight-regular) text-(length:--ui-font-size-lg)/(--ui-font-line-height-2xs) align-middle",
    "leading": "absolute inset-y-[7px] start-0 flex items-start px-2",
    "leadingIcon": "shrink-0 size-4.5 text-(--b24ui-icon-color)",
    "leadingAvatar": "shrink-0 size-[20px]",
    "leadingAvatarSize": "2xs",
    "trailing": "absolute inset-y-2 end-0 flex items-start px-[6px]",
    "trailingIcon": "shrink-0 size-4.5 text-(--b24ui-icon-color)",
    "tag": "pointer-events-none select-none absolute z-10 -top-[6px] right-[12px]"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": {
        "root": "group leading-none has-focus-visible:z-[1]",
        "base": "focus-visible:outline-none ring ring-inset ring-1 focus-visible:ring-2 group-not-only:group-first:rounded-e-3xl group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none group-not-only:group-first:border-e-0 group-not-only:group-not-first:border-s-0"
      },
      "vertical": {
        "root": "group has-focus-visible:z-[1]",
        "base": "focus-visible:outline-none ring ring-inset ring-1 focus-visible:ring-2 group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"
      }
    },
    "noSplit": {
      "false": "group-not-only:not-first:after:content-[''] group-not-only:not-first:after:absolute group-not-only:not-first:after:top-[7px] group-not-only:not-first:after:bottom-[6px] group-not-only:not-first:after:left-0 group-not-only:not-first:after:w-px group-not-only:not-first:after:bg-current/30"
    },
    "autoresize": {
      "true": {
        "base": "resize-none"
      }
    },
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
      "default": {
        "base": "style-old-default"
      },
      "danger": {
        "base": "style-old-danger"
      },
      "success": {
        "base": "style-old-success"
      },
      "warning": {
        "base": "style-old-warning"
      },
      "primary": {
        "base": "style-old-primary"
      },
      "secondary": {
        "base": "style-old-secondary"
      },
      "collab": {
        "base": "style-old-collab"
      },
      "ai": {
        "base": "style-old-ai"
      }
    },
    "rounded": {
      "true": "rounded-(--ui-border-radius-3xl)",
      "false": "rounded-(--ui-border-radius-sm)"
    },
    "noPadding": {
      "true": {
        "base": "px-0"
      }
    },
    "noBorder": {
      "true": "ring-0 focus-visible:ring-0 style-transparent-bg"
    },
    "underline": {
      "true": "rounded-none ring-0 focus-visible:ring-0 style-transparent-bg border-b-1 border-b-(--ui-color-design-outline-stroke) rounded-none"
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "fixed": {
      "false": ""
    },
    "highlight": {
      "true": "ring ring-inset ring-(--b24ui-border-color)"
    }
  },
  "compoundVariants": [
    {
      "highlight": false,
      "noBorder": false,
      "underline": false,
      "class": {
        "base": "ring ring-inset ring-(--ui-color-design-outline-stroke) focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-(--b24ui-border-color) hover:not-disabled:not-data-disabled:ring-1 hover:not-disabled:not-data-disabled:ring-inset hover:not-disabled:not-data-disabled:ring-(--b24ui-border-color) data-[state=open]:ring-1 data-[state=open]:ring-inset data-[state=open]:ring-(--b24ui-border-color)"
      }
    },
    {
      "highlight": true,
      "noBorder": false,
      "underline": false,
      "class": {
        "base": "ring ring-inset ring-(--b24ui-border-color) focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-(--b24ui-border-color) hover:ring-1 hover:ring-inset hover:ring-(--b24ui-border-color) data-[state=open]:ring-1 data-[state=open]:ring-inset data-[state=open]:ring-(--b24ui-border-color)"
      }
    },
    {
      "noBorder": false,
      "underline": true,
      "class": {
        "base": "focus-visible:border-(--b24ui-border-color) hover:not-disabled:not-data-disabled:border-(--b24ui-border-color) data-[state=open]:border-(--b24ui-border-color)"
      }
    },
    {
      "highlight": true,
      "noBorder": false,
      "underline": true,
      "class": {
        "base": "ring-0 border-b-(--b24ui-border-color)"
      }
    },
    {
      "highlight": true,
      "noBorder": true,
      "underline": false,
      "class": {
        "base": "ring-0"
      }
    },
    {
      "leading": true,
      "noPadding": false,
      "class": "ps-[34px]"
    },
    {
      "leading": true,
      "loading": true,
      "class": "ps-[34px]"
    },
    {
      "trailing": true,
      "noPadding": false,
      "class": "pe-[34px]"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "size-[21px]"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "size-[21px]"
      }
    }
  ],
  "defaultVariants": {
    "color": "air-primary"
  }
};
const _sfc_main$6 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "B24Textarea",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    placeholder: { type: String, required: false },
    color: { type: null, required: false },
    noPadding: { type: Boolean, required: false },
    noBorder: { type: Boolean, required: false },
    underline: { type: Boolean, required: false },
    rounded: { type: Boolean, required: false },
    required: { type: Boolean, required: false },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false, default: 0 },
    autoresize: { type: Boolean, required: false },
    autoresizeDelay: { type: Number, required: false, default: 0 },
    disabled: { type: Boolean, required: false },
    rows: { type: Number, required: false, default: 3 },
    maxrows: { type: Number, required: false, default: 0 },
    tag: { type: String, required: false },
    tagColor: { type: null, required: false },
    highlight: { type: Boolean, required: false },
    fixed: { type: Boolean, required: false },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    modelModifiers: { type: null, required: false },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false },
    icon: { type: [Function, Object], required: false },
    avatar: { type: Object, required: false },
    loading: { type: Boolean, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: [Function, Object], required: false }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("textarea", _props);
    const modelValue = useVModel(props, "modelValue", emits, { defaultValue: props.defaultValue });
    const appConfig2 = useAppConfig();
    const { emitFormFocus, emitFormBlur, emitFormInput, emitFormChange, color, id, name, highlight, disabled, ariaAttrs } = useFormField(_props, { deferInputValidation: true });
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const isTag = computed(() => {
      return props.tag;
    });
    const b24ui = computed(() => tv({ extend: tv(theme$1), ...appConfig2.b24ui?.textarea || {} })({
      color: color.value ?? props.color,
      // size: size?.value ?? props.size,
      loading: props.loading,
      highlight: highlight.value ?? props.highlight,
      fixed: props.fixed,
      autoresize: Boolean(props.autoresize),
      rounded: Boolean(props.rounded),
      noPadding: Boolean(props.noPadding),
      noBorder: Boolean(props.noBorder),
      underline: Boolean(props.underline),
      leading: Boolean(isLeading.value || !!props.avatar || !!slots.leading),
      trailing: Boolean(isTrailing.value || !!slots.trailing)
    }));
    const textareaRef = useTemplateRef("textareaRef");
    function updateInput(value) {
      if (props.modelModifiers?.trim && (typeof value === "string" || value === null || value === void 0)) {
        value = value?.trim() ?? null;
      }
      if (props.modelModifiers?.number) {
        value = looseToNumber(value);
      }
      if (props.modelModifiers?.nullable) {
        value ||= null;
      }
      if (props.modelModifiers?.optional && !props.modelModifiers?.nullable && value !== null) {
        value ||= void 0;
      }
      modelValue.value = value;
      emitFormInput();
    }
    function onInput(event) {
      autoResize();
      if (!props.modelModifiers?.lazy) {
        updateInput(event.target.value);
      }
    }
    function onChange(event) {
      const value = event.target.value;
      if (props.modelModifiers?.lazy) {
        updateInput(value);
      }
      if (props.modelModifiers?.trim) {
        event.target.value = value.trim();
      }
      emitFormChange();
      emits("change", event);
    }
    function onBlur(event) {
      emitFormBlur();
      emits("blur", event);
    }
    function autoResize() {
      if (props.autoresize && textareaRef.value) {
        textareaRef.value.rows = props.rows;
        const overflow = textareaRef.value.style.overflow;
        textareaRef.value.style.overflow = "hidden";
        const styles = (void 0).getComputedStyle(textareaRef.value);
        const paddingTop = Number.parseInt(styles.paddingTop);
        const paddingBottom = Number.parseInt(styles.paddingBottom);
        const padding = paddingTop + paddingBottom;
        const lineHeight = Number.parseInt(styles.lineHeight);
        const { scrollHeight } = textareaRef.value;
        const newRows = (scrollHeight - padding) / lineHeight;
        if (newRows > props.rows) {
          textareaRef.value.rows = props.maxrows ? Math.min(newRows, props.maxrows) : newRows;
        }
        textareaRef.value.style.overflow = overflow;
      }
    }
    watch(modelValue, () => {
      nextTick(autoResize);
    });
    __expose({
      textareaRef,
      autoResize
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        "data-slot": "root",
        class: b24ui.value.root({ class: [unref(props).b24ui?.root, unref(props).class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (isTag.value) {
              _push2(ssrRenderComponent(_sfc_main$b, {
                "data-slot": "tag",
                class: b24ui.value.tag({ class: unref(props).b24ui?.tag }),
                color: unref(props).tagColor,
                label: unref(props).tag,
                size: "xs"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<textarea${ssrRenderAttrs(_temp0 = mergeProps({
              id: unref(id),
              ref_key: "textareaRef",
              ref: textareaRef,
              value: unref(modelValue),
              name: unref(name),
              rows: unref(props).rows,
              placeholder: unref(props).placeholder,
              "data-slot": "base",
              class: b24ui.value.base({ class: unref(props).b24ui?.base }),
              disabled: unref(disabled),
              required: unref(props).required
            }, { ..._ctx.$attrs, ...unref(ariaAttrs) }), "textarea")}${_scopeId}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
            ssrRenderSlot(_ctx.$slots, "default", { b24ui: b24ui.value }, null, _push2, _parent2, _scopeId);
            if (unref(isLeading) || !!unref(props).avatar || !!slots.leading) {
              _push2(`<span data-slot="leading" class="${ssrRenderClass(b24ui.value.leading({ class: unref(props).b24ui?.leading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "leading", { b24ui: b24ui.value }, () => {
                if (unref(isLeading) && unref(leadingIconName)) {
                  ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(leadingIconName)), {
                    "data-slot": "leadingIcon",
                    class: b24ui.value.leadingIcon({ class: unref(props).b24ui?.leadingIcon })
                  }, null), _parent2, _scopeId);
                } else if (!!unref(props).avatar) {
                  _push2(ssrRenderComponent(_sfc_main$k, mergeProps({
                    size: unref(props).b24ui?.leadingAvatarSize || b24ui.value.leadingAvatarSize()
                  }, unref(props).avatar, {
                    "data-slot": "leadingAvatar",
                    class: b24ui.value.leadingAvatar({ class: unref(props).b24ui?.leadingAvatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(isTrailing) || !!slots.trailing) {
              _push2(`<span data-slot="trailing" class="${ssrRenderClass(b24ui.value.trailing({ class: unref(props).b24ui?.trailing }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "trailing", { b24ui: b24ui.value }, () => {
                if (unref(trailingIconName)) {
                  ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(trailingIconName)), {
                    "data-slot": "trailingIcon",
                    class: b24ui.value.trailingIcon({ class: unref(props).b24ui?.trailingIcon })
                  }, null), _parent2, _scopeId);
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              isTag.value ? (openBlock(), createBlock(_sfc_main$b, {
                key: 0,
                "data-slot": "tag",
                class: b24ui.value.tag({ class: unref(props).b24ui?.tag }),
                color: unref(props).tagColor,
                label: unref(props).tag,
                size: "xs"
              }, null, 8, ["class", "color", "label"])) : createCommentVNode("", true),
              createVNode("textarea", mergeProps({
                id: unref(id),
                ref_key: "textareaRef",
                ref: textareaRef,
                value: unref(modelValue),
                name: unref(name),
                rows: unref(props).rows,
                placeholder: unref(props).placeholder,
                "data-slot": "base",
                class: b24ui.value.base({ class: unref(props).b24ui?.base }),
                disabled: unref(disabled),
                required: unref(props).required
              }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                onInput,
                onBlur,
                onChange,
                onFocus: unref(emitFormFocus)
              }), null, 16, ["id", "value", "name", "rows", "placeholder", "disabled", "required", "onFocus"]),
              renderSlot(_ctx.$slots, "default", { b24ui: b24ui.value }),
              unref(isLeading) || !!unref(props).avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                key: 1,
                "data-slot": "leading",
                class: b24ui.value.leading({ class: unref(props).b24ui?.leading })
              }, [
                renderSlot(_ctx.$slots, "leading", { b24ui: b24ui.value }, () => [
                  unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(resolveDynamicComponent(unref(leadingIconName)), {
                    key: 0,
                    "data-slot": "leadingIcon",
                    class: b24ui.value.leadingIcon({ class: unref(props).b24ui?.leadingIcon })
                  }, null, 8, ["class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$k, mergeProps({
                    key: 1,
                    size: unref(props).b24ui?.leadingAvatarSize || b24ui.value.leadingAvatarSize()
                  }, unref(props).avatar, {
                    "data-slot": "leadingAvatar",
                    class: b24ui.value.leadingAvatar({ class: unref(props).b24ui?.leadingAvatar })
                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true),
              unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                key: 2,
                "data-slot": "trailing",
                class: b24ui.value.trailing({ class: unref(props).b24ui?.trailing })
              }, [
                renderSlot(_ctx.$slots, "trailing", { b24ui: b24ui.value }, () => [
                  unref(trailingIconName) ? (openBlock(), createBlock(resolveDynamicComponent(unref(trailingIconName)), {
                    key: 0,
                    "data-slot": "trailingIcon",
                    class: b24ui.value.trailingIcon({ class: unref(props).b24ui?.trailingIcon })
                  }, null, 8, ["class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Textarea.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "relative overflow-hidden w-full flex text-(--b24ui-color) bg-(--b24ui-background) border-(--b24ui-border-color) border-(length:--b24ui-border-width) rounded-(--ui-border-radius-md)",
    "wrapper": "min-w-0 flex-1 flex flex-col font-[family-name:var(--ui-font-family-primary)]",
    "title": "font-(--ui-font-weight-bold)",
    "description": "",
    "icon": "shrink-0 size-6",
    "avatar": "shrink-0",
    "avatarSize": "",
    "actions": "flex flex-wrap gap-1.5 shrink-0",
    "close": "p-0 [--ui-btn-color:var(--b24ui-color)] hover:bg-(--ui-color-base-white-fixed)/10 focus-visible:bg-(--ui-color-base-white-fixed)/10 -me-1.5 lg:me-0"
  },
  "variants": {
    "color": {
      "air-primary": {
        "root": "style-filled"
      },
      "air-primary-success": {
        "root": "style-filled-success"
      },
      "air-primary-alert": {
        "root": "style-filled-alert"
      },
      "air-primary-copilot": {
        "root": "style-filled-copilot"
      },
      "air-primary-warning": {
        "root": "style-filled-warning"
      },
      "air-secondary": {
        "root": "style-tinted"
      },
      "air-secondary-alert": {
        "root": "style-tinted-alert"
      },
      "air-secondary-accent": {
        "root": "style-outline"
      },
      "air-secondary-accent-1": {
        "root": "style-outline-accent-1"
      },
      "air-secondary-accent-2": {
        "root": "style-outline-accent-2"
      },
      "air-tertiary": {
        "root": "style-outline-no-accent"
      },
      "default": {
        "root": "style-old-default"
      },
      "danger": {
        "root": "style-old-danger"
      },
      "success": {
        "root": "style-old-success"
      },
      "warning": {
        "root": "style-old-warning"
      },
      "primary": {
        "root": "style-old-primary"
      },
      "secondary": {
        "root": "style-old-secondary"
      },
      "collab": {
        "root": "style-old-collab"
      },
      "ai": {
        "root": "style-old-ai"
      }
    },
    "size": {
      "sm": {
        "root": "py-xs ps-sm pe-xs gap-2",
        "title": "text-(length:--ui-font-size-sm)/(--ui-font-line-height-lg)",
        "description": "text-(length:--ui-font-size-sm)/(--ui-font-line-height-lg)",
        "avatarSize": "md"
      },
      "md": {
        "root": "py-md ps-md pe-xs gap-2.5",
        "title": "text-(length:--ui-font-size-md)/(--ui-font-line-height-reset)",
        "description": "text-(length:--ui-font-size-md)/(--ui-font-line-height-3xs)",
        "avatarSize": "xl"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "items-center",
        "actions": "items-center"
      },
      "vertical": {
        "root": "items-start",
        "actions": "items-start mt-2"
      }
    },
    "title": {
      "true": {
        "description": "mt-1"
      }
    },
    "inverted": {
      "true": "",
      "false": ""
    }
  },
  "compoundVariants": [
    {
      "inverted": true,
      "color": "air-primary",
      "class": {
        "root": "style-filled-inverted"
      }
    },
    {
      "inverted": true,
      "color": "air-primary-success",
      "class": {
        "root": "style-filled-success-inverted"
      }
    },
    {
      "inverted": true,
      "color": "air-primary-alert",
      "class": {
        "root": "style-filled-alert-inverted"
      }
    },
    {
      "inverted": true,
      "color": "air-primary-copilot",
      "class": {
        "root": "style-filled-copilot-inverted"
      }
    },
    {
      "inverted": true,
      "color": "air-primary-warning",
      "class": {
        "root": "style-filled-warning-inverted"
      }
    }
  ],
  "defaultVariants": {
    "color": "air-secondary-accent",
    "size": "md",
    "inverted": false
  }
};
const _sfc_main$5 = {
  __name: "B24Alert",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    icon: { type: [Function, Object], required: false },
    avatar: { type: Object, required: false },
    color: { type: null, required: false },
    inverted: { type: Boolean, required: false, default: false },
    orientation: { type: null, required: false, default: "vertical" },
    size: { type: null, required: false },
    actions: { type: Array, required: false },
    close: { type: [Boolean, Object], required: false },
    closeIcon: { type: [Function, Object], required: false },
    class: { type: null, required: false },
    b24ui: { type: Object, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("alert", _props);
    const { t } = useLocale();
    const appConfig2 = useAppConfig();
    const b24ui = computed(() => tv({ extend: tv(theme), ...appConfig2.b24ui?.alert || {} })({
      color: props.color,
      inverted: Boolean(props.inverted),
      size: props.size,
      orientation: props.orientation,
      title: !!props.title || !!slots.title
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        "data-orientation": unref(props).orientation,
        "data-slot": "root",
        class: b24ui.value.root({ class: [unref(props).b24ui?.root, unref(props).class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", { b24ui: b24ui.value }, () => {
              if (unref(props).icon) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(props).icon), {
                  "data-slot": "icon",
                  class: b24ui.value.icon({ class: unref(props).b24ui?.icon })
                }, null), _parent2, _scopeId);
              } else if (unref(props).avatar) {
                _push2(ssrRenderComponent(_sfc_main$k, mergeProps({
                  size: unref(props).b24ui?.avatarSize || b24ui.value.avatarSize()
                }, unref(props).avatar, {
                  "data-slot": "avatar",
                  class: b24ui.value.avatar({ class: unref(props).b24ui?.avatar })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`<div data-slot="wrapper" class="${ssrRenderClass(b24ui.value.wrapper({ class: unref(props).b24ui?.wrapper }))}"${_scopeId}>`);
            if (unref(props).title || !!slots.title) {
              _push2(`<div data-slot="title" class="${ssrRenderClass(b24ui.value.title({ class: unref(props).b24ui?.title }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(unref(props).title)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(props).description || !!slots.description) {
              _push2(`<div data-slot="description" class="${ssrRenderClass(b24ui.value.description({ class: unref(props).b24ui?.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                _push2(`${ssrInterpolate(unref(props).description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(props).orientation === "vertical" && (unref(props).actions?.length || !!slots.actions)) {
              _push2(`<div data-slot="actions" class="${ssrRenderClass(b24ui.value.actions({ class: unref(props).b24ui?.actions }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(unref(props).actions, (action, index) => {
                  _push2(ssrRenderComponent(_sfc_main$h, mergeProps({
                    key: index,
                    size: "sm"
                  }, { ref_for: true }, action), null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions) || unref(props).close) {
              _push2(`<div data-slot="actions" class="${ssrRenderClass(b24ui.value.actions({ class: unref(props).b24ui?.actions, orientation: "horizontal" }))}"${_scopeId}>`);
              if (unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions)) {
                ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                  _push2(`<!--[-->`);
                  ssrRenderList(unref(props).actions, (action, index) => {
                    _push2(ssrRenderComponent(_sfc_main$h, mergeProps({
                      key: index,
                      size: "sm"
                    }, { ref_for: true }, action), null, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                }, _push2, _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              ssrRenderSlot(_ctx.$slots, "close", { b24ui: b24ui.value }, () => {
                if (unref(props).close) {
                  _push2(ssrRenderComponent(_sfc_main$h, mergeProps({
                    icon: unref(props).closeIcon || unref(icons).close,
                    size: "md",
                    color: "air-tertiary-no-accent",
                    "aria-label": unref(t)("alert.close")
                  }, typeof unref(props).close === "object" ? unref(props).close : {}, {
                    "data-slot": "close",
                    class: b24ui.value.close({ class: unref(props).b24ui?.close }),
                    onClick: ($event) => emits("update:open", false)
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", { b24ui: b24ui.value }, () => [
                unref(props).icon ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).icon), {
                  key: 0,
                  "data-slot": "icon",
                  class: b24ui.value.icon({ class: unref(props).b24ui?.icon })
                }, null, 8, ["class"])) : unref(props).avatar ? (openBlock(), createBlock(_sfc_main$k, mergeProps({
                  key: 1,
                  size: unref(props).b24ui?.avatarSize || b24ui.value.avatarSize()
                }, unref(props).avatar, {
                  "data-slot": "avatar",
                  class: b24ui.value.avatar({ class: unref(props).b24ui?.avatar })
                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
              ]),
              createVNode("div", {
                "data-slot": "wrapper",
                class: b24ui.value.wrapper({ class: unref(props).b24ui?.wrapper })
              }, [
                unref(props).title || !!slots.title ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "title",
                  class: b24ui.value.title({ class: unref(props).b24ui?.title })
                }, [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createTextVNode(toDisplayString(unref(props).title), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
                  key: 1,
                  "data-slot": "description",
                  class: b24ui.value.description({ class: unref(props).b24ui?.description })
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(unref(props).description), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                unref(props).orientation === "vertical" && (unref(props).actions?.length || !!slots.actions) ? (openBlock(), createBlock("div", {
                  key: 2,
                  "data-slot": "actions",
                  class: b24ui.value.actions({ class: unref(props).b24ui?.actions })
                }, [
                  renderSlot(_ctx.$slots, "actions", {}, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(props).actions, (action, index) => {
                      return openBlock(), createBlock(_sfc_main$h, mergeProps({
                        key: index,
                        size: "sm"
                      }, { ref_for: true }, action), null, 16);
                    }), 128))
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2),
              unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions) || unref(props).close ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "actions",
                class: b24ui.value.actions({ class: unref(props).b24ui?.actions, orientation: "horizontal" })
              }, [
                unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions) ? renderSlot(_ctx.$slots, "actions", { key: 0 }, () => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(props).actions, (action, index) => {
                    return openBlock(), createBlock(_sfc_main$h, mergeProps({
                      key: index,
                      size: "sm"
                    }, { ref_for: true }, action), null, 16);
                  }), 128))
                ]) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "close", { b24ui: b24ui.value }, () => [
                  unref(props).close ? (openBlock(), createBlock(_sfc_main$h, mergeProps({
                    key: 0,
                    icon: unref(props).closeIcon || unref(icons).close,
                    size: "md",
                    color: "air-tertiary-no-accent",
                    "aria-label": unref(t)("alert.close")
                  }, typeof unref(props).close === "object" ? unref(props).close : {}, {
                    "data-slot": "close",
                    class: b24ui.value.close({ class: unref(props).b24ui?.close }),
                    onClick: ($event) => emits("update:open", false)
                  }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Alert.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AiNextStepPanel",
  __ssrInlineRender: true,
  props: {
    dealId: {},
    agentName: {},
    clientName: {},
    accessToken: {},
    loadingContext: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const toast = useToast();
    const pending = ref(false);
    const creating = ref(false);
    const errorMessage = ref("");
    const result = ref(null);
    const canAnalyze = computed(() => Boolean(props.dealId) && !pending.value && !creating.value && !props.loadingContext);
    const canCreate = computed(() => Boolean(result.value?.recommendation) && !creating.value && !pending.value);
    const headers = computed(() => {
      if (!props.accessToken) {
        const emptyHeaders = {};
        return emptyHeaders;
      }
      const authHeaders = { Authorization: `Bearer ${props.accessToken}` };
      return authHeaders;
    });
    const formattedDeadline = computed(() => {
      const value = result.value?.recommendation.deadline;
      if (!value) {
        return "";
      }
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) {
        return value;
      }
      return new Intl.DateTimeFormat("ru-RU", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }).format(date);
    });
    async function analyze() {
      if (!props.dealId || !canAnalyze.value) {
        return;
      }
      pending.value = true;
      errorMessage.value = "";
      try {
        const response = await $fetch("/api/b24/analyze-next-step", {
          method: "POST",
          headers: headers.value,
          body: {
            dealId: props.dealId,
            mode: "preview"
          }
        });
        result.value = response.data;
        toast.add({
          title: "AI-рекомендация готова",
          description: "Проверьте следующий шаг перед созданием дела.",
          color: "air-primary-success",
          icon: CircleCheckIcon$1
        });
      } catch (error) {
        errorMessage.value = error?.statusMessage || error?.message || "Не удалось выполнить анализ сделки.";
        toast.add({
          title: "Ошибка анализа",
          description: errorMessage.value,
          color: "air-primary-alert",
          icon: WarningIcon
        });
      } finally {
        pending.value = false;
      }
    }
    async function createActivity() {
      if (!props.dealId || !result.value?.recommendation || !canCreate.value) {
        return;
      }
      creating.value = true;
      errorMessage.value = "";
      try {
        const response = await $fetch("/api/b24/analyze-next-step", {
          method: "POST",
          headers: headers.value,
          body: {
            dealId: props.dealId,
            mode: "live",
            recommendation: result.value.recommendation
          }
        });
        result.value = response.data;
        const createdId = response.data.createdActivityId;
        toast.add({
          title: "Дело создано в CRM",
          description: createdId ? `ID: ${createdId}` : "Откройте карточку сделки для проверки.",
          color: "air-primary-success",
          icon: CircleCheckIcon$1
        });
      } catch (error) {
        errorMessage.value = error?.statusMessage || error?.message || "Не удалось создать дело в CRM.";
        toast.add({
          title: "Ошибка создания дела",
          description: errorMessage.value,
          color: "air-primary-alert",
          icon: WarningIcon
        });
      } finally {
        creating.value = false;
      }
    }
    async function copyRecommendation() {
      if (!result.value?.recommendation) {
        return;
      }
      await (void 0).clipboard?.writeText([
        result.value.recommendation.title,
        "",
        result.value.recommendation.description
      ].join("\n"));
      toast.add({
        title: "Рекомендация скопирована",
        color: "air-primary",
        duration: 2400
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_B24Alert = _sfc_main$5;
      const _component_B24Button = _sfc_main$h;
      const _component_B24Badge = _sfc_main$b;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "grid gap-4 p-4 lg:grid-cols-[420px_minmax(0,1fr)]" }, _attrs))}><aside class="sidebar-sticky work-panel p-4 workspace-scroll"><div class="mb-4 border-b border-default pb-3"><h2 class="text-base font-bold text-label">AI следующий шаг</h2><p class="mt-1 text-xs text-description"> Анализирует историю сделки и предлагает одно практичное дело для менеджера. </p></div><div class="field-stack">`);
      if (!__props.dealId) {
        _push(ssrRenderComponent(_component_B24Alert, {
          color: "air-primary-alert",
          variant: "soft",
          title: "Сделка не определена",
          description: "Откройте виджет из карточки сделки, чтобы AI получил рабочий контекст."
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="rounded-lg border border-default bg-muted p-3"><p class="text-xs font-semibold uppercase text-description">Контекст</p><div class="mt-2 grid gap-2 text-sm text-label"><p><strong>Сделка:</strong> ${ssrInterpolate(__props.dealId ? `#${__props.dealId}` : "не найдена")}</p><p><strong>Менеджер:</strong> ${ssrInterpolate(__props.agentName || "не указан")}</p><p><strong>Клиент:</strong> ${ssrInterpolate(__props.clientName || "не указан")}</p></div></div>`);
      _push(ssrRenderComponent(_component_B24Button, {
        icon: unref(RocketIcon),
        loading: unref(pending),
        disabled: !unref(canAnalyze),
        label: "Сформировать следующий шаг",
        block: "",
        class: "brand-action",
        onClick: analyze
      }, null, _parent));
      _push(ssrRenderComponent(_component_B24Button, {
        loading: unref(creating),
        disabled: !unref(canCreate),
        label: "Создать дело в CRM",
        block: "",
        class: "border border-default bg-default text-label",
        onClick: createActivity
      }, null, _parent));
      _push(ssrRenderComponent(_component_B24Button, {
        disabled: !unref(result),
        label: "Копировать рекомендацию",
        block: "",
        class: "border border-default bg-default text-label",
        onClick: copyRecommendation
      }, null, _parent));
      if (unref(result)?.createdActivityId) {
        _push(ssrRenderComponent(_component_B24Alert, {
          color: "air-primary-success",
          variant: "soft",
          title: "Дело создано",
          description: `CRM ID: ${unref(result).createdActivityId}`
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></aside><section class="script-scroll workspace-scroll"><div class="grid gap-4">`);
      if (unref(errorMessage)) {
        _push(ssrRenderComponent(_component_B24Alert, {
          color: "air-primary-alert",
          variant: "soft",
          title: "Не удалось выполнить действие",
          description: unref(errorMessage)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(result)) {
        _push(`<article class="script-card p-5"><div class="mb-4 flex flex-wrap items-start justify-between gap-3 border-b border-default pb-3"><div><p class="text-xs font-bold uppercase text-[var(--brand-red)]">Рекомендация AI</p><h2 class="mt-1 text-xl font-bold text-label">${ssrInterpolate(unref(result).recommendation.title)}</h2><p class="mt-1 text-sm text-description">${ssrInterpolate(unref(result).recommendation.activityType)} · выполнить ${ssrInterpolate(unref(formattedDeadline))}</p></div>`);
        _push(ssrRenderComponent(_component_B24Badge, {
          label: unref(result).mode === "live" ? "Создано в CRM" : "Preview",
          class: unref(result).mode === "live" ? "border border-green-200 bg-green-50 text-green-800" : "brand-soft"
        }, null, _parent));
        _push(`</div><div class="grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]"><div class="rounded-lg border border-default bg-muted p-4 text-sm leading-6 whitespace-pre-wrap text-label">${ssrInterpolate(unref(result).recommendation.description)}</div><div class="grid content-start gap-4">`);
        if (unref(result).nativeAiTodoFound) {
          _push(ssrRenderComponent(_component_B24Alert, {
            color: "air-primary-warning",
            variant: "soft",
            title: "Найдено штатное AI-дело",
            description: "Рекомендация построена на уже найденном открытом AI-деле Bitrix24."
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="rounded-lg border border-default bg-default p-3"><h3 class="text-sm font-bold text-label">Важные детали</h3><ul class="mt-2 grid gap-2 text-sm text-description"><!--[-->`);
        ssrRenderList(unref(result).recommendation.importantDetails, (item) => {
          _push(`<li>${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul></div><div class="rounded-lg border border-default bg-default p-3"><h3 class="text-sm font-bold text-label">Почему сейчас</h3><ul class="mt-2 grid gap-2 text-sm text-description"><!--[-->`);
        ssrRenderList(unref(result).recommendation.justification, (item) => {
          _push(`<li>${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
        if (unref(result).context?.sourceStats) {
          _push(`<div class="rounded-lg border border-default bg-default p-3 text-sm text-description"> Источники: таймлайн ${ssrInterpolate(unref(result).context.sourceStats.timelines)}, дела ${ssrInterpolate(unref(result).context.sourceStats.activities)}, сообщения ${ssrInterpolate(unref(result).context.sourceStats.messages)}. </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></article>`);
      } else {
        _push(`<article class="script-card p-8"><div class="mx-auto flex max-w-xl flex-col items-center gap-3 text-center"><div class="flex h-12 w-12 items-center justify-center rounded-lg brand-soft">`);
        _push(ssrRenderComponent(unref(RocketIcon), { class: "h-6 w-6" }, null, _parent));
        _push(`</div><h2 class="text-xl font-bold text-label">Готово к анализу сделки</h2><p class="text-sm leading-6 text-description"> Нажмите кнопку формирования, чтобы AI изучил историю сделки, коммуникации и открытые дела, а затем предложил следующий шаг без автоматической записи в CRM. </p></div></article>`);
      }
      _push(`</div></section></main>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AiNextStepPanel.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_9 = Object.assign(_sfc_main$4, { __name: "AiNextStepPanel" });
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = (() => {
  console.error(intervalError);
});
const pageSize = 25;
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AdminReportsPanel",
  __ssrInlineRender: true,
  props: {
    mode: {},
    accessToken: {}
  },
  setup(__props) {
    const props = __props;
    const reportConfig = {
      "sla-first-contact": {
        title: "Первичный контакт",
        subtitle: "SLA первого контакта по лидам",
        logUrl: "/api/sla-log",
        runUrl: "/api/check-sla",
        statusUrl: "/api/check-sla/status",
        runNeedsDateRange: true,
        searchPlaceholder: "ID, лид, стадия или сотрудник"
      },
      "data-quality": {
        title: "Качество данных",
        subtitle: "Контроль контактов CRM",
        logUrl: "/api/data-quality-log",
        runUrl: "/api/check-data-quality",
        statusUrl: "/api/check-data-quality/status",
        runNeedsDateRange: true,
        searchPlaceholder: "ID, контакт, телефон, email или сотрудник"
      },
      reactivation: {
        title: "Контроль Реактивация",
        subtitle: "План и рейтинг отдела продаж",
        logUrl: "/api/reactivation-log",
        runUrl: "/api/check-reactivation",
        statusUrl: "/api/check-reactivation/status",
        runNeedsDateRange: false,
        searchPlaceholder: "Сотрудник или сделка"
      },
      "next-step-control": {
        title: "Следующий шаг",
        subtitle: "Контроль качества планирования дел",
        logUrl: "/api/next-step-log",
        runUrl: "/api/check-next-step",
        statusUrl: "/api/check-next-step/status",
        runNeedsDateRange: false,
        searchPlaceholder: "ID, сделка, стадия, ошибка или сотрудник"
      }
    };
    const STATUS_OPTIONS = {
      "sla-first-contact": ["Все", "В пределах 15 минут", "Более 15 минут", "Контакта не было", "Входящий звонок", "Требуется ручная проверка"],
      "data-quality": ["Все", "Без ошибок", "Предупреждение", "Ошибка"],
      reactivation: ["Все"],
      "next-step-control": ["Все", "OK", "WARNING", "ERROR"]
    };
    const EMPTY_JOB = {
      id: null,
      status: "idle",
      startedAt: null,
      finishedAt: null,
      error: null,
      progress: { stage: "starting", message: "Проверка не запущена", current: 0, total: 1 }
    };
    const payload = ref({ generatedAt: null, rows: [] });
    const job = ref({ ...EMPTY_JOB, progress: { ...EMPTY_JOB.progress } });
    const loading = ref(false);
    const errorMessage = ref("");
    const page = ref(1);
    const filters = reactive({
      dateFrom: "",
      dateTo: "",
      status: "Все",
      responsible: "Все",
      violation: "Все",
      query: ""
    });
    const slaAutoControl = ref(null);
    const slaAutoSaving = ref(false);
    let pollTimer = null;
    const config = computed(() => reportConfig[props.mode]);
    const rows = computed(() => payload.value.rows ?? []);
    const isRunning = computed(() => job.value.status === "running");
    const progressPercent = computed(() => job.value.progress.total > 0 ? Math.min(100, Math.round(job.value.progress.current / job.value.progress.total * 100)) : 0);
    const authHeaders = computed(() => props.accessToken ? { Authorization: `Bearer ${props.accessToken}` } : {});
    function headers(extra = {}) {
      return { ...authHeaders.value, ...extra };
    }
    function formatDateTime(value) {
      if (!value) return "—";
      const date = new Date(value);
      if (!Number.isFinite(date.getTime())) return "—";
      return new Intl.DateTimeFormat("ru-RU", {
        timeZone: "Europe/Moscow",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }).format(date).replace(",", "");
    }
    function fromInputDate(value) {
      if (!value) return null;
      const date = new Date(value.includes("T") ? value : `${value}T00:00:00`);
      return Number.isFinite(date.getTime()) ? date.getTime() : null;
    }
    function toInputDateEnd(value) {
      if (!value) return null;
      const date = /* @__PURE__ */ new Date(value.includes("T") ? `${value}:59.999` : `${value}T23:59:59.999`);
      return Number.isFinite(date.getTime()) ? date.getTime() : null;
    }
    function normalizeStatus(row) {
      if (props.mode === "data-quality" && row.status === "OK") return "Без ошибок";
      if (props.mode === "data-quality" && row.status === "WARNING") return "Предупреждение";
      if (props.mode === "data-quality" && row.status === "ERROR") return "Ошибка";
      return row.status ?? "Все";
    }
    function rowCreatedAt(row) {
      if (props.mode === "sla-first-contact") return row.leadCreatedAt;
      if (props.mode === "data-quality") return row.contactCreatedAt;
      if (props.mode === "next-step-control") return row.dealCreatedAt;
      return null;
    }
    function rowSearchText(row) {
      if (props.mode === "sla-first-contact") {
        return `${row.leadId} ${row.leadTitle} ${row.leadStageName ?? ""} ${row.rejectionReason ?? ""} ${row.responsibleName}`;
      }
      if (props.mode === "data-quality") {
        return `${row.contactId} ${row.contactName} ${row.responsibleName} ${row.normalizedPhone ?? ""} ${row.normalizedEmail ?? ""} ${(row.qualityErrors ?? []).join(" ")}`;
      }
      if (props.mode === "reactivation") {
        return `${row.employeeId} ${row.name} ${row.lastName} ${(row.successfulDeals ?? []).map((deal) => deal.title).join(" ")}`;
      }
      return `${row.dealId} ${row.dealTitle} ${row.stageName} ${row.responsibleName} ${(row.nextStepErrors ?? []).join(" ")}`;
    }
    const responsibleOptions = computed(() => {
      const names = /* @__PURE__ */ new Set();
      for (const row of rows.value) {
        const name = props.mode === "reactivation" ? [row.lastName, row.name].filter(Boolean).join(" ").trim() : row.responsibleName;
        if (name) names.add(name);
      }
      return ["Все", ...[...names].sort((left, right) => left.localeCompare(right, "ru"))];
    });
    const filteredRows = computed(() => {
      const query = filters.query.trim().toLowerCase();
      const dateFrom = filters.dateFrom ? fromInputDate(filters.dateFrom) : null;
      const dateTo = filters.dateTo ? toInputDateEnd(filters.dateTo) : null;
      return rows.value.filter((row) => {
        const createdAtValue = rowCreatedAt(row);
        if (createdAtValue) {
          const createdAt = new Date(createdAtValue).getTime();
          if (dateFrom != null && createdAt < dateFrom) return false;
          if (dateTo != null && createdAt > dateTo) return false;
        }
        if (filters.status !== "Все" && normalizeStatus(row) !== filters.status) return false;
        const responsible = props.mode === "reactivation" ? [row.lastName, row.name].filter(Boolean).join(" ").trim() : row.responsibleName;
        if (filters.responsible !== "Все" && responsible !== filters.responsible) return false;
        if (filters.violation !== "Все" && row.violationFlag !== filters.violation) return false;
        if (query && !rowSearchText(row).toLowerCase().includes(query)) return false;
        return true;
      });
    });
    const pageCount = computed(() => Math.max(1, Math.ceil(filteredRows.value.length / pageSize)));
    const pagedRows = computed(() => {
      const current = Math.min(page.value, pageCount.value);
      return filteredRows.value.slice((current - 1) * pageSize, current * pageSize);
    });
    const kpis = computed(() => {
      const list = filteredRows.value;
      if (props.mode === "sla-first-contact") {
        const violations = list.filter((row) => row.status === "Контакта не было" || row.violationFlag === "Да").length;
        const within = list.filter((row) => row.status === "В пределах 15 минут" || row.status === "Входящий звонок").length;
        return [
          { label: "Всего лидов", value: list.length, tone: "blue" },
          { label: "Нарушения", value: violations, tone: "red" },
          { label: "В SLA", value: within, tone: "green" },
          { label: "Без контакта", value: list.filter((row) => row.status === "Контакта не было").length, tone: "amber" }
        ];
      }
      if (props.mode === "data-quality") {
        return [
          { label: "Всего контактов", value: list.length, tone: "blue" },
          { label: "Без ошибок", value: list.filter((row) => normalizeStatus(row) === "Без ошибок").length, tone: "green" },
          { label: "Предупреждение", value: list.filter((row) => normalizeStatus(row) === "Предупреждение").length, tone: "amber" },
          { label: "Ошибка", value: list.filter((row) => normalizeStatus(row) === "Ошибка").length, tone: "red" }
        ];
      }
      if (props.mode === "reactivation") {
        return [
          { label: "Сотрудников", value: list.length, tone: "blue" },
          { label: "За неделю", value: list.reduce((sum, row) => sum + row.weeklyCount, 0), tone: "green" },
          { label: "План недели", value: list.reduce((sum, row) => sum + row.weeklyPlan, 0), tone: "amber" },
          { label: "Рейтинг месяца", value: list.reduce((sum, row) => sum + row.monthlyRating, 0), tone: "red" }
        ];
      }
      return [
        { label: "Всего сделок", value: list.length, tone: "blue" },
        { label: "OK", value: list.filter((row) => row.status === "OK").length, tone: "green" },
        { label: "WARNING", value: list.filter((row) => row.status === "WARNING").length, tone: "amber" },
        { label: "ERROR", value: list.filter((row) => row.status === "ERROR").length, tone: "red" }
      ];
    });
    const chartSegments = computed(() => {
      const counts = /* @__PURE__ */ new Map();
      for (const row of filteredRows.value) {
        const key = props.mode === "reactivation" ? "План" : normalizeStatus(row);
        counts.set(key, (counts.get(key) ?? 0) + 1);
      }
      const colors = ["#31c484", "#ffb02e", "#ff5752", "#2fc6f6", "#8b96a7"];
      return [...counts.entries()].map(([label, value], index) => ({ label, value, color: colors[index % colors.length] }));
    });
    async function loadLog() {
      loading.value = true;
      errorMessage.value = "";
      try {
        payload.value = await $fetch(config.value.logUrl, { headers: headers() });
      } catch (error) {
        errorMessage.value = error?.statusMessage || error?.message || "Не удалось загрузить отчет";
      } finally {
        loading.value = false;
      }
    }
    async function loadStatus() {
      try {
        job.value = await $fetch(config.value.statusUrl, { headers: headers() });
      } catch (error) {
        errorMessage.value = error?.statusMessage || error?.message || "Не удалось получить статус проверки";
      }
    }
    async function loadSlaAutoControl() {
      if (props.mode !== "sla-first-contact") return;
      try {
        slaAutoControl.value = await $fetch("/api/sla-auto-control", { headers: headers() });
      } catch {
        slaAutoControl.value = null;
      }
    }
    async function refreshAll() {
      page.value = 1;
      await Promise.all([loadLog(), loadStatus(), loadSlaAutoControl()]);
    }
    async function runCheck(updateCrm = false) {
      errorMessage.value = "";
      try {
        const body = config.value.runNeedsDateRange ? { dateFrom: filters.dateFrom, dateTo: filters.dateTo, updateCrm } : void 0;
        job.value = await $fetch(config.value.runUrl, {
          method: "POST",
          headers: headers({ "Content-Type": "application/json" }),
          body
        });
        startPolling();
      } catch (error) {
        errorMessage.value = error?.statusMessage || error?.message || "Не удалось запустить проверку";
      }
    }
    async function saveSlaAutoControl() {
      if (!slaAutoControl.value) return;
      slaAutoSaving.value = true;
      try {
        slaAutoControl.value = await $fetch("/api/sla-auto-control", {
          method: "PATCH",
          headers: headers({ "Content-Type": "application/json" }),
          body: slaAutoControl.value
        });
      } catch (error) {
        errorMessage.value = error?.statusMessage || error?.message || "Не удалось сохранить расписание";
      } finally {
        slaAutoSaving.value = false;
      }
    }
    function stopPolling() {
      if (pollTimer) {
        clearInterval(pollTimer);
        pollTimer = null;
      }
    }
    function startPolling() {
      stopPolling();
      pollTimer = setInterval();
    }
    function exportRows() {
      const header = Object.keys(filteredRows.value[0] ?? { empty: "" });
      const lines = [
        header.join(";"),
        ...filteredRows.value.map((row) => header.map((key) => JSON.stringify(row[key] ?? "")).join(";"))
      ];
      const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
      const url = (void 0).URL.createObjectURL(blob);
      const link = (void 0).createElement("a");
      link.href = url;
      link.download = `${props.mode}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
      (void 0).body.appendChild(link);
      link.click();
      link.remove();
      (void 0).URL.revokeObjectURL(url);
    }
    function employeeName(row) {
      return [row.lastName, row.name].filter(Boolean).join(" ").trim() || `ID ${row.employeeId}`;
    }
    watch(() => props.mode, async () => {
      filters.status = "Все";
      filters.responsible = "Все";
      filters.violation = "Все";
      filters.query = "";
      stopPolling();
      await refreshAll();
    });
    watch(filteredRows, () => {
      page.value = 1;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_B24Button = _sfc_main$h;
      const _component_B24FormField = _sfc_main$a;
      const _component_B24Input = _sfc_main$9;
      const _component_B24Alert = _sfc_main$5;
      const _component_B24Badge = _sfc_main$b;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-report" }, _attrs))}><header class="admin-report-header"><div><p class="report-kicker">Административный дашборд</p><h1>${ssrInterpolate(unref(config).title)}</h1><span>${ssrInterpolate(unref(config).subtitle)}</span></div><div class="report-actions"><span>Последняя проверка: ${ssrInterpolate(formatDateTime(unref(payload).generatedAt))}</span>`);
      _push(ssrRenderComponent(_component_B24Button, {
        label: "Экспорт",
        class: "border border-default bg-default text-label",
        disabled: unref(filteredRows).length === 0,
        onClick: exportRows
      }, null, _parent));
      _push(ssrRenderComponent(_component_B24Button, {
        icon: unref(RefreshIcon$1),
        label: unref(isRunning) ? "Проверяем" : "Обновить",
        loading: unref(isRunning),
        class: "brand-action",
        onClick: () => void runCheck(false)
      }, null, _parent));
      _push(`</div></header>`);
      if (unref(config).runNeedsDateRange) {
        _push(`<section class="report-toolbar">`);
        _push(ssrRenderComponent(_component_B24FormField, { label: "Создан с" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_B24Input, {
                modelValue: unref(filters).dateFrom,
                "onUpdate:modelValue": ($event) => unref(filters).dateFrom = $event,
                type: "datetime-local"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_B24Input, {
                  modelValue: unref(filters).dateFrom,
                  "onUpdate:modelValue": ($event) => unref(filters).dateFrom = $event,
                  type: "datetime-local"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_B24FormField, { label: "Создан по" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_B24Input, {
                modelValue: unref(filters).dateTo,
                "onUpdate:modelValue": ($event) => unref(filters).dateTo = $event,
                type: "datetime-local"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_B24Input, {
                  modelValue: unref(filters).dateTo,
                  "onUpdate:modelValue": ($event) => unref(filters).dateTo = $event,
                  type: "datetime-local"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_B24FormField, { label: "Статус" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<select class="native-select"${_scopeId}><!--[-->`);
              ssrRenderList(STATUS_OPTIONS[__props.mode], (status) => {
                _push2(`<option${ssrRenderAttr("value", status)}${ssrIncludeBooleanAttr(Array.isArray(unref(filters).status) ? ssrLooseContain(unref(filters).status, status) : ssrLooseEqual(unref(filters).status, status)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(status)}</option>`);
              });
              _push2(`<!--]--></select>`);
            } else {
              return [
                withDirectives(createVNode("select", {
                  "onUpdate:modelValue": ($event) => unref(filters).status = $event,
                  class: "native-select"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(STATUS_OPTIONS[__props.mode], (status) => {
                    return openBlock(), createBlock("option", {
                      key: status,
                      value: status
                    }, toDisplayString(status), 9, ["value"]);
                  }), 128))
                ], 8, ["onUpdate:modelValue"]), [
                  [vModelSelect, unref(filters).status]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_B24FormField, { label: "Ответственный" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<select class="native-select"${_scopeId}><!--[-->`);
              ssrRenderList(unref(responsibleOptions), (responsible) => {
                _push2(`<option${ssrRenderAttr("value", responsible)}${ssrIncludeBooleanAttr(Array.isArray(unref(filters).responsible) ? ssrLooseContain(unref(filters).responsible, responsible) : ssrLooseEqual(unref(filters).responsible, responsible)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(responsible)}</option>`);
              });
              _push2(`<!--]--></select>`);
            } else {
              return [
                withDirectives(createVNode("select", {
                  "onUpdate:modelValue": ($event) => unref(filters).responsible = $event,
                  class: "native-select"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(responsibleOptions), (responsible) => {
                    return openBlock(), createBlock("option", {
                      key: responsible,
                      value: responsible
                    }, toDisplayString(responsible), 9, ["value"]);
                  }), 128))
                ], 8, ["onUpdate:modelValue"]), [
                  [vModelSelect, unref(filters).responsible]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_B24FormField, { label: "Поиск" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_B24Input, {
                modelValue: unref(filters).query,
                "onUpdate:modelValue": ($event) => unref(filters).query = $event,
                placeholder: unref(config).searchPlaceholder
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_B24Input, {
                  modelValue: unref(filters).query,
                  "onUpdate:modelValue": ($event) => unref(filters).query = $event,
                  placeholder: unref(config).searchPlaceholder
                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</section>`);
      } else {
        _push(`<section class="report-toolbar">`);
        _push(ssrRenderComponent(_component_B24FormField, { label: "Статус" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<select class="native-select"${_scopeId}><!--[-->`);
              ssrRenderList(STATUS_OPTIONS[__props.mode], (status) => {
                _push2(`<option${ssrRenderAttr("value", status)}${ssrIncludeBooleanAttr(Array.isArray(unref(filters).status) ? ssrLooseContain(unref(filters).status, status) : ssrLooseEqual(unref(filters).status, status)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(status)}</option>`);
              });
              _push2(`<!--]--></select>`);
            } else {
              return [
                withDirectives(createVNode("select", {
                  "onUpdate:modelValue": ($event) => unref(filters).status = $event,
                  class: "native-select"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(STATUS_OPTIONS[__props.mode], (status) => {
                    return openBlock(), createBlock("option", {
                      key: status,
                      value: status
                    }, toDisplayString(status), 9, ["value"]);
                  }), 128))
                ], 8, ["onUpdate:modelValue"]), [
                  [vModelSelect, unref(filters).status]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_B24FormField, { label: "Ответственный" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<select class="native-select"${_scopeId}><!--[-->`);
              ssrRenderList(unref(responsibleOptions), (responsible) => {
                _push2(`<option${ssrRenderAttr("value", responsible)}${ssrIncludeBooleanAttr(Array.isArray(unref(filters).responsible) ? ssrLooseContain(unref(filters).responsible, responsible) : ssrLooseEqual(unref(filters).responsible, responsible)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(responsible)}</option>`);
              });
              _push2(`<!--]--></select>`);
            } else {
              return [
                withDirectives(createVNode("select", {
                  "onUpdate:modelValue": ($event) => unref(filters).responsible = $event,
                  class: "native-select"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(responsibleOptions), (responsible) => {
                    return openBlock(), createBlock("option", {
                      key: responsible,
                      value: responsible
                    }, toDisplayString(responsible), 9, ["value"]);
                  }), 128))
                ], 8, ["onUpdate:modelValue"]), [
                  [vModelSelect, unref(filters).responsible]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_B24FormField, { label: "Поиск" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_B24Input, {
                modelValue: unref(filters).query,
                "onUpdate:modelValue": ($event) => unref(filters).query = $event,
                placeholder: unref(config).searchPlaceholder
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_B24Input, {
                  modelValue: unref(filters).query,
                  "onUpdate:modelValue": ($event) => unref(filters).query = $event,
                  placeholder: unref(config).searchPlaceholder
                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</section>`);
      }
      if (__props.mode === "sla-first-contact" && unref(slaAutoControl)) {
        _push(`<section class="automation-panel"><div><p class="report-kicker">Автоконтроль</p><h2>SLA первого контакта</h2><span> Следующий запуск: ${ssrInterpolate(unref(slaAutoControl).nextRunAt ? formatDateTime(unref(slaAutoControl).nextRunAt) : "отключен")}</span></div><label class="switch-line"><input${ssrIncludeBooleanAttr(Array.isArray(unref(slaAutoControl).enabled) ? ssrLooseContain(unref(slaAutoControl).enabled, null) : unref(slaAutoControl).enabled) ? " checked" : ""} type="checkbox"> Включить </label>`);
        _push(ssrRenderComponent(_component_B24Input, {
          modelValue: unref(slaAutoControl).startDate,
          "onUpdate:modelValue": ($event) => unref(slaAutoControl).startDate = $event,
          type: "date"
        }, null, _parent));
        _push(ssrRenderComponent(_component_B24Input, {
          modelValue: unref(slaAutoControl).time,
          "onUpdate:modelValue": ($event) => unref(slaAutoControl).time = $event,
          type: "time"
        }, null, _parent));
        _push(ssrRenderComponent(_component_B24Input, {
          modelValue: unref(slaAutoControl).intervalDays,
          "onUpdate:modelValue": ($event) => unref(slaAutoControl).intervalDays = $event,
          type: "number",
          min: "1"
        }, null, _parent));
        _push(ssrRenderComponent(_component_B24Button, {
          label: "Сохранить",
          loading: unref(slaAutoSaving),
          class: "border border-default bg-default text-label",
          onClick: saveSlaAutoControl
        }, null, _parent));
        _push(ssrRenderComponent(_component_B24Button, {
          label: "Заполнить CRM за период",
          class: "brand-action",
          disabled: unref(isRunning),
          onClick: () => void runCheck(true)
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(errorMessage)) {
        _push(ssrRenderComponent(_component_B24Alert, {
          color: "air-primary-alert",
          variant: "soft",
          title: "Ошибка отчета",
          description: unref(errorMessage),
          icon: unref(WarningIcon)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isRunning)) {
        _push(`<section class="progress-banner"><div><strong>${ssrInterpolate(unref(job).progress.message)}</strong><span>На экране остаются данные последнего готового лога.</span></div><small>${ssrInterpolate(unref(job).progress.current > 0 ? `${unref(job).progress.current} / ${unref(job).progress.total}` : "выполняется")}</small><i style="${ssrRenderStyle({ width: `${unref(progressPercent)}%` })}"></i></section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading)) {
        _push(`<div class="loading">Загружаю отчет...</div>`);
      } else {
        _push(`<!--[--><section class="report-kpis"><!--[-->`);
        ssrRenderList(unref(kpis), (kpi) => {
          _push(`<article class="${ssrRenderClass([`tone-${kpi.tone}`, "report-kpi"])}"><span>${ssrInterpolate(kpi.label)}</span><strong>${ssrInterpolate(kpi.value)}</strong></article>`);
        });
        _push(`<!--]--></section><section class="report-grid"><article class="report-panel chart-panel"><div class="panel-heading"><div><p class="report-kicker">Сводка</p><h2>Распределение</h2></div>`);
        _push(ssrRenderComponent(_component_B24Badge, {
          label: `${unref(filteredRows).length} строк`,
          class: "brand-soft"
        }, null, _parent));
        _push(`</div><div class="donut-chart"><svg viewBox="0 0 120 120" role="img"><circle cx="60" cy="60" r="42" fill="none" stroke="#e5edf5" stroke-width="16"></circle><!--[-->`);
        ssrRenderList(unref(chartSegments), (segment, index) => {
          _push(`<circle cx="60" cy="60" r="42" fill="none"${ssrRenderAttr("stroke", segment.color)} stroke-width="16"${ssrRenderAttr("stroke-dasharray", `${Math.max(1, Math.round(segment.value / Math.max(1, unref(filteredRows).length) * 264))} 264`)}${ssrRenderAttr("stroke-dashoffset", -index * 52)} stroke-linecap="round" transform="rotate(-90 60 60)"></circle>`);
        });
        _push(`<!--]--><text x="60" y="64" text-anchor="middle">${ssrInterpolate(unref(filteredRows).length)}</text></svg><ul><!--[-->`);
        ssrRenderList(unref(chartSegments), (segment) => {
          _push(`<li><i style="${ssrRenderStyle({ backgroundColor: segment.color })}"></i><span>${ssrInterpolate(segment.label)}</span><b>${ssrInterpolate(segment.value)}</b></li>`);
        });
        _push(`<!--]--></ul></div></article><article class="report-panel table-panel"><div class="panel-heading"><div><p class="report-kicker">Лог</p><h2>Детализация</h2></div>`);
        _push(ssrRenderComponent(_component_B24Badge, {
          label: `${Math.min(unref(page), unref(pageCount))} / ${unref(pageCount)}`,
          class: "brand-soft"
        }, null, _parent));
        _push(`</div><div class="report-table-wrap">`);
        if (__props.mode === "sla-first-contact") {
          _push(`<table class="report-table"><thead><tr><th>ID</th><th>Лид</th><th>Создан</th><th>Первый контакт</th><th>Статус</th><th>Ответственный</th><th>Нарушение</th></tr></thead><tbody><!--[-->`);
          ssrRenderList(unref(pagedRows), (row) => {
            _push(`<tr><td>${ssrInterpolate(row.leadId)}</td><td>${ssrInterpolate(row.leadTitle)}</td><td>${ssrInterpolate(formatDateTime(row.leadCreatedAt))}</td><td>${ssrInterpolate(formatDateTime(row.firstContactAt))}</td><td><mark>${ssrInterpolate(row.status)}</mark></td><td>${ssrInterpolate(row.responsibleName)}</td><td><b class="${ssrRenderClass(row.violationFlag === "Да" ? "flag-bad" : "flag-good")}">${ssrInterpolate(row.violationFlag)}</b></td></tr>`);
          });
          _push(`<!--]--></tbody></table>`);
        } else if (__props.mode === "data-quality") {
          _push(`<table class="report-table"><thead><tr><th>ID</th><th>Контакт</th><th>Создан</th><th>Оценка</th><th>Ошибки</th><th>Ответственный</th><th>Статус</th></tr></thead><tbody><!--[-->`);
          ssrRenderList(unref(pagedRows), (row) => {
            _push(`<tr><td>${ssrInterpolate(row.contactId)}</td><td>${ssrInterpolate(row.contactName)}</td><td>${ssrInterpolate(formatDateTime(row.contactCreatedAt))}</td><td>${ssrInterpolate(row.qualityScore)}</td><td>${ssrInterpolate(row.qualityErrors.join("; ") || "—")}</td><td>${ssrInterpolate(row.responsibleName)}</td><td><mark>${ssrInterpolate(normalizeStatus(row))}</mark></td></tr>`);
          });
          _push(`<!--]--></tbody></table>`);
        } else if (__props.mode === "reactivation") {
          _push(`<table class="report-table"><thead><tr><th>Сотрудник</th><th>Неделя</th><th>План</th><th>Осталось</th><th>Рейтинг месяца</th></tr></thead><tbody><!--[-->`);
          ssrRenderList(unref(pagedRows), (row) => {
            _push(`<tr><td class="employee-cell">`);
            if (row.photoUrl) {
              _push(`<img${ssrRenderAttr("src", row.photoUrl)}${ssrRenderAttr("alt", employeeName(row))}>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<span>${ssrInterpolate(employeeName(row))}</span></td><td>${ssrInterpolate(row.weeklyCount)}</td><td>${ssrInterpolate(row.weeklyPlan)}</td><td>${ssrInterpolate(Math.max(0, row.weeklyPlan - row.weeklyCount))}</td><td><strong>${ssrInterpolate(row.monthlyRating)}</strong></td></tr>`);
          });
          _push(`<!--]--></tbody></table>`);
        } else {
          _push(`<table class="report-table"><thead><tr><th>ID</th><th>Сделка</th><th>Стадия</th><th>Дедлайн</th><th>Ошибки</th><th>Ответственный</th><th>Статус</th></tr></thead><tbody><!--[-->`);
          ssrRenderList(unref(pagedRows), (row) => {
            _push(`<tr><td>${ssrInterpolate(row.dealId)}</td><td>${ssrInterpolate(row.dealTitle)}</td><td>${ssrInterpolate(row.stageName)}</td><td>${ssrInterpolate(formatDateTime(row.activityDeadline))}</td><td>${ssrInterpolate(row.nextStepErrors.join("; ") || "—")}</td><td>${ssrInterpolate(row.responsibleName)}</td><td><mark>${ssrInterpolate(row.status)}</mark></td></tr>`);
          });
          _push(`<!--]--></tbody></table>`);
        }
        if (unref(filteredRows).length === 0) {
          _push(`<div class="empty-report">`);
          _push(ssrRenderComponent(unref(CircleCheckIcon$1), { class: "h-6 w-6" }, null, _parent));
          _push(` Нет строк для выбранных фильтров </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="report-pagination"><span>${ssrInterpolate(unref(filteredRows).length)} строк</span><div>`);
        _push(ssrRenderComponent(_component_B24Button, {
          label: "Назад",
          size: "sm",
          class: "border border-default bg-default text-label",
          disabled: unref(page) <= 1,
          onClick: ($event) => page.value = Math.max(1, unref(page) - 1)
        }, null, _parent));
        _push(ssrRenderComponent(_component_B24Button, {
          label: "Вперед",
          size: "sm",
          class: "border border-default bg-default text-label",
          disabled: unref(page) >= unref(pageCount),
          onClick: ($event) => page.value = Math.min(unref(pageCount), unref(page) + 1)
        }, null, _parent));
        _push(`</div></div></article></section><!--]-->`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdminReportsPanel.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_10 = Object.assign(_sfc_main$3, { __name: "AdminReportsPanel" });
const _imports_0 = publicAssetsURL("/favicon.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const activeShellSection = ref("manager-assistant");
    const dashboardAccess = ref(null);
    const accessLoading = ref(false);
    const accessError = ref("");
    const workspaceMode = ref("reactivation");
    const agentName = ref("Елена");
    const clientName = ref("Александр");
    const historyType = ref("buyer");
    const destination = ref("Турцию (Анталию)");
    const tripDate = ref("в сентябре прошлого года");
    const season = ref("Прошлой осенью");
    const destinationLead = ref("Египет");
    const travelContext = ref("предстоящий летний сезон");
    const activeStep = ref(1);
    const interest = ref(null);
    const crmNotes = ref("");
    const isCallFinished = ref(false);
    const accessToken = ref("");
    const b24DealId = ref(null);
    ref(null);
    const dealCategoryName = ref("");
    const assignedById = ref(null);
    const b24Initializing = ref(false);
    const b24Loading = ref(false);
    const b24Saving = ref(false);
    ref("");
    const b24Debug = ref("");
    const placementCode = ref("");
    const nextContactDate = ref("");
    const createdActivityId = ref(null);
    const timerSeconds = ref(0);
    const bx24Instance = ref(null);
    const bx24Ready = ref(false);
    let timerId = null;
    const formattedTimer = computed(() => {
      const mins = String(Math.floor(timerSeconds.value / 60)).padStart(2, "0");
      const secs = String(timerSeconds.value % 60).padStart(2, "0");
      return `${mins}:${secs}`;
    });
    const isCallCardPlacement = computed(() => placementCode.value === "CALL_CARD");
    const dealContextOverlayVisible = computed(() => b24Initializing.value || b24Loading.value);
    const dealContextLoadingText = computed(() => b24DealId.value ? `Загружаем данные сделки #${b24DealId.value}` : "Определяем контекст сделки");
    const finishActionLabel = computed(() => {
      if (b24Saving.value) {
        return "Создаем дело...";
      }
      return isCallCardPlacement.value ? "Завершить звонок" : "Завершить";
    });
    const completionTitle = computed(() => isCallCardPlacement.value ? "Звонок завершен, дело создано" : "Работа завершена, дело создано");
    const resetActionLabel = computed(() => isCallCardPlacement.value ? "Новый звонок" : "Новый запуск");
    const normalizedDealCategoryName = computed(() => dealCategoryName.value.trim().toLowerCase());
    const isReactivationFunnel = computed(() => normalizedDealCategoryName.value.includes("реактивац"));
    const isQualityLeadFunnel = computed(() => normalizedDealCategoryName.value.includes("качественный лид"));
    const isDashboardAdmin = computed(() => dashboardAccess.value?.isAdmin === true);
    const shellNavItems = computed(() => {
      const items = [
        { id: "manager-assistant", label: "Manager-Assistant", description: "Скрипты и планирование дел" }
      ];
      if (isDashboardAdmin.value) {
        items.push(
          { id: "sla-first-contact", label: "Первичный контакт", description: "SLA по лидам" },
          { id: "data-quality", label: "Качество данных", description: "Контакты CRM" },
          { id: "reactivation-report", label: "Реактивация", description: "План и рейтинг" },
          { id: "next-step-control", label: "Контроль шагов", description: "Качество дел" }
        );
      }
      return items;
    });
    const adminReportMode = computed(() => {
      if (activeShellSection.value === "reactivation-report") return "reactivation";
      if (activeShellSection.value === "manager-assistant") return "sla-first-contact";
      return activeShellSection.value;
    });
    const contactDateValue = computed({
      get() {
        if (!nextContactDate.value) {
          return void 0;
        }
        try {
          return parseDate(nextContactDate.value.slice(0, 10));
        } catch {
          return void 0;
        }
      },
      set(value) {
        nextContactDate.value = value?.toString() || "";
      }
    });
    const contactDateLabel = computed(() => {
      if (!nextContactDate.value) {
        return "Выберите дату";
      }
      const [year, month, day] = nextContactDate.value.slice(0, 10).split("-");
      return year && month && day ? `${day}.${month}.${year}` : nextContactDate.value;
    });
    const step1Text = computed(() => {
      const context2 = historyType.value === "buyer" ? `Мы помогали вам организовать вашу поездку в ${destination.value} ${tripDate.value}, помните?` : `${season.value} мы подбирали для вас тур в ${destinationLead.value}, помните?`;
      return [
        `${clientName.value}?`,
        `Меня зовут ${agentName.value}, компания Русский Экспресс.`,
        context2,
        "Вам удобно сейчас говорить?"
      ].join("\n");
    });
    const step2Text = computed(() => `Звоню сказать, что у нас сейчас активно идет раннее бронирование на ${travelContext.value}. Пока еще есть интересные варианты. Есть ли у вас планы на ${travelContext.value}?`);
    const step3Text = computed(() => {
      if (interest.value === true) {
        return `Давайте задам пару уточняющих вопросов и после этого обсудим конкретные отели. ${clientName.value}, с кем поедете?`;
      }
      if (interest.value === false) {
        return `Хорошо, ${clientName.value}. Когда вопрос с поездкой может стать для вас актуален?`;
      }
      return "";
    });
    const crmNotesReport = computed(() => [
      `Менеджер: ${agentName.value}`,
      `Клиент: ${clientName.value}`,
      `Интерес: ${interest.value === true ? "Есть интерес" : interest.value === false ? "Отказ / спросить позже" : "Не определено"}`,
      crmNotes.value.trim() ? `Заметки: ${crmNotes.value.trim()}` : "",
      isCallCardPlacement.value ? `Длительность разговора: ${formattedTimer.value}` : ""
    ].filter(Boolean).join("\n"));
    function showToast(title, description = "") {
      toast.add({
        title,
        description,
        color: "air-primary",
        duration: 3e3
      });
    }
    function switchShellSection(section) {
      const allowed = shellNavItems.value.some((item) => item.id === section);
      if (!allowed) {
        activeShellSection.value = "manager-assistant";
        return;
      }
      activeShellSection.value = section;
    }
    function startTimer() {
      clearTimer();
      timerSeconds.value = 0;
      timerId = setInterval();
    }
    function clearTimer() {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
    }
    function switchWorkspaceMode(mode) {
      if (mode === "reactivation" && !isReactivationFunnel.value) {
        return;
      }
      if (mode === "ai-next-step" && !isQualityLeadFunnel.value) {
        return;
      }
      workspaceMode.value = mode;
    }
    function reportClientContext(stage, extra = {}) {
      {
        return;
      }
    }
    function bx24Call(method, params) {
      return new Promise((resolve, reject) => {
        const BX24 = bx24Instance.value || (void 0).BX24;
        const timeout = setTimeout(() => {
          reject(new Error(`Bitrix24 SDK method ${method} timed out`));
        }, 6e3);
        BX24.callMethod(method, params, (result) => {
          clearTimeout(timeout);
          if (result.error && result.error()) {
            reject(new Error(result.error_description?.() || result.error()));
            return;
          }
          resolve(result.data ? result.data() : result);
        });
      });
    }
    function buildDeadlineForB24(dateValue) {
      return /^\d{4}-\d{2}-\d{2}$/.test(dateValue) ? `${dateValue}T10:00:00+03:00` : dateValue;
    }
    async function createTodoViaBitrixSdk() {
      const BX24 = bx24Instance.value || null;
      if (!BX24?.callMethod || !b24DealId.value) {
        return false;
      }
      bx24Instance.value = BX24;
      reportClientContext("todo-sdk-attempt", {
        dealId: b24DealId.value,
        bx24Ready: bx24Ready.value,
        hasCallMethod: Boolean(BX24.callMethod)
      });
      const result = await bx24Call("crm.activity.todo.add", {
        ownerTypeId: 2,
        ownerId: b24DealId.value,
        deadline: buildDeadlineForB24(nextContactDate.value),
        title: "Следующий контакт по реактивации",
        description: crmNotes.value.trim(),
        responsibleId: assignedById.value || void 0,
        pingOffsets: [0, 15],
        colorId: "red"
      });
      createdActivityId.value = result?.id || result?.ID || String(result || "");
      reportClientContext("todo-sdk-success", {
        dealId: b24DealId.value,
        activityId: createdActivityId.value
      });
      return true;
    }
    async function saveActivityToB24() {
      if (!b24DealId.value) {
        showToast("Сделка не определена");
        return false;
      }
      if (!nextContactDate.value) {
        showToast("Укажите дату следующего контакта");
        return false;
      }
      if (!crmNotes.value.trim()) {
        showToast("Заполните заметку для CRM");
        return false;
      }
      b24Saving.value = true;
      createdActivityId.value = null;
      try {
        if (await createTodoViaBitrixSdk()) {
          showToast("Дело создано в Битрикс24");
          return true;
        }
      } catch (error) {
        reportClientContext("todo-sdk-error", {
          dealId: b24DealId.value,
          message: error instanceof Error ? error.message : String(error)
        });
        console.warn("SDK todo creation failed, using server fallback:", error);
      }
      try {
        const response = await $fetch("/api/b24/create-call-activity", {
          method: "POST",
          headers: accessToken.value ? { Authorization: `Bearer ${accessToken.value}` } : {},
          body: {
            dealId: b24DealId.value,
            crmNotes: crmNotes.value,
            nextContactDate: nextContactDate.value,
            assignedById: assignedById.value
          }
        });
        createdActivityId.value = response?.data?.id || response?.data?.ID || response?.id || response?.ID || null;
        showToast("Дело создано в Битрикс24");
        return true;
      } catch (error) {
        showToast("Ошибка при создании дела в CRM");
        console.error(error);
        return false;
      } finally {
        b24Saving.value = false;
      }
    }
    async function finishCall() {
      const saved = await saveActivityToB24();
      b24Saving.value = false;
      if (!saved) {
        return;
      }
      clearTimer();
      isCallFinished.value = true;
      await nextTick();
      (void 0).getElementById("summary-panel")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    function resetCall() {
      crmNotes.value = "";
      nextContactDate.value = "";
      interest.value = null;
      isCallFinished.value = false;
      createdActivityId.value = null;
      activeStep.value = 1;
      startTimer();
      showToast("Форма обновлена");
    }
    function setPresetContext(text) {
      travelContext.value = text;
    }
    function scrollToStep(step) {
      activeStep.value = step;
      setTimeout(() => {
        (void 0).getElementById(`step-${step}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
    }
    async function copyText(text) {
      await (void 0).clipboard?.writeText(text || "");
      showToast("Текст скопирован");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_B24App = __nuxt_component_0;
      const _component_B24Badge = _sfc_main$b;
      const _component_B24Progress = _sfc_main$g;
      const _component_B24Button = _sfc_main$h;
      const _component_B24FormField = _sfc_main$a;
      const _component_B24Input = _sfc_main$9;
      const _component_B24Popover = _sfc_main$8;
      const _component_B24Calendar = _sfc_main$7;
      const _component_B24Textarea = _sfc_main$6;
      const _component_AiNextStepPanel = __nuxt_component_9;
      const _component_AdminReportsPanel = __nuxt_component_10;
      _push(ssrRenderComponent(_component_B24App, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="unified-shell"${_scopeId}><aside class="unified-sidebar"${_scopeId}><div class="unified-brand"${_scopeId}><img class="brand-logo"${ssrRenderAttr("src", _imports_0)} alt="Русский Экспресс"${_scopeId}><div${_scopeId}><strong${_scopeId}>Русский Экспресс</strong><span${_scopeId}>Bitrix24 dashboard</span></div></div><nav class="unified-nav" aria-label="Разделы дашборда"${_scopeId}><!--[-->`);
            ssrRenderList(shellNavItems.value, (item) => {
              _push2(`<button type="button" class="${ssrRenderClass({ active: activeShellSection.value === item.id })}"${_scopeId}><strong${_scopeId}>${ssrInterpolate(item.label)}</strong><span${_scopeId}>${ssrInterpolate(item.description)}</span></button>`);
            });
            _push2(`<!--]--></nav><div class="unified-access"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_B24Badge, {
              label: accessLoading.value ? "Проверяем права" : isDashboardAdmin.value ? "Администратор" : "Сотрудник",
              class: isDashboardAdmin.value ? "brand-soft" : "border border-default bg-muted text-description"
            }, null, _parent2, _scopeId));
            if (dashboardAccess.value?.user.name) {
              _push2(`<span${_scopeId}>${ssrInterpolate(dashboardAccess.value.user.name)}</span>`);
            } else if (accessError.value) {
              _push2(`<span${_scopeId}>${ssrInterpolate(accessError.value)}</span>`);
            } else {
              _push2(`<span${_scopeId}>Доступ к отчетам скрыт для рядовых пользователей</span>`);
            }
            _push2(`</div></aside><div class="app-shell unified-content"${_scopeId}>`);
            if (activeShellSection.value === "manager-assistant" && b24Loading.value) {
              _push2(`<div class="fixed left-0 right-0 top-0 z-50 h-1 bg-red-100"${_scopeId}><div class="h-full w-1/2 animate-pulse brand-action"${_scopeId}></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (activeShellSection.value === "manager-assistant" && dealContextOverlayVisible.value) {
              _push2(`<div class="deal-loading-overlay"${_scopeId}><div class="deal-loading-panel"${_scopeId}><div class="deal-loading-spinner" aria-hidden="true"${_scopeId}></div><div${_scopeId}><p class="text-sm font-bold text-label"${_scopeId}>${ssrInterpolate(dealContextLoadingText.value)}</p><p class="mt-1 text-xs text-description"${_scopeId}>Поля будут доступны после подстановки данных из CRM.</p></div>`);
              _push2(ssrRenderComponent(_component_B24Progress, {
                "model-value": null,
                color: "air-primary",
                animation: "loading",
                class: "deal-loading-progress"
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (activeShellSection.value === "manager-assistant") {
              _push2(`<header class="sticky top-0 z-40 border-b border-default bg-default/95 px-4 py-3 backdrop-blur"${_scopeId}><div class="flex flex-wrap items-center justify-between gap-3"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><img class="brand-logo"${ssrRenderAttr("src", _imports_0)} alt="Русский Экспресс"${_scopeId}><div${_scopeId}><h1 class="text-base font-bold leading-tight text-label"${_scopeId}>Русский Экспресс</h1><p class="text-xs text-description"${_scopeId}>Ассистент менеджера в карточке Bitrix24</p></div>`);
              _push2(ssrRenderComponent(_component_B24Badge, {
                label: "B24 UI",
                class: "brand-soft"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex flex-wrap items-center gap-2"${_scopeId}><div class="mode-switch" role="tablist" aria-label="Режим работы"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_B24Button, {
                label: "Скрипт по реактивации",
                size: "sm",
                disabled: !isReactivationFunnel.value,
                class: workspaceMode.value === "reactivation" ? "brand-action" : "mode-switch-button",
                onClick: ($event) => switchWorkspaceMode("reactivation")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_B24Button, {
                label: "AI следующий шаг",
                size: "sm",
                disabled: !isQualityLeadFunnel.value,
                class: workspaceMode.value === "ai-next-step" ? "brand-action" : "mode-switch-button",
                onClick: ($event) => switchWorkspaceMode("ai-next-step")
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (b24DealId.value) {
                _push2(ssrRenderComponent(_component_B24Badge, {
                  label: `Сделка #${b24DealId.value}`,
                  class: "brand-soft"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_B24Badge, {
                  label: "Контекст сделки не найден",
                  class: "border border-amber-200 bg-amber-50 text-amber-900"
                }, null, _parent2, _scopeId));
              }
              if (isCallCardPlacement.value) {
                _push2(ssrRenderComponent(_component_B24Badge, {
                  label: `Длительность разговора: ${formattedTimer.value}`,
                  class: "border border-default bg-muted text-label"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_B24Button, {
                label: "Сбросить",
                class: "border border-default bg-default text-label",
                onClick: resetCall
              }, null, _parent2, _scopeId));
              _push2(`</div></div></header>`);
            } else {
              _push2(`<!---->`);
            }
            if (activeShellSection.value === "manager-assistant" && workspaceMode.value === "reactivation") {
              _push2(`<main class="grid gap-4 p-4 lg:grid-cols-[460px_minmax(0,1fr)]"${_scopeId}><aside class="sidebar-sticky work-panel p-4 workspace-scroll"${_scopeId}><div class="mb-4 border-b border-default pb-3"${_scopeId}><div class="flex items-center justify-between gap-3"${_scopeId}><h2 class="text-base font-bold text-label"${_scopeId}>Данные для подстановки</h2>`);
              if (b24Debug.value) {
                _push2(ssrRenderComponent(_component_B24Badge, {
                  label: b24Debug.value,
                  class: "border border-default bg-muted text-description"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><p class="mt-1 text-xs text-description"${_scopeId}>Поля синхронизируются с карточкой сделки и сразу обновляют скрипт.</p></div><div class="field-stack"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_B24FormField, { label: "Ваше имя" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_B24Input, {
                      modelValue: agentName.value,
                      "onUpdate:modelValue": ($event) => agentName.value = $event,
                      class: "field-control"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_B24Input, {
                        modelValue: agentName.value,
                        "onUpdate:modelValue": ($event) => agentName.value = $event,
                        class: "field-control"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_B24FormField, { label: "Имя клиента" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_B24Input, {
                      modelValue: clientName.value,
                      "onUpdate:modelValue": ($event) => clientName.value = $event,
                      class: "field-control"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_B24Input, {
                        modelValue: clientName.value,
                        "onUpdate:modelValue": ($event) => clientName.value = $event,
                        class: "field-control"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="grid grid-cols-2 gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_B24Button, {
                label: "Покупал ранее",
                class: historyType.value === "buyer" ? "brand-action" : "border border-default bg-default text-label",
                onClick: ($event) => historyType.value = "buyer"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_B24Button, {
                label: "Не покупал",
                disabled: "",
                class: "scenario-disabled"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (historyType.value === "buyer") {
                _push2(`<div class="brand-soft rounded-lg border p-3 field-stack"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_B24FormField, { label: "Направление поездки" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_B24Input, {
                        modelValue: destination.value,
                        "onUpdate:modelValue": ($event) => destination.value = $event,
                        class: "field-control"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_B24Input, {
                          modelValue: destination.value,
                          "onUpdate:modelValue": ($event) => destination.value = $event,
                          class: "field-control"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_B24FormField, { label: "Когда состоялась поездка" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_B24Input, {
                        modelValue: tripDate.value,
                        "onUpdate:modelValue": ($event) => tripDate.value = $event,
                        class: "field-control"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_B24Input, {
                          modelValue: tripDate.value,
                          "onUpdate:modelValue": ($event) => tripDate.value = $event,
                          class: "field-control"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<div class="rounded-lg border border-default bg-muted p-3 field-stack"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_B24FormField, { label: "Когда подбирали тур" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_B24Input, {
                        modelValue: season.value,
                        "onUpdate:modelValue": ($event) => season.value = $event,
                        class: "field-control"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_B24Input, {
                          modelValue: season.value,
                          "onUpdate:modelValue": ($event) => season.value = $event,
                          class: "field-control"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_B24FormField, { label: "Направление подбора" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_B24Input, {
                        modelValue: destinationLead.value,
                        "onUpdate:modelValue": ($event) => destinationLead.value = $event,
                        class: "field-control"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_B24Input, {
                          modelValue: destinationLead.value,
                          "onUpdate:modelValue": ($event) => destinationLead.value = $event,
                          class: "field-control"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              }
              _push2(ssrRenderComponent(_component_B24FormField, { label: "Контекст предстоящего путешествия" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_B24Input, {
                      modelValue: travelContext.value,
                      "onUpdate:modelValue": ($event) => travelContext.value = $event,
                      class: "field-control"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_B24Input, {
                        modelValue: travelContext.value,
                        "onUpdate:modelValue": ($event) => travelContext.value = $event,
                        class: "field-control"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="flex flex-wrap gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_B24Button, {
                size: "xs",
                label: "Летний сезон",
                class: travelContext.value === "предстоящий летний сезон" ? "brand-action" : "border border-default bg-default text-label",
                onClick: ($event) => setPresetContext("предстоящий летний сезон")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_B24Button, {
                size: "xs",
                label: "Майские",
                class: travelContext.value === "майские праздники" ? "brand-action" : "border border-default bg-default text-label",
                onClick: ($event) => setPresetContext("майские праздники")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_B24Button, {
                size: "xs",
                label: "Бархатный",
                class: travelContext.value === "бархатный сезон осенью" ? "brand-action" : "border border-default bg-default text-label",
                onClick: ($event) => setPresetContext("бархатный сезон осенью")
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="border-t border-default pt-3 field-stack"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_B24FormField, { label: "Дата следующего контакта" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_B24Popover, { content: { side: "bottom", align: "start", sideOffset: 8 } }, {
                      content: withCtx(({ close }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="calendar-surface"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_B24Calendar, {
                            modelValue: contactDateValue.value,
                            "onUpdate:modelValue": [($event) => contactDateValue.value = $event, close],
                            locale: "ru-RU",
                            color: "air-primary",
                            size: "sm",
                            "year-controls": true,
                            "week-starts-on": 1,
                            b24ui: {
                              root: "reactivation-calendar",
                              cellTrigger: "reactivation-calendar-day"
                            }
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "calendar-surface" }, [
                              createVNode(_component_B24Calendar, {
                                modelValue: contactDateValue.value,
                                "onUpdate:modelValue": [($event) => contactDateValue.value = $event, close],
                                locale: "ru-RU",
                                color: "air-primary",
                                size: "sm",
                                "year-controls": true,
                                "week-starts-on": 1,
                                b24ui: {
                                  root: "reactivation-calendar",
                                  cellTrigger: "reactivation-calendar-day"
                                }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_B24Button, {
                            label: contactDateLabel.value,
                            block: "",
                            "use-dropdown": "",
                            class: "date-trigger"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_B24Button, {
                              label: contactDateLabel.value,
                              block: "",
                              "use-dropdown": "",
                              class: "date-trigger"
                            }, null, 8, ["label"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_B24Popover, { content: { side: "bottom", align: "start", sideOffset: 8 } }, {
                        content: withCtx(({ close }) => [
                          createVNode("div", { class: "calendar-surface" }, [
                            createVNode(_component_B24Calendar, {
                              modelValue: contactDateValue.value,
                              "onUpdate:modelValue": [($event) => contactDateValue.value = $event, close],
                              locale: "ru-RU",
                              color: "air-primary",
                              size: "sm",
                              "year-controls": true,
                              "week-starts-on": 1,
                              b24ui: {
                                root: "reactivation-calendar",
                                cellTrigger: "reactivation-calendar-day"
                              }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_B24Button, {
                            label: contactDateLabel.value,
                            block: "",
                            "use-dropdown": "",
                            class: "date-trigger"
                          }, null, 8, ["label"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_B24FormField, { label: "Заметка для CRM" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_B24Textarea, {
                      modelValue: crmNotes.value,
                      "onUpdate:modelValue": ($event) => crmNotes.value = $event,
                      rows: 4,
                      class: "field-control",
                      placeholder: "Итоги созвона, пожелания, бюджет, даты, следующий шаг..."
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_B24Textarea, {
                        modelValue: crmNotes.value,
                        "onUpdate:modelValue": ($event) => crmNotes.value = $event,
                        rows: 4,
                        class: "field-control",
                        placeholder: "Итоги созвона, пожелания, бюджет, даты, следующий шаг..."
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="grid grid-cols-2 gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_B24Button, {
                label: "Копировать",
                class: "border border-default bg-default text-label",
                onClick: ($event) => copyText(crmNotes.value)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_B24Button, {
                label: b24Saving.value ? "Создаем..." : "Создать дело",
                loading: b24Saving.value,
                class: "brand-action",
                onClick: () => void saveActivityToB24()
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div></aside><section class="script-scroll workspace-scroll"${_scopeId}><div class="work-panel mb-4 p-3"${_scopeId}><div class="grid gap-2 sm:grid-cols-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_B24Button, {
                label: "1 Присоединение",
                block: "",
                class: ["step-tab", { active: activeStep.value === 1 }],
                onClick: ($event) => scrollToStep(1)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_B24Button, {
                label: "2 Крючок",
                block: "",
                class: ["step-tab", { active: activeStep.value === 2 }],
                onClick: ($event) => scrollToStep(2)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_B24Button, {
                label: "3 Сделка",
                block: "",
                class: ["step-tab", { active: activeStep.value === 3 }],
                onClick: ($event) => scrollToStep(3)
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="grid gap-4"${_scopeId}><article id="step-1" class="${ssrRenderClass([{ active: activeStep.value === 1, "opacity-70": activeStep.value !== 1 }, "script-card p-5"])}"${_scopeId}><div class="mb-4 flex items-start justify-between gap-3 border-b border-default pb-3"${_scopeId}><div${_scopeId}><p class="text-xs font-bold uppercase text-[var(--brand-red)]"${_scopeId}>Шаг 1 из 3</p><h2 class="text-xl font-bold text-label"${_scopeId}>Присоединение</h2></div>`);
              _push2(ssrRenderComponent(_component_B24Badge, {
                label: "Начало разговора",
                class: "brand-soft"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="grid gap-3"${_scopeId}><div class="script-line p-4"${_scopeId}><p class="text-xs font-bold uppercase text-description"${_scopeId}>Приветствие</p><p class="mt-1 text-lg text-label"${_scopeId}>— <span class="variable"${_scopeId}>${ssrInterpolate(clientName.value || "[Имя клиента]")}</span>?</p></div><div class="script-line p-4"${_scopeId}><p class="text-xs font-bold uppercase text-description"${_scopeId}>Представление</p><p class="mt-1 text-lg text-label"${_scopeId}>— Меня зовут <span class="variable"${_scopeId}>${ssrInterpolate(agentName.value)}</span>, компания <strong${_scopeId}>Русский Экспресс</strong>.</p></div><div class="rounded-lg border border-red-100 bg-red-50/40 p-4"${_scopeId}><p class="text-xs font-bold uppercase text-[var(--brand-red-hover)]"${_scopeId}>Установление контакта</p><p class="mt-2 text-xl font-medium leading-relaxed text-label"${_scopeId}> «Мы помогали вам организовать поездку в <span class="variable"${_scopeId}>${ssrInterpolate(destination.value)}</span> <span class="variable"${_scopeId}>${ssrInterpolate(tripDate.value)}</span>, помните?» </p></div><div class="script-line p-4"${_scopeId}><p class="text-xs font-bold uppercase text-description"${_scopeId}>Проверка готовности</p><p class="mt-1 text-lg font-semibold text-label"${_scopeId}>— Вам удобно сейчас говорить?</p></div></div><div class="mt-4 flex justify-between border-t border-default pt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_B24Button, {
                label: "Копировать шаг",
                class: "border border-default bg-default text-label",
                onClick: ($event) => copyText(step1Text.value)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_B24Button, {
                label: "Далее",
                class: "brand-action",
                onClick: ($event) => scrollToStep(2)
              }, null, _parent2, _scopeId));
              _push2(`</div></article><article id="step-2" class="${ssrRenderClass([{ active: activeStep.value === 2, "opacity-70": activeStep.value !== 2 }, "script-card p-5"])}"${_scopeId}><div class="mb-4 border-b border-default pb-3"${_scopeId}><p class="text-xs font-bold uppercase text-[var(--brand-red)]"${_scopeId}>Шаг 2 из 3</p><h2 class="text-xl font-bold text-label"${_scopeId}>Вбиваем крючок</h2></div><div class="rounded-lg border border-red-100 bg-red-50/30 p-4"${_scopeId}><p class="text-xl font-semibold leading-relaxed text-label"${_scopeId}> «Звоню сказать, что у нас сейчас активно идет раннее бронирование на <span class="variable"${_scopeId}>${ssrInterpolate(travelContext.value)}</span>. Пока еще есть интересные варианты. Есть ли у вас планы на <span class="variable"${_scopeId}>${ssrInterpolate(travelContext.value)}</span>?» </p></div><div class="mt-4 flex justify-between border-t border-default pt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_B24Button, {
                label: "Копировать шаг",
                class: "border border-default bg-default text-label",
                onClick: ($event) => copyText(step2Text.value)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_B24Button, {
                label: "Далее",
                class: "brand-action",
                onClick: ($event) => scrollToStep(3)
              }, null, _parent2, _scopeId));
              _push2(`</div></article><article id="step-3" class="${ssrRenderClass([{ active: activeStep.value === 3, "opacity-70": activeStep.value !== 3 }, "script-card p-5"])}"${_scopeId}><div class="mb-4 border-b border-default pb-3"${_scopeId}><p class="text-xs font-bold uppercase text-[var(--brand-red)]"${_scopeId}>Шаг 3 из 3</p><h2 class="text-xl font-bold text-label"${_scopeId}>Подводим к сделке</h2></div><div class="grid gap-3 sm:grid-cols-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_B24Button, {
                label: "Есть интерес",
                class: interest.value === true ? "brand-action" : "border border-default bg-default text-label",
                onClick: ($event) => interest.value = true
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_B24Button, {
                label: "Нет интереса",
                class: interest.value === false ? "brand-action" : "border border-default bg-default text-label",
                onClick: ($event) => interest.value = false
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="mt-4 rounded-lg border border-default bg-muted p-4"${_scopeId}>`);
              if (interest.value === true) {
                _push2(`<p class="text-xl font-semibold leading-relaxed text-label"${_scopeId}> «Давайте задам пару уточняющих вопросов и после этого обсудим конкретные отели. <span class="variable"${_scopeId}>${ssrInterpolate(clientName.value)}</span>, с кем поедете?» </p>`);
              } else if (interest.value === false) {
                _push2(`<p class="text-xl font-semibold leading-relaxed text-label"${_scopeId}> «Хорошо, <span class="variable"${_scopeId}>${ssrInterpolate(clientName.value)}</span>. Когда вопрос с поездкой может стать для вас актуален?» </p>`);
              } else {
                _push2(`<p class="text-center text-description"${_scopeId}>Выберите реакцию клиента, чтобы показать нужный речевой модуль.</p>`);
              }
              _push2(`</div><div class="mt-4 flex justify-between border-t border-default pt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_B24Button, {
                label: "Копировать модуль",
                class: "border border-default bg-default text-label",
                disabled: interest.value === null,
                onClick: ($event) => copyText(step3Text.value)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_B24Button, {
                label: finishActionLabel.value,
                loading: b24Saving.value,
                class: "brand-action",
                onClick: finishCall
              }, null, _parent2, _scopeId));
              _push2(`</div></article>`);
              if (isCallFinished.value) {
                _push2(`<article id="summary-panel" class="rounded-lg border border-red-200 bg-[var(--brand-red)] p-5 text-white"${_scopeId}><h2 class="text-xl font-bold"${_scopeId}>${ssrInterpolate(completionTitle.value)}</h2><div class="mt-4 grid gap-2 rounded-lg bg-white/12 p-4 text-sm"${_scopeId}><p${_scopeId}><strong${_scopeId}>Менеджер:</strong> ${ssrInterpolate(agentName.value)}</p><p${_scopeId}><strong${_scopeId}>Клиент:</strong> ${ssrInterpolate(clientName.value)}</p><p${_scopeId}><strong${_scopeId}>Дата выполнения:</strong> ${ssrInterpolate(nextContactDate.value)}</p>`);
                if (createdActivityId.value) {
                  _push2(`<p${_scopeId}><strong${_scopeId}>Дело в CRM:</strong> #${ssrInterpolate(createdActivityId.value)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<p${_scopeId}><strong${_scopeId}>Заметка:</strong> ${ssrInterpolate(crmNotes.value)}</p></div><div class="mt-4 flex gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_B24Button, {
                  label: "Копировать отчет",
                  class: "bg-white text-[var(--brand-red-hover)]",
                  onClick: ($event) => copyText(crmNotesReport.value)
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_B24Button, {
                  label: resetActionLabel.value,
                  class: "border border-white/50 bg-transparent text-white",
                  onClick: resetCall
                }, null, _parent2, _scopeId));
                _push2(`</div></article>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></section></main>`);
            } else if (activeShellSection.value === "manager-assistant") {
              _push2(ssrRenderComponent(_component_AiNextStepPanel, {
                "deal-id": b24DealId.value,
                "agent-name": agentName.value,
                "client-name": clientName.value,
                "access-token": accessToken.value,
                "loading-context": dealContextOverlayVisible.value
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_AdminReportsPanel, {
                mode: adminReportMode.value,
                "access-token": accessToken.value
              }, null, _parent2, _scopeId));
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "unified-shell" }, [
                createVNode("aside", { class: "unified-sidebar" }, [
                  createVNode("div", { class: "unified-brand" }, [
                    createVNode("img", {
                      class: "brand-logo",
                      src: _imports_0,
                      alt: "Русский Экспресс"
                    }),
                    createVNode("div", null, [
                      createVNode("strong", null, "Русский Экспресс"),
                      createVNode("span", null, "Bitrix24 dashboard")
                    ])
                  ]),
                  createVNode("nav", {
                    class: "unified-nav",
                    "aria-label": "Разделы дашборда"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(shellNavItems.value, (item) => {
                      return openBlock(), createBlock("button", {
                        key: item.id,
                        type: "button",
                        class: { active: activeShellSection.value === item.id },
                        onClick: ($event) => switchShellSection(item.id)
                      }, [
                        createVNode("strong", null, toDisplayString(item.label), 1),
                        createVNode("span", null, toDisplayString(item.description), 1)
                      ], 10, ["onClick"]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "unified-access" }, [
                    createVNode(_component_B24Badge, {
                      label: accessLoading.value ? "Проверяем права" : isDashboardAdmin.value ? "Администратор" : "Сотрудник",
                      class: isDashboardAdmin.value ? "brand-soft" : "border border-default bg-muted text-description"
                    }, null, 8, ["label", "class"]),
                    dashboardAccess.value?.user.name ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(dashboardAccess.value.user.name), 1)) : accessError.value ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(accessError.value), 1)) : (openBlock(), createBlock("span", { key: 2 }, "Доступ к отчетам скрыт для рядовых пользователей"))
                  ])
                ]),
                createVNode("div", { class: "app-shell unified-content" }, [
                  activeShellSection.value === "manager-assistant" && b24Loading.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "fixed left-0 right-0 top-0 z-50 h-1 bg-red-100"
                  }, [
                    createVNode("div", { class: "h-full w-1/2 animate-pulse brand-action" })
                  ])) : createCommentVNode("", true),
                  activeShellSection.value === "manager-assistant" && dealContextOverlayVisible.value ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "deal-loading-overlay"
                  }, [
                    createVNode("div", { class: "deal-loading-panel" }, [
                      createVNode("div", {
                        class: "deal-loading-spinner",
                        "aria-hidden": "true"
                      }),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-sm font-bold text-label" }, toDisplayString(dealContextLoadingText.value), 1),
                        createVNode("p", { class: "mt-1 text-xs text-description" }, "Поля будут доступны после подстановки данных из CRM.")
                      ]),
                      createVNode(_component_B24Progress, {
                        "model-value": null,
                        color: "air-primary",
                        animation: "loading",
                        class: "deal-loading-progress"
                      })
                    ])
                  ])) : createCommentVNode("", true),
                  activeShellSection.value === "manager-assistant" ? (openBlock(), createBlock("header", {
                    key: 2,
                    class: "sticky top-0 z-40 border-b border-default bg-default/95 px-4 py-3 backdrop-blur"
                  }, [
                    createVNode("div", { class: "flex flex-wrap items-center justify-between gap-3" }, [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("img", {
                          class: "brand-logo",
                          src: _imports_0,
                          alt: "Русский Экспресс"
                        }),
                        createVNode("div", null, [
                          createVNode("h1", { class: "text-base font-bold leading-tight text-label" }, "Русский Экспресс"),
                          createVNode("p", { class: "text-xs text-description" }, "Ассистент менеджера в карточке Bitrix24")
                        ]),
                        createVNode(_component_B24Badge, {
                          label: "B24 UI",
                          class: "brand-soft"
                        })
                      ]),
                      createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                        createVNode("div", {
                          class: "mode-switch",
                          role: "tablist",
                          "aria-label": "Режим работы"
                        }, [
                          createVNode(_component_B24Button, {
                            label: "Скрипт по реактивации",
                            size: "sm",
                            disabled: !isReactivationFunnel.value,
                            class: workspaceMode.value === "reactivation" ? "brand-action" : "mode-switch-button",
                            onClick: ($event) => switchWorkspaceMode("reactivation")
                          }, null, 8, ["disabled", "class", "onClick"]),
                          createVNode(_component_B24Button, {
                            label: "AI следующий шаг",
                            size: "sm",
                            disabled: !isQualityLeadFunnel.value,
                            class: workspaceMode.value === "ai-next-step" ? "brand-action" : "mode-switch-button",
                            onClick: ($event) => switchWorkspaceMode("ai-next-step")
                          }, null, 8, ["disabled", "class", "onClick"])
                        ]),
                        b24DealId.value ? (openBlock(), createBlock(_component_B24Badge, {
                          key: 0,
                          label: `Сделка #${b24DealId.value}`,
                          class: "brand-soft"
                        }, null, 8, ["label"])) : (openBlock(), createBlock(_component_B24Badge, {
                          key: 1,
                          label: "Контекст сделки не найден",
                          class: "border border-amber-200 bg-amber-50 text-amber-900"
                        })),
                        isCallCardPlacement.value ? (openBlock(), createBlock(_component_B24Badge, {
                          key: 2,
                          label: `Длительность разговора: ${formattedTimer.value}`,
                          class: "border border-default bg-muted text-label"
                        }, null, 8, ["label"])) : createCommentVNode("", true),
                        createVNode(_component_B24Button, {
                          label: "Сбросить",
                          class: "border border-default bg-default text-label",
                          onClick: resetCall
                        })
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  activeShellSection.value === "manager-assistant" && workspaceMode.value === "reactivation" ? (openBlock(), createBlock("main", {
                    key: 3,
                    class: "grid gap-4 p-4 lg:grid-cols-[460px_minmax(0,1fr)]"
                  }, [
                    createVNode("aside", { class: "sidebar-sticky work-panel p-4 workspace-scroll" }, [
                      createVNode("div", { class: "mb-4 border-b border-default pb-3" }, [
                        createVNode("div", { class: "flex items-center justify-between gap-3" }, [
                          createVNode("h2", { class: "text-base font-bold text-label" }, "Данные для подстановки"),
                          b24Debug.value ? (openBlock(), createBlock(_component_B24Badge, {
                            key: 0,
                            label: b24Debug.value,
                            class: "border border-default bg-muted text-description"
                          }, null, 8, ["label"])) : createCommentVNode("", true)
                        ]),
                        createVNode("p", { class: "mt-1 text-xs text-description" }, "Поля синхронизируются с карточкой сделки и сразу обновляют скрипт.")
                      ]),
                      createVNode("div", { class: "field-stack" }, [
                        createVNode(_component_B24FormField, { label: "Ваше имя" }, {
                          default: withCtx(() => [
                            createVNode(_component_B24Input, {
                              modelValue: agentName.value,
                              "onUpdate:modelValue": ($event) => agentName.value = $event,
                              class: "field-control"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_B24FormField, { label: "Имя клиента" }, {
                          default: withCtx(() => [
                            createVNode(_component_B24Input, {
                              modelValue: clientName.value,
                              "onUpdate:modelValue": ($event) => clientName.value = $event,
                              class: "field-control"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                          createVNode(_component_B24Button, {
                            label: "Покупал ранее",
                            class: historyType.value === "buyer" ? "brand-action" : "border border-default bg-default text-label",
                            onClick: ($event) => historyType.value = "buyer"
                          }, null, 8, ["class", "onClick"]),
                          createVNode(_component_B24Button, {
                            label: "Не покупал",
                            disabled: "",
                            class: "scenario-disabled"
                          })
                        ]),
                        historyType.value === "buyer" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "brand-soft rounded-lg border p-3 field-stack"
                        }, [
                          createVNode(_component_B24FormField, { label: "Направление поездки" }, {
                            default: withCtx(() => [
                              createVNode(_component_B24Input, {
                                modelValue: destination.value,
                                "onUpdate:modelValue": ($event) => destination.value = $event,
                                class: "field-control"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_B24FormField, { label: "Когда состоялась поездка" }, {
                            default: withCtx(() => [
                              createVNode(_component_B24Input, {
                                modelValue: tripDate.value,
                                "onUpdate:modelValue": ($event) => tripDate.value = $event,
                                class: "field-control"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "rounded-lg border border-default bg-muted p-3 field-stack"
                        }, [
                          createVNode(_component_B24FormField, { label: "Когда подбирали тур" }, {
                            default: withCtx(() => [
                              createVNode(_component_B24Input, {
                                modelValue: season.value,
                                "onUpdate:modelValue": ($event) => season.value = $event,
                                class: "field-control"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_B24FormField, { label: "Направление подбора" }, {
                            default: withCtx(() => [
                              createVNode(_component_B24Input, {
                                modelValue: destinationLead.value,
                                "onUpdate:modelValue": ($event) => destinationLead.value = $event,
                                class: "field-control"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ])),
                        createVNode(_component_B24FormField, { label: "Контекст предстоящего путешествия" }, {
                          default: withCtx(() => [
                            createVNode(_component_B24Input, {
                              modelValue: travelContext.value,
                              "onUpdate:modelValue": ($event) => travelContext.value = $event,
                              class: "field-control"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex flex-wrap gap-2" }, [
                          createVNode(_component_B24Button, {
                            size: "xs",
                            label: "Летний сезон",
                            class: travelContext.value === "предстоящий летний сезон" ? "brand-action" : "border border-default bg-default text-label",
                            onClick: ($event) => setPresetContext("предстоящий летний сезон")
                          }, null, 8, ["class", "onClick"]),
                          createVNode(_component_B24Button, {
                            size: "xs",
                            label: "Майские",
                            class: travelContext.value === "майские праздники" ? "brand-action" : "border border-default bg-default text-label",
                            onClick: ($event) => setPresetContext("майские праздники")
                          }, null, 8, ["class", "onClick"]),
                          createVNode(_component_B24Button, {
                            size: "xs",
                            label: "Бархатный",
                            class: travelContext.value === "бархатный сезон осенью" ? "brand-action" : "border border-default bg-default text-label",
                            onClick: ($event) => setPresetContext("бархатный сезон осенью")
                          }, null, 8, ["class", "onClick"])
                        ]),
                        createVNode("div", { class: "border-t border-default pt-3 field-stack" }, [
                          createVNode(_component_B24FormField, { label: "Дата следующего контакта" }, {
                            default: withCtx(() => [
                              createVNode(_component_B24Popover, { content: { side: "bottom", align: "start", sideOffset: 8 } }, {
                                content: withCtx(({ close }) => [
                                  createVNode("div", { class: "calendar-surface" }, [
                                    createVNode(_component_B24Calendar, {
                                      modelValue: contactDateValue.value,
                                      "onUpdate:modelValue": [($event) => contactDateValue.value = $event, close],
                                      locale: "ru-RU",
                                      color: "air-primary",
                                      size: "sm",
                                      "year-controls": true,
                                      "week-starts-on": 1,
                                      b24ui: {
                                        root: "reactivation-calendar",
                                        cellTrigger: "reactivation-calendar-day"
                                      }
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_B24Button, {
                                    label: contactDateLabel.value,
                                    block: "",
                                    "use-dropdown": "",
                                    class: "date-trigger"
                                  }, null, 8, ["label"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_B24FormField, { label: "Заметка для CRM" }, {
                            default: withCtx(() => [
                              createVNode(_component_B24Textarea, {
                                modelValue: crmNotes.value,
                                "onUpdate:modelValue": ($event) => crmNotes.value = $event,
                                rows: 4,
                                class: "field-control",
                                placeholder: "Итоги созвона, пожелания, бюджет, даты, следующий шаг..."
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                            createVNode(_component_B24Button, {
                              label: "Копировать",
                              class: "border border-default bg-default text-label",
                              onClick: ($event) => copyText(crmNotes.value)
                            }, null, 8, ["onClick"]),
                            createVNode(_component_B24Button, {
                              label: b24Saving.value ? "Создаем..." : "Создать дело",
                              loading: b24Saving.value,
                              class: "brand-action",
                              onClick: () => void saveActivityToB24()
                            }, null, 8, ["label", "loading", "onClick"])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("section", { class: "script-scroll workspace-scroll" }, [
                      createVNode("div", { class: "work-panel mb-4 p-3" }, [
                        createVNode("div", { class: "grid gap-2 sm:grid-cols-3" }, [
                          createVNode(_component_B24Button, {
                            label: "1 Присоединение",
                            block: "",
                            class: ["step-tab", { active: activeStep.value === 1 }],
                            onClick: ($event) => scrollToStep(1)
                          }, null, 8, ["class", "onClick"]),
                          createVNode(_component_B24Button, {
                            label: "2 Крючок",
                            block: "",
                            class: ["step-tab", { active: activeStep.value === 2 }],
                            onClick: ($event) => scrollToStep(2)
                          }, null, 8, ["class", "onClick"]),
                          createVNode(_component_B24Button, {
                            label: "3 Сделка",
                            block: "",
                            class: ["step-tab", { active: activeStep.value === 3 }],
                            onClick: ($event) => scrollToStep(3)
                          }, null, 8, ["class", "onClick"])
                        ])
                      ]),
                      createVNode("div", { class: "grid gap-4" }, [
                        createVNode("article", {
                          id: "step-1",
                          class: ["script-card p-5", { active: activeStep.value === 1, "opacity-70": activeStep.value !== 1 }]
                        }, [
                          createVNode("div", { class: "mb-4 flex items-start justify-between gap-3 border-b border-default pb-3" }, [
                            createVNode("div", null, [
                              createVNode("p", { class: "text-xs font-bold uppercase text-[var(--brand-red)]" }, "Шаг 1 из 3"),
                              createVNode("h2", { class: "text-xl font-bold text-label" }, "Присоединение")
                            ]),
                            createVNode(_component_B24Badge, {
                              label: "Начало разговора",
                              class: "brand-soft"
                            })
                          ]),
                          createVNode("div", { class: "grid gap-3" }, [
                            createVNode("div", { class: "script-line p-4" }, [
                              createVNode("p", { class: "text-xs font-bold uppercase text-description" }, "Приветствие"),
                              createVNode("p", { class: "mt-1 text-lg text-label" }, [
                                createTextVNode("— "),
                                createVNode("span", { class: "variable" }, toDisplayString(clientName.value || "[Имя клиента]"), 1),
                                createTextVNode("?")
                              ])
                            ]),
                            createVNode("div", { class: "script-line p-4" }, [
                              createVNode("p", { class: "text-xs font-bold uppercase text-description" }, "Представление"),
                              createVNode("p", { class: "mt-1 text-lg text-label" }, [
                                createTextVNode("— Меня зовут "),
                                createVNode("span", { class: "variable" }, toDisplayString(agentName.value), 1),
                                createTextVNode(", компания "),
                                createVNode("strong", null, "Русский Экспресс"),
                                createTextVNode(".")
                              ])
                            ]),
                            createVNode("div", { class: "rounded-lg border border-red-100 bg-red-50/40 p-4" }, [
                              createVNode("p", { class: "text-xs font-bold uppercase text-[var(--brand-red-hover)]" }, "Установление контакта"),
                              createVNode("p", { class: "mt-2 text-xl font-medium leading-relaxed text-label" }, [
                                createTextVNode(" «Мы помогали вам организовать поездку в "),
                                createVNode("span", { class: "variable" }, toDisplayString(destination.value), 1),
                                createTextVNode(),
                                createVNode("span", { class: "variable" }, toDisplayString(tripDate.value), 1),
                                createTextVNode(", помните?» ")
                              ])
                            ]),
                            createVNode("div", { class: "script-line p-4" }, [
                              createVNode("p", { class: "text-xs font-bold uppercase text-description" }, "Проверка готовности"),
                              createVNode("p", { class: "mt-1 text-lg font-semibold text-label" }, "— Вам удобно сейчас говорить?")
                            ])
                          ]),
                          createVNode("div", { class: "mt-4 flex justify-between border-t border-default pt-4" }, [
                            createVNode(_component_B24Button, {
                              label: "Копировать шаг",
                              class: "border border-default bg-default text-label",
                              onClick: ($event) => copyText(step1Text.value)
                            }, null, 8, ["onClick"]),
                            createVNode(_component_B24Button, {
                              label: "Далее",
                              class: "brand-action",
                              onClick: ($event) => scrollToStep(2)
                            }, null, 8, ["onClick"])
                          ])
                        ], 2),
                        createVNode("article", {
                          id: "step-2",
                          class: ["script-card p-5", { active: activeStep.value === 2, "opacity-70": activeStep.value !== 2 }]
                        }, [
                          createVNode("div", { class: "mb-4 border-b border-default pb-3" }, [
                            createVNode("p", { class: "text-xs font-bold uppercase text-[var(--brand-red)]" }, "Шаг 2 из 3"),
                            createVNode("h2", { class: "text-xl font-bold text-label" }, "Вбиваем крючок")
                          ]),
                          createVNode("div", { class: "rounded-lg border border-red-100 bg-red-50/30 p-4" }, [
                            createVNode("p", { class: "text-xl font-semibold leading-relaxed text-label" }, [
                              createTextVNode(" «Звоню сказать, что у нас сейчас активно идет раннее бронирование на "),
                              createVNode("span", { class: "variable" }, toDisplayString(travelContext.value), 1),
                              createTextVNode(". Пока еще есть интересные варианты. Есть ли у вас планы на "),
                              createVNode("span", { class: "variable" }, toDisplayString(travelContext.value), 1),
                              createTextVNode("?» ")
                            ])
                          ]),
                          createVNode("div", { class: "mt-4 flex justify-between border-t border-default pt-4" }, [
                            createVNode(_component_B24Button, {
                              label: "Копировать шаг",
                              class: "border border-default bg-default text-label",
                              onClick: ($event) => copyText(step2Text.value)
                            }, null, 8, ["onClick"]),
                            createVNode(_component_B24Button, {
                              label: "Далее",
                              class: "brand-action",
                              onClick: ($event) => scrollToStep(3)
                            }, null, 8, ["onClick"])
                          ])
                        ], 2),
                        createVNode("article", {
                          id: "step-3",
                          class: ["script-card p-5", { active: activeStep.value === 3, "opacity-70": activeStep.value !== 3 }]
                        }, [
                          createVNode("div", { class: "mb-4 border-b border-default pb-3" }, [
                            createVNode("p", { class: "text-xs font-bold uppercase text-[var(--brand-red)]" }, "Шаг 3 из 3"),
                            createVNode("h2", { class: "text-xl font-bold text-label" }, "Подводим к сделке")
                          ]),
                          createVNode("div", { class: "grid gap-3 sm:grid-cols-2" }, [
                            createVNode(_component_B24Button, {
                              label: "Есть интерес",
                              class: interest.value === true ? "brand-action" : "border border-default bg-default text-label",
                              onClick: ($event) => interest.value = true
                            }, null, 8, ["class", "onClick"]),
                            createVNode(_component_B24Button, {
                              label: "Нет интереса",
                              class: interest.value === false ? "brand-action" : "border border-default bg-default text-label",
                              onClick: ($event) => interest.value = false
                            }, null, 8, ["class", "onClick"])
                          ]),
                          createVNode("div", { class: "mt-4 rounded-lg border border-default bg-muted p-4" }, [
                            interest.value === true ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-xl font-semibold leading-relaxed text-label"
                            }, [
                              createTextVNode(" «Давайте задам пару уточняющих вопросов и после этого обсудим конкретные отели. "),
                              createVNode("span", { class: "variable" }, toDisplayString(clientName.value), 1),
                              createTextVNode(", с кем поедете?» ")
                            ])) : interest.value === false ? (openBlock(), createBlock("p", {
                              key: 1,
                              class: "text-xl font-semibold leading-relaxed text-label"
                            }, [
                              createTextVNode(" «Хорошо, "),
                              createVNode("span", { class: "variable" }, toDisplayString(clientName.value), 1),
                              createTextVNode(". Когда вопрос с поездкой может стать для вас актуален?» ")
                            ])) : (openBlock(), createBlock("p", {
                              key: 2,
                              class: "text-center text-description"
                            }, "Выберите реакцию клиента, чтобы показать нужный речевой модуль."))
                          ]),
                          createVNode("div", { class: "mt-4 flex justify-between border-t border-default pt-4" }, [
                            createVNode(_component_B24Button, {
                              label: "Копировать модуль",
                              class: "border border-default bg-default text-label",
                              disabled: interest.value === null,
                              onClick: ($event) => copyText(step3Text.value)
                            }, null, 8, ["disabled", "onClick"]),
                            createVNode(_component_B24Button, {
                              label: finishActionLabel.value,
                              loading: b24Saving.value,
                              class: "brand-action",
                              onClick: finishCall
                            }, null, 8, ["label", "loading"])
                          ])
                        ], 2),
                        isCallFinished.value ? (openBlock(), createBlock("article", {
                          key: 0,
                          id: "summary-panel",
                          class: "rounded-lg border border-red-200 bg-[var(--brand-red)] p-5 text-white"
                        }, [
                          createVNode("h2", { class: "text-xl font-bold" }, toDisplayString(completionTitle.value), 1),
                          createVNode("div", { class: "mt-4 grid gap-2 rounded-lg bg-white/12 p-4 text-sm" }, [
                            createVNode("p", null, [
                              createVNode("strong", null, "Менеджер:"),
                              createTextVNode(" " + toDisplayString(agentName.value), 1)
                            ]),
                            createVNode("p", null, [
                              createVNode("strong", null, "Клиент:"),
                              createTextVNode(" " + toDisplayString(clientName.value), 1)
                            ]),
                            createVNode("p", null, [
                              createVNode("strong", null, "Дата выполнения:"),
                              createTextVNode(" " + toDisplayString(nextContactDate.value), 1)
                            ]),
                            createdActivityId.value ? (openBlock(), createBlock("p", { key: 0 }, [
                              createVNode("strong", null, "Дело в CRM:"),
                              createTextVNode(" #" + toDisplayString(createdActivityId.value), 1)
                            ])) : createCommentVNode("", true),
                            createVNode("p", null, [
                              createVNode("strong", null, "Заметка:"),
                              createTextVNode(" " + toDisplayString(crmNotes.value), 1)
                            ])
                          ]),
                          createVNode("div", { class: "mt-4 flex gap-2" }, [
                            createVNode(_component_B24Button, {
                              label: "Копировать отчет",
                              class: "bg-white text-[var(--brand-red-hover)]",
                              onClick: ($event) => copyText(crmNotesReport.value)
                            }, null, 8, ["onClick"]),
                            createVNode(_component_B24Button, {
                              label: resetActionLabel.value,
                              class: "border border-white/50 bg-transparent text-white",
                              onClick: resetCall
                            }, null, 8, ["label"])
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ])) : activeShellSection.value === "manager-assistant" ? (openBlock(), createBlock(_component_AiNextStepPanel, {
                    key: 4,
                    "deal-id": b24DealId.value,
                    "agent-name": agentName.value,
                    "client-name": clientName.value,
                    "access-token": accessToken.value,
                    "loading-context": dealContextOverlayVisible.value
                  }, null, 8, ["deal-id", "agent-name", "client-name", "access-token", "loading-context"])) : (openBlock(), createBlock(_component_AdminReportsPanel, {
                    key: 5,
                    mode: adminReportMode.value,
                    "access-token": accessToken.value
                  }, null, 8, ["mode", "access-token"]))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    const status = Number(_error.statusCode || 500);
    const is404 = status === 404;
    const statusText = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-CbAJpx8O.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-DB746uDh.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ status: unref(status), statusText: unref(statusText), statusCode: unref(status), statusMessage: unref(statusText), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup", []);
    const error = /* @__PURE__ */ useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    function invokeAppErrorHandler(err, target, info) {
      const errorHandler = nuxtApp.vueApp.config.errorHandler;
      if (errorHandler && !errorHandler.__nuxt_default) {
        try {
          errorHandler(err, target, info);
        } catch (handlerError) {
          console.error("[nuxt] Error in `app.config.errorHandler`", handlerError);
        }
      }
    }
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info)?.catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        invokeAppErrorHandler(err, target, info);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error ||= createError(error);
    }
    if (ssrContext && (ssrContext["~renderResponse"] || ssrContext._renderResponse)) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry_default = ((ssrContext) => entry(ssrContext));

export { ImageComponent as I, Presence_default as P, Teleport_default as T, __nuxt_component_0$1 as _, Primitive as a, _sfc_main$i as b, _sfc_main$b as c, _sfc_main$h as d, entry_default as default, _sfc_main$k as e, createContext as f, extractPromptText as g, get as h, getActiveElement as i, icons as j, isNullish as k, resolveIcon as l, tv as m, useCollection as n, useComponentProps as o, useDirection as p, useForwardExpose as q, resolveBaseURL as r, useForwardProps as s, transformUI as t, useAppConfig as u, useHead as v, useId as w, useLocale as x, useRuntimeConfig as y };
//# sourceMappingURL=server.mjs.map

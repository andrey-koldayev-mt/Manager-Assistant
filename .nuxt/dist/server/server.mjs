import { hasInjectionContext, getCurrentInstance, shallowReactive, reactive, effectScope, getCurrentScope, inject, toRef, computed, defineComponent, h, isReadonly, isRef, isShallow, isReactive, toRaw, defineAsyncComponent, provide, Fragment, toRefs, renderSlot, toHandlerKey, camelize, ref, watch, nextTick, Comment, mergeProps, cloneVNode, openBlock, createBlock, unref, withCtx, Teleport, createCommentVNode, watchEffect, markRaw, onScopeDispose, createTextVNode, toDisplayString, createElementBlock, renderList, createVNode, withModifiers, normalizeProps, guardReactiveProps, normalizeStyle, useModel, resolveDynamicComponent, mergeModels, useSSRContext, toValue, shallowRef, resolveComponent, useSlots, useTemplateRef, useId, onErrorCaptured, onServerPrefetch, createApp } from "vue";
import { $fetch as $fetch$1 } from "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/ofetch/dist/node.mjs";
import { baseURL } from "#internal/nuxt/paths";
import { createHooks } from "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/hookable/dist/index.mjs";
import { getContext } from "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/unctx/dist/index.mjs";
import { sanitizeStatusCode, createError as createError$1, getRequestHeader } from "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import { parseURL, encodePath, decodePath, withQuery, hasProtocol, isScriptProtocol, joinURL, isEqual, stringifyParsedURL, stringifyQuery, parseQuery, withLeadingSlash, withTrailingSlash, withoutTrailingSlash } from "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/ufo/dist/index.mjs";
import defu$1, { defu, defuFn } from "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/defu/dist/defu.mjs";
import { useHead as useHead$1, headSymbol } from "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/@unhead/vue/dist/index.mjs";
import { klona } from "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/klona/dist/index.mjs";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderVNode, ssrRenderStyle, ssrRenderList, ssrRenderAttrs, ssrRenderSuspense } from "vue/server-renderer";
import { unrefElement, defaultWindow, useMounted, useVModel, useRafFn, onKeyStroke, useDebounceFn, reactivePick, reactiveOmit, createSharedComposable } from "@vueuse/core";
import { isClient, useTimeout, useTimeoutFn } from "@vueuse/shared";
import ArrowToTheLeftIcon from "@bitrix24/b24icons-vue/actions/ArrowToTheLeftIcon";
import ArrowToTheRightIcon from "@bitrix24/b24icons-vue/actions/ArrowToTheRightIcon";
import CheckIcon from "@bitrix24/b24icons-vue/outline/CheckLIcon";
import ChevronTopLIcon from "@bitrix24/b24icons-vue/outline/ChevronTopLIcon";
import ChevronToTheLeftIcon from "@bitrix24/b24icons-vue/outline/ChevronLeftLIcon";
import ChevronToTheRightIcon from "@bitrix24/b24icons-vue/outline/ChevronRightLIcon";
import DoubleShevronsRightIcon from "@bitrix24/b24icons-vue/actions/DoubleShevronsRightIcon";
import DoubleShevronsLeftIcon from "@bitrix24/b24icons-vue/actions/DoubleShevronsLeftIcon";
import CrossMIcon from "@bitrix24/b24icons-vue/outline/CrossMIcon";
import DotsIcon from "@bitrix24/b24icons-vue/button/DotsIcon";
import Refresh6Icon from "@bitrix24/b24icons-vue/actions/Refresh6Icon";
import Minus30Icon from "@bitrix24/b24icons-vue/actions/Minus30Icon";
import Plus30Icon from "@bitrix24/b24icons-vue/actions/Plus30Icon";
import Search2Icon from "@bitrix24/b24icons-vue/main/Search2Icon";
import LoaderWaitIcon from "@bitrix24/b24icons-vue/animated/LoaderWaitIcon";
import ChevronDownLIcon from "@bitrix24/b24icons-vue/outline/ChevronDownLIcon";
import ScreenIcon from "@bitrix24/b24icons-vue/outline/ScreenIcon";
import SunIconAir from "@bitrix24/b24icons-vue/outline/SunIcon";
import MoonIconAir from "@bitrix24/b24icons-vue/outline/MoonIcon";
import TagIcon from "@bitrix24/b24icons-vue/outline/TagIcon";
import InfoCircleIcon from "@bitrix24/b24icons-vue/outline/InfoCircleIcon";
import IdeaLampIcon from "@bitrix24/b24icons-vue/outline/IdeaLampIcon";
import WarningIcon from "@bitrix24/b24icons-vue/main/WarningIcon";
import AlertIcon from "@bitrix24/b24icons-vue/outline/AlertIcon";
import CopyIcon from "@bitrix24/b24icons-vue/outline/CopyIcon";
import CircleCheckIcon from "@bitrix24/b24icons-vue/outline/CircleCheckIcon";
import FileIcon from "@bitrix24/b24icons-vue/outline/FileIcon";
import UploadFileIcon from "@bitrix24/b24icons-vue/outline/UploadFileIcon";
import ArrowDownLIcon from "@bitrix24/b24icons-vue/outline/ArrowDownLIcon";
import ArrowTopLIcon from "@bitrix24/b24icons-vue/outline/ArrowTopLIcon";
import StopLIcon from "@bitrix24/b24icons-vue/outline/StopLIcon";
import RefreshIcon from "@bitrix24/b24icons-vue/outline/RefreshIcon";
import SendIcon from "@bitrix24/b24icons-vue/main/SendIcon";
import DragLIcon from "@bitrix24/b24icons-vue/outline/DragLIcon";
import GoToLIcon from "@bitrix24/b24icons-vue/outline/GoToLIcon";
import HamburgerMenuIcon from "@bitrix24/b24icons-vue/outline/HamburgerMenuIcon";
import CloseChatIcon from "@bitrix24/b24icons-vue/outline/CloseChatIcon";
import OpenChatIcon from "@bitrix24/b24icons-vue/outline/OpenChatIcon";
import GitHubIcon from "@bitrix24/b24icons-vue/social/GitHubIcon";
import MdnwebdocsIcon from "@bitrix24/b24icons-vue/social/MdnwebdocsIcon";
import Bitrix24Icon from "@bitrix24/b24icons-vue/common-service/Bitrix24Icon";
import DemonstrationOnIcon from "@bitrix24/b24icons-vue/outline/DemonstrationOnIcon";
import DesignIcon from "@bitrix24/b24icons-vue/outline/DesignIcon";
import FavoriteIcon from "@bitrix24/b24icons-vue/outline/FavoriteIcon";
import MoreMIcon from "@bitrix24/b24icons-vue/outline/MoreMIcon";
import NuxtIcon from "@bitrix24/b24icons-vue/file-type/NuxtIcon";
import AiStarsIcon from "@bitrix24/b24icons-vue/outline/AiStarsIcon";
import EncloseTextInCodeTagIcon from "@bitrix24/b24icons-vue/editor/EncloseTextInCodeTagIcon";
import PlayLIcon from "@bitrix24/b24icons-vue/outline/PlayLIcon";
import { createTV } from "tailwind-variants";
import { diff, isEqual as isEqual$1 } from "ohash/utils";
import ChevronDownSIcon from "@bitrix24/b24icons-vue/outline/ChevronDownSIcon";
import LoaderClockIcon from "@bitrix24/b24icons-vue/animated/LoaderClockIcon";
import SpinnerIcon from "@bitrix24/b24icons-vue/specialized/SpinnerIcon";
import Cross20Icon from "@bitrix24/b24icons-vue/actions/Cross20Icon";
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
import.meta.url.replace(/\/app\/.*$/, "/");
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
const clearError = async (options = {}) => {
  const nuxtApp = useNuxtApp();
  const error = /* @__PURE__ */ useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await useRouter().replace(options.redirect);
  }
  error.value = void 0;
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
    const baseURL2 = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
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
      push: (url) => handleNavigation(url, false),
      replace: (url) => handleNavigation(url, true),
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
      if (!isEqual(route.fullPath, initialURL)) {
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
const LazyProseA = defineAsyncComponent(() => import("./_nuxt/A-CAQNLaFG.js").then((r) => r["default"] || r.default || r));
const LazyProseAccordion = defineAsyncComponent(() => import("./_nuxt/Accordion-C5E8YLSs.js").then((r) => r["default"] || r.default || r));
const LazyProseAccordionItem = defineAsyncComponent(() => import("./_nuxt/AccordionItem-YywEPBPv.js").then((r) => r["default"] || r.default || r));
const LazyProseBadge = defineAsyncComponent(() => import("./_nuxt/Badge-BlM2ZdDm.js").then((r) => r["default"] || r.default || r));
const LazyProseBlockquote = defineAsyncComponent(() => import("./_nuxt/Blockquote-CfzY-mlk.js").then((r) => r["default"] || r.default || r));
const LazyProseCallout = defineAsyncComponent(() => import("./_nuxt/Callout-Cy5tH9p8.js").then((r) => r["default"] || r.default || r));
const LazyProseCard = defineAsyncComponent(() => import("./_nuxt/Card-Og3uHN4P.js").then((r) => r["default"] || r.default || r));
const LazyProseCardGroup = defineAsyncComponent(() => import("./_nuxt/CardGroup-Cu4qtTvv.js").then((r) => r["default"] || r.default || r));
const LazyProseCode = defineAsyncComponent(() => import("./_nuxt/Code-GStxyF8_.js").then((r) => r["default"] || r.default || r));
const LazyProseCodeCollapse = defineAsyncComponent(() => import("./_nuxt/CodeCollapse-DJ-IQ_60.js").then((r) => r["default"] || r.default || r));
const LazyProseCodeGroup = defineAsyncComponent(() => import("./_nuxt/CodeGroup-UhdYOcgA.js").then((r) => r["default"] || r.default || r));
const LazyProseCodeIcon = defineAsyncComponent(() => import("./_nuxt/CodeIcon-Do2QDDDD.js").then((r) => r["default"] || r.default || r));
const LazyProseCodePreview = defineAsyncComponent(() => import("./_nuxt/CodePreview-BaSMbah_.js").then((r) => r["default"] || r.default || r));
const LazyProseCollapsible = defineAsyncComponent(() => import("./_nuxt/Collapsible-SwxCh7WB.js").then((r) => r["default"] || r.default || r));
const LazyProseEm = defineAsyncComponent(() => import("./_nuxt/Em-w8M5IOEE.js").then((r) => r["default"] || r.default || r));
const LazyProseField = defineAsyncComponent(() => import("./_nuxt/Field-CFD69AGf.js").then((r) => r["default"] || r.default || r));
const LazyProseFieldGroup = defineAsyncComponent(() => import("./_nuxt/FieldGroup-zo4vIux0.js").then((r) => r["default"] || r.default || r));
const LazyProseH1 = defineAsyncComponent(() => import("./_nuxt/H1-B9kZX0Pg.js").then((r) => r["default"] || r.default || r));
const LazyProseH2 = defineAsyncComponent(() => import("./_nuxt/H2-KtsLyzJD.js").then((r) => r["default"] || r.default || r));
const LazyProseH3 = defineAsyncComponent(() => import("./_nuxt/H3-DdRCtlEp.js").then((r) => r["default"] || r.default || r));
const LazyProseH4 = defineAsyncComponent(() => import("./_nuxt/H4-CqZ0NHdA.js").then((r) => r["default"] || r.default || r));
const LazyProseH5 = defineAsyncComponent(() => import("./_nuxt/H5-jzIV6KSV.js").then((r) => r["default"] || r.default || r));
const LazyProseH6 = defineAsyncComponent(() => import("./_nuxt/H6-DXdd8ULf.js").then((r) => r["default"] || r.default || r));
const LazyProseHr = defineAsyncComponent(() => import("./_nuxt/Hr-BjWHHATs.js").then((r) => r["default"] || r.default || r));
const LazyProseImg = defineAsyncComponent(() => import("./_nuxt/Img-CVcV8mvh.js").then((r) => r["default"] || r.default || r));
const LazyProseKbd = defineAsyncComponent(() => import("./_nuxt/Kbd-CrTlBZvx.js").then((r) => r["default"] || r.default || r));
const LazyProseLi = defineAsyncComponent(() => import("./_nuxt/Li-B9QPL8QW.js").then((r) => r["default"] || r.default || r));
const LazyProseOl = defineAsyncComponent(() => import("./_nuxt/Ol-Ba0DeGZz.js").then((r) => r["default"] || r.default || r));
const LazyProseP = defineAsyncComponent(() => import("./_nuxt/P-fHPHSIfl.js").then((r) => r["default"] || r.default || r));
const LazyProsePre = defineAsyncComponent(() => import("./_nuxt/Pre-n_RY5b-M.js").then((r) => r["default"] || r.default || r));
const LazyProsePrompt = defineAsyncComponent(() => import("./_nuxt/Prompt-DckCVPeC.js").then((r) => r["default"] || r.default || r));
const LazyProseScript = defineAsyncComponent(() => import("./_nuxt/Script-4T5bZV8T.js").then((r) => r["default"] || r.default || r));
const LazyProseSteps = defineAsyncComponent(() => import("./_nuxt/Steps-DnvE5mwW.js").then((r) => r["default"] || r.default || r));
const LazyProseStrong = defineAsyncComponent(() => import("./_nuxt/Strong-CJy2b3vP.js").then((r) => r["default"] || r.default || r));
const LazyProseTable = defineAsyncComponent(() => import("./_nuxt/Table-C7V7f082.js").then((r) => r["default"] || r.default || r));
const LazyProseTabs = defineAsyncComponent(() => import("./_nuxt/Tabs-CqGqiFEI.js").then((r) => r["default"] || r.default || r));
const LazyProseTabsItem = defineAsyncComponent(() => import("./_nuxt/TabsItem-DtP8Ex0-.js").then((r) => r["default"] || r.default || r));
const LazyProseTbody = defineAsyncComponent(() => import("./_nuxt/Tbody-F5vszRVS.js").then((r) => r["default"] || r.default || r));
const LazyProseTd = defineAsyncComponent(() => import("./_nuxt/Td-Dyx56CYz.js").then((r) => r["default"] || r.default || r));
const LazyProseTh = defineAsyncComponent(() => import("./_nuxt/Th-BtiKcIt3.js").then((r) => r["default"] || r.default || r));
const LazyProseThead = defineAsyncComponent(() => import("./_nuxt/Thead-CRbLCyyT.js").then((r) => r["default"] || r.default || r));
const LazyProseTr = defineAsyncComponent(() => import("./_nuxt/Tr-DP7BHM5U.js").then((r) => r["default"] || r.default || r));
const LazyProseUl = defineAsyncComponent(() => import("./_nuxt/Ul-DjiJqsbp.js").then((r) => r["default"] || r.default || r));
const LazyProseCaution = defineAsyncComponent(() => import("./_nuxt/Caution-BidcSbym.js").then((r) => r["default"] || r.default || r));
const LazyProseNote = defineAsyncComponent(() => import("./_nuxt/Note-9fyj3z__.js").then((r) => r["default"] || r.default || r));
const LazyProseTip = defineAsyncComponent(() => import("./_nuxt/Tip-0e6TYsmx.js").then((r) => r["default"] || r.default || r));
const LazyProseWarning = defineAsyncComponent(() => import("./_nuxt/Warning-BKbfL54W.js").then((r) => r["default"] || r.default || r));
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
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
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
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  platform_FYhwEXmGrxPwWwuAI6I6p0dAa6CAhgjhih3o1RwaVDg,
  ui_version_arvyjEl5mPSj0YIV2SHG0JnGBjCHHcKyYdt4SGfeI0s,
  colors_PGt7uMKzzza52cjV0T9xHZiomUH6OCpPC79aExTzkEU
];
function createContext(providerComponentName, contextName) {
  const symbolDescription = typeof providerComponentName === "string" && !contextName ? `${providerComponentName}Context` : contextName;
  const injectionKey = Symbol(symbolDescription);
  const injectContext = (fallback) => {
    const context = inject(injectionKey, fallback);
    if (context) return context;
    if (context === null) return context;
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
function focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = getActiveElement();
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (getActiveElement() !== previouslyFocusedElement) return true;
  }
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
  let context;
  if (isProvider) {
    const itemMap = ref(/* @__PURE__ */ new Map());
    const collectionRef = ref();
    context = {
      collectionRef,
      itemMap
    };
    provide(injectionKey, context);
  } else context = inject(injectionKey);
  const getItems = (includeDisabledItem = false) => {
    const collectionNode = context.collectionRef.value;
    if (!collectionNode) return [];
    const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
    const items = Array.from(context.itemMap.value.values());
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
        context.collectionRef.value = currentElement.value;
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
          context.itemMap.value.set(key$1, {
            ref: currentElement.value,
            value: props.value
          });
          cleanupFn(() => context.itemMap.value.delete(key$1));
        }
      });
      return () => h(Slot, {
        ...attrs,
        [ITEM_DATA_ATTR]: "",
        ref: primitiveElement
      }, slots);
    }
  });
  const reactiveItems = computed(() => Array.from(context.itemMap.value.values()));
  const itemMapSize = computed(() => context.itemMap.value.size);
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
      const isHidden = node.ariaHidden || node.hidden || node.style.display === "none";
      const isExcluded = node.dataset.rekaToastAnnounceExclude === "";
      if (!isHidden) if (isExcluded) {
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
        return defu$1(raw ?? {}, themeUi ?? {});
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
  const size = computed(() => props.size ?? avatarGroup?.value.size);
  const color = computed(() => props.color ?? avatarGroup?.value.color);
  provide(avatarGroupInjectionKey, computed(() => ({ size: size.value, color: color.value })));
  return {
    size,
    color
  };
}
const theme$a = {
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
const _sfc_main$g = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
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
    const b24ui = computed(() => tv({ extend: tv(theme$a), ...appConfig2.b24ui?.chip || {} })({
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
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Chip.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const theme$9 = {
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
const _sfc_main$f = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
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
    const { size, color } = useAvatarGroup(_props);
    const b24ui = computed(() => tv({ extend: tv(theme$9), ...appConfig2.b24ui?.avatar || {} })({
      size: size.value ?? props.size,
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
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(props).chip ? _sfc_main$g : unref(Primitive)), mergeProps({
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
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Avatar.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
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
defineComponent({
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
  return isEqual$1(item1Filtered, item2Filtered);
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
const _sfc_main$e = {
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/LinkBase.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const theme$8 = {
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
const _sfc_main$d = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
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
      extend: tv(theme$8),
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
        if (!isEqual$1(linkRoute.query, route.query)) return false;
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
                _push2(ssrRenderComponent(_sfc_main$e, mergeProps({
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
                }, 1024)) : (openBlock(), createBlock(_sfc_main$e, mergeProps({ key: 1 }, {
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
        _push(ssrRenderComponent(_sfc_main$e, mergeProps({
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Link.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const theme$7 = {
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
const _sfc_main$c = {
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
      extend: tv(theme$7),
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
      _push(ssrRenderComponent(_sfc_main$d, mergeProps({
        type: unref(props).type,
        disabled: unref(props).disabled || isLoading.value
      }, proxyLinkProps.value, { custom: "" }, _attrs), {
        default: withCtx(({ active, ...slotProps }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$e, mergeProps(slotProps, {
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
                      _push3(ssrRenderComponent(_sfc_main$f, mergeProps({
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
                        }, null, 8, ["class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$f, mergeProps({
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
              createVNode(_sfc_main$e, mergeProps(slotProps, {
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
                      }, null, 8, ["class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$f, mergeProps({
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Button.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const theme$6 = {
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
const _sfc_main$b = {
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
    const b24ui = computed(() => tv({ extend: tv(theme$6), ...appConfig2.b24ui?.progress || {} })({
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Progress.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const theme$5 = {
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
const _sfc_main$a = {
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
    const b24ui = computed(() => tv({ extend: tv(theme$5), ...appConfig2.b24ui?.toast || {} })({
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
                _push2(ssrRenderComponent(_sfc_main$f, mergeProps({
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
                        _push3(ssrRenderComponent(_sfc_main$c, mergeProps({
                          size: "sm",
                          color: unref(props).color
                        }, { ref_for: true }, action), null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_sfc_main$c, mergeProps({
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
                          _push3(ssrRenderComponent(_sfc_main$c, mergeProps({
                            size: "sm",
                            color: unref(props).color
                          }, { ref_for: true }, action), null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_sfc_main$c, mergeProps({
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
                          _push3(ssrRenderComponent(_sfc_main$c, mergeProps({
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
                          unref(props).close ? (openBlock(), createBlock(_sfc_main$c, mergeProps({
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
              _push2(ssrRenderComponent(_sfc_main$b, mergeProps({
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
                }, null, 8, ["class"])) : unref(props).avatar ? (openBlock(), createBlock(_sfc_main$f, mergeProps({
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
                          createVNode(_sfc_main$c, mergeProps({
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
                        createVNode(_sfc_main$c, mergeProps({
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
                      unref(props).close ? (openBlock(), createBlock(_sfc_main$c, mergeProps({
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
              unref(props).progress && open && remaining > 0 && duration ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Toast.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const theme$4 = {
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
const _sfc_main$9 = /* @__PURE__ */ Object.assign(__default__$1, {
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
    const b24ui = computed(() => tv({ extend: tv(theme$4), ...appConfig2.b24ui?.toaster || {} })({
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
              _push2(ssrRenderComponent(_sfc_main$a, mergeProps({
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
                return openBlock(), createBlock(_sfc_main$a, mergeProps({
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Toaster.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const B24Toaster = Object.assign(_sfc_main$9, { __name: "B24Toaster" });
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
const _sfc_main$8 = {
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/OverlayProvider.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __default__ = {
  name: "App"
};
const _sfc_main$7 = /* @__PURE__ */ Object.assign(__default__, {
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
        "use-id": () => useId(),
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
                  _push3(ssrRenderComponent(_sfc_main$8, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    __props.toaster !== null ? (openBlock(), createBlock(B24Toaster, mergeProps({ key: 0 }, toasterProps.value), {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 16)) : renderSlot(_ctx.$slots, "default", { key: 1 }),
                    createVNode(_sfc_main$8)
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
                  createVNode(_sfc_main$8)
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/App.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$7, { __name: "B24App" });
const theme$3 = {
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
const _sfc_main$6 = {
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
    const b24ui = computed(() => tv({ extend: tv(theme$3), ...appConfig2.b24ui?.badge || {} })({
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
                      _push3(ssrRenderComponent(_sfc_main$f, mergeProps({
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
                      }, null, 8, ["class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$f, mergeProps({
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
                    }, null, 8, ["class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$f, mergeProps({
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Badge.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const theme$2 = {
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
const _sfc_main$5 = {
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
    const b24ui = computed(() => tv({ extend: tv(theme$2), ...appConfig2.b24ui?.formField || {} })({
      size: props.size,
      required: props.required,
      orientation: props.orientation,
      useDescription: Boolean(props.description) || !!slots.description
    }));
    const formErrors = inject(formErrorsInjectionKey, null);
    const error = computed(() => props.error || formErrors?.value?.find((error2) => error2.name === props.name || props.errorPattern && error2.name?.match(props.errorPattern))?.message);
    const id = ref(useId());
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/FormField.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const theme$1 = {
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
const _sfc_main$4 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
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
    const b24ui = computed(() => tv({ extend: tv(theme$1), ...appConfig2.b24ui?.input || {} })({
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
              _push2(ssrRenderComponent(_sfc_main$6, {
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
                  _push2(ssrRenderComponent(_sfc_main$f, mergeProps({
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
              isTag.value ? (openBlock(), createBlock(_sfc_main$6, {
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
                  }, null, 8, ["class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$f, mergeProps({
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Input.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const theme = {
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
const _sfc_main$3 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
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
    const b24ui = computed(() => tv({ extend: tv(theme), ...appConfig2.b24ui?.textarea || {} })({
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
              _push2(ssrRenderComponent(_sfc_main$6, {
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
                  _push2(ssrRenderComponent(_sfc_main$f, mergeProps({
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
              isTag.value ? (openBlock(), createBlock(_sfc_main$6, {
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
                  }, null, 8, ["class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$f, mergeProps({
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/Textarea.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = (() => {
  console.error(intervalError);
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
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
    const assignedById = ref(null);
    const b24Loading = ref(false);
    const b24Saving = ref(false);
    ref("");
    const b24Debug = ref("");
    const nextContactDate = ref("");
    const createdActivityId = ref(null);
    const timerSeconds = ref(0);
    const bx24Instance = ref(null);
    let timerId = null;
    const formattedTimer = computed(() => {
      const mins = String(Math.floor(timerSeconds.value / 60)).padStart(2, "0");
      const secs = String(timerSeconds.value % 60).padStart(2, "0");
      return `${mins}:${secs}`;
    });
    const step1Text = computed(() => {
      const context = historyType.value === "buyer" ? `Мы помогали вам организовать вашу поездку в ${destination.value} ${tripDate.value}, помните?` : `${season.value} мы подбирали для вас тур в ${destinationLead.value}, помните?`;
      return [
        `${clientName.value}?`,
        `Меня зовут ${agentName.value}, компания Русский Экспресс.`,
        context,
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
      `Длительность разговора: ${formattedTimer.value}`
    ].filter(Boolean).join("\n"));
    function showToast(title, description = "") {
      toast.add({
        title,
        description,
        color: "air-primary",
        duration: 3e3
      });
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
    function bx24Call(method, params) {
      return new Promise((resolve, reject) => {
        const BX24 = bx24Instance.value || (void 0).BX24;
        BX24.callMethod(method, params, (result) => {
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
      if (!bx24Instance.value?.callMethod || !b24DealId.value) {
        return false;
      }
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
      const _component_B24Badge = _sfc_main$6;
      const _component_B24Button = _sfc_main$c;
      const _component_B24FormField = _sfc_main$5;
      const _component_B24Input = _sfc_main$4;
      const _component_B24Textarea = _sfc_main$3;
      _push(ssrRenderComponent(_component_B24App, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="app-shell"${_scopeId}>`);
            if (b24Loading.value) {
              _push2(`<div class="fixed left-0 right-0 top-0 z-50 h-1 bg-red-100"${_scopeId}><div class="h-full w-1/2 animate-pulse brand-action"${_scopeId}></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<header class="sticky top-0 z-40 border-b border-default bg-default/95 px-4 py-3 backdrop-blur"${_scopeId}><div class="flex flex-wrap items-center justify-between gap-3"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="flex size-9 items-center justify-center rounded-md bg-[var(--brand-red)] text-sm font-black text-white"${_scopeId}> РЭ </div><div${_scopeId}><h1 class="text-base font-bold leading-tight text-label"${_scopeId}>Русский Экспресс</h1><p class="text-xs text-description"${_scopeId}>Интерактивный скрипт «Реактивация клиентов»</p></div>`);
            _push2(ssrRenderComponent(_component_B24Badge, {
              label: "B24 UI",
              class: "brand-soft"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-wrap items-center gap-2"${_scopeId}>`);
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
            _push2(ssrRenderComponent(_component_B24Badge, {
              label: `Длительность разговора: ${formattedTimer.value}`,
              class: "border border-default bg-muted text-label"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_B24Button, {
              label: "Сбросить",
              class: "border border-default bg-default text-label",
              onClick: resetCall
            }, null, _parent2, _scopeId));
            _push2(`</div></div></header><main class="grid gap-4 p-4 lg:grid-cols-[390px_minmax(0,1fr)]"${_scopeId}><aside class="sidebar-sticky work-panel p-4 workspace-scroll"${_scopeId}><div class="mb-4 border-b border-default pb-3"${_scopeId}><div class="flex items-center justify-between gap-3"${_scopeId}><h2 class="text-base font-bold text-label"${_scopeId}>Данные для подстановки</h2>`);
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
                    "onUpdate:modelValue": ($event) => agentName.value = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_B24Input, {
                      modelValue: agentName.value,
                      "onUpdate:modelValue": ($event) => agentName.value = $event
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
                    "onUpdate:modelValue": ($event) => clientName.value = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_B24Input, {
                      modelValue: clientName.value,
                      "onUpdate:modelValue": ($event) => clientName.value = $event
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
              class: historyType.value === "lead" ? "brand-action" : "border border-default bg-default text-label",
              onClick: ($event) => historyType.value = "lead"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (historyType.value === "buyer") {
              _push2(`<div class="brand-soft rounded-lg border p-3 field-stack"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_B24FormField, { label: "Направление поездки" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_B24Input, {
                      modelValue: destination.value,
                      "onUpdate:modelValue": ($event) => destination.value = $event
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_B24Input, {
                        modelValue: destination.value,
                        "onUpdate:modelValue": ($event) => destination.value = $event
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
                      "onUpdate:modelValue": ($event) => tripDate.value = $event
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_B24Input, {
                        modelValue: tripDate.value,
                        "onUpdate:modelValue": ($event) => tripDate.value = $event
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
                      "onUpdate:modelValue": ($event) => season.value = $event
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_B24Input, {
                        modelValue: season.value,
                        "onUpdate:modelValue": ($event) => season.value = $event
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
                      "onUpdate:modelValue": ($event) => destinationLead.value = $event
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_B24Input, {
                        modelValue: destinationLead.value,
                        "onUpdate:modelValue": ($event) => destinationLead.value = $event
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
                    "onUpdate:modelValue": ($event) => travelContext.value = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_B24Input, {
                      modelValue: travelContext.value,
                      "onUpdate:modelValue": ($event) => travelContext.value = $event
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
                  _push3(ssrRenderComponent(_component_B24Input, {
                    modelValue: nextContactDate.value,
                    "onUpdate:modelValue": ($event) => nextContactDate.value = $event,
                    type: "date"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_B24Input, {
                      modelValue: nextContactDate.value,
                      "onUpdate:modelValue": ($event) => nextContactDate.value = $event,
                      type: "date"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                    placeholder: "Итоги созвона, пожелания, бюджет, даты, следующий шаг..."
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_B24Textarea, {
                      modelValue: crmNotes.value,
                      "onUpdate:modelValue": ($event) => crmNotes.value = $event,
                      rows: 4,
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
              onClick: saveActivityToB24
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></aside><section class="script-scroll workspace-scroll"${_scopeId}><div class="work-panel mb-4 p-3"${_scopeId}><div class="grid gap-2 sm:grid-cols-3"${_scopeId}><button class="${ssrRenderClass([{ active: activeStep.value === 1 }, "step-tab"])}"${_scopeId}>1 Присоединение</button><button class="${ssrRenderClass([{ active: activeStep.value === 2 }, "step-tab"])}"${_scopeId}>2 Крючок</button><button class="${ssrRenderClass([{ active: activeStep.value === 3 }, "step-tab"])}"${_scopeId}>3 Сделка</button></div></div><div class="grid gap-4"${_scopeId}><article id="step-1" class="${ssrRenderClass([{ active: activeStep.value === 1, "opacity-70": activeStep.value !== 1 }, "script-card p-5"])}"${_scopeId}><div class="mb-4 flex items-start justify-between gap-3 border-b border-default pb-3"${_scopeId}><div${_scopeId}><p class="text-xs font-bold uppercase text-[var(--brand-red)]"${_scopeId}>Шаг 1 из 3</p><h2 class="text-xl font-bold text-label"${_scopeId}>Присоединение</h2></div>`);
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
              label: b24Saving.value ? "Создаем дело..." : "Завершить звонок",
              loading: b24Saving.value,
              class: "brand-action",
              onClick: finishCall
            }, null, _parent2, _scopeId));
            _push2(`</div></article>`);
            if (isCallFinished.value) {
              _push2(`<article id="summary-panel" class="rounded-lg border border-red-200 bg-[var(--brand-red)] p-5 text-white"${_scopeId}><h2 class="text-xl font-bold"${_scopeId}>Звонок завершен, дело создано</h2><div class="mt-4 grid gap-2 rounded-lg bg-white/12 p-4 text-sm"${_scopeId}><p${_scopeId}><strong${_scopeId}>Менеджер:</strong> ${ssrInterpolate(agentName.value)}</p><p${_scopeId}><strong${_scopeId}>Клиент:</strong> ${ssrInterpolate(clientName.value)}</p><p${_scopeId}><strong${_scopeId}>Дата выполнения:</strong> ${ssrInterpolate(nextContactDate.value)}</p>`);
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
                label: "Новый звонок",
                class: "border border-white/50 bg-transparent text-white",
                onClick: resetCall
              }, null, _parent2, _scopeId));
              _push2(`</div></article>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></section></main></div>`);
          } else {
            return [
              createVNode("div", { class: "app-shell" }, [
                b24Loading.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "fixed left-0 right-0 top-0 z-50 h-1 bg-red-100"
                }, [
                  createVNode("div", { class: "h-full w-1/2 animate-pulse brand-action" })
                ])) : createCommentVNode("", true),
                createVNode("header", { class: "sticky top-0 z-40 border-b border-default bg-default/95 px-4 py-3 backdrop-blur" }, [
                  createVNode("div", { class: "flex flex-wrap items-center justify-between gap-3" }, [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode("div", { class: "flex size-9 items-center justify-center rounded-md bg-[var(--brand-red)] text-sm font-black text-white" }, " РЭ "),
                      createVNode("div", null, [
                        createVNode("h1", { class: "text-base font-bold leading-tight text-label" }, "Русский Экспресс"),
                        createVNode("p", { class: "text-xs text-description" }, "Интерактивный скрипт «Реактивация клиентов»")
                      ]),
                      createVNode(_component_B24Badge, {
                        label: "B24 UI",
                        class: "brand-soft"
                      })
                    ]),
                    createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                      b24DealId.value ? (openBlock(), createBlock(_component_B24Badge, {
                        key: 0,
                        label: `Сделка #${b24DealId.value}`,
                        class: "brand-soft"
                      }, null, 8, ["label"])) : (openBlock(), createBlock(_component_B24Badge, {
                        key: 1,
                        label: "Контекст сделки не найден",
                        class: "border border-amber-200 bg-amber-50 text-amber-900"
                      })),
                      createVNode(_component_B24Badge, {
                        label: `Длительность разговора: ${formattedTimer.value}`,
                        class: "border border-default bg-muted text-label"
                      }, null, 8, ["label"]),
                      createVNode(_component_B24Button, {
                        label: "Сбросить",
                        class: "border border-default bg-default text-label",
                        onClick: resetCall
                      })
                    ])
                  ])
                ]),
                createVNode("main", { class: "grid gap-4 p-4 lg:grid-cols-[390px_minmax(0,1fr)]" }, [
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
                            "onUpdate:modelValue": ($event) => agentName.value = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_B24FormField, { label: "Имя клиента" }, {
                        default: withCtx(() => [
                          createVNode(_component_B24Input, {
                            modelValue: clientName.value,
                            "onUpdate:modelValue": ($event) => clientName.value = $event
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
                          class: historyType.value === "lead" ? "brand-action" : "border border-default bg-default text-label",
                          onClick: ($event) => historyType.value = "lead"
                        }, null, 8, ["class", "onClick"])
                      ]),
                      historyType.value === "buyer" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "brand-soft rounded-lg border p-3 field-stack"
                      }, [
                        createVNode(_component_B24FormField, { label: "Направление поездки" }, {
                          default: withCtx(() => [
                            createVNode(_component_B24Input, {
                              modelValue: destination.value,
                              "onUpdate:modelValue": ($event) => destination.value = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_B24FormField, { label: "Когда состоялась поездка" }, {
                          default: withCtx(() => [
                            createVNode(_component_B24Input, {
                              modelValue: tripDate.value,
                              "onUpdate:modelValue": ($event) => tripDate.value = $event
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
                              "onUpdate:modelValue": ($event) => season.value = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_B24FormField, { label: "Направление подбора" }, {
                          default: withCtx(() => [
                            createVNode(_component_B24Input, {
                              modelValue: destinationLead.value,
                              "onUpdate:modelValue": ($event) => destinationLead.value = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ])),
                      createVNode(_component_B24FormField, { label: "Контекст предстоящего путешествия" }, {
                        default: withCtx(() => [
                          createVNode(_component_B24Input, {
                            modelValue: travelContext.value,
                            "onUpdate:modelValue": ($event) => travelContext.value = $event
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
                            createVNode(_component_B24Input, {
                              modelValue: nextContactDate.value,
                              "onUpdate:modelValue": ($event) => nextContactDate.value = $event,
                              type: "date"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_B24FormField, { label: "Заметка для CRM" }, {
                          default: withCtx(() => [
                            createVNode(_component_B24Textarea, {
                              modelValue: crmNotes.value,
                              "onUpdate:modelValue": ($event) => crmNotes.value = $event,
                              rows: 4,
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
                            onClick: saveActivityToB24
                          }, null, 8, ["label", "loading"])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("section", { class: "script-scroll workspace-scroll" }, [
                    createVNode("div", { class: "work-panel mb-4 p-3" }, [
                      createVNode("div", { class: "grid gap-2 sm:grid-cols-3" }, [
                        createVNode("button", {
                          class: ["step-tab", { active: activeStep.value === 1 }],
                          onClick: ($event) => scrollToStep(1)
                        }, "1 Присоединение", 10, ["onClick"]),
                        createVNode("button", {
                          class: ["step-tab", { active: activeStep.value === 2 }],
                          onClick: ($event) => scrollToStep(2)
                        }, "2 Крючок", 10, ["onClick"]),
                        createVNode("button", {
                          class: ["step-tab", { active: activeStep.value === 3 }],
                          onClick: ($event) => scrollToStep(3)
                        }, "3 Сделка", 10, ["onClick"])
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
                            label: b24Saving.value ? "Создаем дело..." : "Завершить звонок",
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
                        createVNode("h2", { class: "text-xl font-bold" }, "Звонок завершен, дело создано"),
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
                            label: "Новый звонок",
                            class: "border border-white/50 bg-transparent text-white",
                            onClick: resetCall
                          })
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ])
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
    const _Error404 = defineAsyncComponent(() => import("./_nuxt/error-404-xclkjmOJ.js"));
    const _Error = defineAsyncComponent(() => import("./_nuxt/error-500-Cav7OpwS.js"));
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
export {
  ImageComponent as I,
  Presence_default as P,
  Teleport_default as T,
  __nuxt_component_0$1 as _,
  Primitive as a,
  _sfc_main$d as b,
  _sfc_main$6 as c,
  _sfc_main$c as d,
  entry_default as default,
  _sfc_main$f as e,
  createContext as f,
  extractPromptText as g,
  get as h,
  getActiveElement as i,
  icons as j,
  injectConfigProviderContext as k,
  isNullish as l,
  resolveIcon as m,
  tv as n,
  useCollection as o,
  useComponentProps as p,
  useForwardExpose as q,
  resolveBaseURL as r,
  useForwardProps as s,
  transformUI as t,
  useAppConfig as u,
  useHead as v,
  useLocale as w,
  useRuntimeConfig as x
};
//# sourceMappingURL=server.mjs.map

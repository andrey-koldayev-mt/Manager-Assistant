import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { Server } from 'node:http';
import path, { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, createError, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, removeResponseHeader, getQuery as getQuery$1, readBody, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getResponseStatus, getRouterParam, getHeader, getResponseStatusText } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/h3/dist/index.mjs';
import { escapeHtml } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/@vue/shared/dist/shared.cjs.js';
import viteNodeEntry_mjs from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/@nuxt/vite-builder/dist/vite-node-entry.mjs';
import { viteNodeFetch } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/@nuxt/vite-builder/dist/vite-node.mjs';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, decodePath, withLeadingSlash, withoutTrailingSlash, encodePath, joinRelativeURL } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/ufo/dist/index.mjs';
import destr, { destr as destr$1 } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/destr/dist/index.mjs';
import { renderToString } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/vue/server-renderer/index.mjs';
import { klona } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/scule/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/unhead/dist/server.mjs';
import { stringify, uneval } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/devalue/index.js';
import { isVNode, isRef, toValue } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/vue/index.mjs';
import { createHooks } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/unstorage/drivers/fs.mjs';
import file_58_47_47_47C_58_47Users_47kolda_47Documents_47GitHub_47Manager_45Assistant_47node_modules_47_64nuxt_47nitro_45server_47dist_47runtime_47utils_47cache_45driver_46js from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import { digest, hash as hash$1 } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/ohash/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/radix3/dist/index.mjs';
import fs, { readFile, mkdir, writeFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/youch-core/build/index.js';
import { Youch } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/source-map/source-map.js';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/errx/dist/index.js';
import _wH6JrtIxmaSoA8lCPWFnE9z4lQeXW6H5z3l5aymEQw from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/@nuxt/vite-builder/dist/fix-stacktrace.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1 } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/pathe/dist/index.mjs';
import { walkResolver } from 'file://C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/unhead/dist/utils.mjs';

const serverAssets = [{"baseName":"server","dir":"C:/Users/kolda/Documents/GitHub/Manager-Assistant/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/kolda/Documents/GitHub/Manager-Assistant","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/kolda/Documents/GitHub/Manager-Assistant/server","watchOptions":{"ignored":[null]}}));
storage.mount('cache:nuxt:payload', file_58_47_47_47C_58_47Users_47kolda_47Documents_47GitHub_47Manager_45Assistant_47node_modules_47_64nuxt_47nitro_45server_47dist_47runtime_47utils_47cache_45driver_46js({"driver":"file:///C:/Users/kolda/Documents/GitHub/Manager-Assistant/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js","base":"C:/Users/kolda/Documents/GitHub/Manager-Assistant/.nuxt/cache/nuxt/payload"}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/Users/kolda/Documents/GitHub/Manager-Assistant/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/Users/kolda/Documents/GitHub/Manager-Assistant/.nuxt/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"C:/Users/kolda/Documents/GitHub/Manager-Assistant/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {},
  "version": "2.8.0",
  "b24ui": {
    "tv": {
      "twMergeConfig": {}
    }
  }
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/api/**": {
        "headers": {
          "cache-control": "no-store"
        }
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {}
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function isPathInScope(pathname, base) {
  let canonical;
  try {
    const pre = pathname.replace(/%2f/gi, "/").replace(/%5c/gi, "\\");
    canonical = new URL(pre, "http://_").pathname;
  } catch {
    return false;
  }
  return !base || canonical === base || canonical.startsWith(base + "/");
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
	
	if (hasReqHeader(event, "accept", "text/html")) {
		return false;
	}
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return !!(value && typeof value === "string" && value.toLowerCase().includes(includes));
}

const iframeStorageBridge = (nonce) => `
(function () {
  const NONCE = ${JSON.stringify(nonce)};
  const memoryStore = Object.create(null);

  const post = (type, payload) => {
    window.parent.postMessage({ type, nonce: NONCE, ...payload }, '*');
  };

  const isValid = (data) => data && data.nonce === NONCE;

  const mockStorage = {
    getItem(key) {
      return Object.hasOwn(memoryStore, key)
        ? memoryStore[key]
        : null;
    },
    setItem(key, value) {
      const v = String(value);
      memoryStore[key] = v;
      post('storage-set', { key, value: v });
    },
    removeItem(key) {
      delete memoryStore[key];
      post('storage-remove', { key });
    },
    clear() {
      for (const key of Object.keys(memoryStore))
        delete memoryStore[key];
      post('storage-clear', {});
    },
    key(index) {
      const keys = Object.keys(memoryStore);
      return keys[index] ?? null;
    },
    get length() {
      return Object.keys(memoryStore).length;
    }
  };

  const defineLocalStorage = () => {
    try {
      Object.defineProperty(window, 'localStorage', {
        value: mockStorage,
        writable: false,
        configurable: true
      });
    } catch {
      window.localStorage = mockStorage;
    }
  };

  defineLocalStorage();

  window.addEventListener('message', (event) => {
    const data = event.data;
    if (!isValid(data) || data.type !== 'storage-sync-data') return;

    const incoming = data.data || {};
    for (const key of Object.keys(incoming))
      memoryStore[key] = incoming[key];

    if (typeof window.initTheme === 'function')
      window.initTheme();
    window.dispatchEvent(new Event('storage-ready'));
  });

  // Clipboard API is unavailable in data: URL iframe, so we use postMessage
  document.addEventListener('DOMContentLoaded', function() {
    window.copyErrorMessage = function(button) {
      post('clipboard-copy', { text: button.dataset.errorText });
      button.classList.add('copied');
      setTimeout(function() { button.classList.remove('copied'); }, 2000);
    };
  });

  post('storage-sync-request', {});
})();
`;
const parentStorageBridge = (nonce) => `
(function () {
  const host = document.querySelector('nuxt-error-overlay');
  if (!host) return;

  const NONCE = ${JSON.stringify(nonce)};
  const isValid = (data) => data && data.nonce === NONCE;

  // Handle clipboard copy from iframe
  window.addEventListener('message', function(e) {
    if (isValid(e) && e.data.type === 'clipboard-copy') {
      navigator.clipboard.writeText(e.data.text).catch(function() {});
    }
  });

  const collectLocalStorage = () => {
    const all = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k != null) all[k] = localStorage.getItem(k);
    }
    return all;
  };

  const attachWhenReady = () => {
    const root = host.shadowRoot;
    if (!root)
      return false;
    const iframe = root.getElementById('frame');
    if (!iframe || !iframe.contentWindow)
      return false;

    const handlers = {
      'storage-set': (d) => localStorage.setItem(d.key, d.value),
      'storage-remove': (d) => localStorage.removeItem(d.key),
      'storage-clear': () => localStorage.clear(),
      'storage-sync-request': () => {
        iframe.contentWindow.postMessage({
          type: 'storage-sync-data',
          data: collectLocalStorage(),
          nonce: NONCE
        }, '*');
      }
    };

    window.addEventListener('message', (event) => {
      const data = event.data;
      if (!isValid(data)) return;
      const fn = handlers[data.type];
      if (fn) fn(data);
    });

    return true;
  };

  if (attachWhenReady())
    return;

  const obs = new MutationObserver(() => {
    if (attachWhenReady())
      obs.disconnect();
  });

  obs.observe(host, { childList: true, subtree: true });
})();
`;
const errorCSS = `
:host {
  --preview-width: 240px;
  --preview-height: 180px;
  --base-width: 1200px;
  --base-height: 900px;
  --z-base: 999999998;
  --error-pip-left: auto;
  --error-pip-top: auto;
  --error-pip-right: 5px;
  --error-pip-bottom: 5px;
  --error-pip-origin: bottom right;
  --app-preview-left: auto;
  --app-preview-top: auto;
  --app-preview-right: 5px;
  --app-preview-bottom: 5px;
  all: initial;
  display: contents;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
#frame {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  z-index: var(--z-base);
}
#frame[inert] {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: var(--error-pip-right);
  bottom: var(--error-pip-bottom);
  width: var(--base-width);
  height: var(--base-height);
  transform: scale(calc(240 / 1200));
  transform-origin: var(--error-pip-origin);
  overflow: hidden;
  border-radius: calc(1200 * 8px / 240);
}
#preview {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: var(--app-preview-right);
  bottom: var(--app-preview-bottom);
  width: var(--preview-width);
  height: var(--preview-height);
  overflow: hidden;
  border-radius: 6px;
  pointer-events: none;
  z-index: var(--z-base);
  background: white;
  display: none;
}
#preview iframe {
  transform-origin: var(--error-pip-origin);
}
#frame:not([inert]) + #preview {
  display: block;
}
#toggle {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: calc(var(--app-preview-right) - 3px);
  bottom: calc(var(--app-preview-bottom) - 3px);
  width: var(--preview-width);
  height: var(--preview-height);
  background: none;
  border: 3px solid #00DC82;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s, box-shadow 0.2s;
  z-index: calc(var(--z-base) + 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
#toggle:hover,
#toggle:focus {
  opacity: 1;
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.6);
}
#toggle:focus-visible {
  outline: 3px solid #00DC82;
  outline-offset: 0;
  box-shadow: 0 0 24px rgba(0, 220, 130, 0.8);
}
#frame[inert] ~ #toggle {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: calc(var(--error-pip-right) - 3px);
  bottom: calc(var(--error-pip-bottom) - 3px);
  cursor: grab;
}
:host(.dragging) #frame[inert] ~ #toggle {
  cursor: grabbing;
}
#frame:not([inert]) ~ #toggle,
#frame:not([inert]) + #preview {
  cursor: grab;
}
:host(.dragging-preview) #frame:not([inert]) ~ #toggle,
:host(.dragging-preview) #frame:not([inert]) + #preview {
  cursor: grabbing;
}

#pip-close {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 16px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
}
#pip-close:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}

#pip-restore {
  position: fixed;
  right: 16px;
  bottom: 16px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 2px solid #00DC82;
  background: #111;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  z-index: calc(var(--z-base) + 2);
  cursor: grab;
}
#pip-restore:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}
:host(.dragging-restore) #pip-restore {
  cursor: grabbing;
}

#frame[hidden],
#toggle[hidden],
#preview[hidden],
#pip-restore[hidden],
#pip-close[hidden] {
  display: none !important;
}

@media (prefers-reduced-motion: reduce) {
  #toggle {
    transition: none;
  }
}
`;
function webComponentScript(base64HTML, startMinimized) {
	return `
(function () {
  try {
    // =========================
    // Host + Shadow
    // =========================
    const host = document.querySelector('nuxt-error-overlay');
    if (!host)
      return;
    const shadow = host.attachShadow({ mode: 'open' });

    // =========================
    // DOM helpers
    // =========================
    const el = (tag) => document.createElement(tag);
    const on = (node, type, fn, opts) => node.addEventListener(type, fn, opts);
    const hide = (node, v) => node.toggleAttribute('hidden', !!v);
    const setVar = (name, value) => host.style.setProperty(name, value);
    const unsetVar = (name) => host.style.removeProperty(name);

    // =========================
    // Create DOM
    // =========================
    const style = el('style');
    style.textContent = ${JSON.stringify(errorCSS)};

    const iframe = el('iframe');
    iframe.id = 'frame';
    iframe.src = 'data:text/html;base64,${base64HTML}';
    iframe.title = 'Detailed error stack trace';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-top-navigation-by-user-activation');

    const preview = el('div');
    preview.id = 'preview';

    const toggle = el('div');
    toggle.id = 'toggle';
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('tabindex', '0');
    toggle.innerHTML = '<span class="sr-only">Toggle detailed error view</span>';

    const liveRegion = el('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';

    const pipCloseButton = el('button');
    pipCloseButton.id = 'pip-close';
    pipCloseButton.setAttribute('type', 'button');
    pipCloseButton.setAttribute('aria-label', 'Hide error preview overlay');
    pipCloseButton.innerHTML = '&times;';
    pipCloseButton.hidden = true;
    toggle.appendChild(pipCloseButton);

    const pipRestoreButton = el('button');
    pipRestoreButton.id = 'pip-restore';
    pipRestoreButton.setAttribute('type', 'button');
    pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
    pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
    pipRestoreButton.hidden = true;

    // Order matters: #frame + #preview adjacency
    shadow.appendChild(style);
    shadow.appendChild(liveRegion);
    shadow.appendChild(iframe);
    shadow.appendChild(preview);
    shadow.appendChild(toggle);
    shadow.appendChild(pipRestoreButton);

    // =========================
    // Constants / keys
    // =========================
    const POS_KEYS = {
      position: 'nuxt-error-overlay:position',
      hiddenPretty: 'nuxt-error-overlay:error-pip:hidden',
      hiddenPreview: 'nuxt-error-overlay:app-preview:hidden'
    };

    const CSS_VARS = {
      pip: {
        left: '--error-pip-left',
        top: '--error-pip-top',
        right: '--error-pip-right',
        bottom: '--error-pip-bottom'
      },
      preview: {
        left: '--app-preview-left',
        top: '--app-preview-top',
        right: '--app-preview-right',
        bottom: '--app-preview-bottom'
      }
    };

    const MIN_GAP = 5;
    const DRAG_THRESHOLD = 2;

    // =========================
    // Local storage safe access + state
    // =========================
    let storageReady = true;
    let isPrettyHidden = false;
    let isPreviewHidden = false;

    const safeGet = (k) => {
      try {
        return localStorage.getItem(k);
      } catch {
        return null;
      }
    };

    const safeSet = (k, v) => {
      if (!storageReady) 
        return;
      try {
        localStorage.setItem(k, v);
      } catch {}
    };

    // =========================
    // Sizing helpers
    // =========================
    const vvSize = () => {
      const v = window.visualViewport;
      return v ? { w: v.width, h: v.height } : { w: window.innerWidth, h: window.innerHeight };
    };

    const previewSize = () => {
      const styles = getComputedStyle(host);
      const w = parseFloat(styles.getPropertyValue('--preview-width')) || 240;
      const h = parseFloat(styles.getPropertyValue('--preview-height')) || 180;
      return { w, h };
    };

    const sizeForTarget = (target) => {
      if (!target)
        return previewSize();
      const rect = target.getBoundingClientRect();
      if (rect.width && rect.height)
        return { w: rect.width, h: rect.height };
      return previewSize();
    };

    // =========================
    // Dock model + offset/alignment calculations
    // =========================
    const dock = { edge: null, offset: null, align: null, gap: null };

    const maxOffsetFor = (edge, size) => {
      const vv = vvSize();
      if (edge === 'left' || edge === 'right')
        return Math.max(MIN_GAP, vv.h - size.h - MIN_GAP);
      return Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
    };

    const clampOffset = (edge, value, size) => {
      const max = maxOffsetFor(edge, size);
      return Math.min(Math.max(value, MIN_GAP), max);
    };

    const updateDockAlignment = (size) => {
      if (!dock.edge || dock.offset == null)
        return;
      const max = maxOffsetFor(dock.edge, size);
      if (dock.offset <= max / 2) {
        dock.align = 'start';
        dock.gap = dock.offset;
      } else {
        dock.align = 'end';
        dock.gap = Math.max(0, max - dock.offset);
      }
    };

    const appliedOffsetFor = (size) => {
      if (!dock.edge || dock.offset == null)
        return null;
      const max = maxOffsetFor(dock.edge, size);

      if (dock.align === 'end' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, max - dock.gap, size);
      }
      if (dock.align === 'start' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, dock.gap, size);
      }
      return clampOffset(dock.edge, dock.offset, size);
    };

    const nearestEdgeAt = (x, y) => {
      const { w, h } = vvSize();
      const d = { left: x, right: w - x, top: y, bottom: h - y };
      return Object.keys(d).reduce((a, b) => (d[a] < d[b] ? a : b));
    };

    const cornerDefaultDock = () => {
      const vv = vvSize();
      const size = previewSize();
      const offset = Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
      return { edge: 'bottom', offset };
    };

    const currentTransformOrigin = () => {
      if (!dock.edge) return null;
      if (dock.edge === 'left' || dock.edge === 'top')
        return 'top left';
      if (dock.edge === 'right')
        return 'top right';
      return 'bottom left';
    };

    // =========================
    // Persist / load dock
    // =========================
    const loadDock = () => {
      const raw = safeGet(POS_KEYS.position);
      if (!raw)
        return;
      try {
        const parsed = JSON.parse(raw);
        const { edge, offset, align, gap } = parsed || {};
        if (!['left', 'right', 'top', 'bottom'].includes(edge))
          return;
        if (typeof offset !== 'number')
          return;

        dock.edge = edge;
        dock.offset = clampOffset(edge, offset, previewSize());
        dock.align = align === 'start' || align === 'end' ? align : null;
        dock.gap = typeof gap === 'number' ? gap : null;

        if (!dock.align || dock.gap == null)
          updateDockAlignment(previewSize());
      } catch {}
    };

    const persistDock = () => {
      if (!dock.edge || dock.offset == null)
        return; 
      safeSet(POS_KEYS.position, JSON.stringify({
        edge: dock.edge,
        offset: dock.offset,
        align: dock.align,
        gap: dock.gap
      }));
    };

    // =========================
    // Apply dock
    // =========================
    const dockToVars = (vars) => ({
      set: (side, v) => host.style.setProperty(vars[side], v),
      clear: (side) => host.style.removeProperty(vars[side])
    });

    const dockToEl = (node) => ({
      set: (side, v) => { node.style[side] = v; },
      clear: (side) => { node.style[side] = ''; }
    });

    const applyDock = (target, size, opts) => {
      if (!dock.edge || dock.offset == null) {
        target.clear('left');
        target.clear('top');
        target.clear('right');
        target.clear('bottom');
        return;
      }

      target.set('left', 'auto');
      target.set('top', 'auto');
      target.set('right', 'auto');
      target.set('bottom', 'auto');

      const applied = appliedOffsetFor(size);

      if (dock.edge === 'left') {
        target.set('left', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'right') {
        target.set('right', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'top') {
        target.set('top', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      } else {
        target.set('bottom', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      }

      if (!opts || opts.persist !== false)
        persistDock();
    };

    const applyDockAll = (opts) => {
      applyDock(dockToVars(CSS_VARS.pip), previewSize(), opts);
      applyDock(dockToVars(CSS_VARS.preview), previewSize(), opts);
      applyDock(dockToEl(pipRestoreButton), sizeForTarget(pipRestoreButton), opts);
    };

    const repaintToDock = () => {
      if (!dock.edge || dock.offset == null)
        return;
      const origin = currentTransformOrigin();
      if (origin)
        setVar('--error-pip-origin', origin);
      else 
        unsetVar('--error-pip-origin');
      applyDockAll({ persist: false });
    };

    // =========================
    // Hidden state + UI
    // =========================
    const loadHidden = () => {
      const rawPretty = safeGet(POS_KEYS.hiddenPretty);
      if (rawPretty != null)
        isPrettyHidden = rawPretty === '1' || rawPretty === 'true';
      const rawPreview = safeGet(POS_KEYS.hiddenPreview);
      if (rawPreview != null)
        isPreviewHidden = rawPreview === '1' || rawPreview === 'true';
    };

    const setPrettyHidden = (v) => {
      isPrettyHidden = !!v;
      safeSet(POS_KEYS.hiddenPretty, isPrettyHidden ? '1' : '0');
      updateUI();
    };

    const setPreviewHidden = (v) => {
      isPreviewHidden = !!v;
      safeSet(POS_KEYS.hiddenPreview, isPreviewHidden ? '1' : '0');
      updateUI();
    };

    const isMinimized = () => iframe.hasAttribute('inert');

    const setMinimized = (v) => {
      if (v) {
        iframe.setAttribute('inert', '');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        iframe.removeAttribute('inert');
        toggle.setAttribute('aria-expanded', 'true');
      }
    };

    const setRestoreLabel = (kind) => {
      if (kind === 'pretty') {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
      } else {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error page</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error page');
      }
    };

    const updateUI = () => {
      const minimized = isMinimized();
      const showPiP = minimized && !isPrettyHidden;
      const showPreview = !minimized && !isPreviewHidden;
      const pipHiddenByUser = minimized && isPrettyHidden;
      const previewHiddenByUser = !minimized && isPreviewHidden;
      const showToggle = minimized ? showPiP : showPreview;
      const showRestore = pipHiddenByUser || previewHiddenByUser;

      hide(iframe, pipHiddenByUser);
      hide(preview, !showPreview);
      hide(toggle, !showToggle);
      hide(pipCloseButton, !showToggle);
      hide(pipRestoreButton, !showRestore);

      pipCloseButton.setAttribute('aria-label', minimized ? 'Hide error overlay' : 'Hide error page preview');

      if (pipHiddenByUser)
        setRestoreLabel('pretty');
      else if (previewHiddenByUser)
        setRestoreLabel('preview');

      host.classList.toggle('pip-hidden', isPrettyHidden);
      host.classList.toggle('preview-hidden', isPreviewHidden);
    };

    // =========================
    // Preview snapshot
    // =========================
    const updatePreview = () => {
      try {
        let previewIframe = preview.querySelector('iframe');
        if (!previewIframe) {
          previewIframe = el('iframe');
          previewIframe.style.cssText = 'width: 1200px; height: 900px; transform: scale(0.2); transform-origin: top left; border: none;';
          previewIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
          preview.appendChild(previewIframe);
        }

        const doctype = document.doctype ? '<!DOCTYPE ' + document.doctype.name + '>' : '';
        const cleanedHTML = document.documentElement.outerHTML
          .replace(/<nuxt-error-overlay[^>]*>.*?<\\/nuxt-error-overlay>/gs, '')
          .replace(/<script[^>]*>.*?<\\/script>/gs, '');

        const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(doctype + cleanedHTML);
        iframeDoc.close();
      } catch (err) {
        console.error('Failed to update preview:', err);
      }
    };

    // =========================
    // View toggling
    // =========================
    const toggleView = () => {
      if (isMinimized()) {
        updatePreview();
        setMinimized(false);
        liveRegion.textContent = 'Showing detailed error view';
        setTimeout(() => { 
          try { 
            iframe.contentWindow.focus();
          } catch {}
        }, 100);
      } else {
        setMinimized(true);
        liveRegion.textContent = 'Showing error page';
        repaintToDock();
        void iframe.offsetWidth;
      }
      updateUI();
    };

    // =========================
    // Dragging (unified, rAF throttled)
    // =========================
    let drag = null;
    let rafId = null;
    let suppressToggleClick = false;
    let suppressRestoreClick = false;

    const beginDrag = (e) => {
      if (drag) 
        return;

      if (!dock.edge || dock.offset == null) {
        const def = cornerDefaultDock();
        dock.edge = def.edge;
        dock.offset = def.offset;
        updateDockAlignment(previewSize());
      }

      const isRestoreTarget = e.currentTarget === pipRestoreButton;

      drag = {
        kind: isRestoreTarget ? 'restore' : (isMinimized() ? 'pip' : 'preview'),
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        lastX: e.clientX,
        lastY: e.clientY,
        moved: false,
        target: e.currentTarget
      };

      drag.target.setPointerCapture(e.pointerId);

      if (drag.kind === 'restore')
        host.classList.add('dragging-restore');
      else 
        host.classList.add(drag.kind === 'pip' ? 'dragging' : 'dragging-preview');

      e.preventDefault();
    };

    const moveDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      drag.lastX = e.clientX;
      drag.lastY = e.clientY;
      
      const dx = drag.lastX - drag.startX;
      const dy = drag.lastY - drag.startY;

      if (!drag.moved && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
        drag.moved = true;
      }

      if (!drag.moved)
        return;
      if (rafId)
        return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const edge = nearestEdgeAt(drag.lastX, drag.lastY);
        const size = sizeForTarget(drag.target);

        let offset;
        if (edge === 'left' || edge === 'right') {
          const top = drag.lastY - (size.h / 2);
          offset = clampOffset(edge, Math.round(top), size);
        } else {
          const left = drag.lastX - (size.w / 2);
          offset = clampOffset(edge, Math.round(left), size);
        }

        dock.edge = edge;
        dock.offset = offset;
        updateDockAlignment(size);

        const origin = currentTransformOrigin();
        setVar('--error-pip-origin', origin || 'bottom right');

        applyDockAll({ persist: false });
      });
    };

    const endDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      const endedKind = drag.kind;
      drag.target.releasePointerCapture(e.pointerId);

      if (endedKind === 'restore')
        host.classList.remove('dragging-restore');
      else 
        host.classList.remove(endedKind === 'pip' ? 'dragging' : 'dragging-preview');

      const didMove = drag.moved;
      drag = null;

      if (didMove) {
        persistDock();
        if (endedKind === 'restore')
          suppressRestoreClick = true;
        else 
          suppressToggleClick = true;
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const bindDragTarget = (node) => {
      on(node, 'pointerdown', beginDrag);
      on(node, 'pointermove', moveDrag);
      on(node, 'pointerup', endDrag);
      on(node, 'pointercancel', endDrag);
    };

    bindDragTarget(toggle);
    bindDragTarget(pipRestoreButton);

    // =========================
    // Events (toggle / close / restore)
    // =========================
    on(toggle, 'click', (e) => {
      if (suppressToggleClick) {
        e.preventDefault();
        suppressToggleClick = false;
        return;
      }
      toggleView();
    });

    on(toggle, 'keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleView();
      }
    });

    on(pipCloseButton, 'click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized())
        setPrettyHidden(true);
      else
        setPreviewHidden(true);
    });

    on(pipCloseButton, 'pointerdown', (e) => {
      e.stopPropagation();
    });

    on(pipRestoreButton, 'click', (e) => {
      if (suppressRestoreClick) {
        e.preventDefault();
        suppressRestoreClick = false;
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized()) 
        setPrettyHidden(false);
      else 
        setPreviewHidden(false);
    });

    // =========================
    // Lifecycle: load / sync / repaint
    // =========================
    const loadState = () => {
      loadDock();
      loadHidden();

      if (isPrettyHidden && !isMinimized())
        setMinimized(true);

      updateUI();
      repaintToDock();
    };

    loadState();

    on(window, 'storage-ready', () => {
      storageReady = true;
      loadState();
    });

    const onViewportChange = () => repaintToDock();

    on(window, 'resize', onViewportChange);

    if (window.visualViewport) {
      on(window.visualViewport, 'resize', onViewportChange);
      on(window.visualViewport, 'scroll', onViewportChange);
    }

    // initial preview
    setTimeout(updatePreview, 100);

    // initial minimized option
    if (${startMinimized}) {
      setMinimized(true);
      repaintToDock();
      void iframe.offsetWidth;
      updateUI();
    }
  } catch (err) {
    console.error('Failed to initialize Nuxt error overlay:', err);
  }
})();
`;
}
function generateErrorOverlayHTML(html, options) {
	const nonce = Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join("");
	const errorPage = html.replace("<head>", `<head><script>${iframeStorageBridge(nonce)}<\/script>`);
	const base64HTML = Buffer.from(errorPage, "utf8").toString("base64");
	return `
    <script>${parentStorageBridge(nonce)}<\/script>
    <nuxt-error-overlay></nuxt-error-overlay>
    <script>${webComponentScript(base64HTML, options?.startMinimized ?? false)}<\/script>
  `;
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled || isJsonRequest(event)) {
		
		return;
	}
	
	const defaultRes = await defaultHandler(error, event, { json: true });
	
	const status = error.status || error.statusCode || 500;
	if (status === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
		
		defaultRes.body.stack = defaultRes.body.stack.join("\n");
	}
	const errorObject = defaultRes.body;
	
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	
	errorObject.message = error.unhandled ? errorObject.message || "Server Error" : error.message || errorObject.message || "Server Error";
	
	errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	
	const reqHeaders = getRequestHeaders(event);
	
	const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
	
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject), {
		headers: {
			...reqHeaders,
			"x-nuxt-error": "true"
		},
		redirect: "manual"
	}).catch(() => null);
	if (event.handled) {
		return;
	}
	
	if (!res) {
		const { template } = await Promise.resolve().then(function () { return error500; });
		{
			
			errorObject.description = errorObject.message;
		}
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		return send(event, template(errorObject));
	}
	const html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === "set-cookie") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	if (!globalThis._importMeta_.test && typeof html === "string") {
		const prettyResponse = await defaultHandler(error, event, { json: false });
		if (typeof prettyResponse.body === "string") {
			return send(event, html.replace("</body>", `${generateErrorOverlayHTML(prettyResponse.body, { startMinimized: 300 <= status && status < 500 })}</body>`));
		}
	}
	return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _kr2s80wv6y1ICwJ1H33AkabiiTOBI5fBeyFwVtDyrtw = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const rootDir = "C:/Users/kolda/Documents/GitHub/Manager-Assistant";

const appHead = {"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"}],"link":[],"style":[],"script":[],"noscript":[],"title":"Русский Экспресс | Ассистент менеджера"};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt","class":"isolate"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

const devReducers = {
	VNode: (data) => isVNode(data) ? {
		type: data.type,
		props: data.props
	} : undefined,
	URL: (data) => data instanceof URL ? data.toString() : undefined,
	Symbol: (data) => typeof data === "symbol" ? data.description ?? "" : undefined
};
const asyncContext = getContext("nuxt-dev", {
	asyncContext: true,
	AsyncLocalStorage
});
const _fs1Lyyzrtm3OvezD2KMtpMY07exqCXf3AsWGrPDbQu0 = (nitroApp) => {
	const handler = nitroApp.h3App.handler;
	nitroApp.h3App.handler = (event) => {
		return asyncContext.callAsync({
			logs: [],
			event
		}, () => handler(event));
	};
	onConsoleLog((_log) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		const rawStack = captureRawStackTrace();
		if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
			return;
		}
		const trace = [];
		let filename = "";
		for (const entry of parseRawStackTrace(rawStack)) {
			if (entry.source === globalThis._importMeta_.url) {
				continue;
			}
			if (EXCLUDE_TRACE_RE.test(entry.source)) {
				continue;
			}
			filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
			trace.push({
				...entry,
				source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
			});
		}
		const log = {
			..._log,
			
			filename,
			
			stack: trace
		};
		
		ctx.logs.push(log);
	});
	nitroApp.hooks.hook("afterResponse", () => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		return nitroApp.hooks.callHook("dev:ssr-logs", {
			logs: ctx.logs,
			path: ctx.event.path
		});
	});
	
	nitroApp.hooks.hook("render:html", (htmlContext) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		try {
			const reducers = Object.assign(Object.create(null), devReducers, ctx.event.context["~payloadReducers"]);
			htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
		} catch (e) {
			const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
			console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#payload.`);
		}
	});
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
	consola$1.addReporter({ log(logObj) {
		callback(logObj);
	} });
	consola$1.wrapConsole();
}

function defineNitroPlugin(def) {
  return def;
}

const storePath = path.resolve(process.cwd(), "data", "sla-auto-control.json");
const MOSCOW_OFFSET_MINUTES$1 = 3 * 60;
const DEFAULT_SLA_AUTO_CONTROL_CONFIG = {
  enabled: true,
  startDate: "2026-06-06",
  time: "00:00",
  intervalDays: 1,
  lastRunAt: null
};
const DATE_PATTERN$1 = /^\d{4}-\d{2}-\d{2}$/;
const TIME_PATTERN = /^([01]\d|2[0-3]):([0-5]\d)$/;
function validateConfig(config) {
  if (!DATE_PATTERN$1.test(config.startDate)) throw new Error("\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0430\u044F \u0434\u0430\u0442\u0430 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430");
  if (!TIME_PATTERN.test(config.time)) throw new Error("\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430");
  if (!Number.isInteger(config.intervalDays) || config.intervalDays < 1 || config.intervalDays > 365) {
    throw new Error("\u041F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u043D\u043E\u0441\u0442\u044C \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043E\u0442 1 \u0434\u043E 365 \u0434\u043D\u0435\u0439");
  }
  return config;
}
function toMoscowDateString(date) {
  const local = new Date(date.getTime() + MOSCOW_OFFSET_MINUTES$1 * 60 * 1e3);
  const pad = (value) => String(value).padStart(2, "0");
  return `${local.getUTCFullYear()}-${pad(local.getUTCMonth() + 1)}-${pad(local.getUTCDate())}`;
}
function addDays(dateString, days) {
  const date = /* @__PURE__ */ new Date(`${dateString}T00:00:00.000Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}
function moscowDateTimeToUtcIso(dateString, time) {
  return (/* @__PURE__ */ new Date(`${dateString}T${time}:00.000+03:00`)).toISOString();
}
function getMoscowDayRange(daysBeforeNow, now = /* @__PURE__ */ new Date()) {
  const date = addDays(toMoscowDateString(now), -2);
  return {
    createdFrom: moscowDateTimeToUtcIso(date, "00:00"),
    createdTo: (/* @__PURE__ */ new Date(`${date}T23:59:59.999+03:00`)).toISOString()
  };
}
function getDayBeforePreviousMoscowDayRange(now = /* @__PURE__ */ new Date()) {
  return getMoscowDayRange(2, now);
}
function getNextSlaAutoRunAt(config, now = /* @__PURE__ */ new Date()) {
  if (!config.enabled) return null;
  let candidateDate = config.startDate;
  let candidate = new Date(moscowDateTimeToUtcIso(candidateDate, config.time));
  while (candidate.getTime() <= now.getTime()) {
    candidateDate = addDays(candidateDate, config.intervalDays);
    candidate = new Date(moscowDateTimeToUtcIso(candidateDate, config.time));
  }
  return candidate.toISOString();
}
async function readSlaAutoControlConfig() {
  try {
    const raw = await fs.readFile(storePath, "utf8");
    return validateConfig({ ...DEFAULT_SLA_AUTO_CONTROL_CONFIG, ...JSON.parse(raw) });
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    await writeSlaAutoControlConfig(DEFAULT_SLA_AUTO_CONTROL_CONFIG);
    return DEFAULT_SLA_AUTO_CONTROL_CONFIG;
  }
}
async function writeSlaAutoControlConfig(config) {
  const normalized = validateConfig(config);
  await fs.mkdir(path.dirname(storePath), { recursive: true });
  await fs.writeFile(storePath, JSON.stringify(normalized, null, 2), "utf8");
  return normalized;
}
function toSlaAutoControlState(config, now = /* @__PURE__ */ new Date()) {
  return {
    ...config,
    nextRunAt: getNextSlaAutoRunAt(config, now)
  };
}

const TRASH_PATTERNS = ["test", "\u0442\u0435\u0441\u0442", "demo", "example", "qwerty", "asdf", "unknown", "\u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E", "\u043D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"];
const TRASH_PATTERN_SET = new Set(TRASH_PATTERNS);
const TRASH_EMAIL_DOMAINS = /* @__PURE__ */ new Set(["example.com", "test.ru", "mailinator.com"]);
function normalizeText$2(value) {
  return value.trim().replace(/\s+/g, " ");
}
function normalizeForSearch(value) {
  return normalizeText$2(value).toLowerCase();
}
function hasEmoji(value) {
  return /[\p{Extended_Pictographic}\u{1f1e6}-\u{1f1ff}]/u.test(value);
}
function hasTrashText(value) {
  const normalized = normalizeForSearch(value);
  const tokens = normalized.split(/[\s._@+-]+/).filter(Boolean);
  if (normalized.includes("\u043D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445")) return true;
  return tokens.some((token) => TRASH_PATTERN_SET.has(token));
}
function isCyrillicName(value) {
  return /^[А-ЯЁа-яё][А-ЯЁа-яё\s'-]*$/.test(value);
}
function hasCorrectNameCase(value) {
  return normalizeText$2(value).split(/\s+/).filter(Boolean).every((part) => {
    var _a;
    const clean = part.replace(/^[-']+|[-']+$/g, "");
    if (!clean) return true;
    const firstLetter = (_a = clean[0]) != null ? _a : "";
    return firstLetter === firstLetter.toLocaleUpperCase("ru-RU") && clean.slice(1) === clean.slice(1).toLocaleLowerCase("ru-RU");
  });
}
function isPlaceholderContact(contact) {
  const fullName = getContactName(contact);
  return /^Контакт\s+#\d+\s*-\s*$/i.test(fullName);
}
function getFirstMultiFieldValue(value) {
  var _a, _b;
  if (typeof value === "string") return normalizeText$2(value) || null;
  if (!Array.isArray(value)) return null;
  for (const item of value) {
    const raw = (_b = (_a = item.value) != null ? _a : item.VALUE) != null ? _b : null;
    if (raw && normalizeText$2(raw)) return normalizeText$2(raw);
  }
  return null;
}
function normalizePhone(value) {
  if (!value) return null;
  const hasPlus = value.trim().startsWith("+");
  let digits = value.replace(/\D/g, "");
  if (/^(\d)\1+$/.test(digits)) return null;
  if (digits.length === 11 && digits.startsWith("8")) digits = `7${digits.slice(1)}`;
  if (digits.length === 10) digits = `7${digits}`;
  if (digits.length < 10 || digits.length > 15) return null;
  if (/^(\d)\1+$/.test(digits)) return null;
  return `${hasPlus || digits.startsWith("7") ? "+" : ""}${digits}`;
}
function normalizeEmail(value) {
  var _a;
  if (!value) return null;
  const email = normalizeText$2(value).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  const domain = (_a = email.split("@")[1]) != null ? _a : "";
  if (TRASH_EMAIL_DOMAINS.has(domain)) return null;
  return email;
}
function getResponsibleId$3(contact) {
  const value = contact.assignedById;
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}
function getResponsibleName$3(contact, users) {
  const id = getResponsibleId$3(contact);
  if (id == null) return "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D";
  const user = users.get(id);
  if (!user) return `ID ${id}`;
  return [user.name, user.lastName].filter(Boolean).join(" ").trim() || `ID ${id}`;
}
function getContactName(contact) {
  var _a;
  const parts = [contact.lastName, contact.name, contact.secondName].filter((part) => Boolean(part == null ? void 0 : part.trim()));
  if (parts.length > 0) return parts.map(normalizeText$2).join(" ");
  return normalizeText$2((_a = contact.title) != null ? _a : "") || `\u041A\u043E\u043D\u0442\u0430\u043A\u0442 ${contact.id}`;
}
function shouldAnalyzeContact(contact) {
  return !isPlaceholderContact(contact);
}
function buildDataQualityRow(params) {
  var _a, _b, _c, _d, _e, _f;
  const { contact, users, checkedAt } = params;
  const errors = [];
  const warnings = [];
  const firstName = normalizeText$2((_a = contact.name) != null ? _a : "");
  const lastName = normalizeText$2((_b = contact.lastName) != null ? _b : "");
  const contactName = getContactName(contact);
  const rawPhone = getFirstMultiFieldValue((_c = contact.phone) != null ? _c : contact.PHONE);
  const rawEmail = getFirstMultiFieldValue((_d = contact.email) != null ? _d : contact.EMAIL);
  const normalizedPhone = normalizePhone(rawPhone);
  const normalizedEmail = normalizeEmail(rawEmail);
  if (!firstName && !lastName) {
    errors.push("\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u044B \u0438\u043C\u044F \u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044F");
  } else {
    for (const [label, value] of [
      ["\u0418\u043C\u044F", firstName],
      ["\u0424\u0430\u043C\u0438\u043B\u0438\u044F", lastName]
    ]) {
      if (!value) {
        if (label === "\u0418\u043C\u044F") warnings.push(`${label} \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E`);
        continue;
      }
      if (value.length <= 1 || !/\p{L}/u.test(value)) errors.push(`${label} \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043C\u0443\u0441\u043E\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435`);
      if (hasEmoji(value)) errors.push(`${label} \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u044D\u043C\u043E\u0434\u0437\u0438`);
      if (!isCyrillicName(value)) errors.push(`${label} \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u043A\u0438\u0440\u0438\u043B\u043B\u0438\u0446\u0435\u0439`);
      if (!hasCorrectNameCase(value)) warnings.push(`${label} \u0434\u043E\u043B\u0436\u043D\u043E \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0431\u0443\u043A\u0432\u044B`);
      if (hasTrashText(value)) errors.push(`${label} \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0435 \u0438\u043B\u0438 \u043C\u0443\u0441\u043E\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435`);
    }
  }
  if (!rawPhone && !rawEmail) {
    errors.push("\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438\u043B\u0438 email");
  }
  if (rawPhone && !normalizedPhone) errors.push("\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D");
  if (rawEmail && !normalizedEmail) errors.push("Email \u043D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D");
  if (rawPhone && hasTrashText(rawPhone)) errors.push("\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0435 \u0438\u043B\u0438 \u043C\u0443\u0441\u043E\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435");
  if (!normalizedPhone && !normalizedEmail) errors.push("\u041D\u0435\u0442 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438\u043B\u0438 email");
  const score = 100 - errors.length * 20 - warnings.length * 7;
  const status = errors.length > 0 ? "\u041E\u0448\u0438\u0431\u043A\u0430" : warnings.length > 0 ? "\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435" : "\u0411\u0435\u0437 \u043E\u0448\u0438\u0431\u043E\u043A";
  const violationFlag = status === "\u0411\u0435\u0437 \u043E\u0448\u0438\u0431\u043E\u043A" ? "\u041D\u0435\u0442" : "\u0414\u0430";
  return {
    id: `${contact.id}-${checkedAt}`,
    contactId: contact.id,
    contactName,
    checkedAt,
    contactCreatedAt: (_f = (_e = contact.createdAt) != null ? _e : contact.createdTime) != null ? _f : checkedAt,
    qualityScore: Math.max(0, Math.min(100, score)),
    qualityErrors: [...errors, ...warnings],
    normalizedPhone,
    normalizedEmail,
    status,
    responsibleId: getResponsibleId$3(contact),
    responsibleName: getResponsibleName$3(contact, users),
    violationFlag
  };
}

const REACTIVATION_DEPARTMENT_ID = 10;
const EXCLUDED_REACTIVATION_USER_ID = 572;
const REACTIVATION_CATEGORY_ID = 12;
const REACTIVATION_WEEKLY_PLAN = 25;
const REACTIVATION_WON_STAGE = "C12:WON";
const REACTIVATION_LOSE_STAGE = "C12:LOSE";
const MOSCOW_OFFSET_MS = 3 * 60 * 60 * 1e3;
const DAY_MS$1 = 24 * 60 * 60 * 1e3;
function pad(value) {
  return String(value).padStart(2, "0");
}
function toMoscowDate(value) {
  const time = typeof value === "string" ? new Date(value).getTime() : value.getTime();
  return new Date(time + MOSCOW_OFFSET_MS);
}
function toMoscowIsoDate(date) {
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;
}
function formatMoscowIso(date, endOfDay = false) {
  const time = endOfDay ? "23:59:59.999" : "00:00:00.000";
  return `${toMoscowIsoDate(date)}T${time}+03:00`;
}
function parseTime(value) {
  if (!value) return Number.NaN;
  const time = new Date(value).getTime();
  return Number.isFinite(time) ? time : Number.NaN;
}
function isInsideRange(value, week) {
  const time = parseTime(value);
  return Number.isFinite(time) && time >= week.startedAtMs && time <= week.finishedAtMs;
}
function normalizeId$1(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}
function stripHtml$1(value) {
  return value.replace(/<[^>]*>/g, " ").replace(/&nbsp;/gi, " ").replace(/\s+/g, " ").trim();
}
function isCompletedValue$1(value) {
  if (value === true) return true;
  if (typeof value === "number") return value === 1;
  if (typeof value !== "string") return false;
  return ["1", "true", "y", "yes"].includes(value.trim().toLowerCase());
}
function isCompletedStatus$1(value) {
  return String(value != null ? value : "").trim() === "2";
}
function isCompletedActivity(activity) {
  return isCompletedValue$1(activity.completed) || isCompletedStatus$1(activity.STATUS) || isCompletedStatus$1(activity.status);
}
function getActivityDeadline$1(activity) {
  var _a, _b;
  return (_b = (_a = activity.deadline) != null ? _a : activity.endTime) != null ? _b : activity.END_TIME;
}
function getMoscowMonthKey(value) {
  const moscowDate = toMoscowDate(value);
  return `${moscowDate.getUTCFullYear()}-${pad(moscowDate.getUTCMonth() + 1)}`;
}
function getMoscowWeekRange(value) {
  const moscowDate = toMoscowDate(value);
  const dayOfWeek = moscowDate.getUTCDay();
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const currentMoscowMidnightUtc = Date.UTC(
    moscowDate.getUTCFullYear(),
    moscowDate.getUTCMonth(),
    moscowDate.getUTCDate()
  );
  const startedAtMoscowLocalMs = currentMoscowMidnightUtc + mondayOffset * DAY_MS$1;
  const finishedAtMoscowLocalMs = startedAtMoscowLocalMs + 7 * DAY_MS$1 - 1;
  const startedAtMs = startedAtMoscowLocalMs - MOSCOW_OFFSET_MS;
  const finishedAtMs = finishedAtMoscowLocalMs - MOSCOW_OFFSET_MS;
  const startedAtMoscow = new Date(startedAtMoscowLocalMs);
  const finishedAtMoscow = new Date(finishedAtMoscowLocalMs);
  return {
    key: toMoscowIsoDate(startedAtMoscow),
    monthKey: getMoscowMonthKey(value),
    startedAt: formatMoscowIso(startedAtMoscow),
    finishedAt: formatMoscowIso(finishedAtMoscow, true),
    startedAtMs,
    finishedAtMs
  };
}
function isSuccessfulPlanningActivity(activity, week, checkedAt) {
  var _a, _b;
  if (normalizeId$1(activity.ownerTypeId) !== 2) return false;
  if (isCompletedActivity(activity)) return false;
  if (!isInsideRange((_a = activity.createdAt) != null ? _a : activity.CREATED, week)) return false;
  const deadline = parseTime(getActivityDeadline$1(activity));
  const checkedTime = new Date(checkedAt).getTime();
  if (!Number.isFinite(deadline) || !Number.isFinite(checkedTime) || deadline <= checkedTime) return false;
  return stripHtml$1((_b = activity.description) != null ? _b : "").length > 0;
}
function isSuccessfulReactivationDeal(params) {
  const { deal, activities, week, checkedAt } = params;
  const reasons = [];
  const dealUpdatedThisWeek = isInsideRange(deal.updatedAt, week);
  if (activities.some((activity) => isSuccessfulPlanningActivity(activity, week, checkedAt))) reasons.push("activity");
  if (dealUpdatedThisWeek && deal.stageId === REACTIVATION_WON_STAGE) reasons.push("won");
  if (dealUpdatedThisWeek && deal.stageId === REACTIVATION_LOSE_STAGE) reasons.push("lose");
  return { success: reasons.length > 0, reasons };
}
function shouldAnalyzeReactivationDeal(deal, employeeIds, week) {
  const categoryId = normalizeId$1(deal.categoryId);
  const assignedById = normalizeId$1(deal.assignedById);
  return categoryId === REACTIVATION_CATEGORY_ID && assignedById != null && employeeIds.has(assignedById) && isInsideRange(deal.updatedAt, week);
}
function buildReactivationRows(params) {
  var _a, _b, _c, _d, _e;
  const { employees, deals, activitiesByDeal, previousMonthlyRating, week, checkedAt } = params;
  const employeeIds = new Set(employees.map((employee) => employee.id));
  const successfulDealsByEmployee = /* @__PURE__ */ new Map();
  for (const deal of deals) {
    if (!shouldAnalyzeReactivationDeal(deal, employeeIds, week)) continue;
    const assignedById = normalizeId$1(deal.assignedById);
    if (assignedById == null) continue;
    const result = isSuccessfulReactivationDeal({
      deal,
      activities: (_a = activitiesByDeal.get(deal.id)) != null ? _a : [],
      week,
      checkedAt
    });
    if (!result.success) continue;
    const successfulDeal = {
      dealId: deal.id,
      title: ((_b = deal.title) == null ? void 0 : _b.trim()) || `\u0421\u0434\u0435\u043B\u043A\u0430 ${deal.id}`,
      stageId: (_c = deal.stageId) != null ? _c : null,
      responsibleId: assignedById,
      reasons: result.reasons,
      updatedAt: (_d = deal.updatedAt) != null ? _d : checkedAt
    };
    const employeeDeals = (_e = successfulDealsByEmployee.get(assignedById)) != null ? _e : [];
    employeeDeals.push(successfulDeal);
    successfulDealsByEmployee.set(assignedById, employeeDeals);
  }
  return employees.map((employee) => {
    var _a2, _b2;
    const successfulDeals = (_a2 = successfulDealsByEmployee.get(employee.id)) != null ? _a2 : [];
    return {
      employeeId: employee.id,
      name: employee.name,
      lastName: employee.lastName,
      photoUrl: employee.photoUrl,
      weeklyCount: successfulDeals.length,
      weeklyPlan: REACTIVATION_WEEKLY_PLAN,
      monthlyRating: (_b2 = previousMonthlyRating[String(employee.id)]) != null ? _b2 : 0,
      successfulDeals
    };
  }).sort(
    (left, right) => right.weeklyCount - left.weeklyCount || right.monthlyRating - left.monthlyRating || left.lastName.localeCompare(right.lastName, "ru")
  );
}
function emptyReactivationLog() {
  return {
    generatedAt: null,
    weekKey: null,
    monthKey: null,
    weekStartedAt: null,
    weekFinishedAt: null,
    monthlyRating: {},
    finalizedWeeks: [],
    rows: []
  };
}
function rollupPreviousWeekIntoRating(saved, currentMonthKey, checkedAt) {
  var _a;
  if (!saved.monthKey || saved.monthKey !== currentMonthKey) {
    return {
      ...saved,
      monthlyRating: {},
      finalizedWeeks: []
    };
  }
  const currentWeekKey = getMoscowWeekRange(checkedAt).key;
  if (!saved.weekKey || saved.weekKey === currentWeekKey || saved.finalizedWeeks.some((finalizedWeek) => finalizedWeek.weekKey === saved.weekKey)) {
    return saved;
  }
  const employeeResults = {};
  const monthlyRating = { ...saved.monthlyRating };
  for (const row of saved.rows) {
    const employeeId = String(row.employeeId);
    employeeResults[employeeId] = row.weeklyCount;
    monthlyRating[employeeId] = ((_a = monthlyRating[employeeId]) != null ? _a : 0) + row.weeklyCount;
  }
  return {
    ...saved,
    monthlyRating,
    finalizedWeeks: [
      ...saved.finalizedWeeks,
      {
        weekKey: saved.weekKey,
        monthKey: saved.monthKey,
        finalizedAt: checkedAt,
        employeeResults
      }
    ]
  };
}

const logPath = path.resolve(process.cwd(), "data", "sla-log.json");
const dataQualityLogPath = path.resolve(process.cwd(), "data", "data-quality-log.json");
const reactivationLogPath = path.resolve(process.cwd(), "data", "reactivation-log.json");
const nextStepLogPath = path.resolve(process.cwd(), "data", "next-step-log.json");
const REPORT_START_DATE = new Date(2026, 0, 1, 0, 0, 0, 0).getTime();
function getTodayEndTime() {
  const now = /* @__PURE__ */ new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999).getTime();
}
function isRowInsideReportRange(row) {
  const createdAtTime = new Date(row.leadCreatedAt).getTime();
  return Number.isFinite(createdAtTime) && createdAtTime >= REPORT_START_DATE && createdAtTime <= getTodayEndTime();
}
async function readSlaLog() {
  var _a;
  try {
    const raw = await readFile(logPath, "utf8");
    const parsed = JSON.parse(raw);
    const generatedAt = (_a = parsed.generatedAt) != null ? _a : null;
    return {
      generatedAt,
      rows: Array.isArray(parsed.rows) ? parsed.rows.filter(isRowInsideReportRange) : []
    };
  } catch {
    return { generatedAt: null, rows: [] };
  }
}
async function writeSlaLog(rows, generatedAt) {
  await mkdir(path.dirname(logPath), { recursive: true });
  const payload = { generatedAt, rows };
  await writeFile(logPath, `${JSON.stringify(payload, null, 2)}
`, "utf8");
  return payload;
}
function isDataQualityRowInsideReportRange(row) {
  const createdAtTime = new Date(row.contactCreatedAt).getTime();
  return Number.isFinite(createdAtTime) && createdAtTime >= REPORT_START_DATE && createdAtTime <= getTodayEndTime();
}
async function readDataQualityLog() {
  var _a;
  try {
    const raw = await readFile(dataQualityLogPath, "utf8");
    const parsed = JSON.parse(raw);
    const generatedAt = (_a = parsed.generatedAt) != null ? _a : null;
    return {
      generatedAt,
      rows: Array.isArray(parsed.rows) ? parsed.rows.filter(isDataQualityRowInsideReportRange) : []
    };
  } catch {
    return { generatedAt: null, rows: [] };
  }
}
async function writeDataQualityLog(rows, generatedAt) {
  await mkdir(path.dirname(dataQualityLogPath), { recursive: true });
  const payload = { generatedAt, rows };
  await writeFile(dataQualityLogPath, `${JSON.stringify(payload, null, 2)}
`, "utf8");
  return payload;
}
async function readNextStepLog() {
  var _a;
  try {
    const raw = await readFile(nextStepLogPath, "utf8");
    const parsed = JSON.parse(raw);
    return {
      generatedAt: (_a = parsed.generatedAt) != null ? _a : null,
      rows: Array.isArray(parsed.rows) ? parsed.rows : []
    };
  } catch {
    return { generatedAt: null, rows: [] };
  }
}
async function writeNextStepLog(rows, generatedAt) {
  await mkdir(path.dirname(nextStepLogPath), { recursive: true });
  const payload = { generatedAt, rows };
  await writeFile(nextStepLogPath, `${JSON.stringify(payload, null, 2)}
`, "utf8");
  return payload;
}
function isPlainObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
async function readReactivationLog() {
  const empty = emptyReactivationLog();
  try {
    const raw = await readFile(reactivationLogPath, "utf8");
    const parsed = JSON.parse(raw);
    return {
      ...empty,
      ...parsed,
      monthlyRating: isPlainObject(parsed.monthlyRating) ? parsed.monthlyRating : {},
      finalizedWeeks: Array.isArray(parsed.finalizedWeeks) ? parsed.finalizedWeeks : [],
      rows: Array.isArray(parsed.rows) ? parsed.rows : []
    };
  } catch {
    return empty;
  }
}
async function writeReactivationLog(payload) {
  await mkdir(path.dirname(reactivationLogPath), { recursive: true });
  await writeFile(reactivationLogPath, `${JSON.stringify(payload, null, 2)}
`, "utf8");
  return payload;
}

const NEXT_STEP_CATEGORY_ID = 14;
const NEXT_STEP_STAGE_NAMES = {
  "C14:EXECUTING": "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E",
  "C14:FINAL_INVOICE": "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435"
};
const NEXT_STEP_STAGE_IDS = Object.keys(NEXT_STEP_STAGE_NAMES);
const ACTION_WORDS = [
  "\u043F\u043E\u0437\u0432\u043E\u043D",
  "\u043D\u0430\u043F\u0438\u0448",
  "\u043E\u0442\u043F\u0440\u0430\u0432",
  "\u0441\u043E\u0433\u043B\u0430\u0441",
  "\u0443\u0442\u043E\u0447\u043D",
  "\u043E\u0431\u0441\u0443\u0434",
  "\u043F\u0440\u0435\u0434\u043B\u043E\u0436",
  "\u043F\u0440\u043E\u0434",
  "\u0437\u0430\u043A\u0440\u044B",
  "\u0432\u0441\u0442\u0440\u0435\u0447",
  "\u0441\u0432\u044F\u0437"
];
const CHANNEL_WORDS = [
  "\u0442\u0435\u043B\u0435\u0444\u043E\u043D",
  "\u0437\u0432\u043E\u043D",
  "whatsapp",
  "\u0432\u0430\u0442\u0441\u0430\u043F",
  "wazzup",
  "telegram",
  "\u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C",
  "\u043F\u043E\u0447\u0442",
  "email",
  "e-mail",
  "\u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436",
  "\u0447\u0430\u0442",
  "\u0441\u043C\u0441",
  "sms"
];
const TIME_WORDS = ["\u0441\u0435\u0433\u043E\u0434\u043D\u044F", "\u0437\u0430\u0432\u0442\u0440\u0430", "\u043F\u043E\u0441\u043B\u0435\u0437\u0430\u0432\u0442\u0440\u0430", "\u0443\u0442\u0440\u043E\u043C", "\u0434\u043D\u0435\u043C", "\u0434\u043D\u0451\u043C", "\u0432\u0435\u0447\u0435\u0440\u043E\u043C", "\u0447\u0430\u0441", "\u043C\u0438\u043D\u0443\u0442", "\u043D\u0435\u0434\u0435\u043B"];
const PLANNING_PROVIDER_IDS = /* @__PURE__ */ new Set(["crm_todo", "crm_tasks_task"]);
const PLANNING_PROVIDER_TYPE_IDS = /* @__PURE__ */ new Set(["todo", "tasks_task"]);
function normalizeText$1(value) {
  return value.replace(/<[^>]*>/g, " ").replace(/&nbsp;/gi, " ").replace(/\s+/g, " ").trim();
}
function normalizeId(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}
function parseDateTime(value) {
  if (!value) return Number.NaN;
  const direct = new Date(value).getTime();
  if (Number.isFinite(direct)) return direct;
  const match = value.trim().match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/);
  if (!match) return Number.NaN;
  const [, day, month, year, hour = "0", minute = "0", second = "0"] = match;
  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
    Number(second)
  ).getTime();
}
function toIsoOrRaw(value, fallback) {
  const time = parseDateTime(value);
  return Number.isFinite(time) ? new Date(time).toISOString() : value || fallback;
}
function isCompletedValue(value) {
  if (value === true) return true;
  if (typeof value === "number") return value === 1;
  if (typeof value !== "string") return false;
  return ["1", "true", "y", "yes"].includes(value.trim().toLowerCase());
}
function isCompletedStatus(value) {
  return String(value != null ? value : "").trim() === "2";
}
function isOpenDealActivity(activity) {
  return normalizeId(activity.ownerTypeId) === 2 && !isCompletedValue(activity.completed) && !isCompletedStatus(activity.STATUS) && !isCompletedStatus(activity.status);
}
function isNextStepPlanningActivity(activity) {
  var _a, _b, _c, _d;
  const providerId = String((_b = (_a = activity.PROVIDER_ID) != null ? _a : activity.providerId) != null ? _b : "").trim().toLowerCase();
  const providerTypeId = String((_d = (_c = activity.PROVIDER_TYPE_ID) != null ? _c : activity.providerTypeId) != null ? _d : "").trim().toLowerCase();
  return isOpenDealActivity(activity) && (PLANNING_PROVIDER_IDS.has(providerId) || PLANNING_PROVIDER_TYPE_IDS.has(providerTypeId));
}
function getActivityDeadline(activity) {
  var _a, _b;
  return (_b = (_a = activity.deadline) != null ? _a : activity.endTime) != null ? _b : activity.END_TIME;
}
function hasAnyWord(text, words) {
  return words.some((word) => text.includes(word));
}
function hasDateOrTimeMarker(text) {
  return /\b\d{1,2}[:.]\d{2}\b/.test(text) || /\b\d{1,2}[./-]\d{1,2}\b/.test(text) || hasAnyWord(text, TIME_WORDS);
}
function hasQualityDescription(description) {
  const text = normalizeText$1(description).toLowerCase();
  if (text.length < 20) return false;
  return hasAnyWord(text, ACTION_WORDS) && hasAnyWord(text, CHANNEL_WORDS) && hasDateOrTimeMarker(text);
}
function getResponsibleId$2(deal) {
  return normalizeId(deal.assignedById);
}
function getResponsibleName$2(deal, users) {
  const id = getResponsibleId$2(deal);
  if (id == null) return "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D";
  const user = users.get(id);
  if (!user) return `ID ${id}`;
  return [user.name, user.lastName].filter(Boolean).join(" ").trim() || `ID ${id}`;
}
function shouldAnalyzeNextStepDeal(deal) {
  return normalizeId(deal.categoryId) === NEXT_STEP_CATEGORY_ID && Boolean(deal.stageId && NEXT_STEP_STAGE_NAMES[deal.stageId]);
}
function evaluateNextStepActivity(activity, checkedAt) {
  var _a;
  const errors = [];
  const deadline = parseDateTime(getActivityDeadline(activity));
  const checkedTime = parseDateTime(checkedAt);
  if (!Number.isFinite(deadline)) {
    errors.push("\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430 \u0434\u0430\u0442\u0430 \u0434\u0435\u043B\u0430");
  } else if (!Number.isFinite(checkedTime) || deadline <= checkedTime) {
    errors.push("\u0414\u0430\u0442\u0430 \u0434\u0435\u043B\u0430 \u043D\u0435 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C");
  }
  if (!hasQualityDescription((_a = activity.description) != null ? _a : "")) {
    errors.push("\u0412 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u0447\u0442\u043E, \u0433\u0434\u0435 \u0438 \u043A\u043E\u0433\u0434\u0430 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438");
  }
  return errors;
}
function statusByErrors(errors, hasActivity) {
  if (!hasActivity || errors.length >= 2) return "ERROR";
  if (errors.length === 1) return "WARNING";
  return "OK";
}
function buildNextStepRow(params) {
  var _a, _b, _c, _d, _e, _f;
  const { deal, activities, users, checkedAt } = params;
  const openActivities = activities.filter(isNextStepPlanningActivity);
  const bestActivity = openActivities.map((activity) => ({ activity, errors: evaluateNextStepActivity(activity, checkedAt) })).sort((left, right) => left.errors.length - right.errors.length)[0];
  const errors = (_a = bestActivity == null ? void 0 : bestActivity.errors) != null ? _a : ["\u041D\u0435\u0442 \u0437\u0430\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0434\u0435\u043B\u0430"];
  const status = statusByErrors(errors, Boolean(bestActivity));
  const violationFlag = status === "OK" ? "\u041D\u0435\u0442" : "\u0414\u0430";
  return {
    id: `${deal.id}-${checkedAt}`,
    dealId: deal.id,
    dealTitle: ((_b = deal.title) == null ? void 0 : _b.trim()) || `\u0421\u0434\u0435\u043B\u043A\u0430 ${deal.id}`,
    checkedAt,
    dealCreatedAt: toIsoOrRaw(deal.createdAt, checkedAt),
    dealUpdatedAt: toIsoOrRaw(deal.updatedAt, checkedAt),
    stageId: (_c = deal.stageId) != null ? _c : null,
    stageName: deal.stageId ? (_d = NEXT_STEP_STAGE_NAMES[deal.stageId]) != null ? _d : deal.stageId : "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430",
    activityId: (_e = bestActivity == null ? void 0 : bestActivity.activity.id) != null ? _e : null,
    activityDeadline: bestActivity ? toIsoOrRaw(getActivityDeadline(bestActivity.activity), checkedAt) : null,
    activityDescription: bestActivity ? normalizeText$1((_f = bestActivity.activity.description) != null ? _f : "") || null : null,
    nextStepErrors: errors,
    status,
    responsibleId: getResponsibleId$2(deal),
    responsibleName: getResponsibleName$2(deal, users),
    violationFlag
  };
}
function buildNextStepRows(params) {
  const { deals, activitiesByDeal, users, checkedAt } = params;
  return deals.filter(shouldAnalyzeNextStepDeal).map((deal) => {
    var _a;
    return buildNextStepRow({ deal, activities: (_a = activitiesByDeal.get(deal.id)) != null ? _a : [], users, checkedAt });
  }).sort((left, right) => {
    const statusOrder = { ERROR: 0, WARNING: 1, OK: 2 };
    return statusOrder[left.status] - statusOrder[right.status] || parseDateTime(right.dealUpdatedAt) - parseDateTime(left.dealUpdatedAt);
  });
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
const API_BASE = "https://vibecode.bitrix24.tech/v1";
const RETRY_DELAYS_MS = [600, 1400, 3e3];
const LEAD_PAGE_SIZE = 50;
const CONTACT_PAGE_SIZE = 50;
const DEAL_PAGE_SIZE = 50;
const SLA_LEAD_REJECTION_FIELD = "ufCrm_1638180783";
const SLA_LEAD_FIRST_REACTION_FIELD = "ufCrm_1715933850";
const SLA_LEAD_FIRST_REACTION_MINUTES_FIELD = "ufCrm_1716566007";
const SLA_LEAD_STATUS_FIELD = "ufCrm_1716369534832";
const SLA_LEAD_VIOLATION_FIELD = "ufCrm_1777686837399";
const SLA_LEAD_OVERRUN_FIELD = "ufCrm_1777370132452";
const SLA_LEAD_ONLINE_CHAT_OUTGOING_FIELD = "ufCrm_1716370242690";
const SLA_LEAD_MISSED_CALL_FIELD = "ufCrm_1724510334936";
const SLA_LEAD_SELECT = [
  "id",
  "title",
  "createdAt",
  "createdTime",
  "stageId",
  "statusId",
  "stageSemanticId",
  "assignedById",
  "contactId",
  "contactIds",
  "sourceId",
  "sourceDescription",
  "comments",
  "isReturnCustomer",
  "searchContent",
  "ufCrm_1717431064812",
  SLA_LEAD_FIRST_REACTION_FIELD,
  SLA_LEAD_FIRST_REACTION_MINUTES_FIELD,
  SLA_LEAD_STATUS_FIELD,
  SLA_LEAD_VIOLATION_FIELD,
  SLA_LEAD_OVERRUN_FIELD,
  SLA_LEAD_ONLINE_CHAT_OUTGOING_FIELD,
  SLA_LEAD_MISSED_CALL_FIELD,
  SLA_LEAD_REJECTION_FIELD,
  "UF_CRM_1638180783"
];
const SLA_ACTIVITY_SELECT = [
  "ID",
  "TYPE_ID",
  "OWNER_TYPE_ID",
  "OWNER_ID",
  "SUBJECT",
  "DIRECTION",
  "COMPLETED",
  "STATUS",
  "START_TIME",
  "END_TIME",
  "CREATED",
  "LAST_UPDATED",
  "RESPONSIBLE_ID",
  "PROVIDER_ID",
  "PROVIDER_TYPE_ID",
  "PROVIDER_GROUP_ID",
  "RESULT_STATUS",
  "RESULT_MARK",
  "RESULT_STREAM",
  "SETTINGS",
  "DESCRIPTION"
];
const SLA_TIMELINE_SELECT = ["ID", "ENTITY_ID", "ENTITY_TYPE", "CREATED", "AUTHOR_ID", "COMMENT"];
class VibeCodeClient {
  constructor(apiKey) {
    __publicField(this, "apiKey", apiKey);
  }
  delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  isRetryableError(error) {
    const message = error instanceof Error ? error.message.toLowerCase() : String(error).toLowerCase();
    return message.includes("too many requests") || message.includes("internal server error") || message.includes("overload") || message.includes("queue_timeout") || message.includes("queue timeout") || message.includes("504");
  }
  async request(path, init = {}) {
    var _a;
    const response = await fetch(`${API_BASE}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": this.apiKey,
        ...init.headers
      }
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || payload.success === false) {
      throw new Error(((_a = payload.error) == null ? void 0 : _a.message) || `VibeCode request failed: ${response.status} ${response.statusText}`);
    }
    return payload.data;
  }
  async requestWithRetry(path, init = {}) {
    var _a, _b;
    let lastError;
    for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt += 1) {
      try {
        return await this.request(path, init);
      } catch (error) {
        lastError = error;
        if (!this.isRetryableError(error) || attempt === RETRY_DELAYS_MS.length) break;
        await this.delay((_b = (_a = RETRY_DELAYS_MS[attempt]) != null ? _a : RETRY_DELAYS_MS[RETRY_DELAYS_MS.length - 1]) != null ? _b : 1e3);
      }
    }
    throw lastError;
  }
  async searchLeads(createdFromIso, createdToIso) {
    var _a, _b;
    const createdFromTime = new Date(createdFromIso).getTime();
    const createdToTime = new Date(createdToIso).getTime();
    const result = [];
    const seenIds = /* @__PURE__ */ new Set();
    const seenPageIds = /* @__PURE__ */ new Set();
    let offset = 0;
    while (true) {
      const data = await this.requestWithRetry("/leads/search", {
        method: "POST",
        body: JSON.stringify({
          filter: {
            createdAt: {
              $gte: createdFromIso,
              $lte: createdToIso
            }
          },
          autoWindow: false,
          select: SLA_LEAD_SELECT,
          limit: LEAD_PAGE_SIZE,
          offset
        })
      });
      const leads = Array.isArray(data) ? data : [];
      if (leads.length === 0) break;
      let inRangeCount = 0;
      let olderThanRangeCount = 0;
      let newerThanRangeCount = 0;
      let newPageIdCount = 0;
      for (const lead of leads) {
        if (!seenPageIds.has(lead.id)) {
          seenPageIds.add(lead.id);
          newPageIdCount += 1;
        }
        const createdAt = (_b = (_a = lead.createdAt) != null ? _a : lead.createdTime) != null ? _b : null;
        const createdTime = createdAt ? new Date(createdAt).getTime() : Number.NaN;
        if (!Number.isFinite(createdTime)) continue;
        if (createdTime > createdToTime) {
          newerThanRangeCount += 1;
          continue;
        }
        if (createdTime < createdFromTime) {
          olderThanRangeCount += 1;
          continue;
        }
        inRangeCount += 1;
        if (!seenIds.has(lead.id)) {
          seenIds.add(lead.id);
          result.push(lead);
        }
      }
      if (leads.length < LEAD_PAGE_SIZE || newPageIdCount === 0) break;
      if (inRangeCount === 0 && olderThanRangeCount > 0 && newerThanRangeCount === 0) break;
      offset += LEAD_PAGE_SIZE;
    }
    return result;
  }
  async listUsers() {
    const data = await this.requestWithRetry("/users?limit=5000&select=id,name,lastName,active,email");
    return Array.isArray(data) ? data : [];
  }
  async listLeadStatusNames() {
    var _a, _b, _c, _d;
    const data = await this.requestWithRetry("/statuses?limit=5000");
    const result = /* @__PURE__ */ new Map();
    for (const status of Array.isArray(data) ? data : []) {
      if (String((_a = status.entityId) != null ? _a : "").toUpperCase() !== "STATUS") continue;
      const id = String((_b = status.statusId) != null ? _b : "").trim();
      const name = ((_d = (_c = status.name) != null ? _c : status.nameInit) != null ? _d : "").trim();
      if (id && name) result.set(id, name);
    }
    return result;
  }
  async listLeadSourceNames() {
    var _a, _b, _c, _d;
    const data = await this.requestWithRetry("/statuses?limit=5000");
    const result = /* @__PURE__ */ new Map();
    for (const status of Array.isArray(data) ? data : []) {
      if (String((_a = status.entityId) != null ? _a : "").toUpperCase() !== "SOURCE") continue;
      const id = String((_b = status.statusId) != null ? _b : "").trim();
      const name = ((_d = (_c = status.name) != null ? _c : status.nameInit) != null ? _d : "").trim();
      if (id && name) result.set(id, name);
    }
    return result;
  }
  async listLeadRejectionReasonNames() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const data = await this.requestWithRetry("/leads/fields");
    const field = (_c = (_a = data == null ? void 0 : data.fields) == null ? void 0 : _a[SLA_LEAD_REJECTION_FIELD]) != null ? _c : (_b = data == null ? void 0 : data.fields) == null ? void 0 : _b.UF_CRM_1638180783;
    const result = /* @__PURE__ */ new Map();
    for (const item of (_d = field == null ? void 0 : field.items) != null ? _d : []) {
      const id = String((_f = (_e = item.ID) != null ? _e : item.id) != null ? _f : "").trim();
      const value = String((_h = (_g = item.VALUE) != null ? _g : item.value) != null ? _h : "").trim();
      if (id && value) result.set(id, value);
    }
    return result;
  }
  async updateLeadsSlaFields(updates) {
    for (const update of updates) {
      await this.requestWithRetry(`/leads/${update.leadId}`, {
        method: "PATCH",
        body: JSON.stringify(update.fields)
      });
    }
  }
  async listDepartmentUsers(departmentId, excludedUserIds = /* @__PURE__ */ new Set()) {
    const data = await this.requestWithRetry("/users/search", {
      method: "POST",
      body: JSON.stringify({
        filter: {
          departmentId,
          active: true
        },
        select: ["id", "name", "lastName", "active", "personalPhoto", "PERSONAL_PHOTO"],
        limit: 500
      })
    });
    return (Array.isArray(data) ? data : []).map((user) => {
      var _a, _b, _c, _d, _e, _f;
      return {
        id: user.id,
        name: (_b = (_a = user.name) == null ? void 0 : _a.trim()) != null ? _b : "",
        lastName: (_d = (_c = user.lastName) == null ? void 0 : _c.trim()) != null ? _d : "",
        photoUrl: (_f = (_e = user.personalPhoto) != null ? _e : user.PERSONAL_PHOTO) != null ? _f : null
      };
    }).filter((user) => !excludedUserIds.has(user.id) && `${user.lastName}${user.name}`.trim().length > 0).sort(
      (left, right) => left.lastName.localeCompare(right.lastName, "ru") || left.name.localeCompare(right.name, "ru")
    );
  }
  async searchContacts(createdFromIso, createdToIso, onProgress) {
    var _a, _b;
    const createdFromTime = new Date(createdFromIso).getTime();
    const createdToTime = new Date(createdToIso).getTime();
    const result = [];
    const seenIds = /* @__PURE__ */ new Set();
    const seenPageIds = /* @__PURE__ */ new Set();
    let offset = 0;
    while (true) {
      const data = await this.requestWithRetry("/contacts/search", {
        method: "POST",
        body: JSON.stringify({
          filter: {
            createdAt: {
              $gte: createdFromIso,
              $lte: createdToIso
            }
          },
          autoWindow: false,
          limit: CONTACT_PAGE_SIZE,
          offset
        })
      });
      const contacts = Array.isArray(data) ? data : [];
      if (contacts.length === 0) break;
      let inRangeCount = 0;
      let olderThanRangeCount = 0;
      let newerThanRangeCount = 0;
      let newPageIdCount = 0;
      for (const contact of contacts) {
        if (!seenPageIds.has(contact.id)) {
          seenPageIds.add(contact.id);
          newPageIdCount += 1;
        }
        const createdAt = (_b = (_a = contact.createdAt) != null ? _a : contact.createdTime) != null ? _b : null;
        const createdTime = createdAt ? new Date(createdAt).getTime() : Number.NaN;
        if (!Number.isFinite(createdTime)) continue;
        if (createdTime > createdToTime) {
          newerThanRangeCount += 1;
          continue;
        }
        if (createdTime < createdFromTime) {
          olderThanRangeCount += 1;
          continue;
        }
        inRangeCount += 1;
        if (!seenIds.has(contact.id)) {
          seenIds.add(contact.id);
          result.push(contact);
        }
      }
      onProgress == null ? void 0 : onProgress(contacts.length);
      if (contacts.length < CONTACT_PAGE_SIZE || newPageIdCount === 0) break;
      if (inRangeCount === 0 && olderThanRangeCount > 0 && newerThanRangeCount === 0) break;
      offset += CONTACT_PAGE_SIZE;
    }
    return result;
  }
  async searchReactivationDeals(updatedFromIso, updatedToIso, onProgress) {
    const result = [];
    const seenIds = /* @__PURE__ */ new Set();
    const seenPageIds = /* @__PURE__ */ new Set();
    let offset = 0;
    while (true) {
      const data = await this.requestWithRetry("/deals/search", {
        method: "POST",
        body: JSON.stringify({
          filter: {
            categoryId: 12,
            updatedAt: {
              $gte: updatedFromIso,
              $lte: updatedToIso
            }
          },
          autoWindow: false,
          select: ["id", "title", "categoryId", "stageId", "assignedById", "createdAt", "updatedAt", "closed", "closedAt"],
          limit: DEAL_PAGE_SIZE,
          offset
        })
      });
      const deals = Array.isArray(data) ? data : [];
      if (deals.length === 0) break;
      let newPageIdCount = 0;
      for (const deal of deals) {
        if (!seenPageIds.has(deal.id)) {
          seenPageIds.add(deal.id);
          newPageIdCount += 1;
        }
        if (seenIds.has(deal.id)) continue;
        seenIds.add(deal.id);
        result.push(deal);
      }
      onProgress == null ? void 0 : onProgress(deals.length);
      if (deals.length < DEAL_PAGE_SIZE || newPageIdCount === 0) break;
      offset += DEAL_PAGE_SIZE;
    }
    return result;
  }
  async searchNextStepDeals(onProgress) {
    const result = [];
    const seenIds = /* @__PURE__ */ new Set();
    const seenPageIds = /* @__PURE__ */ new Set();
    let offset = 0;
    while (true) {
      const data = await this.requestWithRetry("/deals/search", {
        method: "POST",
        body: JSON.stringify({
          filter: {
            categoryId: NEXT_STEP_CATEGORY_ID,
            stageId: NEXT_STEP_STAGE_IDS
          },
          autoWindow: false,
          select: ["id", "title", "categoryId", "stageId", "assignedById", "createdAt", "updatedAt", "closed", "closedAt"],
          limit: DEAL_PAGE_SIZE,
          offset
        })
      });
      const deals = Array.isArray(data) ? data : [];
      if (deals.length === 0) break;
      let newPageIdCount = 0;
      for (const deal of deals) {
        if (!seenPageIds.has(deal.id)) {
          seenPageIds.add(deal.id);
          newPageIdCount += 1;
        }
        if (seenIds.has(deal.id)) continue;
        seenIds.add(deal.id);
        result.push(deal);
      }
      onProgress == null ? void 0 : onProgress(deals.length);
      if (deals.length < DEAL_PAGE_SIZE || newPageIdCount === 0) break;
      offset += DEAL_PAGE_SIZE;
    }
    return result;
  }
  async listAbsenceIntervalsForUser(userId, fromIso, toIso) {
    const params = new URLSearchParams({
      type: "user",
      ownerId: String(userId),
      from: fromIso,
      to: toIso
    });
    const data = await this.requestWithRetry(`/calendar-events?${params.toString()}`);
    return (Array.isArray(data) ? data : []).map((event) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      const accessibility = String((_b = (_a = event.accessibility) != null ? _a : event.ACCESSIBILITY) != null ? _b : "").toLowerCase();
      const start = (_f = (_e = (_d = (_c = event.dateFrom) != null ? _c : event.DATE_FROM) != null ? _d : event.from) != null ? _e : event.start) != null ? _f : null;
      const end = (_j = (_i = (_h = (_g = event.dateTo) != null ? _g : event.DATE_TO) != null ? _h : event.to) != null ? _i : event.end) != null ? _j : null;
      return { accessibility, start, end };
    }).filter(
      (event) => event.accessibility === "absent" && Boolean(event.start) && Boolean(event.end)
    ).map((event) => ({ userId, start: event.start, end: event.end }));
  }
  async listActivitiesForLeads(leadIds, onProgress) {
    var _a, _b;
    const result = /* @__PURE__ */ new Map();
    for (let index = 0; index < leadIds.length; index += 50) {
      const chunk = leadIds.slice(index, index + 50);
      const batch = await this.requestWithRetry("/batch", {
        method: "POST",
        body: JSON.stringify({
          calls: chunk.map((leadId) => ({
            id: `lead_${leadId}`,
            entity: "activities",
            action: "list",
            params: {
              filter: {
                ownerTypeId: 1,
                ownerId: leadId
              },
              select: SLA_ACTIVITY_SELECT,
              limit: 200
            }
          }))
        })
      });
      for (const leadId of chunk) {
        result.set(leadId, (_b = (_a = batch.results) == null ? void 0 : _a[`lead_${leadId}`]) != null ? _b : []);
      }
      onProgress == null ? void 0 : onProgress(chunk.length);
    }
    return result;
  }
  async listActivitiesForContacts(contactIds, onProgress) {
    var _a, _b, _c, _d;
    const result = /* @__PURE__ */ new Map();
    for (let index = 0; index < contactIds.length; index += 50) {
      const chunk = contactIds.slice(index, index + 50);
      const batch = await this.requestWithRetry("/batch", {
        method: "POST",
        body: JSON.stringify({
          calls: chunk.map((contactId) => ({
            id: `contact_${contactId}`,
            entity: "activities",
            action: "list",
            params: {
              filter: {
                ownerTypeId: 3,
                ownerId: contactId
              },
              select: SLA_ACTIVITY_SELECT,
              limit: 200
            }
          }))
        })
      });
      for (const contactId of chunk) {
        const key = `contact_${contactId}`;
        const error = (_a = batch.errors) == null ? void 0 : _a[key];
        if (error) {
          console.warn(`Could not load activities for contact ${contactId}:`, (_b = error.message) != null ? _b : error);
        }
        result.set(contactId, (_d = (_c = batch.results) == null ? void 0 : _c[key]) != null ? _d : []);
      }
      onProgress == null ? void 0 : onProgress(chunk.length);
    }
    return result;
  }
  async listActivitiesForDeals(dealIds, onProgress) {
    var _a, _b, _c, _d;
    const result = /* @__PURE__ */ new Map();
    for (let index = 0; index < dealIds.length; index += 50) {
      const chunk = dealIds.slice(index, index + 50);
      const batch = await this.requestWithRetry("/batch", {
        method: "POST",
        body: JSON.stringify({
          calls: chunk.map((dealId) => ({
            id: `deal_${dealId}`,
            entity: "activities",
            action: "list",
            params: {
              filter: {
                ownerTypeId: 2,
                ownerId: dealId
              },
              limit: 200
            }
          }))
        })
      });
      for (const dealId of chunk) {
        const key = `deal_${dealId}`;
        const error = (_a = batch.errors) == null ? void 0 : _a[key];
        if (error) {
          console.warn(`Could not load activities for deal ${dealId}:`, (_b = error.message) != null ? _b : error);
        }
        result.set(dealId, (_d = (_c = batch.results) == null ? void 0 : _c[key]) != null ? _d : []);
      }
      onProgress == null ? void 0 : onProgress(chunk.length);
    }
    return result;
  }
  async listStageHistoryForLeads(leadIds, onProgress) {
    const result = /* @__PURE__ */ new Map();
    for (const leadId of leadIds) {
      const params = new URLSearchParams({
        entityType: "lead",
        ownerId: String(leadId),
        limit: "200"
      });
      try {
        const data = await this.requestWithRetry(`/stage-history?${params.toString()}`);
        result.set(leadId, Array.isArray(data) ? data : []);
      } catch (error) {
        console.warn(`Could not load stage history for lead ${leadId}:`, error instanceof Error ? error.message : error);
        result.set(leadId, []);
      }
      onProgress == null ? void 0 : onProgress(1);
    }
    return result;
  }
  async listTimelineCommentsForEntities(params) {
    var _a, _b, _c, _d;
    const { entityType, entityIds, sort, onProgress } = params;
    const result = /* @__PURE__ */ new Map();
    for (let index = 0; index < entityIds.length; index += 50) {
      const chunk = entityIds.slice(index, index + 50);
      const batch = await this.requestWithRetry("/batch", {
        method: "POST",
        body: JSON.stringify({
          calls: chunk.map((entityId) => ({
            id: `timeline_${entityType}_${entityId}`,
            entity: "timelines",
            action: "list",
            params: {
              filter: {
                entityType,
                entityId
              },
              select: SLA_TIMELINE_SELECT,
              sort,
              limit: 200
            }
          }))
        })
      });
      for (const entityId of chunk) {
        const key = `timeline_${entityType}_${entityId}`;
        const error = (_a = batch.errors) == null ? void 0 : _a[key];
        if (error) {
          console.warn(`Could not load timeline comments for ${entityType} ${entityId}:`, (_b = error.message) != null ? _b : error);
        }
        result.set(entityId, (_d = (_c = batch.results) == null ? void 0 : _c[key]) != null ? _d : []);
      }
      onProgress == null ? void 0 : onProgress(chunk.length);
    }
    return result;
  }
  async listTimelineCommentsForLeads(leadIds, onProgress) {
    return this.listTimelineCommentsForEntities({
      entityType: "lead",
      entityIds: leadIds,
      sort: "createdAt",
      onProgress
    });
  }
  async listTimelineCommentsForContacts(contactIds, onProgress) {
    return this.listTimelineCommentsForEntities({
      entityType: "contact",
      entityIds: contactIds,
      sort: "-createdAt",
      onProgress
    });
  }
}

function isCreatedAtInRange$1(value, range) {
  const valueTime = value ? new Date(value).getTime() : Number.NaN;
  const minTime = new Date(range.createdFrom).getTime();
  const maxTime = new Date(range.createdTo).getTime();
  return Number.isFinite(valueTime) && Number.isFinite(minTime) && Number.isFinite(maxTime) && valueTime >= minTime && valueTime <= maxTime;
}
async function runDataQualityCheckJob(apiKey, dateRange, reportProgress) {
  reportProgress({ stage: "starting", message: "\u0413\u043E\u0442\u043E\u0432\u0438\u043C \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0434\u0430\u043D\u043D\u044B\u0445", current: 0, total: 1 });
  const checkedAt = (/* @__PURE__ */ new Date()).toISOString();
  const client = new VibeCodeClient(apiKey);
  reportProgress({ stage: "loading_contacts", message: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432", current: 0, total: 1 });
  let loadedContacts = 0;
  const reportLoadedContacts = (processed) => {
    loadedContacts += processed;
    reportProgress({
      stage: "loading_contacts",
      message: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432",
      current: loadedContacts,
      total: Math.max(loadedContacts, 1)
    });
  };
  const [contacts, users] = await Promise.all([
    client.searchContacts(dateRange.createdFrom, dateRange.createdTo, reportLoadedContacts),
    client.listUsers()
  ]);
  const filteredContacts = contacts.filter(
    (contact) => {
      var _a;
      return shouldAnalyzeContact(contact) && isCreatedAtInRange$1((_a = contact.createdAt) != null ? _a : contact.createdTime, dateRange);
    }
  );
  const usersMap = new Map(users.map((user) => [Number(user.id), user]));
  reportProgress({ stage: "calculating", message: "\u0421\u0447\u0438\u0442\u0430\u0435\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0434\u0430\u043D\u043D\u044B\u0445", current: 0, total: filteredContacts.length });
  const rows = filteredContacts.map((contact) => buildDataQualityRow({ contact, users: usersMap, checkedAt })).sort((a, b) => new Date(b.contactCreatedAt).getTime() - new Date(a.contactCreatedAt).getTime());
  const payload = await writeDataQualityLog(rows, checkedAt);
  reportProgress({ stage: "done", message: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430", current: rows.length, total: rows.length });
  return payload;
}

async function runNextStepCheckJob(apiKey, reportProgress) {
  reportProgress({ stage: "starting", message: "\u0413\u043E\u0442\u043E\u0432\u0438\u043C \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0448\u0430\u0433\u0430", current: 0, total: 1 });
  const checkedAt = (/* @__PURE__ */ new Date()).toISOString();
  const client = new VibeCodeClient(apiKey);
  reportProgress({ stage: "loading_contacts", message: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0441\u0434\u0435\u043B\u043A\u0438 \u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432", current: 0, total: 1 });
  let loadedDeals = 0;
  const reportLoadedDeals = (processed) => {
    loadedDeals += processed;
    reportProgress({
      stage: "loading_contacts",
      message: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0441\u0434\u0435\u043B\u043A\u0438 \u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432",
      current: loadedDeals,
      total: Math.max(loadedDeals, 1)
    });
  };
  const [deals, users] = await Promise.all([client.searchNextStepDeals(reportLoadedDeals), client.listUsers()]);
  const dealIds = deals.map((deal) => deal.id);
  reportProgress({
    stage: "loading_history",
    message: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0434\u0435\u043B\u0430 \u043F\u043E \u0441\u0434\u0435\u043B\u043A\u0430\u043C",
    current: 0,
    total: Math.max(1, dealIds.length)
  });
  let loadedActivities = 0;
  const reportLoadedActivities = (processed) => {
    loadedActivities += processed;
    reportProgress({
      stage: "loading_history",
      message: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0434\u0435\u043B\u0430 \u043F\u043E \u0441\u0434\u0435\u043B\u043A\u0430\u043C",
      current: loadedActivities,
      total: Math.max(1, dealIds.length)
    });
  };
  const activitiesByDeal = await client.listActivitiesForDeals(dealIds, reportLoadedActivities);
  const usersMap = new Map(users.map((user) => [Number(user.id), user]));
  reportProgress({ stage: "calculating", message: "\u0421\u0447\u0438\u0442\u0430\u0435\u043C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433", current: 0, total: deals.length });
  const rows = buildNextStepRows({ deals, activitiesByDeal, users: usersMap, checkedAt });
  const payload = await writeNextStepLog(rows, checkedAt);
  reportProgress({ stage: "done", message: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0448\u0430\u0433\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430", current: rows.length, total: rows.length });
  return payload;
}

async function runReactivationCheckJob(apiKey, reportProgress) {
  reportProgress({ stage: "starting", message: "\u0413\u043E\u0442\u043E\u0432\u0438\u043C \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u0440\u0435\u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438", current: 0, total: 1 });
  const checkedAt = (/* @__PURE__ */ new Date()).toISOString();
  const week = getMoscowWeekRange(checkedAt);
  const client = new VibeCodeClient(apiKey);
  reportProgress({ stage: "loading_history", message: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0439 \u043E\u0442\u0447\u0435\u0442", current: 0, total: 1 });
  const saved = await readReactivationLog();
  const rolled = rollupPreviousWeekIntoRating(saved, week.monthKey, checkedAt);
  reportProgress({ stage: "loading_contacts", message: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u0438 \u0441\u0434\u0435\u043B\u043A\u0438 \u0440\u0435\u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438", current: 0, total: 1 });
  let loadedDeals = 0;
  const reportLoadedDeals = (processed) => {
    loadedDeals += processed;
    reportProgress({
      stage: "loading_contacts",
      message: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u0438 \u0441\u0434\u0435\u043B\u043A\u0438 \u0440\u0435\u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438",
      current: loadedDeals,
      total: Math.max(loadedDeals, 1)
    });
  };
  const [employees, deals] = await Promise.all([
    client.listDepartmentUsers(REACTIVATION_DEPARTMENT_ID, /* @__PURE__ */ new Set([EXCLUDED_REACTIVATION_USER_ID])),
    client.searchReactivationDeals(week.startedAt, week.finishedAt, reportLoadedDeals)
  ]);
  const dealIds = deals.map((deal) => deal.id);
  reportProgress({
    stage: "loading_history",
    message: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u043F\u043E \u0441\u0434\u0435\u043B\u043A\u0430\u043C",
    current: 0,
    total: Math.max(1, dealIds.length)
  });
  let loadedActivities = 0;
  const reportLoadedActivities = (processed) => {
    loadedActivities += processed;
    reportProgress({
      stage: "loading_history",
      message: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u043F\u043E \u0441\u0434\u0435\u043B\u043A\u0430\u043C",
      current: loadedActivities,
      total: Math.max(1, dealIds.length)
    });
  };
  const activitiesByDeal = await client.listActivitiesForDeals(dealIds, reportLoadedActivities);
  reportProgress({ stage: "calculating", message: "\u0421\u0447\u0438\u0442\u0430\u0435\u043C \u0440\u0435\u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u044E", current: 0, total: employees.length });
  const rows = buildReactivationRows({
    employees,
    deals,
    activitiesByDeal,
    previousMonthlyRating: rolled.monthlyRating,
    week,
    checkedAt
  });
  const payload = await writeReactivationLog({
    generatedAt: checkedAt,
    weekKey: week.key,
    monthKey: week.monthKey,
    weekStartedAt: week.startedAt,
    weekFinishedAt: week.finishedAt,
    monthlyRating: rolled.monthlyRating,
    finalizedWeeks: rolled.finalizedWeeks,
    rows
  });
  reportProgress({ stage: "done", message: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0440\u0435\u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430", current: rows.length, total: rows.length });
  return payload;
}

const SLA_LIMIT_MINUTES = 15;
const MISSED_CALL_STATUS_ID = "15";
const NEEDS_IDENTIFICATION_STATUS_ID = "13";
const TRANSFERRED_TO_MPT_STATUS_ID = "12";
const CALL_LEAD_CREATION_GRACE_MINUTES = SLA_LIMIT_MINUTES;
const EXCLUDED_SOURCE_NAMES = /* @__PURE__ */ new Set(["\u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u044D\u043A\u0441\u043F\u0440\u0435\u0441\u0441"]);
const NON_ERROR_REJECTION_REASONS = /* @__PURE__ */ new Set([
  "\u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u043F\u043E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u0441\u0434\u0435\u043B\u043A\u0435 (\u0434\u043B\u044F \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432)",
  "\u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0439 \u0437\u0432\u043E\u043D\u043E\u043A \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0430",
  "\u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0442",
  "\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F",
  "\u0440\u0435\u043A\u043B\u0430\u043C\u0430"
]);
const SUCCESS_STATUSES = /* @__PURE__ */ new Set(["2"]);
const FINISHED_STATUSES = /* @__PURE__ */ new Set(["2", "3"]);
const MOSCOW_OFFSET_MINUTES = 3 * 60;
const MINUTE_MS = 60 * 1e3;
const DAY_MS = 24 * 60 * MINUTE_MS;
const TIMEZONE_DRIFT_TOLERANCE_MS = MINUTE_MS;
const AUTO_WAZZUP_MESSAGE_PHRASES = [
  "\u0441\u043F\u0430\u0441\u0438\u0431\u043E, \u0447\u0442\u043E \u043D\u0430\u043F\u0438\u0441\u0430\u043B\u0438",
  "\u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u043C \u0432\u0430\u0441 \u0437\u0430 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u0432 \u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u044D\u043A\u0441\u043F\u0440\u0435\u0441\u0441",
  "\u0441\u043F\u0430\u0441\u0438\u0431\u043E, \u0447\u0442\u043E \u043E\u0431\u0440\u0430\u0442\u0438\u043B\u0438\u0441\u044C \u0432 \u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u044D\u043A\u0441\u043F\u0440\u0435\u0441\u0441",
  "\u0441\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u0432 \u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u044D\u043A\u0441\u043F\u0440\u0435\u0441\u0441",
  "\u043A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043C\u044B \u043D\u0435 \u0441\u043C\u043E\u0433\u043B\u0438 \u043F\u0440\u0438\u043D\u044F\u0442\u044C \u0432\u0430\u0448 \u0437\u0432\u043E\u043D\u043E\u043A",
  "\u043A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043C\u044B \u043D\u0435 \u0443\u0441\u043F\u0435\u043B\u0438 \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430 \u0432\u0430\u0448 \u0437\u0432\u043E\u043D\u043E\u043A"
];
const OUTGOING_LEAD_TITLE_WORD = "\u0438\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0439";
const SYNC_ERROR_REJECTION_REASON_ID = "1140";
const IT_DEPARTMENT_NAME = "\u043E\u0442\u0434\u0435\u043B \u0438\u0442";
const DEFAULT_MANUAL_REVIEW_TITLE_PATTERN = /^лид_№\s*\d+/i;
const RETURN_CUSTOMER_PHRASES = ["\u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442", "\u043F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0439 \u043B\u0438\u0434"];
const EXCLUDED_REJECTION_REASONS = /* @__PURE__ */ new Set(["\u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E", "\u043A\u043B\u0438\u0435\u043D\u0442 \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u0430"]);
const EARLY_WORKDAY_USER_NAMES = /* @__PURE__ */ new Set(["\u0435\u043B\u0438\u0437\u0430\u0432\u0435\u0442\u0430 \u043A\u043E\u043F\u0435\u0439\u043A\u0438\u043D\u0430", "\u0435\u0432\u0433\u0435\u043D\u0438\u044F \u0432\u0435\u0440\u043D\u0435\u0440"]);
const RU_MONTHS = {
  \u044F\u043D\u0432\u0430\u0440\u044F: 1,
  \u0444\u0435\u0432\u0440\u0430\u043B\u044F: 2,
  \u043C\u0430\u0440\u0442\u0430: 3,
  \u0430\u043F\u0440\u0435\u043B\u044F: 4,
  \u043C\u0430\u044F: 5,
  \u0438\u044E\u043D\u044F: 6,
  \u0438\u044E\u043B\u044F: 7,
  \u0430\u0432\u0433\u0443\u0441\u0442\u0430: 8,
  \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F: 9,
  \u043E\u043A\u0442\u044F\u0431\u0440\u044F: 10,
  \u043D\u043E\u044F\u0431\u0440\u044F: 11,
  \u0434\u0435\u043A\u0430\u0431\u0440\u044F: 12
};
const EN_MONTHS = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12
};
function getLeadCreatedAt(lead) {
  var _a, _b;
  return (_b = (_a = lead.createdAt) != null ? _a : lead.createdTime) != null ? _b : null;
}
function isExcludedValue(value) {
  if (value === false) return true;
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    return normalized === "n" || normalized === "\u043D\u0435\u0442" || normalized === "false" || normalized === "0";
  }
  if (value === 0) return true;
  return value == null;
}
function isLeadMarkedAsMissedCall(lead) {
  const value = lead.ufCrm_1724510334936;
  if (value === true || value === 1) return true;
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    return normalized === "1" || normalized === "y" || normalized === "yes" || normalized === "true";
  }
  return false;
}
function shouldAnalyzeLead(lead) {
  return isExcludedValue(lead.ufCrm_1717431064812) && !hasOutgoingInTitle(lead) && !hasDefaultNumberedLeadTitle(lead);
}
function getLeadContactIds(lead) {
  const ids = /* @__PURE__ */ new Set();
  for (const value of [...Array.isArray(lead.contactIds) ? lead.contactIds : [], lead.contactId]) {
    const id = toNumber$1(value);
    if (id && id > 0) ids.add(id);
  }
  return [...ids];
}
function toNumber$1(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}
function normalizeProvider(activity) {
  return [
    activity.PROVIDER_ID,
    activity.PROVIDER_TYPE_ID,
    activity.PROVIDER_GROUP_ID,
    activity.providerId,
    activity.providerTypeId,
    activity.subject,
    activity.description
  ].filter(Boolean).join(" ").toLowerCase();
}
function getActivityDateRaw(activity) {
  var _a, _b, _c, _d, _e, _f;
  return (_f = (_e = (_d = (_c = (_b = (_a = activity.startTime) != null ? _a : activity.START_TIME) != null ? _b : activity.createdAt) != null ? _c : activity.CREATED) != null ? _d : activity.endTime) != null ? _e : activity.END_TIME) != null ? _f : null;
}
function getWallClockMs(value) {
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2})(?:\.\d{1,3})?)?/);
  if (!match) return null;
  const [, year, month, day, hour, minute, second = "0"] = match;
  return Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second));
}
function retagUtcAsMoscow(value) {
  return value.replace(/Z$/i, "+03:00");
}
function normalizeActivityDate(activityDate, leadCreatedAt) {
  if (!/Z$/i.test(activityDate)) return activityDate;
  const activityTime = new Date(activityDate).getTime();
  const leadTime = new Date(leadCreatedAt).getTime();
  const activityWallTime = getWallClockMs(activityDate);
  const leadWallTime = getWallClockMs(leadCreatedAt);
  if (!Number.isFinite(activityTime) || !Number.isFinite(leadTime) || activityWallTime == null || leadWallTime == null) {
    return activityDate;
  }
  const absoluteDiff = activityTime - leadTime;
  const wallClockDiff = activityWallTime - leadWallTime;
  const timezoneDrift = absoluteDiff - wallClockDiff;
  if (wallClockDiff >= 0 && Math.abs(timezoneDrift - MOSCOW_OFFSET_MINUTES * MINUTE_MS) <= TIMEZONE_DRIFT_TOLERANCE_MS || absoluteDiff < 0 && Math.abs(absoluteDiff + MOSCOW_OFFSET_MINUTES * MINUTE_MS) <= TIMEZONE_DRIFT_TOLERANCE_MS && Math.abs(wallClockDiff) <= TIMEZONE_DRIFT_TOLERANCE_MS) {
    return retagUtcAsMoscow(activityDate);
  }
  return activityDate;
}
function getActivityDate(activity, leadCreatedAt) {
  const activityDate = getActivityDateRaw(activity);
  return activityDate && leadCreatedAt ? normalizeActivityDate(activityDate, leadCreatedAt) : activityDate;
}
function compareIsoDates(a, b) {
  return new Date(a).getTime() - new Date(b).getTime();
}
function getEarliestDate(dates) {
  var _a;
  return (_a = dates.filter((date) => Number.isFinite(new Date(date).getTime())).sort(compareIsoDates)[0]) != null ? _a : null;
}
function getEffectiveLeadCreatedAt(lead, activities, fallback) {
  var _a;
  const leadCreatedAt = (_a = getLeadCreatedAt(lead)) != null ? _a : fallback;
  if (getLeadSourceId(lead) !== "EMAIL") return leadCreatedAt;
  const firstIncomingEmailAt = getEarliestDate(
    activities.filter((activity) => isEmail(activity) && isIncoming(activity)).map((activity) => getActivityDate(activity, leadCreatedAt)).filter((date) => Boolean(date))
  );
  if (!firstIncomingEmailAt) return leadCreatedAt;
  return compareIsoDates(firstIncomingEmailAt, leadCreatedAt) < 0 ? firstIncomingEmailAt : leadCreatedAt;
}
function stripHtml(value) {
  return value.replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]*>/g, " ").replace(/&nbsp;/gi, " ").replace(/&quot;/gi, '"').replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/\s+/g, " ").trim();
}
function toOffsetIso(params) {
  const { year, month, day, hour, minute, offset } = params;
  if (month < 1 || month > 12 || day < 1 || day > 31 || hour > 23 || minute > 59) return null;
  const pad = (value) => String(value).padStart(2, "0");
  const iso = `${year}-${pad(month)}-${pad(day)}T${pad(hour)}:${pad(minute)}:00${offset}`;
  return Number.isFinite(new Date(iso).getTime()) ? iso : null;
}
function toUtcIsoFromEnglishAmPm(params) {
  const { year, month, day, minute, meridiem } = params;
  let hour = params.hour;
  if (month < 1 || month > 12 || day < 1 || day > 31 || hour < 1 || hour > 12 || minute > 59) return null;
  const marker = meridiem.toLowerCase();
  if (marker === "pm" && hour !== 12) hour += 12;
  if (marker === "am" && hour === 12) hour = 0;
  const iso = new Date(Date.UTC(year, month - 1, day, hour, minute, 0)).toISOString();
  return Number.isFinite(new Date(iso).getTime()) ? iso : null;
}
function getEmbeddedOutgoingEmailDates(activity) {
  var _a;
  if (!isEmail(activity)) return [];
  const text = stripHtml((_a = activity.description) != null ? _a : "");
  if (!text) return [];
  const dates = [];
  const replyDatePattern = /(\d{1,2})\s+(января|февраля|марта|апреля|мая|июня|июля|августа|сентября|октября|ноября|декабря)\s+(\d{4})\s*г?\.?,?\s+(\d{1,2}):(\d{2})\s*([+-]\d{2}:\d{2})\s+от\s+Русский\s+Экспресс/giu;
  for (const match of text.matchAll(replyDatePattern)) {
    const [, day, monthName, year, hour, minute, offset] = match;
    const month = monthName ? RU_MONTHS[monthName.toLowerCase()] : void 0;
    if (!day || !year || !hour || !minute || !offset || month == null) continue;
    const iso = toOffsetIso({
      year: Number(year),
      month,
      day: Number(day),
      hour: Number(hour),
      minute: Number(minute),
      offset
    });
    if (iso) dates.push(iso);
  }
  const englishReplyDatePattern = /From:\s*Русский\s+Экспресс[\s\S]{0,800}?Sent:\s*(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),?\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s+(\d{4})\s+(\d{1,2}):(\d{2})\s*(AM|PM)/giu;
  for (const match of text.matchAll(englishReplyDatePattern)) {
    const [, monthName, day, year, hour, minute, meridiem] = match;
    const month = monthName ? EN_MONTHS[monthName.toLowerCase()] : void 0;
    if (!day || !year || !hour || !minute || !meridiem || month == null) continue;
    const iso = toUtcIsoFromEnglishAmPm({
      year: Number(year),
      month,
      day: Number(day),
      hour: Number(hour),
      minute: Number(minute),
      meridiem
    });
    if (iso) dates.push(iso);
  }
  return dates;
}
function getIncomingCallContactDate(activity, leadCreatedAt) {
  var _a, _b, _c, _d;
  const startDate = getActivityDate(activity, leadCreatedAt);
  if (!isProcessedIncomingCallContact(activity)) return startDate;
  const leadTime = new Date(leadCreatedAt).getTime();
  const startTime = startDate ? new Date(startDate).getTime() : Number.NaN;
  if (Number.isFinite(startTime) && Number.isFinite(leadTime) && startTime >= leadTime) return startDate;
  const endDateRaw = (_d = (_c = (_b = (_a = activity.endTime) != null ? _a : activity.END_TIME) != null ? _b : activity.updatedAt) != null ? _c : activity.LAST_UPDATED) != null ? _d : null;
  const endDate = endDateRaw ? normalizeActivityDate(endDateRaw, leadCreatedAt) : null;
  const endTime = endDate ? new Date(endDate).getTime() : Number.NaN;
  if (Number.isFinite(endTime) && Number.isFinite(leadTime) && endTime >= leadTime) return endDate;
  return startDate;
}
function isCompleted(activity) {
  var _a, _b;
  return activity.completed === true || activity.completed === "Y" || FINISHED_STATUSES.has(String((_b = (_a = activity.STATUS) != null ? _a : activity.status) != null ? _b : ""));
}
function isSuccessful(activity) {
  var _a, _b;
  const status = String((_b = (_a = activity.STATUS) != null ? _a : activity.status) != null ? _b : "");
  if (SUCCESS_STATUSES.has(status)) return true;
  const providerText = normalizeProvider(activity);
  if (providerText.includes("crm_email") || providerText.includes("imol") || providerText.includes("openline")) {
    return isCompleted(activity);
  }
  return isCompleted(activity) && !["4", "5", "6"].includes(status);
}
function isCall(activity) {
  var _a;
  const typeId = toNumber$1((_a = activity.typeId) != null ? _a : activity.TYPE_ID);
  return typeId === 2 || normalizeProvider(activity).includes("call");
}
function isSuccessfulCall(activity) {
  var _a, _b;
  return String((_b = (_a = activity.STATUS) != null ? _a : activity.status) != null ? _b : "") === "2";
}
function isMissedCallActivity(activity) {
  var _a, _b, _c;
  const settings = (_a = activity.SETTINGS) != null ? _a : activity.settings;
  const missedBySettings = Boolean(settings && !Array.isArray(settings) && settings.MISSED_CALL === true);
  return missedBySettings || String((_c = (_b = activity.RESULT_STREAM) != null ? _b : activity.resultStream) != null ? _c : "") === "4";
}
function isEmail(activity) {
  var _a;
  const typeId = toNumber$1((_a = activity.typeId) != null ? _a : activity.TYPE_ID);
  const providerText = normalizeProvider(activity);
  return typeId === 4 || providerText.includes("email") || providerText.includes("mail");
}
function isAutomaticRegistrationEmail(activity) {
  if (!isEmail(activity)) return false;
  return normalizeProvider(activity).includes("\u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E");
}
function isOpenLine(activity) {
  const providerText = normalizeProvider(activity);
  return providerText.includes("imol") || providerText.includes("openline") || providerText.includes("open line") || providerText.includes("ol_");
}
function isOpenLineLead(lead, activities) {
  const leadText = normalizeText([lead.sourceId, lead.sourceDescription, lead.title].filter(Boolean).join(" "));
  return leadText.includes("telegram") || leadText.includes("openline") || leadText.includes("imol") || activities.some(isOpenLine);
}
function getLeadOnlineChatContactDate(lead, activities, leadCreatedAt) {
  var _a, _b;
  if (!isOpenLineLead(lead, activities)) return null;
  const date = (_b = (_a = lead.ufCrm_1716370242690) != null ? _a : lead.ufCrm_1715933850) != null ? _b : null;
  return date ? normalizeActivityDate(date, leadCreatedAt) : null;
}
function normalizeText(value) {
  return value.replace(/\[img\][\s\S]*?\[\/img\]/gi, " ").replace(/<[^>]*>/g, " ").replace(/&nbsp;/gi, " ").replace(/&quot;/gi, '"').replace(/&amp;/gi, "&").replace(/\s+/g, " ").trim().toLowerCase();
}
function hasOutgoingInTitle(lead) {
  var _a;
  return normalizeText((_a = lead.title) != null ? _a : "").includes(OUTGOING_LEAD_TITLE_WORD);
}
function hasIncomingCallInTitle(lead) {
  var _a;
  return normalizeText((_a = lead.title) != null ? _a : "").includes("\u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0437\u0432\u043E\u043D\u043E\u043A");
}
function hasDefaultNumberedLeadTitle(lead) {
  var _a;
  return DEFAULT_MANUAL_REVIEW_TITLE_PATTERN.test(normalizeText((_a = lead.title) != null ? _a : ""));
}
function isReturnOrRepeatLead(lead) {
  var _a;
  const returnCustomer = String((_a = lead.isReturnCustomer) != null ? _a : "").trim().toUpperCase();
  if (returnCustomer === "Y" || returnCustomer === "YES" || returnCustomer === "TRUE" || returnCustomer === "1") return true;
  const text = normalizeText(
    [lead.title, lead.sourceDescription, lead.comments, lead.searchContent].filter(Boolean).join(" ")
  );
  return RETURN_CUSTOMER_PHRASES.some((phrase) => text.includes(phrase));
}
function getTimelineCommentText(comment) {
  var _a, _b;
  return (_b = (_a = comment.comment) != null ? _a : comment.COMMENT) != null ? _b : "";
}
function getTimelineCommentDate(comment, leadCreatedAt) {
  var _a, _b;
  const date = (_b = (_a = comment.createdAt) != null ? _a : comment.CREATED) != null ? _b : null;
  return date != null ? date : null;
}
function isWazzupComment(comment) {
  return getTimelineCommentText(comment).toLowerCase().includes("wazzup24.com");
}
function isAutomaticWazzupMessage(comment) {
  const text = normalizeText(getTimelineCommentText(comment));
  return AUTO_WAZZUP_MESSAGE_PHRASES.some((phrase) => text.includes(phrase));
}
function getWazzupSenderName(comment) {
  var _a, _b;
  const text = getTimelineCommentText(comment).replace(/\[img\][\s\S]*?\[\/img\]/gi, " ").replace(/&nbsp;/gi, " ").trim();
  const firstLine = (_a = text.split(/\r?\n/, 1)[0]) != null ? _a : "";
  const sender = (_b = firstLine.split(":", 1)[0]) == null ? void 0 : _b.replace(/\s+/g, " ").trim();
  return sender || null;
}
function getCrmUserNames(users) {
  var _a, _b;
  const names = /* @__PURE__ */ new Set();
  for (const user of users.values()) {
    const name = (_a = user.name) == null ? void 0 : _a.trim();
    const lastName = (_b = user.lastName) == null ? void 0 : _b.trim();
    const directName = [name, lastName].filter(Boolean).join(" ").trim();
    const reverseName = [lastName, name].filter(Boolean).join(" ").trim();
    if (directName) names.add(normalizeText(directName));
    if (reverseName) names.add(normalizeText(reverseName));
  }
  return names;
}
function isQualifyingMessengerComment(comment, crmUserNames) {
  if (!isWazzupComment(comment)) return false;
  if (isAutomaticWazzupMessage(comment)) return false;
  const senderName = getWazzupSenderName(comment);
  return Boolean(senderName && crmUserNames.has(normalizeText(senderName)));
}
function isOutgoing(activity) {
  var _a;
  return toNumber$1((_a = activity.direction) != null ? _a : activity.DIRECTION) === 2;
}
function isIncoming(activity) {
  var _a;
  return toNumber$1((_a = activity.direction) != null ? _a : activity.DIRECTION) === 1;
}
function getLeadSourceId(lead) {
  var _a;
  return String((_a = lead.sourceId) != null ? _a : "").trim().toUpperCase();
}
function getIncomingCallEndDate(activity, leadCreatedAt) {
  var _a, _b, _c, _d;
  const endDateRaw = (_d = (_c = (_b = (_a = activity.endTime) != null ? _a : activity.END_TIME) != null ? _b : activity.updatedAt) != null ? _c : activity.LAST_UPDATED) != null ? _d : null;
  return endDateRaw ? normalizeActivityDate(endDateRaw, leadCreatedAt) : null;
}
function isIncomingCallContact(activity) {
  var _a, _b;
  const resultStream = String((_b = (_a = activity.RESULT_STREAM) != null ? _a : activity.resultStream) != null ? _b : "");
  return isCall(activity) && isIncoming(activity) && (isCompleted(activity) || resultStream === "1") && !isMissedCallActivity(activity);
}
function isProcessedIncomingCallContact(activity) {
  var _a, _b, _c, _d, _e, _f;
  if (!isIncomingCallContact(activity)) return false;
  if (String((_b = (_a = activity.RESULT_STREAM) != null ? _a : activity.resultStream) != null ? _b : "") === "1") return true;
  const startDate = getActivityDateRaw(activity);
  const endDate = (_f = (_e = (_d = (_c = activity.endTime) != null ? _c : activity.END_TIME) != null ? _d : activity.updatedAt) != null ? _e : activity.LAST_UPDATED) != null ? _f : null;
  if (!startDate || !endDate) return false;
  const startTime = new Date(startDate).getTime();
  const endTime = new Date(endDate).getTime();
  return Number.isFinite(startTime) && Number.isFinite(endTime) && endTime > startTime;
}
function isIncomingCallNearLeadCreation(params) {
  var _a;
  const { lead, activity, contactDate, processed, leadCreatedAt } = params;
  const contactTime = new Date(contactDate).getTime();
  const leadTime = new Date(leadCreatedAt).getTime();
  if (!Number.isFinite(contactTime) || !Number.isFinite(leadTime)) return false;
  if (contactTime >= leadTime) return true;
  if (!processed || getLeadSourceId(lead) !== "CALL") return false;
  const callEndDate = (_a = getIncomingCallEndDate(activity, leadCreatedAt)) != null ? _a : contactDate;
  const callEndTime = new Date(callEndDate).getTime();
  if (!Number.isFinite(callEndTime) || callEndTime > leadTime) return false;
  return leadTime - callEndTime <= CALL_LEAD_CREATION_GRACE_MINUTES * MINUTE_MS;
}
function isQualifyingOutgoingContact(activity) {
  if (!isOutgoing(activity) || !isCompleted(activity) || !isSuccessful(activity)) return false;
  if (isAutomaticRegistrationEmail(activity)) return false;
  if (isCall(activity) && !isSuccessfulCall(activity)) return false;
  if (isCall(activity) && isMissedCallActivity(activity)) return false;
  return isCall(activity) || isEmail(activity) || isOpenLine(activity);
}
function isQualifyingOutgoingCallAttempt(activity) {
  if (!isCall(activity) || !isOutgoing(activity) || isMissedCallActivity(activity)) return false;
  return isCompleted(activity) && Boolean(getActivityDateRaw(activity));
}
function hasIncomingCallMarker(lead, activities) {
  if (hasIncomingCallInTitle(lead)) return true;
  const leadText = normalizeText([lead.sourceDescription, lead.searchContent, lead.comments].filter(Boolean).join(" "));
  if (leadText.includes("\u043F\u043E\u0441\u0442\u0443\u043F\u0438\u043B \u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0437\u0432\u043E\u043D\u043E\u043A")) return true;
  return activities.some((activity) => normalizeProvider(activity).includes("\u043F\u043E\u0441\u0442\u0443\u043F\u0438\u043B \u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0437\u0432\u043E\u043D\u043E\u043A"));
}
function toMoscowLocalMs(utcMs) {
  return utcMs + MOSCOW_OFFSET_MINUTES * MINUTE_MS;
}
function fromMoscowLocalMs(localMs) {
  return localMs - MOSCOW_OFFSET_MINUTES * MINUTE_MS;
}
function getMoscowDayStartMs(utcMs) {
  const local = toMoscowLocalMs(utcMs);
  const date = new Date(local);
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}
function isEarlyWorkdayUser(user) {
  const fullName = [user == null ? void 0 : user.name, user == null ? void 0 : user.lastName].filter(Boolean).join(" ").trim().toLowerCase();
  return EARLY_WORKDAY_USER_NAMES.has(fullName);
}
function intervalsOverlap(startA, endA, startB, endB) {
  return startA < endB && startB < endA;
}
function hasAbsenceDuringInterval(absenceIntervals, userId, startMs, endMs) {
  if (userId == null) return false;
  return absenceIntervals.some((absence) => {
    if (absence.userId !== userId) return false;
    const absenceStart = new Date(absence.start).getTime();
    const absenceEnd = new Date(absence.end).getTime();
    return Number.isFinite(absenceStart) && Number.isFinite(absenceEnd) && intervalsOverlap(startMs, endMs, absenceStart, absenceEnd);
  });
}
function getWorkingIntervalsForMoscowDay(params) {
  const { dayStartLocalMs, responsibleId, responsibleUser, absenceIntervals } = params;
  const dayOfWeek = new Date(dayStartLocalMs).getUTCDay();
  const intervals = [];
  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    const earlyStartMs = fromMoscowLocalMs(dayStartLocalMs + 8 * 60 * MINUTE_MS);
    const earlyEndMs = fromMoscowLocalMs(dayStartLocalMs + 10 * 60 * MINUTE_MS);
    if (isEarlyWorkdayUser(responsibleUser) && !hasAbsenceDuringInterval(absenceIntervals, responsibleId, earlyStartMs, earlyEndMs)) {
      intervals.push({ startMinute: 8 * 60, endMinute: 10 * 60 });
    }
    intervals.push({ startMinute: 10 * 60, endMinute: 20 * 60 });
  } else if (dayOfWeek === 6) {
    intervals.push({ startMinute: 11 * 60, endMinute: 19 * 60 });
  }
  return intervals.map((interval) => ({
    startMs: fromMoscowLocalMs(dayStartLocalMs + interval.startMinute * MINUTE_MS),
    endMs: fromMoscowLocalMs(dayStartLocalMs + interval.endMinute * MINUTE_MS)
  }));
}
function workingMinutesBetween(params) {
  const startMs = new Date(params.startIso).getTime();
  const endMs = new Date(params.endIso).getTime();
  if (!Number.isFinite(startMs) || !Number.isFinite(endMs) || endMs <= startMs) return 0;
  let totalMs = 0;
  for (let dayStartLocalMs = getMoscowDayStartMs(startMs); dayStartLocalMs <= getMoscowDayStartMs(endMs); dayStartLocalMs += DAY_MS) {
    for (const interval of getWorkingIntervalsForMoscowDay({ ...params, dayStartLocalMs })) {
      const overlapStart = Math.max(startMs, interval.startMs);
      const overlapEnd = Math.min(endMs, interval.endMs);
      if (overlapEnd > overlapStart) totalMs += overlapEnd - overlapStart;
    }
  }
  return Math.floor(totalMs / MINUTE_MS);
}
function getResponsibleName$1(lead, users) {
  const id = toNumber$1(lead.assignedById);
  if (id == null) return "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D";
  const user = users.get(id);
  if (!user) return `ID ${id}`;
  return [user.name, user.lastName].filter(Boolean).join(" ").trim() || `ID ${id}`;
}
function isItDepartmentResponsible(lead, users) {
  return normalizeText(getResponsibleName$1(lead, users)) === IT_DEPARTMENT_NAME;
}
function getResponsibleId$1(lead) {
  return toNumber$1(lead.assignedById);
}
function getLeadStatusId$1(lead) {
  var _a, _b;
  return String((_b = (_a = lead.statusId) != null ? _a : lead.stageId) != null ? _b : "").trim();
}
function getLeadStageName$1(lead, leadStatusNames) {
  var _a;
  const statusId = getLeadStatusId$1(lead);
  return (_a = leadStatusNames.get(statusId)) != null ? _a : statusId || "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D";
}
function getPrintableFieldValue$1(value, dictionary) {
  var _a;
  if (Array.isArray(value)) {
    const values = value.map((item) => getPrintableFieldValue$1(item, dictionary)).filter((item) => Boolean(item));
    return values.length > 0 ? values.join(", ") : null;
  }
  if (value == null || value === "") return null;
  const key = String(value).trim();
  return (_a = dictionary.get(key)) != null ? _a : key;
}
function getLeadRejectionReason$1(lead, rejectionReasonNames) {
  var _a;
  if (getLeadStatusId$1(lead) !== "JUNK") return null;
  return getPrintableFieldValue$1((_a = lead.ufCrm_1638180783) != null ? _a : lead.UF_CRM_1638180783, rejectionReasonNames);
}
function hasRejectionReasonId(lead, reasonId) {
  var _a;
  const value = (_a = lead.ufCrm_1638180783) != null ? _a : lead.UF_CRM_1638180783;
  if (Array.isArray(value)) return value.some((item) => String(item).trim() === reasonId);
  return String(value != null ? value : "").trim() === reasonId;
}
function shouldExcludeRejectedLeadByReason(lead, rejectionReasonNames) {
  const reason = getLeadRejectionReason$1(lead, rejectionReasonNames);
  return Boolean(
    reason && EXCLUDED_REJECTION_REASONS.has(normalizeText(reason)) || getLeadStatusId$1(lead) === "JUNK" && hasIncomingCallInTitle(lead) && hasRejectionReasonId(lead, SYNC_ERROR_REJECTION_REASON_ID)
  );
}
function shouldExcludeLeadBySource(lead, leadSourceNames) {
  var _a, _b;
  const sourceId = String((_a = lead.sourceId) != null ? _a : "").trim();
  const sourceName = (_b = leadSourceNames.get(sourceId)) != null ? _b : sourceId;
  return EXCLUDED_SOURCE_NAMES.has(normalizeText(sourceName));
}
function hasNonErrorRejectionReason(rejectionReason) {
  return Boolean(rejectionReason && NON_ERROR_REJECTION_REASONS.has(normalizeText(rejectionReason)));
}
function getViolationFlag(status, slaOverrunMinutes) {
  if (status === "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0440\u0443\u0447\u043D\u0430\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430") return "\u041D\u0435\u0442";
  return slaOverrunMinutes > 0 ? "\u0414\u0430" : "\u041D\u0435\u0442";
}
function buildSlaRow(params) {
  var _a, _b;
  const {
    lead,
    activities,
    timelineComments = [],
    users,
    checkedAt,
    hadMissedCallStage = false,
    hadNeedsIdentificationStage = false,
    transferredToMptAt = null,
    absenceIntervals = [],
    leadStatusNames = /* @__PURE__ */ new Map(),
    rejectionReasonNames = /* @__PURE__ */ new Map()
  } = params;
  const leadCreatedAt = getEffectiveLeadCreatedAt(lead, activities, checkedAt);
  const responsibleId = getResponsibleId$1(lead);
  const responsibleUser = responsibleId == null ? void 0 : users.get(responsibleId);
  const crmUserNames = getCrmUserNames(users);
  const getSlaMinutes = (endIso) => workingMinutesBetween({ startIso: leadCreatedAt, endIso, responsibleId, responsibleUser, absenceIntervals });
  const isMissedCallLead = hadMissedCallStage || isLeadMarkedAsMissedCall(lead);
  const incomingCalls = activities.filter(isIncomingCallContact).map((activity) => ({ activity, date: getIncomingCallContactDate(activity, leadCreatedAt), processed: isProcessedIncomingCallContact(activity) })).filter((item) => Boolean(item.date)).filter(
    (item) => isIncomingCallNearLeadCreation({
      lead,
      activity: item.activity,
      contactDate: item.date,
      processed: item.processed,
      leadCreatedAt
    })
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const incomingCall = (_a = incomingCalls.find((item) => item.processed)) != null ? _a : !isMissedCallLead ? incomingCalls[0] : null;
  let firstContactAt = null;
  let minutesToFirstContact = null;
  let slaOverrunMinutes = 0;
  let status;
  if (getLeadStatusId$1(lead) === TRANSFERRED_TO_MPT_STATUS_ID && transferredToMptAt) {
    firstContactAt = transferredToMptAt;
    minutesToFirstContact = getSlaMinutes(transferredToMptAt);
    slaOverrunMinutes = Math.max(0, minutesToFirstContact - SLA_LIMIT_MINUTES);
    status = minutesToFirstContact <= SLA_LIMIT_MINUTES ? "\u0412 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 15 \u043C\u0438\u043D\u0443\u0442" : "\u0411\u043E\u043B\u0435\u0435 15 \u043C\u0438\u043D\u0443\u0442";
  } else if (isItDepartmentResponsible(lead, users) && !hasOutgoingInTitle(lead)) {
    status = "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0440\u0443\u0447\u043D\u0430\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430";
  } else if (incomingCall) {
    firstContactAt = incomingCall.date;
    minutesToFirstContact = firstContactAt ? getSlaMinutes(firstContactAt) : null;
    status = "\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0437\u0432\u043E\u043D\u043E\u043A";
  } else if (!isMissedCallLead && hasIncomingCallInTitle(lead) && hasIncomingCallMarker(lead, activities)) {
    firstContactAt = leadCreatedAt;
    minutesToFirstContact = 0;
    status = "\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0437\u0432\u043E\u043D\u043E\u043A";
  } else {
    const activityContacts = activities.flatMap((activity) => {
      const contacts2 = [];
      if (isQualifyingOutgoingContact(activity) || isQualifyingOutgoingCallAttempt(activity)) {
        contacts2.push({ date: getActivityDate(activity, leadCreatedAt) });
      }
      for (const date of getEmbeddedOutgoingEmailDates(activity)) contacts2.push({ date });
      return contacts2;
    }).filter((item) => Boolean(item.date)).filter((item) => new Date(item.date).getTime() >= new Date(leadCreatedAt).getTime());
    const onlineChatDate = getLeadOnlineChatContactDate(lead, activities, leadCreatedAt);
    const onlineChatContacts = onlineChatDate ? [{ date: onlineChatDate }] : [];
    const messengerContacts = timelineComments.filter((comment) => isQualifyingMessengerComment(comment, crmUserNames)).map((comment) => ({ date: getTimelineCommentDate(comment) })).filter((item) => Boolean(item.date)).filter((item) => new Date(item.date).getTime() >= new Date(leadCreatedAt).getTime()).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const contacts = [...activityContacts, ...onlineChatContacts, ...messengerContacts].filter((item) => new Date(item.date).getTime() >= new Date(leadCreatedAt).getTime()).sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    if (contacts.length === 0) {
      status = "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0430 \u043D\u0435 \u0431\u044B\u043B\u043E";
      const elapsedWorkingMinutes = getSlaMinutes(checkedAt);
      slaOverrunMinutes = Math.max(0, elapsedWorkingMinutes - SLA_LIMIT_MINUTES);
    } else {
      const firstContact = contacts[0];
      if (!firstContact) {
        status = "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0430 \u043D\u0435 \u0431\u044B\u043B\u043E";
        const elapsedWorkingMinutes = getSlaMinutes(checkedAt);
        slaOverrunMinutes = Math.max(0, elapsedWorkingMinutes - SLA_LIMIT_MINUTES);
      } else {
        firstContactAt = firstContact.date;
        minutesToFirstContact = getSlaMinutes(firstContactAt);
        slaOverrunMinutes = Math.max(0, minutesToFirstContact - SLA_LIMIT_MINUTES);
        status = minutesToFirstContact <= SLA_LIMIT_MINUTES ? "\u0412 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 15 \u043C\u0438\u043D\u0443\u0442" : "\u0411\u043E\u043B\u0435\u0435 15 \u043C\u0438\u043D\u0443\u0442";
      }
    }
  }
  const rejectionReason = getLeadRejectionReason$1(lead, rejectionReasonNames);
  const violationFlag = hasNonErrorRejectionReason(rejectionReason) ? "\u041D\u0435\u0442" : getViolationFlag(status, slaOverrunMinutes);
  return {
    id: `${lead.id}-${checkedAt}`,
    leadId: lead.id,
    leadTitle: ((_b = lead.title) == null ? void 0 : _b.trim()) || `\u041B\u0438\u0434 ${lead.id}`,
    leadStageName: getLeadStageName$1(lead, leadStatusNames),
    rejectionReason,
    checkedAt,
    leadCreatedAt,
    firstContactAt,
    minutesToFirstContact,
    slaOverrunMinutes,
    status,
    responsibleId,
    responsibleName: getResponsibleName$1(lead, users),
    violationFlag
  };
}
function hasMissedCallStage(history) {
  return history.some((item) => {
    var _a;
    return String((_a = item.statusId) != null ? _a : "") === MISSED_CALL_STATUS_ID;
  });
}
function hasNeedsIdentificationStage(history) {
  return history.some((item) => {
    var _a;
    const status = normalizeText(String((_a = item.statusId) != null ? _a : ""));
    return status === NEEDS_IDENTIFICATION_STATUS_ID || status.includes("\u0432\u044B\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u0435\u0439");
  });
}
function isTransferredToMptLead(lead) {
  return getLeadStatusId$1(lead) === TRANSFERRED_TO_MPT_STATUS_ID;
}
function getTransferredToMptAt(history) {
  var _a;
  return (_a = history.filter((item) => {
    var _a2;
    return String((_a2 = item.statusId) != null ? _a2 : "") === TRANSFERRED_TO_MPT_STATUS_ID;
  }).map((item) => {
    var _a2;
    return (_a2 = item.createdAt) != null ? _a2 : null;
  }).filter((date) => Boolean(date && Number.isFinite(new Date(date).getTime()))).sort(compareIsoDates)[0]) != null ? _a : null;
}

const SLA_STATUS_FIELD_VALUES = {
  "\u0412 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 15 \u043C\u0438\u043D\u0443\u0442": 3006,
  "\u0411\u043E\u043B\u0435\u0435 15 \u043C\u0438\u043D\u0443\u0442": 3008,
  "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0430 \u043D\u0435 \u0431\u044B\u043B\u043E": 3010,
  "\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0437\u0432\u043E\u043D\u043E\u043A": 3140,
  "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0440\u0443\u0447\u043D\u0430\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430": 3146
};
const SLA_STATUS_BY_FIELD_VALUE = new Map(
  Object.entries(SLA_STATUS_FIELD_VALUES).map(([status, value]) => [String(value), status])
);
const STATUS_WITHOUT_FIRST_CONTACT = /* @__PURE__ */ new Set(["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0430 \u043D\u0435 \u0431\u044B\u043B\u043E", "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0440\u0443\u0447\u043D\u0430\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430"]);
function toNumber(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}
function toNonEmptyString(value) {
  return typeof value === "string" && value.trim() !== "" ? value.trim() : null;
}
function isValidDate(value) {
  return typeof value === "string" && value.trim() !== "" && Number.isFinite(new Date(value).getTime());
}
function isValueFilled(value) {
  return value !== null && value !== void 0 && String(value).trim() !== "";
}
function getResponsibleId(lead) {
  return toNumber(lead.assignedById);
}
function getResponsibleName(lead, users) {
  const id = getResponsibleId(lead);
  if (id == null) return "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D";
  const user = users.get(id);
  if (!user) return `ID ${id}`;
  return [user.name, user.lastName].filter(Boolean).join(" ").trim() || `ID ${id}`;
}
function getLeadStatusId(lead) {
  var _a, _b;
  return String((_b = (_a = lead.statusId) != null ? _a : lead.stageId) != null ? _b : "").trim();
}
function getLeadStageName(lead, leadStatusNames) {
  var _a;
  const statusId = getLeadStatusId(lead);
  return (_a = leadStatusNames.get(statusId)) != null ? _a : statusId || "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D";
}
function getPrintableFieldValue(value, dictionary) {
  var _a;
  if (Array.isArray(value)) {
    const values = value.map((item) => getPrintableFieldValue(item, dictionary)).filter((item) => Boolean(item));
    return values.length > 0 ? values.join(", ") : null;
  }
  if (!isValueFilled(value)) return null;
  const key = String(value).trim();
  return (_a = dictionary.get(key)) != null ? _a : key;
}
function getLeadRejectionReason(lead, rejectionReasonNames) {
  var _a;
  if (getLeadStatusId(lead) !== "JUNK") return null;
  return getPrintableFieldValue((_a = lead.ufCrm_1638180783) != null ? _a : lead.UF_CRM_1638180783, rejectionReasonNames);
}
function getSlaStatusFromCrmField(value) {
  var _a;
  return (_a = SLA_STATUS_BY_FIELD_VALUE.get(String(value != null ? value : "").trim())) != null ? _a : null;
}
function getViolationFlagFromCrmField(value) {
  if (value === true || value === 1) return "\u0414\u0430";
  if (value === false || value === 0) return "\u041D\u0435\u0442";
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    if (["1", "y", "yes", "true", "\u0434\u0430"].includes(normalized)) return "\u0414\u0430";
    if (["0", "n", "no", "false", "\u043D\u0435\u0442"].includes(normalized)) return "\u041D\u0435\u0442";
  }
  return null;
}
function hasCompleteContactFields(lead, status) {
  if (STATUS_WITHOUT_FIRST_CONTACT.has(status)) return true;
  return isValidDate(lead.ufCrm_1715933850) && toNumber(lead.ufCrm_1716566007) != null;
}
function buildSlaRowFromCrmFields(params) {
  var _a;
  const { lead, users, checkedAt, leadStatusNames = /* @__PURE__ */ new Map(), rejectionReasonNames = /* @__PURE__ */ new Map() } = params;
  const status = getSlaStatusFromCrmField(lead.ufCrm_1716369534832);
  const violationFlag = getViolationFlagFromCrmField(lead.ufCrm_1777686837399);
  const slaOverrunMinutes = toNumber(lead.ufCrm_1777370132452);
  const leadCreatedAt = getLeadCreatedAt(lead);
  if (!status || !violationFlag || slaOverrunMinutes == null || !leadCreatedAt || !hasCompleteContactFields(lead, status)) {
    return null;
  }
  return {
    id: `${lead.id}-${checkedAt}`,
    leadId: lead.id,
    leadTitle: ((_a = lead.title) == null ? void 0 : _a.trim()) || `\u041B\u0438\u0434 ${lead.id}`,
    leadStageName: getLeadStageName(lead, leadStatusNames),
    rejectionReason: getLeadRejectionReason(lead, rejectionReasonNames),
    checkedAt,
    leadCreatedAt,
    firstContactAt: STATUS_WITHOUT_FIRST_CONTACT.has(status) ? null : toNonEmptyString(lead.ufCrm_1715933850),
    minutesToFirstContact: STATUS_WITHOUT_FIRST_CONTACT.has(status) ? null : toNumber(lead.ufCrm_1716566007),
    slaOverrunMinutes,
    status,
    responsibleId: getResponsibleId(lead),
    responsibleName: getResponsibleName(lead, users),
    violationFlag
  };
}
function getSlaCrmUpdateFields(row) {
  return {
    leadId: row.leadId,
    fields: {
      ufCrm_1715933850: row.firstContactAt,
      ufCrm_1716566007: row.minutesToFirstContact,
      ufCrm_1716369534832: SLA_STATUS_FIELD_VALUES[row.status],
      ufCrm_1777686837399: row.violationFlag === "\u0414\u0430" ? 1 : 0,
      ufCrm_1777370132452: row.slaOverrunMinutes
    }
  };
}
function getMissingSlaCrmUpdateFields(row, lead) {
  const update = getSlaCrmUpdateFields(row);
  if (!lead) return update;
  const fields = {};
  if (row.firstContactAt != null && !isValidDate(lead.ufCrm_1715933850)) {
    fields.ufCrm_1715933850 = row.firstContactAt;
  }
  if (row.minutesToFirstContact != null && toNumber(lead.ufCrm_1716566007) == null) {
    fields.ufCrm_1716566007 = row.minutesToFirstContact;
  }
  if (!getSlaStatusFromCrmField(lead.ufCrm_1716369534832)) {
    fields.ufCrm_1716369534832 = SLA_STATUS_FIELD_VALUES[row.status];
  }
  if (!getViolationFlagFromCrmField(lead.ufCrm_1777686837399)) {
    fields.ufCrm_1777686837399 = row.violationFlag === "\u0414\u0430" ? 1 : 0;
  }
  if (toNumber(lead.ufCrm_1777370132452) == null) {
    fields.ufCrm_1777370132452 = row.slaOverrunMinutes;
  }
  return { leadId: row.leadId, fields };
}

function isCreatedAtInRange(value, range) {
  const valueTime = value ? new Date(value).getTime() : Number.NaN;
  const minTime = new Date(range.createdFrom).getTime();
  const maxTime = new Date(range.createdTo).getTime();
  return Number.isFinite(valueTime) && Number.isFinite(minTime) && Number.isFinite(maxTime) && valueTime >= minTime && valueTime <= maxTime;
}
function getLeadResponsibleId(lead) {
  const value = lead.assignedById;
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}
function isUserActive(user) {
  if (!user) return true;
  if (user.active === false) return false;
  if (typeof user.active === "string") {
    const normalized = user.active.trim().toLowerCase();
    return normalized !== "n" && normalized !== "false" && normalized !== "0";
  }
  return true;
}
function isLeadAssignedToActiveUser(lead, users) {
  const responsibleId = getLeadResponsibleId(lead);
  if (responsibleId == null) return true;
  return isUserActive(users.get(responsibleId));
}
async function runSlaCheckJob(apiKey, dateRange, reportProgress, options = {}) {
  var _a, _b, _c, _d;
  reportProgress({ stage: "starting", message: "\u0413\u043E\u0442\u043E\u0432\u0438\u043C \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443", current: 0, total: 1 });
  const checkedAt = (/* @__PURE__ */ new Date()).toISOString();
  const client = new VibeCodeClient(apiKey);
  reportProgress({ stage: "loading_leads", message: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u043B\u0438\u0434\u044B \u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432", current: 0, total: 1 });
  const [leads, users, leadStatusNames, rejectionReasonNames, leadSourceNames] = await Promise.all([
    client.searchLeads(dateRange.createdFrom, dateRange.createdTo),
    client.listUsers(),
    client.listLeadStatusNames(),
    client.listLeadRejectionReasonNames(),
    client.listLeadSourceNames()
  ]);
  const usersMap = new Map(users.map((user) => [Number(user.id), user]));
  const filteredLeads = leads.filter(
    (lead) => {
      var _a2;
      return shouldAnalyzeLead(lead) && isCreatedAtInRange((_a2 = lead.createdAt) != null ? _a2 : lead.createdTime, dateRange) && !shouldExcludeLeadBySource(lead, leadSourceNames) && !shouldExcludeRejectedLeadByReason(lead, rejectionReasonNames) && isLeadAssignedToActiveUser(lead, usersMap);
    }
  );
  const leadById = new Map(filteredLeads.map((lead) => [lead.id, lead]));
  const crmCompleteRows = [];
  const leadsNeedingCalculation = [];
  for (const lead of filteredLeads) {
    const crmRow = buildSlaRowFromCrmFields({
      lead,
      users: usersMap,
      checkedAt,
      leadStatusNames,
      rejectionReasonNames
    });
    if (crmRow) {
      crmCompleteRows.push(crmRow);
    } else {
      leadsNeedingCalculation.push(lead);
    }
  }
  const earlyShiftUsers = users.filter(isEarlyWorkdayUser);
  const leadIds = leadsNeedingCalculation.map((lead) => lead.id);
  let loadedActivityItems = 0;
  const reportLoadedActivities = (processed) => {
    loadedActivityItems += processed;
    reportProgress({
      stage: "loading_contacts",
      message: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438",
      current: Math.min(loadedActivityItems, Math.max(1, leadIds.length)),
      total: Math.max(1, leadIds.length)
    });
  };
  reportProgress({ stage: "loading_contacts", message: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438", current: 0, total: Math.max(1, leadIds.length) });
  const leadActivitiesByLead = await client.listActivitiesForLeads(leadIds, reportLoadedActivities);
  const contactIdsByLead = /* @__PURE__ */ new Map();
  const contactIds = /* @__PURE__ */ new Set();
  for (const lead of leadsNeedingCalculation) {
    const ids = isReturnOrRepeatLead(lead) ? getLeadContactIds(lead) : [];
    contactIdsByLead.set(lead.id, ids);
    for (const id of ids) contactIds.add(id);
  }
  let loadedContactActivityItems = 0;
  const reportLoadedContactActivities = (processed) => {
    loadedContactActivityItems += processed;
    reportProgress({
      stage: "loading_contacts",
      message: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432",
      current: Math.min(loadedContactActivityItems, Math.max(1, contactIds.size)),
      total: Math.max(1, contactIds.size)
    });
  };
  const contactActivitiesByContact = contactIds.size > 0 ? await client.listActivitiesForContacts([...contactIds], reportLoadedContactActivities) : /* @__PURE__ */ new Map();
  const activitiesByLead = /* @__PURE__ */ new Map();
  for (const lead of leadsNeedingCalculation) {
    const activities = [...(_a = leadActivitiesByLead.get(lead.id)) != null ? _a : []];
    for (const contactId of (_b = contactIdsByLead.get(lead.id)) != null ? _b : []) {
      activities.push(...(_c = contactActivitiesByContact.get(contactId)) != null ? _c : []);
    }
    activitiesByLead.set(lead.id, activities);
  }
  const stageHistoryLeadIds = [
    ...new Set(
      leadsNeedingCalculation.filter((lead) => isTransferredToMptLead(lead)).map((lead) => lead.id)
    )
  ];
  reportProgress({
    stage: "loading_history",
    message: "\u0423\u0442\u043E\u0447\u043D\u044F\u0435\u043C \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043D\u044B\u0445 \u0437\u0432\u043E\u043D\u043A\u043E\u0432",
    current: 0,
    total: Math.max(1, stageHistoryLeadIds.length)
  });
  let loadedHistoryItems = 0;
  const reportLoadedHistory = (processed) => {
    loadedHistoryItems += processed;
    reportProgress({
      stage: "loading_history",
      message: "\u0423\u0442\u043E\u0447\u043D\u044F\u0435\u043C \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043D\u044B\u0445 \u0437\u0432\u043E\u043D\u043A\u043E\u0432",
      current: loadedHistoryItems,
      total: Math.max(1, stageHistoryLeadIds.length)
    });
  };
  const [stageHistoryByLead, earlyShiftAbsenceIntervals] = await Promise.all([
    client.listStageHistoryForLeads(stageHistoryLeadIds, reportLoadedHistory),
    Promise.all(
      earlyShiftUsers.map(
        (user) => client.listAbsenceIntervalsForUser(Number(user.id), dateRange.createdFrom, checkedAt).catch((error) => {
          console.warn(`Failed to load absence intervals for early-shift user ${user.id}:`, error);
          return [];
        })
      )
    ).then((intervals) => intervals.flat())
  ]);
  const provisionalRows = new Map(
    leadsNeedingCalculation.map((lead) => {
      var _a2, _b2, _c2, _d2;
      return [
        lead.id,
        buildSlaRow({
          lead,
          activities: (_a2 = activitiesByLead.get(lead.id)) != null ? _a2 : [],
          users: usersMap,
          checkedAt,
          hadMissedCallStage: hasMissedCallStage((_b2 = stageHistoryByLead.get(lead.id)) != null ? _b2 : []),
          hadNeedsIdentificationStage: hasNeedsIdentificationStage((_c2 = stageHistoryByLead.get(lead.id)) != null ? _c2 : []),
          transferredToMptAt: getTransferredToMptAt((_d2 = stageHistoryByLead.get(lead.id)) != null ? _d2 : []),
          absenceIntervals: earlyShiftAbsenceIntervals,
          leadStatusNames,
          rejectionReasonNames
        })
      ];
    })
  );
  const timelineLeadIds = leadsNeedingCalculation.filter((lead) => {
    var _a2;
    const status = (_a2 = provisionalRows.get(lead.id)) == null ? void 0 : _a2.status;
    return status !== "\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0437\u0432\u043E\u043D\u043E\u043A" && status !== "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0440\u0443\u0447\u043D\u0430\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430";
  }).map((lead) => lead.id);
  const timelineLeadIdSet = new Set(timelineLeadIds);
  const timelineContactIds = /* @__PURE__ */ new Set();
  for (const lead of leadsNeedingCalculation) {
    if (!timelineLeadIdSet.has(lead.id)) continue;
    for (const contactId of (_d = contactIdsByLead.get(lead.id)) != null ? _d : []) timelineContactIds.add(contactId);
  }
  let loadedTimelineItems = 0;
  const reportLoadedTimeline = (processed) => {
    loadedTimelineItems += processed;
    reportProgress({
      stage: "loading_contacts",
      message: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F Wazzup",
      current: Math.min(loadedTimelineItems, Math.max(1, timelineLeadIds.length)),
      total: Math.max(1, timelineLeadIds.length)
    });
  };
  let loadedContactTimelineItems = 0;
  const reportLoadedContactTimeline = (processed) => {
    loadedContactTimelineItems += processed;
    reportProgress({
      stage: "loading_contacts",
      message: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F Wazzup \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432",
      current: Math.min(loadedContactTimelineItems, Math.max(1, timelineContactIds.size)),
      total: Math.max(1, timelineContactIds.size)
    });
  };
  reportProgress({
    stage: "loading_contacts",
    message: timelineLeadIds.length > 0 ? "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F Wazzup" : "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F Wazzup \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u044E\u0442\u0441\u044F",
    current: 0,
    total: Math.max(1, timelineLeadIds.length)
  });
  const timelineCommentsByLead = timelineLeadIds.length > 0 ? await client.listTimelineCommentsForLeads(timelineLeadIds, reportLoadedTimeline) : /* @__PURE__ */ new Map();
  reportProgress({
    stage: "loading_contacts",
    message: timelineContactIds.size > 0 ? "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F Wazzup \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432" : "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F Wazzup \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432 \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u044E\u0442\u0441\u044F",
    current: 0,
    total: Math.max(1, timelineContactIds.size)
  });
  const timelineCommentsByContact = timelineContactIds.size > 0 ? await client.listTimelineCommentsForContacts([...timelineContactIds], reportLoadedContactTimeline) : /* @__PURE__ */ new Map();
  reportProgress({ stage: "calculating", message: "\u0421\u0447\u0438\u0442\u0430\u0435\u043C SLA", current: 0, total: filteredLeads.length });
  const calculatedRows = leadsNeedingCalculation.map(
    (lead) => {
      var _a2, _b2, _c2, _d2, _e, _f;
      return buildSlaRow({
        lead,
        activities: (_a2 = activitiesByLead.get(lead.id)) != null ? _a2 : [],
        timelineComments: [
          ...(_b2 = timelineCommentsByLead.get(lead.id)) != null ? _b2 : [],
          ...((_c2 = contactIdsByLead.get(lead.id)) != null ? _c2 : []).flatMap((contactId) => {
            var _a3;
            return (_a3 = timelineCommentsByContact.get(contactId)) != null ? _a3 : [];
          })
        ],
        users: usersMap,
        checkedAt,
        hadMissedCallStage: hasMissedCallStage((_d2 = stageHistoryByLead.get(lead.id)) != null ? _d2 : []),
        hadNeedsIdentificationStage: hasNeedsIdentificationStage((_e = stageHistoryByLead.get(lead.id)) != null ? _e : []),
        transferredToMptAt: getTransferredToMptAt((_f = stageHistoryByLead.get(lead.id)) != null ? _f : []),
        absenceIntervals: earlyShiftAbsenceIntervals,
        leadStatusNames,
        rejectionReasonNames
      });
    }
  );
  const rows = [...crmCompleteRows, ...calculatedRows].sort(
    (a, b) => new Date(b.leadCreatedAt).getTime() - new Date(a.leadCreatedAt).getTime()
  );
  if (options.updateCrm) {
    const updates = rows.map((row) => getMissingSlaCrmUpdateFields(row, leadById.get(row.leadId))).filter((update) => Object.keys(update.fields).length > 0);
    reportProgress({
      stage: "updating_crm",
      message: "\u0417\u0430\u043F\u043E\u043B\u043D\u044F\u0435\u043C \u043F\u043E\u043B\u044F SLA \u0432 CRM",
      current: 0,
      total: Math.max(1, updates.length)
    });
    await client.updateLeadsSlaFields(updates);
    reportProgress({
      stage: "updating_crm",
      message: "\u041F\u043E\u043B\u044F SLA \u0432 CRM \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u044B",
      current: updates.length,
      total: Math.max(1, updates.length)
    });
  }
  const payload = await writeSlaLog(rows, checkedAt);
  reportProgress({ stage: "done", message: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430", current: rows.length, total: rows.length });
  return payload;
}

var _a$1;
const MOSCOW_OFFSET = "+03:00";
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const DATETIME_PATTERN = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
function createInitialJob(message = "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043D\u0435 \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u0430") {
  return {
    id: null,
    status: "idle",
    startedAt: null,
    finishedAt: null,
    error: null,
    progress: { stage: "starting", message, current: 0, total: 1 }
  };
}
const state = globalThis;
const reportJobs = (_a$1 = state.__managerAssistantReportJobs) != null ? _a$1 : state.__managerAssistantReportJobs = {
  sla: createInitialJob(),
  dataQuality: createInitialJob(),
  reactivation: createInitialJob(),
  nextStep: createInitialJob()
};
function parseMoscowDateRange(body) {
  const { dateFrom, dateTo } = body;
  if (!dateFrom || !dateTo) {
    throw new Error("\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438");
  }
  const createdFrom = DATE_PATTERN.test(dateFrom) ? /* @__PURE__ */ new Date(`${dateFrom}T00:00:00.000${MOSCOW_OFFSET}`) : DATETIME_PATTERN.test(dateFrom) ? /* @__PURE__ */ new Date(`${dateFrom}:00.000${MOSCOW_OFFSET}`) : new Date(Number.NaN);
  const createdTo = DATE_PATTERN.test(dateTo) ? /* @__PURE__ */ new Date(`${dateTo}T23:59:59.999${MOSCOW_OFFSET}`) : DATETIME_PATTERN.test(dateTo) ? /* @__PURE__ */ new Date(`${dateTo}:59.999${MOSCOW_OFFSET}`) : new Date(Number.NaN);
  if (!Number.isFinite(createdFrom.getTime()) || !Number.isFinite(createdTo.getTime()) || createdFrom > createdTo) {
    throw new Error("\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438");
  }
  return {
    createdFrom: createdFrom.toISOString(),
    createdTo: createdTo.toISOString()
  };
}
function getApiKey() {
  var _a2;
  const apiKey = (_a2 = process.env.VIBE_API_KEY) != null ? _a2 : "";
  if (!apiKey) {
    throw new Error("VIBE_API_KEY is not configured");
  }
  return apiKey;
}
function startJob(kind, startMessage, runner) {
  const job = reportJobs[kind];
  if (job.status === "running") {
    return job;
  }
  const jobId = `${Date.now()}`;
  job.id = jobId;
  job.status = "running";
  job.startedAt = (/* @__PURE__ */ new Date()).toISOString();
  job.finishedAt = null;
  job.error = null;
  job.progress = { stage: "starting", message: startMessage, current: 0, total: 1 };
  void runner(getApiKey(), (progress) => {
    if (job.id === jobId) {
      job.progress = progress;
    }
  }).then(() => {
    if (job.id !== jobId) return;
    job.status = "completed";
    job.finishedAt = (/* @__PURE__ */ new Date()).toISOString();
  }).catch((error) => {
    if (job.id !== jobId) return;
    console.error(error);
    job.status = "failed";
    job.finishedAt = (/* @__PURE__ */ new Date()).toISOString();
    job.error = error.message || "Unexpected server error";
  });
  return job;
}
function startSlaJob(params) {
  const job = reportJobs.sla;
  if (job.status === "running") {
    return job;
  }
  const jobId = `${Date.now()}`;
  job.id = jobId;
  job.status = "running";
  job.startedAt = (/* @__PURE__ */ new Date()).toISOString();
  job.finishedAt = null;
  job.error = null;
  job.progress = {
    stage: "starting",
    message: params.updateCrm ? "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 SLA \u0441 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435\u043C CRM \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F" : "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 SLA \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F",
    current: 0,
    total: 1
  };
  void runSlaCheckJob(
    getApiKey(),
    params.dateRange,
    (progress) => {
      if (job.id === jobId) {
        job.progress = progress;
      }
    },
    { updateCrm: params.updateCrm }
  ).then(async () => {
    if (job.id !== jobId) return;
    job.status = "completed";
    job.finishedAt = (/* @__PURE__ */ new Date()).toISOString();
    if (params.source === "auto") {
      const config = await readSlaAutoControlConfig();
      await writeSlaAutoControlConfig({ ...config, lastRunAt: job.finishedAt });
    }
  }).catch((error) => {
    if (job.id !== jobId) return;
    console.error(error);
    job.status = "failed";
    job.finishedAt = (/* @__PURE__ */ new Date()).toISOString();
    job.error = error.message || "Unexpected server error";
  }).finally(() => {
    if (params.source === "auto") {
      void scheduleSlaAutoControl();
    }
  });
  return job;
}
function startDataQualityJob(dateRange) {
  return startJob(
    "dataQuality",
    "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F",
    (apiKey, progress) => runDataQualityCheckJob(apiKey, dateRange, progress)
  );
}
function startReactivationJob() {
  return startJob(
    "reactivation",
    "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0440\u0435\u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F",
    (apiKey, progress) => runReactivationCheckJob(apiKey, progress)
  );
}
function startNextStepJob() {
  return startJob(
    "nextStep",
    "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0448\u0430\u0433\u0430 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F",
    (apiKey, progress) => runNextStepCheckJob(apiKey, progress)
  );
}
async function readSlaAutoControlState() {
  return toSlaAutoControlState(await readSlaAutoControlConfig());
}
async function updateSlaAutoControlConfig(body) {
  var _a2, _b, _c;
  const current = await readSlaAutoControlConfig();
  const updated = await writeSlaAutoControlConfig({
    ...current,
    enabled: typeof body.enabled === "boolean" ? body.enabled : current.enabled,
    startDate: (_a2 = body.startDate) != null ? _a2 : current.startDate,
    time: (_b = body.time) != null ? _b : current.time,
    intervalDays: (_c = body.intervalDays) != null ? _c : current.intervalDays
  });
  await scheduleSlaAutoControl();
  return toSlaAutoControlState(updated);
}
async function scheduleSlaAutoControl() {
  var _a2, _b;
  if (state.__managerAssistantSlaAutoTimer) {
    clearTimeout(state.__managerAssistantSlaAutoTimer);
    state.__managerAssistantSlaAutoTimer = null;
  }
  const config = await readSlaAutoControlConfig();
  const nextRunAt = getNextSlaAutoRunAt(config);
  if (!nextRunAt) {
    return;
  }
  const delayMs = Math.max(0, new Date(nextRunAt).getTime() - Date.now());
  state.__managerAssistantSlaAutoTimer = setTimeout(() => {
    if (!process.env.VIBE_API_KEY) {
      console.error("VIBE_API_KEY is not configured; scheduled SLA control skipped");
      void scheduleSlaAutoControl();
      return;
    }
    startSlaJob({
      dateRange: getDayBeforePreviousMoscowDayRange(/* @__PURE__ */ new Date()),
      updateCrm: true,
      source: "auto"
    });
  }, delayMs);
  (_b = (_a2 = state.__managerAssistantSlaAutoTimer).unref) == null ? void 0 : _b.call(_a2);
}
function ensureSlaAutoControlScheduled() {
  if (state.__managerAssistantSlaAutoScheduled) {
    return;
  }
  state.__managerAssistantSlaAutoScheduled = true;
  void scheduleSlaAutoControl();
}

const _NJnqE4SIq4JkvGoCz2po2EE3gvYLK0mlI_ZItqHpw = defineNitroPlugin(() => {
  ensureSlaAutoControlScheduled();
});

const plugins = [
  _kr2s80wv6y1ICwJ1H33AkabiiTOBI5fBeyFwVtDyrtw,
_fs1Lyyzrtm3OvezD2KMtpMY07exqCXf3AsWGrPDbQu0,
_NJnqE4SIq4JkvGoCz2po2EE3gvYLK0mlI_ZItqHpw,
_wH6JrtIxmaSoA8lCPWFnE9z4lQeXW6H5z3l5aymEQw
];

const assets = {};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _HzBlY6 = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

function filterIslandProps(props) {
  if (!props) {
    return {};
  }
  const out = {};
  for (const key in props) {
    if (!key.startsWith("data-v-")) {
      out[key] = props[key];
    }
  }
  return out;
}
function computeIslandHash(name, filteredProps, context, source) {
  return hash$1([name, filteredProps, context, source]).replace(/[-_]/g, "");
}

const NUXT_PAYLOAD_INLINE = false;
const NUXT_RUNTIME_PAYLOAD_EXTRACTION = false;

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
};

function encodeEventPath(path) {
	const queryIndex = path.indexOf("?");
	if (queryIndex === -1) {
		return encodePath(path);
	}
	return encodePath(path.slice(0, queryIndex)) + path.slice(queryIndex);
}
function createSSRContext(event) {
	const url = encodeEventPath(event.path);
	const ssrContext = {
		url,
		event,
		runtimeConfig: useRuntimeConfig(event),
		noSSR: event.context.nuxt?.noSSR || (false),
		head: createHead(unheadOptions),
		error: false,
		nuxt: undefined,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		modules: new Set()
	};
	return ssrContext;
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

function buildAssetsDir() {
	
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__buildAssetsURL = buildAssetsURL;
// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__publicAssetsURL = publicAssetsURL;
const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
// @ts-expect-error file will be produced after app build
const getServerEntry = () => Promise.resolve().then(function () { return server; }).then((r) => r.default || r);
// @ts-expect-error file will be produced after app build
const getClientManifest = () => Promise.resolve().then(function () { return client_manifest$1; }).then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);

const getSSRRenderer = lazyCachedFunction(async () => {
	
	const createSSRApp = await getServerEntry();
	if (!createSSRApp) {
		throw new Error("Server bundle is not available");
	}
	
	const precomputed = undefined ;
	
	const renderer = createRenderer(createSSRApp, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: renderToString$1,
		buildAssetsURL
	});
	async function renderToString$1(input, context) {
		const html = await renderToString(input, context);
		
		
		if (process.env.NUXT_VITE_NODE_OPTIONS) {
			renderer.rendererContext.updateManifest(await getClientManifest());
		}
		return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
	}
	return renderer;
});

const getSPARenderer = lazyCachedFunction(async () => {
	const precomputed = undefined ;
	// @ts-expect-error virtual file
	const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
		{
			const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
			const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
			const appTemplate = APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG;
			const loaderTemplate = r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "";
			return appTemplate + loaderTemplate;
		}
	});
	
	const renderer = createRenderer(() => () => {}, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: () => spaTemplate,
		buildAssetsURL
	});
	const result = await renderer.renderToString({});
	const renderToString = (ssrContext) => {
		const config = useRuntimeConfig(ssrContext.event);
		ssrContext.modules ||= new Set();
		ssrContext.payload.serverRendered = false;
		ssrContext.config = {
			public: config.public,
			app: config.app
		};
		return Promise.resolve(result);
	};
	return {
		rendererContext: renderer.rendererContext,
		renderToString
	};
});
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) {
			res = fn().catch((err) => {
				res = null;
				throw err;
			});
		}
		return res;
	};
}
function getRenderer(ssrContext) {
	return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
// @ts-expect-error file will be produced after app build
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
	const styleMap = await getSSRStyles();
	const inlinedStyles = new Set();
	for (const mod of usedModules) {
		if (mod in styleMap && styleMap[mod]) {
			for (const style of await styleMap[mod]()) {
				inlinedStyles.add(style);
			}
		}
	}
	return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

// @ts-expect-error virtual file
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);

function getServerComponentHTML(body) {
	const match = body.match(ROOT_NODE_REGEX);
	return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
		return undefined;
	}
	const response = {};
	for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
		response[name] = {
			...slot,
			fallback: ssrContext.teleports?.[`island-fallback=${name}`]
		};
	}
	return response;
}
function getClientIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
		return undefined;
	}
	const response = {};
	for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
		
		const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
		response[clientUid] = {
			...component,
			html,
			slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
		};
	}
	return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
	const entries = Object.entries(teleports);
	const slots = {};
	for (const [key, value] of entries) {
		const match = key.match(SSR_CLIENT_SLOT_MARKER);
		if (match) {
			const [, id, slot] = match;
			if (!slot || clientUid !== id) {
				continue;
			}
			slots[slot] = value;
		}
	}
	return slots;
}
function replaceIslandTeleports(ssrContext, html) {
	const { teleports, islandContext } = ssrContext;
	if (islandContext || !teleports) {
		return html;
	}
	for (const key in teleports) {
		const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
		if (matchClientComp) {
			const [, uid, clientId] = matchClientComp;
			if (!uid || !clientId) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
			continue;
		}
		const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
		if (matchSlot) {
			const [, uid, slot] = matchSlot;
			if (!uid || !slot) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
		}
	}
	return html;
}

const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const handler$1 = defineEventHandler(async (event) => {
	const nitroApp = useNitroApp();
	setResponseHeaders(event, {
		"content-type": "application/json;charset=utf-8",
		"x-powered-by": "Nuxt"
	});
	const islandContext = await getIslandContext(event);
	const ssrContext = {
		...createSSRContext(event),
		islandContext,
		noSSR: false,
		url: islandContext.url
	};
	
	const renderer = await getSSRRenderer();
	const renderResult = await renderer.renderToString(ssrContext).catch(async (err) => {
		if (ssrContext["~renderResponse"] && err?.message === "skipping render") {
			return {};
		}
		await ssrContext.nuxt?.hooks.callHook("app:error", err);
		throw err;
	});
	
	
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult
	});
	if (ssrContext["~renderResponse"]) {
		const response = ssrContext["~renderResponse"];
		if (response.statusCode && response.statusCode >= 400) {
			throw createError({
				statusCode: response.statusCode,
				statusMessage: response.statusMessage
			});
		}
		return returnIslandResponse(event, response);
	}
	
	if (ssrContext.payload?.error) {
		throw ssrContext.payload.error;
	}
	const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	{
		const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
		const link = [];
		for (const resource of Object.values(styles)) {
			
			if ("inline" in getQuery(resource.file)) {
				continue;
			}
			
			
			if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
				link.push({
					rel: "stylesheet",
					href: renderer.rendererContext.buildAssetsURL(resource.file),
					crossorigin: ""
				});
			}
		}
		if (link.length) {
			ssrContext.head.push({ link }, { mode: "server" });
		}
	}
	const islandHead = {};
	for (const entry of ssrContext.head.entries.values()) {
		
		for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
			const currentValue = islandHead[key];
			if (Array.isArray(currentValue)) {
				currentValue.push(...value);
			} else {
				islandHead[key] = value;
			}
		}
	}
	const islandResponse = {
		id: islandContext.id,
		head: islandHead,
		html: getServerComponentHTML(renderResult.html),
		components: getClientIslandResponse(ssrContext),
		slots: getSlotIslandResponse(ssrContext)
	};
	await nitroApp.hooks.callHook("render:island", islandResponse, {
		event,
		islandContext
	});
	return islandResponse;
});
function returnIslandResponse(event, response) {
	for (const header in response.headers || {}) {
		setResponseHeader(event, header, response.headers[header]);
	}
	if (response.statusCode) {
		setResponseStatus(event, response.statusCode, response.statusMessage);
	}
	return response.body;
}
const ISLAND_PATH_PREFIX = "/__nuxt_island/";
const VALID_COMPONENT_NAME_RE = /^[a-z][\w.-]*$/i;
async function getIslandContext(event) {
	let url = event.path || "";
	url.replace(/\?.*$/, "");
	if (!url.startsWith(ISLAND_PATH_PREFIX)) {
		throw createError({
			statusCode: 400,
			statusMessage: "Invalid island request path"
		});
	}
	const componentParts = url.substring(ISLAND_PATH_PREFIX.length).replace(ISLAND_SUFFIX_RE, "").split("_");
	const hashId = componentParts.length > 1 ? componentParts.pop() : undefined;
	const componentName = componentParts.join("_");
	if (!componentName || !VALID_COMPONENT_NAME_RE.test(componentName)) {
		throw createError({
			statusCode: 400,
			statusMessage: "Invalid island component name"
		});
	}
	const rawContext = event.method === "GET" ? getQuery$1(event) : await readBody(event);
	const rawProps = destr$1(rawContext?.props) || {};
	const filteredProps = filterIslandProps(rawProps);
	
	
	const clientContext = {};
	if (rawContext && typeof rawContext === "object") {
		for (const key in rawContext) {
			if (key !== "props") {
				clientContext[key] = rawContext[key];
			}
		}
	}
	
	
	const expectedHash = computeIslandHash(componentName, filteredProps, clientContext, undefined);
	if (!hashId || hashId !== expectedHash) {
		throw createError({
			statusCode: 400,
			statusMessage: "Invalid island request hash"
		});
	}
	return {
		url: typeof rawContext?.url === "string" ? rawContext.url : "/",
		id: hashId,
		name: componentName,
		props: rawProps,
		slots: {},
		components: {}
	};
}

const _lazy_MpqCGy = () => Promise.resolve().then(function () { return current_get$1; });
const _lazy_xp4oRH = () => Promise.resolve().then(function () { return analyzeNextStep_post$1; });
const _lazy_YVe0xx = () => Promise.resolve().then(function () { return createCallActivity_post$1; });
const _lazy_9DE6BA = () => Promise.resolve().then(function () { return loadDealContext_get$1; });
const _lazy_JnuNB3 = () => Promise.resolve().then(function () { return checkDataQuality_post$1; });
const _lazy_JFz1h_ = () => Promise.resolve().then(function () { return status_get$7; });
const _lazy_bwD3UQ = () => Promise.resolve().then(function () { return checkNextStep_post$1; });
const _lazy_brv7V0 = () => Promise.resolve().then(function () { return status_get$5; });
const _lazy_Sor57G = () => Promise.resolve().then(function () { return checkReactivation_post$1; });
const _lazy_5Lh0QP = () => Promise.resolve().then(function () { return status_get$3; });
const _lazy_MQ5SEj = () => Promise.resolve().then(function () { return checkSla_post$1; });
const _lazy__Y3bUp = () => Promise.resolve().then(function () { return status_get$1; });
const _lazy_J2HmSk = () => Promise.resolve().then(function () { return dataQualityLog_get$1; });
const _lazy_47rAp4 = () => Promise.resolve().then(function () { return clientContext_post$1; });
const _lazy_SnbSCO = () => Promise.resolve().then(function () { return runtime_get$1; });
const _lazy_c23VwY = () => Promise.resolve().then(function () { return nextStepLog_get$1; });
const _lazy_I3NiX2 = () => Promise.resolve().then(function () { return reactivationLog_get$1; });
const _lazy_oiMBSH = () => Promise.resolve().then(function () { return slaAutoControl_get$1; });
const _lazy_CLxXdQ = () => Promise.resolve().then(function () { return slaAutoControl_patch$1; });
const _lazy_0w51fi = () => Promise.resolve().then(function () { return slaLog_get$1; });
const _lazy_8Lk4WO = () => Promise.resolve().then(function () { return renderer; });

const handlers = [
  { route: '', handler: _HzBlY6, lazy: false, middleware: true, method: undefined },
  { route: '/api/access/current', handler: _lazy_MpqCGy, lazy: true, middleware: false, method: "get" },
  { route: '/api/b24/analyze-next-step', handler: _lazy_xp4oRH, lazy: true, middleware: false, method: "post" },
  { route: '/api/b24/create-call-activity', handler: _lazy_YVe0xx, lazy: true, middleware: false, method: "post" },
  { route: '/api/b24/load-deal-context', handler: _lazy_9DE6BA, lazy: true, middleware: false, method: "get" },
  { route: '/api/check-data-quality', handler: _lazy_JnuNB3, lazy: true, middleware: false, method: "post" },
  { route: '/api/check-data-quality/status', handler: _lazy_JFz1h_, lazy: true, middleware: false, method: "get" },
  { route: '/api/check-next-step', handler: _lazy_bwD3UQ, lazy: true, middleware: false, method: "post" },
  { route: '/api/check-next-step/status', handler: _lazy_brv7V0, lazy: true, middleware: false, method: "get" },
  { route: '/api/check-reactivation', handler: _lazy_Sor57G, lazy: true, middleware: false, method: "post" },
  { route: '/api/check-reactivation/status', handler: _lazy_5Lh0QP, lazy: true, middleware: false, method: "get" },
  { route: '/api/check-sla', handler: _lazy_MQ5SEj, lazy: true, middleware: false, method: "post" },
  { route: '/api/check-sla/status', handler: _lazy__Y3bUp, lazy: true, middleware: false, method: "get" },
  { route: '/api/data-quality-log', handler: _lazy_J2HmSk, lazy: true, middleware: false, method: "get" },
  { route: '/api/debug/client-context', handler: _lazy_47rAp4, lazy: true, middleware: false, method: "post" },
  { route: '/api/debug/runtime', handler: _lazy_SnbSCO, lazy: true, middleware: false, method: "get" },
  { route: '/api/next-step-log', handler: _lazy_c23VwY, lazy: true, middleware: false, method: "get" },
  { route: '/api/reactivation-log', handler: _lazy_I3NiX2, lazy: true, middleware: false, method: "get" },
  { route: '/api/sla-auto-control', handler: _lazy_oiMBSH, lazy: true, middleware: false, method: "get" },
  { route: '/api/sla-auto-control', handler: _lazy_CLxXdQ, lazy: true, middleware: false, method: "patch" },
  { route: '/api/sla-log', handler: _lazy_0w51fi, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_8Lk4WO, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: handler$1, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_8Lk4WO, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server$1 = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server$1.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server$1.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server$1.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = {
	"appName": "Nuxt",
	"status": 500,
	"statusText": "Internal server error",
	"description": "This page is temporarily unavailable.",
	"refresh": "Refresh this page"
};
const template$1 = (messages) => {
	messages = {
		..._messages,
		...messages
	};
	return "<!DOCTYPE html><html lang=\"en\"><head><title>" + escapeHtml(messages.status) + " - " + escapeHtml(messages.statusText) + " | " + escapeHtml(messages.appName) + "</title><meta charset=\"utf-8\"><meta content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0\" name=\"viewport\"><script>!function(){const e=document.createElement(\"link\").relList;if(!(e&&e.supports&&e.supports(\"modulepreload\"))){for(const e of document.querySelectorAll('link[rel=\"modulepreload\"]'))r(e);new MutationObserver(e=>{for(const o of e)if(\"childList\"===o.type)for(const e of o.addedNodes)\"LINK\"===e.tagName&&\"modulepreload\"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),\"use-credentials\"===e.crossOrigin?r.credentials=\"include\":\"anonymous\"===e.crossOrigin?r.credentials=\"omit\":r.credentials=\"same-origin\",r}(e);fetch(e.href,r)}}();<\/script><style>*,:after,:before{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color,#e5e7eb)}:after,:before{--un-content:\"\"}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[80px\\]{font-size:80px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[\\#020420\\]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:text-\\[110px\\]{font-size:110px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class=\"antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide\"><div class=\"max-w-520px text-center\"><h1 class=\"font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]\">" + escapeHtml(messages.status) + "</h1><h2 class=\"font-semibold mb-2 sm:text-3xl text-2xl\">" + escapeHtml(messages.statusText) + "</h2><p class=\"mb-4 px-2 text-[#64748B] text-md\">" + escapeHtml(messages.description) + "</p></div></body></html>";
};

const error500 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template$1
}, Symbol.toStringTag, { value: 'Module' }));

const server = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: viteNodeEntry_mjs
}, Symbol.toStringTag, { value: 'Module' }));

const client_manifest = () => viteNodeFetch.getManifest();

const client_manifest$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: client_manifest
}, Symbol.toStringTag, { value: 'Module' }));

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles
}, Symbol.toStringTag, { value: 'Module' }));

var _a;
const B24_API_KEY = (_a = process.env.VIBE_API_KEY) != null ? _a : "";
function ensureVibeApiKey() {
  if (!B24_API_KEY) {
    throw createError({
      statusCode: 500,
      statusMessage: "VIBE_API_KEY is not configured"
    });
  }
}
function firstString$1(...values) {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
    if (typeof value === "number" && Number.isFinite(value)) {
      return String(value);
    }
  }
  return "";
}
function getVibeAuthorizationHeader(event) {
  return firstString$1(
    getHeader(event, "x-vibe-authorization"),
    getHeader(event, "authorization")
  );
}
function buildActivityDeadline(dateValue) {
  const trimmed = dateValue.trim();
  if (!trimmed) {
    throw createError({ statusCode: 400, statusMessage: "Missing nextContactDate parameter" });
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return `${trimmed}T10:00:00+03:00`;
  }
  const parsed = new Date(trimmed);
  if (Number.isNaN(parsed.getTime())) {
    throw createError({ statusCode: 400, statusMessage: "Invalid nextContactDate parameter" });
  }
  return parsed.toISOString();
}
function getDisplayName(person, fallback) {
  if (!person) {
    return fallback;
  }
  const directName = firstString$1(
    person.name,
    person.NAME,
    person.fullName,
    person.FULL_NAME
  );
  if (directName) {
    return directName;
  }
  const firstName = firstString$1(person.firstName, person.FIRST_NAME);
  const lastName = firstString$1(person.lastName, person.LAST_NAME);
  const combined = [firstName, lastName].filter(Boolean).join(" ").trim();
  return combined || fallback;
}
function toRecord(value) {
  return value && typeof value === "object" ? value : null;
}
function getDealField(deal, fieldId) {
  if (!deal) {
    return "";
  }
  return String(
    deal[`ufCrm_${fieldId}`] || deal[`ufCrm${fieldId}`] || deal[`UF_CRM_${fieldId}`] || ""
  );
}
function parseBitrixDate(value) {
  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }
  const ruDate = trimmed.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})/);
  if (ruDate) {
    const [, day, month, year] = ruDate;
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    return Number.isNaN(date.getTime()) ? null : date;
  }
  const parsed = new Date(trimmed);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}
const RU_MONTHS_PREPOSITIONAL = [
  "\u044F\u043D\u0432\u0430\u0440\u0435",
  "\u0444\u0435\u0432\u0440\u0430\u043B\u0435",
  "\u043C\u0430\u0440\u0442\u0435",
  "\u0430\u043F\u0440\u0435\u043B\u0435",
  "\u043C\u0430\u0435",
  "\u0438\u044E\u043D\u0435",
  "\u0438\u044E\u043B\u0435",
  "\u0430\u0432\u0433\u0443\u0441\u0442\u0435",
  "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u0435",
  "\u043E\u043A\u0442\u044F\u0431\u0440\u0435",
  "\u043D\u043E\u044F\u0431\u0440\u0435",
  "\u0434\u0435\u043A\u0430\u0431\u0440\u0435"
];
function getYearPhrase(year) {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  if (year === currentYear) {
    return "\u044D\u0442\u043E\u0433\u043E \u0433\u043E\u0434\u0430";
  }
  if (year === currentYear - 1) {
    return "\u043F\u0440\u043E\u0448\u043B\u043E\u0433\u043E \u0433\u043E\u0434\u0430";
  }
  return `${year} \u0433\u043E\u0434\u0430`;
}
function formatTripDatePhrase(startDateValue, endDateValue) {
  const startDate = parseBitrixDate(startDateValue);
  const endDate = parseBitrixDate(endDateValue);
  if (!startDate && !endDate) {
    return "";
  }
  const primaryDate = startDate || endDate;
  if (!primaryDate) {
    return "";
  }
  const primaryMonth = RU_MONTHS_PREPOSITIONAL[primaryDate.getMonth()];
  const primaryYearPhrase = getYearPhrase(primaryDate.getFullYear());
  if (!startDate || !endDate) {
    return `\u0432 ${primaryMonth} ${primaryYearPhrase}`;
  }
  const sameMonth = startDate.getMonth() === endDate.getMonth();
  const sameYear = startDate.getFullYear() === endDate.getFullYear();
  if (sameMonth && sameYear) {
    return `\u0432 ${primaryMonth} ${primaryYearPhrase}`;
  }
  const endMonth = RU_MONTHS_PREPOSITIONAL[endDate.getMonth()];
  const endYearPhrase = getYearPhrase(endDate.getFullYear());
  if (sameYear) {
    return `\u0441 ${primaryMonth} \u043F\u043E ${endMonth} ${primaryYearPhrase}`;
  }
  return `\u0441 ${primaryMonth} ${primaryYearPhrase} \u043F\u043E ${endMonth} ${endYearPhrase}`;
}

const EMPLOYEE_MODULES = [
  "manager-assistant",
  "data-quality",
  "reactivation",
  "next-step-control"
];
const ADMIN_MODULES = [
  "manager-assistant",
  "sla-first-contact",
  "data-quality",
  "reactivation",
  "next-step-control"
];
function firstBoolean(...values) {
  for (const value of values) {
    if (typeof value === "boolean") {
      return value;
    }
    if (typeof value === "string") {
      const normalized = value.trim().toLowerCase();
      if (["true", "y", "yes", "1", "admin"].includes(normalized)) {
        return true;
      }
      if (["false", "n", "no", "0", "user"].includes(normalized)) {
        return false;
      }
    }
    if (typeof value === "number" && Number.isFinite(value)) {
      return value === 1;
    }
  }
  return false;
}
function firstNumber(...values) {
  for (const value of values) {
    const parsed = typeof value === "number" ? value : typeof value === "string" ? Number(value) : Number.NaN;
    if (Number.isFinite(parsed) && parsed > 0) {
      return parsed;
    }
  }
  return null;
}
function firstString(...values) {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }
  return "";
}
function deriveAccessFromVibeMe(raw) {
  var _a, _b;
  const root = toRecord(raw);
  const snakeCurrentUser = toRecord(root == null ? void 0 : root.current_user);
  const currentUser = toRecord(root == null ? void 0 : root.currentUser);
  const user = (_b = (_a = toRecord(root == null ? void 0 : root.user)) != null ? _a : currentUser) != null ? _b : snakeCurrentUser;
  const permissions = toRecord(root == null ? void 0 : root.permissions);
  const rights = toRecord(root == null ? void 0 : root.rights);
  const isAuthenticated = Boolean(root && (user || currentUser || snakeCurrentUser || root.userId || root.bitrixUserId));
  const isAdmin = firstBoolean(
    root == null ? void 0 : root.isAdmin,
    root == null ? void 0 : root.is_admin,
    root == null ? void 0 : root.admin,
    root == null ? void 0 : root.ADMIN,
    root == null ? void 0 : root.isAdministrator,
    root == null ? void 0 : root.IS_ADMIN,
    permissions == null ? void 0 : permissions.isAdmin,
    permissions == null ? void 0 : permissions.is_admin,
    permissions == null ? void 0 : permissions.admin,
    rights == null ? void 0 : rights.isAdmin,
    rights == null ? void 0 : rights.is_admin,
    rights == null ? void 0 : rights.admin,
    currentUser == null ? void 0 : currentUser.isAdmin,
    currentUser == null ? void 0 : currentUser.is_admin,
    currentUser == null ? void 0 : currentUser.admin,
    currentUser == null ? void 0 : currentUser.ADMIN,
    currentUser == null ? void 0 : currentUser.isAdministrator,
    currentUser == null ? void 0 : currentUser.IS_ADMIN,
    snakeCurrentUser == null ? void 0 : snakeCurrentUser.isAdmin,
    snakeCurrentUser == null ? void 0 : snakeCurrentUser.is_admin,
    snakeCurrentUser == null ? void 0 : snakeCurrentUser.admin,
    snakeCurrentUser == null ? void 0 : snakeCurrentUser.ADMIN,
    snakeCurrentUser == null ? void 0 : snakeCurrentUser.isAdministrator,
    snakeCurrentUser == null ? void 0 : snakeCurrentUser.IS_ADMIN,
    user == null ? void 0 : user.isAdmin,
    user == null ? void 0 : user.is_admin,
    user == null ? void 0 : user.admin,
    user == null ? void 0 : user.ADMIN,
    user == null ? void 0 : user.isAdministrator,
    user == null ? void 0 : user.IS_ADMIN
  );
  return {
    isAuthenticated,
    isAdmin,
    portal: firstString(root == null ? void 0 : root.portal, root == null ? void 0 : root.portalDomain, root == null ? void 0 : root.domain) || null,
    user: {
      id: firstNumber(
        root == null ? void 0 : root.userId,
        root == null ? void 0 : root.user_id,
        root == null ? void 0 : root.bitrixUserId,
        root == null ? void 0 : root.bitrix_user_id,
        currentUser == null ? void 0 : currentUser.bitrixUserId,
        currentUser == null ? void 0 : currentUser.bitrix_user_id,
        currentUser == null ? void 0 : currentUser.id,
        currentUser == null ? void 0 : currentUser.ID,
        snakeCurrentUser == null ? void 0 : snakeCurrentUser.bitrixUserId,
        snakeCurrentUser == null ? void 0 : snakeCurrentUser.bitrix_user_id,
        snakeCurrentUser == null ? void 0 : snakeCurrentUser.id,
        snakeCurrentUser == null ? void 0 : snakeCurrentUser.ID,
        user == null ? void 0 : user.id,
        user == null ? void 0 : user.ID
      ),
      name: firstString(
        currentUser == null ? void 0 : currentUser.name,
        currentUser == null ? void 0 : currentUser.fullName,
        currentUser == null ? void 0 : currentUser.full_name,
        currentUser == null ? void 0 : currentUser.FULL_NAME,
        currentUser == null ? void 0 : currentUser.NAME,
        snakeCurrentUser == null ? void 0 : snakeCurrentUser.name,
        snakeCurrentUser == null ? void 0 : snakeCurrentUser.fullName,
        snakeCurrentUser == null ? void 0 : snakeCurrentUser.full_name,
        snakeCurrentUser == null ? void 0 : snakeCurrentUser.FULL_NAME,
        snakeCurrentUser == null ? void 0 : snakeCurrentUser.NAME,
        user == null ? void 0 : user.name,
        user == null ? void 0 : user.fullName,
        user == null ? void 0 : user.full_name,
        user == null ? void 0 : user.FULL_NAME,
        user == null ? void 0 : user.NAME
      )
    },
    allowedModules: !isAuthenticated ? ["manager-assistant"] : isAdmin ? ADMIN_MODULES : EMPLOYEE_MODULES
  };
}
async function getCurrentAccess(event) {
  var _a;
  const authHeader = getVibeAuthorizationHeader(event);
  if (!authHeader || !B24_API_KEY) {
    return deriveAccessFromVibeMe(null);
  }
  const response = await fetch("https://vibecode.bitrix24.tech/v1/me", {
    headers: {
      "X-Api-Key": B24_API_KEY,
      Authorization: authHeader
    }
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok || (payload == null ? void 0 : payload.success) === false) {
    return deriveAccessFromVibeMe(null);
  }
  return deriveAccessFromVibeMe((_a = payload == null ? void 0 : payload.data) != null ? _a : payload);
}
async function requireAdmin(event) {
  const access = await getCurrentAccess(event);
  if (!access.isAuthenticated) {
    throw createError({ statusCode: 401, statusMessage: "Bitrix24 authorization is required" });
  }
  if (!access.isAdmin) {
    throw createError({ statusCode: 403, statusMessage: "Bitrix24 administrator access is required" });
  }
  return access;
}
async function requireAuthenticated(event) {
  const access = await getCurrentAccess(event);
  if (!access.isAuthenticated) {
    throw createError({ statusCode: 401, statusMessage: "Bitrix24 authorization is required" });
  }
  return access;
}

const current_get = defineEventHandler(async (event) => ({
  success: true,
  data: await getCurrentAccess(event)
}));

const current_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: current_get
}, Symbol.toStringTag, { value: 'Module' }));

const DEAL_ENTITY_TYPE_ID = 2;
function buildDealContext({ deal, timelines = [], activities = [], messages = [] }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
  if (!deal || !Number.isFinite(Number((_a = deal.id) != null ? _a : deal.ID))) {
    throw new Error("deal is required");
  }
  const history = [
    ...activities.map(normalizeActivity),
    ...timelines.map(normalizeTimeline),
    ...messages.map(normalizeMessage)
  ].filter((entry) => entry.text || entry.title).sort((a, b) => new Date(a.at).getTime() - new Date(b.at).getTime());
  const dealId = Number((_b = deal.id) != null ? _b : deal.ID);
  return {
    deal: {
      id: dealId,
      title: (_e = (_d = (_c = deal.title) != null ? _c : deal.name) != null ? _d : deal.TITLE) != null ? _e : `\u0421\u0434\u0435\u043B\u043A\u0430 ${dealId}`,
      stageId: (_h = (_g = (_f = deal.stageId) != null ? _f : deal.stage) != null ? _g : deal.STAGE_ID) != null ? _h : null,
      amount: (_k = (_j = (_i = deal.amount) != null ? _i : deal.opportunity) != null ? _j : deal.OPPORTUNITY) != null ? _k : null,
      currencyId: (_n = (_m = (_l = deal.currencyId) != null ? _l : deal.currency) != null ? _m : deal.CURRENCY_ID) != null ? _n : null,
      assignedById: numberOrNull((_p = (_o = deal.assignedById) != null ? _o : deal.responsibleId) != null ? _p : deal.ASSIGNED_BY_ID),
      contactId: numberOrNull((_q = deal.contactId) != null ? _q : deal.CONTACT_ID),
      companyId: numberOrNull((_r = deal.companyId) != null ? _r : deal.COMPANY_ID)
    },
    history,
    sourceStats: {
      timelines: timelines.length,
      activities: activities.length,
      messages: messages.length
    }
  };
}
function detectNativeAiTodo(activities = []) {
  var _a;
  return (_a = activities.find((activity) => {
    const completed = activity.completed === true || activity.completed === "Y" || activity.status === "completed";
    if (completed) {
      return false;
    }
    const haystack = [
      activity.subject,
      activity.title,
      activity.description,
      activity.providerId,
      activity.providerTypeId,
      activity.originatorId,
      activity.originId
    ].filter(Boolean).join(" ").toLowerCase();
    return /\bai\b|copilot|битрикс\s*ai|штатн/.test(haystack);
  })) != null ? _a : null;
}
function validateAiRecommendation(value, now = /* @__PURE__ */ new Date()) {
  if (!value || typeof value !== "object") {
    throw new Error("AI recommendation must be an object");
  }
  for (const field of ["title", "description", "deadline", "activityType"]) {
    if (typeof value[field] !== "string" || value[field].trim().length === 0) {
      throw new Error(`${field} is required`);
    }
  }
  const deadline = new Date(value.deadline);
  if (Number.isNaN(deadline.getTime())) {
    throw new Error("deadline must be a valid ISO date");
  }
  if (deadline.getTime() <= now.getTime()) {
    throw new Error("deadline must be in the future");
  }
  const responsibleId = Number(value.responsibleId);
  if (!Number.isFinite(responsibleId) || responsibleId <= 0) {
    throw new Error("responsibleId must be a positive number");
  }
  return {
    title: value.title.trim(),
    description: value.description.trim(),
    deadline: value.deadline,
    responsibleId,
    activityType: value.activityType.trim(),
    importantDetails: toStringArray(value.importantDetails),
    justification: toStringArray(value.justification),
    sourceSignals: toStringArray(value.sourceSignals)
  };
}
function ensureFutureRecommendationDeadline(value, now = /* @__PURE__ */ new Date()) {
  if (!value || typeof value !== "object") {
    return value;
  }
  const deadline = new Date(value.deadline);
  if (!Number.isNaN(deadline.getTime()) && deadline.getTime() > now.getTime()) {
    return value;
  }
  return {
    ...value,
    deadline: buildFallbackDeadline(now)
  };
}
function buildTodoPayload({ dealId, recommendation }) {
  const numericDealId = Number(dealId);
  if (!Number.isFinite(numericDealId) || numericDealId <= 0) {
    throw new Error("dealId must be a positive number");
  }
  const validated = validateAiRecommendation(recommendation, /* @__PURE__ */ new Date(0));
  return {
    ownerTypeId: DEAL_ENTITY_TYPE_ID,
    ownerId: numericDealId,
    deadline: validated.deadline,
    title: validated.title,
    description: validated.description,
    responsibleId: validated.responsibleId,
    pingOffsets: []
  };
}
function buildLinkedTaskPayload({ dealId, recommendation }) {
  const numericDealId = Number(dealId);
  return {
    title: recommendation.title,
    description: recommendation.description,
    responsibleId: recommendation.responsibleId,
    deadline: recommendation.deadline,
    priority: 1,
    UF_CRM_TASK: [`D_${numericDealId}`]
  };
}
function buildTimelineLogPayload({ dealId, recommendation, activityId }) {
  return {
    entityTypeId: DEAL_ENTITY_TYPE_ID,
    entityId: Number(dealId),
    title: "AI: \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
    text: [
      `\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0434\u0435\u043B\u043E${activityId ? ` #${activityId}` : ""}: ${recommendation.title}`,
      "",
      recommendation.description
    ].join("\n"),
    iconCode: "ai"
  };
}
function buildPromptMessages({ context, systemPrompt }) {
  return [
    { role: "system", content: systemPrompt },
    { role: "user", content: JSON.stringify(context, null, 2) }
  ];
}
function normalizeActivity(activity) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  return {
    id: `activity:${(_a = activity.id) != null ? _a : activity.ID}`,
    at: (_e = (_d = (_c = (_b = activity.createdAt) != null ? _b : activity.deadline) != null ? _c : activity.startTime) != null ? _d : activity.dateCreate) != null ? _e : (/* @__PURE__ */ new Date(0)).toISOString(),
    channel: (_h = (_g = (_f = activity.activityType) != null ? _f : activity.typeName) != null ? _g : activity.providerTypeId) != null ? _h : "activity",
    author: (_j = (_i = activity.authorName) != null ? _i : activity.responsibleName) != null ? _j : null,
    title: (_l = (_k = activity.subject) != null ? _k : activity.title) != null ? _l : "",
    text: (_o = (_n = (_m = activity.description) != null ? _m : activity.text) != null ? _n : activity.comment) != null ? _o : ""
  };
}
function normalizeTimeline(item) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  return {
    id: `timeline:${(_a = item.id) != null ? _a : item.ID}`,
    at: (_d = (_c = (_b = item.createdAt) != null ? _b : item.dateCreate) != null ? _c : item.updatedAt) != null ? _d : (/* @__PURE__ */ new Date(0)).toISOString(),
    channel: (_f = (_e = item.type) != null ? _e : item.typeName) != null ? _f : "timeline",
    author: (_h = (_g = item.authorName) != null ? _g : item.userName) != null ? _h : null,
    title: (_j = (_i = item.title) != null ? _i : item.subject) != null ? _j : "",
    text: (_m = (_l = (_k = item.text) != null ? _k : item.description) != null ? _l : item.comment) != null ? _m : ""
  };
}
function normalizeMessage(message) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  return {
    id: `message:${(_a = message.id) != null ? _a : message.ID}`,
    at: (_d = (_c = (_b = message.date) != null ? _b : message.createdAt) != null ? _c : message.dateCreate) != null ? _d : (/* @__PURE__ */ new Date(0)).toISOString(),
    channel: "chat",
    author: (_g = (_f = (_e = message.authorName) != null ? _e : message.senderName) != null ? _f : message.userName) != null ? _g : null,
    title: (_i = (_h = message.chatTitle) != null ? _h : message.dialogId) != null ? _i : "",
    text: (_k = (_j = message.text) != null ? _j : message.message) != null ? _k : ""
  };
}
function numberOrNull(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : null;
}
function toStringArray(value) {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((item) => typeof item === "string" && item.trim()).map((item) => item.trim());
}
function buildFallbackDeadline(now) {
  const fallback = new Date(now.getTime() + 2 * 60 * 60 * 1e3);
  fallback.setMinutes(0, 0, 0);
  return fallback.toISOString();
}

const NEXT_STEP_SYSTEM_PROMPT = `\u0422\u044B AI CRM Sales Assistant \u0434\u043B\u044F Bitrix24. \u0422\u0432\u043E\u044F \u0437\u0430\u0434\u0430\u0447\u0430: \u043F\u043E \u0434\u0430\u043D\u043D\u044B\u043C \u0441\u0434\u0435\u043B\u043A\u0438 \u0438 \u0432\u0441\u0435\u0439 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0439 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u043E\u0434\u0438\u043D \u043B\u0443\u0447\u0448\u0438\u0439 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442 \u0441\u0434\u0435\u043B\u043A\u0443 \u043A \u043F\u0440\u043E\u0434\u0430\u0436\u0435.

\u0420\u0430\u0431\u043E\u0442\u0430\u0439 \u0441\u0442\u0440\u043E\u0433\u043E \u043F\u043E \u0444\u0430\u043A\u0442\u0430\u043C \u0438\u0437 \u0432\u0445\u043E\u0434\u043D\u043E\u0433\u043E JSON. \u041D\u0435 \u0432\u044B\u0434\u0443\u043C\u044B\u0432\u0430\u0439 \u0434\u0435\u0442\u0430\u043B\u0438. \u0415\u0441\u043B\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442, \u044F\u0432\u043D\u043E \u0443\u043A\u0430\u0436\u0438, \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0443\u0442\u043E\u0447\u043D\u0438\u0442\u044C, \u0438 \u0441\u0434\u0435\u043B\u0430\u0439 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u043C \u043D\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u0435 \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u043E\u0431\u0435\u043B\u0430.

\u0412\u0435\u0440\u043D\u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 JSON \u0431\u0435\u0437 Markdown \u0438 \u0431\u0435\u0437 \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0439 \u0432\u043E\u043A\u0440\u0443\u0433 JSON.

\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043E\u0442\u0432\u0435\u0442\u0430:
{
  "title": "\u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 actionable-\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u0435\u043B\u0430 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C",
  "description": "\u0433\u043E\u0442\u043E\u0432\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u0435\u043B\u0430 \u0434\u043B\u044F CRM \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C. \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u043A\u043B\u044E\u0447\u0438 \u0431\u043B\u043E\u043A\u0438: \u0427\u0442\u043E, \u0413\u0434\u0435, \u041A\u0430\u043A, \u041A\u043E\u0433\u0434\u0430, \u041E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435, \u0412\u0430\u0436\u043D\u044B\u0435 \u0434\u0435\u0442\u0430\u043B\u0438, \u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u0420\u0438\u0441\u043A\u0438. \u0422\u0435\u043A\u0441\u0442 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u044B\u043C \u0438 \u043F\u0440\u0438\u0433\u043E\u0434\u043D\u044B\u043C \u0434\u043B\u044F \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430.",
  "deadline": "ISO-8601 \u0434\u0430\u0442\u0430/\u0432\u0440\u0435\u043C\u044F \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C \u0441 timezone, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 2026-06-05T16:00:00+03:00",
  "responsibleId": 123,
  "activityType": "Call | Message | Email | Meeting | Todo",
  "importantDetails": ["5-10 \u0432\u0430\u0436\u043D\u044B\u0445 \u0444\u0430\u043A\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043C\u043E\u0433 \u0443\u043F\u0443\u0441\u0442\u0438\u0442\u044C"],
  "justification": ["3-6 \u043F\u0440\u0438\u0447\u0438\u043D, \u043F\u043E\u0447\u0435\u043C\u0443 \u044D\u0442\u043E\u0442 \u0448\u0430\u0433 \u043B\u0443\u0447\u0448\u0438\u0439 \u0438\u043C\u0435\u043D\u043D\u043E \u0441\u0435\u0439\u0447\u0430\u0441"],
  "sourceSignals": ["\u043A\u0440\u0430\u0442\u043A\u0438\u0435 \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0441\u0438\u0433\u043D\u0430\u043B\u044B \u0438\u0437 \u0438\u0441\u0442\u043E\u0440\u0438\u0438: \u0434\u0430\u0442\u044B, \u043A\u0430\u043D\u0430\u043B\u044B, \u043E\u0431\u0435\u0449\u0430\u043D\u0438\u044F, \u0432\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u044F"]
}

\u041F\u0440\u0430\u0432\u0438\u043B\u0430:
- \u0412\u044B\u0431\u0435\u0440\u0438 \u043E\u0434\u0438\u043D \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433. \u0415\u0441\u043B\u0438 \u043D\u0443\u0436\u043D\u0430 \u0446\u0435\u043F\u043E\u0447\u043A\u0430, \u0441\u043E\u0437\u0434\u0430\u0439 primary action, \u0430 secondary \u0443\u043F\u043E\u043C\u044F\u043D\u0438 \u0432 description.
- \u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u0439 \u0441\u0430\u043C\u044B\u0439 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u043F\u0443\u0442\u044C \u043A \u0440\u0435\u0448\u0435\u043D\u0438\u044E: \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0432\u044B\u0431\u043E\u0440, \u0441\u043D\u044F\u0442\u044C \u0432\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u0435, \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u0442\u044C \u043E\u043F\u043B\u0430\u0442\u0443, \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u044E\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435.
- \u0414\u0435\u0434\u043B\u0430\u0439\u043D \u0441\u0442\u0430\u0432\u044C \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E: \u0441\u0435\u0433\u043E\u0434\u043D\u044F/\u0437\u0430\u0432\u0442\u0440\u0430 \u0432 \u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u0432\u0440\u0435\u043C\u044F, \u0435\u0441\u043B\u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0441\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C; \u0438\u043D\u0430\u0447\u0435 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0439 \u0440\u0430\u0437\u0443\u043C\u043D\u044B\u0439 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u043B\u043E\u0442.
- Where/\u043A\u0430\u043D\u0430\u043B \u0432\u044B\u0431\u0438\u0440\u0430\u0439 \u043F\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u043C\u0443 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u043C\u0443 \u0438\u043B\u0438 \u044F\u0432\u043D\u043E \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u0435\u043C\u043E\u043C\u0443 \u043A\u0430\u043D\u0430\u043B\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0430.
- Description \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C: \u0447\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C, \u0433\u0434\u0435/\u0447\u0435\u0440\u0435\u0437 \u043A\u0430\u043A\u043E\u0439 \u043A\u0430\u043D\u0430\u043B, \u043A\u0430\u043A \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C/\u043F\u0438\u0441\u0430\u0442\u044C, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0438 \u043F\u043E\u0447\u0435\u043C\u0443.
- \u0415\u0441\u043B\u0438 \u043A\u043B\u0438\u0435\u043D\u0442 \u043C\u043E\u043B\u0447\u0438\u0442, \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438 \u043E\u0434\u043D\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u0434\u0435\u043B\u043E: \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u0435\u0439\u0447\u0430\u0441 \u0438\u043B\u0438 \u0437\u0432\u043E\u043D\u043E\u043A \u043F\u043E\u0437\u0436\u0435, \u0441 \u043A\u0440\u0430\u0442\u043A\u043E\u0439 \u0432\u0442\u043E\u0440\u0438\u0447\u043D\u043E\u0439 \u043A\u0430\u0434\u0435\u043D\u0446\u0438\u0435\u0439 \u0432 description.
- responsibleId \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0435\u0440\u0438 \u0438\u0437 context.deal.assignedById. \u0415\u0441\u043B\u0438 \u0435\u0433\u043E \u043D\u0435\u0442, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439 1.
- \u041D\u0435 \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0439 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u0440\u0430\u0441\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F \u043C\u043E\u0434\u0435\u043B\u0438.
- \u042F\u0437\u044B\u043A: \u0440\u0443\u0441\u0441\u043A\u0438\u0439, \u0434\u0435\u043B\u043E\u0432\u043E\u0439, \u0431\u0435\u0437 \u0432\u043E\u0434\u044B.`;

const VIBE_BASE_URL = "https://vibecode.bitrix24.tech/v1";
const DEFAULT_AI_MODEL = "bitrix/bitrixgpt-5.5";
const analyzeNextStep_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const authHeader = getVibeAuthorizationHeader(event);
  const body = await readBody(event);
  if (!(body == null ? void 0 : body.dealId)) {
    throw createError({ statusCode: 400, statusMessage: "Missing dealId parameter" });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: "Missing authorization header" });
  }
  ensureVibeApiKey();
  const dealId = Number(body.dealId);
  if (!Number.isFinite(dealId) || dealId <= 0) {
    throw createError({ statusCode: 400, statusMessage: "Deal ID \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0447\u0438\u0441\u043B\u043E\u043C." });
  }
  const headers = {
    "X-Api-Key": B24_API_KEY,
    Authorization: authHeader,
    "Content-Type": "application/json"
  };
  try {
    const bundle = await loadDealBundle({ dealId, headers });
    const context = buildDealContext(bundle);
    const nativeAiTodo = detectNativeAiTodo(bundle.activities);
    const rawRecommendation = body.recommendation ? body.recommendation : nativeAiTodo ? copyNativeAiTodo(nativeAiTodo, context.deal.assignedById) : await getAiRecommendation({ context, headers });
    const recommendation = ensureFutureRecommendationDeadline(rawRecommendation);
    const validated = validateAiRecommendation(recommendation);
    const todoPayload = buildTodoPayload({ dealId, recommendation: validated });
    const timelineLogPayload = buildTimelineLogPayload({ dealId, recommendation: validated });
    if (body.mode !== "live") {
      return {
        success: true,
        data: {
          mode: "preview",
          context,
          nativeAiTodoFound: Boolean(nativeAiTodo),
          recommendation: validated,
          todoPayload,
          timelineLogPayload
        }
      };
    }
    const created = await createCrmTodo({ dealId, recommendation: validated, todoPayload, headers });
    const createdActivityId = (_e = (_d = (_c = (_a = created == null ? void 0 : created.id) != null ? _a : created == null ? void 0 : created.ID) != null ? _c : (_b = created == null ? void 0 : created.activity) == null ? void 0 : _b.id) != null ? _d : created == null ? void 0 : created.activityId) != null ? _e : null;
    const logPayload = buildTimelineLogPayload({ dealId, recommendation: validated, activityId: createdActivityId });
    const timelineLog = await safeCreateTimelineLog({ payload: logPayload, headers });
    return {
      success: true,
      data: {
        mode: "live",
        context,
        nativeAiTodoFound: Boolean(nativeAiTodo),
        recommendation: validated,
        todoPayload,
        timelineLogPayload: logPayload,
        createdActivityId,
        pinnedTimelineLogId: (_g = (_f = timelineLog == null ? void 0 : timelineLog.id) != null ? _f : timelineLog == null ? void 0 : timelineLog.ID) != null ? _g : null
      }
    };
  } catch (error) {
    throw createError({
      statusCode: (error == null ? void 0 : error.statusCode) || 500,
      statusMessage: (error == null ? void 0 : error.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C AI-\u0430\u043D\u0430\u043B\u0438\u0437 \u0441\u0434\u0435\u043B\u043A\u0438."
    });
  }
});
async function loadDealBundle({ dealId, headers }) {
  const [deal, timelines, activities, messages] = await Promise.all([
    requestVibe(`/deals/${dealId}`, { headers }),
    safeRequestVibe("/timelines/search", {
      headers,
      method: "POST",
      body: {
        filter: { entityTypeId: 2, entityId: dealId },
        sort: "createdAt",
        limit: 200
      }
    }),
    safeRequestVibe("/activities/search", {
      headers,
      method: "POST",
      body: {
        filter: { ownerTypeId: 2, ownerId: dealId },
        sort: "createdAt",
        limit: 200
      }
    }),
    loadCrmMessages({ dealId, headers })
  ]);
  return {
    deal,
    timelines: Array.isArray(timelines) ? timelines : [],
    activities: Array.isArray(activities) ? activities : [],
    messages: Array.isArray(messages) ? messages : []
  };
}
async function loadCrmMessages({ dealId, headers }) {
  var _a, _b;
  try {
    const chat = await requestVibe(`/chats/find?entityType=CRM&entityId=DEAL|${dealId}`, { headers });
    const dialogId = (_b = (_a = chat == null ? void 0 : chat.dialogId) != null ? _a : chat == null ? void 0 : chat.id) != null ? _b : chat == null ? void 0 : chat.chatId;
    if (!dialogId) {
      return [];
    }
    return await requestVibe(`/chats/${encodeURIComponent(String(dialogId))}/messages?limit=100`, { headers });
  } catch {
    return [];
  }
}
async function getAiRecommendation({ context, headers }) {
  var _a, _b, _c, _d, _e, _f;
  const response = await requestRaw(`${VIBE_BASE_URL}/chat/completions`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model: process.env.VIBE_AI_MODEL || DEFAULT_AI_MODEL,
      messages: buildPromptMessages({
        context: {
          currentTime: (/* @__PURE__ */ new Date()).toISOString(),
          context
        },
        systemPrompt: NEXT_STEP_SYSTEM_PROMPT
      }),
      temperature: 0.2,
      response_format: { type: "json_object" }
    })
  });
  const content = (_f = (_e = (_c = (_b = (_a = response == null ? void 0 : response.choices) == null ? void 0 : _a[0]) == null ? void 0 : _b.message) == null ? void 0 : _c.content) != null ? _e : (_d = response == null ? void 0 : response.message) == null ? void 0 : _d.content) != null ? _f : response == null ? void 0 : response.content;
  if (typeof content !== "string") {
    throw new Error("AI response does not contain text content");
  }
  return JSON.parse(content);
}
async function createCrmTodo({
  dealId,
  recommendation,
  todoPayload,
  headers
}) {
  try {
    return await requestVibe("/activities", {
      method: "POST",
      headers,
      body: todoPayload
    });
  } catch (error) {
    console.warn("AI todo activity creation failed, falling back to linked task:", error);
    return await requestVibe("/tasks", {
      method: "POST",
      headers,
      body: buildLinkedTaskPayload({ dealId, recommendation })
    });
  }
}
async function safeCreateTimelineLog({ payload, headers }) {
  try {
    return await requestVibe("/timeline-logs", {
      method: "POST",
      headers,
      body: payload
    });
  } catch (error) {
    console.warn("AI timeline log creation failed:", error);
    return null;
  }
}
async function safeRequestVibe(path, options) {
  try {
    return await requestVibe(path, options);
  } catch {
    return [];
  }
}
async function requestVibe(path, options) {
  return requestRaw(`${VIBE_BASE_URL}${path}`, {
    method: options.method || "GET",
    headers: options.headers,
    body: options.body ? JSON.stringify(options.body) : void 0
  });
}
async function requestRaw(url, options) {
  var _a, _b, _c, _d, _e, _f, _g;
  const response = await fetch(url, options);
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok || (data == null ? void 0 : data.success) === false || (data == null ? void 0 : data.error)) {
    const message = (_e = (_d = (_c = (_a = data == null ? void 0 : data.error) == null ? void 0 : _a.userMessage) != null ? _c : (_b = data == null ? void 0 : data.error) == null ? void 0 : _b.message) != null ? _d : data == null ? void 0 : data.error_description) != null ? _e : response.statusText;
    const error = new Error(message);
    error.statusCode = response.status;
    throw error;
  }
  return (_g = (_f = data == null ? void 0 : data.data) != null ? _f : data == null ? void 0 : data.result) != null ? _g : data;
}
function copyNativeAiTodo(activity, fallbackResponsibleId) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const deadline = (_b = (_a = activity.deadline) != null ? _a : activity.endTime) != null ? _b : new Date(Date.now() + 60 * 60 * 1e3).toISOString();
  return {
    title: (_d = (_c = activity.subject) != null ? _c : activity.title) != null ? _d : "AI: \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433 \u043F\u043E \u0441\u0434\u0435\u043B\u043A\u0435",
    description: (_g = (_f = (_e = activity.description) != null ? _e : activity.text) != null ? _f : activity.comment) != null ? _g : "",
    deadline,
    responsibleId: Number((_i = (_h = activity.responsibleId) != null ? _h : fallbackResponsibleId) != null ? _i : 1),
    activityType: (_j = activity.activityType) != null ? _j : "Todo",
    importantDetails: ["\u041D\u0430\u0439\u0434\u0435\u043D\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0435 \u0448\u0442\u0430\u0442\u043D\u043E\u0435 AI-\u0434\u0435\u043B\u043E Bitrix24; \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u043A\u043E\u043F\u0438\u044F \u043F\u043E \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044E \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F."],
    justification: ["\u0412 \u0441\u0434\u0435\u043B\u043A\u0435 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u0430\u044F \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044F \u0448\u0442\u0430\u0442\u043D\u043E\u0433\u043E AI \u043D\u0430 \u0431\u0430\u0437\u0435 \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0439."],
    sourceSignals: [`activity:${(_k = activity.id) != null ? _k : activity.ID}`]
  };
}

const analyzeNextStep_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: analyzeNextStep_post
}, Symbol.toStringTag, { value: 'Module' }));

const createCallActivity_post = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const authHeader = getVibeAuthorizationHeader(event);
  const body = await readBody(event);
  if (!(body == null ? void 0 : body.dealId)) {
    throw createError({ statusCode: 400, statusMessage: "Missing dealId parameter" });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: "Missing authorization header" });
  }
  ensureVibeApiKey();
  const notes = typeof body.crmNotes === "string" ? body.crmNotes.trim() : "";
  if (!body.nextContactDate) {
    throw createError({ statusCode: 400, statusMessage: "Missing nextContactDate parameter" });
  }
  if (!notes) {
    throw createError({ statusCode: 400, statusMessage: "Missing crmNotes parameter" });
  }
  const deadline = buildActivityDeadline(String(body.nextContactDate));
  const description = [
    "\u0417\u0430\u043C\u0435\u0442\u043A\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430:",
    notes,
    "",
    `\u0414\u0430\u0442\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F: ${body.nextContactDate}`,
    "\u0421\u043E\u0437\u0434\u0430\u043D\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0438\u0437 \u0432\u0438\u0434\u0436\u0435\u0442\u0430 \u0440\u0435\u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u0437\u0432\u043E\u043D\u043A\u0430."
  ].join("\n");
  const dealId = Number(body.dealId);
  const taskBody = {
    title: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442 \u043F\u043E \u0440\u0435\u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438",
    description,
    responsibleId: body.assignedById ? Number(body.assignedById) : 1,
    deadline,
    priority: 1,
    UF_CRM_TASK: [`D_${dealId}`]
  };
  console.log("Creating CRM follow-up task from widget:", JSON.stringify({
    dealId,
    responsibleId: taskBody.responsibleId,
    deadline: taskBody.deadline,
    hasNotes: Boolean(notes)
  }));
  const response = await fetch("https://vibecode.bitrix24.tech/v1/tasks", {
    method: "POST",
    headers: {
      "X-Api-Key": B24_API_KEY,
      Authorization: authHeader,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(taskBody)
  });
  const result = await response.json();
  if (!response.ok || !result.success) {
    console.error("CRM follow-up task creation failed:", JSON.stringify(result).slice(0, 2e3));
    throw createError({
      statusCode: response.status || 500,
      statusMessage: ((_a = result.error) == null ? void 0 : _a.message) || result.error || "Unable to create CRM follow-up task",
      data: result
    });
  }
  console.log("CRM follow-up task created:", JSON.stringify({
    dealId,
    taskId: ((_b = result == null ? void 0 : result.data) == null ? void 0 : _b.id) || ((_c = result == null ? void 0 : result.data) == null ? void 0 : _c.ID) || (result == null ? void 0 : result.id) || (result == null ? void 0 : result.ID) || null
  }));
  return result;
});

const createCallActivity_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: createCallActivity_post
}, Symbol.toStringTag, { value: 'Module' }));

const loadDealContext_get = defineEventHandler(async (event) => {
  var _a;
  const query = getQuery$1(event);
  const dealId = firstString$1(query.dealId);
  const authHeader = getVibeAuthorizationHeader(event);
  if (!dealId) {
    throw createError({ statusCode: 400, statusMessage: "Missing dealId parameter" });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: "Missing authorization header" });
  }
  ensureVibeApiKey();
  const headers = {
    "X-Api-Key": B24_API_KEY,
    Authorization: authHeader
  };
  const dealResponse = await fetch(`https://vibecode.bitrix24.tech/v1/deals/${dealId}`, { headers });
  const dealData = await dealResponse.json();
  if (!dealResponse.ok || !dealData.success) {
    throw createError({
      statusCode: dealResponse.status || 500,
      statusMessage: ((_a = dealData.error) == null ? void 0 : _a.message) || dealData.error || "VibeCode deal fetch failed"
    });
  }
  const deal = toRecord(dealData.data) || {};
  const assignedById = firstString$1(deal.assignedById, deal.ASSIGNED_BY_ID);
  const contactId = firstString$1(deal.contactId, deal.CONTACT_ID, Array.isArray(deal.contactIds) ? deal.contactIds[0] : "");
  const categoryId = firstString$1(deal.categoryId, deal.CATEGORY_ID);
  const dealCategory = toRecord(deal.category) || toRecord(deal.CATEGORY);
  const categoryNameFromDeal = firstString$1(
    deal.categoryName,
    deal.CATEGORY_NAME,
    dealCategory == null ? void 0 : dealCategory.name,
    dealCategory == null ? void 0 : dealCategory.title,
    dealCategory == null ? void 0 : dealCategory.NAME,
    dealCategory == null ? void 0 : dealCategory.TITLE
  );
  const [userData, contactData, categoryData] = await Promise.all([
    assignedById ? fetch(`https://vibecode.bitrix24.tech/v1/users/${assignedById}`, { headers }).then((response) => response.json()).catch((error) => {
      console.error("Error fetching responsible user:", error);
      return null;
    }) : Promise.resolve(null),
    contactId ? fetch(`https://vibecode.bitrix24.tech/v1/contacts/${contactId}`, { headers }).then((response) => response.json()).catch((error) => {
      console.error("Error fetching contact:", error);
      return null;
    }) : Promise.resolve(null),
    categoryId ? fetch(`https://vibecode.bitrix24.tech/v1/deal-categories/${categoryId}`, { headers }).then((response) => response.json()).catch((error) => {
      console.error("Error fetching deal category:", error);
      return null;
    }) : Promise.resolve(null)
  ]);
  const agentName = (userData == null ? void 0 : userData.success) && userData.data ? getDisplayName(toRecord(userData.data), "\u0415\u043B\u0435\u043D\u0430") : "\u0415\u043B\u0435\u043D\u0430";
  const clientName = (contactData == null ? void 0 : contactData.success) && contactData.data ? getDisplayName(toRecord(contactData.data), "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440") : "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440";
  const destination = getDealField(deal, "1604438175");
  const startDate = getDealField(deal, "1604438397");
  const endDate = getDealField(deal, "1621261388273");
  const tripDateText = formatTripDatePhrase(startDate, endDate);
  const previousTrip = destination || startDate || endDate ? { destination, startDate, endDate, tripDateText } : null;
  const category = (categoryData == null ? void 0 : categoryData.success) && categoryData.data ? toRecord(categoryData.data) : null;
  const categoryName = categoryNameFromDeal || firstString$1(
    category == null ? void 0 : category.name,
    category == null ? void 0 : category.NAME,
    category == null ? void 0 : category.title,
    category == null ? void 0 : category.TITLE
  );
  return {
    success: true,
    data: {
      dealId: Number(dealId),
      categoryId: categoryId ? Number(categoryId) : null,
      categoryName,
      assignedById: assignedById ? Number(assignedById) : null,
      contactId: contactId ? Number(contactId) : null,
      agentName,
      clientName,
      previousTrip
    }
  };
});

const loadDealContext_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: loadDealContext_get
}, Symbol.toStringTag, { value: 'Module' }));

const checkDataQuality_post = defineEventHandler(async (event) => {
  await requireAuthenticated(event);
  const body = await readBody(event).catch(() => ({}));
  const dateRange = parseMoscowDateRange(body);
  setResponseStatus(event, 202);
  return startDataQualityJob(dateRange);
});

const checkDataQuality_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: checkDataQuality_post
}, Symbol.toStringTag, { value: 'Module' }));

const status_get$6 = defineEventHandler(async (event) => {
  await requireAuthenticated(event);
  return reportJobs.dataQuality;
});

const status_get$7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: status_get$6
}, Symbol.toStringTag, { value: 'Module' }));

const checkNextStep_post = defineEventHandler(async (event) => {
  await requireAuthenticated(event);
  setResponseStatus(event, 202);
  return startNextStepJob();
});

const checkNextStep_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: checkNextStep_post
}, Symbol.toStringTag, { value: 'Module' }));

const status_get$4 = defineEventHandler(async (event) => {
  await requireAuthenticated(event);
  return reportJobs.nextStep;
});

const status_get$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: status_get$4
}, Symbol.toStringTag, { value: 'Module' }));

const checkReactivation_post = defineEventHandler(async (event) => {
  await requireAuthenticated(event);
  setResponseStatus(event, 202);
  return startReactivationJob();
});

const checkReactivation_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: checkReactivation_post
}, Symbol.toStringTag, { value: 'Module' }));

const status_get$2 = defineEventHandler(async (event) => {
  await requireAuthenticated(event);
  return reportJobs.reactivation;
});

const status_get$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: status_get$2
}, Symbol.toStringTag, { value: 'Module' }));

const checkSla_post = defineEventHandler(async (event) => {
  await requireAdmin(event);
  const body = await readBody(event).catch(() => ({}));
  const dateRange = parseMoscowDateRange(body);
  setResponseStatus(event, 202);
  return startSlaJob({
    dateRange,
    updateCrm: Boolean(body.updateCrm),
    source: "manual"
  });
});

const checkSla_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: checkSla_post
}, Symbol.toStringTag, { value: 'Module' }));

const status_get = defineEventHandler(async (event) => {
  await requireAdmin(event);
  return reportJobs.sla;
});

const status_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: status_get
}, Symbol.toStringTag, { value: 'Module' }));

const dataQualityLog_get = defineEventHandler(async (event) => {
  await requireAuthenticated(event);
  return readDataQualityLog();
});

const dataQualityLog_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataQualityLog_get
}, Symbol.toStringTag, { value: 'Module' }));

const clientContext_post = defineEventHandler(async (event) => {
  const body = await readBody(event).catch(() => ({}));
  console.log("Bitrix client context debug:", JSON.stringify(body || {}).slice(0, 4e3));
  return { success: true };
});

const clientContext_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: clientContext_post
}, Symbol.toStringTag, { value: 'Module' }));

const runtime_get = defineEventHandler(async (event) => {
  var _a;
  const authHeader = getVibeAuthorizationHeader(event);
  let me = null;
  if (authHeader && B24_API_KEY) {
    try {
      const response = await fetch("https://vibecode.bitrix24.tech/v1/me", {
        headers: {
          "X-Api-Key": B24_API_KEY,
          Authorization: authHeader
        }
      });
      const data = await response.json();
      me = (data == null ? void 0 : data.success) && (data == null ? void 0 : data.data) ? {
        portal: data.data.portal || data.data.portalDomain,
        userId: data.data.userId || ((_a = data.data.currentUser) == null ? void 0 : _a.bitrixUserId),
        keys: Object.keys(data.data)
      } : data;
    } catch (error) {
      me = { error: error instanceof Error ? error.message : String(error) };
    }
  }
  return {
    success: true,
    data: {
      path: event.path,
      query: getQuery$1(event),
      hasVibeAuthorization: Boolean(authHeader),
      hasApiKey: Boolean(B24_API_KEY),
      headers: {
        host: getHeader(event, "host"),
        referer: getHeader(event, "referer"),
        origin: getHeader(event, "origin"),
        xForwardedHost: getHeader(event, "x-forwarded-host"),
        xForwardedProto: getHeader(event, "x-forwarded-proto")
      },
      me
    }
  };
});

const runtime_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: runtime_get
}, Symbol.toStringTag, { value: 'Module' }));

const nextStepLog_get = defineEventHandler(async (event) => {
  await requireAuthenticated(event);
  return readNextStepLog();
});

const nextStepLog_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: nextStepLog_get
}, Symbol.toStringTag, { value: 'Module' }));

const reactivationLog_get = defineEventHandler(async (event) => {
  await requireAuthenticated(event);
  return readReactivationLog();
});

const reactivationLog_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: reactivationLog_get
}, Symbol.toStringTag, { value: 'Module' }));

const slaAutoControl_get = defineEventHandler(async (event) => {
  await requireAdmin(event);
  return readSlaAutoControlState();
});

const slaAutoControl_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: slaAutoControl_get
}, Symbol.toStringTag, { value: 'Module' }));

const slaAutoControl_patch = defineEventHandler(async (event) => {
  await requireAdmin(event);
  const body = await readBody(event).catch(() => ({}));
  return updateSlaAutoControlConfig(body);
});

const slaAutoControl_patch$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: slaAutoControl_patch
}, Symbol.toStringTag, { value: 'Module' }));

const slaLog_get = defineEventHandler(async (event) => {
  await requireAdmin(event);
  return readSlaLog();
});

const slaLog_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: slaLog_get
}, Symbol.toStringTag, { value: 'Module' }));

function renderPayloadResponse(ssrContext) {
	return {
		body: encodeForwardSlashes(stringify(splitPayload(ssrContext).payload, ssrContext["~payloadReducers"])) ,
		statusCode: getResponseStatus(ssrContext.event),
		statusMessage: getResponseStatusText(ssrContext.event),
		headers: {
			"content-type": "application/json;charset=utf-8" ,
			"x-powered-by": "Nuxt"
		}
	};
}
function renderPayloadJsonScript(opts) {
	const contents = opts.data ? encodeForwardSlashes(stringify(opts.data, opts.ssrContext["~payloadReducers"])) : "";
	const payload = {
		"type": "application/json",
		"innerHTML": contents,
		"data-nuxt-data": appId,
		"data-ssr": !(opts.ssrContext.noSSR)
	};
	{
		payload.id = "__NUXT_DATA__";
	}
	if (opts.src) {
		payload["data-src"] = opts.src;
	}
	const config = uneval(opts.ssrContext.config);
	return [payload, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}` }];
}

function encodeForwardSlashes(str) {
	return str.replaceAll("/", "\\u002F");
}
function splitPayload(ssrContext) {
	const { data, prerenderedAt, ...initial } = ssrContext.payload;
	return {
		initial: {
			...initial,
			prerenderedAt
		},
		payload: {
			data,
			prerenderedAt
		}
	};
}

const renderSSRHeadOptions = {"omitLineBreaks":true};

// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__buildAssetsURL = buildAssetsURL;
// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const PAYLOAD_FILENAME = "_payload.json" ;
const handler = defineRenderHandler((event) => {
	
	const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
	if (ssrError && !("__unenv__" in event.node.req)) {
		throw createError({
			status: 404,
			statusText: "Page Not Found: /__nuxt_error",
			message: "Page Not Found: /__nuxt_error"
		});
	}
	return renderRoute(event, ssrError);
});
async function renderRoute(event, ssrError) {
	const nitroApp = useNitroApp();
	
	const ssrContext = createSSRContext(event);
	
	const headEntryOptions = { mode: "server" };
	ssrContext.head.push(appHead, headEntryOptions);
	if (ssrError) {
		
		const status = ssrError.status || ssrError.statusCode;
		if (status) {
			
			ssrError.status = ssrError.statusCode = Number.parseInt(status);
		}
		if (typeof ssrError.data === "string") {
			try {
				ssrError.data = destr(ssrError.data);
			} catch {}
		}
		setSSRError(ssrContext, ssrError);
	}
	
	const routeOptions = getRouteRules(event);
	
	const _PAYLOAD_EXTRACTION = !ssrContext.noSSR && (NUXT_RUNTIME_PAYLOAD_EXTRACTION);
	
	
	
	const _PAYLOAD_INLINE = !_PAYLOAD_EXTRACTION || NUXT_PAYLOAD_INLINE;
	const isRenderingPayload = (_PAYLOAD_EXTRACTION || routeOptions.prerender) && PAYLOAD_URL_RE.test(ssrContext.url);
	if (isRenderingPayload) {
		const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
		ssrContext.url = url;
		event._path = event.node.req.url = url;
	}
	if (routeOptions.ssr === false) {
		ssrContext.noSSR = true;
	}
	const payloadURL = _PAYLOAD_EXTRACTION ? joinURL(ssrContext.runtimeConfig.app.cdnURL || ssrContext.runtimeConfig.app.baseURL, ssrContext.url.replace(/\?.*$/, ""), PAYLOAD_FILENAME) + "?" + ssrContext.runtimeConfig.app.buildId : undefined;
	
	const renderer = await getRenderer(ssrContext);
	const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
		
		
		if ((ssrContext["~renderResponse"] || ssrContext._renderResponse) && error.message === "skipping render") {
			return {};
		}
		
		const _err = !ssrError && ssrContext.payload?.error || error;
		await ssrContext.nuxt?.hooks.callHook("app:error", _err);
		throw _err;
	});
	
	
	const inlinedStyles = [];
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult: _rendered
	});
	if (ssrContext["~renderResponse"] || ssrContext._renderResponse) {
		
		return ssrContext["~renderResponse"] || ssrContext._renderResponse;
	}
	
	if (ssrContext.payload?.error && !ssrError) {
		throw ssrContext.payload.error;
	}
	
	if (isRenderingPayload) {
		const response = renderPayloadResponse(ssrContext);
		return response;
	}
	const NO_SCRIPTS = routeOptions.noScripts;
	
	const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
	
	
	if (_PAYLOAD_EXTRACTION && !_PAYLOAD_INLINE && !NO_SCRIPTS) {
		ssrContext.head.push({ link: [{
			rel: "preload",
			as: "fetch",
			crossorigin: "anonymous",
			href: payloadURL
		} ] }, headEntryOptions);
	}
	
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	const link = [];
	for (const resource of Object.values(styles)) {
		
		if ("inline" in getQuery(resource.file)) {
			continue;
		}
		
		
		
		link.push({
			rel: "stylesheet",
			href: renderer.rendererContext.buildAssetsURL(resource.file),
			crossorigin: ""
		});
	}
	if (link.length) {
		ssrContext.head.push({ link }, headEntryOptions);
	}
	if (!NO_SCRIPTS) {
		
		
		
		if (ssrContext["~lazyHydratedModules"]) {
			for (const id of ssrContext["~lazyHydratedModules"]) {
				ssrContext.modules?.delete(id);
			}
		}
		ssrContext.head.push({ link: getPreloadLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		ssrContext.head.push({ link: getPrefetchLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		
		ssrContext.head.push({ script: _PAYLOAD_INLINE ? renderPayloadJsonScript({
			ssrContext,
			data: ssrContext.payload
		})  : renderPayloadJsonScript({
			ssrContext,
			data: splitPayload(ssrContext).initial,
			src: payloadURL
		})  }, {
			...headEntryOptions,
			
			tagPosition: "bodyClose",
			tagPriority: "high"
		});
	}
	
	if (!routeOptions.noScripts) {
		const tagPosition = "head";
		ssrContext.head.push({ script: Object.values(scripts).map((resource) => ({
			type: resource.module ? "module" : null,
			src: renderer.rendererContext.buildAssetsURL(resource.file),
			defer: resource.module ? null : true,
			
			
			tagPosition,
			crossorigin: ""
		})) }, headEntryOptions);
	}
	const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
	
	const htmlContext = {
		htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
		head: normalizeChunks([headTags]),
		bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
		bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
		body: [replaceIslandTeleports(ssrContext, _rendered.html) , APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG],
		bodyAppend: [bodyTags]
	};
	
	await nitroApp.hooks.callHook("render:html", htmlContext, { event });
	
	return {
		body: renderHTMLDocument(htmlContext),
		statusCode: getResponseStatus(event),
		statusMessage: getResponseStatusText(event),
		headers: {
			"content-type": "text/html;charset=utf-8",
			"x-powered-by": "Nuxt"
		}
	};
}
function normalizeChunks(chunks) {
	const result = [];
	for (const _chunk of chunks) {
		const chunk = _chunk?.trim();
		if (chunk) {
			result.push(chunk);
		}
	}
	return result;
}
function joinTags(tags) {
	return tags.join("");
}
function joinAttrs(chunks) {
	if (chunks.length === 0) {
		return "";
	}
	return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
	return "<!DOCTYPE html>" + `<html${joinAttrs(html.htmlAttrs)}>` + `<head>${joinTags(html.head)}</head>` + `<body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>` + "</html>";
}

const renderer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handler
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map

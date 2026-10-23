import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, createError, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, removeResponseHeader, getQuery as getQuery$1, readBody, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getResponseStatus, getRouterParam, getHeader, getResponseStatusText } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/h3/dist/index.mjs';
import { escapeHtml } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/@vue/shared/dist/shared.cjs.js';
import viteNodeEntry_mjs from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/@nuxt/vite-builder/dist/vite-node-entry.mjs';
import { viteNodeFetch } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/@nuxt/vite-builder/dist/vite-node.mjs';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, decodePath, withLeadingSlash, withoutTrailingSlash, encodePath, joinRelativeURL } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/ufo/dist/index.mjs';
import destr, { destr as destr$1 } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/destr/dist/index.mjs';
import { renderToString } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/vue/server-renderer/index.mjs';
import { klona } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/scule/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/unhead/dist/server.mjs';
import { stringify, uneval } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/devalue/index.js';
import { isVNode, isRef, toValue } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/vue/index.mjs';
import { createHooks } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/unstorage/drivers/fs.mjs';
import file_58_47_47_47C_58_47Users_47andrey_46koldayev_47PortableGit_47Manager_45Assistant_47node_modules_47_64nuxt_47nitro_45server_47dist_47runtime_47utils_47cache_45driver_46js from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import { digest, hash as hash$1 } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/ohash/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/youch-core/build/index.js';
import { Youch } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/source-map/source-map.js';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/errx/dist/index.js';
import _wH6JrtIxmaSoA8lCPWFnE9z4lQeXW6H5z3l5aymEQw from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/@nuxt/vite-builder/dist/fix-stacktrace.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1 } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/pathe/dist/index.mjs';
import { walkResolver } from 'file://C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/unhead/dist/utils.mjs';

const serverAssets = [{"baseName":"server","dir":"C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/andrey.koldayev/PortableGit/Manager-Assistant","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/server","watchOptions":{"ignored":[null]}}));
storage.mount('cache:nuxt:payload', file_58_47_47_47C_58_47Users_47andrey_46koldayev_47PortableGit_47Manager_45Assistant_47node_modules_47_64nuxt_47nitro_45server_47dist_47runtime_47utils_47cache_45driver_46js({"driver":"file:///C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js","base":"C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/.nuxt/cache/nuxt/payload"}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/.nuxt/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/.data/kv"}));

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

const _UFwYW3owUOqOet06yKC0Adh6E5YooendySDqJOz8vls = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const rootDir = "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant";

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
const _cTQDkUt1grIWvG1QrZxOqss4sbwlKmILmucn6Xvtzg = (nitroApp) => {
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

const plugins = [
  _UFwYW3owUOqOet06yKC0Adh6E5YooendySDqJOz8vls,
_cTQDkUt1grIWvG1QrZxOqss4sbwlKmILmucn6Xvtzg,
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
const _9bL1_g = eventHandler((event) => {
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

const _lazy_DOqkNG = () => Promise.resolve().then(function () { return analyzeNextStep_post$1; });
const _lazy_tm34TG = () => Promise.resolve().then(function () { return askNextStepAi_post$1; });
const _lazy_JjO4vH = () => Promise.resolve().then(function () { return createCallActivity_post$1; });
const _lazy_IWDYCf = () => Promise.resolve().then(function () { return loadDealContext_get$1; });
const _lazy_Bv6vDO = () => Promise.resolve().then(function () { return loadNavigatorContext_get$1; });
const _lazy_mSL0bL = () => Promise.resolve().then(function () { return recommendObjection_post$1; });
const _lazy_VWPcSI = () => Promise.resolve().then(function () { return session_get$1; });
const _lazy_ozBfjM = () => Promise.resolve().then(function () { return clientContext_post$1; });
const _lazy_JQTpWs = () => Promise.resolve().then(function () { return runtime_get$1; });
const _lazy_XrfEnA = () => Promise.resolve().then(function () { return renderer; });

const handlers = [
  { route: '', handler: _9bL1_g, lazy: false, middleware: true, method: undefined },
  { route: '/api/b24/analyze-next-step', handler: _lazy_DOqkNG, lazy: true, middleware: false, method: "post" },
  { route: '/api/b24/ask-next-step-ai', handler: _lazy_tm34TG, lazy: true, middleware: false, method: "post" },
  { route: '/api/b24/create-call-activity', handler: _lazy_JjO4vH, lazy: true, middleware: false, method: "post" },
  { route: '/api/b24/load-deal-context', handler: _lazy_IWDYCf, lazy: true, middleware: false, method: "get" },
  { route: '/api/b24/load-navigator-context', handler: _lazy_Bv6vDO, lazy: true, middleware: false, method: "get" },
  { route: '/api/b24/recommend-objection', handler: _lazy_mSL0bL, lazy: true, middleware: false, method: "post" },
  { route: '/api/b24/session', handler: _lazy_VWPcSI, lazy: true, middleware: false, method: "get" },
  { route: '/api/debug/client-context', handler: _lazy_ozBfjM, lazy: true, middleware: false, method: "post" },
  { route: '/api/debug/runtime', handler: _lazy_JQTpWs, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_XrfEnA, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: handler$1, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_XrfEnA, lazy: true, middleware: false, method: undefined }
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

const AI_ACTIVITY_TYPES = ["Todo"];
function buildDealContext({ deal, linkedLead = null, timelines = [], activities = [], messages = [], contact = null }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E;
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
      stageName: (_n = (_m = (_k = (_i = deal.stageName) != null ? _i : deal.STAGE_NAME) != null ? _k : (_j = deal.stage) == null ? void 0 : _j.name) != null ? _m : (_l = deal.STAGE) == null ? void 0 : _l.NAME) != null ? _n : null,
      amount: (_q = (_p = (_o = deal.amount) != null ? _o : deal.opportunity) != null ? _p : deal.OPPORTUNITY) != null ? _q : null,
      currencyId: (_t = (_s = (_r = deal.currencyId) != null ? _r : deal.currency) != null ? _s : deal.CURRENCY_ID) != null ? _t : null,
      assignedById: numberOrNull((_v = (_u = deal.assignedById) != null ? _u : deal.responsibleId) != null ? _v : deal.ASSIGNED_BY_ID),
      contactId: numberOrNull((_A = (_y = (_w = deal.contactId) != null ? _w : deal.CONTACT_ID) != null ? _y : (_x = deal.contactIds) == null ? void 0 : _x[0]) != null ? _A : (_z = deal.CONTACT_IDS) == null ? void 0 : _z[0]),
      companyId: numberOrNull((_B = deal.companyId) != null ? _B : deal.COMPANY_ID),
      linkedLeadId: numberOrNull((_E = (_D = (_C = linkedLead == null ? void 0 : linkedLead.id) != null ? _C : linkedLead == null ? void 0 : linkedLead.ID) != null ? _D : deal.leadId) != null ? _E : deal.LEAD_ID),
      communications: extractContactCommunications(contact)
    },
    history,
    sourceStats: {
      comments: timelines.length,
      wazzupComments: timelines.filter(isWazzupComment).length,
      activities: activities.length,
      messages: messages.length,
      leadActivities: activities.filter((item) => item.sourceEntityType === "lead").length,
      leadMessages: messages.filter((item) => item.sourceEntityType === "lead").length
    }
  };
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
    // The AI module creates only a CRM deal, never a task, call, meeting, or email.
    activityType: "Todo",
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
function buildLinkedTaskPayload({ dealId, recommendation }) {
  const numericDealId = Number(dealId);
  if (!Number.isFinite(numericDealId) || numericDealId <= 0) {
    throw new Error("dealId must be a positive number");
  }
  const validated = validateAiRecommendation(recommendation, /* @__PURE__ */ new Date(0));
  return {
    title: validated.title,
    description: validated.description,
    responsibleId: validated.responsibleId,
    deadline: validated.deadline,
    priority: 1,
    // The manager must be able to adjust the proposed deadline in Bitrix24.
    allowChangeDeadline: true,
    // VibeCode Tasks API is the supported way to create a task-type action
    // and links it to the deal timeline.
    UF_CRM_TASK: [`D_${numericDealId}`]
  };
}
function buildPromptMessages({ context, systemPrompt }) {
  return [
    { role: "system", content: systemPrompt },
    { role: "user", content: JSON.stringify(context, null, 2) }
  ];
}
const CRM_ACTIVITY_RECOMMENDATION_TOOL = {
  type: "function",
  function: {
    name: "recommend_crm_activity",
    description: "\u0412\u044B\u0431\u0438\u0440\u0430\u0435\u0442 \u043E\u0434\u043D\u043E CRM-\u0434\u0435\u043B\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441\u043E\u0437\u0434\u0430\u0441\u0442 \u043F\u043E\u0441\u043B\u0435 \u0440\u0443\u0447\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: ["title", "description", "deadline", "responsibleId", "activityType", "importantDetails", "justification", "sourceSignals"],
      properties: {
        title: { type: "string", description: "\u041A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C." },
        description: { type: "string", description: "\u0413\u043E\u0442\u043E\u0432\u044B\u0439 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430." },
        deadline: { type: "string", description: "\u0411\u0443\u0434\u0443\u0449\u0430\u044F \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F \u0432 ISO-8601 \u0441 timezone." },
        responsibleId: { type: "number", description: "ID \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430." },
        activityType: { type: "string", enum: AI_ACTIVITY_TYPES, description: "\u0412\u0441\u0435\u0433\u0434\u0430 Todo: \u0441\u043E\u0437\u0434\u0430\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E CRM-\u0434\u0435\u043B\u043E." },
        importantDetails: { type: "array", items: { type: "string" } },
        justification: { type: "array", items: { type: "string" } },
        sourceSignals: { type: "array", items: { type: "string" } }
      }
    }
  }
};
function normalizeActivity(activity) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
  return {
    id: `${(_a = activity.sourceEntityType) != null ? _a : "deal"}:activity:${(_b = activity.id) != null ? _b : activity.ID}`,
    at: (_f = (_e = (_d = (_c = activity.createdAt) != null ? _c : activity.deadline) != null ? _d : activity.startTime) != null ? _e : activity.dateCreate) != null ? _f : (/* @__PURE__ */ new Date(0)).toISOString(),
    channel: sourceLabel(activity, (_k = (_j = (_i = (_h = (_g = activity.activityType) != null ? _g : activity.typeName) != null ? _h : activity.providerTypeId) != null ? _i : activity.typeId) != null ? _j : activity.TYPE_ID) != null ? _k : "activity"),
    author: (_m = (_l = activity.authorName) != null ? _l : activity.responsibleName) != null ? _m : null,
    direction: (_q = (_p = (_o = (_n = activity.direction) != null ? _n : activity.directionName) != null ? _o : activity.incoming) != null ? _p : activity.outgoing) != null ? _q : null,
    title: (_s = (_r = activity.subject) != null ? _r : activity.title) != null ? _s : "",
    text: (_x = (_w = (_v = (_u = (_t = activity.transcript) != null ? _t : activity.transcription) != null ? _u : activity.description) != null ? _v : activity.text) != null ? _w : activity.comment) != null ? _x : ""
  };
}
function normalizeTimeline(item) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
  return {
    id: `${(_a = item.sourceEntityType) != null ? _a : "deal"}:timeline:${(_b = item.id) != null ? _b : item.ID}`,
    at: (_e = (_d = (_c = item.createdAt) != null ? _c : item.dateCreate) != null ? _d : item.updatedAt) != null ? _e : (/* @__PURE__ */ new Date(0)).toISOString(),
    channel: sourceLabel(item, isWazzupComment(item) ? "wazzup" : (_g = (_f = item.type) != null ? _f : item.typeName) != null ? _g : "timeline"),
    author: (_i = (_h = item.authorName) != null ? _h : item.userName) != null ? _i : null,
    direction: (_m = (_l = (_k = (_j = item.direction) != null ? _j : item.directionName) != null ? _k : item.incoming) != null ? _l : item.outgoing) != null ? _m : null,
    title: (_o = (_n = item.title) != null ? _n : item.subject) != null ? _o : "",
    text: (_r = (_q = (_p = item.text) != null ? _p : item.description) != null ? _q : item.comment) != null ? _r : ""
  };
}
function extractContactCommunications(contact) {
  var _a, _b, _c, _d, _e, _f, _g;
  if (!contact) {
    return [];
  }
  return [
    ...extractCommunicationValues((_c = (_b = (_a = contact.phone) != null ? _a : contact.PHONE) != null ? _b : contact.phones) != null ? _c : contact.PHONES, "PHONE"),
    ...extractCommunicationValues((_f = (_e = (_d = contact.email) != null ? _d : contact.EMAIL) != null ? _e : contact.emails) != null ? _f : contact.EMAILS, "EMAIL"),
    ...extractFmCommunications((_g = contact.fm) != null ? _g : contact.FM)
  ].filter((communication, index, all) => all.findIndex((item) => item.type === communication.type && item.value === communication.value) === index);
}
function extractFmCommunications(value) {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.flatMap((item) => {
    var _a, _b, _c;
    if (!item || typeof item !== "object") {
      return [];
    }
    const record = item;
    const typeId = String((_b = (_a = record.typeId) != null ? _a : record.TYPE_ID) != null ? _b : "").toUpperCase();
    const type = typeId === "PHONE" || typeId === "EMAIL" ? typeId : null;
    const value2 = (_c = record.value) != null ? _c : record.VALUE;
    return type && typeof value2 === "string" && value2.trim() ? [{ type, value: value2.trim() }] : [];
  });
}
function extractCommunicationValues(value, type) {
  const values = Array.isArray(value) ? value : [value];
  return values.map((item) => {
    var _a;
    return typeof item === "object" && item ? (_a = item.value) != null ? _a : item.VALUE : item;
  }).filter((item) => typeof item === "string" && item.trim().length > 0).map((item) => ({ type, value: item.trim() }));
}
function isWazzupComment(item) {
  return [item.providerId, item.providerTypeId, item.originatorId, item.originId, item.title, item.text, item.comment].filter(Boolean).join(" ").toLowerCase().includes("wazzup");
}
function normalizeMessage(message) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  return {
    id: `${(_a = message.sourceEntityType) != null ? _a : "deal"}:message:${(_b = message.id) != null ? _b : message.ID}`,
    at: (_e = (_d = (_c = message.date) != null ? _c : message.createdAt) != null ? _d : message.dateCreate) != null ? _e : (/* @__PURE__ */ new Date(0)).toISOString(),
    channel: sourceLabel(message, "chat"),
    author: (_h = (_g = (_f = message.authorName) != null ? _f : message.senderName) != null ? _g : message.userName) != null ? _h : null,
    direction: (_l = (_k = (_j = (_i = message.direction) != null ? _i : message.directionName) != null ? _j : message.incoming) != null ? _k : message.outgoing) != null ? _l : null,
    title: (_n = (_m = message.chatTitle) != null ? _m : message.dialogId) != null ? _n : "",
    text: (_p = (_o = message.text) != null ? _o : message.message) != null ? _p : ""
  };
}
function sourceLabel(item, channel) {
  return item.sourceEntityType === "lead" ? `lead:${channel}` : channel;
}
function numberOrNull(value) {
  var _a, _b;
  const rawValue = value && typeof value === "object" ? (_b = (_a = value.id) != null ? _a : value.ID) != null ? _b : value.value : value;
  const number = Number(rawValue);
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

\u0412\u0435\u0440\u043D\u0438 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044E \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u044B\u0437\u043E\u0432\u043E\u043C \u0444\u0443\u043D\u043A\u0446\u0438\u0438 recommend_crm_activity. \u041D\u0435 \u043F\u0438\u0448\u0438 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u0432\u043C\u0435\u0441\u0442\u043E \u0432\u044B\u0437\u043E\u0432\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0438.

\u041F\u0440\u0430\u0432\u0438\u043B\u0430:
- \u0412\u044B\u0431\u0435\u0440\u0438 \u043E\u0434\u0438\u043D \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433. \u0415\u0441\u043B\u0438 \u043D\u0443\u0436\u043D\u0430 \u0446\u0435\u043F\u043E\u0447\u043A\u0430, \u0441\u043E\u0437\u0434\u0430\u0439 primary action, \u0430 secondary \u0443\u043F\u043E\u043C\u044F\u043D\u0438 \u0432 description.
- \u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u0439 \u0441\u0430\u043C\u044B\u0439 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u043F\u0443\u0442\u044C \u043A \u0440\u0435\u0448\u0435\u043D\u0438\u044E: \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0432\u044B\u0431\u043E\u0440, \u0441\u043D\u044F\u0442\u044C \u0432\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u0435, \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u0442\u044C \u043E\u043F\u043B\u0430\u0442\u0443, \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u044E\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435.
- \u0414\u0435\u0434\u043B\u0430\u0439\u043D \u0441\u0442\u0430\u0432\u044C \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E: \u0441\u0435\u0433\u043E\u0434\u043D\u044F/\u0437\u0430\u0432\u0442\u0440\u0430 \u0432 \u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u0432\u0440\u0435\u043C\u044F, \u0435\u0441\u043B\u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0441\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C; \u0438\u043D\u0430\u0447\u0435 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0439 \u0440\u0430\u0437\u0443\u043C\u043D\u044B\u0439 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u043B\u043E\u0442.
- \u0412\u0441\u0435\u0433\u0434\u0430 \u0441\u043E\u0437\u0434\u0430\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E CRM-\u0434\u0435\u043B\u043E, \u0430 \u043D\u0435 \u0437\u0430\u0434\u0430\u0447\u0430, \u0437\u0432\u043E\u043D\u043E\u043A, \u0432\u0441\u0442\u0440\u0435\u0447\u0430 \u0438\u043B\u0438 email. activityType \u0432\u0441\u0435\u0433\u0434\u0430 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0439 \u043A\u0430\u043A Todo. \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043A\u0430\u043D\u0430\u043B \u0438 \u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0443 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0439 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 description.
- Description \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C: \u0447\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C, \u0433\u0434\u0435/\u0447\u0435\u0440\u0435\u0437 \u043A\u0430\u043A\u043E\u0439 \u043A\u0430\u043D\u0430\u043B, \u043A\u0430\u043A \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C/\u043F\u0438\u0441\u0430\u0442\u044C, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0438 \u043F\u043E\u0447\u0435\u043C\u0443.
- \u0415\u0441\u043B\u0438 \u043A\u043B\u0438\u0435\u043D\u0442 \u043C\u043E\u043B\u0447\u0438\u0442, \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438 \u043E\u0434\u043D\u043E CRM-\u0434\u0435\u043B\u043E \u0441 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u043E\u0439 \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u0438 \u043A\u0440\u0430\u0442\u043A\u043E\u0439 \u0432\u0442\u043E\u0440\u0438\u0447\u043D\u043E\u0439 \u043A\u0430\u0434\u0435\u043D\u0446\u0438\u0435\u0439 \u0432 description.
- responsibleId \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0435\u0440\u0438 \u0438\u0437 context.deal.assignedById. \u0415\u0441\u043B\u0438 \u0435\u0433\u043E \u043D\u0435\u0442, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439 1.
- \u0417\u0430\u043F\u0438\u0441\u0438 \u0441 channel=wazzup \u0432 history \u2014 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 \u0438\u0437 Wazzup \u0432 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0435 \u0441\u0434\u0435\u043B\u043A\u0438. \u0423\u0447\u0438\u0442\u044B\u0432\u0430\u0439 \u0438\u0445 \u043A\u0430\u043A \u043F\u0435\u0440\u0432\u0438\u0447\u043D\u044B\u0439 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0445 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0451\u043D\u043D\u043E\u0441\u0442\u0435\u0439 \u0438 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0435\u043D\u0438\u0439 \u043A\u043B\u0438\u0435\u043D\u0442\u0430.
- \u041D\u0435 \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0439 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u0440\u0430\u0441\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F \u043C\u043E\u0434\u0435\u043B\u0438.
- \u042F\u0437\u044B\u043A: \u0440\u0443\u0441\u0441\u043A\u0438\u0439, \u0434\u0435\u043B\u043E\u0432\u043E\u0439, \u0431\u0435\u0437 \u0432\u043E\u0434\u044B.`;

const VIBE_BASE_URL = "https://vibecode.bitrix24.tech/v1";
async function loadDealBundle({ dealId, headers }) {
  var _a, _b, _c, _d, _e, _f;
  const deal = await requestVibe(`/deals/${dealId}`, { headers });
  const contactId = positiveId((_e = (_c = (_a = deal == null ? void 0 : deal.contactId) != null ? _a : deal == null ? void 0 : deal.CONTACT_ID) != null ? _c : (_b = deal == null ? void 0 : deal.contactIds) == null ? void 0 : _b[0]) != null ? _e : (_d = deal == null ? void 0 : deal.CONTACT_IDS) == null ? void 0 : _d[0]);
  const leadId = positiveId((_f = deal == null ? void 0 : deal.leadId) != null ? _f : deal == null ? void 0 : deal.LEAD_ID);
  const [dealHistory, lead, contact, stageName] = await Promise.all([
    loadEntityHistory({ entityType: "deal", entityId: dealId, ownerTypeId: 2, headers }),
    leadId ? safeRequestVibe(`/leads/${leadId}`, { headers }) : Promise.resolve(null),
    contactId ? safeRequestVibe(`/contacts/${contactId}`, { headers }) : Promise.resolve(null),
    loadStageName(deal, headers)
  ]);
  const leadHistory = leadId ? await loadEntityHistory({ entityType: "lead", entityId: leadId, ownerTypeId: 1, headers }) : emptyHistory();
  return {
    deal: { ...deal, stageName: stageName || deal.stageName || deal.STAGE_NAME || "" },
    linkedLead: lead && typeof lead === "object" && !Array.isArray(lead) ? lead : null,
    timelines: [...dealHistory.timelines, ...leadHistory.timelines],
    activities: [...dealHistory.activities, ...leadHistory.activities],
    messages: [...dealHistory.messages, ...leadHistory.messages],
    contact: contact && typeof contact === "object" && !Array.isArray(contact) ? contact : null
  };
}
async function loadStageName(deal, headers) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const stageId = String((_b = (_a = deal.stageId) != null ? _a : deal.STAGE_ID) != null ? _b : "").trim();
  if (!stageId) return "";
  const categoryId = Number((_d = (_c = deal.categoryId) != null ? _c : deal.CATEGORY_ID) != null ? _d : 0);
  const entityId = Number.isInteger(categoryId) && categoryId > 0 ? `DEAL_STAGE_${categoryId}` : "DEAL_STAGE";
  const statuses = await safeRequestVibe(`/statuses?filter[entityId]=${encodeURIComponent(entityId)}`, { headers });
  const items = toItems$2(statuses);
  const match = items.find((item) => {
    var _a2, _b2, _c2;
    return String((_c2 = (_b2 = (_a2 = item.statusId) != null ? _a2 : item.STATUS_ID) != null ? _b2 : item.id) != null ? _c2 : item.ID) === stageId;
  });
  return String((_h = (_g = (_f = (_e = match == null ? void 0 : match.name) != null ? _e : match == null ? void 0 : match.NAME) != null ? _f : match == null ? void 0 : match.title) != null ? _g : match == null ? void 0 : match.TITLE) != null ? _h : "").trim();
}
async function loadEntityHistory({ entityType, entityId, ownerTypeId, headers }) {
  const [timelines, activities, messages] = await Promise.all([
    safeRequestVibe(`/timelines?entityType=${entityType}&entityId=${entityId}`, { headers }),
    safeRequestVibe("/activities/search", {
      headers,
      method: "POST",
      body: {
        filter: { ownerTypeId, ownerId: entityId },
        sort: "createdAt",
        limit: 200,
        select: ["id", "subject", "description", "typeId", "activityType", "createdAt", "deadline", "communications", "files", "webdavElements"]
      }
    }),
    loadCrmMessages({ entityType, entityId, headers })
  ]);
  return {
    timelines: markSource(toItems$2(timelines), entityType, entityId),
    activities: markSource(toItems$2(activities), entityType, entityId),
    messages: markSource(toItems$2(messages), entityType, entityId)
  };
}
async function requestVibe(path, options) {
  return requestVibeRaw(`${VIBE_BASE_URL}${path}`, {
    method: options.method || "GET",
    headers: options.headers,
    body: options.body ? JSON.stringify(options.body) : void 0
  });
}
async function requestVibeRaw(url, options) {
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
async function loadCrmMessages({ entityType, entityId, headers }) {
  var _a, _b;
  try {
    const chat = await requestVibe(`/chats/find?entityType=CRM&entityId=${entityType.toUpperCase()}|${entityId}`, { headers });
    const dialogId = (_b = (_a = chat == null ? void 0 : chat.dialogId) != null ? _a : chat == null ? void 0 : chat.id) != null ? _b : chat == null ? void 0 : chat.chatId;
    return dialogId ? await requestVibe(`/chats/${encodeURIComponent(String(dialogId))}/messages?limit=100`, { headers }) : [];
  } catch {
    return [];
  }
}
async function safeRequestVibe(path, options) {
  try {
    return await requestVibe(path, options);
  } catch {
    return [];
  }
}
function toItems$2(value) {
  var _a, _b;
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object") {
    const record = value;
    const items = (_b = (_a = record.items) != null ? _a : record.results) != null ? _b : record.data;
    return Array.isArray(items) ? items : [];
  }
  return [];
}
function markSource(items, entityType, entityId) {
  return items.map((item) => ({ ...item, sourceEntityType: entityType, sourceEntityId: entityId }));
}
function emptyHistory() {
  return { timelines: [], activities: [], messages: [] };
}
function positiveId(value) {
  var _a, _b;
  const rawValue = value && typeof value === "object" ? (_b = (_a = value.id) != null ? _a : value.ID) != null ? _b : value.value : value;
  const id = Number(typeof rawValue === "string" ? rawValue.replace(/^L_/, "") : rawValue);
  return Number.isInteger(id) && id > 0 ? id : null;
}

var _a, _b;
const B24_API_KEY = (_b = (_a = process.env.VIBE_APP_API_KEY) != null ? _a : process.env.VIBE_API_KEY) != null ? _b : "";
function ensureVibeApiKey() {
  if (!B24_API_KEY) {
    throw createError({
      statusCode: 500,
      statusMessage: "VIBE_APP_API_KEY is not configured"
    });
  }
}
function firstString(...values) {
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
  return firstString(getHeader(event, "x-vibe-authorization"));
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
  const directName = firstString(
    person.name,
    person.NAME,
    person.fullName,
    person.FULL_NAME
  );
  if (directName) {
    return directName;
  }
  const firstName = firstString(person.firstName, person.FIRST_NAME);
  const lastName = firstString(person.lastName, person.LAST_NAME);
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

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
const DEFAULT_AUDIO_MODEL = "bitrix/bitrixgpt-5.6-transcribe";
const DEFAULT_RECORDINGS_FOLDER_ID = 259146;
const MAX_ALLOWED_AUDIO_BYTES = 25 * 1024 * 1024;
const TRANSCRIPT_MARKER = "AI_CALL_TRANSCRIPT";
const AUDIO_EXTENSIONS = /\.(mp3|mp4|mpeg|mpga|m4a|wav|webm|flac|ogg)(?:$|[?#])/i;
async function enrichCallTranscripts({ dealId, bundle, headers }) {
  var _a;
  const stats = { calls: 0, native: 0, cached: 0, transcribed: 0, unavailable: 0 };
  const config = getTranscriptConfig();
  const calls = (bundle.activities || []).filter(isCallActivity);
  stats.calls = calls.length;
  if (!calls.length) return stats;
  let recordingFolders = null;
  for (const activity of calls) {
    const activityId = Number((_a = activity.id) != null ? _a : activity.ID);
    if (!Number.isFinite(activityId) || activityId <= 0) continue;
    const native = await getNativeTranscript(activityId, headers);
    if (native) {
      attachTranscript(activity, native, "bitrix");
      stats.native += 1;
      continue;
    }
    const cached = findCachedTranscript(activityId, bundle.timelines || []);
    if (cached) {
      attachTranscript(activity, cached, "cache");
      stats.cached += 1;
      continue;
    }
    recordingFolders != null ? recordingFolders : recordingFolders = await loadRecordingFolders(headers, config.folderId);
    const recording = await selectRecording(activity, recordingFolders, headers);
    if (!recording) {
      stats.unavailable += 1;
      continue;
    }
    try {
      const transcript = await transcribeRecording(recording, headers, config);
      if (!transcript) {
        stats.unavailable += 1;
        continue;
      }
      attachTranscript(activity, transcript, "ai-router");
      stats.transcribed += 1;
      await saveTranscript({ dealId, activityId, transcript, headers });
    } catch (error) {
      console.warn(`Call transcription failed for activity ${activityId}:`, error);
      stats.unavailable += 1;
    }
  }
  return stats;
}
function isCallActivity(activity) {
  var _a, _b, _c, _d;
  const type = String((_d = (_c = (_b = (_a = activity.typeId) != null ? _a : activity.TYPE_ID) != null ? _b : activity.activityType) != null ? _c : activity.typeName) != null ? _d : "").toLowerCase();
  return type === "2" || type === "call" || type.includes("\u0437\u0432\u043E\u043D");
}
async function getNativeTranscript(activityId, headers) {
  try {
    const response = await requestVibe(`/activities/${activityId}/transcript`, { headers });
    return firstText(response == null ? void 0 : response.transcription);
  } catch {
    return "";
  }
}
function findCachedTranscript(activityId, timelines) {
  var _a, _b, _c;
  const marker = `[${TRANSCRIPT_MARKER}:${activityId}]`;
  for (const item of timelines) {
    const text = firstText(item.text, item.description, item.comment);
    if (text.includes(marker)) return text.slice(text.indexOf(marker) + marker.length).trim();
    const title = firstText(item.title, item.subject).toLowerCase();
    const linkedActivityId = String((_c = (_b = (_a = item.activityId) != null ? _a : item.associatedActivityId) != null ? _b : item.relatedActivityId) != null ? _c : "");
    if ((linkedActivityId === String(activityId) || title.includes(`#${activityId}`)) && /(расшифровк|транскрипц|transcript)/i.test(`${title}
${text}`)) {
      return text;
    }
  }
  return "";
}
async function loadRecordingFolders(headers, folderId) {
  try {
    const response = await requestVibe(`/folders?filter[parentId]=${folderId}&limit=100`, { headers });
    return toItems$1(response).filter((folder) => /^\d{4}-\d{2}$/.test(firstText(folder.name)));
  } catch (error) {
    console.warn("Call recordings folder is unavailable:", error);
    return [];
  }
}
async function selectRecording(activity, recordingFolders, headers) {
  var _a, _b, _c, _d, _e, _f;
  const attached = flattenFiles((_c = (_b = (_a = activity.files) != null ? _a : activity.FILES) != null ? _b : activity.webdavElements) != null ? _c : activity.WEBDAV_ELEMENTS);
  const direct = attached.find(isAudioFile);
  if (direct) return direct;
  const activityTime = toTimestamp((_e = (_d = activity.createdAt) != null ? _d : activity.startTime) != null ? _e : activity.deadline);
  const phoneTerms = getPhoneSearchTerms((_f = activity.communications) != null ? _f : activity.COMMUNICATIONS);
  if (!phoneTerms.length || !Number.isFinite(activityTime)) return null;
  const folderIds = recordingFolders.filter((folder) => folderMatchesActivityMonth(folder, activityTime)).map((folder) => {
    var _a2;
    return Number((_a2 = folder.id) != null ? _a2 : folder.ID);
  }).filter((id) => Number.isFinite(id) && id > 0);
  if (!folderIds.length) return null;
  const recordings = await findRecordingsByPhone({ folderIds, phoneTerms, headers });
  return chooseClosestRecording(recordings, activityTime);
}
async function findRecordingsByPhone({ folderIds, phoneTerms, headers }) {
  var _a, _b, _c;
  const requests = folderIds.flatMap((folderId) => phoneTerms.map(async (phone) => {
    try {
      const response = await requestVibe(
        `/files?filter[folderId]=${folderId}&filter[name][$contains]=${encodeURIComponent(phone)}&limit=100`,
        { headers }
      );
      return toItems$1(response).filter(isAudioFile);
    } catch (error) {
      console.warn(`Could not search call recordings in folder ${folderId}:`, error);
      return [];
    }
  }));
  const results = await Promise.all(requests);
  const unique = /* @__PURE__ */ new Map();
  for (const recording of results.flat()) {
    const id = String((_c = (_b = (_a = recording.id) != null ? _a : recording.ID) != null ? _b : recording.fileId) != null ? _c : recording.name);
    unique.set(id, recording);
  }
  return [...unique.values()];
}
function folderMatchesActivityMonth(folder, activityTime) {
  const folderMonth = firstText(folder.name);
  const current = new Date(activityTime);
  const previous = new Date(activityTime);
  previous.setMonth(previous.getMonth() - 1);
  const next = new Date(activityTime);
  next.setMonth(next.getMonth() + 1);
  return [monthKey(current), monthKey(previous), monthKey(next)].includes(folderMonth);
}
function chooseClosestRecording(recordings, activityTime) {
  const candidates = recordings.map((file) => ({ file, distance: Math.abs(recordingTimestamp(file) - activityTime) })).filter(({ distance }) => Number.isFinite(distance)).sort((left, right) => left.distance - right.distance);
  if (!candidates.length || candidates[0].distance > 60 * 60 * 1e3) return null;
  if (candidates.length > 1 && candidates[1].distance === candidates[0].distance) return null;
  return candidates[0].file;
}
async function transcribeRecording(file, headers, config = getTranscriptConfig()) {
  var _a, _b;
  const url = firstText(file.downloadUrlMachine, file.downloadUrl, file.url, file.urlDownload, file.download);
  if (!isAllowedAudioUrl(url)) return "";
  const response = await fetch(url, { headers: buildAuthorizationHeaders(headers) });
  if (!response.ok) throw new CallTranscriptionError("download_failed", `\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C \u0437\u0432\u043E\u043D\u043A\u0430: ${response.status}`);
  const size = Number(response.headers.get("content-length"));
  if (Number.isFinite(size) && size > config.maxAudioBytes) throw new CallTranscriptionError("file_too_large", "\u0417\u0430\u043F\u0438\u0441\u044C \u0437\u0432\u043E\u043D\u043A\u0430 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440.");
  const audio = await response.blob();
  if (!audio.size || audio.size > config.maxAudioBytes) throw new CallTranscriptionError("file_too_large", "\u0417\u0430\u043F\u0438\u0441\u044C \u0437\u0432\u043E\u043D\u043A\u0430 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440.");
  const form = new FormData();
  form.append("file", audio, firstText(file.name, file.title, file.filename) || "call-recording.mp3");
  form.append("model", config.model);
  form.append("language", config.language);
  form.append("response_format", "json");
  form.append("vad_filter", "true");
  if (config.prompt) form.append("prompt", config.prompt);
  const transcription = await fetch("https://vibecode.bitrix24.tech/v1/audio/transcriptions", {
    method: "POST",
    headers: { "X-Api-Key": B24_API_KEY, ...buildAuthorizationHeaders(headers) },
    body: form
  });
  const payload = await transcription.json().catch(() => null);
  if (!transcription.ok || (payload == null ? void 0 : payload.error)) {
    throw new CallTranscriptionError(((_a = payload == null ? void 0 : payload.error) == null ? void 0 : _a.code) || "transcription_failed", ((_b = payload == null ? void 0 : payload.error) == null ? void 0 : _b.message) || `AI Router \u0432\u0435\u0440\u043D\u0443\u043B \u043E\u0448\u0438\u0431\u043A\u0443 ${transcription.status}`);
  }
  return firstText(payload == null ? void 0 : payload.text);
}
async function saveTranscript({ dealId, activityId, transcript, headers }) {
  try {
    await requestVibe("/timeline-logs", {
      method: "POST",
      headers,
      body: {
        entityTypeId: 2,
        entityId: dealId,
        title: `AI: \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0430 \u0437\u0432\u043E\u043D\u043A\u0430 #${activityId}`,
        text: `[${TRANSCRIPT_MARKER}:${activityId}]
${transcript}`,
        iconCode: "ai"
      }
    });
  } catch (error) {
    console.warn(`Could not cache transcript for activity ${activityId}:`, error);
  }
}
function attachTranscript(activity, transcript, source) {
  activity.transcript = transcript;
  activity.transcriptionSource = source;
}
function flattenFiles(value) {
  if (Array.isArray(value)) return value.filter(isRecord);
  if (isRecord(value)) return isAudioFile(value) ? [value] : Object.values(value).flatMap(flattenFiles);
  return [];
}
function toItems$1(value) {
  var _a, _b;
  if (Array.isArray(value)) return value.filter(isRecord);
  if (isRecord(value)) {
    const items = (_b = (_a = value.items) != null ? _a : value.results) != null ? _b : value.data;
    return Array.isArray(items) ? items.filter(isRecord) : [];
  }
  return [];
}
function isRecord(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
function isAudioFile(file) {
  const name = firstText(file.name, file.title, file.filename, file.downloadUrl, file.url);
  const type = firstText(file.mimeType, file.contentType, file.type);
  return AUDIO_EXTENSIONS.test(name) || type.startsWith("audio/");
}
function isAllowedAudioUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && (url.hostname.endsWith(".bitrix24.ru") || url.hostname.endsWith(".bitrix24.tech"));
  } catch {
    return false;
  }
}
function firstText(...values) {
  var _a;
  return ((_a = values.find((value) => typeof value === "string" && value.trim().length > 0)) == null ? void 0 : _a.trim()) || "";
}
function collectDigits(value) {
  var _a;
  if (typeof value === "string") return (_a = value.match(/\d{7,}/g)) != null ? _a : [];
  if (Array.isArray(value)) return value.flatMap(collectDigits);
  if (isRecord(value)) return Object.values(value).flatMap(collectDigits);
  return [];
}
function getPhoneSearchTerms(value) {
  const terms = /* @__PURE__ */ new Set();
  for (const source of collectDigits(value)) {
    const digits = source.replace(/\D/g, "");
    if (digits.length < 10) continue;
    terms.add(digits);
    terms.add(digits.slice(-10));
    if (digits.length === 11 && digits.startsWith("8")) terms.add(`7${digits.slice(1)}`);
    if (digits.length === 10) terms.add(`7${digits}`);
  }
  return [...terms].filter((value2) => value2.length >= 10);
}
function monthKey(value) {
  return `${value.getUTCFullYear()}-${String(value.getUTCMonth() + 1).padStart(2, "0")}`;
}
function recordingTimestamp(file) {
  var _a, _b;
  const storedTimestamp = toTimestamp((_b = (_a = file.createdAt) != null ? _a : file.updateTime) != null ? _b : file.dateCreate);
  if (Number.isFinite(storedTimestamp)) return storedTimestamp;
  const name = firstText(file.name, file.title, file.filename);
  const match = name.match(/-(\d{8})-(\d{6})-/);
  if (match) {
    const date = match[1];
    const time = match[2];
    const moscowTimestamp = Date.UTC(
      Number(date.slice(0, 4)),
      Number(date.slice(4, 6)) - 1,
      Number(date.slice(6, 8)),
      Number(time.slice(0, 2)),
      Number(time.slice(2, 4)),
      Number(time.slice(4, 6))
    ) - 3 * 60 * 60 * 1e3;
    if (Number.isFinite(moscowTimestamp)) return moscowTimestamp;
  }
  return Number.NaN;
}
function toTimestamp(value) {
  const timestamp = new Date(String(value || "")).getTime();
  return Number.isFinite(timestamp) ? timestamp : Number.NaN;
}
function buildAuthorizationHeaders(headers) {
  return headers.Authorization ? { Authorization: headers.Authorization } : {};
}
class CallTranscriptionError extends Error {
  constructor(code, message) {
    super(message);
    __publicField(this, "code", code);
    this.name = "CallTranscriptionError";
  }
}
function getTranscriptConfig(env = process.env) {
  var _a, _b, _c;
  const folderId = positiveInteger(env.B24_CALL_RECORDINGS_FOLDER_ID, DEFAULT_RECORDINGS_FOLDER_ID);
  const requestedSize = positiveInteger(env.VIBE_TRANSCRIPTION_MAX_BYTES, MAX_ALLOWED_AUDIO_BYTES);
  return {
    folderId,
    model: ((_a = env.VIBE_TRANSCRIPTION_MODEL) == null ? void 0 : _a.trim()) || DEFAULT_AUDIO_MODEL,
    language: ((_b = env.VIBE_TRANSCRIPTION_LANGUAGE) == null ? void 0 : _b.trim()) || "ru",
    maxAudioBytes: Math.min(requestedSize, MAX_ALLOWED_AUDIO_BYTES),
    prompt: ((_c = env.VIBE_TRANSCRIPTION_PROMPT) == null ? void 0 : _c.trim()) || ""
  };
}
function positiveInteger(value, fallback) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

const DEFAULT_AI_MODEL$2 = "bitrix/bitrixgpt-5.5";
const analyzeNextStep_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e;
  const authHeader = getVibeAuthorizationHeader(event);
  const body = await readBody(event);
  if (!(body == null ? void 0 : body.dealId)) {
    throw createError({ statusCode: 400, statusMessage: "Missing dealId parameter" });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: "Vibe Gateway session is missing. Reopen the widget from the deal card." });
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
    const transcriptStats = await enrichCallTranscripts({ dealId, bundle, headers });
    const context = buildDealContext(bundle);
    const rawRecommendation = body.recommendation || await getAiRecommendation({ context, headers });
    const recommendation = ensureFutureRecommendationDeadline(rawRecommendation);
    const validated = validateAiRecommendation(recommendation);
    if (body.mode !== "live") {
      return {
        success: true,
        data: {
          mode: "preview",
          context: { ...context, transcriptStats },
          recommendation: validated
        }
      };
    }
    let taskPayload = null;
    try {
      taskPayload = buildLinkedTaskPayload({
        dealId,
        recommendation: validated
      });
    } catch (error) {
      throw createError({
        statusCode: 422,
        statusMessage: (error == null ? void 0 : error.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432 CRM."
      });
    }
    const created = await createCrmTask({ taskPayload, headers });
    const createdId = (_e = (_d = (_c = (_a = created == null ? void 0 : created.id) != null ? _a : created == null ? void 0 : created.ID) != null ? _c : (_b = created == null ? void 0 : created.task) == null ? void 0 : _b.id) != null ? _d : created == null ? void 0 : created.taskId) != null ? _e : null;
    return {
      success: true,
      data: {
        mode: "live",
        context: { ...context, transcriptStats },
        recommendation: validated,
        activityPayload: taskPayload,
        createdActivityId: createdId,
        createdEntityType: "task"
      }
    };
  } catch (error) {
    throw createError({
      statusCode: (error == null ? void 0 : error.statusCode) || 500,
      statusMessage: (error == null ? void 0 : error.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C AI-\u0430\u043D\u0430\u043B\u0438\u0437 \u0441\u0434\u0435\u043B\u043A\u0438."
    });
  }
});
async function getAiRecommendation({ context, headers }) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const response = await requestVibeRaw("https://vibecode.bitrix24.tech/v1/chat/completions", {
    method: "POST",
    headers,
    body: JSON.stringify({
      model: process.env.VIBE_AI_MODEL || DEFAULT_AI_MODEL$2,
      messages: buildPromptMessages({
        context: {
          currentTime: (/* @__PURE__ */ new Date()).toISOString(),
          context
        },
        systemPrompt: NEXT_STEP_SYSTEM_PROMPT
      }),
      temperature: 0.2,
      tools: [CRM_ACTIVITY_RECOMMENDATION_TOOL],
      tool_choice: {
        type: "function",
        function: { name: CRM_ACTIVITY_RECOMMENDATION_TOOL.function.name }
      }
    })
  });
  const message = (_c = (_b = (_a = response == null ? void 0 : response.choices) == null ? void 0 : _a[0]) == null ? void 0 : _b.message) != null ? _c : response == null ? void 0 : response.message;
  const toolCall = (_f = (_d = message == null ? void 0 : message.tool_calls) == null ? void 0 : _d.find((call) => {
    var _a2;
    return ((_a2 = call == null ? void 0 : call.function) == null ? void 0 : _a2.name) === CRM_ACTIVITY_RECOMMENDATION_TOOL.function.name;
  })) != null ? _f : (_e = message == null ? void 0 : message.toolCalls) == null ? void 0 : _e.find((call) => {
    var _a2;
    return ((_a2 = call == null ? void 0 : call.function) == null ? void 0 : _a2.name) === CRM_ACTIVITY_RECOMMENDATION_TOOL.function.name;
  });
  const argumentsValue = (_h = (_g = toolCall == null ? void 0 : toolCall.function) == null ? void 0 : _g.arguments) != null ? _h : toolCall == null ? void 0 : toolCall.arguments;
  if (typeof argumentsValue === "string") {
    return JSON.parse(argumentsValue);
  }
  if (argumentsValue && typeof argumentsValue === "object") {
    return argumentsValue;
  }
  throw new Error("AI response does not contain a CRM activity recommendation");
}
async function createCrmTask({ taskPayload, headers }) {
  return requestVibe("/tasks", {
    method: "POST",
    headers,
    body: taskPayload
  });
}

const analyzeNextStep_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: analyzeNextStep_post
}, Symbol.toStringTag, { value: 'Module' }));

const DEFAULT_AI_MODEL$1 = "bitrix/bitrixgpt-5.5";
const MAX_QUESTION_LENGTH = 4e3;
const askNextStepAi_post = defineEventHandler(async (event) => {
  var _a, _b;
  const authHeader = getVibeAuthorizationHeader(event);
  const body = await readBody(event);
  const question = ((_a = body == null ? void 0 : body.question) == null ? void 0 : _a.trim()) || "";
  const dealId = Number(body == null ? void 0 : body.dealId);
  if (!Number.isFinite(dealId) || dealId <= 0) {
    throw createError({ statusCode: 400, statusMessage: "Deal ID \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0447\u0438\u0441\u043B\u043E\u043C." });
  }
  if (!question || question.length > MAX_QUESTION_LENGTH) {
    throw createError({ statusCode: 400, statusMessage: `\u0412\u043E\u043F\u0440\u043E\u0441 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043E\u0442 1 \u0434\u043E ${MAX_QUESTION_LENGTH} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.` });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: "Vibe Gateway session is missing. Reopen the widget from the deal card." });
  }
  ensureVibeApiKey();
  const headers = { "X-Api-Key": B24_API_KEY, Authorization: authHeader, "Content-Type": "application/json" };
  try {
    const bundle = await loadDealBundle({ dealId, headers });
    const transcriptStats = await enrichCallTranscripts({ dealId, bundle, headers });
    const context = { ...buildDealContext(bundle), transcriptStats };
    const response = await requestVibeRaw("https://vibecode.bitrix24.tech/v1/chat/completions", {
      method: "POST",
      headers,
      body: JSON.stringify({
        model: process.env.VIBE_AI_MODEL || DEFAULT_AI_MODEL$1,
        temperature: 0.2,
        messages: [
          {
            role: "system",
            content: "\u0422\u044B AI CRM Sales Assistant \u0434\u043B\u044F Bitrix24. \u041E\u0442\u0432\u0435\u0447\u0430\u0439 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C, \u043A\u043E\u0440\u043E\u0442\u043A\u043E \u0438 \u043F\u043E \u0434\u0435\u043B\u0443. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439 \u0442\u043E\u043B\u044C\u043A\u043E \u0444\u0430\u043A\u0442\u044B \u0438\u0437 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0430 \u0441\u0434\u0435\u043B\u043A\u0438 \u0438 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438. \u041C\u043E\u0436\u043D\u043E \u043E\u0431\u0441\u0443\u0436\u0434\u0430\u0442\u044C \u0432\u0441\u044E \u0441\u0434\u0435\u043B\u043A\u0443, \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0439 \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u0434\u0435\u043B\u043E. \u041D\u0435 \u0432\u044B\u0434\u0443\u043C\u044B\u0432\u0430\u0439 \u0434\u0435\u0442\u0430\u043B\u0438; \u0435\u0441\u043B\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0435\u0442, \u0441\u043A\u0430\u0436\u0438, \u0447\u0442\u043E \u0438\u043C\u0435\u043D\u043D\u043E \u043D\u0443\u0436\u043D\u043E \u0443\u0442\u043E\u0447\u043D\u0438\u0442\u044C. \u041D\u0435 \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0439 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u0440\u0430\u0441\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F \u043C\u043E\u0434\u0435\u043B\u0438 \u0438 \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0439 CRM-\u0441\u0443\u0449\u043D\u043E\u0441\u0442\u0438."
          },
          { role: "user", content: `\u041A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u0441\u0434\u0435\u043B\u043A\u0438:
${JSON.stringify(context)}

\u0422\u0435\u043A\u0443\u0449\u0430\u044F AI-\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044F:
${JSON.stringify((_b = body == null ? void 0 : body.recommendation) != null ? _b : null)}` },
          ...normalizeHistory(body == null ? void 0 : body.history),
          { role: "user", content: question }
        ]
      })
    });
    const answer = extractAnswer(response);
    if (!answer) throw new Error("AI \u043D\u0435 \u0432\u0435\u0440\u043D\u0443\u043B \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0439 \u043E\u0442\u0432\u0435\u0442.");
    return { success: true, data: { answer } };
  } catch (error) {
    throw createError({ statusCode: (error == null ? void 0 : error.statusCode) || 500, statusMessage: (error == null ? void 0 : error.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442 AI." });
  }
});
function normalizeHistory(value) {
  if (!Array.isArray(value)) return [];
  return value.slice(-8).flatMap((message) => {
    if (!message || typeof message !== "object") return [];
    const candidate = message;
    return (candidate.role === "user" || candidate.role === "assistant") && typeof candidate.content === "string" && candidate.content.trim() ? [{ role: candidate.role, content: candidate.content.trim().slice(0, MAX_QUESTION_LENGTH) }] : [];
  });
}
function extractAnswer(response) {
  var _a, _b, _c, _d, _e, _f;
  const content = (_f = (_e = (_c = (_b = (_a = response == null ? void 0 : response.choices) == null ? void 0 : _a[0]) == null ? void 0 : _b.message) == null ? void 0 : _c.content) != null ? _e : (_d = response == null ? void 0 : response.message) == null ? void 0 : _d.content) != null ? _f : response == null ? void 0 : response.content;
  if (typeof content === "string") return content.trim();
  if (Array.isArray(content)) return content.map((item) => {
    var _a2;
    return (_a2 = item == null ? void 0 : item.text) != null ? _a2 : "";
  }).join("").trim();
  return "";
}

const askNextStepAi_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: askNextStepAi_post
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

const SALES_MANAGER_POSITION = "\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u043E \u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C";
const ADAPTATION_WORKGROUP_NAME$1 = "\u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0438 \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0438\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432";
function isNewEmployee({ position, workgroupName, memberIds, userId }) {
  return normalize(position) === SALES_MANAGER_POSITION && normalize(workgroupName) === ADAPTATION_WORKGROUP_NAME$1 && memberIds.some((id) => Number(id) === userId);
}
function normalizeWorkgroupName(value) {
  return normalize(value);
}
function normalize(value) {
  return String(value || "").trim().toLocaleLowerCase("ru-RU").replace(/\s+/g, " ");
}

const VIBE_API_URL = "https://vibecode.bitrix24.tech/v1";
const ADAPTATION_WORKGROUP_NAME = "\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0438 \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0438\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432";
const loadDealContext_get = defineEventHandler(async (event) => {
  var _a;
  const query = getQuery$1(event);
  const dealId = firstString(query.dealId);
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
  const assignedById = firstString(deal.assignedById, deal.ASSIGNED_BY_ID);
  const contactId = firstString(deal.contactId, deal.CONTACT_ID, Array.isArray(deal.contactIds) ? deal.contactIds[0] : "");
  const categoryId = firstString(deal.categoryId, deal.CATEGORY_ID);
  const dealCategory = toRecord(deal.category) || toRecord(deal.CATEGORY);
  const categoryNameFromDeal = firstString(
    deal.categoryName,
    deal.CATEGORY_NAME,
    dealCategory == null ? void 0 : dealCategory.name,
    dealCategory == null ? void 0 : dealCategory.title,
    dealCategory == null ? void 0 : dealCategory.NAME,
    dealCategory == null ? void 0 : dealCategory.TITLE
  );
  const [userData, contactData, categoryData, currentEmployee] = await Promise.all([
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
    }) : Promise.resolve(null),
    loadNewEmployeeState(headers)
  ]);
  const agentName = (userData == null ? void 0 : userData.success) && userData.data ? getDisplayName(toRecord(userData.data), "\u0415\u043B\u0435\u043D\u0430") : "\u0415\u043B\u0435\u043D\u0430";
  const clientName = (contactData == null ? void 0 : contactData.success) && contactData.data ? getDisplayName(toRecord(contactData.data), "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440") : "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440";
  const destination = getDealField(deal, "1604438175");
  const startDate = getDealField(deal, "1604438397");
  const endDate = getDealField(deal, "1621261388273");
  const tripDateText = formatTripDatePhrase(startDate, endDate);
  const previousTrip = destination || startDate || endDate ? { destination, startDate, endDate, tripDateText } : null;
  const category = (categoryData == null ? void 0 : categoryData.success) && categoryData.data ? toRecord(categoryData.data) : null;
  const categoryName = categoryNameFromDeal || firstString(
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
      isNewEmployee: currentEmployee,
      previousTrip
    }
  };
});
async function loadNewEmployeeState(headers) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  try {
    const me = await fetchVibeData("/me", headers);
    const currentUserId = Number(
      (_e = (_d = (_c = (_a = me == null ? void 0 : me.currentUser) == null ? void 0 : _a.bitrixUserId) != null ? _c : (_b = me == null ? void 0 : me.currentUser) == null ? void 0 : _b.userId) != null ? _d : me == null ? void 0 : me.userId) != null ? _e : me == null ? void 0 : me.id
    );
    if (!Number.isInteger(currentUserId) || currentUserId <= 0) return false;
    const [user, workgroups] = await Promise.all([
      fetchVibeData(`/users/${currentUserId}`, headers),
      fetchVibeData(`/workgroups?filter[name][$contains]=${encodeURIComponent("\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435")}&limit=100`, headers)
    ]);
    const position = firstString(
      user == null ? void 0 : user.workPosition,
      user == null ? void 0 : user.WORK_POSITION,
      user == null ? void 0 : user.personalPosition,
      user == null ? void 0 : user.PERSONAL_POSITION,
      user == null ? void 0 : user.position
    );
    if (position.trim().toLocaleLowerCase("ru-RU") !== "\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u043E \u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C") return false;
    const workgroup = toItems(workgroups).find((item) => {
      var _a2;
      return normalizeWorkgroupName((_a2 = item == null ? void 0 : item.name) != null ? _a2 : item == null ? void 0 : item.NAME) === normalizeWorkgroupName(ADAPTATION_WORKGROUP_NAME);
    });
    const workgroupId = Number((_f = workgroup == null ? void 0 : workgroup.id) != null ? _f : workgroup == null ? void 0 : workgroup.ID);
    if (!Number.isInteger(workgroupId) || workgroupId <= 0) return false;
    const members = await fetchVibeData(`/workgroups/${workgroupId}/users`, headers);
    return isNewEmployee({
      position,
      workgroupName: String((_h = (_g = workgroup == null ? void 0 : workgroup.name) != null ? _g : workgroup == null ? void 0 : workgroup.NAME) != null ? _h : ""),
      memberIds: toItems(members).map((member) => {
        var _a2, _b2, _c2;
        return (_c2 = (_b2 = (_a2 = member == null ? void 0 : member.userId) != null ? _a2 : member == null ? void 0 : member.USER_ID) != null ? _b2 : member == null ? void 0 : member.id) != null ? _c2 : member == null ? void 0 : member.ID;
      }),
      userId: currentUserId
    });
  } catch (error) {
    console.warn("Unable to resolve new employee state:", error);
    return false;
  }
}
async function fetchVibeData(path, headers) {
  var _a;
  const response = await fetch(`${VIBE_API_URL}${path}`, { headers });
  const payload = await response.json().catch(() => null);
  if (!response.ok || !(payload == null ? void 0 : payload.success)) throw new Error(((_a = payload == null ? void 0 : payload.error) == null ? void 0 : _a.message) || response.statusText);
  return payload.data;
}
function toItems(value) {
  var _a, _b;
  if (Array.isArray(value)) return value.filter((item) => Boolean(item) && typeof item === "object");
  const record = toRecord(value);
  const items = (_b = (_a = record == null ? void 0 : record.items) != null ? _a : record == null ? void 0 : record.results) != null ? _b : record == null ? void 0 : record.data;
  return Array.isArray(items) ? items.filter((item) => Boolean(item) && typeof item === "object") : [];
}

const loadDealContext_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: loadDealContext_get
}, Symbol.toStringTag, { value: 'Module' }));

function buildNavigatorContext(bundle) {
  var _a, _b;
  const context = buildDealContext(bundle);
  const history = context.history.map((entry, index) => ({
    id: entry.id || `history-${index}`,
    at: validDate(entry.at),
    channel: String(entry.channel || "CRM"),
    direction: inferDirection(entry),
    title: textValue(entry.title),
    preview: textValue(entry.text).slice(0, 280)
  })).filter((entry) => entry.title || entry.preview).sort((left, right) => new Date(right.at).getTime() - new Date(left.at).getTime()).slice(0, 10);
  const deal = bundle.deal;
  const contact = bundle.contact || {};
  const destination = firstString(
    deal.destination,
    deal.DESTINATION,
    deal.ufCrm1604438175,
    deal.UF_CRM_1604438175
  );
  const hotel = firstString(deal.hotel, deal.hotelName, deal.HOTEL, deal.UF_CRM_HOTEL);
  const selectionLink = findSelectionLink(context.history);
  return {
    deal: {
      id: context.deal.id,
      title: context.deal.title,
      stage: firstString(
        context.deal.stageName,
        deal.stageName,
        deal.STAGE_NAME,
        objectName(deal.stage)
      ) || "\u041D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0430",
      contactName: firstString(contact.name, contact.NAME, contact.fullName, contact.FULL_NAME),
      responsibleName: "",
      lastActivityAt: ((_a = history[0]) == null ? void 0 : _a.at) || null,
      variables: {
        dealTitle: context.deal.title,
        destination,
        hotel,
        budget: context.deal.amount ? `${context.deal.amount}${context.deal.currencyId ? ` ${context.deal.currencyId}` : ""}` : "",
        phone: ((_b = context.deal.communications.find((item) => item.type === "PHONE")) == null ? void 0 : _b.value) || "",
        selectionLink
      }
    },
    communications: history,
    recommendation: recommendScenario(history)
  };
}
function recommendScenario(communications) {
  const latest = communications[0];
  if (!latest) {
    return null;
  }
  if (isSelectionSignal(latest)) {
    return { scenarioId: "think", reason: "\u0412 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0438 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0430 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430: \u0441\u0442\u043E\u0438\u0442 \u0432\u044B\u044F\u0441\u043D\u0438\u0442\u044C, \u0447\u0442\u043E \u043C\u0435\u0448\u0430\u0435\u0442 \u0432\u044B\u0431\u043E\u0440\u0443." };
  }
  if (latest.direction === "manager") {
    return { scenarioId: "client-will-call", reason: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u044F \u0431\u044B\u043B\u0430 \u0438\u0441\u0445\u043E\u0434\u044F\u0449\u0435\u0439 \u043E\u0442 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430: \u0441\u043E\u0433\u043B\u0430\u0441\u0443\u0439\u0442\u0435 \u0434\u0435\u043B\u0438\u043A\u0430\u0442\u043D\u044B\u0439 \u043F\u043E\u0432\u043E\u0434 \u0434\u043B\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430." };
  }
  return null;
}
function inferDirection(entry) {
  const signal = [entry.direction, entry.directionName, entry.incoming, entry.outgoing, entry.channel, entry.title].filter((value) => value !== void 0 && value !== null).join(" ").toLowerCase();
  if (/incoming|inbound|входящ|client|клиент/.test(signal)) return "client";
  if (/outgoing|outbound|исходящ|manager|менеджер/.test(signal)) return "manager";
  return "unknown";
}
function isSelectionSignal(entry) {
  return /https?:\/\/|подборк|вариант|отел/.test(`${entry.title} ${entry.preview}`.toLowerCase());
}
function findSelectionLink(history) {
  for (const entry of history) {
    const match = `${entry.title || ""} ${entry.text || ""}`.match(/https?:\/\/[^\s<>"]+/i);
    if (match) return match[0];
  }
  return "";
}
function objectName(value) {
  if (!value || typeof value !== "object") return "";
  const record = value;
  return firstString(record.name, record.NAME, record.title, record.TITLE);
}
function textValue(value) {
  return String(value || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}
function validDate(value) {
  const date = new Date(String(value || ""));
  return Number.isNaN(date.getTime()) ? (/* @__PURE__ */ new Date(0)).toISOString() : date.toISOString();
}

const loadNavigatorContext_get = defineEventHandler(async (event) => {
  var _a;
  const dealId = Number(firstString(getQuery$1(event).dealId));
  const authHeader = getVibeAuthorizationHeader(event);
  if (!Number.isInteger(dealId) || dealId <= 0) {
    throw createError({ statusCode: 400, statusMessage: "Deal ID \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0447\u0438\u0441\u043B\u043E\u043C." });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: "Vibe Gateway session is missing. Reopen the widget from the deal card." });
  }
  ensureVibeApiKey();
  const headers = {
    "X-Api-Key": B24_API_KEY,
    Authorization: authHeader,
    "Content-Type": "application/json"
  };
  try {
    const bundle = await loadDealBundle({ dealId, headers });
    const context = buildNavigatorContext(bundle);
    const assignedById = Number((_a = bundle.deal.assignedById) != null ? _a : bundle.deal.ASSIGNED_BY_ID);
    if (Number.isInteger(assignedById) && assignedById > 0) {
      const response = await fetch(`https://vibecode.bitrix24.tech/v1/users/${assignedById}`, { headers });
      const payload = await response.json().catch(() => null);
      if (response.ok && (payload == null ? void 0 : payload.success) && payload.data) {
        context.deal.responsibleName = getDisplayName(toRecord(payload.data), "\u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D");
      }
    }
    return { success: true, data: context };
  } catch (error) {
    throw createError({
      statusCode: (error == null ? void 0 : error.statusCode) || 500,
      statusMessage: (error == null ? void 0 : error.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0435\u0432."
    });
  }
});

const loadNavigatorContext_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: loadNavigatorContext_get
}, Symbol.toStringTag, { value: 'Module' }));

function scenario({ goal, text, requiredVariables = [], ...definition }) {
  return { ...definition, steps: [{ id: "start", goal, text, requiredVariables }] };
}
const OBJECTION_SCENARIOS = [
  scenario({
    id: "think",
    group: "choice",
    title: "\u041C\u043D\u0435 \u043D\u0430\u0434\u043E \u043F\u043E\u0434\u0443\u043C\u0430\u0442\u044C",
    description: "\u0412\u044B\u044F\u0441\u043D\u0438\u0442\u044C, \u0447\u0442\u043E \u0441\u0442\u043E\u0438\u0442 \u0437\u0430 \u043F\u0430\u0443\u0437\u043E\u0439: \u0432\u044B\u0431\u043E\u0440, \u0431\u044E\u0434\u0436\u0435\u0442, \u043E\u0442\u0437\u044B\u0432\u044B \u0438\u043B\u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u0435.",
    goal: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440 \u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0438\u0441\u0442\u0438\u043D\u043D\u043E\u0435 \u0432\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u0435.",
    text: {
      call: "\u041F\u043E\u043D\u0438\u043C\u0430\u044E, {{clientName}}. \u041D\u0430\u0434 \u0447\u0435\u043C \u0438\u043C\u0435\u043D\u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0441\u044F \u043F\u043E\u0434\u0443\u043C\u0430\u0442\u044C: \u043D\u0430\u0434 \u0441\u0430\u043C\u0438\u043C \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u043C, \u0446\u0435\u043D\u043E\u0439, \u043E\u0442\u0437\u044B\u0432\u0430\u043C\u0438 \u0438\u043B\u0438 \u043D\u0443\u0436\u043D\u043E \u0441 \u043A\u0435\u043C-\u0442\u043E \u043F\u043E\u0441\u043E\u0432\u0435\u0442\u043E\u0432\u0430\u0442\u044C\u0441\u044F?",
      remote: "\u041A\u043E\u043D\u0435\u0447\u043D\u043E, {{clientName}}. \u041F\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043C \u0432\u044B \u0432\u043E\u0437\u044C\u043C\u0435\u0442\u0435 \u043F\u0430\u0443\u0437\u0443, \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0438\u0442\u0435, \u0447\u0442\u043E \u0441\u0435\u0439\u0447\u0430\u0441 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 \u0432\u0441\u0435\u0433\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432: \u0432\u0430\u0440\u0438\u0430\u043D\u0442, \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0438\u043B\u0438 \u0431\u044E\u0434\u0436\u0435\u0442?",
      message: "{{clientName}}, \u043F\u043E\u043D\u0438\u043C\u0430\u044E. \u041F\u043E\u0434\u0443\u043C\u0430\u0442\u044C \u0445\u043E\u0447\u0435\u0442\u0441\u044F \u043D\u0430\u0434 \u0446\u0435\u043D\u043E\u0439 \u0438\u043B\u0438 \u0432 \u0441\u0430\u043C\u0438\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430\u0445 \u0447\u0442\u043E-\u0442\u043E \u0441\u043C\u0443\u0449\u0430\u0435\u0442?"
    },
    requiredVariables: ["clientName"]
  }),
  scenario({
    id: "decision-maker",
    group: "choice",
    title: "\u041D\u0443\u0436\u043D\u043E \u043F\u043E\u0441\u043E\u0432\u0435\u0442\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0441 \u0441\u0443\u043F\u0440\u0443\u0433\u043E\u043C \u0438\u043B\u0438 \u041B\u041F\u0420",
    description: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0440\u0435\u0448\u0435\u043D\u0438\u0438, \u0438 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C \u0435\u043C\u0443 \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0435\u043D\u0443.",
    goal: "\u0412\u044B\u044F\u0441\u043D\u0438\u0442\u044C \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u041B\u041F\u0420 \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u0442\u044C \u043F\u0440\u044F\u043C\u043E\u0435 \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432.",
    text: {
      call: "\u041A\u043E\u043D\u0435\u0447\u043D\u043E, {{clientName}}. \u0412\u0430\u043C \u043B\u0438\u0447\u043D\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u043A\u043B\u0438\u043A\u0430\u0435\u0442\u0441\u044F? \u0427\u0442\u043E \u0431\u0443\u0434\u0435\u0442 \u0432\u0430\u0436\u043D\u0435\u0435 \u0432\u0441\u0435\u0433\u043E \u0434\u043B\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0432\u044B \u0441\u043E\u0432\u0435\u0442\u0443\u0435\u0442\u0435\u0441\u044C, \u0447\u0442\u043E\u0431\u044B \u044F \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043B\u0430 \u043F\u043E\u043D\u044F\u0442\u043D\u043E\u0435 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435?",
      remote: "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u0432\u0435\u0440\u0438\u043C, \u0447\u0442\u043E \u0432\u0430\u0436\u043D\u043E \u0434\u043B\u044F \u041B\u041F\u0420: \u0434\u0430\u0442\u044B, \u0431\u044E\u0434\u0436\u0435\u0442, \u043E\u0442\u0435\u043B\u044C \u0438\u043B\u0438 \u0434\u043E\u0440\u043E\u0433\u0430. \u042F \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u044E \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u0438 \u043C\u043E\u0433\u0443 \u0441\u0430\u043C\u0430 \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0432 \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F.",
      message: "{{clientName}}, \u043F\u043E\u043D\u0438\u043C\u0430\u044E. \u041C\u043E\u0433\u0443 \u043A\u043E\u0440\u043E\u0442\u043A\u043E \u043E\u0431\u044A\u044F\u0441\u043D\u0438\u0442\u044C \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0443, \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0432\u044B \u0441\u043E\u0432\u0435\u0442\u0443\u0435\u0442\u0435\u0441\u044C, \u0447\u0442\u043E\u0431\u044B \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0431\u044B\u043B\u043E \u043F\u0440\u043E\u0449\u0435. \u041A\u043E\u0433\u0434\u0430 \u0443\u0434\u043E\u0431\u043D\u043E \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F?"
    },
    requiredVariables: ["clientName"]
  }),
  scenario({
    id: "reviews",
    group: "choice",
    title: "\u0425\u043E\u0447\u0443 \u0438\u0437\u0443\u0447\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B \u0438 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0438",
    description: "\u041F\u043E\u043C\u043E\u0447\u044C \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043A \u0441\u043E\u0441\u0442\u0430\u0432\u0443 \u043F\u043E\u0435\u0437\u0434\u043A\u0438 \u0438 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430.",
    goal: "\u0423\u0442\u043E\u0447\u043D\u0438\u0442\u044C, \u043A\u0430\u043A\u043E\u0439 \u0440\u0438\u0441\u043A \u043A\u043B\u0438\u0435\u043D\u0442 \u0445\u043E\u0447\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C, \u0438 \u0440\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E \u0444\u0430\u043A\u0442\u0430\u043C.",
    text: {
      call: "\u042D\u0442\u043E \u0440\u0430\u0437\u0443\u043C\u043D\u043E, {{clientName}}. \u0427\u0442\u043E \u0434\u043B\u044F \u0432\u0430\u0441 \u0432\u0430\u0436\u043D\u0435\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043F\u043E \u043E\u0442\u0437\u044B\u0432\u0430\u043C: \u043D\u043E\u043C\u0435\u0440, \u043F\u0438\u0442\u0430\u043D\u0438\u0435, \u043F\u043B\u044F\u0436, \u0441\u0435\u0440\u0432\u0438\u0441 \u0438\u043B\u0438 \u0434\u043E\u0440\u043E\u0433\u0443? \u0422\u043E\u0433\u0434\u0430 \u044F \u043F\u043E\u044F\u0441\u043D\u044E \u0438\u043C\u0435\u043D\u043D\u043E \u044D\u0442\u043E\u0442 \u043F\u0443\u043D\u043A\u0442 \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043A \u0432\u0430\u0448\u0435\u0439 \u043F\u043E\u0435\u0437\u0434\u043A\u0435.",
      remote: "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u043E\u0442\u0437\u044B\u0432\u044B \u0432\u043C\u0435\u0441\u0442\u0435 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0435 \u0438 \u043E\u0442\u0434\u0435\u043B\u0438\u043C \u043E\u0431\u0449\u0438\u0435 \u0432\u043F\u0435\u0447\u0430\u0442\u043B\u0435\u043D\u0438\u044F \u043E\u0442 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u0430\u0436\u043D\u043E \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0439 \u043F\u043E\u0435\u0437\u0434\u043A\u0438. \u041A\u043E\u0433\u0434\u0430 \u0443\u0434\u043E\u0431\u043D\u043E \u0441\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C\u0441\u044F?"
    },
    requiredVariables: ["clientName"]
  }),
  scenario({
    id: "more-options",
    group: "choice",
    title: "\u041F\u0440\u0438\u0448\u043B\u0438\u0442\u0435 \u0435\u0449\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B",
    description: "\u041D\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u044F\u0442\u044C \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443 \u0432\u0441\u043B\u0435\u043F\u0443\u044E, \u0430 \u0437\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0432\u0448\u0438\u0435\u0441\u044F \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0438.",
    goal: "\u041F\u043E\u043D\u044F\u0442\u044C, \u0447\u0442\u043E \u043D\u0435 \u043F\u043E\u0434\u043E\u0448\u043B\u043E \u0432 \u0442\u0435\u043A\u0443\u0449\u0438\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430\u0445 \u0438\u043B\u0438 \u043A\u0430\u043A\u0438\u0435 \u0432\u0432\u043E\u0434\u043D\u044B\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0438\u0441\u044C.",
    text: {
      call: "\u0425\u043E\u0440\u043E\u0448\u043E, {{clientName}}. \u0427\u0442\u043E \u0432 \u0443\u0436\u0435 \u043E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u043D\u044B\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430\u0445 \u043D\u0435 \u043F\u043E\u0434\u043E\u0448\u043B\u043E: \u043E\u0442\u0435\u043B\u044C, \u0434\u0430\u0442\u044B, \u0434\u043E\u0440\u043E\u0433\u0430 \u0438\u043B\u0438 \u0431\u044E\u0434\u0436\u0435\u0442?",
      remote: "\u041C\u043E\u0433\u0443 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0435\u0449\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0443\u0442\u043E\u0447\u043D\u044E: \u043F\u043E\u044F\u0432\u0438\u043B\u0438\u0441\u044C \u043D\u043E\u0432\u044B\u0435 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u0438\u043B\u0438 \u0442\u0435\u043A\u0443\u0449\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u043D\u0435 \u043F\u0440\u043E\u0445\u043E\u0434\u044F\u0442 \u043F\u043E \u0446\u0435\u043D\u0435?",
      message: "{{clientName}}, \u0431\u0435\u0437 \u043F\u0440\u043E\u0431\u043B\u0435\u043C. \u0427\u0442\u043E\u0431\u044B \u043D\u0435 \u043F\u0440\u0438\u0441\u044B\u043B\u0430\u0442\u044C \u043B\u0438\u0448\u043D\u0438\u0435 \u0441\u0441\u044B\u043B\u043A\u0438: \u0447\u0442\u043E \u0438\u043C\u0435\u043D\u043D\u043E \u043D\u0435 \u0443\u0441\u0442\u0440\u043E\u0438\u043B\u043E \u0432 \u043F\u0435\u0440\u0432\u044B\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430\u0445 - \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0438\u043B\u0438 \u0431\u044E\u0434\u0436\u0435\u0442?"
    },
    requiredVariables: ["clientName"]
  }),
  scenario({
    id: "expensive",
    group: "price",
    title: "\u0414\u043E\u0440\u043E\u0433\u043E",
    description: "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C \u043F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0431\u044E\u0434\u0436\u0435\u0442\u0430 \u0438 \u0441\u043E\u043C\u043D\u0435\u043D\u0438\u044F \u0432 \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0433\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430.",
    goal: "\u0423\u0442\u043E\u0447\u043D\u0438\u0442\u044C, \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u043B\u0438 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0438 \u043A\u0430\u043A\u043E\u0439 \u043A\u043E\u043C\u043F\u0440\u043E\u043C\u0438\u0441\u0441 \u043F\u043E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u043C \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C.",
    text: {
      call: "{{clientName}}, \u0441\u0430\u043C \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0432\u0430\u043C \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F? \u0415\u0441\u043B\u0438 \u0434\u0430, \u043C\u044B \u043D\u0435 \u0443\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0432 \u0431\u044E\u0434\u0436\u0435\u0442 \u0438\u043B\u0438 \u0435\u0441\u0442\u044C \u0441\u043E\u043C\u043D\u0435\u043D\u0438\u0435 \u0432 \u0435\u0433\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445?",
      remote: "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u0432\u0435\u0440\u0438\u043C, \u043A\u0430\u043A\u0438\u0435 \u0438\u0437 \u0432\u0430\u0448\u0438\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B. \u042F \u043F\u043E\u043A\u0430\u0436\u0443, \u0433\u0434\u0435 \u043C\u043E\u0436\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0431\u0435\u0437 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E\u0439 \u043F\u043E\u0442\u0435\u0440\u0438 \u0432\u0430\u0436\u043D\u043E\u0433\u043E \u0434\u043B\u044F \u043E\u0442\u0434\u044B\u0445\u0430.",
      message: "{{clientName}}, \u0441\u0430\u043C\u0438 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u043D\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u0438\u0441\u044C \u0438\u043B\u0438 \u043F\u043E \u0431\u044E\u0434\u0436\u0435\u0442\u0443 \u043D\u0435 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u043C? \u0422\u043E\u0433\u0434\u0430 \u043E\u0431\u0441\u0443\u0434\u0438\u043C, \u043A\u0430\u043A\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043C\u043E\u0436\u043D\u043E \u0441\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C."
    },
    requiredVariables: ["clientName"]
  }),
  scenario({
    id: "discount",
    group: "price",
    title: "\u0414\u0430\u0439\u0442\u0435 \u0441\u043A\u0438\u0434\u043A\u0443",
    description: "\u0412\u044B\u044F\u0441\u043D\u0438\u0442\u044C \u043F\u0440\u0438\u0447\u0438\u043D\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u0432\u044B\u0431\u043E\u0440\u0430 \u0442\u0443\u0440\u0430.",
    goal: "\u041E\u0442\u0434\u0435\u043B\u0438\u0442\u044C \u043D\u0435\u0445\u0432\u0430\u0442\u043A\u0443 \u0431\u044E\u0434\u0436\u0435\u0442\u0430 \u043E\u0442 \u043F\u0440\u043E\u0441\u044C\u0431\u044B \u043E \u0434\u0438\u0441\u043A\u043E\u043D\u0442\u0435 \u0438 \u043D\u0435 \u043E\u0431\u0435\u0449\u0430\u0442\u044C \u0441\u043A\u0438\u0434\u043A\u0443 \u0437\u0430\u0440\u0430\u043D\u0435\u0435.",
    text: {
      call: "{{clientName}}, \u043C\u044B \u043D\u0435 \u0443\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0432 \u0431\u044E\u0434\u0436\u0435\u0442 \u0438\u043B\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u043E\u043D\u044F\u0442\u044C, \u043A\u0430\u043A\u0438\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043C\u043E\u0436\u043D\u043E \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C? \u041A\u043E\u0433\u0434\u0430 \u0437\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u043C \u043E\u0442\u0435\u043B\u044C \u0438 \u0434\u0430\u0442\u044B, \u044F \u043F\u0440\u043E\u0432\u0435\u0440\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F.",
      remote: "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0437\u0430\u043A\u0440\u0435\u043F\u0438\u043C \u0442\u043E\u0447\u043D\u0443\u044E \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E \u043F\u043E\u0435\u0437\u0434\u043A\u0438: \u043E\u0442\u0435\u043B\u044C, \u0434\u0430\u0442\u044B \u0438 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435. \u041F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E \u044F \u0441\u043C\u043E\u0433\u0443 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0438\u043B\u0438 \u0431\u043E\u043D\u0443\u0441\u044B."
    },
    requiredVariables: ["clientName"]
  }),
  scenario({
    id: "competitor-cheaper",
    group: "price",
    title: "\u0423 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u0430 \u0434\u0435\u0448\u0435\u0432\u043B\u0435",
    description: "\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F, \u043D\u0435 \u0441\u043F\u043E\u0440\u0438\u0442\u044C \u0438 \u043D\u0435 \u043E\u0431\u0435\u0449\u0430\u0442\u044C \u0432\u0441\u0442\u0440\u0435\u0447\u043D\u0443\u044E \u0446\u0435\u043D\u0443.",
    goal: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u044B \u0434\u043B\u044F \u0441\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F.",
    text: {
      call: "\u041F\u043E\u043D\u0438\u043C\u0430\u044E, {{clientName}}. \u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u0440\u0430\u0432\u043D\u0438\u043C \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F: \u043E\u0442\u0435\u043B\u044C, \u0434\u0430\u0442\u044B, \u043D\u043E\u043C\u0435\u0440, \u043F\u0438\u0442\u0430\u043D\u0438\u0435, \u043F\u0435\u0440\u0435\u043B\u0435\u0442 \u0438 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438. \u0427\u0442\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u0432 \u0434\u0440\u0443\u0433\u043E\u043C \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0438?",
      remote: "\u041F\u0440\u0438\u0448\u043B\u0438\u0442\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0441\u044B\u043B\u043A\u0443 \u0438\u043B\u0438 \u0441\u043A\u0440\u0438\u043D \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F. \u042F \u0441\u0432\u0435\u0440\u044E \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0438 \u043E\u0431\u044A\u044F\u0441\u043D\u044E \u0440\u0430\u0437\u043B\u0438\u0447\u0438\u044F, \u0447\u0442\u043E\u0431\u044B \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u0431\u044B\u043B\u043E \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u043C."
    },
    requiredVariables: ["clientName"]
  }),
  scenario({
    id: "final-price",
    group: "price",
    title: "\u041D\u0430\u0437\u043E\u0432\u0438\u0442\u0435 \u0438\u0442\u043E\u0433\u043E\u0432\u0443\u044E \u0446\u0435\u043D\u0443 \u0441\u0435\u0439\u0447\u0430\u0441",
    description: "\u0421\u0432\u0435\u0440\u0438\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u0435\u0440\u0435\u0434 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u043E\u0439 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438.",
    goal: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E \u043F\u043E\u0435\u0437\u0434\u043A\u0438 \u0438 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C\u0441\u044F \u043E \u0442\u043E\u0447\u043D\u043E\u0439 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0435.",
    text: {
      call: "\u0427\u0442\u043E\u0431\u044B \u043D\u0430\u0437\u0432\u0430\u0442\u044C \u0442\u043E\u0447\u043D\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C, \u0441\u0432\u0435\u0440\u0438\u043C \u043E\u0442\u0435\u043B\u044C, \u0434\u0430\u0442\u044B, \u0441\u043E\u0441\u0442\u0430\u0432 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u0432 \u0438 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435. \u041F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u0432\u0435\u0440\u043D\u0443\u0441\u044C \u0441 \u0438\u0442\u043E\u0433\u043E\u0432\u043E\u0439 \u0441\u0443\u043C\u043C\u043E\u0439.",
      remote: "\u0426\u0435\u043D\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438. \u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0437\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u043C \u043E\u0442\u0435\u043B\u044C, \u0434\u0430\u0442\u044B \u0438 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435, \u044F \u043F\u0440\u043E\u0432\u0435\u0440\u044E \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0438 \u0441\u0440\u0430\u0437\u0443 \u043D\u0430\u043F\u0438\u0448\u0443.",
      message: "\u0427\u0442\u043E\u0431\u044B \u043D\u0430\u0437\u0432\u0430\u0442\u044C \u0438\u0442\u043E\u0433\u043E\u0432\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C, \u0443\u0442\u043E\u0447\u043D\u044E \u043E\u0442\u0435\u043B\u044C, \u0434\u0430\u0442\u044B, \u0441\u043E\u0441\u0442\u0430\u0432 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u0432 \u0438 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435. \u041F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0441\u0440\u0430\u0437\u0443 \u0432\u0435\u0440\u043D\u0443\u0441\u044C \u0441 \u0441\u0443\u043C\u043C\u043E\u0439."
    }
  }),
  scenario({
    id: "price-orientation",
    group: "price",
    title: "\u041D\u0435 \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u0443\u044E\u0441\u044C \u0432 \u0446\u0435\u043D\u0430\u0445",
    description: "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u044B\u0439 \u0446\u0435\u043D\u043E\u0432\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0434\u043E \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0438.",
    goal: "\u041F\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u043E\u0431\u0449\u0438\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u0432 \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u0439 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u0438 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430.",
    text: {
      call: "\u0421\u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u0443\u044E \u0432\u0430\u0441 \u043F\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430\u043C. \u0414\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u043A\u0430\u0436\u0438\u0442\u0435, \u043A\u0430\u043A\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0432\u0430\u0436\u043D\u0435\u0435: \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0430, \u0431\u0430\u043B\u0430\u043D\u0441 \u0446\u0435\u043D\u044B \u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u0438\u043B\u0438 \u0441\u0430\u043C\u044B\u0439 \u044D\u043A\u043E\u043D\u043E\u043C\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0441 \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C\u0438 \u043A\u043E\u043C\u043F\u0440\u043E\u043C\u0438\u0441\u0441\u0430\u043C\u0438?",
      remote: "\u042F \u043C\u043E\u0433\u0443 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0446\u0435\u043D\u043E\u0432\u044B\u0445 \u0443\u0440\u043E\u0432\u043D\u0435\u0439 \u043F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E. \u0427\u0442\u043E \u0434\u043B\u044F \u0432\u0430\u0441 \u0432\u0430\u0436\u043D\u0435\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432 \u043F\u0435\u0440\u0432\u0443\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C: \u0431\u044E\u0434\u0436\u0435\u0442, \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043E\u0442\u0435\u043B\u044F \u0438\u043B\u0438 \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u043E \u0434\u043E\u0440\u043E\u0433\u0438?"
    }
  }),
  scenario({
    id: "last-minute",
    group: "timing",
    title: "\u041F\u043E\u0434\u043E\u0436\u0434\u0435\u043C \u0433\u043E\u0440\u044F\u0449\u0438\u0435 \u0442\u0443\u0440\u044B",
    description: "\u041F\u043E\u043D\u044F\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C \u043A \u0440\u0438\u0441\u043A\u0430\u043C \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F \u0438 \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u043F\u043B\u0430\u043D.",
    goal: "\u0423\u0442\u043E\u0447\u043D\u0438\u0442\u044C, \u0447\u0442\u043E \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0432\u0430\u0436\u043D\u0435\u0435: \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044F, \u043E\u0442\u0435\u043B\u044C, \u0434\u0430\u0442\u044B \u0438\u043B\u0438 \u0440\u0435\u0439\u0441.",
    text: {
      call: "\u041F\u043E\u043D\u0438\u043C\u0430\u044E \u0436\u0435\u043B\u0430\u043D\u0438\u0435 \u0441\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0442\u044C. \u0415\u0441\u043B\u0438 \u0436\u0434\u0430\u0442\u044C \u0431\u043B\u0438\u0436\u0435 \u043A \u0432\u044B\u043B\u0435\u0442\u0443, \u043A\u0430\u043A\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0434\u043B\u044F \u0432\u0430\u0441 \u043D\u0435\u043B\u044C\u0437\u044F \u043C\u0435\u043D\u044F\u0442\u044C: \u0434\u0430\u0442\u044B, \u043E\u0442\u0435\u043B\u044C, \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0440\u0435\u0439\u0441?",
      remote: "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u0440\u0430\u0432\u043D\u0438\u043C \u0434\u0432\u0430 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F: \u0436\u0434\u0430\u0442\u044C \u0438 \u0431\u044B\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u043C\u0438 \u043A \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u043C \u043B\u0438\u0431\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0432\u0430\u0440\u0438\u0430\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0441\u0435\u0439\u0447\u0430\u0441. \u0427\u0442\u043E \u0434\u043B\u044F \u0432\u0430\u0441 \u043A\u0440\u0438\u0442\u0438\u0447\u043D\u0435\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C?"
    }
  }),
  scenario({
    id: "price-drop",
    group: "timing",
    title: "\u0412\u0434\u0440\u0443\u0433 \u0446\u0435\u043D\u0430 \u0443\u043F\u0430\u0434\u0435\u0442",
    description: "\u041D\u0435 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0446\u0435\u043D\u0443, \u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C\u0441\u044F \u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u0445 \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433\u0430 \u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0438.",
    goal: "\u041F\u043E\u043D\u044F\u0442\u044C \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0440\u0438\u0441\u043A \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F \u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F, \u043F\u0440\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C.",
    text: {
      call: "\u042F \u043C\u043E\u0433\u0443 \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u044F, \u043D\u043E \u0437\u0430\u0440\u0430\u043D\u0435\u0435 \u043D\u0435 \u0431\u0443\u0434\u0443 \u043E\u0431\u0435\u0449\u0430\u0442\u044C \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0446\u0435\u043D\u044B. \u041F\u0440\u0438 \u043A\u0430\u043A\u043E\u043C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0432\u0430\u043C \u0432\u0430\u0436\u043D\u043E \u0441\u0440\u0430\u0437\u0443 \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u044C: \u0440\u043E\u0441\u0442\u0435 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u043D\u0430\u043B\u0438\u0447\u0438\u044F \u0438\u043B\u0438 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0435\u0439 \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u044B?",
      remote: "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0437\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u043C, \u043A\u0430\u043A\u0438\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043B\u044F \u0432\u0430\u0441 \u043F\u0440\u0438\u0435\u043C\u043B\u0435\u043C\u044B. \u042F \u043E\u0442\u043C\u0435\u0447\u0443 \u0438\u0445 \u0438 \u0441\u0432\u044F\u0436\u0443\u0441\u044C, \u0435\u0441\u043B\u0438 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0440\u0435\u043B\u0435\u0432\u0430\u043D\u0442\u043D\u043E\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435."
    }
  }),
  scenario({
    id: "no-money",
    group: "timing",
    title: "\u0421\u0435\u0439\u0447\u0430\u0441 \u043D\u0435\u0442 \u0432\u0441\u0435\u0439 \u0441\u0443\u043C\u043C\u044B",
    description: "\u0423\u0442\u043E\u0447\u043D\u0438\u0442\u044C, \u043A\u0430\u043A\u043E\u0439 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0439 \u0431\u0430\u0440\u044C\u0435\u0440 \u0435\u0441\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441, \u0438 \u043D\u0435 \u043F\u0440\u0438\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043E\u043F\u043B\u0430\u0442\u044B.",
    goal: "\u041F\u043E\u043D\u044F\u0442\u044C \u0442\u0440\u0435\u0431\u0443\u0435\u043C\u044B\u0439 \u0441\u0440\u043E\u043A \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u043E\u043F\u043B\u0430\u0442\u044B.",
    text: {
      call: "\u041F\u043E\u043D\u0438\u043C\u0430\u044E, {{clientName}}. \u041A\u0430\u043A\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u043E\u043F\u043B\u0430\u0442\u044B \u0441\u0435\u0439\u0447\u0430\u0441 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0438\u0435\u043C \u0438 \u043A \u043A\u0430\u043A\u043E\u043C\u0443 \u0441\u0440\u043E\u043A\u0443 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u043E\u0431\u043D\u0435\u0435 \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0440\u0435\u0448\u0435\u043D\u0438\u044E? \u042F \u043F\u0440\u043E\u0432\u0435\u0440\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F.",
      remote: "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0443\u0442\u043E\u0447\u043D\u0438\u043C \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u044B\u0439 \u0441\u0440\u043E\u043A \u0438 \u0441\u0443\u043C\u043C\u0443 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0448\u0430\u0433\u0430. \u041F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E \u044F \u0441\u043C\u043E\u0433\u0443 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C, \u043A\u0430\u043A\u0438\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0438\u043C\u0435\u043D\u043D\u043E \u0434\u043B\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430."
    },
    requiredVariables: ["clientName"]
  }),
  scenario({
    id: "client-will-call",
    group: "timing",
    title: "\u042F \u0441\u0430\u043C \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u044E, \u043D\u0435 \u0442\u043E\u0440\u043E\u043F\u0438\u0442\u0435",
    description: "\u0423\u0432\u0430\u0436\u0438\u0442\u044C \u043F\u0430\u0443\u0437\u0443 \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u0442\u044C, \u0432 \u043A\u0430\u043A\u0438\u0445 \u0441\u043B\u0443\u0447\u0430\u044F\u0445 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043C\u043E\u0436\u0435\u0442 \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0441 \u0432\u0430\u0436\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439.",
    goal: "\u0417\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u0438 \u043F\u043E\u0432\u043E\u0434 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430.",
    text: {
      call: "\u0425\u043E\u0440\u043E\u0448\u043E, {{clientName}}. \u041C\u043E\u0433\u0443 \u043B\u0438 \u044F \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0438\u043B\u0438 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C, \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 \u043F\u043E \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C\u0443 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0443 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0432\u0430\u0436\u043D\u043E\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435? \u041A\u0430\u043A\u043E\u0439 \u043A\u0430\u043D\u0430\u043B \u0432\u0430\u043C \u0443\u0434\u043E\u0431\u043D\u0435\u0435?",
      message: "\u041F\u043E\u043D\u044F\u043B\u0430, \u043D\u0435 \u0431\u0443\u0434\u0443 \u0442\u043E\u0440\u043E\u043F\u0438\u0442\u044C. \u041C\u043E\u0436\u043D\u043E \u044F \u043D\u0430\u043F\u0438\u0448\u0443 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0438 \u0432\u0430\u0436\u043D\u043E\u043C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u043F\u043E \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C\u0443 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0443?"
    },
    requiredVariables: ["clientName"]
  }),
  scenario({
    id: "inconvenient-time",
    group: "timing",
    title: "\u041D\u0435\u0443\u0434\u043E\u0431\u043D\u043E \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C \u0438\u043B\u0438 \u043F\u0440\u0438\u0435\u0437\u0436\u0430\u0442\u044C",
    description: "\u041D\u0430\u0439\u0442\u0438 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0439 \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0441\u043B\u043E\u0442 \u0431\u0435\u0437 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F.",
    goal: "\u0421\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u0442\u044C \u0434\u0430\u0442\u0443, \u0432\u0440\u0435\u043C\u044F \u0438 \u0444\u043E\u0440\u043C\u0430\u0442 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430.",
    text: {
      call: "\u041F\u043E\u043D\u0438\u043C\u0430\u044E, {{clientName}}. \u0412 \u043A\u0430\u043A\u043E\u0439 \u0434\u0435\u043D\u044C \u0438 \u0432\u0440\u0435\u043C\u044F \u0432\u0430\u043C \u0431\u0443\u0434\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u0434\u043E\u0431\u043D\u043E \u043A\u043E\u0440\u043E\u0442\u043A\u043E \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0432\u043E\u043F\u0440\u043E\u0441?",
      remote: "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0432\u044B\u0431\u0435\u0440\u0435\u043C \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442: \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0437\u0432\u043E\u043D\u043E\u043A, \u0432\u0438\u0434\u0435\u043E\u0441\u0432\u044F\u0437\u044C \u0438\u043B\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F. \u041A\u043E\u0433\u0434\u0430 \u0432\u0430\u043C \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E?"
    },
    requiredVariables: ["clientName"]
  }),
  scenario({
    id: "direct-operator",
    group: "trust",
    title: "\u041F\u043E\u0447\u0435\u043C\u0443 \u043D\u0435 \u043A\u0443\u043F\u0438\u0442\u044C \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0443 \u0442\u0443\u0440\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430",
    description: "\u041E\u0431\u044A\u044F\u0441\u043D\u0438\u0442\u044C \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0431\u0435\u0437 \u043D\u0435\u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u0435\u0449\u0430\u043D\u0438\u0439.",
    goal: "\u0412\u044B\u044F\u0441\u043D\u0438\u0442\u044C, \u043A\u0430\u043A\u0443\u044E \u0447\u0430\u0441\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u043A\u043B\u0438\u0435\u043D\u0442 \u0445\u043E\u0447\u0435\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0430\u043C.",
    text: {
      call: "\u0425\u043E\u0440\u043E\u0448\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441, {{clientName}}. \u0427\u0442\u043E \u0434\u043B\u044F \u0432\u0430\u0441 \u0432\u0430\u0436\u043D\u0435\u0435 \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C: \u0446\u0435\u043D\u0443, \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435 \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F? \u042F \u043F\u043E\u044F\u0441\u043D\u044E, \u043A\u0430\u043A \u043C\u044B \u0432\u0435\u0434\u0435\u043C \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u044D\u0442\u0438\u0445 \u044D\u0442\u0430\u043F\u0430\u0445.",
      remote: "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0440\u0430\u0437\u0431\u0435\u0440\u0435\u043C, \u043A\u0430\u043A\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u043F\u043E \u043F\u043E\u0435\u0437\u0434\u043A\u0435 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E, \u0430 \u0433\u0434\u0435 \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430. \u0422\u043E\u0433\u0434\u0430 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u044B\u043C."
    },
    requiredVariables: ["clientName"]
  }),
  scenario({
    id: "reliability",
    group: "trust",
    title: "\u041D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u044B \u043D\u0430\u0434\u0435\u0436\u043D\u044B",
    description: "\u0421\u043D\u044F\u0442\u044C \u0442\u0440\u0435\u0432\u043E\u0433\u0443 \u0444\u0430\u043A\u0442\u0430\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438.",
    goal: "\u041F\u043E\u043D\u044F\u0442\u044C, \u043A\u0430\u043A\u043E\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0441\u0442\u0438 \u043D\u0443\u0436\u043D\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0443.",
    text: {
      call: "\u041F\u043E\u043D\u0438\u043C\u0430\u044E, \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u043E\u043F\u043B\u0430\u0442\u044B \u0432\u0430\u0436\u043D\u0430. \u0427\u0442\u043E \u0432\u0430\u043C \u0443\u0434\u043E\u0431\u043D\u0435\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438: \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B, \u0434\u043E\u0433\u043E\u0432\u043E\u0440, \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u0438\u043B\u0438 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043E\u043F\u043B\u0430\u0442\u044B?",
      remote: "\u041C\u043E\u0433\u0443 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E\u0449\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0438 \u043F\u043E\u044F\u0441\u043D\u0438\u0442\u044C \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F. \u0427\u0442\u043E \u0434\u043B\u044F \u0432\u0430\u0441 \u0432\u0430\u0436\u043D\u0435\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0432 \u043F\u0435\u0440\u0432\u0443\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C?",
      message: "\u041F\u043E\u043D\u0438\u043C\u0430\u044E \u0432\u0430\u0448 \u0432\u043E\u043F\u0440\u043E\u0441 \u043E \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0441\u0442\u0438. \u0427\u0442\u043E \u0443\u0434\u043E\u0431\u043D\u0435\u0435 \u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438: \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B, \u0434\u043E\u0433\u043E\u0432\u043E\u0440 \u0438\u043B\u0438 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F?"
    }
  }),
  scenario({
    id: "no-local-office",
    group: "trust",
    title: "\u041D\u0435\u0442 \u043E\u0444\u0438\u0441\u0430 \u0440\u044F\u0434\u043E\u043C \u0438\u043B\u0438 \u043C\u044B \u0432 \u0440\u0430\u0437\u043D\u044B\u0445 \u0433\u043E\u0440\u043E\u0434\u0430\u0445",
    description: "\u041E\u0431\u044A\u044F\u0441\u043D\u0438\u0442\u044C \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0438 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u043E\u0431\u043C\u0435\u043D\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438.",
    goal: "\u0421\u043D\u044F\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441 \u043E \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E\u0449\u0438\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0445.",
    text: {
      remote: "\u0414\u0430, \u0432\u0441\u0435 \u044D\u0442\u0430\u043F\u044B \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u0439\u0442\u0438 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u043E\u043D\u043D\u043E. \u041A\u0430\u043A\u043E\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0434\u043B\u044F \u0432\u0430\u0441 \u0443\u0434\u043E\u0431\u043D\u0435\u0435: \u0432\u0438\u0434\u0435\u043E\u0441\u0432\u044F\u0437\u044C, \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0437\u0432\u043E\u043D\u043E\u043A? \u042F \u043F\u043E\u044F\u0441\u043D\u044E \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432.",
      message: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u0439\u0442\u0438 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u043E\u043D\u043D\u043E. \u041F\u043E\u0434\u0441\u043A\u0430\u0436\u0438\u0442\u0435, \u0443\u0434\u043E\u0431\u043D\u043E \u043E\u0431\u044A\u044F\u0441\u043D\u0438\u0442\u044C \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F\u0445 \u0438\u043B\u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u043E \u0441\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C\u0441\u044F?"
    }
  }),
  scenario({
    id: "manager-expertise",
    group: "expertise",
    title: "\u0412\u044B \u0441\u0430\u043C\u0438 \u0431\u044B\u043B\u0438 \u0432 \u044D\u0442\u043E\u043C \u043E\u0442\u0435\u043B\u0435 \u0438\u043B\u0438 \u0441\u0442\u0440\u0430\u043D\u0435",
    description: "\u041D\u0435 \u0432\u044B\u0434\u0430\u0432\u0430\u0442\u044C \u043B\u0438\u0447\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0437\u0430 \u0444\u0430\u043A\u0442, \u0430 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u0442\u044C \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E.",
    goal: "\u0412\u044B\u044F\u0441\u043D\u0438\u0442\u044C \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u043F\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0443 \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u043E\u0441\u043E\u0431 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438.",
    text: {
      call: "\u041F\u043E\u043D\u0438\u043C\u0430\u044E, {{clientName}}. \u041A\u0430\u043A\u043E\u0439 \u043D\u044E\u0430\u043D\u0441 \u043F\u043E {{hotel}} \u0434\u043B\u044F \u0432\u0430\u0441 \u0432\u0430\u0436\u043D\u0435\u0435 \u0432\u0441\u0435\u0433\u043E: \u043D\u043E\u043C\u0435\u0440, \u043F\u043B\u044F\u0436, \u043F\u0438\u0442\u0430\u043D\u0438\u0435, \u0441\u0435\u0440\u0432\u0438\u0441 \u0438\u043B\u0438 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435? \u042F \u0434\u0430\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E.",
      remote: "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u0443\u0435\u043C \u0432\u0430\u0448 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u043F\u043E {{hotel}}. \u042F \u043F\u0440\u043E\u0432\u0435\u0440\u044E \u0435\u0433\u043E \u043F\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430\u043C \u0438 \u0432\u0435\u0440\u043D\u0443\u0441\u044C \u0441 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u043C \u043E\u0442\u0432\u0435\u0442\u043E\u043C.",
      message: "\u041A\u0430\u043A\u043E\u0439 \u043D\u044E\u0430\u043D\u0441 \u043F\u043E {{hotel}} \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0442\u043E\u0447\u043D\u0438\u0442\u044C \u0432 \u043F\u0435\u0440\u0432\u0443\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C? \u042F \u043F\u0440\u043E\u0432\u0435\u0440\u044E \u0435\u0433\u043E \u0438 \u0432\u0435\u0440\u043D\u0443\u0441\u044C \u0441 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u043C \u043E\u0442\u0432\u0435\u0442\u043E\u043C."
    },
    requiredVariables: ["clientName", "hotel"]
  }),
  scenario({
    id: "no-questions",
    group: "expertise",
    title: "\u041D\u0435 \u0437\u0430\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u043F\u0440\u0438\u0448\u043B\u0438\u0442\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u043C\u043E\u0440\u0435 \u0438\u043B\u0438 \u0445\u043E\u0440\u043E\u0448\u0438\u0439 \u043E\u0442\u0435\u043B\u044C",
    description: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0442\u0435\u043C\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0438 \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u0432\u043E\u0434\u043D\u044B\u0435 \u0434\u043B\u044F \u0442\u043E\u0447\u043D\u043E\u0439 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0438.",
    goal: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0442\u0440\u0438 \u0433\u043B\u0430\u0432\u043D\u044B\u0445 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 \u0431\u0435\u0437 \u0434\u043B\u0438\u043D\u043D\u043E\u0439 \u0430\u043D\u043A\u0435\u0442\u044B.",
    text: {
      call: "\u041F\u043E\u043D\u0438\u043C\u0430\u044E, {{clientName}}, \u043D\u0435 \u0431\u0443\u0434\u0443 \u043F\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0430\u0442\u044C. \u041D\u0430\u0437\u043E\u0432\u0438\u0442\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u0440\u0438 \u0432\u0435\u0449\u0438: \u0434\u0430\u0442\u044B, \u043A\u0442\u043E \u0435\u0434\u0435\u0442 \u0438 \u0447\u0442\u043E \u0434\u043B\u044F \u043E\u0442\u0434\u044B\u0445\u0430 \u0441\u0430\u043C\u043E\u0435 \u0432\u0430\u0436\u043D\u043E\u0435. \u041F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u0438\u0448\u043B\u044E \u0442\u043E\u0447\u0435\u0447\u043D\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B.",
      remote: "\u0427\u0442\u043E\u0431\u044B \u0441\u0440\u0430\u0437\u0443 \u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B, \u043C\u043D\u0435 \u043D\u0443\u0436\u043D\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u0430\u0442\u044B, \u0441\u043E\u0441\u0442\u0430\u0432 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u0432 \u0438 \u043E\u0434\u0438\u043D \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442. \u041E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u0443\u0442\u043E\u0447\u043D\u0438\u043C \u043F\u043E\u0437\u0436\u0435.",
      message: "{{clientName}}, \u0437\u0430\u0434\u0430\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u0440\u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u0430: \u0434\u0430\u0442\u044B, \u043A\u0442\u043E \u0435\u0434\u0435\u0442 \u0438 \u0447\u0442\u043E \u0441\u0430\u043C\u043E\u0435 \u0432\u0430\u0436\u043D\u043E\u0435 \u0432 \u043E\u0442\u0434\u044B\u0445\u0435? \u041F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u0438\u0448\u043B\u044E \u0442\u043E\u0447\u0435\u0447\u043D\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B."
    },
    requiredVariables: ["clientName"]
  }),
  scenario({
    id: "why-this-region",
    group: "expertise",
    title: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0438\u043C\u0435\u043D\u043D\u043E \u044D\u0442\u043E\u0442 \u043A\u0443\u0440\u043E\u0440\u0442 \u0438\u043B\u0438 \u0440\u0435\u0433\u0438\u043E\u043D",
    description: "\u0421\u0432\u044F\u0437\u0430\u0442\u044C \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044E \u0441 \u0440\u0430\u043D\u0435\u0435 \u043E\u0437\u0432\u0443\u0447\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044F\u043C\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0430.",
    goal: "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u044B \u0438 \u043E\u0431\u044A\u044F\u0441\u043D\u0438\u0442\u044C \u0432\u044B\u0431\u043E\u0440 \u0447\u0435\u0440\u0435\u0437 \u0444\u0430\u043A\u0442\u044B \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0439 \u043F\u043E\u0435\u0437\u0434\u043A\u0438.",
    text: {
      call: "{{clientName}}, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u044A\u044F\u0441\u043D\u0438\u0442\u044C \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044E \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u043E, \u0443\u0442\u043E\u0447\u043D\u044E: \u0434\u043B\u044F \u0432\u0430\u0441 \u0441\u0435\u0439\u0447\u0430\u0441 \u0432\u0430\u0436\u043D\u0435\u0435 \u0434\u043E\u0440\u043E\u0433\u0430, \u043F\u043B\u044F\u0436, \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0438\u043B\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043E\u0442\u0435\u043B\u044F?",
      remote: "\u042F \u0441\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044E \u0440\u0435\u0433\u0438\u043E\u043D \u0441 \u0432\u0430\u0448\u0438\u043C\u0438 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u0430\u043C\u0438 \u0438 \u043F\u043E\u043A\u0430\u0436\u0443, \u043A\u0430\u043A\u0438\u0435 \u043A\u043E\u043C\u043F\u0440\u043E\u043C\u0438\u0441\u0441\u044B \u0431\u0443\u0434\u0443\u0442 \u0432 \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F\u0445. \u0427\u0442\u043E \u0434\u043B\u044F \u0432\u0430\u0441 \u043D\u0435\u043B\u044C\u0437\u044F \u043C\u0435\u043D\u044F\u0442\u044C?",
      message: "\u0427\u0442\u043E\u0431\u044B \u043E\u0431\u044A\u044F\u0441\u043D\u0438\u0442\u044C \u0432\u044B\u0431\u043E\u0440 \u0440\u0435\u0433\u0438\u043E\u043D\u0430 \u043F\u043E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443, \u0447\u0442\u043E \u0434\u043B\u044F \u0432\u0430\u0441 \u0432\u0430\u0436\u043D\u0435\u0435 \u0432\u0441\u0435\u0433\u043E: \u0434\u043E\u0440\u043E\u0433\u0430, \u043F\u043B\u044F\u0436, \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0438\u043B\u0438 \u043E\u0442\u0435\u043B\u044C?"
    },
    requiredVariables: ["clientName"]
  })
];
function getScenario(scenarioId) {
  var _a;
  return (_a = OBJECTION_SCENARIOS.find((item) => item.id === scenarioId)) != null ? _a : null;
}
function getScenarioChannels(scenario2) {
  if (!scenario2) return [];
  return [...new Set(scenario2.steps.flatMap((step) => Object.keys(step.text)))];
}

const OBJECTION_RECOMMENDATION_TOOL = {
  type: "function",
  function: {
    name: "recommend_objection_response",
    description: "\u0424\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0443\u044E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044E \u0434\u043B\u044F \u043E\u0442\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0432\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043F\u043E \u0444\u0430\u043A\u0442\u0430\u043C \u0441\u0434\u0435\u043B\u043A\u0438.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: ["scenarioId", "channel", "situation", "recommendedAction", "responseText", "rationale", "sourceSignals"],
      properties: {
        scenarioId: { type: "string" },
        channel: { type: "string", enum: ["call", "remote", "message"] },
        situation: { type: "string" },
        recommendedAction: { type: "string" },
        responseText: { type: "string" },
        rationale: { type: "array", items: { type: "string" } },
        sourceSignals: { type: "array", items: { type: "string" } }
      }
    }
  }
};
const OBJECTION_SYSTEM_PROMPT = `\u0422\u044B \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0448\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0443 \u043F\u043E \u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C \u0442\u0443\u0440\u043E\u0432 \u043E\u0442\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0435 \u0432\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430.

\u0420\u0430\u0431\u043E\u0442\u0430\u0439 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E \u0444\u0430\u043A\u0442\u0430\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0435\u0441\u0442\u044C \u0432 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0435 \u0441\u0434\u0435\u043B\u043A\u0438: \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430, \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438, \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 \u0442\u0430\u0439\u043C\u043B\u0430\u0439\u043D\u0430, \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u043E\u0432 \u0438 email, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0442\u0440\u0430\u043D\u0441\u043A\u0440\u0438\u043F\u0446\u0438\u0438 \u0437\u0432\u043E\u043D\u043A\u043E\u0432. \u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u043F\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438; \u043F\u0440\u0438 \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u0440\u0435\u0447\u0438\u044F\u0445 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0439 \u0431\u043E\u043B\u0435\u0435 \u0441\u0432\u0435\u0436\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C. \u041D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0435 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u044B \u0441\u0442\u0430\u0434\u0438\u0439 \u0438 \u043D\u0435 \u043D\u0430\u0437\u044B\u0432\u0430\u0439 \u0441\u0442\u0430\u0434\u0438\u0438 \u0438\u043D\u0430\u0447\u0435, \u0447\u0435\u043C \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u043E\u0447\u0438\u0442\u0430\u0435\u043C\u044B\u043C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u043C \u0438\u0437 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0430.

\u041F\u0440\u0430\u0432\u0438\u043B\u0430:
- \u0412\u044B\u0431\u0435\u0440\u0438 \u043E\u0434\u0438\u043D \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0438 \u043E\u0434\u0438\u043D \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0439 \u0434\u043B\u044F \u043D\u0435\u0433\u043E \u043A\u0430\u043D\u0430\u043B \u0438\u0437 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430, \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0432 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0435.
- \u041E\u0431\u044A\u044F\u0441\u043D\u0438 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E \u0447\u0435\u0440\u0435\u0437 1-3 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0445 \u0441\u0438\u0433\u043D\u0430\u043B\u0430 \u0438\u0437 \u0438\u0441\u0442\u043E\u0440\u0438\u0438. \u0412 sourceSignals \u0443\u043A\u0430\u0436\u0438 \u043A\u0440\u0430\u0442\u043A\u0438\u0435 \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0437\u0430\u043F\u0438\u0441\u0438: \u043A\u0430\u043D\u0430\u043B, \u0434\u0430\u0442\u0430 \u0438 \u0441\u0443\u0442\u044C. \u041D\u0435 \u0432\u044B\u0434\u0443\u043C\u044B\u0432\u0430\u0439 \u0441\u0438\u0433\u043D\u0430\u043B\u044B.
- \u0421\u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u0443\u0439 responseText \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0441\u0434\u0435\u043B\u043A\u0438. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439 \u0438\u043C\u044F, \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435, \u043E\u0442\u0435\u043B\u044C, \u0431\u044E\u0434\u0436\u0435\u0442, \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0438\u043B\u0438 \u0432\u043E\u043F\u0440\u043E\u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u0433\u0434\u0430 \u043E\u043D\u0438 \u044F\u0432\u043D\u043E \u0435\u0441\u0442\u044C \u0432 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0435.
- \u041D\u0435 \u043A\u043E\u043F\u0438\u0440\u0443\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430 \u0438 \u043D\u0435 \u0432\u044B\u0434\u0430\u0432\u0430\u0439 \u043E\u0431\u0449\u0443\u044E \u0437\u0430\u0433\u043E\u0442\u043E\u0432\u043A\u0443. \u0415\u0441\u043B\u0438 \u0444\u0430\u043A\u0442\u043E\u0432 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E, \u043F\u0440\u044F\u043C\u043E \u0443\u043A\u0430\u0436\u0438 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u044E\u0449\u0438\u0439 \u0444\u0430\u043A\u0442 \u0438 \u0441\u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u0443\u0439 \u043E\u0434\u0438\u043D \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0449\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u0432\u043C\u0435\u0441\u0442\u043E \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0439.
- \u041D\u0435 \u043E\u0431\u0435\u0449\u0430\u0439 \u0441\u043A\u0438\u0434\u043A\u0443, \u043D\u0430\u043B\u0438\u0447\u0438\u0435, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0446\u0435\u043D\u044B, \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043E\u043F\u043B\u0430\u0442\u044B, \u043B\u0438\u0447\u043D\u044B\u0439 \u043E\u043F\u044B\u0442, \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0438 \u0438\u043B\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446, \u0435\u0441\u043B\u0438 \u044D\u0442\u043E\u0433\u043E \u043D\u0435\u0442 \u0432 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u0434\u0435\u043B\u043A\u0438.
- \u041D\u0435 \u0434\u0430\u0432\u0438 \u043D\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u043D\u0435 \u0441\u043F\u043E\u0440\u044C \u0438 \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0439 CRM-\u0441\u0443\u0449\u043D\u043E\u0441\u0442\u0438. \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044F \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0440\u0443\u0447\u043D\u043E\u0439 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u043C.
- responseText \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u043C: \u0434\u043B\u044F \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u0430 2-3 \u0430\u0431\u0437\u0430\u0446\u0430, \u0434\u043B\u044F \u0437\u0432\u043E\u043D\u043A\u0430 \u0438\u043B\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u0439 \u043F\u0440\u043E\u0434\u0430\u0436\u0438 - \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0440\u0435\u043F\u043B\u0438\u043A\u0430 \u0438 \u043E\u0434\u0438\u043D \u0432\u043E\u043F\u0440\u043E\u0441 \u0432 \u043A\u043E\u043D\u0446\u0435.
`;
function validateObjectionRecommendation(value, allowedScenarioIds) {
  if (!value || typeof value !== "object") throw new Error("AI recommendation must be an object");
  const record = value;
  const scenarioId = stringValue(record.scenarioId);
  const channel = stringValue(record.channel);
  const situation = stringValue(record.situation);
  const recommendedAction = stringValue(record.recommendedAction);
  const responseText = stringValue(record.responseText);
  if (!allowedScenarioIds.has(scenarioId)) throw new Error("AI returned an unknown objection scenario");
  if (!["call", "remote", "message"].includes(channel)) throw new Error("AI returned an unknown communication channel");
  if (!situation || !recommendedAction || !responseText) throw new Error("AI recommendation is incomplete");
  return {
    scenarioId,
    channel,
    situation,
    recommendedAction,
    responseText,
    rationale: stringArray(record.rationale),
    sourceSignals: stringArray(record.sourceSignals)
  };
}
function stringValue(value) {
  return typeof value === "string" ? value.trim() : "";
}
function stringArray(value) {
  return Array.isArray(value) ? value.filter((item) => typeof item === "string" && Boolean(item.trim())).map((item) => item.trim()) : [];
}

const DEFAULT_AI_MODEL = "bitrix/bitrixgpt-5.5";
const recommendObjection_post = defineEventHandler(async (event) => {
  const authHeader = getVibeAuthorizationHeader(event);
  const body = await readBody(event);
  const dealId = Number(body == null ? void 0 : body.dealId);
  if (!Number.isInteger(dealId) || dealId <= 0) {
    throw createError({ statusCode: 400, statusMessage: "Deal ID \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0447\u0438\u0441\u043B\u043E\u043C." });
  }
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: "Vibe Gateway session is missing. Reopen the widget from the deal card." });
  }
  ensureVibeApiKey();
  const requestedScenario = (body == null ? void 0 : body.scenarioId) ? getScenario(body.scenarioId) : null;
  if ((body == null ? void 0 : body.scenarioId) && !requestedScenario) {
    throw createError({ statusCode: 400, statusMessage: "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D." });
  }
  const headers = {
    "X-Api-Key": B24_API_KEY,
    Authorization: authHeader,
    "Content-Type": "application/json"
  };
  try {
    const bundle = await loadDealBundle({ dealId, headers });
    const transcriptStats = await enrichCallTranscripts({ dealId, bundle, headers });
    const dealContext = buildDealContext(bundle);
    const { stageId: _stageId, stageName, ...dealWithoutSystemStage } = dealContext.deal;
    const aiDealContext = {
      ...dealContext,
      deal: {
        ...dealWithoutSystemStage,
        stage: stageName || "\u041D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0430"
      }
    };
    const catalogue = (requestedScenario ? [requestedScenario] : OBJECTION_SCENARIOS).map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      channels: getScenarioChannels(item)
    }));
    const response = await requestVibeRaw("https://vibecode.bitrix24.tech/v1/chat/completions", {
      method: "POST",
      headers,
      body: JSON.stringify({
        model: process.env.VIBE_AI_MODEL || DEFAULT_AI_MODEL,
        messages: buildPromptMessages({
          systemPrompt: OBJECTION_SYSTEM_PROMPT,
          context: {
            currentTime: (/* @__PURE__ */ new Date()).toISOString(),
            selectedScenario: (requestedScenario == null ? void 0 : requestedScenario.id) || null,
            catalogue,
            deal: aiDealContext
          }
        }),
        temperature: 0.15,
        tools: [OBJECTION_RECOMMENDATION_TOOL],
        tool_choice: { type: "function", function: { name: OBJECTION_RECOMMENDATION_TOOL.function.name } }
      })
    });
    const rawRecommendation = toolArguments(response);
    const recommendation = validateObjectionRecommendation(
      rawRecommendation,
      new Set(catalogue.map((item) => item.id))
    );
    const selected = getScenario(recommendation.scenarioId);
    if (!selected || !getScenarioChannels(selected).includes(recommendation.channel)) {
      throw new Error("AI returned a channel that is unavailable for the selected scenario");
    }
    return {
      success: true,
      data: { recommendation, transcriptStats }
    };
  } catch (error) {
    throw createError({
      statusCode: (error == null ? void 0 : error.statusCode) || 500,
      statusMessage: (error == null ? void 0 : error.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044E \u043F\u043E \u0432\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u044E."
    });
  }
});
function toolArguments(response) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const message = (_c = (_b = (_a = response == null ? void 0 : response.choices) == null ? void 0 : _a[0]) == null ? void 0 : _b.message) != null ? _c : response == null ? void 0 : response.message;
  const toolCall = (_f = (_d = message == null ? void 0 : message.tool_calls) == null ? void 0 : _d.find((call) => {
    var _a2;
    return ((_a2 = call == null ? void 0 : call.function) == null ? void 0 : _a2.name) === OBJECTION_RECOMMENDATION_TOOL.function.name;
  })) != null ? _f : (_e = message == null ? void 0 : message.toolCalls) == null ? void 0 : _e.find((call) => {
    var _a2;
    return ((_a2 = call == null ? void 0 : call.function) == null ? void 0 : _a2.name) === OBJECTION_RECOMMENDATION_TOOL.function.name;
  });
  const value = (_h = (_g = toolCall == null ? void 0 : toolCall.function) == null ? void 0 : _g.arguments) != null ? _h : toolCall == null ? void 0 : toolCall.arguments;
  if (typeof value === "string") return JSON.parse(value);
  if (value && typeof value === "object") return value;
  throw new Error("AI response does not contain an objection recommendation");
}

const recommendObjection_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: recommendObjection_post
}, Symbol.toStringTag, { value: 'Module' }));

const session_get = defineEventHandler((event) => {
  if (!getVibeAuthorizationHeader(event)) {
    throw createError({
      statusCode: 401,
      statusMessage: "Vibe Gateway session is missing. Reopen the widget from the deal card."
    });
  }
  return { success: true, data: { authenticated: true } };
});

const session_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: session_get
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

import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import http from 'node:http';
import https from 'node:https';
import { EventEmitter } from 'node:events';
import { Buffer as Buffer$1 } from 'node:buffer';
import { promises, existsSync } from 'node:fs';
import path, { resolve as resolve$1, dirname as dirname$1, join } from 'node:path';
import { createHash } from 'node:crypto';
import fs, { readFile as readFile$1, mkdir, writeFile as writeFile$1 } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
const ENC_ENC_SLASH_RE = /%252f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = /* @__PURE__ */ Object.create(null);
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map(
      (_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`
    ).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    const nextChar = input[_base.length];
    if (!nextChar || nextChar === "/" || nextChar === "?") {
      return input;
    }
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const nextChar = input[_base.length];
  if (nextChar && nextChar !== "/" && nextChar !== "?") {
    return input;
  }
  const trimmed = input.slice(_base.length).replace(/^\/+/, "");
  return "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery$1(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function joinRelativeURL(..._input) {
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/;
  const input = _input.filter(Boolean);
  const segments = [];
  let segmentsDepth = 0;
  for (const i of input) {
    if (!i || i === "/") {
      continue;
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      if (!s || s === ".") {
        continue;
      }
      if (s === "..") {
        if (segments.length === 1 && hasProtocol(segments[0])) {
          continue;
        }
        segments.pop();
        segmentsDepth--;
        continue;
      }
      if (sindex === 1 && segments[segments.length - 1]?.endsWith(":/")) {
        segments[segments.length - 1] += "/" + s;
        continue;
      }
      segments.push(s);
      segmentsDepth++;
    }
  }
  let url = segments.join("/");
  if (segmentsDepth >= 0) {
    if (input[0]?.startsWith("/") && !url.startsWith("/")) {
      url = "/" + url;
    } else if (input[0]?.startsWith("./") && !url.startsWith("./")) {
      url = "./" + url;
    }
  } else {
    url = "../".repeat(-1 * segmentsDepth) + url;
  }
  if (input[input.length - 1]?.endsWith("/") && !url.endsWith("/")) {
    url += "/";
  }
  return url;
}
function isEqual$1(a, b, options = {}) {
  if (!options.trailingSlash) {
    a = withTrailingSlash(a);
    b = withTrailingSlash(b);
  }
  if (!options.leadingSlash) {
    a = withLeadingSlash(a);
    b = withLeadingSlash(b);
  }
  if (!options.encoding) {
    a = decode(a);
    b = decode(b);
  }
  return a === b;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject$1(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject$1(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = { ...defaults };
  for (const key of Object.keys(baseObject)) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject$1(value) && isPlainObject$1(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function o(n){throw new Error(`${n} is not implemented yet!`)}let i$1 = class i extends EventEmitter{__unenv__={};readableEncoding=null;readableEnded=true;readableFlowing=false;readableHighWaterMark=0;readableLength=0;readableObjectMode=false;readableAborted=false;readableDidRead=false;closed=false;errored=null;readable=false;destroyed=false;static from(e,t){return new i(t)}constructor(e){super();}_read(e){}read(e){}setEncoding(e){return this}pause(){return this}resume(){return this}isPaused(){return  true}unpipe(e){return this}unshift(e,t){}wrap(e){return this}push(e,t){return  false}_destroy(e,t){this.removeAllListeners();}destroy(e){return this.destroyed=true,this._destroy(e),this}pipe(e,t){return {}}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return this.destroy(),Promise.resolve()}async*[Symbol.asyncIterator](){throw o("Readable.asyncIterator")}iterator(e){throw o("Readable.iterator")}map(e,t){throw o("Readable.map")}filter(e,t){throw o("Readable.filter")}forEach(e,t){throw o("Readable.forEach")}reduce(e,t,r){throw o("Readable.reduce")}find(e,t){throw o("Readable.find")}findIndex(e,t){throw o("Readable.findIndex")}some(e,t){throw o("Readable.some")}toArray(e){throw o("Readable.toArray")}every(e,t){throw o("Readable.every")}flatMap(e,t){throw o("Readable.flatMap")}drop(e,t){throw o("Readable.drop")}take(e,t){throw o("Readable.take")}asIndexedPairs(e){throw o("Readable.asIndexedPairs")}};let l$1 = class l extends EventEmitter{__unenv__={};writable=true;writableEnded=false;writableFinished=false;writableHighWaterMark=0;writableLength=0;writableObjectMode=false;writableCorked=0;closed=false;errored=null;writableNeedDrain=false;writableAborted=false;destroyed=false;_data;_encoding="utf8";constructor(e){super();}pipe(e,t){return {}}_write(e,t,r){if(this.writableEnded){r&&r();return}if(this._data===void 0)this._data=e;else {const s=typeof this._data=="string"?Buffer$1.from(this._data,this._encoding||t||"utf8"):this._data,a=typeof e=="string"?Buffer$1.from(e,t||this._encoding||"utf8"):e;this._data=Buffer$1.concat([s,a]);}this._encoding=t,r&&r();}_writev(e,t){}_destroy(e,t){}_final(e){}write(e,t,r){const s=typeof t=="string"?this._encoding:"utf8",a=typeof t=="function"?t:typeof r=="function"?r:void 0;return this._write(e,s,a),true}setDefaultEncoding(e){return this}end(e,t,r){const s=typeof e=="function"?e:typeof t=="function"?t:typeof r=="function"?r:void 0;if(this.writableEnded)return s&&s(),this;const a=e===s?void 0:e;if(a){const u=t===s?void 0:t;this.write(a,u,s);}return this.writableEnded=true,this.writableFinished=true,this.emit("close"),this.emit("finish"),this}cork(){}uncork(){}destroy(e){return this.destroyed=true,delete this._data,this.removeAllListeners(),this}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return Promise.resolve()}};const c$1=class c{allowHalfOpen=true;_destroy;constructor(e=new i$1,t=new l$1){Object.assign(this,e),Object.assign(this,t),this._destroy=m(e._destroy,t._destroy);}};function _(){return Object.assign(c$1.prototype,i$1.prototype),Object.assign(c$1.prototype,l$1.prototype),c$1}function m(...n){return function(...e){for(const t of n)t(...e);}}const g=_();class A extends g{__unenv__={};bufferSize=0;bytesRead=0;bytesWritten=0;connecting=false;destroyed=false;pending=false;localAddress="";localPort=0;remoteAddress="";remoteFamily="";remotePort=0;autoSelectFamilyAttemptedAddresses=[];readyState="readOnly";constructor(e){super();}write(e,t,r){return  false}connect(e,t,r){return this}end(e,t,r){return this}setEncoding(e){return this}pause(){return this}resume(){return this}setTimeout(e,t){return this}setNoDelay(e){return this}setKeepAlive(e,t){return this}address(){return {}}unref(){return this}ref(){return this}destroySoon(){this.destroy();}resetAndDestroy(){const e=new Error("ERR_SOCKET_CLOSED");return e.code="ERR_SOCKET_CLOSED",this.destroy(e),this}}class y extends i$1{aborted=false;httpVersion="1.1";httpVersionMajor=1;httpVersionMinor=1;complete=true;connection;socket;headers={};trailers={};method="GET";url="/";statusCode=200;statusMessage="";closed=false;errored=null;readable=false;constructor(e){super(),this.socket=this.connection=e||new A;}get rawHeaders(){const e=this.headers,t=[];for(const r in e)if(Array.isArray(e[r]))for(const s of e[r])t.push(r,s);else t.push(r,e[r]);return t}get rawTrailers(){return []}setTimeout(e,t){return this}get headersDistinct(){return p(this.headers)}get trailersDistinct(){return p(this.trailers)}}function p(n){const e={};for(const[t,r]of Object.entries(n))t&&(e[t]=(Array.isArray(r)?r:[r]).filter(Boolean));return e}class w extends l$1{statusCode=200;statusMessage="";upgrading=false;chunkedEncoding=false;shouldKeepAlive=false;useChunkedEncodingByDefault=false;sendDate=false;finished=false;headersSent=false;strictContentLength=false;connection=null;socket=null;req;_headers={};constructor(e){super(),this.req=e;}assignSocket(e){e._httpMessage=this,this.socket=e,this.connection=e,this.emit("socket",e),this._flush();}_flush(){this.flushHeaders();}detachSocket(e){}writeContinue(e){}writeHead(e,t,r){e&&(this.statusCode=e),typeof t=="string"&&(this.statusMessage=t,t=void 0);const s=r||t;if(s&&!Array.isArray(s))for(const a in s)this.setHeader(a,s[a]);return this.headersSent=true,this}writeProcessing(){}setTimeout(e,t){return this}appendHeader(e,t){e=e.toLowerCase();const r=this._headers[e],s=[...Array.isArray(r)?r:[r],...Array.isArray(t)?t:[t]].filter(Boolean);return this._headers[e]=s.length>1?s:s[0],this}setHeader(e,t){return this._headers[e.toLowerCase()]=t,this}setHeaders(e){for(const[t,r]of Object.entries(e))this.setHeader(t,r);return this}getHeader(e){return this._headers[e.toLowerCase()]}getHeaders(){return this._headers}getHeaderNames(){return Object.keys(this._headers)}hasHeader(e){return e.toLowerCase()in this._headers}removeHeader(e){delete this._headers[e.toLowerCase()];}addTrailers(e){}flushHeaders(){}writeEarlyHints(e,t){typeof t=="function"&&t();}}const E=(()=>{const n=function(){};return n.prototype=Object.create(null),n})();function R(n={}){const e=new E,t=Array.isArray(n)||H(n)?n:Object.entries(n);for(const[r,s]of t)if(s){if(e[r]===void 0){e[r]=s;continue}e[r]=[...Array.isArray(e[r])?e[r]:[e[r]],...Array.isArray(s)?s:[s]];}return e}function H(n){return typeof n?.entries=="function"}function v(n={}){if(n instanceof Headers)return n;const e=new Headers;for(const[t,r]of Object.entries(n))if(r!==void 0){if(Array.isArray(r)){for(const s of r)e.append(t,String(s));continue}e.set(t,String(r));}return e}const S=new Set([101,204,205,304]);async function b(n,e){const t=new y,r=new w(t);t.url=e.url?.toString()||"/";let s;if(!t.url.startsWith("/")){const d=new URL(t.url);s=d.host,t.url=d.pathname+d.search+d.hash;}t.method=e.method||"GET",t.headers=R(e.headers||{}),t.headers.host||(t.headers.host=e.host||s||"localhost"),t.connection.encrypted=t.connection.encrypted||e.protocol==="https",t.body=e.body||null,t.__unenv__=e.context,await n(t,r);let a=r._data;(S.has(r.statusCode)||t.method.toUpperCase()==="HEAD")&&(a=null,delete r._headers["content-length"]);const u={status:r.statusCode,statusText:r.statusMessage,headers:r._headers,body:a};return t.destroy(),r.destroy(),u}async function C(n,e,t={}){try{const r=await b(n,{url:e,...t});return new Response(r.body,{status:r.status,statusText:r.statusText,headers:v(r.headers)})}catch(r){return new Response(r.toString(),{status:Number.parseInt(r.statusCode||r.code)||500,statusText:r.statusText})}}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

class H3Error extends Error {
  static __h3_error__ = true;
  statusCode = 500;
  fatal = false;
  unhandled = false;
  statusMessage;
  data;
  cause;
  constructor(message, opts = {}) {
    super(message, opts);
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
const getHeader = getRequestHeader;
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const _header = event.node.req.headers["x-forwarded-host"];
    const xForwardedHost = (_header || "").split(",").shift()?.trim();
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}

const RawBodySymbol = Symbol.for("h3RawBody");
const ParsedBodySymbol = Symbol.for("h3ParsedBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      if (_resolved instanceof FormData) {
        return new Response(_resolved).bytes().then((uint8arr) => Buffer.from(uint8arr));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !/\bchunked\b/i.test(
    String(event.node.req.headers["transfer-encoding"] ?? "")
  )) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
async function readBody(event, options = {}) {
  const request = event.node.req;
  if (hasProp(request, ParsedBodySymbol)) {
    return request[ParsedBodySymbol];
  }
  const contentType = request.headers["content-type"] || "";
  const body = await readRawBody(event);
  let parsed;
  if (contentType === "application/json") {
    parsed = _parseJSON(body, options.strict ?? true);
  } else if (contentType.startsWith("application/x-www-form-urlencoded")) {
    parsed = _parseURLEncodedBody(body);
  } else if (contentType.startsWith("text/")) {
    parsed = body;
  } else {
    parsed = _parseJSON(body, options.strict ?? false);
  }
  request[ParsedBodySymbol] = parsed;
  return parsed;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}
function _parseJSON(body = "", strict) {
  if (!body) {
    return void 0;
  }
  try {
    return destr(body, { strict });
  } catch {
    throw createError$1({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Invalid JSON body"
    });
  }
}
function _parseURLEncodedBody(body) {
  const form = new URLSearchParams(body);
  const parsedForm = /* @__PURE__ */ Object.create(null);
  for (const [key, value] of form.entries()) {
    if (hasProp(parsedForm, key)) {
      if (!Array.isArray(parsedForm[key])) {
        parsedForm[key] = [parsedForm[key]];
      }
      parsedForm[key].push(value);
    } else {
      parsedForm[key] = value;
    }
  }
  return parsedForm;
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "accept-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event, { host: target.startsWith("/") }),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event, opts) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name) || name === "host" && opts?.host) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event, {
        host: typeof req === "string" && req.startsWith("/")
      }),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    const entries = Array.isArray(input) ? input : typeof input.entries === "function" ? input.entries() : Object.entries(input);
    for (const [key, value] of entries) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

class H3Event {
  "__is_event__" = true;
  // Context
  node;
  // Node
  web;
  // Web
  context = {};
  // Shared
  // Request
  _method;
  _path;
  _headers;
  _requestBody;
  // Response
  _handled = false;
  // Hooks
  _onBeforeResponseCalled;
  _onAfterResponseCalled;
  constructor(req, res) {
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _rawReqUrl = event.node.req.url || "/";
    const _reqPath = _decodePath(event._path || _rawReqUrl);
    event._path = _reqPath;
    const _needsRawUrl = _reqPath !== _rawReqUrl;
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _needsRawUrl ? layer.route.length > 1 ? _rawReqUrl.slice(layer.route.length) || "/" : _rawReqUrl : _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function _decodePath(url) {
  const qIndex = url.indexOf("?");
  const path = qIndex === -1 ? url : url.slice(0, qIndex);
  const query = qIndex === -1 ? "" : url.slice(qIndex);
  const decodedPath = path.includes("%25") ? decodePath(path.replace(/%25/g, "%2525")) : decodePath(path);
  return decodedPath + query;
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
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
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
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
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const s$1=globalThis.Headers,i=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  if (value instanceof FormData || value instanceof URLSearchParams) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (contentType === "text/event-stream") {
    return "stream";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
      if (!(context.options.headers instanceof Headers)) {
        context.options.headers = new Headers(
          context.options.headers || {}
          /* compat */
        );
      }
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        const contentType = context.options.headers.get("content-type");
        if (typeof context.options.body !== "string") {
          context.options.body = contentType === "application/x-www-form-urlencoded" ? new URLSearchParams(
            context.options.body
          ).toString() : JSON.stringify(context.options.body);
        }
        if (!contentType) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch$1 = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers$1 = globalThis.Headers || s$1;
const AbortController = globalThis.AbortController || i;
const ofetch = createFetch({ fetch: fetch$1, Headers: Headers$1, AbortController });
const $fetch = ofetch;

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}

const storageKeyProperties = [
  "has",
  "hasItem",
  "get",
  "getItem",
  "getItemRaw",
  "set",
  "setItem",
  "setItemRaw",
  "del",
  "remove",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  nsStorage.keys = nsStorage.getKeys;
  nsStorage.getItems = async (items, commonOptions) => {
    const prefixedItems = items.map(
      (item) => typeof item === "string" ? base + item : { ...item, key: base + item.key }
    );
    const results = await storage.getItems(prefixedItems, commonOptions);
    return results.map((entry) => ({
      key: entry.key.slice(base.length),
      value: entry.value
    }));
  };
  nsStorage.setItems = async (items, commonOptions) => {
    const prefixedItems = items.map((item) => ({
      key: base + item.key,
      value: item.value,
      options: item.options
    }));
    return storage.setItems(prefixedItems, commonOptions);
  };
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]?.();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, createError);
  }
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore, maxDepth) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        if (maxDepth === void 0 || maxDepth > 0) {
          const dirFiles = await readdirRecursive(
            entryPath,
            ignore,
            maxDepth === void 0 ? void 0 : maxDepth - 1
          );
          files.push(...dirFiles.map((f) => entry.name + "/" + f));
        }
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    flags: {
      maxDepth: true
    },
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys(_base, topts) {
      return readdirRecursive(r("."), opts.ignore, topts?.maxDepth);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function serialize$1(o){return typeof o=="string"?`'${o}'`:new c().serialize(o)}const c=/*@__PURE__*/function(){class o{#t=new Map;compare(t,r){const e=typeof t,n=typeof r;return e==="string"&&n==="string"?t.localeCompare(r):e==="number"&&n==="number"?t-r:String.prototype.localeCompare.call(this.serialize(t,true),this.serialize(r,true))}serialize(t,r){if(t===null)return "null";switch(typeof t){case "string":return r?t:`'${t}'`;case "bigint":return `${t}n`;case "object":return this.$object(t);case "function":return this.$function(t)}return String(t)}serializeObject(t){const r=Object.prototype.toString.call(t);if(r!=="[object Object]")return this.serializeBuiltInType(r.length<10?`unknown:${r}`:r.slice(8,-1),t);const e=t.constructor,n=e===Object||e===void 0?"":e.name;if(n!==""&&globalThis[n]===e)return this.serializeBuiltInType(n,t);if(typeof t.toJSON=="function"){const i=t.toJSON();return n+(i!==null&&typeof i=="object"?this.$object(i):`(${this.serialize(i)})`)}return this.serializeObjectEntries(n,Object.entries(t))}serializeBuiltInType(t,r){const e=this["$"+t];if(e)return e.call(this,r);if(typeof r?.entries=="function")return this.serializeObjectEntries(t,r.entries());throw new Error(`Cannot serialize ${t}`)}serializeObjectEntries(t,r){const e=Array.from(r).sort((i,a)=>this.compare(i[0],a[0]));let n=`${t}{`;for(let i=0;i<e.length;i++){const[a,l]=e[i];n+=`${this.serialize(a,true)}:${this.serialize(l)}`,i<e.length-1&&(n+=",");}return n+"}"}$object(t){let r=this.#t.get(t);return r===void 0&&(this.#t.set(t,`#${this.#t.size}`),r=this.serializeObject(t),this.#t.set(t,r)),r}$function(t){const r=Function.prototype.toString.call(t);return r.slice(-15)==="[native code] }"?`${t.name||""}()[native]`:`${t.name}(${t.length})${r.replace(/\s*\n\s*/g,"")}`}$Array(t){let r="[";for(let e=0;e<t.length;e++)r+=this.serialize(t[e]),e<t.length-1&&(r+=",");return r+"]"}$Date(t){try{return `Date(${t.toISOString()})`}catch{return "Date(null)"}}$ArrayBuffer(t){return `ArrayBuffer[${new Uint8Array(t).join(",")}]`}$Set(t){return `Set${this.$Array(Array.from(t).sort((r,e)=>this.compare(r,e)))}`}$Map(t){return this.serializeObjectEntries("Map",t.entries())}}for(const s of ["Error","RegExp","URL"])o.prototype["$"+s]=function(t){return `${s}(${t})`};for(const s of ["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join(",")}]`};for(const s of ["BigInt64Array","BigUint64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join("n,")}${t.length>0?"n":""}]`};return o}();

function isEqual(object1, object2) {
  if (object1 === object2) {
    return true;
  }
  if (serialize$1(object1) === serialize$1(object2)) {
    return true;
  }
  return false;
}

const e=globalThis.process?.getBuiltinModule?.("crypto")?.hash,r="sha256",s="base64url";function digest(t){if(e)return e(r,t,s);const o=createHash(r).update(t);return globalThis.process?.versions?.webcontainer?o.digest().toString(s):o.digest(s)}

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

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

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

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

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
    "buildId": "643da432-6590-4b17-bf10-c23f096cb51f",
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
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
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

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());

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
  createRouter$1({ routes: config.nitro.routeRules })
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
            throw createError$1({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
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
            throw createError$1({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
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
		const { template } = await import('./error-500.mjs');
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
	return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
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
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
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
function getResponsibleId$2(contact) {
  const value = contact.assignedById;
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}
function getResponsibleName$2(contact, users) {
  const id = getResponsibleId$2(contact);
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
    responsibleId: getResponsibleId$2(contact),
    responsibleName: getResponsibleName$2(contact, users),
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
    const raw = await readFile$1(logPath, "utf8");
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
  await writeFile$1(logPath, `${JSON.stringify(payload, null, 2)}
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
    const raw = await readFile$1(dataQualityLogPath, "utf8");
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
  await writeFile$1(dataQualityLogPath, `${JSON.stringify(payload, null, 2)}
`, "utf8");
  return payload;
}
async function readNextStepLog() {
  var _a;
  try {
    const raw = await readFile$1(nextStepLogPath, "utf8");
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
  await writeFile$1(nextStepLogPath, `${JSON.stringify(payload, null, 2)}
`, "utf8");
  return payload;
}
function isPlainObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
async function readReactivationLog() {
  const empty = emptyReactivationLog();
  try {
    const raw = await readFile$1(reactivationLogPath, "utf8");
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
  await writeFile$1(reactivationLogPath, `${JSON.stringify(payload, null, 2)}
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
function getResponsibleId$1(deal) {
  return normalizeId(deal.assignedById);
}
function getResponsibleName$1(deal, users) {
  const id = getResponsibleId$1(deal);
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
    responsibleId: getResponsibleId$1(deal),
    responsibleName: getResponsibleName$1(deal, users),
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

const SLA_STATUS_FIELD_VALUES = {
  "\u0412 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 15 \u043C\u0438\u043D\u0443\u0442": 3006,
  "\u0411\u043E\u043B\u0435\u0435 15 \u043C\u0438\u043D\u0443\u0442": 3008,
  "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0430 \u043D\u0435 \u0431\u044B\u043B\u043E": 3010,
  "\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0437\u0432\u043E\u043D\u043E\u043A": 3140,
  "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0440\u0443\u0447\u043D\u0430\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430": 3146
};
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
    const id = toNumber(value);
    if (id && id > 0) ids.add(id);
  }
  return [...ids];
}
function toNumber(value) {
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
  const typeId = toNumber((_a = activity.typeId) != null ? _a : activity.TYPE_ID);
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
  const typeId = toNumber((_a = activity.typeId) != null ? _a : activity.TYPE_ID);
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
  return toNumber((_a = activity.direction) != null ? _a : activity.DIRECTION) === 2;
}
function isIncoming(activity) {
  var _a;
  return toNumber((_a = activity.direction) != null ? _a : activity.DIRECTION) === 1;
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
function getResponsibleName(lead, users) {
  const id = toNumber(lead.assignedById);
  if (id == null) return "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D";
  const user = users.get(id);
  if (!user) return `ID ${id}`;
  return [user.name, user.lastName].filter(Boolean).join(" ").trim() || `ID ${id}`;
}
function isItDepartmentResponsible(lead, users) {
  return normalizeText(getResponsibleName(lead, users)) === IT_DEPARTMENT_NAME;
}
function getResponsibleId(lead) {
  return toNumber(lead.assignedById);
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
  if (value == null || value === "") return null;
  const key = String(value).trim();
  return (_a = dictionary.get(key)) != null ? _a : key;
}
function getLeadRejectionReason(lead, rejectionReasonNames) {
  var _a;
  if (getLeadStatusId(lead) !== "JUNK") return null;
  return getPrintableFieldValue((_a = lead.ufCrm_1638180783) != null ? _a : lead.UF_CRM_1638180783, rejectionReasonNames);
}
function hasRejectionReasonId(lead, reasonId) {
  var _a;
  const value = (_a = lead.ufCrm_1638180783) != null ? _a : lead.UF_CRM_1638180783;
  if (Array.isArray(value)) return value.some((item) => String(item).trim() === reasonId);
  return String(value != null ? value : "").trim() === reasonId;
}
function shouldExcludeRejectedLeadByReason(lead, rejectionReasonNames) {
  const reason = getLeadRejectionReason(lead, rejectionReasonNames);
  return Boolean(
    reason && EXCLUDED_REJECTION_REASONS.has(normalizeText(reason)) || getLeadStatusId(lead) === "JUNK" && hasIncomingCallInTitle(lead) && hasRejectionReasonId(lead, SYNC_ERROR_REJECTION_REASON_ID)
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
  const responsibleId = getResponsibleId(lead);
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
  if (getLeadStatusId(lead) === TRANSFERRED_TO_MPT_STATUS_ID && transferredToMptAt) {
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
  const rejectionReason = getLeadRejectionReason(lead, rejectionReasonNames);
  const violationFlag = hasNonErrorRejectionReason(rejectionReason) ? "\u041D\u0435\u0442" : getViolationFlag(status, slaOverrunMinutes);
  return {
    id: `${lead.id}-${checkedAt}`,
    leadId: lead.id,
    leadTitle: ((_b = lead.title) == null ? void 0 : _b.trim()) || `\u041B\u0438\u0434 ${lead.id}`,
    leadStageName: getLeadStageName(lead, leadStatusNames),
    rejectionReason,
    checkedAt,
    leadCreatedAt,
    firstContactAt,
    minutesToFirstContact,
    slaOverrunMinutes,
    status,
    responsibleId,
    responsibleName: getResponsibleName(lead, users),
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
  return getLeadStatusId(lead) === TRANSFERRED_TO_MPT_STATUS_ID;
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
  const earlyShiftUsers = users.filter(isEarlyWorkdayUser);
  const leadIds = filteredLeads.map((lead) => lead.id);
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
  for (const lead of filteredLeads) {
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
  for (const lead of filteredLeads) {
    const activities = [...(_a = leadActivitiesByLead.get(lead.id)) != null ? _a : []];
    for (const contactId of (_b = contactIdsByLead.get(lead.id)) != null ? _b : []) {
      activities.push(...(_c = contactActivitiesByContact.get(contactId)) != null ? _c : []);
    }
    activitiesByLead.set(lead.id, activities);
  }
  const stageHistoryLeadIds = [
    ...new Set(
      filteredLeads.filter((lead) => isTransferredToMptLead(lead)).map((lead) => lead.id)
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
    filteredLeads.map((lead) => {
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
  const timelineLeadIds = filteredLeads.filter((lead) => {
    var _a2;
    const status = (_a2 = provisionalRows.get(lead.id)) == null ? void 0 : _a2.status;
    return status !== "\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0437\u0432\u043E\u043D\u043E\u043A" && status !== "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0440\u0443\u0447\u043D\u0430\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430";
  }).map((lead) => lead.id);
  const timelineLeadIdSet = new Set(timelineLeadIds);
  const timelineContactIds = /* @__PURE__ */ new Set();
  for (const lead of filteredLeads) {
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
  const rows = filteredLeads.map(
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
  ).sort((a, b) => new Date(b.leadCreatedAt).getTime() - new Date(a.leadCreatedAt).getTime());
  if (options.updateCrm) {
    reportProgress({
      stage: "updating_crm",
      message: "\u0417\u0430\u043F\u043E\u043B\u043D\u044F\u0435\u043C \u043F\u043E\u043B\u044F SLA \u0432 CRM",
      current: 0,
      total: Math.max(1, rows.length)
    });
    await client.updateLeadsSlaFields(rows.map(getSlaCrmUpdateFields));
    reportProgress({
      stage: "updating_crm",
      message: "\u041F\u043E\u043B\u044F SLA \u0432 CRM \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u044B",
      current: rows.length,
      total: Math.max(1, rows.length)
    });
  }
  const payload = await writeSlaLog(rows, checkedAt);
  reportProgress({ stage: "done", message: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430", current: rows.length, total: rows.length });
  return payload;
}

var _a;
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
const reportJobs = (_a = state.__managerAssistantReportJobs) != null ? _a : state.__managerAssistantReportJobs = {
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

const _ZcSr2BelLEckXKsfEBmtTu9g4zAe4rsbEXbZK9DD9kE = defineNitroPlugin(() => {
  ensureSlaAutoControlScheduled();
});

const plugins = [
  _ZcSr2BelLEckXKsfEBmtTu9g4zAe4rsbEXbZK9DD9kE
];

const assets = {
  "/favicon.png": {
    "type": "image/png",
    "etag": "\"3aa4-wd3HBggW0W0xjkfM9YjjoSjnHC0\"",
    "mtime": "2024-09-03T13:05:22.661Z",
    "size": 15012,
    "path": "../public/favicon.png"
  },
  "/_nuxt/4BooG2AJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d98-RZkGzISWnYXyUy6eHz4Vj2sXTAg\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 3480,
    "path": "../public/_nuxt/4BooG2AJ.js"
  },
  "/_nuxt/B2WpdShI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4d2-la7/8AmQL9CBE5xwVqlL/qsf3ic\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 1234,
    "path": "../public/_nuxt/B2WpdShI.js"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"4acc-CIjhuSjvvpj+EvdIcUND35WFkCw\"",
    "mtime": "2026-05-21T13:29:27.121Z",
    "size": 19148,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/B3-O_O2Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3ef-sKTOTNnKEmXkT57pFZz7VL3oNPM\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 1007,
    "path": "../public/_nuxt/B3-O_O2Y.js"
  },
  "/_nuxt/BAbScZE8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"135-Vfw6PpnA3KsIjMglS4UaZlaUSWA\"",
    "mtime": "2026-06-30T10:38:54.083Z",
    "size": 309,
    "path": "../public/_nuxt/BAbScZE8.js"
  },
  "/_nuxt/B3G8Fmc4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8b2-76ne1VudkayLya4kL1tpACdTgoE\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 2226,
    "path": "../public/_nuxt/B3G8Fmc4.js"
  },
  "/_nuxt/1smZIsUQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5aa-bSuvXKsCImrh3jTBIIXK4h9qiB4\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 1450,
    "path": "../public/_nuxt/1smZIsUQ.js"
  },
  "/_nuxt/BggTf3rO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20f-SVdteNFXOlWlTSF86FtiFHatOHI\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 527,
    "path": "../public/_nuxt/BggTf3rO.js"
  },
  "/_nuxt/BeiFhJL7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f26a-Nfl7x2v/KG5x/m+SRVIgATPKjlQ\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 62058,
    "path": "../public/_nuxt/BeiFhJL7.js"
  },
  "/_nuxt/Bh8F3Zyx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"dac-bfZ3k1a0E5KvKZLTfYR2iG4O4N8\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 3500,
    "path": "../public/_nuxt/Bh8F3Zyx.js"
  },
  "/_nuxt/BJwtGAG8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"301-iFxk/R198z+/Sc70g7yxbUVA85k\"",
    "mtime": "2026-06-30T10:38:54.083Z",
    "size": 769,
    "path": "../public/_nuxt/BJwtGAG8.js"
  },
  "/_nuxt/BAmapntu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b92-lnZ64b14dr2M9TVdxiY6n0Ay1WE\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 2962,
    "path": "../public/_nuxt/BAmapntu.js"
  },
  "/_nuxt/BaXAm7If.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"269-fB+MfvfQK4xU+2FxWPo6KTHM/Q4\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 617,
    "path": "../public/_nuxt/BaXAm7If.js"
  },
  "/_nuxt/BNsxAyFD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3ef-Z4NnBKVz44zyMEzRrjTzrSptbxE\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 1007,
    "path": "../public/_nuxt/BNsxAyFD.js"
  },
  "/_nuxt/BMU650Ac.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b1c-uFjs8wn+hm/k4v5E/tUM3kf71yU\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 2844,
    "path": "../public/_nuxt/BMU650Ac.js"
  },
  "/_nuxt/BV-GrxlL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"258-3KtLM2fAAku8iwM6zR2C+bkGL5Y\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 600,
    "path": "../public/_nuxt/BV-GrxlL.js"
  },
  "/_nuxt/C-oELQBC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1df-DfxMpM8SnxmLscLBWAdUuHS2eqA\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 479,
    "path": "../public/_nuxt/C-oELQBC.js"
  },
  "/_nuxt/CFpEK4X1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f4-XYZFlw1Jgt0u5/2oFPJUwSsy+mc\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 500,
    "path": "../public/_nuxt/CFpEK4X1.js"
  },
  "/_nuxt/B_rxW57i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ca-hKr5ucsnJy3ivb5vUgM1zv7iBhE\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 458,
    "path": "../public/_nuxt/B_rxW57i.js"
  },
  "/_nuxt/CCatqwdD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"88c-2PvgCDFqL2FnWESi/1Faa1UxjDI\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 2188,
    "path": "../public/_nuxt/CCatqwdD.js"
  },
  "/_nuxt/Cgg-gUSh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2499-ixtYzlNuHrY2O6ntUjLhX8XRbOM\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 9369,
    "path": "../public/_nuxt/Cgg-gUSh.js"
  },
  "/_nuxt/BrW_Mhbx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1db-xFenCA2sgPkF/bAkm1nVGgb5bHw\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 475,
    "path": "../public/_nuxt/BrW_Mhbx.js"
  },
  "/_nuxt/CmJSyuzq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"207-4SvFoHOY0y1SsA13zlHxz4OCF6I\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 519,
    "path": "../public/_nuxt/CmJSyuzq.js"
  },
  "/_nuxt/Cnb6hNvb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d7-tXNovhTBjZSZenG8icNDVNdeIqw\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 471,
    "path": "../public/_nuxt/Cnb6hNvb.js"
  },
  "/_nuxt/Cua5UWXf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"211-BsKshWOPEKLQvICjTRkQ7gkv4+A\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 529,
    "path": "../public/_nuxt/Cua5UWXf.js"
  },
  "/_nuxt/Chx5pfCh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1fdd0-d1LNjZYdomiK73OK3FeQnocedSA\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 130512,
    "path": "../public/_nuxt/Chx5pfCh.js"
  },
  "/_nuxt/CPUhAVxW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c8d-I6eJ23lMHEoOebquS9Mq+s9VvLo\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 3213,
    "path": "../public/_nuxt/CPUhAVxW.js"
  },
  "/_nuxt/Cwmd4S_k.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d14-yYV6HUWIF7yu3UKT6Zg7AMaFmD0\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 3348,
    "path": "../public/_nuxt/Cwmd4S_k.js"
  },
  "/_nuxt/D2MVvzgR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"21bb-6c5fe5qNzBU6lZKmPSLXZRt0lkI\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 8635,
    "path": "../public/_nuxt/D2MVvzgR.js"
  },
  "/_nuxt/D1ZOF1zK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8b1-VkLA+e3Tuf0mN1RWFh2bph/ynSI\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 2225,
    "path": "../public/_nuxt/D1ZOF1zK.js"
  },
  "/_nuxt/DAoxj7Jc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"135-Pt9G5mQ5FY3tH7Zg6qOlB6UVvi4\"",
    "mtime": "2026-06-30T10:38:54.083Z",
    "size": 309,
    "path": "../public/_nuxt/DAoxj7Jc.js"
  },
  "/_nuxt/D5CFoqjP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9ab-9DlQMvWspo6VQUU82jiLe2+UWmw\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 2475,
    "path": "../public/_nuxt/D5CFoqjP.js"
  },
  "/_nuxt/D8GHEwaY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"232-xeUASH7U2YVquepYAnzgS1PdpOg\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 562,
    "path": "../public/_nuxt/D8GHEwaY.js"
  },
  "/_nuxt/dawS0Dri.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1cf-HbP0z72CxlrHDepeTSvdxR1TYvc\"",
    "mtime": "2026-06-30T10:38:54.083Z",
    "size": 463,
    "path": "../public/_nuxt/dawS0Dri.js"
  },
  "/_nuxt/DBivRgaR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"75b-0P/KgM+gaHBcPCZQP83JwrrYg/o\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 1883,
    "path": "../public/_nuxt/DBivRgaR.js"
  },
  "/_nuxt/DhwHSJFt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"429-a4sGHq/s7quP7gtoQWT6cqcQ2G8\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 1065,
    "path": "../public/_nuxt/DhwHSJFt.js"
  },
  "/_nuxt/DhrlYejp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"269-K0BmqGGdB5g/hr29u3DU7XWUbuQ\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 617,
    "path": "../public/_nuxt/DhrlYejp.js"
  },
  "/_nuxt/DlAUqK2U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 91,
    "path": "../public/_nuxt/DlAUqK2U.js"
  },
  "/_nuxt/DGgRJGFy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"aa0-LwJcjxButfjkgq3ACMs5aVMVlRA\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 2720,
    "path": "../public/_nuxt/DGgRJGFy.js"
  },
  "/_nuxt/DMKQgn8U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3d3-MQYRKxIOL6vDniFc6mEP68KqKoc\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 979,
    "path": "../public/_nuxt/DMKQgn8U.js"
  },
  "/_nuxt/Dm_udhuJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12d-G0C4ziGOBacaXkX2VZaHjutOhis\"",
    "mtime": "2026-06-30T10:38:54.083Z",
    "size": 301,
    "path": "../public/_nuxt/Dm_udhuJ.js"
  },
  "/_nuxt/DPtuqZnF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"204-+5kY2ik2y2i/TAJb/NGYrV2FMbE\"",
    "mtime": "2026-06-30T10:38:54.083Z",
    "size": 516,
    "path": "../public/_nuxt/DPtuqZnF.js"
  },
  "/_nuxt/DtgZSoLf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"129-yW5vWtHaawAOKSrCyxai90Kye28\"",
    "mtime": "2026-06-30T10:38:54.083Z",
    "size": 297,
    "path": "../public/_nuxt/DtgZSoLf.js"
  },
  "/_nuxt/CWhIcGkA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"87e1e-8JnpaOCx6JrZ1Z7LNtTu5e+onaY\"",
    "mtime": "2026-06-30T10:38:54.083Z",
    "size": 556574,
    "path": "../public/_nuxt/CWhIcGkA.js"
  },
  "/_nuxt/Dus-9SqD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"536-1JprvhJqwfGLka5nfTOloOXOckM\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 1334,
    "path": "../public/_nuxt/Dus-9SqD.js"
  },
  "/_nuxt/DXjoSxr0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10e0-CFF2z8cE0kmh/0IhmRm82t5ouH8\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 4320,
    "path": "../public/_nuxt/DXjoSxr0.js"
  },
  "/_nuxt/DyId9qsG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2c2f-8wMdVsLWailbof/t8HY0EywuQUI\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 11311,
    "path": "../public/_nuxt/DyId9qsG.js"
  },
  "/_nuxt/dyykIPj5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8a9-BQwerrGz+EQrkYKDa01U3f5OnM4\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 2217,
    "path": "../public/_nuxt/dyykIPj5.js"
  },
  "/_nuxt/error-404.BBhU_iaz.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"97e-eCOlDpp0jm/5BdOYfmSvByotCe4\"",
    "mtime": "2026-06-30T10:38:54.081Z",
    "size": 2430,
    "path": "../public/_nuxt/error-404.BBhU_iaz.css"
  },
  "/_nuxt/error-500.Da-Z0YA7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"773-YzukniqV1OgCg4eTbl4RF+M08kk\"",
    "mtime": "2026-06-30T10:38:54.081Z",
    "size": 1907,
    "path": "../public/_nuxt/error-500.Da-Z0YA7.css"
  },
  "/_nuxt/DzfRqOqy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"229-/z+SMHB/zcGPl+Wj+fBurdjvIhE\"",
    "mtime": "2026-06-30T10:38:54.083Z",
    "size": 553,
    "path": "../public/_nuxt/DzfRqOqy.js"
  },
  "/_nuxt/fzwZhJK-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e5-89LBM/5ALJhQiiScXrdmxZxMAmM\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 485,
    "path": "../public/_nuxt/fzwZhJK-.js"
  },
  "/_nuxt/jChUu9Ku.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ebc-XJMFC/ma2JllGvmyLRZthWriDqg\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 3772,
    "path": "../public/_nuxt/jChUu9Ku.js"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-jTUgyUeR0u93QHOL6K1RvE5BQGs\"",
    "mtime": "2026-06-30T10:38:59.299Z",
    "size": 71,
    "path": "../public/_nuxt/builds/latest.json"
  },
  "/_nuxt/LLJR-3ME.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d5d-uZbhUR4KS3+243Ci9X90kk0jpQk\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 7517,
    "path": "../public/_nuxt/LLJR-3ME.js"
  },
  "/_nuxt/TjNCYigU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8b3-SsMXAPlWXI/CwUKnuNuTWfvfx9w\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 2227,
    "path": "../public/_nuxt/TjNCYigU.js"
  },
  "/_nuxt/uTFgMrvX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"284-5gbAGI0PnvKej0uDX+5eZxSW2fk\"",
    "mtime": "2026-06-30T10:38:54.082Z",
    "size": 644,
    "path": "../public/_nuxt/uTFgMrvX.js"
  },
  "/_nuxt/builds/meta/643da432-6590-4b17-bf10-c23f096cb51f.json": {
    "type": "application/json",
    "etag": "\"58-iTcsVP5UIR3wV6VmK8aJjK+1M94\"",
    "mtime": "2026-06-30T10:38:59.300Z",
    "size": 88,
    "path": "../public/_nuxt/builds/meta/643da432-6590-4b17-bf10-c23f096cb51f.json"
  },
  "/_nuxt/entry.auapqx2q.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"80e0e-WQ4/OHsUymSkkwH9HER9URQOu50\"",
    "mtime": "2026-06-30T10:38:54.070Z",
    "size": 527886,
    "path": "../public/_nuxt/entry.auapqx2q.css"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_nuxt/":{"maxAge":31536000}};

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
      throw createError$1({ statusCode: 404 });
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

const _SxA8c9 = defineEventHandler(() => {});

const _lazy_Gn_rRV = () => import('../routes/api/access/current.get.mjs');
const _lazy_DOqkNG = () => import('../routes/api/b24/analyze-next-step.post.mjs');
const _lazy_JjO4vH = () => import('../routes/api/b24/create-call-activity.post.mjs');
const _lazy_IWDYCf = () => import('../routes/api/b24/load-deal-context.get.mjs');
const _lazy_o334Xy = () => import('../routes/api/check-data-quality.post.mjs');
const _lazy_JnK9_H = () => import('../routes/api/check-data-quality/status.get.mjs');
const _lazy_Q8ze7T = () => import('../routes/api/check-next-step.post.mjs');
const _lazy_v_gUQ3 = () => import('../routes/api/check-next-step/status.get.mjs');
const _lazy_0uxmge = () => import('../routes/api/check-reactivation.post.mjs');
const _lazy_kXbHCq = () => import('../routes/api/check-reactivation/status.get.mjs');
const _lazy_enfnby = () => import('../routes/api/check-sla.post.mjs');
const _lazy_DcPzAC = () => import('../routes/api/check-sla/status.get.mjs');
const _lazy_hd2fpC = () => import('../routes/api/data-quality-log.get.mjs');
const _lazy_ozBfjM = () => import('../routes/api/debug/client-context.post.mjs');
const _lazy_JQTpWs = () => import('../routes/api/debug/runtime.get.mjs');
const _lazy_PUzixM = () => import('../routes/api/next-step-log.get.mjs');
const _lazy_aK2m5N = () => import('../routes/api/reactivation-log.get.mjs');
const _lazy_zTyULi = () => import('../routes/api/sla-auto-control.get.mjs');
const _lazy_zbF6oM = () => import('../routes/api/sla-auto-control.patch.mjs');
const _lazy_78Igsf = () => import('../routes/api/sla-log.get.mjs');
const _lazy_XrfEnA = () => import('../routes/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _9bL1_g, lazy: false, middleware: true, method: undefined },
  { route: '/api/access/current', handler: _lazy_Gn_rRV, lazy: true, middleware: false, method: "get" },
  { route: '/api/b24/analyze-next-step', handler: _lazy_DOqkNG, lazy: true, middleware: false, method: "post" },
  { route: '/api/b24/create-call-activity', handler: _lazy_JjO4vH, lazy: true, middleware: false, method: "post" },
  { route: '/api/b24/load-deal-context', handler: _lazy_IWDYCf, lazy: true, middleware: false, method: "get" },
  { route: '/api/check-data-quality', handler: _lazy_o334Xy, lazy: true, middleware: false, method: "post" },
  { route: '/api/check-data-quality/status', handler: _lazy_JnK9_H, lazy: true, middleware: false, method: "get" },
  { route: '/api/check-next-step', handler: _lazy_Q8ze7T, lazy: true, middleware: false, method: "post" },
  { route: '/api/check-next-step/status', handler: _lazy_v_gUQ3, lazy: true, middleware: false, method: "get" },
  { route: '/api/check-reactivation', handler: _lazy_0uxmge, lazy: true, middleware: false, method: "post" },
  { route: '/api/check-reactivation/status', handler: _lazy_kXbHCq, lazy: true, middleware: false, method: "get" },
  { route: '/api/check-sla', handler: _lazy_enfnby, lazy: true, middleware: false, method: "post" },
  { route: '/api/check-sla/status', handler: _lazy_DcPzAC, lazy: true, middleware: false, method: "get" },
  { route: '/api/data-quality-log', handler: _lazy_hd2fpC, lazy: true, middleware: false, method: "get" },
  { route: '/api/debug/client-context', handler: _lazy_ozBfjM, lazy: true, middleware: false, method: "post" },
  { route: '/api/debug/runtime', handler: _lazy_JQTpWs, lazy: true, middleware: false, method: "get" },
  { route: '/api/next-step-log', handler: _lazy_PUzixM, lazy: true, middleware: false, method: "get" },
  { route: '/api/reactivation-log', handler: _lazy_aK2m5N, lazy: true, middleware: false, method: "get" },
  { route: '/api/sla-auto-control', handler: _lazy_zTyULi, lazy: true, middleware: false, method: "get" },
  { route: '/api/sla-auto-control', handler: _lazy_zbF6oM, lazy: true, middleware: false, method: "patch" },
  { route: '/api/sla-log', handler: _lazy_78Igsf, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_XrfEnA, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
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
    debug: destr(false),
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
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => b(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return C(
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
const nitroApp = createNitroApp();
function useNitroApp() {
  return nitroApp;
}
runNitroPlugins(nitroApp);

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

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    debug("received shut down signal", signal);
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((error) => {
      debug("server shut down error occurred", error);
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    debug("Destroy Connections : " + (force ? "forced close" : "close"));
    let counter = 0;
    let secureCounter = 0;
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        counter++;
        destroy(socket);
      }
    }
    debug("Connections destroyed : " + counter);
    debug("Connection Counter    : " + connectionCounter);
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        secureCounter++;
        destroy(socket);
      }
    }
    debug("Secure Connections destroyed : " + secureCounter);
    debug("Secure Connection Counter    : " + secureConnectionCounter);
  }
  server.on("request", (req, res) => {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", () => {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", () => {
    debug("closed");
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      debug("Close http server");
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    debug("shutdown signal - " + sig);
    if (options.development) {
      debug("DEV-Mode - immediate forceful shutdown");
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          debug("executing finally()");
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      debug(`waitForReadyToShutDown... ${totalNumInterval}`);
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        debug("All connections closed. Continue to shutting down");
        return Promise.resolve(false);
      }
      debug("Schedule the next waitForReadyToShutdown");
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    debug("shutting down");
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      debug("Do onShutdown now");
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((error) => {
      const errString = typeof error === "string" ? error : JSON.stringify(error);
      debug(errString);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT || "", 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((error) => {
          console.error(error);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

export { $fetch as $, readDataQualityLog as A, readNextStepLog as B, readReactivationLog as C, readSlaAutoControlState as D, readSlaLog as E, reportJobs as F, sanitizeStatusCode as G, serialize$1 as H, setResponseStatus as I, setupGracefulShutdown as J, startDataQualityJob as K, startNextStepJob as L, startReactivationJob as M, startSlaJob as N, stringifyParsedURL as O, stringifyQuery as P, toNodeListener as Q, trapUnhandledNodeErrors as R, updateSlaAutoControlConfig as S, useNitroApp as T, useRuntimeConfig as U, withLeadingSlash as V, withQuery as W, withTrailingSlash as X, withoutTrailingSlash as Y, defineEventHandler as a, defineRenderHandler as b, createError$1 as c, decodePath as d, defu as e, defuFn as f, destr as g, encodePath as h, getContext as i, getHeader as j, getQuery as k, getRequestHeader as l, getResponseStatus as m, getResponseStatusText as n, getRouteRules as o, hasProtocol as p, isEqual as q, isEqual$1 as r, isScriptProtocol as s, joinRelativeURL as t, joinURL as u, klona as v, parseMoscowDateRange as w, parseQuery as x, parseURL as y, readBody as z };
//# sourceMappingURL=nitro.mjs.map

import { NuxtModule, ModuleDependencyMeta } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface ModuleDependencies {
    ["@bitrix24/b24ui-nuxt"]?: ModuleDependencyMeta<typeof import("@bitrix24/b24ui-nuxt").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@bitrix24/b24icons-nuxt"]?: ModuleDependencyMeta<typeof import("@bitrix24/b24icons-nuxt").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
  }
  interface NuxtOptions {
    /**
     * Configuration for `@bitrix24/b24ui-nuxt`
     */
    ["b24ui"]: typeof import("@bitrix24/b24ui-nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@bitrix24/b24icons-nuxt`
     */
    ["B24IconsNuxt"]: typeof import("@bitrix24/b24icons-nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
  }
  interface NuxtConfig {
    /**
     * Configuration for `@bitrix24/b24ui-nuxt`
     */
    ["b24ui"]?: typeof import("@bitrix24/b24ui-nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@bitrix24/b24icons-nuxt`
     */
    ["B24IconsNuxt"]?: typeof import("@bitrix24/b24icons-nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@bitrix24/b24ui-nuxt", Exclude<NuxtConfig["b24ui"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>] | ["@bitrix24/b24icons-nuxt", Exclude<NuxtConfig["B24IconsNuxt"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface ModuleDependencies {
    ["@bitrix24/b24ui-nuxt"]?: ModuleDependencyMeta<typeof import("@bitrix24/b24ui-nuxt").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@bitrix24/b24icons-nuxt"]?: ModuleDependencyMeta<typeof import("@bitrix24/b24icons-nuxt").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
  }
  interface NuxtOptions {
    /**
     * Configuration for `@bitrix24/b24ui-nuxt`
     * @see https://bitrix24.github.io/b24ui/docs/getting-started/installation/nuxt/
     */
    ["b24ui"]: typeof import("@bitrix24/b24ui-nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@bitrix24/b24icons-nuxt`
     * @see https://www.npmjs.com/package/@bitrix24/b24icons-nuxt
     */
    ["B24IconsNuxt"]: typeof import("@bitrix24/b24icons-nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
  }
  interface NuxtConfig {
    /**
     * Configuration for `@bitrix24/b24ui-nuxt`
     * @see https://bitrix24.github.io/b24ui/docs/getting-started/installation/nuxt/
     */
    ["b24ui"]?: typeof import("@bitrix24/b24ui-nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@bitrix24/b24icons-nuxt`
     * @see https://www.npmjs.com/package/@bitrix24/b24icons-nuxt
     */
    ["B24IconsNuxt"]?: typeof import("@bitrix24/b24icons-nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@bitrix24/b24ui-nuxt", Exclude<NuxtConfig["b24ui"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>] | ["@bitrix24/b24icons-nuxt", Exclude<NuxtConfig["B24IconsNuxt"], boolean>])[],
  }
}
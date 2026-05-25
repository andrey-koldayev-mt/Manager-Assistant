import { computed, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderVNode } from "vue/server-renderer";
import { defu } from "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/defu/dist/defu.mjs";
import TerminalIcon from "@bitrix24/b24icons-vue/file-type/TerminalIcon";
import YamlIcon from "@bitrix24/b24icons-vue/file-type/YamlIcon";
import BunIcon from "@bitrix24/b24icons-vue/file-type/BunIcon";
import YarnIcon from "@bitrix24/b24icons-vue/file-type/YarnIcon";
import NpmIcon from "@bitrix24/b24icons-vue/file-type/NpmIcon";
import PnpmIcon from "@bitrix24/b24icons-vue/file-type/PnpmIcon";
import FaviconIcon from "@bitrix24/b24icons-vue/file-type/FaviconIcon";
import DartlangIcon from "@bitrix24/b24icons-vue/file-type/DartlangIcon";
import JuliaIcon from "@bitrix24/b24icons-vue/file-type/JuliaIcon";
import PerlIcon from "@bitrix24/b24icons-vue/file-type/PerlIcon";
import ArduinoIcon from "@bitrix24/b24icons-vue/file-type/ArduinoIcon";
import CppheaderIcon from "@bitrix24/b24icons-vue/file-type/CppheaderIcon";
import ScalaIcon from "@bitrix24/b24icons-vue/file-type/ScalaIcon";
import ErlangIcon from "@bitrix24/b24icons-vue/file-type/ErlangIcon";
import ElixirIcon from "@bitrix24/b24icons-vue/file-type/ElixirIcon";
import BicepIcon from "@bitrix24/b24icons-vue/file-type/BicepIcon";
import GleamIcon from "@bitrix24/b24icons-vue/file-type/GleamIcon";
import GoIcon from "@bitrix24/b24icons-vue/file-type/GoIcon";
import PowershellIcon from "@bitrix24/b24icons-vue/file-type/PowershellIcon";
import LispIcon from "@bitrix24/b24icons-vue/file-type/LispIcon";
import RubyIcon from "@bitrix24/b24icons-vue/file-type/RubyIcon";
import RustIcon from "@bitrix24/b24icons-vue/file-type/RustIcon";
import KotlinIcon from "@bitrix24/b24icons-vue/file-type/KotlinIcon";
import FsharpIcon from "@bitrix24/b24icons-vue/file-type/FsharpIcon";
import HaskellIcon from "@bitrix24/b24icons-vue/file-type/HaskellIcon";
import FortranIcon from "@bitrix24/b24icons-vue/file-type/FortranIcon";
import AssemblyIcon from "@bitrix24/b24icons-vue/file-type/AssemblyIcon";
import CsharpIcon from "@bitrix24/b24icons-vue/file-type/CsharpIcon";
import PythonIcon from "@bitrix24/b24icons-vue/file-type/PythonIcon";
import MarkdownIcon from "@bitrix24/b24icons-vue/file-type/MarkdownIcon";
import JsIcon from "@bitrix24/b24icons-vue/file-type/JsIcon";
import TypescriptIcon from "@bitrix24/b24icons-vue/file-type/TypescriptIcon";
import VueIcon from "@bitrix24/b24icons-vue/file-type/VueIcon";
import TailwindIcon from "@bitrix24/b24icons-vue/file-type/TailwindIcon";
import NuxtIcon from "@bitrix24/b24icons-vue/file-type/NuxtIcon";
import VscodeIcon from "@bitrix24/b24icons-vue/file-type/VscodeIcon";
import DotenvIcon from "@bitrix24/b24icons-vue/file-type/DotenvIcon";
import GitIcon from "@bitrix24/b24icons-vue/file-type/GitIcon";
import EslintIcon from "@bitrix24/b24icons-vue/file-type/EslintIcon";
import EditorconfigIcon from "@bitrix24/b24icons-vue/file-type/EditorconfigIcon";
import TsconfigIcon from "@bitrix24/b24icons-vue/file-type/TsconfigIcon";
import NodeIcon from "@bitrix24/b24icons-vue/file-type/NodeIcon";
import { u as useAppConfig } from "../server.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/hookable/dist/index.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/unctx/dist/index.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/ufo/dist/index.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/@unhead/vue/dist/index.mjs";
import "C:/Users/andrey.koldayev/PortableGit/Manager-Assistant/node_modules/klona/dist/index.mjs";
import "@vueuse/core";
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
import "@bitrix24/b24icons-vue/outline/AiStarsIcon";
import "@bitrix24/b24icons-vue/editor/EncloseTextInCodeTagIcon";
import "@bitrix24/b24icons-vue/outline/PlayLIcon";
import "tailwind-variants";
import "ohash/utils";
import "@bitrix24/b24icons-vue/outline/ChevronDownSIcon";
import "@bitrix24/b24icons-vue/animated/LoaderClockIcon";
import "@bitrix24/b24icons-vue/specialized/SpinnerIcon";
import "@bitrix24/b24icons-vue/actions/Cross20Icon";
const theme = {
  "package.json": "NodeIcon",
  "tsconfig.json": "TsconfigIcon",
  ".npmrc": "NpmIcon",
  ".editorconfig": "EditorconfigIcon",
  ".eslintrc": "EslintIcon",
  ".eslintrc.cjs": "EslintIcon",
  ".eslintignore": "EslintIcon",
  "eslint.config.js": "EslintIcon",
  "eslint.config.mjs": "EslintIcon",
  "eslint.config.cjs": "EslintIcon",
  ".gitignore": "GitIcon",
  "yarn.lock": "YarnIcon",
  ".env": "DotenvIcon",
  ".env.example": "DotenvIcon",
  ".vscode/settings.json": "VscodeIcon",
  "nuxt": "NuxtIcon",
  ".nuxtrc": "NuxtIcon",
  ".nuxtignore": "NuxtIcon",
  "nuxt.config.js": "NuxtIcon",
  "nuxt.config.ts": "NuxtIcon",
  "nuxt.schema.ts": "NuxtIcon",
  "tailwind.config.js": "TailwindIcon",
  "tailwind.config.ts": "TailwindIcon",
  "vue": "VueIcon",
  "ts": "TypescriptIcon",
  "tsx": "TypescriptIcon",
  "mjs": "JsIcon",
  "cjs": "JsIcon",
  "js": "JsIcon",
  "jsx": "JsIcon",
  "md": "MarkdownIcon",
  "py": "PythonIcon",
  "cs": "CsharpIcon",
  "asm": "AssemblyIcon",
  "f": "FortranIcon",
  "hs": "HaskellIcon",
  "fs": "FsharpIcon",
  "kt": "KotlinIcon",
  "rs": "RustIcon",
  "rb": "RubyIcon",
  "lsp": "LispIcon",
  "ps1": "PowershellIcon",
  "psd1": "PowershellIcon",
  "psm1": "PowershellIcon",
  "go": "GoIcon",
  "gleam": "GleamIcon",
  "bicep": "BicepIcon",
  "bicepparam": "BicepIcon",
  "exs": "ElixirIcon",
  "erl": "ErlangIcon",
  "sbt": "ScalaIcon",
  "h": "CppheaderIcon",
  "ino": "ArduinoIcon",
  "pl": "PerlIcon",
  "jl": "JuliaIcon",
  "dart": "DartlangIcon",
  "ico": "FaviconIcon",
  "npm": "NpmIcon",
  "pnpm": "PnpmIcon",
  "npx": "NpmIcon",
  "yarn": "YarnIcon",
  "bun": "BunIcon",
  "yml": "YamlIcon",
  "terminal": "TerminalIcon"
};
const _sfc_main = {
  __name: "ProseCodeIcon",
  __ssrInlineRender: true,
  props: {
    icon: { type: [Function, Object], required: false },
    iconName: { type: String, required: false },
    filename: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const icons = computed(() => defu(appConfig.b24ui?.prose?.codeIcon || {}, theme));
    const icon = computed(() => {
      if (props.icon) {
        return props.icon;
      }
      if (props.iconName) {
        return iconFromIconName(props.iconName);
      }
      if (!props.filename) {
        return;
      }
      const cleanFilename = props.filename.replace(/\s*\(.*\)\s*$/, "");
      const extension = cleanFilename.includes(".") && cleanFilename.split(".").pop();
      const name = cleanFilename.split("/").pop();
      const iconName = (name && icons.value[name.toLowerCase()]) ?? (extension && (icons.value[extension] ?? `TerminalIcon`));
      return iconFromIconName(iconName);
    });
    const iconFromIconName = (iconName) => {
      if (!iconName) {
        return void 0;
      }
      switch (iconName) {
        case "NodeIcon":
          return NodeIcon;
        case "TsconfigIcon":
          return TsconfigIcon;
        case "EditorconfigIcon":
          return EditorconfigIcon;
        case "EslintIcon":
          return EslintIcon;
        case "GitIcon":
          return GitIcon;
        case "DotenvIcon":
          return DotenvIcon;
        case "VscodeIcon":
          return VscodeIcon;
        case "NuxtIcon":
          return NuxtIcon;
        case "TailwindIcon":
          return TailwindIcon;
        case "VueIcon":
          return VueIcon;
        case "TypescriptIcon":
          return TypescriptIcon;
        case "JsIcon":
          return JsIcon;
        case "MarkdownIcon":
          return MarkdownIcon;
        case "PythonIcon":
          return PythonIcon;
        case "CsharpIcon":
          return CsharpIcon;
        case "AssemblyIcon":
          return AssemblyIcon;
        case "FortranIcon":
          return FortranIcon;
        case "HaskellIcon":
          return HaskellIcon;
        case "FsharpIcon":
          return FsharpIcon;
        case "KotlinIcon":
          return KotlinIcon;
        case "RustIcon":
          return RustIcon;
        case "RubyIcon":
          return RubyIcon;
        case "LispIcon":
          return LispIcon;
        case "PowershellIcon":
          return PowershellIcon;
        case "GoIcon":
          return GoIcon;
        case "GleamIcon":
          return GleamIcon;
        case "BicepIcon":
          return BicepIcon;
        case "ElixirIcon":
          return ElixirIcon;
        case "ErlangIcon":
          return ErlangIcon;
        case "ScalaIcon":
          return ScalaIcon;
        case "CppheaderIcon":
          return CppheaderIcon;
        case "ArduinoIcon":
          return ArduinoIcon;
        case "PerlIcon":
          return PerlIcon;
        case "JuliaIcon":
          return JuliaIcon;
        case "DartlangIcon":
          return DartlangIcon;
        case "FaviconIcon":
          return FaviconIcon;
        case "PnpmIcon":
          return PnpmIcon;
        case "NpmIcon":
          return NpmIcon;
        case "YarnIcon":
          return YarnIcon;
        case "BunIcon":
          return BunIcon;
        case "YamlIcon":
          return YamlIcon;
        case "TerminalIcon":
          return TerminalIcon;
      }
      return void 0;
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (icon.value) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(icon.value), _attrs, null), _parent);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@bitrix24/b24ui-nuxt/dist/runtime/components/prose/CodeIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=CodeIcon-Do2QDDDD.js.map

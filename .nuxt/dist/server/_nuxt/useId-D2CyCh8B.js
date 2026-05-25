import { k as injectConfigProviderContext } from "../server.mjs";
import * as vue from "vue";
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
export {
  useId as u
};
//# sourceMappingURL=useId-D2CyCh8B.js.map

import { k as injectConfigProviderContext } from "../server.mjs";
import { ref, computed } from "vue";
function useDirection(dir) {
  const context = injectConfigProviderContext({ dir: ref("ltr") });
  return computed(() => dir?.value || context.dir?.value || "ltr");
}
export {
  useDirection as u
};
//# sourceMappingURL=useDirection-BoRtQb0A.js.map

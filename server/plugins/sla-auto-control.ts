import { ensureSlaAutoControlScheduled } from '../reports/jobs';

export default defineNitroPlugin(() => {
  ensureSlaAutoControlScheduled();
});

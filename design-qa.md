# Design QA — AI следующий шаг

## Evidence

- Source visual truth: `C:\Users\andrey.koldayev\.codex\generated_images\01a159c4-6f75-76e1-9fa6-1cdcd18d2bc0\exec-ca08c808-15cf-41eb-a50e-ed93be2207ec.png`.
- Design-system reference: `C:\Users\andrey.koldayev\PortableGit\cc-b24\uploads\design_handoff_b2c_website\preview_screenshot.png` and its `DESIGN_SYSTEM.md`.
- Intended viewport: desktop, 1440 × 1024.
- Implementation capture: local browser opened at `http://localhost:3000/`.

## Findings

- [P1] The implementation cannot be visually compared in the target state locally.
  - Evidence: the app remains behind the CRM-context overlay and disables the `AI следующий шаг` tab because no deal/session is available at localhost.
  - Impact: the redesigned task editor, recommendation and AI sidebar cannot be captured in the same state as the source visual.
  - Fix: open the widget from a real deal card, generate a recommendation, and capture the desktop state at 1440 × 1024.

## Required fidelity surfaces

- Fonts and typography: implemented with Montserrat Alternates for display headings, Onest for body text, and Golos Text for field labels.
- Spacing and layout rhythm: implemented on the Russian Express 8px scale, with 16/20px radii and 20–24px panel padding.
- Colors and visual tokens: implemented with Russian Express red `#D63F3F`, white, `#F3F3F7`, `#EEF0F2`, and neutral dividers.
- Image quality and asset fidelity: no new raster imagery is introduced into the task workflow; the existing Russian Express mark remains app-owned.
- Copy and content: implemented in Russian with a task-first manager workflow.

## Verification

- `npx vue-tsc --noEmit`: passed.
- `npm run build`: completed far enough to generate the Nuxt build output; build artifacts were restored and removed from the worktree afterward.
- Browser console / active workflow: blocked by unavailable Bitrix24 deal context.

final result: blocked

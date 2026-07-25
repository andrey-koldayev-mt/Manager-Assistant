# Manager Assistant B24 - Project Handoff

Last updated: 2026-07-25

## Purpose

This repository contains a Nuxt/Vue Bitrix24 embedded application for the "Русский Экспресс" team. It is used inside Bitrix24 CRM placements and combines two manager workflows:

1. Reactivation call script: fills a script from the current deal, helps the manager talk through a reactivation scenario, and creates a follow-up CRM task after the call/work session is finished.
2. AI next step: analyzes deal history, communications, activities, and timelines, then proposes or creates the next CRM action for the manager.

The UI uses `@bitrix24/b24ui-nuxt` and `@bitrix24/b24icons-vue`. The main brand color is `#d63f3f`.

## Current Deployment State

The active Bitrix24 OAuth application is:

- App ID: `76ba562f-196c-445f-b3e6-ec92255f0208`
- Title: `Ассистент по скриптам`
- Active app URL: `https://app-aa3787cbb475.vibecode.bitrix24.tech`
- Placements:
  - `CALL_CARD`
  - `CRM_DEAL_DETAIL_ACTIVITY`
  - `CRM_DEAL_DETAIL_TAB`
  - `LEFT_MENU`

The active Galaxy deployment is:

- Galaxy host ID: `b2c2d7d3-1683-4ba9-ad96-0cc0be0255f8`
- Galaxy app ID: `c557c68b-fd15-427a-83a0-9e6f0238f5cb`
- Galaxy app URL: `https://app-aa3787cbb475.vibecode.bitrix24.tech`
- Expected state: `kind=GALAXY_APP`, `status=running`, `blackholeStatus=CONNECTED`, `galaxyId=b2c2d7d3-1683-4ba9-ad96-0cc0be0255f8`
- The galaxy host should show `appCount >= 1`.

The old standalone VM must not be deleted or changed without explicit approval:

- Old server ID: `25afbe82-1162-4bb8-9bd9-770e52b1ff3f`
- Old URL: `https://app-e0a07762e6a1.vibecode.bitrix24.tech`
- Last known state during migration: `status=sleeping`, `blackholeStatus=DISCONNECTED`

Note: during migration, a test deploy was briefly made to the Galaxy host URL `https://app-07eb98ed2f14.vibecode.bitrix24.tech`. The real active application is the separate `GALAXY_APP` above, not the host URL.

## Required Environment Variables

Do not commit secrets. Runtime secrets should be provided by VibeCode deploy/GitHub secrets:

- `VIBE_API_KEY`: OAuth app key used server-side to call VibeCode/Bitrix24 APIs with the gateway-injected user session.
- `VIBE_AI_MODEL`: optional; defaults to `bitrix/bitrixgpt-5.5`.
- `NODE_ENV=production` in deployment.

The server-side API expects the request to contain `X-Vibe-Authorization` from the VibeCode Gateway, or a normal `Authorization` header during token-based smoke tests.

## Tech Stack

- Nuxt `^4.4.6`
- Vue `^3.5.34`
- Node `>=22.12.0` for local build
- Bitrix24 UI Kit: `@bitrix24/b24ui-nuxt`
- Bitrix24 icons: `@bitrix24/b24icons-vue`
- Archive helper: `adm-zip`

Useful commands:

```bash
npm install
npm run dev
npm run build
npm run archive
npm run deploy:vibecode
```

The current `deploy.js` is designed for standalone Black Hole VMs and installs Node 22 with `apt`. For Galaxy apps, prefer deploying a prebuilt `.output` archive with `runtime: "node20"` and `start: "cd /opt/app && PORT=3000 node .output/server/index.mjs"`, or update `deploy.js` before relying on it for Galaxy.

## Important Files

- `app.vue`: main application shell, placement detection, deal ID extraction, reactivation script UI, funnel gating, call/session finish behavior, and follow-up task creation flow.
- `components/AiNextStepPanel.vue`: UI for AI next-step preview/live creation.
- `server/utils/b24.ts`: shared VibeCode/Bitrix24 helpers, authorization extraction, deal field parsing, trip date formatting.
- `server/api/b24/load-deal-context.get.ts`: loads deal, responsible user, contact, category, and travel fields for script substitution.
- `server/api/b24/create-call-activity.post.ts`: creates the follow-up CRM task after finishing the call/work session.
- `server/api/b24/analyze-next-step.post.ts`: loads deal context/history, calls VibeCode AI, validates recommendation, creates CRM activity/task and timeline log.
- `server/domain/deal-analysis.ts`: AI recommendation validation, context normalization, fallback future deadline logic.
- `server/domain/next-step-prompt.ts`: AI system prompt.
- `server/api/debug/runtime.get.ts`: runtime diagnostics; useful to verify `VIBE_API_KEY` and gateway auth.
- `server/api/debug/client-context.post.ts`: browser-side diagnostics for placement/SKD context.
- `bitrix24/`: source of the earlier separate Bitrix24 embedding app that was integrated conceptually into the Nuxt application. This folder is currently untracked in git.

## Placement and Deal Context Behavior

The app is embedded in Bitrix24 placements. Deal ID detection is intentionally defensive:

- Query params: `placement_options`, `PLACEMENT_OPTIONS`
- URL patterns like `/crm/deal/details/{id}/`
- `BX24.placement.info()` after loading `https://api.bitrix24.com/api/v1/`

After the deal ID is found, the client calls:

```text
GET /api/b24/load-deal-context?dealId={id}
```

This endpoint uses the gateway session and `VIBE_API_KEY` to load:

- responsible manager name
- contact/client name
- deal category/funnel
- trip destination from custom field `UF_CRM_1604438175`
- tour start date from custom field `UF_CRM_1604438397`
- tour end date from custom field `UF_CRM_1621261388273`

The app shows a blocking loader overlay while deal data is loading, to prevent managers from interacting with stale/mock values.

## Workflow Gating

The top mode switch has funnel-based availability:

- `Скрипт по реактивации` is enabled only when the deal category name includes `реактивац`.
- `AI следующий шаг` is enabled only when the deal category name includes `качественный лид`.

If a mode is unavailable, the app should prevent switching and explain via toast.

## Reactivation Workflow

The left panel fills:

- manager name
- client name
- previous trip destination
- previous trip phrase, e.g. `в сентябре прошлого года`
- future travel context
- next contact date
- CRM note

The "Не покупал" path is intentionally disabled because employees should not use it in the current scenario.

When the user presses `Завершить звонок` in `CALL_CARD`, or `Завершить` in non-call placements, the app creates a follow-up CRM task through:

```text
POST /api/b24/create-call-activity
```

The task is linked to the deal with `UF_CRM_TASK: ["D_{dealId}"]`.

## AI Next Step Workflow

`components/AiNextStepPanel.vue` calls:

```text
POST /api/b24/analyze-next-step
```

Modes:

- `preview`: returns a recommendation without creating CRM entities.
- `live`: creates the CRM action from an existing recommendation.

The server:

- loads the deal
- loads timelines, activities, and CRM chat messages where available
- detects existing native Bitrix AI recommendations
- calls VibeCode Chat Completions with model `bitrix/bitrixgpt-5.5` by default
- validates that the deadline is in the future
- creates a CRM activity, with task fallback
- tries to create a timeline log

## Known Technical Debt / Watch Points

- Several Russian strings in server-side TS/Vue files currently appear as mojibake, e.g. `Р...`. This should be fixed with a careful UTF-8 pass, but avoid mass rewrites unless you can verify runtime behavior afterward.
- `.env.example` is still mostly the old AI Studio/Gemini template and should be updated to reflect VibeCode variables.
- `README.md` is still the original AI Studio template and does not describe the real project.
- `deploy.js` is not Galaxy-native. It was written for standalone VMs and may fail or be inefficient for Galaxy deployments.
- `package-lock.json` may show line-ending noise in some Windows git contexts. Check `git diff` before assuming meaningful dependency changes.
- Direct browser access to Black Hole URLs may show the VibeCode access page when `accessPolicy=OWNER_ONLY`. Use an access token for smoke tests or open through Bitrix24 placement.

## Smoke Test Checklist

1. Verify app config:

```text
GET https://vibecode.bitrix24.tech/v1/apps
```

Expected `appUrl`: `https://app-aa3787cbb475.vibecode.bitrix24.tech`.

2. Verify Galaxy app:

```text
GET https://vibecode.bitrix24.tech/v1/infra/servers/c557c68b-fd15-427a-83a0-9e6f0238f5cb
```

Expected `kind=GALAXY_APP`, `status=running`, `blackholeStatus=CONNECTED`.

3. Mint a short-lived access token for the Galaxy app:

```text
POST https://vibecode.bitrix24.tech/v1/infra/servers/c557c68b-fd15-427a-83a0-9e6f0238f5cb/access-tokens
Body: { "mode": "api-bearer", "ttlSeconds": 300 }
```

4. Check runtime:

```text
GET https://app-aa3787cbb475.vibecode.bitrix24.tech/api/debug/runtime
Authorization: Bearer <token>
```

Expected:

- `success: true`
- `data.hasApiKey: true`
- `data.hasVibeAuthorization: true`

The `me` sub-call may return `INVALID_SESSION` for smoke-test access tokens; that is expected outside a real Bitrix24 placement session.

5. Open from a real Bitrix24 deal placement and check that:

- the deal ID appears in the header
- the loader disappears after context load
- fields are filled from the current deal, not mocks
- the correct mode is enabled for the current funnel
- follow-up task creation works after finish

## Development Notes for the Next AI

- Do not hardcode or commit API keys.
- Do not touch or delete the old standalone VM without explicit user approval.
- Prefer VibeCode `/v1/batch` when adding multiple Bitrix24 API calls.
- When checking current VibeCode behavior, read `GET /v1/me`; contracts have changed during the project.
- If using VibeCode MCP, check for updates. A previous session reported `@bitrix24/mcp-vibecode-api` `2.2.0` with update `2.2.1` available.
- Before changing UI, follow the Bitrix24 UI Kit style already used in Nuxt and keep the brand color `#d63f3f`.

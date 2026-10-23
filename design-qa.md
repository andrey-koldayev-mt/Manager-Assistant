# Design QA — Навигатор возражений

## Evidence

- Source visual truth: `C:\Users\andrey.koldayev\.codex\generated_images\01a159c4-6f75-76e1-9fa6-1cdcd18d2bc0\exec-3ef06ccd-1662-46b2-8330-c72faca922fb.png`.
- Implementation URL: `http://localhost:3000/`.
- Intended viewport and state: desktop 1440 × 1024, selected objection «Дорого».
- Browser evidence: local app opens, but the CRM context overlay disables the «Навигатор возражений» tab; no same-state implementation screenshot can be captured.

## Findings

- [P1] Browser comparison is blocked by the local CRM context gate.
  - Location: app shell before the Navigator tab.
  - Evidence: in the local browser the overlay says «Контекст сделки не найден», and the Navigator control is disabled.
  - Impact: the selected static knowledge-base state cannot be viewed or compared with the chosen visual target in-browser.
  - Fix: open the deployed widget from a Bitrix24 deal card and capture the Navigator at 1440 × 1024 with «Дорого» selected.

## Required fidelity surfaces

- Fonts and typography: display headings use the existing Russian Express display-font stack; body and label sizing follow the existing application styles.
- Spacing and layout rhythm: recreated as a three-column desktop layout with 16px gaps, 16px panels and compact 10px catalogue controls; it collapses to two and then one column.
- Colors and visual tokens: uses Russian Express red, its soft red treatment, white cards, neutral borders and the existing brand action class.
- Image quality and asset fidelity: the selected UI contains no product imagery that needs recreation; the existing app-owned brand mark remains unchanged.
- Copy and content: the screen contains static Russian knowledge-base copy, not deal signals, AI output or chat.

## Verification

- `npx vue-tsc --noEmit`: passed.
- Primary interaction covered in code: search filters the catalog, selecting an objection changes the response, and «Скопировать ответ» copies an editable script.
- Browser console / selected-state visual comparison: blocked by unavailable Bitrix24 deal context.

**Implementation Checklist**

- Open the deployed widget from any deal card after deploy.
- Verify the selected answer, search, category selection and copy control at desktop and mobile widths.

final result: blocked

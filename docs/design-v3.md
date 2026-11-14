# Natural-history field guide redesign

The owner delegated routine theme decisions and authorized publication to the existing GitHub Pages site. This redesign changes presentation, not the seven source-backed records or filter behavior.

## Direction
A warm-paper field journal with olive ink, fine rules, large editorial typography and specimen plates. Self-authored vector silhouettes make the collection visual without introducing photography, tracking, external assets, species-identification claims or dependencies. A prominent illustration disclaimer remains visible. The mystery archive is reference-only; its evidence-room design is not copied.

## Alternatives considered
A dashboard recolor would retain the generic template. A photo-led wildlife magazine would need verified licensed assets and could imply image-based identification. The chosen specimen/editorial approach fits the existing small, careful collection and static architecture.

## Implementation plan
1. Add regression checks for all seven records, original source/caveat text, relative navigation, noindex, filters, empty/reset behavior, and new theme hooks. Observe the new-theme assertions fail before implementation.
2. Add versioned CSS and original SVG plates; adapt the homepage and all seven detail pages without editing data or app/filter modules.
3. Run static, semantic and functional regression checks. Request public browser screenshot QA, reporting limitations separately.
4. Re-read remote main, publish a single atomic tree/commit with an expected-head lease, then verify the remote SHA and public Pages HTML/CSS/details.

## Accessibility and mobile
Keep the skip link, semantic headings, labels, live result count, keyboard focus, hidden-card enforcement and readable source links. Stack hero and featured record on phones; avoid fixed content widths; honor reduced motion. Graphics are decorative and explicitly not identification material.

# Design QA — 小金团高保真循环展示

- Source visual truth: `C:\Users\15439\Downloads\Cool Cat's _ Brand identity _ Coffee Shop.gif`
- Source dimensions: 1400 × 1019 px, 86 frames
- Figma source: file `A6RAzvq42WCT95DB24gDqW`, node `893:1152` (14 transparent PNG screens) and node `893:1151` (device frame)
- Implementation: `http://127.0.0.1:4173/work/xiaojintuan#high-fidelity-showcase`
- Implementation screenshot evidence: Codex in-app Browser desktop capture and mobile capture from this task; combined comparison at `http://127.0.0.1:4173/qa-compare.html`
- Desktop viewport: 1264 × 710 CSS px, device scale factor 1
- Mobile viewport: 390 × 844 CSS px, device scale factor 1
- State: autoplay running; fixed central phone frame; screen strip moving right-to-left
- Density normalization: source and implementation were fitted into equal-width panes with `object-fit: contain`; comparison focused on composition, scale, spacing, edge crop, central framing and elevation rather than source pixel density.

**Full-view comparison evidence**

- Both treatments use a quiet warm gray field, a horizontal row of evenly spaced screens, natural edge cropping and a fixed central device frame.
- The implementation preserves the reference's large breathing room above and below the interfaces and keeps the central device as the strongest depth layer.
- The implementation uses the complete 14-screen Figma set in one seamless repeated track.

**Focused region comparison evidence**

- Central device: the exported Figma phone frame aligns with the visible screen bounds and preserves the Dynamic Island, rounded bezel and transparent interior.
- Elevation: transparent source shadows remain intact; additional drop shadows strengthen the central device and retain softer elevation on side screens.
- Transition: the moving strip passes behind the stationary device frame, including the reference-like split-screen transition while one screen gives way to the next.
- Mobile: the central phone remains readable, adjacent screens provide context, and the section does not create horizontal page overflow.

**Findings**

- No actionable P0, P1 or P2 differences remain.
- Fonts and typography: the section contains no added display copy, matching the reference's image-led presentation.
- Spacing and layout rhythm: central alignment, card spacing, vertical padding and edge crops match the reference structure across desktop and mobile.
- Colors and visual tokens: the section uses the site's existing `--muted` warm gray and maintains the yellow/cream product palette.
- Image quality and asset fidelity: all visible screens and the device frame are direct Figma exports with transparent backgrounds; no placeholder or reconstructed artwork is used.
- Copy and content: all 14 named product screens are represented in the loop.

**Comparison history**

- Earlier P2: pausing on hover could freeze the center on a split transition. Fix: removed hover pause while retaining offscreen pausing and reduced-motion support. Post-fix evidence: consecutive browser captures showed the screen strip continuing through later product screens.

**Implementation checklist**

- [x] Insert directly after the Xiaojintuan hero and before the first project overview board.
- [x] Include all 14 high-fidelity PNG screens in the loop.
- [x] Use the site's existing warm gray background.
- [x] Use the exported transparent phone frame and layered shadows.
- [x] Verify desktop, mobile, reduced-motion fallback and console output.

**Follow-up polish**

- None required for this pass.

final result: passed

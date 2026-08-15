# Changelog

All notable changes to **Le Choc des Watts** (pump foil physics, made friendly) —
live at [simulator.foil-house.com](https://simulator.foil-house.com/).

The project follows [Keep a Changelog](https://keepachangelog.com/) conventions.
It is a set of single-file, dependency-free, bilingual (FR/EN) educational pages.

## 2026-08 — Physics refinement (community feedback)

Sparked by feedback from **Tom Lolies** (paraglider/kite designer) and repeated
field input from Paul (PoloFoil). All numbers are traceable — links in the
Expert-mode "Method & assumptions" note.

### The metric that matters
- **Wh/km — energy per kilometre — is the backbone of every comparison.** Because
  wings cruise at different speeds, comparing raw watts is unfair; Wh/km is the
  only honest scale. It's shown on every wing card and drives the drag breakdown.

### Added
- **Expert slide — 🌀 Cadence & Strouhal**: models the unsteady-propulsion blind
  spot of the steady model. Why raising cadence helps (thrust ∝ (cadence×amplitude)²,
  the "fish tail" analogy), how to reach the useful regime (St ≈ 0.3, only really
  approached at low speed = "survival pumping"), calibrated on measured field
  kinematics (~100 pumps/min, ~20 cm amplitude → St ≈ 0.07). Sourced (Garrick 1936,
  Anderson 1998, Taylor 2003).
- **Insight callout — "fly high on the mast / thin ≠ efficient"**: at 18 km/h,
  friction (wing + mast + stab + fuselage) is ~85% of drag, induced only ~15% — the
  opposite of a slow-flying wing. A thin wing pays for being forced to fly fast; the
  real endurance combo is high aspect ratio **+ able to fly slowly + high on the mast**.
- **New wing preset**: Takoon Pump (1500 / 1700 / 1900).

### Changed (physics)
- **Span efficiency `e` = 0.91** (was 1.0) — realistic for a high-CL pump foil
  ([Oswald efficiency](https://en.wikipedia.org/wiki/Oswald_efficiency_number)).
- **Trim drag added** to the breakdown, with **Cm0 tied to each wing's camber**
  (thin blade ≈ −0.06 → thick school wing ≈ −0.12), from real XFOIL polars
  ([E817](http://airfoiltools.com/polar/details?polar=xf-e817-il-200000), NACA 4412/6412).
  It stays modest (~1–2.5%).
- **Cavitation threshold** raised ~30 → ~45 km/h (subcavitating sections).
- **Mast counted ~55% immersed** — you fly high (~15–20 cm of mast in the water),
  which halves the mast's share; the fast-flying thin wings benefit most.
- **Minimum flying speed = stall +30%** (you don't pump at the edge of stall) —
  a 1600 no longer "flies" at an unrealistic 12 km/h.
- **F-One Jam → medium profile** (~13–14%, not thick).
- **Weight scaling** clarified: at natural cruise, power ∝ **weight^1.5**.
- **Harmonised** e + trim drag across all three pages (a wing now drags the same
  everywhere).

### Fixed
- Trim-drag figure corrected (was overstated ~4–5%, actually ~1–2.5%).
- Default wing selection made robust to catalogue reindexing.
- Citation and community links made readable on the muted note backgrounds.

### Thanks
- **Tom Lolies** — the unsteady-aero feedback and the span-efficiency / camber sanity checks.
- Paul (PoloFoil) — field calibration throughout (mast immersion, Jam thickness,
  min flight speed, pump cadence & amplitude).

## 2026-08 — Launch (three pages)

### Added
- **New page — 🎓 Learning it right** (`debutant.html`): the beginner-focused
  companion. Safety-first section (helmet, impact vest, booties, deep/clear spot,
  never alone, learn to fall), dock start explained with honest expectations
  (5–15 sessions before holding 30 s), a "what is a foil?" 5-part anatomy diagram,
  and a weight-based gear recommender calibrated on real school-range size charts.
- **New page — 🚀 The Race for km/h** (`vitesse.html`): a top-speed simulator
  (wing area, profile, stab, mast, straps, sprint watts). Answers "what makes a
  foil fast?" — calibrated on real race speeds (30–38 km/h) and real race blades
  (AR ~10, ~11% thickness). Straps modelled as the game-changer (+20% efficiency).
- **Expert slide — 🌀 Cadence & Strouhal**: models the unsteady-propulsion blind
  spot of the steady model. Sliders for cadence, foil amplitude and speed compute
  the Strouhal number and an illustrative propulsive-efficiency curve. Anchored on
  measured field kinematics (~100 pumps/min, ~20 cm peak-to-peak → St ≈ 0.07,
  well below the useful St ≈ 0.3 regime).
- **Expert slide — 🔧 Tuning**: the free watts — rake shim, mast track position,
  and foot stance, with the physics of positive rake for long distance.
- **Custom domain** `simulator.foil-house.com`, plus a FoilHouse teaser page.
- **Unified navigation**: page tabs with an active-page indicator, settings on the
  right, external links folded into a "Links" menu, and a "made by PoloFoil & Piouz"
  credit.
- **Per-page Open Graph images and favicons** so each page previews and tabs
  distinctly when shared.
- **Regression test suite** (`tests/`, native `node:test`, 20 tests) that extracts
  the physics engines *from the deployed HTML* and pins every displayed figure —
  so the model and the copy cannot silently drift apart.

### Changed
- **Vitesse recalibrated** to real race conditions: rider air drag added (CdA),
  mast counted ~55% immersed at Vmax, mid-range stab/fuselage drag coefficients,
  and realistic defaults (900 cm² · 100 cm · ~11% profile). Fitness scale expanded
  from 4 to 7 levels.
- **Cavitation threshold** raised from ~30 to ~45 km/h (subcavitating sections stay
  clean to ~45 knots) — the French champion's 37 km/h stays under the threshold.
- **Weight scaling clarified**: induced drag rises as weight² *at fixed speed*, but
  since a heavier rider naturally cruises faster (v ∝ √weight), required power only
  rises as **weight^1.5**.
- Bilingual page titles now read "… in pump foil".

### Fixed
- **Vmax solver now respects stall**: no predicted flight below the stall speed;
  impossible setups report "it doesn't fly" instead of a nonsensical window.
- Field-feedback copy fixes: board sizes 80–110 cm (typically ~90), "matos" instead
  of the jargon "setup", size-down steps of ~150 cm², stab kept long, real pump
  scooter (foil with a handlebar).
- Internal links point explicitly to `long-distance.html` (the page is served under
  both `index.html` and `long-distance.html`, with a canonical link).

### Physics honesty & docs
- **"For the aerodynamicists" note** (Method & assumptions): documents that trim drag
  is not broken out (neutral trim assumed), and that all pumping unsteadiness is
  folded into the empirical efficiency η rather than resolved — reduced frequency
  k ≈ 0.13 at the measured cadence, Theodorsen C(k) ≈ 0.80 (~20% lift deficiency).
- **Verified citations added**: [Garrick 1936, NACA 567](https://digital.library.unt.edu/ark:/67531/metadc66225/);
  [Anderson et al. 1998, *JFM* 360:41–72](https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/abs/oscillating-foils-of-high-propulsive-efficiency/22E5CD028D92318AFC88ED104E55786B);
  [Taylor, Nudds & Thomas 2003, *Nature*](https://www.nature.com/articles/nature02000).
- Span efficiency noted as realistic (`e ≈ 0.90–0.95`; the model's `e = 1` is
  slightly optimistic).

### Thanks
- **Tom Lolies** (paraglider/kite designer) for the unsteady-aerodynamics feedback
  that led to the Cadence & Strouhal slide.
- A sharp follower for the weight-scaling correction (mass^1.5).
- Field feedback throughout from Paul (PoloFoil).

---

*Model based on the [foilphysics](https://lsegessemann.github.io/foilphysics/) steady-flight
engine by [@lsegessemann](https://github.com/lsegessemann). Estimated orders of magnitude
(± ~15%), not manufacturer values.*

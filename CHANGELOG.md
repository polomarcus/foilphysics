# Changelog

All notable changes to **Le Choc des Watts** (pump foil physics, made friendly) —
live at [simulator.foil-house.com](https://simulator.foil-house.com/).

The project follows [Keep a Changelog](https://keepachangelog.com/) conventions.
It is a set of single-file, dependency-free, bilingual (FR/EN) educational pages.

## 2026-08

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

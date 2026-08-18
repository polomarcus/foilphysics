# ⚡ Le Choc des Watts — pump foil physics, made friendly

**👉 [simulator.foil-house.com](https://simulator.foil-house.com/)** · [English version](https://simulator.foil-house.com/?lang=en)

![Le Choc des Watts](og.png)

Four educational, single-file pages that answer the questions every pump foiler asks —
each one interactive, bilingual FR/EN, and honest about its numbers.

## The three pages

| Page | Question | What you get |
|---|---|---|
| **[⚡ Le Choc des Watts](https://simulator.foil-house.com/)** (home) | *How do I fly **far**?* | Compare two real wings (~30 presets) — watts, **Wh/km**, power-vs-speed chart, drag breakdown, sensitivity analysis. The secret: wide span + light weight. |
| **[🚀 La Course aux km/h](https://simulator.foil-house.com/vitesse.html)** | *How do I fly **fast**?* | Top-speed simulator (wing, profile, stab, mast, straps, your sprint watts), calibrated on real race speeds (30-38 km/h) and real race blades (AR ~10, ~11% thickness). Spoiler: the stab matters, and straps are the game changer. |
| **[🎓 Bien débuter](https://simulator.foil-house.com/debutant.html)** | *How do I **learn**?* | Safety first, dock start explained with honest expectations (5-15 sessions), and a weight-based setup recommender calibrated on school-range size charts — big thick wing, big stab, short mast: the setup that forgives. |
| **[🌊 Le Carve](https://simulator.foil-house.com/carve.html)** | *How do I **turn tight**?* | Maneuverability in the waves: roll inertia ∝ span², so a short span flips rail-to-rail fast. Compare wings (Axis Surge, Alpine RSX Carve…) on agility, drive and pivot. The price: short span kills glide. |

## The physics model (honesty first)

⚠️ **Estimated figures, not measurements** — wing profiles are kept secret by brands; the tool
gives **educational orders of magnitude** (± ~15%), not manufacturer values.

Steady flight (lift = weight), based on the
**[foilphysics](https://lsegessemann.github.io/foilphysics/)** model:

- induced drag `D_ind = weight² / (½·ρ·v²·π·span²·e)` — *depends only on span and speed* (Prandtl, 1918);
- friction drag `D_fric = ½·ρ·v² · (area·C_D0 + mast + fuselage + stab)`;
- rider power `P = (D_ind + D_fric) · v / η_pump`, with an **estimated** pumping efficiency
  that grows with aspect ratio (and straps: pulling on the upstroke ≈ +20%);
- each page documents its own constants in its footer: the home page uses conservative
  cruise-context values, the speed page uses race-calibrated ones (rider air drag included,
  mast partly out of the water at Vmax), the beginner page adds a technique penalty
  (~30% wasted watts at first — the #1 lever, and it only costs time).

## Under the hood

Single HTML files, zero dependencies. Bilingual FR/EN with a shared language preference,
shareable anchor links, colorblind-validated palettes, RGAA accessibility groundwork
(landmarks, labels, visible focus, `prefers-reduced-motion`).

A native `node:test` regression suite (20 tests) extracts the physics engines **from the
deployed HTML itself** and pins every displayed number — calibration anchors included —
so the model and the copy can't silently drift apart.

## Credits

- ⚙️ Physics engine: **[foilphysics](https://lsegessemann.github.io/foilphysics/)** by
  [@lsegessemann](https://github.com/lsegessemann) — the original pumping simulator is
  preserved here: [pump-simulator.html](https://simulator.foil-house.com/pump-simulator.html)
- ⚡ Powered by [Piouz](https://piouz.org/) — their water-entry ladders are ideal for learning
- 📸 [PoloFoil](https://www.instagram.com/polofoil/)

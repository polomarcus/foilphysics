# ⚡ Le Choc des Watts — pump foil wing comparator

**👉 [polomarcus.github.io/foilphysics](https://polomarcus.github.io/foilphysics/?lang=en)** · [Version française](https://polomarcus.github.io/foilphysics/)

![Le Choc des Watts](og.png)

An educational tool to understand **how to save energy in pump foiling**: why a **wide-span** wing
lets you fly far longer for less effort, where a classic wing puts you in the red within minutes.

> **The secret: wide span + light weight.** Everything else (profile, mast, stab…) plays out in single digits.

## What you can do

- **Compare two real wings** (~30 presets: Axis Fireball, F-One Jam, GONG Ultra Trail, Takoon,
  Sabfoil Leviathan, Ketos, Alpine Foil…) at their recommended cruise — watts, **Wh/km**,
  interactive power-vs-speed chart;
- Set **your profile** (weight, fitness) and tune the whole rig in **Expert** mode
  (span, area, mast, fuselage, stab, speed);
- Understand the physics **with zero prerequisites**: **Simple** mode as full-screen slides,
  animated diagrams, the law `wasted effort = 1/span²` explained so a 10-year-old gets it;
- Dig deeper: drag breakdown source by source, sensitivity analysis (weight vs span),
  turning, mental load, full formulas.

## The physics model (honesty first)

⚠️ **Estimated figures, not measurements** — wing profiles are kept secret by brands; the tool
gives **educational orders of magnitude** (± ~15%), not manufacturer values.

Steady flight (lift = weight), based on the
**[foilphysics](https://lsegessemann.github.io/foilphysics/)** model:

- induced drag `D_ind = weight² / (½·ρ·v²·π·span²·e)` — *depends only on span and speed* (Prandtl, 1918);
- friction drag `D_fric = ½·ρ·v² · (area·C_D0 + mast + fuselage + stab)`;
- rider power `P = (D_ind + D_fric) · v / η_pump`, with an **estimated** pumping efficiency
  that grows with aspect ratio and mast stiffness;
- recommended cruise is bounded (≥ stall +15%, ≥ 11 km/h); flight time via an adjustable
  critical-power model matched to your fitness.

## Under the hood

A **single HTML file** (~160 KB), zero dependencies. Bilingual FR/EN, shareable anchor links
(`?mode=expert&lang=en#sensibilite`), colorblind-validated palettes, RGAA accessibility
groundwork (landmarks, labels, visible focus, `prefers-reduced-motion`).

## Credits

- ⚙️ Physics engine: **[foilphysics](https://lsegessemann.github.io/foilphysics/)** by
  [@lsegessemann](https://github.com/lsegessemann) — the original pumping simulator is
  preserved here: [pump-simulator.html](https://polomarcus.github.io/foilphysics/pump-simulator.html)
- ⚡ Powered by [Piouz](https://piouz.org/)
- 📸 [PoloFoil](https://www.instagram.com/polofoil/)

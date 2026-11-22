// 👩‍🔬 la Prof. Foil en 3D (retour Paul : « j'ai envie que le Prof. Foil soit une femme », « elle doit nous regarder dans les yeux »)
// Figurine façon jouet : grosse tête, rendu toon + contour noir, cheveux blancs en chignon avec une frange, lunettes rondes,
// cils, rouge à lèvres, boucles d'oreilles dorées, blouse blanche sur chemise turquoise, médaillon foil en or.
// De face, caméra dans l'axe : elle regarde le joueur. Idle : respire, cligne des yeux, hoche la tête.
import * as THREE from 'three';

export function mountProf(bigEl, miniEl, opt = {}){
  let renderer;
  try{ renderer = new THREE.WebGLRenderer({antialias: true, alpha: true, preserveDrawingBuffer: true}); }catch(e){ return false; }
  const W = 330, H = 330, RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  renderer.setPixelRatio(Math.min(opt.pr || 2, devicePixelRatio || 1)); renderer.setSize(W, H); renderer.outputColorSpace = THREE.SRGBColorSpace;   // 📱 pixel ratio plus léger sur téléphone
  const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(30, W/H, 0.1, 50);
  cam.position.set(0, 0.7, 7.6); cam.lookAt(0, 0.35, 0);   // dans l'axe : elle nous regarde dans les yeux

  // matériaux toon (3 tons) + contours
  const ramp = new THREE.DataTexture(new Uint8Array([90, 90, 90, 255, 185, 185, 185, 255, 255, 255, 255, 255]), 3, 1);
  ramp.minFilter = ramp.magFilter = THREE.NearestFilter; ramp.needsUpdate = true;
  const toon = (c, o = {}) => new THREE.MeshToonMaterial(Object.assign({color: c, gradientMap: ramp}, o));
  const M = {skin: toon('#f2b48c'), nose: toon('#f0a888'), lips: toon('#db2777'), white: toon('#f8fafc'), hair: toon('#f1f5f9'), dark: toon('#111827'),
    coat: toon('#f8fafc'), shirt: toon('#14b8a6'), gold: toon('#fbbf24', {emissive: '#7c4a03', emissiveIntensity: .25}), metal: toon('#64748b'),
    wing: toon('#0ea5e9'), cheek: new THREE.MeshBasicMaterial({color: '#fb7185', transparent: true, opacity: .35}), mouth: toon('#7f1d1d'),
    lens: new THREE.MeshBasicMaterial({color: '#e0f2fe', transparent: true, opacity: .28})};
  const lineMat = new THREE.MeshBasicMaterial({color: '#0b1222', side: THREE.BackSide});
  const outlined = (mesh, k = 1.06) => { const o = new THREE.Mesh(mesh.geometry, lineMat); o.scale.setScalar(k); mesh.add(o); return mesh; };
  const sph = (r, m, seg = 32) => new THREE.Mesh(new THREE.SphereGeometry(r, seg, seg/2), m);

  const prof = new THREE.Group(); scene.add(prof); prof.rotation.y = 0;
  const head = new THREE.Group(); head.position.set(0, 0.95, 0); prof.add(head);

  // tête + oreilles
  const skull = outlined(sph(1, M.skin, 48)); skull.scale.set(1, 1.02, .95); head.add(skull);
  [-1, 1].forEach(s => { const e = outlined(sph(.2, M.skin), 1.12); e.position.set(s*.98, -.02, 0); e.scale.set(.6, 1, .8); head.add(e); });
  // chevelure blanche : calotte qui laisse le front libre, volumes sur les côtés, chignon, frange balayée
  { const cap = outlined(new THREE.Mesh(new THREE.SphereGeometry(1.07, 48, 24, 0, Math.PI*2, 0, Math.PI*.5), M.hair), 1.05); cap.rotation.x = -.5; cap.position.set(0, .05, -.04); head.add(cap);
    [-1, 1].forEach(sd => { const side = outlined(sph(.42, M.hair), 1.08); side.position.set(sd*.86, .18, -.25); side.scale.set(.75, 1.25, 1); head.add(side);
      const low = outlined(sph(.3, M.hair), 1.08); low.position.set(sd*.8, -.32, -.38); low.scale.set(.8, 1.1, 1); head.add(low); });
    const bun = outlined(sph(.42, M.hair), 1.07); bun.position.set(0, 1.02, -.42); head.add(bun);
    const band = new THREE.Mesh(new THREE.TorusGeometry(.3, .05, 10, 32), M.shirt); band.position.set(0, .86, -.3); band.rotation.x = Math.PI/2 - .55; head.add(band);
    const fringe = outlined(sph(.5, M.hair), 1.06); fringe.position.set(-.28, .74, .52); fringe.scale.set(1.15, .42, .55); fringe.rotation.z = .3; head.add(fringe);
    const fr2 = outlined(sph(.36, M.hair), 1.06); fr2.position.set(.34, .78, .5); fr2.scale.set(1, .38, .55); fr2.rotation.z = -.35; head.add(fr2); }
  // boucles d'oreilles : petites gouttes dorées
  [-1, 1].forEach(sd => { const ear = outlined(sph(.075, M.gold), 1.15); ear.position.set(sd*1.0, -.3, .08); ear.scale.set(1, 1.3, 1); head.add(ear); });

  // yeux (ovales noirs + reflet), paupières pour cligner
  const eyes = [], brows = []; let mouthG = null;
  [-1, 1].forEach(s => { const g = new THREE.Group(); g.position.set(s*.34, .14, .9); head.add(g);
    const e = sph(.11, M.dark); e.scale.set(1, 1.35, .6); g.add(e);
    const h = sph(.035, M.white); h.position.set(.035, .06, .06); g.add(h); eyes.push(g);
    // sourcils blancs broussailleux, levés (bienveillant)
    const b = outlined(new THREE.Mesh(new THREE.CapsuleGeometry(.035, .26, 6, 12), M.metal), 1.12); b.rotation.z = Math.PI/2 - s*.22; b.position.set(s*.35, .45, .88); head.add(b); brows.push([b, s]);
    [0, 1, 2].forEach(i => { const l = new THREE.Mesh(new THREE.CapsuleGeometry(.014, .07, 4, 6), M.dark); l.position.set(s*(.07 + .045*i), .14 + .02*i, .07); l.rotation.z = -s*(.6 + .35*i); g.add(l); }); });   // cils
  // lunettes rondes
  [-1, 1].forEach(s => { const r = new THREE.Mesh(new THREE.TorusGeometry(.22, .028, 10, 40), M.dark); r.position.set(s*.34, .1, .98); head.add(r);
    const l = new THREE.Mesh(new THREE.CircleGeometry(.21, 32), M.lens); l.position.set(s*.34, .1, .975); head.add(l);
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(.02, .02, .5, 8), M.dark); arm.rotation.x = Math.PI/2; arm.position.set(s*.6, .12, .78); arm.rotation.y = s*.5; head.add(arm); });
  { const br = new THREE.Mesh(new THREE.TorusGeometry(.1, .024, 8, 20, Math.PI), M.dark); br.position.set(0, .14, 1.0); head.add(br); }
  // nez rond, joues
  { const n = outlined(sph(.12, M.nose), 1.1); n.position.set(0, -.08, 1.0); n.scale.set(.9, .9, 1); head.add(n); }
  [-1, 1].forEach(s => { const c = sph(.17, M.cheek); c.position.set(s*.55, -.2, .8); c.scale.set(1, .6, .3); head.add(c); });
  // grand sourire ouvert : demi-disque bordeaux, rangée de dents en haut, langue rose
  { const mouth = mouthG = new THREE.Group(); mouth.position.set(0, -.36, .955); mouth.rotation.x = -.3; head.add(mouth);
    const lip = new THREE.Mesh(new THREE.CircleGeometry(.29, 40, Math.PI, Math.PI), new THREE.MeshBasicMaterial({color: '#db2777'})); lip.position.z = -.002; mouth.add(lip);
    mouth.add(new THREE.Mesh(new THREE.CircleGeometry(.24, 40, Math.PI, Math.PI), new THREE.MeshBasicMaterial({color: '#7f1d1d'})));
    const teeth = new THREE.Mesh(new THREE.PlaneGeometry(.42, .06), new THREE.MeshBasicMaterial({color: '#ffffff'})); teeth.position.set(0, -.035, .002); mouth.add(teeth);
    const tongue = new THREE.Mesh(new THREE.CircleGeometry(.1, 24, 0, Math.PI), new THREE.MeshBasicMaterial({color: '#f87171'})); tongue.position.set(0, -.22, .002); mouth.add(tongue); }

  // corps : blouse blanche, chemise turquoise en V, épaules
  const body = new THREE.Group(); body.position.set(0, -.6, -.1); prof.add(body);
  { const coat = outlined(new THREE.Mesh(new THREE.CylinderGeometry(.62, 1.05, 1.3, 32), M.coat), 1.04); coat.position.y = -.35; body.add(coat);
    [-1, 1].forEach(s => { const sh = outlined(sph(.36, M.coat), 1.08); sh.position.set(s*.66, .12, 0); body.add(sh); });
    const v = new THREE.Mesh(new THREE.ConeGeometry(.3, .75, 3), M.shirt); v.rotation.set(Math.PI, 0, 0); v.position.set(0, .03, .62); v.scale.set(1, 1, .25); body.add(v);
  }
  // silhouette d'aile avant vue de dessus : bord d'attaque presque droit, bord de fuite en croissant, saumons fins
  const wingGeo = (span, chord, depth) => { const h = span/2, sh = new THREE.Shape();
    sh.moveTo(-h, chord*.05); sh.bezierCurveTo(-h*.7, chord*1.1, h*.7, chord*1.1, h, chord*.05); sh.bezierCurveTo(h*.6, -chord*.12, -h*.6, -chord*.12, -h, chord*.05);
    const g = new THREE.ExtrudeGeometry(sh, {depth, bevelEnabled: true, bevelThickness: depth*.6, bevelSize: depth*.5, bevelSegments: 3, curveSegments: 40}); g.center(); return g; };
  // collier : cordon doré + médaillon en or, foil gravé (aile + mât + fuselage) en bleu nuit
  { const cord = new THREE.Mesh(new THREE.TorusGeometry(.5, .02, 8, 48, Math.PI), M.gold); cord.rotation.set(-.35, 0, Math.PI); cord.position.set(0, .3, .2); cord.scale.set(.75, 1, 1); body.add(cord);
    const med = new THREE.Group(); med.position.set(0, -.1, .84); med.rotation.x = -.2; med.scale.setScalar(1.6); body.add(med);   // posé plus en avant : avant, le bas du médaillon rentrait dans la blouse
    const disc = outlined(new THREE.Mesh(new THREE.CylinderGeometry(.19, .19, .05, 40), M.gold), 1.1); disc.rotation.x = Math.PI/2; med.add(disc);
    const ink = new THREE.MeshBasicMaterial({color: '#0b1222'}), glyph = new THREE.Group(); glyph.position.z = .03; med.add(glyph);
    // foil vu de profil (lisible, ne ressemble pas à un visage) : planche, mât, fuselage, aile avant, stab
    const P = (w, h, x, y, r = 0) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), ink); m.position.set(x, y, 0); m.rotation.z = r; glyph.add(m); };
    P(.27, .045, 0, .1); P(.03, .19, .02, 0); P(.3, .022, .01, -.09);
    const wing = new THREE.Mesh(new THREE.CircleGeometry(.05, 24), ink); wing.scale.set(1.5, .45, 1); wing.position.set(-.1, -.09, 0); glyph.add(wing);
    P(.07, .018, .15, -.083, -.08); glyph.scale.setScalar(.95); }

  // bras le long du corps, légèrement écartés, mains visibles (retour Paul : « c'est quoi ces mains ? » : les manches se rejoignaient sur le médaillon)
  const staff = new THREE.Group(); prof.add(staff);
  [-1, 1].forEach(s => { const sh = new THREE.Vector3(s*.78, -.5, 0), hd = new THREE.Vector3(s*1.02, -1.3, .22), len = sh.distanceTo(hd);
    const sl = outlined(new THREE.Mesh(new THREE.CapsuleGeometry(.16, len - .1, 6, 14), M.coat), 1.08);
    sl.position.copy(sh).add(hd).multiplyScalar(.5); sl.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), hd.clone().sub(sh).normalize()); staff.add(sl);
    const hand = outlined(sph(.15, M.skin), 1.12); hand.position.set(s*1.06, -1.42, .26); hand.scale.set(.9, 1.1, .8); staff.add(hand);
    const thumb = outlined(sph(.06, M.skin), 1.15); thumb.position.set(s*.94, -1.36, .36); staff.add(thumb); });

  // lumières : douce + soleil couchant + contre-jour
  scene.add(new THREE.HemisphereLight('#fff7ed', '#7c2d12', 1.3));
  const key = new THREE.DirectionalLight('#ffffff', 2.2); key.position.set(3, 4, 5); scene.add(key);
  const rim = new THREE.DirectionalLight('#fbbf24', 1.2); rim.position.set(-4, 2, -3); scene.add(rim);

  // portrait : canvas dans le grand rond, image fixe dans la vignette
  bigEl.innerHTML = ''; renderer.domElement.style.cssText = 'width:100%;height:100%;display:block;'; bigEl.appendChild(renderer.domElement);
  bigEl.style.background = 'radial-gradient(circle at 50% 38%, #fff1c9, #ffc08a 55%, #e07a5f)';
  renderer.render(scene, cam);
  if(miniEl){ const img = new Image(); img.src = renderer.domElement.toDataURL('image/png'); img.alt = ''; img.style.cssText = 'width:100%;height:100%;object-fit:cover;transform:scale(1.5) translateY(14%);';
    miniEl.innerHTML = ''; miniEl.style.background = '#ffd7a8'; miniEl.appendChild(img); }
  // 😬 / 😄 expressions pré-calculées (retour Paul : « la Prof doit grimacer quand on se loupe ») : sourcils, yeux, bouche ; images prêtes à afficher
  { const shot = fn => { fn(true); renderer.render(scene, cam); const u = renderer.domElement.toDataURL('image/png'); fn(false); return u; };
    const F = {ok: renderer.domElement.toDataURL('image/png')};
    F.ouch = shot(on => { brows.forEach(([b, sd]) => { b.rotation.z = on ? Math.PI/2 + sd*.45 : Math.PI/2 - sd*.22; b.position.y = on ? .38 : .45; });
      eyes.forEach(e => e.scale.y = on ? .28 : 1); if(mouthG){ mouthG.rotation.z = on ? Math.PI : 0; mouthG.scale.set(on ? .75 : 1, on ? .55 : 1, 1); mouthG.position.y = on ? -.5 : -.36; } });
    F.yay = shot(on => { brows.forEach(([b]) => { b.position.y = on ? .53 : .45; }); eyes.forEach(e => e.scale.y = on ? .22 : 1); if(mouthG) mouthG.scale.set(on ? 1.15 : 1, on ? 1.25 : 1, 1); });
    window.PROF_FACES = F; renderer.render(scene, cam); }

  // idle : respiration, clignement, hochement, foil qui se balance (seulement quand le portrait est visible)
  let blinkAt = 1.5;
  const loop = now => { requestAnimationFrame(loop); if(bigEl.classList.contains('hide') || bigEl.offsetParent === null) return; const t = now/1000;
    if(!RM){ body.position.y = -.6 + Math.sin(t*1.8)*.025; head.position.y = .95 + Math.sin(t*1.8 - .4)*.03; head.rotation.z = Math.sin(t*.7)*.06; head.rotation.x = Math.sin(t*.9)*.04;
      staff.rotation.z = Math.sin(t*.8)*.04;
      const bt = t % 4.2; const k = bt > blinkAt && bt < blinkAt + .14 ? .1 : 1; eyes.forEach(e => e.scale.y = k); }
    renderer.render(scene, cam); };
  requestAnimationFrame(loop);
  return true;
}

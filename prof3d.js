// 🧑‍🔬 Prof. Foil en 3D (repris de zéro, retour Paul : « repars de 0 », « si tu peux le faire en 3D c'est cool »)
// Figurine façon jouet : grosse tête, rendu toon + contour noir, crâne dégarni et touffes blanches sur les côtés,
// lunettes rondes, moustache relevée, blouse blanche sur chemise turquoise, collier avec un foil en or,
// et un vrai foil (mât, fuselage, aile avant, stab) comme bâton de sage. Idle : respire, cligne des yeux, hoche la tête.
import * as THREE from 'three';

export function mountProf(bigEl, miniEl, opt = {}){
  let renderer;
  try{ renderer = new THREE.WebGLRenderer({antialias: true, alpha: true, preserveDrawingBuffer: true}); }catch(e){ return false; }
  const W = 330, H = 330, RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  renderer.setPixelRatio(Math.min(opt.pr || 2, devicePixelRatio || 1));   // 📱 plus léger sur téléphone renderer.setSize(W, H); renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(30, W/H, 0.1, 50);
  cam.position.set(0.45, 0.7, 7.6); cam.lookAt(0, 0.35, 0);

  // matériaux toon (3 tons) + contours
  const ramp = new THREE.DataTexture(new Uint8Array([90, 90, 90, 255, 185, 185, 185, 255, 255, 255, 255, 255]), 3, 1);
  ramp.minFilter = ramp.magFilter = THREE.NearestFilter; ramp.needsUpdate = true;
  const toon = (c, o = {}) => new THREE.MeshToonMaterial(Object.assign({color: c, gradientMap: ramp}, o));
  const M = {skin: toon('#f2b48c'), nose: toon('#ee9a7c'), white: toon('#f8fafc'), hair: toon('#f1f5f9'), dark: toon('#111827'),
    coat: toon('#f8fafc'), shirt: toon('#14b8a6'), gold: toon('#fbbf24', {emissive: '#7c4a03', emissiveIntensity: .25}), metal: toon('#64748b'),
    wing: toon('#0ea5e9'), cheek: new THREE.MeshBasicMaterial({color: '#fb7185', transparent: true, opacity: .35}), mouth: toon('#7f1d1d'),
    lens: new THREE.MeshBasicMaterial({color: '#e0f2fe', transparent: true, opacity: .28})};
  const lineMat = new THREE.MeshBasicMaterial({color: '#0b1222', side: THREE.BackSide});
  const outlined = (mesh, k = 1.06) => { const o = new THREE.Mesh(mesh.geometry, lineMat); o.scale.setScalar(k); mesh.add(o); return mesh; };
  const sph = (r, m, seg = 32) => new THREE.Mesh(new THREE.SphereGeometry(r, seg, seg/2), m);

  const prof = new THREE.Group(); scene.add(prof); prof.rotation.y = -0.22;
  const head = new THREE.Group(); head.position.set(0, 0.95, 0); prof.add(head);

  // tête + oreilles
  const skull = outlined(sph(1, M.skin, 48)); skull.scale.set(1, 1.02, .95); head.add(skull);
  [-1, 1].forEach(s => { const e = outlined(sph(.2, M.skin), 1.12); e.position.set(s*.98, -.02, 0); e.scale.set(.6, 1, .8); head.add(e); });
  // touffes blanches : couronne sur les côtés et derrière, crâne dégarni (le savant)
  [[-.92, .32, -.1, .36], [-1.02, .02, -.25, .3], [-.75, .62, -.35, .3], [.92, .32, -.1, .36], [1.02, .02, -.25, .3], [.75, .62, -.35, .3],
   [-.4, .55, -.75, .34], [.4, .55, -.75, .34], [0, .45, -.9, .36], [-.85, -.25, -.4, .26], [.85, -.25, -.4, .26]].forEach(([x, y, z, r]) => {
    const t = outlined(sph(r, M.hair), 1.1); t.position.set(x, y, z); head.add(t); });
  // trois mèches rebelles sur le dessus
  [[-.18, .98, .1, .16], [.05, 1.04, .05, .18], [.26, .96, .08, .14]].forEach(([x, y, z, r]) => { const t = outlined(sph(r, M.hair), 1.12); t.position.set(x, y, z); head.add(t); });

  // yeux (ovales noirs + reflet), paupières pour cligner
  const eyes = [];
  [-1, 1].forEach(s => { const g = new THREE.Group(); g.position.set(s*.34, .14, .9); head.add(g);
    const e = sph(.11, M.dark); e.scale.set(1, 1.35, .6); g.add(e);
    const h = sph(.035, M.white); h.position.set(.035, .06, .06); g.add(h); eyes.push(g);
    // sourcils blancs broussailleux, levés (bienveillant)
    const b = outlined(new THREE.Mesh(new THREE.CapsuleGeometry(.07, .26, 6, 12), M.hair), 1.15); b.rotation.z = Math.PI/2 - s*.3; b.position.set(s*.36, .46, .86); head.add(b); });
  // lunettes rondes
  [-1, 1].forEach(s => { const r = new THREE.Mesh(new THREE.TorusGeometry(.22, .028, 10, 40), M.dark); r.position.set(s*.34, .1, .98); head.add(r);
    const l = new THREE.Mesh(new THREE.CircleGeometry(.21, 32), M.lens); l.position.set(s*.34, .1, .975); head.add(l);
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(.02, .02, .5, 8), M.dark); arm.rotation.x = Math.PI/2; arm.position.set(s*.6, .12, .78); arm.rotation.y = s*.5; head.add(arm); });
  { const br = new THREE.Mesh(new THREE.TorusGeometry(.1, .024, 8, 20, Math.PI), M.dark); br.position.set(0, .14, 1.0); head.add(br); }
  // nez rond, joues
  { const n = outlined(sph(.17, M.nose), 1.1); n.position.set(0, -.08, 1.02); n.scale.set(1, .9, 1); head.add(n); }
  [-1, 1].forEach(s => { const c = sph(.17, M.cheek); c.position.set(s*.55, -.2, .8); c.scale.set(1, .6, .3); head.add(c); });
  // moustache relevée (deux virgules) + sourire
  [-1, 1].forEach(s => { const m = outlined(new THREE.Mesh(new THREE.CapsuleGeometry(.09, .3, 6, 14), M.hair), 1.12);
    m.rotation.z = Math.PI/2 - s*.35; m.position.set(s*.2, -.27, .97); head.add(m);
    const tip = outlined(sph(.075, M.hair), 1.14); tip.position.set(s*.42, -.17, .9); head.add(tip); });
  // grand sourire ouvert : demi-disque bordeaux, rangée de dents en haut, langue rose
  { const mouth = new THREE.Group(); mouth.position.set(0, -.4, .955); mouth.rotation.x = -.3; head.add(mouth);
    const lip = new THREE.Mesh(new THREE.CircleGeometry(.27, 40, Math.PI, Math.PI), new THREE.MeshBasicMaterial({color: '#0b1222'})); lip.position.z = -.002; mouth.add(lip);
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
    const med = new THREE.Group(); med.position.set(0, -.12, .74); med.rotation.x = -.12; med.scale.setScalar(1.7); body.add(med);
    const disc = outlined(new THREE.Mesh(new THREE.CylinderGeometry(.19, .19, .05, 40), M.gold), 1.1); disc.rotation.x = Math.PI/2; med.add(disc);
    const ink = new THREE.MeshBasicMaterial({color: '#0b1222'}), glyph = new THREE.Group(); glyph.position.z = .03; med.add(glyph);
    // foil vu de face : planche en haut, mât, aile avant en mouette en bas
    const board = new THREE.Shape(); board.moveTo(-.12, .1); board.lineTo(.12, .1); board.quadraticCurveTo(.14, .125, .11, .135); board.lineTo(-.11, .135); board.quadraticCurveTo(-.14, .125, -.12, .1); glyph.add(new THREE.Mesh(new THREE.ShapeGeometry(board), ink));
    const mast = new THREE.Mesh(new THREE.PlaneGeometry(.03, .17), ink); mast.position.y = .015; glyph.add(mast);
    const wg = new THREE.Shape(); wg.moveTo(-.15, -.1); wg.quadraticCurveTo(0, -.03, .15, -.1); wg.quadraticCurveTo(.155, -.085, .14, -.08); wg.quadraticCurveTo(0, -.025, -.14, -.08); wg.quadraticCurveTo(-.155, -.085, -.15, -.1);
    const wm = new THREE.Mesh(new THREE.ShapeGeometry(wg, 24), ink); glyph.add(wm); glyph.scale.setScalar(.95); }

  // bras le long du corps, mains jointes devant (posture de prof qui écoute)
  const staff = new THREE.Group(); prof.add(staff);
  [-1, 1].forEach(s => { const sh = new THREE.Vector3(s*.72, -.5, 0), hd = new THREE.Vector3(s*.35, -1.25, .6), len = sh.distanceTo(hd);
    const sl = outlined(new THREE.Mesh(new THREE.CapsuleGeometry(.17, len - .1, 6, 14), M.coat), 1.08);
    sl.position.copy(sh).add(hd).multiplyScalar(.5); sl.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), hd.clone().sub(sh).normalize()); prof.add(sl);
  });

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

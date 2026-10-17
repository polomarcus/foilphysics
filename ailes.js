// Base d'ailes partagée par carve.html et vitesse.html : [nom, envergure cm, surface cm² RÉELLE] par marque.
// Sources : fiches constructeurs envoyées par Paul (oct. 2026). c = couleur de la marque sur les cartes.
window.FOIL_WINGS = [{k:'alp', n:'Alpine Foil', c:'#f472b6', w:[['RSX Carve 820',95.8,820],['RSX Carve 960',103,960],['RSX Carve 1100',112.2,1100],
      ['RSX 860',106,860],['RSX 1060',116.6,1063],['RSX 1260',125.1,1260],['RSX 1400 G2',132,1400],['RSX 1540',139.9,1540],['RSX Ultra 730',112,730],['RSX Ultra 930',126.6,935],
      ['DW 840',81,840],['DW 980',93,980],['DW 1180',94,1180],['DW 1370',109,1370],['DW 1680',109,1680],['DK 1240',124,1790],['DK 1360',136,1950],['DK 1499',149.9,1698],['Regata 850',88,850],['Regata 1100',100,1100]]},
    {k:'axs', n:'Axis', c:'#fb923c', w:[['Surge 830',83,728],['Surge 890',89,835],['Surge 950',95,949],['Surge 1010',101,1076],
      ['Surge 1080',108,1142],['Surge 1150',115,1199],['Surge 1240',124,1340],['Fireball 1000',100,773],['Fireball 1070',107,877],['Fireball 1160',116,996],
      ['Fireball 1250',125,1133],['Fireball 1350',135,1309],['Fireball 1500',150,1313],['Fireball 1750',175,1525],
      ['Tempo 1090',109,746],
      ['ART Pro 951',95,768],['ART Pro 1001',100,845],['ART Pro 1051',105,932],['ART Pro 1121',112,1088],['ART Pro 1201',120,1318],['ART Pro 1401',140,1647],   // ajout 16 oct. 2026 d'après selectyourfoil.com (modèles 2023+, ≥ 750 cm²)
      ['ART v2 879',88,790],['ART v2 939',94,900],['ART v2 999',100,1038],['ART v2 1099',110,1197],
      ['Spitfire 720',72,815],['Spitfire 780',78,902],['Spitfire 840',84,1006],['Spitfire 900',90,1099],['Spitfire 960',96,1196],['Spitfire 1030',103,1308],['Spitfire 1100',110,1423],['Spitfire 1180',118,1554],
      ['PNG v2 1200',120,1800],['PNG v2 1300',130,1632],['PNG v2 1400',140,1783]]},
    {k:'gng', n:'GONG', c:'#fde047', w:[['Sirus L',116,1450],['Sirus XL',136,1700],['Sirus XXL',156,2000],['Sirus 3XL',186,2400],['Sirus 5XL',249,3100],   // fiche GONG (oct. 2026) : plus de taille M
      
      ['Supra Trail XL',135,1250],['Supra Trail XXL',148,1500],['Supra Trail 3XL',160,1750],['Supra Trail 4XL',171,2000],['Supra Trail 5XL',181,2250],
      ['Trail L',125,1660],['Trail XL',135,1940],['Trail XXL',145,2240],
      ['Ypra Surf Fast M',77,720],['Ypra Surf Fast L',82,820],['Ypra Surf Fast XL',87,920],
      ['Ypra Surf Carve M',77,720],['Ypra Surf Carve L',82,820],
      ['Ypra Surf Freestyle L',71,740],
      ['Veloce Free Fly S',88,740],['Veloce Free Fly M',97,890],['Veloce Free Fly L',105,1040],['Veloce Free Fly XL',110,1150],['Veloce Free Fly XXL',117,1300],
      ['Fluid XS',78,710],['Fluid S',84,810],['Fluid M',89,910],['Fluid L',94,1010],['Fluid XL',100,1160],['Fluid XXL',107,1310],['Fluid 3XL',112,1460],
      ['Ultra Trail L',133,1000],['Ultra Trail XL',148,1250],['Ultra Trail XXL',162,1500],['Ultra Trail 3XL',175,1750],['Ultra Trail 4XL',188,2000],['Ultra Trail 5XL',200,2250],['Trail Atmo Team L',117,1350],['Trail Atmo Team XL',129,1650],['Trail Atmo Team XXL',140,1950],['Trail Atmo Team 3XL',151,2250],
      ['Hypertrail M',98,850],['Hypertrail L',107,1000],['Hypertrail XL',119,1250],['Hypertrail XXL',131,1500],['Hypertrail 3XL',141,1750],
      ['Veloce DW S',103,750],['Veloce DW M',113,900],['Veloce DW L',122,1050],['Veloce DW XL',130,1200],
      ['Veloce XTR M',116,800],['Veloce XTR L',123,900],   // ajout 16 oct. 2026 d'après selectyourfoil.com (modèles 2023+, ≥ 750 cm²)
      ['Ascent M',78,870],['Ascent L',87,1080],['Ascent XL',95,1290],['Ascent XXL',102,1500],
      ['Curve L',95,1070],['Curve XL',101,1220],['Curve XXL',107,1370],['Curve 3XL',113,1520],
      ['Sirus Atmo Team M',112,1150],['Sirus Atmo Team L',124,1400],['Sirus Atmo Team XL',135,1650],['Sirus Atmo Team XXL',146,1950],['Sirus Atmo Team 3XL',161,2350],
      ['Veloce M',95,890],['Veloce L',103,1040],['Veloce XL',108,1150],['Veloce XXL',115,1300],
      ['Veloce Light Wind S',97,750],['Veloce Light Wind M',107,900],['Veloce Light Wind L',115,1050],['Veloce Light Wind XL',123,1200],['Veloce Light Wind XXL',133,1400],
      ['X-Over M',74,850],['X-Over L',84,1100],['X-Over XL',95,1400],['X-Over XXL',106,1750]]},
    {k:'tak', n:'Takoon', c:'#22d3ee', w:[['Pump 1500',123,1500],['Pump 1700',133,1700],['Pump 1900',141,1900],['Swell 1050',110,1050],['Flare 850',84,850],['Flare 950',89,950],['Flare 1050',95,1050],['Flare 1200',101.5,1200],['Flare 1400',110,1400],['Flow 800',92,800],['Flow 900',98,900],['Flow 1050',105,1050],['Flow 1200',112,1200],['Pump Pro 950',112,950],['Pump Pro 1150',122,1150],['Pump Pro 1250',128,1250],['Pump Pro 1350',133,1350],['Pump Pro 1550',142,1550],
      ['Pump Pro 1750',151,1750],['Pump One 1600',121,1600],['Pump One 1800',129,1800],['Pump One 2000',136,2000],['Pump Pro 1950',159,1950],['Pump Pro 2300',173.5,2300],['Extreme 1400',157,1400],['Extreme 1600',173,1600],['Extreme 1800',190,1800],
      ['X-Glide V2 1050',87,1050],['X-Glide V2 1250',95,1250],['X-Glide V2 1450',102,1450],['X-Glide V2 1700',111,1700]]},
    {k:'sab', n:'Sabfoil', c:'#a3e635', w:[['Leviathan 950',95,1300],['Leviathan 1150',115,1580],['Leviathan 1350',135,1870],['Leviathan PRO 1060',106,947],['Leviathan PRO 1160',116,1083],['Leviathan PRO 1260',126,1227],['Leviathan PRO 1360',132,1400],['Razor 847',84.7,784],['Razor 977',97.7,953],['Razor 1077',107.7,1069],['Leviathan 1750',175,2400],['Blackbird 1300',128,1330],['Blackbird 1400',138,1549],['Blackbird FreeMove 805',80.5,792],['Blackbird FreeMove 905',90.5,998],['Blackbird FreeMove 965',96.5,1210],['Blackbird FreeMove 1155',115.5,1345]]},
    {k:'ket', n:'Ketos', c:'#f87171', w:[['166 LD',166,1466],['Kobun 99',99,777],['Kobun 111',111,960],['Kobun 122',122,1122],['Kobun 133',133,1340],['LR 155',155,1740],['LR 177',177,1940],['Pump LD 1570',138,1569],['Split 120',120,1320],['Split 135',135,1460],['Split 150',150,1630],['R2R 850',85,850],['R2R 1050',95,1050],
      ['Evo 133',133,1770],['Karve 750',83.5,750],['Karve 950',94,950],['Karve 1250 V2',108,1238],['Karve 1450',116,1450],['Rage 105',105,770]]},
    {k:'afs', n:'AFS', c:'#93c5fd', w:[['Enduro 800',94,800],['Enduro 900',99.4,900],['Enduro 1000',105,1000],['Enduro 1100',110,1100],['Enduro 1300',119,1300],
      ['Enduro GLT 1600',132.3,1600],['HA Ultra 750',106,750],['HA Ultra 900',112,900]]},
    {k:'ind', n:'Indiana', c:'#2dd4bf', w:[['Dolphin S',82.7,720],['Dolphin M',92.5,900],['Dolphin L',101.3,1080],['Dolphin XL',109.4,1260],
      ['Marlin S',79.5,840],['Marlin M',86,990],['Marlin L',92.5,1140],['Marlin XL',102,1390],
      ['Barracuda M',95,850],['Barracuda L',105,1050],['Barracuda L+',116.6,1252],['Barracuda XL',132,1600],
      ['Condor S',110,1362],['Condor M',126,1737],['Condor XL',169.6,2274],['Manta XL',139.6,2047],
      ['Albatross L',149.6,1298],['Wake Thief 1935',132,1935]]},
    {k:'arm', n:'Armstrong', c:'#a78bfa', w:[['APF 1350',120.2,1350],['APF 1675',120.2,1675],['APF 1880',130.2,1880],   // APF : la gamme pump d'Armstrong (vérif. oct. 2026)
      ['UHA 770',98.5,770],['UHA 870',104.7,870],['UHA 970',110.6,970],['UHA 1070',116.1,1070],['UHA 1270',126.5,1270],
      ['HA 780',87.7,780],['HA 880',92.3,880],['HA 980',97.4,980],['HA 1080',102,1080],['HA 1180',106.6,1180],
      ['MA 790',81.7,790],['MA 890',86,890],['MA 990',90.6,990],['MA 1190',99,1190],['MA 1390',106,1390]]},
    {k:'f4', n:'F4 Foils', c:'#fca5a5', w:[['GP Orca 900',106,900],['GP Orca 800 V2',99.5,800],['GP Orca 1050',118,1050],['GP Orca 1250',129,1250],['GP Manta 850',84,850],['GP Manta 750',80,750]]},
    {k:'code', n:'Code Foils', c:'#d9f99d', w:[['S 720',83,720],['S 850',90,850],['S 980',96.5,980],['S 1130',103.5,1130],['S 1300',111.5,1300],['S 1540',121,1540],['S 1725',128,1725],
      ['X 740',78,740],['X 810',81.4,810],['X 890',85.2,890],['X 985',89.6,985],['X 1085',94,1085],['X 1195',98.7,1195],
      ['R 770',100,770],['R 860',105,860],['R 960',111.5,960],['R 1075',118,1075],['R 1250',127.5,1250],
      ['R2 741',108,741],['R2 855',116.2,855],['R2 990',125.2,990],
      ['Kanga 1390',130,1390],['Kanga 1600',130,1600],['Kanga 1870',130,1870],['Kanga 2220',170,2220]]},
    {k:'fone', n:'F-One', c:'#e2e8f0', w:[['Sushi 740',75.5,740],['Sushi 820',79.5,820],['Sushi 920',84,920],['Sushi 1020',88.5,1020],
      ['Eagle 790',86.5,790],['Eagle 890',92.5,890],['Eagle 990',97,990],['Eagle 1090',102,1090],['Eagle 1190',106,1190],['Eagle 1290',110.5,1290],
      ['Eagle X 800',98,800],['Eagle X 900',104,900],['Eagle X 1000',109.5,1000],
      ['SK8 750',77.5,750],['SK8 850',82.5,850],['SK8 950',87,950],['SK8 1050',91.5,1050],['SK8 1150',96,1150],
      ['Seven Seas 1100',94,1100],['Seven Seas 1200',98,1200],['Seven Seas 1300',102,1300],['Seven Seas 1400',105.5,1400],['Seven Seas 1500',109.5,1500],['Seven Seas 1600',113,1600],
      ['Momentum 716',107.5,716],['Momentum 816',115,816],['Momentum 916',122,916],['Jam 1400',120,1400],['Jam 1600',128,1600],['Jam 1900',140,1900]]},
  {k:'duo', n:'Duotone', c:'#e879f9', w:[['Crest SLS 800',85,800],['Crest SLS 925',90,925],['Crest SLS 1050',96,1050],['Crest SLS 1200',102,1200],   // Crest D/LAB : mêmes envergure et surface → même entrée
      ['Glide 3.0 SLS 825',100,825],['Glide 3.0 SLS 950',105,950],['Glide 3.0 SLS 1100',112,1100],['Glide 3.0 SLS 1250',118,1250],['Glide 3.0 SLS 1400',124,1400],
      ['AMP 2.0 SLS 1550',143,1550],['AMP 2.0 SLS 1800',148,1800],['AMP 2.0 SLS 2100',143,2100],
      ['Hyperglide D/LAB 880',113,880]]},   // Glide 3.0 D/LAB : mêmes envergure et surface que la SLS → une seule entrée
  {k:'srk', n:'Sroka', c:'#fbbf24', w:[['UHA 800',93.9,800],['UHA 930',101.1,930],['UHA 1100',110,1100],['UHA 1260',117.9,1260],['UHA 1550',130.5,1550],
      ['PF 1500',141,1500],['PF 1750',152,1750],['PF 2200',170,2200],
      ['DW 900',112,900],
      ['810 S HA',78,810],['950 S HA',85,950],['1190 HA',91,1190],['1350 L HA',110,1350],['HA Lift 2000',140,2000]]},   // 1190 S / W / L HA : mêmes envergure et surface (seule l'épaisseur change) → une seule entrée
  {k:'nor', n:'North', c:'#818cf8', w:[['Sonar P 1800',130,1800],['Sonar P 2050',140,2050],   // fiche North MY25 « Sonar wing specifications » (≥ 750 cm²)
      ['Sonar DW 750',100,750],['Sonar DW 900',108,900],['Sonar DW 1100',115,1100],['Sonar DW 1400',125,1400],
      ['Sonar HA 750',87,750],['Sonar HA 850',92,850],['Sonar HA 950',100,950],['Sonar HA 1050',105,1050],['Sonar HA 1150',110,1150],['Sonar HA 1250',112,1250],['Sonar HA 1450',120,1450],
      ['Sonar SF 830',86.5,830],['Sonar SF 930',90,930],['Sonar SF 1080',91.5,1080],['Sonar SF 1230',93,1230],
      ['Sonar MA 850 V2',78,850],['Sonar MA 1050 V2',85,1050],['Sonar MA 1200 V2',87.5,1200],['Sonar MA 1500 V2',92,1500],['Sonar MA 1850 V2',96,1850],['Sonar MA 2100 V2',100,2100],['Sonar MA 2400 V2',104,2400]]},   // ajout 16 oct. 2026 d'après selectyourfoil.com (modèles 2023+, ≥ 750 cm²)
  {k:'kt', n:'KT Foiling', c:'#fda4af', w:[['Atlas 790',92,790],['Atlas 960',102,960],['Atlas 1130',111,1130],['Atlas 1340',122,1340]]}
  ];

// 🔗 Pages OFFICIELLES des fabricants (vérifiées une à une le 17 oct. 2026, HTTP 200 + titre de la gamme) : site = page des ailes
// de la marque · fam = page de la gamme (nom de l'aile sans sa taille). Quand le fabricant fait une page par taille, on pointe une
// taille du milieu. Gamme absente = pas de page officielle trouvée → lien vers la page de la marque.
window.FOIL_URLS = {
  alp:{site:"https://www.alpinefoil.com/kitefoil-windfoil-shop/ailes-foils/", fam:{"RSX Carve":"https://www.alpinefoil.com/kitefoil-windfoil-shop/ailes-foils/aile-rsx-carve.html", "RSX":"https://www.alpinefoil.com/kitefoil-windfoil-shop/ailes-foils/aile-rsx-1260.html", "RSX Ultra":"https://www.alpinefoil.com/kitefoil-windfoil-shop/ailes-foils/aile-rsx-ulta-735.html", "DW":"https://www.alpinefoil.com/kitefoil-windfoil-shop/ailes-foils/aile-dw-1180.html", "DK":"https://www.alpinefoil.com/kitefoil-windfoil-shop/ailes-foils/aile-dk-1240.html", "Regata":"https://www.alpinefoil.com/kitefoil-windfoil-shop/ailes-foils/aile-windfoil-regata-850.html"}},
  axs:{site:"https://axisfoils.com/collections/front-wings", fam:{"Surge":"https://axisfoils.com/collections/surge", "Fireball":"https://axisfoils.com/collections/will-be-fireball", "Tempo":"https://axisfoils.com/collections/tempo", "ART Pro":"https://axisfoils.com/collections/axis-research-team-pro", "ART v2":"https://axisfoils.com/collections/axis-research-team-v2", "Spitfire":"https://axisfoils.com/collections/spitfire", "PNG v2":"https://axisfoils.com/collections/pngv2"}},
  gng:{site:"https://www.gong-galaxy.com/en/collections/foil-front-wings", fam:{"Sirus":"https://www.gong-galaxy.com/en/products/gong-foil-front-wing-sirus-atmo", "Supra Trail":"https://www.gong-galaxy.com/en/products/gong-front-wing-supra-trail-atmo", "Trail":"https://www.gong-galaxy.com/en/products/gong-foil-front-wing-trail-atmo", "Ypra Surf Fast":"https://www.gong-galaxy.com/en/products/gong-front-wing-ypra-surf-fast-atmo", "Ypra Surf Carve":"https://www.gong-galaxy.com/en/products/gong-front-wing-ypra-surf-carve-atmo", "Ypra Surf Freestyle":"https://www.gong-galaxy.com/en/products/gong-foil-front-wing-ypra-surf-freestyle-atmo", "Veloce Free Fly":"https://www.gong-galaxy.com/en/products/gong-foil-front-wing-veloce-ff-atmo-carbon", "Fluid":"https://www.gong-galaxy.com/en/products/gong-foil-front-wing-fluid-atmo", "Ultra Trail":"https://www.gong-galaxy.com/en/products/gong-foil-front-wing-ultra-trail-atmo", "Trail Atmo Team":"https://www.gong-galaxy.com/en/products/gong-foil-front-wing-trail-atmo-carbon", "Hypertrail":"https://www.gong-galaxy.com/en/products/gong-front-wing-hyper-trail-atmo", "Veloce DW":"https://www.gong-galaxy.com/en/products/gong-foil-front-wing-veloce-dw-atmo", "Veloce XTR":"https://www.gong-galaxy.com/en/products/gong-front-wing-veloce-xtr-atmo", "Ascent":"https://www.gong-galaxy.com/en/products/gong-foil-front-wing-ascent-atmo", "Curve":"https://www.gong-galaxy.com/en/products/gong-foil-front-wing-curve-atmo", "Sirus Atmo Team":"https://www.gong-galaxy.com/en/products/gong-foil-front-wing-sirus-atmo-carbon", "Veloce":"https://www.gong-galaxy.com/en/products/gong-foil-front-wing-veloce-atmo", "Veloce Light Wind":"https://www.gong-galaxy.com/en/products/gong-foil-front-wing-veloce-lw-atmo", "X-Over":"https://www.gong-galaxy.com/en/products/gong-foil-front-wing-x-over-atmo"}},
  tak:{site:"https://takoon.com/collections/foil-front-wings", fam:{"Pump":"https://takoon.com/products/foil-pump-front-wing", "Swell":"https://takoon.com/products/foil-swell-front-wing", "Flare":"https://takoon.com/products/foil-flare-front-wing", "Flow":"https://takoon.com/products/foil-flow-front-wing", "Pump Pro":"https://takoon.com/products/foil-pump-pro-front-wing", "Pump One":"https://takoon.com/products/foil-pump-one-front-wing", "Extreme":"https://takoon.com/products/foil-pump-extreme-front-wing", "X-Glide V2":"https://takoon.com/products/foil-x-glide-v2-front-wing"}},
  sab:{site:"https://sabfoil.com/en/all-products/products-front-wing", fam:{"Leviathan":"https://sabfoil.com/en/products/WL_1150", "Leviathan PRO":"https://sabfoil.com/en/products/WLP_1160", "Razor":"https://sabfoil.com/en/products/WR977-BB", "Blackbird":"https://sabfoil.com/en/products/WL1300-BB", "Blackbird FreeMove":"https://sabfoil.com/en/products/WBZ905-BB"}},
  ket:{site:"https://www.ketos-foil.com/en/shop/category/pump-foil-front-wings-pumping-29", fam:{"166 LD":"https://www.ketos-foil.com/en/shop/long-distance-166ld-236", "Kobun":"https://www.ketos-foil.com/en/shop/kobun-front-wings-56", "LR":"https://www.ketos-foil.com/en/shop/dock-start-wing-lr-57", "Pump LD":"https://www.ketos-foil.com/en/shop/pumping-wing-1570-ld-59", "Split":"https://www.ketos-foil.com/en/shop/ketos-split-wing-176", "R2R":"https://www.ketos-foil.com/en/shop/r2r-front-wing-72", "Evo":"https://www.ketos-foil.com/en/shop/progression-pump-wing-evo-133-58", "Karve":"https://www.ketos-foil.com/en/shop/karve-freefly-front-wing-73", "Rage":"https://www.ketos-foil.com/en/shop/aile-rage-105-239"}},
  afs:{site:"https://afs-foiling.com/product-category/front-wing-foil", fam:{"Enduro":"https://afs-foiling.com/product/enduro-front-wing", "Enduro GLT":"https://afs-foiling.com/product/enduro-glt-front-wing", "HA Ultra":"https://afs-foiling.com/product/ultra-front-wing"}},
  ind:{site:"https://indiana-paddlesurf.com/global/foils/monobloc-foils/front-wings.html", fam:{"Dolphin":"https://indiana-paddlesurf.com/global/foils/monobloc-foils/front-wings/dolphin.html", "Marlin":"https://indiana-paddlesurf.com/global/foils/monobloc-foils/front-wings/marlin.html", "Barracuda":"https://indiana-paddlesurf.com/global/foils/monobloc-foils/front-wings/barracuda.html", "Condor":"https://indiana-paddlesurf.com/global/foils/foils-high-performance/frontwings/condor.html", "Manta":"https://indiana-paddlesurf.com/global/foils/foils-high-performance/frontwings/manta.html", "Wake Thief":"https://indiana-paddlesurf.com/global/wake-thief.html"}},
  arm:{site:"https://armstrongfoils.com/collections/front-foils", fam:{"APF":"https://armstrongfoils.com/products/apf-front-foil", "UHA":"https://armstrongfoils.com/products/uha-front-foil", "HA":"https://armstrongfoils.com/products/ha-front-foil", "MA":"https://armstrongfoils.com/products/ma-mk-ii-front-foil"}},
  f4:{site:"https://f4foils.com/collections/wingfoil", fam:{"GP Orca":"https://f4foils.com/products/gp-orca", "GP Manta":"https://f4foils.com/products/gp-manta"}},
  code:{site:"https://codefoils.com/front-wings/", fam:{"S":"https://codefoils.com/product/s-series-front-wing/", "X":"https://codefoils.com/product/x-series-front-wing/", "R":"https://codefoils.com/product/r-series-front-wing/", "R2":"https://codefoils.com/product/r2-series-front-wing/", "Kanga":"https://codefoils.com/product/kanga-series-front-wing/"}},
  fone:{site:"https://www.f-one.world/en/foil/front-wings", fam:{"Sushi":"https://www.f-one.world/en/foil/front-wings/sushi.html", "Eagle":"https://www.f-one.world/en/foil/front-wings/eagle.html", "Eagle X":"https://www.f-one.world/en/foil/front-wings/eagle-x.html", "SK8":"https://www.f-one.world/en/foil/front-wings/SK8.html", "Seven Seas":"https://www.f-one.world/en/foil/front-wings/seven-seas.html", "Jam":"https://www.f-one.world/en/foil/front-wings/jam.html"}},
  duo:{site:"https://www.duotonesports.com/en/foiling/foils", fam:{"Crest SLS":"https://www.duotonesports.com/en/products/duotone-front-wing-crest-sls-2027-42270-3854", "Glide 3.0 SLS":"https://www.duotonesports.com/en/products/duotone-front-wing-glide-3-0-sls-2027-42270-3843", "AMP 2.0 SLS":"https://www.duotonesports.com/en/products/duotone-front-wing-amp-2-0-sls-2026-42260-3834", "Hyperglide D/LAB":"https://www.duotonesports.com/en/products/duotone-foilpart-front-wing-hyperglide-d-lab-2025-42250-3839"}},
  srk:{site:"https://srokacompany.com/en/collections/wing-foil-front-wings", fam:{"UHA":"https://srokacompany.com/en/products/uha-foil-front-wing", "PF":"https://srokacompany.com/en/products/pump-foil-front-wing-1500-1750-2200", "DW":"https://srokacompany.com/en/products/dw-foil-front-wings", "810 S HA":"https://srokacompany.com/en/products/front-wing-high-aspect-810-s-ha", "950 S HA":"https://srokacompany.com/en/products/front-wing-high-aspect-810-s-ha", "1190 HA":"https://srokacompany.com/en/products/front-wing-high-aspect-810-s-ha", "1350 L HA":"https://srokacompany.com/en/products/front-wing-high-aspect-810-s-ha", "HA Lift":"https://srokacompany.com/en/products/s-foil-high-aspect-front-wing-2000-l"}},
  nor:{site:"https://northactionsports.com/collections/front-wings", fam:{"Sonar P":"https://northactionsports.com/products/sonar-p1800-front-wing", "Sonar DW":"https://northactionsports.com/products/sonar-dw900-front-wing", "Sonar HA":"https://northactionsports.com/products/sonar-ha950-front-wing", "Sonar SF":"https://northactionsports.com/products/sonar-sf930-front-wing", "Sonar MA":"https://northactionsports.com/products/sonar-ma1200v2-front-wing"}},
  kt:{site:"https://ktfoiling.com/foils/wings/", fam:{"Atlas":"https://ktfoiling.com/foils/wings/atlas-1/"}}
};
// lien officiel d'une aile « Marque Modèle taille » → {u, fam: page de la gamme ?, brand}
// + UTM standard : le fabricant voit dans ses stats que la visite vient du simulateur (page = carve / vitesse)
window.foilLink = function(full, page){
  const B = (window.FOIL_WINGS || []).find(x => full.indexOf(x.n + ' ') === 0), U = B && window.FOIL_URLS[B.k]; if(!U) return null;
  const f = full.slice(B.n.length + 1).replace(/\s+(\d[\d.]*|X{0,2}[SML]\+?|\dXL)(\s+[GV]\d)?$/, '');   // même règle que « fam » des cartes
  const u = U.fam[f] || U.site;
  return {u: u + (u.indexOf('?') < 0 ? '?' : '&') + 'utm_source=simulator.foil-house.com&utm_medium=referral&utm_campaign=' + (page || 'simulateur'), fam: !!U.fam[f], brand: B.n};
};

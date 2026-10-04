# Formats vidéo (Reels / TikTok)

Les formats viennent des 34 vidéos sources. Chaque vidéo se fait en **2 étapes** :
- **(A) Image de départ** : l'influenceuse (avatar en référence) dans la tenue et le décor exacts, en 9:16, dans la pose du début du mouvement ;
- **(B) Animation image-to-video** avec MiniMax H3 et Seedance 2.5.

Syntaxe propre à chaque outil : `outils-ia.md` § 5 et § 6.

## Sommaire
1. Correspondance avec le menu
2. Grammaire caméra : mouvements fluides
3. Bloc anti-IA vidéo
4. Structure d'un prompt vidéo très détaillé
5. Fiches formats V1 à V16
6. Exemples complets (A, B, C)
7. Textes à l'écran

---

## 1. Correspondance avec le menu

| Menu | Format | Menu | Format |
|---|---|---|---|
| 1 Marche vers la caméra | V1 | 7 Cache-caméra | V8 |
| 2 Outfit check | V3 | 8 POV petit ami | V10 |
| 3 Ascenseur / porte | V4 | 9 Regarde l'arrière-plan | V12 |
| 4 Selfie voiture | V5 | 10 Face caméra | V13 |
| 5 Selfie miroir / comptoir | V6 | 11 Moment de vie | V15 |
| 6 Petite danse | V7 | 12 Événement | V16 |

Formats bonus à proposer quand c'est pertinent : V2 (assise → se lève), V9 (de dos + texte gag), V11 (POV fantaisie), V14 (traversée luxe).

## 2. Grammaire caméra : mouvements fluides

Dans les vidéos sources, la caméra est **toujours un téléphone tenu par une vraie personne ou posé**, jamais une caméra de cinéma ou un drone. Les mouvements sont simples, lents, à vitesse constante. Les mouvements spectaculaires (orbite à 360°, drone, zoom brutal, travelling impossible) sont les signes les plus visibles d'une vidéo IA.

| Code | Mouvement | Phrase anglaise à utiliser | Formats |
|---|---|---|---|
| C1 | Trépied fixe | `the phone is locked off on a tripod at chest height, perfectly still for the whole shot [static]` | V3, V7, V9, V13 |
| C2 | Recul sur gimbal devant elle | `a friend walks backward in front of her holding the phone on a gimbal, gliding smoothly at exactly her walking pace and keeping a constant distance of about two meters, framing her from head to knees [tracking shot]` | V1, V15 |
| C3 | Travelling latéral | `the camera moves parallel to her at the same speed, about three meters to her side, smooth and level, keeping her centered [tracking shot]` | V14, V15 |
| C4 | Suivi de dos | `the camera follows two meters behind her at her pace, steady gimbal movement, then holds as she glances back over her shoulder [tracking shot]` | V4, V15 |
| C5 | Plan fixe de loin | `static camera on a tripod far down the street; she walks from the background toward the lens, growing in the frame [static]` | V1, V12 |
| C6 | Approche lente | `a slow, smooth push-in from a medium shot to a medium close-up over the whole duration, small amplitude [push in]` | V6, V13, V16 |
| C7 | Recul lent (révélation) | `a slow, smooth pull-out from her face to reveal the full outfit and the setting, small amplitude, steady speed [pull out]` | V8, V16 |
| C8 | Selfie à bout de bras | `handheld front-camera selfie at arm's length, subtle natural sway from her arm, no sudden jumps` | V5, V6, V11 |
| C9 | Caméra posée (dashcam, tableau de bord) | `the phone is mounted on the dashboard, fixed, with tiny vibrations from the car` | V5, V12 |
| C10 | Arc léger (30° max) | `the camera arcs slowly about thirty degrees around her from her front to her three-quarter profile, smooth gimbal motion [arc]` | V16 |
| C11 | Panoramique vertical (pieds → visage) | `a slow tilt up from her sandals to her face, revealing the outfit, smooth and steady [tilt up]` | V3, V16 |

**Règles de fluidité** :
- **Un seul mouvement par vidéo**, du début à la fin, avec un départ et un arrêt en douceur (« eases in at the start and eases out to a stop at the end »).
- Une **vitesse constante** (« slow and steady »), une **distance constante** quand on suit (« constant distance »), un horizon droit (« horizon level »).
- Jamais de zoom combiné à un déplacement, jamais de « then the camera… » qui enchaîne deux mouvements (H3 crée alors une coupe).
- Stabilisation de téléphone moderne : « smooth like an iPhone in Action mode » pour la marche, « subtle natural handheld micro-movement » pour un selfie.

## 3. Bloc anti-IA vidéo

À coller (en l'adaptant) dans **chaque** prompt vidéo :
```
Real-time speed, no slow motion. Natural human timing with small pauses and imperfections. Realistic weight and physics: her heels strike the ground, her weight shifts from hip to hip, hair and fabric move with inertia and settle naturally. Background people move independently at their own pace and never look at the camera. The background stays stable and consistent: no warping, no morphing, no flickering, no objects appearing or disappearing. Her face, hands and body keep correct anatomy from the first to the last frame. Natural motion blur, iPhone video color, no cinematic grading, no glow, no text on screen.
```

**Ce qui trahit l'IA, et comment l'éviter** :

| Signe d'IA | Antidote dans le prompt |
|---|---|
| Mouvements flottants, au ralenti | « real-time speed », des actions physiques (« heel strike », « weight shift ») |
| Sourire figé du début à la fin | Une évolution d'expression : neutre → regard ailleurs → sourire qui monte |
| Figurants immobiles ou qui fixent la caméra | « background people move independently… never look at the camera », avec leur action précise |
| Décor qui se déforme | « background stays stable and consistent », caméra simple |
| Trop d'actions en 8 s | 2 ou 3 temps forts maximum |
| Mains déformées | Gestes simples (cheveux, hanche, sac, ourlet), pas de manipulation fine |
| Lumière qui change | « consistent light direction, shadows move with her » |
| Image trop léchée, « cinématique » | « iPhone video », « filmed by a friend », pas de « cinematic » ni d'« epic » |

## 4. Structure d'un prompt vidéo très détaillé

**MiniMax H3** (250 à 500 mots) :
```
SHOT: Vertical 9:16 Instagram Reel filmed on a recent iPhone [by a friend on a gimbal / on a tripod / as a handheld selfie], real-time speed, one continuous shot with no cuts, [8] seconds.
SUBJECT: The same woman as in the start image — [identité courte] — her face, hair, body and outfit stay exactly identical from the first to the last frame.
OUTFIT IN MOTION: [comment chaque élément bouge — garde-robe § M].
ACTION SCRIPT:
0–3 s: [action physique précise + regard].
3–6 s: [action + geste humain].
6–8 s: [fin : regard caméra, sourire, petit geste final].
FACE & MICRO-GESTURES: [clignements, respiration, sourire qui monte, mèche replacée, regard qui s'échappe puis revient].
BACKGROUND LIFE: [figurant 1 et son action], [figurant 2], [véhicules, feuilles, vagues…]; extras never look at the camera.
CAMERA: [mouvement Cx complet : direction, vitesse, amplitude, distance, cadrage de fin] [commande]. Smooth and fluid, horizon level, eases in and out, no jerks, no zoom.
LIGHT: [source, direction, chaleur], consistent through the shot, shadows moving naturally with her.
REALISM: [bloc anti-IA].
AUDIO: [2 à 4 sons d'ambiance], no music.
```

**Seedance 2.5** (150 à 300 mots ; si la plateforme limite la longueur, raccourcis d'abord l'audio, puis les détails d'arrière-plan) :
```
@Image1 is the first frame and defines [Name]'s face, hair, body, outfit and the location. @Image2 defines her face only. (Ne garde @Image2 que si l'avatar est joint en plus.)
Vertical 9:16 iPhone Reel filmed [by a friend on a gimbal / on a tripod], real-time speed, one continuous shot, natural light.
0-3s: [action] — camera: [mouvement].
3-6s: [action] — camera continues the same [mouvement].
6-8s: [fin] — camera eases to a stop.
Background: [figurants et mouvements], extras never look at the camera.
Details: [tissu, cheveux, bijoux en mouvement], natural blinking, realistic skin.
Her face, hair and outfit stay identical in every second. No slow motion, no morphing, no warping.
<[sons d'ambiance]> No captions, no watermark, no background music.
```

---

## 5. Fiches formats

### V1 — Marche vers la caméra (menu 1)
- **Sources** : centre commercial (la caméra recule devant elle), rue de Miami, terrasses de café à Lyon, rue de New York.
- **Script 8 s** : 0-3 s elle avance d'un pas assuré, sac qui balance · 3-6 s elle replace une mèche, regarde le décor une seconde · 6-8 s elle revient au regard caméra, sourire qui monte, ralentit.
- **Caméra** : C2 (recul sur gimbal) ou C5 (fixe de loin).
- **Image de départ** : elle à 2-3 m (C2) ou à 8-10 m (C5), plein pied, en plein pas, dans une rue réelle de sa ville.
- **Vie en arrière-plan** : passants à des vitesses différentes, serveurs, voitures, palmes ou feuilles au vent.

### V2 — Assise → se lève → marche (bonus)
- **Script 8 s** : assise en terrasse, elle repose son verre · se lève en lissant sa robe · fait 2-3 pas vers la caméra.
- **Caméra** : C1 ou C5.

### V3 — Outfit check « Rate me 1-10 » (menu 2)
- **Sources** : 7 vidéos (couloir, chambre, dressing).
- **Script 10 s** : 0-3 s main sur la hanche, petit déhanché · 3-7 s demi-tour lent pour montrer le dos, regard par-dessus l'épaule · 7-10 s retour face caméra, main dans les cheveux, sourire en coin.
- **Caméra** : C1 (trépied) ou C11 en ouverture.
- **Image de départ** : face caméra, plein pied, au milieu du couloir ou de la chambre (décor D4 de son appartement).

### V4 — Sortie d'ascenseur ou de porte (menu 3)
- **Sources** : portes d'ascenseur qui s'ouvrent ; porte vitrée de boutique, puis suivi de dos.
- **Script 8 s** : 0-2 s les portes s'ouvrent, elle est déjà là, sac à la main · 2-6 s elle sort et marche vers la caméra · 6-8 s elle passe près de l'objectif, regard et sourire.
- **Caméra** : C1, puis légère approche ; ou C4 pour une porte de boutique.
- **H3** : image de départ (portes entrouvertes) + **image de fin** (elle devant la caméra) pour une transition parfaite.

### V5 — Selfie en voiture, la ceinture (menu 4)
- **Script 7 s** : 0-2 s elle regarde l'objectif, attrape la ceinture · 2-5 s elle la tire lentement en travers et la boucle (clic) · 5-7 s elle remet une mèche, sourire en coin, petit regard vers la route.
- **Caméra** : C9 (téléphone sur le tableau de bord).
- **Arrière-plan** : rue vue à travers les vitres, passants, voitures garées. Son : clic de la ceinture, rue étouffée.

### V6 — Selfie miroir ou comptoir (menu 5)
- **Script 8 s** : accoudée au comptoir de la salle de bain ou de la cuisine, elle joue avec ses cheveux, incline la tête, sourit, regarde son reflet puis la caméra.
- **Caméra** : C8 (selfie) ou miroir fixe, avec C6 légère.

### V7 — Petite danse / vibe (menu 6)
- **Script 8 s** : balancements d'épaules et de hanches **simples**, un pas à gauche, un pas à droite, rire, cheveux qui bougent. Pas de chorégraphie complexe (les membres se déforment).
- **Caméra** : C1.
- **Musique du pays** ajoutée dans l'application ; dans le prompt, demander « dancing to an upbeat rhythm, no music in the audio ».

### V8 — Cache-caméra → révélation (menu 7)
- **Script 6 s** : son avant-bras couvre presque tout l'objectif · elle l'écarte lentement · la tenue et le décor apparaissent, sourire.
- **Caméra** : C1 ou C7 ; avec H3, image de départ (bras devant) + image de fin (révélation).

### V9 — De dos + texte gag (bonus)
- « Ouvrir la porte à Abidjan 🇨🇮 / Paris 🇫🇷 / Lagos 🇳🇬 » : vue de dos devant une porte, avec une petite réaction différente toutes les 2 s. Le texte s'ajoute au montage.

### V10 — POV petit ami (menu 8)
- **Script 8 s** : caméra à hauteur d'un homme assis sur le canapé (on devine un genou ou un bras flou au premier plan, la télé allumée sur un match) · elle entre dans la pièce, habillée pour sortir · s'arrête, pose une main sur la hanche, l'air de dire « alors ? ».
- **Caméra** : C1 basse (hauteur d'assise).
- **Règle** : l'homme reste hors champ ou flou, sans aucun contact physique.

### V11 — POV fantaisie (bonus)
- « POV: you find out I'm a… » (vampire à Halloween, sirène à la plage…), lumière colorée, gros plans joueurs. Caméra C8.

### V12 — « Regarde l'arrière-plan » (menu 9)
- **Sources** : plan de dashcam où elle court vers la voiture pendant que des voisins arrosent ; terrasse de café avec un serveur derrière.
- **Script 8 s** : au premier plan elle marche ou court vers la caméra en souriant · au second plan un gag bon enfant se déroule (le vendeur de coco dont la noix roule, le voisin qui s'arrose par erreur, le serveur qui rattrape de justesse son plateau).
- **Caméra** : C5 ou C9.
- **Règle** : un gag bienveillant ; personne n'est humilié et aucun regard n'est déplacé.

### V13 — Elle parle face caméra (menu 10)
- **Script 10-12 s** : elle regarde l'objectif et dit 1 ou 2 phrases courtes (moins de 15 mots), avec des gestes naturels des mains et des micro-expressions.
- **Caméra** : C1 ou C6.
- **H3** : `At 1 second she looks into the lens and says, in English, warm and playful: "…"` · **Seedance** : `She says in English, warm and playful: {…}`. Une seule langue par vidéo.

### V14 — Traversée « luxe » (bonus)
- **Script 6 s** : elle traverse devant une vitrine élégante, le tissu flotte.
- **Caméra** : C3. Vitesse réelle (un léger ralenti n'est possible que si c'est demandé).

### V15 — Moment de vie (menu 11)
- Plage (elle marche au bord de l'eau, les vagues touchent ses pieds), piscine (elle s'assoit sur le bord et remue l'eau du pied), café (elle boit une gorgée, regarde la rue, sourit à la caméra), coucher de soleil (elle s'appuie à la rambarde, le vent dans les cheveux).
- **Caméra** : C2, C3, C4 ou C6 selon la scène.
- **Script** : 2 ou 3 gestes de la vie réelle, avec un rythme calme.

### V16 — Événement (menu 12)
- Mariage, gala, anniversaire, fête nationale, Tabaski, concert, Nouvel An…
- **Image de départ obligatoire** : elle dans la **tenue de l'événement** (`garde-robe.md` § J et § K) et dans le **décor de l'événement** (`decors.md` § Événements), avec les figurants.
- **Script 8 s** : elle arrive ou se tient au premier plan · un geste lié à l'événement (ajuster son gele, lever son verre, applaudir, danser légèrement, souffler les bougies) · regard caméra et sourire.
- **Caméra** : C6, C7, C10 ou C11.
- **Vie** : invités qui dansent, servent, discutent, applaudissent, sans jamais regarder la caméra.

---

## 6. Exemples complets

Fiche utilisée : « Aya Koné » (exemple de `templates/fiche-modele.md`). Remplace par la fiche réelle.

### Exemple A — V1 Marche vers la caméra · Plateau, Abidjan · 8 s

**Étape A — Image de départ · Nano Banana** (joindre la photo de l'avatar) :
```
Using the attached photo of my influencer Aya as the exact reference for her face, braids and body proportions, create a photorealistic vertical smartphone photo of her. Aya Koné is an adult 25-year-old Ivorian woman with deep brown skin with warm golden undertones and natural skin texture with visible pores, an oval face with high cheekbones, a softly rounded nose, full lips with a defined cupid's bow, large almond-shaped dark brown eyes, thick softly arched eyebrows, a tiny beauty mark just above the left corner of her upper lip, waist-length honey-brown ombré knotless box braids gathered in a high ponytail, and a curvy hourglass figure, 1.68 m tall.
It is 5:30 pm on a wide, clean sidewalk in the Plateau business district of Abidjan. She is mid-stride, walking toward the camera, about two meters away, her left foot forward and her weight moving onto it, her right arm swinging slightly and her left hand holding a small structured white top-handle bag (unbranded). She wears a fitted coral-orange ribbed-knit midi dress with thin straps and a square neckline that hugs her figure, gold strappy flat sandals, chunky gold hoop earrings and her thin gold chain with a small letter "A" pendant; almond nude nails, soft glam makeup with glowy skin and nude gloss. Her expression is relaxed and confident, eyes on the lens, a soft closed-mouth smile just starting.
In the foreground, the edge of a concrete planter with a tropical plant cuts into the bottom-left corner. Behind her, glass office towers reflect the warm sky, two royal palms line the avenue, an orange taxi and a white SUV are stopped at a traffic light, and three office workers walk in different directions — a man in a light-blue shirt on his phone, two women chatting with tote bags. The low sun comes from the left, putting warm light on the left side of her face and casting long shadows across the pale paving.
The photo is a frame from a vertical iPhone video held by a friend walking backward, chest height, framed from head to mid-shin with space above her ponytail, subject slightly off-center. Natural iPhone colors with slight HDR, realistic skin with tiny baby hairs at the hairline, slight natural creases in the knit fabric, no beauty filter, no studio light, no text, no logos. Vertical 9:16 aspect ratio, high resolution.
```

**Étape A — Image de départ · GPT Image 2** (joindre la photo de l'avatar) :
```
References: Image 1 = my influencer Aya — her face, braids and body; keep her identity exactly (face shape, eyes, nose, lips, skin tone, beauty mark, hairstyle, proportions).
SUBJECT: Aya Koné, an adult 25-year-old Ivorian woman. Deep brown skin with warm golden undertones, natural skin texture with visible pores. Oval face, high cheekbones, softly rounded nose, full lips with a defined cupid's bow. Large almond-shaped dark brown eyes, thick softly arched eyebrows. A tiny beauty mark just above the left corner of her upper lip. Waist-length knotless box braids with a honey-brown ombré in a high ponytail. Curvy hourglass figure, 1.68 m tall.
OUTFIT: A fitted coral-orange ribbed-knit midi dress with thin straps and a square neckline, hugging her figure to mid-calf; gold strappy flat sandals; a small structured white top-handle bag (unbranded) in her left hand; chunky gold hoops; thin gold chain with a small "A" pendant; almond nude nails; soft glam makeup, glowy skin, nude gloss.
POSE & GESTURE: Mid-stride walking toward the camera, left foot forward with her weight transferring onto it, right arm swinging slightly, shoulders relaxed, chin level, eyes on the lens, a soft closed-mouth smile just beginning.
FOREGROUND: The edge of a concrete planter with a tropical plant in the bottom-left corner.
MIDGROUND: A wide, clean pale-paved sidewalk in the Plateau business district of Abidjan, about two meters between her and the camera.
BACKGROUND: Glass office towers reflecting the warm sky, two royal palms, an orange taxi and a white SUV stopped at a traffic light, three office workers walking in different directions (a man in a light-blue shirt on his phone, two women chatting with tote bags), none looking at the camera.
CAMERA: A frame from a vertical iPhone video held at chest height by a friend walking backward; framed from head to mid-shin with space above the ponytail; subject slightly off-center; vertical 9:16.
LIGHT: 5:30 pm low sun from the left, warm light on the left side of her face, long shadows across the paving, reflections on the glass towers.
REALISM: Natural iPhone colors with slight HDR, visible pores and baby hairs, natural creases in the knit, sharp background details. No beauty filter, no studio lighting, no extra fingers, no text, no logos, no watermark.
```

**Étape B — MiniMax H3** (image-to-video, 9:16, 8 s ; image de départ + avatar en référence si possible) :
```
SHOT: Vertical 9:16 Instagram Reel filmed on a recent iPhone by a friend on a gimbal, real-time speed, one continuous shot with no cuts, 8 seconds.
SUBJECT: The same woman as in the start image — Aya, the adult 25-year-old Ivorian woman with deep brown skin, a tiny beauty mark above the left corner of her lip, honey-brown ombré knotless braids in a high ponytail and a curvy hourglass figure — her face, braids, body and coral dress stay exactly identical from the first to the last frame.
OUTFIT IN MOTION: The fitted coral knit moves with her body, small natural creases forming at the waist and hips with each step; her ponytail of braids swings with weight and momentum and taps lightly against her back; the gold hoops sway and glint in the sun; the white bag swings slightly at her side.
ACTION SCRIPT:
0–3 s: She walks confidently toward the camera at a normal pace, heels of her sandals striking the pavement, weight shifting naturally from hip to hip, eyes on the lens.
3–6 s: She glances to her right toward the passing traffic for a second, then lifts her free hand and tucks a loose braid behind her ear.
6–8 s: She looks back into the lens and a real smile builds slowly, she slows her pace slightly as the shot ends.
FACE & MICRO-GESTURES: Natural blinking, relaxed breathing, a subtle lip press before the smile, her eyebrows lifting slightly when she looks back at the camera.
BACKGROUND LIFE: The man in the light-blue shirt keeps walking away while talking on his phone, the two women cross behind her chatting, the orange taxi pulls away from the light, palm fronds move gently in the breeze; extras never look at the camera.
CAMERA: The friend walks backward in front of her holding the phone on a gimbal, gliding smoothly at exactly her walking pace and keeping a constant distance of about two meters, framing her from head to mid-shin, eases to a stop in the last second [tracking shot]. Smooth and fluid, horizon level, no jerks, no zoom.
LIGHT: Low late-afternoon sun from the left, warm on the left side of her face, consistent through the shot, her long shadow moving with her across the paving.
REALISM: Real-time speed, no slow motion. Natural human timing with small pauses. Realistic weight and physics. Background people move independently and never look at the camera. The background stays stable and consistent, no warping, no morphing, no flickering. Her face, hands and body keep correct anatomy from the first to the last frame. Natural motion blur, iPhone video color, no cinematic grading, no text on screen.
AUDIO: Footsteps of sandals on pavement, city traffic and a distant car horn, light breeze, no music.
```

**Étape B bis — Seedance 2.5** (9:16, 8 s ; @Image1 = image de départ, @Image2 = avatar) :
```
@Image1 is the first frame and defines Aya's face, braids, body, coral dress and the Plateau sidewalk. @Image2 defines her face only.
Vertical 9:16 iPhone Reel filmed by a friend on a gimbal, real-time speed, one continuous shot, warm late-afternoon sun from the left.
0-3s: She walks confidently toward the camera, sandal heels striking the pavement, hips shifting naturally, eyes on the lens — camera: glides backward at her exact pace, constant two-meter distance, head-to-shin framing.
3-6s: She glances right at the traffic for a second, then tucks a loose braid behind her ear — camera continues the same smooth backward glide.
6-8s: She looks back into the lens, a real smile building, slowing slightly — camera eases to a stop.
Background: a man in a light-blue shirt walks away on his phone, two women cross chatting, an orange taxi pulls away, palm fronds sway; extras never look at the camera.
Details: knit dress creasing naturally at the hips, braids swinging with weight, gold hoops glinting, white bag swinging; natural blinking, realistic skin.
Her face, braids and outfit stay identical in every second. No slow motion, no morphing, no warping.
<sandal footsteps on pavement, city traffic, light breeze> No captions, no watermark, no background music.
```

**Texte à l'écran** : « POV: you see her after her shift in Plateau 👀 » · **Son** : afrobeats ou amapiano tendance · **Légende** : « After-shift walk 🌇 rate the dress 1-10 » *(FR : Petite marche après la garde, note la robe sur 10)* · **Hashtags** : #abidjan #civ225 #plateau #ivoirienne #ootd

### Exemple B — V3 Outfit check · son appartement · 10 s

**Étape A — Image de départ · Nano Banana** (joindre l'avatar) :
```
Using the attached photo of my influencer Aya as the exact reference for her face, braids and body proportions, create a photorealistic vertical smartphone photo of her. Aya Koné is an adult 25-year-old Ivorian woman with deep brown skin with warm golden undertones and natural skin texture with visible pores, an oval face with high cheekbones, a softly rounded nose, full lips with a defined cupid's bow, large almond-shaped dark brown eyes, thick softly arched eyebrows, a tiny beauty mark just above the left corner of her upper lip, honey-brown ombré knotless box braids, and a curvy hourglass figure, 1.68 m tall.
She stands in the middle of the bright hallway of her modern apartment in Cocody, Abidjan, facing the camera, weight on her right hip, right hand resting on her waist, left arm relaxed, a playful confident half-smile. She wears a fitted mermaid maxi dress tailored from vivid wax-print cotton in orange, emerald and gold geometric patterns, with an off-the-shoulder neckline and a flared hem brushing the floor, a matching wax head wrap tied high in a sculpted knot with her braids falling from it down her back, gold strappy heels, chunky gold hoops and her thin gold "A" pendant; glossy red almond nails, soft glam makeup.
In the foreground, the light oak floor leads to her. Around her: white walls, two white doors with black handles, a tall monstera plant in a woven basket on the left, a slim wall mirror on the right reflecting part of her back, recessed ceiling spots, and a window at the end of the hallway with sheer white curtains glowing with daylight.
The phone is on a tripod at chest height, full body in frame with space above the head wrap and below her feet, centered. Soft natural daylight from the window mixed with warm ceiling spots, gentle shadows on the floor. Natural iPhone colors, realistic skin and visible fabric weave, no beauty filter, no text, no logos. Vertical 9:16 aspect ratio, high resolution.
```

**Étape B — MiniMax H3** (image-to-video, 9:16, 10 s) :
```
SHOT: Vertical 9:16 Instagram Reel filmed on a recent iPhone locked off on a tripod at chest height, real-time speed, one continuous shot with no cuts, 10 seconds.
SUBJECT: The same woman as in the start image — Aya, the adult 25-year-old Ivorian woman with deep brown skin, a beauty mark above the left corner of her lip, honey-brown ombré braids under a sculpted wax head wrap, curvy hourglass figure — face, head wrap, braids and wax-print mermaid dress stay exactly identical from first to last frame.
OUTFIT IN MOTION: The stiff wax-print cotton holds its sculpted mermaid shape, only the flared hem swaying and brushing the floor; her braids swing behind her with weight; the gold hoops glint.
ACTION SCRIPT:
0–3 s: Hand on her hip, she shifts her weight from one hip to the other and gives a small playful shoulder roll, eyes on the lens.
3–7 s: She turns slowly on the spot to her left until her back faces the camera, showing the fitted back of the dress and the braids falling from the head wrap, and glances back over her right shoulder with a teasing look.
7–10 s: She completes the turn to face the lens, touches the knot of her head wrap with her fingertips and holds a confident pose with a widening smile.
FACE & MICRO-GESTURES: Natural blinking, a short amused breath through the nose at the glance back, eyebrows lifting slightly on the final smile.
BACKGROUND LIFE: The sheer curtains at the end of the hallway move gently in the breeze from the open window; in the wall mirror her reflection follows her movement correctly; Biscuit the grey cat walks slowly across the far end of the hallway and disappears through a doorway.
CAMERA: Phone locked off on the tripod, perfectly still for the whole shot, full body framing [static].
LIGHT: Soft daylight from the window behind plus warm ceiling spots, consistent; her soft shadow on the floor turns with her.
REALISM: Real-time speed, no slow motion, natural human timing, realistic weight in the turn, stable background, no warping, no morphing, correct anatomy throughout, natural motion blur, iPhone video color, no text on screen.
AUDIO: Soft rustle of stiff cotton, the click of heels on the wooden floor during the turn, quiet room tone, distant street sounds through the window, no music.
```

**Étape B bis — Seedance 2.5** (9:16, 10 s) :
```
@Image1 is the first frame and defines Aya's face, head wrap, braids, wax-print mermaid dress and her apartment hallway. @Image2 defines her face only.
Vertical 9:16 iPhone Reel on a tripod at chest height, fixed camera, real-time speed, one continuous shot, soft daylight.
0-3s: Hand on her hip, she shifts her weight from hip to hip with a small playful shoulder roll, eyes on the lens.
3-7s: She turns slowly to her left until her back faces the camera, then glances back over her right shoulder with a teasing look.
7-10s: She finishes the turn, touches the knot of her head wrap and holds a confident pose with a widening smile.
Background: sheer curtains moving softly at the window, her reflection in the wall mirror matching her moves, a grey cat crossing the far end of the hallway.
Details: stiff wax cotton keeping its shape, hem swaying, braids swinging with weight, gold hoops glinting; natural blinking, realistic skin.
Her face, head wrap and outfit stay identical in every second. No slow motion, no morphing, no warping.
<heels on wooden floor, rustle of cotton, quiet room tone> No captions, no watermark, no background music.
```

**Texte à l'écran** : « Sunday fit 🇨🇮 rate me 1-10 😏 » · **Son** : coupé-décalé tendance · **Légende** : « Wax queen energy 👑 1-10? » · **Hashtags** : #abidjan #civ225 #waxprint #africanfashion #ootd

### Exemple C — V16 Événement : invitée à un mariage à Abidjan · 8 s

Ici, l'étape A est **indispensable** : elle doit apparaître dans une tenue d'invitée coordonnée et dans le décor du mariage, ce que l'avatar seul ne contient pas.

**Étape A — Image de départ · GPT Image 2** (joindre l'avatar) :
```
References: Image 1 = my influencer Aya — her face, braids and body; keep her identity exactly.
SUBJECT: Aya Koné, an adult 25-year-old Ivorian woman. Deep brown skin with warm golden undertones, natural skin texture with visible pores. Oval face, high cheekbones, softly rounded nose, full lips with a defined cupid's bow. Large almond-shaped dark brown eyes, thick softly arched eyebrows. A tiny beauty mark just above the left corner of her upper lip. Honey-brown ombré knotless braids styled in an elegant low bun. Curvy hourglass figure, 1.68 m tall.
OUTFIT: A wedding-guest gown tailored from emerald and gold wax-print cotton: a structured corset bodice with a sweetheart neckline and visible boning, short puff sleeves, a fitted mermaid skirt flaring at the floor; a matching emerald head wrap tied in a large sculpted fan shape; gold statement drop earrings, stacked gold bangles on her left wrist, her thin gold "A" pendant; glossy emerald almond nails; evening glam makeup with defined lashes and warm bronze lids.
POSE & GESTURE: Standing three-quarters to the camera near the dance floor, her right hand lightly adjusting the edge of her head wrap, her left hand holding a small gold beaded clutch at her hip, chin slightly raised, a radiant open smile toward the camera.
FOREGROUND: The corner of a round guest table with a white tablecloth, a gold charger plate and a glass of sparkling juice, cut by the frame at bottom left.
MIDGROUND: A decorated reception hall in Abidjan, gold Chiavari chairs, a white-and-gold flower arrangement on a tall stand beside her.
BACKGROUND: A flower-decorated stage with the bride and groom seen small and far away, rows of guests in the same coordinated emerald-and-gold wax outfits, several women dancing with raised arms, a man spraying banknotes over the dancers, a DJ booth with colored lights, warm string lights and gold drapes on the ceiling; nobody in the background looks at the camera.
CAMERA: A frame from a vertical iPhone video held at chest height by a friend at the next table, framed from head to knees, subject slightly right of center; vertical 9:16.
LIGHT: Warm golden chandelier and string-light glow from above, a soft colored DJ light touching the background, her face evenly lit and glowing.
REALISM: Natural iPhone colors in warm indoor light, slight grain, visible pores and fabric weave, slight motion blur on the dancing guests. No beauty filter, no studio lighting, no extra fingers, no text, no logos, no watermark.
```

**Étape B — MiniMax H3** (image-to-video, 9:16, 8 s) :
```
SHOT: Vertical 9:16 Instagram Reel filmed on a recent iPhone by a friend on a small gimbal, real-time speed, one continuous shot with no cuts, 8 seconds.
SUBJECT: The same woman as in the start image — Aya, the adult 25-year-old Ivorian woman with deep brown skin, a beauty mark above the left corner of her lip, braids in a low bun under an emerald fan-shaped head wrap — face, head wrap and emerald-and-gold wax gown stay exactly identical from first to last frame.
OUTFIT IN MOTION: The structured corset keeps its shape, the mermaid hem sways at the floor as she moves to the beat, the gold bangles slide and clink on her wrist, the drop earrings swing and catch the warm light.
ACTION SCRIPT:
0–3 s: She finishes adjusting the edge of her head wrap and looks into the lens with a radiant smile.
3–6 s: She starts to move gently to the music, a small side step left and right with relaxed shoulders, raising her clutch hand slightly with the rhythm.
6–8 s: She laughs and turns her head toward the dance floor as if called by a friend, then looks back at the camera with a playful wink.
FACE & MICRO-GESTURES: Natural blinking, a genuine laugh with cheeks lifting, slight head bob on the beat.
BACKGROUND LIFE: Guests in coordinated emerald-and-gold outfits dance energetically at different rhythms, a man sprays banknotes that flutter down, a waiter in a white jacket crosses with a tray of drinks, the DJ lights sweep slowly; nobody looks at the camera.
CAMERA: A slow, smooth push-in from head-to-knees framing to a medium close-up from the waist up over the whole duration, small amplitude, steady speed, eases out at the end [push in]. Smooth and fluid, no jerks.
LIGHT: Warm golden chandelier and string-light glow, consistent on her face; colored DJ light only touching the background.
REALISM: Real-time speed, no slow motion, natural human timing, realistic weight and physics, background people moving independently, stable background, no warping, no morphing, correct anatomy, natural motion blur, iPhone video color, no text on screen.
AUDIO: Loud joyful crowd chatter and cheering, clinking glasses, the muffled bass of party music from the speakers, no clear lyrics.
```

**Étape B bis — Seedance 2.5** (9:16, 8 s) :
```
@Image1 is the first frame and defines Aya's face, head wrap, emerald-and-gold wax gown and the wedding reception hall. @Image2 defines her face only.
Vertical 9:16 iPhone Reel filmed by a friend on a small gimbal, real-time speed, one continuous shot, warm golden indoor light.
0-3s: She finishes adjusting her head wrap and smiles radiantly into the lens — camera: slow smooth push-in begins.
3-6s: She moves gently to the music, small side steps, clutch hand lifting with the rhythm — camera continues the same slow push-in.
6-8s: She laughs, turns her head toward the dance floor, then winks at the camera — camera eases to a stop at a waist-up framing.
Background: guests in matching emerald-and-gold outfits dancing, banknotes fluttering down, a waiter crossing with drinks, sweeping DJ lights; nobody looks at the camera.
Details: corset keeping its shape, hem swaying, bangles clinking, earrings swinging; natural blinking, realistic skin.
Her face, head wrap and outfit stay identical in every second. No slow motion, no morphing, no warping.
<crowd cheering, clinking glasses, muffled bass> No captions, no watermark.
```

**Texte à l'écran** : « When it's your best friend's wedding in Abidjan 💚 » · **Son** : coupé-décalé de mariage tendance · **Légende** : « Wedding guest uniform on point 💚✨ who's next to marry? » *(FR : La tenue des invités au top, c'est qui la prochaine ?)* · **Hashtags** : #abidjan #mariageivoirien #civ225 #weddingguest #waxprint

---

## 7. Textes à l'écran (hooks)

À ajouter dans CapCut, Instagram ou TikTok, **jamais** dans le générateur : les IA vidéo écrivent mal le texte. Place-les dans le tiers supérieur ou au centre, en police blanche simple avec une ombre légère.

- Notation : « Rate me 1-10 😏 », « Rate the fit », « From 1 to 10? »
- POV : « POV: you match with a nurse from Abidjan », « POV: she said 5 minutes », « POV: you find out I'm a… »
- Curiosité : « Watch closely… you might miss it 👀 », « What's happening in the background? », « Wait for it… »
- Question : « Would you date a [métier]? », « Which one: 1 or 2? »
- Identité : « Ivorian girls when… », « Things nobody tells you about being a nurse in Abidjan »
- Gag pays : « Open the door in: Abidjan 🇨🇮 / Paris 🇫🇷 / Lagos 🇳🇬 »
- Événement : « When it's your best friend's wedding », « Tabaski fit check », « Birthday girl 🎂 »

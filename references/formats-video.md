# Formats vidéo (Reels / TikTok)

Les formats et les rythmes de ce fichier ont été **mesurés image par image** sur les vidéos de référence, toutes les 0,5 s. Chaque vidéo se fait en **2 étapes** :
- **(A) Image de départ** : l'influenceuse (avatar en référence) dans la tenue et le décor exacts, en 9:16, dans la pose du début du mouvement ;
- **(B) Animation image-to-video** avec MiniMax H3 et Seedance 2.5.

Syntaxe propre à chaque outil : `outils-ia.md` § 5 et § 6. Tenues : toujours le style des sources (`garde-robe.md`), quel que soit le pays.

## Sommaire
1. Le tempo naturel (le plus important)
2. Correspondance avec le menu
3. Grammaire caméra
4. Bloc anti-IA vidéo
5. Structure d'un prompt vidéo
6. Chorégraphies V1 à V16 (mesurées sur les références)
7. Exemples complets (A, B, C)
8. Textes à l'écran

---

## 1. Le tempo naturel (le plus important)

**Le défaut n° 1 des vidéos IA, c'est la lenteur** : les mouvements s'étirent, flottent, durent trop longtemps. Les vidéos de référence font exactement l'inverse.

**Mesures sur les vidéos de référence**

| Format | Durée réelle | Rythme observé |
|---|---|---|
| Marche dans la rue | 3,9 s | 2 pas par seconde ; regard sur le côté à 2 s, main dans les cheveux à 3 s |
| Sortie d'ascenseur | 7,2 s | portes ouvertes en 0,5 s ; 5 pas en 2,5 s ; demi-tour en 0,5 s ; regard par-dessus l'épaule à 6,5 s |
| Outfit check couloir | 6,2 s | **6 gestes en 6 s** : appui sur la hanche (0-1,5 s), main sur la hanche (2 s), demi-tour de dos (2,5 s, en 0,5 s), retour de face (3 s), main dans les cheveux (3,5-4 s), coup de cheveux + approche caméra (5-5,5 s) |
| « Rate me 1-10 » | 6 s | main dans les cheveux (0-1 s), recul en pied (1,5 s), main sur la hanche (3,5 s), deux mains sur les hanches (4 s), pas vers la caméra (5 s) |
| Selfie voiture (ceinture) | 7,1 s | ceinture tirée en 1,5 s, bouclée en 1,5 s, regard caméra à 3,5 s, ajuste la sangle de 4 à 6,5 s |
| Comptoir de cuisine | 6,7 s | nouveau geste toutes les 0,5-1 s (cheveux, penchée, mèche, regard) |
| Petite danse | 4,5 s | gestes des mains et rires à chaque temps (0,5 s) |
| Poses sur la musique | 14 s | une nouvelle pose **à chaque temps**, environ toutes les 0,9 s |
| Sortie de boutique | 8,5 s | **2 plans** : sortie et passage devant la caméra (0-4 s) / coupe / suivie de dos (4-8,5 s) |
| « Regarde l'arrière-plan » | 7,9 s | **3 plans** : elle marche (0-1,5 s) / coupe sur le serveur (1,5-2,5 s) / coupe sur les clients (2,5-4 s) / retour sur elle (4-7,9 s) |

**Règles de tempo à appliquer à chaque prompt vidéo**
1. **Durée courte** : 5 à 6 s par défaut, 8 s au maximum. Au-delà, l'IA remplit le temps avec de la lenteur.
2. **Un nouveau geste toutes les 0,5 à 1 s** pour les formats de pose (outfit check, danse, selfie). Écris le script **seconde par seconde**.
3. **Marche à vitesse normale** : `brisk natural walking pace, about two steps per second`.
4. **Gestes rapides et décontractés** : un demi-tour se fait `in half a second`, un coup de cheveux `in one quick motion`.
5. **Aucun temps mort** : `each movement flows straight into the next, no pause longer than half a second`.
6. **Mots interdits**, qui ralentissent tout : `slowly`, `gently`, `gradually`, `softly` (pour un mouvement), `lingering`, `graceful`, `dreamy`, `eases`, `smile builds slowly`, `cinematic`. Mots à utiliser : `quick`, `brisk`, `casual`, `snappy`, `in one motion`, `naturally`, `playful`.
7. **Plusieurs plans courts** si la vidéo dépasse 6 s : 2 ou 3 plans de 2 à 3 s, comme dans les références (multi-plan natif de Seedance et H3).
8. **Si le résultat paraît encore lent**, l'abonné peut générer en 5 s, ou accélérer la vidéo à 1,2× dans CapCut. C'est ce que font les vrais créateurs.

## 2. Correspondance avec le menu

| Menu | Format | Menu | Format |
|---|---|---|---|
| 1 Marche vers la caméra | V1 | 7 Cache-caméra | V8 |
| 2 Outfit check | V3 | 8 POV petit ami | V10 |
| 3 Ascenseur / porte | V4 | 9 Regarde l'arrière-plan | V12 |
| 4 Selfie voiture | V5 | 10 Face caméra | V13 |
| 5 Selfie miroir / comptoir | V6 | 11 Moment de vie | V15 |
| 6 Petite danse | V7 | 12 Événement | V16 |

Formats bonus à proposer quand c'est pertinent : V2 (assise → se lève), V9 (de dos + texte gag), V11 (POV fantaisie), V14 (traversée devant une boutique).

## 3. Grammaire caméra

Dans les références, la caméra est **toujours un téléphone** : tenu par une amie qui marche, posé sur un trépied, ou tenu en selfie. Les mouvements de drone, les orbites à 360°, les zooms brutaux et les glissés trop parfaits « en apesanteur » trahissent l'IA. Une vraie caméra de téléphone tenue à la main a un **léger balancement naturel**, stabilisé.

| Code | Mouvement | Phrase anglaise à utiliser | Formats |
|---|---|---|---|
| C1 | Trépied fixe | `phone locked off on a tripod at chest height, slightly low angle, completely still [static]` | V3, V7, V9, V13 |
| C2 | Une amie recule devant elle | `a friend walks backward in front of her holding the phone, matching her brisk pace and keeping about two meters away, natural slight walking bounce, phone-stabilized, framing her head to knees [tracking shot]` | V1, V15 |
| C3 | Travelling latéral | `the friend walks alongside her at the same pace, about three meters to her side, phone-stabilized [tracking shot]` | V14, V15 |
| C4 | Suivi de dos | `the friend follows two meters behind her at her walking pace, natural handheld bounce [tracking shot]` | V4, V15 |
| C5 | Fixe de loin | `phone on a tripod far ahead; she walks toward the lens at normal speed, growing in the frame [static]` | V1, V12 |
| C6 | Petite approche | `a short, steady push-in from full body to waist up during the last two seconds [push in]` | V3, V16 |
| C7 | Panoramique qui la suit | `the phone stays in place and pans to follow her as she walks past the camera [pan]` | V4 |
| C8 | Selfie à bout de bras | `handheld front-camera selfie at arm's length, small natural hand movements` | V5, V6, V11 |
| C9 | Téléphone posé | `phone propped on the dashboard / counter, fixed, tiny natural vibrations` | V5, V6, V12 |

**Règles** : un seul mouvement par plan ; vitesse calée sur celle du sujet (« matching her pace ») ; horizon droit ; jamais de zoom combiné à un déplacement ; jamais de « then the camera… », que H3 transforme en coupe non voulue.

## 4. Bloc anti-IA vidéo

À coller dans **chaque** prompt vidéo :
```
Real-time 1x speed with the fast, casual pace of a real Instagram Reel: no slow motion, no time-stretching, no lingering. Each movement is quick and natural and flows straight into the next, with no pause longer than half a second. When she walks, it is a normal brisk pace of about two steps per second. Realistic weight and physics: heels strike the ground, hips shift with each step, hair and fabric bounce and settle immediately. Background people move at normal speed, independently, and never look at the camera. The background stays stable: no warping, no morphing, no flickering. Her face, hands and body keep correct anatomy from the first to the last frame. Natural motion blur, iPhone video color, no cinematic grading, no text on screen.
```

| Signe d'IA | Antidote |
|---|---|
| Mouvements lents, flottants | Script seconde par seconde, verbes rapides, « about two steps per second », durée de 5 à 6 s |
| Temps morts, poses figées | « no pause longer than half a second », un geste par seconde |
| Sourire figé | Expressions qui changent vite : regard ailleurs → retour caméra → sourire |
| Figurants immobiles ou au ralenti | « move at normal speed, independently, never look at the camera » + leur action précise |
| Caméra qui flotte | Téléphone tenu à la main avec un léger balancement, ou trépied fixe |
| Décor qui se déforme | Un seul mouvement de caméra, simple |
| Mains déformées | Gestes simples : cheveux, hanche, sac, sangle, ourlet |

## 5. Structure d'un prompt vidéo

**MiniMax H3** (image-to-video, 9:16, **6 s** ; 250 à 400 mots) :
```
SHOT: Vertical 9:16 Instagram Reel filmed on a recent iPhone [by a friend walking backward / on a tripod / as a handheld selfie], real-time 1x speed, fast casual pace, one continuous shot with no cuts, 6 seconds.
SUBJECT: The same adult woman as in the start image, exactly as she appears there — face, hair, body and outfit identical from first to last frame.
OUTFIT IN MOTION: [comment la tenue réagit — garde-robe § M, avec des verbes rapides : bounces, swings, snaps back].
ACTION SCRIPT (one quick action per second, flowing without pauses):
0–1 s: [geste].
1–2 s: [geste].
2–3 s: [geste].
3–4 s: [geste].
4–5 s: [geste].
5–6 s: [geste final : regard caméra, sourire, pas vers l'objectif].
BACKGROUND LIFE: [2 ou 3 figurants et leur action à vitesse normale], extras never look at the camera.
CAMERA: [mouvement Cx] [commande].
LIGHT: [source, direction], consistent.
REALISM: [bloc anti-IA].
AUDIO: [2 à 4 sons d'ambiance], no music.
```

**Seedance 2.5** (9:16, **5 à 6 s** ; 150 à 250 mots) :
```
@Image1 is the first frame and defines [Name]'s face, hair, body, outfit and the location. @Image2 defines her face only.
Vertical 9:16 iPhone Reel, real-time speed, fast casual pace like a real Instagram Reel, one continuous shot.
0-1s: [geste]. 1-2s: [geste]. 2-3s: [geste]. 3-4s: [geste]. 4-5s: [geste]. 5-6s: [geste final].
Camera: [mouvement Cx].
Background: [figurants à vitesse normale], nobody looks at the camera.
Details: [tissu, cheveux, bijoux qui rebondissent].
Quick natural movements flowing into each other, no pauses, no slow motion. Her face, hair and outfit stay identical. No morphing, no warping.
<[sons d'ambiance]> No captions, no watermark, no background music.
```

**Version multi-plans** (vidéos de plus de 6 s, ou formats V4 et V12) : découpe en 2 ou 3 plans de 2 à 3 s.
- H3 : `[Shot 1] 0–3 s: … [Shot 2] At 00:03 the camera cuts to …`
- Seedance : `Shot 1 (0-3s): … Shot 2 (3-6s): …`
- À chaque plan, rappelle « same woman and same outfit as the start image », sans la décrire.

**Jamais de description physique** dans un prompt vidéo (ni teint, ni traits, ni cheveux, ni silhouette) : l'image de départ et l'avatar portent son apparence, et un texte en plus les concurrence et fait dériver le visage pendant le mouvement. Les cheveux n'apparaissent que dans les gestes et le mouvement (« her hair bounces », « she tucks a strand behind her ear »).

---

## 6. Chorégraphies (mesurées sur les références)

Chaque script est calé sur le rythme réel de la vidéo de référence. Garde le rythme, adapte le décor et la tenue.

### V1 — Marche vers la caméra (menu 1) · 6 s · C2 ou C5
Référence : rue, 3,9 s ; centre commercial, 9,7 s.
- 0–1 s : déjà en pleine marche vers la caméra, pas vifs, sac qui balance.
- 1–2 s : deux pas de plus, hanches qui bougent, regard d'une demi-seconde vers une vitrine ou la rue.
- 2–3 s : revient au regard caméra, remet une mèche derrière l'oreille sans s'arrêter.
- 3–4 s : petit sourire, deux pas.
- 4–5 s : passe la main dans ses cheveux ou ajuste la bretelle de son sac.
- 5–6 s : s'arrête net devant l'objectif, appui sur une hanche, sourire.
- **Arrière-plan** : passants à vitesse normale dans les deux sens, une voiture qui passe.

### V2 — Assise → se lève → marche (bonus) · 6 s · C1
- 0–1 s : assise en terrasse, elle repose son verre.
- 1–2 s : se lève d'un seul mouvement.
- 2–3 s : lisse sa robe des deux mains et attrape son sac.
- 3–6 s : 5 ou 6 pas vifs vers la caméra, regard dans l'objectif.

### V3 — Outfit check « Rate me 1-10 » (menu 2) · 6 s · C1 (+ C6 à la fin)
Référence : couloir, 6,2 s (6 gestes).
- 0–1 s : face caméra, elle bascule son poids sur la hanche droite.
- 1–2 s : main posée sur la hanche, petit roulé d'épaule.
- 2–3 s : **demi-tour rapide (en une demi-seconde)** pour montrer le dos, regard par-dessus l'épaule.
- 3–4 s : se retourne de face et passe la main dans ses cheveux.
- 4–5 s : rejette ses cheveux derrière l'épaule d'un geste vif.
- 5–6 s : un pas vers la caméra, les deux mains glissent de la taille aux hanches, sourire confiant ; la caméra se rapproche jusqu'à la taille.

### V4 — Sortie d'ascenseur ou de porte (menu 3) · 6 s · C1 puis C7
Référence : ascenseur, 7,2 s ; porte de boutique, 8,5 s (2 plans).
- 0–1 s : les portes s'ouvrent vite ; elle est déjà là, sac à la main.
- 1–3 s : elle sort et marche vers la caméra (4 ou 5 pas vifs).
- 3–4 s : arrive à côté de l'objectif, coup d'œil dans la caméra.
- 4–5 s : passe devant la caméra, qui pivote pour la suivre ; on la voit de dos.
- 5–6 s : elle s'éloigne dans le couloir et regarde par-dessus son épaule.
- **H3** : image de départ (portes fermées ou entrouvertes) + image de fin si besoin.

### V5 — Selfie en voiture, la ceinture (menu 4) · 6 s · C9
Référence : 7,1 s.
- 0–1,5 s : elle attrape la ceinture au-dessus de l'épaule et la tire en travers de la poitrine.
- 1,5–3 s : regarde vers le bas et clique la boucle.
- 3–4 s : relève les yeux droit dans l'objectif.
- 4–6 s : ajuste la sangle sur son épaule du bout des doigts, petite inclinaison de tête, sourire en coin.
- **Son** : clic de la boucle, rue étouffée.

### V6 — Selfie miroir ou comptoir (menu 5) · 6 s · C8 ou C9
Référence : comptoir de cuisine, 6,7 s.
- 0–1 s : main dans les cheveux, regard caméra.
- 1–2 s : se penche légèrement en avant, tête inclinée.
- 2–3 s : rejette ses cheveux en arrière.
- 3–4 s : joue avec une mèche, regard sur le côté.
- 4–5 s : revient à la caméra, petite moue.
- 5–6 s : sourire, s'appuie sur ses mains.

### V7 — Petite danse / vibe (menu 6) · 5 s · C1
Référence : 4,5 s ; poses sur la musique, une par temps.
- Un mouvement **à chaque temps (environ 0,5 s)** : rebond d'épaules, petit pas à gauche puis à droite, geste des mains, rire, cheveux qui volent.
- Pas de chorégraphie complexe (les membres se déforment). `dancing to an upbeat rhythm, a new simple move on every beat, no music in the audio`.

### V8 — Cache-caméra → révélation (menu 7) · 5 s · C1
- 0–2 s : son avant-bras couvre presque tout l'objectif, ses yeux visibles au-dessus.
- 2–2,5 s : elle écarte le bras d'un coup.
- 2,5–5 s : la tenue apparaît ; elle ajuste une bretelle, rejette ses cheveux, sourire.

### V9 — De dos + texte gag (bonus) · 6 s · C1
- Vue de dos devant une porte, **un petit mouvement différent toutes les 1,5 s** (déhanché, main dans les cheveux, regard par-dessus l'épaule, pas en arrière). Le texte (« Open the door in: Abidjan / Paris / Lagos ») s'ajoute au montage.

### V10 — POV petit ami (menu 8) · 8 s · C1 basse
Référence : 12 s, en un seul plan.
- 0–1 s : la porte s'ouvre et elle entre, sac à la main.
- 1–4 s : traverse la pièce vers la caméra à pas normaux (5 ou 6 pas), jette un œil à son téléphone.
- 4–5 s : s'arrête devant lui, main sur la hanche, l'air de dire « alors ? ».
- 5–8 s : s'assoit sur le bord du lit ou du canapé à côté de la caméra et le regarde en souriant.
- **Premier plan** : un genou ou un bras d'homme flou au bord du cadre, la télé allumée. Aucun contact physique.

### V11 — POV fantaisie (bonus) · 5 s · C8
- « POV: you find out I'm a… » : lumière colorée, gros plans joueurs, une expression qui change chaque seconde.

### V12 — « Regarde l'arrière-plan » (menu 9) · 6 s · multi-plans
Référence : 3 plans en 7,9 s.
- Plan 1 (0–2 s) : elle marche vers la caméra devant une terrasse de café.
- Plan 2 (2–3,5 s) : coupe sur un serveur en arrière-plan qui la remarque et rattrape de justesse son plateau.
- Plan 3 (3,5–6 s) : retour sur elle, plus près ; elle remet ses cheveux et sourit, sans rien remarquer.
- Gag bienveillant ; personne n'est humilié et aucun regard n'est déplacé.

### V13 — Elle parle face caméra (menu 10) · 6 à 8 s · C1
- 1 ou 2 phrases courtes (moins de 15 mots), avec des gestes naturels des mains toutes les 1 à 2 s, et des sourcils et des expressions vivants.
- **H3** : `At 0.5 seconds she looks into the lens and says, in English, playful and fast: "…"` · **Seedance** : `She says in English, playful and quick: {…}`.

### V14 — Traversée devant une boutique (bonus) · 5 s · C3
- Elle traverse devant une vitrine élégante à pas vifs, le tissu et les cheveux bougent, un regard vers la vitrine à 3 s.

### V15 — Moment de vie (menu 11) · 5 à 6 s
- **Plage** (C2) : marche au bord de l'eau, une vague touche ses pieds à 2 s, elle rit et soulève sa robe d'une main, regard caméra à 5 s.
- **Piscine** (C1) : assise au bord, elle balance les pieds dans l'eau, éclaboussure à 2 s, rejette ses cheveux, sourire.
- **Café** (C1) : gorgée de café glacé, repose le verre, regarde la rue, revient à la caméra avec un sourire. Un geste par seconde.
- **Coucher de soleil** (C3) : marche le long de la rambarde, le vent dans les cheveux, regard par-dessus l'épaule.

### V16 — Événement (menu 12) · 6 s · C6
- **Image de départ obligatoire** : elle dans une **tenue de soirée du style des sources** (`garde-robe.md` § A et § K) et dans le **décor de l'événement** (`decors.md` § Événements).
- 0–1 s : elle ajuste sa boucle d'oreille.
- 1–3 s : petits pas de danse sur le rythme, épaules qui bougent.
- 3–4 s : rit et tourne la tête vers ses amies hors champ.
- 4–5 s : lève son verre vers la caméra.
- 5–6 s : clin d'œil ou sourire ; la caméra s'est rapprochée jusqu'à la taille.
- **Vie** : invités qui dansent, servent, discutent, applaudissent à vitesse normale.

---

## 7. Exemples complets

Fiche utilisée : « Aya Koné » (exemple de `templates/fiche-modele.md`). Les tenues suivent le style des sources, pas l'origine. Remplace par la fiche réelle. Aucun prompt ne décrit son physique : l'avatar et l'image de départ s'en chargent.

### Exemple A — V1 Marche vers la caméra · Plateau, Abidjan · 6 s

**Étape A — Image de départ · Nano Banana** (joindre la photo de l'avatar) :
```
Using the attached photo of my influencer Aya as the exact and only reference for her appearance, create a photorealistic vertical smartphone photo of her, keeping her face, skin tone, hair and body exactly as they are in the photo. Her hair is tied in a high ponytail, same hair as in the photo.
It is 5:30 pm on a wide, clean sidewalk in the Plateau business district of Abidjan. She is mid-stride walking toward the camera, about two meters away, left foot forward, right arm swinging, a small structured white top-handle bag (unbranded) in her left hand. She wears a sky-blue fitted maxi dress with thin spaghetti straps, a straight neckline and a low open back, hugging her figure down to the ankles, nude platform sandals, chunky gold hoops and her thin gold chain with a small letter "A" pendant; almond nude nails, soft glam makeup, nude gloss. Confident relaxed expression, eyes on the lens.
In the foreground, the edge of a concrete planter with a tropical plant cuts into the bottom-left corner. Behind her, glass office towers reflect the warm sky, two royal palms line the avenue, an orange taxi and a white SUV wait at a traffic light, and three office workers walk in different directions. Low sun from the left, warm light on the left side of her face, long shadows on the pale paving.
A frame from a vertical iPhone video held at chest height by a friend walking backward, head to mid-shin, subject slightly off-center. Natural iPhone colors with slight HDR, realistic skin with baby hairs, natural creases in the fabric, no beauty filter, no text, no logos. Vertical 9:16 aspect ratio, high resolution.
```

**Étape B — MiniMax H3** (image-to-video, 9:16, 6 s) :
```
SHOT: Vertical 9:16 Instagram Reel filmed on a recent iPhone by a friend walking backward, real-time 1x speed, fast casual pace, one continuous shot with no cuts, 6 seconds.
SUBJECT: The same adult woman as in the start image, exactly as she appears there — face, hair, body and sky-blue maxi dress identical from first to last frame.
OUTFIT IN MOTION: The fitted dress moves with every step, small creases snapping at the hips; her ponytail bounces with each step and settles immediately; the gold hoops swing and glint; the white bag swings at her side.
ACTION SCRIPT (one quick action per second, flowing without pauses):
0–1 s: She is already walking toward the camera at a brisk natural pace, about two steps per second, eyes on the lens.
1–2 s: Two more steps, hips shifting naturally; she glances to her right at the passing traffic for half a second.
2–3 s: She looks back into the lens and tucks a loose strand of hair behind her ear without breaking stride.
3–4 s: A quick confident smile, two more steps.
4–5 s: She lifts the strap of her bag higher on her wrist.
5–6 s: She stops right in front of the camera, weight dropping onto one hip, and smiles.
BACKGROUND LIFE: A man in a light-blue shirt walks away talking on his phone, two women cross behind her chatting, the orange taxi pulls away from the light, palm fronds move in the breeze — all at normal speed; nobody looks at the camera.
CAMERA: The friend walks backward in front of her holding the phone, matching her brisk pace and keeping about two meters away, natural slight walking bounce, phone-stabilized, framing her head to knees, stopping when she stops [tracking shot].
LIGHT: Low late-afternoon sun from the left, warm on her face, consistent; her long shadow moves with her.
REALISM: Real-time 1x speed with the fast, casual pace of a real Instagram Reel: no slow motion, no time-stretching, no lingering. Each movement flows straight into the next, no pause longer than half a second. Realistic weight and physics. Background people move at normal speed and never look at the camera. Stable background, no warping, no morphing, correct anatomy, natural motion blur, iPhone video color, no text on screen.
AUDIO: Sandal footsteps on pavement, city traffic, a distant car horn, light breeze, no music.
```

**Étape B bis — Seedance 2.5** (9:16, 6 s ; @Image1 = image de départ, @Image2 = avatar) :
```
@Image1 is the first frame and defines Aya's appearance, her sky-blue maxi dress and the Plateau sidewalk. @Image2 defines her face only.
Vertical 9:16 iPhone Reel filmed by a friend walking backward, real-time speed, fast casual pace like a real Instagram Reel, one continuous shot, warm late-afternoon sun.
0-1s: already walking toward the camera at a brisk pace, two steps per second. 1-2s: two more steps, a half-second glance at the traffic. 2-3s: looks back at the lens, tucks a strand of hair behind her ear while walking. 3-4s: quick confident smile, two steps. 4-5s: lifts her bag strap higher on her wrist. 5-6s: stops in front of the camera, hip out, smiles.
Camera: the friend walks backward at her exact pace, two meters away, natural slight bounce, stops when she stops.
Background: a man walking away on his phone, two women crossing, an orange taxi pulling away, palms moving; nobody looks at the camera.
Details: ponytail bouncing, dress creasing at the hips, hoops swinging, bag swinging.
Quick natural movements flowing into each other, no pauses, no slow motion. Her face, hair and dress stay identical. No morphing, no warping.
<sandal footsteps, city traffic, light breeze> No captions, no watermark, no background music.
```

**Texte à l'écran** : « POV: you see her after her shift in Plateau 👀 » · **Son** : afrobeats ou amapiano tendance · **Légende** : « After-shift walk 🌇 rate the dress 1-10 » · **Hashtags** : #abidjan #civ225 #plateau #ootd #thatgirl

### Exemple B — V3 Outfit check · couloir de son appartement · 6 s

**Étape A — Image de départ · GPT Image 2** (joindre l'avatar) :
```
REFERENCES: Image 1 = my influencer Aya. Use her exactly as she is in this photo: same face, skin tone, hair and body.
SUBJECT: Aya, the adult woman from image 1, unchanged. Do not alter anything about her appearance.
OUTFIT: A cream off-the-shoulder ribbed-knit mini dress with long fitted sleeves, hugging her figure to mid-thigh, cinched with a wide black leather belt with a gold buckle; white knee-high boots; a small black leather shoulder bag in her left hand (unbranded); chunky gold hoops; thin gold "A" pendant; glossy nude almond nails; soft glam makeup; hair worn loose over one shoulder, same hair as in image 1.
POSE & GESTURE: Standing in the middle of the hallway facing the camera, feet hip-width apart, weight starting to shift onto her right hip, right arm relaxed, chin level, eyes on the lens, confident neutral expression.
FOREGROUND: Clean light-oak floor leading to her.
MIDGROUND: A narrow apartment hallway in Cocody, Abidjan, with white walls and two white doors with black handles.
BACKGROUND: A tall monstera plant in a woven basket on the left, a slim wall mirror on the right, recessed ceiling spots, a window at the end of the hallway with sheer curtains glowing with daylight.
CAMERA: A frame from a vertical iPhone video on a tripod at chest height, slightly low angle, full body in frame with space above her head and below her boots, centered; vertical 9:16.
LIGHT: Warm ceiling spots plus soft daylight from the window at the end of the hallway, gentle shadows on the floor.
REALISM: Natural iPhone indoor colors, visible pores and knit texture, natural creases at the belt. No beauty filter, no studio lighting, no extra fingers, no text, no logos, no watermark.
```

**Étape B — MiniMax H3** (image-to-video, 9:16, 6 s) :
```
SHOT: Vertical 9:16 Instagram Reel filmed on a recent iPhone locked off on a tripod at chest height, real-time 1x speed, fast casual pace, one continuous shot with no cuts, 6 seconds.
SUBJECT: The same adult woman as in the start image, exactly as she appears there — face, hair, body, cream knit mini dress, black belt and white boots identical from first to last frame.
OUTFIT IN MOTION: The fitted knit moves with her body and snaps back into shape; her hair swings with weight on every turn and settles immediately; the black bag swings once on the turn; the gold hoops glint.
ACTION SCRIPT (one quick action per second, flowing without pauses):
0–1 s: Facing the camera, she shifts her weight onto her right hip.
1–2 s: She puts her right hand on her hip with a small shoulder roll.
2–3 s: She turns her back to the camera in half a second, glances back over her right shoulder, then turns front again.
3–4 s: She runs her right hand through her hair from the root.
4–5 s: She flips her hair behind her shoulder in one quick motion.
5–6 s: She takes one step toward the camera, both hands sliding from her waist to her hips, with a confident smile.
BACKGROUND LIFE: The sheer curtains at the end of the hallway move in the breeze; her reflection in the wall mirror follows her moves correctly.
CAMERA: Phone locked off on the tripod for the first four seconds [static], then a short, steady push-in from full body to waist up during the last two seconds [push in].
LIGHT: Warm ceiling spots plus daylight from the window, consistent; her shadow turns with her.
REALISM: Real-time 1x speed with the fast, casual pace of a real Instagram Reel: no slow motion, no time-stretching, no lingering. Each movement flows straight into the next, no pause longer than half a second. Realistic weight and physics. Stable background, no warping, no morphing, correct anatomy, natural motion blur, iPhone video color, no text on screen.
AUDIO: Click of boot heels on the wooden floor, soft rustle of knit fabric, quiet room tone, no music.
```

**Étape B bis — Seedance 2.5** (9:16, 6 s) :
```
@Image1 is the first frame and defines Aya's appearance, her cream knit mini dress, black belt, white boots and her apartment hallway. @Image2 defines her face only.
Vertical 9:16 iPhone Reel on a tripod at chest height, real-time speed, fast casual pace like a real Instagram Reel, one continuous shot.
0-1s: shifts her weight onto her right hip. 1-2s: hand on hip, small shoulder roll. 2-3s: quick half-second turn to show her back, glance over her shoulder, turns front again. 3-4s: runs her hand through her hair. 4-5s: flips her hair behind her shoulder in one quick motion. 5-6s: one step toward the camera, hands sliding from waist to hips, confident smile.
Camera: fixed for four seconds, then a short steady push-in to waist up.
Details: knit dress snapping back into shape, hair swinging and settling, hoops glinting; natural blinking, realistic skin.
Quick natural movements flowing into each other, no pauses, no slow motion. Her face, hair and outfit stay identical. No morphing, no warping.
<boot heels on wood, rustle of fabric, quiet room tone> No captions, no watermark, no background music.
```

**Texte à l'écran** : « Rate me 1-10 😏 » · **Son** : afrobeats ou R&B tendance · **Légende** : « Be honest… 1-10? » · **Hashtags** : #abidjan #civ225 #outfitcheck #ootd #ratemyoutfit

### Exemple C — V16 Événement : invitée à un mariage à Abidjan · 6 s

L'étape A est **indispensable** : elle doit apparaître en tenue de soirée dans le décor du mariage, ce que l'avatar seul ne contient pas. La tenue suit le style des sources (robe longue unie et vive, comme le post le plus performant), pas l'origine.

**Étape A — Image de départ · GPT Image 2** (joindre l'avatar) :
```
REFERENCES: Image 1 = my influencer Aya. Use her exactly as she is in this photo: same face, skin tone, hair and body.
SUBJECT: Aya, the adult woman from image 1, unchanged. Do not alter anything about her appearance.
OUTFIT: A floor-length royal-blue gown with an off-the-shoulder ruffled neckline sitting just below the collarbones, a fitted ruched bodice and a softly flared skirt that pools at her feet; matte crepe with a subtle sheen; silver strappy heels; silver drop earrings; her thin gold "A" pendant; a small silver beaded clutch; glossy nude almond nails; evening glam makeup with defined lashes and satin nude lips; hair styled in a sleek low bun with two face-framing strands, same hair as in image 1.
POSE & GESTURE: Standing three-quarters to the camera near the dance floor, her right hand touching her drop earring, her left hand holding the clutch at her hip, chin slightly raised, a radiant smile toward the camera.
FOREGROUND: The corner of a round guest table with a white tablecloth, a gold charger plate and a glass of sparkling juice, cut by the frame at bottom left.
MIDGROUND: A decorated reception hall in Abidjan, gold chiavari chairs, a tall white-and-gold flower arrangement beside her.
BACKGROUND: A flower-decorated stage with the bride and groom seen small and far away, guests in elegant party outfits dancing with raised arms, a waiter in a white jacket carrying a tray, a DJ booth with colored lights, warm string lights and gold drapes on the ceiling; nobody in the background looks at the camera.
CAMERA: A frame from a vertical iPhone video held at chest height by a friend at the next table, head to knees, subject slightly right of center; vertical 9:16.
LIGHT: Warm golden chandelier and string-light glow from above, her face evenly lit, colored DJ light only touching the background.
REALISM: Natural iPhone colors in warm indoor light, slight grain, visible pores and fabric texture, slight motion blur on the dancing guests. No beauty filter, no studio lighting, no extra fingers, no text, no logos, no watermark.
```

**Étape B — MiniMax H3** (image-to-video, 9:16, 6 s) :
```
SHOT: Vertical 9:16 Instagram Reel filmed on a recent iPhone by a friend at the next table, real-time 1x speed, fast festive pace, one continuous shot with no cuts, 6 seconds.
SUBJECT: The same adult woman as in the start image, exactly as she appears there — face, hair, body and royal-blue gown identical from first to last frame.
OUTFIT IN MOTION: The ruffled neckline flutters with her shoulders, the flared skirt swings and settles with each dance step, the drop earrings swing and catch the warm light.
ACTION SCRIPT (one quick action per second, flowing without pauses):
0–1 s: She finishes adjusting her drop earring and looks into the lens.
1–2 s: She starts dancing on the beat: a quick shoulder bounce and a small step to the left.
2–3 s: A small step to the right, clutch hand lifting with the rhythm.
3–4 s: She laughs and turns her head toward friends off-camera.
4–5 s: She turns back and raises her glass of sparkling juice toward the camera.
5–6 s: A playful wink and a big smile.
BACKGROUND LIFE: Guests dance energetically at different rhythms, a waiter in a white jacket crosses with a tray of drinks, the DJ lights sweep, someone claps — all at normal speed; nobody looks at the camera.
CAMERA: Handheld phone with a natural slight sway, framing her head to knees, then a short steady push-in to waist up during the last two seconds [push in].
LIGHT: Warm golden chandelier and string-light glow, consistent on her face; colored DJ light only on the background.
REALISM: Real-time 1x speed with the fast, casual pace of a real Instagram Reel: no slow motion, no time-stretching, no lingering. Each movement flows straight into the next, no pause longer than half a second. Realistic weight and physics. Background people move at normal speed and never look at the camera. Stable background, no warping, no morphing, correct anatomy, natural motion blur, iPhone video color, no text on screen.
AUDIO: Loud joyful crowd chatter and cheering, clinking glasses, the muffled bass of party music, no clear lyrics.
```

**Étape B bis — Seedance 2.5** (9:16, 6 s) :
```
@Image1 is the first frame and defines Aya's face, hair, royal-blue gown and the wedding reception hall. @Image2 defines her face only.
Vertical 9:16 iPhone Reel filmed by a friend, real-time speed, fast festive pace like a real Instagram Reel, one continuous shot, warm golden light.
0-1s: finishes adjusting her earring, looks into the lens. 1-2s: quick shoulder bounce on the beat, small step left. 2-3s: small step right, clutch hand lifting with the rhythm. 3-4s: laughs, turns her head toward friends off-camera. 4-5s: raises her glass toward the camera. 5-6s: playful wink, big smile.
Camera: handheld with a natural slight sway, short steady push-in to waist up in the last two seconds.
Background: guests dancing at different rhythms, a waiter crossing with drinks, sweeping DJ lights; nobody looks at the camera.
Details: ruffles fluttering, skirt swinging and settling, earrings swinging.
Quick natural movements flowing into each other, no pauses, no slow motion. Her face, hair and gown stay identical. No morphing, no warping.
<crowd cheering, clinking glasses, muffled bass> No captions, no watermark.
```

**Texte à l'écran** : « When it's your best friend's wedding 💙 » · **Son** : coupé-décalé ou afrobeats de mariage tendance · **Légende** : « Wedding guest mode 💙✨ who's next to marry? » · **Hashtags** : #abidjan #civ225 #weddingguest #eveninglook #thatgirl

---

## 8. Textes à l'écran (hooks)

À ajouter dans CapCut, Instagram ou TikTok, **jamais** dans le générateur : les IA vidéo écrivent mal le texte. Place-les dans le tiers supérieur ou au centre, en police blanche simple avec une ombre légère.

- Notation : « Rate me 1-10 😏 », « Rate the fit », « From 1 to 10? »
- POV : « POV: you match with a nurse from Abidjan », « POV: she said 5 minutes », « POV: you find out I'm a… »
- Curiosité : « Watch closely… you might miss it 👀 », « What's happening in the background? », « Wait for it… »
- Question : « Would you date a [métier]? », « Which one: 1 or 2? »
- Gag pays : « Open the door in: Abidjan 🇨🇮 / Paris 🇫🇷 / Lagos 🇳🇬 »
- Événement : « When it's your best friend's wedding », « Birthday girl 🎂 »

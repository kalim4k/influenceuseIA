# Outils IA : syntaxe, kit de référence, dépannage

## Sommaire
1. Chaîne de production
2. Blocs standards à réutiliser
3. GPT Image 2
4. Nano Banana
5. MiniMax H3 (Hailuo 3)
6. Seedance 2.5
7. Kit de référence (prompts)
8. Dépannage

Les interfaces évoluent vite. Si un réglage n'existe pas chez l'abonné (ratio, durée, audio), garde la structure du prompt et adapte uniquement le réglage.

---

## 1. Chaîne de production

```
AVATAR (la photo de référence de l'influenceuse : REF_VISAGE, + REF_CORPS)
   └─► Image (Nano Banana ou GPT Image 2), avatar joint en référence
          └─► Vidéo image-to-video (MiniMax H3 ou Seedance 2.5) : image de départ + avatar en référence du visage
```

L'**avatar** est soit la photo que l'abonné a déjà créée, soit la REF_VISAGE générée avec le kit (§ 7). Il est joint à **toutes** les générations.

**Pourquoi partir d'une image pour la vidéo ?** En text-to-video, le visage dérive à chaque génération. En image-to-video, la première image fixe le visage, la tenue, le décor et la lumière ; le prompt vidéo n'a plus qu'à décrire le mouvement. C'est la méthode la plus fiable pour une modèle reconnaissable.

## 2. Blocs standards à réutiliser

**IDENTITY LOCK** : copié mot pour mot depuis la fiche, au début de chaque prompt image.

**REALISM** (à coller à la fin des prompts image, en adaptant au besoin) :
```
Authentic Instagram photo taken with a recent iPhone main camera, natural colors with slight phone HDR, realistic skin texture with visible pores, fine baby hairs and subtle imperfections, no airbrushing, no beauty filter, not a professional photoshoot, everyday background details in sharp focus. No text, no logos, no watermark.
```

**SELFIE** (variante pour les selfies à bout de bras) :
```
Front-camera selfie taken at arm's length, slight wide-angle distortion, the edge of her arm visible at the frame border, phone held slightly above eye level.
```

**MIROIR** :
```
Mirror selfie: she holds a [phone model] with a [color] case in front of her shoulder, the phone and her reflection visible, slight smudges on the mirror, bathroom or bedroom details behind her.
```

**Vocabulaire de mots à éviter** : `perfect`, `flawless`, `8k`, `masterpiece`, `ultra-detailed`, `beautiful` seul, `sexy`, `hot`, ainsi que les termes anatomiques crus. Les premiers donnent le look plastique de l'IA ; les derniers déclenchent les filtres.

## 3. GPT Image 2

**Forces** : suit très bien les consignes longues et précises, rendu photo réaliste, texte lisible (enseignes, menus), édition à partir de plusieurs images de référence.

**Réglages** : format portrait (4:5 si disponible, sinon 2:3 / 1024×1536), qualité haute. Joindre REF_VISAGE (et REF_CORPS pour le plein pied).

**Structure** : étiquettes en majuscules (REFERENCES, SUBJECT, OUTFIT, POSE & GESTURE, FOREGROUND, MIDGROUND, BACKGROUND, CAMERA, LIGHT, REALISM), que GPT Image 2 suit très bien. Modèle complet et exemples : `formats-photo.md` § « Structure d'un prompt photo très détaillé ». Étiquette chaque image jointe : « Image 1 = my influencer [Name] — her face, hair and body; keep her identity exactly ».

**Édition (slides de carrousel)** : joindre l'image 1 générée.
```
Edit the attached photo. Keep everything identical: same woman, same face, hair, outfit, jewelry, location, lighting, camera angle and framing. Change only her pose and expression: [nouvelle pose]. Photorealistic, same iPhone photo quality.
```

## 4. Nano Banana

(Nano Banana, Nano Banana 2 et Nano Banana Pro, les modèles d'image de Gemini.)

**Forces** : excellente cohérence de personnage avec des images de référence, édition conversationnelle (« même photo mais… »), fusion d'images (la modèle + une photo de lieu).

**Style** : **prose narrative** en phrases complètes plutôt qu'une liste de mots-clés. Mets le ratio et la qualité **à la fin**.

**Modèle de prompt** : 2 à 4 paragraphes de prose qui couvrent le même contenu que la version GPT Image 2 (identité complète → tenue → pose → premier plan, plan moyen, arrière-plan → caméra et lumière → réalisme → ratio). Première phrase type :
```
Using the attached photo of my influencer [Name] as the exact reference for her face, hair and body proportions, create a photorealistic smartphone photo of her.
```
Exemple complet : `formats-photo.md` § Exemples.

**Édition dans la même conversation** (garde le contexte et le visage) :
```
Keep this exact photo — same woman, outfit, place, light and framing — but now she [nouvelle pose / expression]. Everything else stays identical. Vertical 4:5.
```

**Fusion avec un lieu** : joindre REF_VISAGE + une photo du lieu prise par l'abonné. « Place [Name] from the first image into the scene of the second image, matching its lighting and perspective… » C'est idéal pour ancrer la modèle dans un vrai lieu de sa ville.

## 5. MiniMax H3 (Hailuo 3)

**Ce qu'il faut savoir** : vidéos de 5 à 15 s, ratios jusqu'au 9:16, image de départ (premier plan) et image de fin optionnelle, audio natif, expansion automatique du prompt (activée par défaut), prompt de 7 000 caractères maximum.

**Règles** :
- En image-to-video, **ne redécris pas toute l'image** : rappelle l'identité en une phrase pour la verrouiller, puis consacre le prompt à ce qui bouge (elle, sa tenue, l'arrière-plan), comment, et à ce que fait la caméra.
- Si l'interface accepte une image de référence du sujet en plus de l'image de départ, joins l'avatar.
- **Un seul mouvement de caméra par plan**, avec son **amplitude** (small, medium, large) et sa **vitesse** (slow, steady, fast).
- Les commandes courtes entre crochets se placent **juste après** la description concernée : `[static]`, `[push in]`, `[pull out]`, `[pan left]`, `[tracking shot]`, `[zoom in]`.
- Écris « One continuous shot, no cuts » pour un plan unique, et évite d'enchaîner les actions avec « then », que l'expansion transforme en coupes.
- Décris les actions comme des **événements physiques** (« she shifts her weight onto her left hip, the satin fabric ripples »).
- **Audio** : décris 2 à 4 sons par ordre d'importance. Pour un Reel, demande « natural ambient sound only, no music » et ajoute le son tendance dans Instagram ou TikTok.
- **Dialogue** (format face caméra) : `At 1 second she looks into the lens and says, in English, softly: "…"`.

**Réglages conseillés** : image-to-video, 9:16, 6 à 10 s, résolution maximale disponible.

**Modèle de prompt** : structure en sections SHOT, SUBJECT, OUTFIT IN MOTION, ACTION SCRIPT (minuté), FACE & MICRO-GESTURES, BACKGROUND LIFE, CAMERA, LIGHT, REALISM, AUDIO. Modèle complet, grammaire caméra et exemples : `formats-video.md` § 2 à § 6.

## 6. Seedance 2.5

**Ce qu'il faut savoir** : références multimodales (images, vidéos, audio) appelées `@Image1`, `@Video1`, `@Audio1` ; plans multiples avec timecodes ; audio et voix natifs. La durée et la résolution dépendent de la plateforme (souvent de 5 à 15 s, parfois davantage).

**Règles** :
- **Étiquette chaque référence** et dis précisément ce qu'elle contrôle : « @Image1 defines her face, hair and outfit only and is the first frame ». Une étiquette large (« @Image1 = the woman ») importe aussi l'arrière-plan.
- **Timecodes en secondes entières**, sans trou entre les plages : `0-3s: … 3-7s: … 7-10s: …`. Une action claire par plage.
- **Un mouvement de caméra par plage.**
- **Audio** (conventions courantes) : musique `（…）`, bruitages `<…>`, voix `{…}` précédée de la langue et du ton. Les consignes négatives s'écrivent simplement : « No captions, no watermark, no background music ».
- **Look smartphone** : « handheld selfie angle, slight natural shake », « phone on a tripod at chest height ».
- Pour une vidéo de référence de mouvement (ex. une danse), joins-la en `@Video1` et écris « @Video1 defines the movement and rhythm only ». Ne réutilise jamais le visage d'une vraie personne.

**Réglages conseillés** : image-to-video ou référence, 9:16, 8 à 12 s.

**Références** : `@Image1` = l'image de départ (premier plan, tenue, décor) ; `@Image2` = l'avatar (« defines her face only »).

**Modèle de prompt** : références étiquetées → ligne de plan (9:16, iPhone, vitesse réelle, un plan) → plages minutées avec l'action et la caméra → arrière-plan vivant → détails de mouvement → verrou d'identité et anti-IA → sons. Modèle complet et exemples : `formats-video.md` § 4 et § 6.

## 7. Kit de référence (prompts)

À donner juste après la fiche, **seulement si l'abonné n'a pas encore d'avatar**. S'il en a déjà un, sa photo devient la référence et ces prompts sont inutiles. Remplace `[IDENTITY LOCK]` par le texte intégral du bloc de la fiche.

**REF_VISAGE — GPT Image 2** (générer 4 à 8 fois et garder la meilleure) :
```
Photorealistic close-up portrait of [IDENTITY LOCK] She faces the camera directly, head straight, relaxed expression with a faint closed-mouth smile, eyes looking into the lens. Her hair is in her usual style with the hairline fully visible. Plain light-grey wall background, soft diffused daylight from a window at the front-left, no harsh shadows. Shot on a recent iPhone main camera at eye level, head-and-shoulders framing, sharp focus on the eyes. Natural skin texture with visible pores and subtle imperfections, light natural makeup, no retouching, no filter. She wears a plain white crew-neck t-shirt and her signature jewelry. Vertical 4:5.
```

**REF_VISAGE — Nano Banana** :
```
Create a photorealistic head-and-shoulders portrait of [IDENTITY LOCK] She looks straight into the camera with a relaxed, faint closed-mouth smile, standing in front of a plain light-grey wall in soft diffused window light. She wears a plain white crew-neck t-shirt and her signature jewelry. The image looks like a real smartphone photo: natural skin with visible pores, light natural makeup, no beauty filter, sharp focus on the eyes. Vertical 4:5 aspect ratio, high resolution.
```

**REF_CORPS — GPT Image 2 ou Nano Banana** (joindre REF_VISAGE) :
```
Using Image 1 as the exact face and hair reference of [Name], create a photorealistic full-body photo of [IDENTITY LOCK] She stands relaxed in a bright minimalist room with white walls and a light wooden floor, facing the camera, arms loosely at her sides, weight slightly on one hip. She wears a plain black fitted tank top and high-waisted straight blue jeans with white sneakers, so her proportions are clearly visible. Shot on a recent iPhone at chest height, full body in frame with some space above her head, soft daylight. Realistic skin texture, no filter, no text. Vertical 4:5.
```

**REF_CORPS à partir d'un mannequin** (pour choisir une corpulence précise) : l'abonné télécharge un mannequin sur https://influenceuseia.vercel.app/mannequins.html, joint REF_VISAGE en image 1 et le mannequin en image 2, puis copie le prompt GPT Image 2 ou Nano Banana de cette page.

**Planche personnage (optionnelle) — Nano Banana** (joindre REF_VISAGE) :
```
Using the attached photo of [Name] as the exact identity reference, create a clean character reference sheet on a plain light-grey background: four full-body views of the same woman side by side — front view, three-quarter view, side profile and back view — in the same plain black fitted tank top and high-waisted blue jeans. Identical face, hairstyle, skin tone, body proportions and jewelry in every view. Even soft studio daylight, photorealistic. 16:9 aspect ratio, high resolution.
```

## 8. Dépannage

| Problème | Solution |
|---|---|
| Le visage change d'une image à l'autre | Rejoindre REF_VISAGE en précisant « face and hair only », recopier l'IDENTITY LOCK mot pour mot, rapprocher le cadrage. Avec Nano Banana, repartir d'une photo validée en édition. |
| Peau plastique, look « IA » | Ajouter le bloc REALISM, retirer « perfect, flawless, 8k », ajouter « slight film grain, natural phone HDR ». |
| Ça ressemble à un shooting pro | « candid snapshot taken by a friend », « slightly off-center framing », « everyday clutter in the background ». |
| Mains ou doigts déformés | Choisir une pose simple (main sur la hanche, dans les cheveux, le long du corps), éviter les objets tenus de façon complexe. |
| Refus du filtre de contenu | Passer au vocabulaire de mode, retirer les termes anatomiques et « sexy », couvrir un peu plus (paréo, chemise ouverte, robe plus longue). |
| Logos ou texte parasite | « No text, no logos, no watermark, unbranded clothing and bags ». |
| Vidéo : le visage se déforme en bougeant | Réduire l'amplitude, caméra `[static]` ou mouvement lent, 6 s au lieu de 10 s, ajouter « her face stays sharp and consistent ». |
| Vidéo : coupe non voulue | « One continuous shot, no cuts », supprimer les « then ». |
| Vidéo : mouvement robotique ou trop lent | Décrire l'amplitude et la vitesse, des actions physiques précises, des micro-mouvements (cheveux, tissu, respiration). |
| Vidéo : musique imposée | « Natural ambient sound only, no music » (H3) ou « no background music » (Seedance). |

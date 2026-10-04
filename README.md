# 💫 Influenceuse IA — Skill Claude

Crée ton influenceuse IA en 2 questions, puis reçois des **prompts photo et vidéo ultra-détaillés**, prêts à copier-coller dans **Nano Banana**, **GPT Image 2**, **MiniMax H3** et **Seedance 2.5**. Les prompts décrivent la tenue, le décor, les arrière-plans, les gestes et des mouvements de caméra fluides, pour un rendu qui ressemble à un vrai post Instagram et non à de l'IA.

---

## 🚀 Installation la plus simple

Ouvre **Claude Code** et écris :

> Installe le skill depuis https://github.com/<OWNER>/<REPO>

Claude l'installe, puis te pose directement les 2 questions pour créer ton influenceuse.

### Autres méthodes

**Claude Code, en plugin** (mises à jour automatiques) :
```
/plugin marketplace add <OWNER>/<REPO>
/plugin install influenceuse-ia@deo-skill
```

**Claude.ai (web, desktop, mobile)** :
1. Télécharge [`influenceuse-ia.zip`](https://github.com/<OWNER>/<REPO>/raw/main/influenceuse-ia.zip), sans le décompresser.
2. Dans Claude.ai : **Paramètres → Capacités**, active l'exécution de code, puis dans **Skills** clique sur **Importer un skill** et choisis le zip.
3. Ouvre une nouvelle conversation et écris : **« Crée mon influenceuse IA »**.

---

## 🎬 Utilisation

1. Claude te demande **le pays** de ton influenceuse et **son métier** (optionnel). Si tu as déjà créé ton influenceuse, envoie aussi sa photo.
2. Il crée sa **Fiche Modèle** (identité, style, quartier, lieux favoris, culture). Garde-la dans les **Instructions de ton Projet Claude**.
3. Il te demande : **« Image ou vidéo ? »**
   - **Image** → tu reçois un prompt complet (Nano Banana + GPT Image 2). Joins toujours la photo de ton influenceuse comme référence.
   - **Vidéo** → tu choisis le type (marche, outfit check, ascenseur, voiture, danse, POV, événement…). Tu reçois :
     1. un prompt pour générer **l'image de départ** (ton influenceuse dans la bonne tenue et le bon décor) ;
     2. les prompts **MiniMax H3** et **Seedance 2.5** pour l'animer.
4. Tu reçois aussi la légende, les hashtags, le texte à l'écran et l'ambiance musicale.

## ⚠️ Règles

- Personnage **fictif et adulte** : n'utilise jamais le visage d'une vraie personne.
- **Glamour mais non explicite**, sinon les outils refusent et les réseaux suppriment le compte.
- Active l'étiquette **« Contenu IA »** sur Instagram et TikTok.

---

## 🤖 Instructions pour Claude (installation)

Quand un utilisateur te demande d'installer ce skill depuis ce dépôt :

**1. Installe-le.**

Si tu as un terminal (Claude Code), copie le dossier du skill dans les skills personnels de l'utilisateur.

macOS / Linux :
```bash
git clone --depth 1 https://github.com/<OWNER>/<REPO>.git /tmp/influenceuse-ia-repo
mkdir -p ~/.claude/skills
rm -rf ~/.claude/skills/influenceuse-ia
cp -r /tmp/influenceuse-ia-repo/plugins/influenceuse-ia/skills/influenceuse-ia ~/.claude/skills/
rm -rf /tmp/influenceuse-ia-repo
```

Windows (PowerShell) :
```powershell
git clone --depth 1 https://github.com/<OWNER>/<REPO>.git "$env:TEMP\influenceuse-ia-repo"
New-Item -ItemType Directory -Force "$env:USERPROFILE\.claude\skills" | Out-Null
if (Test-Path "$env:USERPROFILE\.claude\skills\influenceuse-ia") { Remove-Item -Recurse -Force "$env:USERPROFILE\.claude\skills\influenceuse-ia" }
Copy-Item -Recurse "$env:TEMP\influenceuse-ia-repo\plugins\influenceuse-ia\skills\influenceuse-ia" "$env:USERPROFILE\.claude\skills\"
Remove-Item -Recurse -Force "$env:TEMP\influenceuse-ia-repo"
```

Si `git` n'est pas installé, télécharge `https://github.com/<OWNER>/<REPO>/raw/main/influenceuse-ia.zip` et décompresse-le dans le dossier `skills` (il contient le dossier `influenceuse-ia/`).

Si tu n'as pas de terminal (Claude.ai), donne à l'utilisateur les 3 étapes « Claude.ai » ci-dessus.

**2. Démarre tout de suite.** Ne demande pas à l'utilisateur de redémarrer. Lis `SKILL.md` dans le dossier installé (ou dans ce dépôt : `plugins/influenceuse-ia/skills/influenceuse-ia/SKILL.md`) et suis ses instructions dans cette même conversation, en commençant par l'onboarding : pose les **2 questions** (pays, métier optionnel).

---

## 📁 Contenu

```
plugins/influenceuse-ia/skills/influenceuse-ia/
├── SKILL.md                    # déroulé : 2 questions → image ou vidéo → prompts
├── templates/fiche-modele.md   # fiche d'identité de l'influenceuse
└── references/
    ├── garde-robe.md           # ~50 tenues détaillées + tenues culturelles et d'événement
    ├── decors.md               # décors en 3 plans + événements
    ├── formats-photo.md        # 20 formats photo + exemples complets
    ├── formats-video.md        # 16 formats vidéo, caméra fluide, anti-IA, scripts complets
    ├── outils-ia.md            # syntaxe GPT Image 2, Nano Banana, MiniMax H3, Seedance 2.5
    ├── pays.md                 # ~30 pays : lieux réels, climat, mode, fêtes, expressions
    ├── metiers.md              # ~20 métiers et styles de vie
    ├── legendes-hooks.md       # légendes, hashtags, sons, planning
    └── analyse-sources.md      # analyse de 101 posts et 34 Reels qui performent
```

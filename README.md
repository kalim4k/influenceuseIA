# 💫 Influenceuse IA — Skill Claude

Crée ton influenceuse IA en 2 questions, puis reçois des **prompts photo et vidéo ultra-détaillés**, prêts à copier-coller dans **Nano Banana**, **GPT Image 2**, **MiniMax H3** et **Seedance 2.5**. Les prompts décrivent la tenue, le décor, les arrière-plans, les gestes et des mouvements de caméra fluides, pour un rendu qui ressemble à un vrai post Instagram et non à de l'IA.

---

## 🚀 Installation

### 📱 Sur téléphone (ou Claude.ai) : téléverse le zip

Sur l'application Claude, on ne peut pas installer un skill depuis un lien GitHub : il faut **téléverser le fichier zip**. Ça prend 1 minute :

1. **Télécharge le zip** : 👉 [influenceuse-ia.zip](https://github.com/kalim4k/influenceuseIA/raw/main/influenceuse-ia.zip)
   - **Ne le décompresse pas.** Sur iPhone, si l'app Fichiers l'a décompressé en dossier `influenceuse-ia`, fais un appui long sur ce dossier → **Compresser** pour retrouver un `.zip`.
2. Dans Claude : **Paramètres → Capacités**. Vérifie que l'**exécution de code** est activée, puis dans **Skills** appuie sur **Importer** (ou « + ») et choisis `influenceuse-ia.zip` dans tes fichiers ou tes téléchargements.
3. Vérifie que le skill **influenceuse-ia** est bien activé, ouvre une **nouvelle conversation** et écris : **« Crée mon influenceuse IA »**.

Si l'option « Importer » n'apparaît pas dans l'application, fais les étapes 2 et 3 sur **claude.ai** dans le navigateur du téléphone (ou sur un ordinateur). Le skill sera ensuite disponible partout, application comprise.

### ⚡ Sans rien installer (dépannage)

Dans n'importe quelle conversation Claude, avec la **recherche web activée**, écris :

> Utilise le skill https://github.com/kalim4k/influenceuseIA

Claude lit le skill en ligne et commence directement. Il faudra recoller cette phrase au début de chaque nouvelle conversation (ou la mettre dans les instructions de ton Projet).

### 💻 Sur ordinateur avec Claude Code

Écris : **« Installe le skill depuis https://github.com/kalim4k/influenceuseIA »**. Claude l'installe et te pose directement les 2 questions.

Ou en plugin, pour recevoir les mises à jour :
```
/plugin marketplace add kalim4k/influenceuseIA
/plugin install influenceuse-ia@deo-skill
```

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

Quand un utilisateur te donne ce dépôt pour installer ou utiliser le skill, regarde d'abord si tu as un terminal.

### Cas A — Pas de terminal (application Claude sur téléphone, claude.ai)

Tu ne peux pas installer un skill toi-même ici. Fais les deux choses suivantes dans le même message :

1. Donne à l'utilisateur les 3 étapes de la section « 📱 Sur téléphone » avec le lien direct du zip : `https://github.com/kalim4k/influenceuseIA/raw/main/influenceuse-ia.zip`. Insiste sur deux points : il ne faut pas décompresser le fichier, et il faut ouvrir une nouvelle conversation après l'import.
2. Pour qu'il ne soit pas bloqué en attendant, **démarre tout de suite en mode sans installation** :
   - lis `SKILL.md` en ligne : `https://raw.githubusercontent.com/kalim4k/influenceuseIA/main/plugins/influenceuse-ia/skills/influenceuse-ia/SKILL.md` ;
   - suis ses instructions dans cette conversation, en commençant par les **2 questions** (pays, métier optionnel) ;
   - quand `SKILL.md` renvoie à un fichier (`references/…`, `templates/…`), lis-le à l'adresse `https://raw.githubusercontent.com/kalim4k/influenceuseIA/main/plugins/influenceuse-ia/skills/influenceuse-ia/` suivie du chemin (ex. `references/pays.md`).

Si tu ne peux pas lire de page web (recherche web désactivée), donne seulement les 3 étapes du zip et dis à l'utilisateur d'activer la recherche web s'il veut commencer sans installer.

### Cas B — Terminal disponible (Claude Code)

**1. Installe le skill** en copiant son dossier dans les skills personnels de l'utilisateur.

macOS / Linux :
```bash
git clone --depth 1 https://github.com/kalim4k/influenceuseIA.git /tmp/influenceuse-ia-repo
mkdir -p ~/.claude/skills
rm -rf ~/.claude/skills/influenceuse-ia
cp -r /tmp/influenceuse-ia-repo/plugins/influenceuse-ia/skills/influenceuse-ia ~/.claude/skills/
rm -rf /tmp/influenceuse-ia-repo
```

Windows (PowerShell) :
```powershell
git clone --depth 1 https://github.com/kalim4k/influenceuseIA.git "$env:TEMP\influenceuse-ia-repo"
New-Item -ItemType Directory -Force "$env:USERPROFILE\.claude\skills" | Out-Null
if (Test-Path "$env:USERPROFILE\.claude\skills\influenceuse-ia") { Remove-Item -Recurse -Force "$env:USERPROFILE\.claude\skills\influenceuse-ia" }
Copy-Item -Recurse "$env:TEMP\influenceuse-ia-repo\plugins\influenceuse-ia\skills\influenceuse-ia" "$env:USERPROFILE\.claude\skills\"
Remove-Item -Recurse -Force "$env:TEMP\influenceuse-ia-repo"
```

Si `git` n'est pas installé, télécharge `https://github.com/kalim4k/influenceuseIA/raw/main/influenceuse-ia.zip` et décompresse-le dans le dossier `skills` (il contient le dossier `influenceuse-ia/`).

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

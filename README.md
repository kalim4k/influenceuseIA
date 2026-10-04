# 💫 Influenceuse IA — skill Claude, sans installation

> **🤖 Note pour Claude** — Ce dépôt est un skill Claude utilisable **sans rien installer**. Si un utilisateur t'a donné ce lien (« utilise ce skill », « crée mon influenceuse »…) :
> 1. Lis le skill : **https://raw.githubusercontent.com/kalim4k/influenceuseIA/main/SKILL.md**
> 2. Suis ses instructions dans cette conversation, en commençant par l'onboarding : pose les **2 questions** (pays de l'influenceuse, métier optionnel).
> 3. Lis les fichiers de référence aux moments indiqués dans SKILL.md, avec les liens complets listés plus bas.
>
> Il n'y a rien à installer et aucun fichier à télécharger.

---

## 📱 Comment l'utiliser (abonnés)

**Sur téléphone ou ordinateur, dans l'application Claude ou sur claude.ai :**

1. Ouvre une nouvelle conversation et vérifie que la **recherche web** est activée (bouton des outils, sous la zone de texte).
2. Colle ce message :
   > Utilise ce skill : https://github.com/kalim4k/influenceuseIA
3. Claude lit le skill et te pose **2 questions** : le **pays** de ton influenceuse et **son métier** (optionnel). Si tu as déjà créé ton influenceuse, envoie aussi sa photo.
4. Claude crée sa **Fiche Modèle**, puis te demande : **« Image ou vidéo ? »**
   - **Image** → tu reçois un prompt complet pour Nano Banana et GPT Image 2. Joins toujours la photo de ton influenceuse comme référence.
   - **Vidéo** → tu choisis le type (marche, outfit check, ascenseur, voiture, danse, POV, événement…). Tu reçois :
     1. le prompt de **l'image de départ** (ton influenceuse dans la bonne tenue et le bon décor) ;
     2. les prompts **MiniMax H3** et **Seedance 2.5** pour l'animer.
   - Tu reçois aussi la légende, les hashtags, le texte à l'écran et l'ambiance musicale.

### 💡 Astuce : ne plus jamais recoller le lien

Crée un **Projet** Claude (par exemple « Mon influenceuse ») et colle dans ses **Instructions** le bloc que Claude te donne après la création de ta fiche : le lien du skill et ta Fiche Modèle. Toutes les conversations de ce projet connaîtront le skill et ton influenceuse.

## ⚠️ Règles

- Personnage **fictif et adulte** : n'utilise jamais le visage d'une vraie personne.
- **Glamour mais non explicite**, sinon les outils refusent et les réseaux suppriment le compte.
- Active l'étiquette **« Contenu IA »** sur Instagram et TikTok.

---

## 📚 Fichiers du skill (liens directs)

| Fichier | Contenu |
|---|---|
| [SKILL.md](https://raw.githubusercontent.com/kalim4k/influenceuseIA/main/SKILL.md) | Le skill : déroulé (2 questions → image ou vidéo → prompts), niveau de détail exigé, règles |
| [references/pays.md](https://raw.githubusercontent.com/kalim4k/influenceuseIA/main/references/pays.md) | ~30 pays : lieux réels, climat, mode, fêtes, expressions |
| [references/metiers.md](https://raw.githubusercontent.com/kalim4k/influenceuseIA/main/references/metiers.md) | ~20 métiers et styles de vie |
| [templates/fiche-modele.md](https://raw.githubusercontent.com/kalim4k/influenceuseIA/main/templates/fiche-modele.md) | Fiche d'identité de l'influenceuse |
| [references/garde-robe.md](https://raw.githubusercontent.com/kalim4k/influenceuseIA/main/references/garde-robe.md) | ~50 tenues détaillées, tenues culturelles et d'événement |
| [references/decors.md](https://raw.githubusercontent.com/kalim4k/influenceuseIA/main/references/decors.md) | Décors en 3 plans et événements |
| [references/outils-ia.md](https://raw.githubusercontent.com/kalim4k/influenceuseIA/main/references/outils-ia.md) | Syntaxe GPT Image 2, Nano Banana, MiniMax H3, Seedance 2.5 ; dépannage |
| [references/formats-photo.md](https://raw.githubusercontent.com/kalim4k/influenceuseIA/main/references/formats-photo.md) | 20 formats photo et exemples complets |
| [references/formats-video.md](https://raw.githubusercontent.com/kalim4k/influenceuseIA/main/references/formats-video.md) | 16 formats vidéo, caméra fluide, anti-IA, scripts complets |
| [references/legendes-hooks.md](https://raw.githubusercontent.com/kalim4k/influenceuseIA/main/references/legendes-hooks.md) | Légendes, hashtags, sons, planning |
| [references/analyse-sources.md](https://raw.githubusercontent.com/kalim4k/influenceuseIA/main/references/analyse-sources.md) | Analyse de 101 posts et 34 Reels qui performent |

---

## 💻 Option : l'installer dans Claude Code (ordinateur)

Facultatif, pour les utilisateurs de Claude Code. Écris à Claude : « Installe le skill depuis https://github.com/kalim4k/influenceuseIA ».

*Note pour Claude (avec terminal uniquement)* : clone le dépôt, puis copie `SKILL.md`, `references/` et `templates/` dans `~/.claude/skills/influenceuse-ia/` (Windows : `%USERPROFILE%\.claude\skills\influenceuse-ia\`). Lis ensuite `SKILL.md` et démarre l'onboarding dans la même conversation, sans demander de redémarrage.

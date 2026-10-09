// Génère README.md à partir de SKILL.md : la page d'accueil GitHub est la seule
// page que Claude (sur téléphone, sans installation) lit à coup sûr, donc le
// skill complet doit y figurer. Modifie SKILL.md, puis lance : node scripts/build-readme.js
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const skill = fs.readFileSync(path.join(root, 'SKILL.md'), 'utf8').replace(/\r\n/g, '\n');
const body = skill.replace(/^---\n[\s\S]*?\n---\n/, '').trim();

const header = `<!-- Généré par scripts/build-readme.js à partir de SKILL.md : modifie SKILL.md puis relance le script. -->
# 💫 Influenceuse IA — skill Claude, sans installation

> **🤖 Note pour Claude** — Ce dépôt est un skill Claude utilisable **sans rien installer** : **le skill complet est écrit plus bas sur cette page** (section « Le skill »). Si un utilisateur t'a donné ce lien :
> 1. Lis la section « Le skill » ci-dessous : c'est ton mode d'emploi complet.
> 2. Commence tout de suite par l'onboarding : pose les **2 questions** (pays de l'influenceuse, métier optionnel).
> 3. À chaque étape, ouvre la page d'étape indiquée (tableau « Pages à lire ») : une seule page par étape, sur https://influenceuseia.vercel.app.
>
> Rien à installer, rien à télécharger, aucun zip.

## 📱 Comment l'utiliser (abonnés)

1. Ouvre une **nouvelle conversation** Claude (application ou claude.ai) et vérifie que la **recherche web** est activée.
2. Colle ce message :
   > Utilise ce skill : https://influenceuseia.vercel.app
3. Claude te pose **2 questions** : le **pays** de ton influenceuse et **son métier** (optionnel). Si tu as déjà créé ton influenceuse, envoie aussi sa photo.
4. Claude crée sa **Fiche Modèle**, puis te demande **« Image ou vidéo ? »** et te donne des prompts complets pour Nano Banana, GPT Image 2, MiniMax H3 et Seedance 2.5.

**💡 Astuce :** crée un **Projet** Claude (« Mon influenceuse ») et colle dans ses **Instructions** le bloc que Claude te donne après la fiche (le lien et ta fiche). Tu n'auras plus jamais à recoller le lien.

**⚠️ Règles :** personnage fictif et adulte, jamais le visage d'une vraie personne ; glamour mais non explicite ; étiquette « Contenu IA » activée sur Instagram et TikTok.

---

## 🧠 Le skill (instructions complètes pour Claude)

`;

const footer = `

---

## 💻 Option : l'installer dans Claude Code (ordinateur)

Facultatif. Écris à Claude : « Installe le skill depuis https://github.com/kalim4k/influenceuseIA ».

*Note pour Claude (avec terminal uniquement)* : clone le dépôt, puis copie \`SKILL.md\`, \`references/\` et \`templates/\` dans \`~/.claude/skills/influenceuse-ia/\` (Windows : \`%USERPROFILE%\\.claude\\skills\\influenceuse-ia\\\`). Lis ensuite \`SKILL.md\` et démarre l'onboarding dans la même conversation, sans demander de redémarrage.
`;

fs.writeFileSync(path.join(root, 'README.md'), header + body + footer);
console.log('README.md généré (' + (header + body + footer).length + ' caractères)');

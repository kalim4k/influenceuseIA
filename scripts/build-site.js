// Construit le site statique (dossier site/) à partir de SKILL.md, references/ et templates/.
// Toutes les pages sont rendues côté serveur (pas de JS nécessaire) pour que Claude puisse
// tout lire en suivant un simple lien. Lancé par Vercel via « npm run build ».
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const root = path.join(__dirname, '..');
const out = path.join(root, 'site');

// URL publique du site : SITE_URL (domaine perso) sinon domaine de production Vercel.
const host = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || '';
const SITE = host ? (host.startsWith('http') ? host : `https://${host}`).replace(/\/$/, '') : '';
const abs = (p) => `${SITE}${p}`;

const GH = 'https://github.com/kalim4k/influenceuseIA';

const DOCS = [
  { src: 'references/pays.md', title: 'Pays', desc: "~30 pays : phénotypes, prénoms, lieux réels, mode, climat, fêtes, expressions locales" },
  { src: 'references/metiers.md', title: 'Métiers', desc: '~20 métiers : niveau de vie, scènes de vie pro, tenues de travail, légendes' },
  { src: 'templates/fiche-modele.md', title: 'Fiche Modèle', desc: "Modèle de fiche d'identité de l'influenceuse + exemple complet" },
  { src: 'references/garde-robe.md', title: 'Garde-robe', desc: "~50 tenues détaillées, tenues culturelles et d'événement, matières en mouvement" },
  { src: 'references/decors.md', title: 'Décors', desc: 'Décors en 3 plans, vie en arrière-plan, 12 événements' },
  { src: 'references/outils-ia.md', title: 'Outils IA', desc: 'Syntaxe GPT Image 2, Nano Banana, MiniMax H3, Seedance 2.5 ; kit de référence ; dépannage' },
  { src: 'references/formats-photo.md', title: 'Formats photo', desc: '20 formats photo, carrousel, structure détaillée, exemples complets' },
  { src: 'references/formats-video.md', title: 'Formats vidéo', desc: '16 formats vidéo, caméra fluide, anti-IA, scripts et exemples complets' },
  { src: 'references/legendes-hooks.md', title: 'Légendes & hooks', desc: 'Légendes, textes à l\'écran, hashtags, sons, planning, bio' },
  { src: 'references/analyse-sources.md', title: 'Analyse des sources', desc: 'Analyse de 101 posts et 34 Reels : ce qui performe et pourquoi' },
].map((d) => ({ ...d, html: '/' + d.src.replace(/\.md$/, '.html'), txt: '/' + d.src.replace(/\.md$/, '.txt') }));

const read = (p) => fs.readFileSync(path.join(root, p), 'utf8').replace(/\r\n/g, '\n');

// Remplace les liens GitHub par les pages du site (principal) et leurs versions texte (secours).
function siteLinks(md) {
  return md
    .replace(/https:\/\/github\.com\/kalim4k\/influenceuseIA\/blob\/main\/([\w\/.-]+?)\.md/g, (_, p) => abs(`/${p}.html`))
    .replace(/https:\/\/raw\.githubusercontent\.com\/kalim4k\/influenceuseIA\/main\/([\w\/.-]+?)\.md/g, (_, p) => abs(`/${p}.txt`))
    .replace(/https:\/\/github\.com\/kalim4k\/influenceuseIA(?![\w\/])/g, SITE || '/');
}

const slugify = (s) => s.replace(/<[^>]+>/g, '').replace(/&#?\w+;/g, ' ').toLowerCase()
  .replace(/œ/g, 'oe').replace(/æ/g, 'ae').normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function render(md) {
  let html = marked.parse(md, { gfm: true });
  const toc = [];
  const used = new Set();
  html = html.replace(/<h([1-4])>([\s\S]*?)<\/h\1>/g, (_, lvl, inner) => {
    let id = slugify(inner) || 'section';
    while (used.has(id)) id += '-2';
    used.add(id);
    if (lvl === '2') toc.push({ id, text: inner.replace(/<[^>]+>/g, '') });
    return `<h${lvl} id="${id}">${inner}<a class="anchor" href="#${id}" aria-hidden="true">#</a></h${lvl}>`;
  });
  html = html.replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, '</table></div>');
  return { html, toc };
}

// Pas de sommaire automatique si le fichier a déjà le sien.
const tocHtml = (toc) => (toc.length < 3 || toc.some((t) => t.text.trim() === 'Sommaire')) ? '' :
  `<details class="toc" open><summary>Sommaire</summary><ol>${toc.map((t) => `<li><a href="#${t.id}">${t.text}</a></li>`).join('')}</ol></details>`;

const CSS = `
:root{--bg:#faf8f5;--surface:#ffffff;--text:#1d1b19;--muted:#6b6560;--accent:#b0285f;--accent-soft:#fbe9f0;--code:#f3efea;--border:#e7e1da;--note:#fff7e6;--note-border:#f0c36d}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#131211;--surface:#1b1a18;--text:#ece8e3;--muted:#a49e97;--accent:#f27aa8;--accent-soft:#3a1f2b;--code:#211f1d;--border:#2e2b28;--note:#2a2316;--note-border:#8a6a2a}}
:root[data-theme="dark"]{--bg:#131211;--surface:#1b1a18;--text:#ece8e3;--muted:#a49e97;--accent:#f27aa8;--accent-soft:#3a1f2b;--code:#211f1d;--border:#2e2b28;--note:#2a2316;--note-border:#8a6a2a}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--bg);color:var(--text);font:16px/1.65 system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}
a{color:var(--accent);text-underline-offset:2px}
.top{position:sticky;top:0;z-index:5;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(8px);border-bottom:1px solid var(--border)}
.top-in{max-width:820px;margin:0 auto;padding:10px 16px;display:flex;gap:12px;align-items:center;justify-content:space-between}
.brand{font-weight:700;text-decoration:none;color:var(--text)}
.top nav{display:flex;gap:14px;font-size:.92rem}
.top nav a{text-decoration:none;color:var(--muted)}
main{max-width:820px;margin:0 auto;padding:24px 16px 64px}
h1{font-size:clamp(1.7rem,4.5vw,2.3rem);line-height:1.2;margin:.6em 0 .4em}
h2{font-size:1.4rem;margin:2.2em 0 .6em;padding-top:.6em;border-top:1px solid var(--border)}
h3{font-size:1.12rem;margin:1.7em 0 .5em}
h4{font-size:1rem;margin:1.4em 0 .4em}
h1 .anchor,h2 .anchor,h3 .anchor,h4 .anchor{margin-left:.4em;color:var(--border);text-decoration:none;font-weight:400}
.lead{color:var(--muted);font-size:1.08rem;margin-top:0}
.note{background:var(--note);border:1px solid var(--note-border);border-radius:12px;padding:14px 18px;margin:20px 0}
.note>strong:first-child{display:block;margin-bottom:4px}
.note ol{margin:.4em 0 0;padding-left:1.3em}
.howto{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 18px;margin:20px 0}
.paste{display:block;background:var(--accent-soft);border-radius:8px;padding:10px 12px;margin:8px 0;font-weight:600;word-break:break-word}
.cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:10px;margin:14px 0;padding:0;list-style:none}
.cards li{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:12px 14px}
.cards a{font-weight:650;text-decoration:none}
.cards p{margin:.25em 0 .35em;color:var(--muted);font-size:.9rem;line-height:1.45}
.cards small a{font-weight:400;color:var(--muted);font-size:.82rem}
.toc{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:10px 16px;margin:16px 0}
.toc summary{cursor:pointer;font-weight:650}
.toc ol{margin:.5em 0 .2em;padding-left:1.3em;font-size:.95rem}
code{font:.88em/1.5 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;background:var(--code);padding:.1em .35em;border-radius:5px;word-break:break-word}
pre{position:relative;background:var(--code);border:1px solid var(--border);border-radius:10px;padding:14px 14px;overflow-x:auto;white-space:pre-wrap;word-break:break-word}
pre code{background:none;padding:0;font-size:.86rem}
.copy{position:absolute;top:8px;right:8px;font:600 .75rem system-ui,sans-serif;border:1px solid var(--border);background:var(--surface);color:var(--text);border-radius:6px;padding:4px 8px;cursor:pointer;opacity:.85}
.copy:hover{opacity:1}
blockquote{margin:1em 0;padding:.4em 1em;border-left:3px solid var(--accent);background:var(--surface);border-radius:0 8px 8px 0}
.table-wrap{overflow-x:auto;margin:1em 0;border:1px solid var(--border);border-radius:10px}
table{border-collapse:collapse;width:100%;font-size:.9rem}
th,td{padding:8px 10px;border-bottom:1px solid var(--border);vertical-align:top;text-align:left}
th{background:var(--surface)}
td a{word-break:break-all}
hr{border:0;border-top:1px solid var(--border);margin:2em 0}
.foot{color:var(--muted);font-size:.85rem;border-top:1px solid var(--border);margin-top:48px;padding-top:16px}
`;

const JS = `document.querySelectorAll('pre').forEach(function(p){var b=document.createElement('button');b.className='copy';b.type='button';b.textContent='Copier';b.addEventListener('click',function(){var t=p.querySelector('code');navigator.clipboard.writeText((t||p).innerText).then(function(){b.textContent='Copié ✓';setTimeout(function(){b.textContent='Copier'},1500)})});p.appendChild(b)});`;

function page({ title, description, body, canonical, txt }) {
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="index,follow">
${canonical && SITE ? `<link rel="canonical" href="${abs(canonical)}">` : ''}
${txt ? `<link rel="alternate" type="text/plain" href="${abs(txt)}" title="Version texte">` : ''}
<link rel="alternate" type="text/plain" href="${abs('/llms.txt')}" title="llms.txt">
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💫</text></svg>">
<style>${CSS}</style>
</head>
<body>
<header class="top"><div class="top-in"><a class="brand" href="${abs('/')}">💫 Influenceuse IA</a><nav><a href="${abs('/#le-skill')}">Le skill</a><a href="${abs('/#bibliotheque')}">Bibliothèque</a></nav></div></header>
<main>
${body}
<p class="foot">Skill « Influenceuse IA » pour Claude · source : <a href="${GH}">${GH.replace('https://', '')}</a> · tout en texte : <a href="${abs('/llms-full.txt')}">llms-full.txt</a></p>
</main>
<script>${JS}</script>
</body>
</html>
`;
}

// ---------- Construction ----------
// Vide site/ sans supprimer le dossier lui-même (Windows refuse si un terminal y est ouvert).
fs.mkdirSync(out, { recursive: true });
for (const f of fs.readdirSync(out)) fs.rmSync(path.join(out, f), { recursive: true, force: true });
const write = (p, content) => {
  const f = path.join(out, p);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, content);
};

const skillBody = siteLinks(read('SKILL.md').replace(/^---\n[\s\S]*?\n---\n/, '').trim());
const description = "Skill Claude pour créer une influenceuse IA cohérente (pays + métier) et générer des prompts photo et vidéo ultra-détaillés pour GPT Image 2, Nano Banana, MiniMax H3 et Seedance 2.5 — sans installation.";

const library = `<ul class="cards">${DOCS.map((d) => `<li><a href="${abs(d.html)}">${d.title}</a><p>${esc(d.desc)}</p><small><a href="${abs(d.txt)}">version texte</a></small></li>`).join('')}</ul>`;

const skill = render(skillBody);
const indexBody = `
<h1>💫 Influenceuse IA — skill Claude, sans installation</h1>
<p class="lead">Crée ton influenceuse IA en 2 questions, puis reçois des prompts photo et vidéo ultra-détaillés pour Nano Banana, GPT Image 2, MiniMax H3 et Seedance 2.5.</p>

<div class="note" role="note">
<strong>🤖 Note pour Claude</strong>
Ce site contient un skill Claude complet, utilisable <strong>sans rien installer</strong>. Si un utilisateur t'a donné ce lien :
<ol>
<li>Lis la section <a href="${abs('/#le-skill')}">« Le skill »</a> plus bas sur cette page : c'est ton mode d'emploi complet (version texte : <a href="${abs('/skill.txt')}">${abs('/skill.txt')}</a>).</li>
<li>Commence tout de suite par l'onboarding : pose les <strong>2 questions</strong> (pays de l'influenceuse, métier optionnel).</li>
<li>Ouvre les fichiers de référence aux moments indiqués, avec les liens de la <a href="${abs('/#bibliotheque')}">Bibliothèque</a> ou du tableau « Fichiers de référence ». Pour tout lire d'un coup : <a href="${abs('/llms-full.txt')}">${abs('/llms-full.txt')}</a>.</li>
</ol>
Rien à installer, rien à télécharger, aucun zip.
</div>

<div class="howto">
<strong>📱 Comment l'utiliser</strong>
<ol>
<li>Ouvre une nouvelle conversation Claude (application ou claude.ai) et vérifie que la <strong>recherche web</strong> est activée.</li>
<li>Colle ce message :<span class="paste">Utilise ce skill : ${SITE || 'https://ton-site.vercel.app'}</span></li>
<li>Réponds aux 2 questions (pays, métier), puis choisis <strong>image</strong> ou <strong>vidéo</strong>.</li>
</ol>
💡 Crée un <strong>Projet</strong> Claude et colle dans ses Instructions le bloc que Claude te donne après la fiche : tu n'auras plus à recoller le lien.
</div>

<h2 id="bibliotheque">📚 Bibliothèque de référence<a class="anchor" href="#bibliotheque" aria-hidden="true">#</a></h2>
<p>Les fichiers que le skill consulte pour écrire des prompts réalistes. Chaque page existe aussi en version texte.</p>
${library}

<h2 id="le-skill">🧠 Le skill (instructions complètes pour Claude)<a class="anchor" href="#le-skill" aria-hidden="true">#</a></h2>
${tocHtml(skill.toc)}
${skill.html}
`;
write('index.html', page({ title: 'Influenceuse IA — skill Claude sans installation', description, body: indexBody, canonical: '/', txt: '/skill.txt' }));
write('skill.txt', skillBody + '\n');

const fullParts = [`# Influenceuse IA — skill complet (tous les fichiers)\n\n${description}\n\n===== FICHIER : SKILL.md =====\n\n${skillBody}\n`];

for (const d of DOCS) {
  const md = siteLinks(read(d.src));
  const r = render(md);
  const body = `
<p class="lead"><a href="${abs('/')}">← Accueil du skill</a> · fichier de référence <code>${d.src}</code> · <a href="${abs(d.txt)}">version texte</a></p>
<div class="note" role="note"><strong>🤖 Note pour Claude</strong>Ce fichier fait partie du skill « Influenceuse IA ». Le mode d'emploi complet est sur la <a href="${abs('/#le-skill')}">page d'accueil</a> ; utilise ce fichier au moment indiqué par le skill.</div>
${tocHtml(r.toc)}
${r.html}
`;
  write(d.html, page({ title: `${d.title} — Influenceuse IA`, description: d.desc, body, canonical: d.html, txt: d.txt }));
  write(d.txt, md + '\n');
  fullParts.push(`===== FICHIER : ${d.src} =====\n\n${md}\n`);
}

write('llms-full.txt', fullParts.join('\n'));
write('llms.txt', `# Influenceuse IA

> ${description}

Mode d'emploi : lis d'abord le skill, puis pose les 2 questions (pays, métier optionnel), puis demande « image ou vidéo ? ». Lis les fichiers de référence aux moments indiqués par le skill.

## Skill

- [Le skill complet](${abs('/skill.txt')}): déroulé, niveau de détail exigé, format de livraison, règles
- [Tout le skill en un seul fichier](${abs('/llms-full.txt')}): skill + tous les fichiers de référence

## Fichiers de référence

${DOCS.map((d) => `- [${d.title}](${abs(d.txt)}): ${d.desc}`).join('\n')}
`);
write('robots.txt', `User-agent: *\nAllow: /\n`);

console.log(`Site généré dans site/ (${DOCS.length + 1} pages) — URL de base : ${SITE || '(relative)'}`);

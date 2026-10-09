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
  { src: 'references/garde-robe.md', title: 'Garde-robe', desc: "~50 tenues détaillées du style des références, tenues d'événement, matières en mouvement" },
  { src: 'references/decors.md', title: 'Décors', desc: 'Décors en 3 plans (dont 25 décors du quotidien africain : cour, rue en terre, marché…), vie en arrière-plan, 12 événements' },
  { src: 'references/outils-ia.md', title: 'Outils IA', desc: 'Syntaxe GPT Image 2, Nano Banana, MiniMax H3, Seedance 2.5 ; kit de référence ; dépannage' },
  { src: 'references/formats-photo.md', title: 'Formats photo', desc: '20 formats photo, carrousel, structure détaillée, exemples complets' },
  { src: 'references/formats-video.md', title: 'Formats vidéo', desc: '16 formats vidéo, caméra fluide, anti-IA, scripts et exemples complets' },
  { src: 'references/legendes-hooks.md', title: 'Légendes & hooks', desc: 'Légendes, textes à l\'écran, hashtags, sons, planning, bio' },
  { src: 'references/analyse-sources.md', title: 'Analyse des sources', desc: 'Analyse de 101 posts et 34 Reels : ce qui performe et pourquoi' },
].map((d) => ({ ...d, html: '/' + d.src.replace(/\.md$/, '.html'), slug: path.basename(d.src, '.md') }));
const doc = (src) => DOCS.find((d) => d.src === src);

// Pages d'étape : tous les fichiers d'une étape réunis sur une seule page, pour que Claude n'ait qu'un lien à ouvrir.
const PACKS = [
  { slug: 'etape-profil', name: 'PROFIL', icon: '🪪', title: "Étape PROFIL — créer l'influenceuse", when: "à l'onboarding, avant d'écrire la fiche", files: ['templates/fiche-modele.md', 'references/pays.md', 'references/metiers.md', 'references/outils-ia.md'] },
  { slug: 'etape-style', name: 'STYLE', icon: '👗', title: 'Étape STYLE — tenues et décors', when: 'avant le premier prompt, image ou vidéo', files: ['references/garde-robe.md', 'references/decors.md'] },
  { slug: 'etape-image', name: 'IMAGE', icon: '📸', title: 'Étape IMAGE — écrire un prompt photo', when: 'avant le premier prompt image', files: ['references/formats-photo.md', 'references/outils-ia.md', 'references/legendes-hooks.md'] },
  { slug: 'etape-video', name: 'VIDÉO', icon: '🎬', title: 'Étape VIDÉO — écrire un prompt vidéo', when: 'avant le premier prompt vidéo', files: ['references/formats-video.md', 'references/outils-ia.md', 'references/legendes-hooks.md'] },
].map((p) => ({ ...p, html: `/${p.slug}.html`, docs: p.files.map(doc) }));

const read = (p) => fs.readFileSync(path.join(root, p), 'utf8').replace(/\r\n/g, '\n');

// Galerie de mannequins (références de corpulence) : images dans mannequins/, miniatures dans mannequins/mini/.
const MQ_PAGE = '/mannequins.html';
const MANNEQUINS = JSON.parse(read('mannequins/mannequins.json'));
const MQ_TYPES = [...new Set(MANNEQUINS.map((m) => m.type))];

// Remplace les liens GitHub (blob ou raw) par les pages HTML du site.
function siteLinks(md) {
  return md
    .replace(/https:\/\/github\.com\/kalim4k\/influenceuseIA\/blob\/main\/([\w\/.-]+?)\.md/g, (_, p) => abs(`/${p}.html`))
    .replace(/https:\/\/raw\.githubusercontent\.com\/kalim4k\/influenceuseIA\/main\/([\w\/.-]+?)\.md/g, (_, p) => abs(`/${p}.html`))
    .replace(/https:\/\/github\.com\/kalim4k\/influenceuseIA(?![\w\/])/g, SITE || '/');
}

const slugify = (s) => s.replace(/<[^>]+>/g, '').replace(/&#?\w+;/g, ' ').toLowerCase()
  .replace(/œ/g, 'oe').replace(/æ/g, 'ae').normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function render(md, { prefix = '', shift = 0 } = {}) {
  let html = marked.parse(md, { gfm: true });
  const toc = [];
  const used = new Set();
  html = html.replace(/<h([1-4])>([\s\S]*?)<\/h\1>/g, (_, lvl, inner) => {
    let id = prefix + (slugify(inner) || 'section');
    while (used.has(id)) id += '-2';
    used.add(id);
    if (lvl === '2') toc.push({ id, text: inner.replace(/<[^>]+>/g, '') });
    const h = Math.min(6, Number(lvl) + shift);
    return `<h${h} id="${id}">${inner}<a class="anchor" href="#${id}" aria-hidden="true">#</a></h${h}>`;
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
h5,h6{font-size:.95rem;margin:1.2em 0 .4em}
.part{border-top:3px solid var(--accent);padding-top:.8em;margin-top:2.6em}
.url{display:block;color:var(--muted);font-size:.78rem;word-break:break-all}
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
pre{position:relative;background:var(--code);border:1px solid var(--border);border-radius:10px;padding:40px 14px 14px;overflow-x:auto;white-space:pre-wrap;word-break:break-word}
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
.promo{display:flex;gap:14px;align-items:center;background:var(--accent-soft);border-radius:12px;padding:12px 16px;margin:20px 0;text-decoration:none;color:var(--text)}
.promo img{width:64px;height:64px;border-radius:8px;object-fit:cover;flex:none;background:#fff}
.promo strong{color:var(--accent)}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin:18px 0 6px}
.chip{font:600 .85rem system-ui,sans-serif;border:1px solid var(--border);background:var(--surface);color:var(--text);border-radius:999px;padding:6px 12px;cursor:pointer}
.chip.on{background:var(--accent);border-color:var(--accent);color:#fff}
.gallery{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;margin:14px 0 8px;padding:0;list-style:none}
.mq{display:flex;flex-direction:column;background:var(--surface);border:1px solid var(--border);border-radius:12px;overflow:hidden}
.mq[hidden]{display:none}
.mq img{display:block;width:100%;height:auto;aspect-ratio:1;background:#fff}
.mq-body{display:flex;flex-direction:column;gap:4px;padding:10px 12px 12px;flex:1}
.mq-body strong{font-size:.92rem;line-height:1.35}
.mq-body small{color:var(--muted);font-size:.8rem;line-height:1.4;margin-bottom:6px}
.tag{align-self:flex-start;font-size:.72rem;font-weight:650;color:var(--accent);background:var(--accent-soft);border-radius:999px;padding:2px 8px}
.dl{margin-top:auto;display:block;text-align:center;background:var(--accent);color:#fff;border-radius:8px;padding:9px 10px;font-weight:650;font-size:.9rem;text-decoration:none}
.dl:hover{filter:brightness(1.08)}
`;

const JS = `document.querySelectorAll('pre').forEach(function(p){var b=document.createElement('button');b.className='copy';b.type='button';b.textContent='Copier';b.addEventListener('click',function(){var t=p.querySelector('code');navigator.clipboard.writeText((t||p).innerText).then(function(){b.textContent='Copié ✓';setTimeout(function(){b.textContent='Copier'},1500)})});p.appendChild(b)});`;

function page({ title, description, body, canonical }) {
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="index,follow">
${canonical && SITE ? `<link rel="canonical" href="${abs(canonical)}">` : ''}
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💫</text></svg>">
<style>${CSS}</style>
</head>
<body>
<header class="top"><div class="top-in"><a class="brand" href="${abs('/')}">💫 Influenceuse IA</a><nav><a href="${abs('/#le-skill')}">Le skill</a><a href="${abs('/#bibliotheque')}">Étapes</a><a href="${abs(MQ_PAGE)}">Corps</a></nav></div></header>
<main>
${body}
<p class="foot">Skill « Influenceuse IA » pour Claude · source : <a href="${GH}">${GH.replace('https://', '')}</a></p>
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
// Message de départ : l'abonné colle lui-même tous les liens, car Claude (application) n'ouvre que les liens collés par l'utilisateur.
const START_BLOCK = `Utilise ce skill d'influenceuse IA. Voici ses pages (commence par la première) :\n${abs('/skill.html')}\n${PACKS.map((p) => abs(p.html)).join('\n')}`;
const description = "Skill Claude pour créer une influenceuse IA cohérente (pays + métier) et générer des prompts photo et vidéo ultra-détaillés pour GPT Image 2, Nano Banana, MiniMax H3 et Seedance 2.5 — sans installation.";

// L'URL complète est écrite en clair sous chaque lien : certains lecteurs web ne gardent que le texte.
const card = (href, title, desc) => `<li><a href="${abs(href)}">${title}</a><p>${esc(desc)}</p><small class="url">${abs(href)}</small></li>`;
const stepCards = `<ul class="cards">${PACKS.map((p) => card(p.html, `${p.icon} Étape ${p.name}`, `À lire ${p.when} : ${p.docs.map((d) => d.title.toLowerCase()).join(', ')}.`)).join('')}${card(MQ_PAGE, '🖤 Corps', `${MANNEQUINS.length} mannequins de corpulence à télécharger + le prompt pour leur donner le visage de l'influenceuse.`)}</ul>`;
const library = `<ul class="cards">${DOCS.map((d) => card(d.html, d.title, d.desc)).join('')}</ul>`;

const skill = render(skillBody);
const indexBody = `
<h1>💫 Influenceuse IA — skill Claude, sans installation</h1>
<p class="lead">Crée ton influenceuse IA en 2 questions, puis reçois des prompts photo et vidéo ultra-détaillés pour Nano Banana, GPT Image 2, MiniMax H3 et Seedance 2.5.</p>

<div class="note" role="note">
<strong>🤖 Note pour Claude</strong>
Ce site contient un skill Claude complet, utilisable <strong>sans rien installer</strong>. Si un utilisateur t'a donné ce lien :
<ol>
<li>Lis la section <a href="${abs('/#le-skill')}">« Le skill »</a> plus bas sur cette page : c'est ton mode d'emploi complet.</li>
<li>Commence tout de suite par l'onboarding : pose les <strong>2 questions</strong> (pays de l'influenceuse, métier optionnel).</li>
<li>À chaque étape, ouvre <strong>une seule page</strong>, qui contient tout ce qu'il faut pour cette étape :
<br>PROFIL (onboarding) : ${abs('/etape-profil.html')}
<br>STYLE, tenues et décors (avant le 1er prompt) : ${abs('/etape-style.html')}
<br>IMAGE (avant le 1er prompt image) : ${abs('/etape-image.html')}
<br>VIDÉO (avant le 1er prompt vidéo) : ${abs('/etape-video.html')}</li>
<li>Tu ne peux ouvrir que les liens que l'utilisateur a collés lui-même. S'il n'a pas collé ces liens d'étape, demande-lui de les coller dans sa réponse (le skill explique comment).</li>
</ol>
Rien à installer, rien à télécharger, aucun zip.
</div>

<div class="howto">
<strong>📱 Comment l'utiliser</strong>
<ol>
<li>Ouvre une nouvelle conversation Claude (application ou claude.ai) et vérifie que la <strong>recherche web</strong> est activée.</li>
<li>Copie ce message <strong>en entier</strong> et colle-le :
<pre><code>${esc(START_BLOCK)}</code></pre></li>
<li>Réponds aux 2 questions (pays, métier), puis choisis <strong>image</strong> ou <strong>vidéo</strong>.</li>
</ol>
💡 Garde ce message dans tes notes (avec la fiche que Claude te donne) et colle-le au début de chaque nouvelle conversation : Claude ne peut ouvrir que les liens que tu colles toi-même.
</div>

<a class="promo" href="${abs(MQ_PAGE)}"><img src="/mannequins/mini/${MANNEQUINS[0].file.replace(/\.png$/, '.jpg')}" alt="" width="64" height="64"><span><strong>🖤 Choisis le corps de ton influenceuse</strong><br>${MANNEQUINS.length} mannequins à télécharger + le prompt pour leur donner son visage →</span></a>

<h2 id="bibliotheque">📚 Les pages du skill<a class="anchor" href="#bibliotheque" aria-hidden="true">#</a></h2>
<p>Une page par étape de la conversation : chacune réunit tous les fichiers dont Claude a besoin à ce moment-là.</p>
${stepCards}
<h3 id="fichiers-separes">Fichiers séparés<a class="anchor" href="#fichiers-separes" aria-hidden="true">#</a></h3>
<p>Les mêmes contenus, un fichier par page (utiles si une page d'étape ne s'ouvre pas en entier).</p>
${library}

<h2 id="le-skill">🧠 Le skill (instructions complètes pour Claude)<a class="anchor" href="#le-skill" aria-hidden="true">#</a></h2>
${tocHtml(skill.toc)}
${skill.html}
`;
write('index.html', page({ title: 'Influenceuse IA — skill Claude sans installation', description, body: indexBody, canonical: '/' }));
// Même page à une adresse dédiée, utilisée dans le message de départ (adresse neuve : pas de vieille version en cache chez les lecteurs web).
write('skill.html', page({ title: 'Influenceuse IA — skill Claude sans installation', description, body: indexBody }));

const NO_DESC = "Rappel : aucun prompt ne décrit le physique de l'influenceuse (visage, teint, cheveux, silhouette) ; sa photo, jointe en image 1, s'en charge.";

// Fichiers séparés : une page par fichier.
for (const d of DOCS) {
  const r = render(siteLinks(read(d.src)));
  const packs = PACKS.filter((p) => p.files.includes(d.src));
  const body = `
<p class="lead"><a href="${abs('/')}">← Accueil du skill</a> · fichier de référence <code>${d.src}</code>${packs.length ? ` · inclus dans ${packs.map((p) => `<a href="${abs(p.html)}">l'étape ${p.name}</a>`).join(', ')}` : ''}</p>
<div class="note" role="note"><strong>🤖 Note pour Claude</strong>Ce fichier fait partie du skill « Influenceuse IA ». Le mode d'emploi complet est sur la <a href="${abs('/#le-skill')}">page d'accueil</a> ; utilise ce fichier au moment indiqué par le skill.</div>
${tocHtml(r.toc)}
${r.html}
`;
  write(d.html, page({ title: `${d.title} — Influenceuse IA`, description: d.desc, body, canonical: d.html }));
}

// Pages d'étape : tous les fichiers de l'étape à la suite, titres décalés d'un niveau.
for (const p of PACKS) {
  const parts = p.docs.map((d) => `<section id="${d.slug}" class="part">${render(siteLinks(read(d.src)), { prefix: `${d.slug}-`, shift: 1 }).html}</section>`).join('\n');
  const body = `
<p class="lead"><a href="${abs('/')}">← Accueil du skill</a> · page d'étape</p>
<h1>${p.icon} ${esc(p.title)}</h1>
<div class="note" role="note"><strong>🤖 Note pour Claude</strong>Cette page réunit tous les fichiers de l'étape ${p.name} du skill « Influenceuse IA » : ${p.docs.map((d) => `<code>${path.basename(d.src)}</code>`).join(', ')}. Lis-la en entier, une seule fois, ${p.when} : tu n'as pas besoin d'ouvrir les fichiers séparés. Le mode d'emploi complet est sur la <a href="${abs('/#le-skill')}">page d'accueil</a>. ${NO_DESC}</div>
<details class="toc" open><summary>Dans cette page</summary><ol>${p.docs.map((d) => `<li><a href="#${d.slug}">${d.title}</a> <small>(${path.basename(d.src)})</small></li>`).join('')}</ol></details>
${parts}
`;
  write(p.html, page({ title: `${p.title} — Influenceuse IA`, description: `Étape ${p.name} du skill Influenceuse IA : ${p.docs.map((d) => d.title.toLowerCase()).join(', ')}.`, body, canonical: p.html }));
}

// ---------- Page « Corps » : galerie de mannequins ----------
const mqDir = path.join(root, 'mannequins');
fs.cpSync(mqDir, path.join(out, 'mannequins'), { recursive: true, filter: (f) => !/\.(json|md)$/.test(f) });
const num = (m) => m.file.match(/(\d+)/)[1];
const mqCards = MANNEQUINS.map((m) => {
  const full = `/mannequins/${m.file}`;
  const mini = fs.existsSync(path.join(mqDir, 'mini', m.file.replace(/\.png$/, '.jpg'))) ? `/mannequins/mini/${m.file.replace(/\.png$/, '.jpg')}` : full;
  const vues = m.vues > 1 ? `${m.vues} vues` : '1 vue';
  return `<li class="mq" data-type="${esc(m.type)}"><a href="${full}" target="_blank" rel="noopener"><img src="${mini}" alt="Mannequin ${num(m)} : ${esc(m.type.toLowerCase())}, ${esc(m.titre.toLowerCase())}" width="640" height="640" loading="lazy"></a><div class="mq-body"><span class="tag">${esc(m.type)}</span><strong>N° ${num(m)} · ${esc(m.titre)}</strong><small>${vues} · ${esc(m.tenue)}</small><a class="dl" href="${full}" download="${m.file}">⬇ Télécharger</a></div></li>`;
}).join('');
const chips = `<div class="chips" role="group" aria-label="Filtrer par type de corps" hidden><button type="button" class="chip on" data-f="">Tous (${MANNEQUINS.length})</button>${MQ_TYPES.map((t) => `<button type="button" class="chip" data-f="${esc(t)}">${esc(t)} (${MANNEQUINS.filter((m) => m.type === t).length})</button>`).join('')}</div>`;
const mqFilterJs = `(function(){var c=document.querySelector('.chips');if(!c)return;c.hidden=false;c.addEventListener('click',function(e){var b=e.target.closest('.chip');if(!b)return;c.querySelectorAll('.chip').forEach(function(x){x.classList.toggle('on',x===b)});var f=b.getAttribute('data-f');document.querySelectorAll('.mq').forEach(function(m){m.hidden=!!f&&m.getAttribute('data-type')!==f})})})();`;
const gallery = `<h2 id="galerie">Les ${MANNEQUINS.length} corps<a class="anchor" href="#galerie" aria-hidden="true">#</a></h2>${chips}<ul class="gallery">${mqCards}</ul><script>${mqFilterJs}</script>`;
const mqMd = read('mannequins/page.md');
const mqBody = `
<p class="lead"><a href="${abs('/')}">← Accueil du skill</a></p>
<h1>🖤 Choisis le corps de ton influenceuse</h1>
<p class="lead">${MANNEQUINS.length} mannequins noirs servent de référence de corpulence. Télécharge celui que tu veux, puis donne-le à GPT Image 2 ou Nano Banana avec une photo de ton influenceuse : l'IA lui donne exactement ce corps, avec son visage. <a href="#le-prompt-a-copier">Voir le prompt ↓</a></p>
<div class="note" role="note"><strong>🤖 Note pour Claude</strong>Cette page fait partie du skill « Influenceuse IA ». Si l'abonné veut choisir la corpulence de son influenceuse, envoie-le ici : il télécharge un mannequin et utilise le prompt plus bas (image 1 = son influenceuse, image 2 = le mannequin). Le résultat devient sa référence du corps.</div>
${render(mqMd).html.replace(/<!-- GALERIE -->\s*/, gallery)}
`;
write(MQ_PAGE, page({ title: 'Corps — Influenceuse IA', description: `${MANNEQUINS.length} mannequins de corpulence à télécharger et le prompt pour leur donner le visage de ton influenceuse (GPT Image 2, Nano Banana).`, body: mqBody, canonical: MQ_PAGE }));
// llms.txt (convention des sites lisibles par les IA) : ne pointe que vers des pages HTML.
write('llms.txt', `# Influenceuse IA

> ${description}

Mode d'emploi : lis d'abord le skill sur la page d'accueil, puis pose les 2 questions (pays, métier optionnel), puis demande « image ou vidéo ? ». À chaque étape, ouvre la page d'étape indiquée.

## Skill

- [Le skill complet (page d'accueil)](${abs('/')}): déroulé, niveau de détail exigé, format de livraison, règles

## Pages d'étape

${PACKS.map((p) => `- [Étape ${p.name}](${abs(p.html)}): à lire ${p.when}`).join('\n')}
- [Corps](${abs(MQ_PAGE)}): ${MANNEQUINS.length} mannequins de corpulence et le prompt pour leur donner le visage de l'influenceuse

## Fichiers séparés

${DOCS.map((d) => `- [${d.title}](${abs(d.html)}): ${d.desc}`).join('\n')}
`);
write('robots.txt', `User-agent: *\nAllow: /\n`);

console.log(`Site généré dans site/ (${1 + DOCS.length + PACKS.length + 1} pages) — URL de base : ${SITE || '(relative)'}`);

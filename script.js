/* =====================================================
   CONTENU DU PORTFOLIO
   Pour ajouter un projet ou une photo : copie un bloc
   { ... }, colle-le à la suite (n'oublie pas la virgule)
   et change les textes / noms de fichiers.

   - "image"  : fichier de couverture, dans le dossier images/
                (ex: "images/affiche-jazz.jpg")
   - "images" : autres images du projet (affichées à la suite)
                (facultatif, surtout utile pour les projets)
   - "ratio"  : proportions de la couverture, "largeur / hauteur"
                ("4 / 5" = vertical, "4 / 3" ou "16 / 9" = paysage).
                Réserve la bonne place avant que l'image charge.
   - "description" : texte sous le titre (peut rester vide "")
   - Si "image" est vide, un rectangle de couleur s'affiche
     à la place (pratique tant que tu n'as pas tes images).

   Les projets ET les photos utilisent le même carrousel
   et la même fenêtre vitrée.
   ===================================================== */

const PROJETS = [
  {
    titre: "Cover fictive de l’album IN INFINITUM de SDM",
    categorie: "Pochette d’album",
    ratio: "4 / 3",
    image: "images/in-infinitum-1-digipack.jpg",
    couleur: "#2e0a1b",
    description: "Pochette fictive pour l’album IN INFINITUM de SDM : digipack, vinyle et CD, dans une ambiance sombre aux touches bleu nuit.",
    images: [
      "images/in-infinitum-2-vinyle.jpg",
      "images/in-infinitum-3-artwork.jpg"
    ]
  },
  {
    titre: "Cover d’album pour Jolagreen #1",
    categorie: "Pochette d’album",
    ratio: "4 / 3",
    image: "images/jolagreen-1-digipack.jpg",
    couleur: "#8a8a8a",
    description: "Pochette d’album pour Jolagreen : digipack, vinyle et CD dans une ambiance grise et claire, façon plan technique.",
    images: [
      "images/jolagreen-1-vinyle.jpg",
      "images/jolagreen-1-artwork.jpg"
    ]
  },
  {
    titre: "Cover d’album pour Jolagreen #2",
    categorie: "Pochette d’album",
    ratio: "4 / 3",
    image: "images/jolagreen-2-digipack.jpg",
    couleur: "#2a2a2a",
    description: "Pochette d’album pour Jolagreen : digipack, vinyle et CD en noir et blanc, avec un jeu de négatif entre les deux volets.",
    images: [
      "images/jolagreen-2-vinyle.jpg",
      "images/jolagreen-2-artwork.jpg"
    ]
  },
  {
    titre: "Cover d’album pour Jolagreen #3",
    categorie: "Pochette d’album",
    ratio: "4 / 3",
    image: "images/jolagreen-3-digipack.jpg",
    couleur: "#1b1c33",
    description: "Pochette d’album pour Jolagreen : digipack, vinyle et CD dans un bleu nuit sombre, traversé par un faisceau de lumière.",
    images: [
      "images/jolagreen-3-vinyle.jpg",
      "images/jolagreen-3-artwork.jpg"
    ]
  },
  {
    titre: "Cover d’album pour Jolagreen #4",
    categorie: "Pochette d’album",
    ratio: "4 / 3",
    image: "images/jolagreen-4-digipack.jpg",
    couleur: "#1f8a8a",
    description: "Pochette d’album pour Jolagreen : digipack, vinyle et CD aux couleurs saturées, turquoise et rose.",
    images: [
      "images/jolagreen-4-vinyle.jpg",
      "images/jolagreen-4-artwork.jpg"
    ]
  },
  {
    titre: "Cover d’album pour Jolagreen #5",
    categorie: "Pochette d’album",
    ratio: "4 / 3",
    image: "images/jolagreen-5-digipack.jpg",
    couleur: "#b0193a",
    description: "Pochette d’album pour Jolagreen : digipack, vinyle et CD dans un rouge vif sur fond rose pâle.",
    images: [
      "images/jolagreen-5-vinyle.jpg",
      "images/jolagreen-5-artwork.jpg"
    ]
  },
  {
    titre: "Poster décoratif sur Lewis Hamilton",
    categorie: "Poster",
    ratio: "1080 / 1350",
    image: "images/hamilton-poster.jpg",
    couleur: "#8a1c5a",
    description: "Poster décoratif sur Lewis Hamilton : un collage en rose et bordeaux, avec une typographie verticale.",
    images: []
  },
  {
    titre: "Affiche pour annoncer le Stade de France de SDM",
    categorie: "Affiche",
    ratio: "1080 / 1350",
    image: "images/sdm-stade-de-france.jpg",
    couleur: "#5b6b8c",
    description: "Affiche pour annoncer les concerts de SDM au Stade de France, dans des tons bleu glacier, avec la mention complet.",
    images: []
  },
  {
    titre: "Visuel pour annoncer un jour de match (handball)",
    categorie: "Visuel sport",
    ratio: "1080 / 1350",
    image: "images/handball-match-day.jpg",
    couleur: "#16264f",
    description: "Visuel d’annonce de match de handball : date, heure, lieu et équipes en présence.",
    images: []
  },
  {
    titre: "Visuel pour annoncer le nombre de streams sur l’album « 23 Jours Plus Tard » de Jolagreen",
    categorie: "Visuel réseaux",
    ratio: "1080 / 1350",
    image: "images/jolagreen-streams-23-jours-plus-tard.jpg",
    couleur: "#2f5d3a",
    description: "Visuel pour célébrer le nombre de streams de l’album « 23 Jours Plus Tard » de Jolagreen, dans des verts profonds.",
    images: []
  },
  {
    titre: "Visuels de fin de match pour annoncer les scores (handball)",
    categorie: "Visuel sport",
    ratio: "1080 / 1350",
    image: "images/handball-score-final.jpg",
    couleur: "#27356b",
    description: "Visuel de fin de match pour annoncer le score final et la victoire.",
    images: []
  },
  {
    titre: "Visuel pour l’annonce de la tracklist de l’album « Grand Garçon » de PLK",
    categorie: "Visuel réseaux",
    ratio: "1080 / 1350",
    image: "images/plk-tracklist-grand-garcon.jpg",
    couleur: "#6b1a1a",
    description: "Visuel pour dévoiler la tracklist de l’album « Grand Garçon » de PLK, sur une photo floutée aux accents rouges.",
    images: []
  },
  {
    titre: "Visuel pour l’annonce de l’album « Grand Garçon » de PLK",
    categorie: "Visuel réseaux",
    ratio: "1080 / 1350",
    image: "images/plk-annonce-grand-garcon.jpg",
    couleur: "#b0193a",
    description: "Visuel pour annoncer la sortie de l’album « Grand Garçon » de PLK, dans des rouges intenses.",
    images: []
  },
  {
    titre: "Fond d’écran pour ordinateur",
    categorie: "Fond d’écran",
    ratio: "3024 / 1964",
    image: "images/fond-ecran-ordinateur.jpg",
    couleur: "#a3203f",
    description: "Fond d’écran pour ordinateur : un collage de motifs léopard, de fleurs et de marbre dans des rouges et des roses.",
    images: []
  },
  {
    titre: "Visuel pour annoncer le nombre de streams sur l’album « Enna Boost » de PLK",
    categorie: "Visuel réseaux",
    ratio: "1080 / 1350",
    image: "images/plk-streams-enna-boost.jpg",
    couleur: "#3a3a3a",
    description: "Visuel pour annoncer le cap du milliard de streams de l’album « Enna Boost » de PLK.",
    images: []
  },
  {
    titre: "Visuel décoratif de l’équipe de France de handball",
    categorie: "Visuel sport",
    ratio: "1800 / 2100",
    image: "images/projet-16-equipe-france-handball.jpg",
    couleur: "#2a3a8a",
    description: "Visuel décoratif sur l’équipe de France de handball : un titre massif et les joueurs en bas, dans des bleus profonds.",
    images: []
  },
  {
    titre: "Affiche d’un festival de musique fictif « Contre Courant » (devoir d’école)",
    categorie: "Affiche",
    ratio: "3508 / 4961",
    image: "images/projet-17-contre-courant.jpg",
    couleur: "#8a1a1e",
    description: "Affiche d’un festival de musique imaginaire, réalisée dans le cadre d’un devoir d’école : programmation, dates, lieu et partenaires.",
    images: []
  },
  {
    titre: "Carte de visite / carton de visite",
    categorie: "Carte de visite",
    ratio: "644 / 645",
    image: "images/projet-18-carte-visite-nouvelles-expressions.jpg",
    couleur: "#b8648f",
    description: "Série de cartes et cartons de visite aux ornements dorés, dans une palette de roses et de motifs rayés.",
    images: [
      "images/projet-18-carte-visite-reverie.jpg",
      "images/projet-18-carte-visite-circuit-mozart.jpg",
      "images/projet-18-carte-visite-flute-enchantee.jpg"
    ]
  }
];

const PHOTOS = [
  {
    titre: "Bâtiment avec une jolie architecture en Espagne",
    ratio: "1512 / 2016",
    image: "images/photo-01-batiment-espagne.jpg",
    couleur: "#471029",
    description: ""
  },
  {
    titre: "Cliché 3/4 avant d’une Ferrari F40",
    ratio: "1512 / 2016",
    image: "images/photo-02-ferrari-f40-avant.jpg",
    couleur: "#471029",
    description: ""
  },
  {
    titre: "Cliché 3/4 arrière d’une Ferrari F40",
    ratio: "1512 / 2016",
    image: "images/photo-03-ferrari-f40-arriere.jpg",
    couleur: "#471029",
    description: ""
  },
  {
    titre: "Cliché du feu arrière d’une Ferrari 250 GTO",
    ratio: "1512 / 2016",
    image: "images/photo-04-ferrari-250-gto-feu-arriere.jpg",
    couleur: "#471029",
    description: ""
  },
  {
    titre: "Cliché du feu avant d’une Ferrari F12tdf",
    ratio: "1512 / 2016",
    image: "images/photo-05-ferrari-f12tdf-feu-avant.jpg",
    couleur: "#471029",
    description: ""
  },
  {
    titre: "Cliché de face d’une Porsche 911 GT3 RS",
    ratio: "1170 / 1335",
    image: "images/photo-06-porsche-911-gt3-rs.jpg",
    couleur: "#471029",
    description: ""
  },
  {
    titre: "Cliché du monument exposé sur le rond-point du Porsche Museum (Stuttgart)",
    ratio: "1170 / 1473",
    image: "images/photo-07-porsche-museum-monument.jpg",
    couleur: "#471029",
    description: ""
  },
  {
    titre: "L’architecture du Palais Garnier",
    ratio: "1512 / 2016",
    image: "images/photo-08-palais-garnier.jpg",
    couleur: "#471029",
    description: ""
  },
  {
    titre: "Circuit Spa-Francorchamps (Belgique)",
    ratio: "1167 / 871",
    image: "images/photo-09-spa-francorchamps.jpg",
    couleur: "#471029",
    description: ""
  },
  {
    titre: "Feu d’artifice du 14 juillet",
    ratio: "1160 / 1437",
    image: "images/photo-10-feu-artifice-14-juillet.jpg",
    couleur: "#471029",
    description: ""
  },
  {
    titre: "Lion du zoo de La Palmyre",
    ratio: "1163 / 867",
    image: "images/photo-11-lion-palmyre-1.jpg",
    couleur: "#471029",
    description: "",
    images: ["images/photo-11-lion-palmyre-2.jpg"]
  }
];

/* =====================================================
   FONCTIONNEMENT DU SITE
   (tu n'as normalement pas besoin de modifier cette partie)
   ===================================================== */

// Réglage : utiliser les miniatures (images/mini/...) pour les cartes. Plus léger sur téléphone.
// Si une miniature n'existe pas, le site prend automatiquement l'image d'origine.
const MINIATURES = true;
function miniature(chemin) {
  return MINIATURES && chemin ? chemin.replace("images/", "images/mini/") : chemin;
}

// Crée soit une image, soit un rectangle de couleur si l'image manque
// ("secours" = autre chemin à essayer si le premier est introuvable)
function creerMedia(src, texte, couleur, ratio, secours) {
  const vide = () => {
    const d = document.createElement("div");
    d.className = "vide";
    d.style.background = couleur || "#471029";
    if (ratio) d.style.aspectRatio = ratio;
    d.textContent = texte;
    return d;
  };
  if (!src) return vide();
  const img = document.createElement("img");
  img.alt = texte;
  img.loading = "lazy";
  img.decoding = "async";
  img.onerror = () => {
    if (secours && img.getAttribute("src") !== secours) { img.src = secours; return; }   // miniature absente → image d'origine
    img.replaceWith(vide());                                                              // fichier introuvable → rectangle
  };
  img.src = src;
  return img;
}

// ----- Carrousels (projets et photos) -----
// Chaque carte reçoit --e (1 = au centre de l'écran, 0 = loin) et --s (position).
// Le CSS s'en sert pour agrandir l'élément central et reculer les autres.
const cartes = [];
function construireCarrousel(liste, conteneur, categorieParDefaut) {
  liste.forEach(p => {
    const fiche = { categorie: categorieParDefaut, images: [], description: "", ...p };
    const carte = document.createElement("button");
    carte.className = "projet";
    const [l, h] = (fiche.ratio || "4 / 3").split("/").map(Number);
    carte.style.setProperty("--r", (l / h).toFixed(4));
    carte.innerHTML = `<div class="projet__visuel">
        <div class="projet__legende"><h3 class="projet__titre"></h3><p class="projet__meta"></p></div>
      </div>`;
    carte.querySelector(".projet__visuel").prepend(creerMedia(miniature(fiche.image), fiche.titre, fiche.couleur, null, fiche.image));
    carte.querySelector(".projet__titre").textContent = fiche.titre;
    carte.querySelector(".projet__meta").textContent = fiche.categorie;
    carte.addEventListener("click", () => ouvrirProjet(fiche, carte));
    conteneur.append(carte);
    cartes.push(carte);
  });
}

let majPrevue = false;
function majCarrousel() {
  majPrevue = false;
  const h = window.innerHeight;
  const centre = h / 2;
  const mesures = [];
  cartes.forEach(c => {                                       // 1) on lit les positions
    if (!c.offsetParent) return;                              // onglet caché : rien à calculer
    const r = c.getBoundingClientRect();
    if (r.bottom < -h || r.top > 2 * h) return;               // trop loin de l'écran : on ne calcule pas
    mesures.push([c, ((r.top + r.height / 2) - centre) / (h * 0.75)]);
  });
  mesures.forEach(([c, brut]) => {                            // 2) puis on écrit les styles
    const s = Math.max(-1, Math.min(1, brut));
    const e = 1 - Math.pow(Math.abs(s), 1.6);
    c.style.setProperty("--e", e.toFixed(3));
    c.style.setProperty("--s", s.toFixed(3));
    c.style.zIndex = Math.round(e * 10);                      // l'élément central passe devant
  });
}
function demanderMaj() {
  if (!majPrevue) { majPrevue = true; requestAnimationFrame(majCarrousel); }
}
window.addEventListener("scroll", demanderMaj, { passive: true });

construireCarrousel(PROJETS, document.getElementById("grille-projets"), "Design");
construireCarrousel(PHOTOS, document.getElementById("grille-photos"), "Photo");

// ----- Onglets (la pilule glisse d'un onglet à l'autre) -----
const barre = document.querySelector(".onglets");
const thumb = barre.querySelector(".onglets__thumb");
const onglets = barre.querySelectorAll(".onglet");
const panneaux = document.querySelectorAll(".panneau");

function placerThumb() {
  const actif = barre.querySelector(".onglet.is-actif");
  thumb.style.width = actif.offsetWidth + "px";
  thumb.style.transform = `translateX(${actif.offsetLeft}px)`;
}
function afficherOnglet(nom, defiler = true) {
  onglets.forEach(o => o.classList.toggle("is-actif", o.dataset.cible === nom));
  panneaux.forEach(p => p.classList.toggle("is-actif", p.id === nom));
  placerThumb();
  history.replaceState(null, "", "#" + nom);
  const haut = document.querySelector("main").offsetTop - 70;
  if (defiler && window.scrollY > haut) window.scrollTo({ top: haut, behavior: "instant" });
  majCarrousel();
}
onglets.forEach(o => o.addEventListener("click", () => afficherOnglet(o.dataset.cible)));
window.addEventListener("resize", () => { placerThumb(); demanderMaj(); });

// ----- Fenêtre de détail (projet ou photo) -----
const detail = document.getElementById("detail");
const boite = detail.querySelector(".detail__boite");
const lightbox = document.getElementById("lightbox");
let minuteurDetail, minuteurLightbox;
const detailOuvert = () => detail.classList.contains("is-ouvert");
const lightboxOuverte = () => lightbox.classList.contains("is-ouvert");

function ouvrirProjet(p, carte) {
  const toutes = [p.image, ...p.images];
  const conteneur = document.getElementById("detail-images");
  conteneur.innerHTML = "";
  toutes.forEach((src, n) => {
    // Chaque image est cliquable pour l'afficher en grand
    const b = document.createElement("button");
    b.className = "detail__zoom";
    b.style.setProperty("--i", n);                            // décale l'apparition de chaque image
    b.setAttribute("aria-label", `Voir en grand : image ${n + 1} sur ${toutes.length}`);
    b.append(creerMedia(src, p.titre, p.couleur));
    b.addEventListener("click", () => ouvrirLightbox(
      toutes.map((s, k) => ({ src: s, legende: toutes.length > 1 ? `${p.titre} (${k + 1}/${toutes.length})` : p.titre, couleur: p.couleur })), n
    ));
    conteneur.append(b);
  });
  document.getElementById("detail-meta").textContent = p.categorie;
  document.getElementById("detail-titre").textContent = p.titre;
  const texte = document.getElementById("detail-texte");
  texte.textContent = p.description;
  texte.hidden = !p.description;                              // pas de paragraphe vide

  clearTimeout(minuteurDetail);
  detail.hidden = false;
  boite.scrollTop = 0;
  if (carte) {                                                // la fenêtre "sort" de la carte cliquée
    const r = carte.querySelector(".projet__visuel").getBoundingClientRect();
    boite.style.setProperty("--ox", (r.left + r.width / 2 - boite.offsetLeft) + "px");
    boite.style.setProperty("--oy", (r.top + r.height / 2 - boite.offsetTop) + "px");
  }
  document.body.style.overflow = "hidden";
  void boite.offsetWidth;                                     // force le navigateur à "voir" l'état fermé avant d'animer
  detail.classList.add("is-ouvert");
}
function fermerDetail() {
  if (!detailOuvert()) return;
  detail.classList.remove("is-ouvert");
  minuteurDetail = setTimeout(() => {
    detail.hidden = true;
    if (!lightboxOuverte()) document.body.style.overflow = "";
  }, 320);
}
detail.querySelectorAll("[data-fermer]").forEach(el => el.addEventListener("click", fermerDetail));

// ----- Agrandissement plein écran -----
const btnPrec = lightbox.querySelector(".lightbox__prec");
const btnSuiv = lightbox.querySelector(".lightbox__suiv");
let listeLightbox = [];
let indexLightbox = 0;

function ouvrirLightbox(liste, i) {
  listeLightbox = liste;
  indexLightbox = (i + liste.length) % liste.length;
  const el = liste[indexLightbox];
  const zone = document.getElementById("lightbox-media");
  zone.innerHTML = "";
  zone.append(creerMedia(el.src, el.legende, el.couleur, el.ratio));
  document.getElementById("lightbox-legende").textContent = el.legende;
  btnPrec.hidden = btnSuiv.hidden = liste.length < 2;         // pas de flèches s'il n'y a qu'une image
  clearTimeout(minuteurLightbox);
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  void lightbox.offsetWidth;
  lightbox.classList.add("is-ouvert");
}
function fermerLightbox() {
  if (!lightboxOuverte()) return;
  lightbox.classList.remove("is-ouvert");
  minuteurLightbox = setTimeout(() => {
    lightbox.hidden = true;
    if (!detailOuvert()) document.body.style.overflow = "";   // si la fenêtre est encore ouverte, on garde le blocage du scroll
  }, 300);
}
btnPrec.addEventListener("click", () => ouvrirLightbox(listeLightbox, indexLightbox - 1));
btnSuiv.addEventListener("click", () => ouvrirLightbox(listeLightbox, indexLightbox + 1));
lightbox.querySelector(".lightbox__fermer").addEventListener("click", fermerLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) fermerLightbox(); });   // clic sur le fond

// Glisser le doigt à gauche / à droite pour changer d'image
let departX = null;
lightbox.addEventListener("touchstart", e => { departX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener("touchend", e => {
  if (departX === null || listeLightbox.length < 2) return;
  const dx = e.changedTouches[0].clientX - departX;
  departX = null;
  if (Math.abs(dx) > 50) ouvrirLightbox(listeLightbox, indexLightbox + (dx < 0 ? 1 : -1));
});

// ----- Clavier -----
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { lightboxOuverte() ? fermerLightbox() : fermerDetail(); }
  if (lightboxOuverte() && e.key === "ArrowLeft") ouvrirLightbox(listeLightbox, indexLightbox - 1);
  if (lightboxOuverte() && e.key === "ArrowRight") ouvrirLightbox(listeLightbox, indexLightbox + 1);
});

// ----- Démarrage -----
if (location.hash === "#photo") afficherOnglet("photo", false); else placerThumb();
majCarrousel();
if (document.fonts) document.fonts.ready.then(() => { placerThumb(); majCarrousel(); });

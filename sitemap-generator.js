// sitemap-generator.js
const path = require('path');
const Sitemap = require('react-router-sitemap').default;

// Liste des routes statiques à inclure dans le sitemap
const routes = [
  '/',
  '/index.php',
  '/trouvez.php',
  '/catalogue-cles-coffre.php',
  '/catalogue-telecommandes.php',
  '/badges.php',
  '/services.php',
  '/cle/double-de-cle.html',
  '/zone.php',
  '/paiement_devis.php',
  '/recherche.php',
  '/contact.php',
  '/commande-success',
  '/commande-cancel',
  '/devis.php',
  '/qui.php',
  '/commande-panier',
  '/upload-multiple',
  '/politique-confidentialite',
  '/mentions-legales',
  '/conditions-generales'
];

new Sitemap(routes)
  .build('https://www.votresite.com') // Remplacez par l'URL de votre site
  .save(path.resolve('./public/sitemap.xml'));

console.log('Sitemap généré avec succès.');

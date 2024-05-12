# Rapport d’optimisation du projet ScrollyTelling

[Page Speed Insights - Rapport du 12 mai 2024, 2:04:31 PM](https://pagespeed.web.dev/analysis/https-daniel-sebastien-tim-momo-com/dkrbioj1ze?form_factor=desktop)
## Problème #1

### Des ressources qui bloquent l'affichage
Des URL dans le fichier HTML qui bloquent l'affichage des rendus de la page.

### Action concrète 
Je dois enlever les liens Google Font HTML qui bloquent l'affichage de la page car ils sont inutiles vu que j'utilise Font Face dans le CSS pour utiliser une police.

### Résultats
Cela a marché, j'ai juste enlevé le code qui comportait les liens de Google Font.

## Problème #2

### Les images n'ont pas de dimensions définis
Mes images n'ont pas de height définies donc cela réduit les changements de disposition et le décalage cumulatif de la mise en page (CLS) des images.

### Action concrète 
Je dois changer et ajouter des nouvelles dimensions à mes images, notamment mes images d'animations en utilisant des max-width et height.

### Résultats
Cela a marché, j'ai utlisé height: auto et max-width: 100% pour résoudre le problème.

## Problème #3

### Enregistrement d'erreurs dans la console 
Il y a des erreurs dans la console qui indiquaient l'apparition d'images HMTL ou de connexions avec le fichier CSS et Javascript.

### Action concrète 
 Je dois compresser le dossier du projet en zip et j'ai extrait le dossier dans le site danielsebastien-momo.com et réouvert dans la navigateur.

### Résultats
Cela a marché, il n'y a plus d'erreurs dans la console mais j'ai du ouvrir une page pageSpeed Insights car l'ancien ne correspondait plus. Voici le lien: [Page Speed Insights - Rapport du 12 mai 2024, 3:17:28 PM](https://pagespeed.web.dev/analysis/https-daniel-sebastien-tim-momo-com/dkrbioj1ze?form_factor=desktop)

# Rapport projet ScrollyTelling après optimisation

[Page Speed Insights - Rapport du 12 mai 2024, 5:30:14 PM](https://pagespeed.web.dev/analysis/https-daniel-sebastien-tim-momo-com/05bb5eocx2?form_factor=desktop)




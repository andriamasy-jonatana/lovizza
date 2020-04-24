# Andriamasy Jonatana
![Angular CI](https://github.com/andriamasy-jonatana/lovizza/workflows/Angular%20CI/badge.svg)
## TP IONIC

###### From ionic blank starter

#### Présentation :

Projet IONIC application de pizza Web Mobile M1 DevWeb

### Quelques éléments ou besoin

- Ionic:
    - [Ionic UI Components](https://ionicframework.com/docs/components)
    - [Ionic Native](https://ionicframework.com/docs/native) *onglet Community*

- Angular:
    - [Http Get Request](https://angular.io/guide/http)
    - Units Tests with HttpClientTestingModule
    - [Using Observable and Pipe Operator](https://www.learnrxjs.io/)

#### Scripts pour build Android

- Ajout de la plateforme Android `ionic cordova platform add android` (à ne faire qu'une fois en local)
- Build `ionic cordova build android --prod --release`
- MAJ des fichiers Angular dans le projet Android Studio `ionic cordova prepare android --prod --no-build`
- Emule le projet sur un device `ionic cordova emulate android --prod`
- Liste des prérequis pour Android `ionic cordova requirements android`

#### Debug depuis l'AVD

- Dans Google Chrome `chrome://inspect`
- Une catégorie *AOSP on IA Emulator* s'affiche, avec votre device et le bouton __inspect__

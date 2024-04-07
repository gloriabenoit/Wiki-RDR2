var chapitres = ["chap1Missions", "chap2Missions", "chap3Missions", "chap4Missions", "chap5Missions", "chap6Missions", "chap7Missions", "chap8Missions"];
var modifications = ["chap1Modif", "chap2Modif", "chap3Modif", "chap4Modif", "chap5Modif", "chap6Modif", "chap7Modif", "chap8Modif"];
var missions = ["missions1", "missions2", "missions3", "missions4", "missions5", "missions6", "missions7", "missions8"];
var progressions = ['progression1', 'progression2', 'progression3', 'progression4', 'progression5', 'progression6', 'progression7', 'progression8'];
var progressMax = 0;
var debut = 0;
var fin = 0;

// Affichage de la progression par défaut
window.onload = function() {
    initialize();
    checkProgress();
}

// Déroulage d'un menu déroulant
function actOnCollapse(conteneur, contenu){
    // Récupération du bon block
    var conteneur = document.getElementById(conteneur);
    var contenu = document.getElementById(contenu);
    
    // Si le bouton est déjà allumé, on l'éteint
    if (conteneur.classList.contains('active')) {
        conteneur.classList.remove('active');
    } else {
        conteneur.classList.add('active');
    }
    
    if (contenu.style.maxHeight){
      contenu.style.maxHeight = null;
    } else {
      contenu.style.maxHeight = contenu.scrollHeight + 10 + "px"; // + 10 pour espacer le contenu
    }
}

// Affichage de toutes les progressions
function initialize(){
    for (i = 0; i < chapitres.length; i++) {
        // Progression de chaque chapitre
        var chapitre = document.getElementById(chapitres[i]);
        t = chapitre.length;
        document.getElementById(progressions[i]).innerHTML = "0/" + t;
        
        // Nombre de missions total
        progressMax = progressMax + t;
    }
}

// Renvoi un bon format de date
function formatDate(date){
    var jour = String(date.getDate()).padStart(2, '0');
    var mois = String(date.getMonth() + 1).padStart(2, '0');
    var annee = date.getFullYear();
    var dateModif = jour + '/' + mois + '/' + annee;
    return dateModif;
}

// Affiche la durée de jeu totale
function computeTime(debut, fin){
    var difference = fin - debut;
    
    // Récupération des différents temps
    var secondes = Math.floor(difference / 1000);
    var minutes = Math.floor(secondes / 60);
    var heures = Math.floor(minutes / 60);
    var jours = Math.floor(heures / 24);
    var mois = Math.floor(jours / 30);
    
    // Calcul des temps passés
    secondes = secondes % 60;
    minutes = minutes % 60;
    heures = heures % 24;
    jours = jours % 30;
    mois = mois % 12;
    
    // Affichage
    tempsPassé = mois + " mois " + jours + " jours " + heures + " heures " + minutes + " minutes " + secondes + " secondes";
    document.getElementById("duree").innerHTML = "Temps de jeu : " + tempsPassé;
}

// Suivi de la Progression
function checkProgress(){
    var progress = 0;
    // Pour chaque chapitre
    for (i = 0; i < chapitres.length; i++) {
        //Pour chaque missions
        formulaire = document.getElementById(chapitres[i]);
        for (j = 0; j < formulaire.length; j++){
            if (formulaire[j].checked) {
              progress += 1;
            }
        }
    }
    
    // Calcule du pourcentage accompli
    var accompli = ((progress / progressMax) * 100).toFixed(1);
    
    // Affichage de la progression
    document.getElementById("progressionTotal").innerHTML = "PROGRESSION : " + accompli + "%";

    // Affichage des dates de début et de fin
    if (progress == 0){
        // Réinitialisation de la date de début
        debut = 0;
        document.getElementById("dateDebut").innerHTML = "Début : --/--/----";
        document.getElementById("dateFin").innerHTML = "Fin : --/--/----";
        document.getElementById("duree").innerHTML = "";
    } else if (progress == progressMax){
        // Le jeu est fini
        fin = new Date();
        document.getElementById("dateFin").innerHTML = "Fin : " + formatDate(fin);
        
        // Affichage du nombres de jours passés
        computeTime(debut, fin);
    } else {
        // Le jeu est commencé
        if (debut == 0){
            // Si le début n'est pas déjà donné
            debut = new Date();
            document.getElementById("dateDebut").innerHTML = "Début : " + formatDate(debut);
        }
        // Réinitialisation de la date de fin
        fin = 0;
        document.getElementById("dateFin").innerHTML = "Fin : --/--/----";
        document.getElementById("duree").innerHTML = "";
    }
}

// Modifications de la progression
function updateProgress(indice, activate, check){
    /*  1  : true
    *  -1 : false
    *  0 : nothing
    */

    // Récupération du bon formulaire
    var chapitre = document.getElementById(chapitres[indice]);
    
    // Comptage du nombre de missions accomplies
    var t = chapitre.length;
    for (i=0; i<t; i++) {
        // Activation ou non de la progression
        if (activate == -1){
          chapitre[i].disabled = true;
          document.getElementById(missions[indice]).style.color = "darkgrey";
        } else if (activate == 1){
          chapitre[i].disabled = false;
          document.getElementById(missions[indice]).style.color = "black";
        }
        
        // Accomplissement ou non de toutes les missions
        if (check != 0){
            if (check == -1){
              chapitre[i].checked = false;
              document.getElementById(progressions[indice]).innerHTML = "0/" + t;
            } else if (check == 1){
              chapitre[i].checked = true;
              document.getElementById(progressions[indice]).innerHTML = t + "/" + t;
            }
        }
    }
    
    // Activation ou non du bouton de modification
    var bouton = document.getElementById(modifications[indice]);
    if (activate == -1){
        bouton[0].checked = false;
        bouton[0].disabled = true;
    } else if (activate == 1){
        bouton[0].disabled = false;
    }
}

// Mise à jour de la progression
function trackProgress(numero){
    // Récupération du bon formulaire
    var formulaire = document.getElementById(chapitres[numero - 1]);

    // Comptage du nombre de missions accomplies
    var t = formulaire.length;
    var n = 0;
    for (i=0; i<t; i++) {
        if (formulaire[i].checked) {
          n += 1;
        }
    }
    
    // Affichage du nombre de missions réalisées
    document.getElementById(progressions[numero - 1]).innerHTML = n + "/" + t;
    
    if (n == t){          
        // Mise à jour du bouton de modification
        var bouton = document.getElementById(modifications[numero - 1]);
        bouton[0].checked = true;
          
        // Sauf pour le dernier chapitre
        if (numero != chapitres.length){
            // Activation du bloc suivant
            updateProgress(numero, 1, 0);  
        }          
    } else {
        // Mise à jour du bouton de modification
        var bouton = document.getElementById(modifications[numero - 1]);
        bouton[0].checked = false;
          
        // Désactiver tous les blocs après celui où on se trouve
        if (numero < chapitres.length){
            for (j = numero; j < chapitres.length; j++) {
                updateProgress(j, -1, -1);
            }
        }
    }
    
    // Mise à jour de la progression totale
    checkProgress();
}

// Toutes les missions sont accomplies
function checkAll(numero){
    updateProgress(numero - 1, 0, 1);
    trackProgress(numero);
}

// Aucune mission n'est accomplie
function resetAll(numero){
    updateProgress(numero - 1, 0, -1);
    trackProgress(numero);
}

function updateAll(checkbox, numero){
    if (checkbox.checked) {
        checkAll(numero);
    } else {
        resetAll(numero);
    }
}
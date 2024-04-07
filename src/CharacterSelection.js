// Liste des personnages
var allCharacters = ["Arthur", "John", "Abigail", "Jack", "Dutch", "Molly", "Hosea", "Charles", "Micah", "Javier", "Lenny", "Bill", "Sadie", "Grimshaw", "Karen", "MaryBeth", "Tilly", "Strauss", "Pearson", "Oncle", "Swanson", "Sean", "Josiah"]

// Personnage affiché actuellement
var currentId = 0;
var currentCharacter = allCharacters[currentId];

// Affiche Arthur par défaut
window.onload = function() {
    // Affiche le premier personnage
    var arthurSheet = document.getElementById(currentCharacter);
    arthurSheet.style.display = "flex";
    
    // Initialisation du tracker
    colorBullets(0);
    
    // Initialisation du carousel
    addToCarousel(allCharacters[allCharacters.length - 1], "gauche");
    addToCarousel(allCharacters[0], "centre");
    addToCarousel(allCharacters[1], "droite");
    
    // Illumination du premier
    document.getElementById("centre").style.opacity = "1";
}

// Afficher le bon personnage
function toggleCharacter() {
    // On récupère le bon personnage
    var characterIndex = parseFloat(document.tracker.show.value);
    var character = allCharacters[characterIndex];
    var characterSheet = document.getElementById(character);
    
    // Masque le personnage actuel s'il y en a un
    if (currentCharacter !== null) {
        document.getElementById(currentCharacter).style.display = "none";
    }

    // Affiche le personnage cliqué
    characterSheet.style.display = "flex";
    currentCharacter = character;
    currentId = characterIndex;
    
    // Mise à jour du tracker
    colorBullets(currentId);
    
    // Mise à jour du carousel
    carouselIndex = currentId;
    gauche = allCharacters[currentId-1];
    centre = currentCharacter;
    droite = allCharacters[currentId+1];
    
    // Début du carousel
    if (currentId == 0){
        gauche = allCharacters[allCharacters.length - 1];
        centre = allCharacters[currentId];
        droite = allCharacters[currentId+1];
    }
    
    // Fin du carousel
    if (currentId == allCharacters.length - 1){
        gauche = allCharacters[currentId-1];
        centre = allCharacters[currentId];
        droite = allCharacters[0];
    }
    
    // Mise à jour du carousel
    addToCarousel(gauche, "gauche");
    addToCarousel(centre, "centre");
    addToCarousel(droite, "droite");
    
    // Changement de l'opacité
    document.getElementById("centre").style.opacity = "1";
}

// Colore le tracker
function colorBullets(id){
    trackerBullet = document.getElementById('trackerBullet').getElementsByTagName('label');
    for (var i = 0; i < trackerBullet.length; i++) {
        color = "#fff";
        if (i == id){
            color = "orange";
        }
        trackerBullet[i].style.background = color;
    }
}

// Affiche le personnage cliqué
function addToCarousel(character, position){
    // Efface si déjà présent
    document.getElementById(position).innerHTML = "";
    
    // Récupération de la bonne image
    var img = document.createElement("img");
    img.src = "../img/perso/icon/" + character + ".png";
    var src = document.getElementById(position);
    src.appendChild(img);
}

// Se déplace dans le carousel
function moveCarousel(sens){
    // On va à droite
    val = 1;
    if (sens == "gauche"){
    // On va à gauche
        if (currentId == 0){
        // Retour à la fin
            val = (allCharacters.length - 1);
        } else {
            val = -1;
        }
    } else if (currentId == allCharacters.length - 1){
    // Si on est à la fin
        // Retour au départ
        val = -(allCharacters.length - 1);
    }
    // Mise à jour de l'affichage
    document.tracker.show.value = parseFloat(document.tracker.show.value) + val;
    toggleCharacter();
}
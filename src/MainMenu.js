// Animation des images d'accueil
fonds = ["wallpaper1", "wallpaper2", "wallpaper3", "wallpaper4", "wallpaper5", "wallpaper6", "wallpaper7", "wallpaper8", "wallpaper9"];
fondActuel = 0;

function changeWallpaper() {
    var wallpaper = document.getElementById("currentWallpaper");
    var nextWallpaper = document.getElementById("nextWallpaper");

	// Image actuelle
    wallpaper.src = "../img/menu/" + fonds[fondActuel] + ".jpg";
    fondActuel += 1;

    if (fondActuel > fonds.length - 1) {
        fondActuel = 0;
    }

	// Prochaine image
    nextWallpaper.src = "../img/menu/" + fonds[fondActuel] + ".jpg";

	// Animation latérale
    var leftPosition = 100;
    var animationInterval = setInterval(function() {
        leftPosition -= 2;
        nextWallpaper.style.left = leftPosition + "%"; 

		// Stop l'animation quand on arrive au bout
        if (leftPosition <= 0) {
            clearInterval(animationInterval);
        }
    }, 10);
}
setInterval(changeWallpaper, 5000);

window.addEventListener('scroll', function() {
  var hiddenDivs = document.querySelectorAll('.hidden');
  
  hiddenDivs.forEach(function(hiddenDiv) {
    var contentBottom = hiddenDiv.previousElementSibling.offsetTop + hiddenDiv.previousElementSibling.offsetHeight;
    var scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > contentBottom + 60) {
      hiddenDiv.classList.add('show');
    } else {
      hiddenDiv.classList.remove('show');
    }
  });
});
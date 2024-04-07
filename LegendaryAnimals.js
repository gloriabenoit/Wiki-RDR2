// Liste des animaux
const allAnimals = ["vide", "Alligator", "Antilope", "BisonBlanc", "Bison", "Castor", "Cerf", "Couguar", "Coyote", "Grizzly", "Loup", "Mouflon", "Orignal", "Panthère", "Renard", "Sanglier", "Wapiti"]
const allDescriptions = ["vide", "L'alligator mâle légendaire est originaire des marais près de Lagras, dans le district de Bayou Nwa. Sa grande taille et ses écailles albinos le rendent facile à repérer. C'est un prédateur carnivore qui se nourrit de poissons, d'oiseaux, d'amphibiens et de mammifères. L'arme idéale pour chasser cet alligator reste un fusil à lunette ou un arc avec des flèches améliorées. En tuant cet animal, vous pourrez fabriquer un talisman rare.",
                         "L'antilope légendaire ne se trouve qu'à Rio Bravo, à New Austin. On la reconnaît facilement aux crins courts et blancs qui lui recouvrent le corps. Cet herbivore se nourrit de sauge, de jeunes pousses, d'herbes et de phorbes. L'arme idéale pour la chasser est un fusil ou un arc avec des flèches empoisonnées. En tuant cet animal, vous pourrez fabriquer une amulette rare.",
                         "Le bison blanc légendaire ne se trouve que dans les montagnes du nord d'Ambarino. Il est facilement reconnaissable à la couleur de ses crins. Cet herbivore broute des graminées, du foin et du maïs. Étant donné sa taille, il est préférable de le chasser avec des armes à fort impact : arc avec des flèches améliorées ou fusil à lunette. En tuant cet animal, vous pourrez fabriquer un talisman rare.",
                         "Le bison légendaire Tatanka est originaire de Hennigan's Stead, à New Austin. On le reconnaît à sa crinière courte et noire et aux crins gris clair sur sa bosse et sa tête. Cet herbivore broute des graminées, du foin et du maïs. Les armes à longue portée (fusil à lunette, arc et flèches améliorées) vous donneront l'avantage pour le chasser. En tuant cet animal, vous pourrez fabriquer une amulette rare.",
                         "Le castor légendaire ne se trouve qu'à Elysian Pool, à New Hanover. Son pelage clair le distingue nettement des autres castors de la région. Cet herbivore se nourrit d'écorces, de racines, de bourgeons et de plantes aquatiques. Le fusil à petit gibier est l'arme idéale pour chasser les castors. En tuant cet animal, vous pourrez fabriquer une amulette rare.",
                         "Le cerf légendaire ne se trouve qu'à Big Valley, dans la région de West Elizabeth. Ses crins brun clair et blancs permettent de le distinguer des autres cerfs. Cet herbivore mange des noix, des bourgeons, des brindilles et des plantes vertes. Un fusil ou un arc avec des flèches empoisonnées sont les armes idéales pour le chasser. En tuant cet animal, vous pourrez fabriquer une amulette rare.",
                         "Le couguar légendaire est originaire de Gaptooth Ridge, à New Austin. Il est reconnaissable à sa fourrure noire unique. Ce carnivore chasse les biches, les wapitis, les orignaux et les chèvres des montagnes Rocheuses. Les armes à longue distance comme les fusils ou les arcs avec des flèches empoisonnées sont idéales pour chasser les couguars, ces animaux féroces n'hésitant pas à attaquer. En tuant cet animal, vous pourrez fabriquer une amulette rare.",
                         "Le coyote légendaire est originaire des Heartlands, à New Hanover. Son pelage est gris foncé et il est reconnaissable à sa grande taille. Il est carnivore et se nourrit principalement de rongeurs. L'arme la plus efficace pour le chasser est une carabine ou un arc avec des flèches. En tuant cet animal, vous pourrez fabriquer une amulette rare.",
                         "Le grizzly légendaire Bharati ne se trouve qu'à O'Creagh's Run, dans les Grizzlies. Sa taille dépasse celle de tous les ours de la région. Les cicatrices sur sa gueule et son corps le rendent facilement identifiable. Cet omnivore se nourrit de baies, de racines, d'herbe, de biches, de wapitis, de poissons et de charognes. Les armes à longue portée (fusil à lunette, arc et flèches améliorées) vous donneront l'avantage pour le chasser. En tuant cet animal, vous pourrez fabriquer un talisman rare.",
                         "Le loup légendaire ne se trouve que dans les Grizzlies. Sa grande taille et son pelage brun et noir le distinguent nettement des autres loups de la région. Ce carnivore se nourrit de biches, de chèvres des montagnes Rocheuses et de petits animaux comme les oiseaux, les castors et les poissons. Un arc avec des flèches empoisonnées ou un fusil sont les armes idéales pour chasser le loup. En tuant cet animal, vous pourrez fabriquer une amulette rare.",
                         "Le mouflon légendaire est originaire de l'ouest des Grizzlies. On le reconnaît facilement à sa grande taille et à ses crins gris clair. Cet herbivore se nourrit de phorbes, de plantes des sous-bois et d'herbe. L'arme idéale pour le chasser est un fusil ou un arc avec des flèches empoisonnées. En tuant cet animal, vous pourrez fabriquer une amulette rare.",
                         "L'orignal légendaire ne se trouve qu'à Roanoke Ridge, à New Hanover. Il est reconnaissable à sa grande taille et à ses crins courts et gris clair. Cet herbivore se nourrit de pousses de saule et de bouleau, de plantes aquatiques et de phorbes. Pour le chasser, l'arme idéale est un arc avec des flèches améliorées ou un fusil à lunette. En tuant cet animal, vous pourrez fabriquer une amulette rare.",
                         "La panthère légendaire Giaguaro ne se trouve qu'à Scarlett Meadows, à Lemoyne. Elle est reconnaissable à son pelage marron strié de noir et à ses nombreuses cicatrices. Elle chasse les cerfs, les chèvres et les sangliers. Les armes à longue distance comme les fusils ou les arcs avec des flèches empoisonnées sont idéales pour chasser cet animal capricieux. En tuant cet animal, vous pourrez fabriquer une amulette rare.",
                         "Le renard légendaire ne se trouve qu'à Scarlett Meadows, dans la région de Lemoyne. Il est facile à reconnaître à la couleur de sa fourrure. Cet omnivore se nourrit de petits mammifères comme des écureuils, des lapins, mais aussi d'oiseaux, de fruits, de baies et d'herbes. L'arme idéale pour chasser le renard est une carabine ou un arc avec des flèches. En tuant cet animal, vous pourrez fabriquer une amulette rare.",
                         "Le sanglier légendaire est originaire de Bluewater Marsh. On le reconnaît facilement à sa grande taille et à ses crins brun clair. Cet omnivore se nourrit d'amphibiens, de reptiles, d'insectes, de vers et de petits mammifères. L'arme idéale pour le chasser est un fusil ou un arc avec des flèches empoisonnées. En tuant cet animal, vous pourrez fabriquer un talisman rare.",
                         "Le wapiti légendaire ne se trouve qu'à Cumberland Forest, à New Hanover. Ses crins blancs et sa crinière épaisse le distinguent des autres wapitis de la région. Cet herbivore se nourrit d'herbe, de feuilles, d'écorce et de plantes. Les wapitis sont très craintifs, il est préférable de garder ses distances en les chassant. Les armes à longue portée comme un arc avec des flèches améliorées ou un fusil à lunette sont les armes idéales pour le chasser. En tuant cet animal, vous pourrez fabriquer une amulette rare."]


function displayAnimal(index, event) {
    event.preventDefault();
    // Affichage de l'icon de l'animal
    var icon = document.getElementById("currentIcon");
    icon.src = "img/legendary/animaux/icon/" + allAnimals[index] + ".png";
    icon.style.display = "block";
    
    // Sélection du bon choix
    var selector = document.getElementById("choixAnimal");
    selector.selectedIndex = index;
    document.getElementById("nomAnimal").innerHTML = selector.options[index].text;
    
    // Affichage de l'image de l'animal
    var animal = document.getElementById("currentAnimal");
    animal.src = "img/legendary/animaux/" + allAnimals[index] + ".png";
    animal.style.display = "block";
    
    // Mise à jour de la description
     document.getElementById("currentDescription").innerHTML = allDescriptions[index];

    // Affichage du dessin
    var drawing = document.getElementById("animalDrawing");
    drawing.src = "img/legendary/animaux/drawing/" + allAnimals[index] + ".png";
    drawing.style.display = "block";

    // Modification visuelle
    document.getElementById("choix").style.borderBottom = "ridge 5px sienna";
    document.getElementById("nomAnimal").style.borderBottom = "ridge 5px sienna";
    document.getElementById("infoChoix").style.fontWeight = "bold";
    document.getElementById("infoChoix").style.fontSize = "1.2em";
}

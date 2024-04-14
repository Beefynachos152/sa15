function openRecipe(recipeName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(recipeName).style.display = "block";
}

//Toggle between the recipes
document.getElementById("Recipe1").style.display = "block";
document.getElementById("Recipe2").style.display = "block";
document.getElementById("Recipe3").style.display = "block";

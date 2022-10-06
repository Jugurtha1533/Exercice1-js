/* //Exercice1: réaliser les scripts avec javascript
alert("Bonjour tout le monde"); // Afficher un chaine de caractère 
let prenom = (prompt("entrer votre prenom"))
alert("bonjour" + 'prenom'); */

/* 
//Exercice2: afficher deux nombre 
let nombre1,nombre2;
nombre1 = parseInt (prompt("enter un premier nombre"));
nombre2 = parseInt(prompt("enter un dexieme nombre"));
alert(nombre1 + nombre2);
 */

//Exercice 3:
let age = parseInt(prompt("entrer votre age"));
if( age >= 18 && age <100 )
    alert("age valide");
else
    alert("age eronné" +" " + "saisissez à nouveau votre age");


//Exercice 4:


    /EXERCICE 5:

    function addNumbers() {
     let number;
     let result = "Table de multiplication";
   
     number = Number(document.getElementById("number").value);
   
     for(let i = 1; i<= 9; i++){
       result = result + "<p>"+number + "" + i + "=" + number i+"</p>";
     }
   
     document.getElementById("result").innerHTML = result;
   } 
   
   //EXERCICE 6: 
   let bodyMain = document.getElementById("main");
   let bouton = document.getElementById("btn");
   bouton.addEventListener("click", function(){
     bodyMain.style.backgroundColor="pink";
   },false);













/*let floor = parseInt(prompt("Entrez l'étage où l'ascenceur doit se rendre (de -2 à 30) :"));

if (floor == 0) {
    alert("Vous vous trouvez déjà au rez-de-chaussée.");
} else if (-2 <= floor && floor <= 30) {
    alert("Direction l'étage n° " + floor + " !");    
} else {
    alert("L'étage n'existe pas.");
}

et start = 'Bonjour ', 
    prenom,
    end = ' !',
    result;

prenom = prompt('Quel est votre prénom ?');
result = start + prenom + end;
alert(result);

console.log(result);

document.open();
document.write("<div id='monid'>"+ result +"</div>");
document.close();


let drawer = parseInt(prompt("Choisissez le tiroir à ouvrir (1 à 4) :"));
switch (drawer) {
case 1:
 alert("Contient divers outils pour dessiner : du papier, des crayons, etc.");
 break;
case 2:
 alert("Contient du matériel informatique : des câbles, des composants, etc.");
 break;
case 3:
 alert("Ah ? Ce tiroir est fermé à clé ! Dommage !");
 break;
case 4:
 alert("Contient des vêtements : des chemises, des pantalons, etc.");
 break;
default:
 alert("Info du jour : le meuble ne contient que 4 tiroirs et, jusqu’à preuve du contraire, les tiroirs négatifs n’existent pas.");
}









*/



var randomNumber1= Math.floor(Math.random()*6)+1;

var randomimagesrc= "images/"+"dice"+randomNumber1+".png";

 var image1= document.querySelectorAll("img")[0];

 image1.setAttribute("src", randomimagesrc);



 var randomNumber2 = Math.floor(Math.random()*6)+1;

 var randomimagesrc2=  "images/"+"dice"+randomNumber2+".png";

 var image2= document.querySelectorAll("img")[1];

 image2.setAttribute("src",randomimagesrc2);

 if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= " Nigga 1 wins";
 }
 else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML= "Nigga 2 wins";
 }
 else{
    document.querySelector("h1").innerHTML= "Its Draw Niggass";
 }
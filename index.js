var randomNum1 = Math.random();
randomNum1 = Math.floor(randomNum1*6 +1);
var loc1 = "dice" + randomNum1 + ".png" ;

document.querySelectorAll("img")[0].setAttribute("src" , loc1);

var randomNum2 = Math.random();
randomNum2 = Math.floor(randomNum2*6 +1);
var loc2 = "dice" + randomNum2 + ".png" ;

document.querySelectorAll("img")[1].setAttribute("src" , loc2);

if(randomNum1>randomNum2){
    document.getElementsByTagName("h1")[0].textContent = "🚩Player 1 Wins!";
}
else if(randomNum1<randomNum2){
    document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins!🚩";
}
else{
    document.getElementsByTagName("h1")[0].textContent = "🚩Its a Draw!!🚩";
}

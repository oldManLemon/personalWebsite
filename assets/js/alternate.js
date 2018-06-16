//Small Icon Rotator for personal use
// List the class names of all icons you want use here. 
var iconList = ["fab fa-js fa-7x", "fab fa-php fa-7x", "fab fa-html5 fa-7x", "fas fa-code-branch fa-7x", "fas fa-user-astronaut fa-7x"];
var devIcon = document.getElementById('devIcons'); //ID of FA icon you want to alternate
devIcon.className = iconList[0];
var listL = iconList.length;
/*
FA Icons I have used
 0 = JS 
 1 = php
 2 = html
 3 = git
 4 = astronaut
*/
var raspberryList = ["assets/img/raspPi.png","assets/img/raspPi1.png","assets/img/raspPi2.png","assets/img/raspPi3.png"]
var listR = raspberryList.length;
var raspIcon = document.getElementById('rasp');
var count = 0;
//var countR = 0;
//I like only running two raspberries it is better
var iconRotator = setInterval(function () {
    devIcon.className = iconList[(++count) % listL];
    raspIcon.src = raspberryList[(++count)%listR];
}, 3000);










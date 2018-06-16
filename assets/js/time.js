var currentTime = new Date().getHours();
//var currentTime = 10;
var sleepIcon = document.getElementById('sleep');
window.onload = sleep(currentTime);


function sleep(time) {
    //Define Day Time
    if (time <= 16 && time >= 9) {
        sleepIcon.classList.value = "fas fa-smile fa-lg";
        //Good Morning
        if (time >= 9 && time < 12) {
            console.log("Good Morning!");
        }
        else {
            console.log("Good Afternoon!");
        }

    }
    else {
        sleepIcon.classList.value = "fas fa-bed fa-lg";
        if(time >= 16 && time < 21){
            console.info("Good evening, I am probably at home, but can be contacted on my mobile which is provided on my resume");
        }
        else if(time > 21 && time <= 23){
            console.log("Please use the contact form and I will get back to ASAP :)");
        }
        else if(time == 24  && time < 4){
            console.log("What are you doing up? It's really late!");
            console.log("Please use the contact form and I will get back to ASAP :)");
        }else{
            console.log("It's a bit early for me");
            console.log("Please use the contact form and I will get back to ASAP :)");
        }

    }
}
var cookies = 0;
var cpms = 0;
var finalscore=0;
var cookiescounter;
function count(){
    finalscore=finalscore+1
    cookies = cookies+1
    document.getElementById("counter").innerHTML = cookies;
    document.getElementById("finalscorehtml").innerHTML = finalscore;
}
function save(){
    localStorage.setItem("cookiesfinalscore", finalscore);
    localStorage.setItem("cookiesvalue", cookies);
    document.getElementById("savemessage").innerHTML="progress saved";
    setTimeout(function(){
        document.getElementById("savemessage").innerHTML = '';
    }, 1500);
}
function load(){
    finalscore= localStorage.getItem("cookiesfinalscore");
    cookiescounter = localStorage.getItem("cookiesvalue");
    cookies = parseInt(cookiescounter);
    document.getElementById("finalscorehtml").innerHTML = finalscore;
    document.getElementById("counter").innerHTML = cookies;
}
function grow(){
    document.getElementById("maincookie").style.transform= "scale(1.1)";
    setTimeout(decrease, 100);
}
function decrease(){
    document.getElementById("maincookie").style.transform= "scale(1.0)";
}
function reset(){
    cookies=0;
    finalscore=0;
    document.getElementById("counter").innerHTML= cookies;
    document.getElementById("finalscorehtml").innerHTML = finalscore;
}



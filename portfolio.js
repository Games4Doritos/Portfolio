var clicked = false;


function randomcolour(){
    interval = setInterval(function (){randomcolour1();}, 3);
    setTimeout(function (){clearInterval(interval);}, 500);
    
    
}

function randomcolour1(){
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    document.getElementById('background').style.backgroundColor = (r, g, b);
}
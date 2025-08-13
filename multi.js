var card=document.getElementById('card');
var message=document.getElementById('message');
card.addEventListener('mouseover',function(){
    card.style.backgroundColor="green";
    card.innerHTML="You Hovered";

});

card.addEventListener('mouseout',function(){
    card.style.backgroundColor="red";
    card.innerHTML="You Hovered out";

});

card.addEventListener('click',function(){
    card.style.backgroundColor="yellow";
    card.innerHTML="You Clicked Me!";

});

function updateClock(){
    var date=new Date();
    var hours=date.getHours().toString().padStart(2,'0');
    var mins=date.getMinutes().toString().padStart(2,'0');
    var secs=date.getSeconds().toString().padStart(2,'0');
    document.getElementById('clock').innerHTML=hours+":"+mins+":"+secs;
}

window.setInterval(updateClock,1000);
updateClock();
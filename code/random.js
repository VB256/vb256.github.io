var clicks = 0;
var opt1 = 0;
var opt2 = 0;
function random() {
    clicks += 1;
    var rand = Math.floor(Math.random()*999+1);
    if (rand != 69){
        document.getElementById("output").innerHTML = "You gain the power to do anything.";
        document.getElementById("output").style.color = "black";
        document.getElementById("button").src = "img/button.png";
        opt1 += 1;
    }else{
        document.getElementById("output").innerHTML = "Eternal damnation awaits you.";
        document.getElementById("output").style.color = "red";
        document.getElementById("button").src = "img/button2.png";
        opt2 += 1;
    }
    var percent1 = Math.round(10000*(opt1/clicks))/100;
    var percent2 = Math.round(10000*(opt2/clicks))/100;
    var text = "You've clicked " + clicks + " times, getting option one " + opt1 + " times ("+ percent1 +"%), and option two " + opt2 + " times("+ percent2 +"%).<br><br>";
    if (clicks > 5000){
        text += "5,000 clicks, impressive. Comment \"Muffins\" if you got this far :)";
    }else if (clicks > 4000){
        text += "Please seek help.";
    }else if (clicks > 3000){
        text += "I suggest that you touch grass.";
    }else if (clicks > 2000){
        text += "Are you sure this is the best use of your time?";
    }else if (clicks > 1000){
        text += "Over 1000 clicks, you should have gotten option 2 at least once by now.";
    }else if(clicks > 500){
        text += "Over 500 clicks, well done.";
    }else if(clicks > 100){
        text += "Damn, you really just clicked on a button over 100 times. Don't you have something better to do?";
    }
    document.getElementById("stats").innerHTML = text;
}
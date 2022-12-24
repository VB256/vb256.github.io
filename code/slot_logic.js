var money = 10000;
var lose = false;
function slot(mode) {
    if (!lose){
        var rand = Math.random();
        if (mode == 1){
            if (rand <= 0.51){
                document.getElementById("output").innerHTML = "+100";
                document.getElementById("output").style.color = "green";
                money += 200;
            }else {
                document.getElementById("output").innerHTML = "-100";
                document.getElementById("output").style.color = "red";
            }
            money -= 100;

        }else if (mode == 2){
            if (money < 1000){
                document.getElementById("output").innerHTML = "Insufficient funds.";
                document.getElementById("output").style.color = "black";
                money += 1000;
            }else if (rand <= 0.525){
                document.getElementById("output").innerHTML = "+1000";
                document.getElementById("output").style.color = "green";
                money += 2000;
            }else {
                document.getElementById("output").innerHTML = "-1000";
                document.getElementById("output").style.color = "red";
            }
            money -= 1000;
        }else if (mode == 3){
            if (money < 10000){
                document.getElementById("output").innerHTML = "Insufficient funds.";
                document.getElementById("output").style.color = "black";
                money += 10000;
            }else if (rand <= 0.55){
                document.getElementById("output").innerHTML = "+10000";
                document.getElementById("output").style.color = "green";
                money += 20000;
            }else {
                document.getElementById("output").innerHTML = "-10000";
                document.getElementById("output").style.color = "red";
            }
            money -= 10000;
        }
        if (money > 0){
            document.getElementById("money").innerHTML = "Money: $" + money;
        }else{
            lose = true;
            document.getElementById("money").innerHTML = "You lose! Refresh to play again.";
        }
    }
}
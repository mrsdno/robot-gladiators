var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack =10;

console.log(playerName, playerHealth, playerAttack)

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {

// alert players they are starting the round
    window.alert("The fight has begun!");

//subtract playerAttack from enemyHealth and use result to update enemyHealth

    enemyHealth = enemyHealth - playerAttack;

//log message in console to confirm it worked

    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    
//subtract enemyAttack from playerHealth and use result to update playerHealth

    playerHealth = playerHealth - enemyAttack;

//log message in console to confirm it worked

    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
}

fight();


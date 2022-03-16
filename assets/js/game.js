var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack =10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// fight function expression

var fight = function(enemyName) {

    // alert players they are starting the round

    window.alert("The fight has begun!");

    //ask player if they want to fight

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
    
    //if player chooses to fight, then fight()

    if (promptFight === "FIGHT" || promptFight === "fight") {

        //subtract playerAttack from enemyHealth and use result to update enemyHealth

        enemyHealth = enemyHealth - playerAttack;

        // check enemies health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
                
        //subtract enemyAttack from playerHealth and use result to update playerHealth

        playerHealth = playerHealth - enemyAttack;

        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " remaining.");
        }
    }

    // if player chooses to skip
    
    else if (promptFight === "SKIP" || promptFight === "skip") {
        // confirm that the player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight! Goodbye.");
            //subtract money for player skipping
            playerMoney = playerMoney - 2;

        }

        //if no (false), ask question again by running fight again
        else {
            fight();
        }

    }

    else {
        window.alert("You need to choose a valid option. Try again!");
    }

}


// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
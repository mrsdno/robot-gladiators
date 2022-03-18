var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 20;
var playerMoney = 10;

console.log(playerName);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 42;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);

// fight function expression
var fight = function(enemyName) {
    // repeat and execute this code while the enemy is alive 
    while(enemyHealth > 0 && playerHealth > 0) {

    // ask player if they want to fight

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
    
    // if player chooses to fight, then fight()

    if (promptFight === "FIGHT" || promptFight === "fight") {

        // subtract playerAttack from enemyHealth and use result to update enemyHealth

        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );
        // check enemies health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;
            }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
                
        //subtract enemyAttack from playerHealth and use result to update playerHealth

        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
          );

        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.");
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
            playerMoney = playerMoney - 10;
            console.log('playerMoney', playerMoney);
            break;
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
}


// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots

for(var i = 0; i < enemyNames.length; i++) {

    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    // call fight function with picked enemy name
    fight(pickedEnemyName);
    }


//      * Defeat each enemy-robot

// if the enemy-robot has health points, continue to fight

// "LOSE" - Player robot's health is zero or less
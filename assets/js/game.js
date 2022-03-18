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
    while(enemyHealth > 0 && playerHealth > 0) {
    // ask player if they want to fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
    
    if (promptFight === "SKIP" || promptFight === "skip") {
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
    }
        // remove enemy health by subtracting player attack
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
            // leave while loop if player is dead
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.");
        }
    }
}


for(var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting 
    if (playerHealth > 0) {

        //let player know what round they are in
        window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
        
        // pick enemy to fight based on index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        // reset enemy health before starting fight
        enemyHealth = 50;

        // call fight function with picked enemy name
        fight(pickedEnemyName);
    }

    else {
        window.alert("You have lose your robot in battle! Game Over!");
        break;
    }

}
//      * Defeat each enemy-robot

// if the enemy-robot has health points, continue to fight

// "LOSE" - Player robot's health is zero or less
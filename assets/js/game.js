var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 20;
var playerMoney = 10;

console.log(playerName);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

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
            playerMoney = playerMoney - 2;
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

            //award player money for winning
            playerMoney = playerMoney + 20;

            // leave while loop when enemy is dead
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

        // check players health
        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
            // leave while() loop if player is dead
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.");
        }
    }
}

var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

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
    }

    // after the loop ends, player is either out of health or enemies to fight
    endGame();

}

var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + "."); 
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

//start game when game loads
startGame();
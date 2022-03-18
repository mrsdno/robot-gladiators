var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 20;
var playerMoney = 10;

console.log(playerName);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(Math.PI);
console.log(Math.round(4.4));
console.log(Math.sqrt(25));
console.log(Math.max(10, 20, 100));
console.log(Math.max(0, -50));
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
            var confirmSkip = window.confirm("Are you sure you'd like to skip?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight! Goodbye.");
                //subtract money for player skipping
             playerMoney = Math.max(0, playerMoney - 10);
                console.log('playerMoney', playerMoney);
                break;
            }
        }

        // generate random damage value based on players attack power
        var damage = randomNumber(playerAttack - 3, playerAttack);
    
        // remove enemy health by subtracting player attack
        enemyHealth = Math.max(0, enemyHealth - damage);
        
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
                
            //generage random damage value based on enemy attack power
            var damage = randomNumber(enemyAttack - 3, enemyAttack);
       
            //subtract enemyAttack from playerHealth and use result to update playerHealth
            playerHealth = Math.max(0, playerHealth - damage);
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
            enemyHealth = randomNumber(40, 60);

            // call fight function with picked enemy name
            fight(pickedEnemyName);

            // if we are not at the last enemy in the array
            if (i < enemyNames.length -1) {
                // ask the player if they want to enter the shop
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            
                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop()
                }
            }
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

var shop = function() {
    // ask player what they want to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    switch (shopOptionPrompt) {

        case "REFILL":
        case "refill":
            if (playerMoney>=7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");

            //increase health and deduct 7 dollars
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            break;
            }

            else {
                window.alert("You don't have enough money!");
            }
        
        case "UPGRADE":
        case "upgrade":
            if (playerMoney > 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                //increase attack and deduct 7 dollars
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }

            else {
                window.alert("You don't have enough money!");
            }

            break;
        
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
        
        default:
            window.alert("You did not pick a valid option. Try again!");
            shop();
            break;
        }
    
}

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}

//start game when game loads
startGame();
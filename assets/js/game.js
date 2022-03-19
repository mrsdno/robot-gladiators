// fight or skip function

var fightOrSkip = function() {
    // ask player if they want to fight or skip
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle?');

    // change input to lowercase for processing
    promptFight = promptFight.toLowerCase();

    if (!promptFight) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip?");
    

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            //subtract money from player.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            
            //return true if the player wants to leave
            return true;
        }
    }
    return false;
}

// fight function expression
var fight = function(enemy) {
    
    while(enemy.health > 0 && playerInfo.health > 0) {

        // call fightOrSkip to ask player if they want to fight or skip
        if (fightOrSkip()) {
            // if true leave fight by breaking loop
            break;
        }

        // generate random damage value based on players attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    
        // remove enemy health by subtracting player attack
        enemy.health = Math.max(0, enemy.health - damage);
        
        console.log(
            playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
        );

        // check enemies health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

            //award player money for winning
            playerInfo.money
             = playerInfo.money
             + 20;

            // leave while loop when enemy is dead
            break;
        }

        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
         }
                
            //generage random damage value based on enemy attack power
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
       
            //subtract enemy.attack from playerInfo.health and use result to update playerInfo.health
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(
                enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
            );

        // check players health
        if (playerInfo.health <=0) {
            window.alert(playerInfo.name + " has died!");
            // leave while() loop if player is dead
            break;
        }
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health remaining.");
        }


    }
}

var startGame = function() {
    //reset player stats
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        // if player is still alive, keep fighting 
        if (playerInfo.health > 0) {

            //let player know what round they are in
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            // pick enemy to fight based on index of the enemyInfo array
            var pickedEnemyObj = enemyInfo[i];

            // reset enemy health before starting fight
            pickedEnemyObj.health = randomNumber(40, 60);

            // call fight function with picked enemy name
            fight(pickedEnemyObj);

            // if we are not at the last enemy in the array
            if (i < enemyInfo.length -1) {
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money
         + "."); 
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
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
    );
     switch (parseInt(shopOptionPrompt)) {
            case 1:
            playerInfo.refillHealth();
            break; 
            
        case 2:
            playerInfo.upgradeAttack();
            break;
        
        case 3:
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

var getPlayerName = function() {
    var name = "";

    //loop with prompt and condition
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name)
    return name;
    
}

var playerInfo = {
    name: getPlayerName(),
    health: 100, 
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attck = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};

console.log(playerInfo.name);

var enemyInfo = [
    {
        name: "Roberto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

//start game when game loads
startGame();
//GAME BEGIN
document.getElementById("start").addEventListener("click", function() {
    console.log("start button works!");
})

//MUSIC & SOUNDS
backgroundMusic = document.getElementById("backgroundMusic");
backgroundMusic.volume = 0.2;

function testfunction() {
    console.log(`this works!`);
}

//SHIP CLASS DECLARATION
class Ship {
    constructor(health, laserClip = 0, laserDamage, shield = false, name, fightingType="fighter") {
        this.health = health;
        this.laserClip = laserClip;
        this.laserDamage = laserDamage;
        this.shield = shield;
        this.name = name;
        this.fightingType = fightingType;
        }
    attackEnemy() {
        if (playerShip.laserClip > 0 && playerShip.laserClip <= 3) {

        if (enemy.fightingType == "attacker") {
            moveChoiceEnemyAttacker();
        }
        if (enemy.fightingType == "defender") {
            moveChoiceEnemyDefender();
        }

        if (enemy.shield == false) {
            enemy.health = enemy.health - this.laserDamage;

            console.log("Enemy health is now " + enemy.health);
            console.log(`pew pew`);

            let laserSound = new Audio("pew.wav");
            laserSound.play();
            this.laserClip--;
            addRound();

            console.log("total rounds are " + totalRounds);

            //Generate new ship after enemy is dead
            if (enemy.health <= 0) {
                generateNewEnemy();
            }
        }
        if (enemy.shield == true) {
            console.log("Enemy shield state is " + enemy.shield);
            console.log("Enemy shield deflected shot");
            makePewSound();
            this.laserClip--;
            console.log(`pew pew`);
            let laserSound = new Audio("pew.wav");
            laserSound.play();
            addRound();
        }
        } else {
            console.log("No ammo!");
        }
    }
    attackPlayer() {
        if (playerShip.shield == false) {
            playerShip.health = playerShip.health - this.laserDamage;
            console.log("Player health is now " + playerShip.health);
        } else if (playerShip.shield = true) {
            console.log("Player shield deflected shot");
        }
        this.laserClip--;
    }
    chargeLaser() {
        if (enemy.fightingType == "attacker") {
            enemy.moveChoiceEnemyAttacker();
        }
        if (enemy.fightingType == "defender") {
            enemy.moveChoiceEnemyDefender();
        }
        if (this.laserClip == 0 || this.laserClip < 3) {
            this.laserClip++;
            console.log(this.laserClip);
            addRound();

            console.log("total rounds are " + totalRounds);
        } else {
            console.log("maximum clip");
        }
    }
    activateShield() {
        this.shield = true;
        console.log(this.name + " shield is now " + this.shield);
        addRound();
        console.log("total rounds are " + totalRounds);
    }
}

//DECLARE SHIPS
let playerShip = new Ship (100, 0, 20, false, "Maverick")
console.log(playerShip);
generateNewEnemy();
console.log(enemy);

//FUNCTIONS
function generateNewEnemy() {
    alienName = ["Gorgonzola", "L33T Killa", "Jimmy"];
    fightingType = ["attacker", "defender"];

    let i = Math.floor(Math.random()*alienName.length);
    let j = Math.floor(Math.random()*2);
    
    enemy = new Ship(100, 0, 10, false, name = alienName[i], fightingType[j]);
    console.log("New enemy " + enemy.name);
}

function healthCheck() {

}

//Enemy Attacker
function moveChoiceEnemyAttacker() {

    let choice = Math.random();

    if (playerShip.laserClip == 0 || enemy.laserClip == 0) {
        enemy.chargeLaser();
        return;
    } 
    if (enemy.laserClip > 0 && enemy.laserClip <= 3 && choice <= 0.66) {
        enemy.attackPlayer();
    } else {
        enemy.activateShield();
    }
}
//Enemy Defender
function moveChoiceEnemyDefender() {

    let choice = Math.random();

    if (playerShip.laserClip == 0) {
        enemy.chargeLaser();
        return;
    }
    if (choice <= 0.66) {
        enemy.activateShield();
    } else {
        enemy.attackPlayer();
    }
}

//ROUND COUNTER
let totalRounds = 0;
function addRound() {
    totalRounds++;
}

if (playerMove = true) {
    function battle() {

        enemy.moveChoice();
    }
}

function roundReset() {

}



//USER INPUT

document.getElementById("fire").addEventListener("click",
function() {
    playerShip.attackEnemy()
});
document.getElementById("charge").addEventListener("click", function() {
    playerShip.chargeLaser()
});
document.getElementById("shield").addEventListener("click", function() {
    playerShip.activateShield()
});


//GAME END STAGE CONDITIONS

function gameEnd() {

}

//BONUS
//Make a function that prints text slowly instead of instantly

// function: 
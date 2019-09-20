//GAME BEGIN
document.getElementById("startButton").addEventListener("click", function() {
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

            console.log("Player has attacked the enemy!")
            console.log("Enemy health is now " + enemy.health);

            let laserSound = new Audio("pew.wav");
            laserSound.play();
            this.laserClip--;
            updateUserConsole();

            console.log("total rounds are " + totalRounds);
        }
        if (enemy.shield == true) {
            console.log("Enemy shield state is " + enemy.shield);
            console.log("Enemy shield deflected shot");
            this.laserClip--;
            updateUserConsole();

            //Play laser shot sound
            let laserSound = new Audio("pew.wav");
            laserSound.play();

            disableShields();
        }
        } else {
            console.log("No ammo!");
        }
    }
    attackPlayer() {
        console.log("Enemy has attacked Player!");
        if (playerShip.shield == false) {
            playerShip.health = playerShip.health - this.laserDamage;
            console.log("Player health is now " + playerShip.health);
        } else if (playerShip.shield = true) {
            console.log("Player shield deflected shot");
        }
        this.laserClip--;
        updateUserConsole();
        addRound();
    }
    chargeLaser() {
        if (this.laserClip == 0 || this.laserClip < 3) {
            this.laserClip++;
            console.log(this.name + " has loaded ammo");
            console.log(this.name + " has " + this.laserClip + " shots");
            addRound();
            console.log("total moves are " + totalRounds);
            updateUserConsole();
        } else {
            console.log("maximum clip");
        }
    }
    activateShield() {
        this.shield = true;
        console.log(this.name + " shield is now " + this.shield);
        addRound();
        console.log("total moves are " + totalRounds);
        updateUserConsole();
    }
}

//DECLARE SHIPS
let playerShip = new Ship (100, 0, 20, false, "Maverick")
let playerMaxHealth = playerShip.health;
console.log(playerShip);
generateNewEnemy();
let enemyMaxHealth = enemy.health;
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

function generateBoss() {
    enemy = new Ship(200, 0, 10, false, name = "General Zarp", "attacker")
}

function enemyHealthCheck() {
    if (enemy.health > 0.66 && enemy.health <= enemyMaxHealth) {
        document.getElementById("enemyShipNew").style.display = "inline-block";
    }
    if (enemy.health > 0.33 && enemy.health <= 0.66*enemyMaxHealth) {
        document.getElementById("enemyShipNew").style.display = "none";
        document.getElementById("enemyShipMid").style.display = "inline-block";
    }
    if (enemy.health > 0 && enemy.health <= 0.33*enemyMaxHealth) {
        document.getElementById("enemyShipMid").style.display = "none";
        document.getElementById("enemyShipOld").style.display = "inline-block";
    }
    if (enemy.health <= 0) {
        document.getElementById("enemyShipOld").style.display = "none";
        document.getElementById("enemyShipDestroyed").style.display = "inline-block";
    }
}

function playerHealthCheck() {
    if (playerShip.health > 0.66 && playerShip.health <= playerMaxHealth) {
        document.getElementById("playerShipNew").style.display = "inline-block";
    }
    if (playerShip.health > 0.33 && playerShip.health <= 0.66*playerMaxHealth) {
        document.getElementById("playerShipNew").style.display = "none";
        document.getElementById("playerShipMid").style.display = "inline-block";
    }
    if (playerShip.health > 0 && playerShip.health <= 0.33*playerMaxHealth) {
        document.getElementById("playerShipMid").style.display = "none";
        document.getElementById("playerShipOld").style.display = "inline-block";
    }
    if (playerShip.health <= 0) {
        document.getElementById("playerShipOld").style.display = "none";
        document.getElementById("playerShipDestroyed").style.display = "inline-block";
    }
}

//Enemy Attacker
function moveChoiceEnemyAttacker() {

    let choice = Math.random();

    if (playerShip.laserClip == 0 && enemy.laserClip < 3) {
        enemy.chargeLaser();
        return;
    } 
    if (enemy.laserClip == 0) {
        enemy.chargeLaser();
    } else if (choice <= 0.66) {
        if (enemy.laserClip == 0) {
            enemy.chargeLaser();
            return;
        } else {
        enemy.attackPlayer();
        }
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
    if (enemy.laserClip == 0) {
        enemy.chargeLaser();
    } else if (choice <= 0.66) {
        enemy.activateShield();
    } else {
        enemy.attackPlayer();
    }
}

//Disable shields after each turn
function disableShields() {
    playerShip.shield = false;
    enemy.shield = false;
}

//Game Display
function changeDisplay(string) {
    let element = document.getElementsByClassName(string)
    for(i=0; i<element.length; i++) {
        element[i].style.display = `none`;
    }
    document.getElementById(`game`).style.display = `inline-block`;
}
//Start button to level choice
document.getElementById(`startButton`).addEventListener(`click`, 
    function() {
        let string = `start`;
        changeDisplay(string);
});
//level choice to game
document.getElementById(`levelOne`).addEventListener(`click`, 
function() {
    let string = `levelChoice`;
    changeDisplay(string);
});
document.getElementById(`levelTwo`).addEventListener(`click`, 
function() {
    let string = `levelChoice`;
    changeDisplay(string);
});
document.getElementById(`levelThree`).addEventListener(`click`, 
function() {
    let string = `levelChoice`;
    changeDisplay(string);
});


//DISPLAY UI
function updateUserConsole() {
    document.getElementById(`displayPlayerClip`).innerHTML = playerShip.laserClip;
    document.getElementById(`displayPlayerHealth`).innerHTML = playerShip.health;
    document.getElementById(`displayPlayerShield`).innerHTML = playerShip.shield;
    document.getElementById(`displayEnemyClip`).innerHTML = enemy.laserClip;
    document.getElementById(`displayEnemyHealth`).innerHTML = enemy.health;
    document.getElementById(`displayEnemyShield`).innerHTML = enemy.shield;
}

//ROUND COUNTER
let totalRounds = 0;
function addRound() {
    totalRounds++;
    playerHealthCheck();
    enemyHealthCheck();
    disableShields();
}



//USER INPUT

document.getElementById("fire").addEventListener("click",
function() {
    playerShip.attackEnemy();
});
document.getElementById("charge").addEventListener("click", function() {
    playerShip.chargeLaser()
    if (enemy.fightingType == "attacker") {
        moveChoiceEnemyAttacker();
    }
    if (enemy.fightingType == "defender") {
        moveChoiceEnemyDefender();
    }
});
document.getElementById("shield").addEventListener("click", function() {
    playerShip.activateShield();
    if (enemy.fightingType == "attacker") {
        moveChoiceEnemyAttacker();
    }
    if (enemy.fightingType == "defender") {
        moveChoiceEnemyDefender();
    }
});


//GAME END STAGE CONDITIONS

function gameEnd() {

}

//BONUS
//Make a function that prints text slowly instead of instantly

// function: 
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

document.getElementById("fire").addEventListener("click", function() {
    console.log(`pew pew`)
    let laserSound = new Audio("pew.wav");
    laserSound.play();
});

//ROUND COUNTER
let totalRounds = 0;
function addRound() {
    totalRounds++;
}

//SHIP CLASS DECLARATION
class Ship {
    constructor(health, laserClip = 0, laserDamage, shield = false) {
        this.health = health;
        this.laserClip = laserClip;
        this.laserDamage = laserDamage;
        this.shield = shield;
        }
}

//ENEMY CLASS

//Enemy Attacker
class EnemyAttacker extends Ship {
    moveChoice() {
        if (playerShip.laserClip == 0) {
            this.chargeLaser()
        }
        if (playerShip ) {

        }
    }
}

//Enemy Defender
class EnemyDefender extends Ship {
    moveChoice() {
        if ()
    }
}

//PLAYER DECLARATION
let playerShip = new Ship (100, 0, 20, false)
console.log(playerShip);
let enemyShip1 = new EnemyAttacker(100, 0, 10, false);

//DIFFICULTY LEVELS
// let levelChoice = {};

// function startLevel() {
//     let enemyShip1 = new EnemyAttacker(100, 0, 10, false);
// }
// function startLevel2() {
//     let enemyShip1 = new EnemyAttacker(100, 0, 10, false);
// }
// function startLevel3() {
//     let enemyShip1 = new EnemyAttacker(100, 0, 10, false);
// }

//FUNCTIONS
function battle() {
    attack();
}

function attack(shipAttacker, shipDefender) {
    if (shipDefender.shield == false) {
            if (shipAttacker.laserClip = 0) {
                console.log("Cannot fire weapon! Ammunition is not loaded!");
            }
            if (shipAttacker.laserClip >= 0 && shipAttacker.laserClip <= 3) {
                console.log("Fire fire fire!")
                if (shipDefender.shield == true) {
                    shipDefender.health = shipDefender.health - shipAttacker.damage;
                }
            }
        shipDefender.health = shipDefender.health - shipAttacker.damage;
        console.log("Enemy is hit!")
    } if (shipDefender.shield == true) {
        console.log("Enemy shield has deflected our shot!")
    }
}

function chargeLaser(ship1) {
    ship1.laserClip++;
    console.log(ship1.laserClip);
}

function activateShield(ship1) {
    console.log(ship1.shield);
    ship1.shield = true;
}

function roundReset() {

}

//USER INPUT
document.getElementById('fire').addEventListener("click", attack(playerShip, enemyShip1));
document.getElementById('charge').addEventListener("click", chargeLaser(playerShip));
document.getElementById('shield').addEventListener("click", activateShield(playerShip));


//GAME END STAGE CONDITIONS

function gameEnd() {

}

//BONUS
//Make a function that prints text slowly instead of instantly

// function: 
//Ship moveset variables
let playerLaserStorage = 0;
let playerShield = 20;
let playerLaserDamage = 10;

//Class declaration
class Ship {
    constructor(health, laserStorage, laserDamage, shield) {
        this.health = health;
        this.laserStorage = laserStorage;
        this.laserDamage = laserDamage;
        this.shield = shield;
        }

    attack(ship1, ship2) {
        ship1.health = ship1.health - ship2.damage;
    }
    chargeLaser() {

    }
    useShield() {

    }
}

class playerShip extends Ship {
    
}

class Enemy extends Ship {

}

//Game Loop

//User Input
document.getElementById('fire')
document.getElementById('charge')
document.getElementById('shield')

function updateDisplayShip {

}


function: 
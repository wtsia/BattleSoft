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
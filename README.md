## **Deployment**: https://wtsia.github.io/BattleSoft/

### Mechanics
**Ship Class**:
-methods take in general ship1 (aggresor) and ship2 (receiver)
-methods needed for ship: taking damage, dealing damage, charging laser, capping laser capacity, activating shield, deactivating shield after turn,  

**Laser Mechanics**:
If laser clip is 0, cannot shoot. Laser clip cannot go above 3. 

**Shield Mechanics**:
If shield is on, then the shield takes incoming damage should the enemy ship fire their clip.
Shield is unlimited use, with a boolean state.

**Enemy Attacker**:
Charges laser and has 66% chance to fire  a laser. If player laser clip is 0 then enemy charges laser then fires off when possible.

**Enemy Defender**:
Charges laser then 66% chance to use shield and 33% chance to fire laser. If laser clip is empty or player laser clip is 0, enemy charges laser.

#### Attributions:
ASCII Art Generator courtesy of: http://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20

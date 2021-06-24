**Ship Class**:
-methods take in general ship1 (aggresor) and ship2 (receiver)
-methods needed for ship: taking damage, dealing damage, charging laser, capping laser capacity, activating shield, deactivating shield after turn,  

**Laser Mechanics**:
If laser is 0, cannot shoot. Laser clip cannot go above 3. 

**Shield Mechanics**:
If shield is on, then shield takes incoming damage if enemy ship fires clip.
Shield is unlimited use, with boolean state.

**Enemy Attacker**:
Charges laser and has 66% chance to fire laser. If player laser clip is 0 then enemy charges laser then fires off when possible

**Enemy Defender**:
Charges laser then 66% chance to use shield and 33% chance to fire laser. If laser is empty or player laser clip is 0, enemy charges laser

ASCII Art Generator courtesy of: http://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20

**Deployment**: https://wtsia.github.io/BattleSoft-Game/

class DicectedMath {
	constructor() {

	}

	diceProbability(val) {
		return (7 - val) / 6.0;
	}

	numHits(attackingWeapon) {
		var weaponOwner = attackingWeapon.owner;

		var probToHit = this.diceProbability(weaponOwner.weaponSkill);

		return attackingWeapon.owner.attacks * probToHit;
	}

	numWounds(attackingWeapon, targetToughness, numHits) {
		var delta = attackingWeapon.strength / targetToughness;
		var probToWound = 1.0;

		if(delta == 1.0) {
			probToWound = this.diceProbability(4);

		} else if(delta >= 2.0) {
			probToWound = this.diceProbability(2);

		} else if(delta > 1.0) {
			probToWound = this.diceProbability(3);

		} else if(delta <= 0.5) {
			probToWound = this.diceProbability(6);

		} else if(delta < 1.0) {
			probToWound = this.diceProbability(5);
		}
		
		return numHits * probToWound;
	}

	roundToDecimals(val, numDecimals) {
		return val.toFixed(numDecimals);
	}
}
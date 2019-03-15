class DicectedMath {
	constructor() {

	}

	numHits(entity) {
		var probToHit = DiceProbability.toRollEqualOrHigher(entity.weaponSkill);

		return entity.attacks * probToHit;
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
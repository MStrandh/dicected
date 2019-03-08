class ArmedEntity {
	
	constructor(owner, weapon) {
		this.ownerEntity = owner;
		this.weaponEntity = weapon;
	}

	// ----------------------------------
	// -- ATTACKS
	// ----------------------------------
	get attacks() {
		return this.ownerEntity.attacks;
	}

	// ----------------------------------
	// -- WEAPON SKILL
	// ----------------------------------
	get weaponSkill() {
		return this.ownerEntity.weaponSkill;
	}

	// ----------------------------------
	// -- STRENGTH
	// ----------------------------------
	get strength() {
		if(this.weaponEntity.strength == "U") {
			return this.ownerEntity.strength;
			
		} else if(this.weaponEntity.strength == "x2") {
			return this.ownerEntity.strength * 2;
		}
		
		return this.weaponEntity.strength;
	}

	// ----------------------------------
	// -- ARMOUR PENETRATION
	// ----------------------------------
	get armourPenetration() {
		return this.weaponEntity.armourPenetration;
	}

	// ----------------------------------
	// -- DAMAGE
	// ----------------------------------
	get damage() {
		return this.weaponEntity.damage;
	}

	// ----------------------------------
	// -- MISC
	// ----------------------------------
	get modelName() {
		return this.ownerEntity.name;
	}

	get weaponName() {
		return this.weaponEntity.name;
	}

	toString() {
		return this.ownerEntity.name + " - " + this.weaponEntity.name;
	}
}
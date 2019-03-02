class MeleeWeapon {
	
	constructor() {
	}

	// ----------------------------------
	// -- NAME
	// ----------------------------------
	set name(n) {
		this.weaponName = n;
	}

	get name() {
		return this.weaponName;
	}

	// ----------------------------------
	// -- STRENGTH
	// ----------------------------------
	set strength(str) {
		this.weaponStrength = str;
	}

	get strength() {
		if(this.weaponStrength == "U") {
			return this.weaponOwner.strength;
			
		} else if(this.weaponStrength == "x2") {
			return this.weaponOwner.strength * 2;
		}
		
		return this.weaponStrength;
	}

	// ----------------------------------
	// -- ARMOUR PENETRATION
	// ----------------------------------
	set armourPenetration(ap) {
		this.weaponAP = ap;
	}

	get armourPenetration() {
		return this.weaponAP;
	}

	// ----------------------------------
	// -- DAMAGE
	// ----------------------------------
	set damage(dmg) {
		this.weaponDamage = dmg;
	}

	get damage() {
		return this.weaponDamage;
	}

	// ----------------------------------
	// -- OWNER
	// ----------------------------------
	set owner(own) {
		this.weaponOwner = own;
	}

	get owner() {
		return this.weaponOwner;
	}
}
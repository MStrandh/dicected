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
}
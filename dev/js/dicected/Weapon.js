class Weapon {
	constructor() {
		this.weaponAP = 0;
		this.weaponShots = 1;
	}

	get armourPiercing() {
		return this.weaponAP;
	}

	get numShots() {
		return this.weaponShots;
	}
}
class Model {
	
	constructor() {
	}

	// ----------------------------------
	// -- NAME
	// ----------------------------------
	set name(n) {
		this.unitName = n;
	}

	get name() {
		return this.unitName;
	}

	// ----------------------------------
	// -- MOVEMENT
	// ----------------------------------
	set movement(m) {
		this.unitMovement = m;
	}

	get movement() {
		return this.unitMovement;
	}

	// ----------------------------------
	// -- WEAPON SKILL
	// ----------------------------------
	set weaponSkill(ws) {
		this.unitWeaponSkill = ws;
	}

	get weaponSkill() {
		return this.unitWeaponSkill;
	}
	
	// ----------------------------------
	// -- BALLISTIC SKILL
	// ----------------------------------
	set ballisticSkill(bs) {
		this.unitBallisticSkill = bs;
	}

	get ballisticSkill() {
		return this.unitBallisticSkill;
	}

	// ----------------------------------
	// -- STRENGTH
	// ----------------------------------
	set strength(s) {
		this.unitStrength = s;
	}

	get strength() {
		return this.unitStrength;
	}

	// ----------------------------------
	// -- TOUGHNESS
	// ----------------------------------
	set toughness(t) {
		this.unitToughness = t;
	}

	get toughness() {
		return this.unitToughness;
	}
	
	// ----------------------------------
	// -- WOUNDS
	// ----------------------------------
	set wounds(w) {
		this.unitWounds = w;
	}

	get wounds() {
		return this.unitWounds;
	}
	
	// ----------------------------------
	// -- ATTACKS
	// ----------------------------------
	set attacks(a) {
		this.unitAttacks = a;
	}

	get attacks() {
		return this.unitAttacks;
	}

	// ----------------------------------
	// -- LEADERSHIP
	// ----------------------------------
	set leadership(ld) {
		this.unitLeadership = ld;
	}

	get leadership() {
		return this.unitLeadership;
	}

	// ----------------------------------
	// -- SAVE
	// ----------------------------------
	set save(sv) {
		this.unitSave = sv;
	}

	get save() {
		return this.unitSave;
	}
}
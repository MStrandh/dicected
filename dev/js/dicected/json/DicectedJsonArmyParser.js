class DicectedJsonArmyParser {

	constructor() {
		this.listeners = new Map();

		this.models = {};
		this.meleeWeapons ={};

		// this.jsonMeleeWeapons = [];
	}

	getModels() {
		return this.models;
	}

	getMeleeWeapons() {
		return this.meleeWeapons;
	}

	getRangedWeapons() {
		return this.rangedWeapons;
	}

	parse() {
		var that = this;

		$.when(
			$.getJSON("assets/data/wh40k/genestealer_cult/melee.json"),
			$.getJSON("assets/data/wh40k/genestealer_cult/units.json")
		).done(function(melee, models) {
			// that.jsonMeleeWeapons = melee[0];

			that.parseModels(models[0]);
			that.parseMeleeWeapons(melee[0]);

			that.dispatchDone("done");
		});
	}

	addEventListener(label, callback) {
		if(!this.listeners.has(label)) {
			this.listeners.set(label, []);
		}

		this.listeners.get(label).push(callback);
	}

	dispatchDone(label, ...args) {
		let listeners = this.listeners.get(label);

		if (listeners && listeners.length) {
			listeners.forEach((listener) => {
				listener(...args); 
			});
			
			return true;
		}

		return false;
	}
	
	parseModels(data) {
		for (var v in data.models) {
			var activemodel = data.models[v];

			var model = new Model();
			model.name = activemodel.name;
			model.movement = activemodel.movement;
			model.weaponSkill = activemodel.weapon_skill;
			model.ballisticSkill = activemodel.ballistic_skill;
			model.strength = activemodel.strength;
			model.toughness = activemodel.toughness;
			model.wounds = activemodel.wounds;
			model.attacks = activemodel.attacks;
			model.leadership = activemodel.leadership;
			model.save = activemodel.save;

			this.models[v] = model;
		}
	}

	parseMeleeWeapons(data) {
		if(!data) {
			return;
		}

		for (var v in data) {
			var activeWeapon = data[v];

			var weapon = new MeleeWeapon();
			weapon.name = activeWeapon.name;
			weapon.strength = activeWeapon.strength;
			weapon.armourPenetration = activeWeapon.ap;
			weapon.damage = activeWeapon.damage;

			this.meleeWeapons[v] = weapon;
		}
	}
}
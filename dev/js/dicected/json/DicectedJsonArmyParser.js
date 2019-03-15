class DicectedJsonArmyParser {

	constructor() {
		this.listeners = new Map();

		this.models = {};
		this.meleeWeapons ={};
		this.units = [];
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

	getUnits() {
		return this.units;
	}

	parse() {
		var that = this;

		$.when(
			$.getJSON("assets/data/wh40k/genestealer_cult/melee.json"),
			$.getJSON("assets/data/wh40k/genestealer_cult/models.json"),
			$.getJSON("assets/data/armies/gsc_test.json")
		).done(function(melee, models, armylist) {
			that.parseModels(models[0]);
			that.parseMeleeWeapons(melee[0]);
			that.parseArmyList(armylist[0]);

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

		if(listeners && listeners.length) {
			listeners.forEach((listener) => {
				listener(...args); 
			});
			
			return true;
		}

		return false;
	}
	
	parseModels(data) {
		for(var v in data) {
			var activemodel = data[v];

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

		for(var v in data) {
			var activeWeapon = data[v];

			var weapon = new MeleeWeapon();
			weapon.name = activeWeapon.name;
			weapon.strength = activeWeapon.strength;
			weapon.armourPenetration = activeWeapon.ap;
			weapon.damage = activeWeapon.damage;

			this.meleeWeapons[v] = weapon;
		}
	}

	parseArmyList(data) {
		for(var unitId in data) {	
			var unitJson = data[unitId];
			var unitModels = unitJson.models;

			var unit = new Unit();

			for(var i = 0; i < unitModels.length; i++) {
				var unitAmount = unitModels[i].amount;
				var unitModel = unitModels[i].model;
				var unitMeleeWeapon = unitModels[i].melee_weapon;

				var armedEntity = new ArmedEntity(this.models[unitModel], this.meleeWeapons[unitMeleeWeapon]);

				unit.add(unitModels[i].amount, armedEntity);
			}

			this.units.push(unit);
		}
	}
}
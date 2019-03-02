(function(){
    console.log("Dicected");

	var units = {};
	var meleeWeapons = [];
	var jsonMeleeWeapons;

	$.when(
		$.getJSON("assets/data/wh40k/genestealer_cult/melee.json"),
		$.getJSON("assets/data/wh40k/genestealer_cult/units.json")
	).done(function(melee, units) {
		jsonMeleeWeapons = melee[0];
		parseUnits(units[0]);

		launchApp();
	});
	
	function parseUnits(data) {
		for (var v in data.types) {
			var activeUnit = data.types[v];

			var unit = new Unit();
			unit.name = activeUnit.name;
			unit.movement = activeUnit.movement;
			unit.weaponSkill = activeUnit.weapon_skill;
			unit.ballisticSkill = activeUnit.ballistic_skill;
			unit.strength = activeUnit.strength;
			unit.toughness = activeUnit.toughness;
			unit.wounds = activeUnit.wounds;
			unit.attacks = activeUnit.attacks;
			unit.leadership = activeUnit.leadership;
			unit.save = activeUnit.save;

			createWeaponsForUnit(unit, activeUnit.weapons);

			units[v] = unit;
		}
	}

	function launchApp() {
		printUnits();
		printWeapons();

		var dmgProb = new DamageProbabilityPrint();
		dmgProb.printTo($("#result-container"));

		for(var weapon in meleeWeapons) {
			dmgProb.printWeapon(meleeWeapons[weapon]);	
		}
		
	}

	function createWeaponsForUnit(unit, weapons) {
		if(!weapons) {
			return;
		}

		for(var i = 0; i < weapons.length; i++) {
			var activeWeapon = jsonMeleeWeapons[weapons[i]];

			var weapon = new MeleeWeapon();
			weapon.name = activeWeapon.name;
			weapon.strength = activeWeapon.strength;
			weapon.armourPenetration = activeWeapon.ap;
			weapon.damage = activeWeapon.damage;
			weapon.owner = unit;

			meleeWeapons.push(weapon);
		}
	}

	function printUnits() {
		var content = "<table>";

		content += "<thead><tr>";
		content += "<th>Name</th>";
		content += "<th>M</th>";
		content += "<th>WS</th>";
		content += "<th>BS</th>";
		content += "<th>S</th>";
		content += "<th>T</th>";
		content += "<th>W</th>";
		content += "<th>A</th>";
		content += "<th>LD</th>";
		content += "<th>SV</th>";
		content += "</tr></thead>";

		content += "<tbody>";

		for (var key in units) {
			content += "<tr>"
			content += "<td>" + units[key].name + "</td>";
			content += "<td>" + units[key].movement + "</td>";
			content += "<td>" + units[key].weaponSkill + "</td>";
			content += "<td>" + units[key].ballisticSkill + "</td>";
			content += "<td>" + units[key].strength + "</td>";
			content += "<td>" + units[key].toughness + "</td>";
			content += "<td>" + units[key].wounds + "</td>";
			content += "<td>" + units[key].attacks + "</td>";
			content += "<td>" + units[key].leadership + "</td>";
			content += "<td>" + units[key].save + "</td>";

			content += "</tr>";
		}

		content += "</tbody>";
		content += "</table>";

		$("#unit-container").append(content);
	}

	function printWeapons() {
		var content = "<table>";

		content += "<thead><tr>";
		content += "<th>Name</th>";
		content += "<th>S</th>";
		content += "<th>AP</th>";
		content += "<th>DMG</th>";
		content += "</tr></thead>";

		content += "<tbody>";

		for (var key in meleeWeapons) {
			content += "<tr>"

			content += "<td>" + meleeWeapons[key].name + "</td>";
			content += "<td>" + meleeWeapons[key].strength + "</td>";
			content += "<td>" + meleeWeapons[key].armourPenetration + "</td>";
			content += "<td>" + meleeWeapons[key].damage + "</td>";

			content += "</tr>";
		}

		content += "</tbody>";
		content += "</table>";

		$("#weapon-container").append(content);
	}
})();
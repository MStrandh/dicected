(function(){
    console.log("Dicected");

	var models = {};
	var meleeWeapons = {};
	var units = [];

	var printer = new DicectedPrinter();

	var jsonParser = new DicectedJsonArmyParser();
	jsonParser.addEventListener("done", doneParsing);
	jsonParser.parse();
	
	function doneParsing() {
		models = jsonParser.getModels();
		meleeWeapons = jsonParser.getMeleeWeapons();

		createUnits();
		launchApp();
	}

	function createUnits() {
		var unit = new Unit();

		unit.add(1, new ArmedEntity(models.acolyte_leader, meleeWeapons.lashwhip_bonesword));
		unit.add(2, new ArmedEntity(models.acolyte_hybrid, meleeWeapons.heavy_rock_saw));
		unit.add(2, new ArmedEntity(models.acolyte_hybrid, meleeWeapons.rending_claw));

		units.push(unit);
	}

	function launchApp() {
		printer.printUnits(models);
		printer.printMeleeWeapons(meleeWeapons);

		var dmgProb = new DamageProbabilityPrint();
		dmgProb.printTo($("#result-container"));

		for(var i = 0; i < units.length; i++) {
			var unit = units[i];

			for(var j = 0; j < unit.numArmedEntities; j++) {
				var armedEntiy = unit.getEntityAt(j);
				dmgProb.printArmedEntity(armedEntiy);
			}
		}
	}
})();
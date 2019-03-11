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
		units = jsonParser.getUnits();

		launchApp();
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
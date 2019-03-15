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


		var v = new AttackAction(1, units[0].getEntityAt(0).attacks);
		v.execute();
	}
})();
(function(){
    console.log("Dicected");

	var weapon = new Weapon();


	$.getJSON("assets/data/wh40k/genestealer_cult/ranged.json", function(json) {
		console.log(json);
	});

	$.getJSON("assets/data/wh40k/genestealer_cult/units.json", function(json) {
		console.log(json);
	});
})();
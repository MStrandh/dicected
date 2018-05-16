(function(){
    console.log("Dicected - Death Guard");

	var weapon = new Weapon();
	console.log("Weapon AP: " + weapon.armourPiercing);
	console.log("Weapon num shots: " + weapon.numShots);

	$.getJSON("assets/data/wh40k/orks/ranged.json", function(json) {
		console.log(json);
	});
})();
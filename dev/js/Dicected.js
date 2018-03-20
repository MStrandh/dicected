console.log("Dicected");

function probabilityToHitWithRerollAll(k) {
	return ((7 - k) * 6 + (k - 1) * (7 - k)) / 36.0;
}

function probabilityToHitWithLimitedReroll(k) {
	return ((7 - k) / 6) + ((7 - k) / 36);
}


console.log("--- To Hit rerolling all --- ");
for(var i = 2; i <= 6; i++) {
	console.log(i + ": " + probabilityToHitWithRerollAll(i));
}


console.log("--- To Hit rerolling ones --- ");
for(var i = 2; i <= 6; i++) {
	console.log(i + ": " + probabilityToHitWithLimitedReroll(i));
}
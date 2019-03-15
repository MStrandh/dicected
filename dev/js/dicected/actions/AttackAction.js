class AttackAction {

	constructor(numAttacks, entity) {
		console.log(entity);
	}

	execute() {
		console.log(DiceProbability.toRollEqualOrHigher(1));
		console.log(DiceProbability.toRollEqualOrHigher(2));
		console.log(DiceProbability.toRollEqualOrHigher(3));
		console.log(DiceProbability.toRollEqualOrHigher(4));
		console.log(DiceProbability.toRollEqualOrHigher(5));
		console.log(DiceProbability.toRollEqualOrHigher(6));
	}
}
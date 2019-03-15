class DoubleHitRollsRule {

	constructor() {

	}

	execute(obj) {
		obj.numAttacks = obj.numAttacks * 2;
	}
}
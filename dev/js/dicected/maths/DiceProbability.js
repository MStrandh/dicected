class DiceProbability {

	constructor() {

	}

	static toRollEqualOrHigher(val) {
		return (7 - val) / 6.0;
	}
}
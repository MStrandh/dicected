class Unit {

	constructor() {
		this.armedEntities = [];
	}

	add(amount, armedEntity) {
		var obj = {
			"num": amount,
			"entity": armedEntity
		};

		this.armedEntities.push(obj);
	}

	get numArmedEntities() {
		return this.armedEntities.length;
	}

	getEntityAt(index) {
		return this.armedEntities[index].entity;
	}

	getNumEntities(index) {
		return this.armedEntities[index].num;
	}
}
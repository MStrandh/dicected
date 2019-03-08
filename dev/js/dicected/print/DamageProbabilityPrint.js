class DamageProbabilityPrint {

	constructor() {
		this.dicectedMath = new DicectedMath();
	}

	printTo(element) {
		var table = $('<table/>').addClass('result-table');
		
		var tHead = $("<thead/>");
		var tHeadRow = $("<tr/>");

		tHeadRow.append($("<th/>").text("Model - Weapon"));
		tHeadRow.append($("<th/>").text("Num Attacks"));
		tHeadRow.append($("<th/>").text("Num Hits"));
		tHeadRow.append($("<th/>").text("T3"));
		tHeadRow.append($("<th/>").text("T4"));
		tHeadRow.append($("<th/>").text("T5"));
		tHeadRow.append($("<th/>").text("T6"));
		tHeadRow.append($("<th/>").text("T7"));
		tHeadRow.append($("<th/>").text("T8"));

		this.tableBody = $("<tbody/>");

		tHead.append(tHeadRow);

		table.append(tHead);
		table.append(this.tableBody);

		element.append(table);
	}

	printArmedEntity(entity) {
		var tBodyRow = $("<tr/>");

		var numHits = this.dicectedMath.numHits(entity);
		var numHitsRounded = this.dicectedMath.roundToDecimals(numHits, 2);

		tBodyRow.append($("<td/>").text(entity.toString()));
		tBodyRow.append($("<td/>").text(entity.attacks));
		tBodyRow.append($("<td/>").text(numHitsRounded));

		for(var i = 3; i < 9; i++) {
			var numWounds = this.dicectedMath.numWounds(entity, i, numHits);
			var numWoundsRounded = this.dicectedMath.roundToDecimals(numWounds, 2);

			tBodyRow.append($("<td/>").text(numWoundsRounded));
		}

		this.tableBody.append(tBodyRow);
	}
}
class DamageProbabilityPrint {

	constructor() {
		this.dicectedMath = new DicectedMath();
	}

	printTo(element) {
		var table = $('<table/>').addClass('result-table');
		
		var tHead = $("<thead/>");
		var tHeadRow = $("<tr/>");

		tHeadRow.append($("<th/>").text("Unit"));
		tHeadRow.append($("<th/>").text("Weapon"));
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

	printWeapon(weapon) {
		var tBodyRow = $("<tr/>");

		var numHits = this.dicectedMath.numHits(weapon);

		tBodyRow.append($("<td/>").text(weapon.owner.name));
		tBodyRow.append($("<td/>").text(weapon.name));
		tBodyRow.append($("<td/>").text(weapon.owner.attacks));
		tBodyRow.append($("<td/>").text(numHits));

		for(var i = 3; i < 9; i++) {
			var numWounds = this.dicectedMath.numWounds(weapon, i, numHits);
			numWounds = this.dicectedMath.roundToDecimals(numWounds, 2);

			tBodyRow.append($("<td/>").text(numWounds));
		}

		this.tableBody.append(tBodyRow);
	}
}
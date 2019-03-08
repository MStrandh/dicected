class DicectedPrinter {

	constructor() {

	}

	printMeleeWeapons(meleeWeapons) {
		var content = "<table>";

		content += "<thead><tr>";
		content += "<th>Name</th>";
		content += "<th>S</th>";
		content += "<th>AP</th>";
		content += "<th>DMG</th>";
		content += "</tr></thead>";

		content += "<tbody>";

		for (var key in meleeWeapons) {
			content += "<tr>";

			content += "<td>" + meleeWeapons[key].name + "</td>";
			content += "<td>" + meleeWeapons[key].strength + "</td>";
			content += "<td>" + meleeWeapons[key].armourPenetration + "</td>";
			content += "<td>" + meleeWeapons[key].damage + "</td>";

			content += "</tr>";
		}

		content += "</tbody>";
		content += "</table>";

		$("#weapon-container").append(content);
	}

	printUnits(units) {
		var content = "<table>";

		content += "<thead><tr>";
		content += "<th>Name</th>";
		content += "<th>M</th>";
		content += "<th>WS</th>";
		content += "<th>BS</th>";
		content += "<th>S</th>";
		content += "<th>T</th>";
		content += "<th>W</th>";
		content += "<th>A</th>";
		content += "<th>LD</th>";
		content += "<th>SV</th>";
		content += "</tr></thead>";

		content += "<tbody>";

		for (var key in units) {
			content += "<tr>";
			content += "<td>" + units[key].name + "</td>";
			content += "<td>" + units[key].movement + "</td>";
			content += "<td>" + units[key].weaponSkill + "</td>";
			content += "<td>" + units[key].ballisticSkill + "</td>";
			content += "<td>" + units[key].strength + "</td>";
			content += "<td>" + units[key].toughness + "</td>";
			content += "<td>" + units[key].wounds + "</td>";
			content += "<td>" + units[key].attacks + "</td>";
			content += "<td>" + units[key].leadership + "</td>";
			content += "<td>" + units[key].save + "</td>";

			content += "</tr>";
		}

		content += "</tbody>";
		content += "</table>";

		$("#unit-container").append(content);
	}
}
(function(){
    function probabilityToHit(k) {
		return (7 - k) / 6.0;
	}

	function probabilityToHitWithRerollAll(k) {
		return ((7 - k) * 6 + (k - 1) * (7 - k)) / 36.0;
	}

	function probabilityToHitWithLimitedReroll(k) {
		return ((7 - k) / 6) + ((7 - k) / 36);
	}

	function roundToDecimals(val, numDecimals) {
		return val.toFixed(numDecimals);
	}

	function createHeader() {
		var tHead = $('<thead/>');
		
		var tHeadRow = $("<tr/>");
		tHeadRow.append($("<td/>"));

		for(i = 2; i <= 6; i++) {
			tHeadRow.append($("<td/>").text(i));
		}

		tHead.append(tHeadRow);

		return tHead;
	}

	function createStatsRow(title, fnc) {
		var row = $('<tr/>');
		row.append($("<td/>").text(title));

		for(i = 2; i <= 6; i++){
			var diceProbability = fnc(i);
			diceProbability = roundToDecimals(diceProbability, 3);
			
			var resultCol = $('<td/>').text(diceProbability);

			row.append(resultCol);	
		}

		return row;
	}

	function createStatsTable() {
		var table = $('<table/>').addClass('result-table');

		var tableHead = createHeader();
		var rowNoRerolls = createStatsRow("Reroll: None", probabilityToHit);
		var rowRerollOnes = createStatsRow("Reroll: 1s", probabilityToHitWithLimitedReroll);
		var rowRerollAll = createStatsRow("Reroll: All", probabilityToHitWithRerollAll);

		table.append(tableHead);
		table.append(rowNoRerolls);
		table.append(rowRerollOnes);
		table.append(rowRerollAll);

		$('#result-container').append($("<h3/>").text("Probabilities"));
		$('#result-container').append(table);
	}

	createStatsTable();
})();


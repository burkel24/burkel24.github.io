var app = angular.module('bingo', []);

function Cell(x, y) {
	this.x = x;
	this.y = y;
	this.value = '';
	this.won = false;

	if (x==2 && y==2) {
		this.value = 'FREE SPACE';
	}
}

function Row(cells) {
	this.cells = cells;
}

app.controller('bingo-controller', function($scope) {
	function init() {
		$scope.rows = [];
		for (var i=0; i<5; i++) {
			var cells = [];

			for (var j=0; j<5; j++) {
				cells.push(new Cell(j, i, "--"));
			}
			$scope.rows.push(new Row(cells));
		}

		$scope.editMode = true;
	}

	$scope.toggleEdit = function() {
		$scope.editMode = !$scope.editMode;
	};

	$scope.toggleCell = function(cell) {
		if (!$scope.editMode) {
			cell.won = !cell.won;	
		}
	}
	init();
});
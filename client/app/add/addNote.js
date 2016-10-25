routerApp.controller("noteCtrl", function ($scope) {

	$scope.notes = [];

	$scope.addNote = function () {
		console.log("adding note");
		alert("Im working")
		$scope.newNote = {};
		$scope.newNote.createdOn = Date.now();
		$scope.newNote.text = ' ';
		$scope.newNote.edit = true;
		$scope.notes.push($scope.newNote);
		$scope.newNote = {};
		console.log('note created');
	};
	

$scope.notes = [];

	$scope.remove = function (note) {
		var index = $scope.notes.indexOf(note);
		$scope.notes.splice(index, 1);
	}

})
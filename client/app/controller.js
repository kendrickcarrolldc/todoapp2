angular.module('toDoApp')
	.constant('baseUrl', "http://localhost:3000/notes/")
	.controller("noteCtrl", function ($scope, $http, $resource, baseUrl, toDoService, $state) {

		$scope.notes = toDoService.notes;

		$scope.date = new Date();

		$scope.selectedNote = function (note) {

			toDoService.startEdit(note);
			$state.go('edit');
		}
		$scope.remove =
			toDoService.deleteNote;
	});
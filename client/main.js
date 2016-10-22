var routerApp = angular.module("toDoApp", ['ui.router'])


routerApp.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('addNote', {
			url: '/addNote', // this is the just url the view will change to with the #
			templateUrl: 'app/add/addNote.html',
			controller: 'noteCtrl'
		})
		.state('/', {
			url: '/',
			templateUrl: 'app/noteHome/noteHome.html'
//			controller: 'noteCtrl'
		})

})

//routerApp.controller("noteCtrl", function ($scope) {
//
//	$scope.notes = [];
//
//	$scope.addNote = function () {
//		console.log("adding note");
//		alert("Im working")
//		$scope.newNote = {};
//		$scope.newNote.createdOn = Date.now();
//		$scope.newNote.text = ' ';
//		$scope.newNote.edit = true;
//		$scope.notes.push($scope.newNote);
//		$scope.newNote = {};
//	};
//	
//$scope.reloadData = function() {
//			$state.reload();
//		}
//
//
//	$scope.remove = function (note) {
//		var index = $scope.notes.indexOf(note);
//		$scope.notes.splice(index, 1);
//	}
//
//})

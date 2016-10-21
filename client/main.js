
var routerApp = angular.module("toDoApp", ['ui.router'])


// router config at bottom *


.controller("mainCtrl", function($scope, $state) {
	
	
	$scope.addNote = function() {
		console.log("adding note");
		alert("Im working")
		$scope.newNote = {};
      $scope.newNote.createdOn = Date.now();
      $scope.newNote.text = ' ';
      $scope.newNote.edit = true;
      $scope.notes.push($scope.newNote);
      $scope.newNote = {};
    };
		
		$scope.reloadData = function() {
			$state.reload();
		}
		
		$scope.notes = [];
		var note1 = $scope.notes[0];
    
	
	
	
//	$scope.editNote = function {
//		
//	}
//	
	$scope.delete = function(i, note1) {
		if (note1) {
			$scope.notes.splice(note1, 1)
		}
		else{
		alert("delete is working");
		$scope.notes.splice(i, 1);
//		
	};
	}
})


//routerApp.config(function($stateProvider, $urlRouterProvider) {
//		
//	$urlRouterProvider.otherwise('/');
//	
//	$stateProvider
//	
//	
//	
//		.state('addNote', {
//			url: '/addNote',
//			templateUrl: 'app/addNote.html',
//			controller: 'mainCtrl',
//			
//			
//	})
//	
//		.state('editNote', {
//			url: '/editNote',
//			templateUrl: 'app/editNote.js'
//	})
//		
//		.state('deleteNote', {
//			url: '/deleteNote',
//			templateUrl: 'app/deleteNote.js'
//	})
//})
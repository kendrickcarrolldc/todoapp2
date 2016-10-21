
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
    
	
	
	
//	$scope.editNote = function {
//		
//	}
//	
//	$scope.deleteNote = function {
//		
//	}
//	
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
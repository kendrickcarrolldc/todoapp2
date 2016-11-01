var routerApp = angular.module("toDoApp", ['ui.router', 'ngResource'])


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
		.state('edit', {
			url: '/edit', // this is the just url the view will change to with the #
			templateUrl: 'app/edit/edit.html',
			controller: 'editCtrl'
		})

})


'use strict';

// Define the `mets` module
angular.module('mets', [
  'ngAnimate',
  'ui.router',
  'public',
  'admin'
])
.config(function myAppConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
})
.run(['$rootScope', '$state', '$stateParams', function run($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.currentYear = new Date().getFullYear();
}])
.controller('AppCtrl', function AppCtrl($scope, $location) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      console.log('state changes from', fromState);
      console.log('to', toState);
      if (angular.isDefined(toState.data.pageTitle)) {
          $scope.pageTitle = toState.data.pageTitle;
          $scope.simpleTitle = toState.data.simpleTitle;
      }
  });
});


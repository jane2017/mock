(function () {
  'use strict';

  angular.module('public')
    .config(routeConfig);

  /**
   * Configures the routes and views
   */
  routeConfig.$inject = ['$stateProvider'];
  function routeConfig($stateProvider) {
    // Routes
    $stateProvider
      .state('public', {
        absract: true,
        templateUrl: 'public/public.tpl.html'
      })
      .state('public.home', {
        url: '/home',
        templateUrl: 'public/home/home.tpl.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl',
  /*      resolve: {
          allEvents: ['dbEventService', function (dbEventService) {
            console.log("resoving events...");
            return dbEventService.getEvents();
          }]
        },*/
        data: {
          pageTitle: 'Home page'
        }
      })
      .state('public.event', {
        templateUrl: 'public/home/event.tpl.html',
        controller: 'EventController',
        controllerAs: 'eventCtrl',
        params: {
          id: 0
        },
/*        resolve: {
          event: ['dbEventService', function (dbEventService) {
            console.log("resoving event...");
            return dbEventService.getEvent('1747');
          }]
        },*/
        data: {
          pageTitle: 'Event page'
        }
      })
      .state('public.search', {
        url: '/search',
        templateUrl: 'public/search/search.tpl.html',
        //controller: 'SearchEventController',
        //controllerAs: 'searchEventCtrl'
  /*      resolve: {
          menuCategories: ['MenuService', function (MenuService) {
            return MenuService.getCategories();
          }]
        } */
        data: {
          pageTitle: 'Search page'
        }
      });
  }
  
})();


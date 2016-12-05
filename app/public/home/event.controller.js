(function() {
  'use strict';

  // Define the `phonecatApp` module
  angular.module('public')
  .controller('EventController', EventController);

  EventController.$inject = ['dbEventService', '$stateParams'];
  function EventController(dbEventService, $stateParams) {
    var eventCtrl = this;
    var service = dbEventService;
    
    console.log('in EventController, $stateParams:', $stateParams);
    
    eventCtrl.id = $stateParams.id;
    console.log('in eventController, id:', eventCtrl.id);
    
    eventCtrl.event = function () {
      service.getEvent(eventCtrl.id)
        .then(function (res) {
          console.log('event controller get event:', res.event);
          eventCtrl.newEvent = res.event;
          return res.event;
        })
        .catch(function (message) {
          console.log("error:", message);
          return [];
        });
    };
    
    eventCtrl.event();
  }
})();

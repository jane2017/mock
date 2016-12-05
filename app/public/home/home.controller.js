(function () {
  'use strict';
  
  var STATES = {
    BeginOrStarted: ['Begin', 'Started'],
    pending: ['Pending Notification',
              'Pending Update',
              'Pending Cancellation',
              'Pending Reschedule',
              'Pending Resolution'],
    Notified: ['Notified'],
    Cancelled: ['Cancelled'],
    Rescheduled: ['Rescheduled'],
    Resolved: ['Resolved']
  };

  // Define the `phonecatApp` module
  angular.module('public')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['dbEventService'];
  function HomeController(dbEventService) {
    var homeCtrl = this;
    var service = dbEventService;
    
   homeCtrl.allEvents = [];
   //console.log("response data:", homeCtrl);
    
   homeCtrl.getAll = function () {
     console.log('current all:', homeCtrl.allEvents);
     return homeCtrl.allEvents;
   };
       
   homeCtrl.events = function () {
      console.log('controller called:');
      service.getEvents()
        .then(function (res) {
          console.log('controller get data:', res);
          homeCtrl.allEvents = res.events;
          return homeCtrl.allEvents.events;
        })
        .catch(function (message) {
          console.log("error:", message);
          return [];
        });
    };
    
/*    homeCtrl.event = function (id) {
      service.getEvent(id)
        .then(function (res) {
          console.log('event ctrl get data:', res);
          return res.events;
        })
        .catch(function (message) {
          console.log("error:", message);
          return [];
        });
    };*/
    
    homeCtrl.events();
  }
  
})();



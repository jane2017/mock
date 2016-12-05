(function () {
  "use strict";

  angular.module('public')
   .factory('dbEventService', DbEventService);

  DbEventService.$inject = ['$http', '$q', 'ApiPath'];
  function DbEventService($http, $q, ApiPath) {
    var events = [], service = {};

    var dummy_event1 = {
      eventOid: 1474,
      startDate: 1479146361,
      endDate: 1479148361,
      remindDate: 1479147361,
      description: 'this is a dummy event 1.',
      workBy: 'jane',
      ticketId: 1000,
      urgencyId: 5,
      stateId: 10,
      deviceText: 'border6.dal',
      serviceText: 'datartn-5'
    };

    var dummy_event2 = {
      eventOid: 1474,
      startDate: 1479146361,
      endDate: 1479148361,
      remindDate: 1479147361,
      description: 'this is a dummy event 2.',
      workBy: 'jane',
      ticketId: 1000,
      urgencyId: 5,
      stateId: 10,
      deviceText: 'border6.dal',
      serviceText: 'datartn-5'
    };

    var url = 'http://localhost:3000/api/';
    
    function getRequest(path, data) {
      var deferred = $q.defer();
      var req = {
        url: url + path,
        method: "GET",
        data: data
      };
      
      $http(req)
        .success(function (data, status, header, config) {
          console.log('service got data:', data);
          deferred.resolve(data);
        }).error(function (data, status, header, config) {
          console.log('request failed:' + path);
          console.log(data);
          deferred.reject({
            message: 'FAIL HTTP:' + status
          });
        });
      return deferred.promise;
    }

    service.getEvents = function () {
      console.log('called getEvents');
      return getRequest('events');      
    };

    service.getEvent = function (id) {
/*      var data = {
        id: id
      };*/
      var path = 'event/'+id;
      console.log('called getEvent, path:', path);
      return getRequest(path);      
    };
    
/*    service.getEvent = function (id) {
      var event = {};
      var i = 0;

      for (i = 0; i < events.length; i++) {
        if (events[i].eventOid === id) {
          return events[i];
        }
      }
      console.log('no event found for id ', id);
      return null;
    };*/
    
    return service;

/*    return {
      getEvents: getEvents,
      getEvent: getEvent
    };*/
  }
})();


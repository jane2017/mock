(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://xxx.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  //$httpProvider.interceptors.push('');
}

})();


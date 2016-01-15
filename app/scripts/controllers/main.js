'use strict';

/**
 * @ngdoc function
 * @name sealsofnordigtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sealsofnordigtApp
 */
angular.module('sealsofnordigtApp')
  .controller('MainCtrl', function ($scope, $http) {
    
    // Add seals to scope
    $http.get('data/seals_auto.json')
       .then(function(res){
          $scope.seals = res.data;
          console.log($scope.seals);
       });
  });


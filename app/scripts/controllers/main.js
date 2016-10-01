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

  	$scope.sortType     = 'episode'; // set the default sort type
  	$scope.sortReverse  = true;  // set the default sort order
  	$scope.search   	= '';     // set the default search/filter term
    
    // Add seals to scope
    $http.get('data/seals_auto.json')
       .then(function(res){
          $scope.seals = res.data;
          console.log($scope.seals);
       });
  });


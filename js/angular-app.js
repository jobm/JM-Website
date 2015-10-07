var app = angular.module("myapp",['ui.bootstrap']);

app.controller("appController",function($scope,$modal){

  $scope.open = function() {
    $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'partials/modal.html',
      controller: 'appController',
      size: size,
    });

  }

});

var app = angular.module('angularExample', []);

app.controller('EventsCtrl', ['$scope', function($scope){
  $scope.events = [
    {name: 'E1', event_date: '1/1/1111', description: 'Des 1', place: 'Place 1'},
    {name: 'E2', event_date: '2/2/2222', description: 'Des 2', place: 'Place 2'},
    {name: 'E3', event_date: '1/2/1112', description: 'Des 3', place: 'Place 3'},
    {name: 'E4', event_date: '2/1/1121', description: 'Des 4', place: 'Place 4'},
    {name: 'E5', event_date: '11/1/1221', description: 'Des 5', place: 'Place 5'},
  ];
}]);

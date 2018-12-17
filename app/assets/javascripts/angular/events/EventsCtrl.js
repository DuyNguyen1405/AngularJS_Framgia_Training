app.controller('EventsCtrl', ['$scope', 'Event', function($scope, Event){
  $scope.events = Event.query();

  $scope.addEvent = function(){
    if (!valid()) {
      $scope.error = "Invalid event"
      return false;
    }

    Event.save($scope.event,
      function(response, _headers){
        $scope.events.push(response);
      },
      function(response){
        alert('Error: ' + response.data.error.join('. '));
      }
    );

    $scope.event = {};
  };

  valid = function() {
    return !!$scope.event &&
      !!$scope.event.name && !!$scope.event.event_date &&
      !!$scope.event.description && !!$scope.event.place;
  }
}]);

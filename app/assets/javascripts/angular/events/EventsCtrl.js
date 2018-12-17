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
        alert('Errors: ' + response.data.errors.join('. '));
      }
    );

    $scope.event = {};
  };

  $scope.editing = {};

  $scope.toggleForm = function(event){
    if(event.id === $scope.editing.id){
      return 'form'
    }
    else {
      return 'row'
    }
  };

  $scope.editEvent = function(event){
    $scope.editing = angular.copy(event);
  };

  $scope.updateEvent = function(index){
    Event.update($scope.editing,
      function(response, _headers){
        $scope.events[index] = angular.copy($scope.editing);
        $scope.hideForm();
      },
      function(response){
        alert('Errors: ' + response.data.errors.join('. '));
      }
    );
  };

  $scope.hideForm = function(){
    $scope.editing = {};
  };

  valid = function() {
    return !!$scope.event &&
      !!$scope.event.name && !!$scope.event.event_date &&
      !!$scope.event.description && !!$scope.event.place;
  }
}]);

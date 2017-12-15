var providerApp = angular.module('providerApp', []);
var providersCtrl = providerApp.controller(
  'ProvidersController',
  function ProviderController($scope, $filter) {
    // setup provided data
    $scope.providers = angular.fromJson([
      {
        last_name: 'Harris',
        first_name: 'Mike',
        email_address: 'mharris@updox.com',
        specialty: 'Pediatrics',
        practice_name: 'Harris Pediatrics'
      },
      {
        last_name: 'Wijoyo',
        first_name: 'Bimo',
        email_address: 'bwijoyo@updox.com',
        specialty: 'Podiatry',
        practice_name: 'Wijoyo Podiatry'
      },
      {
        last_name: 'Rose',
        first_name: 'Nate',
        email_address: 'nrose@updox.com',
        specialty: 'Surgery',
        practice_name: 'Rose Cutters'
      },
      {
        last_name: 'Carlson',
        first_name: 'Mike',
        email_address: 'mcarlson@updox.com',
        specialty: 'Orthopedics',
        practice_name: 'Carlson Orthopedics'
      },
      {
        last_name: 'Witting',
        first_name: 'Mike',
        email_address: 'mwitting@updox.com',
        specialty: 'Pediatrics',
        practice_name: 'Witting’s Well Kids Pediatrics'
      },
      {
        last_name: 'Juday',
        first_name: 'Tobin',
        email_address: 'tjuday@updox.com',
        specialty: 'General Medicine',
        practice_name: 'Juday Family Practice'
      }
    ]);

    // set all providers to default unselected
    angular.forEach($scope.providers, function(value) {
      value.selected = false;
    });
    $scope.any_selections = function() {
      var checked = $filter('filter')($scope.providers, { selected: true });
      return checked.length > 0;
    };

    // order by (default to blank, aka no sort)
    $scope.orderProp = '';

    // order by direction_reverse (false=ascending/true=descending)
    $scope.direction_reverse = '';

    // text filter
    $scope.query = '';

    $scope.remove = function() {
      $scope.providers = $filter('filter')($scope.providers, {
        selected: false
      });
    };
  }
);

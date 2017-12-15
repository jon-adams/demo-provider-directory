var expect = chai.expect,
  $injector = angular.injector(['ng', 'providerApp']);

describe('ProvidersController', function() {
  describe('JsonLoadedAndParsed', function() {
    it('should return array', function(done) {
      $injector.invoke(function($controller) {
        var scope = {};
        var ctrl = $controller('ProvidersController', { $scope: scope });

        expect(scope.providers)
          .to.be.an('array', 'should have been an array')
          .that.has.lengthOf(6, 'should have included 6 entries');
      });
      done();
    });

    it('first item should be a dude named Mike', function(done) {
      $injector.invoke(function($controller) {
        var scope = {};
        var ctrl = $controller('ProvidersController', { $scope: scope });

        expect(scope.providers).to.have.lengthOf(6);
        expect(scope.providers[0])
          .to.have.nested.property('first_name')
          .that.equals('Mike');
        done();
      });
    });
  });
});

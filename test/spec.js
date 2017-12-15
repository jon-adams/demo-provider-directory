var expect = chai.expect,
  $injector = angular.injector(['ng', 'providerApp']),
  // in case data changes, lots of tests check against how many items are in the starting data array
  number_of_items_in_hard_coded_array = 6;

describe('ProvidersController', function() {
  var scope, ctrl;

  beforeEach(function(done) {
    // get Angular controller and scope, put it in a parent var
    // note: this does mean tests have to run synchronously, but this is JavaScript so no problem there
    $injector.invoke(function($controller) {
      scope = {};
      ctrl = $controller('ProvidersController', { $scope: scope });
      done();
    });
  });

  describe('JsonLoadedAndParsed', function() {
    it('should return array', function() {
      expect(scope.providers)
        .to.be.an('array', 'should have been an array')
        .that.has.lengthOf(
          number_of_items_in_hard_coded_array,
          'should have included ' +
            number_of_items_in_hard_coded_array +
            'entries'
        );
    });

    it('first item should be a dude named Mike', function() {
      expect(scope.providers).to.have.lengthOf(
        number_of_items_in_hard_coded_array
      );
      expect(scope.providers[0])
        .to.have.nested.property('first_name')
        .that.equals('Mike');
    });
  });

  describe('Providers', function() {
    it('should not be selected to start', function() {
      expect(scope.providers)
        .to.be.an('array', 'should have been an array')
        .that.has.lengthOf(number_of_items_in_hard_coded_array);
    });

    it('should have no selections yet', function() {
      angular.forEach(scope.providers, function(provider) {
        expect(provider).to.have.property('selected');
        expect(provider.selected).to.be.false;
      });
    });

    it('should report no selections too', function() {
      expect(scope.any_selections()).to.be.false;
    });

    it('should let items be added', function() {
      expect(scope.providers).to.have.a.lengthOf(
        number_of_items_in_hard_coded_array
      );

      // add one for deletion and remove it
      scope.insert({
        first_name: 'Hammy',
        last_name: 'McNamerface',
        email_address: 'ham@gmail.not.com',
        practice_name: 'Tester'
      });

      expect(scope.providers).to.have.a.lengthOf(
        number_of_items_in_hard_coded_array + 1,
        'should have included one more entry after adding one'
      );
    });

    it('should let items be removed', function() {
      expect(scope.providers).to.have.a.lengthOf(
        number_of_items_in_hard_coded_array
      );

      // make sure there is at least one to remove anyway
      expect(scope.providers.length).to.be.at.least(
        1,
        'removal test requires at least one item in the starting data array'
      );

      // mark one for deletion and remove it
      scope.providers[0].selected = true;
      scope.remove();

      expect(scope.providers).to.have.a.lengthOf(
        number_of_items_in_hard_coded_array - 1,
        'should have included one less entry after removing one'
      );
    });
  });

  describe('Sorting & filtering', function() {
    it('should be off, aka no sort', function() {
      expect(scope.orderProp).to.be.equal(
        '',
        'sort should start blank, aka no sort'
      );
    });

    it('default sort direction should be natural, aka evaluate to false', function() {
      expect(scope.direction_reverse).to.be.equal(
        '',
        'default sort direction should be ascending'
      );
    });

    it('default search should be blank', function() {
      expect(scope.query).to.be.equal(
        '',
        'default search should have been blank'
      );
    });

    // would normally really run these verifications with E2E AngularJS, but setting all that up in browser without node not worth the time effort for this demo; sorry :(  — but it would look like this:
    it.skip('should be possible to control provider order via the drop-down — skipping test runner dependency setup for this demo, sorry; this should report "pending": ', function() {
      var queryField = angular.element(by.model('query')),
        orderSelect = angular.element(by.model('orderProp')),
        lastNameOption = orderSelect.element(
          by.css('option[value="last_name"]')
        ),
        providerNameColumn = element.all(
          by.repeater('provider in providers').column('provider.first_name')
        );

      function getProviderFirstNames() {
        return providerNameColumn.map(function(elem) {
          return elem.getText();
        });
      }

      // simulate entering a filter
      queryField.sendKeys('Mike');

      expect(getProviderFirstNames()).to.have.lengthOf(
        3,
        'filtering by Mike should have returned 3 providers'
      );

      // now sort by last name
      lastNameOption.click();

      expect(getProviderFirstNames()[0]).to.equal(
        'Carlson',
        'filtering by Mike and sorting by last name should have put Mike Carlson first'
      );
    });
  });
});

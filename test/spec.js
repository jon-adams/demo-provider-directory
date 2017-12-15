var expect = chai.expect;
describe('Data', function() {
    describe('JsonLoadedAndParsed', function() {
        it('should return array', function() {
            expect(providerData).to.be.an("array", "should have been an array")
                .that.has.lengthOf(6, "should have included 6 entries");
        });
        it('first item should be a dude named Mike', function() {
            expect(providerData).to.have.lengthOf(6);
            expect(providerData[0]).to.have.nested.property("first_name")
                .that.equals("Mike");
        });
    });
});
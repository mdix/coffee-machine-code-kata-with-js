describe('a mediator', function() {
    var mediator;

    beforeEach(function() {
        mediator = mdix.Mediator();
    });

    it('should exist', function() {
        expect(typeof mediator).toBe('object');
    });

    it('should be a singleton', function() {
        expect(mediator).toEqual(new mdix.Mediator());
    });
});
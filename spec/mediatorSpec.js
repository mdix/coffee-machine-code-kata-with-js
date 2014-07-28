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

    it('should have a mediatorjs property', function() {
        expect(mediator.mediatorjs).toBeTruthy();
    });

    it('mediatorjs property should be an instance of mediator.js (global var: Mediator)', function() {
        expect(mediator.mediatorjs instanceof Mediator).toBeTruthy();
    });

    it('mediatorjs property should always be the same instance of mediator.js', function() {
        expect(mediator.mediatorjs).toEqual(new mdix.Mediator().mediatorjs);
    });
});
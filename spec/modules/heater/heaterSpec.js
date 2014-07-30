describe('the heater module', function() {
    var mediator,
        config,
        heater,
        callbackSpy;

    beforeEach(function() {
        mediator = new mdix.Mediator();
        config = mdix.heaterConfigSpec;
        heater = new mdix.Heater(config, mediator);
        callbackSpy = jasmine.createSpy('callback');
    });

    it('exists', function() {
        expect(typeof heater).toBe('object');
    });

    it('should be able to request water from the water reservoire');

    it('should bail out if water reservoire can not deliver (water reservoire should do the error reporting)');

    it('should emit a Heater:heating when heating starts', function() {
        mediator.subscribe('Heater:heating', callbackSpy);
        heater.heat();
        expect(callbackSpy).toHaveBeenCalled();
    });

    it('should take mdix.heaterConfigSpec.duration to heat ' +
       'and finish with emitting Heater:imFuckingHot', function(done) {
        mediator.subscribe('Heater:imFuckingHot', callbackSpy);
        heater.heat();

        setTimeout(function() {
            expect(callbackSpy).not.toHaveBeenCalled();
        }, config.duration - 1);

        setTimeout(function() {
            expect(callbackSpy).toHaveBeenCalled();
            done();
        }, config.duration);
    });
});
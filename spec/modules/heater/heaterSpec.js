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

    describe('should be able to request water from the water reservoire', function() {
        it('by emitting needWater', function() {
            mediator.subscribe('needWater', callbackSpy);
            heater.heat();
            expect(callbackSpy).toHaveBeenCalled();
        });

        it('with the units as data', function() {
            mediator.subscribe('needWater', callbackSpy);
            heater.heat();
            expect(callbackSpy.calls.mostRecent().args[0].units).toBe(config.amount);
        });
    });

    it('should not start heating if there is not enough water', function() {
        mediator.subscribe('Heater:heating', callbackSpy);
        heater.heat();
        // no 'hereWater' emitted
        expect(callbackSpy).not.toHaveBeenCalled();
    });

    it('should emit a Heater:heating when heating starts (and there is enough water)', function() {
        mediator.subscribe('Heater:heating', callbackSpy);
        heater.heat();
        mediator.publish('hereWater');
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
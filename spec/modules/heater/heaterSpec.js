describe('the heater module', function() {
    var heater;

    beforeEach(function() {
        heater = new mdix.Heater();
    });

    it('exists', function() {
        expect(typeof heater).toBe('object');
    });

    it('should be able to request water from the water reservoire');

    it('should bail out if water reservoire can not deliver (water reservoire should do the error reporting)');

    it('should emit a Heater:heating when heating starts')

    it('should take 20 seconds to heat and finish with emitting Heater:imFuckingHot');
});
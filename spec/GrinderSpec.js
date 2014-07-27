describe('the grinder module', function() {
    var grinder,
        callbackSpy;

    beforeEach(function() {
        grinder = new ns.Grinder(ns.grinderConfigSpec);
        callbackSpy = jasmine.createSpy('callback');
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    it('should exist', function() {
        expect(typeof grinder).toBe('object');
    });

    it('should expose a grind method', function() {
        expect(typeof grinder.grind).toBe('function');
    });

    it('should call the callback after a timeout that is defined via grinderConfig.coarsenessDurations.strong'
        + ' if strong coffee is requested', function(done) {
        grinder.grind('strong', callbackSpy);

        setTimeout(function() {
            expect(callbackSpy).not.toHaveBeenCalled();
        }, ns.grinderConfigSpec.coarsenessDurations.strong - 1);

        setTimeout(function() {
            expect(callbackSpy).toHaveBeenCalled();
            done();
        }, ns.grinderConfigSpec.coarsenessDurations.strong);
    });

    it('should call the callback after a timeout that is defined via grinderConfig.coarsenessDurations.normal'
        + ' if normal coffee is requested', function(done) {
        grinder.grind('normal', callbackSpy);

        setTimeout(function() {
            expect(callbackSpy).not.toHaveBeenCalled();
        }, ns.grinderConfigSpec.coarsenessDurations.normal - 1);

        setTimeout(function() {
            expect(callbackSpy).toHaveBeenCalled();
            done();
        }, ns.grinderConfigSpec.coarsenessDurations.normal);
    });

    it('should call the callback after a timeout that is defined via grinderConfig.coarsenessDurations.mild'
        + ' if mild coffee is requested', function(done) {
        grinder.grind('mild', callbackSpy);

        setTimeout(function() {
            expect(callbackSpy).not.toHaveBeenCalled();
        }, ns.grinderConfigSpec.coarsenessDurations.mild - 1);

        setTimeout(function() {
            expect(callbackSpy).toHaveBeenCalled();
            done();
        }, ns.grinderConfigSpec.coarsenessDurations.mild);
    });

    it('should throw an exception if coarseness does not exist', function() {
        expect(function() { grinder.grind('tee', callbackSpy) }).toThrow(new Error('unknown coarseness'));
    });

    it('should throw an exception if no callback given', function() {
        expect(function() { grinder.grind('tee', null) }).toThrow(new Error('missing callback'));
    });
});
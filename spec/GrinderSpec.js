describe('the grinder module', function() {
    var grinder,
        callbackSpy;

    beforeEach(function() {
        grinder = new Grinder();
        callbackSpy = jasmine.createSpy('callback');
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    it('should exist', function() {
        expect(typeof grinder).toBe('object');
    });

    it('should expose a grind method', function() {
        expect(typeof grinder.grind).toBe('function');
    });

    it('should call the callback after 7 seconds if strong coffee is requested', function(done) {
        grinder.grind('strong', callbackSpy);

        setTimeout(function() {
            expect(callbackSpy).not.toHaveBeenCalled();
        }, 6999);

        setTimeout(function() {
            expect(callbackSpy).toHaveBeenCalled();
            done();
        }, 7000);
    });

    it('should call the callback after 5 seconds if normal coffee is requested', function(done) {
        grinder.grind('normal', callbackSpy);

        setTimeout(function() {
            expect(callbackSpy).not.toHaveBeenCalled();
        }, 4999);

        setTimeout(function() {
            expect(callbackSpy).toHaveBeenCalled();
            done();
        }, 5000);
    });

    it('should call the callback after 3 seconds if mild coffee is requested', function(done) {
        grinder.grind('mild', callbackSpy);

        setTimeout(function() {
            expect(callbackSpy).not.toHaveBeenCalled();
        }, 2999);

        setTimeout(function() {
            expect(callbackSpy).toHaveBeenCalled();
            done();
        }, 3000);
    });
});
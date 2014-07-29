describe('the water reservoire module', function() {
    var mediator,
        config,
        reservoire,
        callbackSpy;

    beforeEach(function() {
        mediator    = new mdix.Mediator();
        config      = mdix.waterReservoireConfigSpec;
        reservoire  = new mdix.waterReservoire(config, mediator);
        callbackSpy = jasmine.createSpy('callback');
    });

    it('should exist', function() {
        expect(typeof reservoire).toBe('object');
    });

    it('should report the current filling level', function() {
        expect(reservoire.currentFillingLevel()).toBe(0);
    });

    it('should refill to waterReservoireConfig.capacity when refill is called', function() {
        reservoire.refill();

        expect(reservoire.currentFillingLevel()).toBe(config.capacity);
    });

    it('should emit WaterReservoire:refilled on refill', function() {
        mediator.subscribe('WaterReservoire:refilled', callbackSpy);
        reservoire.refill();
        expect(callbackSpy).toHaveBeenCalled();
    });

    it('should throw an error if insufficient water for next operation', function() {
        reservoire.refill();
        expect(function() { reservoire.getUnits(mdix.waterReservoireConfigSpec.capacity * 2) })
            .toThrow(new Error('not enough beans'));
    });

    it('should not throw an error if sufficient water for next operation', function() {
        reservoire.refill();
        expect(function() { reservoire.getUnits(mdix.waterReservoireConfigSpec.capacity / 2) })
            .not.toThrow();
    });

    it('should substract the requested units of water from the currentFillingLevel', function() {
        reservoire.refill();
        expect(reservoire.getUnits(150).currentFillingLevel())
            .toBe(mdix.waterReservoireConfigSpec.capacity - 150);
        expect(reservoire.getUnits(300).currentFillingLevel())
            .toBe(mdix.waterReservoireConfigSpec.capacity - 150 - 300);
    });

    describe('should be chainable:', function() {
        it('getUnits()', function() {
            expect(reservoire.getUnits(0)).toBe(reservoire);
        });

        it('refill()', function() {
            expect(reservoire.refill()).toBe(reservoire);
        });
    });
});
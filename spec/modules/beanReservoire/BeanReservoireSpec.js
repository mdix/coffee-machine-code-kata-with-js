describe('the bean reservoire module', function() {
    var mediator,
        config,
        reservoire,
        callbackSpy;

    beforeEach(function() {
        mediator    = new mdix.Mediator();
        config      = mdix.beanReservoireConfigSpec;
        reservoire  = new mdix.BeanReservoire(config, mediator);
        callbackSpy = jasmine.createSpy('callback');
    });

    it('should exist', function() {
        expect(typeof reservoire).toBe('object');
    });

    it('should initially be empty', function() {
        expect(reservoire.currentFillingLevel()).toBe(0);
    });

    it('should refill to beanReservoireConfig.capacity when refill is called', function() {
        expect(reservoire.refill().currentFillingLevel()).toBe(mdix.beanReservoireConfigSpec.capacity);
    });

    it('should emit BeanReservoire:refilled on refill', function() {
        mediator.subscribe('BeanReservoire:refilled', callbackSpy);
        reservoire.refill();
        expect(callbackSpy).toHaveBeenCalled();
    });

    it('should throw an error if insufficient beans for next operation', function() {
        reservoire.refill();
        expect(function() { reservoire.getUnits(mdix.beanReservoireConfigSpec.capacity * 2) })
            .toThrow(new Error('not enough beans'));
    });

    it('should not throw an error if sufficient beans for next operation', function() {
        reservoire.refill();
        expect(function() { reservoire.getUnits(mdix.beanReservoireConfigSpec.capacity / 2) })
            .not.toThrow();
    });

    it('should substract the requested units of beans from the currentFillingLevel', function() {
        reservoire.refill();
        expect(reservoire.getUnits(20).currentFillingLevel())
            .toBe(mdix.beanReservoireConfigSpec.capacity - 20);
        expect(reservoire.getUnits(11).currentFillingLevel())
            .toBe(mdix.beanReservoireConfigSpec.capacity - 20 - 11);
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
describe('the bean reservoire module', function() {
    var reservoire;

    beforeEach(function() {
        reservoire = new mdix.BeanReservoire(mdix.beanReservoireConfigSpec);
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
});
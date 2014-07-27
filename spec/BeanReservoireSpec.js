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
        expect(reservoire.refill().currentFillingLevel()).toBe(500);
    });
});
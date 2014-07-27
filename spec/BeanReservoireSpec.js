describe('the bean reservoire module', function() {
    var reservoire;

    beforeEach(function() {
        reservoire = new mdix.BeanReservoire();
    });

    it('should exist', function() {
        expect(typeof reservoire).toBe('object');
    });
});
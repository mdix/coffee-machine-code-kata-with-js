var mdix = mdix || {};

mdix.BeanReservoire = function(beanReservoireConfig) {
    var fillingLevel = 0;

    this.getUnits = function(units) {
        if (units > fillingLevel) {
            throw new Error('not enough beans');
        }

        fillingLevel -= units;

        return this;
    };

    this.currentFillingLevel = function() {
        return fillingLevel;
    };

    this.refill = function() {
        fillingLevel = beanReservoireConfig.capacity;

        return this;
    };
};
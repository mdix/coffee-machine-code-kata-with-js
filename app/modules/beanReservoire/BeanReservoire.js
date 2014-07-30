var mdix = mdix || {};

//TODO: Remove duplication (almost the same as mdix.WaterReservoire)
mdix.BeanReservoire = function(beanReservoireConfig, mediator) {
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
        mediator.publish('BeanReservoire:refilled');

        return this;
    };
};
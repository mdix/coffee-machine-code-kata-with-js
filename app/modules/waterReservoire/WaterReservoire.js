var mdix = mdix || {};

//TODO: Remove duplication (almost the same as mdix.BeanReservoire)
mdix.waterReservoire = function(waterReservoireConfig, mediator) {
    var fillingLevel = 0;
    var self = this;

    (function() {
        mediator.subscribe('requestWater', provideWater);
    })();

    function provideWater() {
        mediator.publish('provideWater', {units: fillingLevel, provider: self});
    }

    this.getUnits = function(units) {
        if (units > fillingLevel) {
            throw new Error('not enough water');
        }

        fillingLevel -= units;

        return this;
    };

    this.currentFillingLevel = function() {
        return fillingLevel;
    };

    this.refill = function() {
        fillingLevel = waterReservoireConfig.capacity;
        mediator.publish('WaterReservoire:refilled');

        return this;
    };
};
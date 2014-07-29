var mdix = mdix || {};

mdix.waterReservoire = function(waterReservoireConfig, mediator) {
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
        fillingLevel = waterReservoireConfig.capacity;
        mediator.publish('WaterReservoire:refilled');
    }
};
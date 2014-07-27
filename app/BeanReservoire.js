var mdix = mdix || {};

mdix.BeanReservoire = function(beanReservoireConfig) {
    var fillingLevel = 0;

    //TODO: remove x beans depending on what coffee (strong, normal, mild)

    this.currentFillingLevel = function() {
        return fillingLevel;
    };

    this.refill = function() {
        fillingLevel = beanReservoireConfig.capacity;
        return this;
    };
};
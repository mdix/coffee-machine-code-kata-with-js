var mdix = mdix || {};

mdix.BeanReservoire = function(beanReservoireConfig) {
    var fillingLevel = 0;


    this.currentFillingLevel = function() {
        return fillingLevel;
    };

    this.refill = function() {
        fillingLevel = beanReservoireConfig.capacity;
        return this;
    };
};
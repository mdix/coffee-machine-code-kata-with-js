var mdix = mdix || {};

mdix.Heater = function(heaterConfig, mediator) {
    var getWater = function() {
        mediator.subscribe('hereWater', heat);
        mediator.publish('needWater', {units: heaterConfig.amount});
    };

    var heat = function() {
        mediator.publish('Heater:heating');

        setTimeout(function() {
            mediator.publish('Heater:imFuckingHot');
        }, heaterConfig.duration);
    };

    this.heat = function() {
        getWater();
    };
};
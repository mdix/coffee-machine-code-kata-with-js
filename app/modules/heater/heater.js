var mdix = mdix || {};

mdix.Heater = function(heaterConfig, mediator) {
    this.heat = function() {
        mediator.publish('Heater:heating');

        setTimeout(function() {
            mediator.publish('Heater:imFuckingHot');
        }, heaterConfig.duration);
    };
};
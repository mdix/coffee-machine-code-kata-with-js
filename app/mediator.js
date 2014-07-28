var mdix = mdix || {};

mdix.Mediator = function() {
    var instance = arguments.callee._singletonInstance;

    if (instance) {
        return instance;
    }
    arguments.callee._singletonInstance = new Mediator();

    return this;
};
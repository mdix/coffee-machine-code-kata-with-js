var mdix = mdix || {};

mdix.Mediator = function() {
    var instance = arguments.callee._singletonInstance;

    if (instance) {
        return instance;
    }
    arguments.callee._singletonInstance = this;

    this.mediatorjs = new Mediator();

    return this;
};
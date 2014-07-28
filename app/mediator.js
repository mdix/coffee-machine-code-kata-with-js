var mdix = mdix || {};

mdix.Mediator = function() {
    if (arguments.callee._singletonInstance) {
        return arguments.callee._singletonInstance;
    }
    arguments.callee._singletonInstance = this;

    return this;
};
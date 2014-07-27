var Grinder = function(grinderConfig) {
    var coarseness,
        callback;

    function grind() {
        if (noCallbackGiven()) { throw new Error('missing callback'); }
        if (unknownCoarseness()) { throw new Error('unknown coarseness'); }

        setTimeout(function() {
            callback();
        }, grinderConfig.coarsenessDurations[coarseness]);
    }

    function noCallbackGiven() {
        return typeof callback !== 'function'
    }

    function unknownCoarseness() {
        return !grinderConfig.coarsenessDurations.hasOwnProperty(coarseness)
    }


    this.grind = function(_coarseness, _callback) {
        coarseness = _coarseness;
        callback = _callback;

        grind();
    };
};
var Grinder = function(grinderConfig) {
    function grind(coarseness, callback) {
        if (typeof callback !== 'function') {
            throw new Error('missing callback');
        }

        if (!grinderConfig.coarsenessDurations.hasOwnProperty(coarseness)) {
            throw new Error('unknown coarseness');
        }

        window.setTimeout(function() {
            callback();
        }, grinderConfig.coarsenessDurations[coarseness]);
    }

    this.grind = function(coarseness, callback) {
        grind(coarseness, callback);
    };
};
var Grinder = function(grinderConfig) {
    function grind(coarseness, callback) {

        if (coarseness === 'strong') {
            window.setTimeout(function() {
                callback();
            }, grinderConfig.coarsenessDurations.strong);
        }

        if (coarseness === 'normal') {
            window.setTimeout(function() {
                callback();
            }, grinderConfig.coarsenessDurations.normal);
        }

        if (coarseness === 'mild') {
            window.setTimeout(function() {
                callback();
            }, grinderConfig.coarsenessDurations.mild);
        }
    }

    this.grind = function(coarseness, callback) {
        grind(coarseness, callback);
    };
};
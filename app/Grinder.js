var Grinder = function() {

    function grind(coarseness, callback) {
        if (coarseness === 'strong') {
            window.setTimeout(function() {
                callback();
            }, 7000);
        }

        if (coarseness === 'normal') {
            window.setTimeout(function() {
                callback();
            }, 5000);
        }

        if (coarseness === 'mild') {
            window.setTimeout(function() {
                callback();
            }, 3000);
        }
    }

    this.grind = function(coarseness, callback) {
        grind(coarseness, callback);
    };
};
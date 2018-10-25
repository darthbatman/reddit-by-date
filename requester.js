var https = require('https');

/**
 * Forwarding function for Node's HTTPs Request function.
 * @param {Object} options 
 * @param {Function} callback 
 */
function request(options, callback) {
    var req = https.request(options, function(response) {
        var data = "";
        response.on('data', function(chunk) {
            data += chunk;
        });
        response.on('end', function() {
            return callback(null, data);
        });
    });

    req.on('error', function(error) { callback(error); });
    req.end();
}

module.exports = request;
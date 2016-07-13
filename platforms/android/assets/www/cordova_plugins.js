cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.velardo.cordova-plugin-googlefit/www/GoogleFit.js",
        "id": "org.velardo.cordova-plugin-googlefit.GoogleFit",
        "clobbers": [
            "window.plugins.googlefit"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "org.velardo.cordova-plugin-googlefit": "0.3.0"
};
// BOTTOM OF METADATA
});
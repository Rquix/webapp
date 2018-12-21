/**
 * Router Module
 */

define(function () {

    var internals = {}; //internals config and state
    var externals = {}; //externals api

    internals.routes = {
        index: {
            hash: '#index',
            controller: 'index-controller'
        },

        characterList: {
            hash: '#characterlist',
            controller: 'character-list'
        }
    }

    internals.currentHash = ''; // required to track hash changes

    /**
     * Start the routing process
     */
    externals.start = function () {

        window.location.hash = internals.routes.index.hash;
        setInterval(hashCheck, 500);
    };


    function hashCheck() {

        //nothing to do if route hasn't changed
        if (window.location.hash === internals.currentHash) {

            return;
        }

        //find the current route name
        var routeName = Object.keys(internals.routes).find(function (name) {

            return window.location.hash === internals.routes[name].hash;
        })

        //load default route if we get invalid routeName
        if (!routeName) {

            loadDefaultRoute();
            return;
        }

        //load route if valid
        loadController(internals.routes[routeName].controller);
    }

    function loadController(controller) {
        internals.currentHash = window.location.hash;
        require(['controllers/' + controller], function (controller) {
            controller.start();
        });
    };

    function loadDefaultRoute() {
        window.location.hash = internals.routes.index.hash;
        loadController(internals.routes.index.controller);
     };


    return externals;


});
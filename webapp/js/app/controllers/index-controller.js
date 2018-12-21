define(['services/user-service', 'views/index-view'], function (userService, indexView) {

    var internals = {};
    var externals = {};


    externals.start = function () {

        indexView.render('Still working as intended.\nGood job ' + userService.getName() + '!');
        bindEvents();
    }

    function bindEvents() {

        indexView.bind('buttonPush', buttonHandler);
    }

    function buttonHandler(value) {

        var search = $("#search");
        console.log('this button: ', value, ' was pressed.', '\nThis value: ', search.val(), ' was written.');
    }

    return externals;

})
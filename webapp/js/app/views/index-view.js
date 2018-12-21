define(function () {

    var internals = {};
    var externals = {};

    internals.elements = {};

    internals.events = {

        buttonPush: bindButtonPushHandler
    };

    internals.handlers = {};

    externals.bind = function (event, handler) {

        internals.events[event](handler);
    }

    externals.render = function (data) {

        internals.elements.app = $('#app');
        internals.elements.title = $('#title')
        internals.elements.app.append(renderName(data));
        internals.elements.title.append(renderTitle(data));

    }

    function bindButtonPushHandler(handler) {

        $("#searchbtn").click(function (event) {
            handler(event.target.id);
        })
    }

    function renderName(name) {

        return '<div class="input-group">' +
            '<input id="search"type="text" class="form-control" placeholder="Character name here..">' +
            '<div class="input-group-append">' +
            '<button id="searchbtn" class="btn btn-outline-light">Search</button>' +
            '</div>' +
            '</div>';
    }
    function renderTitle(title) {

        return '<h1>Welcome, choose a Marvel character: </h1>';
    }


    return externals;

});


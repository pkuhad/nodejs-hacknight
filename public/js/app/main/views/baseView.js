define(['backbone'], function (Backbone) {
    'use strict';
    var view = Backbone.View.extend({
        initialize: function (options) {
            alert("Hello World from backbone");
        },
    });

    return view;
});

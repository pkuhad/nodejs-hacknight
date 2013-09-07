define(['backbone'], function (Backbone) {
    'use strict';
    var view = Backbone.View.extend({
        initialize: function (options) {
        },
        
        render: function(number){
            this.$el.html('Rendered with '+number);
        }
    });

    return view;
});
define(['backbone'], function (Backbone) {
    'use strict';
    var view = Backbone.View.extend({
        initialize: function (options) {
            _.bindAll(this, 'handleNumber');
            this.socket = io.connect('http://localhost');
            this.socket.on('number', this.handleNumber);
        },

        handleNumber: function(data){
            console.log(data);  
            console.log(this);
            this.$el.html('<h1>'+data.number+'</h1>');
        }
    });

    return view;
});

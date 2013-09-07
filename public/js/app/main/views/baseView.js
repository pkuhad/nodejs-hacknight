define(['backbone', 'views/graphView'], function (Backbone, GraphView) {
    'use strict';
    var view = Backbone.View.extend({
        initialize: function (options) {
            _.bindAll(this, 'render');
            this.socket = io.connect('http://localhost');
            this.socket.on('number', this.render);

            this.graph = new GraphView({el: this.$el.find('.graph-view')});
        },

        render: function(data){
            this.$el.find('.number-counter').html('<h1>'+data.number+'</h1>');
            this.graph.render(data.number);
        }
    });

    return view;
});

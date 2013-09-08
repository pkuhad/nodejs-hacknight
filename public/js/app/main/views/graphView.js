define(['backbone', 'd3'], function (Backbone, d3) {
    'use strict';
    var view = Backbone.View.extend({
        initialize: function (options) {
        },
        
        render: function(number){
            var dataset = [number];
            this.$el.html('');  
            d3.select(this.el).selectAll("div")
            .data(dataset)
            .enter()
            .append("div")
            .attr("class", "bar")
            .style("width", function(d){
                return d + "px";
            });
            return this.$el.html();
        }
    });

    return view;
});
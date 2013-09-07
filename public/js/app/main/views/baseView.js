define(['backbone', 'views/graphView'], function (Backbone, GraphView) {
    'use strict';
    var view = Backbone.View.extend({
        initialize: function (options) {
            _.bindAll(this, 'render', 'renderTweet');
            this.socket = io.connect('http://localhost');
            this.socket.on('number', this.render);
            this.socket.on('tweet', this.renderTweet);
            this.graph = new GraphView({el: this.$el.find('.graph-view')});

            this.$number_counter = this.$el.find('.number-counter');
            this.$tweet_board = this.$el.find('.tweet-board');
        },

        render: function(data){
            this.$number_counter.html('<h1>'+data.number+'</h1>');
            this.graph.render(data.number);
        },

        renderTweet: function(data){
            var that = this;
            this.$tweet_board.html('');
            console.log(data.tweet); 
            _.each(data.tweet.statuses, function(tweet, index){
                that.$tweet_board.append('<div class="tweet">'+tweet.text+'<b> '+tweet.user.followers_count+'</b></div>');
                console.log(tweet);
                console.log(tweet.text);
            });
        }
    });

    return view;
});

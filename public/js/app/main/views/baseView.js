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
            _.each(data.tweet.statuses, function(tweet, index){
                that.$tweet_board.append('<div class="tweet"><img class="user-dp" src="'+ tweet.user.profile_image_url
                    +'"/> '+ tweet.text+' - <b>'+tweet.user.name+'</b> <div class="bar-container"></div><b> '
                    + tweet.user.followers_count+'</b></div>');
                var $bar = that.$tweet_board.find('.tweet').last().find('.bar-container');
                var $graph = new GraphView({el: $bar});
                $bar.html($graph.render(tweet.user.followers_count));
            });
        }
    });

    return view;
});

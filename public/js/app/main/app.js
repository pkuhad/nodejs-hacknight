define(['views/baseView'], function (BaseView){
    'use strict';
    var initialize = function () {
        $('.start-backbone').each(function (index, value) {
			var view = new BaseView({ el: value });
        });
    };
    return {
        initialize: initialize
    };
});
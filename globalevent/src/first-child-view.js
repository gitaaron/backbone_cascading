define(['backbone', 'second-child-view'], function(Backbone, SecondChildView) {

    var secondChildView;

    var FirstChildView = Backbone.View.extend({

        initialize:function() {
            console.log('init first child view');
            secondChildView = new SecondChildView();
        },

        render:function() {
            this.$el.html('first-child<div id="second-child" ></div>');
            this.$('#second-child').append(secondChildView.render().$el);
            return this;
        }
    });

    return FirstChildView;
});

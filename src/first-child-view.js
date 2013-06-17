define(['backbone', 'second-child-view', 'jquery.livequery'], function(Backbone, SecondChildView) {

    var secondChildView;   

    var FirstChildView = Backbone.View.extend({

        initialize:function() {
            console.log('init first child view');
            secondChildView = new SecondChildView();
        },
        render:function() {

            this.$el.html('first-child<div id="second-child" data="I am the second descendant in a long family line"></div>');
            $('#second-child').livequery(function() {
                console.log('livequery second child : ' + $('#second-child').attr('data'));
            });
            this.$('#second-child').append(secondChildView.render().$el);
            console.log('after append second child : ' + $('#second-child').attr('data'));

            return this;
        }
    });

    return FirstChildView;
});

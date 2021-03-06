define(['backbone', 'jquery.livequery'], function(Bacbone) {
    var SecondChildView = Backbone.View.extend({
        render:function() {
            $('#second-child').livequery(function() {
                console.log('livequery second child : ' + $('#second-child-data').attr('data'));
            });

            this.$el.html('<div id="second-child-data" data="I am the second descendant in a long family line">second-child</div>');
            console.log('end of render second child : ' + $('#second-child-data').attr('data'));
            return this;
        }
        
    });
    return SecondChildView;
});

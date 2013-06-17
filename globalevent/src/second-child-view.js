define(['backbone'], function(Bacbone) {
    var SecondChildView = Backbone.View.extend({
        render:function() {
            $(document).bind('some_event', function() {
                console.log('some global event second child : ' + $('#second-child-data').attr('data'));
            });

            this.$el.html('<div id="second-child-data" data="I am the second descendant in a long family line">second-child</div>');
            console.log('end of render second child : ' + $('#second-child-data').attr('data'));
            return this;
        }
        
    });
    return SecondChildView;
});

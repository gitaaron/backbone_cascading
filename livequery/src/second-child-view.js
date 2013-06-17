define(['backbone'], function(Bacbone) {
    var SecondChildView = Backbone.View.extend({
        render:function() {
            this.$el.html('second-child');
            this.$el.bind('ready', function() {
                alert('ready');
            });
            return this;
        }
        
    });
    return SecondChildView;
});

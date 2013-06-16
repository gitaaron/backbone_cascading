define(['backbone'], function(Backbone) {
    
    var FirstChildView = Backbone.View.extend({
        initialize:function() {
            console.log('init first child view');
        },
        render:function() {
            this.$el.html('first-child');
            return this;
        }
    });

    return FirstChildView;
});

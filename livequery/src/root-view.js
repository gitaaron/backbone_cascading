define(['backbone', 'first-child-view'], function(Backbone, FirstChildView) {
    var firstChildView;
    var RootView = Backbone.View.extend({
        initialize:function() {
            firstChildView = new FirstChildView();
        },
        render:function() {
            this.$el.html('<div id="root">root<div id="first-child"></div></div>');
            this.$('#first-child').append(firstChildView.render().$el);
            return this;
        }
    });
    return RootView; 
});

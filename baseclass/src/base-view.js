define(['backbone'], function(Backbone) {

    var BaseView = Backbone.View.extend({
        render:function(parentView) {
            parentView.$el.append(this.doRender());
        }
    });

});

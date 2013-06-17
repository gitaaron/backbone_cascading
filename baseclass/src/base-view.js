define(['backbone'], function(Backbone) {
   
    var BaseView = Backbone.View.extend({

        render:function(parentView, parentElem) {
            this.children = [];
            var child = this.doRender().$el
            parentElem.append(child);
            if(parentView) parentView.children.push(this);

            return this;
        },

        postRender:function() {
            var self = this;
            this.children.forEach(function(child) {
                child.postRender();

            });
        }
    });

    return BaseView;

});

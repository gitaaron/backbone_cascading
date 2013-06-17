define(['base-view', 'first-child-view'], function(BaseView, FirstChildView) {
    var firstChildView;
    var RootView = BaseView.extend({
        initialize:function() {
            firstChildView = new FirstChildView();
        },
        doRender:function() {
            this.$el.html('<div id="root">root<div id="first-child"></div></div>');
            firstChildView.render(this, this.$el);
            return this;
        },
        postRender:function() {
            this.children.forEach(function(k){
                k.postRender()
            })
        }
    });
    return RootView; 
});

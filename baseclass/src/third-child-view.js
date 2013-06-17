define(['base-view'], function(BaseView) {
    var ThirdChildView = BaseView.extend({
        doRender:function() {
            this.$el.html('<div id="third-child-data" data="I am the third descendant in a long family line">third-child</div>');
            console.log('end of render third child : ' + $('#third-child-data').attr('data'));
            return this;
        },

        postRender:function() {
            console.log('post render third child : ' + $('#third-child-data').attr('data'));
        }

        
    });
    return ThirdChildView;
});

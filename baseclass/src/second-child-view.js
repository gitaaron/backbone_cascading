define(['base-view'], function(BaseView) {
    var SecondChildView = BaseView.extend({
        doRender:function() {
            this.$el.html('<div id="second-child-data" data="I am the second descendant in a long family line">second-child</div>');
            console.log('end of render second child : ' + $('#second-child-data').attr('data'));
            return this;
        },

        postRender:function() {
            console.log('post render second child : ' + $('#second-child-data').attr('data'));
        }

        
    });
    return SecondChildView;
});

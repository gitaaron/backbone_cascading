define(['base-view', 'second-child-view', 'third-child-view'], function(BaseView, SecondChildView, ThirdChildView) {

    var secondChildView;   

    var FirstChildView = BaseView.extend({
        initialize:function() {
            console.log('init first child view');
            secondChildView = new SecondChildView();
            thirdChildView = new ThirdChildView();
        },
        doRender:function() {
            this.$el.html('first-child<div id="second-child"></div><div id="other-second-child"></div>');
            secondChildView.render(this, this.$('#second-child'));
            thirdChildView.render(this, this.$('#other-second-child'));

            return this;
        }
    });

    return FirstChildView;
});

require.config({
    paths:{
        'backbone':'../lib/backbone',
        'underscore':'../lib/underscore',
        'underscore.string':'../lib/underscore.string.min',
        'jquery':'../lib/jquery'
    },
    shim: {
        'underscore':{
            exports:'_',
            deps:['underscore.string']
        },
        'backbone':{
            exports:'Backbone',
            deps:['underscore','jquery']
        },
        'jquery':{
            exports:'jQuery'
        }

    }

});


require(['backbone', 'underscore', 'jquery', 'root-view'], function(Backbone, _, $, RootView) {
    var rootView = new RootView().render(); 
    $('#app_view').append(rootView.$el);
});

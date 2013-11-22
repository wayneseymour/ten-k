Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Tenk',
    controllers: ['Tenk'],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
//            layout: 'fit'
//            items: [{
//                    xtype: 'TenkView'
//                }]
            layout: {
                type: 'vbox',
                align: 'stretch',
                padding: 10
            }
        });
    }
});
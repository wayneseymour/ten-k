Ext.application({
    name: 'EnhancementLog',
    controllers: ['Enhancement'],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [{
                    xtype: 'EnhancementGrid'
                }]
        });
    }
});
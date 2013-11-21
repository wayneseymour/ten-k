Ext.define('EnhancementLog.store.Enhancement', {
    extend: 'Ext.data.Store',
    model: 'EnhancementLog.model.Enhancement',
    data: [{
            id: 1,
            title: 'Search Field Autocomplete',
            description: 'Could the main search field have an autocomplete facility to increase my productivity.'
        }]
});
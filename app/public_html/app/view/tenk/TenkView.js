Ext.define('Tenk.view.tenk.TenkView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.EnhancementGrid',
    title: 'System Enhancements',
    store: 'Enhancement',
    columns: [{
            header: 'Title',
            dataIndex: 'title',
            flex: 1
        }, {
            header: 'Enhancement Description',
            dataIndex: 'description',
            flex: 3
        }]
});
ListCtrl = function(listView, store){
    store.on("itemAdded", function(item){
        listView.addItem(item);
    })
    listView.on("changeStatus", function(id, status){
        var item = {'status': status};
        store.update(id, item);
    })

}
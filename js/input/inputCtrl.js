InputCtrl = function(inputView, store) {
    inputView.on("addItem", function(itemValue){
        var item = {'value': itemValue, 'status': 0};
        store.add(item);
    })
}
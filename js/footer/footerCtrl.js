FooterCtrl = function(footerView, store) {
    store.on("itemsInBase", function(number) {
        footerView.updateNumber(number);
    })

    store.on("activeItems", function(number) {
        footerView.updateActiveNumber(number);
    })
}
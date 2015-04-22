UAM.InputView = function(selector){ // inherit ee (listen evenents from store)
    UAM.EventEmitter.call(this);
    var that = this;

    that.newInput = document.createElement('input');
    that.newInput.setAttribute("type", "text");
    that.newInput.setAttribute("id", "addItemInput");
    selector.appendChild(that.newInput);

    that.newButton = document.createElement("button");
    var btnDesc = document.createTextNode("Dodaj");
    that.newButton.appendChild(btnDesc);
    that.newButton.setAttribute("id", "addItemBtn");

    that.addItem = function() {
        that.emit("addItem", that.newInput.value);
        that.newInput.value = '';
    }

    that.newButton.addEventListener("click", that.addItem);


    selector.appendChild(that.newButton);
    // emit events to ctrl:

}

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);
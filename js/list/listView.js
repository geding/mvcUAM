

UAM.ListView = function(selector) {
    UAM.EventEmitter.call(this);
    var that = this;

    that.list = document.createElement('ul');
    that.addItem = function(item) {
        that.newItem = document.createElement('li');
        var value = document.createTextNode(item.value);
        that.newItem.appendChild(value);
        that.newItem.addEventListener("click", that.changeStatus);
        that.list.appendChild(that.newItem);

    }
    that.changeStatus = function() {
        var statusToSet = (this.className == 'active' ? 0 : 1);
        that.emit("changeStatus",
            Array.prototype.indexOf.call(this.parentNode.children, this), statusToSet);
        if (statusToSet)
            this.className = 'active';
        else
            this.className = '';

    }

    selector.appendChild(that.list);

}

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);



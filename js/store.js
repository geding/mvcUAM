UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (item) {

    this.data.push(item);
    this.emit("itemAdded", item);
    this.emit("itemsInBase", this.data.length);
};

UAM.Store.prototype.update = function (id, newData) {
    for (var prop in newData){

        if(this.data[id].hasOwnProperty(prop)){
            this.data[id][prop] = newData[prop];
            console.log(newData[prop]);
        }

    }

    var activeItems = 0;
    for (var index in this.data) {

        if(this.data[index].status == 1) {
            activeItems+=1;
        }
    }
    this.emit("activeItems", activeItems);

};

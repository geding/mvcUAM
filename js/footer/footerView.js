UAM.FooterView = function(selector){ // inherit ee (listen evenents from store)
    UAM.EventEmitter.call(this);
    var that = this;

    that.numbers = document.createElement('div');
    var numberZero = document.createTextNode("0");
    var numberZeroTwo = document.createTextNode("0");
    that.active = document.createElement("span");
    that.active.setAttribute("class", "active-number");
    that.active.appendChild(numberZero);

    that.counter = document.createElement("span");
    that.counter.appendChild(numberZeroTwo);

    that.numbers.appendChild(that.active);
    that.numbers.appendChild(that.counter);

    selector.appendChild(that.numbers);



    that.updateNumber = function(number) {
        that.counter.textContent = number;
    }

    that.updateActiveNumber = function(number) {
        that.active.textContent = number;
    }



}

UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);
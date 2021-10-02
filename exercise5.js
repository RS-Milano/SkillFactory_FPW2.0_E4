class ElectricalAppliance {
    constructor(watts) {
        this.watts = watts;
        this.plug = false;
    };

    powerConsumption (hours) {
        if (this.plug) {
            return `${this.watts * hours} watts`;
        } else {
            return `The ${this.name} isn't plugin`;
        };
    };

    plugIn() {
        this.plug = true;
    };

    plugOut() {
        this.plug = false;
    };
};

class Computer extends ElectricalAppliance {
    constructor(name, color, watts) {
        super(watts);
        this.name = "Computer" + name;
        this.color = color;
    };
};

class Lamp extends ElectricalAppliance {
    constructor(name, color, watts) {
        super(watts);
        this.name = "Lamp" + name;
        this.color = color;
    };
};

const myComp = new Computer("Home", "black", 350);
const myLamp = new Lamp("Table", "white", 50);

myComp.plugIn();

console.log(myComp.powerConsumption(10));
console.log(myLamp.powerConsumption(5));

console.log(myComp);
console.log(myLamp);

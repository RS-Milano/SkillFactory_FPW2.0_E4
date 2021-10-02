function ElectricalAppliance (watts) {
    this.watts = watts;
    this.plug = false;
};

ElectricalAppliance.prototype.powerConsumption = function (hours) {
    if (this.plug) {
        return `${this.watts * hours} watts`;
    } else {
        return `The ${this.name} isn't plugin`;
    };
};

ElectricalAppliance.prototype.plugIn = function () {
    this.plug = true;
};

ElectricalAppliance.prototype.plugOut = function () {
    this.plug = false;
};

function Computer (name, color, watts) {
    this.name = "Computer" + name;
    this.color = color;
    this.watts = watts;
};

Computer.prototype = new ElectricalAppliance();

function Lamp (name, color, watts) {
    this.name = "Lamp" + name;
    this.color = color;
    this.watts = watts;
};

Lamp.prototype = new ElectricalAppliance();

const myComp = new Computer("Home", "black", 350);
const myLamp = new Lamp("Table", "white", 50);

myComp.plugIn();

console.log(myComp.powerConsumption(10));
console.log(myLamp.powerConsumption(5));

console.log(myComp);
console.log(myLamp);

class Vehicle {
	constructor(make, model, year, color, mileage) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.color = color;
		this.passenger = 0;
		this.speed = 0;
		this.mileage = mileage;
		this.started = false;
		this.numberOfWheels = 0;
	}

	start() {
		if (this.fuel > 0) {
			console.log("engine started...!!!");
			return (this.started = true);
		} else {
			console.log("engine cannot start...");
			return (this.started = false);
		}
	}
	accelerate() {
		if (this.started) {
			if (this.fuel > 0) {
				console.log((this.speed += 1));
				this.fuel = this.fuel - 1;
			} else {
				console.log("out of fuel.");
				this.stop();
			}
		} else {
			alert("You need to start the engine first.");
		}
	}
	decelerate() {
		if (this.started) {
			if (this.fuel > 0) {
				if (this.speed > 0) {
					console.log((this.speed -= 1));
					this.fuel = this.fuel - 1;
				} else {
					console.log(this + " has stopped moving");
					this.fuel = this.fuel - 1;
				}
			} else {
				console.log("out of fuel.");
				this.stop();
			}
		} else {
			alert("You need to start the engine first.");
		}
	}
	stop() {
		this.started = false;
	}

	//optional methods to code for the Vehicle base class




//Creating Instances and Testing Them


//This is an instance of the Vehicle class. You can use it to test your code for the Vehicle class.

let v = new Vehicle("Mercury", "Sedan", "1965", "color", "mileage");

console.log(v.make);

//You can use the same instance "v" of the Vehicle class and dot notation to add properties of the Car class to it, but you should also create at least one totally new instance with just the Car class and test it out with Vehicle and Car methods (such as with v.make shown above).


//Create new instances of the Car class and test them here:












//Bonus (optional of course)

//Code the Truck subclass of Vehicle here



//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

module.import = {
    Vehicle
}
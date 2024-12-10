"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
var Vehicle_js_1 = require("./Vehicle.js");
var Wheel_js_1 = require("./Wheel.js");
// Complete: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    // Complete: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
    function Truck(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        // Complete: Create a constructor that accepts the properties of the Truck class
        // Complete: The constructor should call the constructor of the parent class, Vehicle
        var _this = _super.call(this) || this;
        // Complete: The constructor should initialize the properties of the Truck class
        _this.vin = vin;
        _this.color = color;
        _this.make = make;
        _this.model = model;
        _this.year = year;
        _this.weight = weight;
        _this.topSpeed = topSpeed;
        _this.towingCapacity = towingCapacity;
        // Complete: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
        if (wheels.length !== 4) {
            _this.wheels = [new Wheel_js_1.default(), new Wheel_js_1.default(), new Wheel_js_1.default(), new Wheel_js_1.default()];
        }
        else {
            _this.wheels = wheels;
        }
        return _this;
    }
    // Complete: Implement the tow method from the AbleToTow interface
    Truck.prototype.tow = function (vehicle) {
        // Complete: Get the make an model of the vehicle if it exists
        var vehicleMake = vehicle.make;
        // Complete: Check if the vehicle's weight is less than or equal to the truck's towing capacity
        if (vehicle.weight <= this.towingCapacity) {
            // Complete: If it is, log that the vehicle is being towed
            console.log("Vehicle ".concat(vehicleMake, " is being towed"));
        }
        else {
            // Complete: If it is not, log that the vehicle is too heavy to be towed
            console.log("Vehicle ".concat(vehicleMake, " is too heavy to be towed"));
        }
    };
    // Complete: Override the printDetails method from the Vehicle class
    Truck.prototype.printDetails = function () {
        // Complete: The method should call the printDetails method of the parent class
        _super.prototype.printDetails.call(this);
        // Complete: The method should log the details of the Truck
        // Complete: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
        console.log("VIN: ".concat(this.vin));
        console.log("Color: ".concat(this.color));
        console.log("Make: ".concat(this.make));
        console.log("Model: ".concat(this.model));
        console.log("Year: ".concat(this.year));
        console.log("Weight: ".concat(this.weight, " lbs"));
        console.log("Top Speed: ".concat(this.topSpeed, " mph"));
        console.log("Towing Capacity: ".concat(this.towingCapacity, " lbs"));
    };
    return Truck;
}(Vehicle_js_1.default));
// Export the Truck class as the default export
exports.default = Truck;

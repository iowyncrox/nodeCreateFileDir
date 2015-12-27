"use strict";

const EventEmitter = require("events").EventEmitter;
const util = require("util");

var Employee = function (id, name, city) {
    this.id = id;
    this.name = name;
    this.city = city;
};

util.inherits(Employee, EventEmitter);

module.exports = Employee;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var customer = new customer_1.Customer('Lebron', 'James', 35);
console.log(customer.getAge());
customer.greeter();

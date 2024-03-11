import { Customer } from './customer';

let customer = new Customer('Lebron', 'James', 35);
console.log(customer.getAge());
customer.greeter();
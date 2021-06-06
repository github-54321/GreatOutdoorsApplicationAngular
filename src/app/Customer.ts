import { Address } from "./Address";

export class Customer {
    customerId!: number;
    customerName: string = '';
    customerPassword: string = '';
    mobileNo!: number;
    email: string = '';
    address: Address = new Address;
    role: string = '';

}
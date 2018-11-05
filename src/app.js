import { Customer } from './customer';

export class App {
    constructor() {
        this.heading = 'Customer Manager';
        this.customers = this.getCustomersfromStorage();
        this.customerName = '';
        this.customerEmail = '';
        this.customerPhone = '';
    }

    getCustomersfromStorage(){
        let customers;
        if(localStorage.getItem('customers') === null) {
            customers = [];
        } else {
            customers = JSON.parse(localStorage.getItem('customers'));
          
        }

        return customers;
    }

    addCustomer() {
        if(this.customerName && this.customerEmail &&
        this.customerPhone) {
            this.customers.push(new Customer(this.customerName, this.customerEmail,this.customerPhone));
        
            //Store fields
            this.storeCustomer(this.customerName, this.customerEmail, this.customerPhone);

           //clear fields
           this.customerName = '';
           this.customerEmail = '';
           this.customerPhone = '';

        }
    }

    storeCustomer(name, email, phone){
       let customers;
       if(localStorage.getItem('customers') === null){
           customers = [];
       } else {
          customers = JSON.parse(localStorage.getItem('customers')); 
       
       }

          customers.push({name: name, email: email, phone: phone});
          localStorage.setItem('customers', JSON.stringify(customers));

    }

    removeCustomer(customer){
        let index = this.customers.indexOf(customer);
        if(index !== -1) {
            this.customers.splice(index, 1);
        }
        this.removeCustomerfromStorage(index);
    }

    removeCustomerfromStorage(index){
        let customers = JSON.parse(localStorage.getItem('customers'));
        customers.splice(index, 1);

        localStorage.setItem('customers', JSON.stringify(customers));
    }
}
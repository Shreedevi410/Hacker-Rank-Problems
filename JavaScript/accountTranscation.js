'use strict';


class Account{
    // Write your code here
    constructor(balance) {
        this.balance = balance;
    }
    
    debit(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
    getBalance() {
        return this.balance;
    }
    credit(amount) {
        this.balance += amount;
    }
}
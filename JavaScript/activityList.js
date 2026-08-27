// Base constructor function
function Activity(amount) {
    this.amount = amount;
}

// Add setAmount method to Activity prototype
Activity.prototype.setAmount = function(amount) {
    if (amount <= 0) {
        return false;
    }
    this.amount = amount;
    return true;
};

// Add getAmount method to Activity prototype
Activity.prototype.getAmount = function() {
    return this.amount;
};
function Payment(amount, receiver) {
    // Call parent constructor using call() to inherit properties
    Activity.call(this, amount);
    this.receiver = receiver;
}

// Inherit Activity prototype methods
Payment.prototype = Object.create(Activity.prototype);
Payment.prototype.constructor = Payment;

// Add setReceiver method to Payment prototype
Payment.prototype.setReceiver = function(receiver) {
    this.receiver = receiver;
};

// Add getReceiver method to Payment prototype
Payment.prototype.getReceiver = function() {
    return this.receiver;
};

// Refund constructor function
function Refund(amount, sender) {
    // Call parent constructor using call() to inherit properties
    Activity.call(this, amount);
    this.sender = sender;
}

// Inherit Activity prototype methods
Refund.prototype = Object.create(Activity.prototype);
Refund.prototype.constructor = Refund;

// Add setSender method to Refund prototype
Refund.prototype.setSender = function(sender) {
    this.sender = sender;
};

// Add getSender method to Refund prototype
Refund.prototype.getSender = function() {
    return this.sender;
};
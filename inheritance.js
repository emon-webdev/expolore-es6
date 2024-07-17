class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move() {
        console.log("gari cole");
    }
}


class Bux extends Vehicle {
    constructor(name, price, seat, ticketPrice) {
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice
    }

}
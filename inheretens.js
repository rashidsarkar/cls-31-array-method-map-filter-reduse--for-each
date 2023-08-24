class Vehical {
  constructor(namen, price) {
    this.name = namen;
    this.price = price;
  }
  move() {
    console.log("gari cole na");
  }
}
class Bus extends Vehical {
  constructor(name, price, seat, ticketPrice) {
    super(name, price);
    this.seat = seat;
    this.ticket = ticketPrice;
  }
}

class Truck extends Vehical {
  constructor(name, price, load) {
    super(name, price);
    this.load = load;
  }
}

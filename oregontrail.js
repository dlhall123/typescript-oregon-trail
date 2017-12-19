(function () {
    /*
    * Interfaces
    */
    /*
    * Classes
    */
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = /** @class */ (function () {
        function Traveler(name) {
            this.food = Math.round(Math.random() * 100);
            this.name = name;
            this.isHealthy = true;
        }
        Traveler.prototype.hunt = function () {
            if (Math.random() >= .5) {
                this.food += 100;
            }
            return this.food;
        };
        Traveler.prototype.eat = function () {
            if (this.food >= 20) {
                this.food -= 20;
            }
            else {
                this.isHealthy = false;
            }
            return this.isHealthy;
        };
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = /** @class */ (function () {
        function Wagon(capacity) {
            this.passengerArray = [];
            this.capacity = capacity;
        }
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.passengerArray.length < this.capacity) {
                this.passengerArray.push(traveler);
                return "added";
            }
            return "sorry";
        };
        Wagon.prototype.isQuarantined = function () {
            for (var i = 0; i < this.passengerArray.length; i += 1) {
                if (!this.passengerArray[i].isHealthy) {
                    return true;
                }
            }
            return false;
        };
        Wagon.prototype.getFood = function () {
            var totalFood = 0;
            for (var i = 0; i < this.passengerArray.length; i += 1) {
                totalFood += this.passengerArray[i].food;
            }
            return totalFood;
        };
        return Wagon;
    }());
    //create passengers
    var tOne = new Traveler("David");
    var tTwo = new Traveler("Jagger");
    var tThree = new Traveler("Beth");
    var tFour = new Traveler("Lori");
    var tFive = new Traveler("Britta");
    //create wagon
    var wagon = new Wagon(4);
    //Eat
    console.log("Traveler " + tOne.name + " ate.  is Healthy: " + tOne.eat() + " Total Food: " + tOne.food);
    console.log("Traveler " + tTwo.name + " ate.  is Healthy: " + tTwo.eat() + " Total Food: " + tTwo.food);
    console.log("Traveler " + tThree.name + " ate.  is Healthy: " + tThree.eat() + " Total Food: " + tThree.food);
    ///Hunt
    console.log("Traveler 4 " + tFour.name + " hunted.  Total Food: " + tFour.hunt());
    console.log("Traveler 5 " + tFive.name + " hunted.  Total Food: " + tFive.hunt());
    //get people on the wagon
    var travelerArray = new Array(tOne, tTwo, tThree, tFour, tFive);
    for (var i = 0; i < travelerArray.length; i += 1) {
        if (Math.random() > .5) {
            console.log(travelerArray[i].name + " was " + wagon.addPassenger(travelerArray[i]));
        }
        else {
            console.log("Sorry, " + travelerArray[i].name + ", missed the boat!");
        }
    }
    console.log("Is Wagon Quarantined: " + wagon.isQuarantined());
    console.log("Food on wagon: " + wagon.getFood());
    /*
    * Play the game
    *
    * Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)

    *
    * Create wagon with an empty passenger list and a capacity of 4.
    *
    * Make 3 of 5 the travelers eat by calling their eat methods
    *
    * Make the remaining 2 travelers hunt
    *
    * Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    * of attempting to be being added to the wagon using the wagons addPassenger method.
    *
    * Run the isQuarantined method for the wagon
    *
    * Run the getFood method for the wagon
    *
    * the return values of all the methods should be displayed in the console using console.log()
    * the console.log statements should not live inside any methods on the objects
    *
    */
})();

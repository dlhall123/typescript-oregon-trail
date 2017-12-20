(function () {

    /*
    * Interfaces
    */

    //interface describing what attributes and methods a traveler should have
    interface ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;

        //when implemented, There should be 50% chance to increase the traveler's food by 100.
        //return the travelers new food value
        hunt(): number;

        //when implemented, we should check to see if the traveler has a food supply of 20
        //If they do then we should consume 20 of the available food supply
        //If they don't have 20 food then we should change isHealthy to false
        //return the travelers health after attempting to eat
        eat(): boolean;


    }

    //interface describing attributes and methods a wagon should have
    interface IWagon {
        capacity: number;
        passengerArray: Traveler[];

        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        addPassenger(traveler: Traveler): string;

        //this should return true if there is at least one unhealthy person in the wagon
        //if everyone is healthy false should be returned
        isQuarantined(): boolean;

        //Return the total amount of food among all passengers of the wagon.
        getFood(): number;

    }

    /*
    * Classes
    */

    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    class Traveler implements ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;

        constructor(name: string, food: number, isHealthy: boolean){
             this.food = food;
             this.name = name;
             this.isHealthy = isHealthy;
         }

        hunt(): number{
            if(Math.random() >= .5){
                this.food += 100;
            }

            return this.food;
        }


        eat(): boolean{
            if(this.food >= 20){
                this.food -= 20; 
            } else{
                this.isHealthy = false;
            }

            return this.isHealthy;
        }

    }

    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    class Wagon implements IWagon {
        capacity: number;
        passengerArray: Traveler[];

        constructor(capacity: number, travelers: Array<Traveler>){
            this.capacity = capacity;
            this.passengerArray = travelers;    
        }

        addPassenger(traveler: Traveler): string{
            if(this.passengerArray.length < this.capacity){
                this.passengerArray.push(traveler);
                return "added";
            }

            return "sorry";
        }

        isQuarantined(): boolean{
            
            for(let i=0; i < this.passengerArray.length; i += 1){
                if(!this.passengerArray[i].isHealthy){
                    return true;
                }
            }
            return false;
        }

        getFood(): number{
            let totalFood: number = 0;
            for (let i = 0; i < this.passengerArray.length; i += 1) {
                totalFood += this.passengerArray[i].food;
        }
        return totalFood;
    }


    }

    //create passengers
    let tOne = new Traveler("David", Math.round(Math.random() * 100), true);
    let tTwo = new Traveler("Jagger", Math.round(Math.random() * 100), true);
    let tThree = new Traveler("Beth", Math.round(Math.random() * 100), true);
    let tFour = new Traveler("Lori", Math.round(Math.random() * 100), true);
    let tFive = new Traveler("Britta", Math.round(Math.random() * 100), true);

    //create wagon
    let wagon = new Wagon(4, []);

    //Eat
    console.log("Traveler " + tOne.name + " ate.  is Healthy: " + tOne.eat()+ " Total Food: " + tOne.food);
    console.log("Traveler " + tTwo.name + " ate.  is Healthy: " + tTwo.eat() + " Total Food: " + tTwo.food);
    console.log("Traveler " + tThree.name + " ate.  is Healthy: " + tThree.eat() + " Total Food: " + tThree.food);

    ///Hunt
    console.log("Traveler 4 " + tFour.name +" hunted.  Total Food: " + tFour.hunt());
    console.log("Traveler 5 " + tFive.name + " hunted.  Total Food: " + tFive.hunt());

    //get people on the wagon
    let travelerArray  = new Array<Traveler>(tOne, tTwo, tThree, tFour, tFive);

     for(let i=0; i < travelerArray.length; i += 1){
         if(Math.random() > .5){
             console.log(travelerArray[i].name + " was " + wagon.addPassenger(travelerArray[i]));
         }
         else{
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
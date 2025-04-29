// this class is our random number generator
class PRNG {
    //our constuctor with a specific seed value
    constructor(seed) {
        //constants
        this.m = 2 ** 32;  // Modulus (2^32)
        this.a = 1664525;  // Multiplier
        this.c = 1013904223;  // Increment
        

        this.state = seed % this.m;  // Initialize the state with a seed value
    }

    // a function to generates the next pseudo-random number between 0 and 1
    next() {
         //run the equations
        this.state = (this.a * this.state + this.c) % this.m;

        //set the value between 0 and 1 
        return this.state / this.m; // Return a number between 0 and 1
    }

    // a function to generates the next pseudo-random integer in a specific range [min, max]
    nextInt(min, max) {
        //call the next function to get a new number 
        // then stretch to the range and adjust based of of minimum
        return Math.floor(this.next() * (max - min + 1)) + min;
    }
}

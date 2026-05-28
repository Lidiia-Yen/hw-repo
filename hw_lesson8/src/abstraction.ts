export interface Dog {
    name: string;
    breed: string;
    age: number;
    gender?: 'male' | 'female';
    length_of_hair: 'short' | 'medium' | 'long';
    basicBark(): void;
    basicRun(): void;
    basicSleep(): void;
    basicSit(): void;
    basicEat(): void;
    knowTricks(): void;
    getMainInfo(): void;
}

export class Dogs implements Dog {
    public name: string;
    public breed: string;
    public age: number;
    public gender?: 'male' | 'female';
    public length_of_hair: 'short' | 'medium' | 'long';

    public constructor (
        
        name: string,
        breed: string,
        age: number, gender?: 'male' | 'female',
        lengthOfHair: 'short' | 'medium' | 'long' = 'medium'){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.gender = gender;
        this.length_of_hair = lengthOfHair;
    }

    public basicBark() {
        console.log(`${this.name} is barking!`);
    }

    public basicRun() {
        console.log(`${this.name} is running!`);
    }

    public basicSleep() {
        console.log(`${this.name} is sleeping!`);
    }

    public basicSit() {
        console.log(`${this.name} is sitting!`);
    }

    public basicEat() {
        console.log(`${this.name} is eating!`);
    }
    public knowTricks() {
        console.log(`${this.name} knows tricks!`);
    }
    public getMainInfo() {
        console.log(`Name: ${this.name}, Breed: ${this.breed}, Age: ${this.age}, Gender: ${this.gender || 'Not specified'}, Hair Length: ${this.length_of_hair}`);
    }
}

export class LazyDogs extends Dogs {
    public isLazy: boolean;

    public constructor(
        name: string,
        breed: string,
        age: number,
        gender?: 'male' | 'female',
        lengthOfHair: 'short' | 'medium' | 'long' = 'medium') {
        super(name, breed, age, gender, lengthOfHair);
        this.isLazy = true;
    }
    public sleepALot() {
        console.log(`${this.name} is sleeping a lot!`);
    }
    public lazyBark() {
        console.log(`${this.name} is barking lazily!`);
    }

}

export class ActiveDogs extends Dogs {
    public isActive: boolean;

    public constructor    (
        name: string,
        breed: string,
        age: number,
        gender?: 'male' | 'female',
        lengthOfHair: 'short' | 'medium' | 'long' = 'medium'){
        super(name, breed, age, gender, lengthOfHair);
        this.isActive = false;
    }

    public runALot() {
        console.log(`${this.name} is running a lot!`);
    }
}
import { Pet } from './pet';
import { PetProps } from './pet-props';

// Single responsibility principle (SRP) states that a class should have only one reason to change,
// meaning it should have only one job or responsibility.
// In the context of the Dog class, it should only be responsible for representing a dog and its behaviors,
// and not for any other unrelated functionalities.

export class Dog extends Pet {
    public breed?: string;

    public constructor(props: PetProps, breed?: string) {
        super(props);
        this.breed = breed;
    }

    public communicateWithSound(): void {
        console.log('Woof!');
    }

    public eat(): void {
        console.log(`${this.name} is eating dog food.`);
    }

    public sleep(): void {
        console.log(`${this.name} is sleeping in its dog bed.`);
    }

    public run(): void {
        console.log(`${this.name} is running on all fours.`);
    }

    public sit(): void {
        console.log(`${this.name} is sitting down.`);
    }

    public fetchStick(): void {
        console.log(`${this.name} is fetching a stick.`);
    }

    public wagTail(): void {
        console.log(`${this.name} is wagging its tail.`);
    }

}

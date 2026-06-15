import { Pet } from './pet';
import { PetProps } from './pet-props';

export class Dog extends Pet {
    public breed?: string;

    public constructor(props: PetProps, breed?: string) {
        super(props);
        this.breed = breed;
    }

    public communicateWithSound(): string {
        console.log('Woof!');
        return 'Woof!';
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

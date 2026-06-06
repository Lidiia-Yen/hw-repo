import { Pet } from './pet';
import { PetProps } from './pet-props';

export class Cat extends Pet {
    public breed?: string;

    public constructor(props: PetProps, breed?: string) {
        super(props);
        this.breed = breed;
    }

    public communicateWithSound(): void {
        console.log('Meow!');
    }
    public eat(): void {
        console.log(`${this.name} is eating cat food.`);
    }
    public sleep(): void {
        console.log(`${this.name} is sleeping on the windowsill.`);
    }
    public run(): void {
        console.log(`${this.name} is running gracefully.`);
    }
    public sit(): void {
        console.log(`${this.name} is sitting elegantly.`);
    }
    public purr(): void {
        console.log(`${this.name} is purring contentedly.`);
    }
}


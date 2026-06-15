import { Dog } from './dog';
import { IShepherdDog } from './i-shepherd-dog';
import { PetProps } from './pet-props';

export class ShepherdDog extends Dog implements IShepherdDog {
    public constructor(props: PetProps, breed: string) {
        super(props, breed);
    }

    public interactWithPet(): string {
        this.eat();
        this.sleep();
        this.run();
        this.sit();
        return `${this.name} has eaten, slept, run and sat down.`;
    }

    public search(): void {
        console.log(`${this.name} is searching for something.`);
    }

    public guardHouse(): void {
        console.log(`${this.name} is guarding the house.`);
    }

    public herdSheep(): string {
        console.log(`${this.name} is herding sheep.`);
        return (`${this.name} is herding sheep.`);
    }

    public trackSmell(): void {
        console.log(`${this.name} is tracking a smell.`);
    }

    public protectOwner(): void {
        console.log(`${this.name} is protecting the owner.`);
    }

    public findMissingPerson(): void {
        console.log(`${this.name} is finding a missing person.`);
    }
}

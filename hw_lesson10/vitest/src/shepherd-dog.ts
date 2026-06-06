import { Dog } from './dog';
import { IShepherdDog } from './i-shepherd-dog';
import { PetProps } from './pet-props';

export class ShepherdDog extends Dog implements IShepherdDog {
    public constructor(props: PetProps, breed: string) {
        super(props, breed);
    }

    public search(): void {
        console.log(`${this.name} is searching for something.`);
    }

    public guardHouse(): void {
        console.log(`${this.name} is guarding the house.`);
    }

    public herdSheep(): void {
        console.log(`${this.name} is herding sheep.`);
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

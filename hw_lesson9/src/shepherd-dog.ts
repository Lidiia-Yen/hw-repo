import { Dog } from './dog';
import { IShepherdDog } from './i-shepherd-dog';
import { PetProps } from './pet-props';

// Dependency Inversion Principle (DIP) states that high-level modules should not depend on low-level modules.
// Both should depend on abstractions (e.g., interfaces).
// In the context of the ShepherdDog class, it should depend on abstractions (e.g., IShepherdDog)
// rather than concrete implementations (e.g., Dog).

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

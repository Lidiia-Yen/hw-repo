import { IPet } from './i-pet';
import { PetProps } from './pet-props';

// Open/Closed principle (OCP) states that software entities (classes, modules, functions, etc.)
// should be open for extension but closed for modification.
// This means that you should be able to add new functionality to a class without changing its existing code.
// In the context of the Pet class, it should be designed in a way that allows new types of pets to be added
// without modifying the existing Pet class, thus adhering to the OCP.

export abstract class Pet implements IPet {
    public age: number;
    public name: string;
    public animal_type: string;
    public gender: string;
    public weight: number;
    public color: string;

    public constructor(props: PetProps) {
        this.age = props.age;
        this.name = props.name;
        this.animal_type = props.animal_type;
        this.gender = props.gender;
        this.weight = props.weight;
        this.color = props.color;
    }

    public abstract communicateWithSound(): void;

    public abstract eat(): void;

    public abstract sleep(): void;

    public abstract run(): void;

    public abstract sit(): void;

}

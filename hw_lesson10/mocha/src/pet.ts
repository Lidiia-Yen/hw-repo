import { IPet } from './i-pet';
import { PetProps } from './pet-props';

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

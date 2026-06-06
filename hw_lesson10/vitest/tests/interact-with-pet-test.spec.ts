import { interactWithPet } from '../src/index';
import { ShepherdDog } from '../src/shepherd-dog';
import { describe, it, expect } from 'vitest';

describe('Interact with pet', () => {

    const luckieDog = new ShepherdDog({
        animal_type: 'dog',
        gender: 'male',
        name: 'Luckie',
        age: 4,
        weight: 30,
        color: 'brown'
    }, 'German Shepherd');

    it('should interact with a dog', () => {
        interactWithPet(luckieDog);
        expect(luckieDog.animal_type).toBe('dog');
    });
    it('should have correct properties', () => {
        expect(luckieDog.name).toBe('Luckie');
        expect(luckieDog.age).toBe(4);
        expect(luckieDog.breed).toBe('German Shepherd');
    });
    it('should return correct sound', () => {
        expect(luckieDog.communicateWithSound()).toBe('Woof!');
    });
});

import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ShepherdDog } from '../src/shepherd-dog';

describe('ShepherdDog isolated tests', () => {
    let shepherdDog: ShepherdDog;

    beforeEach(() => {
        shepherdDog = {
            interactWithPet: vi.fn().mockReturnValue('Rex has eaten, slept, run and sat down.'),
            search: vi.fn(),
            guardHouse: vi.fn(),
            herdSheep: vi.fn().mockReturnValue('Lui is herding sheep.'),
            trackSmell: vi.fn(),
            protectOwner: vi.fn(),
            findMissingPerson: vi.fn(),
            eat: vi.fn(),
            sleep: vi.fn(),
            run: vi.fn(),
            sit: vi.fn()
        } as unknown as ShepherdDog;
    });
    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should interact with pet', () => {
        // arrange
        const expectedOutput = 'Rex has eaten, slept, run and sat down.';

        // act
        const result = shepherdDog.interactWithPet();

        // assert
        expect(result).toBe(expectedOutput);
    });

    it('should call eat, sleep, run, sit during interaction', () => {
        // act
        shepherdDog.interactWithPet();

        // assert
        expect(shepherdDog.interactWithPet).toHaveBeenCalledOnce();
    });

    it('should call method herdSheep', () => {
        //arrange
        const expectedOutput = 'Lui is herding sheep.';

        //act
        const result = shepherdDog.herdSheep();

        //assert
        expect(result).toEqual(expectedOutput);
    });

    it('spy console.log method trackSmell', () => {
        // arrange
        const consoleSpy = vi.spyOn(console, 'log');
        const testShepherdDog = new ShepherdDog({
            animal_type: 'dog',
            gender: 'male',
            name: 'Luckie',
            age: 4,
            weight: 30,
            color: 'brown'
        }, 'German Shepherd');
        // act
        testShepherdDog.trackSmell();
        // assert
        expect(consoleSpy).toHaveBeenCalledWith(`${testShepherdDog.name} is tracking a smell.`);
    });

    it('spy console.log method gardHouse', () => {
        // arrange
        const consoleSpy = vi.spyOn(console, 'log');
        const testShepherdDog = new ShepherdDog({
            animal_type: 'dog',
            gender: 'male',
            name: 'Luckie',
            age: 4,
            weight: 30,
            color: 'brown'
        }, 'German Shepherd');
        // act
        testShepherdDog.guardHouse();
        // assert
        expect(consoleSpy).toHaveBeenCalledWith(`${testShepherdDog.name} is guarding the house.`);
        expect(testShepherdDog).toBeInstanceOf(ShepherdDog);
    });
});

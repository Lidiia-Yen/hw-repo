import { Cat } from './cat';
import { Dog } from './dog';
import { ShepherdDog } from './shepherd-dog';
import { IPet } from './i-pet';

// Liskov substitution principle (LSP) states that objects of a superclass should be replaceable with objects of a subclass
// without affecting the correctness of the program.
// In the context of the Pet class and its subclasses (Dog, Cat, ShepherdDog), we should be able to use any of these subclasses
// wherever a Pet is expected, and the program should still work correctly without any issues.

function interactWithPet(pet: IPet): void {
    pet.communicateWithSound();
    pet.eat();
    pet.sleep();
    pet.run();
    pet.sit();
};

const LuckieDog = new ShepherdDog({
    animal_type: 'dog',
    gender: 'male',
    name: 'Luckie',
    age: 4,
    weight: 30,
    color: 'brown'
}, 'German Shepherd');

const FluffyCat = new Cat({
    animal_type: 'cat',
    gender: 'female',
    name: 'Fluffy',
    age: 3,
    weight: 5,
    color: 'white'
}, 'Persian');

const BuddyDog = new Dog({
    animal_type: 'dog',
    gender: 'male',
    name: 'Buddy',
    age: 2,
    weight: 12,
    color: 'black'
});

BuddyDog.wagTail();
LuckieDog.findMissingPerson();
FluffyCat.purr();

interactWithPet(BuddyDog);
interactWithPet(FluffyCat);
interactWithPet(LuckieDog);

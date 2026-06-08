import { Cat } from './cat';
import { Dog } from './dog';
import { ShepherdDog } from './shepherd-dog';
import { IPet } from './i-pet';

function interactWithPet(pet: IPet): void {
    pet.communicateWithSound();
    pet.eat();
    pet.sleep();
    pet.run();
    pet.sit();
};

const luckieDog = new ShepherdDog({
    animal_type: 'dog',
    gender: 'male',
    name: 'Luckie',
    age: 4,
    weight: 30,
    color: 'brown'
}, 'German Shepherd');

const fluffyCat = new Cat({
    animal_type: 'cat',
    gender: 'female',
    name: 'Fluffy',
    age: 3,
    weight: 5,
    color: 'white'
}, 'Persian');

const buddyDog = new Dog({
    animal_type: 'dog',
    gender: 'male',
    name: 'Buddy',
    age: 2,
    weight: 12,
    color: 'black'
});

buddyDog.wagTail();
luckieDog.findMissingPerson();
fluffyCat.purr();

interactWithPet(buddyDog);
interactWithPet(fluffyCat);
interactWithPet(luckieDog);

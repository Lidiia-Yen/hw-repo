import { expect } from 'chai';
import { Dog } from '../src/dog';

const dog = new Dog({
    animal_type: 'dog',
    gender: 'male',
    name: 'Buddy',
    age: 2,
    weight: 12,
    color: 'black'
}, 'Labrador Retriever');

describe('Dog tests', () => {

    before(() => {
        console.log('before all tests');
    });

    after(() => {
        console.log('after all tests');
    });

    it('should create a dog instance', () => {
        expect(dog).to.be.instanceOf(Dog);
        expect(dog.name).to.equal('Buddy');
    });

    it('should communicate with sound', () => {
        expect(dog.communicateWithSound()).to.equal('Woof!');
    });

    it('should eat, sleep, run, sit, fetch stick and wag tail without errors', () => {
        expect(() => dog.eat()).to.not.throw();
        expect(() => dog.sleep()).to.not.throw();
        expect(() => dog.run()).to.not.throw();
        expect(() => dog.sit()).to.not.throw();
        expect(() => dog.fetchStick()).to.not.throw();
        expect(() => dog.wagTail()).to.not.throw();
    });
});

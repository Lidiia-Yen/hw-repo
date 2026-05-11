const car = {
    name: 'toyota',
    color: 'red',
    year: 2020,

    engine:{
        type: 'V6',
        horsepower: 300
    },
    key_characteristics: {
        comfort: ['leather seats', 'climate control'],
        safety: ['airbags', 'ABS'],
        performance: ['turbocharged', 'sport mode']
    },


    summary() {
        return `The ${this.name} is a ${this.color} car from ${this.year} with a ${this.engine.type} engine producing ${this.engine.horsepower} horsepower. It offers comfort features like ${this.key_characteristics.comfort.join(' and ')}, safety features such as ${this.key_characteristics.safety.join(' and ')}, and performance options including ${this.key_characteristics.performance.join(' and ')}.`;
    },

    countKeys() {
        return Object.keys(this);
    }
};

console.log(car.summary());
console.log(car.countKeys());

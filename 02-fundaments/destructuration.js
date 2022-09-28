const deadpool = {
    name: 'wade',
    lastname: 'winston',
    power: 'Regeneration',
    getName() {
        return `${ this.name } ${ this.lastname }`
    }
}

// const name = deadpool.name;
// const lastname = deadpool.lastname;
// const power = deadpool.power;

function printHero({name, lastname, power, age = 0}) {
    console.log(name, lastname, power, age);
}

printHero(deadpool);

// destructuration with arrays

const heroes = ['Deadpool','Superman','Batman'];
const [,, h3] = heroes;

console.log(h3);
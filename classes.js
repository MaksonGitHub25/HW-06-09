export class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello! I'm ${this.name}`);
    }
}

export class Sysadmin extends Human {
    constructor(name, age, unique) {
        super(name, age);
        this.unique = unique;
    }

    repairPC() {
        console.log('Я починил!');
    }
}

export class Developer extends Sysadmin {
    constructor(name, age) {
        super(name, age);
    }

    coding() {
        console.log('Я пишу код!');
    }
}
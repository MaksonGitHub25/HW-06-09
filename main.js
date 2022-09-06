import {Human, Sysadmin, Developer} from './classes.js';

function logSpace() {
  console.log('----------------------------------');
}

const human = new Human('Jorgh', 18);
console.log('human', human);
human.sayHello();

logSpace();

const sysadmin = new Sysadmin('Maks', 24, ['ponytail', 'phpProgerBoy']);
console.log('sysadmin', sysadmin);
sysadmin.sayHello();
sysadmin.repairPC();

logSpace();

const developer = new Developer('Alex', 26);
console.log('developer', developer);
developer.sayHello();
developer.repairPC();
developer.coding();



//* class Human как прородитель
//* class Sysadmin наследует от Human имя , фамилию и метод приветствия.
//* class Sysadmin имеет собственные уникальные характеристики - хвостик на голове = + , метод - починка компа , в котором лежит констольЛог с сообщением - Я починил!
//* class Developer наследует сисадмина и умеет все тоже , но еще и метод "писатьКод" , где вложена консоль с выводом : "Я пишу код"
const clone1 = person;
const clone2 = person;
const samePerson = person;

Object.freeze(clone1);
Object.freeze(clone2);

person.age = 78;
person.country = "FR";

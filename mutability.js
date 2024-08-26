
const clone1 = person;
const clone2 = person;
const samePerson = person;
Object.freeze(clone2)
Object.freeze(clone1)


person.age += 1;
person.country = "FR";

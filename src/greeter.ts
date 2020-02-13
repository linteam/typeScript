interface Person {
  firstName: string;
  lastName: string;
}

class Student {
  fullName: string;
  constructor(public firstName: string, public lastName: string) {
    this.fullName = firstName + " " + lastName;
  }
}

function greeter(person: Person) {
  return "Hello " + person;
}

let user = new Student("Ahmet", "Celebi");
document.body.textContent = greeter(user);

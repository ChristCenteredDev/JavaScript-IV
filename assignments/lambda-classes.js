// CODE here for your Lambda Classes

class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
  }
}

class Instructor extends Person {
  constructor(iAttrs) {
    super(iAttrs);
    this.specialty = iAttrs.specialty;
    this.favLanguage = iAttrs.favLanguage;
    this.catchPhrase = iAttrs.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(sAttrs) {
    super(sAttrs);
    this.previousBackground = sAttrs.previousBackground;
    this.className = sAttrs.className;
    this.favSubjects = sAttrs.favSubjects;
  }

  listsSubjects() {
    for(let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  springChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttrs) {
    super(pmAttrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }

  standup(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const frank = new Instructor({
  name: 'Frank',
  location: 'Jackson',
  age: 32,
  favLanguage: 'JavaScript',
  specialty: 'back-end',
  catchPhrase: `Don't forget the homies`
});

const red = new Instructor({
  name: 'Red',
  location: 'Dallas',
  age: 39,
  favLanguage: 'Python',
  specialty: 'CS',
  catchPhrase: `Don't you leave me`
});

const tedd = new Student ({
  name: 'Tedd',
  location: 'Fort Worth',
  age: 30,
  previousBackground: 'Med Tech',
  className: 'WebPT7',
  favSubjects: ['JS', 'HTML', 'Less']
});

const sandra = new Student ({
  name: 'Sandra',
  location: 'Detroit',
  age: 30,
  previousBackground: 'Nurse',
  className: 'WebPT8',
  favSubjects: ['JS', 'HTML', 'CSS']
});

const todd = new Student ({
  name: 'Todd',
  location: 'Saginaw',
  age: 20,
  previousBackground: 'Manual Labor',
  className: 'WebPT8',
  favSubjects: ['JS', 'HTML', 'Node']
});

const cassie = new ProjectManager({
  name: 'Cassie',
  location: 'New Town',
  age: 23,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
  gradClassName: 'Web7',
  favInstructor: 'Dan'
});

const pauline = new ProjectManager({
  name: 'Pauline',
  location: 'Phoenix',
  age: 20,
  favLanguage: 'C',
  specialty: 'CS',
  catchPhrase: `Don't forget the homies`,
  gradClassName: 'Web13',
  favInstructor: 'Dan'
});

const mike = new ProjectManager({
  name: 'Mike',
  location: 'New York City',
  age: 33,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
  gradClassName: 'Web13',
  favInstructor: 'Dan'
});

console.log(fred);
console.log(frank);
console.log(red);
console.log(tedd);
console.log(sandra);
console.log(todd);
console.log(cassie);
console.log(pauline);
console.log(mike);
console.log('List Subjects Test');
tedd.listsSubjects();
fred.speak();
fred.demo('Javascript I');
fred.grade(todd, 'JavaScript I');
todd.PRAssignment('JavaScript II');
todd.springChallenge('JavaScript Fundamentals');
cassie.standup('WebPT7_Cassie');
cassie.debugsCode(tedd, 'JavaScript II');
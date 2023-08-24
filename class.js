// similar has some properties , method
class Prodact {
  country = "BD";
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}

// const hp = new Prodact("kaka");
// console.log(hp);
class Teacher {
  constructor(name, subj) {
    this.name = name;

    this.sunject = subj;
  }
  leactur() {
    console.log(`sir tiching Match`);
  }
}
const tapan = new Teacher("tapon", "English");
const rashid = new Teacher("Rashid", "javaScript");
console.log(rashid);

class Parson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    console.log(`slipp now ${this.name}`);
  }
  activity() {
    this.sleep();
  }
}
const kodom = new Parson("kodom", 21);
// console.log(kodom.sleep());
kodom.sleep();
const bdam = new Parson("kaka", 50);
bdam.sleep();
kodom.activity();

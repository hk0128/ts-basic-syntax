
/**** 変数 ****/ 

// プリミティブ型
let bool: boolean = true;
let num: number = 1;
let str: string = 'hello';

// any型
let x: any;
x = 3;
x = 'world!';

// 配列
let items1: string[] = ['a', 'b', 'c'];
let items2: any[] = ['a', 1, false];

// ENUM
enum Animal {Dog='犬', Cat='猫'};
var animal: Animal = Animal.Dog;

console.log(bool);
console.log(num);
console.log(str);
console.log(x);
console.log(items1);
console.log(items2);
console.log(animal);


/**** 関数 ****/

// 戻り値のない変数
function hello1(): void {
    console.log('hello, world!');
}

hello1();

// 戻り値のある変数
function hello2(): string {
    return "hello, world!";
}

console.log(hello2());

// 引数のある関数

function hello3(name: string): string {
    return `hello, ${name}!`;
}

console.log(hello3('ポチ'));

// アロー関数の場合

const countUp = (num: number): number => {
    return num + 1;
}

console.log(countUp(3));


/**** クラスとインターフェース ****/

interface CommonMethods {
  output(name: string, age: number, score: number): string;
}

class ScoreClass {
  score: number;
  
  constructor(score:number) {
    this.score = score;
  }
  
  get getScore(): number {
    return this.score;
  }
  set setScore(score:number) {
    this.score = score;
  }
}

class UserClass extends ScoreClass implements CommonMethods {
  name: string;
  age: number;

  constructor(name: string, age: number, score: number) {
    super(score);
    this.name = name;
    this.age = age;
  }

  public output(name: string, age: number, score: number): string {
      return `${name} : ${age}歳 : ${score}点`;
  }

  get getName(): string {
    return this.name;
  }
  set setName(name:string) {
    this.name = name;
  }
  get getAge(): number {
    return this.age;
  }
  set setAge(age:number) {
    this.age = age;
  }
}

const user: UserClass = new UserClass('太郎', 7, 80);
console.log(user.output(user.getName, user.getAge, user.getScore));

user.setName = 'ジョン';
user.setAge = 10;
user.setScore = 90;
console.log(user.output(user.getName, user.getAge, user.getScore));


/**** ジェネリック ****/

function type<T>(arg: T): string {
  switch (typeof arg) {
    case 'number':
      return '数値型です。';
      break;
    case 'string':
      return '文字列です。';
      break;
    case 'boolean':
      return '真偽値です。';
      break;
    default:
      return '数値、文字列、真偽値以外の型です。';
      break;
  }
}

console.log(type(3));
console.log(type('文字列'));
console.log(type(false));
console.log(type([]));

/**** 型エイリアス ****/

type Teacher = {
  teacher_name: string,
  age: number,
  subject: string
}

type Student = {
  student_name: string,
  age: number
}

const john:Student = {
  student_name: "ジョン",
  age: 17
}

console.log(john);


/**** IS ****/

// unknown型や、any型、Union型の型の絞り込みを行う
const isNumber = (arg: unknown): arg is number => {
  return typeof arg === "number";
}

if(isNumber(3)) {
  console.log("数値です。");
}

if(isNumber("A")) {
  console.log("数値以外です。");
}

/**** IN ****/

// 型の絞り込み

const studentOrTeacher = (target: Student | Teacher) => {
  if("teacher_name" in target) {
    console.log("先生です。");
  }else {
    console.log("生徒です。");
  }
}

const emma:Teacher = {
  teacher_name: "ジョン",
  age: 17,
  subject: "数学"
}

studentOrTeacher(emma);

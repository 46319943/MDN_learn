function Person(name) {
    this.name = name;

    this.greet = function(){
        console.log('My name is ' + this.name);
    }
}
var person1 = new Person('PiaoYang');

//输出当前对象
console.log('\nperson1: ');
console.log(person1);

//输出构造函数（构造器）
console.log('\nPerson: ');
console.log(Person);


//输出构造器的原型
console.log('\nPerson.prototype: ');
console.log(Person.prototype);

//输出构造器的原型，但是是通过对象实例来获取的
console.log('\nperson1.__protp__: ');
console.log(person1.__proto__);
console.log('\nObject.getPrototypeOf(person1): ');
console.log(Object.getPrototypeOf(person1));


//person1.__proto__ = Person.prototype
console.log('\nperson1.__proto__ === Person.prototype');
console.log( person1.__proto__ === Person.prototype );//true

//person1.__proto__.constructor = Person
//其实person1.constructor = person1.__proto__.constructor
//原型链向上查找
console.log('\nperson1.__proto__.constructor === Person');
console.log( person1.__proto__.constructor === Person );//true
console.log( Person.prototype.constructor === Person );//true

//函数的原型是Function对象
//函数的原型属性对象的原型是Object对象
console.log('\nPerson.__proto__ === Function.prototype');
console.log(Person.__proto__ === Function.prototype);
console.log('\nPerson.prototype.__proto__ === Object.prototype');
console.log(Person.prototype.__proto__ === Object.prototype);


var person2 = Object.create(person1);
console.log('\nperson2: ');
console.log(person2);

//没用，prototype属性只能在函数（构造器）上面使用，
// 而Person.prototype是一个原型对象，不是函数对象
// console.log('\nPerson.prototype.prototype: ');
// console.log(Person.prototype.prototype);

//没用，prototype属性只能在函数（构造器）上面使用
// console.log('\nperson1.prototype: ');
// console.log(person1.prototype);
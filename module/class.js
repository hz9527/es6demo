// class B {}
// var b = new B()
// console.log(b.constructor === B)

// var Person = class SomeOne {}
// var person = new Person()
// console.log(Person.name)

// class Parent {
//   constructor (name, age) {
//     this.name = name
//     this.age = age
//   }
//   say () {
//     return `my name is ${this.name}, i am ${this.age}`
//   }
// }
// class Child extends Parent { // 一旦需要constructor就必须执行super
//   sayParent () {
//     return `my father is Parent`
//   }
// }
// var child = new Child('hz', 24)

// class Person {
//   constructor (x, y) {
//     this.name = x
//     this.age = y
//   }
//   get prop () {
//     return 'China'
//   }
//   set prop (value) {
//     console.log('set')
//     // this.name = value
//   }
// }
// var person = new Person('hz', 24)
// console.log(person.prop)
// person.prop = 'huangzhong'
// console.log(person.prop, person.name)

// class Parent {
//   static say () {
//     return 'hz'
//   }
//   sayName () {
//     return Parent.say() + 'hhh'
//   }
// }
// class Child extends Parent {
//   sayName () {
//     return super.sayName() + Child.say()
//   }
// }
// var a = new Child()
// console.log(a.sayName())

// class Parent {
//   age = 24 // babel 设置为experimental
//   constructor () {
//     console.log(this.name)
//   }
// }
// var a = new Parent()
// console.log(a.age) // 24

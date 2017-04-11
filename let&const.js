'use strict'
//let and const 块级作用域初体验
//声明不再提前
// console.log(a);//err if var undefined
// let a = 1;
// 声明不可重复
// let a = 2;//err
// function a(){};
// var a = 2;
// 外部不能访问
// {
// 	let a = 3;
// }
// console.log(a);//err

// let
// 隐形闭包
var a = [];
for (let i = 0; i < 10; i++) {
	a[i] = function () {
		console.log(i);
	}
}
a[6]();//6 if var 10

// const
// 不能进行LHS
// const a = 1;
// a = 2;//err

// const a = {};//[]
// a.b = 2;//push(2)
// console.log(a);//{b: 2};

// 必须赋值
// const a;//err

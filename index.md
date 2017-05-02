# README
:joy::shit:
### 目录
基础  
[变量声明](#变量声明)  
[解构赋值](#解构赋值)  
数据类型的拓展  
[函数的拓展](#函数的拓展)  
[对象的拓展](#对象的拓展)  
[数组的拓展](#数组的拓展)  
[数值的拓展](#数值的拓展)  
[字符串的拓展](#字符串的拓展)  
[正则的拓展](#正则的拓展)  
新类型  
[Symbol](#Symbol)  
[Set&Map](#Set&Map)  
[Promise](#Promise)  
新函数  
[遍历器](#遍历器)  
[Generator&其异步](#Generator&其异步)  
[async](#async)
[Decorator](#Decorator)   
类及模块  
[Class](#Class)  
[Module](#Module)  

### 变量声明  
[toTop](#readme)  
#### let&const  
**块级作用域**，两者声明的都是块级作用域变量
* 声明将不再提前，不能在声明前使用
* 声明不可重复，同一标识符在一个块作用域中只能使用一次
* 块外部不可访问  

#### let  
**隐形闭包**  
在for循环中，隐藏两个块作用域，循环头一个块，循环体一个，每次循环创建一个块，因此使用let循环能产生‘隐形闭包’  

#### const  
**不可进行LHS**  
使用const声明变量不能使用LHS来对变量赋值，但并不意味着不能更改，如const声明一个对象，那么该对象的引用不能变，但是对象本身是可以变的。  
**必须赋值**  
es6规定，const声明的标识符必须同时赋值  

#### 拓展  
1. window所有属性均可以省略window
```JavaScript
window.a = 2;
a = 1//<==>window.a,因为为执行window.a = 2直接a=1会报错
```
2. web worker中没有window对象，但是在浏览器和web worker中self都会指向顶层对象
3. 在node中顶层对象使用global
4. 在es5其实不允许在块作用域中声明提前方式声明函数

### 解构赋值  
[toTop](#readme)  

### 函数的拓展  
[toTop](#readme)  

### 对象的拓展
[toTop](#readme)
### 数组的拓展
[toTop](#readme)  
#### 1.Array.from
在面对类数组对象想将其转化为数组，如domlist arguments
```javaScript
var likeArr = {
	'0': 1,
	'1': 2,
	length: 2
}
//es5
var arr = Array.prototype.slice.call(likeArr);
//es6
var arr = Array.from(likeArr)
```
#### 2.Array.of
我们知道new Array有一个bug，就是传入一个参数表示数组长度，多个参数则是数组每一个值，Array.of就解决了这个问题，参数即数组的每一项

#### 3.Array.copyWithIn
三个参数，第一个参数是替换起点，第二个参数是替换子数组起始位置，第三个参数为替换子数组结束位置，支持负数。改变原数组
```JavaScript
var arr = [1,2,3,4,5];
console.log(arr.copyWithIn(-4,-2))//[1,4,5,4,5]
```

#### find findIndex
参数为回调函数，类似String.prototype.index,返回第一个符合回调函数要求的项（或下标）
```JavaScript
var arr = [1,2,-3,-4,5];
arr.find((n) => n < 0);//-3
arr.findIndex(n => n < 0);//2
```



### 数值的拓展
[toTop](#readme)  
#### 1.判断 Number.isNaN Number.isFinite Number.isInteger
判断一个数是否是NaN，无限大，整数  
注：判断是否是整数只是判断其浮点位是否为0
```JavaScript
var a = 30.0;
Number.isInteger(a);//true
```
#### 2.重写Number.parseInt Number.parseFloat
这两个方法没有任何变化，只是从全局函数变为Number原型方法，减少全局函数数量

#### 3.Math内置对象的拓展
1. Math.trunc 返回整数部分
2. Math.sign 判断一个数是正数负数还是0（＋－）返回+1 -1 +0 -0
3. Mah.signbit -0 <0 true +0 >0 false

#### 4.新增运算符 **
```
console.log(2**3)//8 2的三次方
```





### 字符串的拓展
[toTop](#readme)
#### 1.遍历器（for of）
#### 2.子字符串方法（startsWith endsWith includes）
es5仅提供了indexOf()lastIndexOf()来判断参数字符串在字符串中下标，以上三个接口均返回布尔
#### 3.重复字符串（repeat）
参数为数字
```JavaScript
 var a = 'h';
 a.repeat(2)//'hh'
```
#### 4.补全字符串（padStart padEnd）
第一个参数是补全长度，第二个是使用补全的字符,如果原字符长度长于规定长度，返回原字符串；如果补全字符串长于需要补全长度，那么会截取需要的长度；如果补全字符为空，则以空格补全

#### 5.字符串模版
在js中经常需要拼接字符串，在es6中提供了字符串模版
```javaScript
var name = 'hz';
var age = 24;
console.log(`my name is ${name} and i am ${age}`)//my name is hz and i am 24
```
使用${}盛放js表达式，意味着可以使用函数


### 正则的拓展
[toTop](#readme)
### Symbol
[toTop](#readme)
### Set&Map
[toTop](#readme)
### Promise
[toTop](#readme)  
#### 1.基本使用
单线程，异步，无阻塞，时间循环。js最具特色的地方。  
Promise对象专门来解决这些问题的，通过resolve与reject来调用异步处理函数
```JavaScript
new Promise((resolve, reject) => {
	setTimeout(() => {
		if (...) {
			resolve(data) // 成功的回调
		} else {
			reject(err) // 失败的回调
		}
	})
}).then((res) => {
	... // deal success
}, (res) => {
	... // deal fail
})
```
#### 2.Promise.prototype.then
在then处理函数还可以继续使用then来调用上一个的返回，比较牛的是，可以继续返回一个新的promise
```JavaScript
new Promise((resolve, reject) => {
	resolve(1)
}).then((res) => {
	console.log(res) // 1
	return 2
}).then((res) => {
	console.log(res) // 2
})

// return a new Promise
new Promise((resolve, reject) => {
	resolve(1)
}).then((res) => {
	console.log(res) // 1
	return new Promise((resolve, reject) => {
		resolve(5)
	})
}).then((res) => {
	console.log(res) // 5
})
```
#### 3.Promise.prototype.catch
catch能够捕捉到未执行的reject，执行中的错误(try catch)  
因此推荐在then只处理成功，通过catch来批量处理错误

#### 4.Promise.all
参数为一个可遍历的对象，如数组，map等，每一项为一个Promise对象，如果不是会调用Promise.resolve将其转化  
将一组Promise封装成一个Promise
1.如果全部resolved，则将执行resove，参数为一个数组，存放着每一个resolve的返回  
2.如果其中至少一项为reject，则执行reject并返回第一个reject的返回

#### 5.Promise.race
参数与all相同，当一个状态变更，则新Promise状态就是那个状态，不论是reject还是resolve
#### 6.Promise.resolve

#### 7.Promise.reject

#### 8.Promise.prototype.done
#### 9.Promise.prototype.finally
### 遍历器
[toTop](#readme)
### 遍历器
[toTop](#readme)
### Generator&其异步
[toTop](#readme)
### async
[toTop](#readme)
### Decorator
[toTop](#readme)
### Class
[toTop](#readme)
### Module
[toTop](#readme)

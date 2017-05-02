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
#### 1.参数默认值
可以理解为在参数中执行了let
1. 函数体内不可使用同名块级作用域声明
2. 不能使用同名参数，即使未对该参数设置默认值
3. 默认值可以是动态的
4. 指定默认值后函数长度失真（指定默认值参数不计入长度中）

#### 2.rest参数
ES6 引入 rest 参数（形式为“...变量名”），用于获取函数的多余参数，这样就不需要使用arguments对象了。适用于数组，对象甚至字符串
1. rest参数只能作为最后一个参数
2. 同样，rest参数会被length忽略

*扩展*  
>...除了定义参数，还可以传实参（这个就不要求后面不能有参数了），最大作用就是取代apply与arguments组合了

>当然...除了作为参数也是一种运算符，运用十分广泛

#### 3.箭头函数
1. 基本使用 v => v 类似于function(v){return v}
2. 多个参数时需要用括号(v1, v2) => v1 + v2
3. 函数体如果有块级部分必须扩起来，如变量声明；等
4. 只能使用var fn = n => n;形式赋值
5. this遵循作用域链原则
6. arguments不存在
7. 不能作为构造函数
8. 不可以使用yield命令，因此箭头函数不能用作Generator函数。
9. 环境栈不变，即访问this是父环境

#### 4.严格模式
ECMAScript 2016标准》做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。

#### 5.name
返回函数名，作为函数的属性

#### 6.this绑定
一种是bind 一种是::
```javaScript
foo::bar;
// 等同于
bar.bind(foo);

foo::bar(...arguments);
// 等同于
bar.apply(foo, arguments);
```

#### 7.尾调用优化

#### 8.逗号


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

#### 4.find findIndex
参数为回调函数，类似String.prototype.index,返回第一个符合回调函数要求的项（或下标）
```JavaScript
var arr = [1,2,-3,-4,5];
arr.find((n) => n < 0);//-3
arr.findIndex(n => n < 0);//2
```
#### 5.fill
可以作为初始化数组使用，第一个参数为填充值，第二个参数为填充起始下标，第三个参数为结束下标(含头不含尾)
```javaScript
new Array(3).fill([1,2]);//[[1,2],[1,2],[1,2]]
new Array(3).fill(2,1,2);//[undefined,2,undefined]
```

#### 6.entries keys values
我们知道在js中数组底层实际是对象，因此也有key value一说
```javaScript
var arr = ['hh','xx'];
for (var key in arr.keys()) {
	console.log(key);//0 1
}
for (var value in arr.values()) {
	console.log(value);//'hh' 'xx'
}
for (var [key, value] in arr.entries()) {
	console.log(key, value)
}
```
#### 7.includes
见名知意，判断数组中是否包含某一项,第一个参数为校验项，第二个参数为开始下标  
注：这里的比较是直接使用比较符，即对象不对比值是否相同而是对比引用是否相同
```javaScript
var arr1 = [1,2,3];
arr1.includes(2);//true
arr1.includes(2,2);//false

var arr2 = [
	{a:1,b:2},
	{c:3,d:4}
];
arr2.includes({a:1,b:2});//false
var item = arr2[0];
arr2.includes(item);//true
```
#### 8.空位处理
数组某一项空位和值为undefined是不一样的


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

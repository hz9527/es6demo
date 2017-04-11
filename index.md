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
### 数值的拓展
[toTop](#readme)
### 字符串的拓展
[toTop](#readme)
#### 遍历器（for of）
#### 子字符串方法（startsWith endsWith includes）
es5仅提供了indexOf()lastIndexOf()来判断参数字符串在字符串中下标，以上三个接口均返回布尔
#### 重复字符串（repeat）
参数为数字
```JavaScript
 var a = 'h';
 a.repeat(2)//'hh'
```
#### 补全字符串（padStart padEnd）
第一个参数是补全长度，第二个是使用补全的字符,如果原字符长度长于规定长度，返回原字符串；如果补全字符串长于需要补全长度，那么会截取需要的长度；如果补全字符为空，则以空格补全

#### 字符串模版
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

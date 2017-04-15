//for of
// var str = 'hahah';
// for (k of str) {
// 	console.log(k);
// }

//repeat
// var str = 'hz';
// var rStr = str.repeat(3);
// console.log(rStr);

//pad
// var str = 'hz';
// console.log(str.padStart(10, 'xix'));
// console.log(str.padEnd(10, 'xix'), str);

//``
var name = '黄仲';
var age = 23;
var str = `
	my name is ${name},
	my age is ${age}
`
console.log(str, str.length);//注：模版会保持原来格式，及换行空格都会保存

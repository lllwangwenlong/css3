var p = new RegExp("a");
console.log(p);

var p = /a/;
console.log(p);

var p = /a/;
var str = "abc";
var res = p.test(str)
console.log(res)

var p = /a/i;
var str = "ABC";
var res = p.test(str)
console.log(res)

var p = /_/;
var str = "123456";
var res = p.test(str)
console.log(res)

var p = /\d/;//只要包含十进制的数字[0-9],就是true
var str = "123abc"
var res = p.test(str)
console.log(res)

var p = /\D/;//只要包含非数字就是true
var str = "123456a";
var res = p.test(str);
console.log(res);

var p = /\s/;//\s表示空白字符(空格,tab 回车键)只要有空白就是true
var str = "123 456"
var res = p.test(str)
console.log(res)

var p = /\S/;
var str = '123456';
var res = p.test(str);
console.log(res)


var p = /\w/;//表示一个字 0~9  a~z  A~Z  _
var str = '12';
var res = p.test(str);
console.log(res)

var p = /\W/;//表示除了 0~9  a~z  A~Z  _  以外的字符
var str = '12';
var res = p.test(str);
console.log(res)

var p = /^\d/;//^开始元字符,必须以后面紧贴的那个原子作为开始
var str = "a123";
var res = p.test(str);
console.log(res);

var p = /^0/;
var str = "010";
var res = p.test(str);
console.log(res)

var p = /a$/;//结束元字符,必须要以它前面紧贴的那个原子作为结束
var str = "123a";
var res = p.test(str);
console.log(res)

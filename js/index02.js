let str =`
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
`

// match
let re = /see/gi ;
let re1= /naber/gi ;
let re2= /gmail/gi ;

console.log(str.match(re));
console.log(str.match(re1));
console.log(str.match(re2));
console.log(re1.test(str));
console.log(re2.test(str));

// test

// replace
let re3 = /naver/gi;
console.log(re3.test(str))
// 출력물바뀌고, 원본 X
console.log(str.replace(re3,'gmail'))
console.log(str)



let str =`
010-1234-5678- abcsd
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the aabbccddee ffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com

`
// console.log(str.match(/\w/g))
// console.log(str.match(/\b/g))
// console.log(str.match(/\d/g))
// console.log(str.match(/\b\w{1,}/g))
const num = `       the       wold     hello    !`;
console.log(num.match(/\s/g));
console.log(num.replace(/\s/g,''));

const sub = 'abc@gmail.com';
console.log(sub.match(/(?<=@).{1,}/g))
console.log(sub.match(/.{1,}(?=@)/g))



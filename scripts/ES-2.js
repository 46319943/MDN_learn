
// 为default变量赋值为10，并且导出
export default 10;
// 导出变量b
export let b = 20;
// 首先声明变量c，然后导出它
let c = 30;
export { c };
console.log('模块进行了加载');
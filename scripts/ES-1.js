// 对模块进行加载，相当于执行了那个模块中的内容
// import './ES-2.js';

// 接口转发，相当于先import再export，加载了目标模块
export * from './ES-2.js';

import * as es from './ES-2.js';
// import a from './ES-2.js';
// 默认导出实际上是导出了一个叫作default的变量
console.log(es.default);
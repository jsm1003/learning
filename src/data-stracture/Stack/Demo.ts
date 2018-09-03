/**
 * Demo
 * releated： History API
 */

import Stack from './Stack';

// 冰糖葫芦
const candiedHaws: Stack = new Stack();

// 串冰糖葫芦了
candiedHaws.push('hawthorn');
candiedHaws.push('origin');
candiedHaws.push('apple');
candiedHaws.push('strawberry');
candiedHaws.push('hawthorn');

const length: number = candiedHaws.length();
console.log(length);

// 开吃了
for (let i: number = 0; i < length; i++) {
  candiedHaws.pop();
}
console.log(candiedHaws.length());

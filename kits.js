/* 
    这个工具类的封装有以下作用
    1.以后有些东西可以直接调用
    2.复习以前的东西，不然会学了后面的，忘记前面的
*/


let kits = {};

/**
 * @description 封装一个随机区间整数
 * @param {string} n 一个值
 * @param {string} m 另一个值
 * @return {} 返回一个随机区间整数
 */

kits.randomInt = function (n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
}


// /**
//  * @description 封装一个数组中n-m的最大值
//  * @param {string} n
//  * @param {string}
//  * @param {string}
//  */

// kits.max = function (n, m) {
//     //假设数组中的第一项就是最大值
//     var max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     return max;
// }


/**
 * @description 封装一个实时时间
 * @param {} 
 * @return 返回一个实时的时间
 */

kits.times = function () {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}
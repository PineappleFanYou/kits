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



/**
 * @description 封装一个n-m之间，能被k整除的数
 * @param {string} n 一个开始的数
 * @param {string} m 一个结束的数
 * @param {string} k 被模的数
 * @return 返回所有能被k整除的所有的数
 */
kits.remainder = function (n, m, k) {
    //声明一个空数组接收
    let arr = [];
    for (let i = n; i < m; i++) {
        if (n % k) {
            arr.push(i);
        }
    }
    return arr;
}


/**
 * @description 封装一个可以生成唯一id 的方法
 * @param {} 没有参数
 * @return {} 随机生成一个6位数的随机id
 * 
 */

kits.primaryKey = function () {
    //我们通过时间戳 + 大范围的随机数来生成id
    //得到的是从1970年到现在为止的总的毫秒数
    let now = Date.now();
    //为了防止在1毫秒之内生成的id有多个，再次加上一个大范围的随机数
    let r = kits.randomInt(100000, 999999);
    //把两个得到的结果，拼接起来
    return now + '' + r;
}


/**
 * @description 读取存储在localStorage 里面的数组
 * @param {string} key 存储数据使用的键
 *  @return {Array} 返回值 返回一个数组， 如果不存在，返回空数组
 */

kits.loadData = function (key) {
    let str = localStorage.getItem(key);
    //转成字符串转成对象
    let arr = JSON.parse(str);
    //判断，如果没有，就给一个空数组，如果有，就返回一个数组
    if (!arr) {
        arr = [];
    }
    return arr;
}
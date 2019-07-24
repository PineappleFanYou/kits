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


/**
 * @description 用于将数组存储到localStorage里面的方法
 * @param {string} key 存储使用的键
 * @param {Array} arr 要存储的数组数据
 * @return {undefined}
 */

kits.saveData = function (key, arr) {
    //先把数组转成字符串
    let jsonStr = JSON.stringify(arr);
    //再存储到localStorage
    localStorage.setItem(key, jsonStr);
}



/**
 * @description 封装计算购物车里面的商品总量的代码
 * @param {key} 存储在本地数据的第一个值
 * @return {} 返回商品的总的件数
 */

kits.total = function (key) {
    //加载所有的数据
    let arr = loadData(key)
    //计算总件数
    var total = 0;
    arr.forEach(function (e) {
        total += e.number;
    });
    return total;
}


/**
 * @description 计算总计里面的总数量和总价
 * @param {Element1} 购物车里面的所有的复选框
 * @param {Element2} 每种商品的div，整一条数据
 * @param {dataId} 每种商品中数据中的自定义属性
 * @param {Element3} 要修改的总数量
 * @param {Element4} 要修改的总价
 * @return  返回一个总价
 */
kits.computedCountAndMoney = function (Element1, Element2, dataId, Element3, Element4) {
    //算出总计里面的总数量和总价
    //根据选中的多选框，得到选中的商品的id
    let totalCount = 0;
    let totalMoney = 0;
    $(Element1).each((i, e) => {
        let id = parseInt($(e).parents(Element2).attr(dataId));
        arr.forEach(e => {
            if (id === e.pID) {
                //勾选在本地存储中的数据
                totalCount += e.number;
                totalMoney += e.number * e.price;
            }
        })
    });
    $(Element3).text(totalCount);
    $(Element4).text(totalMoney);
}


/**
 * @description 返回一个数字的id
 * @param {} 没有参数
 * @return 返回一个对象
 */

kits.getUrlParams = function () {
    //在ajax里面的url的参数是这样的： id = 10086&name=goudan&pwd=123
    //我们要把url的参数 用 & 割开，  成为 [键=值，键=值...]
    //在把数组里面的每个 键=值  再 割开， [键，值]
    let arr = location.search.substring(1).split('&');
    let params = {};
    //遍历，把对象里面的每个元素用 '=' 分割
    arr.forEach(e => {
        let temp = e.split('=');
        let key = temp[0];
        let val = temp[1];
        params[key] = val;
    });
    return params;
}




/**
 * @description 封装一个可以获得随机颜色
 * @param {} 没有参数
 * @return 返回随机一个rgb颜色
 */

kits.randomColor = function () {
    //调用我们在17封装的随机整数，调用三次，得到3个随机整数
    //生成3个随机[0,255]之间的随机整数
    var r = randomInt(0, 255);
    var g = randomInt(0, 255);
    var b = randomInt(0, 255);
    //拼接成rgb颜色
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
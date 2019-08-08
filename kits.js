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


/**
 * @description 封装一个可以获得随机颜色(有透明度的)
 * @param {} 没有参数
 * @return 返回随机一个rgba颜色
 */

kits.randomColor = function () {
    //调用我们在17行封装的随机整数，调用三次，得到3个随机整数
    //生成3个随机[0,255]之间的随机整数
    var r = randomInt(0, 255);
    var g = randomInt(0, 255);
    var b = randomInt(0, 255);
    //乘以100以后，再除以100，是想让我们的这个a（透明度）保留两位小数
    var a = Math.floor(Math.random() * 100) / 100;
    //拼接成rgb颜色
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}


/**
 * @description 封装一个随机16进制的颜色
 * @param {} 没有参数
 * @return 返回一个随机的颜色
 */


kits.randomIntSixteen1 = function () {
    //用函数把这16个固定的字符，放到数组里面，随机取
    var r = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var s = '#';
    for (var i = 0; i < 6; i++) {
        //随机取到一个0-f的东西，赋值给index
        var index = Math.floor(Math.random() * r.length);
        //这里是#rgbColor[第几个]
        s = s + r[index];
    }
    return s;
}



/** 
 * @description 封装一个随机16进制的颜色
 * @param {} 没有参数
 * @return 返回一个随机颜色
 */

kits.randomIntSixteen2 = function () {
    // 随机0-15之间的整数，转换为16进制数字，再拼接为 颜色格式
    var pin = '#';
    for (var i = 0; i < 6; i++) {
        var suiji = Math.floor(Math.random() * 16);
        var pin = pin + suiji.toString(16);
    }
    return pin;
}


/**
 *@description   逻辑或 的运算 （三个数相加）
 * @param {a,b,c} 三个随机的数字
 * @return 返回一个三个数的相加的值
 */

kits.getSum1 = function (a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}



/**
 * @description 把一个数组arr里面大于k的数字筛选出来，用空数组b接收
 * @param {arr} 一个数组
 * @param {b} 一个空数组，用于接收被筛选出的数字
 * @param {k} 一个数，作为筛选的条件
 * @return 返回一个大于k所有的数字
 */

kits.filtrate1 = function (arr, b, k) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > k) {
            b.push(arr[i]);
        }
    }
    return b;
}



/**
 * @description 遍历一个数组arr
 * @param {arr} 一个数组
 * @param {e,i} e 是 arr数组里面的每个元素，i是数组里面的索引
 * @return 返回一个数组里面所有元素所有相加的和
 */

kits.traversal = function (arr, e, i) {
    var sum = 0;
    arr.forEach((e, i) => {
        sum += e;
    });
    return sum;
}


/**
 *@description  把一个多个元素从数组的末尾插入
 * @param {string} a 一个你想要插入数组的东西
 * @return 返回一个数组的新长度
 */

kits.insertArr = function (a) {
    arr.push(a);
    return arr;
}


/**
 * @description 从数组的末尾拿出一个元素
 * @param 没有参数  但是要主要：不管这个数组有多少个元素，它也只是那一个末尾的元素
 * @return 被拿出来的原
 */

kits.takeArr = function () {
    arr.pop();
    return arr;
}


/**
 *@description 翻转数组元素
 * @param 没有参数
 * @returns 返回一个被翻转的数组
 */

kits.reverseArr = function () {
    arr.reverse();
    return arr;
}


/**
 * @description 把一个数组，用指定的分隔符，拼接成为一个字符串
 * @param {string} a 是一个分隔符
 * @returns 返回一个字符串
*/

kits.separator = function(a) {
    arr.join('a');
    return arr;
}


/**
 *@description 根据一个指定的分隔符，把字符串，切割成为数组
 * @param {string} a 指定的分隔符
 * @returns 是一个数组
 * 
*/

kits.separatorArr = function(a) {
    //演示
    // var e = '1,2,3,4,5,6';  /* 没有[]才是数组。['1,2,3,4,5'],这个是数组，只不过里面的是字符串而已 */
   e.split('a');
//    console.log(f);  /* 输出["1", "2", "3", "4", "5", "6"] 输出有[]的数组 */
}



/**
 * @description 把一个或者多个元素从数组的前面插入
 * @param {string} e123 多个要插入的元素
 * @param {string} arr 一个数组
 * @return 返回一个新的数组的长度
 */

 kits.beforeInsert = function(e1,e2,e3) {
     arr.unshift(e1,e2,e3);
     return arr;
 }


 /**
  * @description 从数组的最前面把一个元素取出来
  * @param {string} 没有参数
  * @returns 被从前面移除的元素
*/

kits.beforeRemove = function() {
    arr.shift();
    return arr;
}
 


/**
 * @description 可以用于 插入 删除 替换数组中元素
 * @param {string} index 从哪里开始操作
 * @param {string} howmany 总共操作多少个元素
 * @param {string} e1 用于插入或者是替换的新的元素
 * @param {string} e2 用于插入或者是替换的新的元素
 * @returns 返回一个新的数组
*/

kits.replaceArr = function(index,howmany,e1,e2) {
    arr.splice(index,howmany,e1,e2);
    return arr;
}



/**
 * @description 查找某个字符在一个字符串中的位置
 * @param {string} char 目标字符
 * @param {string} fromIndex 从哪里开始查找
 * @returns 整数，如果是-1 代表没有，否则有，有就是返回某个字符所在的位置
*/

kits.findChar = function(char,fromIndex) {
    str.indexOf(char,fromIndex);
    return str;
}



/**
 * @description  用来截取字符串的一部分
 * @param {string} start 从哪里开始
 * @param {string} end 到哪里结束，注意，这个end是获取不到的，如果就是要，请+1，如果省略end，默认是字符串的最末尾
 * @returns 指定位置之间的字符
 */

 kits.cutOut = function(start,end) {
    '字符串'.substring(start,end);
    return '指定位置之间的字符'
 }


 /**
  * @description 根据 precision（精度） 向上舍入 number。（ precision（精度）可以理解为保留几位小数。）
  * @param {string}number (number): 要向上舍入的值
  * @param {string} [precision] (number): 向上舍入的的精度 ,这个精度可选可不选
  * @returns 返回向上舍入的值
 */

 kits.upwardInteger = function (number,[precision]) {
    return Math.ceil(number,[precision]);
    //例如：
    // Math.ceil(4.006);   得到的是5
    // Math.ceil(6.004,2);  得到的是  6.01   这里的精度是2位小数
 }


 /**
  * @description 把数字四舍五入
  * @param {string} x 一个数字
  * @returns 把数字四舍五入之后的整数
 */

kits.roundOff = function(x) {
    return Math.round(x);
}


/**
 * @description 两个数相加
 * @param {string} number1 相加的第一个数
 * @param {string} number2 相加的第二个数
 * @returns 返回总和
*/

kits.addMethods = function(number1,number2) {
    return Math.add(number1,number2);
}
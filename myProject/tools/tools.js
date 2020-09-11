	
/* 	----------- 我的 js 封装工具方法库 ------------- 
    ----------- 作者：东羽 ------------------------ 
    ----------- 联系方式：13920438325 ------------- 
*/
/*  
    用法，例：调用深拷贝方法：
    let tools = new Tools;
    let arr = [{name: '张三',age: 12}];
    let arr2 = tools.deepClone(arr);
                    目录
    1.addEvent              绑定事件的兼容性方法;
    2.arrayRemove           数组对象根据某个属性去重;
    3.preventHaddler        阻止默认事件(表单提交，a标签跳转，右键菜单);
    4.getStyle              获取css属性的兼容性方法;
    5.loadScript            按需执行(异步加载);
    6.myTypeof              封装后的Typeof方法;
    7.stopBubble            阻止事件冒泡兼容写法;
    8.DateHandle            将时间戳或new date()转换成 2018-08-03 18:30:00 格式;
    9.deepCLone             数组对象深克隆;
    10.debounce             函数防抖;
    11.throttle             函数节流;
    12.checkCardNo          验证身份证号;
    13.mobileRemHandel      rem移动端适配;
    14.geturlParam          获取url后参数;
*/
class Tools {
    /*
        * 1.绑定事件的兼容性方法
        * @param elem       要绑定事件的元素
        * @param type       要绑定的事件方法
        * @param haddle     事件处理的函数
     */
    addEvent(elem, type, haddle) {
        if (!elem || !type || !handle) return;
        if(elem.addEventListener) {
            elem.addEventListener(type,handle,flase);
        }else if(elem.attachEvent) {
            elem.attachEvent('on' + type,function () {
                handle.call(elem);
            })
        }else{
            elem['on' + type] = handle;
        }
    }
    /*
        * 2.数组对象根据某个属性去重
        * @param arr       原数组
        * @param key       指定去重的属性
        * @param return {Array}
    */
    arrayRemove(arr,key) {
        if (!arr || !key) return;
        if ([].reduce) {
            let newobj = {},
                newArr = [];
                newArr = arr.reduce((preVal, curVal) => {
                    newobj[curVal[key]] ? '' : newobj[curVal[key]] = preVal.push(curVal);
                    return preVal;
                }, []);
            return newArr;
        } else {
            let newobj = {},
                newArr = [];
            for(let i=0;i<arr.length;i++){
                let item = arr[i];
                if(!newobj[item[key]]){
                    newobj[item[key]] = newArr.push(item);
                }
            }
            return newArr;
        }
    }
    /*3.阻止默认事件(表单提交，a标签跳转，右键菜单) */
    preventHaddler(event) {
        if(event.preventDefault) {
            event.preventDefault();
        }else if(event.returnValue) {
            event.returnValue = false;
        }
    }
    /* 4.获取css属性的兼容性方法 */
    getStyle (elem, prop) {
        if (!elem || !prop) return;
        if(window.getComputedStyle) {
            return window.getComputedStyle(elem,null)[prop];
        }else{
            return elem.currentStyle[prop];
        }
    }
    /* 5.按需执行(异步加载) */
    loadScript (url, callback) {
        if (!url || !callback) return;
        let script = document.createElement('script');
        script.type = "text/javascript";
        if(script.readyState){
            script.onreadystatechange = function () {
                //IE方法
                if(script.readyState == "complete" || script.readyState == "loaded") {
                    tools[callback]();
                }
            }
        }else{
            script.onload = function () {
            // 除了IE
            tools[callback]();
            }
        }
        script.src = url;
        document.head.appendChild(script);
    }
    /*		   用法
    loadScript('demo.js',"test");
    	let tools = {
    	test : function () {
    		console.log("a");
    	},
    	demo : function () {
    		console.log('b');
    	}
    	}
    /* 6.封装后的Typeof方法 */
    myTypeof(target){
        let ret = typeof(target);
        let template = {
            "[object Array]" : "array",
            "[object Object]" : "object",
            "[object Number]" : "number - object",
            "[object Boolean]" : "boolean - object",
            "[object String]" : "string - object"
        };
        if (target === null) {
            return "null";
        }else if(ret == 'object') {
            let str = Object.prototype.toString.call(target);
            return template[str];
        }else{
            return ret;
        }
    }
    /* 7.阻止事件冒泡  */
    stopBubble(event) {
        if(event.stopPropagation) {
            event.stopPropagation();
        }else{
            e.cancelBubble = true;
        }
    }
    /* 8.将时间戳或new date()转换成 2018-08-03 18:30:00 格式 */
    DateHandle(dateTime) {
        let objDate = dateTime ? new Date(dateTime) : new Date(); //创建一个日期对象表示当前时间     
        let year = objDate.getFullYear();   //四位数字年     
        let month = objDate.getMonth() + 1; //getMonth()返回的月份是从0开始的，还要加1     
        let date = objDate.getDate();
        let hours = objDate.getHours();
        let minutes = objDate.getMinutes();
        let seconds = objDate.getSeconds();
        let newDate = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
        return newDate;
    }
    /* 9.数组对象深克隆  */
    deepClone(source) {
        if (typeof source !== 'object') return source; //如果不是对象的话直接返回
        let target = Array.isArray(source) ? [] : {} //数组兼容
        for (let k in source) {
            if (source.hasOwnProperty(k)) {
                if (typeof source[k] === 'object') {
                    target[k] = deepClone(source[k])
                } else {
                    target[k] = source[k]
                }
            }
        }
        return target
    }
    /* 10.函数防抖 */
    debounce(fn, delay) {
        let ts = null;
        return function() {
            clearTimeout(ts);
            ts = setTimeout(() => {
                fn.apply(this, arguments);
            }, delay)
        }
    }
    /* 11.函数节流 */
    throttle(fn, delay) {
        let ts = null,
            first = true;
        return function() {
            if (first) {
                fn.call(this, ...arguments);
                first = false;
            }
            if (!ts) {
                ts = setTimeout(() => {
                    fn.call(this, ...arguments);
                    ts = null;
                }, delay)
            }
        }
    }
    /**
     * 12.验证身份证号
     * @param value {String}   号码输入值
     * @returns {boolean}
    */
    checkCardNo(value){
        // 省级地址码校验
        let checkProv = function (val) {
            let pattern = /^[1-9][0-9]/;
            let provs = {11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门"};
            if(pattern.test(val)) {
                if(provs[val]) {
                    return true;
                }
            }
            return false;
        }
        // 出生日期码的校验
        let checkDate = function (val) {
            let pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
            if(pattern.test(val)) {
                let year = val.substring(0, 4);
                let month = val.substring(4, 6);
                let date = val.substring(6, 8);
                let date2 = new Date(year+"-"+month+"-"+date);
                if(date2 && date2.getMonth() == (parseInt(month) - 1)) {
                    return true;
                }
            }
            return false;
        }
        // 校验码校验
        let checkCode = function (val) {
            let p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
            let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            let parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
            let code = val.substring(17);
            if(p.test(val)) {
                let sum = 0;
                for(let i=0;i<17;i++) {
                    sum += val[i]*factor[i];
                }
                console.log(sum % 11);
                console.log(code);
                console.log(code.toUpperCase());
                if(parity[sum % 11] == code.toUpperCase()) {
                    return true;
                }
            }
            return false;
        }
        if(checkCode(value)) {
            let date = value.substring(6,14);
            if(checkDate(date)) {
                if(checkProv(value.substring(0,2))) {
                    return true;
                }
            }
        }
        return false;
    }
    /* 13.rem移动端适配 */
    mobileRemHandel() {
        let rem = {
            baseRem: 40, // 基准字号，按照iphone6应该为20，此处扩大2倍，便于计算
            baseWidth: 750, // 基准尺寸宽，此处是按照ihpone6的尺寸
            rootEle: document.getElementsByTagName("html")[0],
            initHandle: function () {
                this.setRemHandle();
                this.resizeHandle();
            },
            setRemHandle: function () {
                let clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
                this.rootEle.style.fontSize = clientWidth * this.baseRem / this.baseWidth + "px";
            },
            resizeHandle: function () {
                let that = this;
                window.addEventListener("resize", function () {
                    setTimeout(function () {
                        that.setRemHandle();
                    }, 1000);
                });
            }
        };
        rem.initHandle();
    }
    /* 14.获取url后参数 */
    geturlParam() {            
        let url = location.search; //获取url中"?"符后的字串
        let theRequest = {};
        if(url.indexOf("?") != -1) {
            let str = url.substr(1);
            strs = str.split("&");
            for(let i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
}
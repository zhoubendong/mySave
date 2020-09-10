	
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
*/
class Tools {
    /* 1.绑定事件的兼容性方法 */  
    addEvent (elem, type, haddle) {
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
    /* 2.数组对象根据某个属性去重 */
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
        var script = document.createElement('script');
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
    // 		   用法
    //loadScript('demo.js',"test");
    // 	var tools = {
    // 	test : function () {
    // 		console.log("a");
    // 	},
    // 	demo : function () {
    // 		console.log('b');
    // 	}
    // 	}
    
    /* 6.封装后的Typeof方法 */
    myTypeof(target){
        var ret = typeof(target);
        var template = {
            "[object Array]" : "array",
            "[object Object]" : "object",
            "[object Number]" : "number - object",
            "[object Boolean]" : "boolean - object",
            "[object String]" : "string - object"
        };
        if (target === null) {
            return "null";
        }else if(ret == 'object') {
            var str = Object.prototype.toString.call(target);
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
}
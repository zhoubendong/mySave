
//  实现轮播
$(function () {
    var time = 4;    //进度条时间，以秒为单位，越小越快

    var $progressBar, $bar, $elem, isPause, tick, percentTime;

    $('#owl-demo,#owl-demo3').owlCarousel({
        slideSpeed: 500,
        paginationSpeed: 500,
        singleItem: true,
        afterInit: progressBar,
        afterMove: moved,
        startDragging: pauseOnDragging
    });

    function progressBar(elem) {
        $elem = elem;
        buildProgressBar();
        start();
    }

    function buildProgressBar() {
        $progressBar = $('<div>', {
            id: 'progressBar'
        });
        $bar = $('<div>', {
            id: 'bar'
        });
        $progressBar.append($bar).insertAfter($elem.children().eq(0));
    }

    function start() {
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }

    function interval() {
        if (isPause === false) {
            percentTime += 1 / time;
            $bar.css({
                width: percentTime + '%'
            });
            if (percentTime >= 100) {
                $elem.trigger('owl.next')
            }
        }
    }

    function pauseOnDragging() {
        isPause = true;
    }

    function moved() {
        clearTimeout(tick);
        start();
    }

    $elem.on('mouseover', function () {
        isPause = true;
    })

    $elem.on('mouseout', function () {
        isPause = false;
    });
});


$(function () {
    $('#owl-demo2').owlCarousel();
});




$('#nav-menu .menu > li').hover(function () {
    $(this).find('.children').animate({ opacity: 'show', height: 'show' }, 200);
    $(this).find('.xialaguang').addClass('navhover');
}, function () {
    $('.children').stop(true, true).hide();
    $('.xialaguang').removeClass('navhover');
});


$(function () {
    $('#left-menu').sidr({
        name: 'sidr-left',
        side: 'right'
    });
});




//新闻中心
$(function () {

    $.ajax({
        type: "POST",
        data: {
            page: 1,
            pageSize: 15
        },
        url: "http://39.107.70.80:8080/RedwineUccn/user/getNews",
        dataType: "json",
        success: (res) => {

            // let _data = data.data.pageInfo;
            // var output = '';
            // for (var i in _data.list) {
            //     output += `
            //     <ul class='newsStyle'>
            //     <li><img src="img/news-youjiantou.png"></img></li>
            //     <li>${_data.list[i].title}</li>
            //     <li>${_data.list[i].create_time}</li>
            //     </ul>

            //     `   ;
            // }
            // $('#intro-detail').append(output);
            // console.log(res)
            //  方法二  ES6语法
            if (res) {
                $.each(res.data.pageInfo.list, (index, item) => {
                    $('#intro-detail').append(`
                    <ul class='newsStyle'>
                         <li><img src="img/news-youjiantou.png"></img></li>
                         <li>${item.title}</li>
                         <li>${item.create_time}</li>
                    </ul>
                    `)
                })
            }
            error: (error) => {
                console.log(error);
            }
        }
    })
})
// 分页功能
$(function () {
    jQuery.focus = function (slid) {
        var sWidth = $(slid).width(); //获取焦点图的宽度（显示面积）
        var len = $(slid).find("ul li").length; //获取焦点图个数
        var index = 0;
        var picTimer;

        //以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
        var btn = "<div class='btnBg'></div><div class='btn'>";
        for (var i = 0; i < len; i++) {
            var ii = i + 1;
            btn += "<span>" + ii + "</span>";
        }
        btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
        $(slid).append(btn);
        $(slid).find("div.btnBg").css("opacity", 0.5);

        //为小按钮添加鼠标滑入事件，以显示相应的内容
        $(slid + " div.btn span").css("opacity", 0.4).mouseenter(function () {
            index = $(slid + " .btn span").index(this);
            showPics(index);
        }).eq(0).trigger("mouseenter");

        //上一页、下一页按钮透明度处理
        $(slid + " .preNext").css("opacity", 0.2).hover(function () {
            $(this).stop(true, false).animate({ "opacity": "0.5" }, 300);
        }, function () {
            $(this).stop(true, false).animate({ "opacity": "0.2" }, 300);
        });

        //上一页按钮
        $(slid + " .pre").click(function () {
            index -= 1;
            if (index == -1) { index = len - 1; }
            showPics(index);

        });

        //下一页按钮
        $(slid + " .next").click(function () {
            index += 1;
            if (index == len) { index = 0; }
            showPics(index);
        });

        //本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
        $(slid + " ul").css("width", sWidth * (len));

    };

});


//获取轮播图片
$(function () {
    $.ajax({
        type: "POST",
        data: {
            page: 1,
            pageSize: 4
        },
        url: "http://39.107.70.80:8080/RedwineUccn/user/getPicture",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var _data = data.data.pageInfo;
            $('#lunbo1').attr('src', 'http://zuoanzac.oss-cn-beijing.aliyuncs.com/' + _data.list[0].img + '');
            $('#lunbo2').attr('src', 'http://zuoanzac.oss-cn-beijing.aliyuncs.com/' + _data.list[1].img + '');
            // $('#lunbo3').attr('src', 'http://zuoanzac.oss-cn-beijing.aliyuncs.com/' + _data.list[2].img + '');
            $('#lunbo4').attr('src', 'http://zuoanzac.oss-cn-beijing.aliyuncs.com/' + _data.list[0].img + '');
        }
    })
})


//产品分类
$(function () {
    $.ajax({
        type: "POST",
        data: {},
        url: "http://39.107.70.80:8080/RedwineUccn/user/getClassify",
        dataType: "json",
        success: function (data) {

            var output = '';
            for (var i in data.data) {
                output += ` 
                    <li>${data.data[i].name}<span><img src="img/li-jiantou.png" alt="" width="20" height="20"></span></li>
                    `  ;
            }
            $('.cp-kind').append(output);

            $('#leftnav-main>li').mouseover(function () {
                $(this).css({ "backgroundColor": "#d77a7a", "color": "#fff" });

            });
            $('#leftnav-main>li').mouseout(function () {
                $(this).css({ "backgroundColor": "#efefef", "color": "" });
            });

            /*$('#leftnav-main>li').click(function () {
                var index = $(this).index();
                $("#intro-center>div:eq(" + index + ")").siblings("div").hide();
                $("#intro-center>div:eq(" + index + ")").show();
            }); */


            //产品旁边导航栏选择分类时所对应的产品,比如选择白葡萄酒时就出来白葡萄酒的所有产品         

            $('.cp-kind').find('li').click(function (e) {
                /*  获取当前点击的li的索引位 index  */
                var index = $(this).index();
                console.log(index);
                var name = data.data[index].name;
                console.log(name);
                $.ajax({
                    type: "POST",
                    data: {
                        page: 1,
                        pageSize: 12,
                        classify: name,
                        place: '',
                        price: '',
                        capacity: '',
                        taste: '',
                        variety: '',
                        character: ''

                    },
                    url: "http://39.107.70.80:8080/RedwineUccn/user/getGoods",
                    dataType: "json",
                    success: function (data) {
                        let _data = data.data.PageInfo;
                        console.log(_data)
                        var output = '';
                        for (var i in _data.list) {
                            output += `
                                <figure>
                                <img src="https://zuoanzac.oss-cn-beijing.aliyuncs.com/${_data.list[i].img}"/>
                                <span style="font-size:12px;color:#7c595a;margin-right:5px">规格:${_data.list[i].specification}</span>
                                <span style="font-size:12px;color:#7c595a">价格:${_data.list[i].oriPrice}元</span>
                                <figcaption><span>${_data.list[i].gname}</span></figcaption>
                                </figure>
                
                                `   ;
                        }
                        $('#cp-detail').html(output);

                    }
                })


            })

        }
    })
})



//产品详情---------------首页
$(function () {

    $.ajax({
        type: "POST",
        data: {
            page: 1,
            pageSize: 12,
            classify: '红葡萄酒',
            place: '',
            price: '',
            capacity: '',
            taste: '',
            variety: '',
            character: ''

        },
        url: "http://39.107.70.80:8080/RedwineUccn/user/getGoods",
        dataType: "json",
        success: function (data) {
            let _data = data.data.PageInfo;
            var output = '';
            for (var i in _data.list) {
                output += `
                <figure>
                <a href="cpxx.html" class="pic"><img src="https://zuoanzac.oss-cn-beijing.aliyuncs.com/${_data.list[i].img}"/></a>
                <span style="font-size:12px;color:#7c595a;margin-right:5px">规格:${_data.list[i].specification}</span>
                <span style="font-size:12px;color:#7c595a">价格:${_data.list[i].oriPrice}元</span>
                <figcaption><a href="cpxx.html">${_data.list[i].gname}</a></figcaption>
                </figure>

                `   ;

            }
            $('#cp-detail').append(output);
        }
    })




    //设置左边导航栏

    $('#leftnav-main>li').mouseover(function () {
        $(this).css({ "backgroundColor": "#d77a7a", "color": "#fff" });

    });
    $('#leftnav-main>li').mouseout(function () {
        $(this).css({ "backgroundColor": "#efefef", "color": "" });
    });
    $('#leftnav-main>li').click(function () {

        var index = $(this).index();
        $("#intro-center>div:eq(" + index + ")").siblings("div").hide();
        $("#intro-center>div:eq(" + index + ")").show();
    });


})

//                  分页功能
$(function () {
    var zp = {
        init: function (obj, pageinit) {
            return (function () {
                zp.addhtml(obj, pageinit);
                zp.bindEvent(obj, pageinit);
            }());
        },
        addhtml: function (obj, pageinit) {
            return (function () {
                obj.empty();
                /*上一页*/
                if (pageinit.current > 1) {
                    obj.append('<a href="javascript:;" class="prebtn">上一页</a>');
                } else {
                    obj.remove('.prevPage');
                    obj.append('<span class="disabled">上一页</span>');
                }
                /*中间页*/
                if (pageinit.current > 4 && pageinit.pageNum > 4) {
                    obj.append('<a href="javascript:;" class="zxfPagenum">' + 1 + '</a>');
                    obj.append('<a href="javascript:;" class="zxfPagenum">' + 2 + '</a>');
                    obj.append('<span>...</span>');
                }
                if (pageinit.current > 4 && pageinit.current <= pageinit.pageNum - 5) {
                    var start = pageinit.current - 2, end = pageinit.current + 2;
                } else if (pageinit.current > 4 && pageinit.current > pageinit.pageNum - 5) {
                    var start = pageinit.pageNum - 4, end = pageinit.pageNum;
                } else {
                    var start = 1, end = 9;
                }
                for (; start <= end; start++) {
                    if (start <= pageinit.pageNum && start >= 1) {
                        if (start == pageinit.current) {
                            obj.append('<span class="current">' + start + '</span>');
                        } else if (start == pageinit.current + 1) {
                            obj.append('<a href="javascript:;" class="zxfPagenum nextpage">' + start + '</a>');
                        } else {
                            obj.append('<a href="javascript:;" class="zxfPagenum">' + start + '</a>');
                        }
                    }
                }
                if (end < pageinit.pageNum) {
                    obj.append('<span>...</span>');
                }
                /*下一页*/
                if (pageinit.current >= pageinit.pageNum) {
                    obj.remove('.nextbtn');
                    obj.append('<span class="disabled">下一页</span>');
                } else {
                    obj.append('<a href="javascript:;" class="nextbtn">下一页</a>');
                }
                /*尾部*/
                obj.append('<span>' + '共' + '<b>' + pageinit.pageNum + '</b>' + '页，' + '</span>');
                obj.append('<span>' + '到第' + '<input type="number" class="zxfinput" value="5"/>' + '页' + '</span>');
                obj.append('<span class="zxfokbtn">' + '确定' + '</span>');
            }());
        },
        bindEvent: function (obj, pageinit) {
            return (function () {
                obj.on("click", "a.prebtn", function () {
                    var cur = parseInt(obj.children("span.current").text());
                    var current = $.extend(pageinit, { "current": cur - 1 });
                    zp.addhtml(obj, current);
                    if (typeof (pageinit.backfun) == "function") {
                        pageinit.backfun(current);
                    }
                });
                obj.on("click", "a.zxfPagenum", function () {
                    var cur = parseInt($(this).text());
                    var current = $.extend(pageinit, { "current": cur });
                    zp.addhtml(obj, current);
                    if (typeof (pageinit.backfun) == "function") {
                        pageinit.backfun(current);
                    }
                });
                obj.on("click", "a.nextbtn", function () {
                    var cur = parseInt(obj.children("span.current").text());
                    var current = $.extend(pageinit, { "current": cur + 1 });
                    zp.addhtml(obj, current);
                    if (typeof (pageinit.backfun) == "function") {
                        pageinit.backfun(current);
                    }
                });
                obj.on("click", "span.zxfokbtn", function () {
                    var cur = parseInt($("input.zxfinput").val());
                    var current = $.extend(pageinit, { "current": cur });
                    zp.addhtml(obj, { "current": cur, "pageNum": pageinit.pageNum });
                    if (typeof (pageinit.backfun) == "function") {
                        pageinit.backfun(current);
                    }
                });
            }());
        }
    }
    $.fn.createPage = function (options) {
        var pageinit = $.extend({
            pageNum: 15,
            current: 1,
            backfun: function () { }
        }, options);
        zp.init(this, pageinit);
    }
    $(".zxf_pagediv").createPage({
        pageNum: 20,
        current: 6,
        backfun: function (e) {
            //console.log(e);//回调
            console.log(e)
        }
    });
});














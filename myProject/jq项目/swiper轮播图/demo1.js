$(document).ready(function () {
	// 轮播
	function news(s1, s2) {
		$(".titleText").text(s1);
		$('.textContent').text(s2);
	}

	var mySwiper = new Swiper('.swiper-container', {
		// direction: 'vertical', // 垂直切换选项
		centeredSlides: true,// 活动块居中
		loop: true, // 循环模式选项
		spaceBetween: 30,
		autoplay: {
			delay: 1500,//  播放时间
			disableOnInteraction: false,
		},
		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},

		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// 如果需要滚动条
		// scrollbar: {
		//   el: '.swiper-scrollbar',
		// },

		on: {
			slideChange: function () {
				if (this.realIndex == 1) {
					news("跑车", '这个是第二个内容');
				} else if (this.realIndex == 2) {
					news("这是房间", '这个是第三个内容');
				} else if (this.realIndex == 3) {
					news("美女", '这个是第四个内容');
				} else if (this.realIndex == 0) {
					news("第十五届中国 科学家论坛在京召开 拾起卖受邀参加", "第十五届第十五届第十五届第十五届第十五届第十五届第十五届第十五届第十五届第十五届第十五届第十五届第十五届第十五届第十五届第十五届第十五届第十五届第十五届第十五届第十五届第十五届");
				}
			}
		},
	})
		//鼠标放上暂停轮播 
	$('.titleText').mouseover(function () {       
		mySwiper.autoplay.stop();
	});
		//鼠标移出播放轮播 
	$('.titleText').mouseleave(function () {
		mySwiper.autoplay.start();
	});



})
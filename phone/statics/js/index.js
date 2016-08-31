
$(document).on("touchstart", ".nav_dialog_btn", function (t) {
	t.preventDefault(), $("#nav").toggleClass("show_nav");
});

$(document).ready(function () {
	$(document).on("touchstart", ".btn_p1_buy", function (t) {
		$("html,body").animate({scrollTop:$("#lygmBox").offset().top-40},500);
		$('.pro_nav').css({
			top: 0,
			position: "fixed"
		});
		$('.pro_navBox').show();

		return false;
	});
	
		$.each($(".serverpic img"), function (index) {
	    var src = $(this).attr("src");
	    $(this).attr("src", "http://adminplus.crazyfire.love:81/" + src);
	});

	
	if($(".banner").length>0){
		$(".banner").swiper({ 
			loop: false,
			autoplay: 4000,
			simulateTouch : false,
			//speed: 1500,
			pagination: '.swiper-pagination',
			paginationBulletRender: function(index, className) {
				return '<span class="' + className + ' banner_switch">' + (index + 1) + '</span>';
			},
			paginationClickable: true,
		});
	}
	
	if($(".activeBox").length>0){
		var activeBox = new Swiper(".activeBox",{ 
			loop: false,
			effect : 'fade',
			autoplay: 4000,
			simulateTouch : false,
			//speed: 1500,
			pagination: '.swiper-paginationactiveBox',
			onSlideChangeStart: function(swiper){
				var index = swiper.activeIndex;
			  $(".activeControlBox ul li").eq(index).addClass("on").siblings().removeClass("on");
			},
			onInit: function(swiper){
				var index = swiper.activeIndex;
				$(".activeControlBox ul li").eq(index).addClass("on").siblings().removeClass("on");
			}
		});
		
		$(".activeControlBox ul li").click(function(){
			var index= $(this).index();
			$(".activeControlBox ul li").eq(index).addClass("on").siblings().removeClass("on");
			activeBox.slideTo(index, 1000, false);
			return false;
		});
	}
	
	
	if($(".sideMenu").length > 0){
		$(".sideMenu").slide({titCell:"h3", targetCell:".tab-content",defaultIndex:1,effect:"slideDown",delayTime:300,trigger:"click",triggerTime:0,defaultPlay:false});
	}
		
	$("#scrollTop").click(function(){
		$("html,body").animate({scrollTop:0},500);
	});
	if($(document).scrollTop() > 50){
		$('.pro_nav').css({
			top: 0,
			position: "fixed"
		});
		$('.pro_navBox').show();
	}else{
		$('.pro_nav').css({
			position: "relative"
		});
		$('.pro_navBox').hide();
	}
	
		if($(document).scrollTop()>100){
			$("#scrollTop").show();
		}else{
			$("#scrollTop").hide();
		}
		
});

$(document).scroll(function () {
	if($(document).scrollTop() > 50){
		$('.pro_nav').css({
			top: 0,
			position: "fixed"
		});
		$('.pro_navBox').show();
	}else{
		
		$('.pro_nav').css({
			position: "relative"
		});
		$('.pro_navBox').hide();
	}
	
	if($(document).scrollTop()>100){
		$("#scrollTop").show();
	}else{
		$("#scrollTop").hide();
	}
});
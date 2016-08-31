;
if(typeof jQuery === 'undefined'){
	throw new Error('jQuery is required');
};
$(function(){
	var wmApp = {
		listen:function(){
			//自动播放的选项卡	
			var $bannerBox = $('.js-tab');
			var $banner = $('.js-tab-box').children('div');
			var $prev = $('#js-prev');
			var $next = $('#js-next');
			var iNow = 0;
			var timer = null;
			var $smallLi = $('.m-item09-ul li');
			if($banner.length>1){
				timer = setInterval(autoTab,3000);
				$prev.click(function(){
					iNow--;
					if(iNow<=0){
						iNow = $banner.length - 1;
					}
					clearInterval(timer);
					Tab(iNow);
					timer = setInterval(autoTab,3000);
				});
				$next.click(function(){
					iNow++;
					if(iNow >= $banner.length){
						iNow = 0;
					}
					clearInterval(timer);
					Tab(iNow);
					timer = setInterval(autoTab,3000);
				});
				$smallLi.click(function(){
					iNow = $(this).index();
					clearInterval(timer);
					Tab(iNow);
					timer = setInterval(autoTab,3000);
				})
			};
			function Tab(iNow){
				$smallLi.removeClass('current');
				$banner.removeClass('current');
				$smallLi.eq(iNow).addClass('current');
				$banner.eq(iNow).addClass('current');
			};
			function autoTab(){
				iNow++;
				if(iNow >= $banner.length){
					iNow = 0;
				}
				Tab(iNow);
			};

			var bIncreaseStop = false;
			var bLightStop = false;
			var i = 0;
			//滚动的时候固定
			$(window).scroll(function(){
				if($(window).scrollTop()>=100){
					$('.m-top-copy').show();
					$('.m-top').addClass('m-top-fixed');
				}else{
					$('.m-top-copy').hide();
					$('.m-top').removeClass('m-top-fixed');
				};

				if( $(window).scrollTop() > $('.m-item02').offset().top - 300){
					if(!bIncreaseStop){
						fnIncrease($('.m-textindent-01 strong'),4.0,1000,0.1);
						fnIncrease($('.m-textindent-02 strong'),20,1000,1);
						fnIncrease($('.m-textindent-03 strong'),20,1000,1);
						bIncreaseStop = true;
					}
					
				};
				if( $(window).scrollTop() > $('.m-item03').offset().top - 300){
					$('.m-item03-img').addClass('active');
				};
				if( $(window).scrollTop() > $('.m-item05').offset().top - 300){
					$('.js-battery-img').addClass('active');
				};
				if( $(window).scrollTop() > $('.m-item07').offset().top - 300){
					//灯光切换
					if(!bLightStop){
						bLightStop = true;
						setTimeout(function(){
							$('.m-item07-light').addClass('active');
							$('.m-item07-detail').addClass('active');
						},1000);
					}
					
				}
				
			});
			//表单提交
//			var $require = $('.require');
//			var $mobile = $('#js-mobile');
//			var $email = $('#js-email')
//			$('.m-input-sbm').click(function(){
//				if(fnValidate($require,'m-red') && editMobile($mobile,'m-red') && isEmail($email,'m-red')){
//					return true;
//				}
//				return false;
//			});

			//文本域字数
//			$('.m-form-text-area textarea').keyup(function(){
//				var $this = $(this);
//				var $value = $this.val();
//				if($value.length>=1500){
//					alert('超出1500字');
//					$(this).val($value.substr(0,500));
//					$('.m-form-len span').text('500');
//					return;
//				}
//				$('.m-form-len span').text($value.length);
//			});
			//自行车自动划入
//			setTimeout(function(){
//				$('.js-m-car-main').addClass('active');
//				$('.js-m-car-handlebar').addClass('active');
//			},500);
			$('.m-app-ul li').hover(function(){
				$('.m-item06-l img').removeClass('current');
				$('.m-item06-l img').eq($(this).index()).addClass('current')
				$(this).find('img').attr('src',$(this).attr('data-hover')).animate({opacity:1},1000);
			},function(){
				$(this).find('img').attr('src',$(this).attr('data-default')).animate({opacity:1},1000)
			});
			

			
	},
		init: function(){
			this.listen();
		}
	}
	wmApp.init();
})

//使重量，续航能力，最高速度缓慢增加
function fnIncrease(obj,num,time,increaseNum){
	var step = 0;
	if(parseInt(num,10)<10){//parseInt(num,10)，只要num小于10，值都为num，如果19，值为19
		num.toFixed(1);//toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。
		step = num * 10;//如果num小于10，增加10倍，和大于10的一起增加
	}else{
		step = num ;
	}
	clearInterval(obj.timer);
	var baseNum = 0;
	var seconds = Math.floor(time / step );
	obj.timer = setInterval(function(){
		baseNum = baseNum * 1 + increaseNum * 1;
		if(baseNum.toFixed(1) == num ){
			clearInterval(obj.timer);
			obj.timer = null;
		}
		if(parseInt(num,10)<10){
			$(obj).text(baseNum.toFixed(1));
		}else{
			$(obj).text(baseNum);
		}
	},seconds);
};
function fnValidate(obj,sClass){
    var oValue = obj.val();
    if(oValue != null && oValue.trim().length > 0){
        obj.removeClass(sClass)
        return true;
    }else{
       // obj.addClass(sClass);
        return false;
    };
};
function editMobile(obj,sClass){

};
function isEmail(obj,sClass){ 

} 



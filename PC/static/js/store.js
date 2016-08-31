
		   
			$(function() {
				 var adCnt=2;
		    var animateEnd = 1;
		    var time=null;
				$("body").css("background-color","#f5f5f5");
				if(adCnt>0){
					time=window.setInterval(nextscroll, 2000);
					$("#img_ad_1").attr("src","../static/img/store_ad_select.png");
					var width=adCnt*(16+15);
					$("#div_store_select").css("width",width);
				}
			});
			
			function nextscroll() {
				var vcon = $(".store_ad_show ");
				var offset = ($(".store_ad_show li").width()) * -1;
				vcon.stop().animate({
					left : offset
				}, "slow", function() {
					var firstItem = $(".store_ad_show ul li").first();
					vcon.find("ul").append(firstItem);
					$(this).css("left", "0px");
					
					var currentItem = $(".store_ad_show ul li").first();
					var currentIndex = currentItem.attr("index");
					
					onSelectAd(currentIndex);
				});
				
				
			}
			
			function selectAd(index){
				clearTimeout(time);
				if(animateEnd==0){return;}
				var nextindex = index;
				var currentindex = $(".store_ad_show li").first().attr("index");
				var curr = $(".store_ad_show li").first().clone();
				
				if(nextindex > currentindex){

						for (var i = 0; i < nextindex - currentindex; i++) {
							 
							 var firstItem = $(".store_ad_show li").first();
							 $(".store_ad_show ul").append(firstItem); 
								
						}

						$(".store_ad_show ul").prepend(curr);

						var offset = ($(".store_ad_show li").width())*-1;

						if(animateEnd==1){

							animateEnd=0;	
							$(".store_ad_show").stop().animate({left:offset},"slow",function(){

									$(".store_ad_show ul li").first().remove();
									$(".store_ad_show").css("left","0px");
									animateEnd=1;
									time=window.setInterval(nextscroll, 2000);

							}); 

						} 

				}else{

						var curt = $(".store_ad_show li").last().clone();

						for (var i = 0; i < currentindex - nextindex; i++) {
							 var lastItem = $(".store_ad_show li").last();
							 $(".store_ad_show ul").prepend(lastItem);
						}

						$(".store_ad_show ul").append(curt);

						var offset = ($(".store_ad_show li").width())*-1;

						$(".store_ad_show").css("left",offset);
								

						  if(animateEnd==1){

								animateEnd=0;	
								$(".store_ad_show").stop().animate({left:"0px"},"slow",function(){
									
									$(".store_ad_show ul li").last().remove();
									animateEnd=1;
									time=window.setInterval(nextscroll, 2000);
								  
								}); 

							} 
					
					}
				
				onSelectAd(index);
			}
			
			function  onSelectAd(index){
				 if(index>adCnt) return;
				 for(var i=1;i<=adCnt;i++){
					 if(index==i) continue;
					 $("#img_ad_"+i+"").attr("src","../static/img/store_ad_normal.png");
				 }
				 $("#img_ad_"+index+"").attr("src","../static/img/store_ad_select.png");
			}
		
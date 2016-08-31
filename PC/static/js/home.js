$(document).ready(
					function() {
						var adCnt =7;
						if (adCnt > 0) {
							var width = adCnt * (50 + 30);
							$(".flicking_con").css("width", width);
						}

						$(".home_ad").hover(function() {
							$("#btn_prev,#btn_next").fadeIn()
						}, function() {
							$("#btn_prev,#btn_next").fadeOut()
						});

						$dragBln = true;

						$(".home_ad_show").touchSlider(
								{
									flexible : true,
									speed : 300,
									btn_prev : $("#btn_prev"),
									btn_next : $("#btn_next"),
									paging : $(".flicking_con a"),
									counter : function(e) {
										$(".flicking_con a").removeClass("on")
												.eq(e.current - 1).addClass(
														"on");
									}
								});

						$(".home_ad_show").bind("mousedown", function() {
							$dragBln = false;
						});

						$(".home_ad_show").bind("dragstart", function() {
							$dragBln = true;
						});

						$(".home_ad_show a").click(function() {
							if ($dragBln) {
								return false;
							}
						});

						timer = setInterval(function() {
							$("#btn_next").click();
						}, 5000);

						$(".home_ad").hover(function() {
							clearInterval(timer);
						}, function() {
							timer = setInterval(function() {
								$("#btn_next").click();
							}, 5000);
						});

						$(".home_ad_show").bind("touchstart", function() {
							clearInterval(timer);
						}).bind("touchend", function() {
							timer = setInterval(function() {
								$("#btn_next").click();
							}, 5000);
						});
					});
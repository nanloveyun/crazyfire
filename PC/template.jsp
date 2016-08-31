<%@page import="com.util.CodeBehind"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
        CodeBehind code=new CodeBehind(pageContext);
        int tab=code.requestIntOrDefault("tab", 0);
 %>
<%@ taglib prefix="decorator"
	uri="http://claudiushauptmann.com/jsp-decorator/"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="keywords" content="疯火科技,fenghuokeji，轻度，智能代步车,世界最小的电动代步车，电动滑板车" />
<meta name="description" content="轻度智能代步车是疯火科技研发制造的世界上最轻、最小的短途代步交通工具，可以放入背包随时带上公交、地铁等公共交通。" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link href="../statics/css/style.css"  rel="stylesheet"  type="text/css"/>
	 <script src="../statics/js/md5.js"></script>
	 <script src="../statics/js/jquery-1.11.3.min.js"></script>
	 <script  src="../statics/js/jquery.touchSlider.js"></script>
     <script  src="../statics/js/jquery.twbsPagination.min.js"></script>
	 <script src="../statics/js/Comment.js"></script>
	 <script src="../statics/js/m-default.js"></script>
	 <script src="../statics/js/videojs/video.js"></script>
	 <script src="../statics/js/videojs/videojs-ie8.min.js"></script>
	 <link href="../statics/js/videojs/video-js.css"  rel="stylesheet"  type="text/css"/>
	 <link href="../statics/css/m-default.css"  rel="stylesheet"  type="text/css"/>
	 <link href="../statics/css/common.css"  rel="stylesheet"  type="text/css"/>
	 <link href="../statics/css/reset.css"  rel="stylesheet"  type="text/css"/>
<decorator:placeholder name='include' />
</head>
<title><decorator:placeholder name='title' />-疯火科技</title>
<decorator:placeholder name='script' />
<script>
$(function(){  
	   //设置菜单状态
	   if(<%=tab%>>0){
	     $("#menu_<%=tab%>").attr("class","active");
	   }
	   
		$('.J_chuxing').click(function(){
			$('.fh-qcode').addClass('n');
		});
		$('.fh-qcode').click('.close',function(){
			$('.fh-qcode').removeClass('n');
		});
});  
</script>
<body>
		<decorator:placeholder name='top' />
		<div class="head">
		     <div class="head_content">
		
		           <img src="../statics/img/logo.jpg" onclick="location.href='../home/'"/>

			       <a id="menu_5"  href="http://space.crazyfire.love">社区</a>
			       <a id="menu_4"  href="../download/">应用下载</a>
			       <a id="menu_3"  href="../store/">配件商城</a>
			       <a id="menu_2"  href="../zar/"   style="padding-top:22px;">轻度<sup>TM</sup>智能车</a>
			       <a id="menu_1" style="display:none"  href="../home/">首页</a>
		      </div>
		</div>
		
	

		<decorator:placeholder name='content'/>
		
		<decorator:placeholder name='bottom'/>
		<div class="footer">
			<div class="bottom1">
			 <div class="bottom1_content1">
			     <a href="../about">关于我们</a>
			     <a href="../contact">联系我们</a>
			     <a href="../join">加入我们</a>
			     <a href="../service">售后服务</a>
			     <a href="#">购买指南</a>
			     <a href="http://weibo.com/u/5707920997?topnav=1&wvr=6&is_hot=1" >新浪微博</a>
			     <a class="last J_chuxing" href="javascript:;"  style="border-right: 0px solid #60636b;">微信公众平台</a>
			  </div>
			</div>
			<div class="bottom2">
			 <div class="bottom2_content2">
			     <label>Copyright © 2015, Crazyfire tech Co., Ltd. All Rights Reserved.&nbsp;&nbsp;&nbsp;&nbsp;奎泽范 （天津）科技发展有限公司&nbsp;&nbsp;&nbsp;&nbsp;ICP备15006632号</label>
			 </div>
		     
		   </div>
		  </div>  
		   <!-- 扫描二维码 -->
<div class="fh-qcode">
    <img src="../statics/images/fh-qcode.png" height="520" width="346">
    <a href="javascript:;" class="close"></a>
</div>

</body>
</html>

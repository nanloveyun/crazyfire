<%@page import="com.util.CodeBehind"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%

 %>
<%@ taglib prefix="decorator"
	uri="http://claudiushauptmann.com/jsp-decorator/"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="keywords" content="疯火科技,fenghuokeji，轻度，智能代步车,世界最小的电动代步车，电动滑板车" />
<meta name="description" content="轻度智能代步车是疯火科技研发制造的世界上最轻、最小的短途代步交通工具，可以放入背包随时带上公交、地铁等公共交通。" />
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="MobileOptimized" content="320" />
    <meta name="format-detection" content="telephone=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta HTTP-EQUIV="Pragma" CONTENT="no-cache" />
    <meta HTTP-EQUIV="Expires" CONTENT="-1" />
  <link rel="icon" href="../statics/images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../statics/css/bootstrap.min.css" type="text/css" />
    <link rel="stylesheet" href="../statics/css/main.css" type="text/css" />
    <link type="text/css" rel="stylesheet" href="../statics/js/swiper.min.css" />
    <script type="text/javascript" src="../statics/js/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="../statics/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="../statics/js/swiper.min.js"></script>
	<script type="text/javascript" src="../statics/js/index.js"></script>
<decorator:placeholder name='include' />
</head>
<title><decorator:placeholder name='title' />-疯火科技</title>
<decorator:placeholder name='script' />
<script>
$(function(){  

});  
</script>
<body >
		<decorator:placeholder name='top' />
		<!-- 导航收起时 -->
<nav class="nav" id="nav">
    <!-- 导航展开时 -->
    <!-- <nav class="nav"> -->
    <div class="nav_dialog_btn u_c"><!-- 点击本按钮给class="nav_dialog_wrap"加多个class="show_nav --></div>
    <h1 class="logo_wrap">
        <a class="logo" href="../home">疯火科技</a>
    </h1>
    <!--<a class="iconfont icon_user" href="http://m.crazyfire.hk">EN</a>-->
    <div class="nav_dialog_wrap">
        <div class="nav_dialog">
            <ul class="menu ui_cl">
                <li class="menu_li"> <a href="../home">首页</a> </li>
                <li class="menu_li"> <a href="../zar">轻度</a> </li>
                 <li class="menu_li"> <a href="../store">配件商城</a> </li>
                <li class="menu_li"> <a href="../download">APP</a> </li>
                <li class="menu_li"><a href="http://space.crazyfire.love">社区</a> </li>
                 <li class="menu_li"> <a href="../join">加入我们</a> </li>
            </ul>
        </div>
    </div>
</nav>
		
	

<decorator:placeholder name='content'/>
		
		<decorator:placeholder name='bottom'/>
		<div id="footer" class="footer">
    <div class="list-txt">
         
          <a href="../about">关于我们</a>
            <a href="../contact">联系我们</a>
            <a href="../service">售后服务</a>
             <a href="http://weibo.com/u/5707920997?topnav=1&wvr=6&is_hot=1">新浪微博</a>
    </div>
    <div class="list-tel" style="margin-top:20px;">
        <div class="tel-item tl"><span class="c999">公司电话：400-6072009 </span></div></div>

    <div class="footer-cp c999">
        Copyright © 2015 .Crazyfire.hk  All Rights Reserved. <br />
        津ICP备15006632号
    </div>
</div>
<div id="scrollTop" class="scroll-top"></div>

</body>
</html>

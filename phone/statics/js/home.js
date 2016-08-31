// JavaScript Document
function id(obj) {
    return document.getElementById(obj);
}
function bind(obj, ev, fn) { 
    if (obj.addEventListener) {
        obj.addEventListener(ev, fn, false);
    } else {
        obj.attachEvent('on' + ev, function() {
            fn.call(obj);
        });
    }
}
function view() {
    return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
    };
}
function addClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) {
        obj.className = sClass;
        return;
    }
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) return;
    }
    obj.className += ' ' + sClass;
}

function removeClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) return;
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) {
            aClass.splice(i, 1);
            obj.className = aClass.join(' ');
            break;
        }
    }
}

/*图片自动切换*/
function fnTab(){
	var oTab=id("banner");
	var oList=id("picList");
	var oNav=oTab.getElementsByTagName("nav")[0];
	var aNav=oNav.children;
	var iNow=0//当前选中的
	var iX=0;//通过改变translateX来实现图片的切换
	var iW=view().w;//获得屏幕的宽度
	var oTimer=0;
	auto();
	function auto()
	{
		oTimer=setInterval(function(){
			iNow++;	
			iNow=iNow%aNav.length;
			tab();
		},2000);
	}
	                                                                                                                                                        
	//图片切换
	function tab(){
		iX=-iNow*iW;
		oList.style.transition="0.5s";
		oList.style.transform=oList.style.WebkitTransform="translateX("+iX+"px)";//改变translateX的值
		for(var i=0;i<aNav.length;i++){
			removeClass(aNav[i],"active");
		}
		addClass(aNav[iNow],"active");//设为当前的iNow的类名active
	}
	
	//手指滑屏的操作touchStart,touchMove,touchEnd
	
	var iStartTouchX=0;//当前手指所在的的位置
	var iStartX=0;//当前的位置
	//首先阻止document默认的拖拽
	bind(document,"touchmove",function(ev){
		ev.preventDefault();
	});
	bind(oTab,"touchstart",fnStart);
	bind(oTab,"touchmove",fnMove);
	bind(oTab,"touchend",fnEnd);
	function fnStart(ev){
		ev=ev.changedTouches[0];//获取单指操作的集合
		iStartTouchX=ev.pageX;//ev.pageX当前手指所在的坐标
		iStartX=iX;//当前元素所在坐标
		clearInterval(oTimer);
		oList.style.transition="none";
	}
	function fnMove(ev){
		
		ev=ev.changedTouches[0];//获取单指操作的集合
		var oDis=ev.pageX-iStartTouchX;//手指在屏幕上移动的距离
		iX=iStartX+oDis;
		oList.style.transform=oList.style.WebkitTransform="translateX("+iX+"px)";//改变translateX的值
	}
	
	function fnEnd(){
		iNow=iX/iW;
		iNow=-Math.round(iNow);//四舍五入取整
		if(iNow<0)
		{//首张图
			iNow=0;
		}
		if(iNow>aNav.length-1)
		{//最后一张图
			iNow=aNav.length-1;
		}
		tab();
		auto();
	}
}
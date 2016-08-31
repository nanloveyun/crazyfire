/***
 *���������˼�룺���з�����˽�з�������̬������ȫ�ֱ������ֲ���������̬���������췽��������̳У���̬�����أ�����
 */
if (typeof Readchar == "undefined" || !Readchar) {
	var Readchar = {};
};

/***
 *ϵͳ�汾��������汾
 */

Readchar.Client =Rcl= (function(){
	 //�������� 
     var engine = {
         ie : 0,															//ie11�жϲ�����
         gecko : 0,
         webkit : 0,
         khtml : 0,
         opera : 0,
 
         //����İ汾��
         ver : null
     };
 
     var browser = {
         //�����
         ie : 0,
         firefox : 0,
         konq : 0,
         opera : 0,
         chrome : 0,
         safari : 0,
 
         //����İ汾
         ver : null
     };
 
     //ƽ̨���豸�Ͳ���ϵͳ
     var system = {
         win : false,
         mac : false,
         xll : false,
 
         //�ƶ��豸
         iphone : false,
         ipod : false,
         nokiaN : false,
         winMobile : false,
         macMobile : false,
 
         //��Ϸϵͳ
         wii : false,
         ps : false
     };
 
     //���������漰�����
     var ua = navigator.userAgent;
 
     if ( window.opera ){
        
         engine.ver = window.opera.version();
         engine.opera = parseFloat( engine.ver );
 
     } else if ( /AppleWebKit\/(\S+)/.test(ua)){
         
         engine.ver = RegExp["$1"];
         engine.webkit = parseFloat(engine.ver);
 
         //ȷ����Chrome ���� Safari
         if ( /Chrome\/(\S+)/.test(ua)){
             browser.ver = RegExp["$1"];
             browser.chrome = parseFloat(browser.ver);
		 }else if ( /Version\/(S+)/.test(ua)){
			 browser.ver = RegExp["$1"];
			 borwser.safari = parseFloat(browser.ver);
		 }else {
             //���Ƶ�ȷ���汾��
             var safariVersion = 1;
 
             if (engine.webkit < 100 ){
                 safariVersion = 1;
             } else if (engine.webkit < 312){
                 safariVersoin = 1.2;
             } else if (engine.webkit < 412){
                 safariVersion = 1.3;
             } else {
                safariVersion = 2;
             }
 
             browser.safari = browser.ver = safariVersion;
         }
 
     } else if ( /KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)){
         engine.ver = RegExp["$1"];
         engine.khtml = parseFloat(engine.ver);
     } else if ( /rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
         engine.ver = RegExp["$1"];
         engine.gecko = parseFloat(engine.ver);
 
         //ȷ������Firefox
         if( /Firefox\/(\S+)/.test(ua)){
             browser.ver = RegExp["$1"];
             browser.firefox = parseFloat(browser.ver);
         }
 
     } else if (/MSIE ([^;]+)/.test(ua)){
         engine.ver = browser.ver = RegExp["$1"];
         engine.ie = browser.ie = parseFloat(engine.ver);
     }
 
     //��������
     browser.ie = engine.ie;
     browser.opera = engine.opera;
 
     //���ƽ̨
     var p = navigator.platform;
     system.win = p.indexOf("Win") == 0;
     system.mac = p.indexOf("Mac") == 0;
     system.xll = (p.indexOf("Xll")) == 1 || (p.indexOf("Linux") == 0);
 
     //��� Windows ����ϵͳ
     if( system.win){
         if( /Win(?:dows)?([^do]{2})\s?(\d+\.\d+)?/.test(ua)){
             if(RegExp["$1"] == "NT"){
                 switch(RegExp["$2"]){
                     case "5.0" :
                         system.win = "2000";
                         break;
                     case "5.1" :
                         system.win = "XP";
                         break;
                     case "6.0" :
                         system.win = "Vista";
                         break;
                     default : 
                         system.win = "NT";
                         break;
                 }
             } else if (RegExp["$1"] == "9x"){
                 system.win = "ME";
             } else {
                 system.win = RegExp["$1"];
             }
         }
     }
 
     //�ƶ��豸
     system.iphone = ua.indexOf("iphone") > -1;
     system.ipod = ua.indexOf("iPod") > -1;
     system.nokiaN = ua.indexOf("NokiaN") > -1;
     system.winMobile = (system.win == "CE");
     system.macMobile = (system.iphone || system.ipod);
 
     //��Ϸϵͳ
     system.wii = ua.indexOf("Wii") > -1;
     system.ps = /playstation/i.test(ua);
 
     //�ٴμ��������桢ƽ̨���豸
 
     return {
         engine : engine,
         browser : browser,
	     system : system
	};
})();


/*old version about browser check
Readchar.Browser = (function() {
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s; (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] : (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] : (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] : (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
	return Sys;
})();
*/

/********//*
 Some Common function in here about javasctipt maybe sometime'll be used;
*//********/

Readchar.Common = {
	extend: function(oTarget, oSource) {
		for (var p in oSource) {
			if (oSource.hasOwnProperty(p)) {
				oTarget[p] = oSource[p];
			}
		}
		return oTarget;
	}
};
Readchar.DOM =Rd= {
	targetElemt:null,
	getElement:function(){
		return Rd.targetElemt;
	},
	setElment:function(oElm){
		Rd.targetElemt=oElm;
	},
	findElements: function(Selector) {
		if (/^#\w+/i.test(Selector)) {
			var element = document.getElementById(Selector.substr(1));
			return element == null ? null: element;
		}
		 else if (/^\.\w+/i.test(Selector)) {
			var elements = document.getElementsByClassName(Selector.substr(1));
			return elements.length == 0 ? null: elements;
		}
		 else {
			var elements = document.getElementsByTagName(Selector);
			return elements.length == 0 ? null: elements;
		}
	},
	delectElements: function(elements) {
		var size = elements.length ? elements.length: null;
		if (size) {
			for (var i = 0; i < size; i++) {
				elements[0].parentNode.removeChild(elements[0]);
			}
		} else {
			elements.parentNode.removeChild(elements);
		}
	},
	addElements: function(parentElement, element, index) {
		if (index != null) {
			parentElement.insertBefore(element, parentElement.childNodes[index]);
		} else {
			parentElement.appendChild(element);
		}
	},
	createElements: function(tagName) {
		var elements = document.createElement(tagName);
		return elements ? elements: null;
	},
	replaceElement: function(oldElements, newElement) {
		try {
			if (oldElements.length) {
				for (var i = 0; i < oldElements.length; i++) {
					oldElements[i].parentNode.replaceChild(newElement, oldElements[i]);
				}
			} else {
				var parenetElement = oldElements.parentNode;
				parenetElement.replaceChild(newElement, oldElements);
			}
		} catch(e) {}
	}
};
var $Readchar = Readchar.DOM.findElements,
_$Readchar = Readchar.DOM.delectElements;

/********//*
 Some famous function in here about how to get some data about styles; 
*//********/

Readchar.Style =Rs={
	getCurrentStyle: function(oEml, sOpation) {
		return oEml.currentStyle ? oEml.currentStyle[sOpation] : getComputedStyle(oEml, null)[sOpation];
	},
	//get the view's size
	/**
	 *paramete:
	 	none;
	 */
	getFullPageSize: function() {
		var fullPageSize = {};
		fullPageSize.width = window.innerWidth,
		fullPageSize.height = window.innerHeight;
		if (typeof pageWidth != "number") {
			if (document.compatMode == "CSS1Compat") {
				fullPageSize.width = document.documentElement.clientWidth;
				fullPageSize.height = document.documentElement.clientHeight;
			} else {
				fullPageSize.width = document.body.clientWidth;
				fullPageSize.height = document.body.clientHeight;
			}
		}
		return fullPageSize;
	}
};

/********//*
 Some famous function in here about javascript event action named Event or Re; 
*//********/

Readchar.Event =Re= {

	//���津����λ������
	touchArray:{
		startX:0,				//����touchsart�¼���������ı��x����ֵ
		startY:0,				//����touchsart�¼���������ı��y����ֵ
		moveX:0,				//����touchmove�¼���������ı��x����ֵ
		moveY:0,				//����touchmove�¼���������ı��y����ֵ
		left:0,					//Ԫ��leftֵ
		top:0,					//Ԫ��topֵ
		dragDir:0				//�����϶�����
	},
	//add event listener on someone of element
	/**
	 *paramete:
	 	@oElm:* the element of which want to bind a event
		@sEventType:* the type of event we want
		@fnHandler:* the action when user triger the type of event
	 */
	addEvent: function(oElm, sEventType, fnHandler) {
		if (oElm.addEventListener) {
			oElm.addEventListener(sEventType, fnHandler, false);
		} else if (oElm.attachEvent) {
			oElm.attachEvent("on" + sEventType, fnHandler);
		} else {
			oElm["on" + sEventType] = fnHandler;
		}
	},
	//get the event object
	/**
	 *paramate:
	 	none
	 */
	getEvent: function() {
		if (document.all) return window.event;
		func = Readchar.Event.getEvent.caller;
		while (func != null) {
			var arg0 = func.arguments[0];
			if (arg0)
			 {
				if ((arg0.constructor == Event || arg0.constructor == MouseEvent) || (typeof(arg0) == "object" && arg0.preventDefault && arg0.stopPropagation))
				 {
					return arg0;
				}
			}
			func = func.caller;
		}
		return null;
	},
	//get the souce of event happend begining
	/**
	 *paramete:
	 	none
	 */
	getTarget: function(event) {
		return event.target || event.srcElement;
	},
	//unbind the listener on element of one event type
	/**
	 *paramete:
	 	@oElm:the element which'll be unbind one type of event
		@sEventType:the type of event
		@fnHandler:the function which will be unbind
	 */
	removeEvent: function(oElm, sEventType, fnHandler) {
		if (oElm.removeEventListener) {
			oElm.removeEventListener(sEventType, fnHandler, false);
		} else if (oElm.detachEvent) {
			oElm.detachEvent("on" + sEventType, fnHandler);
		} else {
			oElm["on" + sEventType] = null;
		}
	},
	//cancel event bubble
	/**
	 *paramete:
	 	@event:the event object which'll cancel bubble
	 */
	stopPropagation: function(e) {
		if (e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble = true;
		}
	},
	//stop the default handler if we need
	/**
	 *paramete:
	 	@event:the event object which'll cancel bubble
	 */
	stopDefault: function(e) {
		if (e.preventDefault) {
			e.preventDefault();
		}else{
			e.returnValue = false;
		}
	},
	//get the mouse wheel event data
	/**
	 *paramete:
	 	@event:the event object which'll cancel bubble
	 */
	getWheelDelta: function(e) {
		if (e.wheelDelta) {
			return (Readchar.Browser.opera < 9.5 ? -e.wheelDelta: e.wheelDelta)
		} else {
			return - e.detail * 40;
		}
	},
	//add the listener of mouse wheel
	/**
	 *paramete:
	 	@fnHandler:the function when mouse wheel we want to run;
	 */
	buildWheel: function(fnHandler) {
		this.addEvent(document, "mousewheel", fnHandler);
		this.addEvent(document, "DOMMouseScroll", fnHandler);
	},
	//remove the listener of mouse wheel
	/**
	 *paramete:
	 	@fnHandler:the function we had bind on;
	 */
	unBuildWheel: function(fnHandler) {
		this.removeEvent(document, "mousewheel", fnHandler);
		this.removeEvent(document, "DOMMouseScroll", fnHandler);
	},
	/**
	 * @param	e:the object of event
	 * 	@fnHandler:get the touch start detail pageY
	 */
	gettouchStart:function(e){																				//get the touchmove detail pageX
		Re.touchArray.startX=Re.getTouchX(e);														//get the last touches member's pageX propoty
		Re.touchArray.startY=Re.getTouchY(e);														//get the last touches member's pageX propoty
	},
	/**
	 * @param e:the object of event
	 * 	@fnHandler:get the touch move's size on x and y position
	 */
	gettouchMove:function(e){																			//get the touchmove detail pageX
		Re.touchArray.moveX=Re.getTouchX(e)-Re.touchArray.startX;														//get the last touches member's pageX propoty
		Re.touchArray.moveY=Re.getTouchY(e)-Re.touchArray.startY;														//get the last touches member's pageX propoty
	},
	/**
	 *@param the object of event
	 *@fnHandler:get touch position x and y
	 */
	getTouchX:function(e){
		var touches = e.changedTouches,
		i = 0, l = touches.length, touch,tagX;
		for (; i < l; i++) {
			touch = touches[i];
			tagX=touch.pageX;
		}
		return tagX;
	},
	getTouchY:function(e){
		var touches = e.changedTouches,
		i = 0, l = touches.length, touch,tagY;
		for (; i < l; i++) {
			touch = touches[i];
			tagY=touch.pageY;
		}
		return tagX;
	},
	/**
	 * @param set the touchArray's values as null
	 */
	setTouchEnd:function(){
		Re.touchArray.startX=null;
		Re.touchArray.startY=null;
		Re.touchArray.moveX=null;
		Re.touchArray.moveY=null;
	},
	/**
	 * @param oElm
	 * @param upCallBack
	 * @param direc
	 * @returns {Boolean}
	 */
	drag: function(oElm,upCallBack,direc) {
		var _this=this;
		if (!oElm||!oElm.getAttribute("dragable")) {
			return false;
		}
		_this.addEvent(oElm, "mouseover",
		function() {
			oElm.style.cursor = "move";
		});
		_this.addEvent(oElm, "mouseout",
		function() {
			oElm.style.cursor = "default";
		});
		_this.addEvent(oElm,"mousedown",function(e){
			var posi=_this.getMousePositon(e),left,top;
			_this.touchArray.startX=posi.x;
			_this.touchArray.startY=posi.y;
			_this.touchArray.left=parseInt(Rs.getCurrentStyle(oElm, "left"));
			_this.touchArray.top=parseInt(Rs.getCurrentStyle(oElm, "top"));
			if(direc="horizontal"){
				left=parseInt(Rs.getCurrentStyle(oElm,"left"));
				Rd.setElment(oElm);
				_this.addEvent(oElm,"mousemove",_this.dragLeft);
			}
		});
		_this.addEvent(oElm, "mouseup",
		function() {
			_this.removeEvent(oElm,"mousemove",_this.dragLeft);
			upCallBack();
		});
	},
	dragLeft:function(e,oElm,left){
		Re.stopDefault(e);
		oElm=Re.getTarget(e);
		var movePosi=Re.getMousePositon(e);
		Re.touchArray.dragDir=movePosi.x-Re.touchArray.startX;
		Rd.getElement().style.left=Re.touchArray.left+Re.touchArray.dragDir+"px";
	},
	getMousePositon:function(e){
		if(e.pageX || e.pageY){ 
			return {x:e.pageX, y:e.pageY}; 
		} 
		return { 
			x:e.clientX + document.body.scrollLeft - document.body.clientLeft, 
			y:e.clientY + document.body.scrollTop - document.body.clientTop 
		}; 
	}
};

/********//*
 Some famous function in here about validate of user data named Check or Rc; 
*//********/

Readchar.Check = Rc = {
	//��֤����
	/**
	 *paramete:
	 	@sString:the string'll be checked whether is a email
	 */
	checkEmail: function(sString) {
		//�����ʽ���ڱ����
		var email = /^\w+([\.-]\w+)*@\w+([\.-]\w+)*\.\w{2,4}$/;
		return Rc.checkFn(sString, email);
	},
	checkUserName: function(sString) {
		//�û�����ʽ������ʽ������ĸ��ͷ����������������ֺ�"."��"_"������Ϊ4��19
		var userName = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
		return Rc.checkFn(sString, userName);
	},
	checkPassWord: function(sString) {
		//�����ʽ������ʽ������ĸ�����ֿ�ͷ���������"_"������Ϊ6��16
		var passWord = /^([a-zA-Z0-9]|[_]){6,16}$/;
		return Rc.checkFn(sString, passWord);
	},
	checkChcode: function(sString) {
		//��֤���ʽ������ʽ��ֻ�������֣����ҳ���Ϊ6
		var chCode = /^([0-9]){6}$/;
		return Rc.checkFn(sString, chCode);
	},
	checkEmCode: function(sString) {
		//��֤������֤���ʽ�����������ֻ���ĸ������Ϊ6
		var chCode = /^([a-zA-Z0-9]){6}$/;
		return Rc.checkFn(sString, chCode);
	},
	checkMobilePhone: function(sString) {
		//�ֻ���������ʽ��
		var mobileNumbe = /^((\+86)|(86))?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/;
		return Rc.checkFn(sString, mobileNumbe);
	},
	checkChineseName: function(sString) {
		//��������������ʽ������Ϊ1��10������
		var userName = /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z]){1,10}$/;
		return Rc.checkFn(sString, userName);
	},
	checkAddress: function(sString) {
		//��ַ������ʽ������Ϊ1��80����
		var address = /^\S{1,80}$/;
		return Rc.checkFn(sString, address);
	},
	checkFn:function(sString, sCheck){
		sString = sString.replace(/\s+/g, "");
		 if (sCheck.test(sString)) {
			return true;
		} else {
			return false;
		}
	}
};
/********//*
 Some famous function in here about form element user action; 
*//********/

//defined a number of Readchar as objecte named Form or Rf;
Readchar.Form=Rf={
	//���ر�Ĭ���ı�
	/**
	 *paramete:
	 	@eInputElm: * the form element which need the hidden default text when mouse focus in.
		@sString: * the elment's default text context.
	 */
	hiddenText:function(eInputElm){																												
		eInputElm.attr("value","");
	},
	//��ʾ�������ı�
	/**
	 *paramete:
	 	@eInputElm:the form element which need the hidden default text when mouse focus out
		@sString:the elment's default text context
	 */
	showText:function(eInputElm,sString){
		var value=eInputElm.attr("value");
		if(value==""||value==sString){
			eInputElm.attr("value",sString);
		}
	},
	//����textarea���������
	/**
	 *paramete:
	 	@eAreaElm:* the form element which we want limit it's length;
		@iLength:* the text context length
	 */
	areaFixedLen:function(eAreaElm,iLength){
		
	}
};

/**
 * ajax���� 
 */
Readchar.Ajax=Ra={
	XMLHttpReq:null,
	//do ajax
	createAjax:function(){
		try {  
			Ra.XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP");//IE�߰汾����XMLHTTP  
		}  
		catch(E) {  
			try {  
				Ra.XMLHttpReq = new ActiveXObject("Microsoft.XMLHTTP");//IE�Ͱ汾����XMLHTTP  
			}  
			catch(E) {  
				Ra.XMLHttpReq = new XMLHttpRequest();//���ݷ�IE�������ֱ�Ӵ���XMLHTTP����  
			}  
		}  
	},
	sendAjax:function(url,handle){
		Ra.createAjax();
		Ra.XMLHttpReq.open("post", url, true);  
		Ra.XMLHttpReq.onreadystatechange = handle; //ָ����Ӧ����  
		Ra.XMLHttpReq.send(null);  
	},
	ajaxResult:function(){
		if (Ra.XMLHttpReq.readyState == 4&&Ra.XMLHttpReq.status == 200) {
			//if ajax require success return true;
			
		}else{
			//if ajax require fail return false
			
		}
	}
};
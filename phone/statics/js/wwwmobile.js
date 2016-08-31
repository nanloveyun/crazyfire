
    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                trident: u.indexOf('Trident') > -1,
                presto: u.indexOf('Presto') > -1, 
                webKit: u.indexOf('AppleWebKit') > -1,
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
                mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), 
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, 
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, 
                iPad: u.indexOf('iPad') > -1, 
                webApp: u.indexOf('Safari') == -1, 
                isNo: u.indexOf('Touch') > -1 || u.indexOf('PlayBook') > -1
            };
        }()
    }
            
if (browser.versions.mobile == true && ((browser.versions.ios == true && browser.versions.iPhone == true && browser.versions.iPad == false) || browser.versions.isNo == true || browser.versions.android == true)) {
    location.href = "http://m.crazyfire.love";
}else
{
    location.href = "http://www.crazyfire.love";
}



$(function () {

    $(".m-input-sbm").click(function () {

        if ($("#name").val().length == 0)
        {
            $("#name").focus();
            alert("请填写您的姓名");
            return false;
        }

        if ($("#js-email").val().length == 0) {
            $("#js-email").focus();
            alert("请填写您的邮箱");
            return false;
        }

        var flagEmail = isEmail($("#js-email").val(), "");
        if (!flagEmail) return false;

        if ($("#js-mobile").val().length == 0) {
            $("#js-mobile").focus();
            alert("请填写您的手机号");
            return false;
        }

        var flagmobile = validatemobile($("#js-mobile").val());
        if (!flagmobile) return false;

        if ($("#comment").val().length == 0) {
            $("#comment").focus();
            alert("请填写您的评论");
            return false;
        }

        var data = "Context=" + $("#comment").val();
        data += "&Name=" + $("#name").val();
        data += "&Email=" + $("#js-email").val();
        data += "&Mobile=" + $("#js-mobile").val();

        var t = JqueryAjax("/Home/AddComment", data);
        if (t) {
            $("#comment").val("");
            $("#name").val("");
            $("#js-email").val("");
            $("#js-mobile").val("");
            alert('感谢您的评论');
        } else {
            alert('提交评论失败');
        }

    });
});

function validatemobile(mobile) {
    if (mobile.length == 0) {
        alert('请输入手机号码！');
        $("#js-mobile").focus();
        return false;
    }
    if (mobile.length != 11) {
        alert('请输入有效的手机号码！');
        $("#js-mobile").focus();
        return false;
    }

    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (!myreg.test(mobile)) {
        alert('请输入有效的手机号码！');
        $("#js-mobile").focus();
        return false;
    }
    return true;
}

function isEmail(obj, sClass) {
    var oValue = obj;
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (reg.test(oValue)) {
        return true;
    } else {
        alert('请输入正确的邮箱');
        return false;
    }
}


function JqueryAjax(url, data) {

    var nResult;

    $.ajax({
        type: "Post",
        url: url,
        async: false,
        data: data,
        beforeSend: function (xmlHttpRequest) {

        },
        success: function (data, textStatus) {
            nResult = data;
        },
        complete: function (xmlHttpRequest, textStatus) {
            xmlHttpRequest = null;
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.responseText);
        }
    });

    return nResult;
}
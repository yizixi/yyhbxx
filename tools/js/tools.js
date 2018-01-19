/**
 * Created by Lukas-Liuyi on 2016/12/14.
 */
//@ entrance
$(document).ready(function(){
    login();
    tools();
});
//@ Login Page
function login() {
    $("#loginBtn").on('click',function(){
        var userName = $("#username").val();
        var userPwd = $("#passwd").val();
        if(userName == 'Lukas' && userPwd == 'baidu123')  {
            console.log('success !');
            window.location.href = "tools.html";
        }
    });

    if (event.keyCode == 13){
        var userName = $("#username").val();
        var userPwd = $("#passwd").val();
        if(userName == 'Lukas' && userPwd == 'baidu123')  {
            console.log('success !');
            window.location.href = "tools.html";
        }
    }
}
//@ tools Page
function tools() {
    $("#menu").menu();
    $("#tabs ").tabs();
    $("#submitArray").on('click',function () {
        var arr1 = new Array;
        var arr2 = new Array;

        $("#arrLength1").html(arr1.length);
        $("#arrLength2").html(arr2.length);
    });
}





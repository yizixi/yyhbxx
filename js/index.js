/**
 * Created by MacOS on 2016/10/18.
 */
/* 入口函数 */
(function () {
    getToday();
    dropdown();
    changeShanghu();
})();

/*获取并显示今日时间*/
function getToday() {
    var enabled = 0; today = new Date();
    var day; var dateToday;
    if(today.getDay()==0) day = " 星期日";
    if(today.getDay()==1) day = " 星期一";
    if(today.getDay()==2) day = " 星期二";
    if(today.getDay()==3) day = " 星期三";
    if(today.getDay()==4) day = " 星期四";
    if(today.getDay()==5) day = " 星期五";
    if(today.getDay()==6) day = " 星期六";
    dateToday = (today.getFullYear()) + "年" + (today.getMonth() + 1 ) + "月" + today.getDate() + "日" + day +"";
    $("#dateToday").html(dateToday);
}

// 添加商户在下来菜单
function dropdown() {
   
$('#nav_menu>ul>li').hover(
    function() {
      /*  if($('#dropdownMenu').css('display')=="none"){
           $('#dropdownMenu').show();
           }
        */
        $('ul', this).stop().slideDown(200);
    },
    function() {
        $('ul', this).stop().slideUp(300);
    }
);

//点击标题让下拉菜单缩回   
$("#clickHideMenu").off('click');    
$("#clickHideMenu").on('click',function(){
	if($('#dropdownMenu').css('display')==""){
           $('#dropdownMenu').hide();
           }
	}
);
 
    
}

//点击不同商户，切换相应的内容
function changeShanghu(){
    
    $("#shuangWei").on('click',function(){
       $("#shanghu41").show();
       $("#shanghu41").siblings("div.shanghu").hide();
    });
    
     $("#hengLiDa").on('click',function(){
       $("#shanghu40").show();
       $("#shanghu40").siblings("div.shanghu").hide();
    });
    
    $("#baoHeng").on('click',function(){
       $("#shanghu39").show();
       $("#shanghu39").siblings("div.shanghu").hide();
    });
    
    $("#ruiQiang").on('click',function(){
       $("#shanghu38").show();
       $("#shanghu38").siblings("div.shanghu").hide();
    });
    
    $("#houYuanXin").on('click',function(){
       $("#shanghu37").show();
       $("#shanghu37").siblings("div.shanghu").hide();
    });
    
    $("#sanLian_1").on('click',function(){
       $("#shanghu36").show();
       $("#shanghu36").siblings("div.shanghu").hide();
    });
    
    $("#ruYu").on('click',function(){
       $("#shanghu35").show();
       $("#shanghu35").siblings("div.shanghu").hide();
    });
    
    $("#dongXinLai").on('click',function(){
       $("#shanghu34").show();
       $("#shanghu34").siblings("div.shanghu").hide();
    });
    
    $("#heRun").on('click',function(){
       $("#shanghu33").show();
       $("#shanghu33").siblings("div.shanghu").hide();
    });
    
    $("#luWen").on('click',function(){
        $("#shanghu32").show();
        $("#shanghu32").siblings("div.shanghu").hide();
    });
    
    $("#feiHua").on('click',function(){
        $("#shanghu31").show();
        $("#shanghu31").siblings("div.shanghu").hide();
    });
    
    $("#feiMaLiang").on('click',function(){
        $("#shanghu30").show();
        $("#shanghu30").siblings("div.shanghu").hide();
    });
    
    $("#xinJuYuan").on('click',function(){
        $("#shanghu29").show();
        $("#shanghu29").siblings("div.shanghu").hide();
    });
    
    $("#tianSui").on('click',function(){
        $("#shanghu28").show();
        $("#shanghu28").siblings("div.shanghu").hide();
    });
    
     $("#yongHong").on('click',function(){
        $("#shanghu27").show();
        $("#shanghu27").siblings("div.shanghu").hide();
    });
    
     $("#jinJiang").on('click',function(){
        $("#shanghu26").show();
        $("#shanghu26").siblings("div.shanghu").hide();
    });
    
    
}

/*  ShangHu Lists

 1.2.3.... ...
 
 21.22...
 
 23. 府谷县银海源煤焦有限公司   2016/11/23 [2016-12-02]

 24. 府谷县大昌汗昌源热力有限公司  Modify :( 2017/05/08 ) -- Show :[ 2017/05/08 ]
 
 25. 府谷县麟瑞煤焦运销有限责任公司  Modify :( 2017/06/05 ) -- Show :[ 2017/05/19 ]
 
 26. 府谷县金江煤业有限公司  Modify :( 2017/07/17 ) -- Show :[ 2017/07/13 ]
 
 27. 府谷县永宏煤炭有限责任公司  Modify :( 2017/07/31 ) -- Show :[ 2017/07/28 ]
 
 28. 府谷县天燧洗选煤业有限公司  Modify :( 2017/08/08 ) -- Show :[ 2017/07/14 ]
 
 29. 府谷县鑫聚源煤炭有限责任公司  Modify :( 2017/08/16 ) -- Show :[ 2017/08/16 ]
 
 30. 府谷县飞马梁洗选煤有限公司  Modify :( 2017/09/14 ) -- Show :[ 2017/09/06 ]
 
 31. 府谷县飞华煤炭有限责任公司  Modify :( 2017/09/25 ) -- Show :[ 2017/09/01 ]
 
 32. 府谷县鲁文环保建材有限责任公司  Modify :( 2017/09/25 ) -- Show :[ 2017/09/05 ]
 
 33. 府谷县和润煤炭有限责任公司  Modify :( 2017/09/25 ) -- Show :[ 2017/09/06 ]
 
 34. 府谷县东鑫莱煤化工有限责任公司  Modify :( 2017/09/28 ) -- Show :[ 2017/09/28 ]
 
 35. 陕西普宇集团如雨实业有限公司  Modify :( 2017/09/30 ) -- Show :[ 2017/09/29 ]
  
 36. 府谷县三联煤电化有限责任公司第一分公司  Modify :( 2017/09/30 ) -- Show :[ 2017/09/29 ]
 
 37. 府谷县厚源型煤有限责任公司  Modify :( 2017/09/30 ) -- Show :[ 2017/09/29 ]
  
 38. 府谷县瑞强工贸有限责任公司  Modify :( 2017/09/30 ) -- Show :[ 2017/09/29 ]
   
 39. 府谷县宝恒商贸有限公司  Modify :( 2017/09/30 ) -- Show :[ 2017/09/30 ]
 
 40. 府谷县恒利达洗选煤有限责任公司  Modify :( 2017/10/24 ) -- Show :[ 2017/09/30 ]
    
 41. 府谷县双威环保建材有限公司  Modify :( 2017/10/25 ) -- Show :[ 2017/09/30 ]

*/


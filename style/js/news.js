$(function(){
	cutStrings(1);
});

/*婧㈠嚭鐪佺暐*/
function cutStrings(i1){
	var screenWidth=$(window).width();
	if(screenWidth>=1024){
		i1=300;
	}else if(screenWidth<479){
		i1=66;
	}
	$.each($(".main .content .child"),function(i,n){
		var str=$(".main .content .child:eq("+i+")").find(".info").html();
		str=cutString(str,i1);
		$(".main .content .child:eq("+i+")").find(".info").html(str);
	});
}
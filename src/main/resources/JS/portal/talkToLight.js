/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function enter(pi) {
	if(pi.isAllReactorState(1008010, 0) == false){
		pi.openNpc(10310);
	}else{
		pi.topMsg("如果不打破链，你不能退出.");
	}

}

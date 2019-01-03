/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if(pi.getbosslog("haogan"+pi.getMapId())==0){
		pi.playerMessage(5,"你家老师没开门.");
	}else{
		var map = pi.getMapId();
		if(map<744000015){
			pi.warp(map+1,0);
		}else{
			pi.warp(744000001,0);
		}
	}
    
}
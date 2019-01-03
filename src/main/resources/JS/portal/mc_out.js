/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	var returnMap = pi.getSavedLocation("MONSTER_CARNIVAL");
	if (returnMap < 0) {
		returnMap = 103000000; // to fix people who entered the fm trough an unconventional way
	}	
	pi.clearSavedLocation("MONSTER_CARNIVAL");
	pi.warp(returnMap, 0); 
	return true;
}
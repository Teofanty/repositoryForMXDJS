/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) { 
	var returnMap = pi.getSavedLocation("ARIANT"); 
 	if (returnMap < 0) { 
		returnMap = 910000000; // to fix people who entered the fm trough an unconventional way 
 	} 
 	pi.playPortalSE(); 
 	pi.clearSavedLocation("ARIANT"); 
 	pi.warp(returnMap, 0); 
 	return true;
}  
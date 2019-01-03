/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function enter(pi) { 
	pi.playPortalSE();
	if (pi.getPlayer().getMapId() == 240050105)
	pi.warp(240050400, "st00");
	else
	pi.warp(pi.getPlayer().getMapId()+1, "st00");
	return true;
}

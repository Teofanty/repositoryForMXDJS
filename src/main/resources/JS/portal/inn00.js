/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 importPackage(org.server.maps);

function enter(pi) {
	var returnMap = pi.getSavedLocation("SLEEP");
	pi.clearSavedLocation("SLEEP");
	if (returnMap < 0) {
		returnMap = 102000000;
	}
	var target = pi.getMap(returnMap);
	var portal = target.getPortal("inn00");
	if (portal == null) {
		portal = target.getPortal(0);
	}
	pi.getPlayer().changeMap(target, portal);
	return true;
}
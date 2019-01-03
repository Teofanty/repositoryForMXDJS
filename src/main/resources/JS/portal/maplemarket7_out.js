/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function enter(pi) {
    var returnMap = pi.getSavedLocation("EVENT");
    pi.clearSavedLocation("EVENT");

    if (returnMap < 0) {
	returnMap = 102000000; 
    }
    var target = pi.getMap(returnMap);
    var portal;

    if (returnMap == 230000000) { 
	portal = target.getPortal("EVENT");
    } else {
	portal = target.getPortal("EVENT");
    }
    if (portal == null) {
	portal = target.getPortal(0);
    }
    if (pi.getMapId() != target) {
	pi.getPlayer().changeMap(target, portal);
    }
}
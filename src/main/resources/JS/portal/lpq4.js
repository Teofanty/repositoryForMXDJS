/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function enter(pi) {
	var nextMap = 922010500;
	var eim = pi.getPlayer().getEventInstance()
	var target = eim.getMapInstance(nextMap);
	var targetPortal = target.getPortal("st00");
	var avail = eim.getProperty("stage4status");
	if (avail == null) {
		pi.getPlayer().dropMessage(5, "现在还不能进入下一阶段。");
		return false;	}
	else {
		pi.getPlayer().changeMap(target, targetPortal);
		pi.removeAll(4001022);
		return true;
	}
}
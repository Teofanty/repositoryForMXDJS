/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

importPackage(org.rise.server.maps);
importPackage(org.rise.net.channel);
importPackage(org.rise.tools);

/*
Amoria: 2nd stage to 3rd stage portal
*/

function enter(pi) {
	var nextMap = 670010400;
	var eim = pi.getPlayer().getEventInstance();
	var target = eim.getMapInstance(nextMap);
	var targetPortal = target.getPortal("st00");
	// only let people through if the eim is ready
	var avail = eim.getProperty("2stageclear");
	if (avail == null) {
		// do nothing; send message to player
		pi.getClient().getSession().write(MaplePacketCreator.serverNotice(6, "这扇门是关闭的."));
		return false;	}
	else {
		pi.getPlayer().changeMap(target, targetPortal);
		return true;
	}
}
/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function act() {
	var eim = rm.getPlayer().getEventInstance();
	var party = eim.getPlayers();
	var numOpen = Integer.parseInt(eim.getProperty("openedDoors"));
	var mf = eim.getMapFactory();
	var map = mf.getMap(670010600);
	eim.setProperty("openedDoors", numOpen + 1);
	for (var i = 0; i < party.size(); i++) {
		party.get(i).changeMap(map, map.getPortal((numOpen + 1) * 2));
	}
}
	
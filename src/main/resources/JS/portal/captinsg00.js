/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (!pi.haveItem(4000381)) {
	pi.playerMessage(5, "你没有白精华.");
    } else {
	if (pi.getPlayerCount(541010100) <= 0) { // Capt. Lac Map
	    var captMap = pi.getMap(541010100);

	    captMap.resetFully();

	    pi.playPortalSE();
	    pi.warp(541010100, "sp");
	} else {
	    if (pi.getMap(541010100).getSpeedRunStart() == 0 && (pi.getMonsterCount(541010100) <= 0 || pi.getMap(541010100).isDisconnected(pi.getPlayer().getId()))) {
		pi.playPortalSE();
		pi.warp(541010100, "sp");
	    } else {
		pi.playerMessage(5, "战斗已经开始，所以你不能进入这个地方.");
	    }
	}
    }
}
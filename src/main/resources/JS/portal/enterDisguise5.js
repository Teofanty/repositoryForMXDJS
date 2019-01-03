/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getQuestStatus(20301) == 1 ||
	pi.getQuestStatus(20302) == 1 ||
	pi.getQuestStatus(20303) == 1 ||
	pi.getQuestStatus(20304) == 1 ||
	pi.getQuestStatus(20305) == 1) {
	if (pi.getPlayerCount(913002400) == 0) {
	    if (pi.haveItem(4032179, 1)) {
		pi.removeNpc(913002400, 1104104);
		var map = pi.getMap(913002400);
		map.killAllMonsters(false);
		map.spawnNpc(1104104, new java.awt.Point(542, 88));
		pi.warp(913002400, 0);
	    } else {
		pi.playerMessage("你没有圣地搜查证的话，请从南哈特得到它.");
	    }
	} else {
	    pi.playerMessage("森林已被其他人搜索。 更好地回来以后.");
	}
    } else {
	pi.warp(130020000, 10);
    }
}
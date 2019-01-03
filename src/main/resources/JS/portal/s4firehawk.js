/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	map = pi.getPlayer().getMap();
    if (pi.getQuestStatus(6240) == 1 || pi.getQuestStatus(6241) == 1) {
	if (!pi.haveItem(4001113)) {
	    if (pi.getPlayerCount(921100200) == 0) {
		pi.playPortalSE();
		pi.warp(921100200, 0);
		pi.getPlayer().startMapTimeLimitTask(300, map);
		return true;
	    } else {
		pi.playerMessage("其他人物都在请求。你不能进入.");
	    }
	} else {
	    pi.playerMessage("你已经有凤凰的蛋。你不能进入.");
	}
    } else if (pi.getQuestStatus(6240) == 2 && pi.getQuestStatus(6241) == 0) {
	if (!pi.haveItem(4001113)) {
	    pi.playPortalSE();
	    pi.warp(921100200, 0);
		pi.getPlayer().startMapTimeLimitTask(300, map);
	    return true;
	} else {
	    pi.playerMessage("你已经有凤凰的蛋。你不能进入." );
	}
    } else {
	pi.playerMessage("你不能进入密封处.");
    }
    return false;
}
/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	map = pi.getPlayer().getMap();
    if (pi.getQuestStatus(6242) == 1 || pi.getQuestStatus(6243) == 1) {
	if (!pi.haveItem(4001114)) {
	    if (pi.getPlayerCount(921100200) == 0) {
		pi.playPortalSE();
		pi.warp(921100210, 0);
		pi.getPlayer().startMapTimeLimitTask(300, map);
		return true;
	    } else {
		pi.playerMessage("其他人物都在请求。你不能进入.");
	    }
	} else {
	    pi.playerMessage("你没有冰凤凰的蛋。你不能进入.");
	}
    } else if (pi.getQuestStatus(6242) == 2 && pi.getQuestStatus(6243) == 0) {
	if (!pi.haveItem(4001114)) {
	    pi.playPortalSE();
	    pi.warp(921100210, 0);
		pi.getPlayer().startMapTimeLimitTask(300, map);
	    return true;
	} else {
	    pi.playerMessage("你没有冰凤凰的蛋。你不能进入." );
	}
    } else {
	pi.playerMessage("你不能进入密封处.");
    }
    return false;
}
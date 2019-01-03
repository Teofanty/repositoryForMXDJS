/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getQuestStatus(23120) == 1) {
	if (pi.getPlayerCount(931000410) == 0) {
		var map = pi.getMap(931000410);
		map.resetFully();
		pi.warp(931000410, 0);
	} else {
	    pi.playerMessage("正在被其他人搜索。 更好地回来以后.");
	}
    }
}
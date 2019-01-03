/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.haveItem(4001094)) {
	if (pi.getQuestStatus(3706) > 0) {
	    if (pi.getPlayerCount(240040611) == 0) {
		pi.removeNpc(240040611, 2081008);
		pi.resetMap(240040611);
		pi.playPortalSE();
		pi.warp(240040611, "sp");
	    } else {
		pi.playerMessage(5, "有人已经在里面尝试完成任务。请稍后再试.");
	    }
	} else {
	    pi.playerMessage(5, "你不必追求开始。请稍后再试.");
	}
    } else {
	pi.playerMessage(5, "为了进入前提，你需要拥有九灵龙的蛋.");
    }
}
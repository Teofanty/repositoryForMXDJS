/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getQuestStatus(20201) == 1 || pi.getQuestStatus(20202) == 1 || pi.getQuestStatus(20203) == 1 || pi.getQuestStatus(20204) == 1 || pi.getQuestStatus(20205) == 1) {
	if (pi.getPlayerCount(108000600) == 0) {
	    var map = pi.getMap(108000600);
	    map.killAllMonsters(false);
	    map.respawn(true);
	    pi.warp(108000600, 0);
	} else {
	    pi.playerMessage("有人已在此地图中.");
	}
    } else {
	pi.playerMessage("第二演练场仅适用于适当的人修炼职业.");
    }
}
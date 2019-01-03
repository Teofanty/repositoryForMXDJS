/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getQuestStatus(20601) == 1 || pi.getQuestStatus(20602) == 1 || pi.getQuestStatus(20603) == 1 || pi.getQuestStatus(20604) == 1 || pi.getQuestStatus(20605) == 1) {
	if (pi.getPlayerCount(913010200) == 0) {
	    var map = pi.getMap(913010200);
	    map.killAllMonsters(false);
	    map.respawn(true);
	    pi.warp(913010200, 0);
	} else {
	    pi.playerMessage("有人已在此地图中.");
	}
    } else {
	pi.playerMessage("第三演练场仅适用于110级正在训练技能的人.");
    }
}
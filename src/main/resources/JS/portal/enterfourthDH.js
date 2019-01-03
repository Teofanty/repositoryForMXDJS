/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getQuestStatus(20611) == 1 || pi.getQuestStatus(20612) == 1 || pi.getQuestStatus(20613) == 1 || pi.getQuestStatus(20614) == 1 || pi.getQuestStatus(20615) == 1) {
	if (pi.getPlayerCount(913020300) == 0) {
	    var map = pi.getMap(913020300);
	    map.killAllMonsters(false);
	    map.respawn(true);
	    pi.warp(913020300, 0);
	} else {
	    pi.playerMessage("有人已在此地图中.");
	}
    } else {
	pi.playerMessage("第四演练场仅适用于110级正在训练技能的人.");
    }
}
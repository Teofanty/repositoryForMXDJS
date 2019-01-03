/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
if (pi.getPlayerCount(913000000) == 0 && pi.getQuestStatus(20701) == 1) {
	    var map = pi.getMap(913000000);
	    map.killAllMonsters(false);
	    map.respawn(true);
	    pi.warp(913000000, 0);
		return true;
    } else if (pi.getPlayerCount(913000100) == 0 && pi.getQuestStatus(20702) == 1) {
	    var map = pi.getMap(913000100);
	    map.killAllMonsters(false);
	    map.respawn(true);
	    pi.warp(913000100, 0);
		return true;
    } else if (pi.getPlayerCount(913000200) == 0 && pi.getQuestStatus(20703) == 1) {
	    var map = pi.getMap(913000200);
	    map.killAllMonsters(false);
	    map.respawn(true);
	    pi.warp(913000200, 0);
		return true;
    } else if (pi.getPlayerCount(913000000) == 0 && pi.getQuestStatus(20201) == 1 || pi.getQuestStatus(20202) == 1 || pi.getQuestStatus(20203) == 1 || pi.getQuestStatus(20204) == 1 || pi.getQuestStatus(20205) == 1) {
	    var map = pi.getMap(913000000);
	    map.killAllMonsters(false);
	    map.respawn(true);
	    pi.warp(913000000, 0);
		return true;
	} else {
	    pi.playerMessage("有人已在此地图中,或者你没有接受相关任务.");
		return true;
	}
    }

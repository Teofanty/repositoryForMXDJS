/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
		if (!pi.haveItem(4001044) && pi.getPlayer().getParty() != null && pi.isLeader()) {
        pi.warpParty(920010200);
		//pi.spawnMobOnMap(9300046,5,-1050,-307,920010200);
		//pi.spawnMobOnMap(9300046,5,1230,-307,920010200);
		//pi.spawnMobOnMap(9300045,5,-1050,-787,920010200);
		//pi.spawnMobOnMap(9300045,5,1230,-787,920010200);
		//pi.spawnMobOnMap(9300047,5,-1050,-1267,920010200);
		//pi.spawnMobOnMap(9300047,5,1230,-1267,920010200);
        return false;
    } else {
		pi.getPlayer().dropMessage(5,"您不是队长或已经完成了此关任务，禁止入内。");	
        return true;
	}
	}
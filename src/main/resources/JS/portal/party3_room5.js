/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
		if (!pi.haveItem(4001048) && pi.getPlayer().getParty() != null && pi.isLeader()) {
        pi.warpParty(920010600);
		//pi.spawnMobOnMap(9300041,3,-42,-1046,920010601);
		//pi.spawnMobOnMap(9300041,3,-33,-1444,920010601);
		//pi.spawnMobOnMap(9300041,4,-47,-1845,920010601);
		//pi.spawnMobOnMap(9300042,3,-42,-1046,920010602);
		//pi.spawnMobOnMap(9300042,3,-33,-1444,920010602);
		//pi.spawnMobOnMap(9300042,4,-47,-1845,920010602);
		//pi.spawnMobOnMap(9300043,3,-42,-1046,920010603);
		//pi.spawnMobOnMap(9300043,3,-33,-1444,920010603);
		//pi.spawnMobOnMap(9300043,4,-47,-1845,920010603);
        return false;
    } else {
		pi.getPlayer().dropMessage(5,"您不是队长或已经完成了此关任务，禁止入内。");	
        return true;
	}
	}
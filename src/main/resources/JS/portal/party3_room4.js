/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
		if (!pi.haveItem(4001047) && pi.getPlayer().getParty() != null && pi.isLeader()) {
        pi.warpParty(920010500);
        return false;
    } else {
		pi.getPlayer().dropMessage(5,"您不是队长或已经完成了此关任务，禁止入内。");	
        return true;
	}
	}
/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if (pi.isQuestActive(2324)) {
	    pi.forceCompleteQuest(2324);
	    pi.removeAll(2430015);
	    pi.playerMessage("任务完成.");
	}
	pi.warp(106020501,0);
	return true;
}
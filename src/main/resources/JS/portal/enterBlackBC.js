/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if (pi.isQuestActive(22583)) {
	    pi.forceCompleteQuest(22583);
	    pi.playerMessage(5, "释放精神.");
	}
	if (pi.isQuestActive(22584)) {
	    pi.forceCompleteQuest(22584);
	    pi.playerMessage(5, "门锁销毁.");
	}
	pi.warp(220011001,0);
 	pi.playPortalSE();
}
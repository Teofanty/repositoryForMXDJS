/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getJob() == 412) {
	if ((pi.haveItem(4001110) && pi.getQuestStatus(6230)) == 0 || pi.getQuestStatus(6230) == 1 || (pi.getQuestStatus(6230) == 2 && pi.getQuestStatus(6231) == 0)) {
	    pi.playPortalSE();
	    pi.warp(922020200, 0);
	}
    }
}
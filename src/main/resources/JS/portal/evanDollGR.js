/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.isQuestActive(22556)) {
	pi.playerMessage(5, "调查完成!");
	pi.forceCompleteQuest(22556);
    }
    pi.warp(910600010,0);
}
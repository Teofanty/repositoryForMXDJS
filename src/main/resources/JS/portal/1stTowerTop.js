/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.isQuestActive(3164)) {
	pi.forceCompleteQuest(3164);
	pi.playerMessage("任务完成.");
    }
    pi.warp(211060201,0);
}
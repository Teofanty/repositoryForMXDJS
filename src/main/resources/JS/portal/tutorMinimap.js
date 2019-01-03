/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getQuestStatus(20020) == 0) {
	pi.summonMsg(1);
	pi.forceCompleteQuest(20020);
    }
}
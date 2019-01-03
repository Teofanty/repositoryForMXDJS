/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    try {
	if (pi.isQuestActive(22596)) {
		pi.forceCompleteQuest(22596);
		pi.getPlayer().gainAp(5);
		pi.playerMessage(5, "已经跑了! 获得 5 AP!");
	}
	pi.warp(922030000,0);
    } catch (e) {
	pi.playerMessage(5, "错误，请在论坛上报告: " + e);
    }
}
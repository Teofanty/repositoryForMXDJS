/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getQuestStatus(21000) == 0) {
	pi.playerMessage(5, "你必须接受拯救孩子任务，才能进入。");
    } else {
	pi.teachSkill(20000017, 0, -1);
	pi.teachSkill(20000018, 0, -1);
	pi.teachSkill(20000017, 1, 0);
	pi.teachSkill(20000018, 1, 0);
	pi.playPortalSE();
	pi.warp(914000200, 1);
    }
}
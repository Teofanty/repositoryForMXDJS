/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getQuestStatus(21701) == 1) {
	pi.playPortalSE();
	pi.warp(914010000, 1);
    } else if (pi.getQuestStatus(21702) == 1) {
	pi.playPortalSE();
	pi.warp(914010100, 1);
    } else if (pi.getQuestStatus(21703) == 1) {
	pi.playPortalSE();
	pi.warp(914010200, 1);
    } else {
	pi.playerMessage(5, "如果你接受企鹅武术老师的任务，你将被允许进入训练场.");
    }
}
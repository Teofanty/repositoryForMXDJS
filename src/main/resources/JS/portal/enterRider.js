/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.isQuestActive(21610)) {
	pi.playerMessage(5, "进入骑士平原。一直走到平原的尽头，完成任务。");
	pi.warp(921110000,0);
	} else {
	pi.playerMessage(5, "你尚未接受相关任务!");
	}}


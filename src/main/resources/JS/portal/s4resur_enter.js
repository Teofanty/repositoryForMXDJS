/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if (pi.haveItem(4031448) ){
	pi.playerMessage("你已经完成了此任务.");
	return true;
    } else if (pi.getQuestStatus(6134) == 1) {
	map = pi.getPlayer().getMap();
	pi.warp(922020000, 0);
	pi.getPlayer().startMapTimeLimitTask(1200, map);
	 return true;
    } else {
	pi.playerMessage("你尚未接受相关任务,不能进入此处.");
	 return true;
    }
}
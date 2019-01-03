/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if (pi.isQuestFinished(21733)) {
	pi.warp(104000004, 1);
	} else if (!pi.getPlayerCount(910400000) <= 0 && pi.isQuestFinished(21732)) {//判断地图是否有人。判断任务
	pi.playerMessage(5, "里面有人,请稍后.");
	} else if (!pi.isQuestFinished(21732)) {
	pi.warp(104000004, 1);
	} else{
	pi.getMap(910400000).resetFully();//地图刷新
    pi.warp(910400000, 1);
}
}
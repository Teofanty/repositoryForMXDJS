/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

 function enter(pi) {
	map = pi.getPlayer().getMap();
    if (pi.isQuestActive(21737)) {
	pi.warp(200060001,0);
	return true;
	}
    if (!pi.isQuestActive(21739)) {
    pi.playerMessage(5,"没有接受相关任务...");
	return true;
	} else if (pi.getPlayerCount(920030001) <= 0) {
    pi.getMap(920030001).resetFully();//地图刷新
	pi.warp(920030001,0);
	pi.getPlayer().startMapTimeLimitTask(600, map);
	return true;
	} else {
	pi.playerMessage(5,"里面有人,请稍后...");	
	return true;
}}
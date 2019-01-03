/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	 if (pi.getPlayerCount(108010700) <= 0 && pi.isQuestActive(21301) ==1 ) {//判断地图是否有人。判断任务
	pi.getMap(108010700).resetFully();//地图刷新
    pi.warp(108010700);
	} else{
	if (pi.isQuestActive(21301) ==0 ) {
	pi.warp(140020300, 1);
	} else{
    pi.playerMessage(5, "里面有人.");
}
}}
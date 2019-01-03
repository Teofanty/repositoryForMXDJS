/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	map = pi.getPlayer().getMap();
    if (pi.isQuestActive(21201)==1) {//判断任务
	//pi.forceCompleteQuest(21201);
	pi.forceStartQuest(21202);
	pi.playerMessage(5, "你恢复了你的记忆 !");
	pi.warp(108000700,0);
	} else {
	if (pi.isQuestFinished(21303)) {
    pi.playerMessage(5,"你已经完成了任务");
	return true;
	} else if (!pi.isQuestActive(21302)==1) {
	pi.playerMessage(5,"你没有接受相关任务");
	return true;
	} else if (pi.getPlayer().getSkillLevel(20001007) <= 0) {
	pi.playerMessage(5,"你没有完成锻造技能，请先去找蒙特鸠协会长（卡森）接受相关任务");
	return true;
	} else if (!pi.getPlayerCount(108010702) <= 0 ) {
	pi.playerMessage(5,"里面有人，请稍后...");
	return true;
	} else {
    pi.forceStartQuest(21303);
	pi.getMap(108010702).resetFully();//地图刷新
	pi.warp(108010702,0);//传送到此地图
	pi.getPlayer().startMapTimeLimitTask(600, map);
	pi.playerMessage(5,"消灭小偷乌鸦并收集红珠玉一个,在出去找宝石工匠雪人完成任务后.锻造功能将会多一个其它锻造");
	}}}


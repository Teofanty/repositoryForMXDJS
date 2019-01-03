/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if (pi.isQuestFinished(21752)) {//判断是否完成任务
	    // pi.getMap(300000011).resetFully();//地图刷新
		// pi.forceStartQuest(21753); //开始任务
	     pi.warp(300000011,0);
		 return true;
	}
    pi.playerMessage("尚未接受相关任务.无法进入.");
	 return true;
}
/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 function action(mode, type, selection) {
	if (cm.getPlayerCount(910510202) <= 0 && cm.isQuestActive(21734) ==1 ) {//判断地图是否有人。判断任务
	cm.getMap(910510202).resetFully();//地图刷新
	cm.warp(910510202, 0);
	cm.dispose();
	} else {
	cm.senok("里面有人或者没有接受相关任务而无法进入此洞穴!")
	cm.dispose();
}}
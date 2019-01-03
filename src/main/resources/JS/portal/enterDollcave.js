/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 
function enter(pi) {
    if (pi.getQuestStatus(21728) == 1) {
        pi.warp(910510001, 0);
        return true;
    } else{
	 if (pi.getPlayerCount(910510201) <= 0 && pi.isQuestActive(21731) ==1 ) {//判断地图是否有人。判断任务
	pi.getMap(910510201).resetFully();//地图刷新
	//pi.spawnMobOnMap(9300344,1,-3,248,910510201);//召唤怪物
    pi.warp(910510201);
        return true;
    } else {
        pi.playerMessage(5, "里面有人或者没有接受相关任务而无法进入此洞穴。");
        return false;
    }
}
}
/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function act() {
    rm.changeMusic("Bgm06/FinalFight");
	rm.getMap().spawnChaosZakum(-10, -215);
    rm.mapMessage("混沌扎昆被火眼的力量召唤.");
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
	}
}

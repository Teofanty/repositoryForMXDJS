/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function act() {
    rm.changeMusic("Bgm14/HonTale");
    rm.spawnMonster(8810026, 71, 260);
    rm.mapMessage("洞穴摇晃和摇铃，角尾被召唤.");
	//rm.scheduleWarp(43200, 240000000);
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
	}
}
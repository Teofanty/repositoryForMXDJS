/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function act() {
	rm.getReactor().forceTrigger();
	rm.getReactor().delayedDestroyReactor(1000);
	rm.mapMessage("雷克斯已被召唤.");
	rm.spawnMonster(9300281);
}
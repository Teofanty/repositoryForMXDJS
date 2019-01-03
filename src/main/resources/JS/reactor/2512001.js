/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function act() {
	var em = rm.getEventManager("Pirate");
	if (em != null) {
		rm.mapMessage(6, "其中一个框已激活.");
		em.setProperty("stage5", parseInt(em.getProperty("stage5")) + 1);
	}
}
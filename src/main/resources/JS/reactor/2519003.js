/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function act() {
	var em = rm.getEventManager("Pirate");
	if (em != null) {
		rm.mapMessage(6, "成功上锁一道门!");
		em.setProperty("stage4", parseInt(em.getProperty("stage4")) + 1);
		if (em.getProperty("stage4").equals("4")) { //all 5 done
			rm.mapMessage(6, "Proceed!");
		}
	}
}
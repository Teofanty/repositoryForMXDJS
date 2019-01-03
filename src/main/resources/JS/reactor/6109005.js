/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function act() {
	var em = rm.getEventManager("CWKPQ");
	if (em != null) {
		rm.mapMessage(6, "一件武器已恢复到精通的遗物!");
		em.setProperty("glpq5", parseInt(em.getProperty("glpq5")) + 1);
		if (em.getProperty("glpq5").equals("5")) { //all 5 done
			rm.mapMessage(6, "该Antellion授予您访问到下一个门户网站！继续!");
			rm.getMap().changeEnvironment("5pt", 2);
		}
	}
}
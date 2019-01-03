/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function act() {
	var em = rm.getEventManager("CWKPQ");
	if (em != null) {
		rm.mapMessage(6, "战士印记已被激活!");
		em.setProperty("glpq4", parseInt(em.getProperty("glpq4")) + 1);
		if (em.getProperty("glpq4").equals("5")) { //all 5 done
			rm.mapMessage(6, "该Antellion授予您访问到下一个门户网站！继续!");
			rm.getMap().changeEnvironment("4pt", 2);
		}
	}
}
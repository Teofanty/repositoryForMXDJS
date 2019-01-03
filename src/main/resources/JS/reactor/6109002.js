/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function act() {
	var em = rm.getEventManager("CWKPQ");
	if (em != null) {
		if (rm.getMap().getId() == 610030200) {
			rm.mapMessage(6, "法师印记已被激活!");
			em.setProperty("glpq2", parseInt(em.getProperty("glpq2")) + 1);
			if (em.getProperty("glpq2").equals("5")) { //all 5 done
				rm.mapMessage(6, "该Antellion授予您访问到下一个门户网站！继续!");
				rm.getMap().changeEnvironment("2pt", 2);
			}
		} else if (rm.getMap().getId() == 610030300) {
			rm.mapMessage(6, "法师印记已被激活! 你听到齿轮转动！该巨石防御系统被激活！运行!");
	    		em.setProperty("glpq3", parseInt(em.getProperty("glpq3")) + 1);
			rm.getMap().moveEnvironment("menhir3", 1);
	    		if (em.getProperty("glpq3").equals("10")) {
				rm.mapMessage(6, "该Antellion授予您访问到下一个门户网站！继续!");
				rm.getMap().changeEnvironment("3pt", 2);
	    		}
		}
	}
}
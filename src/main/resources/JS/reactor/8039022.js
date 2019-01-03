/* ==================
 脚本类型: 反应堆	    
 脚本作者：久久    
 联系方式：121418194
 =====================
 */
 function act() {
	var em = rm.getEventManager("CWKPQ");
	if (em != null) {
		em.setProperty("glpq5", parseInt(em.getProperty("glpq5")) + 1);	
		if (em.getProperty("glpq5").equals("5")) {
        rm.mapMessage(6, "通往下一关卡的大门已经打开！祝你们好运！");
        rm.getMap().changeEnvironment("5pt", 2);
		}
	}
}
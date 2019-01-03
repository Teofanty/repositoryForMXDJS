/* ==================
 脚本类型: 反应堆	    
 脚本作者：久久    
 联系方式：121418194
 =====================
 */
 function act() {
	var em = rm.getEventManager("CWKPQ");
	if (em != null) {
		rm.mapMessage(6, "一名冒险家已经触发了机关!");
		if(rm.getPlayer().getMapId()==803010800){
		em.setProperty("glpq2", parseInt(em.getProperty("glpq2")) + 1);	
		if (em.getProperty("glpq2").equals("5")) {
        rm.mapMessage(6, "黑暗魔法师的力量变弱了，请到下一关卡去！");
        rm.getMap().changeEnvironment("2pt", 2);
        }
		}else if(rm.getPlayer().getMapId()==803010900){
		em.setProperty("glpq3", parseInt(em.getProperty("glpq3")) + 1);
		if (em.getProperty("glpq3").equals("10")) {
        rm.mapMessage(6, "黑暗魔法师的力量变弱了，请到下一关卡去！");
        rm.getMap().changeEnvironment("3pt", 2);
        }
		}else{
		em.setProperty("glpq4", parseInt(em.getProperty("glpq4")) + 1);	
		if (em.getProperty("glpq4").equals("5")) {
        rm.mapMessage(6, "黑暗魔法师的力量变弱了，请到下一关卡去！");
        rm.getMap().changeEnvironment("4pt", 2);
        }
		}
	}
}
/* ==================
 �ű�����: ��Ӧ��	    
 �ű����ߣ��þ�    
 ��ϵ��ʽ��121418194
 =====================
 */
 function act() {
	var em = rm.getEventManager("CWKPQ");
	if (em != null) {
		em.setProperty("glpq5", parseInt(em.getProperty("glpq5")) + 1);	
		if (em.getProperty("glpq5").equals("5")) {
        rm.mapMessage(6, "ͨ����һ�ؿ��Ĵ����Ѿ��򿪣�ף���Ǻ��ˣ�");
        rm.getMap().changeEnvironment("5pt", 2);
		}
	}
}
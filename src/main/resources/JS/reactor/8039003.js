/* ==================
 �ű�����: ��Ӧ��	    
 �ű����ߣ��þ�    
 ��ϵ��ʽ��121418194
 =====================
 */
 function act() {
	var em = rm.getEventManager("CWKPQ");
	if (em != null) {
		rm.mapMessage(6, "һ��ð�ռ��Ѿ������˻���!");
		if(rm.getPlayer().getMapId()==803010800){
		em.setProperty("glpq2", parseInt(em.getProperty("glpq2")) + 1);	
		if (em.getProperty("glpq2").equals("5")) {
        rm.mapMessage(6, "�ڰ�ħ��ʦ�����������ˣ��뵽��һ�ؿ�ȥ��");
        rm.getMap().changeEnvironment("2pt", 2);
        }
		}else if(rm.getPlayer().getMapId()==803010900){
		em.setProperty("glpq3", parseInt(em.getProperty("glpq3")) + 1);
		if (em.getProperty("glpq3").equals("10")) {
        rm.mapMessage(6, "�ڰ�ħ��ʦ�����������ˣ��뵽��һ�ؿ�ȥ��");
        rm.getMap().changeEnvironment("3pt", 2);
        }
		}else{
		em.setProperty("glpq4", parseInt(em.getProperty("glpq4")) + 1);	
		if (em.getProperty("glpq4").equals("5")) {
        rm.mapMessage(6, "�ڰ�ħ��ʦ�����������ˣ��뵽��һ�ؿ�ȥ��");
        rm.getMap().changeEnvironment("4pt", 2);
        }
		}
	}
}
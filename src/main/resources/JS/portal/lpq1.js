/* ==================
 �ű�����:  ������    
 ��Ȩ����Ϸ���Ŷ�     
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */

function enter(pi) {
	var eim = pi.getPlayer().getEventInstance()
	var target = eim.getMapInstance(922010200);
	if (eim.getProperty("stage1status") != null) {
		pi.getPlayer().changeMap(target, target.getPortal("st00"));
		pi.removeAll(4001022);
		return true
	} else 
	        pi.getPlayer().dropMessage(5, "���ڻ����ܽ�����һ�׶Ρ�");
		    //pi.removeAll(4001022);
               return false;	
}

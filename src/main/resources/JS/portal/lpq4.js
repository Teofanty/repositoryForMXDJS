/* ==================
 �ű�����:  ������    
 ��Ȩ����Ϸ���Ŷ�     
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */

function enter(pi) {
	var nextMap = 922010500;
	var eim = pi.getPlayer().getEventInstance()
	var target = eim.getMapInstance(nextMap);
	var targetPortal = target.getPortal("st00");
	var avail = eim.getProperty("stage4status");
	if (avail == null) {
		pi.getPlayer().dropMessage(5, "���ڻ����ܽ�����һ�׶Ρ�");
		return false;	}
	else {
		pi.getPlayer().changeMap(target, targetPortal);
		pi.removeAll(4001022);
		return true;
	}
}
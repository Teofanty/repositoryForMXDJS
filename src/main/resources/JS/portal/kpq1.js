/* ==================
 �ű�����:  ������    
 ��Ȩ����Ϸ���Ŷ�     
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */

function enter(pi) {
    var eim = pi.getPlayer().getEventInstance();
    var target = eim.getMapInstance(103000802);
    if (eim.getProperty("2stageclear") != null) {
		pi.removeAll(4001007);
		pi.removeAll(4001008);
        pi.getPlayer().changeMap(target, target.getPortal("st00"));
        return true;
    } else {
        pi.playerMessage(5, "���ڻ����ܽ�����һ�׶Ρ�");
        return false;
    }
}

/* ==================
 �ű�����:  ������    
 ��Ȩ����Ϸ���Ŷ�     
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 

function enter(pi) {
    var eim = pi.getPlayer().getEventInstance();
    var target = eim.getMapInstance(103000801);

    if (eim.getProperty("1stageclear") != null) {
        pi.getPlayer().changeMap(target, target.getPortal("st00"));
		pi.removeAll(4001007);
		pi.removeAll(4001008);
        return true;
    } else {
        pi.playerMessage(5, "������δ��ɣ������ڻ����ܽ�����һ�׶Ρ�");
        return false;
    }
}

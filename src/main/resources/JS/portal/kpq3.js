/* ==================
 �ű�����:  ������    
 ��Ȩ����Ϸ���Ŷ�     
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */

function enter(pi) {
    var eim = pi.getPlayer().getEventInstance();
    var target = eim.getMapInstance(103000804);
    if (eim.getProperty("4stageclear") != null) {
        pi.getPlayer().changeMap(target, target.getPortal("st00"));
        return true;
    } else {
        pi.playerMessage("�����ǵ�ǰ������.");
        return false;
    }
}
/* ==================
 �ű�����:  ������    
 ��Ȩ����Ϸ���Ŷ�     
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getReactorByName("ghostgate").getState() == 1) {
        pi.warp(990000800);
        return true;
    }
    else {
        pi.getPlayer().dropMessage(5, "���Źرգ����ҵ�������Ʒ�����������������Ь�ӡ����ӡ����硢ñ��һ��һ����.");
        return false;
    }
}
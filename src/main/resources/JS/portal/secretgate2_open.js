/* ==================
 �ű�����:  ������    
 ��Ȩ����Ϸ���Ŷ�     
 ��ϵ��ʽ��2412614144
 =====================
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getReactorByName("secretgate2").getState() == 1) {
        pi.warp(990000631,1);
        return true;
    } else {
        pi.getPlayer().dropMessage(5, "���Źرգ���Ҫ8����ħ��ʾ����");
        return false;
    }
}

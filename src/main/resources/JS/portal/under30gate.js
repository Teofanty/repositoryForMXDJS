/* ==================
 �ű�����:  ������    
 ��Ȩ����Ϸ���Ŷ�     
 ��ϵ��ʽ��2412614144
 =====================
 */

function enter(pi) {
    if (pi.getPlayer().getLevel() <= 255) {
        pi.warp(990000640, 1);
        return true;
    } else {
        pi.getPlayer().dropMessage(5, "���޷��ƿ���һ��.");
        return false;
    }
}
/* ==================
 �ű�����:  ������    
 ��Ȩ����Ϸ���Ŷ�     
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */

function enter(pi) {
    if (pi.getPlayer().getKeyValue("1stJobTrialStatus") == null) {
	pi.getPlayer().message("'����' ���� ���� ���� �ɾ��ּ���.");
        return false;
    } else {
        pi.warp(219000000, "in03");
        return true;
    }
}
/* ==================
 �ű�����:  ������    
 ��Ȩ����Ϸ���Ŷ�     
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
var status;
function start() {
    status = -1;
	action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode < 0)
        cm.dispose();
    else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		if (cm.getMapId() == 222020200) {
			cm.TimeMoveMap(222020210, 222020100, 13);
			cm.getPlayer().dropMessage(6, "������ ���� �︮���� ž 2��, �Ʒ������� �ִ� ���Դϴ�.");
			cm.dispose();
		} else {
			cm.TimeMoveMap(222020110, 222020200, 13);
			cm.getPlayer().dropMessage(6, "������ ���� �︮���� ž 99��, ���긮���� �ִ� ���Դϴ�.");
			cm.dispose();
		}
	}





else { 
			cm.dispose();
		}
    }
}
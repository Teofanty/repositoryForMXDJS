function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
			if(cm.getPlayer().getMapId() == 108010101 || cm.getPlayer().getMapId() == 108010201 || cm.getPlayer().getMapId() == 108010301 || cm.getPlayer().getMapId() == 108010401 || cm.getPlayer().getMapId() == 108010501){
			cm.sendOk("����ͼ��ʱ�޷�ʹ��ʹ����������");
			cm.dispose();
			return;
		}		
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "������Ģ��ʯ��,�����кܶ�ö����ޡ�\r\n\r\n"
			text += "#L1##e#r��ȯ�齱#l\r\n\r\n"
			text += "#L2##e#r��ҳ齱#l\r\n\r\n"     
            cm.sendSimple(text);
        } else if (selection == 1) {
			cm.openNpc(9110010, 1);
		} else if (selection == 2) {
			cm.openNpc(9110010, 2);
		}
    }
}



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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "#e#r��ӭ����ѫ�ºϳ�!!#k\r\n\r\n"
            text += "#L1#�ϳ�#v1142296##z1142296##l\r\n\r\n"
			text += "#L2#�ϳ�#v1142218##z1142218##l\r\n\r\n"
			text += "#L3#�ϳ�#v1142408##z1142408##l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9900004, 61);
        } else if (selection == 2) {
		cm.openNpc(9900004, 62);
        } else if (selection == 3) {
		cm.openNpc(9900004, 63);
		}
	}
    }




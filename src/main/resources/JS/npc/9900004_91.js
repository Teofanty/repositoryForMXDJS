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
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
			text += "#e#r    ��. ��ȡ��� ֮ǰ�ǵ� #b#b�Ƚ������ڳ��ռ�  #k\r\n\r\n����������Ʒ! #b#b�ۿɲ������⳥��Ӵ!!!#k\r\n\r\n\r\n"
            text += "#L1##e#d 3СʱȨ˫�����鿨 or 3СʱȨ1��Ȩ˫�����ʿ� #l\r\n\r\n"//3
            text += "#L2##d#v4170000#��ȡ100Ԫ���#l\r\n\r\n"//3
            text += "#L3##d#v4170001#��ȡ300Ԫ���#l\r\n\r\n"//3
            text += "#L4##d#v4170002#��ȡ500Ԫ���#l\r\n\r\n"//3
            text += "#L5##d#v4170003#��ȡ1000Ԫ���#l\r\n\r\n"//3
			text += "#L6##d#v4170004#��ȡ3000Ԫ���#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(1052015, 0);
        } else if (selection == 2) {
		cm.openNpc(9900004, 71);
        } else if (selection == 3) {
		cm.openNpc(9900004, 72);
        } else if (selection == 4) {
		cm.openNpc(9900004, 73);
		} else if (selection == 5) {
		cm.openNpc(9900004, 74);
		} else if (selection == 6) {
		cm.openNpc(9900004, 75);
	}
    }
}



function start() {
    status = -1;

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "   ��ӭ����#rMachi&�鼪ð�յ�#k��Я�ֹ���ð����������.\r\n" //����
            text += "               #d#e��������ʱ����" + cm.getPlayer().getzxsj() + " ����\r\n"
            text += "#k#n��ǰ���㣺#r" +cm.getPlayer().getCSPoints(1) +  "#k��    �����㣺#r" + cm.getPlayer().getBeans() + "#k��\r\n"
            text += "#L1##r#e��ֵ��ȡ#l      #L2##d���߽���#l      #L3##r������#l\r\n\r\n"
			text += "#L4##d��Ҷ�һ�#l      #L5#ÿ������#l      #L6#ɾ������#l"
            cm.sendOk(text); 
        } else if (selection == 1) {
            cm.openNpc(9900004, 8); //��ֵ��ȡ	
        } else if (selection == 2) {
            cm.openNpc(9900004, 7); //���߽���		
        } else if (selection == 3) {
            cm.openNpc(9900004, 3); //תְת��
        } else if (selection == 4) {
            cm.openNpc(9900004, 12); //��Ҷ�һ�
        } else if (selection == 5) {
            cm.openNpc(9900004, 5); //ÿ������
        } else if (selection == 6) {
            cm.openNpc(9310073, 0); //������
        }
    }
}

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
           // var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "#r��ȫñ��Ϯ.\r\n"
			text += "#L2##r#v4001266##b88��#r�һ�#b#v1002939#\r\n\r\n" 			

            cm.sendSimple(text);
        } else if (selection == 1) {
						if(cm.getPlayer().getMapId() == 910000000){
	cm.sendOk("���Ѿ����г��ˣ����˺���?");
cm.dispose();
return;
}		
		cm.warp(910000000);//�ص��г�
		cm.dispose();
        } else if (selection == 2) {
		cm.openNpc(9900004, 21);//�������
        } else if (selection == 3) {
		cm.openNpc(9110014, 20);//תְת��
        } else if (selection == 4) {
		cm.openNpc(9310073, 30);//��ͼ����
        } else if (selection == 5) {
		cm.openNpc(9310074, 400);//��������
        } else if (selection == 6) {
		cm.openNpc(9310073, 500);//�� �� ��
        } else if (selection == 7) {//���߽���
		cm.openNpc(9310073, 7);
        } else if (selection == 8) {//��ֵ��ȡ
		cm.openNpc(9310073, 2);
		} else if (selection == 9) {//ͬ����װ
		cm.openNpc(9310073, 9);
		} else if (selection == 10) {//ɾ��ָ����Ʒ
		cm.openNpc(9310073, 1);
	    } else if (selection == 11) {//��������
		cm.warp(100000104);
		cm.dispose();
		} else if (selection == 12) {//��Ҷ�һ�
		cm.openNpc(9310073, 12);
		} else if (selection == 13) {//��Ҷ�һ�
		cm.openNpc(9310073, 13);
	}
    }
}



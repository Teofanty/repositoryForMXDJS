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
			text += "\t\t\t#v5160006##e�����н�����,��ӭ#k!#n\r\n"
			text += "              #d#e�����#r" +cm.getPlayer().getCSPoints(1) +  "#d#e��#k\r\n\r\n"//3
            text += "#L1##b100���һ�#v4000463#1��#l    #L2##b1��#v4000463#�һ�100���#l\r\n\r\n"
			text += "#L3##b1000���һ�#v4000463#10��#l  #L4##b10��#v4000463#�һ�1000���#l\r\n\r\n"
			text += "#L5##b1W���һ�#v4000463#100��#l   #L6##b100��#v4000463#�һ�10000���#l\r\n\r\n"//3
			//text += "\t\t\t\r\n#e��ܰ��ʾ�� \r\n#r���Ҷһ���ʱ��ǵ��ڱ��������������������ϵĿո�\r\n�����ɻ���δ�����뱳�������GM�Ų�����\r\n#k#n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { 
		if (cm.getInventory(4).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
        cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�.");	
        cm.dispose();
		} else if(cm.getPlayer().getCSPoints(1) >= 100){//�жϵ�ȯ
	    cm.getPlayer().modifyCSPoints(1, -100, true);//����ȯ��һ�ֺ���
		cm.gainItem(4000463,1);
		cm.sendOk("��ϲ��һ��ɹ���һ��#v4000463#");
		cm.worldMessage(6,"��ң�["+cm.getName()+"]�������г��н����,ʹ��100��ȯ�һ���1�������.");
        cm.dispose();
		 } else {
        cm.sendOk("��ĵ����100�㡣");
        cm.dispose();
		}
        } else if (selection == 2) {
        if (cm.haveItem(4000463, 1)) {
		cm.gainItem(4000463,-1);
        cm.getPlayer().modifyCSPoints(1, +100, true);//����ȯ��һ�ֺ���
		cm.sendOk("��ϲ��ɹ��һ���100��");
		cm.worldMessage(6,"��ң�["+cm.getName()+"]�������г��н����,ʹ��1������Ҷһ���100��ȯ.");
        cm.dispose();
		 } else {
        cm.sendOk("���û��#v4000463#");
        cm.dispose();
		}
		} else if (selection == 3) { 
		if (cm.getInventory(4).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
        cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�.");	
        cm.dispose();
		} else if(cm.getPlayer().getCSPoints(1) >= 1000){//�жϵ�ȯ
	    cm.getPlayer().modifyCSPoints(1, -1000, true);//����ȯ��һ�ֺ���
		cm.gainItem(4000463,10);
		cm.sendOk("��ϲ��һ��ɹ���10��#v4000463#");
		cm.worldMessage(6,"��ң�["+cm.getName()+"]�������г��н����,ʹ��1000��ȯ�һ���10�������.");
        cm.dispose();
		 } else {
        cm.sendOk("��ĵ����100�㡣");
        cm.dispose();
		}
        } else if (selection == 4) {
        if (cm.haveItem(4000463, 10)) {
		cm.gainItem(4000463,-10);
        cm.getPlayer().modifyCSPoints(1, +1000, true);//����ȯ��һ�ֺ���
		cm.sendOk("��ϲ��ɹ��һ���1000��");
		cm.worldMessage(6,"��ң�["+cm.getName()+"]�������г��н����,ʹ��10������Ҷһ���1000��ȯ.");
        cm.dispose();
		 } else {
        cm.sendOk("���û��10��#v4000463#");
        cm.dispose();
				}
						} else if (selection == 5) { 
		if (cm.getInventory(4).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
        cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�.");	
        cm.dispose();
		} else if(cm.getPlayer().getCSPoints(1) >= 10000){//�жϵ�ȯ
	    cm.getPlayer().modifyCSPoints(1, -10000, true);//����ȯ��һ�ֺ���
		cm.gainItem(4000463,100);
		cm.sendOk("��ϲ��һ��ɹ���100��#v4000463#");
		cm.worldMessage(6,"��ң�["+cm.getName()+"]�������г��н����,ʹ��10000��ȯ�һ���100�������.");
        cm.dispose();
		 } else {
        cm.sendOk("��ĵ����1W�㡣");
        cm.dispose();
		}
        } else if (selection == 6) {
        if (cm.haveItem(4000463, 100)) {
		cm.gainItem(4000463,-100);
        cm.getPlayer().modifyCSPoints(1, +10000, true);//����ȯ��һ�ֺ���
		cm.worldMessage(6,"��ң�["+cm.getName()+"]�������г��н����,ʹ��100������Ҷһ���10000��ȯ.");
		cm.sendOk("��ϲ��ɹ��һ���1W��");
        cm.dispose();
		 } else {
        cm.sendOk("���û��100��#v4000463#");
        cm.dispose();
				}
		}
		}}

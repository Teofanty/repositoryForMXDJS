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
			sl = cm.getPlayer().getItemQuantity(4001129, false);
			text += "\t\t\t#v5160006##e���Ǹ�������,��ӭ#k!#n\r\n"
			text += " #b#n   ��ɫ�����ʣ��:" + sl + " ��#k\r\n\r\n"//3
            text += "#L1##b50��#v4001129#�һ�1��#v2049002##z2049002##l\r\n"
			text += "#L2##b30��#v4001129#�һ�10��#v4020009##z4020009##l\r\n"
			text += "#L3##b150��#v4001129#�һ�1��#v1022073##z1022073##l\r\n"
			text += "#L4##b200��#v4001129#�һ�1��#v1082232##z1082232##l\r\n"
			text += "#L5##b150��#v4001129#�һ�1��#v1072455##z1072455##l\r\n"
			text += "#L6##b350��#v4001129#�һ�1��#v1082322#����/ħ��+1#l\r\n"
			text += "#L7##b350��#v4001129#�һ�1��#v1072534##z1072534##l\r\n"
			text += "#L8##b450��#v4001129#�һ�1��#v1122118#����/ħ��+1 ��ά����+9 \r\n   �ر�/����+20 �ƶ�+10 ��Ծ+5#l\r\n\r\n"
			text += "#L9##b450��#v4001129#�һ�1��#v1032186##z1032186##l\r\n\r\n"
			//text += "\t\t\t\r\n#e��ܰ��ʾ�� \r\n#r���Ҷһ���ʱ��ǵ��ڱ��������������������ϵĿո�\r\n�����ɻ���δ�����뱳�������GM�Ų�����\r\n#k#n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { 
		if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
        cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");	
        cm.dispose();
		} else if (cm.haveItem(4001129, 50)) {//�ж���Ʒ
	    cm.gainItem(4001129, -50);//�۳���Ʒ
		cm.gainItem(4000463,1);
		cm.sendOk("��ϲ��һ��ɹ���1��#v2049002##z2049002#");
		cm.worldMessage(6,"��ң�["+cm.getName()+"]�������г���������,ʹ��50��ð�յ�����Ҷһ���1�Ű�ҽ����.");
        cm.dispose();
		 } else {
        cm.sendOk("���#v4001129#����50����");
        cm.dispose();
		}
        } else if (selection == 2) {
        if (cm.getInventory(4).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
        cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�.");	
        cm.dispose();
		} else if (cm.haveItem(4001129, 30)) {//�ж���Ʒ
	    cm.gainItem(4001129, -30);//�۳���Ʒ
		cm.gainItem(4020009,10);
		cm.sendOk("��ϲ��һ��ɹ���10��#v4020009##z4020009#");
		cm.worldMessage(6,"��ң�["+cm.getName()+"]�������г���������,ʹ��30��ð�յ�����Ҷһ���10��ʱ����Ƭ.");
        cm.dispose();
		 } else {
        cm.sendOk("���#v4001129#����30����");
        cm.dispose();
		}
		} else if (selection == 3) { 
		if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
        cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");	
        cm.dispose();
		} else if (cm.haveItem(4001129, 150)) {//�ж���Ʒ
	    cm.gainItem(4001129, -150);//�۳���Ʒ
		cm.gainItem(1022073,1,true);
		cm.sendOk("��ϲ��һ��ɹ���һ��#v1022073##z1022073#");
		cm.worldMessage(6,"��ң�["+cm.getName()+"]�������г���������,ʹ��150��ð�յ�����Ҷһ��˻����۾�.");
        cm.dispose();
		 } else {
        cm.sendOk("���#v4001129#����150����");
        cm.dispose();
		}
        } else if (selection == 4) {
        if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
        cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");	
        cm.dispose();
		} else if (cm.haveItem(4001129, 200)) {//�ж���Ʒ
	    cm.gainItem(4001129, -200);//�۳���Ʒ
		cm.gainItem(1082232,1,true);
		cm.sendOk("��ϲ��һ��ɹ���һ��#v1082232##z1082232#");
		cm.worldMessage(6,"��ң�["+cm.getName()+"]�������г���������,ʹ��200��ð�յ�����Ҷһ���Ů�������.");
        cm.dispose();
		 } else {
        cm.sendOk("���#v4001129#����200����");
        cm.dispose();
		}
						} else if (selection == 5) { 
		if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
        cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");	
        cm.dispose();
		} else if (cm.haveItem(4001129, 150)) {//�ж���Ʒ
	    cm.gainItem(4001129, -150);//�۳���Ʒ
		cm.gainItem(1072455,1,true);
		cm.sendOk("��ϲ��һ��ɹ���һ��#v1072455##z1072455#");
		cm.worldMessage(6,"��ң�["+cm.getName()+"]�������г���������,ʹ��150��ð�յ�����Ҷһ���Ů���ѥ��.");
        cm.dispose();
		 } else {
        cm.sendOk("���#v4001129#����150����");
        cm.dispose();
		}
        } else if (selection == 6) {
        if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
        cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");	
        cm.dispose();
		} else if (cm.haveItem(4001129, 350)) {//�ж���Ʒ
	    cm.gainItem(4001129, -350);//�۳���Ʒ
		cm.gainItem(1082322,1);
		cm.sendOk("��ϲ��һ��ɹ���һ��#v1082322##z1082322#");
		cm.worldMessage(6,"��ң�["+cm.getName()+"]�������г���������,ʹ��350��ð�յ�����Ҷһ����ŵ���Ů�������.");
        cm.dispose();
		 } else {
        cm.sendOk("���#v4001129#����350����");
        cm.dispose();
		}
		} else if (selection == 7) {
        if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
        cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");	
        cm.dispose();
		} else if (cm.haveItem(4001129, 350)) {//�ж���Ʒ
	    cm.gainItem(4001129, -350);//�۳���Ʒ
		cm.gainItem(1072534,1,true);
		cm.sendOk("��ϲ��һ��ɹ���һ��#v1072534##z1072534#");
		cm.worldMessage(6,"��ң�["+cm.getName()+"]�������г���������,ʹ��350��ð�յ�����Ҷһ����ŵ���Ů���Ь��.");
        cm.dispose();
		 } else {
        cm.sendOk("���#v4001129#����350����");
        cm.dispose();
		}
		} else if (selection == 8) {
        if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
        cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");	
        cm.dispose();
		} else if (cm.haveItem(4001129, 450)) {//�ж���Ʒ
	    cm.gainItem(4001129, -450);//�۳���Ʒ
		cm.gainItem(1122118,1);
		cm.sendOk("��ϲ��һ��ɹ���һ��#v1122118##z1122118#");
		cm.worldMessage(6,"��ң�["+cm.getName()+"]�������г���������,ʹ��450��ð�յ�����Ҷһ������㰮��֤��.");
        cm.dispose();
		 } else {
        cm.sendOk("���#v4001129#����450����");
        cm.dispose();
		}
		} else if (selection == 9) {
        if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
        cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");	
        cm.dispose();
		} else if (cm.haveItem(4001129, 450)) {//�ж���Ʒ
	    cm.gainItem(4001129, -450);//�۳���Ʒ
		cm.gainItem(1032186,1,true);
		cm.sendOk("��ϲ��һ��ɹ���һ��#v1032186##z1032186#");
		cm.worldMessage(6,"��ң�["+cm.getName()+"]�������г���������,ʹ��450��ð�յ�����Ҷһ��˲��õİ���̩����.");
        cm.dispose();
		 } else {
        cm.sendOk("���#v4001129#����450����");
        cm.dispose();
		}
		}
		}}

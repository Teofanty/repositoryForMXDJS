var random = java.lang.Math.floor(Math.random() * 3000 + 1330);

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
			text += "\t\t\t\t���Ƕһ�NPC,��ӭ#k!#n\r\n"
			text += "              #d#e�����#r" +cm.getPlayer().getCSPoints(1) +  "#d#e��#k\r\n\r\n"//3
			text += "#L1##d1000W��Ҷһ�1332-4666��ȯ#l\r\n\r\n"
			text += "#L2##d#v4310018##v4310019##v4310014#�һ���ָ#l\t"
			text += "#L6##d�һ�#v4310018##v4310019##v4310014##l\r\n\r\n"
			text += "#L3##dʹ��#v4310018#����#v1114213##l\t"
			text += "#L4##dʹ��#v4310019#����#v1113164##l\r\n\r\n"
			text += "#L5##dʹ��#v4310014#����#v1112793##l\t"
			text += "#L10##e#d������������#l\r\n\r\n"
			text += "#L7##dʹ��#v4031456#�һ�װ��#l\r\n"
			text += "#L18##dʹ��#v4001176#�һ�����#l\r\n\r\n"
			text += "#L8##e#d�齱�һ�#l\r\n\r\n"
			text += "#L9##e#d������������#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { 
			if (cm.getMeso() >= 10000000){//�ж϶��ٽ��
				cm.gainMeso(-10000000);//���
				cm.gainDJ(random);//��ȯ
				cm.sendOk("��ϲ��һ���"+ random +"��ȯ");
				cm.worldMessage(6,"��ң�["+cm.getName()+"]�������г��н����,ʹ��1000W��Ҷһ�" + random +"��ȯ.");
				cm.dispose();
			} else {
				cm.sendOk("��Ľ�Ҳ���1000W��");
				cm.dispose();
				

			}
				} else if (selection == 13) {
			if (cm.getInventory(4).isFull(2)){
				cm.sendOk("#b�뱣֤������λ������3���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(1382047,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v1382047##z1382047#");
				cm.dispose();
			} else{
				
				cm.gainItem(1382047, -1);//����Ʒ
				cm.gainItem(4000244, 25);//����Ʒ
				cm.gainItem(4000245, 25);//����Ʒ
				cm.gainItem(4020009, 10);//����Ʒ
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
	} else if (selection == 14) {
			if (cm.getInventory(4).isFull(2)){
				cm.sendOk("#b�뱣֤������λ������3���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(1382045,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v1382045##z1382045#");
				cm.dispose();
			} else{
				
				cm.gainItem(1382045, -1);//����Ʒ
				cm.gainItem(4000244, 25);//����Ʒ
				cm.gainItem(4000245, 25);//����Ʒ
				cm.gainItem(4020009, 10);//����Ʒ
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
	} else if (selection == 15) {
			if (cm.getInventory(4).isFull(2)){
				cm.sendOk("#b�뱣֤������λ������3���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(1382046,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v1382046##z1382046#");
				cm.dispose();
			} else{
				
				cm.gainItem(1382046, -1);//����Ʒ
				cm.gainItem(4000244, 25);//����Ʒ
				cm.gainItem(4000245, 25);//����Ʒ
				cm.gainItem(4020009, 10);//����Ʒ
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
	} else if (selection == 16) {
			if (cm.getInventory(4).isFull(2)){
				cm.sendOk("#b�뱣֤������λ������3���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(1382048,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v1382048##z1382048#");
				cm.dispose();
			} else{
				
				cm.gainItem(1382048, -1);//����Ʒ
				cm.gainItem(4000244, 25);//����Ʒ
				cm.gainItem(4000245, 25);//����Ʒ
				cm.gainItem(4020009, 10);//����Ʒ
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}	
	} else if (selection == 17) {
			if (cm.getInventory(4).isFull(1)){
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4001084,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v1382048##z1382048#");
				cm.dispose();
			} else{
				
				cm.gainItem(4001084, -1);//����
				cm.gainItem(4001128, 1000);//����Ʒ
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
			
		 } else if (selection == 2) { 
		  cm.openNpc(9310074, 1);//��Ʒ�һ�
		  } else if (selection == 3) { 
		  cm.openNpc(9310074, 2);//���ҽ�ָ����
		  } else if (selection == 4) { 
		  cm.openNpc(9310074, 3);//���ҽ�ָ����
		  } else if (selection == 5) { 
		  cm.openNpc(9310074, 4);//���ҽ�ָ����
		  } else if (selection == 6) { 
		  cm.openNpc(9310074, 6);//�һ�����
		  } else if (selection == 7) { 
		  cm.openNpc(9310074, 7);//��Ҷ��һ�
		   } else if (selection == 8) { 
		  cm.openNpc(9310074, 8);//��Ҷ��һ�
		   } else if (selection == 9) { 
		  cm.openNpc(9310074, 9);//��Ҷ��һ�
		     } else if (selection == 10) { 
		  cm.openNpc(9310074, 10);//��Ҷ��һ�
		    } else if (selection == 18) { 
		  cm.openNpc(9310074, 18);//��Ҷ��һ�
		}
	}
}
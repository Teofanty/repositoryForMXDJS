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
			//text += "#L1##d1000W��Ҷһ�1332-4666��ȯ#l\r\n\r\n"
			//text += "#L2##d#v4310018##v4310019##v4310014#�һ���ָ#l\t"
			//text += "#L6##d�һ�#v4310018##v4310019##v4310014##l\r\n\r\n"
			//text += "#L3##dʹ��#v4310018#����#v1114213##l\t"
			//text += "#L4##dʹ��#v4310019#����#v1113164##l\r\n\r\n"
			//text += "#L5##dʹ��#v4310014#����#v1112793##l\t"
			//text += "#L7##dʹ��#v4031456#�һ�װ��#l\r\n\r\n"
			//text += "#L13##e#d#v1382047#�ɶһ�25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"
			//text += "#L14##e#d#v1382045#�ɶһ�25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"
			//text += "#L15##e#d#v1382046#�ɶһ�25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"1022067
			//text += "#L16##e#d#v1382048#�ɶһ�25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"
			text += "#L22##e#d2*#v4031997#�ɶһ�#v1102041##z1102041##b#l\r\n\r\n"
			text += "#L23##e#d2*#v4031997#�ɶһ�#v1102084##z1102084##b#l\r\n\r\n"
			text += "#L24##e#d#v4031997#�ɶһ�#v2070006##z2070006##b#l\r\n\r\n"
			text += "#L25##e#d#v4031997#�ɶһ�#v2070007##z2070007##b#l\r\n\r\n"
			text += "#L26##e#d#v4031997#�ɶһ�#v1122130##z1122130##b#l\r\n\r\n"
			text += "#L27##e#d#v4031997#�ɶһ�#v1012070##z1012070##b#l\r\n\r\n"
			text += "#L28##e#d2*#v4031997#�ɶһ�#v1002939##z1002939##b#l\r\n\r\n"
			text += "#L29##e#d2*#v4031997#�ɶһ�#v1402037##z1402037##b#l\r\n\r\n"
			text += "#L30##e#d#v4031997#�ɶһ�#v1132257##z1132257##b#l\r\n\r\n"
			text += "#L31##e#d#v4031997#�ɶһ�#v1012015##z1012015##b#l\r\n\r\n"
			text += "#L40##e#d#v4031997#�ɶһ�#v1012060##z1012060##bMG��#l\r\n\r\n"
			text += "#L35##e#d#v4031997#�ɶһ�#v1102042##z1102042##bMG��#l\r\n\r\n"
			text += "#L45##e#d#v4031997#�ɶһ�#v1012161##z1012161##b��ά.����.�ּ���#l\r\n\r\n"
			text += "#L46##e#d#v4031997#�ɶһ�#v1022067##z1022067##b#l\r\n\r\n"
			//text += "#L32##e#d#v4031997#�ɶһ�#v##l\r\n\r\n"
            cm.sendSimple(text);
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
	} else if (selection == 46) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//����Ʒ1012015
		        cm.gainItem(1022067, 1);
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
	} else if (selection == 45) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//����Ʒ1012015
		        cm.gainItem(1012161
				, 1);
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
	} else if (selection == 22) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4031997,2)) {//�ж���Ʒ
			    cm.sendOk("#b��û��2��#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -2);//����Ʒ
		        cm.gainItem(1102041, 1);
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
	} else if (selection == 23) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4031997,2)) {//�ж���Ʒ
			    cm.sendOk("#b��û��2��#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -2);//����Ʒ
		        cm.gainItem(1102084, 1);
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
	} else if (selection == 24) {
			if (cm.getInventory(2).isFull(0)){
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//����Ʒ
		        cm.gainItem(2070006, 1);
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
	} else if (selection == 25) {
			if (cm.getInventory(2).isFull(0)){
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//����Ʒ
		        cm.gainItem(2070007, 1);
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
	} else if (selection == 26) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//����Ʒ
		        cm.gainItem(1122130, 1);
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
	} else if (selection == 27) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b�뱣֤��װ��λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//����Ʒ
		        cm.gainItem(1012070, 1);
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
	} else if (selection == 28) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4031997,2)) {//�ж���Ʒ
			    cm.sendOk("#b��û��2��#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -2);//����Ʒ
		        cm.gainItem(1002939, 1);
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
	} else if (selection == 29) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4031997,2)) {//�ж���Ʒ
			    cm.sendOk("#b��û��2��#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -2);//����Ʒ
		        cm.gainItem(1402037, 1);
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
		} else if (selection == 30) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//����Ʒ1012015
		        cm.gainItem(1132257, 1);
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
	} else if (selection == 31) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//����Ʒ1012015
		        cm.gainItem(1012015, 1);
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
	} else if (selection == 40) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//����Ʒ1012015
		        cm.gainItem(1012060, 1);
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
	} else if (selection == 35) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//����Ʒ1012015
		        cm.gainItem(1102042, 1);
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
		}
	}
}
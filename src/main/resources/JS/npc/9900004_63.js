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
            text += "#L3##e#d1��#v1142218##z1142218#+2000����+8000��#v4001126##z4001126#+300��#v4031456##z4031456#+1��#v4251202##z4251202#+200��#v4000487##z4000487#+3��#v4001085##z4001085#+3��#v4001084##z4001084#+3��#v4001083##z4001083#�һ�#v1142408#����/ħ��+25,4ά����+50,HP/MP1000#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
				if (cm.getInventory(1).isFull(0)){//�жϵ��ĸ�Ҳ������������װ�����Ƿ���һ���ո�
        cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��齱.");
        cm.dispose();
        } else if (!cm.haveItem(1142218, 1)) {//�ж���Ʒ
		cm.sendOk("#b#v1142296##z1142218#����.");
        cm.dispose();
		} else if (!cm.haveItem(4001126, 8000)) {//�ж���Ʒ
		cm.sendOk("#b#v4001126##z4001126#����.");
        cm.dispose();
		} else if (!cm.haveItem(4031456, 300)) {//�ж���Ʒ
		cm.sendOk("#b#v4031456##z4031456#����.");
        cm.dispose();
		} else if (!cm.haveItem(4251202, 1)) {//�ж���Ʒ
		cm.sendOk("#b#v4251201##z4251201#����.");
        cm.dispose();
		} else if (!cm.haveItem(4000487, 200)) {//�ж���Ʒ
		cm.sendOk("#b#v4000487##z4000487#����.");
        cm.dispose();
		} else if (!cm.haveItem(4001085, 3)) {//�ж���Ʒ
		cm.sendOk("#b#v4001085##z4001085#����.");
        cm.dispose();
		} else if (!cm.haveItem(4001084, 3)) {//�ж���Ʒ
		cm.sendOk("#b#v4001084##z4001084#����.");
        cm.dispose();
		} else if (!cm.haveItem(4001083, 3)) {//�ж���Ʒ
		cm.sendOk("#b#v4001083##z4001083#����.");
        cm.dispose();
		} else if (!cm.getMeso() >= 20000000) {//�ж���Ʒ
		cm.sendOk("#b��Ҳ���2000����.");
        cm.dispose();
		} else{
		cm.gainItem(1142218, -1);//�۳���Ʒ
		cm.gainItem(4001126, -8000);//�۳���Ʒ
		cm.gainItem(4031456, -300);//�۳���Ʒ
		cm.gainItem(4251202, -1);//�۳���Ʒ
		cm.gainItem(4000487, -200);//�۳���Ʒ
		cm.gainItem(4001085, -3);//�۳���Ʒ
		cm.gainItem(4001084, -3);//�۳���Ʒ
		cm.gainItem(4001083, -3);//�۳���Ʒ
		cm.gainMeso(- 20000000);//�۳����ٽ��
		cm.gainItem(1142408,50,50,50,50,1000,1000,25,25,0,0,0,0,0,0);//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,�ƶ��ٶ�,��Ծ��
		cm.sendOk("#b�ɹ��һ�#v1142081##z1142081#.");
        cm.dispose();
		}
	}
    }
}



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
			text += "#L2##e#d1��#v1142296##z1142296#+800����+500��#v4001126##z4001126#+150��#v4031456##z4031456#+2��#v4251201##z4251201#+100��#v4000487##z4000487#+10��#v4001111##z4001111#+10��#v4000243##z4000243#�һ�#v1142218#����/ħ��+15,4ά����+30,HP/MP500#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
				if (cm.getInventory(1).isFull(0)){//�жϵ��ĸ�Ҳ������������װ�����Ƿ���һ���ո�
        cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��齱.");
        cm.dispose();
        } else if (!cm.haveItem(1142296, 1)) {//�ж���Ʒ
		cm.sendOk("#b#v1142296##z1142296#����.");
        cm.dispose();
		} else if (!cm.haveItem(4001126, 500)) {//�ж���Ʒ
		cm.sendOk("#b#v4001126##z4001126#����.");
        cm.dispose();
		} else if (!cm.haveItem(4031456, 150)) {//�ж���Ʒ
		cm.sendOk("#b#v4031456##z4031456#����.");
        cm.dispose();
		} else if (!cm.haveItem(4251201, 2)) {//�ж���Ʒ
		cm.sendOk("#b#v4251201##z4251201#����.");
        cm.dispose();
		} else if (!cm.haveItem(4000487, 100)) {//�ж���Ʒ
		cm.sendOk("#b#v4000040##z4000040#����.");
        cm.dispose();
		} else if (!cm.haveItem(4001111, 10)) {//�ж���Ʒ
		cm.sendOk("#b#v4001111##z4001111#����.");
        cm.dispose();
		} else if (!cm.haveItem(4000243, 10)) {//�ж���Ʒ
		cm.sendOk("#b#v4000243##z4000243#����.");
        cm.dispose();
		} else if (!cm.getMeso() >= 8000000) {//�ж���Ʒ
		cm.sendOk("#b��Ҳ���800����.");
        cm.dispose();
		} else{
		cm.gainItem(1142296, -1);//�۳���Ʒ
		cm.gainItem(4001126, -500);//�۳���Ʒ
		cm.gainItem(4031456, -150);//�۳���Ʒ
		cm.gainItem(4251201, -2);//�۳���Ʒ
		cm.gainItem(4000487, -100);//�۳���Ʒ
		cm.gainItem(4001111, -10);//�۳���Ʒ
		cm.gainItem(4000243, -10);//�۳���Ʒ
		cm.gainMeso(- 8000000);//�۳����ٽ��
		cm.gainItem(1142218,30,30,30,30,500,500,15,15,0,0,0,0,0,0);//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,�ƶ��ٶ�,��Ծ��
		cm.sendOk("#b�ɹ��һ�#v1142218##z1142218#.");
        cm.dispose();
		}
	}
    }
}



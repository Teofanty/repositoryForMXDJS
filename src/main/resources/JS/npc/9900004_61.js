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
            text += "#L1##e#d1��#v1142081##z1142081#+300����+500��#v4001126##z4001126#+50��#v4031456##z4031456#+20��#v4000487##z4000487#+5��#v4000040##z4000040#�һ�#v1142296#����/ħ��+5,4ά����+10,HP/MP300#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
		if (cm.getInventory(1).isFull(0)){//�жϵ��ĸ�Ҳ������������װ�����Ƿ���һ���ո�
        cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��齱.");
        cm.dispose();
        } else if (!cm.haveItem(1142081, 1)) {//�ж���Ʒ
		cm.sendOk("#b#v1142081##z1142081#����.");
        cm.dispose();
		} else if (!cm.haveItem(4001126, 500)) {//�ж���Ʒ
		cm.sendOk("#b#v4001126##z4001126#����.");
        cm.dispose();
		} else if (!cm.haveItem(4031456, 50)) {//�ж���Ʒ
		cm.sendOk("#b#v4031456##z4031456#����.");
        cm.dispose();
		} else if (!cm.haveItem(4000487, 20)) {//�ж���Ʒ
		cm.sendOk("#b#v4000487##z4000487#����.");
        cm.dispose();
		} else if (!cm.haveItem(4000040, 5)) {//�ж���Ʒ
		cm.sendOk("#b#v4000040##z4000040#����.");
        cm.dispose();
		} else if (!cm.getMeso() >= 3000000) {//�ж���Ʒ
		cm.sendOk("#b��Ҳ���300����.");
        cm.dispose();
		} else{
		cm.gainItem(1142081, -1);//�۳���Ʒ
		cm.gainItem(4001126, -500);//�۳���Ʒ
		cm.gainItem(4031456, -50);//�۳���Ʒ
		cm.gainItem(4000487, -20);//�۳���Ʒ
		cm.gainItem(4000040, -5);//�۳���Ʒ
		cm.gainMeso(- 3000000);//�۳����ٽ��
		cm.gainItem(1142296,15,15,15,15,300,300,5,5,0,0,0,0,0,0);//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,�ƶ��ٶ�,��Ծ��
		cm.sendOk("#b�ɹ��һ�#v1142296##z1142296#.");
        cm.dispose();
		}
	}
    }
}



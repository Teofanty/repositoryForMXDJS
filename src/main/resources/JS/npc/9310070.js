function start() {
    status = -1;

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
		if(cm.getLevel() >= 100){//�жϵȼ�
		var �һ����� = 9999;
		} else if(cm.getLevel() >= 70){//�жϵȼ�
		var �һ����� = 40;
		} else if(cm.getLevel() >= 50){//�жϵȼ�
		var �һ����� = 15;
		} else {
		var �һ����� = 5;
		}
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
            text += "��ӭ�����һ�Ѫ������Ա\r\n"
			text += "#n#k��ǰ�ȼ�:#r"+cm.getLevel()+"#k��\r\n���Զһ�:#r"+�һ�����+"#k��\r\n��ǰ�Ѿ��һ���:#r"+cm.getPlayer().getOneTimeLog("dhHP")+"#k��\r\n��ǰ�Ѿ��һ���:#r"+cm.getPlayer().getOneTimeLog("dhMP")+"#k��\r\n" 
			text += "#n#k��ǰ���#r" +cm.getPlayer().getCSPoints(1) +  "#d��\r\n" 
            text += "#L1##e#d2000��һ�200Ѫ#l\r\n\r\n"
			text += "#L2##e#d2000��һ�200��#l\r\n\r\n"
			cm.sendOk(text); 
        } else if (selection == 1) {
			if(cm.getPlayer().getOneTimeLog("dhHP") >= �һ�����){//�ж����ü�¼
			cm.sendOk("�㵱ǰ�ȼ�ֻ���Զһ�#r"+�һ�����+"#k��,��Ŭ���������������Ұ�!");
            cm.dispose();
			} else if(cm.getPlayer().getCSPoints(1) < 2000){//�жϵ�ȯ
			cm.sendOk("��û��#r2000#k��ȯ,�޷����жһ�!");
            cm.dispose();
			} else {
			cm.gainDJ(-2000);//����ȯ�ڶ��ֺ���
			cm.getPlayer().setOneTimeLog("dhHP");//�����ü�¼
			cm.getPlayer().addmaxHP(+200);
			cm.sendOk("��ϲ��.�ɹ��Ķһ���200��Ѫ��!");
            status = -1;

        }
		} else if (selection == 2) {
			if(cm.getPlayer().getOneTimeLog("dhMP") >= �һ�����){//�ж����ü�¼
			cm.sendOk("�㵱ǰ�ȼ�ֻ���Զһ�#r"+�һ�����+"#k��,��Ŭ���������������Ұ�!");
            cm.dispose();
			} else if(cm.getPlayer().getCSPoints(1) < 2000){//�жϵ�ȯ
			cm.sendOk("��û��#r2000#k��ȯ,�޷����жһ�!");
            cm.dispose();
			} else {
			cm.gainDJ(-2000);//����ȯ�ڶ��ֺ���
			cm.getPlayer().setOneTimeLog("dhMP");//�����ü�¼
			cm.getPlayer().addmaxMP(+200);
			cm.sendOk("��ϲ��.�ɹ��Ķһ���200������!");
            status = -1;

        }
    }
}}
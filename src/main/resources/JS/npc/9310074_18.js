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
            if (cm.getPlayer().getMapId() == 108010101 || cm.getPlayer().getMapId() == 108010201 || cm.getPlayer().getMapId() == 108010301 || cm.getPlayer().getMapId() == 108010401 || cm.getPlayer().getMapId() == 108010501) {
                cm.sendOk("����ͼ��ʱ�޷�ʹ��ʹ����������");
                cm.dispose();
                return;
            }
            //cm.laba(cm.getName() + "" + " : " + "�ɹ������˵ڶ���תְ" + jobName + ".....~",11);				
            //cm.laba(cm.getPlayer().getName() + " [������]" + " : " + "[���������������]��Ҫ��ʿһ�����",9);
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "               #v3994071##v3994084##v3994062##v3994071##v3994082##v3994062#\r\n" //showghrs
            //text += "               #e#d��������ʱ����" + cm.getPlayer().getzxsj() + " ����\r\n"//2
			
           text += "#L20##e#d60*#v4001176#+1000����+250W�һ�#v2340000##l\r\n\r\n"
			//text += "#L13##e#d#v1382047#�ɶһ�25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"
			//text += "#L14##e#d#v1382045#�ɶһ�25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"
			//text += "#L15##e#d#v1382046#�ɶһ�25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"
			//text += "#L16##e#d#v1382048#�ɶһ�25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"
            cm.sendOk(text); 
			//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,�ƶ��ٶ�,��Ծ��
        } else if (selection == 1) {
			if(cm.getPlayer().getBossLog("ǩ��") >= 1){//�ж�ǩ����¼
			    cm.sendOk("������Ѿ�ǩ����,����������ǩ��!");
                cm.dispose();
			} else if(cm.getLevel() < 70){//�жϵȼ�
					cm.sendOk("��û�дﵽ70���޷�ǩ��!70���Ժ��������Ұ�!");
					cm.dispose();
			} else if (!cm.haveItem(4000487, 10)) {//�ж���Ʒ
					cm.sendOk("��û��10��#v4000487##z4000487#,�޷�����ǩ��!");
					cm.dispose();
			} else{
					cm.gainItem(4000487, -10);//�۳���Ʒ
					cm.gainExp(50000);//��5�������˼
					cm.gainItem(4032398, 1);//����Ʒ
					cm.sendOk("��ϲ��,ǩ���ɹ�!");
					cm.getPlayer().setBossLog('ǩ��');//��ǩ����¼
					cm.worldMessage(5,"��ң�["+cm.getName()+"]�ɹ�������ǩ��,��ҹ�ϲ��/����.");
					cm.dispose();
			}
		} else if (selection == 20) {
			if (cm.getInventory(2).isFull(0)){
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4001176,60)) {//�ж���Ʒ
			    cm.sendOk("#b��û��60��#v4001176##z4001176#");
				cm.dispose();
			} else if (!cm.getMeso() >= 2500000){//�ж϶��ٽ��
			cm.sendOk("#b��û���㹻�Ľ��");
				cm.dispose();
			} else if(!cm.getPlayer().getCSPoints(1) >= 1000){//�жϵ���ȯ
			cm.sendOk("#b��û���㹻�ĵ���");
				cm.dispose();
			} else{
				cm.gainD(-1000);//����ȯ
                cm.gainMeso(-2500000);//���
				cm.gainItem(4001176, -60);//����Ʒ
				cm.gainItem(2340000, 1);//����Ʒ
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	
	}
		} else if (selection == 3) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (cm.haveItem(4000074, 200)) {//�ж���Ʒ
				cm.gainItem(4000074, -200);//����Ʒ
				cm.gainItem(4000487, 10);//����Ʒ
				cm.sendOk("�ɹ���200��#v4000074##z4000074#�һ���10��#v4000487##z4000487#!");
				cm.dispose();
			} else{
				cm.sendOk("��û��200��#v4000074##z4000074#!");
				cm.dispose();
			}
				} else if (selection == 5) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (cm.haveItem(4031025, 10)) {//�ж���Ʒ
				cm.gainItem(4031025, -10);//����Ʒ
				cm.gainItem(4000487, 10);//����Ʒ
				cm.sendOk("�ɹ���10��#v4031025##z4031025#�һ���10��#v4000487##z4000487#!");
				cm.dispose();
			} else{
				cm.sendOk("��û��10��#v4031025##z4031025#!");
				cm.dispose();
			}
		} else if (selection == 9) {
			if (cm.getInventory(2).isFull(0)){
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4032398,2)) {//�ж���Ʒ
			    cm.sendOk("#b��û��2��#v4032398##z4032398#");
				cm.dispose();
			} else if (cm.getMeso() < 2500000){//�ж϶��ٽ��
			    cm.sendOk("#b��Ľ��С��2500000Ԫ");
				cm.dispose();
			} else{
				cm.gainMeso(-2500000);//����Ʒ
				cm.gainItem(4032398, -2);//����Ʒ
				cm.gainItem(2340000, 1);//����Ʒ
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
			
			}
				} else if (selection == 10) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4032398,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4032398##z4032398#");
				cm.dispose();
			} else if (!cm.haveItem(4000039,200)) {//�ж���Ʒ
			    cm.sendOk("#b��û��200��#v4000039##z4000039#");
				cm.dispose();
			} else if (!cm.haveItem(4000176,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4000176##z4000176#");
				cm.dispose();
			} else{
				cm.gainItem(4032398, -1);//����Ʒ4000176
				cm.gainItem(4000176, -1);//����Ʒ4000176
				cm.gainItem(4000039, -200);//����Ʒ
				cm.gainItem(4020009, 1);//����Ʒ
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
			
			}
			} else if (selection == 11) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4000232,300)) {//�ж���Ʒ
			    cm.sendOk("#b��û��300��#v4000232##z4000232#");
				cm.dispose();
			} else if (!cm.haveItem(4000234,300)) {//�ж���Ʒ
			    cm.sendOk("#b��û��300��#v4000234##z4000234#");
				cm.dispose();
			} else if (!cm.haveItem(4000231,300)) {//�ж���Ʒ
			    cm.sendOk("#b��û��300��#v4000176##z4000176#");
				cm.dispose();
			} else{
				cm.gainItem(4000232, -300);//����Ʒ4000176
				cm.gainItem(4000234, -300);//����Ʒ4000176
				cm.gainItem(4000231, -300);//����Ʒ
				cm.gainItem(4000245, 1);//����Ʒ
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
			
		}
		} else if (selection == 12) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4000232,300)) {//�ж���Ʒ
			    cm.sendOk("#b��û��300��#v4000232##z4000232#");
				cm.dispose();
			} else if (!cm.haveItem(4000234,300)) {//�ж���Ʒ
			    cm.sendOk("#b��û��300��#v4000234##z4000234#");
				cm.dispose();
			} else if (!cm.haveItem(4000231,300)) {//�ж���Ʒ
			    cm.sendOk("#b��û��300��#v4000176##z4000176#");
				cm.dispose();
			} else{
				cm.gainItem(4000232, -300);//����Ʒ4000176
				cm.gainItem(4000234, -300);//����Ʒ4000176
				cm.gainItem(4000231, -300);//����Ʒ
				cm.gainItem(4000244, 1);//����Ʒ
				cm.sendOk("�һ��ɹ�!");
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
}}}
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
			text += "\r\n  70��֮��ɽ���ÿ��ǩ����������5W ����� 1 ��#v4032398#����Ҫ��10��#v4000487#)��\r\n"//3
            text += "#L1##e#d10��#v4000487##z4000487#ǩ��#l\r\n\r\n"
			text += "#L5##e#d10��#v4031025##z4031025#�һ�10��#v4000487##z4000487##l\r\n\r\n"
			text += "#L3##e#d200��#v4000074##z4000074#�һ�10��#v4000487##z4000487##l\r\n\r\n"
			text += "#L9##e#d1��#v4032398#+250W�һ�#z2340000##l\r\n\r\n"
			text += "#L88##e#d1��#v4032398#�һ�#z4031179##l\r\n\r\n"
			text += "#L10##e#d1��#v4032398#+200��#v4000039#+#v4000176#�һ�#z4020009#һ��(Ҫ����Ͻ�ż���Ķ�)#l\r\n\r\n"
			text += "#L11##e#d200��#v4000232#+200��#v4000234#+200��#v4000231#�һ�#z4000245#һ��(Ҫ����Ͻ�ż���Ķ�)#l\r\n\r\n"
			text += "#L12##e#d200��#v4000232#+200��#v4000234#+200��#v4000231#�һ�#z4000244#һ��(Ҫ����Ͻ�ż���Ķ�)#l\r\n\r\n"
		    text += "#L19##e#d#v4001084#�ɶһ�2000*#v4001128##l\r\n\r\n"
		    text += "#L20##e#d#v4000175#�ɶһ�2000*#v4001128##l\r\n\r\n"
			 text += "#L21##e#d#v4001083#�ɶһ�9999*#v4001128##l\r\n\r\n"
			  text += "#L22##e#d#v4001241#�ɶһ�8000*#v4001128##l\r\n\r\n"
			   text += "#L23##e#d#v4001242#�ɶһ�8000*#v4001128##l\r\n\r\n"
			//text += "#L13##e#d#v1382047#�ɶһ�25*#v4000245#+25*#v4000244#+10*#v4020009##4000175
			//text += "#L14##e#d#v1382045#�ɶһ�25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"4001083
			//text += "#L15##e#d#v1382046#�ɶһ�25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"
			//text += "#L16##e#d#v1382048#�ɶһ�25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"4001241
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
	} else if (selection == 19) {
			if (cm.getInventory(4).isFull(1)){
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4001084,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4001084##z4001084#");
				cm.dispose();
			} else{
				
				cm.gainItem(4001084, -1);//����
				cm.gainItem(4001128, 2000);//����Ʒ
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
	} else if (selection == 20) {
			if (cm.getInventory(4).isFull(1)){
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4000175,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4000175##z4000175#");
				cm.dispose();
			} else{
				
				cm.gainItem(4000175, -1);//����
				cm.gainItem(4001128, 2000);//����Ʒ
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
	} else if (selection == 21) {
			if (cm.getInventory(4).isFull(1)){
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4001083,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4001083##z4001083#");
				cm.dispose();
			} else{
				
				cm.gainItem(4001083, -1);//����
				cm.gainItem(4001128, 9999);//����Ʒ
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
	} else if (selection == 22) {
			if (cm.getInventory(4).isFull(1)){
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4001241,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4001241##z4001241#");
				cm.dispose();
			} else{
				
				cm.gainItem(4001241, -1);//����
				cm.gainItem(4001128, 8000);//����Ʒ
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
	} else if (selection == 23) {
			if (cm.getInventory(4).isFull(1)){
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4001242,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4001242##z4001242#");
				cm.dispose();
			} else{
				
				cm.gainItem(4001242, -1);//����
				cm.gainItem(4001128, 8000);//����Ʒ
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
	}
		} else if (selection == 2) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if(cm.getPlayer().getCSPoints(2) >= 100){//�жϵ���ȯ
				cm.gainD(-100);//����ȯ
				cm.gainItem(4000487, 10);//����Ʒ
				cm.sendOk("����100����ȯ�һ���10��#v4000487##z4000487#!");
				cm.dispose();
			} else if(cm.getPlayer().getCSPoints(1) >= 100){//�жϵ�ȯ
				cm.gainDJ(-100);//��ȯ
				cm.gainItem(4000487, 10);//����Ʒ
				cm.sendOk("����100��ȯ�һ���10��#v4000487##z4000487#!");
				cm.dispose();
			} else{
				cm.sendOk("��û�е�ȯ�����ȯ!");
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
			} else if (!cm.haveItem(4032398,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4032398##z4032398#");
				cm.dispose();
			} else if (cm.getMeso() < 2500000){//�ж϶��ٽ��
			    cm.sendOk("#b��Ľ��С��2500000Ԫ");
				cm.dispose();
			} else{
				cm.gainMeso(-2500000);//����Ʒ
				cm.gainItem(4032398, -1);//����Ʒ
				cm.gainItem(2340000, 1);//����Ʒ
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
			
			}
			} else if (selection == 88) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4032398,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4032398##z4032398#");
				cm.dispose();
			
			} else{
				
				cm.gainItem(4032398, -1);//����Ʒ
				cm.gainItem(4031179, 1);//����Ʒ
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
			} else if (!cm.haveItem(4000232,200)) {//�ж���Ʒ
			    cm.sendOk("#b��û��200��#v4000232##z4000232#");
				cm.dispose();
			} else if (!cm.haveItem(4000234,200)) {//�ж���Ʒ
			    cm.sendOk("#b��û��200��#v4000234##z4000234#");
				cm.dispose();
			} else if (!cm.haveItem(4000231,200)) {//�ж���Ʒ
			    cm.sendOk("#b��û��200��#v4000176##z4000176#");
				cm.dispose();
			} else{
				cm.gainItem(4000232, -200);//����Ʒ4000176
				cm.gainItem(4000234, -200);//����Ʒ4000176
				cm.gainItem(4000231, -200);//����Ʒ
				cm.gainItem(4000245, 1);//����Ʒ
				cm.sendOk("�һ��ɹ�!");
				cm.dispose();
			
		}
		} else if (selection == 12) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
				cm.dispose();
			} else if (!cm.haveItem(4000232,200)) {//�ж���Ʒ
			    cm.sendOk("#b��û��200��#v4000232##z4000232#");
				cm.dispose();
			} else if (!cm.haveItem(4000234,200)) {//�ж���Ʒ
			    cm.sendOk("#b��û��200��#v4000234##z4000234#");
				cm.dispose();
			} else if (!cm.haveItem(4000231,200)) {//�ж���Ʒ
			    cm.sendOk("#b��û��200��#v4000176##z4000176#");
				cm.dispose();
			} else{
				cm.gainItem(4000232, -200);//����Ʒ4000176
				cm.gainItem(4000234, -200);//����Ʒ4000176
				cm.gainItem(4000231, -200);//����Ʒ
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
var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
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
			text +="\t\t#e#d��ӭ��ȡ#r���߽���  #d����ʱ�䣺#r" + cm.getPlayer().getzxsj() + "����#k#n\r\n "
			// text +="#b���߽�������Ϊ.����50������Ҷ50��-����50���������ߵ�ף��1��-ǿ��3����ף��3��-��ɫ��Ҷ20�����ʼ���1��-����ţһ�š�����1000-����1�š�����1500-��ˮ��һ�š������2��\r\n"
			text +="#L1##r��ȡ���ù�Ӷ���ˣ�#v5030001# x1 �г���̯#l\r\n\r\n\r\n"//3	
            if(cm.getPlayer().getzxsj() >= 60 && cm.getPlayer().getBossLog("zxsj") == 0){
					text += "#L2##r"+��ɺ�+"����ʱ�䳬��60���ӣ�"+���+"#v2022003#*100��#v4001126#*50��#v5390002#*3��\r\n\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getzxsj() >= 60 && cm.getPlayer().getBossLog("zxsj") > 0){
					text += ""+��ɺ�+"#r����ʱ�䳬��60���ӣ�#l"+���+"#v2022003#*100��#v4001126#*50��#v5390002#*3��\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��60���ӣ�#l"+���ڽ�����+"#v2022003#*100��#v4001126#*50��#v5390002#*3��\r\n\r\n"//3
			}		
		    if(cm.getPlayer().getzxsj() >= 120 && cm.getPlayer().getBossLog("zxsj") == 1){
					text += "#L3##r"+��ɺ�+"����ʱ�䳬��120���ӣ�"+���+"#v2022000#*100��#v2022070#*1��\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getzxsj() >= 120 && cm.getPlayer().getBossLog("zxsj") > 1){
					text += ""+��ɺ�+"#r����ʱ�䳬��120���ӣ�#l"+���+"#v2022000#*100��#v2022070#*1��\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��120���ӣ�#l"+���ڽ�����+"#v2022000#*100��#v2022070#*1��\r\n\r\n"//3
			}
			if(cm.getPlayer().getzxsj() >= 180 && cm.getPlayer().getBossLog("zxsj") == 2){
					text += "#L4##r"+��ɺ�+"����ʱ�䳬��180���ӣ�"+���+"10W��� \r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getzxsj() >= 180 && cm.getPlayer().getBossLog("zxsj") > 2){
					text += ""+��ɺ�+"#r����ʱ�䳬��180���ӣ�#l"+���+"10W���\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��180���ӣ�#l"+���ڽ�����+"10W���\r\n\r\n"//3
			}
			if(cm.getPlayer().getzxsj() >= 240 && cm.getPlayer().getBossLog("zxsj") == 3){
					text += "#L7##r"+��ɺ�+"����ʱ�䳬��240���ӣ�"+���+"#v5211060#���������鿨2Сʱ��*1��\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getzxsj() >= 240 && cm.getPlayer().getBossLog("zxsj") > 3){
					text += ""+��ɺ�+"#r����ʱ�䳬��240���ӣ�#l"+���+"#v5211060#���������鿨2Сʱ��*1��\r\n\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��240���ӣ�#l"+���ڽ�����+"#v5211060#���������鿨2Сʱ��*1��\r\n\r\n\r\n"//3
			}
			if(cm.getPlayer().getzxsj() >= 300 && cm.getPlayer().getBossLog("zxsj") == 4){
					text += "#L6##r"+��ɺ�+"����ʱ�䳬��300���ӣ�"+���+"#v5040000#*2��#v5440000#*1000\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getzxsj() >= 300 && cm.getPlayer().getBossLog("zxsj") > 4){
					text += ""+��ɺ�+"#r����ʱ�䳬��300���ӣ�#l"+���+"#v5040000#*2��#v5440000#*1000\r\n\r\n"//3 
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��300���ӣ�#l"+���ڽ�����+"#v5040000#*2��#v5440000#*1000\r\n\r\n"//3
			}
			if(cm.getPlayer().getzxsj() >= 360 && cm.getPlayer().getBossLog("zxsj") == 5){
					text += "#L5##r"+��ɺ�+"����ʱ�䳬��360���ӣ�"+���+"#v5130000#*2��\r\n\r\n\r\n"//3"#v5130000#*2��\r\n\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() >= 360 && cm.getPlayer().getBossLog("zxsj") > 5){
					text += ""+��ɺ�+"#r����ʱ�䳬��360���ӣ�#l"+���+"#v5130000#*2��\r\n\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��360���ӣ�#l"+���ڽ�����+"#v5130000#*2��\r\n\r\n\r\n"//3
			}
            cm.sendSimple(text);
		} else if (selection == 0) {
			cm.sendOk("�����Ŭ��Ŷ��");
			cm.safeDispose();
        } else if (selection == 1) {
			if(cm.haveItem(5030001, 1)){
            cm.sendOk("���Ѿ���ȡ���ˡ��޷�������ȡ��");
            cm.dispose();
			}else if (cm.haveItem(5030000, 1)){
            cm.sendOk("���Ѿ���ȡ���ˡ��޷�������ȡ��");
            cm.dispose();
			}else{
			cm.gainItem(5030001, 1);//
			//cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ���ù�Ӷ���ˣ�");
            cm.dispose();
			}
			
        } else if (selection == 2) {
			cm.gainItem(2022003, 100);//������100��
			cm.gainItem(4001126, 50);//��Ҷ50��
			cm.gainItem(5390002,3);//����
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��60�������߽�����������100��. ��Ҷ50��������������3����");
            cm.dispose();
        } else if (selection == 3) {
			cm.gainItem(2022000, 100);//��Ȫˮ100��
			cm.gainItem(2022070, 1);//����ף��1��
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��120�������߽�������Ȫˮ100�� ����ף��1��.");
            cm.dispose();
        } else if (selection == 4) {
			cm.gainMeso(+100000);//���10W
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��180�������߽�����100000���");
            cm.dispose();
        } else if (selection == 5) {
			cm.gainItem(5130000, 2);//�����
			//cm.gainItem(5150040, 1);//�ʼ���1��
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��360�������߽����������*2.");
            cm.dispose();
        } else if (selection == 6) {
			cm.gainItem(5040000, 2);//����ʯ2��
			cm.gainD(1000)//����ȯ1000
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��300�������߽���������ʯ2��. ����ȯ1000��");
            cm.dispose();
        } else if (selection == 7) {
			cm.getPlayer().setBossLog('zxsj');
			var type = ii.getInventoryType(5211060); 
			var toDrop =ii.randomizeStats(ii.getEquipById2(5211060)).copy(); // ����һ��Equip��
			var temptime = (System.currentTimeMillis() + 1 * 2 * 60 * 60 * 1000); //ʱ���������Сʱ
			toDrop.setExpiration(temptime); 
			cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
			cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
			cm.sendOk("��ȡ�����ɹ�����Ƶ������Ч!");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��240�������߽��� �������飨2Сʱ����");
            cm.dispose();
		}
    }
}



//2017-30-31 �޸�38�������� --lul

importPackage(java.util);
importPackage(net.sf.sunms.client);
importPackage(net.sf.sunms.server);
importPackage(java.util);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools);
importPackage(Packages.tools.packet);
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
			text += "\t\t\t  #e#d��֮��ð�յ����߽���\r\n\r\n"
			text += "#e#d#k��������ʱ����#r" + cm.getPlayer().getzxsj() +" ����#k\r\n\r\n"
			if(cm.getPlayer().getzxsj() >= 60 && cm.getPlayer().getBossLog("zxsj") == 0){
					text += "#L2##r"+��ɺ�+"����ʱ�䳬��60���ӣ�"+���+"#v5074000#*10��.#l\r\n\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() >= 60 && cm.getPlayer().getBossLog("zxsj") > 0){
					text += ""+��ɺ�+"#r����ʱ�䳬��60���ӣ�#l"+���+"\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() < 60 && cm.getPlayer().getBossLog("zxsj") == 0){
					text += "#L1#"+���ڽ�������+"#r����ʱ�䳬��60���ӣ�#l"+���ڽ�����+"#v5074000#*10��\r\n\r\n"
			}else{
				text += ""+���ڽ�������+"#r����ʱ�䳬��60���ӣ�#l"+"#v5074000#*10��\r\n\r\n"
			}
			
			if(cm.getPlayer().getzxsj() >= 120 && cm.getPlayer().getBossLog("zxsj") == 1){
					text += "#L2##r"+��ɺ�+"����ʱ�䳬��120���ӣ�"+���+"#v5130000#*1��.#l\r\n\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() >= 120 && cm.getPlayer().getBossLog("zxsj") > 1){
					text += ""+��ɺ�+"#r����ʱ�䳬��120���ӣ�#l"+���+"\r\n\r\n"//3
				} else if(cm.getPlayer().getzxsj() < 120 && cm.getPlayer().getBossLog("zxsj") == 1){
					text += "#L1#"+���ڽ�������+"#r����ʱ�䳬��120���ӣ�#l"+���ڽ�����+"#v5130000#*1��\r\n\r\n"
			}else{
				text += ""+���ڽ�������+"#r����ʱ�䳬��120���ӣ�#l"+"#v5130000#*1��\r\n\r\n"
			}
			
			if(cm.getPlayer().getzxsj() >= 180 && cm.getPlayer().getBossLog("zxsj") == 2){
					text += "#L4##r"+��ɺ�+"����ʱ�䳬��180���ӣ�"+���+"#v5041000#*1.#l\r\n\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() >= 180 && cm.getPlayer().getBossLog("zxsj") > 2){
					text += ""+��ɺ�+"#r����ʱ�䳬��180���ӣ�#l"+���+"\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() < 180 && cm.getPlayer().getBossLog("zxsj") == 2){
					text += "#L1#"+���ڽ�������+"#r����ʱ�䳬��180���ӣ�#l"+���ڽ�����+"#v5041000#*1\r\n\r\n"
			}else{
				text += ""+���ڽ�������+"#r����ʱ�䳬��180���ӣ�#l"+"#v5041000#*1\r\n\r\n"
			}
			
			if(cm.getPlayer().getzxsj() >= 240 && cm.getPlayer().getBossLog("zxsj") == 3){
					text += "#L5##r"+��ɺ�+"����ʱ�䳬��240���ӣ�"+���+"#v5121015#*2#l\r\n\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() >= 240 && cm.getPlayer().getBossLog("zxsj") > 3){
					text += ""+��ɺ�+"#r����ʱ�䳬��240���ӣ�#l"+���+"\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() < 240 && cm.getPlayer().getBossLog("zxsj") == 3){
					text += "#L1#"+���ڽ�������+"#r����ʱ�䳬��240���ӣ�#l"+���ڽ�����+"#v5121015#*2\r\n\r\n"
			}else{
				text += ""+���ڽ�������+"#r����ʱ�䳬��240���ӣ�#l"+"#v5121015#x2\r\n\r\n"
			}
			
			if(cm.getPlayer().getzxsj() >= 300 && cm.getPlayer().getBossLog("zxsj") == 4){
					text += "#L6##r"+��ɺ�+"����ʱ�䳬��300���ӣ�"+���+"#v5076000#*1#l\r\n\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() >= 300 && cm.getPlayer().getBossLog("zxsj") > 4){
					text += ""+��ɺ�+"#r����ʱ�䳬��300���ӣ�#l"+���+"\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() < 300 && cm.getPlayer().getBossLog("zxsj") == 4){
					text += "#L1#"+���ڽ�������+"#r����ʱ�䳬��300���ӣ�#l"+���ڽ�����+"#v5076000#*1\r\n\r\n"
			}else{
				text += ""+���ڽ�������+"#r����ʱ�䳬��300���ӣ�#l"+"#v5076000#*1\r\n\r\n"
			}
			
			if(cm.getPlayer().getzxsj() >= 360 && cm.getPlayer().getBossLog("zxsj") == 5){
					text += "#L7##r"+��ɺ�+"����ʱ�䳬��360���ӣ�"+���+"���þ�x200��.#l\r\n\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() >= 360 && cm.getPlayer().getBossLog("zxsj") > 5){
					text += ""+��ɺ�+"#r����ʱ�䳬��360���ӣ�#l"+���+"\r\n\r\n"
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��360���ӣ�#l"+���ڽ�����+"���þ�*200��\r\n\r\n"
			}
            cm.sendSimple(text);
			
        }else if (selection == 1) {
			cm.sendOk("�����Ŭ��Ŷ��");
			cm.safeDispose();
			
        } else if (selection == 2) {
			cm.gainItem(5074000, 10, 1);//�߼�����
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��60�������߽������߼�����*10��.");
            cm.dispose();
        } else if (selection == 3) {
			cm.gainItem(5130000, 1, 1);//�����
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��120�������߽��� �����*1��.");
            cm.dispose();
        } else if (selection == 4) {
			cm.gainItem(5041000, 1, 1);//�߼�˲��ʯ
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��180�������߽������߼�˲��ʯ*1��");
            cm.dispose();
        } else if (selection == 5) {
			if (cm.getInventory(5).isFull(1)){
			cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷���ȡ.");
			cm.dispose();
		} else {
			cm.gainItem(5121015, 2);//ѩ����
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��240�������߽�����ѩ����*2��.");
            cm.dispose();
			}
        } else if (selection == 6) {
			if (cm.getInventory(5).isFull(1)){
			cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷���ȡ.");
			cm.dispose();
		} else {
			cm.gainItem(5076000, 1, 1);//��������
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��300�������߽�������������*1��.");
            cm.dispose();
			}
        } else if (selection == 7) {
			if (cm.getInventory(5).isFull(1)){
			cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷���ȡ.");
			cm.dispose();
		} else {
			cm.gainD(200);//���þ�
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��360�������߽��������þ�*200��.");
            cm.dispose();
		}}
    }
}



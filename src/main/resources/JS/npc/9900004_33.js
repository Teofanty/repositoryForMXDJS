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
            text += "                    #n#k#e#d��פ������\r\n\r\n#k��Ϸ���\r\n\r\n"
            text += "#L2##e#d��פ����!\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.dispose();
        } else if (selection == 2) {
			if(cm.getLevel() < 1){
			cm.sendOk("��ȼ�������1������!");
            cm.dispose();	
		} else if(cm.getPlayer().getOneTimeLog("0xianglian") > 0){
			cm.sendOk("���Ѿ���ȡ�����˱�������");
            cm.dispose();				
	    } else {
        cm.gainMeso(10000);
		cm.gainItem(5150040,2);
        
		cm.gainItem(3010623,1,1);
		cm.gainItem(1002562,1,1);
		cm.gainItem(1003854,1,1);
		cm.gainItem(5210004,1,1);
		cm.gainItem(5210002,1,1);
		cm.gainItem(5360014,1,1);
		cm.gainItem(1052081,1,1);
	    cm.gainItem(5030000,1,1);
		
		cm.getPlayer().setOneTimeLog("0xianglian");
		cm.worldMessage(6,"��ң�["+cm.getName()+"]��������ȡ����פ��������ӭ������֮��ð�յ�");
		cm.dispose();	
	}
	}
    }
}



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
           
            text += "#L2##e#d��>=10��������ȡ#v1302017##l\r\n\r\n"
			text += "#L2##e#d��>=10��������ȡ#v1142445##l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.dispose();
        } else if (selection == 2) {
			if(cm.getLevel() < 10){
			cm.sendOk("��ȼ�������10������!");
            cm.dispose();	
		} else if(cm.getPlayer().getOneTimeLog("10xianglian") > 0){
			cm.sendOk("���Ѿ���ȡ�����ˣ�");
            cm.dispose();				
	    } else {
        cm.gainItem(1302017, 1);
		cm.gainItem(1142445, 1);
		cm.getPlayer().setOneTimeLog("10xianglian");
		cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��10���ȼ�����,���һ��ϲ���ɣ�");
		cm.dispose();	
	}
	}
    }
}


